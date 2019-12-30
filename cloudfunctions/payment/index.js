//获取云实例
const cloud = require('wx-server-sdk')
//云初始化
cloud.init()
//获取微信调用上下文信息，其中包括Openid，Appid等
const wxContext = cloud.getWXContext()
//获取用户openid
const openid = wxContext.OPENID

const appid = "wx2e320576e5548d3c"

const random = require("random.js")

const notify_url = 'http://www.weixin.qq.com/wxpay/pay.php'

const trade_type = 'JSAPI'

const mch_id = '1230000109'

const body = "test-test"