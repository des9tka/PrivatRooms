import {createRouter, createWebHistory} from "vue-router";

import Home from "@/pages/Home.vue";
import Room from "@/pages/Room.vue";
import Rooms from "@/pages/Rooms.vue";
import RoomForm from "@/components/RoomForm.vue";
import Settings from "@/pages/Settings.vue";
import About from "@/pages/About.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/rooms',
        name: 'Rooms',
        component: Rooms
    },
    {
        path: '/room/:id',
        name: 'Room',
        component: Room
    },
    {
        path: '/room-form',
        name: 'RoomForm',
        component: RoomForm
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes: routes
})