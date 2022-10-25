<template>
  <div class="st__container">
    <v-card>
      <v-tabs v-model="tab" background-color="transparent" class="st__tabs" show-arrows>
        <v-tab :disabled="tabDisabled">
          Profile
        </v-tab>
        <v-tab :disabled="tabDisabled">
          Freelance
        </v-tab>
        <v-tab :disabled="tabDisabled">
          Bank Account
        </v-tab>
        <v-tab :disabled="tabDisabled">
          Insurance & Package
        </v-tab>
        <v-tab :disabled="tabDisabled">
          Documents
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <Profile />
        </v-tab-item>
        <v-tab-item>
          <Freelance />
        </v-tab-item>
        <v-tab-item>
          <v-card color="basil" flat>
            <v-card-text>bank Acc</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <Insurance />
        </v-tab-item>
        <v-tab-item>
          <Documents />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import  '@/assets/scss/Settings/_settings.scss'
import Profile from '../components/Settings/Profile/index.vue'
import Freelance from '~/components/Settings/Freelance/index.vue';
import Insurance from '~/components/Settings/Insurance/index.vue';
import Documents from '~/components/Settings/Documents/index.vue';
export default {
    layout: "dashboard",
    data() {
        return {
            tab: null,
        };
    },
    computed: {
      tabDisabled(){
        return !this.$store.getters['profile/getReadOnly'] || !this.$store.getters['freelance/getReadOnly'] 
      }
    },
    components: { Profile, Freelance, Insurance, Documents }
}
</script>

<style>

</style>