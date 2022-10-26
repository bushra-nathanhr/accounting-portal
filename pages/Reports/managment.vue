<template>
  <v-container>
    <div class="pt-3">
      <v-row class="pt-0 ml-0 pr-5">
        <v-col cols="12" md="12">
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
                >Managment</span
              >
            </v-card-title>
            <v-divider></v-divider>

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr class="py-5" style="background: #F2F2F2 !important; padding: 50px 0 !important;">
                    <th class="text-left">NAME</th>
                    <th class="text-center">CREATED BY</th>
                    <th class="text-center">LAST MODIFIED</th>
                    <th class="text-center">REPORT PERIOD</th>
                    <th class="text-center">ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td class="text-center">{{ item.created }}</td>
                    <td class="text-center">{{ item.modified }}</td>
                    <td class="text-center justify-center">
                      <v-select
                        :items="item.period"
                        label="This Year"
                        solo
                        style="width:70% !important;"
                        class="text-center"
                      ></v-select>
                    </td>
                    <td class="text-center">{{ item.action }} <v-icon color="primary" >mdi-arrow-down-bold-circle-outline</v-icon></td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'managment',
  layout: 'defualt',
  data() {
    return {
      desserts: [
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        {
          name: 'Company X Overview',
          created: '21 Jan 2022',
          modified: '3 May 2022',
          period: ['2022', '2021', '2020', '2019', '2018'],
          action: 'View',
        },
        
      ],
    }
  },
}
</script>

<style>
.letterRequests .v-text-field__details {
  display: none;
}
</style>
