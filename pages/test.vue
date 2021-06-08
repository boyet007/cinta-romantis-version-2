<template>
<div class="container mt-5">
<div class="row">
          <div class="col-md-6"><login-image></login-image></div>
          <div class="col-md-6"><login-form></login-form></login-form></div>
  </div>
</div>
  
</template>
<script>

import LoginImage from '@/components/UserProfile/LoginImage.vue'
import LoginForm from '@/components/UserProfile/LoginForm.vue'

export default {
  name: 'dashboard',
  layout: 'member',
  components: { LoginImage, LoginForm
  },
  data () {
    return {}
  },
  
  methods: {
    
  },
  mounted () {
    
  }
}
</script>
<style></style>
