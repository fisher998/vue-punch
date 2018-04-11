import { request, config } from 'utils';

const {api} = config;
const {punchInfo} = api;

// 进入开始打卡页面
export function getPunchInfo (params) {
    return request({
        method: 'get',
        url: punchInfo,
        data: params
    });
}
