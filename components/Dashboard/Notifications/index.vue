<template>
      <div
        class="notifications__container"
      >
        <div class="text__container">
          <v-img
            src="/dashboard/info-circle-bold.svg"
            width="33" height="33" class="warning_icon"
          ></v-img>
          <span class="pl-3"
            >We found email errors for sales transactions to view the errors,
            <span style="color: blue !important">CLICK HERE</span></span
          >
        </div>
        <div class="close_icon__container">
          <v-img
            src="/dashboard/close-square-outline.svg"
            width="24" height="24"
            class="close_icon"
          ></v-img>
        </div>
      </div>

</template>

<script>
import '@/assets/scss/Dashboard/_notifications.scss'
export default {

}
</script>

<style>

</style>