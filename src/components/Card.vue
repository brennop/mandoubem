<template>
  <div class="card">
    <Select v-model="sender" v-if="editable" />
    <span class="receiver" v-else>{{ receiver.full_name }}</span>
    <img :src="didgood_photo_path" />
    <div class="text-wrapper">
      <textarea
        :defaultValue="description"
        placeholder="Solta o verbo"
        maxlength="120"
        v-model="description"
        :disabled="!editable"
      />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
    <span v-if="editable" class="counter">{{ charCount }}/120</span>
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
      receiver: {
        full_name: String
      },
      description: String,
      didgood_photo_path: String
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
          didgood_photo_path: 'https://source.unsplash.com/random'
        }
      : this.data;
  },
  computed: {
    charCount() {
      return this.description.length;
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  width: 320px;
  padding: 1em 1.5em;
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
    overflow: hidden;

    color: #000;
    -webkit-text-fill-color: #000;
    -webkit-opacity: 1;
    opacity: 1;
  }

  hr {
    height: 2em;
    border: none;
    border-bottom: 2px solid black;
    margin: 0;
  }
}

.receiver {
  border-bottom: 2px solid #000;
  height: 2em;
}

.counter {
  align-self: flex-end;
}

img {
  object-fit: cover;
  object-position: center;
  flex: 1 0 auto;
  height: 8em;
}
</style>
