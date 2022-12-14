<template>
  <tr>
    <td>
      <DeleteButton />
      <EditButton />
      <ReleaseButton />
    </td>
    <td></td>
  </tr>
</template>

<script>
import DeleteButton from "@/components/DeleteButton.vue";
import EditButton from "@/components/EditButton.vue";
import ReleaseButton from "@/components/ReleaseButtton.vue";

export default {
  data() {
    return {
      text: "Bam Bam",
    };
  },
  components: {
    DeleteButton,
    EditButton,
    ReleaseButton,
  },
};
</script>

<style scoped>
td {
  display: flex;

  gap: 5px;
}
</style>
