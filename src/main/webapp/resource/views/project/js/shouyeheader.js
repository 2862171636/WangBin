//列表渲染
$(window).one("load", function() {
	$.ajax({
		type: "get",
		url: "http://211.159.187.227:8080/category/find.do",
		async: true,
		dataType: "json",
		success: function(data) {
//			console.log(data);
			//左侧边栏菜单列表渲染
			$.each(data, function(index, value) {
				if(index < 13){
						$('<li><h4><a href="shangpinzhanshi.html?way=id&categoryId=' + data[index].cId + '">' + data[index].cName + '</a></h4></	li>').appendTo(".menu_list_item");
				}
			})
				//商品列表自适应高度
				$(".menu_list .menu_list_item>li").each(function(index, obj) {
					$(this).on("mouseover", function() {
						$.ajax({
							type: "get",
							url: "http://211.159.187.227:8080/category/find2.do",
							data: {
								cId: index + 1,
							},
							dataType: "json",
							success: function(data) {
//								console.log(data)
								var len = data.length;
								var lefthtml="";
								var righthtml="";
								for(var i=0;i<len;i++){
									if(i<len-1){
										 lefthtml+=`<dl><dt><a href="shangpinzhanshi.html?way=id&categoryId=${data[i].cId}">${data[i].cName}</a></dt>
											${adddd(data[i].categoryList)}
										</dl>`;
									}else{
										righthtml=`<div class="tag_list_right fr"><h4><a href="shangpinzhanshi.html?way=id&categoryId=${data[i].cId}">${data[i].cName}</a></h4>
											<ul class="tag_list_right_list clearfix">
											${addli(data[i].categoryList)}
											</ul>
										</div>`
									}
								}
								$(".tag_list").html('<div class="tag_list_left fl clearfix ">'+lefthtml+'</div>' + righthtml);
								var lh = $(".tag_list_left").height();
								var rh = $(".tag_list_right").height();
								var h = lh - rh > 0 ? lh : rh;
								$(".tag_list_left").height(h);
								$(".tag_list_right").height(h);

							}
						})
					})
				})			
		}
	});
})
function adddd(arrdd){
	html="";
	for(var i=0;i<arrdd.length;i++){
		html+=`<dd><a href="shangpinzhanshi.html?way=id&categoryId=${arrdd[i].cId}">${arrdd[i].cName}</a></dd>`
	}
	return html;
}
function addli(arrli){
	var html="";
	for(var i=0;i<arrli.length;i++){
	   html+=`<li><a href="shangpinzhanshi.html?way=id&categoryId=${arrli[i].cId}">${arrli[i].cName}</a></li>`
	}
	return html;
}
//用户登录判断
window.onload = function() {
	var str = document.cookie;
	if(str == "") {
		$(".h6").html("欢迎光临美鲜冻品商城");
	} else {
		var cookie = str.split("=")[1];
		var username = str.split("=")[0];
		$(".h6").html(cookie + ",欢迎光临美鲜冻品商城");
		$(".loginandregister").html('<a class="exit" href="###">[退出]</a>');
		$(".exit").on("click", function() {
			setCookie(username, "", -1, "/");
			$(".h6").html("欢迎光临美鲜冻品商城");
			$(".loginandregister").html('<a href="../../login/html/index.html">登录</a>|<a href="../../register/index.html">注册</a>');
		})
	}
}

//搜索框请求加渲染
$('.text').bind('keyup', function() {
	var val = $(".text").val();
	if(val != "") {
		$.ajax({
			type: "get",
			url: "http://10.80.13.73:8080/select/lists.do",
			async: true,
			data: {
				listname: val,
			},
			dataType: "json",
			success: function(data) {
				$(".resultmsg_list").html("");
				if(data.error) {
					$(".resultmsg").css({
						display: "none",
					});
					return;
				} else {
					for(var i = 0; i < data.success.length; i++) {
						$('<li><a href=shangpinzhanshi.html?way=name&keyword=' + data.success[i].pName + '>' + data.success[i].pName + '</a></li>').appendTo(".resultmsg_list");
						$(".resultmsg").css({
							display: "block",
						});
					}
				}
			}
		});
	}
});
//for(var i = 0; i < result.success.length; i++) {
//	if(i <= 5) {
//		$('<li><a href="' + result.success[i].pId + '">' + result.success[i].pName + '</a></li>').appendTo(".resultmsg_list");
//		$(".resultmsg").css({
//			display: "block",
//		});
//	}
//}
//点击关闭搜索提示框
$(".close").on("click", function() {
	$(".resultmsg").css({
		display: "none",
	});
})
//点击搜素按钮
$(".withlist").on("click", function() {
	var val = encodeURI($(".text").val());
	if(val == "") {
		$(".withlist").prop({
			href: "###",
		})
	} else {
		$(".withlist").prop({
			href: "shangpinzhanshi.html?way=name&keyword=" + val,
		})
	}

})

// 汉字转编码
//function tounicode(data)
//{
// if(data == '') return 'no';
// var str =''; 
// for(var i=0;i<data.length;i++)
// {
//    str+="\\u"+parseInt(data[i].charCodeAt(0),10).toString(16);
// }
// console.log(str)
// return str;
//}