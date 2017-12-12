//tabs
var clearTimer_miaosha;
var clearTimer_promote;
//商品组合切换
$('.combination_scroll').each(function(){
    var len = $(this).find('li').length;
    if(len > 3){
        $(this).closest('.combination_list').find('.combination_next').removeClass('disable');
    }
})
function combination_next(obj){
    var classname = $(obj).attr('class');
    var parent = $(obj).parent();
    var combi_len = parseInt($(parent).find('.page_curr').val());
    var combi_li_len =  $(parent).find('.combination_scroll li').length;
    var combi_all_len = combi_li_len-3;
    if(classname.indexOf('disable') > -1){
        return false;
    }
    if(combi_len+1 >= combi_all_len){
        $(parent).find('.combination_next').addClass('disable');
    }
    $(parent).find('.combination_prev').removeClass('disable');
    combi_len++;
    $(parent).find('.page_curr').val(combi_len);
    $(parent).find('.combination_scroll').animate({marginLeft:-(combi_len*208)+'px'});
}
function combination_prev(obj){
    var classname = $(obj).attr('class');
    var parent = $(obj).parent();
    var combi_len = parseInt($(parent).find('.page_curr').val());
    var combi_li_len =  $(parent).find('.combination_scroll li').length;
    var combi_all_len = combi_li_len-3;
    if(classname.indexOf('disable') > -1){
        return false;
    }
    if(combi_len-1 == 0){
        $(parent).find('.combination_prev').addClass('disable');
    }
    $(parent).find('.combination_next').removeClass('disable');
    combi_len--;
    $(parent).find('.page_curr').val(combi_len);
    $(parent).find('.combination_scroll').animate({marginLeft:-(combi_len*208)+'px'});
}
//点击购买

