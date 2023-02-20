<script>
import axios from 'axios';
import { store } from '../store.js';

import RestaurantCard from './RestaurantCard.vue';

export default {
    name: 'RestaurantList',
    components: {
        RestaurantCard
    },
    data() {
        return {
            store,
            restaurants: [],
            types: [],
            error: null,
            loading: true,
            showPagination: false
        }
    },
    methods: {
        getRestaurants(url) {
            axios
                .get(url)
                .then(response => {
                    // console.log(response.data.results);
                    this.restaurants = response.data.results;
                    this.loading = false;
                    this.showPagination = true;
                })
                .catch(error => {
                    console.error(error);
                    this.error = error.message;
                    this.loading = false;
                })
        },

        getTypes(url) {
            axios.get(url)
                .then(response => {
                    // console.log(response.data.results);
                    this.types = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                })
        },

        searchRestaurants() {
            if (store.selected.length !== 0) {
                const types = store.selected.join('+');
                // console.log(types);
                this.getRestaurantsFiltered(store.base_api_url + '/api/restaurants/filter/' + types);
            } else {
                this.getRestaurants(store.base_api_url + '/api/restaurants');
            }
        },

        getRestaurantsFiltered(url) {
            axios
                .get(url)
                .then(response => {
                    // console.log(response.data.results);
                    if (response.data.success) {
                        this.restaurants.data = response.data.results;
                        this.loading = false;
                        this.showPagination = false;
                    } else {
                        this.restaurants.data = [];
                        this.loading = false;
                    }
                })
                .catch(error => {
                    console.error(error);
                    this.error = error.message;
                })
        },

        toggleButton(id) {
            if (!store.selected.includes(id)) {
                store.selected.push(id);
                // console.log(store.selected);
            } else {
                // const del = element => element === id;
                const toDel = store.selected.indexOf(id);
                // console.log(toDel);
                store.selected.splice(toDel, 1);
                // console.log(store.selected);
            }
        },

        resetFilters() {
            store.selected = [];
            this.getRestaurants(store.base_api_url + '/api/restaurants');
        },

        getImagePath(path) {
            // console.log(path);
            if (path) {
                return store.base_api_url + '/storage/' + path;
            }
            return '/img/Food-placeholder.jpg';
        },

        prevPage(url) {
            // console.log(url);
            this.getRestaurants(url);
        },

        nextPage(url) {
            // console.log(url);
            this.getRestaurants(url);
        },

        toPage(page) {
            // console.log(store.base_api_url + '/api/restaurants?page=' + page);
            this.getRestaurants(store.base_api_url + '/api/restaurants?page=' + page);
        }

    },
    mounted() {
        // console.log(store.selected);
        this.getTypes(store.base_api_url + '/api/types');
        if (store.selected.length !== 0) {
            this.searchRestaurants();
        } else {
            this.getRestaurants(store.base_api_url + '/api/restaurants');
        }
    }
}
</script>

