<template>
  <v-div class="login__container">
    <v-row class="justify-center align-center">
      <v-col cols="6" class="mt-100">
        <h1 class="display-2 font-weight-bold blue--text mb-5">
          Welcome To
          <img
            src="/header/nathan-digital.png"
            alt="nathan digital logo"
            class="nathan-digital__logo"
          /><br />
          Accounting System
        </h1>
        <span class="font-weight-light text--secondary display-1"
          >Your Next Gen Smart HR Service</span
        >

        <div class="login-form">
          <v-text-field
            label="Username"
            :rules="rules"
            hide-details="auto"
            outlined
          ></v-text-field>
          <v-text-field label="Password" outlined class="mt-5"></v-text-field>
          <v-btn block color="primary" elevation="2" x-large to="/dashboard/">Login</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-div>
</template>


<script>
import '@/assets/scss/Login/_login.scss'
export default {
  data: () => {
    return {
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      rules: [
        (value) => !!value || 'Username Required.',
        (value) => (value && value.length >= 3) || 'Min 5 characters',
      ],
    }
  },
}
</script>