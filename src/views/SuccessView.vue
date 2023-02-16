<script>
export default {
    name: 'SuccessView',
    mounted() {
        setTimeout(f => {
            location.replace('/');
        }, 6000);
    }
}  
</script>

<template>
    <div class="container-fluid text-center text-light py-5 m-0">
        <div class="lead">Ordine effettuato correttamente.</div>
        <div>Riceverai una email di conferma tra pochi istanti.</div>
        <div>Reindirizzamento alla Pagina di Benvenuto in corso...</div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.container-fluid {
    background-color: rgba(43, 50, 61, 255);
}
</style>