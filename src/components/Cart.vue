<script>
import { store } from '../store.js';

export default {
    name: "Cart",
    data() {
        return {
            store
        }
    },
    methods: {
        addQuantity(plate) {
            const index = store.cart.plates.plates.indexOf(plate);
            store.cart.quantity[index]++;

            localStorage.setItem('plates', JSON.stringify(store.cart));
        },

        remQuantity(plate) {
            const index = store.cart.plates.plates.indexOf(plate);
            if (store.cart.quantity[index] === 1) {
                this.deletePlate(plate);
            } else {
                store.cart.quantity[index]--;
            }

            localStorage.setItem('plates', JSON.stringify(store.cart));
        },

        deletePlate(plate) {
            const index = store.cart.plates.plates.indexOf(plate);
            store.cart.plates.plates.splice(index, 1);
            store.cart.plates.prices.splice(index, 1);
            store.cart.quantity.splice(index, 1);

            localStorage.setItem('plates', JSON.stringify(store.cart));
        },

        resetCart() {
            store.cart.plates.plates = [];
            store.cart.plates.prices = [];
            store.cart.quantity = [];
            localStorage.clear();
        },

        getPrice() {
            let price = 0;
            for (let i = 0; i < store.cart.quantity.length; i++) {
                price = price + store.cart.quantity[i] * store.cart.plates.prices[i];
            }
            return price.toFixed(2);
        }
    },
    mounted() {
        if (localStorage.plates) {
            store.cart = JSON.parse(localStorage.plates);
        }
    }
}
</script>

<template>

    <!-- <div class="off-canvas"> -->

    <div id="CartDrawer" class="drawer drawer--right open" tabindex="-1">
        <div class="drawer__header">
            <span class="drawer__close js-drawer-close dt-sc-btn open close-icon"
                @click.preventDefault()="store.toggleCart()">
                x
            </span>
            <h4 class="my-3">Il tuo carrello</h4>
        </div>


        <div id="CartContainer">

            <form action="/cart" method="post" novalidate="" class="cart ajaxcart">
                <ul class="ajaxcart__inner">

                    <li class="ajaxcart__product" v-if="store.cart.plates.plates.length > 0"
                        v-for="plate, i in store.cart.plates.plates">
                        <div class="ajaxcart row" data-line="1">
                            <!-- <div class="item_img"><a href="/products/toritilla-wrap?variant=39541360099411"
                                            class="ajaxcart__product-image"> <img
                                                src="https://cdn.shopify.com/s/files/1/0549/7359/5731/products/shop007_medium.jpg?v=1638158749"
                                                alt=""></a> </div> -->
                            <div class="details_cart">
                                <h6>{{ plate }}</h6>
                                <div>{{ store.cart.plates.prices[i] }}</div>

                                <div class="d-flex gap-1 align-items-center">
                                    <button type="button" class="btn btn_orange"
                                        @click.preventDefault()="remQuantity(plate)">
                                        -
                                    </button>

                                    <div class="fs-5">{{ store.cart.quantity[i] }}</div>

                                    <button type="button" class="btn btn_orange"
                                        @click.preventDefault()="addQuantity(plate)">
                                        <span>+</span>
                                    </button>

                                    <!-- <button id="changeQty" class="ajaxcart__qty-remove remove-btn  dt-sc-btn"
                                        @click.preventDefault()="deletePlate(plate)">
                                        <font-awesome-icon icon="fa-solid fa-trash" />
                                    </button> -->
                                </div>
                            </div>
                        </div>
                    </li>

                    <li v-else>Nessun articolo nel carrello</li>
                </ul>

                <div class="remove_all text-end" @click.preventDefault()="resetCart()">Rimuovi tutto</div>

                <div class="ajaxcart__footer row">
                    <div class="subtotal">
                        <p class="title">Totale</p>
                        <p class="subtotal-price"><span class="cart-original-total money">{{ getPrice() }}</span></p>
                    </div>


                    <div class="discounts">


                    </div>
                    <div class="total">
                        <p>Shipping, taxes, and discounts will be calculated at checkout.</p>
                    </div>

                    <div class="d-flex flex-column px-3">
                        <router-link :to="{ name: 'checkout' }">
                            <button type="submit" class="btn btn_orange mb-4 w-100" name="checkout">
                                Procedi al Checkout
                            </button>
                        </router-link>


                        <router-link class="btn btn_orange" :to="{ name: 'cart' }">Vedi il carrello</router-link>

                    </div>



                </div>
            </form>

        </div>
    </div>

    <!-- </div> -->


