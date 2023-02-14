<script>
export default {
    name: 'HomeView'
}  
</script>

<template>
    <main>
        <!-- homepage -->
        <section id="home" class="bg_orange">
            <div class="container h-100 d-flex align-items-center">
                <!-- <h1>199 Pac <br> Fc-d 199</h1> -->
                <div class="title ">
                    <h1>Ordina Ora!</h1>
                    <p>
                        Ordina online dai tuoi ristoranti preferiti
                    </p>
                </div>

                <!-- pac-man -->
                <div class="button_wrapper d-flex align-items-center">
                    <div class="pacman">
                        <div class="pacman__eye"></div>
                        <div class="pacman__mouth"></div>
                        <div class="pacman__food"></div>
                    </div>
                    <!-- <img height="150" src="../../public/img/pacman.png" alt=""> -->
                    <!-- <span class="button_clickme ms-4 mt-4">
                                <a name="" id="" class="btn btn-danger align-top mt-4 ms-4 rounded-circle p-4" href="#"
                                    role="button"><img height="20" src="../../public/img/hamburger.png" alt=""></a>
                            </span> -->
                    <!-- </div> -->

                </div>
            </div>
        </section>
        <!-- cards tipi ristorante -->
        <section id="restaurant_cards">
            <div class="container">
                <div class="row mt-4 mb-4">
                    <div class="col d-flex">
                        <div class="card">
                            <img src="../../public/img/giappo.jpg" alt="restaurant_image" class="image"
                                style="width:100%">
                            <div class="middle">
                                <div class="text">Ristorante Giapponese</div>
                            </div>
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


.bg_orange {
    background-color: $primary;
    height: calc(100vh - 127px);

    background-image: url('../../public/img/pac-burger.png');
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
}

.card {
    box-sizing: border-box;
    width: 250px;
    height: 190px;
    border: 1px solid $light;
    backdrop-filter: blur(6px);
    border-radius: 17px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-weight: bolder;
    position: relative;
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


.card:hover {
    background: rgb(250 188 47 / 50%);
    border: 1px solid rgb(245 166 6 / 50%);
    transform: scale(1.05);
    box-shadow: 12px 17px 51px rgb(250 188 47 / 50%);
}


.card:hover>p {
    display: block;
    color: $secondary;
    transform: scale(1.05);
}

.card:active {
    transform: scale(0.95) rotateZ(1.7deg);
}


.middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}

.card:hover .image {
    opacity: 0.3;
}

.card:hover .middle {
    opacity: 1;
}

.text {
    background-color: $light;
    color: $secondary;
    font-size: 16px;
    padding: 16px 32px;
    display: block;
    transform: scale(1.05);
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