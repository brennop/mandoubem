<template>
  <div id="app">
    <router-view v-if="$store.state.authenticated" />
    <Login v-else />
  </div>
</template>

<script>
import Login from "./views/Login";

export default {
  components: { Login }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
