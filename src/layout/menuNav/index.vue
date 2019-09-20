<template>
    <div class="menu">
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#3a3f51"
                text-color="#b5b6bd"
                active-text-color="rgb(79, 148, 212)"
                mode="vertical"
                :collapse-transition="false"
            >
                <sidebar-item
                v-for="item in routes"
                :key="item.path"
                :item="item"
                :basePath="item.path"
                ></sidebar-item>
            </el-menu>
    </div>
</template>
<script>
import SidebarItem from './SideBarItem'
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            
        }
    },
    components: {
        'sidebar-item': SidebarItem
    },
    computed: {
        ...mapGetters(['routes'])
    }
}
</script>
<style lang="less">
.menu{
    width: 200px;
    transition: all .3s;
    height: 100%;
}
.el-menu{
    width: 100%;
    height: 100%;
}
.el-menu-item{
    text-align: left;
}
.el-submenu__title{
    text-align: left;
}
.el-menu-item{
    transition: all .3s;
}
</style>