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
          v-for="entry in entries"
          :key="entry.id"
          :title="entry.title"
          :type="entry.type"
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
.table-item__table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width: 100%;
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
