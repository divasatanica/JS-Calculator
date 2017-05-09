var enterNum = [];
var minusflag = false;
var mulflag = false;
var bufNum1 = 0;
var bufNum3 = 0;
var result = 0;
var numBtn = document.getElementsByClassName("numButton");
var enterBar = document.getElementById("js-enter");
var negative = document.getElementById("js-negative");
var clear1bit = document.getElementById("js-clear1bit");
var clearEnter = document.getElementById("js-clearEnter");
var allClear = document.getElementById("js-allClear");
var equal = document.getElementById("js-result");
var add = document.getElementById("js-add");
var minus = document.getElementById("js-minus");
var mul = document.getElementById("js-mul");
var div = document.getElementById("js-div");
var percent = document.getElementById("js-percent");
var sqrt = document.getElementById("js-sqrt");
function equalF(){
	if(minusflag && (!mulflag)){
		result = bufNum3 - bufNum1;
	}
	else if((!minusflag) && (!mulflag)){
		result = bufNum3 + bufNum1;
	}
	else if((!minusflag) && mulflag){
		result = bufNum3 * bufNum1;
		}
	else if(minusflag && mulflag){
		result = bufNum3 / bufNum1;
	}
	bufNum3 = result;
	enterBar.innerHTML = String(result);
	bufNum1 = 0;
	minusflag = false;
	mulflag = false;
}
//对四个包含了数字键的div进行事件委托
for(var i = 0;i < numBtn.length;i ++){
	numBtn[i].addEventListener("click", function(e){//这里的事件委托函数必须把事件对象作为参数传进去以兼容FireFox和IE
		var e = window.event || e;
		var target = e.target || e.srcElement;
		enterNum.push(target.innerHTML);
		if(enterBar.innerHTML == "Enter Something"){
				enterBar.innerHTML = '';
			}	
		enterBar.innerHTML = enterBar.innerHTML + target.innerHTML;
		bufNum1 = Number(enterNum.join(''));
		}, false);
}
//正负号切换显示
negative.addEventListener("click", function(){
	if(enterNum.length == 0){
		enterNum.push('-');
		enterBar.innerHTML = '-';
	}
	else if(bufNum3 !== 0){
		bufNum3 = -bufNum3;
		enterBar.innerHTML = bufNum3;
	}
	else if(enterNum[0] === '-'){
		enterNum.shift();
		enterBar.innerHTML = enterNum.join('');
		bufNum1 = Number(enterNum.join(''));
	}
	else{
		enterNum.unshift('-');
		enterBar.innerHTML = enterNum.join('');
		bufNum1 = Number(enterNum.join(''));
	}
}, false);
//清除当前输入的一位
clear1bit.addEventListener("click", function(){
	if(enterNum.length !== 0){
		enterNum.pop();
		enterBar.innerHTML = enterNum.join('');
		bufNum1 = Number(enterNum.join(''));
	}
}, false);
//清除当前输入
clearEnter.addEventListener("click", function(){
	enterNum.splice(0, enterNum.length);
	enterBar.innerHTML = 'Enter Something';
	bufNum1 = 0;
}, false);
//清除所有输入
allClear.addEventListener("click", function(){
	enterNum = [];
	minusflag = false;
	mulflag = false;
	bufNum1 = 0;
	bufNum3 = 0;
	result = 0;
	enterBar.innerHTML = 'Enter Something';
}, false);
//加减乘除
equal.addEventListener("click", equalF, false);

add.addEventListener("click", function(){
	equalF();
	if(bufNum3 !== 0){
		bufNum3 = bufNum3 + bufNum1;
		enterNum.splice(0, enterNum.length);
		enterBar.innerHTML = 'Enter Something';
		bufNum1 = 0;
	}
	if(enterNum.length !== 0){
		bufNum3 = bufNum1;
		enterNum.splice(0, enterNum.length);
		enterBar.innerHTML = 'Enter Something';
		bufNum1 = 0;
	}
}, false);

minus.addEventListener("click", function(){
	equalF();
	minusflag = true
	if(bufNum3 !== 0){
		bufNum3 = bufNum3 - bufNum1;
		enterNum.splice(0, enterNum.length);
		enterBar.innerHTML = 'Enter Something';
		bufNum1 = 0;
	}
	if(enterNum.length !== 0){
		bufNum3 = bufNum1;
		enterNum.splice(0, enterNum.length);
		enterBar.innerHTML = 'Enter Something';
		bufNum1 = 0;
	}
}, false);

mul.addEventListener("click", function(){
	equalF();
	minusflag = false;
	mulflag = true;
	enterNum.splice(0, enterNum.length);
	enterBar.innerHTML = 'Enter Something';
	if(bufNum3 == 0){
		bufNum3 = 1;
	}
	else if(bufNum3 !== 1){
		bufNum1 = 1;
	}
	bufNum3 = bufNum1 * bufNum3;
}, false);

div.addEventListener("click", function(){
	equalF();
	minusflag = true;
	mulflag = true;
	enterNum.splice(0, enterNum.length);
	enterBar.innerHTML = 'Enter Something';
	if(bufNum3 == 0){
		bufNum3 = 1;
		bufNum3 = bufNum1 / bufNum3;
	}
	else if(bufNum3 !== 1){
		bufNum1 = 1;
	}
	else{
		bufNum3 = bufNum3 / bufNum1;
	}
}, false);

//百分号按钮
percent.addEventListener("click", function(){
	if(bufNum1 == 0){
		bufNum3 = bufNum3 / 100;
	}
	bufNum1 = bufNum1 / 100;
}, false);

//开平方根
sqrt.addEventListener("click", function(){
	if(bufNum1 < 0){
		enterBar.innerHTML = 'Error!';
	}
	else if(bufNum1 == 0){
		bufNum3 = Math.sqrt(bufNum3);
	}
	bufNum1 = Math.sqrt(bufNum1);
}, false);