<template>
  <div class="container">
    <img :src="url + data.avatar_url" />
    <span class="name">{{ data.full_name }}</span>
  </div>
</template>

<script>
export default {
  name: 'Sender',
  props: {
    data: {
      avatar_url: String,
      full_name: String
    }
  },
  data() {
    return {
      url: 'https://cgr.cjr.org.br'
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 1em 2em;
  align-items: center;

  span {
    padding: 1em;
  }
}

img {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
