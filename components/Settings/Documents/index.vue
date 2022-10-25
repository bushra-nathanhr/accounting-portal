<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <!--DOCUMENT DETAILS-->
          <v-col cols="12" class="st__top_part_wrap">
            <div class="st__top_part">
              <h4>Documents Quicklist</h4>
              <p>Upload and view the list of documents required to complete your application process.</p>
            </div>
          </v-col>

          <!--DOCUMENT GRID-->
          <v-col cols="12">
            <div class="st__input_grid st__input_grid_xl">
              <div class="st__file_container" v-for="(item,index) in documents" :key="index">
                <div class="st__file_subContainer" :class="{st__blur_items:!item.uploaded}">
                  <div class="st__file_wrap st__file_blur">
                    <v-icon class="st__file_icon"  :color="item.uploaded?'accent':'text'">fa-regular fa-file-pdf</v-icon>
                  </div>
                  <h5 class="st__file_blur">{{item.title}}</h5>
                  <div class="st__file_upload_wrap" v-if="!item.uploaded"><v-icon>fa-solid fa-arrow-up-from-bracket</v-icon>Upload</div>
                </div>
                
                <v-btn flat v-if="item.uploaded" icon color="text" class="st__file_btn_action_dot">
                  <v-icon>fa-light fa-ellipsis-vertical</v-icon>
                </v-btn>
                <p class="st__file_upload_text" v-if="item.uploaded">Uploaded on {{item.date}}</p>
                <p class="st__file_upload_text" v-else><span>Upload Pending</span></p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import '@/assets/scss/Settings/_settings.scss'
export default {
  data() {
    return {
      documents:[
        {
          file:'',
          key:1,
          title:"MOL Contract",
          uploaded:false,
          date:'25 March'
        },
        {
          file:'',
          key:2,
          title:"Labor Card",
          uploaded:true,
          date:'25 March'
        },
        {
          file:'',
          key:3,
          title:"Insurance",
          uploaded:false,
          date:'25 March'
        },
      ]
    }
  },
}
</script>

<style>

</style>