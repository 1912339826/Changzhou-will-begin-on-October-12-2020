<template>
  <div id="ScoreMall" class="Header_no_open">
    <headline title="  " />
    <div style="padding-top: 10vw"></div>
    <div class="the_integral">
      <div class="num">
        <div class="number">20600</div>
        <div class="title">我的积分：</div>
        <div class="gogain">赚取积分</div>
      </div>
      <div class="gorecord" @click="gorecord">兑换记录</div>
    </div>
    <div class="box">
      <div
        class="list"
        v-for="(item, index) in AppGoodList"
        :key="index"
        @click="goproductDetails"
      >
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392888803,907475590&fm=26&gp=0.jpg"
          alt=""
        />
        <p class="title">{{item.product_name}}</p>
        <div class="price"><span>{{item.price}}</span><span>积分</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "ScoreMall",
  components: {
    headline,
  },
  props: {},
  data() {
    return {
      AppGoodList: [],
    };
  },
  created() {
    this.getAppGoodList();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    gorecord() {
      this.$router.push("/ScoreMallRecord");
    },
    goproductDetails() {
      this.$router.push("/productDetails");
    },
    async getAppGoodList() {
      let res = await this.$req(window.api.getAppGoodList, {
        page: 1,
      });
      console.log(res.data.data.data.data);
      this.AppGoodList = res.data.data.data.data;
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#ScoreMall {
  .the_integral {
    padding-top: 4vw;
    padding-left: 4vw;
    padding-right: 4vw;
    background: #f84e35;
    opacity: 0.69;
    border-radius: 8px;
    margin-left: 4vw;
    margin-right: 4vw;
    height: 23vw;
    display: flex;
    justify-content: space-between;
    .num {
      .number {
        color: #ffffff;
        font-size: 0.48rem;
      }
      .title {
        margin-top: 1vw;
        color: #fcb4aa;
        font-size: 0.2rem;
      }
      .gogain {
        margin-top: 2vw;
        font-size: 0.2rem;
        color: #ffffff;
        width: 1rem;
        text-align: center;
        padding-bottom: 1vw;
        border-bottom: 1px solid #ffffff;
      }
    }
    .gorecord {
      border: 1px solid #f3e2db;
      opacity: 1;
      border-radius: 6px;
      color: #f3e2db;
      font-size: 0.24rem;
      width: 20vw;
      height: 8vw;
      line-height: 8vw;
      text-align: center;
      margin-top: 3vw;
    }
  }

  .box {
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list {
      margin-top: 5vw;
      img {
        border: 1px solid #f5f5f5;
        width: 43.5vw;
        height: 43.5vw;
      }
      .title {
        width: 38vw;
        font-size: 0.28rem;
        color: #8e8f92;
        word-wrap: break-word;
        word-break: normal;
        line-height: 6vw;
      }

      .price {
        height: 10vw;
        font-size: 0.3rem;
        margin-top: 2vw;
        span {
          &:nth-child(1) {
            font-size: 0.48rem;
            color: #f63c30;
            margin-right: 1vw;
          }
          &:nth-child(2) {
            font-size: 0.24rem;
            color: #b7b7b9;
          }
        }
      }
    }
  }
}
</style>
