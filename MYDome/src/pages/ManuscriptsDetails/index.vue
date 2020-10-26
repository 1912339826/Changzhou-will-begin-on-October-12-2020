<template>
  <div id="ManuscriptsDetails" class="Header_no_open">
    <headline title="我要提问" :more="true" />
    <div class="title">{{ title }}</div>
    <div class="szjjwx">
      <div class="left">
        <div><img :src="media_account.data.avatar" alt="" /></div>
        <div class="name">
          <div>{{ media_account.data.title }}</div>
          <div class="subText_text">{{ published_at }}</div>
        </div>
      </div>
      <div class="right_no right" v-if="!show">关注</div>
      <div class="right_yes right subText_text" v-else>已关注</div>
    </div>

    <div class="section">
      <!-- <p v-html="html"></p> -->
    </div>

    <div class="share">
      <img src="../../../static/images/weixin.png" alt="" />
      <img src="../../../static/images/QQ.png" alt="" />
      <img src="../../../static/images/weibo.png" alt="" />
    </div>

    <div class="applaud applaud_no" v-if="!applaud">
      <img src="../../../static/images/applaud_no.png" alt="" />
      <div class="subText_text">{{like_count}}</div>
    </div>
    <div class="applaud applaud_yes" v-else>
      <img src="../../../static/images/applaud_yes.png" alt="" />
      <div>{{like_count}}</div>
    </div>

    <div style="height: 6px; opacity: 1" class="subText"></div>
    <div class="recommend">
      <nav>相关推荐</nav>
      <template v-if="recommend_arr.length != 0">
        <div
          class="list"
          v-for="item in recommend_arr"
          :key="item.hash_id"
          @click="go(item.hash_id)"
        >
          <div class="left">
            <p>{{ item.title }}</p>
            <p class="subText_text">{{ item.source }}</p>
          </div>
          <div class="right">
            <img :src="item.thumbnails[0].src" alt="" />
          </div>
        </div>
      </template>
    </div>
    <div style="height: 6px; opacity: 1" class="subText"></div>
    <div class="hot_comments">
      <nav>热门评论</nav>
      <section v-if="comments">
        <div class="list" v-for="(item, index) in 3" :key="index">
          <img src="../../../static/images/header.png" alt="" class="header" />
          <div class="right">
            <div class="name">
              <div class="name_left">
                <p>为人名服务</p>
              </div>
              <div class="name_right">
                <span class="subText_text">44</span>
                <img src="../../../static/images/applaud_no.png" alt="" />
              </div>
            </div>
            <p class="date subText_text">44分钟前</p>
            <div class="reply">
              <span class="">回复</span
              ><span class="subText_text"
                >习近平指出，全球抗击新冠肺炎疫习近平指出，全球抗击新冠肺炎疫</span
              >
            </div>
            <p class="content">习近平指出，全球抗击新冠肺炎疫情的实践</p>
          </div>
        </div>
      </section>
      <div class="without" v-else>
        <img src="../../../static/images/without.png" alt="" />
      </div>
    </div>
    <div class="latest_comments" v-if="comments">
      <nav>最新评论</nav>
      <section>
        <div class="list" v-for="(item, index) in 3" :key="index">
          <img src="../../../static/images/header.png" alt="" class="header" />
          <div class="right">
            <div class="name">
              <div class="name_left">
                <p>为人名服务</p>
              </div>
              <div class="name_right">
                <span class="subText_text">44</span>
                <img src="../../../static/images/applaud_yes.png" alt="" />
              </div>
            </div>
            <p class="date subText_text">44分钟前</p>
            <!-- <div class="reply">
              <span class="">回复</span
              ><span class="subText_text"
                >习近平指出，全球抗击新冠肺炎疫习近平指出，全球抗击新冠肺炎疫</span
              >
            </div> -->
            <p class="content">习近平指出，全球抗击新冠肺炎疫情的实践</p>
          </div>
        </div>
      </section>
    </div>
    <div class="bottom">
      <!-- <input type="text" placeholder="说两句..." /> -->
      <van-field v-model="value" label="" placeholder="说两句..." />
      <img src="../../../static/images/top.png" alt="" />
      <img src="../../../static/images/collect_no.png" alt="" />
      <img src="../../../static/images/share.png" alt="" />
    </div>
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "ManuscriptsDetails",
  components: {
    headline,
  },
  props: {},
  data() {
    return {
      like_count: 0,
      show: true,
      applaud: true,
      comments: true,
      value: "",
      html: "",
      title: "",
      published_at: "一分钟前",
      media_account: {
        data: {
          avatar: "",
          title: "",
        },
      },
      recommend_arr: [],
    };
  },
  created() {
    // this.recommend_accounts()
    this.post_api();
    this.related_post();
  },
  mounted() {},
  activated() {},
  update() {},
  methods: {
    async post_api() {
      let res = await this.$req(window.api.post_api + "96lx83zx7o4ykw5m", {});
      console.log(res.data.data);
      let content = res.data.data;
      this.title = content.title;
      this.html = content.content;
      this.published_at = content.published_at;
      //   有关媒体的信息
      this.media_account = content.media_account;
      this.like_count = content.like_count
    },
    // 常州号 - 文稿详情 - 相关推荐
    async related_post() {
      let res = await this.$req(
        window.api.related_post + "96lx83zx7o4ykw5m/related",
        {}
      );
      this.recommend_arr = res.data.data;
    },
    async recommend_accounts() {
      let res = await this.$req(window.api.recommend_accounts, {});
      console.log(res);
    },
    // 点击相关推荐
    go(id) {
      console.log(id);
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#ManuscriptsDetails {
  .title {
    padding-top: 15vw;
    font-size: 0.44rem;
    padding-left: 4vw;
    padding-right: 4vw;
    line-height: 8vw;
    font-weight: 600;
    text-align: justify;
  }

  .szjjwx {
    padding-left: 4vw;
    padding-right: 4vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 9.87vw;
        height: 9.87vw;
        margin-right: 2vw;
      }
      .name {
        div {
          &:nth-child(1) {
            font-size: 0.26rem;
          }

          &:nth-child(2) {
            font-size: 0.24rem;
          }
        }
      }
    }
    .right {
      font-size: 0.3rem;
      width: 19.45vw;
      height: 8vw;
      line-height: 8vw;
      text-align: center;
      border-radius: 10vw;
    }
    .right_no {
      border: 1px solid #000000;
    }

    .right_yes {
      border: 1px solid #c1c0c1;
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

  .applaud {
    margin: 0 auto;
    width: 38.1vw;
    height: 12.27vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.34rem;
    img {
      width: 5.625vw;
      height: 5.1vw;
      margin-right: 2vw;
    }
    border-radius: 10vw;
    margin-bottom: 10vw;
  }

  .applaud_no {
    border: 1px solid #c1c0c1;
  }

  .applaud_yes {
    border: 1px solid #f04040;
    color: #f04040;
  }

  .recommend {
    padding: 4vw;

    nav {
      font-size: 0.32rem;
      margin-bottom: 5vw;
      font-weight: 600;
    }
    .list {
      margin-bottom: 5vw;
      height: 28vw;
      border-bottom: 1px solid #f9f9f9;
      display: flex;
      justify-content: space-between;
      img {
        width: 30.13vw;
        height: 22.67vw;
      }
      .left {
        p {
          &:nth-child(1) {
            font-size: 0.36rem;
            line-height: 7vw;
          }

          &:nth-child(2) {
            margin-top: 4.2vw;
            font-size: 0.24rem;
          }
        }
      }
    }
  }

  .hot_comments,
  .latest_comments {
    nav {
      padding: 4vw;
      font-size: 0.32rem;
      font-weight: 600;
    }
    .without {
      text-align: center;
      margin: 0 auto;
      img {
        width: 60.5vw;
        height: 51.5vw;
      }
    }

    section {
      .list {
        &:last-child {
          border: none;
        }
        display: flex;
        padding: 4vw;
        border-bottom: 1px solid #c1c0c1;
        .header {
          height: 12vw;
          width: 12vw;
          border: 1px solid #c1c0c1;
          border-radius: 50%;
          margin-right: 3.8vw;
        }
        .right {
          margin-top: 3vw;
          width: 75vw;
          .name {
            display: flex;
            justify-content: space-between;
            .name_left {
              p {
                font-size: 0.3rem;
              }
            }

            .name_right {
              display: flex;
              align-items: center;
              span {
                font-size: 0.24rem;
                margin-right: 1vw;
              }
              img {
                width: 4.44vw;
                height: 4vw;
              }
            }
          }

          .date {
            margin-top: 1vw;
            font-size: 0.2rem;
          }

          .reply {
            margin-top: 2vw;
            font-size: 0.3rem;
            display: flex;
            align-items: center;
            span {
              &:nth-child(1) {
                color: #f04040;
                margin-right: 2vw;
              }

              &:nth-child(2) {
                display: inline-block;
                width: 65vw;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
          }

          .content {
            margin-top: 2vw;
            line-height: 6vw;
            font-size: 0.3rem;
          }
        }
      }
    }
  }

  .section {
    margin-top: 5vw;
    // overflow: hidden;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 22vw;
    padding: 2vw 4vw 2vw 4vw;
    /deep/.van-cell.van-field {
      padding: 2vw;
      width: 54.7vw;
      height: 9.3vw;
      border: none;
      border-radius: 10vw;
      background-color: #f9f9f9;
      input {
        background-color: #f9f9f9;
      }
    }
    input::placeholder {
      font-size: 0.28rem;
    }
    img {
      width: 5.3vw;
      height: 5.3vw;
    }
  }
}
</style>
