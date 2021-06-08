<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6"><welcome-image :image_src="image"></welcome-image></div>
      <div class="col-md-6"><login-form></login-form></div>
    </div>
  </div>
</template>
<script>
import WelcomeImage from "~/components/UserProfile/WelcomeImage.vue";
import LoginForm from "@/components/UserProfile/LoginForm.vue";

export default {
  name: "dashboard",
  layout: "member",
  components: { WelcomeImage, LoginForm },
  data() {
    return {
        image: require('@/static/img/wedding.jpg')
    };
  },

  methods: {},
  mounted() {},
};
</script>
<style>

</style>
