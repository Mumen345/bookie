<template>
    <div class="feature_container">
        <div class="container_cover">
            <div class="left_div">
                <div class="white_container  animate__animated animate__backInLeft">
                    <h3 class="  ">Lorem Ipsum Header</h3>
                    <p class="">Lorem ipsum dolor sit amet consectetur. Netus cursus
                        purus faucibus blandit project discussion elit
                        faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet. us potenti cum tempus non.
                        Tortor id morbi velit mollis aliquet. us potenti cum tempus non. Tortor id morbi velit mollis
                        aliquet. </p>
                    <!-- <mdb-btn size="lg" tag="a" role="button" href="mailto:hello@booktime.ng" color="deep-purple">Send us a
                        Mail
                        us</mdb-btn> -->
                    <button class="primary_button">Request a Demo</button>

                </div>
                <img class="animate__animated animate__backInLeft" src="../assets/images/girl.png" alt="">
            </div>
            <div class="right_div">
                <div class=" top_div animate__animated animate__backInRight ">


                </div>
                <div class="bottom_div animate__animated animate__backInRight">
                    <div>
                        <h1 class="">
                            +
                            <VueCount />
                        </h1>
                        <p>People have paid their
                            Taxes today</p>
                    </div>
                    <div>
                        <img class="animate__animated animate__backInRight" src="../assets/images/Frame9.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueCount from './VueCount.vue';

// import { mdbBtn } from 'mdbvue';
export default {
    name: "featuresView",
    components: { VueCount }
}
</script>

<style lang="scss" scoped>
.feature_container {
    background: #EFF2F5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10% 0;
    margin-bottom: 100px;
    width: 100%;
}

h3 {
    font-size: 40px;
    font-family: NunitoBold;
}

.left_div img {
    // width: 100%;
}

.left_div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 60%;

}

.top_div {
    height: 500px;
    width: 100%;
    border-radius: 20px;
    background-color: #8f00ff;
}

.white_container {
    // height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background: #6590ff;
    border-radius: 20px;
    padding: 30px 50px;
    background-image: linear-gradient(to right, #004C99 0%, #31C580 51%, #004C99 100%);
    transition: 0.5s;

    background-size: 200% auto;

}

.white_container:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}

.white_container h3 {
    color: #ffffff;
}

.white_container p {
    color: #ffffff;
    font-family: NunitoRegular;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 169%;
    /* 42.75px */
}

.container_cover {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.bottom_div {
    border-radius: 20px;
    padding: 20px;
    background-color: #25D366;
}

.right_div {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 40%;
}

@media only screen and (max-width: 1190px) {
    .container_cover {
        width: 90%;
        flex-direction: column;
    }

    .right_div {
        width: 100%;
    }

    .left_div {
        width: 100%;
    }

    .white_container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        border-radius: 20px;
        background-image: linear-gradient(to right, #004C99 0%, #31C580 51%, #004C99 100%);
        transition: 0.5s;
        background-size: 200% auto;
        // height: 300px;
        padding: 30px;
    }


}
</style>