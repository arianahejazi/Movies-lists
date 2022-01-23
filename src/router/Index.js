import { createRouter , createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import SinglePostPage from '../views/SinglePostPage.vue'


const routes = [
    { path : "/" , component : HomePage },
    { path : "/posts/:post(\\d+)"  , component : SinglePostPage },
]

const router = createRouter({
    history : createWebHistory() ,
    routes,
})


export default router;