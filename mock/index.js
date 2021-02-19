/**
 * @sort 1
 * @name 接口示例
 * 接口描述
 */
const { api, delay, mock, resp } = require('apite')

// JSON
api.get('/json', {
    msg: 'json'
})

/**
* @name 模拟数据
* 点击在线调试传参数请求看看
* @param {string} name 名称
* @param {number} [age=10] 年龄
* @param {boolean} [online=true] 是否在线
*/
api.post('/post', ctx => {
    return mock({
        id: '@id',
        number: '@int(5,9)',
        name: '@name',
        cname: '@cname',
        date: '@dateTime',
        reg: /\w{10}/
    })
})