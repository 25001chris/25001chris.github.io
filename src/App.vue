<template>
  <div id="app" class="main">
    <input v-model="searchCountries">
    <OptionFilter />
    <Pagination />
    <table>
      <thead>
      <tr>
        <td v-for="(item, index) in tableHeader" :key="index">{{item.tab}}</td>
      </tr>
      </thead>
      <tbody>
      <List v-for="(item, index) in this.$store.state.countriesList"
      v-bind:flagList="item"
      v-bind:key="index"
      v-bind:num="index"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import List from './components/list.vue'
import OptionFilter from './components/filter.vue'
import Pagination from './components/pagination.vue'

export default {
  name: 'App',
  created : function(){
    this.$axios.get('https://restcountries.eu/rest/v2/all')
    .then(res=>{
        this.$store.state.countriesList = res.data
        console.log(res.data)
    }).catch(function(){
        console.log('error')
    })
  },
  components: {
    List,
    OptionFilter,
    Pagination
  },
  data(){
    return{
      searchCountries : "",
      showList: true,
      tableHeader: [
        {
          tab : '國旗',
        },
        {
          tab : '國名',
        },
        {
          tab: '2位國家代碼',
        },
        {
          tab : '3位國家代碼',
        },
        {
          tab : '母語名稱',
        },
        {
          tab : '替代國家名稱',
        },
        {
          tab : '國際電話區號',
        },
      ],
    }
  },
  computed:{
    list(){
      return this.$store.state.countriesList
    }
  },
  watch:{
    searchCountries(n){
      this.$store.commit("getSearchText",{text:n})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
td{
  border: 1px solid black
}
</style>
