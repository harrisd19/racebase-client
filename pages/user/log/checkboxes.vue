<template> 
<div class="mx-auto w-95 mt-4"> 
  <div v-for="day in days">
    {{ day }}
  </div>
</div>
</template>
<script> 
import moment from 'moment'
export default {
  async asyncData () {
    let days = await Array.apply(null, Array(7)).map(function (_, i) {
      let day = moment().startOf('isoWeek').weekday(i + 1)
      return day.format('dddd')
    })
    return {
      days: days
    }
  }
}
</script>