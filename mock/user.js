/**
 * @sort 1
 * @name 接口示例
 * 接口描述
 */
const { api, delay, mock, resp } = require('apite')

// JSON
api.get('/login', {
    msg: 'login'
})