function setCookie(name,value,expires,path){
	var current_date=new Date();
	//设置过期日期
	current_date.setDate(current_date.getDate()+expires);
	//将过期日期转变成GMT 字符串
	expires_str=current_date.toGMTString();
	document.cookie=name+"="+value+"; expires="+expires_str+"; path="+path;
}
function getCookie(name){
	//获取所有cookie值
	str=document.cookie;
	start=str.indexOf("name=")+name.length+1;
	end=str.indexOf(";",start);
	end=end==-1?str.length:end;
	val=str.substring(start,end);
	return val;
}