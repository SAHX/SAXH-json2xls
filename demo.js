/**
 * Created by tangjiang on 16/9/1.
 */
var json2xls = require('./lib/sahx-json2xls');
var fs = require('fs');
var headname =["全国排名", "推广专员", "访问", "下载", "注册", "审核通过", "男", "女", "女生比例", "推广费用", "活跃比1", "活跃比2", "自然增长率"];
var fields=["ranking", "username", "visit", "download", "register", "verify", "male", "female", "gender_ratio", "promotion_expenses", "user_active_ratio_login_one_times", "user_active_ratio_login_two_times", "natural_growth_ratio"];
var data=[{
    "ranking": 3,
    "username": "刘锦文",
    "visit": 30,
    "download": 10,
    "register": 9,
    "verify": 7,
    "male": 7,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 56,
    "user_active_ratio_login_one_times": "71.4%",
    "user_active_ratio_login_two_times": "71.4%",
    "natural_growth_ratio": "75.0%"
}, {
    "ranking": 14,
    "username": "栗亚广",
    "visit": 2,
    "download": 1,
    "register": 1,
    "verify": 1,
    "male": 1,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 8,
    "user_active_ratio_login_one_times": "0.0%",
    "user_active_ratio_login_two_times": "0.0%",
    "natural_growth_ratio": "50.0%"
}, {
    "ranking": 8,
    "username": "杨啸添",
    "visit": 10,
    "download": 4,
    "register": 3,
    "verify": 2,
    "male": 2,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 16,
    "user_active_ratio_login_one_times": "100.0%",
    "user_active_ratio_login_two_times": "50.0%",
    "natural_growth_ratio": "33.3%"
}, {
    "ranking": "暂无排名",
    "username": "邹晓东",
    "visit": 2,
    "download": 1,
    "register": 0,
    "verify": 0,
    "male": 0,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 0,
    "user_active_ratio_login_one_times": "0.0%",
    "user_active_ratio_login_two_times": "0.0%",
    "natural_growth_ratio": "0.0%"
}, {
    "ranking": "暂无排名",
    "username": " 陶源",
    "visit": 3,
    "download": 0,
    "register": 0,
    "verify": 0,
    "male": 0,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 0,
    "user_active_ratio_login_one_times": "0.0%",
    "user_active_ratio_login_two_times": "0.0%",
    "natural_growth_ratio": "0.0%"
}, {
    "ranking": "暂无排名",
    "username": "董永昌",
    "visit": 0,
    "download": 0,
    "register": 0,
    "verify": 0,
    "male": 0,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 0,
    "user_active_ratio_login_one_times": "0.0%",
    "user_active_ratio_login_two_times": "0.0%",
    "natural_growth_ratio": "0.0%"
}, {
    "ranking": "暂无排名",
    "username": "杜鑫",
    "visit": 0,
    "download": 0,
    "register": 0,
    "verify": 0,
    "male": 0,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 0,
    "user_active_ratio_login_one_times": "0.0%",
    "user_active_ratio_login_two_times": "0.0%",
    "natural_growth_ratio": "0.0%"
}, {
    "ranking": "总汇",
    "username": "",
    "visit": 47,
    "download": 16,
    "register": 13,
    "verify": 10,
    "male": 10,
    "female": 0,
    "gender_ratio": "0.0%",
    "promotion_expenses": 80,
    "user_active_ratio_login_one_times": "70.0%",
    "user_active_ratio_login_two_times": "60.0%",
    "natural_growth_ratio": "46.4%"
}];

var xls = json2xls(data,{
    fields: fields,
    headname:headname
});


fs.writeFileSync('output.xls', xls, 'binary');