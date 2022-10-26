<template>
  <v-container class="ma-0 pa-0">
    <v-row align="center">
      <v-col cols="1" class="xFont">
        <!-- <v-img src="../../static/dashboard/sun.svg" height="100"></v-img> -->
      </v-col>
      <v-col cols="11" class="rp">
        <v-row>
          <caption class="mt-5">
            {{
              today_date
            }}
          </caption>
        </v-row>
        <v-row>
          <h1 class="font-weight-bold mb-5">Good Morning, {{ user }}</h1>
        </v-row>
      </v-col>
    </v-row>

    <!-- M-ROW1 -->
    <v-row class="white pa-5 my-5 mx-0 align-center" fluid>
      <v-col cols="8">
        <v-row>
          <v-col v-for="card in cards" :key="card.title" cols="4" md="4" lg="4">
            <v-card flat outlined class="mx-auto my-5 align-center">
              <v-card-text class="customBorderRadius">
                <div class="cardHeader">
                  <div class="d-inline-flex align-center">
                    <v-icon class="d-inline-flex mx-3 my-5 grey"
                      >mdi-{{ card.icon }}</v-icon
                    >
                    <h4 class="d-inline-flex">{{ card.title }}</h4>
                  </div>
                  <!-- <v-spacer></v-spacer> -->
                  <h3 class="d-inline-flex black--text font-weight-black">
                    {{ card.data }}
                  </h3>
                </div>
                <v-divider></v-divider>
                <v-row class="text--primary">
                  <v-col cols="auto">
                    <v-img src="/images/dashboard/wave.svg"> </v-img>
                  </v-col>
                  <v-col class="pt-5 mt-5 pr-5">
                    <span class="green--text">10 + </span>
                    <span class="font-weight-light" style="font-size: 12px"
                      >more<br />
                      from last week</span
                    >
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <!-- Top Cards -->
        </v-row>
        <v-divider class="my-5"></v-divider>
        <v-row class="align-center mt-5 mx-2">
          <col class="d-inline-flex" />
          <v-icon small class="mr-2">mdi-account-multiple-outline</v-icon>
          <h5>Your Customers Team</h5>
          <v-divider vertical class="mx-6"></v-divider>
          <div
            class="pics"
            v-for="customer in customers_pics"
            :key="customer.name"
          >
            <v-avatar size="25">
              <img :src="customer.pic" class="pic" />
            </v-avatar>
          </div>
          <v-spacer></v-spacer>
          <v-icon small class="mr-2">mdi-account-multiple-outline</v-icon>
          <h5>Your Customers Team</h5>
          <v-divider vertical class="mx-6"></v-divider>
          <div
            class="pics"
            v-for="customer in customers_pics"
            :key="customer.name"
          >
            <v-avatar size="25">
              <img :src="customer.pic" class="pic" />
            </v-avatar>
          </div>
        </v-row>
      </v-col>
      <v-divider vertical class=""></v-divider>
      <v-col cols="4">
        <v-row class="statAlign">
          <v-col cols="6" v-for="item in statistics" :key="item.title">
            <caption class="grey--text d-block">
              {{
                item.title
              }}
            </caption>
            <div class="font-weight-bold d-block tag pr-3">
              <span :class="`tag ${item.color}`"></span>
              <span class="ml-3">{{ item.value }}</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- /M-ROW1 -->

    <!-- M-ROW2 -->
    <v-row class="mt-5">
      <v-col cols="8">
        <v-row>
          <v-col cols="12">
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
                >
                </v-img>
                <v-icon
                  max-width="fit-content"
                  height="fit-content"
                  class="mr-2"
                  contain
                  color="blue"
                >
                  mdi-receipt-text-check-outline</v-icon
                >
                <span class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize"
                  >Invoices</span
                >
              </v-card-title>
              <v-spacer></v-spacer>
              <v-row class="pb-5">
                <v-col cols="12">
                  <chartjs-bar
                    :height="300"
                    :bind="true"
                    :datasets="invoices"
                    :labels="invoiceLabels"
                    :option="option_distribution"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-card
              class="rounded-xl ml-0"
              style="box-shadow: 0px 24px 30px #959ea51a"
              flat
            >
              <v-card-title class="px-3">
                <span
                  class="
                    px-0
                    pl-5
                    pt-1
                    darkBlue-heading-text
                    subHeadingFontSize
                  "
                  >Active Clients</span
                >
              </v-card-title>
              <v-spacer></v-spacer>
              <v-row class="mx-5 my-3">
                <v-col cols="12">
                  <chartjs-line :height="300" />
                  <div class="d-inline-flex align-right">
                    <span>
                      <v-icon color="green">mdi-circle-small</v-icon>Active
                    </span>
                    <span>
                      <v-icon color="red">mdi-circle-small</v-icon>Unactive
                    </span>
                  </div>
                  <v-spacer></v-spacer>
                  <v-list class="pt-5">
                    <v-list-item v-for="chat in recent" :key="chat.title">
                      <v-list-item-avatar>
                        <v-img
                          :alt="`${chat.title} avatar`"
                          :src="chat.avatar"
                          size="40"
                        ></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="chat.title"
                          class="font-weight-light"
                        ></v-list-item-title>
                        <span class="grey--text font-weight-light captureTxt"
                          >Customer ID#01223</span
                        >
                      </v-list-item-content>
                      <v-list-item-icon>
                        <v-icon
                          :color="chat.active ? 'deep-purple accent-4' : 'grey'"
                          small
                        >
                          mdi-message-outline
                        </v-icon>
                      </v-list-item-icon>
                    </v-list-item>
                  </v-list>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card
              class="rounded-xl ml-0"
              style="box-shadow: 0px 24px 30px #959ea51a"
              flat
            >
              <v-card-title class="px-3">
                <span
                  class="
                    px-0
                    pl-5
                    pt-1
                    darkBlue-heading-text
                    subHeadingFontSize
                  "
                  >Sales Vs Expense</span
                >
              </v-card-title>
              <v-spacer></v-spacer>
              <v-row class="mx-5 my-3">
                <v-col>
                  <h1 class="font-weight-light pl-3">AED 400,00</h1>
                  <span class="d-block">
                    <v-icon x-larg color="green">mdi-circle-small</v-icon>Total
                    Sales
                  </span>
                  <span class="d-block">
                    <v-icon x-larg color="red">mdi-circle-small</v-icon>Total
                    Expense
                  </span>
                </v-col>
                <v-col cols="12">
                  <chartjs-bar
                    :height="350"
                    :bind="false"
                    :type="bar"
                    :option="option_distribution2"
                  />
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-card
          class="rounded-xl ml-0 pb-5"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
        >
          <v-card-title class="px-3">
            <span
              class="px-0 pl-5 pt-1 darkBlue-heading-text subHeadingFontSize"
              >Sales Information</span
            >
          </v-card-title>
          <v-spacer></v-spacer>
          <div class="headerBtns d-flex align-center justify-center">
            <v-btn outlined color="info" class="mr-5 ml-2" width="150"
              >Sales</v-btn
            >
            <v-btn outlined color="warning" class="mr-5 ml-2" width="150"
              >Expenses</v-btn
            >
          </div>
          <v-data-table
            :headers="salesHeaders"
            :items="sales_data"
            :single-expand="singleExpand"
            item-key="name"
            hide-default-footer
            every-item="true"
            items-per-page="18"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <!-- /M-ROW2 -->

    <!-- M-ROW3 -->
    <v-row class="mt-5">
      <v-col cols="4">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
        >
          <v-card-title class="px-3 customBorderRadius">
            <v-img
              src="~/static/images/icon.svg"
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
            >
            </v-img>
            <v-icon
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
              color="blue"
            >
              mdi-receipt-text-check-outline</v-icon
            >
            <span
              class="
                px-0
                pt-1
                darkBlue-heading-text
                subHeadingFontSize
                d-inline-flex
              "
            >
              Customers <span class="justify-end">{{ customers.length }}</span>
            </span>
          </v-card-title>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-row class="mx-5 my-3" align="center" justify="space-around">
            <v-btn
              block
              rounded
              x-large
              outlined
              color="primary"
              v-for="customer in customers"
              :key="customer.title"
              class="my-2 cardData"
            >
              <v-icon :color="customer.color" class="mr-3"
                >mdi-{{ customer.icon }}</v-icon
              >
              <span class="font-weight-light grey--text">{{
                customer.title
              }}</span>
              <!-- <span class="rightCardSide">
                <v-icon>mdi-alarm</v-icon>
              </span> -->
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
        >
          <v-card-title class="px-3 customBorderRadius">
            <v-img
              src="~/static/images/icon.svg"
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
            >
            </v-img>
            <v-icon
              max-width="fit-content"
              height="fit-content"
              class="mr-2"
              contain
              color="blue"
            >
              mdi-receipt-text-check-outline</v-icon
            >
            <span class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize">
              Suppliers
            </span>
          </v-card-title>
          <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-row class="mx-5 my-3" align="center" justify="space-around">
            <v-btn
              block
              rounded
              x-large
              outlined
              color="primary"
              v-for="customer in customers"
              :key="customer.title"
              class="my-2 cardData"
            >
              <v-icon :color="customer.color" class="mr-3"
                >mdi-{{ customer.icon }}</v-icon
              >
              <span class="font-weight-light grey--text">{{
                customer.title
              }}</span>
              <!-- <span class="rightCardSide">
                <v-icon>mdi-alarm</v-icon>
              </span> -->
            </v-btn>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card
          class="rounded-xl ml-0"
          style="box-shadow: 0px 24px 30px #959ea51a"
          flat
        >
          <v-spacer></v-spacer>
          <v-row class="mx-5 my-5 d-block" align="center">
            <v-switch
              v-model="singleExpand"
              label="Notify Me"
              class="pt-5"
            ></v-switch>
            <span class="text-caption">2 March 2022 | 3:45 pm</span>
            <h3 class="px-0 pt-1 darkBlue-heading-text subHeadingFontSize">
              Bank Accounts
            </h3>
            <v-spacer></v-spacer>

            <div class="my-5 d-flex justify-space-between">
              <div>
                <h3>1,000 Cash</h3>
                <span class="text-caption grey--text">lorem ipusm</span>
              </div>
              <div>
                <span>AED 0</span>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="my-5 d-flex justify-space-between">
              <div>
                <h3>1,000 Cash</h3>
                <span class="text-caption grey--text">lorem ipusm</span>
              </div>
              <div>
                <span>AED 0</span>
              </div>
            </div>
            <v-divider></v-divider>
            <div class="my-5 d-flex justify-space-between">
              <div>
                <h3>1,000 Cash</h3>
                <span class="text-caption grey--text">lorem ipusm</span>
              </div>
              <div>
                <span>AED 0</span>
              </div>
            </div>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
            <div class="my-5 py-5 d-flex justify-space-between">
              <span class="blue--text">Connect Accounts</span>
              <v-btn small color="light-5-grey">Go to register</v-btn>
            </div>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <!-- /M-ROW3 -->
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',
  layout: 'default',
  data() {
    return {
      today_date: 'Tuesday, 16 Aug 2022',
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
      ],
      invoices: [
        {
          barThickness: 30,
          curvature: 1,
          borderSkipped: false,
          backgroundColor: '#1565C0',
          borderColor: '#1565C0',
          label: 'Invoice',
          data: [180, 270, 290, 300, 430, 210, 260, 290, 150],
          borderWidth: 2,
        },
      ],
      invoiceLabels: [
        'Jan 2022',
        'Feb 2022',
        'Mar 2022',
        'Apr 2022',
        'May 2022',
        'Jun 2022',
        'Jul 2022',
        'Aug 2022',
        'Sep 2022',
      ],
      option_distribution: {
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex]
            },
          },
        },
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Invoice Summary',
        },
        responsive: true,
        maintainAspectRatio: false,
      },
      option_distribution2: {
        plugins: {
          datalabels: {
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex]
            },
          },
        },
        backgroundWidth: 1,
        title: {
          display: false,
        },
        responsive: true,
      },
      expanded: [],
      singleExpand: false,
      salesHeaders: [
        {
          text: 'Customer',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Supplier', value: 'supplier' },
        { text: 'Amount', value: 'amount' },
      ],
      sales_data: [
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed Abdalkreem',
          supplier: 'Basil Faheem',
          amount: '200,00 AED',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
        {
          name: 'Mohammed',
          supplier: 'Basil',
          amount: '200,00',
        },
      ],
      customers: [
        { title: 'Invoices', icon: 'receipt-text-outline', color: 'info' },
        {
          title: 'Recives',
          icon: 'arrow-bottom-left-thin-circle-outline',
          color: 'success',
        },
        { title: 'Estimate', icon: 'file-outline', color: 'warning' },
        { title: 'Delayed', icon: 'clock-outline', color: 'green' },
      ],
      customers_pics: [
        { name: 'Bushra', pic: 'https://cdn.vuetifyjs.com/images/john.jpg' },
        { name: 'Bushra', pic: 'https://cdn.vuetifyjs.com/images/john.jpg' },
        { name: 'Bushra', pic: 'https://cdn.vuetifyjs.com/images/john.jpg' },
        { name: 'Bushra', pic: 'https://cdn.vuetifyjs.com/images/john.jpg' },
        { name: 'Bushra', pic: 'https://cdn.vuetifyjs.com/images/john.jpg' },
      ],
      statistics: [
        { title: 'Total Incomes', value: '903,200', color: 'blue' },
        { title: 'Total Expenses', value: '11,320', color: 'yellow' },
        { title: 'Total Customers', value: '189', color: 'red' },
        { title: 'Total Suppliers', value: '270', color: 'blue' },
        { title: 'Total Bills', value: '450', color: 'red' },
        { title: 'Total Recipes', value: '903,200', color: 'blue' },
        { title: 'Total Amount', value: '945,400', color: 'yellow' },
        { title: 'Total Saving', value: '5,100', color: 'blue' },
      ],
      cards: [
        {
          icon: 'account-group-outline',
          title: 'Income',
          data: '07',
          color: 'red',
        },
        {
          icon: 'receipt-text-check-outline',
          title: 'Expense',
          data: '08',
          color: 'blue',
        },
        {
          icon: 'cash-multiple',
          title: 'Total Savings',
          data: '12',
          color: 'green',
        },
      ],
      user: 'Akshaf',
    }
  },
}
</script>

