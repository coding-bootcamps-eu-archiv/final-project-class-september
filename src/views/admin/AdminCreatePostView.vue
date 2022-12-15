<template>
  <h1>This is the Create Page of the Admin</h1>
  <form v-on:submit.prevent="saveEntry">
    <div class="checkbox-wrapper">
      <div>
        <input id="checkbox1" type="checkbox" @change="toggleAnnouncement" />
        <label for="checkbox1">Is CBE Announcement</label>
      </div>
      <div>
        <input id="checkbox2" type="checkbox" @change="toggleActive" />
        <label for="checkbox2">Is active</label>
      </div>
    </div>

    <div class="input-wrapper">
      <label for="title">Title</label>
      <GeneralInputField id="title" @input="updateTitle" />
      <div>Select type</div>

      <select class="dropDown" v-model="type">
        <option value="instagram">instagram</option>
        <option value="youtube">youtube</option>
        <option value="event">event</option>
        <option value="article">article</option>
        <option value="vacancy">vacancy</option>
      </select>

      <label for="url">URL</label>
      <GeneralInputField id="url" @input="updateUrl" variant="secondary" />

      <button class="save">Save</button>
    </div>
  </form>
</template>

<script>
import GeneralInputField from "@/components/GeneralInputField.vue";

export default {
  name: "createPost",
  components: { GeneralInputField },
  data() {
    return {
      title: "",
      type: "",
      url: "",
      active: "",
      isCbeAnnouncement: "",
    };
  },
  methods: {
    toggleAnnouncement(event) {
      this.isCbeAnnouncement = event.target.checked;
    },
    toggleActive(event) {
      this.active = event.target.checked;
    },
    updateTitle(event) {
      this.title = event.target.value;
    },
    updateType(event) {
      this.type = event.target.value;
    },

    updateUrl(event) {
      this.url = event.target.value;
    },
    async saveEntry() {
      const newEntry = {
        title: this.title,
        type: this.type,
        url: this.url,
        active: this.active,
        isCbeAnnouncement: this.isCbeAnnouncement,
      };

      await fetch(process.env.VUE_APP_API_URL + "/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
      location.href = "/admin";
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.checkbox-wrapper {
  display: flex;
  justify-content: center;
  gap: 30px;
}
.dropDown {
  width: 200px;
}
.save {
  width: 400px;
}
</style>
