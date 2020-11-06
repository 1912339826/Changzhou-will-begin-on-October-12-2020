if (process.env.NODE_ENV == "development") {
  // 开发
  // var BASE_URLA = "http://127.0.0.1:4523";
  var BASE_URLA = "http://mp.netfishing.cn";
  var BASE_URLA_ = ""

} else if (process.env.NODE_ENV == "debug") {
  // debug
  var BASE_URLA = "http://192.168.0.151:8086";
} else if (process.env.NODE_ENV == "production") {
  // 生产
  var BASE_URLA = "http://llc.njqiahao.com/api";
  var BASE_URLA_ = "http://kan0519.cztv.tv"
}
window.BASE_URLA = BASE_URLA;
window.BASE_URLA_ = BASE_URLA_;
export default {
  // baseUrl: BASE_URLA,
  BASE_URLA,
  // 获取 Token 
  get_token: `${BASE_URLA}/api/test/get_token/1`,
  //  常州号 - 推荐关注 
  recommend_accounts: `${BASE_URLA}/api/timeline/recommend_accounts`,
  // 常州号 - 文稿详情
  post_api: `${BASE_URLA}/api/post/`,
  // 常州号 - 文稿详情 - 相关推荐 
  related_post: `${BASE_URLA}/api/post/`,
  // 常州号 - 文稿详情 - 点赞 1
  like_post: `POST ${BASE_URLA}/api/post/`,
  // 常州号 - 文稿详情 - 收藏 1
  collection_post: `POST ${BASE_URLA}/api/post/`,
  // 评论表单基础参数(发表评论前，获取ca_nonce)
  options_comment: `${BASE_URLA}/api/comment/options`,
  // 常州号 - 文稿详情 - 评论文稿
  comment_post: `POST ${BASE_URLA}/api/post/`,
  // 常州号 - 文稿详情 - 评论
  comments_post: `${BASE_URLA}/api/post/`,
  // 常州号 - 关注操作 1
  subscription_media_account: `PATCH ${BASE_URLA}/api/media_account/`,
  // 常州号 - 文稿详情 - 评论赞操作 1
  like_comment: `POST ${BASE_URLA}/api/comment/`,
  // 常州号 - 文稿详情 - 评论评论
  comment_comment: `POST ${BASE_URLA}/api/comment/`,
  // app商品列表
  getAppGoodList: `${BASE_URLA_}/api/v1/app-goodlist`,
  // app商品详情
  getAppGooddetail: `${BASE_URLA_}/api/v1/app-gooddetail`,
  // app商品记录
  getAppGoodhistory: `${BASE_URLA_}/api/v1/app-goodhistory`,
  // app兑换商品
  getAppApporder: `POST ${BASE_URLA_}/api/v1/apporder`,
  // app兑换商品检查积分
  getAppGoodbuycheck: `${BASE_URLA_}/api/v1/app-goodbuycheck`,
};
