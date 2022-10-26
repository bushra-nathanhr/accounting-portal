<template>
  <div class="shortcuts__container">
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

      <!-- Short Cuts Buttons -->
      <v-row class="shortcuts_btns ma-5 px-5">
        <v-btn
        class="shortcuts__btn"
          x-large
          block
        >
          Customer
          <v-spacer></v-spacer>
          <div class="arrow_icon__container" style="width: 12px !important">
            <v-img
              src="/dashboard/arrow-right-btn.svg" class="arrow_icon"
            ></v-img>
          </div>
        </v-btn>
      </v-row>
      <v-row class="ma-5 px-5">
        <v-btn
          x-large
          block
          class="shortcuts__btn"
        >
          invoices
          <v-spacer></v-spacer>
          <div class="arrow_icon__container" style="width: 12px !important">
            <v-img
              src="/dashboard/arrow-right-btn.svg" class="arrow_icon"
            ></v-img>
          </div>
        </v-btn>
      </v-row>
      <v-row class="ma-5 px-5">
        <v-btn
          x-large
          block
          class="shortcuts__btn"
        >
          estimates
          <v-spacer></v-spacer>
          <div class="arrow_icon__container" style="width: 12px !important">
            <v-img
              src="/dashboard/arrow-right-btn.svg" class="arrow_icon"
            ></v-img>
          </div>
        </v-btn>
      </v-row>
      <v-row class="ma-5 px-5">
        <v-btn
          x-large
          block
          class="shortcuts__btn"
        >
          Payments
          <v-spacer></v-spacer>
          <div class="arrow_icon__container" style="width: 12px !important">
            <v-img
              src="/dashboard/arrow-right-btn.svg"
              class="arrow_icon"
            ></v-img>
          </div>
        </v-btn>
      </v-row>
      <v-row class="ma-5 px-5 pb-5">
        <v-btn
          x-large
          block
          class="shortcuts__btn"
        >
          Cheques
          <v-spacer></v-spacer>
          <div class="arrow_icon__container" style="width: 12px !important">
            <v-img
              src="/dashboard/arrow-right-btn.svg"
              class="arrow_icon"
            ></v-img>
          </div>
        </v-btn>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import '@/assets/scss/Dashboard/_shortcuts.scss'
export default {

}
</script>
