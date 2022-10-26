<template>
  <v-app >
    <Header />
    <v-main class="pt-4 content" style="background-color:#f4f7f7">
        <nuxt/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "~/components/shared/header_new";

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
<style>
.v-menu__content{
        border-radius: 18px;
        margin-top: 41px !important;
    }
    .v-menu__content::before{
        border-top-right-radius: 18px;
    }
    .v-menu__content::-webkit-scrollbar {
  display: none;
}
</style>
