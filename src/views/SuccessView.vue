<script>
export default {
    name: 'SuccessView'
}  
</script>

<template>
    <div class="container-fluid d-flex flex-column gap-3 align-items-center text-center text-light py-5 m-0">
        <div class="lead">Ordine effettuato correttamente.</div>
        <!-- <div>Riceverai una email di conferma tra pochi istanti.</div> -->
        <div>Grazie per aver utilizzato il nostro servizio</div>

        <img src="../assets/img/pacfood-logo.png" alt="pacfood_logo" class="success_logo">

        <router-link :to="{ name: 'home' }" class="btn btn_orange">Torna alla Pagina di Benvenuto</router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.container-fluid {
    background-color: rgba(43, 50, 61, 255);
}

.success_logo {
    width: 7rem;
}
</style>