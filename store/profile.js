export const state = () => ({
  readOnly: true,
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
})



export const getters = {
  getReadOnly(state) {
    return state.readOnly
  },
  getStateValues(state) {
    return {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email,
      phone: state.phone,
      country: state.country,
      nationality: state.nationality,
      birth_date: state.birth_date,
      marital_status: state.marital_status,
      father_name: state.father_name,
      mother_name: state.mother_name,
      area: state.area,
      building_name: state.building_name,
      villa_no: state.villa_no,
      po_box: state.po_box,
      emirate: state.emirate,
      city: state.city,
      emergency_name: state.emergency_name,
      emergency_relation: state.emergency_relation,
      emergency_email: state.emergency_email,
      emergency_phone: state.emergency_phone,
      emergency_address: state.emergency_address
    }
  }
}

const CONSTANTS = {
  TOGGLE_READ_ONLY: 'toggleReadonly'
}

export const mutations = {
  toggleReadonly(state, data) {
    state.readOnly = data
  }
}

export const actions = {
  changeReadOnly({ commit }, payload) {
    // make request
    console.log('payload', payload)
    // commit('toggleReadOnly',payload)
    commit(CONSTANTS.TOGGLE_READ_ONLY, payload);
  }
}