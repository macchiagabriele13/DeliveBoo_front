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
</style>