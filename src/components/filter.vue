<template>
<select v-model="optionVal">
    <option v-for="list in optionFilter" :key="list.value" :value="list.value">{{list.item}}</option>
</select>
</template>
<script>

export default {
  name: 'OptionFilter',
  data:function () {
    return{
        optionFilter: [
          {
            item : '正序',
            value : 'down'
          },
          {
            item : '倒序',
            value : 'up'
          },
        ],
        optionVal: null
    }
  },
  watch: {
    optionVal(n){
      this.$store.commit("getfilterOption",{option:n})
      this.filterList(n)
    }
  },
  computed:{
    
  },
  methods: {
    filterList(n){
      let list = this.$store.state.countriesList
      list.sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return n === "up" ? 1 : -1;
          }
          if (nameA > nameB) {
            return n === "up" ? -1 : 1;
          }

          return 0;
      });
      this.$store.commit("fliterList",{list:list})
    },
  }  
}
</script>

<style scoped>
</style>