function combination_add(obj){
    var classname = $(obj).attr('class');
    var combination_dialog_min = parseInt($('.combination_dialog_min').val());     //可购买最小值
    var combination_dialog_max = parseInt($('.combination_dialog_max').val());     //可购买最大值
    var combination_single_price = $('.combination_single_price').val(); //一套价格
    var combination_dialog_value = parseInt($('.combination_dialog_value').val()) //当前购买数量
    if(classname.indexOf('disable') > -1){
        return false;
    }
    if(combination_dialog_value+1 > combination_dialog_max){
        $(obj).addClass('disable');
        return false;
    }
    $('.combination_dialog_reduce').removeClass('disable');
    combination_dialog_value++;
    $('.combination_dialog_all em').html(combination_single_price*combination_dialog_value);
    $('.combination_dialog_value').val(combination_dialog_value);
}
function combination_reduce(obj){
    var classname = $(obj).attr('class');
    var combination_dialog_min = parseInt($('.combination_dialog_min').val());     //可购买最小值
    var combination_dialog_max = parseInt($('.combination_dialog_max').val());     //可购买最大值
    var combination_single_price = $('.combination_single_price').val(); //一套价格
    var combination_dialog_value = parseInt($('.combination_dialog_value').val()) //当前购买数量
    if(classname.indexOf('disable') > -1){
        return false;
    }
    if(combination_dialog_value-1 < combination_dialog_min || ((combination_dialog_value-1) <= 0)){
        $(obj).addClass('disable');
        return false;
    }
    $('.combination_dialog_add').removeClass('disable');
    combination_dialog_value--;
    $('.combination_dialog_all em').html(combination_single_price*combination_dialog_value);
    $('.combination_dialog_value').val(combination_dialog_value);
}
//点击显示商品组合弹窗
function show_combination(obj){
    var parent = $(obj).closest('.combination_list');
    $('.combination_dialog_id').val($(parent).find('.combination_id').val());
    $('.combination_dialog .main_goods img').attr('src',$(parent).find('.main_goods img').attr('src'));
    var selectHtml = $($(parent).find('.combination_store').html());
    $('.combination_dialog_select').html(selectHtml);
    var len = $(parent).find('.combination_ul li').length;
    $('.combination_dialog .combination_ul').html($(parent).find('.combination_ul').html())
    $('.combination_dialog .combination_dialog_name').html('已搭配 '+len+' 件');
    var combination_news_price = $(parent).find('.combination_news_price').val();
    var combination_old_price = $(parent).find('.combination_old_price').val();
    var combination_old_save = $(parent).find('.combination_old_save').val();
    $('.combination_dialog .combination_dialog_news').html('套餐价：￥'+combination_news_price);
    $('.combination_dialog .combination_dialog_old').html('原价：￥'+ combination_old_price);
    $('.combination_dialog .combination_dialog_save').html('节省：￥'+combination_old_save);
    $('.combination_dialog .combination_dialog_all em').html(combination_news_price);
    $('.combination_dialog .combination_single_price').val(combination_news_price);
    $('.combination_dialog_min').val($(parent).find('.combination_min').val());
    $('.combination_dialog_max').val($(parent).find('.combination_max').val());
    $('.combination_dialog_value').val(1);
    $('.combination_dialog,.dialog_back').show();
    $('.combination_from').attr('value', $(obj).attr('class'));
}
function close_dialog(){
    $('.dialog_view').hide();
}
function get_all_price(argument) {
    var combination_single_price = $('.combination_single_price').val();
    var combination_dialog_value = $('.combination_dialog_value').val();
     $('.combination_dialog_all em').html(combination_single_price*combination_dialog_value);
}
$(function(){
    $('.combination_dialog_value').on('keyup',function(argument) {
        // body...
        var thisVal = $(this).val();
        var reg=/^[1-9]\d*$/;
        if(!reg.test(thisVal)){
            $(this).css('color','red');
        }else{
            $(this).css('color','#333');
            get_all_price();
        }
        
    })
    $('.combination_dialog_select').on('change',function(argument) {
        // body...
        var combination_dialog_id = $('.combination_dialog_id').val();
        var thisVal = $('.combination_dialog_select option:selected').val();
        $.post('goods.php?act=store_limit_num',{combination_dialog_id:combination_dialog_id,thisVal:thisVal},function(data){
            if(data.state == 1){
                $('.combination_dialog_min').val(data.min);
                $('.combination_dialog_max').val(data.max);
                var combination_dialog_value = $('.combination_dialog_value').val();
                if(data.max < combination_dialog_value){
                    $('.combination_dialog_value').val(data.max);
                    get_all_price();
                }
                $('.combination_dialog_reduce').removeClass('disable');
                $('.combination_dialog_add').removeClass('disable');
            }
        }, "json")
    })
	//标题中英文切换
    $('#detail_isEnglish').click(function(){
        var className = $(this).attr('class');
        if(className.indexOf('detail_chinese')>0){
            $(this).html('Eng').removeClass('detail_chinese');
            $('#detail_goods_name').removeClass('english').html($('#detail_goods_name').attr('oChinese'));
        }else{
            $(this).html('中文').addClass('detail_chinese');
            $('#detail_goods_name').addClass('english').html($('#detail_goods_name').attr('oEnglish'));
        }
    })
        $(".menu a").each(function(i){
            $(this).click(function(){
                $(".menu a").removeClass("on").eq(i).addClass("on");
                $(".cnt").hide().eq(i).show();
                return false;  //防止a跳转；
            })
    });


    $(".goods_type  li").click(function(){
		if($(this).find('a').attr('class').length >0 && $(this).find('a').attr('class').indexOf('btn_add_disable') > -1){
			return false;	
		}
        $(this).find("a").addClass('selected').closest('li').siblings().find('a').removeClass('selected');
        $(this).find("input").attr('checked','checked');
        $(this).closest(".selected").siblings().find("input").removeAttr('checked');
    });
	

    //        需要传入最大值
    var maxNum = 9999;
		
    $(".btn_reduce").click(function(){
        $this_num=$("#number").val();
        var Num = parseInt($this_num);
		if(is_weigh==1)
	{
		if(Num <= starting_weight_jin)
		{
			var d = dialog({
		quickClose: true,
		content: '购买数量不能低于起售重量'
		})
		d.show();
		setTimeout(function () {
                d.close();
            }, 1000);
    	}
		else
		{
			Num=Num-1;
		}
	}
	else{
		if(Num <= starting_weight_jin)
		{
			var d = dialog({
		quickClose: true,
		content: '购买数量不能低于起售数量'
		})
		d.show();
		setTimeout(function () {
				d.close();
			}, 1000);
		}
		else{
			if(Num>1){
				Num=Num-1;
			}
		}
	}
            $("#number").val(Num);
            if (Num<maxNum){
                $(this).closest('.calc_num').find('.btn_add').removeClass('btn_add_disable');
            }
        else {
            $(this).closest('.calc_num').find('.btn_reduce').addClass('btn_reduce_disable');
        }
		change_price(goods_id);
    });
	
    $(".btn_add").click(goods_add);

    function goods_add(){
    //            设置购买上线
        $this_num=$("#number").val();
        var checked_attr = $("input[name='spec_12']:checked").val();
        var a = limit_num_func(parseInt($this_num)+1, checked_attr);
        if(a == false){
            return false;
        }
        

        if(typeof(miaosha_num) != "undefined"){
            if($this_num >= miaosha_num){
                alert("超过限购数量");
                return false;
            }
        }
        var Num = parseInt($this_num);
        if(Num>0){
			
            Num=Num+1;
            $("#number").val(Num);
            $(this).closest('.calc_num').find('.btn_reduce').removeClass('btn_reduce_disable');
            if(Num>maxNum){
                $(this).closest('.calc_num').find('.btn_add').addClass('btn_add_disable');
                $("#number").val(maxNum);
            }
        }
    }
    $(".btn_reduce").hover(function(){
        $(this).addClass('btn_reduce_hover');
    },function(){
        $(this).removeClass('btn_reduce_hover');
    });
    $(".btn_add").hover(function(){
        $(this).addClass('btn_add_hover');
    },function(){
        $(this).removeClass('btn_add_hover');
    });
	
    $("#number").blur(function(){
        $nowNum = $(this).val();
        if($nowNum<1){
            var d = dialog({
                content: '<input  style="display: none"/>'+ '低于最低购买量'
            });
            d.showModal();
            $(".ui-popup-backdrop").click(function(){
                d.close().remove();
            });
            $(".calc_num :text").val("1");
        }
        else{
            if($nowNum>maxNum){
                var d = dialog({
                    content: '<input  style="display: none"/>'+ '高于最高购买量'
                });
                d.showModal();
                $(".calc_num :text").val(maxNum);
                $(".ui-popup-backdrop").click(function(){
                    d.close().remove();
                });
            }
        }
		change_price(goods_id);
    });
    //点击加入购物车的弹性动画

    $(function(){
        $(".btn_add_carts").mousedown(function(event){
            $this_num=$("#number").val();
            var checked_attr = $(".goods_type.unite_type").eq(0).find("input[name='spec_12']:checked").val();
            var a = limit_num_func(parseInt($this_num), checked_attr);
            if(a == false){
                return false;
            }
            if(pre_add_car()){
                $(this).addClass("click");
            }
        });
        $(".btn_add_carts").mouseup(function(){
            $(this).removeClass("click");
        })
    });

    $(function(){
        $(".btn_lg btn_now").click(function(){
            addCartNow();
            $(this).addClass("click");
        });
    });
	

    //增加价格弹出

    //    tabs
    $(".tab .tab_control li").each(function(i){
        $(this).find('a').click(function(){
            if(i == 3){
				$('#ECS_COMMENT').html('');
                $.ajax( {
                    type:'post',
                    url:'goods.php?act=change_comments',
                    data:{goods_id:goods_id},
                    dataType:"json",
                    success:function(result){
                        $('.tab .tab_control li a').removeClass('selected').eq(i).addClass('selected');
                        $('.tab .tabs_content ').hide().eq(i).show();
						$('#ECS_COMMENT').empty().html(result.comment_info);
                    }
                });
            }else{
                $('.tab .tab_control li a').removeClass('selected').eq(i).addClass('selected');
                $('.tab .tabs_content ').hide().eq(i).show();
            }

        })
    });
    // bottom_buy

    $(".bottom_buy .tab_control li").each(function(i){
        $(this).find('a').click(function(){
            $('.bottom_buy .tab_control li a').removeClass('selected').eq(i).addClass('selected');
            $('.bottom_buy .content_warp ').hide().eq(i).show();
        })
    });
    //    指定位置开始浮动
    $(window).scroll(function(){
        var listLocal = $('.pic_list').offset().top;
        var bottomLocal = $('.bottom_buy').offset().top;
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>listLocal ){
            $(".pic_list_floating").show();
        }
        else if(this_scrollTop>bottomLocal){
            $(".pic_list_floating").hide();
        }
        else {
            $(".pic_list_floating").hide();
        }
    });
    //    温馨提示tips
	$(".btn_add_new").click(goods_add_new);

    function goods_add_new(){
    //            设置购买上线
        $this_num=$("#number").val();
        var Num = parseInt($this_num);
        if(Num>0){
            Num=Num+1;
            $("#number").val(Num);
            $(this).closest('.calc_num').find('.btn_reduce').removeClass('btn_reduce_disable');
            if(Num>maxNum){
                $(this).closest('.calc_num').find('.btn_add').addClass('btn_add_disable');
                $("#number").val(maxNum);
            }
        }
		change_price(goods_id);
    }
	$(".btn_add_new").hover(function(){
        $(this).addClass('btn_add_hover');
    },function(){
        $(this).removeClass('btn_add_hover');
    });
        $(".btn_add_carts_new").mousedown(function(event){
            $this_num=$("#number").val();
            var checked_attr = $(".goods_type.unite_type").eq(0).find("input[name='spec_12']:checked").val();
            if(pre_add_car_r()){
                $(this).addClass("click");
            }
        });
        $(".btn_add_carts_new").mouseup(function(){
            $(this).removeClass("click");
        })
    
   });
