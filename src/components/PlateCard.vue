<script>
import { store } from '../store.js';

export default {
    name: 'PlateCard',
    props: {
        plate: Object
    },
    data() {
        return {
            store

        }
    },
    methods: {
        getImagePath(path) {
            // console.log(path);
            if (path) {
                return store.base_api_url + '/storage/' + path;
            }
            return '/img/Food-placeholder.jpg';
        },
    }

}
</script>

<template>
    <div class="col">
        <div class="card h-100 border-0 shadow-lg rounded-4">
            <img class="card-img-top rounded-top p-4" :src="getImagePath(plate.image)" alt="">
            <div class="card-body d-flex align-items-center flex-column justify-content-between text-center">
                <div class="card-info">
                    <h4 class="text-title">{{ plate.name }}</h4>
                    <p class="text-body">{{ plate.description }}</p>
                </div>
                <div class="card-action">
                    <h5>{{ plate.price.toFixed(2) + ' €' }}</h5>
                    <button name="" id="" class="btn btn-warning rounded-pill text-white padding_custom mb-2" role="button"
                        @click.preventDefault()="store.addToCart(plate)">Aggiungi al Carrello</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.bg_orange {
    background-color: $primary;
}

.text-title {
    font-family: $font_heading;
}

.card {

    img {
        display: block;
        width: 100%;
        height: 300px;
        transition: .5s ease;
        object-fit: contain;
    }

    transition: filter 200ms,
    transform 200ms linear;

    h5 {
        color: $primary;
        font-weight: 900;
    }


}


.btn.btn:hover {
    background-color: $secondary;

}

.padding_custom {
    padding: 1rem 2rem;
}

.fs_custom {
    font-size: 4rem;
}

.card-action {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.card:hover {
    transform: scale(1.05) translateZ(0);
}
</style>