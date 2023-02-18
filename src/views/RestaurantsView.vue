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
