<template>
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
</template>

<script>
import '@/assets/scss/Dashboard/_quickaccesscard.scss'
export default {

}
</script>

<style>

</style>