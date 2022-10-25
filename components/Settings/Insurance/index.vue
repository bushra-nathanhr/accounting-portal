<template>
  <v-card flat>
    <v-card-text>
      <v-container fluid>
        <v-row>

          <!--INSURANCE INFORMATIONS-->

          <v-col cols="12" class="st__top_part_wrap">
            <div class="st__top_part">
              <h4>Insurance Information</h4>
              <p>This information will help you keep track of your Insurance details.</p>
            </div>
          </v-col>

          <!--INSURANCE DETAILS-->

          <v-col cols="12" lg="8">
            <div class="st__input_grid">
              <CustomInputContainer label="Insurance Package">
                <div slot="input">
                  <v-text-field v-model="insurance_package" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Insurance Info">
                <div slot="input">
                  <v-text-field v-model="insurance_info" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Insurance Expiry">
                <div slot="input">
                  <v-text-field v-model="insurance_expiry" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
            </div>
          </v-col>

          <!--PACKAGE INFORMATION-->

          <v-col cols="12" class="st__top_part_wrap">
            <div class="st__top_part">
              <h4>Package Information</h4>
              <p>This information will help you keep track of your Package details.</p>
            </div>
          </v-col>

          <!--PACKAGE DETAILS-->

          <v-col cols="12" lg="8">
            <div class="st__input_grid">
              <CustomInputContainer label="Package Type">
                <div slot="input">
                  <v-text-field v-model="package_type" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomInputContainer label="Valid Until">
                <div slot="input">
                  <v-text-field v-model="package_expiry" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
              <CustomLabelBoolean label="Opted for VIP features?" :boolean="is_vip" />
              <CustomInputContainer label="Medical Insurance Package">
                <div slot="input">
                  <v-text-field v-model="medical_package" label="" hide-details readonly></v-text-field>
                </div>
              </CustomInputContainer>
            </div>
          </v-col>

          <v-col cols="12">
            <div class="ins__package_benefits_wrap">
              <h4>Your Package Benefits</h4>
              <ul class="ins__list_benefits_ul">
                <li class="ins__list_benefits_li" v-for="(item,index) in package_benefits" :key="index">{{item}}</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import '@/assets/scss/Settings/_settings.scss'
import '@/assets/scss/Settings/_insurance.scss'
import CustomInputContainer from '~/components/utils/CustomInputContainer.vue';
import CustomLabelBoolean from '~/components/utils/CustomLabelBoolean.vue';

export default {
  components: {
    CustomInputContainer,
    CustomLabelBoolean
  },
  computed: {
    getValues() {
      return this.$store.getters['insurance/getStateValues']
    },
  },
  data() {
    return {
      insurance_package: '',
      insurance_info: '',
      insurance_expiry: '',
      package_type: '',
      package_expiry: '',
      is_vip: true,
      medical_package: '',
      package_benefits: ['Residence Visa', 'Invoicing Support', 'Freelance Work Permit', 'Medical Insurance', 'FreelancerHub']
    }
  },
  mounted() {
    this.mapGlobalStateToLocal()
  },
  methods: {
    mapGlobalStateToLocal() {
      this.insurance_package= this.getValues.insurance_package,
      this.insurance_info= this.getValues.insurance_info,
      this.insurance_expiry= this.getValues.insurance_expiry,
      this.package_type= this.getValues.package_type,
      this.package_expiry= this.getValues.package_expiry,
      this.is_vip= this.getValues.is_vip,
      this.medical_package= this.getValues.medical_package,
      this.package_benefits= this.getValues.package_benefits
    },
  }
}
</script>

<style>

</style>