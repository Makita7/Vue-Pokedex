import { createRouter, createWebHistory } from "vue-router";
import StartPage from '../pages/StartPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Start',
            path: '/',
            component: StartPage,
        },
        // {
        //     name: 'Tip Calculator',
        //     path: '/tip_calculator',
        //     component: () => import( /* webpackChunkName: "tip calculator" */ "../pages/TipCalculatorPage.vue"),
        // },
    ]
})

export default router;