# JS-Calculator
### May 8, 2017 10:53 PM

用原生JS写的计算器demo,实现了简单的加减乘除，开平方，百分数的功能。
持续debug中。
在得出一次结果之后继续按数字键会有无法正确计算的bug，想法设法解决中。
在Firefox和IE中会无法进行事件托管.

### May 9, 2017 5:03 PM
通过修改代码 解决了事件委托在firefox和IE中的兼容问题
```
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
```
解决方法是将事件对象e作为函数参数传进去。


