<template>
  <div id="Sys">
    <div id="nav">
      <router-link to="/System/Student">学生管理</router-link> |
      <router-link to="/System/Clazz">班级管理</router-link>|
      <el-link @click.prevent="Logout" type="primary">注销</el-link>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods:{
        Logout(){
        this.$confirm('确定注销吗')
          .then(() => {
                localStorage.setItem('token','');
                 this.$router.push('/')
          })
          .catch(() => {});

        }
    }
}
</script>


<style>

#nav {
  text-align: left;
  padding: 10px 0 30px 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #409eff;
}
</style>