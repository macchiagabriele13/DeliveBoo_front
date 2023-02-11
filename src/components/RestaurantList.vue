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
                <div class="d-flex gap-2">
                    <div class="filter_button p-2 rounded-2"
                        :class="selected.includes(tipo.name) ? 'bg-success' : 'bg-warning'" v-for="tipo in types"
                        @click.preventDefault()="toggleButton(tipo.name)">
                        {{ tipo.name }}
                    </div>

                    <button class="btn btn-primary" @click.preventDefault()="searchRestaurants()">Cerca</button>
                </div>

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

.filter_button {
    cursor: pointer;
}
</style>

