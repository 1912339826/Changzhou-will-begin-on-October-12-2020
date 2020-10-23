<template>
  <div id="app" :class="theme">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      theme: "this_dark",
    };
  },
  watch: {
    theme() {
      // 根据链接中的参数，判断现在是白天或者夜间模式
      // this_dark
      // this_daily
    },
  },
};
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
// less外部文件的使用
@import url("./assets/less/dark");
</style>
