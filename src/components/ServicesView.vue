<template>
    <div class="service_section">
        <div class="left_container">
            <!-- <p class="tag_p">Our Services</p> -->
            <h3>Our Solution</h3>
            <p>Instead of juggling piles of paperwork, envision a streamlined front desk where one receptionist is all you
                need. With BookTime, there is no need for a fleet of receptionists.
                Now, you will only need that warm smile at the front desk, while BookTime takes care of the rest.
            </p>
            <a href="mailto:info@damdam.com" class="secondary_button">Request a Demo</a>
        </div>
        <div class="right_container">
            <div class="section_1">

                <div class="small_div ">
                    <img src="../assets/images/Icon.svg" alt="">
                    <h5>Efficient Check-ins</h5>
                    <p>With BookTime, visitor check-in times are reduced significantly, ensuring a swift and seamless
                        welcome experience <br></p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-1.svg" alt="">
                    <h5>Precision in Data</h5>
                    <p>Enjoy a 98% accuracy rate with BookTime, eliminating errors associated with manual entries and
                        ensuring reliable visitor records</p>
                </div>
            </div>
            <div class="section_1 ">

                <div class="small_div  ">
                    <img src="../assets/images/Icon-2.svg" alt="">
                    <h5>Enhanced Security</h5>
                    <p>BookTime employs robust encryption, providing a 360-degree security shield and reducing the risk of
                        data breaches by 60%
                    </p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-3.svg" alt="">
                    <h5>Visitor Insights</h5>
                    <p>Gain valuable insights into visitor patterns and preferences, empowering strategic decision-making.
                    </p>
                </div>
            </div>
            <div class="section_1">

                <div class="small_div  ">
                    <img src="../assets/images/Icon-4.svg" alt="">
                    <h5>Improved Staff Productivity</h5>
                    <p>Pre-scheduled visits through BookTime eliminate disruptions, contributing to increase in staff
                        productivity.</p>
                </div>
                <div class="small_div  ">
                    <img src="../assets/images/Icon-5.svg" alt="">
                    <h5>Resource Optimization</h5>
                    <p>BookTime streamlines administrative tasks, saving an average of 10 hours per week, allowing staff to
                        focus on more impactful responsibilities</p>
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
    height: 500px;
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
    height: 320px;
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