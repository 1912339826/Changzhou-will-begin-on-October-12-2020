<template>
  <div id="AskDetails" class="Header_no_open">
    <headline title="我要提问" :more="true" />
    <div class="title">
      8月幼儿园要求，无论什么病都要去 定点医院出具复课证明，是否合理？
    </div>
    <div class="place"><span class="list_text">看常州网友</span><span>2020-8-31</span></div>
    <div style="height: 6px; opacity: 1" class="subText"></div>
    <div class="dynamic">
      <img src="../../../static/images/AskDetails_icon.png" alt="" />
      <div class="right">
        <div class="son">
          <div class="list_text">已受理</div>
          <div>2020-09-01</div>
        </div>
        <div class="son">
          <div class="list_text">已回复</div>
          <div>2020-09-02</div>
        </div>
      </div>
    </div>
    <div class="box">
      8月3日，桦川县第一中学、职业教育中心两所高中高三学年复学，县教育局疫情防控督查组在副组长张倩倩带领下检查两所高中复课及疫情防控工作。
      两所学校严格按照上级复学及疫情防控工作要求安排复课工作，所有复课教工及学生全部进行核酸检测，对全校师生进行了复课前的演练和培训，严格落实四次体温检测，班级实行小班化教学，保持安全距离，课间不聚集，保持一米间距。一中使用远程教学设备进行教学，解决了教工师资问题，同时提高了授课质量。
      当前，疫情防控进入到“内防反弹，外防输入”关键时期，思想上不能麻痹大意、松懈，要巩固防疫成果，让社会、家长放心，确保校园安全。
    </div>

    <div style="height: 6px; opacity: 1" class="subText"></div>

    <div class="municipal_government"><span>市政府</span><span>回复</span></div>
    <div class="box">
      8月3日，桦川县第一中学、职业教育中心两所高中高三学年复学，县教育局疫情防控督查组在副组长张倩倩带领下检查两所高中复课及疫情防控工作。
      两所学校严格按照上级复学及疫情防控工作要求安排复课工作，所有复课教工及学生全部进行核酸检测，对全校师生进行了复课前的演练和培训，严格落实四次体温检测，班级实行小班化教学，保持安全距离，课间不聚集，保持一米间距。一中使用远程教学设备进行教学，解决了教工师资问题，同时提高了授课质量。
      当前，疫情防控进入到“内防反弹，外防输入”关键时期，思想上不能麻痹大意、松懈，要巩固防疫成果，让社会、家长放心，确保校园安全。
    </div>
    <div class="share">
      <img src="../../../static/images/weixin.png" alt="" />
      <img src="../../../static/images/QQ.png" alt="" />
      <img src="../../../static/images/weibo.png" alt="" />
    </div>
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "AskDetails",
  components: {
    headline,
  },
  props: {},
  data() {
    return {};
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
#AskDetails {
  .title {
    padding-top: 15vw;
    font-size: 0.44rem;
    padding-left: 4vw;
    padding-right: 4vw;
    line-height: 8vw;
    font-weight: 600;
    text-align: justify;
  }
  .place {
    margin-top: 8vw;
    padding-left: 4vw;
    padding-right: 4vw;
    margin-bottom: 5vw;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.28rem;

      &:nth-child(2) {
        font-size: 0.24rem;
        color: #9c9c9c;
      }
    }
  }

  .dynamic {
    display: flex;
    align-items: center;
    padding-right: 4vw;
    padding-left: 4vw;
    border-bottom: 1px solid #efefef;
    .right {
      width: 90vw;
    }
    .son {
      display: flex;
      align-content: center;
      height: 14vw;
      justify-content: space-between;
      width: 100%;
      div {
        height: 14vw;
        line-height: 14vw;
        font-size: 0.32rem;
        &:nth-child(1) {
          font-size: 0.32rem;
          font-weight: 600;
        }

        &:nth-child(2) {
          font-size: 0.24rem;
          color: #9c9c9c;
        }
      }
    }
    img {
      height: 17vw;
      margin-right: 4vw;
    }
  }
  .box {
    padding: 4vw;
    font-size: 0.32rem;
    line-height: 8vw;
    text-align: justify;
  }

  .municipal_government {
    padding-left: 4vw;
    padding-right: 4vw;
    span {
      font-size: 0.36rem;
      &:nth-child(1) {
        font-size: 0.36rem;
        color: #f04040;
      }
      &:nth-child(2) {
        font-size: 0.32rem;
        color: #303030;
        margin-left: 1vw;
      }
    }
  }
  .share {
      padding-top: 5vw;
      padding-left: 25vw;
      padding-right: 25vw;
      padding-bottom: 10vw;
      display: flex;
      justify-content: space-between;
    img {
      width: 8vw;
      height: 8vw;
    }
  }
}
</style>
