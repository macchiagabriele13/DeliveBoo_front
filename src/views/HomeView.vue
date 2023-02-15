<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'HomeView',
    data() {
        return {
            types: [],
            store
        }
    },
    methods: {
        setSelected(type) {
            store.selected = [];
            store.selected.push(type);
        }
    },
    mounted() {
        axios.get(store.base_api_url + '/api/types')
            .then(response => {
                // console.log(response.data.results);
                this.types = response.data.results;
            })
            .catch(error => {
                console.error(error);
            });
    }
}  
</script>

<template>
    <main>
        <!-- homepage -->
        <section id="home" class="bg_orange">
            <div class="container h-100 d-flex align-items-center">
                <!-- <h1>199 Pac <br> Fc-d 199</h1> -->

                <button class="btn pt-4 border-0 btn_title">
                    <div class="title">
                        <a href="#restaurant_cards">
                            <h1>Ordina Ora!</h1>
                        </a>
                        <p>
                            Ordina online dai tuoi ristoranti preferiti
                        </p>
                    </div>
                </button>


                <!-- pac-man -->
                <!-- <div class="button_wrapper d-flex align-items-center">
                    <div class="pacman">
                        <div class="pacman__eye"></div>
                        <div class="pacman__mouth"></div>
                        <div class="pacman__food"></div>
                    </div> -->
                <!-- <img height="150" src="../../public/img/pacman.png" alt=""> -->
                <!-- <span class="button_clickme ms-4 mt-4">
                                <a name="" id="" class="btn btn-danger align-top mt-4 ms-4 rounded-circle p-4" href="#"
                                    role="button"><img height="20" src="../../public/img/hamburger.png" alt=""></a>
                            </span> -->
                <!-- </div> -->

                <!-- </div> -->
            </div>
        </section>
        <!-- cards tipi ristorante -->
        <section id="restaurant_cards">
            <h1 class="text-center my-5">Esplora per categoria</h1>
            <div class="container">
                <!-- <div class="row">
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/pizza.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Pizza</div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/donuts.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Dolci</div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/sushi.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Sushi</div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/american.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Americano</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row mt-5 d-flex justify-content-center">
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/hamburger.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Hamburger</div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/pasta.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Italiano</div>
                            </a>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-center">
                        <img src="../../public/img/kebab.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <a href="">
                                <div class="text">Kebab</div>
                            </a>
                        </div>
                    </div>
                </div> -->

                <div class="row mt-5 d-flex justify-content-center gy-5">
                    <div class="col-3 d-flex justify-content-center" v-for="tipo in types">
                        <img src="../../public/img/hamburger.jpeg" alt="restaurant_image" class="img-fluid">
                        <div class="card-body">
                            <router-link :to="{ name: 'restaurants' }" @click.preventDefault()="setSelected(tipo.name)">
                                <div class="text">{{ tipo.name }}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

@import '../styles/_variables';
@import url('https://fonts.cdnfonts.com/css/pac-font');

h1 {
    color: $primary;
}

button {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    background: none;
    color: white;
    position: relative;
    outline: none;
    border: none;
    font-size: 14px;
    z-index: 2;
    transition: 0.01s 0.23s ease-out all;
    overflow: hidden;
    max-height: 100%;
}

button:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 58%;
    background: $primary_soft;
    z-index: -1;
    transition: 0.3s ease-in all;
}

button:after {
    content: "";
    position: absolute;
    left: -5%;
    top: 5%;
    height: 90%;
    width: 5%;
    background: #fabd2f93;
    transition: 0.4s 0.02s ease-in all;
}

button:hover {
    cursor: pointer;
    color: transparent;
}

button:hover:before {
    left: 120%;
    width: 25%;
}

button:hover:after {
    left: 100%;
    width: 70%;
    border: none;
}


.signature {
    position: fixed;
    font-family: sans-serif;
    font-weight: 100;
    bottom: 10px;
    left: 0;
    letter-spacing: 4px;
    font-size: 10px;
    width: 100%;
    text-align: center;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
}

.bg_orange {
    background-color: $primary;
    height: calc(100vh - 120px);

    background-image: url('../../public/img/pac-burger.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
}


.title {
    width: 100%;

    h1 {
        font-size: 100px;
        color: $light;
    }

    p {
        color: $light;
        margin-top: 2rem;
        font-size: 25px;
    }

    a {
        text-decoration: none;
        color: $dark;
        transition: 0.2s 0.02s ease-in all;

    }

    &:hover a {
        color: $light;
    }
}

.image {
    margin-top: 4rem;

}

.pacman {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f2d648;
    position: relative;
    margin-top: 20px;
    bottom: 15%;
    position: absolute;
    animation: linear infinite;
    animation-name: run;
    animation-duration: 5s;
}

.pacman__eye {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 20px;
    right: 40px;
    background: #333333;
}

.pacman__mouth {
    background: #000;
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    animation-name: eat;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
}

.pacman__food {
    position: absolute;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    top: 40%;
    left: 120px;
    animation-name: food;
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
}

.text {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $light;
    font-size: 20px;
    cursor: pointer;


}

#restaurant_cards {
    padding: 4rem;
}

.col-4,
.col-3 {
    position: relative;

    img {
        height: 350px;
        width: 250px;
        object-fit: cover;
        object-position: center;
    }

    .card-body {
        display: none;
        position: absolute;
        width: 250px;
        height: 100%;
        top: 0;

        a {
            text-decoration: none;
        }
    }

    &:hover .card-body {
        display: block;
        background-color: rgb(0 0 0 / 69%);
    }
}





//Pac-Man Mouth Animation//

@keyframes eat {
    0% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }

    25% {
        clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
    }

    50% {
        clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
    }

    75% {
        clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
    }

    100% {
        clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
    }
}

//Pac-Man Move Animation//

@keyframes run {
    0% {
        left: 0;
    }

    48% {
        -webkit-transform: rotateY(0deg);
    }

    50% {
        left: 40%;
        -webkit-transform: rotateY(180deg);
    }

    98% {
        -webkit-transform: rotateY(180deg);
    }

    100% {
        left: 0;
        -webkit-transform: rotateY(0deg);
    }
}

//Pac-Man Food Animation//

@keyframes food {
    0% {
        transform: translateX(0);
        opacity: 1;
    }

    100% {
        transform: translateX(-50px);
        opacity: 0;
    }
}
</style>