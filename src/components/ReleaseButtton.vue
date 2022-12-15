<template>
  <button class="btn-release">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.903"
      height="19.395"
      fill="currentColor"
      @click="triggerRelease"
    >
      <path
        d="M22.903 2.828 20.075 0 6.641 13.435 3.102 9.09 0 11.616l6.338 7.779L22.903 2.828z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "ReleaseButton",
  methods: {
    triggerRelease() {
      this.$emit("release");
    },
  },
};
</script>

<style scoped>
.btn-release {
  height: 40px;
  width: 40px;
  padding-top: 5px;
  color: var(--clr-white-02);
  border-radius: 50%;
  background-color: var(--clr-meganta-02);
  border: none;
}
.btn-release:hover {
  color: var(--clr-meganta-02);
  background-color: var(--clr-white-02);
  border: 2px solid var(--clr-meganta-02);
  cursor: pointer;
}
</style>
