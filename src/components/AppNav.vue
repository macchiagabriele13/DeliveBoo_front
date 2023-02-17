<script>
import { store } from '../store.js';

export default {
    name: 'AppNav',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <!-- navbar -->
        <section class="nav_top bg-dark">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <div class="row black_nav">
                        <div class="content_top d-flex justify-content-between align-items-center">
                            <a class="delivery_man ms-4" href="/restaurants">
                                <img class="" src="../../public/img/delivery-man.png" alt="">
                            </a>
                            <div class="content_left p-1">
                                <a class="text-decoration-none border-0" href="/restaurants">
                                    <span class="text-danger fw-bold fs-5">Consegna gratuita</span>
                                    per ordini superiori ai 10€
                                </a>
                            </div>
                            <div class="content_middle">
                                <a href="#">

                                    <img width="50px" src="../assets/img/pacfood-logo.png" alt="">
                                </a>
                            </div>
                            <div class="d-flex">
                                <a class="telephone d-flex text-decoration-none align-items-center"
                                    href="tel:+39335658721">
                                    <div class="icon me-3">

                                        <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="currentColor"
                                            class="bi bi-telephone-fill text-danger" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </div>
                                    <div class="phone_icon ">
                                        <h5 class="text-white">Chiama e ordina</h5>
                                        <div class="number">
                                            <p class="text-danger">335-658721</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
        <section class="nav_bottom">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <div class="row w-100">
                        <div class="content_bottom d-flex justify-content-between">

                            <div>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class=" block_menu collapse navbar-collapse" id="navbarSupportedContent">
                                    <div class="p-1">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-6">
                                            <li class="nav-item">
                                                <router-link class="nav-link text-uppercase" :to="{ name: 'home' }"
                                                    aria-current="page">Home
                                                    <span class="visually-hidden">(current)</span></router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link text-uppercase"
                                                    :to="{ name: 'restaurants' }">Ristoranti</router-link>
                                            </li>
                                            <li class="nav-item">
                                                <router-link class="nav-link text-uppercase"
                                                    :to="{ name: 'contacts' }">Contatti</router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="content_right">
                                <a class="cart_icon" href="#">
                                    <div class="point" :class="store.cart.quantity.length !== 0 ? '' : 'd-none'">
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill="$dark"
                                        class="bi bi-cart3 ms-1" viewBox="0 0 16 16"
                                        @click.preventDefault="store.toggleCart()">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.point {
    position: absolute;
    top: 0;
    right: 0;
    background-color: $secondary;
    border-radius: 25px;
    height: 5px;
    width: 5px;
}

nav {

    h5,
    p {
        padding: 0 !important;
        margin: 0 !important;
    }
}

a.nav-link.active {
    color: red;
}

a.nav-link:hover {
    color: red;
    box-shadow: inset 0 -3px 0 0 red;
}

a.nav-link {
    color: black;
}

.content_top {
    .delivery_man {
        display: none;
    }

    .content_left {
        a {
            color: white;
        }

        a:hover {
            color: red;
        }


    }

    .content_right {
        a {
            color: white;

        }

        a:hover {
            color: red;
        }

        .search_icon,
        .cart_icon {
            color: $dark !important;

            svg:hover {
                color: $secondary !important;
            }
        }
    }

}


.navbar-collapse {
    max-width: fit-content;

    .search_icon,
    .cart_icon {
        color: $dark !important;
        position: relative;

        svg:hover {
            color: $secondary !important;
        }

    }
}


.cart_icon {
    color: $dark !important;
    position: relative;
}

.black_nav {
    width: inherit !important;
    max-width: none !important;
}

@media screen and (max-width: 767px) {

    .content_left {
        display: none;

        a {
            display: none;
        }
    }

    .block_menu {
        position: absolute;
        z-index: 3;
        background: white;
        width: 90%;
        margin-top: 1rem;
        padding: 0px 0.5rem;
        border-bottom: 1px solid rgb(239, 239, 239);
        max-width: none !important;
    }

    .black_nav {
        width: inherit !important;
    }

    .delivery_man {
        margin: 0 !important;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .icon {
        margin: 0 !important;
    }

    .phone_icon {
        display: none;
    }

    .content_top .delivery_man {
        display: block;
    }
}
</style>