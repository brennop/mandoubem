<template>
  <div class="list-section">
    <nav>
      <h1 @click="goToReceived" :class="{ active: section === 'received' }">
        Recebidos
      </h1>
      <h1 @click="goToSent" :class="{ active: section === 'sent' }">
        Enviados
      </h1>
    </nav>
    <div class="scroll-wrapper">
      <List :items="received" ref="received" section="received" />
      <List :items="sent" ref="sent" section="sent" />
    </div>
  </div>
</template>

<script>
import List from '@/components/List';
import { mapState } from 'vuex';

export default {
  name: 'ListSection',
  components: { List },
  computed: mapState(['received', 'sent', 'section']),
  methods: {
    goToReceived() {
      this.$refs.received.$el.scrollIntoView({ behavior: 'smooth' });
    },
    goToSent() {
      this.$refs.sent.$el.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-section {
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

.scroll-wrapper {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  overscroll-behavior: none;
  height: 100%;
}

nav {
  padding: 1em;
  border-bottom: 1px solid #ddd;
  font-family: Poppins, sans-serif;
  height: 4em;
  display: flex;
  align-items: flex-start;

  h1 {
    margin: 0 0.5em;
    display: inline;
    transform: scale(0.8);
    opacity: 0.6;
    transition: 0.2s ease-out;
    cursor: pointer;

    &.active {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
