<template>
    <div id="pagination" >
        <span v-for="item in pageLength" :key="item" v-on:click="changePage(item)">{{item}}</span>
    </div>
</template>

<script>

export default {
  name: 'pagination',
  computed:{
    pageLength(){
        return this.$store.state.countriesList.length / 25
    }
  },
  methods: {
    changePage(i){
        this.$store.commit("getPageNum",{num:i})
    }
  }
}
</script>

<style scoped>
span{
   padding : 0px 5px;
   border : 1px solid black;
   cursor : pointer;
}
</style>
