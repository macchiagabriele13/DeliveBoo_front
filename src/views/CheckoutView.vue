<script>


import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'CheckoutView',
    data() {
        return {
            store,
            client: {
                client_firstname: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                client_lastname: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                client_address: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                client_phone: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                delivery_time: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                email: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                card_number: {
                    isValid: true,
                    value: '',
                    error: ''
                },
                card_expiration: {
                    isValid: true,
                    value: {
                        month: 1,
                        year: 23
                    },
                    error: ''
                },
                card_cvv: {
                    isValid: true,
                    value: '',
                    error: ''
                },
            }
        }
    },
    methods: {
        getPrice() {
            let price = 0;
            for (let i = 0; i < store.cart.quantity.length; i++) {
                price = price + store.cart.quantity[i] * store.cart.plates.prices[i];
            }
            price += store.deliveryCost;
            return price.toFixed(2);
        },

        validate() {
            // client_firstname validation
            this.client.client_firstname.value = this.client.client_firstname.value.trim();
            if (this.client.client_firstname.value === '') {
                this.client.client_firstname.isValid = false;
                this.client.client_firstname.error = 'Il nome è obbligatorio';
            } else if (this.client.client_firstname.value.length > 100) {
                this.client.client_firstname.isValid = false;
                this.client.client_firstname.error = 'Il nome deve essere di massimo 100 caratteri';
            } else {
                this.client.client_firstname.isValid = true;
                this.client.client_firstname.error = '';
            }

            // client_lastname validation
            this.client.client_lastname.value = this.client.client_lastname.value.trim();
            if (this.client.client_lastname.value === '') {
                this.client.client_lastname.isValid = false;
                this.client.client_lastname.error = 'Il cognome è obbligatorio';
            } else if (this.client.client_lastname.value.length > 100) {
                this.client.client_lastname.isValid = false;
                this.client.client_lastname.error = 'Il cognome deve essere di massimo 100 caratteri';
            } else {
                this.client.client_lastname.isValid = true;
                this.client.client_lastname.error = '';
            }

            // email validation
            this.client.email.value = this.client.email.value.trim();
            if (this.client.email.value === '') {
                this.client.email.isValid = false;
                this.client.email.error = 'L\'email è obbligatoria';
            } else if (this.client.email.value.length > 255) {
                this.client.email.isValid = false;
                this.client.email.error = 'L\'email deve essere di massimo 255 caratteri';
            } else if (this.client.email.value.charAt(0) === '@' || this.client.email.value.charAt(this.client.email.value.length - 1) === '@' || this.client.email.value.search('@') === -1) {
                this.client.email.isValid = false;
                this.client.email.error = 'L\'email non è inserita nel formato corretto (ex: mario.rossi@example.com).';
            } else {
                this.client.email.isValid = true;
                this.client.email.error = '';
            }

            // client_phone validation
            this.client.client_phone.value = this.client.client_phone.value.trim();
            if (this.client.client_phone.value === '') {
                this.client.client_phone.isValid = false;
                this.client.client_phone.error = 'Il numero di telefono è obbligatorio';
            } else if (this.client.client_phone.value.length > 20) {
                this.client.client_phone.isValid = false;
                this.client.client_phone.error = 'Il numero di telefono deve essere di massimo 20 caratteri';
            } else {
                let isNumber = true;
                let i = 0;
                while (isNumber && i < this.client.client_phone.value.length) {
                    if (this.client.client_phone.value.charAt(i) < '0' || this.client.client_phone.value.charAt(i) > '9') {
                        isNumber = false;
                    }
                    i++;
                }

                if (isNumber) {
                    this.client.client_phone.isValid = true;
                    this.client.client_phone.error = '';
                } else {
                    this.client.client_phone.isValid = false;
                    this.client.client_phone.error = 'Il numero di telefono non è inserito nel formato corretto. Inserisci solo numeri.';
                }
            }

            // client_address validation
            this.client.client_address.value = this.client.client_address.value.trim();
            if (this.client.client_address.value === '') {
                this.client.client_address.isValid = false;
                this.client.client_address.error = 'L\'indirizzo di spedizione è obbligatorio';
            } else if (this.client.client_address.value.length > 255) {
                this.client.client_address.isValid = false;
                this.client.client_address.error = 'L\'indirizzo di spedizione deve essere di massimo 255 caratteri';
            } else {
                this.client.client_address.isValid = true;
                this.client.client_address.error = '';
            }

            // delivery_time validation
            this.client.delivery_time.value = this.client.delivery_time.value.trim();
            if (this.client.delivery_time.value === '') {
                this.client.delivery_time.isValid = false;
                this.client.delivery_time.error = 'L\'orario di consegna è obbligatorio';
            } else {
                this.client.delivery_time.isValid = true;
                this.client.delivery_time.error = '';
            }

            // card_number validation
            this.client.card_number.value = this.client.card_number.value.trim();
            if (this.client.card_number.value === '') {
                this.client.card_number.isValid = false;
                this.client.card_number.error = 'Il numero della carta è obbligatorio';
            } else if (this.client.card_number.value.length !== 16) {
                this.client.card_number.isValid = false;
                this.client.card_number.error = 'Il numero della carta deve essere di 16 caratteri';
            } else {
                let isNumber = true;
                let i = 0;
                while (isNumber && i < this.client.card_number.value.length) {
                    if (this.client.card_number.value.charAt(i) < '0' || this.client.card_number.value.charAt(i) > '9') {
                        isNumber = false;
                    }
                    i++;
                }

                if (isNumber) {
                    this.client.card_number.isValid = true;
                    this.client.card_number.error = '';
                } else {
                    this.client.card_number.isValid = false;
                    this.client.card_number.error = 'Il numero della carta non è inserito nel formato corretto. Inserisci solo numeri.';
                }
            }

            // card_cvv validation
            this.client.card_cvv.value = this.client.card_cvv.value.trim();
            if (this.client.card_cvv.value === '') {
                this.client.card_cvv.isValid = false;
                this.client.card_cvv.error = 'Il CVV è obbligatorio';
            } else if (this.client.card_cvv.value.length !== 3) {
                this.client.card_cvv.isValid = false;
                this.client.card_cvv.error = 'Il CVV deve essere di 3 caratteri';
            } else {
                let isNumber = true;
                let i = 0;
                while (isNumber && i < this.client.card_cvv.value.length) {
                    if (this.client.card_cvv.value.charAt(i) < '0' || this.client.card_cvv.value.charAt(i) > '9') {
                        isNumber = false;
                    }
                    i++;
                }

                if (isNumber) {
                    this.client.card_cvv.isValid = true;
                    this.client.card_cvv.error = '';
                } else {
                    this.client.card_cvv.isValid = false;
                    this.client.card_cvv.error = 'Il CVV non è inserito nel formato corretto. Inserisci solo numeri.';
                }
            }

            // card_expiration validation
            if (this.client.card_expiration.value.month === '' || this.client.card_expiration.value.year === '') {
                this.client.card_expiration.isValid = false;
                this.client.card_expiration.error = 'La data di scadenza della carta è obbligatoria';
            } else if (this.client.card_expiration.value.month < 1 || this.client.card_expiration.value.month > 12 || this.client.card_expiration.value.year < 23 || this.client.card_expiration.value.month > 43) {
                this.client.card_expiration.isValid = false;
                this.client.card_expiration.error = 'La data di scadenza della carta non è nel formato corretto.';
            } else {
                this.client.card_expiration.isValid = true;
                this.client.card_expiration.error = '';
            }

            if (
                this.client.client_firstname.isValid && this.client.client_lastname.isValid && this.client.email.isValid &&
                this.client.client_phone.isValid && this.client.client_address.isValid && this.client.delivery_time.isValid &&
                this.client.card_number.isValid && this.client.card_expiration.isValid && this.client.card_cvv.isValid
            ) {
                /* console.log('Tutti i dati sono inseriti nel modo corretto. Ordine salvato con successo.');
                console.log(store.base_api_url + '/api/orders/' + localStorage.getItem('plates') + '/' + JSON.stringify(this.client)); */
                this.sendOrder(store.base_api_url + '/api/orders/' + localStorage.getItem('plates') + '/' + JSON.stringify(this.client));
            }
        },

        sendOrder(url) {
            axios.get(url)
                .then(response => {
                    console.log(response);
                    this.resetClientAndCart();
                })
                .catch(error => {
                    console.error(error);
                })
        },

        resetClientAndCart() {
            this.client.client_firstname.value = '';
            this.client.client_lastname.value = '';
            this.client.email.value = '';
            this.client.client_phone.value = '';
            this.client.client_address.value = '';
            this.client.delivery_time.value = '';
            this.client.card_number.value = '';
            this.client.card_expiration.value.month = 1;
            this.client.card_expiration.value.year = 23;
            this.client.card_cvv.value = '';

            this.client.client_firstname.error = '';
            this.client.client_lastname.error = '';
            this.client.email.error = '';
            this.client.client_phone.error = '';
            this.client.client_address.error = '';
            this.client.delivery_time.error = '';
            this.client.card_number.error = '';
            this.client.card_expiration.error = '';
            this.client.card_cvv.error = '';

            this.client.client_firstname.isValid = true;
            this.client.client_lastname.isValid = true;
            this.client.email.isValid = true;
            this.client.client_phone.isValid = true;
            this.client.client_address.isValid = true;
            this.client.delivery_time.isValid = true;
            this.client.card_number.isValid = true;
            this.client.card_expiration.isValid = true;
            this.client.card_cvv.isValid = true;

            localStorage.clear();
            store.cart.plates.plates = [];
            store.cart.plates.prices = [];
            store.cart.quantity = [];
            store.cart.restaurant = 0;
            store.deliveryCost = 0;

            location.replace('/success');
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
    <div class="container">
        <div class="py-5 text-center">
            <h2>Pagina di Checkout</h2>
            <p class="lead">L'ultimo passo prima di poterti gustare il tuo cibo preferito! This is Pac-Food</p>
        </div>

        <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-muted">Il tuo carrello</span>
                    <span class="badge badge-secondary badge-pill">{{ store.cart.plates.plates.length }}</span>
                </h4>

                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between lh-condensed"
                        v-for="i in store.cart.plates.plates.length">
                        <div>
                            <h6 class="my-0">{{ store.cart.plates.plates[i - 1] }}</h6>
                            <small class="text-muted">Quantità: {{ store.cart.quantity[i - 1] }}</small>
                        </div>
                        <span class="text-muted">{{ store.cart.plates.prices[i - 1] * store.cart.quantity[i - 1] }}
                            &euro;</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                        <span>Costo della consegna</span>
                        <strong>{{ store.deliveryCost }} &euro;</strong>
                    </li>

                    <li class="list-group-item d-flex justify-content-between">
                        <span>Totale</span>
                        <strong>{{ getPrice() }} &euro;</strong>
                    </li>
                </ul>
            </div>

            <div class="col-md-8 order-md-1">
                <h4 class="mb-3">Credenziali</h4>

                <!-- <form action=""> -->
                <div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="client_firstname">Nome</label>
                            <input type="text" class="form-control"
                                :class="client.client_firstname.isValid ? '' : 'invalid'" id="client_firstname"
                                v-model="client.client_firstname.value" required maxlength="100">
                            <div class="text-danger" v-if="!client.client_firstname.isValid">
                                {{ client.client_firstname.error }}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="client_lastname">Cognome</label>
                            <input type="text" class="form-control" :class="client.client_lastname.isValid ? '' : 'invalid'"
                                id="client_lastname" v-model="client.client_lastname.value" required maxlength="100">
                            <div class="text-danger" v-if="!client.client_lastname.isValid">
                                {{ client.client_lastname.error }}
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" :class="client.email.isValid ? '' : 'invalid'" id="email"
                            v-model="client.email.value" required maxlength="255">
                        <div class="text-danger" v-if="!client.email.isValid">
                            {{ client.email.error }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="client_phone">Numero di telefono</label>
                        <input type="text" class="form-control" :class="client.client_phone.isValid ? '' : 'invalid'"
                            id="client_phone" v-model="client.client_phone.value" required maxlength="20">
                        <div class="text-danger" v-if="!client.client_phone.isValid">
                            {{ client.client_phone.error }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="client_address">Indirizzo di spedizione</label>
                        <input type="text" class="form-control" :class="client.client_address.isValid ? '' : 'invalid'"
                            id="client_address" v-model="client.client_address.value" required maxlength="255">
                        <div class="text-danger" v-if="!client.client_address.isValid">
                            {{ client.client_address.error }}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="delivery_time">Orario di consegna</label>
                        <input type="time" class="form-control" :class="client.delivery_time.isValid ? '' : 'invalid'"
                            id="delivery_time" v-model="client.delivery_time.value" required>
                        <div class="text-danger" v-if="!client.delivery_time.isValid">
                            {{ client.delivery_time.error }}
                        </div>
                    </div>

                    <hr class="mb-4">

                    <h4 class="mb-3">Metodo di pagamento</h4>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="card_number">Numero della carta</label>
                            <input type="text" class="form-control" :class="client.card_number.isValid ? '' : 'invalid'"
                                id="card_number" v-model="client.card_number.value" required minlength="16" maxlength="16">
                            <div class="text-danger" v-if="!client.card_number.isValid">
                                {{ client.card_number.error }}
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="card_cvv">CVV</label>
                            <input type="text" class="form-control" :class="client.card_cvv.isValid ? '' : 'invalid'"
                                id="card_cvv" v-model="client.card_cvv.value" required minlength="3" maxlength="3">
                            <div class="text-danger" v-if="!client.card_cvv.isValid">
                                {{ client.card_cvv.error }}
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 d-flex align-items-center gap-2">
                        <label for="card_number">Data di scadenza</label>

                        <div>
                            <select id="card_expiration_month" class="form-control"
                                v-model="client.card_expiration.value.month" required>
                                <option :value="i" v-for="i in 12">{{ i }}</option>
                            </select>
                            <div class="text-danger" v-if="!client.card_expiration.isValid">
                                {{ client.card_expiration.error }}
                            </div>
                        </div>

                        <div>
                            <select id="card_expiration_year" class="form-control"
                                v-model="client.card_expiration.value.year" required>
                                <option :value="i + 22" v-for="i in 20">{{ i + 22 }}</option>
                            </select>
                            <div class="text-danger" v-if="!client.card_expiration.isValid">
                                {{ client.card_expiration.error }}
                            </div>
                        </div>
                    </div>

                    <hr class="mb-4">

                    <button class="btn btn_orange mb-3" @click.preventDefault()="validate()">
                        Effettua il pagamento
                    </button>
                </div>
                <!-- </form> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@import '../styles/_variables';

.invalid {
    border-color: red;
}

.form-control:focus {
    box-shadow: 0 0 0 0.25rem rgb(253 184 13 / 25%) !important;
    border-color: $primary;
}
</style>