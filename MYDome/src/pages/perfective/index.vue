<template>
  <div id="perfective" class="Header_no_open">
    <headline title="订单完成" />
    <div class="box">
      <div class="content">
        <img
          src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3392888803,907475590&fm=26&gp=0.jpg"
          alt=""
        />
        <div class="right">
          <p>
            {{ datas.product_name }}
          </p>
          <div class="stepper">
            <van-stepper theme="round" v-model="value" />
          </div>
        </div>
      </div>
      <div class="start"><span>订单状态</span><span>已支付</span></div>
      <template v-if="way">
        <div class="title">收货人信息</div>
        <div class="list_ list">
          <span>收货人</span
          ><span>
            <input type="text" placeholder="收货人姓名" v-model="name" />
          </span>
        </div>
        <div class="list_ list">
          <span>手机号</span
          ><span
            ><input type="tel" placeholder="收货人手机号" v-model="phone"
          /></span>
        </div>
        <div class="list_ list">
          <span>地址</span
          ><span><input type="text" placeholder="地址" v-model="addr" /></span>
        </div>
      </template>

      <template v-else>
        <div class="title">自取信息</div>
        <div class="list">
          <span>联系方式</span><span>{{ phone }}</span>
        </div>
        <div class="list">
          <span>换取地址</span><span>{{ addr }}</span>
        </div>
        <div class="list">
          <span>备注信息</span><span>{{ order_remark }}</span>
        </div>
      </template>
    </div>
    <div class="button_yes button_" @click="goperfective">继续兑换</div>
    <!-- <div class="button_no button_">积分不足</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "perfective",
  components: {
    headline,
  },
  props: {},
  data() {
    return {
      value: 1,
      way: true,
      datas: {},
      name: "",
      phone: "",
      addr: "",
      order_remark: "",
    };
  },
  created() {
    // 获取商品详情
    this.getAppGooddetail();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    goperfective() {
      if (this.name == "") {
        Toast.fail("收货人不能为空");
        return;
      }
      if (this.phone == "") {
        Toast.fail("手机号不能为空");
        return;
      }
      if (this.addr == "") {
        Toast.fail("地址不能为空");
        return;
      }
      this.getAppApporder();
    },
    async getAppGooddetail() {
      let res = await this.$req(window.api.getAppGooddetail, {
        id: 1,
      });
      console.log(res.data.data.data);
      this.datas = res.data.data.data;
    },
    // 商品兑换
    async getAppApporder() {
      let res = await this.$req(window.api.getAppApporder, {
        id: 1,
        num: 1,
        phone: this.phone,
        addr: this.addr,
        order_remark: "",
      });
      console.log();
      if (res.data.status == "success") {
        this.$router.push("/perfective");
      }
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#perfective {
  height: 100vh;
  .box {
    padding-top: 10vw;

    .content {
      margin-top: 10vw;
      padding-right: 4vw;
      padding-left: 4vw;
      display: flex;
      img {
        width: 20vw;
        height: 20vw;
        border: 1px solid #eeeeee;
        margin-right: 4vw;
      }
      .right {
        width: 70vw;
        p {
          word-break: break-all;
          font-size: 0.28rem;
          font-weight: 600;
          line-height: 6vw;
        }
        .stepper {
          margin-top: 2vw;
          display: flex;
          justify-content: flex-end;
        }
      }
    }

    .start {
      display: flex;
      margin-right: 4vw;
      margin-left: 4vw;
      border-top: 1px solid #f6f3f7;
      font-size: 0.32rem;
      color: #565456;
      justify-content: space-between;
      height: 7vw;
      line-height: 10vw;
      margin-top: 5vw;
      span {
        &:nth-child(2) {
          color: #f9522d;
        }
      }
    }

    .title {
      margin-top: 5vw;
      // background-color: #f1eff2;
      padding-left: 4vw;
      height: 13vw;
      line-height: 13vw;
      font-size: 0.28rem;
      font-weight: 600;
    }

    .list {
      border-bottom: 1px solid #f6f3f7;
      height: 15vw;
      margin-left: 4vw;
      margin-right: 4vw;
      display: flex;
      align-items: center;
      span {
        font-size: 0.32rem;
        color: #565456;
        &:nth-child(1) {
          display: inline-block;
          width: 20vw;
        }
        &:nth-child(2) {
          margin-left: 4vw;
        }
      }
    }

    .list_ {
      span {
        &:nth-child(2) {
          display: flex;
          input {
            height: 5vw;
            border: none;
          }
          input::placeholder {
            color: #c5c5c5;
          }
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
    font-size: 0.3rem;
  }
  .button_no {
    color: #fdc6be;
    background-color: #f96954;
  }
  .button_yes {
    color: #ffffff;
    background-color: #f84e35;
  }
}
</style>
