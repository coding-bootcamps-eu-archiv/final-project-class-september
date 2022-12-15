<template>
  <h1>This is the Edit Page of the Admin</h1>

  <form v-on:submit.prevent="updateEntry">
    <div class="checkbox-wrapper">
      <div>
        <input
          @change="changeAnnouncementStatus"
          id="checkbox1"
          type="checkbox"
          :checked="isCbeAnnouncement"
        />
        <label for="checkbox1">Is CBE Announcement</label>
      </div>
      <div>
        <input
          id="checkbox2"
          type="checkbox"
          :checked="active"
          @change="changeActiveStatus"
        />
        <label for="checkbox2">Is active</label>
      </div>
    </div>

    <div class="input-wrapper">
      <label for="title">Title</label>
      <input id="title" v-model="title" />
      <div>Select type</div>

      <select class="dropDown" v-model="type">
        <option value="instagram">instagram</option>
        <option value="youtube">youtube</option>
        <option value="event">event</option>
        <option value="article">article</option>
        <option value="vacancy">vacancy</option>
      </select>

      <label for="url">URL</label>
      <input id="url" v-model="url" />

      <button class="save">Save</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "edit-entry",

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
    async updateEntry() {
      const id = this.$route.params.id;
      const currentEntryData = {
        title: this.title,
        type: this.type,
        url: this.url,
        active: this.active,
        isCbeAnnouncement: this.isCbeAnnouncement,
      };

      await fetch(process.env.VUE_APP_API_URL + "/entries/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentEntryData),
      });

      location.href = "/";
    },
    changeAnnouncementStatus(event) {
      this.isCbeAnnouncement = event.target.checked;
    },
    changeActiveStatus(event) {
      this.active = event.target.checked;
    },
  },

  async created() {
    const id = this.$route.params.id;
    const response = await fetch(
      process.env.VUE_APP_API_URL + "/entries/" + id
    );
    const jsonData = await response.json();
    this.title = jsonData.title;
    this.type = jsonData.type;
    this.url = jsonData.url;
    this.active = jsonData.active;
    this.isCbeAnnouncement = jsonData.isCbeAnnouncement;
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
