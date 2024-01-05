<template>
    <div class="hero_container">
        <div class="  hero_section">
            <div class="left_div">
                <h1 class="">Welcome to BookTime!
                    Elevate Your Workplace Visit Management</h1>
                <p class="hero_text">Sign up for Booktime today and experience a new
                    level
                    of visitor management. Join
                    businesses worldwide
                    that
                    trust Booktime for a secure, efficient, and modern approach to welcoming guests.</p>
                <div class="button_div">
                    <a href="mailto:info@damdamglobal.com" class="secondary_button">Request a Demo</a>
                    <CoptText />
                </div>
            </div>
            <div class="">
                <img id="breathing_img" class="dashboard" src="../assets/images/hero_img.svg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<script>
import CoptText from './CoptText.vue';

export default {
    components: { CoptText }
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
    margin-top: 60px !important;
    padding-top: 100px;

}

.button_div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;

}

.hero_section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
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
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 5px;
}


// Breathing animation for image
#breathing_img {
    width: 100%;
    // padding: 12px;
    -webkit-animation: breathing 5s ease-out infinite normal;
    font-size: 16px;
    color: #fff;
    -webkit-font-smoothing: antialiased;
}


@-webkit-keyframes breathing {
    0% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    25% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.9);
        transform: scale(0.9);
    }
}

@keyframes breathing {
    0% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    25% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }

    60% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }

    100% {
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
}

// End Breathing image 



@media only screen and (max-width: 1469px) {

    .hero_section {
        width: 90%;
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
        padding-top: 30px;
        padding-bottom: 30px;
    }
}


@media only screen and (max-width: 769px) {
    .hero_container {
        background-image: none;
        background-color: #EFF2F5;
        height: auto;
        padding-bottom: 30px;
        padding-top: 30px;
        margin-top: 40px !important;
    }

    .hero_text {
        color: #1B1B1B;
        font-family: NunitoMedium;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 200.5%;
    }

    .button_div {
        flex-wrap: wrap;
    }
}

@media only screen and (max-width: 383px) {
    .hero_container {
        background-image: none;
        background-color: #EFF2F5;
        height: auto;
        padding-top: 30px;
        margin-top: 40px !important;

    }

}
</style>