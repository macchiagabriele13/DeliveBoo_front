import { reactive } from 'vue';

export const store = reactive({
    cartOn: false,
    modalCartEnabled: false,
    cart: {
        restaurant: 0,
        plates: {
            plates: [],
            prices: [],
        },
        quantity: []
    },

    toggleCart() {
        this.cartOn = !this.cartOn;
    },

    addToCart(plate) {
        if (localStorage.plates) {
            this.cart = JSON.parse(localStorage.plates)
        }

        if (!this.cartOn) {
            this.cartOn = true;
        }

        if (this.cart.restaurant == plate.restaurant_id) {

            if (!this.cart.plates.plates.includes(plate.name)) {
                this.cart.plates.plates.push(plate.name);
                this.cart.plates.prices.push(plate.price);
                this.cart.quantity.push(1);
            } else {
                const index = this.cart.plates.plates.indexOf(plate.name);
                this.cart.quantity[index]++;
            }
        } else {
            if (this.cart.plates.plates.length !== 0) {
                // alert('Non puoi ordinare da più ristoranti diversi. Elimina i dati del carrello precedenti per ordinare da questo ristorante!');
                this.cartOn = false;
                this.modalCartEnabled = true;
            } else {
                localStorage.clear();
                this.cart.plates.plates = [];
                this.cart.plates.prices = [];
                this.cart.quantity = [];

                this.cart.restaurant = plate.restaurant_id;
                this.cart.plates.plates.push(plate.name);
                this.cart.plates.prices.push(plate.price);
                this.cart.quantity.push(1);
            }
        }

        console.log(this.cart);
        localStorage.setItem('plates', JSON.stringify(this.cart));
    }
})