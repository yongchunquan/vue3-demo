import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
import { viteExt } from 'apite';

console.log(`Current directory: ${process.cwd()}`);
// 打印 process.argv
process.argv.forEach((val, index) => {
    console.log(`process.argv->>>${index}: ${val}`);
});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    envDir: './configs',
    // 配置代理服务器
    server: {
        proxy: {
            // string shorthand
            '/foo': 'http://localhost:4567/foo',
            // with options
            '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // with RegEx
            '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
            }
        }
    },
    // https://github.com/wangxing218/apite
    configureServer: [viteExt({ 
        // api所在目录，相对根目录或绝对路径，默认为 api 目录
        dir: 'mock',
        // 请求地址前辍， 命令行模式默认为空，插件默认为 '/api'
        // prefix: '',
    })],
    build: {
        rollupOptions: {
            // 多页面配置
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'nested/index.html')
            }
        }
    },
    // root: './nested', // 指定入口文件目录
})
