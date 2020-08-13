<template>
  <div>
    <div class="view">
      <Card editable />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: { Card },
  methods: mapActions(["getReceivers"]),
  created() {
    this.getReceivers();
  }
};
</script>

<style lang="scss" scoped>
.view {
  height: 100vh;
  padding: 25% 0;
}
</style>
