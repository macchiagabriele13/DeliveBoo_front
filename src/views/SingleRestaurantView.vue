<script>
import PlateList from '../components/PlateList.vue'
export default {
    name: 'SingleRestaurant',
    components: {
        PlateList,
    }
}  
</script>

<template>
    <!-- banner -->
    <section id="banner_single_restaurant">
        <div class="container-fluid bg_orange">
            <div class="container d-flex align-items-center justify-content-center justify-content-around">
                <h1 class="fs_custom">Ristorante</h1>
                <img height="400" src="../../public/img/pac-man-contacts.png" alt="">
            </div>
        </div>
    </section>
    <PlateList />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

@import '../styles/_variables';


.bg_orange {
    background-color: $primary;
}

.fs_custom {
    font-size: 4rem;
}
</style>