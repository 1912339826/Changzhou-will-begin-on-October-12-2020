<template>
  <div id="Feedback" class="Header_no_open">
    <headline title="意见反馈" />
    <div class="box_type">
      <nav class="subText_text"><span>请选择问题类型</span><span>*必填</span></nav>
      <div class="list">
        <div class="son" v-for="(item, index) in 6" :key="index">1111</div>
      </div>
    </div>
    <div style="height: 6px; opacity: 1" class="subText"></div>
    <div class="box_content">
      <nav class="subText_text"><span>请填写问题内容</span><span>*必填</span></nav>
      <div class="textarea">
        <van-field
          v-model="message"
          rows="1"
          autosize
          label=""
          type="textarea"
          placeholder="您的报规意见是我们前行的动力"
        />
      </div>
    </div>
    <div style="height: 6px; opacity: 1" class="subText"></div>
    <div class="box_contact_way">
      <nav><span>期待您留下联系方式，我们将提供更好的服务</span></nav>
      <van-field v-model="text" label="" placeholder="QQ或者邮箱" />
    </div>
    <div class="button_yes button_">提交</div>
    <!-- <div class="button_no button_">提交</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "Feedback",
  components: { headline },
  props: {},
  data() {
    return { message: "" };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {},
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#Feedback {
  height: 100vh;
  nav {
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-bottom: 3vw;
    padding-top: 5vw;
    span {
      &:nth-child(1) {
        // color: #363636;
        font-size: 0.32rem;
        font-weight: 600;
      }
      &:nth-child(2) {
        color: #919191;
        font-size: 0.24rem;
      }
    }
  }
  .box_type {
    padding-top: 10vw;
    padding-left: 4vw;
    padding-right: 4vw;
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 5vw;
      .son {
        width: 29.6vw;
        height: 8.5vw;
        line-height: 8.5vw;
        border: 1px solid #eeeeee;
        text-align: center;
        font-size: 0.28rem;
      }
    }
  }
  .box_content {
    padding-left: 4vw;
    padding-right: 4vw;
    .textarea {
      height: 33vw;
      overflow: scroll;
      .van-cell.van-field {
        padding-left: 0;
      }
    }
  }
  .box_contact_way {
    padding-left: 4vw;
    padding-right: 4vw;
    input::placeholder {
      color: #cccccc;
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
