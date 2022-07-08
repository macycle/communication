<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="item in crumbList" :key="item.index" :to={path:item.url}>{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{
            crumbList:[]
        }
    },
    methods:{
        
    },
    watch:{
        '$store.state.ActiveCrumb.length':function(){
            this.crumbList=this.$store.state.ActiveCrumb
        }
    }
}
</script>

<style scoped>
</style>