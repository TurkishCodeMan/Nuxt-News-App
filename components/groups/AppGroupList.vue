<template>
  <div class="group-list">
    <GroupCard v-for="group in groups" :key="group.id" :group="group" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GroupCard from "@/components/groups/GroupCard";
export default {
  computed: {
    ...mapGetters("news", { groups: "getGroups" }),
  },
  components: { GroupCard },
};
</script>

<style scoped lang="scss">
.group-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>