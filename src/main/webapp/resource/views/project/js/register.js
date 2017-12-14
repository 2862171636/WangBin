//判断用户名的合法js代码  
function checkUsername() {  
	var username = document.getElementById("username").value;  
	if( username == "" || username == null ){  
	　　changeUsernamePrompt( "用户长度不能少于3个字符" ); 
	
	　　return false;  
	}  
	switch( isUsername( username ) ){  
	　　case 0: break;  
	// 　　case 1: {  
	// 　　 changeUsernamePrompt( "您选择的用户名‘"+username+"‘格式不正确，用户名不能以数字开头" );  
	// 　　 return false;  
	// 　　}  
	　　case 1: {  
	　　 changeUsernamePrompt( "用户长度不能少于3个字符" );  
	　　 return false;  
	　　}  
	　　case 2: {  
	　　 changeUsernamePrompt( "* 用户名含有非法字符" );  
	　　 return false;  
	　　}  
	// 　　case 4: {  
	// 　　 changeUsernamePrompt( "您选择的用户名‘"+username+"‘格式不正确，用户名只能包含_,英文字母，数字" );  
	// 　　 return false;  
	// 　　}  
	}
	changeUsernamePrompt( "* 可以注册","green" );                                                                                                                                                                                                       
	 return true;  
	
} 
function changeUsernamePrompt(cnt,col){  
	document.getElementById( "failinfo" ).innerHTML = cnt;  
	document.getElementById( "failinfo" ).style.display = "block"; 
	document.getElementById( "failinfo" ).style.color = col; 
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
//用户名失焦
$("#username").blur(function(){
	
	var username=$("#username").val();
	 $.ajax({
	 	type:"get",
	 	url:"http://10.80.16.104:8080/user/focus.do",
	 	data:{
	 		"user.userName":username,
	 	},
	 	dataType:"json",
	 	async:true,
	 	success:function(data){
	 		console.log(data);
	 		lostfocuks();
	 		if(data==false){
	 			changeUsernamePrompt( "* 用户名以注册","red" );
	 		}
	 	}
	 });
})
function lostfocuks(){
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
}
// 密码判断
var failpass = document.getElementById("failpass");
var isF1=false;
$("#password").blur(function(){
	psdlostfocuks(this);
})
function psdlostfocuks(_this){
	var password = $(_this).val();
	if(! /^.{6,20}$/.test(password) || password == null || password == ""){
		failpass.innerHTML = "* 字符长度不能少于6个字符";
		failpass.style.color = "red";
		isF1=false;
	}else{
		failpass.innerHTML = "* 可以注册";
		failpass.style.color = "rgb(30, 170, 57)";
		isF1=true;
	}
}
// 再次确认密码判断
var failagin = document.getElementById("failagin");
var isF2=false;
$("#agin").blur(function(){
	var password = $("#password").val();
	var passagin = $(this).val();
	console.log(passagin,password)
	if(! /^.{6,20}$/.test(passagin) || passagin == null || passagin == ""){
		failagin.innerHTML = "* 字符长度不能少于6个字符";
		failagin.style.color = "red";
		isF2=false;
		return ;
	}else if(password != passagin){
		failagin.innerHTML = "* 两次输入的密码不一致";
		failagin.style.color = "red";
		isF2=false;
	}else{
		failagin.innerHTML = "* 可以注册";
		failagin.style.color = "rgb(30, 170, 57)";
		isF2=true;
		
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

//验证码验证

$('#yanzhengma').codeVerify({
	type : 1,
	width : '100px',
	height : '40px',
	fontSize : '12px',
	codeLength : 4,
	ready : function() {
	},
	success : function() {},
	error : function() {}
});
var isF3=false;
$(".varify-input-code").on("blur",function(){
	yanzhengmalost();
})
function yanzhengmalost(){
	var str="";
	$("font").each(function(){
		str+=$(this).html();
		
	})
	var txt=$(".varify-input-code").val();
	txt=txt.toLowerCase();
	str=str.toLowerCase();
	if(str==txt){
		$("#yanzhengreault").html("验证通过");
			$("#yanzhengreault").css({color:"rgb(0,151,60)"});
			isF3=true;
	}else{
		$("#yanzhengreault").html("验证码错误");
		$("#yanzhengreault").css({color:"red"});
		isF3=false;
		 return false;
	}
}
//提交数据
$(".sub").on("click",function(){
	lostfocuks();
	psdlostfocuks($("#password"));
	yanzhengmalost();
	// 判定提交时是否合法
	var tel=moble.value;
	 console.log(isF1 == false,isF2 == false,!checkUsername(),!validatemobile(tel),!$(".agree").prop("checked"));
	// console.log(isF1 == false&&isF2 == false&&!checkUsername()&&!validatemobile(tel));
	if(isF1 == false || isF2 == false || !checkUsername() || !validatemobile(tel) || isF3 == false || !$(".agree").prop("checked")){
//		console.log(11);
		console.log("请填写正确的用户信息");
		return;
	}
	var username = $("#username").val();
	var password1 = $("#password").val();
	var mobile = $("#moble").val();
	
	// console.log(username,password,mobile);
	//	var formData = new FormData();
	//	formData.append("userName",username);
	//	formData.append("password",password1);
	//	formData.append("phone",mobile);
	$.ajax({
		type:"get",
		dataType:"json",
		url:"http://10.80.16.104:8080/user/reg.do",
		data:{
			"user.userName":username,
			"user.password":password1,
			"user.poneNum":mobile
		},
		async:true,
		success:function(data){
			console.log(data);
			if(data=="success"){
				window.location.href="../html/index.html";
			}
		}
	})

})