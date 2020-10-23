import Vue from 'vue'
import Router from 'vue-router'
// 商品详情
import productDetails from '@/pages/productDetails/index.vue'
// 确认兑换
import notarize from '@/pages/notarize/index.vue'
// 订单完成
import perfective from '@/pages/perfective/index.vue'
// 积分商城记录
import ScoreMallRecord from '@/pages/ScoreMallRecord/index.vue'
// 积分商城
import ScoreMall from '@/pages/ScoreMall/index.vue'
// 意见反馈
import Feedback from '@/pages/Feedback/index.vue'
// 问政
// 选择领导
import AskSelectLeadership from '@/pages/AskSelectLeadership/index.vue'
// 选择问题领域
import AskSelectDomain from '@/pages/AskSelectDomain/index.vue'
// 撰写问题
import write from '@/pages/write/index.vue'
// 提问详情
import AskDetails from '@/pages/AskDetails/index.vue'
// 我的提问
import MyQuestions from '@/pages/MyQuestions/index.vue'
// 我的等级
import MyGrades from '@/pages/MyGrades/index.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'ScoreMall',
      component: ScoreMall
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: productDetails
    },
    {
      path: '/notarize',
      name: 'notarize',
      component: notarize
    },
    {
      path: '/ScoreMallRecord',
      name: 'ScoreMallRecord',
      component: ScoreMallRecord
    },
    {
      path: '/perfective',
      name: 'perfective',
      component: perfective
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
    },
    {
      path: '/AskSelectLeadership',
      name: 'AskSelectLeadership',
      component: AskSelectLeadership
    },
    {
      path: '/AskSelectDomain',
      name: 'AskSelectDomain',
      component: AskSelectDomain
    },
    {
      path: '/write',
      name: 'write',
      component: write
    },
    {
      path: '/AskDetails',
      name: 'AskDetails',
      component: AskDetails
    },
    {
      path: '/MyQuestions',
      name: 'MyQuestions',
      component: MyQuestions
    },
    {
      path: '/MyGrades',
      name: 'MyGrades',
      component: MyGrades
    }
  ]
})
