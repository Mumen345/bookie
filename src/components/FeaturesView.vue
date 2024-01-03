<template>
    <div>
        <div class="first_section">
            <div class="first_container">
                <h4>{{ one.header }}</h4>
                <p>{{ one.text }}</p>
                <img :src="one.link" alt="">
            </div>
            <div class="second_container">
                <h4>{{ two.header }}</h4>
                <p>{{ two.text }}</p>
                <img :src="two.link" alt="">
            </div>
        </div>
        <div class="second_section">
            <div class="second_container">
                <h4>{{ three.header }}</h4>
                <p>{{ three.text }}</p>
                <img :src="three.link" alt="">

            </div>
            <div class="first_container white">
                <h4>{{ four.header }}</h4>
                <p>{{ four.text }}</p>
                <img :src="four.link" alt="">
            </div>
        </div>
        <div class="first_section">
            <div class="first_container">
                <h4>{{ five.header }}</h4>
                <p>{{ five.text }}</p>
                <img :src="five.link" alt="">
            </div>
            <div class="second_container">
                <h4>{{ six.header }}</h4>
                <p>{{ six.text }}</p>
                <img :src="six.link" alt="">
            </div>
        </div>
        <div class="second_section">
            <div class="second_container">
                <h4>{{ seven.header }}</h4>
                <p>{{ seven.text }}</p>
                <img :src="seven.link" alt="">

            </div>
            <div class="first_container white">
                <h4>{{ eight.header }}</h4>
                <p>{{ eight.text }}</p>
                <img :src="eight.link" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FeatureView",
    data() {
        return {
            one: {
                header: "Efficient Visitor Management",
                text: "Reduce check-in times by up to 50% with BookTime's digital check-in process, ensuring a swift and stress-free experience for both visitors and staff.",
                link: require('../assets/images/one.png'),
            },
            two: {
                header: "Seamless Integration with Existing Systems",
                text: "BookTime easily integrates with existing office management tools, minimizing disruptions and maximizing productivity",
                link: require('../assets/images/two.png'),
            },
            three: {
                header: "Real-Time Visibility",
                text: "Gain instant visibility into visitor activities with real-time dashboards. Track and analyze visitor patterns to enhance operational insights",
                link: require('../assets/images/three.png'),
            },
            four: {
                header: "Enhanced Security Measures",
                text: "Experience a 30% improvement in security protocols. BookTime integrates seamlessly with advanced access control and surveillance systems, ensuring a secure environment.",
                link: require('../assets/images/four.png'),
            },

            five: {
                header: "Time-Saving Pre-Scheduling",
                text: "Pre-schedule VIP visits with a 40% reduction in guest wait-times. Personalized links allow hosts to pre-register guests, streamlining their entry upon arrival.",
                link: require('../assets/images/five.png'),
            },
            six: {
                header: "Tailored Check-In Workflows",
                text: "Customize check-in processes for different visitor segments thereby reducing processing time for regular visitors, Contractors, consultants, job seekers etc.",
                link: require('../assets/images/six.png'),
            },
            seven: {
                header: "Proactive Emergency Preparedness",
                text: "BookTime's integration with physical security systems provides real-time occupancy data, aiding in swift and targeted responses during crises.",
                link: require('../assets/images/seven.png'),
            },
            eight: {
                header: "Data-Driven Decision-Making",
                text: "BookTime's analytics dashboard provides actionable insights, contributing to increase data-driven decision-making.",
                link: require('../assets/images/eight.png'),
            },


        }
    },
}
</script>

<style lang="scss" scoped>
p {
    color: #1c1c1cb3;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    /* 175% */
}

.first_section {
    display: flex;
    width: 77%;
    margin: 0 auto;
    justify-content: center;
    gap: 40px;
}

.first_container {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #eff2f5;
    border-radius: 20px;
    padding: 40px;
}


.first_container img {
    width: 100%;

}

.second_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 40px;
    background-color: #eff2f5;
    border-radius: 20px;
    width: 65%;
}

.second_container img {
    width: 100%;
}

.second_section {
    width: 77%;
    background-color: #eff2f5;
    display: flex;
    margin: 30px auto;
    padding: 20px 40px 0 40px;
    border-radius: 20px;

}

.white {
    background-color: #ffffff;
    border-radius: 20px 20px 0 0;
}

@media only screen and (max-width: 1120px) {
    .first_section {
        width: 90%;
        flex-direction: column;
        text-align: center;
    }

    .second_section {
        width: 100%;
        padding: 30px 10px;
        flex-direction: column;
        text-align: center;
        border-radius: 0;
        background-color: #eff2f5;
    }

    .second_container {
        width: 100%;
        background-color: #ffffff00;
        padding: 5px;
        border-radius: 0;
    }

    .first_container {
        width: 100%;
        padding: 5px;
        background-color: #ffffff00;
        margin-top: 20px;
    }

    .white {
        background-color: #ffffff;
        border-radius: 10px;
        padding: 20px 5px 5px 5px;


    }
}
</style>