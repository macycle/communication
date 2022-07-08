import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ActiveCrumb:[
      {url:'/',name:'home'},
    ]
  },
  mutations: {
    addCrumb(state,item){
      let Array=[{url:'/',name:'home'}];
      let newArr=null
        Array.push({
          url:item,
          name:item.replace('/','')
        })

      state.ActiveCrumb=Array
    }
  },
  actions: {
  },
  modules: {
  }
})
