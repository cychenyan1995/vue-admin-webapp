<template>
    <div class="login">
        <div class="login-box">
            <h2>vue后台管理系统</h2>
            <div class="login-con">
                <div class="login-title">
                    <p>Sign up now</p>
                    <p>Enter your username and password to log on:</p>
                    <i class="el-icon-key"></i>
                </div>
                <div class="login-form">
                    <el-form ref="form">
                          <el-form-item>
                            <el-input placeholder="请输入账号" prefix-icon="el-icon-user"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="toLogin">登录</el-button>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        toLogin() {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="less" scoped>
.login{
    height: 100%;
    width: 100%;
    background: url('./../../assets/pageBg/loginBg.jpg') no-repeat center center;
    background-size: 100% 100%;
    &-box{
        color: #fff;
        font-size: 38px;
        width: 550px;
        height: 360px;
        margin: 0 auto;
        padding-top: 100px;
        .login-con{
            width: 100%;
            background-color: #fff;
            height: 100%;
            overflow: hidden;
            margin-top: 20px;
            .login-title{
                height: 20%;
                text-align: left;
                padding: 30px;
                position: relative;
                p{
                    &:nth-child(1){
                        color: #555;
                        font-size: 20px;
                        margin-bottom: 20px;
                    }
                    &:nth-child(2){
                        font-size: 16px;
                        color: #888;
                    }
                }
                i{
                    position: absolute;
                    top: 30px;
                    color: #eee;
                    right: 20px;
                    font-size: 70px;
                }
            }
            .login-form{
                 background-color: #eee;
                 height: 70%;
                 padding-top: 30px;
            }
        }
    }
    
}
.el-form{
    width: 80%;
    margin: 0 auto;
    .el-button{
        width: 100%;
    }
}
</style>