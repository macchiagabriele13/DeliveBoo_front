<script>

export default {
    name: 'ContactsView',
    components: {

    }
}  
</script>

<template>
    <!-- banner -->
    <section id="banner_contacts">
        <div class="container-fluid bg_orange">
            <div class="container d-flex align-items-center justify-content-center justify-content-around">
                <h1 class="fs_custom">Contatti</h1>
                <img height="400" src="../../public/img/pac-man-contacts.png" alt="">
            </div>
        </div>
    </section>
    <!-- info contatti -->
    <section class="bg_contacts" id="contacts_info">
        <div
            class="container d-flex justify-content-center mt_custom flex-column align-items-center border-bottom border-2 w-75">
            <!-- assistenza ordini online -->
            <div class="row">
                <h2>Assistenza ordini</h2>
                <div class="col-4 border-end border-2 mt-2 p-3 mb-5 d-flex">
                    <div class="phone_image d-flex align-items-center me-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-phone"
                            viewBox="0 0 16 16">
                            <path
                                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </div>
                    <div class="online_order_number lh-1 d-flex flex-column justify-content-center">
                        <p>Chiamaci</p>
                        <h5>0000-123-456789</h5>
                    </div>
                </div>
                <div class="col-4 ms-4 mt-2 p-3 mb-5 d-flex">
                    <div class="mail_image d-flex align-items-center me-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-envelope"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </div>
                    <div class="online_order_mail lh-1 d-flex flex-column justify-content-center">
                        <p>Inviaci una mail</p>
                        <h5>info@example.com</h5>
                    </div>
                </div>
                <div class="col-3 ms-4">
                    <div class="online_order_mail invisible">
                        <p>Noi siamo qui</p>
                        <h5>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</h5>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="container d-flex justify-content-center mt-5 flex-column align-items-center border-bottom border-2 w-75">
            <!-- ritiro in negozio -->
            <div class="row">
                <h2>Ritiro in negozio</h2>
                <div class="col-4 border-end border-2 mt-2 p-3 mb-5 d-flex">
                    <div class="phone_image d-flex align-items-center me-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-phone"
                            viewBox="0 0 16 16">
                            <path
                                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg>
                    </div>
                    <div class="store_pickup_number lh-1 d-flex flex-column justify-content-center">
                        <p>Chiamaci</p>
                        <h5>0000-123-456789</h5>
                    </div>
                </div>
                <div class="col-4 ms-4 border-end border-2 mt-2 p-3 mb-5 d-flex">
                    <div class="mail_image d-flex align-items-center me-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-envelope"
                            viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                    </div>
                    <div class="store_pickup_mail lh-1 d-flex flex-column justify-content-center">
                        <p>Inviaci una mail</p>
                        <h5>info@example.com</h5>
                    </div>
                </div>
                <div class="col-3 ms-4 mt-2 p-3 mb-5 d-flex">
                    <div class="address_image d-flex align-items-center me-3 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" fill="currentColor" class="bi bi-geo-alt"
                            viewBox="0 0 16 16">
                            <path
                                d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                    </div>
                    <div class="store_pickup_address lh-1 d-flex flex-column justify-content-center">
                        <p>Noi siamo qui</p>
                        <h5>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</h5>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <!-- form contatti -->
    <section id="contacts_form">
        <div class="container mt-5 pt-5 w-75">
            <div class="row">
                <h2 class="mb-5">Contattaci</h2>
                <div class="col">
                    <div class="form form_bg p-5 rounded-4 mb-4">

                        <div v-if="success" class="alert alert-success" role="alert">
                            Messaggio inviato con successo!
                        </div>

                        <form>
                            <div class="mb-5">
                                <input type="text" name="name" id="name" v-model="name" class="form-control p-3"
                                    placeholder="Nome" aria-describedby="fullNameHelper">
                                <!-- <p v-for="(error) in errors.name" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                            </div>
                            <div class="mb-5">
                                <input type="email" name="email" id="email" v-model="email" class="form-control p-3"
                                    placeholder="Email" aria-describedby="emailHelper">
                                <!-- <p v-for="(error) in errors.email" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                            </div>
                            <div class="mb-5">
                                <input type="text" name="phone" id="phone" v-model="phone" class="form-control p-3"
                                    placeholder="Numero di cellulare" aria-describedby="phoneHelper">
                                <!-- <p v-for="(error) in errors.phone" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                            </div>
                            <div class="mb-5">
                                <textarea class="form-control p-3" name="message" id="message" v-model="message"
                                    rows="5" placeholder="Messaggio"></textarea>
                                <!-- <p v-for="(error) in errors.message" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                            </div>

                            <button type="submit" class="btn btn-dark btn-lg rounded-pill border-0 padding_custom">
                                Invia
                            </button>
                        </form>
                    </div>
                </div>
                <div class="col delivery">
                    <div class="delivery_time">
                        <div class="card text-bg-light">
                            <img src="../../public/img/delivery-time-contacts.webp" class="card-img" alt="...">
                            <div
                                class="card-img-overlay d-flex justify-content-center align-items-start flex-column w-50">
                                <h2 class="card-title">Tempo di spedizione</h2>
                                <p class="card-text border-bottom border-2">Noi trasportiamo il tuo cibo entro 30
                                    minuti.</p>
                                <h6>Lunedì - Sabato</h6>
                                <p class="card-text"><small>9am - 11pm</small></p>
                                <h6>Domenica</h6>
                                <p class="card-text"><small>11am - 7pm</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="map">
        <div class="google_map d-flex justify-content-center mt-4 mb-5">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190029.01773433204!2d12.395913405746331!3d41.90998597310972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6196f9928ebb%3A0xb90f770693656e38!2sRoma%20RM!5e0!3m2!1sit!2sit!4v1675980617138!5m2!1sit!2sit"
                width="1150" height="600" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

</template>

<style lang="scss" scoped>
.bg_orange {
    background-color: orange;
}

.bg_contacts {
    background-image: url('../../public/img/contact_layout_bg.webp');
    background-size: cover;
    background-repeat: no-repeat;
}

.col-3:hover,
.col-4:hover {
    svg {
        color: orange;
        cursor: default;
    }
}

.form_bg {
    background-image: url('../../public/img/form_bg.webp');
}

.btn.btn:hover {
    background-color: red;

}

.fs_custom {
    font-size: 4rem;
}

.mt_custom {
    margin-top: 6rem;
}

.padding_custom {
    padding: 1rem 14rem;
}

p {
    font-size: 1rem;
}
</style>