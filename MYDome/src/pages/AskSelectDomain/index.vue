<template>
  <div id="AskSelectDomain" class="Header_no_open">
    <headline title="我要提问" />
    <div class="procedure">
      <span class="active">选择领导</span>
      <span>
        <img src="../../../static/images/right.png" alt="" />
      </span>
      <span>撰写问题</span>
      <span>
        <img src="../../../static/images/right.png" alt="" />
      </span>
      <span>提交</span>
    </div>
    <div class="title list_text">问题领域</div>
    <div class="message">精准分类会加快对应部门接受问题</div>
    <div class="box">
      <div v-for="(item, index) in 16" :key="index">治安</div>
    </div>
    <div class="title list_text">问题分类</div>
    <div class="box">
      <div v-for="(item, index) in 5" :key="index">治安</div>
    </div>
    <div class="button_yes button_" @click="gowrite">下一步</div>
    <!-- <div class="button_no button_">下一步</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "AskSelectDomain",
  components: {
    headline,
  },
  props: {},
  data() {
    return {
      change: "常州市委书记齐家滨",
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    gowrite(){
      this.$router.push("/write")
    }
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#AskSelectDomain {
  height: 100vh;
  .procedure {
    padding-top: 15vw;
    display: flex;
    justify-content: space-between;
    padding-left: 8vw;
    padding-right: 8vw;
    color: #999999;
    span {
      font-size: 0.32rem;
    }
    .active {
      font-weight: 600;
    }
  }
  .title {
    font-size: 0.36rem;
    font-weight: 600;
    padding-left: 4vw;
    margin-top: 5vw;
  }
  .message {
    margin-top: 3vw;
    color: #9c9c9c;
    font-size: 0.24rem;
    padding-left: 4vw;
  }
  .box {
    margin-top: 7vw;
    padding-left: 3vw;
    padding-right: 3vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 0.32rem;
    div {
      width: 17.6vw;
      margin-bottom: 5vw;
      text-align: center;
    }
  }
  .button_ {
    position: fixed;
    bottom: 5vw;
    width: 90%;
    left: 5%;
    text-align: center;
    height: 10vw;
    line-height: 10vw;
    font-size: 0.36rem;
    border-radius: 2vw;
  }
  .button_no {
    color: #fb9889;
    background-color: #f96954;
  }
  .button_yes {
    color: #ffffff;
    background-color: #f84e35;
  }
}
</style>
