<script>


export default {
    name: 'PlateCard',
    props: {
        plate: Object
    },
    data() {
        return {

            base_api_url: 'http://localhost:8000',

        }
    },
    methods: {
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/Food-placeholder.jpg'
        },
    }

}

</script>

<template>

    <div class="col">
        <div class="card border-0 shadow-lg rounded-4 mt-4 mb-4 w-100 h-100" style="width: 21rem;">
            <img class="card-img-top rounded-top p-4" :src="getImagePath(plate.image)" alt="">
            <div class="card-body d-flex justify-content-center align-items-center flex-column mt-5">
                <h4 class="text-title">{{ plate.name }}</h4>
                <p class="text-body">{{ plate.description }}</p>
                <h6>{{ plate.price + ' €' }}</h6>
                <a name="" id="" class="btn btn-warning rounded-pill text-white padding_custom mb-2" href="#"
                    role="button">Add to
                    Cart</a>
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
</style>