<template>
  <main>
    <section>
      <table class="table-item__table">
        <thead class="table-item-row">
          <tr class="wrapper">
            <th class="name">Name(post)</th>
            <th class="type">Type(CBE, Instagram, Youtube)</th>
            <th class="options">Options</th>
          </tr>
        </thead>
        <tbody>
          <AdminListingViewRow
            v-for="entry in entries"
            :key="entry.id"
            :title="entry.title"
            :type="entry.type"
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
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
        {
          title: "Test Event Insta Post",
          type: "Instagram",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e4",
        },
        {
          title: "Test Event Insta Post",
          type: "Instagram",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e5",
        },
        {
          title: "Test Event Insta Post",
          type: "Instagram",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e8",
        },
        {
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
        {
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
        {
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
        {
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
        {
          title: "Test Event Youtube Post",
          type: "Youtube",
          url: "https//foo.bar",
          active: false,
          isCbeAnnouncement: true,
          id: "c76668d0-ce3a-48a7-acd5-0f54ad6818e1",
        },
      ],
    };
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

main {
  background-color: var(--clr-purple-02);
}
</style>
