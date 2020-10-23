<template>
  <div id="headline" class="Header_no_open" :style="bg_color">
    <div class="left" @click="goback">
      <img src="../../static/images/left.png" alt="" style="height: 5vw" />
    </div>
    <div class="title">{{ title }}</div>
    <img src="../../static/images/more.png" alt="" class="more" v-if="!!more" />
    <div class="more" v-else></div>
  </div>
</template>

<script>
export default {
  name: "headline",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    more: {
      type: Boolean,
      default: false,
    },
    bg_color: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    goback() {
      this.$router.back(-1);
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#headline {
  z-index: 9999;
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  .left {
    height: 10vw;
    display: flex;
    align-items: center;
    margin-left: 4vw;
  }
  .title {
    font-size: 0.36rem;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
  }
  .van-icon.van-icon-arrow-left {
    height: 10vw;
    margin-left: 1vw;
    line-height: 3vw;
  }
  .more {
    width: 5vw;
    height: 5vw;
    margin-right: 3vw;
  }
}
</style>
