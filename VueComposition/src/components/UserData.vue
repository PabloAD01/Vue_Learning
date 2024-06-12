<template>
  <h2>{{ uName }}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';

export default {
  props: ['firstName', 'lastName'],

  setup(props /* context */) {
    const uName = computed(function () {
      return props.firstName + ' ' + props.lastName;
    });

    const age = inject('userAge');

    /* context.emit ('ageWasEdited', props.age); */ //funciona como el anterior this.$emit

    return { uName, age };
  },

  /* computed: {
    userName() {
      return this.firstName + ' ' + this.lastName;
    },
  }, */
};
</script>
