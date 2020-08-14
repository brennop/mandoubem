<template>
  <div class="scroll-wrapper">
    <div>
      <header>
        <h1>Mandou Bem</h1>
      </header>
      <div class="view">
        <Card :editable="true" />
      </div>
    </div>
    <ListSection />
  </div>
</template>

<script>
import Card from '@/components/Card';
import ListSection from './ListSection';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { Card, ListSection },
  methods: mapActions(['getReceivers', 'getReceived', 'getSent']),
  created() {
    this.getReceivers();
    this.getReceived();
    this.getSent();
  }
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > * {
    scroll-snap-align: start;
  }
}

.view {
  padding: 20% 0;
}

header {
  padding: 1em;
  border-bottom: 1px solid #ddd;

  h1 {
    margin: 0;
  }
}
</style>
