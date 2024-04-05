<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as a Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="coaches in filteredCoaches"
        :key="coaches.id"
        :id="coaches.id"
        :first-name="coaches.firstName"
        :last-name="coaches.lastName"
        :rate="coaches.hourlyRate"
        :areas="coaches.areas"
      ></coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
export default {
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
