<template>
  <section>
    <table class="table-item__table">
      <thead>
        <tr>
          <th class="name">Name(post)</th>
          <th class="type">Type(CBE, Instagram, Youtube)</th>
          <th class="options">Options</th>
        </tr>
      </thead>
      <tbody>
        <AdminListingViewRow
          v-for="(entry, index) in entries"
          :key="entry.id"
          :title="entry.title"
          :type="entry.type"
          @delete="triggerDelete(index)"
          @edit="triggerEdit(index)"
          @release="triggerRelease(index)"
          :class="{
            'cbe-announcement-true': entry.isCbeAnnnouncement === true,
          }"
        />
      </tbody>
    </table>
  </section>
</template>

<script>
import AdminListingViewRow from "@/components/AdminListingViewRow.vue";

export default {
  components: {
    AdminListingViewRow,
  },
  data() {
    return {
      entries: [
        {
          title: "Test Event",
          type: "event",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
      ],
    };
  },
  async created() {
    try {
      const response = await fetch(
        "https://attendee-feed-app-api.jgreg.uber.space/entries"
      );

      const data = await response.json();

      this.entries = data;
      console.log(this.entries);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    triggerDelete(index) {
      console.log(
        "i am the Delete event, triggered in the highest component: AdminListingView"
      );
      console.log(this.entries[index]);
    },
    triggerEdit(index) {
      console.log(
        "i am the Edit event, triggered in the highest component: AdminListingView"
      );
      console.log(this.entries[index]);
    },
    triggerRelease(index) {
      console.log(
        "i am the Release event, triggered in the highest component: AdminListingView"
      );
      console.log(this.entries[index]);
    },
  },
};
</script>

<style scoped>
.name {
  width: 15%;
  margin-right: 3px;
  color: var(--clr-white-02);
}
.type {
  width: 70%;
  color: var(--clr-white-02);
}

.options {
  width: 30%;
  color: var(--clr-white-02);
}
.table-item-row {
  position: relativ;
  margin-left: 100px;
  background: var(--clr-purple-01);
}
.table-item__table {
  position: relative;
  background-color: var(--clr-purple-02);
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;

  width: 100%;
}

.cbe-announcement-true {
  border: purple;
  background-color: black;
}
.cbe-announcement-false {
  border: grey;
}
.Name {
  width: 50%;
}
.type {
  width: 30%;
}
.options {
  width: 20%;
}
</style>
