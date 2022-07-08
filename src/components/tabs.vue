<template>
    <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="beforeLeave" addable closable @tab-remove="removeTab" @tab-add="tadAdd">
        <el-tab-pane v-for="item in tabItem" :key="item.id" :name="item.name" :label="item.label">{{item.name}}</el-tab-pane> 
    </el-tabs>
</template>

<script>

export default {
    data() {
        return {
            activeName: 'first',
            tabItem:[
                {label:'用户管理',name:"first",id:0},
                {label:'配置管理',name:"second",id:1},
                {label:'角色管理',name:"third",id:2},
                {label:'定时任务补偿',name:"fourth",id:3},
            ]
        }
    },
    methods:{
        handleClick(tab) {
            // console.log(tab);
        },
        beforeLeave(activeName, oldActiveName){
            // console.log(activeName, oldActiveName);
        },
        removeTab(name){
            // let currentTab=this.activeName
            let tabs=this.tabItem
            tabs.forEach((item,index)=>{
                if(item.name==name){
                    let nextTab=tabs[index+1]||tabs[index-1]
                    if(nextTab){
                        this.activeName=nextTab.name
                    }
                    tabs.splice(index,1)
                }
            })
            this.tabItem=tabs
        },
        tadAdd(){
            let newTab={
                label:'newTab',
                name:'newTab'+this.tabItem.length,
                id:this.tabItem.length
            }
            this.tabItem.push(newTab)
        }
    }
}
</script>

<style>
</style>