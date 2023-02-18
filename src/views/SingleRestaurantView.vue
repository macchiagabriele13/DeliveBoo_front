<script>
import axios from 'axios';
import { store } from '../store.js';

import PlateList from '../components/PlateList.vue'

export default {
    name: 'SingleRestaurant',
    components: {
        PlateList,
    },
    data() {
        return {
            restaurant: []
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
        }
    },
    mounted() {
        // console.log(this.$route.params.slug)
        this.getRestaurant(store.base_api_url + '/api/restaurants/' + this.$route.params.slug);
    }
}  
</script>

<!-- banner -->
<template>
    <section id="banner_single_restaurant">
        <div class="container-fluid bg_orange">
            <div class="container">
                <h1 class="fs_custom text-white">{{ restaurant.company_name }}</h1>
                <div class="card bg_orange border-0 d-flex">
                    <div class="card-body restaurant_details d-flex justify-content-center flex-column">
                        <p class="card-text text-white">{{ restaurant.description }}</p>
                    </div>
                </div>
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

.container {
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 767px) {
    .container {
        flex-direction: column;

        h1 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
            text-align: center;
        }
    }


}
</style>