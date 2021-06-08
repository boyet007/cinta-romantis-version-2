<template>
  <card>
    <h5 slot="header" class="title">Login</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            placeholder="Alamat email"
            v-model="user.email"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="password"
            placeholder="Password"
            v-model="user.password"
          >
          </base-input>
        </div>
      </div>

      <base-button
        native-type="submit"
        type="primary"
        class="btn-block btn-primary"
      >
        Submit
      </base-button>

      <div class="row">
        <div class="col-12">
          <a href="#" class="text-white">Lupa Password</a>
        </div>
      </div>
      <div class="row col-12">
        <a href="#" class="text-white">Daftar Akun Baru</a>
      </div>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: "user@yahoo.com",
        password: "123456",
      },
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>
