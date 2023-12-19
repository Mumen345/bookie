<template>
    <div class="service_section">
        <div class="left_container animated bounce infinite">
            <p class="tag_p">Our Services</p>
            <h3>The digital solution for efficient visit Management.</h3>
            <p>At BookTime, we are more than just a visitor management platform; we are your partner in creating a secure,
                efficient, and welcoming workplace. Join us on this journey of innovation and let BookTime transform the way
                you manage workplace visits.</p>
            <button class="btn btn-black">Send us a Message</button>
        </div>
        <div class="right_container">
            <div v-animateOnScroll="'fadeInRightBig'" class="section_1">

                <div class="small_div ">
                    <img src="../assets/images/Icon.svg" alt="">
                    <h5>Agent Banking 1</h5>
                    <p>Stay updated, check your bank account to manage funds and track transactions securely.</p>
                </div>
                <div class="small_div ">
                    <img src="../assets/images/Icon-1.svg" alt="">
                    <h5>Savings Account</h5>
                    <p>Securely save money, earn interest with a dedicated savings account.</p>
                </div>
            </div>
            <div v-animateOnScroll="'fadeInRightBig'" class="section_1">

                <div class="small_div ">
                    <img src="../assets/images/Icon.svg" alt="">
                    <h5>Multiple Cards.</h5>
                    <p>Bank cards offer easy payments and cash withdrawals, enhancing financial accessibility.</p>
                </div>
                <div class="small_div ">
                    <img src="../assets/images/Icon-3.svg" alt="">
                    <h5>Multiple Cards.</h5>
                    <p>SBank cards offer easy payments and cash withdrawals, enhancing financial accessibility.</p>
                </div>
            </div>
            <div v-animateOnScroll="'fadeInRightBig'" class="section_1">

                <div class="small_div ">
                    <img src="../assets/images/Icon-2.svg" alt="">
                    <h5>Low Interest</h5>
                    <p>Bank yields meager interest, limiting earnings on deposited funds and investments.</p>
                </div>
                <div class="small_div ">
                    <img src="../assets/images/Icon-1.svg" alt="">
                    <h5>Low Interest</h5>
                    <p>Bank yields meager interest, limiting earnings on deposited funds and investments.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { animateOnScroll } from 'mdbvue';
export default {
    // directives: {
    //     animateOnScroll
    // }
}
</script>

<style lang="scss" scoped>
.service_section {
    display: flex;
    width: 100%;
    margin: 80px auto;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.section_1 {
    display: flex;
    gap: 20px;
    flex-direction: row;
    // flex-wrap: wrap;

}

.left_container {
    width: 500px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: start;
    padding: 0 44px;
    border-radius: 30px;
    background-color: #eff2f5;
    height: 700px;
}

.left_container h3 {
    color: #1B1B1B;
    font-family: NunitoMedium !important;
    font-size: 32px;
    font-weight: 700;
    line-height: 53px;
    /* 165.625% */
}

.left_container p {
    color: #111;
    font-family: NunitoMedium;
    font-size: 17.247px;
    font-style: normal;
    font-weight: 400;
    line-height: 38.446px;
    align-self: stretch;
}

.tag_p {
    color: #111;
    font-family: NunitoMedium;
    font-size: 14.372px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.right_container h5 {
    color: #000;
    font-family: NunitoMedium;
    font-size: 19.736px;
    font-style: normal;
    font-weight: 700;
    line-height: 31.248px;
    /* 158.333% */
}

.small_div p {
    color: #434141;
    font-family: NunitoMedium;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.137px;
    /* 222.406% */
}

.small_div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    width: 270px;
    height: 300px;
    // border: 1px solid #eeeeee;
    padding: 30px;
    border-radius: 20px;
    background-color: #eff2f5;

}

.right_container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    width: 685px;
}

@media only screen and (max-width: 1220px) {
    .service_section {
        display: flex;
        width: 90%;
        margin: 80px auto;
        justify-content: center;
        align-items: center;
        gap: 60px;
    }
}

@media only screen and (max-width: 1105px) {
    .service_section {
        width: 95%;
        gap: 40px;
    }

    @media only screen and (max-width: 1020px) {
        .service_section {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;

        }

        .left_container {
            width: 90%;
            height: auto;
            padding: 40px 44px;
            border-radius: 20px;
            align-items: center;
            text-align: center;
        }

        .right_container {
            width: 90%;
            margin: 0 auto;
        }

        .small_div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
            height: 300px;
            border: 1px solid #eeeeee;
            padding: 30px;
            border-radius: 20px;

        }
    }

}

@media only screen and (max-width: 736px) {
    .section_1 {
        flex-wrap: wrap;
    }

}

@media only screen and (max-width: 500px) {
    .left_container {
        width: 90%;
        height: auto;
        padding: 40px 15px;
        border-radius: 20px;
        align-items: center;
        text-align: center;
    }
}
</style>