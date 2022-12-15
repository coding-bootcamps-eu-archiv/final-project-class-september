<template>
  <main>
    <section class="table-item">
      <table class="table-item__table">
        <thead>
          <tr>
            <th class="table-item__table-head-name">Name(post)</th>
            <th class="table-item__table-head--isbn">
              Type(CBE, Instagram, Youtube)
            </th>
            <th class="table-item__table-head--action"></th>
          </tr>
        </thead>
        <tbody>
          <AdminListingViewRow
            v-for="entry in entries"
            :key="entry.id"
            :title="entry.title"
            :type="entry.type"
            class="table-item__table-row"
          />
        </tbody>
      </table>
    </section>
  </main>
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
.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
}
.table-item__table-head-name {
  width: 40%;
}
.table-item__table-head-isbn {
  width: 20%;
}
.table-item__table-head-actions {
  width: 15%;
  padding-left: 500px;
}
.table-item__table-row {
  opacity: 0;
  padding: 5px;
  transition: opacity 500ms;
  cursor: pointer;
  border-radius: 5px;
}

.table-item__table thead tr {
  background-color: var(--clr-purple-01);
  color: var(--clr-white-02);
  text-align: left;
}
.table-item__table th {
  padding: 12px 15px;
}
.table-item__table tbody tr {
  border-bottom: 1px solid #dddddd;
}

main {
  background-color: var(--clr-purple-02);
}
</style>
