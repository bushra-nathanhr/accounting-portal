<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
        >
          <v-card-title class="px-3">
            <v-img
              src="~/static/images/icon.svg"
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
            ></v-img>
            <v-icon
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
              color="blue"
              >mdi-receipt-text-check-outline</v-icon
            >
            <span class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize"
              >Invoices</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-row justify="space-around">
            <v-sparkline
              :value="value"
              :gradient="gradient"
              :smooth="radius || false"
              :padding="padding"
              :line-width="width"
              :stroke-linecap="lineCap"
              :gradient-direction="gradientDirection"
              :fill="fill"
              :type="type"
              :auto-line-width="autoLineWidth"
              auto-draw
            ></v-sparkline>
            <span class=" mt-1 pr-3">33.3</span>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
          min-height="412"
        >
          <v-card-title class="px-3">
            <v-img
              src="~/static/images/icon.svg"
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
            ></v-img>
            <v-icon
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
              color="blue"
              >mdi-receipt-text-check-outline</v-icon
            >
            <span class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize"
              >Invoice Processed</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-row justify="space-around">
            <v-col cols="12" flat class="pl-5 ml-5">
              <v-chip-group mandatory active-class="primary--text">
                <div class="outlinded d-flex">
                  <v-icon class="pr-1" color="grey">mdi-magnify</v-icon>
                  <div class="pr-5 mr-5 pt-2 grey--text">Search</div>
                </div>
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-data-table
            :headers="headers"
            :items="customers"
            class="elevation-1"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
          min-height="412"
        >
          <v-card-title class="px-3">
            <v-img
              src="~/static/images/icon.svg"
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
            ></v-img>
            <v-icon
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
              color="blue"
              >mdi-receipt-text-check-outline</v-icon
            >
            <span class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize"
              >Invoice Processed</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-row justify="space-around">
            <v-col cols="12" flat class="pl-5 ml-5">
              <v-chip-group mandatory active-class="primary--text">
                <div class="outlinded d-flex">
                  <v-icon class="pr-1" color="grey">mdi-magnify</v-icon>
                  <div class="pr-5 mr-5 pt-2 grey--text">Search</div>
                </div>
                <v-chip v-for="tag in tags" :key="tag">
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-data-table
            :headers="headers"
            :items="customers"
            class="elevation-1"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]

export default {
  name: 'invoices_list',
  layout: 'default',
  data() {
    return {
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      tags: ['Paid', 'Processed', 'Fun Transferred'],
      headers: [
        {
          text: 'Customer Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Status', value: 'status' },
        { text: 'Date', value: 'date' },
        { text: 'Due Date', value: 'duedate' },
        { text: 'Amount (AED)', value: 'amount' },
      ],
      customers: [
        {
          name: 'Frozen Yogurt',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 4234,
        },
        {
          name: 'Ice cream sandwich',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 3455,
        },
        {
          name: 'Eclair',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 452,
        },
        {
          name: 'Cupcake',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 345,
        },
        {
          name: 'Gingerbread',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 345,
        },
        {
          name: 'Jelly bean',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 454,
        },
        {
          name: 'Lollipop',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 322,
        },
        {
          name: 'Honeycomb',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 452,
        },
        {
          name: 'Donut',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 452,
        },
        {
          name: 'KitKat',
          status: 'Paid',
          date: 'Sep 02, 2022',
          duedate: 'Sep 02, 2022',
          amount: 664,
        },
      ],
    }
  },
  methods: {
    getColor(status) {
      if (status > 400) return 'red'
      else if (status > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>

<style scoped>
</style>