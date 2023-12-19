<template>
    <div class="hero_container">
        <div class="  hero_section">
            <div class="left_div animated flipInX">
                <h1>Ready to Elevate Your Visitor Experience?</h1>
                <p class="hero_text">Sign up for Booktime today and experience a new level of visitor management. Join
                    businesses worldwide
                    that
                    trust Booktime for a secure, efficient, and modern approach to welcoming guests.</p>
                <div>
                    <!-- <mdb-btn size="lg" tag="a" role="button" href="mailto:hello@booktime.ng" color="deep-purple">
                        Book a demo</mdb-btn> -->
                    <button>Rewuest a Demo</button>
                </div>
            </div>
            <div class="  right_img animated pulse infinite">
                <img class="dashboard" src="../assets/images/hero_img.svg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>
// import { mdbBtn } from 'mdbvue';
export default {
    // components: { mdbBtn, }
}
</script>

<style lang="scss" scoped>
.hero_container {
    background-image: url("../assets/images/bg.svg");
    height: 1108px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hero_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    gap: 40px;
}

.hero_text {
    color: #1B1B1B;
    font-family: NunitoMedium;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 222.5%;
}

.left_div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
}

.right_img img {
    // width: 570px;
}


@media only screen and (max-width: 1469px) {

    .hero_section {
        width: 85%;
        gap: 40px;
    }

}

@media only screen and (max-width: 1242px) {
    .hero_section {
        width: 90%;
        gap: 40px;
    }

}

@media only screen and (max-width: 1178px) {
    .hero_section {
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        text-align: center;
    }

    .right_img img {
        width: 100%;
    }

    .hero_container {
        background-image: url("../assets/images/bg.svg");
        background-color: #EFF2F5;
        height: 1000px;
    }


}


@media only screen and (max-width: 1108px) {
    .hero_container {
        background-image: none;
        background-color: #EFF2F5;
        height: auto;
    }
}


@media only screen and (max-width: 769px) {
    .hero_container {
        background-image: none;
        background-color: #EFF2F5;
        height: auto;
        padding-bottom: 30px;
    }
}

@media only screen and (max-width: 383px) {
    .hero_container {
        background-image: none;
        background-color: #EFF2F5;
        height: auto;

    }

}
</style>