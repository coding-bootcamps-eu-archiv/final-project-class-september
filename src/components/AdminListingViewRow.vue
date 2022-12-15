<template>
  <tr>
    <td>{{ title }}</td>
    <td>{{ type }}</td>
    <td class="options-style">
      <DeleteButton />
      <EditButton />
      <ReleaseButton />
    </td>
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
  props: {
    title: String,
    type: String,
  },
  components: {
    DeleteButton,
    EditButton,
    ReleaseButton,
  },
};
</script>

<style scoped>
.options-style {
  text-align: center;
}

td {
  padding: 20px;
}
</style>
