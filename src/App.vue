<script>
import { store } from './store'

import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import Cart from './components/Cart.vue'

export default {
    components: {
        AppNav,
        AppFooter,
        Cart
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log(localStorage.getItem('plates'));
    }
}
</script>

<template>
    <AppNav />
    <RouterView />
    <AppFooter />

    <Cart v-if="store.cartOn" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
