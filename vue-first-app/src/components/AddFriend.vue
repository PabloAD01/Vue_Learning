<template>
  <form @submit.prevent="submitData">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="enteredName" />
    <label for="phone">Phone</label>
    <input type="text" id="phone" name="phone" v-model="enteredPhone" />
    <label for="email">Email</label>
    <input type="text" id="email" name="email" v-model="enteredEmail" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      if (this.enteredName && this.enteredPhone && this.enteredEmail) {
        this.$emit("submit-data", {
          name: this.enteredName,
          phone: this.enteredPhone,
          email: this.enteredEmail,
          isFavorite: false,
        });
        this.enteredName = "";
        this.enteredPhone = "";
        this.enteredEmail = "";
      } else {
        console.warn("Name, phone, and email are required.");
      }
    },
  },
};
</script>

<style>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
