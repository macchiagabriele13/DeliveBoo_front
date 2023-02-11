<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import Cart from './components/Cart.vue'

export default {
    components: {
        AppNav,
        AppFooter,
        Cart,
    }
}
</script>

<template>
    <AppNav />
    <!-- <Cart /> -->
    <RouterView />
    <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
