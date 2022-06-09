<template>
  <div class="hello">



    <el-row>
      <el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
        <el-descriptions-item label="用户名">{{username}}</el-descriptions-item>
        <el-descriptions-item label="手机号">{{phoneNumber}}</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">{{city}}</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">{{school}}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">{{address}}</el-descriptions-item>
      </el-descriptions>
      
      <el-button type="primary" class="gap">主要按钮</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data:{
    username:"",
    phoneNumber:"",
    city:"",
    school:"",
    address:""
  },
  methods:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.gap {
  margin-top: 30px;
}
</style>
