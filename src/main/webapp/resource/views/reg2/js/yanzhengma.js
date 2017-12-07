$('#yanzhengma').codeVerify({
	type : 1,
	width : '100px',
	height : '40px',
	fontSize : '12px',
	codeLength : 4,
	// btnId : 'content',
	ready : function() {
	},
	success : function() {
		alert('验证匹配！');
	},
	error : function() {
		alert('验证码不匹配！');
	}
});
		 $(function() {
    $( "#dialog" ).dialog();
  });

$(".varify-input-code").on("blur",function(){
	var str="";
	$("font").each(function(){
		str+=$(this).html();
		
	})
	var txt=$(".varify-input-code").val();
	txt=txt.toLowerCase();
	str=str.toLowerCase();
	if(str==txt){
		alert("验证通过");
	}else{
		alert("验证码不匹配");
		// return false;
	}
})
