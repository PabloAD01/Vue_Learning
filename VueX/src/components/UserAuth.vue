<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-else>Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    /* login(){
        this.$store.dispatch('login')
    },
    logout(){
        this.$store.dispatch('logout')

    }, */

    ...mapActions(['login', 'logout']),
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsLoggedIn;
    },
  },
};
</script>
