<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
/* import { reactive } from 'vue'; */

export default {
  components: {
    UserData,
  },

  setup() {
    /*
    const uName = ref('Pablo');
     */
    const uAge = ref(28);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);
    /* const user = reactive({ name: 'Pablo', age: 28 }); */

    const uName = computed(function () {
      return firstName.value + ' ' + lastName.value;
    });
    /* watch(uAge, function (newValue, oldValue) {
      console.log('Age changed from ' + oldValue + ' to ' + newValue);
    }); */

    provide('userAge', uAge);

    watch([uAge, uName], function (newValue, oldValue) {
      console.log('Old age: ' + oldValue[0]);
      console.log('New age: ' + newValue[0]);

      console.log('Old name: ' + oldValue[1]);
      console.log('New name: ' + newValue[1]);
    });

    /* Replacing the methods with just functions inside the setup

    */
    function setNewAge() {
      uAge.value = 30;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
    };
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
