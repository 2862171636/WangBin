//判断用户名的合法js代码  
function checkUsername() {  
	var username = document.getElementById("username").value;  
	if( username == "" || username == null ){  
	　　changeUsernamePrompt( "用户长度不能少于3个字符" );  
	　　return false;  
	}  
	switch( isUsername( username ) ){  
	　　case 0: break;    
	　　case 1: {  
	　　 changeUsernamePrompt( "用户长度不能少于3个字符" );  
	　　 return false;  
	　　}  
	　　case 2: {  
	　　 changeUsernamePrompt( "* 用户名含有非法字符" );  
	　　 return false;    
	}
	 changeUsernamePrompt( "* 可以注册" );  
	return true;  
	} 
}
function changeUsernamePrompt(cnt){  
	document.getElementById( "failinfo" ).innerHTML = cnt;  
	document.getElementById( "failinfo" ).style.display = "block";  
}  
function chooseThis(name) {  
	document.getElementById( "username" ).value = name;  
}  
function isUsername( username ){  
	// if( /^\d.*$/.test( username ) ){  
	// 　　return 1;  
	// }  
	if(! /^.{3,20}$/.test( username ) ){  
	　　return 1;  
	}  
	if(! /^[\w_]*$/.test( username ) ){  
	　　return 2;  
	}  
	// if(! /^([a-z]|[A-Z])[\w_]{5,19}$/.test( username ) ){  
	// 　　return 4;  
	// }  
	return 0;  
} 
// 用户名失焦
$("#username").blur(function(){
	// 
	var username = $("#username").val();
	$.ajax({
		type:"post",
		url:"localhost:8081/user/reg.do",
		data:{"userName":username},
		dataType:"json",
		async:true,
		success:function(data){
			console.log(data);
		}
	});
	checkUsername();
	if(!checkUsername()){
		$("#failinfo").css({
			color:"red",
		})
	}else{
		$("#failinfo").css({
			color:"rgb(30, 170, 57)",
		})
	}
})
// 提交数据
$(".sub").on("click",function(){
	// 判定提交时是否合法
	var tel=moble.value;
	// console.log(isF1 == false,isF2 == false,!checkUsername(),!validatemobile(tel));
	// console.log(isF1 == false&&isF2 == false&&!checkUsername()&&!validatemobile(tel));
	//
	var username = $("#username").val();
	var password = $("#password").val();
	var mobile = $("#moble").val();
	// console.log(username,password,mobile);
	var formData = new FormData();
	formData.append("username",username);
	formData.append("password",password);
	formData.append("mobile",mobile);
	$.ajax({
		type:"post",
		dataType:"json",
		url:"http://localhost:8080/user/reg.do",
		data:formData,
		async:true,
		success:function(data){

		}
	})

})


// 密码判断
var failpass = document.getElementById("failpass");
var isF1 = false;
$("#password").blur(function(){
	var password = $(this).val();
	if(! /^.{3,20}$/.test(password) || password == null || password == ""){
		failpass.innerHTML = "* 字符长度不能少于6个字符";
		failpass.style.color = "red";
		isF1 = false;
	}else{
		failpass.innerHTML = "* 可以注册";
		failpass.style.color = "rgb(30, 170, 57)";
		isF1 = true;
	}
})
// 再次确认密码判断
var isF2 = false;
var failagin = document.getElementById("failagin");
$("#agin").blur(function(){
	var password = $("#password").val();
	var passagin = $(this).val();
	console.log(passagin,password)
	if(! /^.{3,20}$/.test(passagin) || passagin == null || passagin == ""){
		failagin.innerHTML = "* 字符长度不能少于6个字符";
		failagin.style.color = "red";
		isF2 = false;
		return ;
	}else if(password != passagin){
		failagin.innerHTML = "* 两次输入的密码不一致";
		failagin.style.color = "red";
		isF2 = false;
	}else{
		failagin.innerHTML = "* 可以注册";
		failagin.style.color = "rgb(30, 170, 57)";
		isF2 = true;
	}
})
// 验证手机号码
var failmoble = document.getElementById("failmoble");
function validatemobile(mobile) 
   { 
   	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
       if(mobile.length==0) 
       { 
          // alert('请输入手机号码！');
          failmoble.innerHTML = "请输入手机号码！";
          failmoble.style.color = "red" ;
          return false; 
       }else if(mobile.length!=11) 
       { 
           // alert('请输入有效的手机号码！'); 
           failmoble.innerHTML = "请输入有效的手机号码！";
           failmoble.style.color = "red" ;
           return false; 
       }else if(!myreg.test(mobile)) 
       { 
           // alert('请输入有效的手机号码！'); 
           failmoble.innerHTML = "请输入有效的手机号码！";
           failmoble.style.color = "red" ; 
           return false; 
       }else{
       		failmoble.innerHTML = "* 可以注册";
           failmoble.style.color = "rgb(30, 170, 57)" ; 
           return true;
       }
   } 
   var moble=document.getElementById("moble"); 
    moble.onblur=function(){
   		var tel=moble.value;
   		validatemobile(tel);
   }



