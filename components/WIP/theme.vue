<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-btn color="primary">Primary</v-btn>
          <v-btn color="green">Secondary</v-btn>
          <v-btn color="btn_green">Accent</v-btn>
          <v-switch v-model="$vuetify.theme.dark" hint="This toggles the global state of the Vuetify theme" inset
            label="Vuetify Theme Dark" persistent-hint></v-switch>
          <ul>
            <li v-for="(theme,index) in themes" :key="index">
              <v-btn @click="setTheme(theme)">{{theme.name}}</v-btn>
            </li>
          </ul>
        </v-col>
        <v-col cols="6">section 2</v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Theme1, Theme2 } from '@/plugins/vuetify'

export default {
  setup() {

  },
  data() {
    return {
      themes: [
        Theme1,
        Theme2
      ]
    }
  },
  methods: {
    setTheme(theme) {
      // close menu
      this.menu = false;
      const name = theme.name;
      const dark = theme.dark;
      const light = theme.light;
      // set themes
      Object.keys(dark).forEach(i => {
        this.$vuetify.theme.themes.dark[i] = dark[i];
      });
      Object.keys(light).forEach(i => {
        this.$vuetify.theme.themes.light[i] = light[i];
      });
      // also save theme name to disable selection
      this.$vuetify.theme.themes.name = name;
    }
  },
}
</script>

<style>

</style>