<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
nav a.router-link-exact-active {
  color: #2A2929 !important;
  text-decoration: underline !important;
  text-decoration-color: #FF540B !important;
}

#app {
  // font-family: 'Roboto', Helvetica, Arial, sans-serif;
  color: #1B1B1B;
  // background-color: #eff2f5;
  margin: 0 auto;
  max-width: 1600px;
  overflow: hidden;
}

body {
  margin: 0 auto;
  max-width: 1600px;
}

.black_button {
  background-color: #000000;
  width: 150px;
  border: none;
  outline: none;
  color: #ffffff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}


.secondary_button {
  background-color: initial;
  background-image: linear-gradient(#8614f8 0, #760be0 100%);
  border-radius: 5px;
  border-style: none;
  box-shadow: rgba(245, 244, 247, .25) 0 1px 1px inset;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  height: 60px;
  line-height: 60px;
  margin-left: -4px;
  outline: 0;
  text-align: center;
  transition: 2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: bottom;
  width: 190px;
}

.secondary_button:hover {
  opacity: .7;
}

@media screen and (max-width: 500px) {
  .secondary_button {
    font-size: 14px;
    height: 55px;
    line-height: 55px;
    width: 100%;
  }
}


.btn_grad {
  background-image: linear-gradient(to right, #004C99 0%, #31C580 51%, #004C99 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
  border: none;
  display: block;
}

.btn_grad:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}


.primary_button {
  background-color: initial;
  background-image: linear-gradient(-180deg, #00D775, #00BD68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: NunitoMedium;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 180px;
  z-index: 9;
  border: 0;
}

.primary_button:hover {
  background: #00bd68;
}


a {
  color: inherit;
  font-family: NunitoMedium;
}

html {
  scroll-behavior: smooth;
  margin: 0 auto;
  max-width: 1500px !important;
}

@font-face {
  font-family: NunitoBlack;
  src: url("./assets/fonts/Nunito-Black.ttf");
}

@font-face {
  font-family: NunitoBold;
  src: url("./assets/fonts/Nunito-Bold.ttf");
}

@font-face {
  font-family: NunitoExtraBold;
  src: url("./assets/fonts/Nunito-ExtraBold.ttf");
}

@font-face {
  font-family: NunitoExtraLight;
  src: url("./assets/fonts/Nunito-ExtraLight.ttf");
}

@font-face {
  font-family: NunitoLight;
  src: url("./assets/fonts/Nunito-Light.ttf");
}

@font-face {
  font-family: NunitoMedium;
  src: url("./assets/fonts/Nunito-Medium.ttf");
}

@font-face {
  font-family: NunitoRegular;
  src: url("./assets/fonts/Nunito-Regular.ttf");
}

@font-face {
  font-family: NunitoSemiBold;
  src: url("./assets/fonts/Nunito-SemiBold.ttf");
}

h1 {
  color: #1B1B1B;
  font-family: NunitoBlack !important;
  font-size: 70px;
  line-height: 135.036%;
  /* 94.525px */
}

h2 {
  color: #1B1B1B;
  font-family: NunitoBold;
  font-size: 60.879px;
  font-style: normal;
  font-weight: 700;
  line-height: 72.294px;
}

@media only screen and (max-width: 1000px) {
  h1 {
    color: #1B1B1B;
    font-family: NunitoBlack !important;
    font-size: 70px;
    line-height: 135.036%;
  }

  h2 {
    font-size: 40px;
    font-family: NunitoBlack !important;
  }
}

@media only screen and (max-width: 961px) {
  h1 {
    color: #1B1B1B;
    font-family: NunitoBlack !important;
    font-size: 60px;
    line-height: 135.036%;
  }

}

@media only screen and (max-width: 726px) {
  h1 {
    color: #1B1B1B;
    font-family: NunitoBlack !important;
    font-size: 40px;
    line-height: 135.036%;
  }
}
</style>
