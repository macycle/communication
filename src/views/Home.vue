<template>
  <el-container>
    <el-aside width="200px">
      <router-link to="/navmenu">navmenu</router-link>
      <router-link to="/tabs">tabs</router-link>
      <router-link to="/breadcrumb">breadcrumb</router-link>
    </el-aside>
    <el-container>   
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style>
  
  .el-container{
    height: 100vh;
  }
 
  .el-aside {
    padding: 20px 0px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>