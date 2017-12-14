var sp1 = document.getElementsByClassName('sp1')[0];
var sp2 = document.getElementsByClassName('sp2')[0];
var inp = document.getElementsByClassName('inp')[0];
var inp2 = document.getElementsByClassName('inp2')[0];

sp1.onclick = function(){
    inp.style.display = "block";
    inp2.style.display = "none";
    sp1.style.borderRight = "none";
    sp1.style.borderBottom = "none";
    sp2.style.borderLeft = "1px solid #eeeeee";
    sp2.style.borderBottom = "1px solid #eeeeee";
}
sp2.onclick = function(){
    inp2.style.display = "block";
    inp.style.display = "none";
    sp2.style.borderBottom = "none";
    sp2.style.borderLeft = "none";
    sp1.style.borderRight = "1px solid #eeeeee";
    sp1.style.borderBottom = "1px solid #eeeeee";
}
$('#yanzhengma').codeVerify({
	type : 1,
    	width : '80px',
    	height : '40px',
    	fontSize : '12px',
    	codeLength : 4,
    	ready : function() {
    	},
    	success : function() {
    		alert('验证匹配！');
    	},
    	error : function() {
    		alert('验证码不匹配！');
    	}
});
$(".sub").on("click",function(){
	if($("special1").val()=="" || $("special2").val()=="" || $(".varify-input-code").val()==""){
		opendialog();
		$(".close").on("click",function(){
			$(".mask").css({
				display:"none",
			})
		})
		return;
	}
	if(yanzhengmalost()){
		var userName=$(".special1").val();
		var passWord=$(".special2").val();
		$.ajax({
			type:"get",
			url:"http://10.80.16.104:8080/user/login.do",
			async:true,
			 dataType:"json",
			data:{
				"user.userName":userName,
				"user.password":passWord
			},
			success:function(data){
				//跳转首页
				console.log(data);
				if(data=="success"){
					//保存cookie
					var userName=$(".special1").val();
					setCookie("username",userName,1,"/");
					window.location.href="../html/index.html";
				}
				if(data=="error"){
					opendialog();
					$(".tip").html("用户名或密码错误");
					$(".close").on("click",function(){
						$(".mask").css({
							display:"none",
						})
					})
				}
			}
		})
	}else{
		return;
	}
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
		return true
	}else{
		opendialog();
		$(".tip").html("验证码不正确");
		$(".close").on("click",function(){
			$(".mask").css({
				display:"none",
			})
		})
		return false;
	}
}
function opendialog(){
		var mask=document.createElement("div");
		mask.className="mask";
		mask.style.position="absolute";
		mask.style.left=0;
		mask.style.right=0;
		mask.style.top=0;
		mask.style.bottom=0;
//		mask.style.background="rgba(0,0,0,0.6)";
		var w=document.documentElement.scrollWidth;
		var h=document.documentElement.scrollHeight;
		mask.style.width=w+"px";
		mask.style.height=h+"px";
		document.body.appendChild(mask);
		
		var div=document.createElement("div");
		div.style.width="200px";
		div.style.height="200px";
		div.style.border="1px solid #aaa";
		div.style.position="absolute";
		div.style.background="white";
		var clientH=document.documentElement.clientHeight;
		var dialog_model=document.getElementById("dialog_model");
		div.innerHTML=dialog_model.innerHTML;
		mask.appendChild(div);
		div.style.left=(w-div.offsetWidth)/2-200+"px";
		div.style.top=(clientH-div.offsetHeight)/2-150+"px";
	}