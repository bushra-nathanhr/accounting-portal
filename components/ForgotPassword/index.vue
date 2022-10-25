<template>
  <div class="fp__container" :style="{background:$vuetify.theme.themes.light.primary}">
    <div class="fp__grid">
      <div class="fp__image_container">
        <div class="fp__logo_wrap">
          <img class="fp__company_img" src="@/assets/images/nathan-digital.png" alt="nathan-digital" />
        </div>
        <div class="fp__image_wrap">
          <img src="@/assets/images/login-bg.png" alt="freelancer bg" />
        </div>
      </div>
      <div class="fp__form_container">
        <div class="fp__form_wrap">
          <v-card class="fp__form_card" color="bg_white">
            <v-form ref="fp_form">
              <h4>Forgot your password?</h4>
              <p>Please enter the email ID to you're using for your account.</p>
              <div class="fp__divider" :style="{background:$vuetify.theme.themes.light.primary}"></div>
              <label :style="{color:$vuetify.theme.themes.light.text}" for="email">Email</label>
              <v-text-field name="email" label="" id="email" type="email" class="fp__input" outlined color="accent"
                background-color="white" placeholder="mail@website.com" prepend-inner-icon="fa-solid fa-envelope">
              </v-text-field>
              <v-btn @click.stop="dialog = true" elevation="0" large class="fp__full_width_btn" color="accent">Send
              </v-btn>
              <div class="fp__back_home_btn_wrap">
                <nuxt-link class="fp__back_home_btn" to="/" :style="{color:$vuetify.theme.themes.light.text}">Back to <span
                    :style="{color:$vuetify.theme.themes.light.accent}">Login</span>
                </nuxt-link>
              </div>
            </v-form>
            <p class="fp__recaptcha_text">This site is protected by reCAPTCHA and the privacy policy and terms of
              service apply.</p>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/ForgotPassword/_forgotpassword.scss'
export default {
  name: 'ForgotPasswordModule'
}
</script>

<style>

</style>