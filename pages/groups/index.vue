<template>
 <div class="groups">
    <AppGroupList>
    <template #secondRow="{ group }">{{ group.id }}</template>
  </AppGroupList>
 </div>
</template>

<script>
import AppGroupList from "@/components/groups/AppGroupList";
export default {
  head() {
    return {
      title: "Group List",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "All Forum Group",
        },
      ],
    };
  },
  components: { AppGroupList },
  async fetch({ store, error }) {
    try {
      await store.dispatch("news/getAllGroups");
    } catch (e) {
      error({ statusCode: 503, message: "Unable to fetch events" });
    }
  },
};
</script>

<style scoped lang="scss">

</style>