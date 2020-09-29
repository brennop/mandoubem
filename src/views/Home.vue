<template>
  <div class="scroll-wrapper">
    <div class="send" ref="top">
      <header>
        <h1>Mandou Bem</h1>
      </header>
      <div class="card-wrapper">
        <Card :editable="true" v-observe-visibility="changeAction" />
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
  methods: mapActions([
    'getReceivers',
    'getReceived',
    'getSent',
    'changeAction'
  ]),
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
  height: -webkit-fill-available;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;

  & > * {
    scroll-snap-align: start;
  }
}

.send {
  height: 90%;
  display: flex;
  flex-direction: column;
}

.card-wrapper {
  display: flex;
  place-items: center;
  height: 100%;
}

header {
  padding: 1em;
  border-bottom: 1px solid #ddd;

  h1 {
    margin: 0;
    font-family: Poppins, sans-serif;
  }
}
</style>
