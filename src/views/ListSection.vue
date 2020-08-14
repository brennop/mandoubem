<template>
  <div class="container">
    <nav>
      <h1>Recebidos</h1>
      <h1>Enviados</h1>
    </nav>
    <div class="scroll-wrapper">
      <List :items="received" />
      <List :items="sent" />
    </div>
  </div>
</template>

<script>
import List from '@/components/List';
import { mapState } from 'vuex';
export default {
  name: 'ListSection',
  components: { List },
  computed: mapState(['received', 'sent'])
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
}

.scroll-wrapper {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}

nav {
  padding: 1em;
  border-bottom: 1px solid #ddd;

  h1 {
    margin: 0 0.5em;
    display: inline;
  }
}
</style>
