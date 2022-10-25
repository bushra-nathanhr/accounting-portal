<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>

          <!-- FREELANCE ACTIONS -->

          <v-col cols="12" class="st__top_part_wrap">
            <div class="st__top_part">
              <h4>Basic Information</h4>
              <p>Update your brand logo and required freelancing information here.</p>
            </div>
            <v-btn v-if="readOnly" color="accent" class="st__action_btn" elevation="0" @click.stop="editDialog = true">
              Edit Details
            </v-btn>
            <template v-else>
              <div class="st_action_btn_wrap">
                <v-btn color="accent" text class="st__action_btn" elevation="0" @click.stop="cancelDialog = true">
                  Cancel
                </v-btn>
                <v-btn color="accent" class="st__action_btn" elevation="0" @click.stop="saveDialog = true">Save
                </v-btn>
              </div>
            </template>
          </v-col>

          <!-- COL SPLIT 8 == 4 -->

          <v-col cols="12" lg="8">

            <!--BASIC DETAILS-->

            <div class="st__input_grid">
              <CustomInputContainer label="Designation">
                <div slot="input">
                  <v-text-field v-model="designation" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Salary">
                <div slot="input">
                  <v-text-field v-model="salary" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Work Email Address">
                <div slot="input">
                  <v-text-field v-model="email" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Work Phone Number">
                <div slot="input">
                  <v-text-field v-model="phone" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Freelancer Type">
                <div slot="input">
                  <v-text-field v-model="type" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Package Type">
                <div slot="input">
                  <v-text-field v-model="package_type" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Current Status">
                <div slot="input">
                  <v-text-field v-model="status" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Joining Date">
                <div slot="input">
                  <v-text-field v-model="join_date" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
            </div>

            <!-- VISA INFORMATION -->

            <div class="st__top_part frl_m2">
              <h4>Current Visa Information</h4>
              <p>You can view your current visa information here.</p>
            </div>
            <div class="st__maingrid_2">
              <div class="st__grid_2">
                <CustomLabelBoolean label="Are you currently sponsoring family members?"
                  :boolean="is_sponsering_family" />
                <CustomLabelBoolean label="Do you need to sponser your parents?" :boolean="is_sponsering_parents" />
              </div>
              <div class="st__grid_2">
                <div class="st__subgrid_2">
                  <CustomInputContainer label="Start Date">
                    <div slot="input">
                      <v-text-field v-model="start_date" label="" hide-details readonly></v-text-field>
                    </div>
                  </CustomInputContainer>
                  <CustomInputContainer label="Renewal Date">
                    <div slot="input">
                      <v-text-field v-model="renewal_date" label="" hide-details readonly></v-text-field>
                    </div>
                  </CustomInputContainer>
                </div>
                <div class="st__subgrid_2">
                  <CustomInputContainer label="Start Date">
                    <div slot="input">
                      <v-text-field v-model="visa_expiry" label="" hide-details readonly></v-text-field>
                    </div>
                  </CustomInputContainer>
                  <CustomInputContainer label="Renewal Date">
                    <div slot="input">
                      <v-text-field v-model="visa_type" label="" hide-details readonly></v-text-field>
                    </div>
                  </CustomInputContainer>
                </div>
              </div>
            </div>

            <!--ACTIVITY AND SKILLS-->
            <div class="st__top_part frl_m2">
              <h4>Activity and Skills</h4>
              <p>Set your activity and select your 3 best skills here.</p>
            </div>
            <div class="st__maingrid_2">
              <CustomInputContainer label="Activity">
                <div slot="input">
                  <v-select v-model="activity_selected" :readonly="readOnly" :items="activities" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Categories">
                <div slot="input">
                  <v-select v-model="category" :readonly="readOnly" :items="categories" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
            </div>
          </v-col>
          <v-col cols="12" lg="4">
            <div class="st__top_part frl_mb2">
              <h4>Your Brand Logo</h4>
            </div>
            <div class="st__maingrid_2">
              <div class="st__brand_container" v-for="(items,index) in brand_logos" :key="index"
                :class="{st__brand_active:index===current_brand_logo,st__pointer:!readOnly}"
                @click.prevent="!readOnly && changeBrandLogo(index)">
                <v-img src="https://picsum.photos/200/300" class="st__brand_img" />
                <div v-if="!readOnly" class="st__delete_wrap frl__delete" @click.prevent="deleteDialog = true;deleteBrandIndex = index">
                  <v-icon class="st__profile_avatar_delete" color="#000">fa-trash</v-icon>
                </div>
                <div v-if="!readOnly" class="st__brand_checkbox frl__brand_checkbox">
                  <v-icon v-if="index===current_brand_logo" color="accent">fa-regular fa-circle-check</v-icon>
                  <v-icon v-else color="accent">fa-regular fa-circle</v-icon>
                </div>
              </div>
            </div>
            <div class="frl_m2" v-if="!readOnly">
              <FileDropzone />
            </div>
          </v-col>
          <!--EXPERTISE-->
          <v-col cols="12">
            <div class="st__top_part frl_m2">
              <p>What are your areas of expertise?</p>
            </div>
            <div class="st__mainflex">
              <CustomInputContainer label="Skills" v-if="!readOnly">
                <div slot="input">
                  <v-text-field v-model="typed_skill" label="" hide-details>
                    <template v-slot:append>
                      <v-btn icon @click.prevent="addTag">
                        <v-icon>fa-regular fa-circle-check</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>
                </div>
              </CustomInputContainer>
              <div class="st__tag_clearable_wrap">
                <v-chip large class="st__tag_clearable" :color="randomizeTagColor" v-for="(tag,index) in skills"
                  :key="index">
                  <span>{{tag}}</span>
                  <v-icon v-if="!readOnly" @click.prevent="deleteTag(index)">fa-close</v-icon>
                </v-chip>
                <template v-if="readOnly && !skills.length">
                  <p class="st__info">
                    <v-icon>fa-regular fa-face-meh</v-icon> &nbsp; Not added.
                  </p>
                </template>
              </div>
            </div>
          </v-col>
        </v-row>


        <!--EDIT DIALOG-->
        <v-dialog v-model="editDialog" max-width="350">
          <v-card class="pa-2">
            <v-card-title class="st__dialog_text">
              You want to edit details?
            </v-card-title>
            <v-card-text class="st__dialog_subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, provident?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="text" class="st__action_btn px-4" text @click="editDialog = false">
                Cancel
              </v-btn>

              <v-btn color="accent" class="st__action_btn px-4" elevation="0" @click="handleEdit">
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--SAVE DIALOG-->
        <v-dialog v-model="saveDialog" max-width="370">
          <v-card class="pa-2">
            <v-card-title class="st__dialog_text">
              You want to save your changes?
            </v-card-title>
            <v-card-text class="st__dialog_subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, provident?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="text" class="st__action_btn px-4" text @click="saveDialog = false">
                Cancel
              </v-btn>

              <v-btn color="accent" class="st__action_btn px-4" elevation="0" @click="handleSave">
                Confirm
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--DELETE DIALOG-->
        <v-dialog v-model="deleteDialog" max-width="370">
          <v-card class="pa-2">
            <v-card-title class="st__dialog_text">
              Remove Profile picture?
            </v-card-title>
            <v-card-text class="st__dialog_subtext">
              Once it is removed, there is no going back.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="text" class="st__action_btn px-4" text @click="deleteDialog = false">
                Cancel
              </v-btn>

              <v-btn color="red" class="st__action_btn color_white px-4" elevation="0" @click="handleDelete">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!--CANCEL DIALOG-->
        <v-dialog v-model="cancelDialog" max-width="390">
          <v-card class="pa-2">
            <v-card-title class="st__dialog_text">
              You want to cancel your changes?
            </v-card-title>
            <v-card-text class="st__dialog_subtext">
              Once it is cancelled, there is no going back.
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn color="text" class="st__action_btn px-4" text @click="cancelDialog = false">
                Discard
              </v-btn>

              <v-btn color="primary" class="st__action_btn color_white px-4" elevation="0" @click="handleCancel">
                Submit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import '@/assets/scss/Settings/_freelance.scss'
