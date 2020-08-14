<template>
  <div class="container">
    <div class="card-wrapper" v-for="item in items" :key="item.id">
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
import Card from './Card';

export default {
  name: 'List',
  components: { Card },
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
  width: 100vw;
}
</style>
