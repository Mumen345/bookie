<template>
  <div class="home">
    <NavBar />
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
