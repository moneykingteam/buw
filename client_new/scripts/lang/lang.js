define([], function() {
	var lang = function() {

	};
	function getParameterByName(name, url) {
	    if (!url) 
	    	url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) 
	    	return null;
	    if (!results[2]) 
	    	return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	lang.prototype.T = function(str)
	{
		var locale = getParameterByName("locale");
		var t;
		if(locale == "ko-KR") {
			if(str == "bustabitclub") t = "부스타빗클럽";
			else if(str == "Bits: ") t = "비트: ";
			else if(str == "Register") t = "회원가입";
			else if(str == "Log in") t = "로그인";
			else if(str == "Go black") t = "검은색";
			else if(str == "Go back") t = "흰색";
			else if(str == "Connecting...") t = "접속중...";
			else if(str == "Connection Lost ...") t = "연결이 끊어짐 ..."; 
			else if(str == "Max profit: ") t = "최대당첨금: ";
			else if(str == "Busted") t = "회차 끝";
			else if(str == "Next round in ") t = "다음 회차시작 ";
			else if(str == "Betting...") t = "베팅중...";
			else if(str == " (Cancel)") t = " (취소)";
			else if(str == "Bet") t = "베팅";
			else if(str == "Bet too big") t = "너무 큰 베팅";
			else if(str == "Place bet") t = "베팅하기";
			else if(str == "Cash out") t = "비트인출";
			else if(str == "bits") t = "비트";
			else if(str == "Cash out at ") t = "비트결제 ";
			else if(str == " bits") t = " 비트";
			else if(str == "Joining...") t = "연결중...";
			else if(str == "Type here...") t = "여기에 입력하세요...";
			else if(str == "Log in to chat...") t = "로그인후 채팅가능 합니다";
			else if(str == "Not connected...") t = "연결 되지 않음...";
			else if(str == "Bots Display Mode") t = "채팅봇 현시방식";
			else if(str == "Normal") t = "기본방식";
			else if(str == "Greyed Out") t = "회색";
			else if(str == "Don't display") t = "현시하지 않음";
			else if(str == "Login to play") t = "로그인";
			else if(str == "or register ") t = "혹은 회원가입 ";
			else if(str == "bits") t = "비트";
			else if(str == "Auto Cash Out") t = "자동멈춤";
			else if(str == "Manual") t = "수동";
			else if(str == "Auto") t = "자동";
			else if(str == "Controls size") t = "크기조종";
			else if(str == "big") t = "크게";
			else if(str == "small") t = "작게";
			else if(str == "Graph mode") t = "그래픽방식";
			else if(str == "Graphics") t = "그래픽";
			else if(str == "Text (Low CPU usage)") t = "텍스트 (저사양CPU)";
			else if(str == "Crash") t = "결과배당";
			else if(str == "Bonus") t = "보너스";
			else if(str == "Profit") t = "수익";
			else if(str == "Hash") t = "해쉬코드";
			else if(str == "Activate hotkeys") t = "바로가기키 활성화";
			else if(str == "Bet (SPACE)") t = "베팅 (SPACE)";
			else if(str == "Double bet (C)") t = "2배베팅 (C)";
			else if(str == "Halve bet (X)") t = "반값베팅 (X)";
			else if(str == "User") t = "플레이어";
			else if(str == "Display") t = "게임화면";
			else if(str == "Hotkeys") t = "바로가기키";
			else if(str == "Chat") t = "채팅";
			else if(str == "RUN!") t = "시작!";
			else if(str == "STOP") t = "정지";
			else if(str == "Players") t = "플레이어";
			else if(str == "History") t = "게임내역";
			else if(str == "Base Bet: ") t = "시작금액: ";
			else if(str == "Auto Cashout at:") t = "자동멈춤:";
			else if(str == "Stop if bet is > ") t = "베팅액이 다음보다 크면 정지 ";
			else if(str == "On loss:") t = "이전 경기 실패시:";
			else if(str == "On win:") t = "이전 경기 승리시:";
			else if(str == "Return to base bet") t = "시작금액부터 베팅";
			else if(str == "Increase bet by: ") t = "베팅액 증가: ";
			else if(str == "Bits") t = "비트";
			else if(str == "AutoBet") t = "자동베팅";
			else if(str == "Custom") t = "전략베팅";
			else if(str == "Player list size") t = "플레이어 목록 크기";
		}
		else if(locale == "zh-CN") {
			if(str == "bustabitclub") t = "投注比特";
			else if(str == "Bits: ") t = "比特: ";
			else if(str == "Register") t = "注册";
			else if(str == "Log in") t = "登陆";
			else if(str == "Go black") t = "去黑色";
			else if(str == "Go back") t = "回去";
			else if(str == "Connecting...") t = "连...";
			else if(str == "Connection Lost ...") t = "连接丢失 ..."; 
			else if(str == "Max profit: ") t = "最大的利润: ";
			else if(str == "Busted") t = "猛击 ";
			else if(str == "Next round in ") t = "下一轮进入 ";
			else if(str == "Betting...") t = "投注...";
			else if(str == " (Cancel)") t = " (取消)";
			else if(str == "Bet") t = "赌注";
			else if(str == "Bet too big") t = "打赌太大了";
			else if(str == "Place bet") t = "下注";
			else if(str == "Cash out") t = "兑现";
			else if(str == "bits") t = "比特";
			else if(str == "Cash out at ") t = "兑现 ";
			else if(str == " bits") t = " 比特";
			else if(str == "Joining...") t = "加盟...";
			else if(str == "Type here...") t = "在此输入...";
			else if(str == "Log in to chat...") t = "登录聊天";
			else if(str == "Not connected...") t = "未连接...";
			else if(str == "Bots Display Mode") t = "机器人显示模式";
			else if(str == "Normal") t = "正常";
			else if(str == "Greyed Out") t = "灰色";
			else if(str == "Don't display") t = "不要显示";
			else if(str == "Login to play") t = "登录玩";
			else if(str == "or register ") t = "或注册 ";
			else if(str == "bits") t = "比特";
			else if(str == "Auto Cash Out") t = "自动取现";
			else if(str == "Manual") t = "手册";
			else if(str == "Auto") t = "自动";
			else if(str == "Controls size") t = "控制大小";
			else if(str == "big") t = "大";
			else if(str == "small") t = "小";
			else if(str == "Graph mode") t = "图形模式";
			else if(str == "Graphics") t = "图像";
			else if(str == "Text (Low CPU usage)") t = "文字 （CPU使用率低）";
			else if(str == "Crash") t = "紧急";
			else if(str == "Bonus") t = "奖金";
			else if(str == "Profit") t = "利润";
			else if(str == "Hash") t = "哈希";
			else if(str == "Activate hotkeys") t = "激活热键";
			else if(str == "Bet (SPACE)") t = "赌注 (SPACE)";
			else if(str == "Double bet (C)") t = "双打 (C)";
			else if(str == "Halve bet (X)") t = "减半 (X)";
			else if(str == "User") t = "用户";
			else if(str == "Display") t = "显示";
			else if(str == "Hotkeys") t = "热键";
			else if(str == "Chat") t = "聊";
			else if(str == "RUN!") t = "跑!";
			else if(str == "STOP") t = "停";
			else if(str == "Players") t = "玩家";
			else if(str == "History") t = "历史";
			else if(str == "Base Bet: ") t = "底池赌注: ";
			else if(str == "Auto Cashout at:") t = "自动取款在:";
			else if(str == "Stop if bet is > ") t = "如果打赌就停止 > ";
			else if(str == "On loss:") t = "亏损:";
			else if(str == "On win:") t = "赢了:";
			else if(str == "Return to base bet") t = "返回基本赌注";
			else if(str == "Increase bet by: ") t = "增加赌注: ";
			else if(str == "Bits") t = "比特";
			else if(str == "AutoBet") t = "自动投注";
			else if(str == "Custom") t = "习惯";
			else if(str == "Player list size") t = "播放列表大小";
		}
		else t = str;
		return t;
	}

	lang.prototype.LC = function() {
		var lc = getParameterByName("locale");
		return lc;
	}
	return new lang();	
});
