import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'
 Vue.use(Vuex)
// 创建一个新的 store 实例
const store = new Vuex.Store({
  state: {
    students: [
      {
        id: 1,
        name: '小王',
        clazz_name: '一班'
      },
      {
        id: 2,
        name: '小李',
        clazz_name: '二班'
      }
    ],
    clazzs:[]
  },
  mutations: {
    update_clazz(state,data){
      state.clazzs=data
    },
    update_student(state,data) {
      state.students=data
    },
  },
  actions:{
    getAllClazz({commit}){
      axios.get('http://127.0.0.1:7001/clazz').then(res=>{
        let data= Array.from(res.data) ;
        commit('update_clazz',data);
      })
    },
    remove_clazz({dispatch},id){
      axios.delete(`http://127.0.0.1:7001/clazz/${id}`).then(res=>{
         console.log(res);
          dispatch('getAllClazz');
      })
    },
    add_clazz({dispatch},clazz_name){
      axios.post('http://127.0.0.1:7001/clazz',{clazz_name}).then(res=>{
        console.log(res);
        dispatch('getAllClazz');
      })
    },
    getAllstu({commit}){
      axios.get('http://127.0.0.1:7001/student').then(res=>{
        let data= Array.from(res.data) ;
        console.log(data);
        commit('update_student',data);
      })
    },
    remove_student({dispatch},id){
      axios.delete(`http://127.0.0.1:7001/student/${id}`).then(res=>{
         console.log(res);
          dispatch('getAllstu');
      })
    },
    add_student({dispatch},data){
      console.log(data);
      axios.post('http://127.0.0.1:7001/student',data).then(res=>{
        console.log(res);
        dispatch('getAllstu');
      })
    }
  }
})

export default store