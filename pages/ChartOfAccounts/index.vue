<template>
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
        >Chart of Accounts</span
      >
    </v-card-title>
    <v-spacer></v-spacer>

    <v-row class="mx-5 my-3">
      <v-col cols="9">
        <v-row>
          <v-col cols="auto">
            <v-icon>mdi-arrow-down-left</v-icon>
              <v-btn
                rounded
                small
                color="primary"
                dark
                class="font-weight-light"
              >
                <v-icon small class="mr-3">mdi-bookmark-multiple</v-icon>
                Batch Actions
                <v-icon small class="ms-3">mdi-triangle-small-down</v-icon>
              </v-btn>
          </v-col>
          <v-col cols="auto" class="light-grey--text"><v-icon class="mx-3">mdi-magnify</v-icon>Search</v-col>
        </v-row>
      </v-col>

      <v-col cols="3">
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="auto"><v-btn fab small dark color="primary"><v-icon small>mdi-printer-outline</v-icon></v-btn></v-col>
          <v-col cols="auto"><v-btn fab small dark color="primary"><v-icon small>mdi-pencil-outline</v-icon></v-btn></v-col>
          <v-col cols="auto"><v-btn fab small dark color="primary"><v-icon small>mdi-cog-outline</v-icon></v-btn></v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--     
    <v-row class="ms-5 ps-5 mt-5 mb-2" justify="space-between">
      <div>
        <v-btn rounded small color="primary"  dark class="font-weight-light">
          <v-icon small class="mr-3">mdi-bookmark-multiple</v-icon>
          Batch Actions
          <v-icon small class="ms-3">mdi-triangle-small-down</v-icon>
        </v-btn>
        <div class="search d-inline ms-5 pa-2">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
            <span class="ps-5 grey--text">search</span>
          </v-btn>
        </div>
      </div>

      <div class="me-5 pe-5 font-weight-light" small>
        <v-btn fab dark small flat color="primary" class="ms-2 mb-2">
          <v-icon dark small class="font-weight-light">
            mdi-printer-outline
          </v-icon>
        </v-btn>
        <v-btn fab dark small flat color="primary" class="ms-2 mb-2">
          <v-icon dark small class="font-weight-light">
            mdi-pencil-outline
          </v-icon>
        </v-btn>
        <v-btn fab dark small flat color="primary" class="ms-2 mb-2">
          <v-icon dark small flat class="font-weight-light">
            mdi-cog-outline</v-icon
          >
        </v-btn>
      </div>
    </v-row> -->

    <v-spacer></v-spacer>
    <v-data-table
      dense
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-key="name"
      show-select
      class="elevation-1 c"
    >
    </v-data-table>
  </v-card>
</template>

  <script>
export default {
  name: 'coa',
  layout: 'defualt',
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Customer Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'NUMBER', value: 'calories' },
        { text: 'NAME', value: 'fat' },
        { text: 'TYPE', value: 'carbs' },
        { text: 'DETAIL TYPE', value: 'protein' },
        { text: 'TAX RATE', value: 'iron' },
        { text: 'QUICKBOOKS BALANCE', value: 'iron' },
        { text: 'BANK BALANCE', value: 'iron' },
        { text: 'ACTION', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  },
}
</script>

  <style>
.c td {
  border-right: thin solid rgba(0, 0, 0, 0.12) !important;
  color: #8c8f93 !important;
  padding: 1px auto !important;
  margin: 0px auto !important;
  font-size: 10px !important;
  height: 40px !important;
}
.c th {
  border-right: thin solid rgba(0, 0, 0, 0.12);
  color: rgb(0, 0, 70) !important;
  font-size: 14px !important;
  font-weight: bold !important;
}
.search {
  color: #d3d3d3 !important;
  font-size: x-small !important;
  /* margin-left: 20px !important; */
  /* border: 1.5px solid #d3d3d3 !important; */
  /* border-radius: 30px !important; */
  width: 100px !important;
}
</style>