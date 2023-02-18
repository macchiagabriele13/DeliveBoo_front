<script>

import axios from 'axios';

import PlateCard from './PlateCard.vue';

export default {
    name: 'PlateList',
    components: {
        PlateCard
    },
    data() {
        return {
            restaurant: [],
            error: null,
            loading: true,
        }
    },
    methods: {
        getRestaurant(url) {
            axios
                .get(url)
                .then(response => {
                    // console.log(response.data.results);
                    this.restaurant = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = error.message;

                })
        },
        getImagePath(path) {
            // console.log(path);
            if (path) {
                return store.base_api_url + '/storage/' + path;
            }
            return '/img/Food-placeholder.jpg';
        }

    },
    mounted() {
        this.getRestaurant(store.base_api_url + '/api/restaurants/' + this.$route.params.slug);
    }
}
</script>

<template>
    <section class="vue-home pt-5">
        <div class="container">
            <div class=" text-center" v-if="loading">
                <div class="loading">
                    <img src="../../public/img/pacman.gif" alt="">
                </div>
                <h6>Caricamento...</h6>
            </div>
            <div v-else-if="restaurant.plates && !loading">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <PlateCard :plate="plate" v-for="plate in restaurant.plates"></PlateCard>
                </div>

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">

                </nav>

            </div>
            <div v-else>
                <p>Non ci sono piatti disponibili</p>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';
</style>