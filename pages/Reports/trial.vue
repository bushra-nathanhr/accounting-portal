<template>
  <v-container>
    <div class="pa-0 pt-5 ma-0">
      <v-row class="pt-0 ml-0 pa-0 ma-0">
        <!-- COL-1 -->
        <v-col cols="7" class="pa-0 pr-5">
          <v-card
            class="rounded-xl letterRequests"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-card-title class="px-6">
              <v-icon class="pa-3">mdi-badge-account-horizontal-outline</v-icon>
              <span
                class="
                  darkBlue-heading-text
                  font-weight-normal
                  subHeadingFontSize
                "
              >
                Trial Balance Reports
              </span>
            </v-card-title>
            <v-divider></v-divider>
            <v-row class="ma-5 pa-5">
              <v-col cols="12" class="text-center">
                <v-btn
                  small
                  fab
                  elevation="0"
                  class="grey lighten-1 grey--text mr-3"
                  style="background: #f5f5f5 !important;"
                >
                  <v-icon>mdi-printer-outline</v-icon>
                </v-btn>
                <v-btn
                  small
                  fab
                  elevation="0"
                  class="grey lighten-1 grey--text mr-3"
                  style="background: #f5f5f5 !important;"
                >
                  <v-icon>mdi-monitor-arrow-down-variant</v-icon>
                </v-btn>
                <v-btn
                  small
                  fab
                  elevation="0"
                  class="grey lighten-1 grey--text mr-3"
                  style="background: #f5f5f5 !important;"
                >
                  <v-icon>mdi-cog-outline</v-icon>
                </v-btn>
              </v-col>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h3>Nathan & Nathan</h3>
                  <span>TRIAL BALANCE REPORT</span>
                  <p class="grey--text caption font-weight-light pb-5">
                    Accrual Basis Friday, 16 September 2022 06:02 PM GMT+04:00
                  </p>

                  <v-simple-table class="outlined">
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-center table-header">TITLE</th>
                          <th class="text-center table-header">DEBIT</th>
                          <th class="text-center table-header">CREDIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in trial" :key="item.title">
                          <td>{{ item.title }}</td>
                          <td>{{ item.debit }}</td>
                          <td>{{ item.credit }}</td>
                        </tr>
                        <tr class="total">
                          <td>TOTAL</td>
                          <td>AED 500,807.40</td>
                          <td>AED 500,807.40</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
            </v-row>
          </v-card>
        </v-col>

        <!-- COL-2 -->
        <v-col cols="5" class="pa-0 ">
          <!-- COL-2 Row-1 -->
          <v-row>
            <v-col cols="12" class="pa-0 pr-5">
              <v-card
                class="rounded-xl letterRequests"
                style="box-shadow: 0px 24px 30px #959ea51a"
                flat
              >
                <v-card-title class="px-6">
                  <v-icon class="pa-3"
                    >mdi-badge-account-horizontal-outline</v-icon
                  >
                  <span
                    class="
                      darkBlue-heading-text
                      font-weight-normal
                      subHeadingFontSize
                    "
                  >
                    Debit & Credit
                  </span>
                </v-card-title>
                <v-divider></v-divider>
                <v-row class="ma-5 pa-5">
                  <v-col cols="12" class="pa-0 ma-0">
                    <chartjs-line
                      :height="300"
                      :bind="true"
                      :datasets="datasets"
                      :labels="labels"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <!-- COL-2 Row-2 -->
          <v-row>
            <v-col cols="12" class="pa-0 pr-5">
              <v-card
                class="rounded-xl letterRequests"
                style="box-shadow: 0px 24px 30px #959ea51a"
                flat
              >
                <v-card-title class="px-6">
                  <v-icon class="pa-3"
                    >mdi-badge-account-horizontal-outline</v-icon
                  >
                  <span
                    class="
                      darkBlue-heading-text
                      font-weight-normal
                      subHeadingFontSize
                    "
                  >
                    Totals
                  </span>
                </v-card-title>
                <v-divider></v-divider>
<v-row class="ma-5 pa-5">
                  <v-col cols="12" class="pa-0 ma-0">
                    <chartjs-bar
                      :height="300"
                      :bind="true"
                      :datasets="datasets"
                      :labels="labels"
                    />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'trial',
  layout: 'defualt',
  data() {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [
        {
          label: 'Debit',
          data: [180, 270, 290, 300, 430, 210, 260, 290, 150],
          borderColor: '#1565C0',
        },
        {
          label: 'Credit',
          data: [34, 44, 55, 77, 9, 2, 360, 300, 50],
          borderColor: '#f80b00',
        },
      ],
      trial: [
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
        {
          title: '1000 Cash (USD)',
          debit: 'AED 340,00.00',
          credit: 'AED 445,197.00',
        },
      ],
    }
  },
}
</script>

<style>
.outlined {
  border: 1px solid #cfcfcf !important;
  border-radius: 32px !important;
}
.table-header {
  /* background: #CFCFCF !important; */
  color: #0a2c4f !important;
}
.total {
  color: #fff !important;
  background: #0a2c4f 0% 0% no-repeat padding-box !important;
  border-radius: 32px !important;
  border: 1px solid #0a2c4f;
  opacity: 0.5 !important;
}
</style>