function saveCombination(){
   // alert(123)
            store = $(".combination_dialog_select option:selected").val();
            num = $(".combination_dialog_value").val();
            pid = $(".combination_dialog_id").val();
            opfrom = $(".combination_from").val();
            if(opfrom == 'combination_cart'){
                $.ajax({
                    type:'post',
                    url:'cart.php?act=pack_ajax_add_cart',
                    data:{pid:pid, store:store, num:num},
                    dataType:'json',
                    async: false,
                    success:function(res){
                        if(res.state == 1){
                            alert('添加成功');
                        }else if(res.state == 11){
                            var d = dialog({
                                title:' ',
                                id:"m_login",
                                skin:'nopadding',
                                url:'goods.php?act=login',width:'390', height:'320'
                            });
                            d.show();
                        }else if(res.state == 12){
                            alert(res.msg);
                        }else {
                            alert('库存不足');
                        }
                    }
                });
            } else {
                $.ajax({
                    type:'post',
                    url:'cart.php?act=pack_ajax_add_cart',
                    data:{pid:pid, store:store, num:num},
                    dataType:'json',
                    async: false,
                    success:function(res){
                        if(res.state == 1){
                            window.location.href="cart.php"; 
                        }else if(res.state == 11){
                            var d = dialog({
                                title:' ',
                                id:"m_login",
                                skin:'nopadding',
                                url:'goods.php?act=login',width:'390', height:'320'
                            });
                            d.show();
                        }else if(res.state == 12){
                            alert(res.msg);
                        }else {
                            alert('库存不足');
                        }
                    }
                });
            }
}
//function bollreset(){
//    
//    $("#ball").css("display","none");
//    $("#ball").css("position","absolute");
//    $("#ball").css("top",$(".btn_add_carts").offset().top);
//    $("#ball").css("left",$(".btn_add_carts").offset().left);
//    
//       
//    
//}
function show_shop_info(){
	$('.business_type').css('display','none');
	$('.shop_info').css('display','block');
	}
	
function hide_shop_info(){
	$('.business_type').css('display','block');
	$('.shop_info').css('display','none');
	}

