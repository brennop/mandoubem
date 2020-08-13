<template>
  <div class="layout">
    <main>
      <h1>Mandou Bem</h1>
      <form>
        <FloatInput label="E-mail" type="email" />
        <FloatInput label="Password" type="password" />
        <button>
          <i class="fas fa-arrow-right"></i>
        </button>
      </form>
    </main>
  </div>
</template>

<script>
import FloatInput from "@/components/FloatInput";

export default {
  name: "Login",
  components: {
    FloatInput
  }
};
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
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
  margin: 1em 0.5em;
  font-size: 2.5em;
  font-weight: 900;
}

button {
  align-self: flex-end;
  padding: 0.5em 2em;
  font-size: 1.2em;
  background: #000;
  border-radius: 0.5em;
  border: none;
  color: #fff;
  margin: 0 0.5em;
}
</style>