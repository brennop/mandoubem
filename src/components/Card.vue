<template>
  <div class="card">
    <Select v-model="sender" />
    <img :src="photo_url" />
    <div class="text-wrapper">
      <textarea :defaultValue="description" />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  </div>
</template>

<script>
import Select from './Select';

export default {
  name: 'Card',
  components: {
    Select
  },
  props: {
    data: {
      type: Object,
      sender: {
        key: String,
        label: String
      },
      description: String,
      photo_url: String
    },
    editable: Boolean
  },
  data() {
    return this.editable
      ? {
          sender: {
            key: '',
            name: ''
          },
          description: '',
          photo_url: 'https://source.unsplash.com/random'
        }
      : this.data;
  }
};
</script>

<style scoped lang="scss">
.card {
  width: 320px;
  height: 400px;
  padding: 1.5em;
  border-radius: 0.5em;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.2);

  & > * {
    margin: 0.5em 0;
  }
}

.text-wrapper {
  height: 8em;
  position: relative;

  textarea {
    font-family: Inter, sans-serif;
    height: 8em;
    font-size: 1rem;
    resize: none;
    border: none;
    position: absolute;
    background: none;
    line-height: 2em;
    width: 100%;
  }

  hr {
    height: 2em;
    border: none;
    border-bottom: 2px solid black;
    margin: 0;
  }
}

img {
  object-fit: cover;
  object-position: center;
  flex: 1 0 auto;
  height: 0;
}
</style>
