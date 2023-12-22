<template>
    <div class="service_section">
        <div class="left_container">
            <p class="tag_p">Our Services</p>
            <h3>Discover the Best in Efficient Visit Management with BookTime. </h3>
            <p>We're not just a platform; we're your dedicated partner in creating a secure, efficient, and welcoming
                workplace. Sign up now to transform your approach to managing workplace visits!"</p>
            <a href="mailto:info@damdam.com" class="secondary_button">Request a Demo</a>
        </div>
        <div class="right_container">
            <div class="section_1">

                <div class="small_div ">
                    <img src="../assets/images/Icon.svg" alt="">
                    <h5>Seemless Check-Ins</h5>
                    <p>Simplify visitor check-ins with our intuitive system, ensuring a seamless entry experience. <br></p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-1.svg" alt="">
                    <h5>Automated Scheduling</h5>
                    <p>Save time and resources by automating appointment scheduling, making the process efficient.</p>
                </div>
            </div>
            <div class="section_1 ">

                <div class="small_div  ">
                    <img src="../assets/images/Icon-2.svg" alt="">
                    <h5>Enhanced Security Measure</h5>
                    <p>Prioritize workplace security with robust measures to safeguard sensitive information.

                    </p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-3.svg" alt="">
                    <h5>Picture Experience.</h5>
                    <p>Impress visitors with a modern and efficient check-in process, creating a positive first impression.
                    </p>
                </div>
            </div>
            <div class="section_1">

                <div class="small_div  ">
                    <img src="../assets/images/Icon-4.svg" alt="">
                    <h5>Secure Data Management</h5>
                    <p>Ensure the safety and integrity of your data through our secure data management solutions.</p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-5.svg" alt="">
                    <h5>Customizable Solutions</h5>
                    <p>Tailor BookTime to your organization's unique needs with customizable features.</p>
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