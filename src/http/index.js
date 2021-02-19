/**
 * 配置ajax方法，统一拦截处理错误信息
 * 使用asios http://www.axios-js.com/zh-cn/docs/index.html#axios-get-url-config
 */
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


/**
 * post请求方法
 */
async function post(url, params) {
    return axios({
        method: 'post',
        url: url,
        data: params
    });
}

/**
 * get请求方法
 */
async function get(url) {
    return axios({
        method: 'get',
        url: url,
        data: params
    });
}

/**
 * ajax请求方法
 */
async function ajax(params) {
    var opts = {
        method: 'get',
        url: url,
        data: params
    };
    return axios(Object.assign(opts, params));
}

/**
 * 公共处理请求日志的方法
 * @param {object} logs 
 */
function handlerLog(logs) {
    console.info(JSON.stringify(logs));
}

/**
 * 处理数据的公共方法
 * @param {object}} data 
 */
function handlerData(data) {
    return data;
}

export default {
    post: post,
    get: get,
    ajax: ajax,
}