import '@/assets/scss/Settings/_settings.scss'
import CustomInputContainer from '~/components/utils/CustomInputContainer.vue';
import CustomLabelBoolean from '~/components/utils/CustomLabelBoolean.vue';
import FileDropzone from '../../utils/FileDropzone.vue';
export default {
  computed: {
    readOnly() {
      return this.$store.getters["freelance/getReadOnly"];
    },
    getValues() {
      return this.$store.getters['freelance/getStateValues']
    },
    randomizeTagColor() {
      var bgColor = ['bg_dashboard', 'btn_1', 'btn_2', 'btn_3']
      var item = bgColor[Math.floor(Math.random() * bgColor.length)];
      return item
    }
  },
  data() {
    return {
      activities: ['Development', 'Marketing'],
      categories: ['Specialized Marketing', 'Sales Person'],
      editDialog: false,
      saveDialog: false,
      deleteDialog: false,
      cancelDialog: false,

      //input values
      designation: '',
      salary: '',
      email: '',
      phone: '',
      type: '',
      package_type: '',
      status: '',
      join_date: '',
      is_sponsering_family: false,
      start_date: '',
      renewal_date: '',
      is_sponsering_parents: false,
      visa_expiry: '',
      visa_type: '',
      activity_selected: '',
      category: '',
      typed_skill: '',
      skills: ['User Persona', 'Mobile Application'],
      brand_logos: [1, 2, 3],
      deleteBrandIndex:null,
      current_brand_logo: 1,
    };
  },
  components: { CustomInputContainer, CustomLabelBoolean, FileDropzone },
  mounted() {
    this.mapGlobalStateToLocal()
  },

  methods: {
    mapGlobalStateToLocal() {
      this.designation = this.getValues.designation
      this.salary = this.getValues.salary
      this.email = this.getValues.email
      this.phone = this.getValues.phone
      this.type = this.getValues.type
      this.package_type = this.getValues.package_type
      this.status = this.getValues.status
      this.join_date = this.getValues.join_date
      this.is_sponsering_family = this.getValues.is_sponsering_family
      this.start_date = this.getValues.start_date
      this.renewal_date = this.getValues.renewal_date
      this.is_sponsering_parents = this.getValues.is_sponsering_parents
      this.visa_expiry = this.getValues.visa_expiry
      this.visa_type = this.getValues.visa_type
      this.activity_selected = this.getValues.activity_selected
      this.category = this.getValues.category
      this.typed_skill = this.getValues.typed_skill
    },
    changeBrandLogo(index) {
      this.current_brand_logo = index
    },
    deleteTag(index) {
      this.skills = this.skills.filter((item, i) => i !== index)
    },
    addTag() {
      if (this.typed_skill == '') {
        return
      }
      if (this.skills.length === 3) {
        return
      }
      else {
        this.skills = [...this.skills, this.typed_skill]
        this.typed_skill = ''
      }
    },
    handleEdit() {
      this.$store.dispatch('freelance/changeReadOnly', false)
      this.editDialog = false
      // this.readOnly = false
    },
    handleSave() {
      //write post api dispatch here and change global state values
      this.$store.dispatch('freelance/changeReadOnly', true)
      this.saveDialog = false

      // this.readOnly = true
    },
    handleCancel() {
      this.$store.dispatch('freelance/changeReadOnly', true)
      this.cancelDialog = false
    },
    handleDelete() {
      this.deleteDialog = false
      this.brand_logos = this.brand_logos.filter((item,index) => index !== this.deleteBrandIndex )
    },

  },
}
</script>

<style>

</style>