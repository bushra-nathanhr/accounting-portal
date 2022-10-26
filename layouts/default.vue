<template>
  <v-app >
    <SideBar />
    <v-main class="pt-4 content" style="background-color:#f4f7f7">
        <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar/index.vue";

export default {
  head () {
    return {
      title: 'Nathan Digital Accounting Software',
      titleTemplate: '%s | ',
        fab: false,
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      isEmp: ''
    }
  },
  components: {
    Header
  },
}

</script>

