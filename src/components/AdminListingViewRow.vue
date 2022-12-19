<template>
  <tr>
    <td>
      <a :href="url" target="_blank" class="link-style"> {{ title }}</a>
      <p class="status-style" v-if="isSuggestion">Suggestion, please review</p>
      <p class="status-style" v-else-if="isActive === false">
        Entry is not released
      </p>
    </td>

    <td>
      {{ type }} <br />
      <p class="url-styling">{{ url }}</p>
    </td>
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
    id: String,
    url: String,
    isSuggestion: Boolean,
    isActive: Boolean,
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
.url-styling {
  color: var(--clr-gray-01);
}
td {
  padding: 20px;
}

.link-style {
  text-decoration: none;
  color: var(--clr-black-01);
}

.status-style {
  font-size: 12px;
  color: var(--clr-gray-01);
}
</style>
