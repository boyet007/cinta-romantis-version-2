<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <welcome-image :image_src="image"></welcome-image>
      </div>
      <div class="col-md-6">
          <register-form></register-form>
      </div>
    </div>
  </div>
</template>

<script>
import WelcomeImage from "~/components/UserProfile/WelcomeImage.vue";
import RegisterForm from "~/components/UserProfile/RegisterForm.vue";
export default {
  components: { WelcomeImage, RegisterForm },
  layout: "member",
  data() {
    return {
      image: require("@/static/img/wedding4.jpg"),
    };
  },
};
</script>
