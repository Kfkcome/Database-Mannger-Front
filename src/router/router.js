import { createRouter,createWebHashHistory } from 'vue-router'
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
        children:[
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
                name: "Cds",
                path: 'data/cds',
                component: Data,
            },
            {
                name: "a1AHau",
                path: 'data/a1AHau',
                component: Data,
            },
            {
                name: "a1Hau",
                path: 'data/a1Hau',
                component: Data,
            },
            {
                name: "a2flltrChr",
                path: 'data/a2flltrChr',
                component: Data,
            },
            {
                name: "a2Hau",
                path: 'data/a2Hau',
                component: Data,
            },
            {
                name: "ad1Hau",
                path: 'data/ad1Hau',
                component: Data,
            },
            {
                name: "b1flltrChr",
                path: 'data/b1flltrChr',
                component: Data,
            },
            {
                name: "b1Hau",
                path: 'data/b1Hau',
                component: Data,
            },
            {
                name: "c1flltrChr",
                path: 'data/c1flltrChr',
                component: Data,
            },
            {
                name: "c1Hau",
                path: 'data/c1Hau',
                component: Data,
            },
            {
                name: "chromosome",
                path: 'data/chromosome',
                component: Data,
            },
            {
                name: "d1Hau",
                path: 'data/d1Hau',
                component: Data,
            },
            {
                name: "d3Hau",
                path: 'data/d3Hau',
                component: Data,
            },
            {
                name: "d5FlltrChr",
                path: 'data/d5FlltrChr',
                component: Data,
            },
            {
                name: "d5Hau",
                path: 'data/d5Hau',
                component: Data,
            },
            {
                name: "d10Hau",
                path: 'data/d10Hau',
                component: Data,
            },
            {
                name: "e1flltrChr",
                path: 'data/e1flltrChr',
                component: Data,
            },
            {
                name: "e1Hau",
                path: 'data/e1Hau',
                component: Data,
            },
            {
                name: "f1flltrChr",
                path: 'data/f1flltrChr',
                component: Data,
            },
            {
                name: "flltr8genomes5ltrClusterFamily",
                path: 'data/flltr8genomes5ltrClusterFamily',
                component: Data,
            },
            {
                name: "g1FlltrChr",
                path: 'data/g1FlltrChr',
                component: Data,
            },
            {
                name: "g1Hau",
                path: 'data/g1Hau',
                component: Data,
            },
            {
                name: "g2Hau",
                path: 'data/g2Hau',
                component: Data,
            },
            {
                name: "gene",
                path: 'data/gene',
                component: Data,
            },
            {
                name: "geneExp",
                path: 'data/geneExp',
                component: Data,
            },
            {
                name: "genePavA1",
                path: 'data/genePavA1',
                component: Data,
            },
            {
                name: "genePavA2",
                path: 'data/genePavA2',
                component: Data,
            },
            {
                name: "genePavGar",
                path: 'data/genePavGar',
                component: Data,
            },
            {
                name: "genePavJ1",
                path: 'data/genePavJ1',
                component: Data,
            },
            {
                name: "genePavJ2",
                path: 'data/genePavJ2',
                component: Data,
            },
            {
                name: "genePavJ3Plus",
                path: 'data/genePavJ3Plus',
                component: Data,
            },
            {
                name: "genePavJ12",
                path: 'data/genePavJ12',
                component: Data,
            },
            {
                name: "genePavJ13",
                path: 'data/genePavJ13',
                component: Data,
            },
            {
                name: "genome",
                path: 'data/genome',
                component: Data,
            },
            {
                name: "k2FlltrChr",
                path: 'data/k2FlltrChr',
                component: Data,
            },
            {
                name: "k2Hau",
                path: 'data/k2Hau',
                component: Data,
            },
            {
                name: "orthogroups5genomes",
                path: 'data/orthogroups5genomes',
                component: Data,
            },
            {
                name: "orthogroups5genomesPlus",
                path: 'data/orthogroups5genomesPlus',
                component: Data,
            },
            {
                name: "protein",
                path: 'data/protein',
                component: Data,
            },



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




