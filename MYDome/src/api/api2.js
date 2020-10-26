if (process.env.NODE_ENV == "development") {
  // 开发
  // var BASE_URLA = "http://127.0.0.1:4523";
  var BASE_URLA = "http://mp.netfishing.cn";
} else if (process.env.NODE_ENV == "debug") {
  // debug
  var BASE_URLA = "http://192.168.0.151:8086";
} else if (process.env.NODE_ENV == "production") {
  // 生产
  var BASE_URLA = "http://llc.njqiahao.com/api";
}
window.BASE_URLA = BASE_URLA;
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
  // 常州号 - 文稿详情 - 点赞
  like_post: `POST ${BASE_URLA}/api/post/{hash_id}/like`,
  // 常州号 - 文稿详情 - 收藏
  collection_post: `POST ${BASE_URLA}/api/post/{hash_id}/collection`,
  // 常州号 - 文稿详情 - 评论
  comments_post: `${BASE_URLA}/api/post/{hash_id}/comments`,
  // 常州号 - 关注操作
  subscription_media_account: `PATCH ${BASE_URLA}/api/media_account/{hash_id}/subscription`,
  // 常州号 - 文稿详情 - 评论赞操作
  like_comment: `POST ${BASE_URLA}/api/comment/{comment_id}/like`,
  // 常州号 - 文稿详情 - 评论评论
  comment_comment: `POST ${BASE_URLA}/api/comment/{comment_id}/comment`,
  // 常州号 - 文稿详情 - 评论文稿
  comment_post: `POST ${BASE_URLA}/api/post/{hash_id}/comment`,
};
