<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
/* import { ref } from 'vue'; */
import { reactive } from 'vue';

export default {
  setup() {
    /* const uName = ref('Pablo');
    const uAge = ref(28); */

    const user = reactive({ name: 'Pablo', age: 28 });

    setTimeout(() => {
      user.name = 'Pedro';

      user.age = 29;
    }, 3000);

    return { user: user };
  },
  /* data() {
    return {
      userName: 'Pablo',
    };
  }, */
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
