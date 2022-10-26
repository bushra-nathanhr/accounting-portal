<template>
  <div class="dashboard pa-0 ma-0">
    <v-col cols="12">
      <v-card
        class="rounded-xl ma-0 pa-0"
        style="box-shadow: 0px 24px 30px #959ea51a"
        flat
      >
        <v-card-title class="ma-0 pl-5 pt-5">
          <v-icon color="primary">mdi-alarm</v-icon>
          <span class="pl-5 darkBlue-heading-text subHeadingFontSize"
            >Invoices</span
          >
        </v-card-title>
        <v-divider></v-divider>
        <v-spacer></v-spacer>
        <v-row class="mx-0 my-0">
          <v-container class="ma-0 pa-0">
            <v-card
              flat
              v-for="invoice in invoices"
              :key="invoice.client"
              class="text-left pa-0 ma-0"
            >
              <v-layout :class="`pa-3 invoice ${invoice.status}`">
                <v-flex >
                  <div class="caption grey--text">Client</div>
                  <div>{{ invoice.client }}</div>
                </v-flex>
                <v-flex >
                  <div class="caption grey--text">Invoice No.</div>
                  <div>{{ invoice.no }}</div>
                </v-flex>
                <v-flex >
                  <div class="caption grey--text">Due Date</div>
                  <div>{{ invoice.due }}</div>
                </v-flex>
                <v-flex >
                  <div class="caption grey--text">Status</div>
                  <v-chip :color="invoice.statuscolor" class="white--text">{{
                    invoice.status
                  }}</v-chip>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            </v-card>
          </v-container>
        </v-row>
      </v-card>
    </v-col>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      invoices: [
        {
          client: ' Splash',
          no: '1001',
          due: '1st Jan 2019',
          status: 'request',
          statuscolor: 'red',
        },
        {
          client: ' EasyBox',
          no: '1002',
          due: '10th Jan 2019',
          status: 'processing',
          statuscolor: 'orange',
        },
        {
          client: ' Dewa',
          no: '1003',
          due: '20th Dec 2018',
          status: 'aproved',
          statuscolor: 'orange',
        },
        {
          client: ' Damac',
          no: '1004',
          due: '20th Oct 2018',
          status: 'paid',
          statuscolor: 'green',
        },
        {
          client: ' client',
          no: '1005',
          due: '20th Oct 2018',
          status: 'fund trnsferred',
          statuscolor: 'primary',
        },
        {
          client: ' Splash',
          no: '1001',
          due: '1st Jan 2019',
          status: 'request',
          statuscolor: 'red',
        },
        {
          client: ' EasyBox',
          no: '1002',
          due: '10th Jan 2019',
          status: 'processing',
          statuscolor: 'orange',
        },
        {
          client: ' Dewa',
          no: '1003',
          due: '20th Dec 2018',
          status: 'aproved',
          statuscolor: 'orange',
        },
        {
          client: ' Damac',
          no: '1004',
          due: '20th Oct 2018',
          status: 'paid',
          statuscolor: 'green',
        },
        {
          client: ' client',
          no: '1005',
          due: '20th Oct 2018',
          status: 'fund trnsferred',
          statuscolor: 'primary',
        },
      ],
    }
  },
}
</script>
  
  <style>
.invoice.request {
  border-left: 4px solid #ff0800;
}
.invoice.processing {
  border-left: 4px solid #ff9800;
}
.invoice.aproved {
  border-left: 4px solid #2fe900;
}
.invoice.paid {
  border-left: 4px solid #4caf50;
}
.invoice.trnsferred {
  border-left: 4px solid #303f9f;
}
</style>