$(function(){
$(".price_change").click(function(){
    var jiamap = "price_change" + $("input[name='spec_12']:checked").val();
    var goods_attr_id =  $("input[name='spec_12']:checked").val();
        $.ajax({
            type:'post',
            url:'goods.php?act=change_price',
            data:{goods_id:goods_id},
            dataType:"html",
            success:function(result){
				$('#price_change').html(result);
                $('.theme-popover-mask').show();
                $('.theme-popover').show();
                $.each($(".pricelay"), function(){
                    var id = $(this).attr('id');
                    if( id == jiamap){
                        $(this).show();
                    } else {
                        $(this).hide();
                    }
                });
            }
        });

    });
    $('.theme-poptit .close').click(function(){
        $('.theme-popover-mask').hide();
        $('.theme-popover').hide();
    })
	})
//倒计时
if(gmt_end_time || miaosha_end_time){
	getTimer();
}
function getTimer(){
	jQuery('.timer').each(function(i){
		var otimer = jQuery(this).attr('duration');
		if(typeof(otimer) != 'undefined'){
            jQuery(this).html('');
            if(i == 0){
                clearTimeout(clearTimer_promote);
            }else if(i == 1){
                clearTimeout(clearTimer_miaosha);
            }
			timer(parseInt(otimer), jQuery(this),i);
		}
	 });
}
function timer(duration, obj,n) {
    var n = n;
    if(duration % 60 == 0){
        //duration--;
    }
    var dur_date   = parseInt(duration/3600/24);
    var dur_hour   = parseInt((duration-dur_date*24*3600) / 3600);
    var dur_minute = parseInt((duration-dur_date*24*3600-dur_hour*3600) / 60);
    var dur_second = parseInt((duration-dur_date*24*3600-dur_hour*3600 - dur_minute*60));
    if(dur_hour < 10)   dur_hour  ='0'+dur_hour;
    if(dur_minute < 10) dur_minute  ='0'+dur_minute;
    if(dur_second < 10) dur_second  ='0'+dur_second;
    var str = ' <font> '+dur_date+'</font >'+'天'+'<font>'+dur_hour+'</font>'+'小时'+'<font>'+dur_minute+'</font>'+'分'+'<font>'+dur_second+'</font >'+'秒';
    obj.html(str);
    duration--;
    if(n==0){
        clearTimer_promote = setTimeout(function(){timer(duration,obj,n)}, 1000);
    }else if(n == 1){
        clearTimer_miaosha = setTimeout(function(){timer(duration,obj,n)}, 1000);
    }

}
 // bottom tabs scroll
var flag = "left";
function FOR_scroll(wraper,c_prev,c_next,c_img,speed,or){
var wraper = $(wraper);
var c_prev = $(c_prev);
var c_next = $(c_next);
var c_img = $(c_img).find('ul');
var w = c_img.find('li').outerWidth(true);
var s = speed;
c_next.click(function(){
c_img.css({'margin-left':-w});
c_img.find('li').eq(0).appendTo(c_img);
c_img.css({'margin-left':0});
flag = "left";
});
c_prev.click(function(){
c_img.find('li:last').prependTo(c_img);
c_img.css({'margin-left':-w});
c_img.animate({'margin-left':0});
flag = "right";
});
if (or == true){
ad = setInterval(function() { flag == "left" ? c_next.click() : c_prev.click()},s*1000);
wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() {flag == "left" ? c_next.click() : c_prev.click()},s*1000);});
} 
}
FOR_scroll('.goods_match_list','.tab_left_btn','.tab_right_btn','#con_goods_1',3,false);// true为自动播放，不加此参数或false就默认不自动
FOR_scroll('.goods_match_list','.tab_left_btn','.tab_right_btn','#con_goods_2',3,false);
FOR_scroll('.goods_match_list','.tab_left_btn','.tab_right_btn','#con_goods_3',3,false);


function orz(e) {return document.getElementById(e);}
document.getElementsByClassName = function(cl) {
    var retnode = [];
    var myclass = new RegExp('\\b'+cl+'\\b');
    var elem = this.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
        var classes = elem[i].className;
        if (myclass.test(classes)) retnode.push(elem[i]);
    }
    return retnode;
}
var MyMar;
var speed = 1; //速度，越大越慢
var spec = 1; //每次滚动的间距, 越大滚动越快
var ipath = 'themes/68ecshopcom_360buy/images/active_content/'; //图片路径
var len = $("#showareas a").length; //获取焦点图个数
$("#showareas").css("width",63 * (len));

var thumbs = document.getElementsByClassName('thumb_img');
for (var i=0; i<thumbs.length; i++) {
    thumbs[i].onmouseover = function () {orz('main_img').src=this.rel; orz('main_img').link=this.link;};
    thumbs[i].onclick = function () {location = this.link}
}

/*orz('main_img').onclick = function () {location = this.link;}
orz('gotop').onmouseover = function() {this.src = ipath + 'ico_06.jpg'; MyMar=setInterval(gotop,speed);}
orz('gotop').onmouseout = function() {this.src = ipath + 'ico_03.jpg'; clearInterval(MyMar);}
orz('gobottom').onmouseover = function() {this.src = ipath + 'ico_10.jpg'; MyMar=setInterval(gobottom,speed);}
orz('gobottom').onmouseout = function() {this.src = ipath + 'ico_08.jpg'; clearInterval(MyMar);}
function gotop() {orz('showarea').scrollLeft-=spec;
}
function gobottom() {orz('showarea').scrollLeft+=spec;

}*/
//                增加点击边框变色
$(function(){
$("#showareas a img").click(function(){
	$(this).closest('#showareas').find('img').css('border-color','#fff');
	$(this).css('border-color','#1A9733');
});
    //未注册提示
    $('.tips_register_icon').hover(function(){
        $('.tips_content_green').show();
    },function(){
        $('.tips_content_green').hover(function(){
            $('.tips_content_green').show();
        },function(){
            $('.tips_content_green').hide();
        });
        $('.tips_content_green').hide();

    })
});

