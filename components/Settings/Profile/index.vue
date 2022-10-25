<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>

          <!-- PROFILE ACTIONS -->

          <v-col cols="12" class="st__top_part_wrap">
            <div class="st__top_part">
              <h4>Personal Information</h4>
              <p>Update your photo and personal details here.</p>
            </div>
            <v-btn v-if="readOnly" color="accent" class="st__action_btn" elevation="0" @click.stop="editDialog = true">
              Edit Details
            </v-btn>
            <template v-else>
              <div class="st_action_btn_wrap">
                <v-btn color="text" text class="st__action_btn" elevation="0" @click.stop="cancelDialog = true">
                  Cancel
                </v-btn>
                <v-btn color="accent" class="st__action_btn" elevation="0" @click.stop="saveDialog = true">Save
                </v-btn>
              </div>
            </template>

          </v-col>

          <!--BASIC DETAILS-->

          <v-col cols="12" lg="8">
            <div class="st__input_grid">
              <CustomInputContainer label="first name">
                <div slot="input">
                  <!-- <v-text-field label="" @input="(e)=>changeStateValues(e)" hide-details :readonly="readOnly"></v-text-field> -->
                  <v-text-field v-model="first_name" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="last name">
                <div slot="input">
                  <v-text-field v-model="last_name" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Email Address">
                <div slot="input">
                  <v-text-field v-model="email" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Phone Number">
                <div slot="input">
                  <v-text-field v-model="phone" label="" hide-details :readonly="readOnly"></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Country of Origin">
                <div slot="input">
                  <v-select v-model="country" :readonly="readOnly" :items="countryOrigin" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Nationality">
                <div slot="input">
                  <v-select v-model="nationality" :readonly="readOnly" :items="nationalities" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Birth Date">
                <div slot="input">
                  <v-menu v-model="birthDatedialog" :close-on-content-click="false" max-width="290">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field v-model="birth_date" readonly :value="computedDateFormattedMomentjs" clearable
                        label="" v-bind="attrs" v-on="on" @click:clear="birth_date = null" hide-details></v-text-field>
                    </template>
                    <v-date-picker :readonly="readOnly" v-model="birth_date" @change="menu1 = false"></v-date-picker>
                  </v-menu>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Marital Status">
                <div slot="input">
                  <v-select v-model="marital_status" :readonly="readOnly" :items="marital" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Father's Name">
                <div slot="input">
                  <v-text-field v-model="father_name" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Mother's Name">
                <div slot="input">
                  <v-text-field v-model="mother_name" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
            </div>
          </v-col>

          <!--AVATAR CARD-->
          <v-col cols="12" lg="4" class="prf__profile_card_col">
            <v-card class="prf__profile_card">
              <div class="prf__profile_card_container">

                <div class="prf__profile_avatar_wrap">
                  <v-avatar size="150" color="accent">
                    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="profile" />
                  </v-avatar>
                  <div class="st__delete_wrap" @click.prevent="deleteDialog = true">
                    <v-icon class="prf__profile_avatar_delete" color="#000">fa-trash</v-icon>
                  </div>
                </div>
                <h3 class="prf__pc_title">Smith Akins</h3>
                <p class="prf__pc_designation">UI/UX Designer</p>
                <div class="prf__pc_divider" />
                <p class="prf__pc_email">smithakins@gmail.com</p>
                <p class="prf__pc_phone">
                  <v-icon>fa-phone</v-icon> <span>+971529548452</span>
                </p>
                <p class="prf__pc_location">
                  <v-icon>fa-location</v-icon> <span>Bur Dubai</span>
                </p>
              </div>
            </v-card>
          </v-col>

          <!--LOCATION-->
          <v-col cols="12">
            <div class="st__top_part mb-2rem">
              <h4>Location</h4>
              <p>Update your location and current address here.</p>
            </div>
            <div class="st__input_flex">
              <CustomInputContainer label="Area">
                <div slot="input">
                  <v-text-field v-model="area" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Building Name/Villa Name">
                <div slot="input">
                  <v-text-field v-model="building_name" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Unit No./Villa No.">
                <div slot="input">
                  <v-text-field v-model="villa_no" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="P.O Box">
                <div slot="input">
                  <v-text-field v-model="po_box" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Emirate">
                <div slot="input">
                  <v-select v-model="emirate" :readonly="readOnly" :items="emirates" hide-details=""
                    append-icon="fa-chevron-down">
                  </v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="City">
                <div slot="input">
                  <v-text-field v-model="city" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
            </div>
          </v-col>

          <!--EMERGENCY CONTACT-->
          <v-col cols="12">
            <div class="st__top_part mb-2rem">
              <h4>Emergency Contact</h4>
              <p>Update your emergency contact information here.</p>
            </div>
            <div class="st__input_flex">
              <CustomInputContainer label="Full Name">
                <div slot="input">
                  <v-text-field v-model="emergency_name" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Relationship">
                <div slot="input">
                  <v-select v-model="emergency_relation" :readonly="readOnly" :items="relationshipNominee"
                    hide-details="" append-icon="fa-chevron-down"></v-select>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Email Address">
                <div slot="input">
                  <v-text-field v-model="emergency_email" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Phone Number">
                <div slot="input">
                  <v-text-field v-model="emergency_phone" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Address">
                <div slot="input">
                  <v-text-field v-model="emergency_address" :readonly="readOnly" label="" hide-details></v-text-field>
                </div>
              </CustomInputContainer>
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
import '@/assets/scss/Settings/_profile.scss'
import '@/assets/scss/Settings/_settings.scss'
import CustomInputContainer from '../../utils/CustomInputContainer.vue'
export default {
  name: "ProfileComponent",
  components: { CustomInputContainer },
  data() {
    return {
      countryOrigin: ['Australia', 'United Arab Emirates', 'India'],
      nationalities: ['Indian', 'Asian', 'American'],
      marital: ['Single', 'Married', 'Widowed'],
      emirates: ['Abu Dhabi', 'Dubai'],
      relationshipNominee: ['Spouse', 'Father', 'Mother', 'Friend'],
      birthDatedialog: false,
      editDialog: false,
      saveDialog: false,
      deleteDialog: false,
      cancelDialog: false,

      //input values
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      country: '',
      nationality: '',
      birth_date: '',
      marital_status: '',
      father_name: '',
      mother_name: '',
      area: '',
      building_name: '',
      villa_no: '',
      po_box: '',
      emirate: '',
      city: '',
      emergency_name: '',
      emergency_relation: '',
      emergency_email: '',
      emergency_phone: '',
      emergency_address: ''
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      //use global date here
      return this.birth_date ? this.$moment(this.birth_date).format('MMM DD, YYYY') : ''
    },
    readOnly() {
      return this.$store.getters['profile/getReadOnly']
    },
    getValues() {
      return this.$store.getters['profile/getStateValues']
    }
  },

  mounted() {
    // console.log('map state',mapState(['profile/readOnly']))
    this.mapGlobalStateToLocal()
  },
  methods: {
    mapGlobalStateToLocal() {
      this.first_name = this.getValues.first_name,
        this.last_name = this.getValues.last_name,
        this.email = this.getValues.email,
        this.phone = this.getValues.phone,
        this.country = this.getValues.country,
        this.nationality = this.getValues.nationality,
        this.birth_date = this.getValues.birth_date,
        this.marital_status = this.getValues.marital_status,
        this.father_name = this.getValues.father_name,
        this.mother_name = this.getValues.mother_name,
        this.area = this.getValues.area,
        this.building_name = this.getValues.building_name,
        this.villa_no = this.getValues.villa_no,
        this.po_box = this.getValues.po_box,
        this.emirate = this.getValues.emirate,
        this.city = this.getValues.city,
        this.emergency_name = this.getValues.emergency_name,
        this.emergency_relation = this.getValues.emergency_relation,
        this.emergency_email = this.getValues.emergency_email,
        this.emergency_phone = this.getValues.emergency_phone,
        this.emergency_address = this.getValues.emergency_address
    },
    handleEdit() {
      this.$store.dispatch('profile/changeReadOnly', false)
      this.editDialog = false
      // this.readOnly = false
    },
    handleSave() {
      //write post api dispatch here and change global state values
      this.$store.dispatch('profile/changeReadOnly', true)
      this.saveDialog = false

      // this.readOnly = true
    },
    handleCancel() {
      this.$store.dispatch('profile/changeReadOnly', true)
      this.cancelDialog = false
    },
    handleDelete() {
      this.deleteDialog = false
    },
    changeStateValues(event) {
      console.log('event', event)
    }
  },
}
</script>

<style>

</style>