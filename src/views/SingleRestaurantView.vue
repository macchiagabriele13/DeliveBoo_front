<script>
import axios from 'axios'
import PlateList from '../components/PlateList.vue'
export default {
    name: 'SingleRestaurant',
    components: {
        PlateList,
    },
    data() {
        return {
            restaurant: [],
            base_api_url: 'http://localhost:8000',
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
    },
    mounted() {
        console.log(this.$route.params.slug)
        this.getRestaurant(this.base_api_url + '/api/restaurants/' + this.$route.params.slug);
    }
}  
</script>

<template>
    <!-- banner -->
    <section id="banner_single_restaurant">
        <div class="container-fluid bg_orange">
            <div class="container d-flex align-items-center justify-content-center justify-content-around">
                <h1 class="fs_custom">{{ restaurant.company_name }}</h1>
                <div class="card bg_orange border-0 d-flex" style="height: 20rem; width: 40rem;">
                    <div class="card-body restaurant_details d-flex justify-content-center flex-column">
                        <p class="card-text fs-3">{{ restaurant.description }}</p>
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
</style>