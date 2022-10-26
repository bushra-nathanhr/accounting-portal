<template>
          <div class="active_clients__container">
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
</template>

<script>
import '@/assets/scss/_activeclients.scss'
export default {

}
</script>

<style>

</style>