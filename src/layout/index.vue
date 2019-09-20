<template>
    <div class="wrap" :class="{closeBar:!isOpen}">
        <m-header />
        <div class="wrap-con">
            <side-bar></side-bar>
        </div>
    </div>
    
</template>
<script>
import MHeader from './header'
import MenuNav from './menuNav'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['isOpen'])
    },
    components: {
        'm-header': MHeader,
        'side-bar': MenuNav
    }
}
</script>
<style lang="less">
.wrap{
    height: 100%;
    overflow: hidden;
}
.wrap-con{
    width: 100%;
    overflow: hidden;
    height: calc(100% - 50px);
}
.closeBar{
    .header{
        .header-logo{
            width: 64px !important;
            overflow: hidden;
            transition: all .3s;
        }
        &-con{
            margin-left: 64px;
            transition: all .3s;
        }
    }
    .menu{
        width: 64px;
        transition: all .3s;
    }
    .el-submenu__icon-arrow {
        display: none;
    }
    .el-submenu__title{
        span{
            display: none;
        }
    }
    // .el-menu-item{
    //     display: none;
    //     transition: all .3s;
    // }
    .el-menu-item{
        height: 0;
        width: 0;
        visibility: hidden;
        overflow: hidden;
        transition: all .3s;
    }
}
</style>