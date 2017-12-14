
$(".goodsmanage").on("click",function(){
	$(".system_menu_list2").toggle();
})
$(".create_checkbox").on("click",function(){
	create(1);
	
})
$(".create_rongliang").on("click",function(){
	create(2);
})
function create(num){
	var tip="";
	if(num==1){
		tip="规格格式 xx克/袋";
	}
	if(num==2){
		tip="容量规格 袋/瓶";
	}
	$("<div class='specaildiv'><span class='create_close'>x</span><input class='create_content1' type='text' value='' placeholder='"+tip+"'><span class='create_do'>确定<span></div>").appendTo($(".specail"+num));
	$(".create_close").on("click",function(){
		$(".specaildiv").remove();
	})
	$(".create_do").on("click",function(){
		var text=$(".create_content1").val();
//		$('<input type="checkbox"><span>'+text+'</span>').appendTo($(".specail"+num));
		if(num==1){
			$.ajax({
				type:"get",
				url:"http://211.159.187.227:8080/product/addSpec.do",
				async:true,
				data:{
					specName:text,
				},
				dataType:"json",
				success:function(data){
					console.log(data);
					var html=`<input type="checkbox" name="" id="" value="${data.spec_id}" />	<span>${data.spec_name}</span>`;
					$(".specail1").append(html);		
				}
			});
		}
		if(num==2){
			$.ajax({
				type:"get",
				url:"http://211.159.187.227:8080/product/addUnit.do",
				async:true,
				dataType:"json",
				data:{
					unitName:text,
				},
				success:function(data){
					var html=`<input type="checkbox" name="" id="" value="${data.unit_id}" /><span>${data.unit_name}</span>`;
					$(".specail2").append(html);		
				}
			});
		}
		
		$(".specaildiv").remove();
	})
}
//点击添加商品
$(".add_goods").on("click",function(){
	$(".li_content").css({
		display:"block",
	})
	$.ajax({
		type:"get",
		url:" http://211.159.187.227:8080/product/init.do",
		dataType:"json",
		async:true,
		success:function(data){
			console.log(data);
			var html1="";
			var html2="";
			for(var i=0;i<data.specs.length;i++){
				html1+=`<p><input type="checkbox" name="" id="" value="${data.specs[i].spec_id}" />	<span>${data.specs[i].spec_name}</span></p>`
			}
			for(var i=0;i<data.unit.length;i++){
				html2+=`<p><input type="checkbox" name="" id="" value="${data.unit[i].unit_id}" /><span>${data.unit[i].unit_name}</span></p>`
			}
			$(".specail1").html(html1);
			$(".specail2").html(html2);		
		}
	})
})
//点击通用信息
$(".addgoods_nav_item1").on("click",function(){
	$(".addgoodstable").css({
		display:"table",
	});
	$(".guige").css({
		display:"block",
	})
	$(".rongliang").css({
		display:"block",
	})
})
//点击确定（sure）
$(".sure").on("click",function(){
	var arr1=[];
	var arr2=[];
	$(".specail1 input").each(function(index,obj){
		if(this.checked){
			arr1.push($(this).val());
		}
	})
	$(".specail2 input").each(function(index,obj){
		if(this.checked){
			arr2.push($(this).val());
		}
	})
	var pnumber=$(".productnum").val();
	var pname=$(".productname").val();
	var pinfo=$(".productinfo").val();
	var ppoint=$(".productpoint").val()*1;
	var pdiscount=$(".productdiscount").val()*1;
	if(arr1.length!=0&&arr2.length!=0&&pnumber!=""&&pname!=""&&pinfo!=""){
		$.ajax({
			type:"get",
			url:"http://211.159.187.227:8080/product/add.do",
			async:true,
			dataType:"json",
			traditional: true,
			data:{
				pName:pname,
				pNumber:pnumber,
				pInfo:pinfo,
				pPoint:ppoint,
				pDiscount:pdiscount,
				units:arr1,
				specs:arr2,
			},
			success:function(data){
				console.log(data);
				
				$(".addgoods_nav_content").css({
					display:"block",
				})
				$(".price_table").css({
					display:"table",
				})
				$(".addgoods_nav_content").css({
					display:"block",
				})
				var html="";
				for(var i=0;i<data.length;i++){
					console.log(data[i].unit.unit_name);
					html+=`<tr>
								<td>${data[i].p_id}</td>
								<td>${data[i].spec.spec_name}</td>
								<td>${data[i].unit.unit_name}</td>
								<td><input class="goods_price" type="text" /></td>
								<td><input class="goods_stock" type="text" /></td>
								<td><input class="stock_num" type="text" /></td>
							</tr>`;	
				};
				$(".Tbody").html(html+"<tr><td colspan='6'><button class='btn btn-info final_add'>添加</button></td></tr>");
				$(".final_add").on("click",function(){
					var arr1=[];
					var arr2=[];
					var arr3=[];
					var arr4=[];
					$(".goods_price").each(function(){
						arr1.push($(this).val());
						
					});
					$(".goods_stock").each(function(){
						arr2.push($(this).val());
					});
					$(".stock_num").each(function(){
						arr3.push($(this).val());
					});
					for(var i=0;i<data.length;i++){
						arr4.push(data[i].price_id);
					};
					$.ajax({
						type:"get",
						url:"http://211.159.187.227:8080/product/addPriceNameAndStock.do",
						dataType:"json",
						traditional:true,
						async:true,
						data:{
							priceName:arr1,
							stockName:arr2,
							stockNum:arr3,
							priceId:arr4,
						},
						success:function(data){
							if(data=="success"){
								tips("添加成功");
							}
						}
					})
				})
			}
		});
	}
})
function tips(txt){
	$('<div class="success_add"></div>').css({
		position:"absolute",
		top:"50%",
		left:"50%",
		transform:"translateX(-150px) translateY(-30px)",
		width:"150px",
		height:"30px",
		textAlign:"center",
		lineHeight:"30px",
		color:"green",
		fontSize:"20px",
		border:"1px solid lightblue",
	}).html(txt).appendTo($("body"))
	setTimeout(function(){
		$(".success_add").remove();
	},3000);
}
//商品列表
//$(".goods_menu").on("click",function(){
//	$(".goods_lists").css({
//		display:"block",
//	})
//})


