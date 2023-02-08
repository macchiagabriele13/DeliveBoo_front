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
    <div class="container my-4">
        <div class="row restaurants_list">
            <div class="banner">
                <div class="container-fluid">
                    <img src="../../public/" alt="">
                </div>
            </div>
            <div class="col-md-6 col-lg-12 restaurant">
                <div class="card">
                    <img class="img-fluid" src="../../public/img/MCDONALDS-CORPORATIVO-PORTADA-PARTE-2-1920x1080.jpeg"
                        alt="">
                    <div class="card-body">
                        <div class="title text-center">
                            <h4 class="">Restaurant Name</h4>
                            <div class="single-project mt-3">
                                <!-- <router-link :to="{ name: 'single-restaurant' }" class="text-decoration-none link">Read
                                    More</router-link> -->
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 col-lg-12 restaurant">
                <div class="card">
                    <img class="img-fluid" src="../../public/img/giappo.jpg" alt="">
                    <div class="card-body">
                        <div class="title text-center">
                            <h4 class="">Restaurant Name</h4>
                            <div class="single-project mt-3">
                                <!-- <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                        class="text-decoration-none link">Read
                        More</router-link> -->
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-12 restaurant">
                <div class="card">
                    <img class="img-fluid" src="../../public/img/giappo.jpg" alt="">
                    <div class="card-body">
                        <div class="title text-center">
                            <h4 class="">Restaurant Name</h4>
                            <div class="single-project mt-3">
                                <!-- <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                        class="text-decoration-none link">Read
                        More</router-link> -->
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- <section class="vue-home pt-5">
        <div class="container">
            <div v-if="restaurants && !loading">
                <div class="row row-cols-1 row-cols-sm-3 g-4">



                    <RestaurantCard :restaurant="restaurant" v-for="restaurant in restaurants.data"></RestaurantCard>



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
    </section> -->





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

.card {
    .card-body {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        color: $light;

        .title {
            max-width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            a {
                text-decoration: none;
                color: $light;
            }
        }
    }

    &:hover .card-body {
        display: block;
        background-color: rgba(0, 0, 0, 0.731);
    }
}
</style>

