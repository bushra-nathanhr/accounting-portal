<!-- TODO CHANG THE UI AND PUT THE CHARJS IN THE TOP AND THEN THE LISTS UNDERS -->
<!-- TODO CHANG THE CODE STRUCTOR INTO COMPONENT STRUNCTUR PUT EACH THING IN A COMPONENT AND THEN CALL IT IN THE PAGE -->
<!-- TODO SETUP THE SCSS -->
<!-- TODO MAKE GLOBAL COMPONENT FOR CARD-BUTTONS-HEADERS -->

<template>
  <v-container class="main__wrapper">
    <!-- Good Morning -->
    <v-row class="good_morning__section">
      <GoodMorning />
    </v-row>
    <!-- Notifications -->
    <v-row class="notifications__section">
      <Notifications />
    </v-row>
    <!-- SECTION 1 -->
    <v-row>
      <v-col cols="8">
        <!-- Chart Cards -->
        <v-row>
          <v-col cols="4">
            <ChartCard />
          </v-col>
          <v-col cols="4">
            <ChartCard />
          </v-col>
          <v-col cols="4">
            <ChartCard />
          </v-col>
        </v-row>
        <!-- Discover More -->
        <v-row class="align-center justify-space-between">
            <DiscoverMore />
        </v-row>
      </v-col>

      <!-- Short Cuts -->
      <v-col cols="4" class="mt-5">
        <ShortCuts/>
      </v-col>
    </v-row>
    <!-- SECTION 2 -->
    <v-row class="mt-5 mx-5">
      <!-- Left Col Active Clients-->
      <v-col cols="4">
        <ActiveClients/>
      </v-col>
      <!-- Middle Col  Bank Accounts-->
      <v-col cols="4">
        <BankAccounts/>
      </v-col>
      <!-- Quick Access Cards-->
      <v-col cols="4">
        <!-- Customers Quick Access Card -->
        <v-row>
          <QuickAccessCard/>
        </v-row>
        <!-- Suppliers Quick Access Card -->
        <v-row class="mt-3">
          <QuickAccessCard/>
        </v-row>
        <!-- Chart of Accounts Quick Access Card -->
        <v-row class="mt-3">
        </v-row>
      </v-col>
    </v-row>
    <!-- SECTION 3 -->
    <v-row>
      <v-col cols="12">
        <SalesVsExpenses/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import '@/assets/scss/Dashboard/_dashboard.scss'
import GoodMorning from '@/components/Dashboard/GoodMorning/index.vue'
import Notifications from '@/components/Dashboard/Notifications/index.vue'
import ChartCard from '@/components/Dashboard/ChartCard/index.vue'
import DiscoverMore from '@/components/Dashboard/DiscoverMore/index.vue'
import ShortCuts from '@/components/Dashboard/ShortCuts/index.vue'
import ActiveClients from '@/components/Dashboard/ActiveClients/index.vue'
import BankAccounts from '@/components/Dashboard/BankAccounts/index.vue'
import QuickAccessCard from '@/components/Dashboard/QuickAccessCard/index.vue'
import SalesVsExpenses from '@/components/Dashboard/SalesVsExpenses/index.vue'
export default {
  name: 'dashboard',
  layout: 'default',
  components:{GoodMorning,Notifications,ChartCard,DiscoverMore,ShortCuts,ActiveClients,BankAccounts,QuickAccessCard,SalesVsExpenses},
  data() {
    return {
      labels: ['Jan', 'Apr', 'Jul', 'Sep', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: ['3', '0', '3', '0', '3'],
          borderColor: '#32F446',
          backgroundColor: 'transparent',
        },
        {
          label: 'Expenses',
          data: ['0', '3', '0', '3', '0'],
          borderColor: '#FF553E',
          backgroundColor: 'transparent',
        },
        {
          label: 'Active Clients',
          data: ['1.5', '1.5', '1.5', '1.5', '1.5'],
          borderColor: '#46A2D0',
          backgroundColor: 'transparent',
        },
      ],
      option_distribution: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      singleExpand: true,
      recent: [
        {
          active: true,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Mike Carlson',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Cindy Baker',
        },
      ],
    }
  },
}
</script>
