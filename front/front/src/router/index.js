import Vue from 'vue'
import VueRouter from 'vue-router'
import Clazz from '../views/Clazz'
import Student from '../views/Student'
import Login from '../views/Login'
import System from '../views/System'

Vue.use(VueRouter)

const routes = [
  {
    path:'/System',
    name:'System',
    component:System,
    children:[
      {
        path: 'Student',
        name: 'Student',
        component: Student
      },
      {
        path: 'Clazz',
        name: 'Clazz',
        component: Clazz
      }
    ]
  },
  {
    path:'/',
    name:'Login',
    component:Login
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((to,from,next)=>{
    if(to.name!=='System'){
      next();
    }
    else{
      // console.log(localStorage.getItem('token'));
      if(localStorage.getItem('token')){
        next();
      }
      else{
        next({name:'Login'})
      }
    }
})
export default router
