<template>
  <div id="MyQuestions" class="Header_no_open">
    <headline title="我的提问" />
    <div class="box">
      <van-tabs
        v-model="active"
        @click="onClick"
        sticky
        animated
        swipeable
        :type="type"
      >
        <van-tab title="未受理">
          <div class="tab_box">
            <div
              class="content list_text"
              v-if="arr1.length != 0"
              @click="goAskDetails"
            >
              <div class="list" v-for="(item, index) in 10" :key="index">
                <div>江苏长江、太湖地区防汛应急响应降至III级</div>
                <div>1小时前</div>
              </div>
            </div>
            <div class="without" v-else>
              <img src="../../../static/images/without.png" alt="" />
              <div>暂无内容</div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已受理"
          ><div class="tab_box">
            <div
              class="content list_text"
              v-if="arr2.length != 0"
              @click="goAskDetails"
            >
              <div class="list" v-for="(item, index) in 10" :key="index">
                <div>江苏长江、太湖地区防汛应急响应降至III级</div>
                <div>1小时前</div>
              </div>
            </div>
            <div class="without" v-else>
              <img src="../../../static/images/without.png" alt="" />
              <div>暂无内容</div>
            </div>
          </div></van-tab
        >
        <van-tab title="已回复">
          <div
            class="content list_text"
            v-if="arr3.length != 0"
            @click="goAskDetails"
          >
            <div class="list" v-for="(item, index) in 10" :key="index">
              <div>江苏长江、太湖地区防汛应急响应降至III级</div>
              <div>1小时前</div>
            </div>
          </div>
          <div class="tab_box" v-else>
            <div class="without">
              <img src="../../../static/images/without.png" alt="" />
              <div>暂无内容</div>
            </div>
          </div></van-tab
        >
      </van-tabs>
    </div>
    <div class="button_yes button_" @click="goAskSelectLeadership">提问</div>
    <!-- <div class="button_no button_">提问</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "MyQuestions",
  components: {
    headline,
  },
  props: {},
  data() {
    return {
      type: "line",
      active: 0,
      arr1: [{}],
      arr2: [],
      arr3: [],
    };
  },
  created() {},
  mounted() {
    // 判断当前是否为夜晚模式 是的话type的值为  card 不是的话为  line
    if (document.getElementById("app").className == "this_dark") {
      this.type = "card";
    } else {
      this.type = "line";
    }
  },
  activated() {},
  update() {},
  methods: {
    onClick() {},
    goAskSelectLeadership() {
      this.$router.push("/AskSelectLeadership");
    },
    goAskDetails() {
      this.$router.push("/AskDetails");
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#MyQuestions {
  // background-color: #ffffff;
  .box {
    padding-top: 15vw;
    /deep/.van-sticky--fixed {
      top: 10vw;
    }
    .tab_box {
      border-top: 1px solid #f1f1f1;
      .without {
        margin-top: 22vw;
        text-align: center;
        padding-bottom: 55vw;
        img {
          width: 60vw;
          height: 50vw;
        }
        div {
          color: #717171;
          font-size: 0.32rem;
          margin-top: 2vw;
        }
      }
      .content {
        .list {
          padding: 4vw;
          padding-bottom: 0;
          div {
            font-size: 0.36rem;
            &:nth-child(1) {
              font-size: 0.36rem;
              // color: #1f1f1f;
            }

            &:nth-child(2) {
              margin-top: 4vw;
              font-size: 0.24rem;
              color: #9c9c9c;
              border-bottom: 1px solid #f9f9f9;
              padding-bottom: 4vw;
            }
          }
        }
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
