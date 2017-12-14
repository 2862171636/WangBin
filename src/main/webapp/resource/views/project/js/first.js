//function resizenow() {
//	var browserwidth = $(".window ul").width();
//	var browserheight = $(".window ul").height();
//	console.log(browserwidth)
//	jQuery('.bonfire-pageloader-icon').css('right', ((browserwidth - jQuery(".bonfire-pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".bonfire-pageloader-icon").height())/2));
//};             
//resizenow();


var ul = document.querySelector(".first .window ul");

window.onload = function(){
	opendialog();
}
// 首页弹出框、
function opendialog(){
		var mask=document.createElement("div");
		mask.style.position="fix";
		mask.style.left=0;
		mask.style.right=0;
		mask.style.top=0;
		mask.style.bottom=0;
		mask.style.background="rgba(0,0,0,0.6)";
		mask.style.zIndex = 100;
		mask.className = "mask";
		var w=document.documentElement.scrollWidth;
		var h=document.documentElement.scrollHeight;
		mask.style.width=w+"px";
		mask.style.height=h+"px";
		document.body.appendChild(mask);
		var div=document.createElement("div");
		div.style.width="950px";
		div.style.height="440px";
		div.style.border="1px solid #aaa";
		div.style.position="absolute";
		div.className = "kuang";
		var clientH=document.documentElement.clientHeight;
		var dialog_model=document.getElementById("dialog_model");
		div.innerHTML=dialog_model.innerHTML;
		mask.appendChild(div);
		$(".kuang").append("<span class='close'>X<span>");
		$(".kuang").append("<img src='../image/img_ltt/1512065102533904254.jpg'>");
		$(".close").css({
			color:"white",
			position:"absolute",
			right: "10px",
			top: "10px",
			display: "block",
			width:"30px",
			height:"30px",
			textAlign:"center",
			lineHeight:"30px",
			borderRadius:"50%",
			fontSize:"20px",
			background:"rgba(0,0,0,0.6)",
		});
		// 点击关闭按钮
		$(".close").click(function(){
			console.log(1);
			$(".mask").css("display","none");
		});
		div.style.left=(w-div.offsetWidth)/2+"px";
		div.style.top=(clientH-div.offsetHeight)/2+"px";
		var speed=3;
		var toph=100;
		var timer=setInterval(function(){
			toph+=speed;
			div.style.top=toph+"px";
			if(toph>=(clientH-div.offsetHeight)/2){
				clearInterval(timer);
			}
		},20);
		
	}


function lunbo(i){
	var btns = document.querySelectorAll(".window .btn .dian");
	var lis = document.querySelectorAll(".window li");
	var w = lis[0].offsetWidth;
	ul.style.width = w*i + "px";
	var ulWidth = w*i;
	console.log(ul.style.height,ulWidth)
	console.log(w,btns.length);
	// 自动播放的轮播图
	var index = 0;
	function autoplay(){
		index++;
		if(index > lis.length-1){
			index = 0;
		}	
		var boxLeft = index*w;
//		console.log(boxLeft)
		ul.style.left = -boxLeft+"px";
		btn();
	}
	// 按钮
	function btn(){
		for(var i = 0; i < btns.length; i++){
			btns[i].index = i;
				if(i == index){
					btns[i].style.height = "50px";
					btns[i].style.lineHeight = "50px";
					btns[i].style.background = "rgba(0,0,0,0.6)";
					btns[i].style.marginTop = "-10px";
				}else{
					btns[i].style.height = "40px";
					btns[i].style.lineHeight = "40px";
					btns[i].style.background = "rgba(0,0,0,0.4)";
					btns[i].style.marginTop = "-0px";
			}
		}
	}
	function agin(){
		clearInterval(timer);
		timer = setInterval(function(){
			autoplay();
		},3000);
	}
	var	timer = setInterval(function(){
			autoplay();
	},3000);
	// 点击播放
	for(var i = 0; i < btns.length; i++){
		btns[i].index = i;
		btns[i].onclick = function(){
			index = this.index;
			var boxLeft = index*w;
			ul.style.left = -boxLeft+"px";
			agin();
			btn();
		}
	}
}

