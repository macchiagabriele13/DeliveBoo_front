<script>





import RestaurantList from '../components/RestaurantList.vue';

export default {
    name: 'Restaurants',
    components: {
        RestaurantList
    }
}  
</script>

<template>
    <div class="title text-center py-5 mt-3 text_orange">
        <h1>Di cosa hai voglia oggi?</h1>
    </div>
<RestaurantList></RestaurantList>
</template>



<style lang="scss" scoped>
@use '../styles/general.scss';

@import '../styles/_variables';
@import url('https://fonts.cdnfonts.com/css/pac-font');

h1 {
    font-size: 4.5rem;
}


@media screen and (min-width: 320px) {
    h1 {
        font-size: 2.5rem;
    }

}


@media screen and (min-width: 767px) {
    h1 {
        font-size: 3.5rem;
    }

}
</style>