<template>
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
</template>

<script>
import '@/assets/scss/_salesvsexpenses.scss'
export default {}
</script>
