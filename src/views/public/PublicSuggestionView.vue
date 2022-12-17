<template>
  <h1 class="mrg-bl-50-25">Suggest your post</h1>

  <form v-on:submit.prevent="saveEntry">
    <div class="flex-c-c-g30">
      <div class="felx-c-g10">
        <section class="flex-c-s">
          <label for="title" class="fnt-wgt-600">Title</label>
          <GeneralInputField
            id="title"
            @input="updateTitle"
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
          <GeneralInputField id="url" @input="updateUrl" variant="primary" />
        </section>
      </div>
      <button class="width-400 pdg-05 bdr-02-s-p bdr-r-025">Suggest</button>
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
      active: false,
      isCbeAnnouncement: false,
      isSuggestion: true,
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
        isSuggestion: this.isSuggestion,
      };

      await fetch("https://attendee-feed-app-api.jgreg.uber.space/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
      location.href = "/";
    },
  },
};
</script>

<style scoped>
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
