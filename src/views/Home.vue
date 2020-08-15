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
    <MainButton @scroll="handleScroll" />
  </div>
</template>

<script>
import Card from '@/components/Card';
import MainButton from '@/components/MainButton';
import ListSection from './ListSection';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: { Card, ListSection, MainButton },
  methods: {
    ...mapActions(['getReceivers', 'getReceived', 'getSent', 'changeAction']),
    handleScroll() {
      this.$refs.top.scrollIntoView({ behavior: 'smooth' });
    }
  },
  created() {
    this.getReceivers();
    this.getReceived();
    this.getSent();

    // fix 100vh in height
    // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setVh);
    setVh();
  }
};
</script>

<style lang="scss" scoped>
.scroll-wrapper {
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
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
  }
}
</style>
