<script>

export default {
    name: 'ContactsView',
    components: {

    }
}  
</script>

<template>
    <section id="banner_contacts">
        <div class="container-fluid bg_orange">
            <div class="container d-flex align-items-center justify-content-center justify-content-around">
                <h1 class="fs_custom">Contatti</h1>
                <img height="400" src="../../public/img/pac-man-contacts.png" alt="">
            </div>
        </div>
    </section>
    <section id="contacts_info">
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
    <div class="container mt-5 pt-5">
        <h1 class="text-uppercase">Contacts</h1>

        <div v-if="success" class="alert alert-success" role="alert">
            Messaggio inviato con successo!
        </div>

        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Full Name</label>
                <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="full name"
                    aria-describedby="fullNameHelper">
                <!-- <p v-for="(error) in errors.name" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                <small id="fullNameHelper" class="text-muted">Add your full name</small>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" name="email" id="email" v-model="email" class="form-control"
                    placeholder="name@example.com" aria-describedby="emailHelper">
                <!-- <p v-for="(error) in errors.email" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
                <small id="emailHelper" class="text-muted">Add your email address</small>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" v-model="message" rows="5"
                    placeholder="type here..."></textarea>
                <!-- <p v-for="(error) in errors.message" class="alert alert-danger mt-2">
                    {{ error }}
                </p> -->
            </div>

            <button type="submit" class="btn btn-primary">
                Contact
            </button>
        </form>
    </div>

</template>

<style lang="scss" scoped>
.bg_orange {
    background-color: orange;
}

.col-3:hover,
.col-4:hover {
    svg {
        color: orange;
        cursor: default;
    }
}

.fs_custom {
    font-size: 4rem;
}

.mt_custom {
    margin-top: 6rem;
}

p {
    font-size: 1rem;
}
</style>