var mySwiper = new Swiper ('.swiper-container', {
	width: 960,
	height: 245,
    direction: 'horizontal',
    loop: true,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
 }) 
 // 鼠标移入轮播窗口按钮变色
 $('.new_list .swiper1').mouseover(function(){
 	$('.new_list .swiper1 .right').css('boxShadow','-4px 0 2px rgba(0,0,0,0.3)');
 	$('.new_list .swiper1 .left').css('boxShadow','4px 0 2px rgba(0,0,0,0.3)');
 })
  $('.new_list .swiper1').mouseout(function(){
 	$('.new_list .swiper1 .right').css('boxShadow','-3px 0 2px rgba(0,0,0,0.1)');
 	$('.new_list .swiper1 .left').css('boxShadow','3px 0 2px rgba(0,0,0,0.1)');
 })
  // 大轮播图的渲染
$.ajax({
  	type:"get",
  	url:"http://211.159.187.227:8080/LBT/lbt.do?rId=0",
//	data:"",
  	dataType:"json",
  	async: true,
  	success:function(data){
  		console.log("??",data);
  		for(i in data){
  			$(".window ul").html($(".window ul").html()+"<li><img src="+data[i].rUrl+" alt='' /></li>");
  			$(".window .btn").append("<span class='dian'>"+data[i].rName+"</span>")
  		}
  		lunbo(data.length);
//		jQuery(".window ul li img").load(function(){
//			 resizenow();
//		});
  	}
}); 
  // 特惠专区鼠标移入切换
  var arrdiscountVal = [0,44,45,46,47,48];
  $('.discounts .discounts_title_right li').each(function(index,obj){
  		$(this).val(arrdiscountVal[index]);
  		var isF = true;
  	$(this).mouseenter(function(){
  		var val = $(this).val();
  		if(index >= 1){
  			if(isF){
  				isF = false;
	  			$.ajax({
		  			type:"get",
		  			url:"http://211.159.187.227:8080/homePage/selectHomePage.do",
		  			data:{category_id:val},
		  			dataType:"json",
		  			async:true,
		  			success:function(data){
		  				console.log(data);
		  				$('.discounts .discounts_list ul').eq(index).html(discountShow(data));
		  			}
		  		});
  				
  			}
  		}
//		特惠商品鼠标移入发生的变化
  		discountChange(index,this);
  		
  	})
  })
  // 特惠商品接受数据后铺页面
  function discountShow(data){
	var htmls = "";
  	for(var i = 0 ; i < data.length ; i++){
  		htmls += `<li>
			<div class="new_list_pic">
					<a href="shangpinxiangqing.html">
						<img src="${data[i].pImg}" alt="" />
					</a>
				</div>
				<div class="new_list_detail">
					<a href="shangpinxiangqing.html">
						<div>${data[i].pName}</div>
						<span>￥${data[i].pMoney}</span>
					</a>
				</div>
		</li>`
  	}
  	return htmls;
  }
  // 特惠商品鼠标移入发生的变化
  function discountChange(index,_this){
  	$('.discounts .discounts_title_right li').css({
				borderLeft: '1px solid #eee',
				borderRight: '1px solid #eee',
				borderTop: '1px solid #eee',
				borderBottom: "none",
			})
			
			$('.discounts .discounts_list ul').css({
	  			display:"none",
	  		})
			$(_this).css({
				border: "1px solid #1eaa39",
				borderBottom: "1px solid white",
			})
			$('.discounts .discounts_list ul').eq(index).css({
	  			display:"block",
	  	})
  }
  // 菜单hover
  $(".menu ul a").each(function(index,obj){
  	$(this).mouseenter(function(){
  		var y = -index*50;
  		console.log(y);
  		$(this).css({
  			width:"100px",
  			backgroundImage:"url(../image/img_ltt/float.png)",
  			backgroundPosition:"100px "+y+"px",
  		})
  	})
  	$(this).mouseleave(function(){
  		var y = -index*50;
  		console.log(y);
  		$(this).css({
  			width:"50px",
  			backgroundImage:"none",
  		})
  	})
  })
  // 菜单随着页面滚动
  $(window).scroll(function(){
  	var $top = $(document).scrollTop();
  	// 新品首发
  	var $new = $(".new_first").offset().top;
  	var $discount = $('.discounts').offset().top;
  	var arr = [$new,$discount];
  	$(".Fs").each(function(index,obj){
  		arr.push($(this).offset().top);
  	});
//	console.log($new,$top);
  	$(".menu ul a").each(function(index,obj){
  		if($top>arr[index] && $top <arr[index+1]){
  			var y = -index*50;
  			$(this).css({
  				width:"50px",
  				backgroundImage:"url(../image/img_ltt/float.png)",
  				backgroundPosition:"100px "+y+"px",
  			})
  		}else{
  			$(this).css({
  				backgroundImage:"none",
  			})
  		}
  	})
  	
  })
  
  
  
