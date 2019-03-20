<style lang="less" scoped> 
.labels {
  text-transform: uppercase;
  font-weight: 500; 
  font-size: 13px;
}
.col {
  text-align: center;
}
</style>
<template> 
<div class="mx-auto w-95 mt-4"> 
  <div class="d-flex labels">
    <div class="col"></div>
    <div v-for="day in days" class="col">
      {{ day }}
    </div>
    <div class="col"></div>
  </div>
  <div class="d-flex mt-2" v-for="(check, index) in checks">
    <div class="col"> {{ check.name }} </div>
    <div v-for="(day, index) in days" class="col">
      <input type="checkbox" v-model="check.days[index]"/>
    </div>
    <div class="col"> 
      <button class="btn btn-small btn-outline-danger" @click="removeCheck(index)"> Remove </button> 
    </div>
  </div>
  <div class="d-flex w-50 mx-auto mt-4">
    <input v-model="newCheck.name" class="form-control mr-2" placeholder="Name" />
    <button class="btn btn-small btn-primary" @click="addCheck()"> Add </button>
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
    let falses = new Array(7)
    falses.fill(false)
    falses = JSON.parse(JSON.stringify(falses))
    return {
      days: days, 
      checks: [], 
      newCheck: {
        name: "", 
        days: falses
      }
    }
  }, 
  methods: {
    addCheck: function() {
      this.checks.push({ name: this.newCheck.name, days: this.newCheck.days })
      this.newCheck.name = ""
    }, 
    removeCheck: function(i) {
      this.checks.splice(i, 1)
    }
  }
}
</script>