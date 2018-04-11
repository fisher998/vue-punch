<template>
    <table :class="classes">
        <tbody>
            <tr>
                <td class="caption" v-for="(day, index) in weekDays" :key="index">{{day}}</td>
            </tr>
            <tr v-for="(row, index) in rows" :key="index">
                <td v-for="(cell, index) in row"
                    @click="handleCellClick(cell, index)"
                    :class="[`cell-${cell.type}`, 'cell-common']"
                    :key="index">
                    <span :class="[`text-${cell.type}`, `text-status-${cell.status}`, 'text-common']">{{cell.text}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { getFirstDayOfMonth, getDayCountOfMonth, getStartDateOfMonth, nextDate } from './util';
import {oneOf, addClass} from 'utils';

const clearHours = function (time) {
    const cloneDate = new Date(time);
    cloneDate.setHours(0, 0, 0, 0);
    return cloneDate.getTime();
};

const prefixCls = 'pui-calendar';

export default {
    name: 'Calendar',
    props: {
        firstDayOfWeek: {
            type: Number,
            default: 1,
            validator (value) {
                return oneOf(value, [1, 2, 3, 4, 5, 6, 7]);
            }
        }
    },
    data () {
        return {
            date: new Date(),
            tableRows: [ [], [], [], [], [], [] ],
            disabledDate: {},
            prevActiveCell: {
                row: 0,
                column: 0,
                type: ''
            }
        };
    },
    computed: {
        classes () {
            return [
                `${prefixCls}`
            ];
        },
        weekDays () {
            let day = ['一', '二', '三', '四', '五', '六', '日'];
            return day.concat(day.splice(0, this.firstDayOfWeek - 1));
        },
        offsetDay () {
            const week = this.firstDayOfWeek;
            // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
            return week > 3 ? 7 - week : -week;
        },
        year () {
            return this.date.getFullYear();
        },
        month () {
            return this.date.getMonth();
        },
        startDate () {
            return getStartDateOfMonth(this.year, this.month); // 日历表开始日期
        },
        rows () {
            const date = new Date(this.year, this.month, 1);
            let day = getFirstDayOfMonth(date); // 当月第一天是星期几
            const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth());
            const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1));
            day = (day === 0 ? 7 : day); // 0表示星期日，6表示星期六
            const offset = this.offsetDay;
            const rows = this.tableRows;
            let count = 1;
            // let firstDayPosition;
            const startDate = this.startDate; // 开始日期
            const disabledDate = this.disabledDate;
            const now = clearHours(new Date());
            for (let i = 0; i < 6; i++) {
                const row = rows[i];
                for (let j = 0; j < 7; j++) {
                    let cell = row[j];
                    if (!cell) {
                        // status: 0 默认 1 缺卡 2 缺勤 3 出勤
                        cell = { row: i, column: j, type: 'normal', status: 0, inRange: false, start: false, end: false };
                    }
                    cell.type = 'normal';
                    // isToday
                    const index = i * 7 + j;
                    const time =  nextDate(startDate, index - offset).getTime();
                    const isToday = time === now;
                    if (isToday) {
                        cell.type = 'today';
                    }
                    if (i >= 0 && i <= 1) {
                        if (j + i * 7 >= (day + offset)) {
                            cell.text = count++;
                            if (count === 2) {
                                // firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
                            cell.type = 'prev-month';
                        }
                    } else {
                        if (count <= dateCountOfMonth) {
                            cell.text = count++;
                            if (count === 2) {
                                // firstDayPosition = i * 7 + j;
                            }
                        } else {
                            cell.text = count++ - dateCountOfMonth;
                            cell.type = 'next-month';
                        }
                    }
                    cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));
                    this.$set(row, j, cell);
                }
            }
            // rows.firstDayPosition = firstDayPosition;
            return rows;
        }
    },
    methods: {
        handleCellClick (cell) {
            if (this.prevActiveCell.type) {
                this.rows[this.prevActiveCell.row][this.prevActiveCell.column].type = this.prevActiveCell.type;
            }
            this.prevActiveCell.row = cell.row;
            this.prevActiveCell.column = cell.column;
            this.prevActiveCell.type = cell.type;
            this.rows[cell.row][cell.column].type = 'active';
            // if (event.target.nodeName === 'SPAN') {
            //     addClass(event.target, 'text-active');
            // } else {
            //     console.log(event.target.parentNode);
            //     addClass(event.target.childNodes[0], 'text-active');
            // }
            this.$emit('click', event);
        }
    }
};
</script>

<style lang="less" scoped>
@import "~styles/variable";
@import "~styles/mixin";
.pui-calendar {
    width: 100%;
    background: #faf9f9;
    .caption {
        font-size: 10px;
        color: #666;
    }
    td {
        padding: 10px 0;
        cursor: pointer;
        text-align: center;
    }
    .cell-prev-month, .cell-next-month {
        visibility: hidden;
    }
    .cell-common {
    }
    .cell-normal {
    }
    .cell-today {
    }
    .text-common {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-radius: 50%;
    }
    .text-today {
        background: @success-color;
        color: #fff;
    }
    .text-active {
        background: @primary-color;
        color: #fff;
    }
    .text-status-1 {
        &::after {
            .dot(@error-color);
        }
    }
    .text-status-2 {
        &::after {
            .dot(@primary-color);
        }
    }
    .text-status-3 {
        &::after {
            .dot(@success-color);
        }
    }
}
</style>
