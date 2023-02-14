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
            base_api_url: 'http://localhost:8000',
            restaurants: [],
            types: [],
            selected: [],
            error: null,
            loading: true,
        }
    },
    methods: {
        getRestaurants(url) {
            axios
                .get(url)
                .then(response => {
                    // console.log(response.data.results);
                    this.restaurants = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
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
            if (this.selected.length !== 0) {
                const types = this.selected.join('+');
                // console.log(types);
                this.getRestaurantsFiltered(this.base_api_url + '/api/restaurants/filter/' + types);
            } else {
                this.getRestaurants(this.base_api_url + '/api/restaurants');
            }
        },
        getRestaurantsFiltered(url) {
            axios
                .get(url)
                .then(response => {
                    if (response.data.success) {
                        // console.log(response.data.results);
                        this.restaurants.data = response.data.results;
                        this.loading = false
                    } else {
                        this.restaurants.data = [];
                    }
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message

                })
        },

        toggleButton(id) {
            if (!this.selected.includes(id)) {
                this.selected.push(id);
                // console.log(this.selected);
            } else {
                // const del = element => element === id
                const toDel = this.selected.indexOf(id)
                // console.log(toDel);
                this.selected.splice(toDel, 1)
                // console.log(this.selected);
            }
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
        this.getRestaurants(this.base_api_url + '/api/restaurants');
        this.getTypes(this.base_api_url + '/api/types');
    }
}
</script>

<template>
    <section class="vue-home pt-5">

        <div class="container">
            <div v-if="restaurants && !loading">
                <div class="d-flex filters flex-md-nowrap flex-wrap gap-1 justify-content-lg-center">
                    <div class="align-items-lg-center align-items-md-center d-lg-flex d-md-flex filter_button flex-lg-row flex-md-column justify-content-md-center p-2 rounded-pill"
                        :class="selected.includes(tipo.name) ? 'bg_success' : 'bg_orange'" v-for="tipo in types"
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
                                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </div>

                <div class="g-4 row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-3 row-cols-xl-3">



                    <RestaurantCard :restaurant="restaurant" v-for="restaurant in restaurants.data">
                    </RestaurantCard>



                </div>
                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination">
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
            <div class=" text-center" v-else-if="loading">
                <div class="loading">
                    <img src="../../public/img/pacman.gif" alt="">
                </div>
                <h6>Loading...</h6>
            </div>
            <div v-else>
                <p>Non sono presenti ristoranti</p>
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







.restaurant {

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
}

.filters {
    margin-bottom: 5rem;

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

.cta {
    border: 1px solid #f5a6063d;
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
    width: 80%;
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

