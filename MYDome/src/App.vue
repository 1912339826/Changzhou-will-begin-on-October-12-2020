<template>
  <div id="app" :class="theme">
    <router-view></router-view>
  </div>
</template>

<script>
import Fingerprint2 from "fingerprintjs2"; // 引入fingerprintjs2
export default {
  name: "App",
  data() {
    return {
      theme: "this_daily",
    };
  },
  watch: {
    theme() {
      // 根据链接中的参数，判断现在是白天或者夜间模式
      // this_dark
      // this_daily
    },
  },
  created() {
    // 您不应在页面加载时或加载后直接运行指纹。 而是使用setTimeout或requestIdleCallback将其延迟几毫秒，以确保指纹一致。
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        this.createFingerprint();
      });
    } else {
      setTimeout(() => {
        this.createFingerprint();
      }, 500);
    }

    if (!window.localStorage.getItem("accessToken")) {
      this.get_token();
    }
  },
  methods: {
    async get_token() {
      let res = await this.$req(window.api.get_token, {});
      window.localStorage.setItem(
        "accessToken",
        res.data.meta.authorization.token
      );
    },
    createFingerprint() {
      // 浏览器指纹
      const fingerprint = Fingerprint2.get((components) => {
        // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
        const values = components.map((component) => component.value); // 配置的值的数组
        const murmur = Fingerprint2.x64hash128(values.join(""), 31); // 生成浏览器指纹
        // console.log(components);
        // console.log(values);
        // console.log(murmur);
        localStorage.setItem("browserId", murmur); // 存储浏览器指纹，在项目中用于校验用户身份和埋点
      });
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
