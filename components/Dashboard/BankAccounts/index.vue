<template>
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
</template>

<script>
import '@/assets/scss/Dashboard/_bankaccounts.scss'
export default {

}
</script>

<style>

</style>