var arrTitle = ["肉禽蛋品","粮油副食","薯制品","乳制品","披萨意面","特色小食"];

var arrFs = ["1F","2F","3F","4F","5F","6F"];
// hover楼层的商品分类
var arrDec = [['推荐商品','冷冻肉产品','冷冻禽类','肉制品'],['推荐商品','面','馒头','西式调料','中式调料'],['推荐商品','芝士','黄油','奶油','牛奶'],['推荐商品','芝士','黄油','奶油','牛奶'],['推荐商品','芝士','黄油','奶油','牛奶'],['推荐商品','芝士','黄油','奶油','牛奶']];
// 给每个hover的li标签绑定value值
var arrRequest = [["0","19","21","23"],["0","24","25","26","27"],["0","28","29","30","31"],["0","32","33","34","35"],["0","36","37","38","39"],["0","40","41","42","43"]];
function liHover(i){
	var htmls = "";
	for(var j = 0 ; j < arrDec[i].length ; j++){
		htmls += `<li value="${arrRequest[i][j]}">
					<a href="###">
						<span>${arrDec[i][j]}</span>
					</a>
				</li>`;
//		console.log(arrDec[i][j],i,j);
	}
	return htmls;
}
// 每楼的大图片
var arrImg = ["../image/img_ltt/1.jpg","../image/img_ltt/2.jpg","../image/img_ltt/3.jpg","../image/img_ltt/4.jpg","../image/img_ltt/5.jpg","../image/img_ltt/6.jpg"];
// 商品分类列表
var arrGoodlist = [["冷冻肉产品","冷冻禽类","肉制品"],["面","罐头","西式调料","中式调料","豆制品"],["薯条系列","异性署系列"],["芝士","黄油","奶油","牛奶"],["匹萨","意面"],["鸡肉类","海鲜类","点心类","蔬菜类","面食类","料理包"]];
function goodsList(i){
//	console.log(arrGoodlist[i].length);
	var htmls = "";
	for(var j = 0 ; j < arrGoodlist[i].length ; j++){
		htmls += '<a href="">'+arrGoodlist[i][j]+'</a>';
	}
//	console.log(htmls)
	return htmls;
}
// 推荐品牌
var arrBrand = [["大成","荷美尔","六合","安井","中惠","鲜纳百川","越汇","箐辰"],["果太太","享式","雀巢","花旗","啄木鸟","家乐","味好美","辛普劳"],["路多萨","贝贝之星","爱薯福","麦肯","蓝威斯顿","辛普劳","蓝顿旭美","爱味客"],["乳美","发喜","雀巢","三元","百吉福","安佳","MG","妙可蓝多"],["芮玛","啄木鸟","大成","亚洲渔港","元盛","麦西恩","康力","荷美尔"],["伍氏料理","瑞发德","贝贝之星","大成","亚洲渔港","麦肯","元盛","麦西恩"]];
function goodsBrand(i){
	var htmls = "";
	for(var j = 0 ; j < arrBrand[i].length ; j++){
		htmls += '<a href="">'+arrBrand[i][j]+'</a>';
	}
	return htmls;
}
// 五楼原始数据
var goodsPic = [["1_1.jpg","1_2.jpg","1_3.jpg","1_4.jpg","1_5.jpg","1_6.jpg","1_7.jpg"],["2_1.jpg","2_2.jpg","2_3.jpg","2_4.jpg","2_5.jpg","2_6.jpg","2_7.jpg"],["3_1.jpg","3_2.jpg","3_3.jpg","3_4.jpg","3_5.jpg","3_6.jpg","3_7.jpg"],["4_1.jpg","4_2.jpg","4_3.jpg","4_4.jpg","4_5.jpg","4_6.jpg","4_7.jpg"],["5_1.jpg","5_2.jpg","5_3.jpg","5_4.jpg","5_5.jpg","5_6.jpg","5_7.jpg"],["6_1.jpg","6_2.jpg","6_3.jpg","6_4.jpg","6_5.jpg","6_6.jpg","6_7.jpg"]]
function goods1(i){
	var htmls = "";
	for(var j = 0 ; j < goodsPic[i].length ; j++){
//		console.log(goodsPic[i][j])
		htmls += `<li>
					<a href=""><img src="../image/img_ltt/${goodsPic[i][j]}" alt="" /></a>
				</li>`
	}
	return htmls;
}
// 五个楼层的生成
var content = "";
for(var i = 0 ; i < arrFs.length ; i++){
	content += 
		`<div class='Fs auto' id='F_${i+1}'>
			<div class="F1_top clearfix">
				<div class="F1_top_left fl clearfix">
					<div class="F1_logo fl">
						${arrFs[i]}	
					</div>
					<div class="F1_top_title fl">
						<span class="title_F1">${arrTitle[i]}</span>
						<span class="F1_selector">多重优惠 任君选择</span>
						<span class="F1_all">
							<a href="">本类全部商品 > </a>
						</span>
					</div>
				</div>
				<div class="F1_top_right fr">
					<ul class="clearfix adc">
					${liHover(i)}
					</ul>
				</div>
			</div>
			<div class="F1_content clearfix">
				<div class="F1_content_left fl">
					<div class="buy">
						<a href="">
							<img src="${arrImg[i]}" alt="" />
						</a>
					</div>
					<ul class="goods">
						<li>
							<h5>商品分类</h5>
							${goodsList(i)}			
						</li>
					</ul>
					<ul class="brands">
						<li>
							<h5>推荐品牌</h5>
								${goodsBrand(i)}
						</li>
					</ul>
				</div>
				<div class="F1_content_right fl">
					<ul class="F1_list1 clearfix">
						${goods1(i)}
					</ul>
					
				</div>
			</div>
		</div>`;
}

