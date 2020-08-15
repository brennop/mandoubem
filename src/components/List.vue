<template>
  <div class="list" v-observe-visibility="visibilityHandler">
    <div class="card-wrapper" v-for="item in items" :key="item.id">
      <Sender :data="item.sender" />
      <Card :data="item" />
    </div>
  </div>
</template>

<script>
import Card from './Card';
import Sender from './Sender';
import { mapMutations } from 'vuex';

export default {
  name: 'List',
  components: { Card, Sender },
  props: {
    items: Array,
    section: String
  },
  methods: {
    ...mapMutations(['setSection']),
    onVisibilittyChange(isVisible) {
      if (isVisible) {
        this.setSection(this.section);
      }
    }
  },
  created() {
    this.visibilityHandler = {
      callback: this.onVisibilittyChange,
      intersection: {
        rootMargin: '-10%'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.list {
  scroll-snap-align: start;
  overflow-y: scroll;
  height: 100%;
  min-width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}

.card-wrapper {
  padding: 1em 0;
}
</style>
