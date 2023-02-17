<script>
import { store } from './store'

import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
import Cart from './components/Cart.vue'

export default {
    components: {
        AppNav,
        AppFooter,
        Cart
    },
    data() {
        return {
            store
        }
    },
    methods: {
        modalCartCancel() {
            store.modalCartEnabled = false;
        },

        modalCartConfirm() {
            store.cart.plates.plates = [];
            store.cart.plates.prices = [];
            store.cart.quantity = [];
            localStorage.clear();

            store.modalCartEnabled = false;
            store.cartOn = true;
        }
    },
    mounted() {
        console.log(localStorage.getItem('plates'));
    }
}
</script>

<template>
    <AppNav />
    <RouterView />
    <AppFooter />

    <Cart v-if="store.cartOn" />

    <div class="modal_cart_fade" v-if="store.modalCartEnabled">
        <div class="modal_cart bg-light rounded-2 p-3">
            <h3>Oggetti presenti nel carrello</h3>
            <p>Sono presenti altri piatti nel carrello e non puoi ordinare da più ristoranti. Se prosegui eliminerai
                tutti i
                piatti precendentemente salvati. Sei sicuro di voler continuare?</p>

            <div class="d-flex justify-content-end align-items-center gap-2">
                <button type="button" class="btn btn-secondary" @click.preventDefault()="modalCartCancel()">Annulla</button>
                <button type="button" class="btn btn-success" @click.preventDefault()="modalCartConfirm()">Conferma</button>
            </div>
        </div>
    </div>

    <div class="modal_cart_fade" v-if="store.voidCart">
        <div class="modal_cart bg-light rounded-2 p-3">
            <h3>Carrello vuoto</h3>
            <p>Stai tentando di effettuare un ordine con il carrello vuoto. Inserisci almeno un piatto per proseguire</p>

            <div class="d-flex justify-content-end align-items-center gap-2">
                <button type="button" class="btn btn-success"
                    @click.preventDefault()="store.toggleVoidCart()">Conferma</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';

.modal_cart_fade {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.200);

    .modal_cart {
        width: 30%;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
