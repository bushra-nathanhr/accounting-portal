<template>
  <v-row>
    <!-- col-1 -->
    <v-col cols="6">
      <v-card
        style="box-shadow: 0px 24px 30px #959ea51a"
        flat
        class="rounded-xl pb-3"
      >
        <v-card-title class="align-center">
          <v-img src="svgs/icon.svg" contain max-width="30"></v-img>
          <span
            class="darkBlue-heading-text font-weight-normal subHeadingFontSize pl-3"
            >Invoices List</span
          >
        </v-card-title>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" class="ma-0 pa-0">
            <v-data-table :headers="headers" :items="data" class="elevation-0" hide-default-footer items-per-page="13" show-expand>
              <template v-slot:item.status="{ item }">
                <v-chip :color="getStatus(item.status)" class="customStatus" dark>
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- justify-content: center;
    display: flex;
    flex-direction: column; -->

    <!-- col-2 -->
    <v-col cols="6">
      <v-card
        style="box-shadow: 0px 24px 30px #959ea51a"
        flat
        class="d-flex flex-column text-center rounded-xl"
      >
        <v-card-title class="align-center">
          <v-img src="svgs/icon.svg" contain max-width="30"></v-img>
          <span
            class="darkBlue-heading-text font-weight-normal subHeadingFontSize pl-3"
            >Preview</span
          >
        </v-card-title>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" class="ma-0 pa-0 align-center justify-center">
            <v-img
              contain
              lazy-src="images/invoice.png"
              src="images/invoice.png"
              style="height: 600px"
            ></v-img>
          </v-col>
        </v-row>
      <v-btn color="info" class="" style="border: 1px solid #2196f3; border-radius: 0 0 6px 6px; height: 50px">Download</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Cutomer Name', value: 'name' },
        { text: 'Amount', value: 'amount' },
        { text: 'Status', value: 'status' },
      ],
      data: [
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1001,
          name: 'Basil Faheem',
          amount: '250,00 AED',
          status: 'Paid',
        },
        {
          id: 1002,
          name: 'Basil Faheem',
          amount: '500,00 AED',
          status: 'In Proccess',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
        {
          id: 1003,
          name: 'Basil Faheem',
          amount: '900,00 AED',
          status: 'Transfered',
        },
      ],
    }
  },
  methods: {
    getStatus(status) {
      if (status === 'Paid') return 'green'
      else if (status === 'In Proccess') return 'orange'
      else return 'info'
    },
  },
}
</script>

<style>
  .customStatus.theme--dark.v-chip:not(.v-chip--active) {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
</style>
