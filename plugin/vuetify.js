import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export const Theme1 = {
  name:'Yellow',
  dark:{
    primary: '#f2f2f2',
    text: '#2E2E2E',
    text_light: "#f2f2f2",
    bg_white: '#F8F8F3',
    subtitle_text: '#374148',
    accent: '#13CEAA',
    placeholder: '#545454',
    disabled:'#A6A6A6',
    info_dark:'#7E74BA',
    border:'#BBBBBB',
    white:'#FFFFFF',
    black:'000000',
    bg_dashboard:'#F8F8F3',
    grey:'#CACAC9B2',
    indicator:'#2F84A8',
    accent_primary:'#13CE2BCC',
    accent_lighten:'#11DB25',
    accent_teal:'#11DB25',
    tertiary:'#C6E7FF',
    btn_1:'#DCEAF4',
    btn_2:'#EBFEEC',
    btn_3:'#D7FAFC',
    btn_4:'#FFE19766',
    btn_5:'#FF5E5E26',
  },
  light:{
    primary: '#FFC32F',
    text: '#2E2E2E',
    text_light: "#f2f2f2",
    bg_white: '#F8F8F3',
    sub_primary:'#FBE0B0',
    subtitle_text: '#374148',
    accent: '#13CEAA',
    placeholder: '#545454',
    disabled:'#A6A6A6',
    info_dark:'#7E74BA',
    border:'#BBBBBB',
    white:'#FFFFFF',
    black:'000000',
    bg_dashboard:'#EAEDF5',
    grey:'#CACAC9B2',
    indicator:'#2F84A8',
    accent_primary:'#13CE2BCC',
    accent_lighten:'#11DB25',
    accent_teal:'#11DB25',
    tertiary:'#C6E7FF',
    btn_1:'#DCEAF4',
    btn_2:'#EBFEEC',
    btn_3:'#D7FAFC',
    btn_4:'#FFE19766',
    btn_5:'#FF5E5E26',
  }
}

export const Theme2 = {
  name:'Red',
  dark:{
    primary: '#eb0d09',
    text: '#2E2E2E',
    text_light: "#f2f2f2",
    bg_white: '#F8F8F3',
    subtitle_text: '#374148',
    accent: '#00ff00',
    placeholder: '#545454',
    disabled:'#A6A6A6',
    info_dark:'#7E74BA',
    border:'#BBBBBB',
    white:'#FFFFFF',
    black:'000000',
    bg_dashboard:'#F8F8F3',
    grey:'#CACAC9B2',
    indicator:'#2F84A8',
    accent_primary:'#13CE2BCC',
    accent_lighten:'#11DB25',
    accent_teal:'#11DB25',
    tertiary:'#C6E7FF',
    btn_1:'#DCEAF4',
    btn_2:'#EBFEEC',
    btn_3:'#D7FAFC',
    btn_4:'#FFE19766',
    btn_5:'#FF5E5E26',
  },
  light:{
    primary: '#eb0d09',
    text: '#2E2E2E',
    text_light: "#f2f2f2",
    bg_white: '#F8F8F3',
    subtitle_text: '#374148',
    accent: '#00ff00',
    placeholder: '#545454',
    disabled:'#A6A6A6',
    info_dark:'#7E74BA',
    border:'#BBBBBB',
    white:'#FFFFFF',
    black:'000000',
    bg_dashboard:'#F8F8F3',
    grey:'#CACAC9B2',
    indicator:'#2F84A8',
    accent_primary:'#13CE2BCC',
    accent_lighten:'#11DB25',
    accent_teal:'#11DB25',
    tertiary:'#C6E7FF',
    btn_1:'#DCEAF4',
    btn_2:'#EBFEEC',
    btn_3:'#D7FAFC',
    btn_4:'#FFE19766',
    btn_5:'#FF5E5E26',
  }
}



export default new Vuetify({
  breakpoint:{
    scrollBarWidth:5,
  },
  icons:{
    iconfont:'fa'
  },
  theme: { 
    themes:{
      light:Theme1.light,
      dark:Theme1.dark
    }
   },
})