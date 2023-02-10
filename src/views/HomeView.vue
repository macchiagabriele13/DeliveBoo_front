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
                        <h1>Titolo HomePage</h1>
                        <h5 class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
                            enim
                            temporibus
                            laudantium mollitia voluptates possimus neque magni repellat eligendi quos!</h5>
                        <div class="mb-1">
                            <input type="search" class="form-control rounded-pill border-0 w-50" name="searchRestaurant"
                                id="searchRestaurant" aria-describedby="searchRestaurantHelper"
                                placeholder="Text here a restaurant name">
                            <small id="searchRestarauntHelper" class="form-text text-muted">Find your favorite
                                restaurant</small>
                        </div>
                        <div class="button_wrapper">
                            <img height="150" src="../../public/img/pacman.png" alt="">
                            <span class="button_clickme">
                                <a name="" id="" class="btn btn-danger ms-4 rounded-circle p-3" href="#"
                                    role="button"><img height="20" src="../../public/img/hamburger.png" alt=""></a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="image py-3">
                    <img height="600" src="../../public/img/deliveboo-home-image.png" alt="">
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


.bg_orange {
    background-color: $primary;
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


.image {
    opacity: 1;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    object-fit: cover;
    object-position: center;
    border-radius: 17px;
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
</style>