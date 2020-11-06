<template>
  <div id="productDetails" class="Header_no_open">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="integral_number">
      <span>{{ datas.price }}</span>
      <span>积分</span>
    </div>
    <div class="titile">
      {{ datas.product_name }}
    </div>
    <section>
      <div class="lists">
        <nav>购买须知</nav>
        <p>
          {{ datas.product_remark }}
        </p>
      </div>
      <div class="lists">
        <nav>兑换规则</nav>
        <p>
          {{ datas.product_remark2 }}
        </p>
      </div>
      <div class="lists">
        <nav>兑换规则</nav>
        <p>
          {{ datas.product_remark3 }}
        </p>
      </div>
    </section>
    <div class="button_no button_" v-if="Goodbuycheck == '积分不足'">
      积分不足
    </div>
    <div class="button_yes button_" v-else @click="gonotarize">积分兑换</div>
  </div>
</template>
<script>
export default {
  name: "productDetails",
  created() {
    this.getAppGooddetail();
    this.getAppGoodbuycheck();
  },
  data() {
    return {
      datas: {},
      Goodbuycheck: "",
    };
  },
  mounted() {},
  methods: {
    gonotarize() {
      this.$router.push("/notarize");
    },
    async getAppGooddetail() {
      let res = await this.$req(window.api.getAppGooddetail, {
        id: 1,
      });
      console.log(res.data.data.data);
      this.datas = res.data.data.data;
    },
    async getAppGoodbuycheck() {
      let res = await this.$req(window.api.getAppGoodbuycheck, {
        id: 1,
      });
      console.log(res.data.data.data);
      this.Goodbuycheck = res.data.data.data;
    },
  },
};
</script>
<style lang="less" scoped>
#productDetails {
  width: 100%;
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

.button_no {
  color: #fdc6be;
  background-color: #f96954;
}

.button_yes {
  color: #ffffff;
  background-color: #f84e35;
}

section {
  // background-color: #f1eff2;
  padding-top: 5vw;
  padding-bottom: 11vw;
  .lists {
    margin-bottom: 5vw;
    padding-top: 4vw;
  }
  div {
    // background-color: #ffffff;
    padding-left: 4vw;
    padding-right: 4vw;
  }
  nav {
    font-size: 0.28rem;
    font-weight: 600;
  }
  p {
    font-size: 0.24rem;
    margin-top: 2vw;
    line-height: 7vw;
    color: #777577;
  }
}

.my-swipe .van-swipe-item {
  color: #000000;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #ffffff;
}

.integral_number {
  margin-left: 4vw;
  margin-right: 4vw;
  padding-top: 7vw;
  padding-bottom: 2vw;
  // background-color: #ffffff;
  border-bottom: 1px solid #f6f3f7;
}

.integral_number > span {
  &:nth-child(1) {
    font-size: 0.6rem;
    color: #cd1210;
  }

  &:nth-child(2) {
    font-size: 0.2rem;
    color: #9d9b9c;
  }
}

.titile {
  // background-color: #ffffff;
  padding-top: 7vw;
  padding-left: 4vw;
  padding-right: 4vw;
  line-height: 7vw;
  height: 20vw;
  font-size: 0.28rem;
  font-weight: 600;
}
</style>