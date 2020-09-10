<template>
  <div id="app">
    <app-header />
    <main>
      <router-view/>
    </main>
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