//商品分类
//点击创建一级分类
$(".sure_one").on("click",function(){
	var val=$(".create_one_text").val();
	if(val!=""){
		$.ajax({
			type:"get",
			url:"http://10.80.13.145:8080/category/insertCategory.do",
			data:{
				name:val,
				parentId:0,
			},
			async:true,
			success:function(data){
				if(data){
					tips("创建成功");
				}
			}
		});
	}
})
//点击创建二级分类
$(".accept_one").one("click",function(){
	$.ajax({
		type:"get",
		url:"http://211.159.187.227:8080/category/find.do",
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				$('<option value='+data[i].cId+'></option>').html(data[i].cName).appendTo($(".accept_one"));
			}
			
		}
	})
})
$(".sure_two").on("click",function(){
	var txt=$(".sure_two_text").val();
	var preId=$(".accept_one").val();
	if(txt!=""){
		$.ajax({
			type:"get",
			url:"http://10.80.13.145:8080/category/insertCategory.do",
			async:true,
			data:{
				name:txt,
				parentId:preId,
			},
			dataType:"json",
			success:function(data){
				if(data){
					tips("创建成功");
				}
			}
		})
	}
})
//点击创建三级分类
$(".accept_two").one("click",function(){
	$.ajax({
		type:"get",
		url:"http://211.159.187.227:8080/category/find.do",
		async:true,
		dataType:"json",
		success:function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				$('<option value='+data[i].cId+'></option>').html(data[i].cName).appendTo($(".accept_two"));
			}
			
		}
	})
})
//点击获取二级分类
$(".accept_three").one("click",function(){
	var preId=$(".accept_two").val();
	$.ajax({
		type:"get",
		url:"http://211.159.187.227:8080/category/find2.do",
		async:true,
		dataType:"json",
		data:{
			cId:preId,
		},
		success:function(data){
			console.log(data);
			for(var i=0;i<data.length;i++){
				$('<option value='+data[i].cId+'></option>').html(data[i].cName).appendTo($(".accept_three"));
			}
			
		}
	})
})
$(".sure_three").on("click",function(){
	var txt=$(".sure_three_text").val();
	var preId=$(".accept_three").val();
	$.ajax({
		type:"get",
		url:"http://10.80.13.145:8080/category/insertCategory.do",
		async:true,
		data:{
			name:txt,
			parentId:preId,
		},
		success:function(data){
			if(data){
				tips("插入成功");
			}
		}
	});
})