$(function(){
$(".comments_item").mouseover(function(){
	$(this).find('.comment_operate a').css("visibility","visible");
	})
$(".comments_item").mouseout(function(){
	if($(this).find(".reply_textarea").css("display")=="block"){
		$(this).find('.comment_operate a').css("visibility","block");
		}
	else{
		$(this).find('.comment_operate a').css("visibility","hidden");
		}
	})
});

function comment_reply(id){
	var div=$("#reply_textarea_"+id); 
    div.toggle(); 

	}
//留言文本区域字数限制倒数
 function checkLength(gm) {
	 var maxChars = 120;
	 if (gm.value.length > maxChars){
		  gm.value = gm.value.substring(0,maxChars);
	 }
	 var curr = maxChars - gm.value.length;
	 var zishu = gm.id;
	 document.getElementById("wordnum_"+zishu).innerHTML = "还可以输入"+curr.toString()+"字";
 }
	 
/*切换商品规格*/
function changeAttNew(t) {
    if($(t).find('input[name="check_goods_id"]').length>0){
        goods_id = $(t).find('input[name="check_goods_id"]').val().split('.')[0].split('-')[1];
    }
    //t.lastChild.checked = true;
    $(t).find('input').attr('checked', true);
    for (var i = 0; i<t.parentNode.childNodes.length;i++) {
            if (t.parentNode.childNodes[i].className == 'selected') {
                t.parentNode.childNodes[i].className = '';
            }
        }
    t.className = "selected";
	var attr = new Array();
	attr.push($('.spec_unit_12 ul').eq(0).find('li').eq(0).find('input').val());
    //var goods_att_id =  $("input[name='spec_12']:checked").val();
	attr.push($(t).find('input').val());
    changePriceNew(goods_id,attr);
	/*收藏商品*/
	$('.focus_goods_btn').attr('jsstr',goods_id);
}
function changePriceNew(id,attr) {
	
  //var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
  var qty = document.forms['ECS_FORMBUY'].elements['number'].value;

  var storehouse = $("input:radio[name='storehouse']:checked").val();
  
  Ajax.call('goods.php', 'act=price&id=' + id + '&attr=' + attr + '&number=' + qty + '&storehouse=' + storehouse, changePriceResponseNew, 'GET', 'JSON');
}

/**
 * 接收返回的信息
 */
