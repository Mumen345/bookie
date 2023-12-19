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
  max-width: 1500px;
}

body {
  margin: 0 auto;
  max-width: 1500px;
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
