<template>
  <div class="default">
    <Navbar />
    <Wrapper>
      <Nuxt />
    </Wrapper>
  </div>
</template>
<script>
import Navbar from "@/components/global/Navbar";
import Wrapper from "@/components/global/Wrapper";
export default {
  components: { Navbar, Wrapper },
   middleware: ['auth'],
  head() {
		return {
			titleTemplate: "%s - Real World Forums",
			meta: [{
				hid: "description",
				name: "description", // <-- for our meta description tag
				content: "Where you can find all the events taking place in your neighborhood"
			}]
		}
	},
};
</script>
<style lang="scss">
@import "~~/assets/style.scss";
.default{
	background:var(--defaultBg) ;
	min-height: 100vh;
}
</style>
