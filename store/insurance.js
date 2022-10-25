export const state = () => ({
  insurance_package: '',
      insurance_info: '',
      insurance_expiry: '',
      package_type: '',
      package_expiry: '',
      is_vip: true,
      medical_package: '',
      package_benefits: ['Residence Visa', 'Invoicing Support', 'Freelance Work Permit', 'Medical Insurance', 'FreelancerHub']
})



export const getters = {
  getStateValues(state) {
    return {
      insurance_package: state.insurance_package,
      insurance_info: state.insurance_info,
      insurance_expiry: state.insurance_expiry,
      package_type: state.package_type,
      package_expiry: state.package_expiry,
      is_vip: state.is_vip,
      medical_package: state.medical_package,
      package_benefits: state.package_benefits
    }
  }
}

export const mutations = {
}

export const actions = {
}