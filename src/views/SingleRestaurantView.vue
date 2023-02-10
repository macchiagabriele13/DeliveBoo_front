<script>
import PlateList from '../components/PlateList.vue'
export default {
    name: 'SingleRestaurant',
    components: {
        PlateList,
    }
}  
</script>

<template>
    <!-- banner -->
    <section id="banner_single_restaurant">
        <div class="container-fluid bg_orange">
            <div class="container d-flex align-items-center justify-content-center justify-content-around">
                <h1 class="fs_custom">Ristorante</h1>
                <img height="400" src="../../public/img/pac-man-contacts.png" alt="">
            </div>
        </div>
    </section>
    <section id="restaurant_plates">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card border-0 shadow-lg rounded-4 mt-4 mb-4" style="width: 18rem;">
                        <img src="../../public/img/giappo.jpg" class="card-img-top rounded-top p-4" alt="...">
                        <div class="card-body d-flex justify-content-center align-items-center flex-column mt-5">
                            <h4 class="text-title">Sushi</h4>
                            <p class="text-body">Uramaki roll</p>
                            <a name="" id="" class="btn btn-warning rounded-pill text-white padding_custom mb-2"
                                href="#" role="button">Add to
                                Cart</a>
                            <!-- <router-link :to="{ name: 'single-plate', params: { slug: plate.slug } }">Read
                    More</router-link> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

@import '../styles/_variables';


.bg_orange {
    background-color: $primary;
}

.padding_custom {
    padding: 1rem 2rem;
}

img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
}

img:hover {
    opacity: 0.3;
    background-color: $primary_soft;
}

.btn.btn:hover {
    background-color: $secondary;

}
</style>