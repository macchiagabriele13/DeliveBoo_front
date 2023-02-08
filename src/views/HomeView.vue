<script>
export default {
    name: 'HomeView'
}  
</script>

<template>
    <main>
        <!-- homepage -->
        <section id="home">
            <div class="container-fluid bg_orange d-flex align-items-center">
                <div class="home_text mt-3">
                    <div class="container w-75">
                        <h1>199 Pac-Food 199</h1>
                        <h5 class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                            enim
                            temporibus
                            laudantium mollitia voluptates possimus neque magni repellat eligendi quos!</h5>
                        <div class="mb-1">
                            <input type="search" class="form-control rounded-pill border-0 w-75" name="searchRestaurant"
                                id="searchRestaurant" aria-describedby="searchRestaurantHelper"
                                placeholder="Text here a restaurant name">
                            <small id="searchRestarauntHelper" class="form-text text-muted">Find your favorite
                                restaurant</small>
                        </div>
                        <div class="button_wrapper">
                            <div class="pacman d-inline-block">
                                <div class="pacman__eye"></div>
                                <div class="pacman__mouth"></div>
                                <div class="pacman__food"></div>
                            </div>
                            <!-- <img height="150" src="../../public/img/pacman.png" alt=""> -->
                            <span class="button_clickme ms-4 mt-4">
                                <a name="" id="" class="btn btn-danger align-top mt-4 ms-4 rounded-circle p-4" href="#"
                                    role="button"><img height="20" src="../../public/img/hamburger.png" alt=""></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="image py-3">
                    <img width="780" height="500" src="../../public/img/pac-burger.png" alt="">
                </div>
            </div>
        </section>
        <!-- cards tipi ristorante -->
        <section id="restaurant_cards">
            <div class="container">
                <div class="row mt-4 mb-4">
                    <div class="col d-flex">
                        <div class="card border border-warning rounded-3 text-center">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                        <div class="card border border-warning rounded-3 text-center mx-3">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                        <div class="card border border-warning rounded-3 text-center">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                    </div>
                </div>
                <div class="row mt-4 mb-4">
                    <div class="col d-flex">
                        <div class="card border border-warning rounded-3 text-center">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                        <div class="card border border-warning rounded-3 text-center mx-3">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                        <div class="card border border-warning rounded-3 text-center">
                            <img class="img-fluid rounded-3 opacity-75" width="400" src="../../public/img/giappo.jpg"
                                alt="">
                            <h5 class="index_restaurant">Ristorante giapponese</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import url('https://fonts.cdnfonts.com/css/pac-font');


.bg_orange {
    background-color: orange;
}

h1 {
    font-family: 'PacFont', sans-serif;
}

.pacman {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f2d648;
    position: relative;
    margin-top: 20px;
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

.card:hover {
    box-shadow: 1px 1px 50px rgba(255, 166, 0, 0.605);
    cursor: pointer;
}


.index_restaurant {
    z-index: 2;
    position: absolute;
    left: 80px;
    bottom: 180px
}

#restaurant_cards {
    background-image: url('../../public/img/hamburger.png');
    background-repeat: no-repeat;
    background-position: 150% 50%;
}

//Pac-Man Animation//

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