$(".banner").after(content);

for(var i = 0; i < 6; i++) {
//	console.log($(".F1_top_right").eq(i).find("ul"));
	$(".F1_top_right").eq(i).find("ul li").each(function(index,obj) {
		var count = 0;
		$(this).on("mouseenter",function() {
			var _this = this;
			changes(this,index);
			count++;
			// 当前楼层里面的第一个ul
			var ss = $(this).parents(".F1_top").next(".F1_content").find(".F1_content_right");
			var id = $(this).val();
			// 只请求一次ajax
			if(count == 1){
				if(index >= 1){
					one(ss,id);
				}	
			}
			console.log(count);
			
		});
	});
}
// 鼠标移入改变样式
function changes(_this,index){
	$(_this).parent().children("li").children().children().css({
				borderLeft: '1px solid #eee',
				borderRight: '1px solid #eee',
				borderTop: '1px solid #eee',
				borderBottom: "none",
			})
			$(_this).children().children().css({
				border: "1px solid #1eaa39",
				borderBottom: "1px solid white",
			})
			$(_this).parents(".F1_top").next(".F1_content").find(".F1_content_right ul").css({display:"none"});
			$(_this).parents(".F1_top").next(".F1_content").find(".F1_content_right ul").eq(index).css({display:"block"});
			
}
// hover时ajax请求
function one(ss,id){
	
	$.ajax({
		type:"get",
		url:"http://211.159.187.227:8080/homePage/selectHomePage.do",
		async:true,
		data:{category_id:id},
		dataType:"json",
		success:function(data){
			console.log(data);
			ss.html(ss.html()+requestDiv(data));
//					console.log(requestDiv(data));
		}
	});
}
// 根据请求的数据铺页面
function requestDiv(data){
	var data1 = data;
	var htmls = "<ul class='F1_list2 clearfix'>";
	for(var i = 0 ; i < data.length ;i++){
		htmls += `<li>
			<div class="F1_pic">
				<a href="shangpinxiangqing.html?pId=37">
					<img src="${data[i].pImg}" alt="" />
				</a>
			</div>
			<div class="F1_descrip">
				<a href="shangpinxiangqing.html?${data[i].pId}">
					<div class="goods_name">${data[i].pName}</div>
				</a>
				<a href="shangpinxiangqing.html?${data[i].pId}">
					<div class="goods_price">￥${data[i].pMoney}</div>
				</a>	
			</div>
		</li>`
	}
	htmls += "</ul>";
	return htmls;
}
