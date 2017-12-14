import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

// 登陆、用户信息相关
export const login = params => {
  return instance.post('/user/login.shtml', params)
}

export const loginOut = params => {
  return instance.post('/user/loginOut.shtml', params)
}

export const checkUser = params => {
  return instance.post('/user/checkUser.shtml', params)
}

// 首页初始化数据

export const indexMo = params => {
  return instance.post('/indexMo.shtml', params)
}

// 初始化分类数据
// 分类一级菜单获取
export const getCategory = params => {
  return instance.post('/category/getCategory.shtml', params)
}
// 分类耳机获取
export const getCategoryTwo = params => {
  return instance.post('/category/getCategoryTwo.shtml', qs.stringify(params))
}


// // 热门搜索相关
// theme : pxy + '/find/theme.shtml',
// themeBanner : pxy + '/find/themeBanner.shtml',

// // 分类相关
// getCategory : pxy + '/category/getCategory.shtml',
// getCategoryTwo :  pxy + '/category/getCategoryTwo.shtml',

// // 搜索相关
// getTextSearch : pxy + '/find/getTextSearch.shtml',
// hotSearch : pxy + '/solr/hotSearch.shtml',
// getHotSearch : pxy + '/find/getHotSearch.shtml',

// // 搜索结果相关
// searchGoods : pxy + '/solr/searchGoods.shtml',

// // 购物车相关
// delShopCar : pxy + '/trade/delShopCar.shtml',
// addShopCar : pxy + '/trade/addShopCar.shtml',
// shopCarIndexMobile : pxy +'/trade/shopCarIndexMobile.shtml',

// // 商品详情相关
// detailMo : pxy + '/goods/detailMo.shtml',
// getIntervalPrice : pxy + '/goods/getIntervalPrice.shtml',
// ifCollect : pxy + '/person/ifCollect.shtml',
// insertCollect : pxy + '/person/insertCollect.shtml',
// drawCoupon : pxy + '/goods/drawCoupon.shtml',
// carCount : pxy + '/carCount.shtml',

// // 支付相关
// toMoPalaceOrder : pxy + '/trade/toMoPalaceOrder.shtml',

// // 个人中心相关
// tradeCount : pxy + '/ord/myTradeCount.shtml',

// // 确认订单相关
// createOrder : pxy + 'trade/createOrder.shtml',
// saveUserDetail : pxy + '/person/saveUserDetail.shtml',

// // 订单相关
// orderMo : pxy + '/ord/orderMo.shtml',

// // 订单详情相关
// tradeMoDetail : pxy + '/ord/tradeMoDetail.shtml',
// delTrade : pxy + '/ord/delTrade.shtml',
// updateTrade : pxy + '/trade/updateTrade.shtml',
// updateStatus : pxy + '/ord/updateStatus.shtml',
// toPay : pxy + '/trade/toPay.shtml',

// // 注册相关
// sendMoRandmoCode : pxy + '/user/sendMoRandmoCode.shtml',
// userRegister : pxy + '/user/userRegister.shtml',

// // 地址相关
// addressMo : pxy + '/person/addressMo.shtml',
// mgrAddrFlag : pxy + '/user/mgrAddrFlag.shtml',
// delAddress : pxy + '/person/delAddress.shtml',
// insertAddr : pxy + '/user/insertAddr.shtml',