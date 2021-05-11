import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      countriesState : '',
      filterOption : '',
      countriesList : [],
      searchText : "",
      pageNum : 1,
    },
    getters:{},
    mutations:{
        getCountriesState(state,payload){
            state.countriesState = payload.countries
        },
        getfilterOption(state,payload){
            state.filterOption = payload.option
        },
        fliterList(state,payload){
            state.countriesList = payload.list
        },
        getSearchText(state,payload){
            state.searchText = payload.text
        },
        getPageNum(state,payload){
            state.pageNum = payload.num
        },
    },
    actions:{}
})
