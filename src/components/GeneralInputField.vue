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
  width: 500px;
}
.input-secondary {
  width: 300px;
}
</style>
