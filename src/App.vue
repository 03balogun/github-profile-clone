<template>
  <div id="app">
    <app-header />
    <main>
      <router-view/>
    </main>
    <footer class="footer">
      <router-link v-if="$route.name !== 'home'" to="/">
        Back to search
      </router-link>
    </footer>
  </div>
</template>

<style>
  @import "assets/styles.css";
</style>
<script>
  import AppHeader from "@/components/AppHeader";
  export default {
    components: {AppHeader}
  }
</script>
