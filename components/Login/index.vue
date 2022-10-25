<template>
  <div class="login__container" :class="{blur_content:dialog}" :style="{background:$vuetify.theme.themes.light.primary}">
    <div class="login__grid">
      <div class="login__image_container">
        <div class="login__logo_wrap">
          <img class="login__company_img" src="@/assets/images/nathan-digital.png" alt="nathan-digital" />
        </div>
        <div class="login__image_wrap fill-height">
          <img src="@/assets/images/login-bg.png" alt="freelancer bg" />
        </div>
      </div>
      <div class="login__form_container">
        <div class="login__form_wrap">
          <v-card class="login__form_card" color="bg_white">
            <v-form ref="login_form">
              <h4>Freelancer Portal</h4>
              <p>Client invoicing management and HR Support</p>
              <div class="login__divider" :style="{background:$vuetify.theme.themes.light.primary}"></div>
              <label :style="{color:$vuetify.theme.themes.light.text}" for="email">Email</label>
              <v-text-field name="email" label="" id="email" type="email" class="login__input" outlined color="accent"
                background-color="white" placeholder="mail@website.com" prepend-inner-icon="fa-solid fa-envelope">
              </v-text-field>
              <label :style="{color:$vuetify.theme.themes.light.text}" for="password">Password</label>
              <v-text-field name="password" label="" id="password" type="password" class="login__input" outlined
                color="accent" background-color="white" append-icon="fa-eye-slash" prepend-inner-icon="fa-lock"
                placeholder="Min. 8 characters"></v-text-field>
              <span class="login__remember_wrap">
                <v-checkbox :ripple="false" color="accent" label="Remember me" v-model="remember_me"></v-checkbox>
                <nuxt-link to="/forgot-password" :style="{color:$vuetify.theme.themes.light.accent}" class="login__forgot_password">Forgot password?</nuxt-link>
              </span>
              <v-btn @click.stop="dialog = true" elevation="0" large class="login__full_width_btn" color="accent">Login
              </v-btn>
            </v-form>
            <p class="login__recaptcha_text">This site is protected by reCAPTCHA and the privacy policy and terms of
              service apply.</p>
          </v-card>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialog" max-width="460">
      <v-card class="login__form_card new_password_card" color="bg_white">
        <v-form>
          <h4>Set your new password</h4>
          <div class="login__divider" :style="{background:$vuetify.theme.themes.light.primary}"></div>
          <label :style="{color:$vuetify.theme.themes.light.text}" for="newPassword">New Password</label>
          <v-text-field name="newPassword" label="" id="newPassword" type="password" class="login__input" outlined
            color="accent" background-color="white" append-icon="fa-eye-slash" prepend-inner-icon="fa-lock"
            placeholder="Min. 8 characters"></v-text-field>
          <label :style="{color:$vuetify.theme.themes.light.text}" for="confirmPassword">Re-enter New Password</label>
          <v-text-field name="confirmPassword" label="" id="confirmPassword" type="password" class="login__input"
            outlined color="accent" background-color="white" append-icon="fa-eye-slash" prepend-inner-icon="fa-lock"
            placeholder="Min. 8 characters"></v-text-field>
          <v-btn @click.stop="dialog = false" elevation="0" large class="login__full_width_btn" color="accent">Update Password
          </v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import '@/assets/scss/Login/_login.scss'
export default {
  name: 'LoginComponent',
  data() {
    return {
      remember_me: false,
      dialog: false,
    }
  },
}
</script>

<style lang="scss">

</style>