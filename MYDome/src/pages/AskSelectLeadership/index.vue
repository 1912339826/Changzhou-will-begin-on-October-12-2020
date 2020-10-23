<template>
  <div id="AskSelectLeadership" class="Header_no_open">
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
    <div class="message">将问题反应给所在的地区领导或部门</div>
    <div class="change">{{ change }}</div>
    <div class="box">
      <div class="list">
        <div class="active">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
        <div class="no_active_red">常州市委书记齐家滨</div>
      </div>
    </div>
    <div class="button_yes button_" @click="goAskSelectDomain">下一步</div>
    <!-- <div class="button_no button_">下一步</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "AskSelectLeadership",
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
    goAskSelectDomain() {
      this.$router.push("/AskSelectDomain");
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#AskSelectLeadership {
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
      // color: #333333;
      font-weight: 600;
    }
  }
  .message {
    margin-top: 8vw;
    color: #9c9c9c;
    font-size: 0.24rem;
    padding-left: 4vw;
  }
  .change {
    margin-top: 5vw;
    font-size: 0.36rem;
    padding-left: 4vw;
    font-weight: 600;
  }
  .box {
    border: 1px solid #f7f7f7;
    padding: 4vw;
    margin-left: 4vw;
    margin-right: 4vw;
    margin-top: 5vw;
    padding-bottom: 0;
    .list {
      color: #373737;
      .active {
        color: #e1585c;
      }
      div {
        font-size: 0.32rem;
        margin-bottom: 5vw;
      }
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
