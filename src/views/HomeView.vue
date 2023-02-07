<script>
export default {
    name: 'HomeView'
}  
</script>

<template>
    <main>
        <div class="container-fluid bg_orange d-flex align-items-center">
            <div class="home_text mt-3">
                <div class="container w-75">
                    <h1>Titolo HomePage</h1>
                    <h5 class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque enim
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
                            <a name="" id="" class="btn btn-danger ms-4 rounded-circle p-3" href="#" role="button"><img
                                    height="20" src="../../public/img/hamburger.png" alt=""></a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="image py-3">
                <img height="600" src="../../public/img/deliveboo-home-image.png" alt="">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';


.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.bg_orange {
    background-color: orange;
}
</style>