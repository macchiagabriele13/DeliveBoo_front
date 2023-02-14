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
                    <div class="row w-100">
                        <div class="content_top d-flex justify-content-between align-items-center">
                            <div class="content_left p-1">
                                <a class="text-decoration-none border-0" href="#"><span
                                        class="text-danger fw-bold fs-5">Free
                                        delivery</span> for
                                    orders over
                                    $19.00</a>
                            </div>
                            <div class="content_right">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-search me-1" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
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
        <section class="nav_bottom">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <div class="row w-100">
                        <div class="content_bottom d-flex justify-content-between align-items-center">
                            <div class="content_left p-1">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                            <div class="content_middle">
                                <h5>Logo</h5>
                            </div>
                            <div class="content_right align-items-center d-flex">
                                <div class="icon me-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35" fill="currentColor"
                                        class="bi bi-telephone-fill text-danger" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                </div>
                                <div class="phone_icon ">
                                    <h5>Call & order</h5>
                                    <div class="number">
                                        <p class="text-danger">0000-123-456789</p>
                                    </div>
                                </div>
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
    }

}
</style>