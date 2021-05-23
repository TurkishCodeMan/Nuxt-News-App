<template>
  <nuxt-link
    :to="{ name: 'groups-id', params: { id: group.id } }"
    class="group-card"
  >
    <h3>{{ group.title }}</h3>
    <p class="desc">{{ group.subTitle }}</p>
    <slot name="secondRow" :group="group"></slot>
  </nuxt-link>
</template>

<script>
export default {
  name: "GroupCard",
  props: {
    group: Object,
    default: () => undefined,
  },
};
</script>

<style scoped lang="scss">
.group-card {
  background: var(--cardBg);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 0.6rem 10px;
  color: white;
}
</style>