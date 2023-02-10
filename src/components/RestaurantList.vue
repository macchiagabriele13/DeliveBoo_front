<script>
import axios from 'axios'
import RestaurantCard from './RestaurantCard.vue'

export default {
    components: {

        RestaurantCard,
    },
    name: 'RestaurantList',
    data() {
        return {
            restaurants: [],
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
                    this.restaurants = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message

                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/Food-placeholder.jpg'
        },
        prevPage(url) {
            console.log(url)
            this.getRestaurant(url)
        },
        nextPage(url) {
            console.log(url)
            this.getRestaurant(url)
        }

    },
    mounted() {
        this.getRestaurant(this.base_api_url + '/api/restaurants');
    }
}
</script>

<template>
    <section class="vue-home pt-5">

        <div class="container">
            <div v-if="restaurants && !loading">
                <div class="row row-cols-1 row-cols-sm-3 g-4">



                    <RestaurantCard :restaurant="restaurant" v-for="restaurant in restaurants.data">
                    </RestaurantCard>



                </div>
                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="restaurants.prev_page_url"
                            @click="prevPage(restaurants.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            restaurants.current_page
                        }}</a></li>

                        <li class="page-item" v-if="restaurants.next_page_url"
                            @click="nextPage(restaurants.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div v-else>
                <p> No resturants here </p>
            </div>
        </div>
    </section>





</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.restaurant {

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
}
</style>

