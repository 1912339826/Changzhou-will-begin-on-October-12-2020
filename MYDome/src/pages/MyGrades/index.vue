<template>
  <div id="MyGrades" class="Header_no_open">
    <headline
      title="我的等级"
      bg_color="background-color: #F04040;color:#ffffff"
    />
    <div class="box">
      <div class="MyGrades">
        <img src="../../../static/images/1.png" alt="" />
        <p>当前等级LV2</p>
      </div>
      <div class="progress_bar">
        <van-progress pivot-text="110" color="#F04040" :percentage="25" />
        <div class="progress_bar_text">
          <div  class="list_text">今日获得成长值：</div>
          <div>升级还需90成长值</div>
        </div>
      </div>
      <div class="daily_task">
        <nav class="list_text">每日任务</nav>
      </div>
      <div class="task_list">
        <div class="son">
          <div class="left">
            <img src="../../../static/images/task_list_icon_03.png" alt="" />
            <div>打开客户端</div>
          </div>
          <div class="right">+10(1/1次)</div>
        </div>
      </div>
      <div class="adorn subText"></div>
      <div class="growth_value">
        <nav class="list_text">如何获得成长值？</nav>
        <p>
          成长值是用户通过在看常州新闻客户端连续登录行为所获得的，每打开客户端+10成长值，累积的成长值决定了用户的等级及对应的称号。更多成长玩法即将到来。
        </p>
      </div>
      <div class="adorn subText"></div>
      <div class="relation">
        <nav class="list_text">等级与成长值的关系</nav>
        <div class="table">
          <table border="1">
            <tr>
              <th>成长值</th>
              <th>等级</th>
              <th>称号</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Lv1</td>
              <td rowspan="2">
                <img src="../../../static/images/1.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>120</td>
              <td>Lv2</td>
            </tr>

            <tr>
              <td>200</td>
              <td>Lv3</td>
              <td rowspan="2">
                <img src="../../../static/images/2.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>400</td>
              <td>Lv4</td>
            </tr>

            <tr>
              <td>800</td>
              <td>Lv5</td>
              <td rowspan="2">
                <img src="../../../static/images/3.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>1200</td>
              <td>Lv6</td>
            </tr>

            <tr>
              <td>1600</td>
              <td>Lv7</td>
              <td rowspan="2">
                <img src="../../../static/images/4.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>1800</td>
              <td>Lv8</td>
            </tr>

            <tr>
              <td>2200</td>
              <td>Lv9</td>
              <td rowspan="2">
                <img src="../../../static/images/5.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>2400</td>
              <td>Lv10</td>
            </tr>

            <tr>
              <td>3200</td>
              <td>Lv11</td>
              <td rowspan="2">
                <img src="../../../static/images/6.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>3400</td>
              <td>Lv12</td>
            </tr>

            <tr>
              <td>3800</td>
              <td>Lv13</td>
              <td rowspan="2">
                <img src="../../../static/images/7.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>4000</td>
              <td>Lv14</td>
            </tr>

            <tr>
              <td>4400</td>
              <td>Lv15</td>
              <td rowspan="2">
                <img src="../../../static/images/8.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>4800</td>
              <td>Lv16</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headline from "../../components/headline";
export default {
  name: "MyGrades",
  components: {
    headline,
  },
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
#MyGrades {
  .adorn {
    height: 2.5vw;
  }
  .box {
    padding-top: calc(10vw - 1px);
    .MyGrades {
      background-color: #f04040;
      height: 55.33vw;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      img {
        width: 13.33vw;
        height: 14.33vw;
        margin-bottom: 2vw;
      }
      p {
        text-align: center;
        color: #ffffff;
        font-size: 0.28rem;
      }
    }
    .progress_bar {
      padding-left: 4vw;
      padding-right: 4vw;
      margin-top: 5vw;
      .progress_bar_text {
        font-size: 0.24rem;
        display: flex;
        justify-content: space-between;
        margin-top: 5vw;
        div {
          &:nth-child(2) {
            color: #9c9c9c;
          }
        }
      }
    }

    .daily_task {
      margin-top: 10vw;
      nav {
        height: 10vw;
        line-height: 9vw;
        font-size: 0.32rem;
        padding-left: 4vw;
        padding-right: 4vw;
        border-bottom: 1px solid #eeeeee;
      }
    }

    .task_list {
      padding-left: 4vw;
      padding-right: 4vw;
      font-size: 0.28rem;
      .son {
        height: 10vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          display: flex;
          img {
            width: 3.5vw;
            height: 3.5vw;
            margin-right: 3vw;
          }
        }
        .right {
          color: #f04040;
        }
      }
    }
    .growth_value {
      padding: 4vw;
      nav {
        font-size: 0.32rem;
        height: 10vw;
        line-height: 9vw;
      }
      p {
        color: #9c9c9c;
        font-size: 0.28rem;
        text-align: justify;
      }
      padding-top: 2vw;
    }

    .relation {
      padding: 4vw;
      nav {
        font-size: 0.32rem;
        height: 10vw;
        line-height: 9vw;
      }
      padding-top: 2vw;
      table {
        background-color: #f6f6f6;
        border-collapse: collapse;
        border-color: #e8e8e8;
        width: 100%;
        font-size: 0.28rem;
        text-align: center;
        tr {
          height: 9.6vw;
        }
        th {
          color: #9c9c9c;
        }
        td {
          color: #1f1f1f;
        }
        img {
          width: 12vw;
          height: 12.5vw;
        }
      }
    }
  }
}
</style>
// 常州号详情 看常州详情
