import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import PlatesView from './views/PlatesView.vue'
import SinglePlateView from './views/SinglePlateView.vue'
import ContactsView from './views/ContactsView.vue'
import NotFoundView from './views/NotFoundView.vue'
import SingleRestaurantView from './views/SingleRestaurantView.vue'
import RestaurantsView from './views/RestaurantsView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/plates',
            name: 'plates',
            component: PlatesView
        },

        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },

        {
            path: '/plates/:id',
            name: 'single-plate',
            component: SinglePlateView
        },

        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundView
        },
        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantsView
        },

        {
            path: '/restaurants/:slug',
            name: 'single-restaurant',
            component: SingleRestaurantView
        },



    ]
})

export { router };
