export default {
  data() {
    return {
      entries: [],
      urlParams: "",
    };
  },
  async created() {
    try {
      const response = await fetch(
        "https://attendee-feed-app-api.jgreg.uber.space/entries" +
          this.urlParams
      );

      const data = await response.json();
      this.entries = data.sort((a, b) => b.createdAt - a.createdAt);
    } catch (error) {
      console.error(error);
    }
  },
};
