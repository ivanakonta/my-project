import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '../components/HomePage'
import TaskShow from "../components/TaskShow"
import EditStudent from "../components/EditStudent.vue"
//import HomePage from '../components/HomePage.vue';
const routes = [
    {
        path: "/",
        component: TaskShow,
    },
    {
        path: "/dodaj-studenta",
        component: HomePage
    },
    {
        path: '/students/:id/edit', // Define the edit route
        component: EditStudent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;