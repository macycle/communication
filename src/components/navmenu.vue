<template>
  <div>
    <el-button @click="isCollapse = !isCollapse">按钮</el-button>
    <el-menu :default-active="activeIndex" unique-opened @select="handleSelect" ref="menu" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </el-menu-item>
      <el-submenu index="2" :show-timeout="2000">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">我的工作台</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <span slot="title">分组二</span>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-info"></i>
          <span slot="title">消息中心</span>
        </template>

        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
          <i class="el-icon-s-management"></i>
          <span>订单管理</span>
      </el-menu-item>
    </el-menu>

    <!-- <el-button @click="opensubmenu">打开子菜单</el-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.activeIndex);
      console.log(key, keyPath);
    }
    // opensubmenu(){
    //   this.$refs.menu.open('3')
    // }
  }
};
</script>

<style>
</style>