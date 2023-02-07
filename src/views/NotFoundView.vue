
<script>

export default {
    name: 'NotFound'
}  
</script>

<template>
    <div class="container-fluid text-center py-5 m-0">
        <img src="img/pagina-errore-404.webp" alt="">
        <div class="text-center my-3">
            <router-link to="/"> <a type="button" class="btn btn-secondary" href="">Back To Home Page</a></router-link>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

.container-fluid {
    background-color: rgba(43, 50, 61, 255);
}
</style>