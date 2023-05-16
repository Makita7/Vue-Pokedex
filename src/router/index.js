import { createRouter, createWebHistory } from "vue-router";
import PokemonPage from '../pages/PokemonPage.vue';

/* add nested routes with dynamic routing to use only one component to show the details */

/* page sectors: pokemon + evolution + encounters + location + moves , berries, contest + berries, machine TMs */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Pokemon',
            path: '/',
            component: PokemonPage,
        },
        {
            name: 'Berries',
            path: '/berries',
            component: () => import( /* webpackChunkName: "berries" */ "../pages/BerriesPage.vue"),
        },
        {
            name: 'Contest',
            path: '/contest',
            component: () => import( /* webpackChunkName: "berries" */ "../pages/ContestPage.vue"),
        },
        {
            name: 'TM Machines',
            path: '/tm_machines',
            component: () => import( /* webpackChunkName: "tm_machines" */ "../pages/MachinePages.vue"),
        },
    ]
})

export default router;