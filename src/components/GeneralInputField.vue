<template>
  <input :class="styling" type="text" @input="onInput" />
</template>

<script>
export default {
  name: "InputField",
  props: {
    variant: {
      default: "primary",
    },
    value: {
      default: "title",
    },
  },
  computed: {
    styling() {
      return `input-${this.variant}`;
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event);
    },
  },
};
</script>

<style scoped>
.test {
  margin: 10px;
  width: 200px;
}

.input-primary {
  width: 400px;
  padding: 0.5rem;
  border: 0.2rem solid var(--clr-purple-01);
  border-radius: 0.25rem;
}
.input-secondary {
  width: 200px;
  padding: 0.5rem;
  border: 0.2rem solid var(--clr-purple-01);
  border-radius: 0.25rem;
}
</style>
