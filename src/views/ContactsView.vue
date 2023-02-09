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
                <div class="col-4 border-end border-2 mt-3 p-3 mb-5">
                    <div class="online_order_number">
                        <p>Chiamaci</p>
                        <h5>0000-123-456789</h5>
                    </div>
                </div>
                <div class="col-4 ms-4">
                    <div class="online_order_mail mt-3 p-3 mb-5">
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
            class="container d-flex justify-content-center mt_custom flex-column align-items-center border-bottom border-2 w-75">
            <!-- ritiro in negozio -->
            <div class="row">
                <h2>Ritiro in negozio</h2>
                <div class="col-4 border-end border-2 mt-3 p-3 mb-5">
                    <div class="store_pickup_number">
                        <p>Chiamaci</p>
                        <h5>0000-123-456789</h5>
                    </div>
                </div>
                <div class="col-4 ms-4 border-end border-2 mt-3 p-3 mb-5">
                    <div class="store_pickup_mail">
                        <p>Inviaci una mail</p>
                        <h5>info@example.com</h5>
                    </div>
                </div>
                <div class="col-3 ms-4">
                    <div class="store_pickup_address mt-3 p-3 mb-5">
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