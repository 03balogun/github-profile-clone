<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <form class="user_search" action="" @submit.prevent="">
          <label for="username">Find a user:</label>
          <input id="username" type="text"
                 class="input"
                 placeholder="Enter a username..."
                 aria-label="Enter a username"
                 v-model="query"
                 @input="search"
                 autocomplete="off"
          />
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="user__result--container">
          <h3 v-if="results.length"
              class="user__result--tile">
            {{results.length}} User(s)
          </h3>

          <span v-if="isSearching">Searching... <i>{{query}}</i></span>

          <template v-if="!isSearching && users.length">
            <user-result v-for="user of users" :key="user.id" :user="user" />
          </template>

          <template v-if="!isSearching && !users.length && query">
            <h3>No user found with username: <i>{{query}}</i></h3>
          </template>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserResult from "@/components/UserResult";
export default {
  name: 'Home',
  components: {UserResult},
  data: () => ({
    query: '',
    results: [],
    isSearching: false
  }),
  computed: {
    users() {
      return this.$store.getters['getUsers'];
    }
  },
  methods: {
    async search(ev) {
      if (!ev.target.value || ev.target.value.length < 3) return;
      this.isSearching = true;
      this.results = [];
      await this.$store.dispatch('searchUsers', ev.target.value);
      this.isSearching = false;
    }
  },
}
</script>

<style scoped>
  .user_search, .user__result--container{
    width: 50%;
    margin: 24px auto auto;
  }

  .user__result--tile{
    margin: 0 0 8px 0;
  }

  .user_search label{
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .user_search, .user__result--container{
      width: 100%;
      margin: 16px auto auto;
    }
  }
</style>
