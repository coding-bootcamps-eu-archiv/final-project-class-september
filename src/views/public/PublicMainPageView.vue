<template>
  <div class="route-link">
    <nav><router-link to="/admin">Switch to Admin Main Page</router-link></nav>
  </div>

  <h1 class="public-heading">Public-Main-Page</h1>
  <div class="search-bar">
    <SearchInput @searchEntries="searchForEntries" @searchWord="searchedWord" />
    <SearchButton />
  </div>
  <router-view></router-view>

  <div class="create-wrapper">
    <router-link to="/public/suggestion">
      <button class="create">+ add suggestions</button>
    </router-link>
  </div>
  <main>
    <section>
      <div class="around">
        <table class="table-item">
          <tr
            v-for="entry of entries"
            :key="entry.id"
            :class="announcementStyle(entry)"
          >
            <td
              v-if="
                entry.type === 'youtube' && entry.isCbeAnnouncement === false
              "
            >
              <img :src="youtube" />
            </td>
            <td
              v-else-if="
                entry.isCbeAnnouncement === false && entry.type === 'instagram'
              "
            >
              <img :src="instagram" />
            </td>
            <td
              v-else-if="
                entry.isCbeAnnouncement === false && entry.type === 'event'
              "
            >
              <img :src="event" />
            </td>
            <td v-else-if="entry.isCbeAnnouncement === true">
              <img
                class="CBE"
                src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/1327/original/Coding_Bootcamps_Europe_logo.png"
                alt=""
              />
            </td>
            <td
              v-else-if="
                entry.isCbeAnnouncement === false && entry.type === 'article'
              "
            >
              <img :src="article" />
            </td>
            <td
              v-else-if="
                entry.isCbeAnnouncement === false && entry.type === 'vacancy'
              "
            >
              <img :src="lupe" />
            </td>
            <td>
              <div class="title">
                <h2>
                  <a :href="entry.url" class="story-link" target="_blank">{{
                    entry.title
                  }}</a>
                </h2>

                <p class="type-styling">
                  {{ entry.type }} •
                  {{ new Date(entry.createdAt).toLocaleDateString() }} •
                  {{ new Date(entry.createdAt).toLocaleTimeString() }}
                </p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import SearchButton from "@/components/SearchButton.vue";
import getEntriesMixin from "@/mixins/getEntries";
import instagram from "@/assets/instagram.svg";
import lupe from "@/assets/lupe.svg";
import article from "@/assets/article.svg";
import youtube from "@/assets/youtube.svg";
import event from "@/assets/event.svg";
export default {
  data() {
    return {
      typedWord: "",
      urlParams: "?active_ne=false",
      instagram,
      lupe,
      article,
      youtube,
      event,
    };
  },
  name: "publicView",
  components: {
    SearchInput,
    SearchButton,
  },
  mixins: [getEntriesMixin],
  methods: {
    announcementStyle(entry) {
      if (entry.isCbeAnnouncement) {
        return "highlight-entry";
      }
      return "";
    },
    searchForEntries() {
      const filteredEntries = this.entries.filter(
        (entry) =>
          entry.title.includes(this.typedWord) ||
          entry.type.includes(this.typedWord)
      );

      this.entries = filteredEntries;
      if (this.typedWord === "") {
        location.href = "/";
      }
    },
    searchedWord(event) {
      this.typedWord = event.target.value;
    },
  },
};
</script>

<style scoped>
img {
  margin-left: 25px;
}
.CBE {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
h2 {
  margin-left: 50px;
}
@media only screen and (min-width: 1140px) {
  .around {
    width: 960px;
    margin: 0 auto;
    
  }
}
.story-link {
  text-decoration: none;
  font-size: 25px;
  color: var(--clr-black-01);
  font-weight: 100;
  font-family: Arial, Helvetica, sans-serif;
}
.story-link:hover {
  color: var(2);
}
.around {
  padding-top: 20px;
}
table {
  border-collapse: collapse;
  margin-top: 20px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

tr {
  height: 100px;
  border-bottom-style: 15px solid var(--clr-black-01);
  border-top: 1px solid var(--clr-gray-01);
}
tr:hover {
  -webkit-box-shadow: 0px 0px 25px 0px rgba(189, 110, 238, 0.674);
  box-shadow: 0px 0px 25px 0px rgba(189, 110, 238, 0.674);
}
/* suggestion button */
.create-wrapper {
  box-sizing: border-box;
  display: flex;
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-evenly;
}

.create {
  border-radius: 10px;
  background-color: var(--clr-white-02);
  color: var(--clr-purple-01);
  font-weight: bold;
  cursor: pointer;
  border: 2px solid var(--clr-white-02);
}
.create:active {
  background-color: var(--clr-white-02);
  color: var(--clr-green-01);

  cursor: pointer;
  border: 2px solid var(--clr-green-01);
}
/* search bar*/
.search-bar {
  padding-top: 50px;
}
.route-link {
  box-sizing: border-box;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  display: none;
}
nav {
  margin-top: 20px;
  margin-right: 20px;
}

.type-styling {
  color: var(--clr-gray-01);
  margin-left: 50px;
}
.public-heading {
  margin-top: 60px;
  text-align: center;
}
footer {
  display: flex;
  justify-content: center;
  height: 120px;
  background-color: var(--clr-purple-01);
  color: var(--clr-white-02);
  padding-top: 20px;
  font-family: "Courier New", Courier, monospace;
}
.author {
  word-spacing: 27px;
}

.title {
  position: relative;
}
.icons {
  display: flex;
  justify-content: center;
  justify-content: space-between;

  margin: 20px;
}
.footer-wrapper {
  margin-top: 100px;
}

/* Styling for official cbe announcement posts */
.highlight-entry {
  transition: 0.3s;
}

.highlight-entry:hover {
  background: linear-gradient(
    90deg,
    #fafaf6,
    #fafaf6,
    #e39af5,
    #f275e3,
    #cb49ff,
    #f275e3,
    #e39af5,
    #fafaf6,
    #fafaf6
  );
  background-size: 400%;
  box-shadow: 0 0 15px rgb(160, 107, 239);
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
.highlight-entry::before {
  top: -1px;
  right: -1px;
  bottom: -1px;
  left: -1px;
  background: inherit;
  filter: blur(36px);
  opacity: 0;
  transition: 0.3s ease-out;
}

.highlight-entry:hover::before {
  z-index: -1;
  opacity: 0;
}
</style>
