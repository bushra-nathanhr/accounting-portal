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
                <v-row class="my-list mb-3" v-for="data in users" :key="data.id">
                    <v-col cols="3" class="name">{{ data.name }}</v-col>
                    <v-col cols="1" class="img"><v-img class="img" :src='data.img'></v-img></v-col>
                    <v-col cols="2" class="amount mr-5">{{ data.amount }}</v-col>
                    <v-col cols="2" class="date  mr-5">{{ data.date }}</v-col>
                    <v-col cols="2" class="status mr-5">{{ data.status }}</v-col>
                    <v-col cols="1" class="action"><v-icon>mdi-dots-vertical</v-icon></v-col>
                </v-row>
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
      users: [
        {
          id: 1,
          name: 'Basil Faheem', 
          img: 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/avatar/Basil_Faheem/avatar.jpg',
          amount: 'AED 350.00',
          date: '22 May 2022',
          status: 'Paid'
        },
        {
          id: 2,
          name: 'Basil Faheem', 
          img: 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/avatar/Basil_Faheem/avatar.jpg',
          amount: 'AED 350.00',
          date: '22 May 2022',
          status: 'Paid'
        },
        {
          id: 3,
          name: 'Basil Faheem', 
          img: 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/avatar/Basil_Faheem/avatar.jpg',
          amount: 'AED 350.00',
          date: '22 May 2022',
          status: 'Paid'
        },
        {
          id: 4,
          name: 'Basil Faheem', 
          img: 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/avatar/Basil_Faheem/avatar.jpg',
          amount: 'AED 350.00',
          date: '22 May 2022',
          status: 'Paid'
        },
        {
          id: 5,
          name: 'Basil Faheem', 
          img: 'https://nathanhrerp.s3.eu-central-1.amazonaws.com/avatar/Basil_Faheem/avatar.jpg',
          amount: 'AED 350.00',
          date: '22 May 2022',
          status: 'Paid'
        },
      ]
    }
  }
}
</script>

<style>
.my-list {
  width: 100%;
}
.my-list .name {
  border-left: 4px solid red;
  background: rgb(236, 236, 236);
}
.my-list .img{
  background: rgb(226, 44, 44);
  padding: 10px;
  clip-path: circle();
  width: 50px !important;
  height: 50px !important;
  align-content: center;
  align-items: center;
  justify-content: center;
  display: flex;
}
.my-list .amount{
  background: rgb(236, 236, 236);
}
.my-list .date{
  background: rgb(236, 236, 236);
}
.my-list .status{
  background: rgb(0, 155, 0);
  color: #fff;
}
</style>
   