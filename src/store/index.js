import { createStore } from 'vuex'

const store =  createStore({
  state: {
    points : 0
  },
  getters: {
  },
  mutations: {
    updatePoints(state, payload){
      state.points = state.points + payload
    }
  },
  actions: {

  },
  modules: {

  }
})


export default store