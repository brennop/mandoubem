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
  max-height: 100vh;
  max-height: calc(var(--vh, 1vh) * 100);
}

.scroll-wrapper {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  overscroll-behavior: none;
}

nav {
  padding: 1em;
  border-bottom: 1px solid #ddd;
  font-family: Poppins, sans-serif;

  h1 {
    margin: 0 0.5em;
    display: inline;
  }
}
</style>
