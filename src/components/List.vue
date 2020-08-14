<template>
  <div class="container">
    <div class="card-wrapper" v-for="item in items" :key="item.id">
      <Sender :data="item.sender" />
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
import Card from './Card';
import Sender from './Sender';

export default {
  name: 'List',
  components: { Card, Sender },
  props: {
    items: Array
  }
};
</script>

<style lang="scss" scoped>
.container {
  scroll-snap-align: start;
  overflow-y: scroll;
  height: 100%;
  min-width: 100vw;
}

.card-wrapper {
  padding: 1em 0;
  width: 100vw;
}
</style>
