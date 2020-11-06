<template>
  <div id="ScoreMallRecord" class="Header_no_open">
    <headline title="积分商城记录" />
    <div class="box">
      <div class="list" v-for="(item, index) in 1" :key="index">
        <div class="start subText">
          <div class="left"><span>订单号：</span><span>XXXXXXXXXX</span></div>
          <div class="right">
            <span>已支付</span>
          </div>
        </div>
        <div class="content">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392888803,907475590&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="right">
            <p>
              华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为
            </p>
            <div class="stepper">12138</div>
          </div>
        </div>
      </div>
      <div class="list" v-for="(item, index) in 1" :key="index">
        <div class="start subText">
          <div class="left"><span>订单号：</span><span>XXXXXXXXXX</span></div>
          <div class="right">
            <span>已领取</span>
          </div>
        </div>
        <div class="content">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392888803,907475590&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="right">
            <p>
              华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为
            </p>
            <div class="stepper">12138</div>
          </div>
        </div>
      </div>
      <div class="list" v-for="(item, index) in 1" :key="index">
        <div class="start subText">
          <div class="left"><span>订单号：</span><span>XXXXXXXXXX</span></div>
          <div class="right">
            <span>已发货</span>
          </div>
        </div>
        <div class="content">
          <img
            src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392888803,907475590&fm=26&gp=0.jpg"
            alt=""
          />
          <div class="right">
            <p>
              华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为华为
            </p>
            <div class="stepper">12138</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_yes button_">继续兑换</div>
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "ScoreMallRecord",
  components: {
    headline,
  },
  props: {},
  data() {
    return {};
  },
  created() {
    this.getAppGoodhistory();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    async getAppGoodhistory() {
      let res = await this.$req(window.api.getAppGoodhistory, {
        page: 1,
      });
      console.log(res.data.data.data);
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#ScoreMallRecord {
  height: 100vh;
  .box {
    padding-top: 10vw;
  }
  .list {
    margin-bottom: 5vw;
    .start {
      padding-left: 4vw;
      padding-right: 4vw;
      height: 10vw;
      line-height: 10vw;
      font-size: 0.22rem;
      display: flex;
      justify-content: space-between;
      .right {
        color: #f77a60;
      }
    }
    .content {
      margin-top: 7vw;
      margin-right: 4vw;
      margin-left: 4vw;
      display: flex;
      border-bottom: 1px solid #f6f3f7;
      padding-bottom: 5vw;
      img {
        width: 20vw;
        height: 20vw;
        border: 1px solid #eeeeee;
        margin-right: 4vw;
      }
      .right {
        p {
          font-size: 0.28rem;
          font-weight: 600;
          line-height: 6vw;
        }
        .stepper {
          margin-top: 2vw;
          display: flex;
          justify-content: flex-end;
          font-size: 0.36rem;
          color: #f9522d;
        }
      }
    }
  }

  .button_ {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 15vw;
    line-height: 15vw;
    font-size: 0.36rem;
  }

  .button_yes {
    color: #ffffff;
    background-color: #f84e35;
  }
}
</style>
