<template>
  <v-container>


    <div class="px-5">
        <v-row class=" mr-5 pl-lg-5 pl-1" height="auto" style="overflow:hidden;height: 100px;z-index:200;background-color:#f4f7f7;width: 100%;"  >
			<v-col cols="12" sm="12" md="8">
				<span v-if="firstLoad == true" class="d-flex" >
					<v-skeleton-loader   v-for="(data,index) in cards" :key="index" class="spotlightSwiperSkeleton mb-5 ml-5" :loading="loading" type="button" > </v-skeleton-loader>
				</span>
				<swiper :options="swiperOptions" v-else  class="mx-0 swiperOverflow custom" style="overflow:unset;max-width:1200px" >
					<div v-for="(data,index) in computedCards" :key="index" class="swiper-slide swiperCustom" style="min-width:180px;max-width:180px;max-height:110px" >
						<v-card min-height="80" min-width="180" max-width="180" class="mr-5 borderRadiusTabs" :style="selectedCard == data.id ?'background:transparent linear-gradient(295deg, #6488EE 0%, #0918F7 100%) 0% 0% no-repeat padding-box;':'' " style="box-shadow: rgb(149 158 164 / 10%) 5px 12px 20px;;overflow: hidden;" @click="selectCard(data.id)" :href="data.id">
							<v-row style="height:100%" width="100%" align="center" justify="center" class="">
								<v-col cols="2" class=" pr-0 text-right" >
									<img :src="selectedCard == data.id ? data.icon2 : data.icon" alt="" class=" mt-2">
								</v-col>
								<v-col cols="7" :class="selectedCard == data.id ?'white--text':'' " class="my-auto " style="line-height: 1;font-weight:600">
									{{data.name}}
								</v-col>
							</v-row>
						</v-card>
					</div>
				</swiper>
			</v-col>
		</v-row>
    </div>
    
    
    
    
    <div class="pt-3">
      <v-row class="pt-0 ml-0 pr-5">
        <!-- list -->
        <v-col cols="12" md="6" class="pa-0 pr-5">
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
                >Favourites</span
              >
            </v-card-title>
            <v-divider></v-divider>
            <v-row class="ma-5 pa-5">
              <v-btn block color="primary" class="mt-5" outlined x-large>
                <v-icon>mdi-book-account-outline</v-icon> Balance Sheet
                <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star-outline</v-icon
                ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
              >
              <v-btn block color="primary" class="mt-5" outlined x-large>
                <v-icon>mdi-book-account-outline</v-icon> Profits & Loss
                <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star-outline</v-icon
                ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
              >
              <v-btn block color="primary" class="mt-5" outlined x-large>
                <v-icon>mdi-book-account-outline</v-icon> Trial Balance
                <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star-outline</v-icon
                ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
              >
              <v-btn block color="primary" class="mt-5" outlined x-large>
                <v-icon>mdi-book-account-outline</v-icon> Summary Report
                <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star-outline</v-icon
                ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
              >
              <v-btn block color="primary" class="mt-5" outlined x-large>
                <v-icon>mdi-book-account-outline</v-icon> Help
                <v-spacer></v-spacer>
                <v-icon color="secondary">mdi-star-outline</v-icon
                ><v-icon color="secondary">mdi-dots-vertical</v-icon></v-btn
              >
            </v-row>
          </v-card>
        </v-col>

        <!-- img -->
        <v-col cols="12" md="6" class="pa-0 pr-5">
          <v-card
            class="rounded-xl letterRequests"
            style="box-shadow: 0px 24px 30px #959ea51a"
            flat
          >
            <v-row>
              <v-img
                src="~/static/svgs/reports/guidline.svg"
                width="300"
                height="900"
              ></v-img>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'reports',
  layout: 'defualt',
  data() {
    return {
        cards:[
			{"name" : "My Tasks","id" : "#tasks","color" : "brown","icon" : "/svgs/icon.svg","icon2" : "/svgs/icon.svg","href" : "#mywork"}, 
			{"name" : "My Projects","id" : "#projects","color" : "primary","icon" : "/svgs/icon.svg","icon2" : "/svgs/icon.svg","href" : "#mywork"},
			{"name" : "My Team","id" : "#myteam","color" : "primary","icon" : "/svgs/icon.svg","icon2" : "/svgs/icon.svg","href" : "#mywork"}, 
		]
    }
  },
  methods: {
    selectCard(id){
			this.selectedCard = id
			// this.getTeamTaskList()
			if(id=="#myteam"){
				this.selectedFilterUser = this.computedRequestUsers[0]
				this.getTeamTaskList()
			}
		},
  },
  computed:
  {
    computedCards(){
			if(this.isManagerRole == 'true' || this.isAdminRole == 'true'){
				return this.cards
			}else{
				return this.cards.filter(a => a.id != '#myteam')
			}
		},
  }
}
</script>

<style>
.custom .swiper.mx-0.swiperOverflow {
    overflow: unset !important;
    max-width: 1200px !important;
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    align-items: center !important;
}
.custom .swiper-slide.swiperCustom {
    margin-right: 20px !important;
}
    .swiperCustom{
        max-height: fit-content;
    }
    @media screen and (max-width:900px) {
    .swiperOverflow{
        overflow: hidden !important;
    }
    
}
.spotlightSwiperSkeleton .v-skeleton-loader__button{
  width: 200px;
  height: 75px;
}
</style>