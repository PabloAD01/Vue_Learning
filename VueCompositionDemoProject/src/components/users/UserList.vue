<template>
  <base-container>
    <h2>Active Users</h2>
    <base-search
      @search="updateSearch"
      :search-term="enteredSearchTerm"
    ></base-search>
    <div>
      <button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">
        Sort Ascending
      </button>
      <button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">
        Sort Descending
      </button>
    </div>
    <ul>
      <user-item
        v-for="user in displayedUsers"
        :key="user.id"
        :user-name="user.fullName"
        :id="user.id"
        @list-projects="$emit('list-projects', $event)"
      ></user-item>
    </ul>
  </base-container>
</template>

<script>
import { toRefs } from 'vue';
import UserItem from './UserItem.vue';
import useSearch from '../hooks/search.js';
import useSort from '../hooks/sort.js';

export default {
  components: {
    UserItem,
  },
  props: ['users'],

  emits: ['list-projects'],

  setup(props) {
    /* const enteredSearchTerm = ref('');
    const activeSearchTerm = ref('');

    const availableUsers = computed(function () {
      let users = [];
      if (props.activeSearchTerm) {
        users = props.users.filter((usr) =>
          usr.fullName.includes(props.activeSearchTerm)
        );
      } else if (props.users) {
        users = props.users;
      }
      return users;
    });

    watch(enteredSearchTerm, function (val) {
      setTimeout(() => {
        if (val === enteredSearchTerm.value) {
          activeSearchTerm.value = val;
        }
      }, 300);
    });

    function updateSearch(val) {
      enteredSearchTerm.value = val;
    }
 */

    console.log(props.users);

    const { users } = toRefs(props);

    const { enteredSearchTerm, availableItems, updateSearch } = useSearch(
      users,
      'fullName'
    );

    const { sorting, displayedUsers, sort } = useSort(
      availableItems,
      'fullName'
    );

    return {
      enteredSearchTerm,
      updateSearch,
      displayedUsers,
      sorting,
      sort,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
