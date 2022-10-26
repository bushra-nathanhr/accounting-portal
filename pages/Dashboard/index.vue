<template>
  <v-container>
    <!-- Good Morning -->
    <v-row id="good-morning">
      <div
        class="sun ma-5"
        style="width: 127px !important; height: 105px !important"
      >
        <v-img src="/dashboard/sun.svg" />
      </div>
      <div class="morning-txt">
        <span class="degree">30º C <span class="city">| Dubai, UEA</span></span>
        <span class="good-morning"
          >Good Morning, <span class="user">Akshaf</span></span
        >
        <span class="date">Thursday, 8:25 AM</span>
      </div>
    </v-row>

    <!-- Notification -->
    <v-row id="notification" >
      <div
        class="notification d-flex ma-5"
        style="
          width: 100%;
          height: 60px !important ;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #fff0f07c 0% 0% no-repeat padding-box;
          border: 0.5px solid #ffa7a7;
          border-radius: 10px;
        "
      >
        <div class="d-flex align-center px-3">
          <v-img
            src="/dashboard/info-circle-bold.svg"
            style="width: 33px; height: 33px"
          ></v-img>
          <span class="pl-3"
            >We found email errors for sales transactions to view the errors,
            <span style="color: blue !important">CLICK HERE</span></span
          >
        </div>
        <div>
          <v-img
            src="/dashboard/close-square-outline.svg"
            style="width: 24px; height: 24px"
          ></v-img>
        </div>
      </div>
    </v-row>


