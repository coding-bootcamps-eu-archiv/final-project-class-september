<template>
  <tr>
    <td :class="classForCbeAnnouncement">{{ title }}</td>
    <td>{{ type }}</td>
    <td class="options-style">
      <DeleteButton @delete="triggerDelete" />
      <EditButton @edit="triggerEdit" :id="id" />
      <ReleaseButton @release="triggerRelease" />
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
    isCbeAnnouncement: Boolean,
    class: Boolean,
    id: String,
  },
  components: {
    DeleteButton,
    EditButton,
    ReleaseButton,
  },
  computed: {
    classForCbeAnnouncement() {
      return this.class;
    },
  },
  methods: {
    triggerDelete() {
      this.$emit("delete");
    },
    triggerEdit() {
      this.$emit("edit");
    },
    triggerRelease() {
      this.$emit("release");
    },
  },
};
</script>

<style scoped>
.options-style {
  text-align: center;
  display: flex;
  justify-content: space-evenly;
}

td {
  padding: 20px;
}
</style>