function changePriceResponseNew(res)
{
  if (res.err_msg != '')
  {
    alert(res.err_msg);
  }
  else
  {
      //var result = '<img src="'+res.goods_info.goods_img+'" width="350" height="350" />';
	  
      var result = '';
	  if(res.goods_pic.length>0){
		  for(var i=0; i<res.goods_pic.length; i++){
			  result += '<img src="'+res.goods_pic[i].img_url+'" width="350" height="350" />';
		  }
	  }else{
		  result = '<img src="'+res.goods_info.goods_img+'" width="350" height="350" />';
	 }
      $('#showbox').empty().html(result);
      $('#showsum').html('');
      loadImg();
    document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;
    var attr = getSelectedAttributes(document.forms['ECS_FORMBUY']);
    //$('#goods_weight').html(res.weight);
    $('#jn_stock').html(res.jn_stock);
    $('#qd_stock').html(res.qd_stock);
    $('#jifen').html(res.song_jifen);
	$('#mobile_rest_time').html(res.mobile_rest_time);
	$('.unit_price').hide();
	$('.chaoma_info').hide();
	if(res.is_weigh==1){
		$('.unit_price').show();
		$('.unit_price').html("(合"+res.unit_price+"元/"+res.goods_weight_unit+")");
		$('.chaoma_info').show();
		}
    var thisGoodSpec = parseInt(res.goods_spec);
    var thisMiaoshaSpec = parseInt(res.miaosha);
    var thisPromoteSpec = parseInt(res.promote);
	if(res.price_tip==1){
		$('.text_inter').html('促销价：');
		}
	else if(res.price_tip==2){
		$('.text_inter').html('秒杀价：');
		}
	else{
		$('.text_inter').html('美鲜价：');
		}

      (thisMiaoshaSpec==1)?$('#miaosha_info').show():$('#miaosha_info').hide();
      (thisPromoteSpec==1)?$('#promote_info').show():$('#promote_info').hide();
	  $('.pro_verify_tip').hide();
	  $('.ms_verify_tip').hide();
	  $('.no_verify').hide();
	  if(thisMiaoshaSpec==1 && res.user_verify==0){
		  $('.ms_verify_tip').show();
		  $('.no_verify').show();
	  }
	   if(thisPromoteSpec==1 && res.user_verify==0){
		  $('.pro_verify_tip').show();
		  $('.no_verify').show();
	  }
	if(res.mobile_price){
		$("#promote_info2").show();
		$('#mobile_price').html(res.mobile_price);
	}else{
		$("#promote_info2").hide();
	}
    if(document.getElementById("goods_weight"))
    {
        setTimeout(function(){document.getElementById("goods_weight").style.backgroundColor = '';}, 601);
    }

    if (document.getElementById('ECS_GOODS_AMOUNT'))

      document.getElementById('ECS_GOODS_AMOUNT').innerHTML = res.result;
    $('.num').html( res.result_new );

    $('#buy_jifen').html( res.buy_jifen );//购买积分
    $('#song_jifen').html( res.song_jifen );//赠送积分
	$('.market_price').html(res.result1);
	$('.sub_text').html(res.goods_info.goods_brief);
	if(res.is_show==1){
		$('.market_price_em').hide();
		$('.market_price').hide();
		}
	else{
		$('.market_price_em').show();
		$('.market_price').show();
		}
	if(res.error==1){
 		$('.look_user_price').show();
		}
  	else{
		$('.look_user_price').hide();
		}
	if(res.error==2){
		$('.tips_register_icon').show();
		}
	else{
		$('.tips_register_icon').hide();
		}
	 $('.stock_dialog').hide();
	 $('.lack_dialog').hide();
      if(res.jn_stock==0 & res.qd_stock==0&&res.advise_goods_list &&res.is_best_presale!='2'&&res.is_temporary<1){
          $('.text_inter').html('');
		  if(res.expect_arrive_time==1){
			  $('.num').html("此商品暂时缺货，预计到货时间：{res.goods_info.expect_arrive_time}，我们为您推荐以下替代商品,<a style='border-bottom: 2px solid;cursor:pointer' onclick='show_stock_dialog()'>点击查看</a>");
			  }
		  else{
          	  $('.num').html("此商品暂时缺货，到货时间待定，我们为您推荐以下替代商品,<a style='border-bottom: 2px solid;cursor:pointer' onclick='show_stock_dialog()'>点击查看</a>");
		  }
		  if(res.is_active){
			 $('.lack_dialog_action').show();
			 $('.lack_dialog_action').attr('href','presale.php?act=group_buy_goods&id='+res.act_id);
		  }
		  var prom = '';
			for(var i = 0; i<res.advise_goods_list.length; i++){
				
				 prom+='<li><div class="goods_match_dialog"><a href="'+res.advise_goods_list[i].url+'"><img src="'+res.advise_goods_list[i].goods_thumb+'"><p class="goods_name">'+res.advise_goods_list[i].goods_name+'</p><span class="price">￥'+res.advise_goods_list[i].final_price+'</span></a></div></li>'
	}
		  $('.st_list ul').empty().html(prom);
		  $('.lack_dialog').show();
          $('.look_user_price').hide();
          $('.price_change').hide();
          $('.stock_dialog').show();
      }


      if(res.jn_stock==0 & res.qd_stock==0){
          $('.arrive_time').hide();

      }

	$('#qrcode').html('');
	$('#qrcode').qrcode({
		render:($.browser.msie && $.browser.version < 9 ? "table" : "canvas"),
		width:146,
		height:146,
		background:"#FFFFFF",
		foreground:"#000000",
		text:"http://www.emeixian.com/toapp.php?type=shangpin&id="+"{$smarty.get.id}"+"&attr="+attr
	});
	if(res.attr_rate==1){
		$('.price_step').show();
		}
	else{
		$('.price_step').hide();
		}
	$('.whole_info').empty().html();
	if(res.whole_price){
		$('.whole_info').empty().html(res.whole_price);
	}
	//if(res.volume_price){
		//$('.whole_info').empty().html(res.volume_price);
	//}

  }
    var result = '';
    var objkeys = [];
    if(res.attr_count == 1){
        result += '<li><a class="selected" onclick="changeAtt(this)" href="javascript:;"  title="'+res.big_attr.attr_value+'"><span>'+res.big_attr.attr_value+'</span><i></i><input style="display:none" id="spec_value_'+res.big_attr.goods_attr_id+'" type="radio" name="spec_12" value="'+res.big_attr.goods_attr_id+'" autocomplete="off" checked="checked"/></a></li>';
    }else{
        result += '<li><a class="selected" onclick="changeAtt(this)" href="javascript:;"  title="'+res.small_attr.attr_value+'"><span>'+res.small_attr.attr_value+'</span><i></i><input style="display:none" id="spec_value_'+res.small_attr.goods_attr_id+'" type="radio" name="spec_12" value="'+res.small_attr.goods_attr_id+'" autocomplete="off" checked="checked"/></a></li>';
        result += '<li><a onclick="changeAtt(this)" href="javascript:;"  title="'+res.big_attr.attr_value+'"><span>'+res.big_attr.attr_value+'</span><i></i><input style="display:none" id="spec_value_'+res.big_attr.goods_attr_id+'" type="radio" name="spec_12" value="'+res.big_attr.goods_attr_id+'" autocomplete="off"/></a></li>'
    }
$('.spec_unit_12 ul').html(result);
if(res.goods_info.brand_id ==412){
	$('.main_r_content h2').html(res.goods_info.goods_name+' 不支持威海地区购买').attr('oEnglish',res.goods_info.goods_name_en).attr('oChinese',res.goods_info.goods_name);;
	}
else{
	$('.main_r_content h2').html(res.goods_info.goods_name).attr('oEnglish',res.goods_info.goods_name_en).attr('oChinese',res.goods_info.goods_name);
	}
    $('#detail_isEnglish').html('Eng').removeClass('detail_chinese');
$('.goods_sn').html(res.goods_info.goods_sn);
$('.goods_info .seller_note').html(res.goods_info.seller_note);
$('.icon_temp em').html(res.goods_info.temperature);
if(res.goods_info.designated_area==1){
	$('.icon_area').show();
	}
else{
	$('.icon_area').hide();
	}
if(res.goods_info.is_gift==1){
	$('.icon_gift').show();
	}
else{
	$('.icon_gift').hide();
	}
$('#miaosha_info .timer').attr('duration',res.goods_info.miaosha_to_end);
//$('.promote_jq').html('￥'+res.goods_info.promote_price_org);
$('#miaosha_info .active_sale_store').html("<span><em>库存数量：</em>济南"+res.goods_info.miaosha_store+"，青岛"+res.goods_info.qd_miaosha_store+"</span>");
$('#miaosha_info .active_sale_shuliang').html("<span> 限购：</span> <span>每人每天限购"+res.goods_info.miaosha_shuliang+res.goods_info.miaosha_value+"</span>");
//$('#promote_info .timer').attr('duration',res.goods_info.gmt_to_end);
$('.miaosha_jq').html('￥'+res.goods_info.miaosha_jiaqian);
$('#promote_info .active_sale_store').html("<span><em style=' color:#999; margin-left:5px;'>库存数量：</em><span class='ware_house'>济南"+res.goods_info.excess_number+"，青岛"+res.goods_info.qd_excess_number+"</span>&nbsp;&nbsp;&nbsp;&nbsp;</span>");
$('#promote_info .active_sale_shuliang').html("<span style='margin-left: 5px; color:#999;'>限购：</span> <span style='color: green;'>每人每天限购<span class='limit_num'>"+res.goods_info.per_number+"</span>"+res.goods_info.attr_value+"</span>");

if(thisPromoteSpec==1){
	  $('.promote_jq').empty().html('￥'+res.promote_info.promote_price+'元');
	  $('.timer').attr('duration',res.promote_info.gmt_to_end);
	  getTimer();
	  if(res.promote_info.ware_house=='qingdao_store'){
		  $('.ware_house').empty().html('青岛'+res.promote_info.qd_excess_number);
	  }else{
		  $('.ware_house').empty().html('济南'+res.promote_info.excess_number);
	  }
	  $('.limit_num').empty().html(res.promote_info.per_number);
  }
	  
if(res.promotion){
	var prom = '';
	for(var i = 0; i<res.promotion.length; i++){
		prom+='<ul class="dd">'
		if(res.promotion[i].type=='group_buy'){
		prom += '<li>正在进行：<a href="presale.php?act=group_buy_list" title="预售活动" style="font-weight:800; color:#00913a;" >[预售活动]</a>'	
		}
		else if(res.promotion[i].type=='favourable'){
		prom +='<li>正在进行：<span title="优惠活动" style="font-weight:800; color:#00913a;" >[优惠活动]</span>'
		}
		prom +='<span title="'+res.promotion[i].act_name+res.promotion[i].time+'" style="font-weight:800; color:#00913a;" >'+res.promotion[i].act_name+'</span></li></ul>'
	}
	$('.padd').empty().html(prom);
	}
	$('.collect_goods').removeClass('icon_heart');
	$('.collect_goods').removeClass('icon_hearted');
	if(res.atten_icon){
		$('.collect_goods').addClass('icon_hearted');  
		}
	else{
		$('.collect_goods').addClass('icon_heart');  
		}
	$('.content_top_list').empty().html('<tr><td style="width: 370px;">商品名称：'+res.goods_info.goods_name+'</td><td>品牌：<a href="brand-'+res.goods_info.brand_id+'-c0.html" target="_blank">'+res.goods_info.goods_brand+'</a></td><td>上架时间：'+res.goods_info.add_time+'</td></tr><tr><td>包装：'+res.goods_info.baozhuang+'</td><td>保质期：'+res.goods_info.baozhiqi+'</td><td>产地：'+res.goods_info.chandi+'</td></tr>');
	var goods_desc = '';
	if(res.goods_info.cat_id==36 || res.goods_info.cat_id == 82 || res.goods_info.cat_id == 83 || res.goods_info.cat_id == 84 || res.goods_info.cat_id == 85 || res.goods_info.cat_id == 91 || res.goods_info.cat_id == 92){
		goods_desc += '<img src="themes/68ecshopcom_360buy/images/tpxq.jpg" />'
		}
	if( res.goods_info.cat_id == 465 && res.goods_info.is_weigh ==0|| res.goods_info.cat_id ==466 && res.goods_info.is_weigh ==0){
		goods_desc +='<img src="themes/68ecshopcom_360buy/images/danlei.jpg" alt="" width="807" height="297">'
		}	
	if(res.goods_info.is_weigh ==1){
		goods_desc +='<img src="themes/68ecshopcom_360buy/images/chaoma.png">';
		}
	goods_desc+=res.goods_info.goods_desc;
	$('.pic_list').html(goods_desc);
    $('.detail_report .tab_control li a').removeClass('selected');
    $('.detail_report .tab_control li').eq(0).find('a').addClass('selected');
    $('.detail_report .tabs_content').hide().eq(0).show();
		getTimer();
	$('.local').html('当前位置：'+res.ur_here);
	if(res.jn_stock==0 & res.qd_stock==0){
          $('.arrive_time').hide();
      }
	  else{
		  $('.arrive_time').show();
		  }
	$('.arrive_time span').html(res.get_arrive_time);
	$('.dairy_products').hide();
	if(res.catid==39){
		$('.dairy_products').show();
	}

	


	$('.detail_English').hide();
	if(res.goods_info.goods_name_en){
		$('.detail_English').show();
		}
	$('.best_presale').hide();
	if(res.goods_info.is_best_presale==1){
		$('.best_presale').show();
	}
	$('.group_buy').hide();
	if(res.is_active==1){
		$('.group_buy').show();
	}
	$('.con').hide();
	if(res.goods_con){
		$('.con').html(res.goods_con);
		goods_con();
	}
	$('.temporary_goods').hide();
	$('.temp_discount').hide();
	if(res.is_temporary){
		$('.temporary_goods').show();
		if(res.is_temporary==1){
			$('.temp_discount').show();
			$('.tem_pro em').html(res.tem_discount);
		}
		else{
			$('.temp_discount').hide();
		}
		
	}
}

