import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        roomId: '',
        gameStateTimes: 0,
    },
    mutations: {
        edit(state,data){
            state.roomId = data.roomId;
        }
    }
})

export default store
