<template>
  <button class="btn-delete">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-trash-fill"
      viewBox="0 0 16 16"
    >
      <path
        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "DeleteButton",
};
</script>

<style scoped>
.btn-delete {
  padding-top: 5px;
  height: 40px;
  width: 40px;
  color: var(--clr-white-02);
  background-color: var(--clr-magenta-01);
  border-radius: 50%;
  border: none;
}
.btn-delete:hover {
  color: var(--clr-magenta-01);
  background-color: var(--clr-white-02);
  box-shadow: 1px 1px 1px px var(--clr-magenta-01);
  border: 2px solid var(--clr-magenta-01);
  cursor: pointer;
}
</style>
