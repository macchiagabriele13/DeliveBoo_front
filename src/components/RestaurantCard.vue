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
        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
            <img class="card-image rounded-top" :src="getImagePath(restaurant.cover_image)" alt="">
            <div class="card-body">
                <h4 class="text-title">{{ restaurant.title }}</h4>
                <p class="text-body">{{ restaurant.description }}</p>
                <router-link :to="{ name: 'single-restaurant', params: { slug: restaurant.slug } }">Read
                    More</router-link>
            </div>
            <div class="card-footer text-muted">
                <div class="type">
                    <strong>type: </strong>
                    <span v-if="restaurant.type">
                        {{ restaurant.type.name }}
                    </span>
                    <span v-else>Untyped</span>
                </div>
            </div>

        </div>
    </div>








</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.card {
    width: 190px;
    height: 254px;
    padding: .8em;
    background: #f5f5f5;
    position: relative;
    overflow: visible;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.card-image {
    background-color: #ffcaa6;
    height: 40%;
    width: 100%;
    border-radius: .5rem;
    transition: .3s ease;
}

.card-info {
    padding-top: 10%;
}

svg {
    width: 20px;
    height: 20px;
}

.card-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
    font-weight: 900;
    font-size: 1.2em;
    line-height: 1.5;
}

.text-body {
    font-size: .9em;
    padding-bottom: 10px;
}

/*Button*/
.card-button {
    border: 1px solid #252525;
    display: flex;
    padding: .3em;
    cursor: pointer;
    border-radius: 50px;
    transition: .3s ease-in-out;
}

/*Hover*/
.card:hover {
    box-shadow: 0px 5px 15px #ffcaa6;
}

.card-img:hover {
    transform: translateY(-5%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
}
</style>