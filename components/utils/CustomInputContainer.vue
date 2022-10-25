<template>
  <div class="cic__container">
    <label>{{label}}</label>
    <slot name="input">

    </slot>
  </div>
</template>

<script>
import  '@/assets/scss/utils/_customInput.scss'
export default {
  props:{
    label:{
      type:String,
      default:'Label'
    }
  }
}
</script>

<style lang="scss">
  
</style>