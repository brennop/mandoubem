<template>
  <div>
    <input
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      :id="label"
      placeholder
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'FloatInput',
  inheritAttrs: false,
  props: {
    label: String
  }
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  margin: 0.5em;
}

input:focus ~ label,
input:not(:placeholder-shown) ~ label {
  transform: translate(0.5em, -4em);
  opacity: 0.8;
}

input {
  border: none;
  border-bottom: 2px solid #000;
  padding: 0.8em 0.4em;
  font-size: 16px;
  outline: none;
}

label {
  transform: translate(1em, -2em);
  transition: 0.15s ease-out;
  align-self: start;
}
</style>
