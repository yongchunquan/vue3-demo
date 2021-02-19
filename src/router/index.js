import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
          path: '/',
          redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            // 异步加在文件
            component: import('../pages/login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: import('../pages/home.vue')
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !isAuthenticated) {
//         next({ name: 'Login' })
//     } else {
//         next()
//     }
// })

// router.beforeResolve(async to => {
//     if (to.meta.requiresCamera) {
//         try {
//             await askForCameraPermission()
//         } catch (error) {
//             if (error instanceof NotAllowedError) {
//                 // ... handle the error and then cancel the navigation
//                 return false
//             } else {
//                 // unexpected error, cancel the navigation and pass the error to the global handler
//                 throw error
//             }
//         }
//     }
// })

export default router;