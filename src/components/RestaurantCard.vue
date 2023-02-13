<script>


export default {
    name: 'RestaurantCard',
    props: {
        restaurant: Object
    },
    data() {
        return {

            base_api_url: 'http://localhost:8000',

        }
    },
    methods: {
        getImagePath(path) {
            // console.log(path);
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
        <div class="container">
            <div class="card">
                <div class="imgBx">
                    <img class="img-fluid" v-if="restaurant.image" :src="getImagePath(restaurant.image)" alt="">
                    <img class="img-fluid" v-else src="https://via.placeholder.com/600x300.png?text=Image" alt="">
                </div>
                <div class="contentBx my-3">
                    <h2><strong>{{ restaurant.company_name }}</strong></h2>
                    <div class="size my-3">
                        <h3>{{ restaurant.description }}</h3>
                    </div>
                    <div class="color mb-4">
                        <h3 class="m-0">Tipologia :</h3>
                        <span v-for="tipo in restaurant.types">{{ tipo.name }}</span>
                    </div>
                    <router-link class="btn btn_orange"
                        :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">Read More</router-link>
                </div>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/variables';

.container .card {
    position: relative;
    width: 320px;
    height: 450px;
    background: $light;
    border-radius: 20px;
    overflow: hidden;
}

.container .card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $primary;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
}

.container .card:hover:before {
    clip-path: circle(300px at 80% -20%);
}

.container .card:after {
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: $primary_soft;
}

.container .card .imgBx {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10000;
    width: 100%;
    height: 220px;
    transition: 0.5s;
}

.container .card:hover .imgBx {
    top: 0%;
    transform: translateY(0%);

}

.container .card .imgBx img {
    position: absolute;
    top: 0;
    left: 20%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}

.container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
}

.container .card:hover .contentBx {
    height: 210px;
}

.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: $primary;
    margin: 0;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
}

.container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
}

.container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: $dark;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}

.container .card .contentBx .size span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    color: #111;
    border-radius: 4px;
    cursor: pointer;
}

// .container .card .contentBx .size span:hover {
//     background: $primary_soft;
// }

.container .card .contentBx .color span {
    width: 90px;
    height: 20px;
    background: $primary_soft;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: 0.75s;

}
</style>