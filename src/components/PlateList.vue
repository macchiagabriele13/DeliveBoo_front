<script>
import axios from 'axios'
import PlateCard from './PlateCard.vue'

export default {
    components: {

        PlateCard,
    },
    name: 'PlateList',
    data() {
        return {
            restaurant: [],
            base_api_url: 'http://localhost:8000',
            error: null,
            loading: true,
        }
    },
    methods: {
        getRestaurant(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.restaurant = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message

                })
        },
        getImagePath(path) {
            // console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/Food-placeholder.jpg'
        },
        prevPage(url) {
            console.log(url)
            this.getPlate(url)
        },
        nextPage(url) {
            console.log(url)
            this.getPlate(url)
        }

    },
    mounted() {
        this.getRestaurant(this.base_api_url + '/api/restaurants/' + this.$route.params.slug);
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
                <div class="row row-cols-1 row-cols-sm-3 g-4">



                    <PlateCard :plate="plate" v-for="plate in restaurant.plates"></PlateCard>



                </div>

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination">
                        <li class="page-item" v-if="restaurant.prev_page_url"
                            @click="prevPage(restaurant.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            restaurant.current_page
                        }}</a></li>


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