<template>
  <card>
    <h5 slot="header" class="title">Daftar User Baru</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            placeholder="Nama Lengkap"
            v-model="user.nama"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input type="email" placeholder="Email" v-model="user.email">
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

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="password"
            placeholder="Konfirmasi Password"
            v-model="user.konfirmPassword"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-select label="Tanggal Lahir"

          >
          </base-select>
        </div>
      </div>

      <base-button
        native-type="submit"
        type="primary"
        class="btn-block btn-primary"
      >
        Submit
      </base-button>
    </form>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        nama: "",
        email: "",
        password: "",
        konfirmPassword: "",
        tanggalLahir: "",
        provinsi: "",
        kota: "",
        jenisKelamin: "",
        agama: "",
        pendidikan: "",
        status: "",
        suku: "",
        pekerjaan: "",
        hobi: "",
        tinggi: "",
        berat: "",
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
