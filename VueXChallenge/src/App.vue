<!-- El objetivo de este problema era implementar la lógica de Vuex en este proyecto.
La lógica y la data se controlaban en los mismos componentes, lo que lo hacía
ver mas engorroso.
Al aplicar la lógica de Vuex en este proyecto, se logró hacer el proyecto
mas legible y mantenible. -->

<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },

  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
