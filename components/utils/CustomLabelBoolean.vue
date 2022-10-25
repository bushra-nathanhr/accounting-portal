<template>
  <div class="clb__wrap">
    <h5>{{label}}</h5>
    <p :class={clb__bool_yes_value:boolean}>{{boolValue}}</p>
  </div>
</template>

<script>
import '@/assets/scss/utils/_customLabelBoolean.scss'
export default {
  props:{
    label:{
      type:String,
      default:'Give your label here'
    },
    boolean:{
      type:Boolean,
      default:false
    }
  },
  computed: {
    boolValue(){
      return this.boolean?'Yes':'No'
    }
  },
}
</script>

<style>

</style>