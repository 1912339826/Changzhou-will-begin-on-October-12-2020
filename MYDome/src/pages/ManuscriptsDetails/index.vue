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
      <div
        class="right_no right"
        v-if="follow_state == 0"
        @click="subscription_media_account"
      >
        关注
      </div>
      <div
        class="right_yes right subText_text"
        v-if="follow_state == 1"
        @click="subscription_media_account"
      >
        已关注
      </div>
    </div>

    <div class="section">
      <p v-html="html"></p>
    </div>

    <div class="share" v-if="can_share == 1">
      <img src="../../../static/images/weixin.png" alt="" />
      <img src="../../../static/images/QQ.png" alt="" />
      <img src="../../../static/images/weibo.png" alt="" />
    </div>

    <template v-if="can_like == 1">
      <div
        class="applaud applaud_no"
        v-if="reader_status.like_status == 0"
        @click="like_post"
      >
        <img src="../../../static/images/applaud_no.png" alt="" />
        <div class="subText_text">{{ like_count }}</div>
      </div>
      <div class="applaud applaud_yes" v-else @click="like_post">
        <img src="../../../static/images/applaud_yes.png" alt="" />
        <div>{{ like_count }}</div>
      </div>
    </template>

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
        <div
          class="list"
          v-for="(item, index) in comments_arr.slice(0, 4)"
          :key="index"
        >
          <img :src="item.avatar" alt="" class="header" />
          <div class="right">
            <div class="name">
              <div class="name_left">
                <p>{{ item.user_display_name }}</p>
              </div>
              <div class="name_right">
                <span class="subText_text">{{ item.like_count }}</span>
                <img
                  src="../../../static/images/applaud_yes.png"
                  alt=""
                  @click="comments_lick(item.id, index)"
                  v-if="item.reader_status.like_status == 1"
                />
                <img
                  src="../../../static/images/applaud_no.png"
                  alt=""
                  @click="comments_lick(item.id, index)"
                  v-if="item.reader_status.like_status == 0"
                />
              </div>
            </div>
            <p class="date subText_text">{{ item.created_at }}</p>
            <!-- <div class="reply" v-if="item.commented_comments.data.length != 0">
              <span class="">回复</span
              ><span class="subText_text">{{
                item.commented_comments.data[0].content
              }}</span>
            </div> -->
            <p class="content">
              {{ item.content }}
            </p>
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
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
          <div class="list" v-for="(item, index) in comments_arr" :key="index">
            <img :src="item.avatar" alt="" class="header" />
            <div class="right">
              <div class="name">
                <div class="name_left">
                  <p>{{ item.user_display_name }}</p>
                </div>
                <div class="name_right">
                  <span class="subText_text">{{ item.like_count }}</span>
                  <img
                    src="../../../static/images/applaud_yes.png"
                    alt=""
                    @click="comments_lick(item.id, index)"
                    v-if="item.reader_status.like_status == 1"
                  />
                  <img
                    src="../../../static/images/applaud_no.png"
                    alt=""
                    @click="comments_lick(item.id, index)"
                    v-if="item.reader_status.like_status == 0"
                  />
                </div>
              </div>
              <p class="date subText_text">{{ item.created_at }}</p>
              <!-- <div
                class="reply"
                v-if="item.commented_comments.data.length != 0"
              >
                <span class="">回复</span
                ><span class="subText_text">{{
                  item.commented_comments.data[0].content
                }}</span>
              </div> -->
              <p class="content">
                {{ item.content }}
              </p>
            </div>
          </div>
        </van-list>
      </section>
    </div>
    <div class="bottom">
      <!-- <input type="text" placeholder="说两句..." /> -->
      <van-field v-model="value" label="" placeholder="说两句..." />
      <img
        src="../../../static/images/top_this_daily.png"
        alt=""
        v-if="theme == 'this_daily'"
        @click="go_top"
      />
      <img
        src="../../../static/images/top_this_dark.png"
        alt=""
        v-if="theme == 'this_dark'"
        @click="go_top"
      />
      <template v-if="can_comment == 1">
        <img
          src="../../../static/images/collect_yes.png"
          alt=""
          @click="collection_post"
          v-if="reader_status.collect_status == 1"
        />
        <img
          src="../../../static/images/collect_no_this_daily.png"
          alt=""
          @click="collection_post"
          v-if="reader_status.collect_status == 0 && theme == 'this_daily'"
        />

        <img
          src="../../../static/images/collect_no_this_dark.png"
          alt=""
          @click="collection_post"
          v-if="reader_status.collect_status == 0 && theme == 'this_dark'"
        />
      </template>

      <img
        src="../../../static/images/share_this_daily.png"
        alt=""
        v-if="can_share == 1 && theme == 'this_daily'"
      />

      <img
        src="../../../static/images/share_this_dark.png"
        alt=""
        v-if="can_share == 1 && theme == 'this_dark'"
      />
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
      loading: false,
      finished: false,
      // 评论总页数
      total_pages: 1,
      // 评论总数据量
      total: 1,
      // 评论当前页
      current_page: 1,
      // 关注状态
      follow_state: 0,
      view_count: 0,
      theme: "",
      can_comment: 1,
      can_like: 1,
      can_share: 1,
      like_count: 0,
      applaud: false,
      comments: true,
      comments_arr: [],
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
      reader_status: {
        collect_status: 0,
        like_status: 0,
      },
    };
  },
  created() {
    // 常州号 - 文稿详情
    this.post_api();
    // 常州号 - 文稿详情 - 相关推荐
    this.related_post();

    // 获取当前主题模式（白天或黑夜）
    this.theme = window.localStorage.getItem("theme");
  },
  mounted() {
    // https://www.cnblogs.com/yy136/p/9782725.html
    window["comments_post_refresh"] = (data) => {
      this.comments_post_refresh()
    };
    // window.comments_post_refresh()
  },
  activated() {},
  update() {},
  methods: {
    // 刷新评论列表
    comments_post_refresh() {
      this.comments_arr = [];
      this.current_page = 1;
      this.comments_post();
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // 常州号 - 文稿详情 - 评论列表
        this.comments_post();
        console.log(this.comments_arr.length >= this.total_pages);
      }, 1000);
    },
    go_top() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    // 常州号 - 文稿详情
    async post_api() {
      window.localStorage.setItem("action", false);
      let res = await this.$req(window.api.post_api + "2vx0p9256e7ydjwz", {});
      let content = res.data.data;
      this.title = content.title;
      this.html = content.content;
      this.published_at = content.published_at;
      //   有关媒体的信息
      this.media_account = content.media_account;
      this.follow_state = content.media_account.data.follow_state;
      this.like_count = content.like_count;
      this.reader_status = content.reader_status;
      this.can_comment = content.can_comment;
      this.can_like = content.can_like;
      this.can_share = content.can_share;
      // 阅读量
      this.view_count = content.view_count;
    },
    // 常州号 - 文稿详情 - 点赞
    async like_post() {
      window.localStorage.setItem("action", true);
      let res = await this.$req(
        window.api.like_post + "2vx0p9256e7ydjwz/like",
        {}
      );
      if (!!this.reader_status.like_status) {
        this.like_count = this.like_count - 1;
        this.reader_status.like_status = 0;
      } else {
        this.like_count = this.like_count + 1;
        this.reader_status.like_status = 1;
      }
    },
    // 评论点赞
    async comments_lick(comments_id, index) {
      window.localStorage.setItem("action", true);
      let res = await this.$req(
        window.api.like_comment + comments_id + "/like",
        {}
      );
      if (this.comments_arr[index].reader_status.like_status == 0) {
        this.comments_arr[index].reader_status.like_status = 1;
        this.comments_arr[index].like_count++;
      } else {
        this.comments_arr[index].reader_status.like_status = 0;
        this.comments_arr[index].like_count--;
      }
    },
    // 常州号 - 文稿详情 - 相关推荐
    async related_post() {
      window.localStorage.setItem("action", false);
      let res = await this.$req(
        window.api.related_post + "2vx0p9256e7ydjwz/related",
        {}
      );
      this.recommend_arr = res.data.data;
    },
    // 常州号 - 文稿详情 - 收藏
    async collection_post() {
      window.localStorage.setItem("action", true);
      let res = await this.$req(
        window.api.collection_post + "2vx0p9256e7ydjwz/collection",
        {}
      );
      if (!!this.reader_status.collect_status) {
        this.reader_status.collect_status = 0;
      } else {
        this.reader_status.collect_status = 1;
      }
    },
    // 常州号 - 文稿详情 - 评论列表
    async comments_post() {
      window.localStorage.setItem("action", false);
      let box_barr = [];
      let current_page = this.current_page + 1;
      let res = await this.$req(
        window.api.comments_post + "2vx0p9256e7ydjwz/comments",
        {
          page: current_page,
        }
      );
      this.total_pages = res.data.meta.pagination.total_pages;
      this.total = res.data.meta.pagination.total;
      console.log(res.data.data);
      box_barr = this.comments_arr.concat(res.data.data);
      this.comments_arr = box_barr;
      if (this.comments_arr.length == 0) {
        this.comments = false;
      } else {
        this.comments = true;
      }

      // 数据全部加载完成
      if (this.comments_arr.length >= this.total) {
        this.finished = true;
      }
      // 加载状态结束
      this.loading = false;
      console.log(this.comments_arr);
    },
    // // 评论表单基础参数(发表评论前，获取ca_nonce)
    // async options_comment(can, id) {
    //   let res = await this.$req(window.api.options_comment, {});
    //   window.localStorage.setItem("ca_nonce", res.data.data.ca_nonce);
    //   // 评论文章
    //   this.comment_post(can, id);
    // },
    // // 常州号 - 文稿详情 - 评论
    // async comment_post(can, id) {
    //   if (can == 1) {
    //     let res = await this.$req(window.api.comment_post + id + "/comment", {
    //       content: "6666",
    //     });
    //   }
    // },
    // 常州号 - 关注操作
    async subscription_media_account() {
      window.localStorage.setItem("action", true);
      let id = this.media_account.data.hash_id;
      let res = await this.$req(
        window.api.subscription_media_account + id + "/subscription",
        {}
      );
      if (this.follow_state == 0) {
        this.follow_state = 1;
        this.media_account.data.follow_state = 1;
      } else {
        this.follow_state = 0;
        this.media_account.data.follow_state = 0;
      }
    },
    //  常州号 - 推荐关注 测试用.....
    async recommend_accounts() {
      let res = await this.$req(window.api.recommend_accounts, {});
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
