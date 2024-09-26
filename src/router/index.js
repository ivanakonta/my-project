import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../components/HomePage'
import TaskShow from "../components/TaskShow"

//import HomePage from '../components/HomePage.vue';
const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/taskshow",
        component: TaskShow
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;