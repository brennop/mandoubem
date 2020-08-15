<template>
  <button @click="handleClick" class="btn">
    <i class="fas fa-paper-plane" v-if="action == 'send'"></i>
    <i class="fas fa-plus" v-else-if="action == 'scroll'"></i>
  </button>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'MainButton',
  computed: mapState(['action']),
  methods: {
    handleClick() {
      this.$emit(this.action);
    }
  }
};
</script>

<style lang="scss" scoped>
button.btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  margin: 15% 4em;
  bottom: 0;
  right: 0;
  background: #000;
  border: none;
  color: #fff;
  cursor: pointer;
}
</style>