<!-- TODO CHANG THE UI AND PUT THE CHARJS IN THE TOP AND THEN THE LISTS UNDERS -->
<!-- TODO CHANG THE CODE STRUCTOR INTO COMPONENT STRUNCTUR PUT EACH THING IN A COMPONENT AND THEN CALL IT IN THE PAGE -->
<!-- TODO SETUP THE SCSS -->
    

    <!-- SECTION 1 -->
    <!-- ROW 1 -->
    <v-row>
      <!-- Left Col -->
      <v-col cols="8">
      <v-row>
        <v-col cols="4">
          <img src="/dashboard/box-1.png" style="width: 100%;" alt="graph-box" />
        </v-col>
        <v-col cols="4">
          <img src="/dashboard/box-2.png"  style="width: 100%;" alt="graph-box" />
        </v-col>
        <v-col cols="4">
          <img src="/dashboard/box-3.png"  style="width: 100%;" alt="graph-box" />
        </v-col>
      </v-row>


        <!-- Discover More -->
        <div
          class="discover-more"
          style="
            margin: 54px !important;
            background: #dbfafc !important;
            width: 723px !important;
            height: 266px !important;
            border-radius: 18px !important;
          "
        >
          <v-row class="align-center justify-space-between">
            <v-col cols="8" class="pa-5">
              <v-row
                ><v-col cols="12"
                  ><h1
                    class="font-weight-bold"
                    style="
                      font-size: 29px !important;
                      font-weight: 700 !important;
                    "
                  >
                    Discover More
                  </h1></v-col
                ></v-row
              >
              <v-row
                ><v-col cols="12"
                  ><span
                    class="font-weight-lighter"
                    style="
                      color: #8c9cac !important;
                      font-size: 14px !important;
                      font-weight: 100 !important;
                    "
                  >
                    Connect your Emirates NBD, Dubai Islamic, First Abu Dhabi &
                    RAK bank accounts. and integrates seamlessly with hundreds
                    of Apps, and integrates seamlessly with hundreds of Apps.
                  </span></v-col
                ></v-row
              >
              <v-row
                ><v-col cols="12"
                  ><v-img
                    style="width: 158px !important; height: 42px !important"
                    src="/dashboard/go-btn.svg"
                  ></v-img></v-col
              ></v-row>
            </v-col>
            <v-col cols="4" style="">
              <v-img
                width="150"
                height="100"
                src="/dashboard/help-sign.svg"
              ></v-img>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <!-- Right Col -->
      <v-col cols="4" class="mt-5">
        <div style="width: 100% !important">
          <v-card
            class="rounded-xl letterRequests"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-card-title class="px-6 py-0 pt-3">
              <div
                class="align-center d-flex"
                style="
                  height: 30px !important;
                  min-width: 30px !important;
                  width: 30px !important;
                  padding-top: 30px !important;
                  padding-bottom: 30px !important;
                "
              >
                <v-img
                  src="https://erp.nathanhr.com/spotlight/strongbox.svg"
                ></v-img>
              </div>
              <span
                class="
                  darkBlue-heading-text
                  font-weight-normal
                  subHeadingFontSize
                  pl-3
                "
              >
                Shortcuts
              </span>
              <v-spacer></v-spacer>
              <div
                class="align-center d-flex"
                style="
                  height: 13px !important;
                  min-width: 13px !important;
                  width: 13px !important;
                  padding-top: 30px !important;
                  padding-bottom: 30px !important;
                "
              >
                <v-img src="/dashboard/arrow-down.svg"></v-img>
              </div>
            </v-card-title>
            <div
              style="
                color: #f1f6fa !important;
                border: 0.5px solid #f1f6fa !important;
              "
            ></div>

            <!-- Shortcut-column-rows -->
            <v-row class="ma-5 px-5">
              <v-btn
                x-large
                block
                style="
                  text-align: left !important;
                  font: normal normal normal 14px/17px Rubik !important;
                  letter-spacing: 0px !important;
                  color: #0a2c4f !important;
                  text-transform: capitalize !important;
                  box-shadow: 0 !important;
                  background: #ffffff 0% 0% no-repeat padding-box !important;
                  border: 1px solid #46a2d0 !important;
                  border-radius: 12px !important;
                "
              >
                Customer
                <v-spacer></v-spacer>
                <div class="icon" style="width: 12px !important">
                  <v-img
                    src="/dashboard/arrow-right-btn.svg"
                    style="width: 30px !important"
                  ></v-img>
                </div>
              </v-btn>
            </v-row>
            <v-row class="ma-5 px-5">
              <v-btn
                x-large
                block
                style="
                  text-align: left !important;
                  font: normal normal normal 14px/17px Rubik !important;
                  letter-spacing: 0px !important;
                  color: #0a2c4f !important;
                  text-transform: capitalize !important;
                  box-shadow: 0 !important;
                  background: #ffffff 0% 0% no-repeat padding-box !important;
                  border: 1px solid #46a2d0 !important;
                  border-radius: 12px !important;
                "
              >
                invoices
                <v-spacer></v-spacer>
                <div class="icon" style="width: 12px !important">
                  <v-img
                    src="/dashboard/arrow-right-btn.svg"
                    style="width: 30px !important"
                  ></v-img>
                </div>
              </v-btn>
            </v-row>
            <v-row class="ma-5 px-5">
              <v-btn
                x-large
                block
                style="
                  text-align: left !important;
                  font: normal normal normal 14px/17px Rubik !important;
                  letter-spacing: 0px !important;
                  color: #0a2c4f !important;
                  text-transform: capitalize !important;
                  box-shadow: 0 !important;
                  background: #ffffff 0% 0% no-repeat padding-box !important;
                  border: 1px solid #46a2d0 !important;
                  border-radius: 12px !important;
                "
              >
                estimates
                <v-spacer></v-spacer>
                <div class="icon" style="width: 12px !important">
                  <v-img
                    src="/dashboard/arrow-right-btn.svg"
                    style="width: 30px !important"
                  ></v-img>
                </div>
              </v-btn>
            </v-row>
            <v-row class="ma-5 px-5">
              <v-btn
                x-large
                block
                style="
                  text-align: left !important;
                  font: normal normal normal 14px/17px Rubik !important;
                  letter-spacing: 0px !important;
                  color: #0a2c4f !important;
                  text-transform: capitalize !important;
                  box-shadow: 0 !important;
                  background: #ffffff 0% 0% no-repeat padding-box !important;
                  border: 1px solid #46a2d0 !important;
                  border-radius: 12px !important;
                "
              >
                Payments
                <v-spacer></v-spacer>
                <div class="icon" style="width: 12px !important">
                  <v-img
                    src="/dashboard/arrow-right-btn.svg"
                    style="width: 30px !important"
                  ></v-img>
                </div>
              </v-btn>
            </v-row>
            <v-row class="ma-5 px-5 pb-5">
              <v-btn
                x-large
                block
                style="
                  text-align: left !important;
                  font: normal normal normal 14px/17px Rubik !important;
                  letter-spacing: 0px !important;
                  color: #0a2c4f !important;
                  text-transform: capitalize !important;
                  box-shadow: 0 !important;
                  background: #ffffff 0% 0% no-repeat padding-box !important;
                  border: 1px solid #46a2d0 !important;
                  border-radius: 12px !important;
                "
              >
                Cheques
                <v-spacer></v-spacer>
                <div class="icon" style="width: 12px !important">
                  <v-img
                    src="/dashboard/arrow-right-btn.svg"
                    style="width: 30px !important"
                  ></v-img>
                </div>
              </v-btn>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- SECTION 2 -->
    <!-- ROW 2 -->
    <v-row class="mt-5 mx-5">
      <!-- Left Col -->
      <v-col cols="4">
        <div style="width: 100% !important">
          <v-card
            class="rounded-xl letterRequests"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-card-title class="pr-6 py-0 pt-3">
              <div
                class="align-center d-flex"
                style="
                  height: 30px !important;
                  min-width: 30px !important;
                  width: 30px !important;
                  padding-top: 30px !important;
                  padding-bottom: 30px !important;
                "
              ></div>
              <span
                class="
                  darkBlue-heading-text
                  font-weight-normal
                  subHeadingFontSize
                  pl-0
                "
              >
                Active Clients
              </span>
              <v-spacer></v-spacer>
              <div>
                <span class="caption">This Month</span>
                <v-icon small>mdi-menu-down</v-icon>
              </div>
            </v-card-title>

            <!-- Card Body -->
            <v-row class="mx-5 my-0">
              <v-col cols="12">
                <!-- <chartjs-line :height="300" /> -->
                <!-- <div class="d-inline-flex align-right">
                  <span>
                    <v-icon color="green">mdi-circle-small</v-icon>Active
                  </span>
                  <span>
                    <v-icon color="red">mdi-circle-small</v-icon>Unactive
                  </span>
                </div> -->
                <v-spacer></v-spacer>
                <v-list class="pt-0">
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
        </div>
      </v-col>

      <!-- Middle Col -->
      <v-col cols="4">
        <div
          style="
            width: 100% !important;
            margin-top: 0 !important;
            padding-top: 0 !important;
          "
        >
          <v-card
            class="rounded-xl ml-0"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-spacer></v-spacer>
            <v-row class="mx-5 py-2 d-block" align="center">
              <div class="d-flex justify-space-between align-center">
                <span style="font-size: 16px">Notify Me</span>
                <v-switch
                  style="
                    font-size: 16px !important;
                    font-weight: 100 !important;
                  "
                  v-model="singleExpand"
                  label=""
                  class="pt-5"
                ></v-switch>
              </div>
              <span class="caption" style="font-size: 10px; color: #8d98a9"
                >2 March 2022 | 3:45 pm</span
              >
              <h3
                class="
                  px-0
                  pt-1
                  mb-5
                  pb-3
                  darkBlue-heading-text
                  subHeadingFontSize
                "
                style="font-size: 20px !important; font-weight: 500 !important"
              >
                Bank Accounts
              </h3>
              <v-spacer></v-spacer>

              <div class="my-5 d-flex justify-space-between">
                <div>
                  <span
                    style="
                      font-size: 18px !important;
                      font-weight: 400 !important;
                    "
                    >1,000 Cash</span
                  >
                  <span
                    class="text-caption grey--text d-block caption"
                    style="font-weight: lighter !important"
                    >lorem ipusm</span
                  >
                </div>
                <div>
                  <span style="font-size: 14px !important">AED 0</span>
                </div>
              </div>

              <v-divider></v-divider>
              <div class="my-5 d-flex justify-space-between">
                <div>
                  <span
                    style="
                      font-size: 18px !important;
                      font-weight: 400 !important;
                    "
                    >1,000 Cash</span
                  >
                  <span
                    class="text-caption grey--text d-block caption"
                    style="font-weight: lighter !important"
                    >lorem ipusm</span
                  >
                </div>
                <div>
                  <span style="font-size: 14px !important">AED 0</span>
                </div>
              </div>

              <v-divider></v-divider>
              <div class="my-5 d-flex justify-space-between">
                <div>
                  <span
                    style="
                      font-size: 18px !important;
                      font-weight: 400 !important;
                    "
                    >1,000 Cash</span
                  >
                  <span
                    class="text-caption grey--text d-block caption"
                    style="font-weight: lighter !important"
                    >lorem ipusm</span
                  >
                </div>
                <div>
                  <span style="font-size: 14px !important">AED 0</span>
                </div>
              </div>

              <v-divider></v-divider>
              <div class="my-5 d-flex justify-space-between">
                <div>
                  <span
                    style="
                      font-size: 18px !important;
                      font-weight: 400 !important;
                    "
                    >1,000 Cash</span
                  >
                  <span
                    class="text-caption grey--text d-block caption"
                    style="font-weight: lighter !important"
                    >lorem ipusm</span
                  >
                </div>
                <div>
                  <span style="font-size: 14px !important">AED 0</span>
                </div>
              </div>

              <v-spacer></v-spacer>
              <div class="my-5 py-5 d-flex justify-space-between">
                <span
                  class="blue--text"
                  style="font-size: 12px !important; color: #4993fd !important"
                  >Connect Accounts</span
                >
                <v-btn
                  small
                  flat
                  style="
                    background: #f2f2f2 !important;
                    box-shadow: none !important;
                    color: #0a2c4f !important;
                    font-size: 12px !important;
                    padding: 15px 15px !important;
                    border-radius: 6px !important; ;
                  "
                  >Go to register</v-btn
                >
              </div>
            </v-row>
          </v-card>
        </div>
      </v-col>

      <!-- Right Col -->
      <v-col cols="4">
        <!-- Right Col ROW 1 -->
        <v-row>
          <div style="width: 100% !important">
            <v-card
              class="rounded-xl letterRequests"
              style="box-shadow: 0px 24px 30px #959ea51a"
              flat
            >
              <v-card-title class="px-6 py-0 pt-3">
                <div
                  class="align-center d-flex"
                  style="
                    height: 30px !important;
                    min-width: 30px !important;
                    width: 30px !important;
                    padding-top: 30px !important;
                    padding-bottom: 30px !important;
                  "
                >
                  <v-img src="/dashboard/cards/customer-icon.svg"></v-img>
                </div>
                <span
                  class="
                    darkBlue-heading-text
                    font-weight-normal
                    subHeadingFontSize
                    pl-3
                    green--text
                  "
                >
                  Customers
                </span>

                <v-spacer></v-spacer>
                <h1
                  style="
                    font-size: 20px !important;
                    font-weight: 600 !important;
                  "
                >
                  09
                </h1>
              </v-card-title>
              <div
                style="
                  color: #f1f6fa !important;
                  border: 0.5px solid #f1f6fa !important;
                "
              ></div>

              <!-- Body -->
              <v-row class="mx-5 my-3">
                <div
                  class="btns d-flex flex-row justify-center align-center py-5"
                  style="margin: auto !important"
                >
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/invoice-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Invoices</span
                    >
                  </div>
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/receipt-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Receipts</span
                    >
                  </div>
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/estimate-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Estimate</span
                    >
                  </div>
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/delayed-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Delayed</span
                    >
                  </div>
                </div>
              </v-row>
            </v-card>
          </div>
        </v-row>
        <!-- Right Col ROW 2 -->
        <v-row class="mt-3">
          <div style="width: 100% !important">
            <v-card
              class="rounded-xl letterRequests"
              style="box-shadow: 0px 24px 30px #959ea51a"
              flat
            >
              <v-card-title class="px-6 py-0 pt-3">
                <div
                  class="align-center d-flex"
                  style="
                    height: 30px !important;
                    min-width: 30px !important;
                    width: 30px !important;
                    padding-top: 30px !important;
                    padding-bottom: 30px !important;
                  "
                >
                  <v-img src="/dashboard/cards/supplier-icon.svg"></v-img>
                </div>
                <span
                  class="
                    darkBlue-heading-text
                    font-weight-normal
                    subHeadingFontSize
                    pl-3
                    red--text
                  "
                >
                  Suppliers
                </span>

                <v-spacer></v-spacer>
                <h1
                  style="
                    font-size: 20px !important;
                    font-weight: 600 !important;
                  "
                >
                  03
                </h1>
              </v-card-title>
              <div
                style="
                  color: #f1f6fa !important;
                  border: 0.5px solid #f1f6fa !important;
                "
              ></div>

              <!-- Body -->
              <v-row class="mx-5 my-3">
                <div
                  class="btns d-flex flex-row justify-center align-center py-5"
                  style="margin: auto !important"
                >
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/cheque-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Cheques</span
                    >
                  </div>
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/expense-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        -iconcolor: #0a2c4f !important;
                      "
                      >Expenses</span
                    >
                  </div>
                  <div
                    class="
                      btn
                      d-flex
                      flex-column
                      justify-center
                      align-center
                      mr-5
                    "
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/credit-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Credit</span
                    >
                  </div>
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/bill-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Bills</span
                    >
                  </div>
                </div>
              </v-row>
            </v-card>
          </div>
        </v-row>
        <!-- Right Col ROW 3 -->
        <v-row class="mt-3">
          <div style="width: 100% !important">
            <v-card
              class="rounded-xl letterRequests"
              style="box-shadow: 0px 24px 30px #959ea51a"
              flat
            >
              <v-card-title class="px-6 py-0 pt-3">
                <div
                  class="align-center d-flex"
                  style="
                    height: 30px !important;
                    min-width: 30px !important;
                    width: 30px !important;
                    padding-top: 30px !important;
                    padding-bottom: 30px !important;
                  "
                >
                  <v-img src="/dashboard/cards/cheque-icon.svg"></v-img>
                </div>
                <span
                  class="
                    darkBlue-heading-text
                    font-weight-normal
                    subHeadingFontSize
                    pl-3
                    blue--text
                  "
                >
                  Chart Of Accounts
                </span>

                <v-spacer></v-spacer>
                <h1
                  style="
                    font-size: 20px !important;
                    font-weight: 600 !important;
                  "
                >
                  05
                </h1>
              </v-card-title>
              <div
                style="
                  color: #f1f6fa !important;
                  border: 0.5px solid #f1f6fa !important;
                "
              ></div>

              <!-- Body -->
              <v-row class="mx-5 my-3">
                <div
                  class="btns d-flex flex-row justify-center align-center py-5"
                  style="margin: auto !important"
                >
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/cheque-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Title</span
                    >
                  </div>
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/cheque-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        -iconcolor: #0a2c4f !important;
                      "
                      >Title</span
                    >
                  </div>
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/cheque-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Title</span
                    >
                  </div>
                  <div
                    class="btn d-flex flex-column justify-center align-center"
                  >
                    <v-img
                      width="40"
                      src="/dashboard/cards/cheque-icon.svg"
                    ></v-img>
                    <span
                      style="
                        font-size: 14px !important;
                        color: #0a2c4f !important;
                      "
                      >Title</span
                    >
                  </div>
                </div>
              </v-row>
            </v-card>
          </div>
        </v-row>
      </v-col>
    </v-row>

    <!-- SECTION 3 -->
    <v-row>
      <v-col cols="12">
        <div style="width: 100% !important">
          <v-card
            class="rounded-xl letterRequests"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-card-title class="pr-6 py-0 pt-3">
              <div
                class="align-center d-flex"
                style="
                  height: 30px !important;
                  min-width: 30px !important;
                  width: 30px !important;
                  padding-top: 30px !important;
                  padding-bottom: 30px !important;
                "
              ></div>
              <span
                class="
                  darkBlue-heading-text
                  font-weight-normal
                  subHeadingFontSize
                  pl-0
                "
              >
                Sales Vs Expenses
              </span>
              <v-spacer></v-spacer>
              <div>
                <span class="caption">This Month</span>
                <v-icon small>mdi-menu-down</v-icon>
              </div>
            </v-card-title>
            <v-row class="mx-5 my-0">
              <v-col cols="12">
                <chartjs-line
          :height="400"
          :bind="true"
          :datasets="datasets"
          :labels="labels"
          :option="option_distribution"
        />
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'dashboard',
  layout: 'default',
  data() {
    return {
      labels: ['Jan', 'Apr', 'Jul', 'Sep', 'Dec'],
      datasets: [
        {
          label: 'Sales',
          data: ['3', '0', '3', '0', '3'],
          borderColor: '#32F446',
          backgroundColor: 'transparent'
        },
        {
          label: 'Expenses',
          data: ['0', '3', '0', '3', '0'],
          borderColor: '#FF553E',
          backgroundColor: 'transparent'
        },
        {
          label: 'Active Clients',
          data: ['1.5', '1.5', '1.5', '1.5', '1.5'],
          borderColor: '#46A2D0',
          backgroundColor: 'transparent'
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

<style>
.morning-txt {
  display: grid !important;
  grid-template-columns: 1fr;
  align-content: center;
}
.morning-txt .degree {
  /* width: 106px; */
  height: 47px;
  color: var(--text);
  text-align: left;
  font: normal normal 300 40px/47px Rubik;
  letter-spacing: 2px;
  color: #0a2c4f;
  opacity: 1;
}
.morning-txt .city {
  width: 98px;
  height: 17px;
  text-align: left;
  font: normal normal 300 14px/17px Rubik;
  letter-spacing: 0.7px;
  color: #8c9cac;
  opacity: 1;
}
.morning-txt .good-morning {
  top: 0px;
  left: 0px;
  /* width: 175px; */
  height: 28px;
  /* UI Properties */
  text-align: left;
  font: normal normal 300 24px/17px Rubik;
  letter-spacing: 1.2px;
  color: #8c9cac;
}

.morning-txt .good-morning .user {
  top: 0px;
  left: 182px;
  /* width: 95px; */
  height: 28px;
  color: var(--text);
  text-align: left;
  font: normal normal medium 24px/17px Rubik;
  letter-spacing: 1.2px;
  color: #0a2c4f;
  font-weight: 500;
}

.morning-txt .date {
  top: 174px;
  left: 421px;
  /* width: 127px; */
  height: 17px;
  text-align: left;
  font: normal normal 300 14px/17px Rubik;
  letter-spacing: 0.7px;
  color: #8c9cac;
  opacity: 1;
}
</style>