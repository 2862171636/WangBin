function autoHeight(){
	var arr=[];
	arr=$(".tag_list");
	$.each(arr,function(){
		$(this).children(".wares_order").height($(this).height());
		$(this).children(".groom_brands").height($(this).height());
	})
}
autoHeight();

//此处是否可以添加点击事件以改变样式
//function active(){
//	var aLi=$(".header_row_nav ul li");
//	$.each(aLi,function(){
//		$(this).on("click",function(){
//			$(this).children("a").addClass("active");
//		})
//	});
//	
//}
//active();
