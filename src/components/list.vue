<template>
  <tr class="main" v-show="ListShow">
    <td class="flag" v-on:click="openInfo"><img :src="flagList.flag" /></td>
    <td>{{flagList.name}}</td>
    <td>{{flagList.alpha2Code}}</td>
    <td>{{flagList.alpha3Code}}</td>
    <td>{{flagList.nativeName}}</td>
    <td>{{flagList.altSpellings}}</td>
    <td>{{flagList.callingCodes}}</td>
    <Info v-show="showInfo" v-bind:flagInfo="flagList"/>
  </tr>
</template>

<script>
import Info from './info.vue'
export default {
  name: 'flagList',
  props: {
    flagList: Object,
    num: Number
  },
  data:function () {
    return {
      isShow : false
    }
  },
  components: {
    Info
  },
  computed:{
    showInfo(){
      return this.flagList.name === this.$store.state.countriesState ? true : false
    },
    ListShow(){
      const t = this.$store.state.searchText.toUpperCase()
      const s = this.flagList.name.toUpperCase()
      const n = this.$store.state.pageNum
      const isPageL = n*25
      const isPageS = isPageL - 24
      const isPage = this.num <= isPageL && this.num >= isPageS
      return s.indexOf(t) !== -1 && isPage ? true : false
    }
  },
  methods: {
    openInfo(){
      this.$store.commit("getCountriesState",{countries:this.flagList.name})
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped>
img{
  width:100px;
  cursor: pointer;
}
.main > td{
  flex-grow : 1;
  border: 1px solid #000;
}
.main > .flag{
  width: 200px;
  background: orange
}
</style>
