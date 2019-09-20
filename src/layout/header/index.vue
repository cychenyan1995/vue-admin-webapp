<template>
    <div class="header">
        <div class="header-logo">
            <img src="./logo.png" alt="">
            <span><strong>Vue Project</strong></span>     
        </div>
        <div class="header-con">
            <div class="header-left">
                <i :class="isOpen?'el-icon-s-unfold':'el-icon-s-fold'" @click="toggleOpen"></i>
            </div>
            <div class="header-right">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['isOpen'])
    },
    methods: {
        toggleOpen() {
            this.$store.commit('app/SET_ISOPEN', !this.isOpen)
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    height: 50px;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
    &-logo{
        width: 200px;
        transition: all .3s;
        height: 100%;
        line-height: 50px;
        background-color: #3a3f51;
        color: #fff;
        float: left;
        border-bottom: 1px solid #454b61;
        img{
            height: 28px;
            vertical-align: middle;
            margin-right: 5px;
            position: relative;
            top: -5px;
        }
        span{
            display: inline-block;
            height: 50px;
            line-height: 50px;
            font-size: 18px;
        }
    }
    &-con{
        margin-left: 200px;
        transition: all .3s;
        position: relative;
        height: 100%;
        .header-left{
            position: absolute;
            left: 20px;
            top: 15px;
            i{
                font-size: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>