</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.remove_all {
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

#CartDrawer {
    overflow: visible;
    padding: 0;
}

.off-canvas {
    top: 0;
    height: 100vw;
    width: 100%;
    position: absolute;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.6);
}

.open {
    display: block;
}

.drawer {

    background-color: #FFFFFF;

    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    width: 300px;
    z-index: 5;
    /* transform: translateX(0); */

}

#CartDrawer .drawer__header {
    background: #fff;
    display: inline-block;
    padding: 0 15px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 0 3px 0 rgb(0 0 0 / 25%);
}

#CartContainer {
    height: 100%;
    overflow-y: auto;
    padding: 65px 15px 15px;
}

.js-drawer-close.dt-sc-btn {
    background-color: $primary;
    height: 30px;
    width: 30px;
    line-height: 30px;
    font-weight: 700;
    position: absolute;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    border-radius: 0;
}

.dt-sc-btn {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    float: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin: 10px 0 0;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    line-height: var(--DT_Body_Line_Height);
    border-radius: var(--DT_Button_Border_Radius);
    padding: var(--DTPadding_Btn);
    color: var(--DT_Button_Text_Color);
    background-color: var(--DT_Button_BG_Color);
    border: var(--DT_Button_border_width) solid var(--DT_Button_border_Color);

}

.dt-sc-btn.open {
    left: 0;
}

.close-icon {
    transform: translateX(-100%);
    padding: 0;
}

.drawer .ajaxcart__product .row {
    border-bottom: 1px solid var(--DTColor_Border);
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 15px;
    position: relative;
}

.drawer .ajaxcart__product .item_img {
    max-width: 60px;
    margin-bottom: 5px;
    padding: 0 0 !important;
}

.drawer .ajaxcart__product .details {
    padding: 0 10px;
    width: 100%;
}


.drawer .ajaxcart__product .item_img a {
    display: inline-block;
    vertical-align: top;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: $primary;

    &:hover {
        color: $primary_soft;
    }
}

img {
    border-style: none;
    border: 0;
    -ms-interpolation-mode: bicubic;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
}

.ajaxcart__inner .ajaxcart__product:last-child .row {
    border-bottom-width: 0;
}

.drawer .ajaxcart__product .row {
    border-bottom: 1px solid $primary;
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 15px;
    position: relative;
    flex-wrap: nowrap;
}

ul {
    list-style: none;
}

ul.ajaxcart__inner {
    padding-left: 0 !important;
}

.drawer .subtotal {
    display: flex;
    justify-content: space-between;
    padding: 15px 12px;
    border-width: 1px 0;
    border-style: solid;
    border-color: var(--DTColor_Border);

    p {
        margin: 0;
    }
}

.drawer .ajaxcart__product .product-item-caption-qty {
    margin-top: 8px;
}

.product-item-caption-qty {
    display: flex;
    clear: both;
    align-items: center;
}

.drawer .ajaxcart__product .product-item-caption-qty button.ajaxcart__qty--minus {
    border-radius: 10px 0 0 10px;
}

.drawer .ajaxcart__product .product-item-caption-qty button.ajaxcart__qty--plus {
    border-radius: 0 10px 10px 0;
}

.drawer .ajaxcart__product .product-item-caption-qty button {
    width: 30px;
    height: 30px;
    font-size: 14px;
    line-height: 30px;
    padding: 0px;
    margin: 0;
    border: 1px solid $primary;
}

.product-item-caption-qty button {
    box-shadow: none;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    height: 30px;
    width: 30px;
    display: flex;
    padding: 0 10px;
    line-height: normal;
}

.drawer .product-item-caption-qty input.input-number {
    height: 30px;
    border: 1px solid $primary;
    border-width: 1px 0;
    color: $dark;
}

.product-item-caption-qty input.input-number {
    height: 30px;
    max-width: 40px;
    border-width: 1px 0;
    text-align: center;
    padding: 0;
    border-radius: 0;
    border-color: $primary;
}

input[type=submit],
input[type=reset],
input[type=button],
button[type=button],
*[role=button],
button,
.button,
a.button,
.dt-sc-btn,
.spr-summary-actions-newreview,
.shopify-payment-button__button--unbranded {
    /* cursor: pointer; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    float: none;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin: 10px 0 0;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    line-height: 1.8em;
    border-radius: 40px;
    padding: 10px 20px 10px 20px;
    color: $light;
    background-color: $primary;
    border: 0px solid $primary;
}

.remove-btn {
    max-width: 60px;
}

.details_cart {
    width: max-content;
}


.fa-trash {
    font-size: 12px;
}
</style>