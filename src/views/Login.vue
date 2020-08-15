<template>
  <div class="layout">
    <main>
      <h1>Mandou Bem</h1>
      <form @submit="handleSubmit">
        <FloatInput label="E-mail" type="email" v-model="email" />
        <FloatInput label="Password" type="password" v-model="password" />
        <button>
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import FloatInput from '@/components/FloatInput';
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  components: {
    FloatInput
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const { email, password } = this;
      this.login({ email, password });
    },
    ...mapActions(['login'])
  }
};
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
}

main {
  max-width: 400px;
  width: 100%;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 0.25em;
  font-size: 3em;
  font-weight: 800;
  font-family: Poppins, sans-serif;
}

button {
  align-self: flex-end;
  padding: 0.4em 2em;
  cursor: pointer;
  font-size: 1.2em;
  background: #000;
  border-radius: 0.4em;
  border: none;
  color: #fff;
  margin: 0 0.5em;
}
</style>