function change_price(goods_id){
	var qty = document.forms['ECS_FORMBUY'].elements['number'].value;
	var attr = typeof($('.dw_type').find('a.selected input').val()) == "undefined" ? "" : $('.dw_type').find('a.selected input').val();
	var storehouse = typeof($('.ck_type').find('a.selected input').val()) == "undefined" ? "" : $('.ck_type').find('a.selected input').val();
	Ajax.call('temporary.php', 'act=price&id=' + goods_id + '&number=' + qty + '&attr=' + attr + '&storehouse=' + storehouse, changeGoodsResponse, 'GET', 'JSON');
}

function changeGoodsResponse(res)
{
	document.forms['ECS_FORMBUY'].elements['number'].value = res.qty;
	$('#jn_stock').html(res.current_num);
	$('#qd_stock').html(res.current_qd);
	if(res.final_period){
		var prom = '';
		for(var i = 0; i<res.final_period.length; i++){
			prom += '<div class="t_list"><span class="num">￥'+res.final_period[i].final_price+'元</span><span class="duan" style="margin-left:10px">您选择的'+res.final_period[i].duan+'天到期的商品为</span><span class="duan">'+res.final_period[i].num+res.attr_value+'(含购物车内)</span></div>'
		}
		$('.temporary_list').empty().html(prom);
	}
	
}
function addTempCart(goods_id){
	var product_period = typeof($('.pc_type').find('a.selected input').val()) == "undefined" ? "" : $('.pc_type').find('a.selected input').val();
	var attr = typeof($('.dw_type').find('a.selected input').val()) == "undefined" ? "" : $('.dw_type').find('a.selected input').val();
	var storehouse = typeof($('.ck_type').find('a.selected input').val()) == "undefined" ? "" : $('.ck_type').find('a.selected input').val();
	var qty = document.forms['ECS_FORMBUY'].elements['number'].value;
	if(attr && storehouse){
		Ajax.call('cart.php?step=add_temp_cart', 'id=' + goods_id + '&product_period=' + product_period + '&attr=' + attr + '&storehouse=' + storehouse + '&number=' + qty, addTempCartResponse, 'GET', 'JSON');
	}
	else{
		if(attr==''){
			alert('请选择购买单位');	
		}
		else if(storehouse==''){
			alert('请选择发货仓库');	
		}
	}
}
function addTempCartResponse(result){
	if (result.error > 0)
	  {
		// 如果需要缺货登记，跳转
		if (result.error == 1)
		{
			if(typeof(dialog.get("m_login"))!=undefined){			
			var d = dialog({
				title:' ',
				id:"m_login",
				skin:'nopadding',
				url:'goods.php?act=login',width:'390', height:'320'
			});
			d.show();
			}
		}
		else{
			alert(result.message);
		}
	}
	else{
		addProduct();
		 //var cartInfo = document.getElementById('ECS_CARTINFO');
		var cartInfo = document.getElementById('nubs');
		var goods_right_float=document.getElementById('quick_links_pop');
		var cart_num = document.getElementById('cart_num');
		var cart_url = 'flow.php?step=cart';
		if (cartInfo)
		{
		  cartInfo.innerHTML = result.goods_number;
		}
		if(goods_right_float){
			goods_right_float.innerHTML = result.cart_info;
			}
		if(cart_num){
			cart_num.innerHTML = result.goods_number;
		}
		var cart_num = $('.jinan_warp .ibar_item_detail li').html();
		 var shop_num = $('.shop_warp .ibar_item_detail li').html();
		 
		 if(cart_num==null){
			 $('.jinan_warp').css('display','none');
			 }
		if(shop_num==null){
			 $('.shop_warp').css('display','none');
		 }
	}
}
function addTempCart1(goods_id){
	var product_period = typeof($('.pc_type').find('a.selected input').val()) == "undefined" ? "" : $('.pc_type').find('a.selected input').val();
	var attr = typeof($('.dw_type').find('a.selected input').val()) == "undefined" ? "" : $('.dw_type').find('a.selected input').val();
	var storehouse = typeof($('.ck_type').find('a.selected input').val()) == "undefined" ? "" : $('.ck_type').find('a.selected input').val();
	var qty = document.forms['ECS_FORMBUY'].elements['number'].value;
	if(attr && storehouse){
		Ajax.call('cart.php?step=link_temp_cart', 'id=' + goods_id + '&product_period=' + product_period + '&attr=' + attr + '&storehouse=' + storehouse + '&number=' + qty, addTempCartResponse1, 'GET', 'JSON');
	}
	else{
		if(attr==''){
			alert('请选择购买单位');	
		}
		else if(storehouse==''){
			alert('请选择发货仓库');	
		}
	}
}
function addTempCartResponse1(result){
	if (result.error > 0)
	  {
		// 如果需要缺货登记，跳转
		if (result.error == 1)
		{
			if(typeof(dialog.get("m_login"))!=undefined){			
			var d = dialog({
				title:' ',
				id:"m_login",
				skin:'nopadding',
				url:'goods.php?act=login',width:'390', height:'320'
			});
			d.show();
			}
		}
		else{
			alert(result.message);
		}
	}
	else{
		location.href="cart.php";
	}
}
