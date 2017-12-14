//请求数据
$.ajax({
	type: "get",
	url: "http://10.80.16.104:8080/shopping/user.do?uId=1",
	async: true,
	dataType: "json",
	success: function(data) {
		console.log(data);
		$(data).each(function(index, obj) {
			$(".xz4").before("<div class='xz3'  aa="+data[index].shoppingCarId+" ck="+data[index].price.stocks[0].stockNum+"><ul class='clearfix'><li><input type='checkbox' name='' id='' class='sp' value='' checked='checked' /></li><li><img src='../image/img_h/1622_thumb_G_1506108784789.jpg' class='img' /> </li><li> <a href='###' class='spm'>" + data[index].price.detailsProduct.pName + "</a></li><li><dvi class='yxq'>商品有效期</dvi><dvi class=''></dvi></li><li><div class=''>" + data[index].price.unit.unit_name + "</div></li><li>  <div class='djj'>￥" + data[index].price.price_name + "</div></li><li> <a href='###' class='jiang aa'>-</a><input type='text' id='' value=" + data[index].num + " class='bb' /><a href='###' class='jia aa'>+</a></li><li><div class='jjg''>￥105</div></li><li><p class='p1'>删除</p><p>收入收藏夹</p></li></ul></div>");
		});

		var sum = 0;
		var len = 0;
		$(".xz3 .sp").each(function(index) {
			var dj = Number($(".xz3 .sp:checked").eq(index).parents("ul").children().children(".djj").html().substring(1));
			var shu = Number($(".xz3 .sp:checked").eq(index).parents("ul").children().children(".bb").val());
			var hh = shu * dj;
			$(".xz3 .sp").eq(index).parents("ul").children().children(".jjg").html("￥" + shu * dj);
			sum += Number(hh);
			len += shu;
		});
		$(".shangpin2_1 .q").eq(0).html("￥" + sum);
		$(".shangpin2_1 .q").eq(1).html(len);
		$(".xz4 .xz4_2").html("￥" + sum);

		// 六个触发事件地方
		// 全选  单选 删除 删除所有  加 减

		// 全选
		$(".qxx").click(function() {
			$(".sp:checkbox").prop("checked", this.checked);
			$(".qxx").prop("checked", this.checked);
			$(".mf").prop("checked", this.checked);
			var sum = 0;
			var len = 0;
			$(".xz3 .sp:checked").each(function(index) {
				var dj = Number($(".xz3 .sp:checked").eq(index).parents("ul").children().children(".djj").html().substring(1));
				var shu = Number($(".xz3 .sp:checked").eq(index).parents("ul").children().children(".bb").val());
				var hh = shu * dj;
				$(".xz3 .sp:checked").eq(index).parents("ul").children().children(".jjg").html("￥" + shu * dj);
				sum += Number(hh);
				len += shu;
			})
			$(".shangpin2_1 .q").eq(0).html("￥" + sum);
			$(".shangpin2_1 .q").eq(1).html(len);
			$(".xz4 .xz4_2").html("￥" + sum);
		})
		// 单选
		$(".sp").click(function() {
			$(".qxx").prop("checked", $('.sp:checked').length == $('.sp:checkbox').length);
			if($('.sp:checked').length == 0) {
				$(".mf").prop("checked", false);
			} else {
				$(".mf").prop("checked", true);
			}

			var aa = Number($(".q").eq(0).html().substr(1));
			var bb = Number($(this).parents("ul").children().children(".jjg").html().substring(1));
			var mm = Number($(".q").eq(1).html());
			var nn = Number($(this).parents("ul").children().children(".bb").val());
			if($(this).prop("checked") == true) {
				var cc = aa + bb;
				$(".q").eq(0).html("￥" + cc);
				$(".xz4 .xz4_2").html("￥" + cc);
				$(".q").eq(1).html(Number($(".q").eq(1).html()) + Number($(this).parents("ul").children().children(".bb").val()));
			} else {
				var cc = aa - bb;
				$(".q").eq(0).html("￥" + cc);
				$(".xz4 .xz4_2").html("￥" + cc);
				$(".q").eq(1).html(Number($(".q").eq(1).html()) - Number($(this).parents("ul").children().children(".bb").val()));
			}
		})
		// 删除所有
		$(".del").click(function() {
			if(confirm("确定删除选中的商品？")) {
				$('.sp:checked').parents(".xz3").remove();
				$(".xz4 .xz4_2").html("￥0");
				$(".shangpin2_1 .q").eq(0).html("￥0");
				$(".shangpin2_1 .q").eq(1).html("0");
			}
		})

		// 删除
		$(".xz3 .p1").click(function() {
			$(this).parents(".xz3").remove();
			$("#cb").prop("checked", $('.sp:checked').length == $('.sp:checkbox').length);

			if($(this).parents("ul").children().children("input.sp").prop("checked")) {
				var aa = Number($(".q").eq(0).html().substr(1));
				var bb = Number($(this).parents("ul").children().children(".jjg").html().substring(1));
				var mm = Number($(".q").eq(1).html());
				var nn = Number($(this).parents("ul").children().children(".bb").val());
				if($(this).prop("checked") == true) {
					var cc = aa + bb;
					$(".q").eq(0).html("￥" + cc);
					$(".xz4 .xz4_2").html("￥" + cc);
					$(".q").eq(1).html(Number($(".q").eq(1).html()) + Number($(this).parents("ul").children().children(".bb").val()));
				} else {
					var cc = aa - bb;
					$(".q").eq(0).html("￥" + cc);
					$(".xz4 .xz4_2").html("￥" + cc);
					$(".q").eq(1).html(Number($(".q").eq(1).html()) - Number($(this).parents("ul").children().children(".bb").val()));
				}
			}
		})

		// 加减
		$(".xz3 .jia").click(function() {
			var ck = Number($(this).parents(".xz3").attr("ck"));//库存量
			$(this).prev().prop("value", (Number($(this).prev().prop("value")) + 1)<=ck ? (Number($(this).prev().prop("value")) + 1) : ck);
			var mm = Number($(this).parents("ul").children().children(".djj").html().substring(1)); //单价
			var nn = Number($(this).parents("ul").children().children(".bb").val()); //数量
			var aa = Number($(".q").eq(0).html().substr(1)); //总价
			var bb = Number($(".q").eq(1).html()); //总数量
			bb++;
			aa += mm;
			var cc = mm * nn;
			$(this).parents("ul").children().children(".jjg").html("￥" + cc);
			$(".q").eq(0).html("￥" + aa);
			$(".q").eq(1).html(bb);
			$(".xz4 .xz4_2").html("￥" + aa);
			
			sendc($(this));
		})

		$(".xz3 .jiang").click(function() {
			var mm = Number($(this).parents("ul").children().children(".djj").html().substring(1)); //单价
			var nns = Number($(this).next().prop("value")); //数量
			var aas = mm * nns;
			$(this).next().prop("value", (Number($(this).next().prop("value")) - 1) <= 0 ? 1 : Number($(this).next().prop("value")) - 1);
			var mm = Number($(this).parents("ul").children().children(".djj").html().substring(1)); //单价
			var nn = Number($(this).next().prop("value")); //数量
			var aa = Number($(".q").eq(0).html().substr(1)); //总价
			var bb = Number($(".q").eq(1).html()); //总数量
			var cc = mm * nn;
			bb = bb - nns + nn;
			aa = aa - aas + cc;
			$(this).parents("ul").children().children(".jjg").html("￥" + cc);
			$(".q").eq(0).html("￥" + aa);
			$(".q").eq(1).html(bb);
			$(".xz4 .xz4_2").html("￥" + aa);
			
			sendc($(this));
		});
	}
});
//改变数量是发送请求
function sendc(a){
	var num = a.parent().children(".bb").val();
	var spc = a.parents(".xz3").attr("aa");
	$.ajax({
		type:"get",
		url:"http://10.80.16.104:8080/shopping/changeNum.do?num="+num+"&shoppingCarId="+spc,
		async:true,
		success:function(aa){
			console.log(aa);
		}
	});
}

$(".content_nav_2").click(function(){
	$(".yc").css("display","none");
	$(".content_nav_2").css({
		"background":"rgb(5, 126, 5)",
		"color":"white"
	});
	$(".content_nav_1").css({
		"background":"white",
		"color":"#333333"
	});
});
$(".content_nav_1").click(function(){
	$(".yc").css("display","block");
	$(".content_nav_1").css({
		"background":"rgb(5, 126, 5)",
		"color":"white"
	});
	$(".content_nav_2").css({
		"background":"white",
		"color":"#333333"
	});
});

$(".jiesuan").click(function(){
	var spcd = [];
	var num = [];
	$(".sp:checked").parents(".xz3").each(function(index){
		spcd[index] = Number($(".sp:checked").parents(".xz3").eq(index).attr("aa"));
		num[index] = Number($(this).find(".bb").val());
	});
	console.log(spcd,num);
//	window.location.href="jiesuanye.html?shoppingCarId="+spcd+"&num="+num; 
	window.open("jiesuanye.html?shoppingCarId="+spcd+"&num="+num,"target=_blank");
});
