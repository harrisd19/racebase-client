<style lang="less" scoped>

form {
  @media (min-width: 992px) { width: 45%; }
  label {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
  }
}

</style>

<template>
<form @submit.prevent="logIn" class="mx-auto mx-md-0 w-90 pl-md-5">
  <h2 class="mt-4 mb-3">Log In</h2>
  <label for="inputEmail"> Email </label>
  <input 
    type="email" 
    v-model="formData.email" 
    name="email" 
    class="form-control mb-3" 
    placeholder="Email" 
    required autofocus
  />

  <label for="inputPassword"> Password </label>

  <input 
    name="password" 
    v-model="formData.password" 
    type="password" 
    class="form-control mb-3" 
    placeholder="Password" 
    required
  />

  <div 
    v-if="message" 
    :class="'d-block alert alert-' + (error ? 'danger' : 'success')"
  >
    {{ message }}
  </div>

  <div class="mt-2 mb-3"> 
    Forgot your password? 
    <br>Enter your email above and click
    <a href="#" @click="forgotPassword"> here </a>
  </div>

  <button type="submit" class="btn btn-primary">Log In</button>

</form>
</template>

<script>
import Cookies from 'universal-cookie'
const cookies = process.client ? new Cookies() : undefined 
export default {
  head () {
    return {
      title: "Log In - RaceBase", 
      meta: [{
        hid: "OpenGraph Image", 
        property: "og:image", 
        content: process.env.ROOT_URL + '/images/opengraph/login.png'
      }]
    }
  },
  data () {
    return {
      formData: {
        email: "",
        password: ""
      },
      message: false,
      error: false, 
      sent: true
    }
  },
  methods: {
    logIn: async function() {
      try {
        await this.$store.dispatch('auth/login', {
          email: this.formData.email, 
          password: this.formData.password
        }, { withCredentials: true })
        this.error = false
        this.message = "Successfully logged in"
      } catch (e) { 
        this.error = true
        this.message = e.response.data.error 
      }
    }, 
    forgotPassword: async function() {
      if (this.formData.email) {
        try {
          await this.$axios.$post('/user/forgotPassword', {
            email: this.formData.email
          })
          this.message = "Password reset link sent to " + this.formData.email
          this.error = false
        } catch (e) {
          this.error = true
          this.message = "Something went wrong! Please enter a valid email and try again"
        }
      } else {
        this.error = true
        this.message = "Please enter your email!"
      }
    }
  }
}
</script>