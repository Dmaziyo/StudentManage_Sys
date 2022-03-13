<template>
    <div id="login">
  <el-form  status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" >
    <el-input type="text" v-model="user_form.username" placeholder="请输入用户名" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" >
    <el-input type="password" v-model="user_form.password" placeholder="请输入密码" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="submit" type="primary">登录</el-button>
    <el-button >重置</el-button>
  </el-form-item>
</el-form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
        user_form:{
            username:'',
            password:''
        }
        }
    },
    created(){
        let token=localStorage.getItem('token');
        // console.log(token);
         axios.get('http://127.0.0.1:7001/verify',{headers:{
             token
         }})
            .then(res=>{
                let data=res.data;
                if(data.state){
                    this.$router.push('/System/Student');
                }
            })
    },
    methods:{
        submit(){
            axios.post('http://127.0.0.1:7001/login',this.user_form)
            .then(res=>{
                let data=res.data;
                // console.log(data);
                if(data.code===200){
                    localStorage.setItem('token',data.token);
                    // console.log(res.data.token);
                    this.$router.push('/System/Student');
                }
                else{
                    this.$message.error('账号或密码错误');
                }
            })
        }
    }
}
</script>

<style>
    #login{
        width: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
</style>