<template>
    <section class=" section_container">
        <h2>
            OOPS
        </h2>
        <p>404 Error</p>
        <p>The page you're looking for cannot be found</p>
        <img src="../assets/images/404_img.png" alt="">
        <router-link class="secondary_button" to="/">Back to Home</router-link>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section_container {
    background-color: #E7E7E7;
    background-image: url("../assets/images/404_bg.svg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

}
</style>