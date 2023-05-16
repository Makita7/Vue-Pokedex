import { createRouter, createWebHistory } from "vue-router";
import PokemonPage from '../pages/PokemonPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Pokemon',
            path: '/',
            component: PokemonPage,
        },
        // {
        //     name: 'Tip Calculator',
        //     path: '/tip_calculator',
        //     component: () => import( /* webpackChunkName: "tip calculator" */ "../pages/TipCalculatorPage.vue"),
        // },
    ]
})

export default router;