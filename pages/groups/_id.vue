<template>
  <div class="group">
    <div class="group-main">
      <h2 class="title">{{ group.title }}</h2>
      <h4 class="sub-title">{{ group.subTitle }}</h4>
    </div>
    <div class="group-topics">
      <ul class="topic-list">
        <li class="topic-item" v-for="topic in group.topics">
          <h2 class="topic-title">{{ topic.title }}</h2>
          <p class="topic-description">{{ topic.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: this.group.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What you need to know about event #" + this.group.title,
        },
      ],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    ...mapState("news", ["group"]),
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch("news/getGroup", params.id);
      console.log("---");
    } catch (e) {
      error({ statusCode: 503, message: "Unable to fetch event" + params.id });
    }
  },
};
</script>

<style scoped lang="scss">
.group {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;

  .group-main {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px;
    background: var(--singleGroupMain);
  }

  .group-topics {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: var(--singleGroupTopics);
    li{
      list-style-type: none;
    }
  }
}
</style>