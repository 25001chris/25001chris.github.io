<template>
  <div class="info">
    <div>
      <span>語言 : </span>
      <span v-for="(item,index) in flagInfo.languages" :key="index">{{item.name}}</span>
    </div>
    <div>
      <span>貨幣 : </span>
      <span v-for="(item,index) in flagInfo.currencies" :key="index">{{item.symbol}}</span>
    </div>
    <div><span>別名 : </span><span>{{flagInfo.demonym}}</span></div>
    <div><span>人口 : </span><span>{{flagInfo.population}}</span></div>
    <div><span>地區 : </span><span>{{flagInfo.region}}</span></div>

    <font-awesome-icon v-on:click="close" class="icon" icon="times"/>
  </div>
</template>

<script>
export default {
  name: 'flagListInfo',
  props: {
    flagInfo: Object
  },
  methods: {
      close(){
          this.$store.commit("getCountriesState",{countries:''})
      }
  }
}
</script>

<style scoped>
.info{
    position: fixed;
    top: 200px;
    left: calc(50vw - 190px) ;
    background : white;
    width: 360px;
    padding: 20px;
    background: gray;
    color: white
}
.icon{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}
</style>
