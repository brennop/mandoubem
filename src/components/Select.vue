<template>
  <v-select
    :options="$store.state.receivers"
    :clearable="false"
    v-on="$listeners"
    v-bind="$attrs"
    placeholder="Quem mandou bem?"
  >
    <template #open-indicator>
      <span></span>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'Select'
};
</script>

<style lang="scss">
$vs-state-disabled-bg: transparent;
$vs-state-disabled-cursor: default;

@import 'vue-select/src/scss/vue-select.scss';

.v-select .vs__dropdown-toggle {
  border: none;
  border-bottom: 2px solid #000;
  border-radius: 0;
}

.v-select .vs__dropdown-menu {
  border: 1px solid #ddd;
  border-radius: 0.5em;
}
</style>
