<template>
  <div id="app">
    <router-view v-if="$store.state.authenticated" />
    <Login v-else />
  </div>
</template>

<script>
import Login from './views/Login';

export default {
  components: { Login }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0;
    height: 0;
  }
}

body {
  margin: 0;
}

html,
body {
  position: fixed;
  overflow: hidden;
}

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
