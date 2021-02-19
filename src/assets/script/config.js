/**
 * 公共配置文件
 * 1、打包：
 *    npm run build 使用生产url配置 debug=false
 *    npm run build-dev 使用开发url配置 debug=true
 *    npm run build-test 使用测试url配置 debug=true
 *    npm run build-prod 使用生产url配置 debug=true
 * 
 * 2、调试：
 *    npm run dev 使用开发url配置 debug=true
 *    npm run test 使用测试url配置 debug=true
 *    npm run prod 使用生产url配置 debug=true
 */

//   {"BASE_URL":"/","MODE":"development","DEV":true,"PROD":false}
console.info(JSON.stringify(import.meta.env));
console.info(JSON.stringify(process.env));

var env = import.meta.env;
let debug = env.VITE_DEBUG && env.VITE_DEBUG == 'true';

export default {
    debug: debug,
    baseUrl: env.VITE_BASE_URL,
}