<template>
    <section class="vue-home pt-5">
        <div class="container">
            <div class="d-flex filters flex-md-nowrap flex-wrap gap-1 justify-content-lg-center">


                <div class="align-items-lg-center align-items-md-center d-lg-flex d-md-flex filter_button flex-lg-row flex-md-column justify-content-md-center p-2 rounded-pill"
                    :class="store.selected.includes(tipo.name) ? 'bg_success' : 'bg_orange'" v-for="tipo in types"
                    @click.preventDefault()="toggleButton(tipo.name)">
                    <img class="img-fluid " src="../../public/img/restaurant.png" alt="">
                    {{ tipo.name }}
                </div>

                <!-- <button class="btn btn-primary" @click.preventDefault()="searchRestaurants()">Cerca</button> -->
                <button class="cta btn_search">
                    <span class="hover-underline-animation" @click.preventDefault()="searchRestaurants()">Cerca
                    </span>
                    <svg viewBox="0 0 46 16" height="10" width="25" xmlns="http://www.w3.org/2000/svg"
                        id="arrow-horizontal">
                        <path transform="translate(30)"
                            d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10"
                            id="Path_10"></path>
                    </svg>
                </button>
            </div>

            <button class="cta btn_search_all w-100">
                <span class="hover-underline-animation" @click.preventDefault()="resetFilters()">
                    <img class="img-fluid" src="../../public/img/restaurant-icon.png" alt="">
                    Tutti i ristoranti
                </span>
                <svg viewBox="0 0 46 16" height="10" width="25" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                    <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                        data-name="Path 10" id="Path_10"></path>
                </svg>
            </button>
            <div class=" text-center" v-if="loading">
                <div class="loading">
                    <img src="../../public/img/pacman.gif" alt="">
                </div>
                <h6>Caricamento...</h6>
            </div>
            <div v-else-if="restaurants.data.length !== 0">
                <div class="g-4 row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 row-cols-xl-3">
                    <RestaurantCard :restaurant="restaurant" v-for="restaurant in restaurants.data" />
                </div>

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5" v-if="showPagination">
                    <ul class="pagination d-flex gap-1">
                        <li class="page-item">
                            <button class="page-link" :class="restaurants.prev_page_url ? '' : 'disabled'"
                                aria-label="Previous" @click="prevPage(restaurants.prev_page_url)">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        <li class="page-item active" aria-current="page" v-if="restaurants.last_page <= 3"
                            v-for="i in restaurants.last_page">
                            <button class="page-link" href="#" @click="toPage(i)">
                                {{ i }}
                            </button>
                        </li>

                        <li class="page-item active" aria-current="page" v-else v-for="i in 3">
                            <button class="page-link" href="#" @click="toPage(i)">
                                {{ i }}
                            </button>
                        </li>

                        <li class="page-item">
                            <button class="page-link" aria-label="Next" @click="nextPage(restaurants.next_page_url)"
                                :class="restaurants.next_page_url ? '' : 'disabled'">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div v-else>
                <p class="text-center">Non sono presenti ristoranti</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

@media (min-width: 769px) {
    .filter_button {
        img {
            margin-right: 5px !important;
        }
    }
}

@media (max-width: 425px) {
    .filters {
        justify-content: center;
    }
}




.container {
    .row {
        margin-bottom: 5rem;
    }
}


.restaurant {

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
}

.filters {
    margin-bottom: 3rem;

    .filter_button {
        cursor: pointer;
        width: 130px;
        text-align: center;
        transition: all 0.7s;

        img {
            width: 25px;

        }
    }
}

.bg_success {
    background-color: $secondary !important;
    box-shadow: 0 0 20px #6fc5ff50;
}

.bg_orange {
    background-color: $primary !important;
    box-shadow: 0 0 20px #dfc30d50;
}

.loading {
    height: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    img {
        width: 350px;
    }
}

.btn_search_all {
    margin-bottom: 3rem;
    border: none;

    img {
        width: 25px;
    }
}

.cta {
    border: none;
    background: none;
    border-radius: 25px;
}

.cta span {
    padding-bottom: 7px;
    letter-spacing: 4px;
    font-size: 14px;
    padding-right: 7.5px;
    padding-left: 7.5px;
    text-transform: uppercase;
}

.cta svg {
    transform: translateX(-8px);
    transition: all 0.3s ease;
}

.cta:hover svg {
    transform: translateX(0);
}

.cta:active svg {
    transform: scale(0.9);
}

.hover-underline-animation {
    position: relative;
    color: $dark;
    padding-bottom: 20px;
}

.hover-underline-animation:after {
    content: "";
    position: absolute;
    width: 90%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 5%;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.cta:hover .hover-underline-animation:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.pagination {
    .page-item {
        background-color: $primary;
        border-radius: 20px;


        .page-link {
            background-color: $primary;
            border: none;
            padding: 0.5rem 1rem;
        }
    }
}
</style>

