var ul = document.querySelector(".first .window ul");
var btns = document.querySelectorAll(".window .btn .dian");
var lis = document.querySelectorAll(".window li");
var w = lis[0].offsetWidth;
var ulWidth = ul.offsetWidth;
console.log(w);
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
				btns[i].style.background = "rgba(0,0,0,0.6)";
				btns[i].style.marginTop = "-10px";
			}else{
				btns[i].style.height = "40px";
				btns[i].style.background = "rgba(0,0,0,0.4)";
				btns[i].style.marginTop = "-0px";
			}
		}
	}
function agin(){
	clearInterval(timer);
	timer = setInterval(function(){
		autoplay();
	},2000);
}
var	timer = setInterval(function(){
		autoplay();
},2000);
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
  // 新品首发鼠标移入切换
  $('.discounts .discounts_title_right li').each(function(index,obj){
  	$(this).mouseenter(function(){
//		console.log($('.discounts .discounts_list ul').length)
		for(var i = 0 ; i < $('.discounts .discounts_list ul').length; i++){
			console.log(i,index);
			if(i == index){
				$(this).css({
					border: "1px solid #1eaa39",
					borderBottom: "1px solid white",
				})
	  			$('.discounts .discounts_list ul').eq(i).css({
		  			display:"block",
		  		})
			}else{
				$('.discounts .discounts_title_right li').eq(i).css({
					borderLeft: '1px solid #eee',
					borderRight: '1px solid #eee',
					borderTop: '1px solid #eee',
					borderBottom: "none",
				})
				
				$('.discounts .discounts_list ul').eq(i).css({
		  			display:"none",
		  		})
			} 		
		}
  		
  	})
  })
  // 5个楼层hover效果
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
  	var $f1 = $('.F1').offset().top;
  	var $f2 = $('.F2').offset().top;
  	var $f3 = $('.F3').offset().top;
  	var $f4 = $('.F4').offset().top;
  	var $f5 = $('.F5').offset().top;
  	var $f6 = $('.F6').offset().top;
  	var arr = [$new,$discount,$f1,$f2,$f3,$f4,$f5,$f6];
  	console.log(arr);
  	console.log($new,$top);
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
  
