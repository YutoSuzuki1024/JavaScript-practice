// var hello = 'Hello World';
// alert(hello);

// alert(4 * 3);

// alert("Hello" + "World");

// var orange = 100;
// var apple = 120;

// if (orange < apple) {
// 	alert("みかんの値段がリンゴより安い");
// }

// else if (orange == apple) {
// 	alert("みかんとリンゴが同じ値段");
// }

// else {
// 	alert("みかんの値段がリンゴより高い");
// }

// var max = 1900;
// var num = 1;
// var count = 0;

// while (num < max) {
// 	num = num * 2;
// 	count = count + 1;
// }

// alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

// var i;
// var num = 0;

// for (i = 1; i < 11; i++) {
// 	num = num + i;
// }

// alert("1から10まで足し算した結果は" + num + "です");

// var num1 = 8;
// var num2 = 4;
// var sum1 = num1 + num2;
// var sum2 = num1 - num2;
// var sum3 = num1 * num2;
// var sum4 = num1 / num2;



// alert("8 + 4 =" + sum1);
// alert("8 - 4 =" + sum2);
// alert("8 * 4 =" + sum3);
// alert("8 / 4 =" + sum4);

// var alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString (strA) {
// 	var addStr = "Hello " + strA;
// 	return addStr;
// }

// var promptStr = prompt ("何か好きな文字を入力してください。");

// alert(promptStr);





//以下確認問題ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

// var user_hand = prompt ("じゃんけんの手をグー、チョキ、パーから選んでください。");

// var js_hand = getJSgand();

// var judge = winLose (user_hand, js_hand);


// if (user_hand == "グー" || user_hand == "チョキ" || user_hand == "パー") {
// 	alert("あなたの選んだ手は" + user_hand + "です。 \nJanaScriptの選んだ手は" + js_hand + "です。　\n結果は" + judge + "です。");
// }
// else if (user_hand == null) {
// 	alert("またチャレンジしてね");
// }
// else {
// 	alert("グー・チョキ・パーのいずれかを入力してください");
// }

// function getJSgand(){
// 	var js_hand_num = Math.floor(Math.random() * 3);
// 	var hand_name;

// 	if (js_hand_num == 0) {
// 		hand_name = "グー";
// 	}
// 	else if (js_hand_num == 1) {
// 		hand_name = "チョキ";
// 	}
// 	else if (js_hand_num == 2) {
// 		hand_name = "パー";
// 	}

// 	return hand_name;
// }

// function winLose (user, js) {
// 	var winLoseStr;

// 	if (user == "グー") {
// 		if (js == "グー") {
// 			winLoseStr = "あいこ";
// 		}
// 		else if (js == "チョキ") {
// 			winLoseStr = "勝ち";
// 		}
// 		else if (js == "パー") {
// 			winLoseStr = "負け";
// 		}
// 	}

// 	else if (user == "チョキ") {
// 		if (js == "グー") {
// 			winLoseStr = "負け";
// 		}
// 		else if (js == "チョキ") {
// 			winLoseStr = "あいこ";
// 		}
// 		else if (js == "パー") {
// 			winLoseStr = "勝ち";
// 		}
// 	}

// 	else if (user == "パー") {
// 		if (js == "グー") {
// 			winLoseStr = "勝ち";
// 		}
// 		else if (js == "チョキ") {
// 			winLoseStr = "負け";
// 		}
// 		else if (js == "パー") {
// 			winLoseStr = "あいこ";
// 		}
// 	}

// 	return winLoseStr;
// }



var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
var js_hand = getJShand();
var judge = winLose(user_hand, js_hand);
 
if (user_hand != null) {
    alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
    alert("またチャレンジしてね")
}
 
function getJShand(){
    var js_hand_num = Math.floor( Math.random() * 3 );
    var hand;
    if(js_hand_num == 0){
        hand = "グー";
    }else if(js_hand_num == 1){
        hand = "チョキ";
    }else if(js_hand_num == 2){
        hand = "パー";
    }
    return hand;
}
 
function winLose(user, js){
    var winLoseStr;
    if(user == "グー"){
        if(js == "グー"){
            winLoseStr = "あいこ";
        }else if(js == "チョキ"){
            winLoseStr = "勝ち";
        }else if(js == "パー"){
            winLoseStr = "負け";
        }
    }else if(user == "チョキ"){
        if(js == "グー"){
            winLoseStr = "負け";
        }else if(js == "チョキ"){
            winLoseStr = "あいこ";
        }else if(js == "パー"){
            winLoseStr = "勝ち";
        }
    }else if(user == "パー"){
        if(js == "グー"){
            winLoseStr = "勝ち";
        }else if(js == "チョキ"){
            winLoseStr = "負け";
        }else if(js == "パー"){
            winLoseStr = "あいこ";
        }
    }
    return winLoseStr;
}