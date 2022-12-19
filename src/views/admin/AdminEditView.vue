<template>
  <main>
    <h1 class="mrg-bl-50-25">Edit admin post</h1>

    <form v-on:submit.prevent="updateEntry">
      <div class="flex-c-c-g30">
        <div class="felx-c-g10">
          <section class="checkbox-wrapper">
            <div class="flex-r-c">
              <input
                @change="changeAnnouncementStatus"
                id="checkbox1"
                type="checkbox"
                :checked="isCbeAnnouncement"
                class="w-h-14"
              />
              <label for="checkbox1" class="clr-purple-02 fnt-size-05"
                >post an CBE announcement</label
              >
            </div>

            <div class="flex-r-c">
              <input
                id="checkbox2"
                type="checkbox"
                :checked="active"
                @change="changeActiveStatus"
                class="w-h-14"
              />
              <label for="checkbox2" class="clr-purple-02 fnt-size-05"
                >mark as active</label
              >
            </div>
          </section>
          <section class="flex-c-s">
            <label for="title" class="fnt-wgt-600">Title</label>
            <input
              id="title"
              v-model="title"
              class="width-400 pdg-05 bdr-02-s-p bdr-r-025"
            />
          </section>
          <section class="flex-c-s">
            <div class="wrapper">
              <label for="dropdown" class="fnt-wgt-600">Select type</label>
              <select
                id="dropdown"
                class="dropDown pdg-05 bdr-02-s-p bdr-r-025 clr-purple-02"
                v-model="type"
              >
                <option value="instagram">instagram</option>
                <option value="youtube">youtube</option>
                <option value="event">event</option>
                <option value="article">article</option>
                <option value="vacancy">vacancy</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                class="arrow-down pdg-t-05 pdg-il-025"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>
          </section>
          <section class="flex-c-s">
            <label for="url" class="fnt-wgt-600">URL</label>
            <input
              id="url"
              v-model="url"
              class="width-400 pdg-05 bdr-02-s-p bdr-r-025"
            />
          </section>
        </div>
        <button class="width-400 pdg-05 bdr-02-s-p bdr-r-025">Save</button>
      </div>
    </form>
  </main>
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
      createdAt: "",
      isSuggestion: "",
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
        createdAt: this.createdAt,
        isSuggestion: this.isSuggestion,
      };

      await fetch(
        "https://attendee-feed-app-api.jgreg.uber.space/entries/" + id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentEntryData),
        }
      );

      location.href = "/admin";
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
      "https://attendee-feed-app-api.jgreg.uber.space/entries/" + id
    );
    const jsonData = await response.json();
    this.title = jsonData.title;
    this.type = jsonData.type;
    this.url = jsonData.url;
    this.active = jsonData.active;
    this.isCbeAnnouncement = jsonData.isCbeAnnouncement;
    this.createdAt = jsonData.createdAt;
    this.isSuggestion = jsonData.isSuggestion;
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 255px);
}

h1 {
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--clr-purple-01);

  text-align: center;
}

button {
  color: var(--clr-white-02);
  background-color: var(--clr-purple-02);
  box-shadow: var(--clr-purple-01) 2.5px 4px;
  _margin-bottom: 1rem;
}

button:hover {
  color: var(--clr-purple-01);
  background-color: var(--clr-white-02);

  font-weight: 600;
}

.checkbox-wrapper {
  display: flex;
  gap: 30px;

  align-self: center;
}

/*** dropDown ***/
.wrapper {
  position: relative;
  width: 60%;
}

.dropDown {
  width: 100%;
}

.arrow-down {
  background-color: var(--clr-purple-02);
  height: 65%;

  padding-top: 0.3rem;
  border-radius: 0 5px 5px 0;

  position: absolute;
  right: 0;

  pointer-events: none;
}

/*** ultilites ***/

/** font **/
.fnt-wgt-600 {
  font-weight: 600;
}

.fnt-size-05 {
  font-size: 0.75rem;
}

/** colours **/
.clr-purple-02 {
  color: var(--clr-purple-02);
}

/** padding & margin */
.pdg-05 {
  padding: 0.5rem;
}

.mrg-bl-50-25 {
  margin-block: 50px 25px;
}

/** sizing **/
.w-h-14 {
  width: 14px;
  height: 14px;
}

.width-400 {
  width: 400px;
}

/** borders **/

.bdr-02-s-p {
  border: 0.2rem solid var(--clr-purple-01);
}

.bdr-r-025 {
  border-radius: 0.25rem;
}

/** flex **/

.flex-c-c-g30 {
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 35px;
}

.flex-r-c {
  display: flex;
  gap: 7px;
}

.flex-c-s {
  display: flex;
  flex-direction: column;
}

/** borders **/

.bdr-02-s-p {
  border: 0.2rem solid var(--clr-purple-01);
}

.bdr-r-025 {
  border-radius: 0.25rem;
}

/** flex **/

.flex-c-c-g30 {
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 35px;
}

.flex-c-s {
  display: flex;
  flex-direction: column;
}

.felx-c-g10 {
  display: flex;
  flex-direction: column;

  gap: 10px;
}

.flex-r-c {
  display: flex;
  gap: 7px;
}
</style>
