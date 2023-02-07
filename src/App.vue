<script>
import AppNav from './components/AppNav.vue'

export default {
    components: {
        AppNav,
    }
}
</script>

<template>
    <AppNav />
    <RouterView />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
