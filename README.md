# ylgy
羊了个羊，Surge、网球重写，修改朋友圈历史排行，朋友圈可见 2022.09.29


###### 注：实际并没有通关，修改的是通关次数接口，修改成功后，不要再进入游戏

使用方式：

##### 方式一：

- 安装模块，开启MitM，Rewrite
- 进入小程序，打开朋友圈排行榜，看到通关次数666666
- 退出
- 要想修改其他次数，就把脚本放在本地，手动修改



##### 方式二：


```
[Script]
ylgy = type=http-response, pattern=^https?://.+/sheep/v1/game/personal_info, requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/xiky/ylgy/main/ylgy_rank.js, argument=
  
[MITM]
hostname = %APPEND% *.easygame2021.com
```



##### 方式三：

网球HTTP Catcher

- 开启抓包，进入小程序，排行榜

- 返回网球，搜索person，左滑更多 - 新建重写 - 添加规则

	- 类型：响应，行为： body，正则表达式开

	- 查找: `win_count":\d+`

	- 替换: `win_count":你想要的通关次数`
	
	- 存储

- 更多 - 重写 - 打开重写
- 重新进入小程序，打开排行榜
- 完成

