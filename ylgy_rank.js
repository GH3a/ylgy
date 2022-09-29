/*
羊了个羊修改通关次数 Surge

[Script]
ylgy = type=http-response, pattern=^https?://.+/sheep/v1/game/personal_info, requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/xiky/ylgy/main/ylgy_rank.js, argument=
  
[MITM]
hostname = %APPEND% *.easygame2021.com

*/

var body = $response.body;

var obj = JSON.parse(body);
obj.data.win_count = 666666;
$done({ body: JSON.stringify(obj) });
