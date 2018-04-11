import { request } from 'utils';

// 获取文章详情
export function getTest (params) {
    return request({
        method: 'get',
        url: '/orgs/octokit/repos',
        data: params
    });
}
