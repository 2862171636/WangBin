for(var i = 0 ; i < 12 ; i++){
	$('<li><div class="goods_pic"><a href=""><img src="../image/img_ltt/4134_thumb_G_1510179378876.jpg" alt="" /></a></div><div class="goods_des"><span>￥6.00</span><a href=""><p>美味源冰花酸梅酱（小样）270g/瓶</p></a></div><div class="goods_add"><a href=""><span>加入申请单</span></a></div></li>').appendTo(".goods_list ul");
}
for(var i = 1 ; i < $(".list ul li").length ;i++){
	$(".list ul li").eq(i).mouseover(function(){
		$(this).children("a").css({color:"#1a9733"})
	});
	$(".list ul li").eq(i).mouseout(function(){
		$(this).children("a").css({color:"black"})
	});
};
$(".nav_left ul li").each(function(index,obj){
//	console.log($(this));
	$(this).click(function(){
		console.log(1)
		changecol();
		$(this).css({background:"white"});
		$(this).children("a").css("color","#1a9733");
	})
});
function changecol(){
	$(".nav_left ul li").children("a").css("color","black");
	$(".nav_left ul li").css("background","#fafafc");
}