<style>
.v-data-table.theme--light {
  height: 916px !important;
}

.captureTxt {
  font-size: 12px !important;
  color: lightgray;
}

.smallTxt {
  font-size: 12px !important;
}

.customBorderRadius .v-icon {
  border: 5px solid #d6d6d6 !important;
  background: #d6d6d6 !important;
  border-radius: 50% !important;
}

.cardHeader {
  margin: 0 auto;
  padding: 0;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
}

.tag {
  padding-left: 0;
}

.tag.red {
  border-left: 2px solid #ff0800;
}

.tag.yellow {
  border-left: 2px solid #ff9800;
}

.tag.green {
  border-left: 2px solid #4caf50;
}

.tag.blue {
  border-left: 2px solid #0026ff;
}

button.my-2.cardData.v-btn.v-btn--block.v-btn--outlined.theme--light.v-size--default.primary--text {
  height: 82px;
  text-align: left;
  padding-left: 0;
  margin-left: 0;
  /* justify-content: center; */
  text-align: start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
}

.rightCardSide {
  background: #0026ff;
  opacity: 40%;
  /* width: 70px; */
  height: 82px;
}
.col.col-1.xFont {
  padding: 0 !important;
  margin: 0 !important;
  font-size: xx-large !important;
  display: flex !important;
  align-content: center !important;
  justify-content: center !important;
}
.col.col-1.rp {
  padding: 0 !important;
  margin: 0 !important;
}
</style>