<template>
  <div class="good_morning__container">
    <div class="sun_icon__container">
      <v-img :src="{ icon }" class="sun__icon" />
    </div>
    <div class="text__container">
      <span class="degree">{dgree}º C <span class="city">| {city}</span></span>
      <span class="greeting">{greeting}, <span class="user">{user}</span></span>
      <span class="date">{date}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        icon: '/dashboard/sun.svg',
        degree:'30',
        city: 'Dubai, UEA',
        greeting: 'Good Morning',
        user: 'Akshaf',
        date: 'Thursday, 8:25 AM'
      }
    }
  }

}
</script>