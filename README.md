# SAXH-json2xls
SHAX-json2xls 可将json数据转Excel xls文件

Installation
------------

    npm install

Usage
------
输入Excel文件

    var json2xls = require('./lib/sahx-json2xls');    

    var headname =["全国排名", "推广专员", "访问", "下载", "注册", "审核通过", "男", "女", "女生比例", "推广费用", "活跃比1", "活跃比2", "自然增长率"];
  
    var fields=["ranking", "username", "visit", "download", "register", "verify", "male", "female", "gender_ratio", "promotion_expenses", "user_active_ratio_login_one_times", "user_active_ratio_login_two_times", "natural_growth_ratio"];

    var data = [{
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
	}, 
	{
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
	}, 
	{
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
	}]
    

    var xls = json2xls(data,{
    	fields: fields,
    	headname:headname
	});

    fs.writeFileSync('output.xls', xls, 'binary');



Options
-------

    - data: 数据内容，【array】
    - fields: 字段排序，对应数据里的key, 【array】
    - headname: 每列的标题，与fields中的 item 一一对应，【array】

Example:

    var xls = json2xls(data, options);
    fs.writeFileSync('output.xls', xls, options);


参考
-------
[json2xls](https://github.com/rikkertkoppes/json2xls)