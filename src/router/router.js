import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home.vue"
import User from "../components/User.vue"
import Login from "../components/Login.vue"
import Menu from "../components/Menu.vue";
import Data from "../components/Data.vue"


const routes = [
    {
        name: "Menu",
        path: '/menu',
        component: Menu,
        children: [
            {
                name: "Home",
                path: 'home',
                component: Home,
            },
            {
                name: "User",
                path: 'user',
                component: User,
            },
            {
                name: "cultivar",
                path: 'data/cultivar',
                component: Data,
            },
            {
                name: "loop",
                path: 'data/loop',
                component: Data,
            },
            {
                name: "rna",
                path: 'data/rna',
                component: Data,
            },
            {
                name: "rnaStructure",
                path: 'data/rnaStructure',
                component: Data,
            },
            {
                name: "software",
                path: 'data/software',
                component: Data,
            },
            {
                name: "species",
                path: 'data/species',
                component: Data,
            },
            {
                name: "tissue",
                path: 'data/tissue',
                component: Data,
            },
            {
                name: "tissueCultivar",
                path: 'data/tissueCultivar',
                component: Data,
            },
            {
                name: "chromosome",
                path: 'data/chromosome',
                component: Data,
            },
            {
                name: "compartment",
                path: 'data/compartment',
                component: Data,
            }
        ]
    },
    {
        name: "Login",
        path: "/",
        component: Login
    }
];

const router = createRouter({
    // hash模式
    history: createWebHashHistory(),
    // routes: routes
    routes,
});

export default router




