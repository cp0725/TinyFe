<template>
  <div id="app">
    <el-menu router :default-active="activePath" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item v-for="item in menu" :index="item.path" :key="item.path">
        {{item.name}}
      </el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
import menu from './menu'

export default {
  data() {
    return {
      menu,
      activePath: ''
    }
  },
  created() {
  },
  mounted() {
    this.activePath = this.$route.path 
  },
  methods: {
  },
  components: {
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>