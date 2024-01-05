<template>
    <div class="navBar">
        <div class="nav_container">

            <router-link v-scroll-to="{ el: '#home', onDone: onDone, onCancel: onCancel }" to="#">
                <img src="../assets/images/logo.svg" alt="">

            </router-link>
            <div class="links">
                <router-link v-scroll-to="{ el: '#services', onDone: onDone, onCancel: onCancel }"
                    to="/#">Solutions</router-link> |
                <router-link v-scroll-to="{ el: '#benefits', onDone: onDone, onCancel: onCancel }"
                    to="/#">Features</router-link>
                |
                <router-link v-scroll-to="{ el: '#faq', onDone: onDone, onCancel: onCancel }" to="/#">F.A.Q
                </router-link>
            </div>
            <a href="https://booktime.ng/signup" target="_blank" class="btn_grad">Login</a>
        </div>
        <div class="topnav">
            <router-link v-scroll-to="{ el: '#home', onDone: onDone, onCancel: onCancel }" to="#">
                <img src="../assets/images/logo_mobile.svg" alt="">

            </router-link>
            <div id="myLinks">
                <router-link v-scroll-to="{ el: '#services', onDone: onDone, onCancel: onCancel }"
                    to="/#">Solutions</router-link>
                <router-link v-scroll-to="{ el: '#benefits', onDone: onDone, onCancel: onCancel }"
                    to="/#">Features</router-link>
                <router-link v-scroll-to="{ el: '#faq', onDone: onDone, onCancel: onCancel }" to="/#">F.A.Q
                </router-link>

                <a class="btn_grad">Login</a>

            </div>
            <a href="https://booktime.ng/signup" target="_blank" class="icon" @click="myFunctiion">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NavbarPage',
    methods: {
        myFunctiion() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }

        }
    }


}
</script>
<style scoped>
.navBar {
    background-color: #EFF2F5;
    position: -webkit-sticky !important;
    position: fixed !important;
    top: 0;
    z-index: 200;
    width: 100%;

}

.nav_container {
    background-color: #EFF2F5;
    display: flex;
    width: 80%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0 auto;

}

.links {
    display: flex;
    gap: 20px;
}

.topnav {
    display: none;
}

@media only screen and (max-width: 1469px) {
    .nav_container {
        width: 90%;
    }

}

@media only screen and (max-width: 769px) {

    .nav_container {
        display: none;
    }

    .topnav {
        overflow: hidden;
        background-color: #eff2f5 !important;
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        transition: height 4s;

    }

    .topnav #myLinks {
        display: none;
        background: #ffffff;
        transition: max-height 650ms;
        padding-bottom: 10px;
        box-sizing: border-box;

    }

    .topnav a {
        color: #2A2929;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 14px;
        display: block;
    }

    .topnav a.icon {
        background: #eff2f5;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav a:hover {
        background-color: #eff2f5;
        color: black;
    }

    .active {
        background-color: #eff2f5;
        color: white;
    }

    .container {
        display: flex;
        background-color: #eff2f5;
        width: 100%;
        justify-content: end;
        height: auto;
        border-bottom: 1px solid #C2C2C2;
        z-index: 0;
        transition: height 4s;
    }
}
</style>