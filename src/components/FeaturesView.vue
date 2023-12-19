<template>
    <div class="feature_container">
        <div class="container_cover">
            <div class="left_div">
                <div class="white_container animated zoomInLeft">
                    <h3>Lorem Ipsum Header</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Netus cursus purus faucibus blandit project discussion elit
                        faucibus potenti cum tempus non. Tortor id morbi velit mollis aliquet. us potenti cum tempus non.
                        Tortor id morbi velit mollis aliquet. us potenti cum tempus non. Tortor id morbi velit mollis
                        aliquet. </p>
                    <!-- <mdb-btn size="lg" tag="a" role="button" href="mailto:hello@booktime.ng" color="deep-purple">Send us a
                        Mail
                        us</mdb-btn> -->
                    <button>Book a Demo</button>
                </div>
                <img class="animated zoomInLeft" src="../assets/images/girl.png" alt="">
            </div>
            <div class="right_div">
                <div class=" top_div animated zoomInRight">


                </div>
                <div class="light-blue darken-3 bottom_div text-light animated zoomInRight">
                    <div>
                        <h2 class="text-light">324+</h2>
                        <p>People have paid their
                            Taxes today</p>
                    </div>
                    <div>
                        <img src="../assets/images/Frame9.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mdbBtn } from 'mdbvue';
export default {
    name: "featuresView",
    // components: { mdbBtn, }
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
    background-color: #25D366;
}

.white_container {
    // height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    background: #ffffff;
    border-radius: 20px;
    padding: 30px 50px;
}

.white_container p {
    color: #111;
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
        // height: 300px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        background: #ffffff;
        border-radius: 20px;
        padding: 30px;
    }


}
</style>