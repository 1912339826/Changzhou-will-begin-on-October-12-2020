<template>
  <div id="write" class="Header_no_open">
    <headline title="我要提问" />
    <div class="procedure">
      <span>选择领导</span>
      <span>
        <img src="../../../static/images/right.png" alt="" />
      </span>
      <span class="active">撰写问题</span>
      <span>
        <img src="../../../static/images/right.png" alt="" />
      </span>
      <span>提交</span>
    </div>
    <div class="textarea_one">
      <van-field
        v-model="message"
        rows="1"
        autosize
        label=""
        type="textarea"
        maxlength="20"
        placeholder="简单描述明的问题标题"
        show-word-limit
      />
    </div>

    <div style="height: 6px; opacity: 1" class="Header_no_open"></div>
    <div class="textarea_two">
      <van-field
        v-model="message"
        rows="1"
        autosize
        label=""
        type="textarea"
        maxlength="1000"
        placeholder="您可以用最少20字、最多1000字，尽量详细
描述您的问题，以方便相关部门更快核实和解
决问题。"
        show-word-limit
      />
    </div>
    <div class="uploader">
      <van-uploader
        :after-read="afterRead"
        ref="uploader"
        style="display: none"
      />
      <img
        src="../../../static/images/uploader.png"
        alt=""
        @click="uploader_click"
      />
    </div>
    <div class="message">上传图片，支持jpg、bmg、png格式</div>
    <div class="button_yes button_" @click="submit">提交</div>
    <!-- <div class="button_no button_">提交</div> -->
  </div>
</template>

<script>
import headline from "../../components/headline";
import { Toast } from "vant";
export default {
  name: "write",
  components: {
    headline,
    Toast,
  },
  props: {},
  data() {
    return {
      change: "常州市委书记齐家滨",
      message: "",
    };
  },
  created() {},
  mounted() {},
  activated() {},
  update() {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    uploader_click() {
      // this.$refs.uploader
      console.log(this.$refs.uploader);
      //   点击图片触发上传方法
      this.$refs.uploader.chooseFile();
    },
    submit() {
      // 清除之前留下的残余
      Toast.clear();
      setTimeout(() => {
        //   先创建Toast，然后才能更改样式，异步处理
        console.log(
          (document.getElementsByClassName(
            "van-toast--success"
          )[0].style.width = "55vw")
        );
      }, 0);

      Toast.success("提交成功\n请到“我的”-“问政提问”中查看进度");

      setTimeout(() => {
         Toast.clear();
         this.$router.push("/MyQuestions")
      }, 1000);
    },
  },
  filters: {},
  computed: {},
  watch: {},
};
</script>

<style lang="less" scoped>
#write {
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

  .textarea_one {
    margin-top: 5vw;
  }

  .textarea_two {
    margin-top: 3vw;
    border-bottom: 1px solid #f0f0f0;
    margin-right: 4vw;
    margin-left: 4vw;
    .van-cell.van-field {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .uploader {
    padding-left: 4vw;
    padding-right: 4vw;
    margin-top: 3vw;
    /deep/.van-uploader__upload {
      width: 30vw;
      height: 30vw;
    }
    img {
      width: 30vw;
      height: 30vw;
    }
  }
  .message {
    color: #959595;
    font-size: 0.24rem;
    padding-left: 4vw;
  }
}
</style>
