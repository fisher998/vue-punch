import request from './request';
import config from './config';

// 判断参数是否是其中之一
export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}

/* istanbul ignore next */
export function hasClass (el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
export function addClass (el, cls) {
    if (!el) return;
    let curClass = el.className;
    const classes = (cls || '').split(' ');

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
export function removeClass (el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ' ' + el.className + ' ';

    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

/* istanbul ignore next */
const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export function getNowTime (dateTime) {
    var source = new Date(dateTime);
    // var yy = source.getFullYear().toString();
    // var mm = source.getMonth() + 1;
    // mm = mm < 10 ? ('0' + mm.toString()) : mm.toString();
    // var dd = source.getDate();
    // dd = dd < 10 ? ('0' + dd.toString()) : dd.toString();
    var hh = source.getHours();
    hh = hh < 10 ? ('0' + hh.toString()) : hh.toString();
    var MM = source.getMinutes();
    MM = MM < 10 ? ('0' + MM.toString()) : MM.toString();
    var ss = source.getSeconds();
    ss = ss < 10 ? ('0' + ss.toString()) : ss.toString();
    // var aa = yy + '-' + mm + '-' + dd + ' ' + hh + ':' + MM + ':' + ss;
    var aa = hh + ':' + MM + ':' + ss;
    return aa;
}

export {request, config};
