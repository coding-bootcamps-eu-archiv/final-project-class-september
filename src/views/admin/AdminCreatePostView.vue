<template>
  <main>
    <div class="titel-admin-create">
      <h1 class="mrg-bl-50-25">Create your admin-post</h1>
    </div>
    <form v-on:submit.prevent="saveEntry">
      <div class="flex-c-c-g30">
        <div class="felx-c-g10">
          <section class="checkbox-wrapper">
            <div class="flex-r-c">
              <input
                id="checkbox1"
                type="checkbox"
                @change="toggleAnnouncement"
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
                @change="toggleActive"
                class="w-h-14"
              />
              <label for="checkbox2" class="clr-purple-02 fnt-size-05"
                >mark as active</label
              >
            </div>
          </section>
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
            <div v-if="wrongURL" class="no-valid-url">Ungültige URL</div>
          </section>
        </div>
        <button class="width-400 pdg-05 bdr-02-s-p bdr-r-025">Save</button>
        <div v-if="submitted" class="thank-you-message">
          {{ counterMessage }}
        </div>
      </div>
    </form>
  </main>
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
      wrongURL: false,
      active: "",
      isCbeAnnouncement: "",
      submitted: false,
      counterMessage: "",
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
      const url = event.target.value;

      const regex =
        /^((?:(?:(?:https?|ftp):)?\/\/)?)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

      if (!regex.test(url)) {
        (this.wrongURL = true), console.error("Invalid URL");

        return;
      }

      this.wrongURL = false;
      this.url = url;
    },
    async saveEntry() {
      this.submitted = true;
      let counter = 4;
      const countdown = setInterval(() => {
        this.counterMessage = `Thank you for your Suggestion! You will be redirected in ${counter}s`;
        counter--;
        if (counter < 0) {
          clearInterval(countdown);
        }
      }, 1000);
      setTimeout(() => {
        this.submitted = false;
        this.$router.push("./");
      }, 5000);

      const newEntry = {
        title: this.title,
        type: this.type,
        url: this.url,
        active: this.active,
        isCbeAnnouncement: this.isCbeAnnouncement,
      };

      await fetch("https://attendee-feed-app-api.jgreg.uber.space/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntry),
      });
    },
  },
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 295px);
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

.thank-you-message {
  font-size: 20px;
  font-style: italic;
}
.thank-you-message {
  background: linear-gradient(
    90deg,
    #fafaf6,
    #fafaf6,
    #a6f3b7,
    #75f2ad,
    #49ff4f,
    #75f2ad,
    #a6f3b7,
    #fafaf6,
    #fafaf6
  );
  background-size: 400%;
  animation: glow 10s linear forwards;
}
@keyframes glow {
  from {
    background-position: 0%;
  }
  to {
    background-position: 400%;
  }
}

.no-valid-url {
  color: red;
  font-size: 10px;
}
</style>
