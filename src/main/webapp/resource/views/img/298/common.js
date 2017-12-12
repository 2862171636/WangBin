/* $Id : common.js 4865 2007-01-31 14:04:10Z paulgao $ */
function obj2str(o)
 {
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "undefined") return "undefined";
    if (typeof o == "object") {
        if (o === null) return "null";
        else if (!o.sort) {
            for (var i in o)
            {
                if (i != "toJSONString")
                r.push("\"" + i + "\"" + ":" + obj2str(o[i]));

            }
            r = "{" + r.join() + "}";

        } else {
            for (var i = 0; i < o.length; i++)
            r.push(obj2str(o[i]))
            r = "[" + r.join() + "]"

        }
        return r;

    }
    return o.toString();


}

/* *
 * 添加商品到购物车 
 */
function addToCart(goodsId, parentId,ismiaosha)
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var formBuy      = document.forms['ECS_FORMBUY'];
  var quick		   = 0;

  // 检查是否有商品规格 
  if (formBuy)
  {
    spec_arr = getSelectedAttributes(formBuy);

    if (formBuy.elements['number'])
    {
      number = formBuy.elements['number'].value;
    }

	quick = 1;
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goodsId;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);
  
  goods.ismiaosha   = (typeof(ismiaosha) == "undefined") ? 0 : parseInt(ismiaosha);
 
  /*2015-12-16 添加发货仓库*/
  var storehouse = $("input:radio[name='storehouse']:checked").val();
  goods.storehouse   = (typeof(storehouse) == "undefined") ? "jinan_store" : storehouse;
  //Ajax.call('flow.php?step=add_to_cart', 'goods=' + goods.toJSONString(), addToCartResponse, 'POST', 'JSON');
  Ajax.call('cart.php?step=add_to_cart', 'goods=' + obj2str(goods), addToCartResponse, 'POST', 'JSON');
}



/* 组合购买__添加商品到购物车__Start     By www.68ecshop.com  */
function addToCartNums(goodsId, parentId)
{
        var goodsIds=goodsId.substr(0,goodsId.length-1).split(',');
        var buynum=goodsIds.length-1;
        for(i=0;i<goodsIds.length;i++)
        {                
         var goods  = new Object();
         var spec_arr     = new Array();
          var fittings_arr = new Array();
          var number       = 1; 
          var quick           = 1; 
          goods.quick    = quick;
          goods.spec     = spec_arr;
          goods.goods_id = goodsIds[i];
          goods.number   = 1;
          goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);

		  if(i==buynum)
		  {
			Ajax.call('cart.php?step=add_to_cart', 'goods=' + obj2str(goods), addToCartResponse, 'POST', 'JSON');
		  }
		  else
		  {
				Ajax.call('cart.php?step=add_to_cart', 'goods=' + obj2str(goods), '', 'POST', 'JSON');
		  }

        }
}
/* 组合购买__添加商品到购物车__End     By www.68ecshop.com */


/**
 * 获得选定的商品属性
 */
function getSelectedAttributes(formBuy)
{
  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < formBuy.elements.length; i ++ )
  {
	  
    var prefix = formBuy.elements[i].name.substr(0, 5);
    if (prefix == 'spec_' && (
      ((formBuy.elements[i].type == 'radio' || formBuy.elements[i].type == 'checkbox') && formBuy.elements[i].checked) ||
      formBuy.elements[i].tagName == 'SELECT'))
    {
      spec_arr[j] = formBuy.elements[i].value;
      j++ ;
    }
  }

  return spec_arr;
}


/* *
 * 详情页底部商品加入购物车 
 */
function addToCartBottom(goodsId,parentId,ismiaosha)
{
    if(typeof(dialog.get("cart_buy"))!=undefined){
		var d = dialog({
			title:' ',
			id:'cart_buy',
            skin:'nopadding',
            url:'cart.php?step=add_flow_cart_bottom&id='+goodsId,width:'390', height:'320'
        });
        d.show();
		}
}

/* *
 * 处理添加商品到购物车的反馈信息
 */
function addFlowToCartResponse(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
     //if (confirm(result.message))
      //{
      //  location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
     // }
      
     var d = dialog({
		quickClose: true,
		content: '当前仓库库存不足'
		})
		d.show();
    }
    //当前仓库库存不足
    else if (result.error == 10)
    {
    	var d = dialog({
        quickClose: true,
        content: '当前仓库库存不足'
      });
      d.show();
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
	else if(result.error == 11)
	{
		if(typeof(dialog.get("m_login"))!=undefined){			
		var d = dialog({
			id:"m_login",
            title: ' ',
            skin:'nopadding',
            url:'goods.php?act=login',width:'390', height:'320'
        });
        d.show();
		}
		}
	else if (result.error == 12)
    {
    	var d = dialog({
        quickClose: true,
        content: '不能购买自己店铺商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 13)
    {
    	var d = dialog({
        quickClose: true,
        content: '经销商不可以购买小单位商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 14)
    {
    	var d = dialog({
        quickClose: true,
        content: '该商品不对外销售'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
	   addProduct(result.goods_thumb);
	  
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
    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
	var cart_num = $('.jinan_warp .ibar_item_detail li').html();
	 var shop_num = $('.shop_warp .ibar_item_detail li').html();
	 
	 if(cart_num==null){
		 $('.jinan_warp').css('display','none');
		 }
	if(shop_num==null){
		 $('.shop_warp').css('display','none');
		 }
    else
    {
      switch(result.confirm_type){
         case '1' :
          //parent.window.location.reload();
          var d = dialog.get('cart_buy');
		  
         d.close().remove();
          break;
          default :
          break;
      }
    }
  }
}



function addProduct(goods_thumb) {
    //console.log(event.pageX); 
    if($(".btn_lg").offset() == null){
      var d = dialog({
        quickClose: true,
        content: '商品已成功添加到购物车！'
      });
      d.show();
      return false;
    }
    var offset = $('#cart_num').offset();
    goods_thumb=goods_thumb||$('#ball').attr("src");
	var flyer = $('<img src="'+goods_thumb+'" width=60 height=60/>');
//    var flyer = $('<img src="'+goods_thumb+'" width=60 height=60/>');
    flyer.fly({
        start: {
            left: $(".btn_lg").offset().left,
            top: $(".btn_lg").offset().top
//              left: event.pageX,
//              top: event.pageY
//          
        },
        end: {
            left: offset.left,
            top: 260,
            width: 20,
            height: 20
        }
    });
	
    
}



function addToCartResponse(result)
{
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
   
     var d = dialog({
		quickClose: true,
		content: '当前仓库库存不足'
		})
		d.show();
		setTimeout(function () {
                d.close();
            }, 800);
    }
    //当前仓库库存不足
    else if (result.error == 10)
    {
    	var d = dialog({
        quickClose: true,
        content: '当前仓库库存不足'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 800);
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
	else if(result.error == 11)
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
	else if (result.error == 12)
    {
    	var d = dialog({
        quickClose: true,
        content: '不能购买自己店铺商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 13)
    {
    	var d = dialog({
        quickClose: true,
        content: '经销商不可以购买小单位商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 14)
    {
    	var d = dialog({
        quickClose: true,
        content: '该商品不对外销售'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
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
    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
	var cart_num = $('.jinan_warp .ibar_item_detail li').html();
	 var shop_num = $('.shop_warp .ibar_item_detail li').html();
	 
	 if(cart_num==null){
		 $('.jinan_warp').css('display','none');
		 }
	if(shop_num==null){
		 $('.shop_warp').css('display','none');
		 }
    else
    {
      switch(result.confirm_type)
      {
        //case '1' :
		  //opencartDiv(result.shop_price,result.goods_name,result.goods_thumb,result.goods_brief,result.cat_id,result.goods_id,result.goods_price,result.goods_number);
         // break;  //加入购物车时不弹出遮罩层
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}

/* *
 * 添加商品到收藏夹
 */
 $(function(){
 $('.focus_goods_btn').click(function(){
	 var goodsId =$(this).attr("jsstr");
	 Ajax.call('user.php?act=collect', 'id=' + goodsId, collectResponse, 'GET', 'JSON');
})
})

/* *
 * 处理会员登录的反馈信息
 */
function signInResponse(result)
{
  toggleLoader(false);

  var done    = result.substr(0, 1);
  var content = result.substr(2);

  if (done == 1)
  {
    document.getElementById('member-zone').innerHTML = content;
  }
  else
  {
    alert(content);
  }
}

/* *
 * 评论的翻页函数
 */
function gotoPage(page, id, type, con) {
    var otop = $('.detail_report').offset().top;
    window.scrollTo(0,otop);
    $('#ECS_COMMENT').html('');
    var a_page = 1;
    var p_page = 1;
    var h_page = 1;
    var z_page = 1;
    var c_page = 1;
    if($('#a_page').length>0){
        z_page = document.getElementById('a_page').value;
    }
    if($('#p_page').length>0){
        z_page = document.getElementById('p_page').value;
    }
    if($('#h_page').length>0){
        z_page = document.getElementById('h_page').value;
    }
    if($('#z_page').length>0){
        var z_page = document.getElementById('z_page').value;
    }
    if($('#c_page').length>0){
        var z_page = document.getElementById('c_page').value;
    }

  Ajax.call('comment.php?act=gotopage', 'page=' + page + '&id=' + id + '&type=' + type + '&con=' + con+
          '&a_page='+a_page + '&p_page='+p_page + '&h_page='+h_page + '&z_page='+z_page + '&c_page='+c_page, 
          gotoPageResponse, 'GET', 'JSON');
}

function gotoPageResponse(result) {
  document.getElementById("ECS_COMMENT").innerHTML = result.content;
  comm_control();

}


function  comm_control(){
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
        $('.comment_reply').click(function(){
            $(this).closest('.comment_operate').find('.reply_textarea').toggle();
        })
        //留言文本区域字数限制倒数
        function checkLength(gm) {
            var maxChars = 120;
            if (gm.value.length > maxChars){
                gm.value = gm.value.substring(0,maxChars);
            }
            var curr = maxChars - gm.value.length;
            var parent=gm.parentNode;
            var parent=gm.parentNode;
            var zishu = gm.id;
            document.getElementById("wordnum_"+zishu).innerHTML = "还可以输入"+curr.toString()+"字";
        }
        commTab();
        function commTab(){
            $('.tab_wrap li').click(function(){
                $(this).each(function(i){
                    var thisI = $(this).index();
                    $('.comments_list .tab_wrap li').removeClass('curr')
                    $(this).addClass('curr');
                    $(this).closest('.comments_list').find('.comments_tab_content').hide().eq(thisI).show();
                });
                change_tab();
            });
            var id = $('#id').val();
            $('#change_page_0').click(function(){
                var page = $('#page_content_id_0').val();
                var con = $('#con_0').val();
                gotoPage(page, id , 0, con);
            })
            $('#change_page_1').click(function(){
                var page = $('#page_content_id_1').val();
                var con = $('#con_1').val();
                gotoPage(page, id , 0, con);
            })
            $('#change_page_5').click(function(){
                var page = $('#page_content_id_2').val();
                var con = $('#con_2').val();
                gotoPage(page, id , 0, con);
            })
            $('#change_page_4').click(function(){
                var page = $('#page_content_id_3').val();
                var con = $('#con_3').val();
                gotoPage(page, id , 0, con);
            })
            $('#change_page_3').click(function(){
                var page = $('#page_content_id_4').val();
                var con = $('#con_4').val();
                gotoPage(page, id , 0, con);
            })

        }
        change_tab();
        function change_tab(){
            var str = '';
            str = $('.curr').attr('sstr');
            if(typeof(str) != "undefined"){
                $('.c').css('display','none');
                $('#c'+str).css('display','block');
            }else{
                commTab();
            }


        }

        /*评论小图放大start*/
		var MyMar;
		var speed = 1;
		var spec = 1;
        /*function inlarge_img(did,id){

            $(".big_img_"+did).show();

            $('.big_img_'+did+' img').each(function(i){
                $(this).hide();
            })
            $(".big_simg_"+did+"_"+id).show();

            $('.thumb_list_'+did+' img').each(function(i){
                $(this).css('border','1px solid #ddd');
            })
            $('.img_'+did+"_"+id).css('border','1px solid #1a9733');

            $('.thumb_list_'+did+' ul i').each(function(i){
                $(this).hide();
            })
            $('.imgi_'+did+"_"+id).show();

        }*/
        /*评论大图片右移*/
        function img_move_left(did){

            $this = $("#move_left_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){

                var thisImgState = $(this).css('display');
                var t;

                if(thisImgState== 'inline'){

                    if(i == 0){
                        t = maxItem - 1;
                    }else{
                        t = parseInt(i-1);
                    }
                    $(this).closest('.big_img').find('img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    if(t == (maxItem - 1)){
                        return false;
                    }
                }
            })

        }
        /*评论大图片左移*/
        function img_move_right(did){


            $this = $("#move_right_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){
                var thisImgState = $(this).css('display');
                var t;
                if(thisImgState== 'inline'){
                    if(i == maxItem-1){
                        t = 0;
                    }else{
                        t = parseInt(i+1);
                    }
                    $(this).closest('.big_img').find('.big_img_con img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    return false;
                }
            })
        };
        $('.big_img').hover(

            function(){
                $(this).find('.cursor_left').show();
                $(this).find('.cursor_right').show();
            },function(){

                $(this).find('.cursor_left').hide();
                $(this).find('.cursor_right').hide();
            }
        );
        /*$('.big_img .big_img_con img').click(function(){

            $(this).closest('.big_img').fadeOut(200).hide();
            $(this).closest('.p_show_img').find('.thumb_list li img').css('border','1px solid #fff');
            $(this).closest('.p_show_img').find('.thumb_list ul i').hide();
        })*/
        var len = $(".thumb_list li").length; //获取焦点图个数
        $(".thumb_list ul").css("width",92 * (len));



        function $_(e) {return document.getElementById(e);}
        function prev_btn_over(id) {
            MyMar=setInterval(_prev_btn_new(id),speed);
        }
        function prev_btn_out(id) { clearInterval(MyMar);}

        function next_btn_over(id) {
            MyMar=setInterval(_next_btn_new(id),speed);
        }
        function next_btn_out(id) {
            clearInterval(MyMar);
        }
        function _prev_btn_new(id){

            return function()
            {
                prev_btn_new(id);
            }
        }
        function _next_btn_new(id){

            return function()
            {
                next_btn_new(id);
            }
        }

        function prev_btn_new(id) {
            $_('showarea_'+id).scrollLeft-=spec;
        }
        function next_btn_new(id) {

            var width = ($_('showarea_ul_'+id).offsetWidth)/2 - $_('showarea_'+id).offsetWidth;

            if( $_('showarea_'+id).scrollLeft > width){
                return false;
            }
            $_('showarea_'+id).scrollLeft+=spec;

        }
        /* end */
        //点赞

        /*全部评论小图放大start*/
        function a_inlarge_img(did,id){

            $(".a_big_img_"+did).show();

            $('.a_big_img_'+did+' img').each(function(i){
                $(this).hide();
            })
            $(".a_big_simg_"+did+"_"+id).show();

            $('.a_thumb_list_'+did+' img').each(function(i){
                $(this).css('border','1px solid #ddd');
            })
            $('.a_img_'+did+"_"+id).css('border','1px solid #1a9733');

            $('.a_thumb_list_'+did+' ul i').each(function(i){
                $(this).hide();
            })
            $('.a_imgi_'+did+"_"+id).show();

        }
        /*评论大图片右移*/
        function a_img_move_left(did){

            $this = $("#a_move_left_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){

                var thisImgState = $(this).css('display');
                var t;

                if(thisImgState== 'inline'){

                    if(i == 0){
                        t = maxItem - 1;
                    }else{
                        t = parseInt(i-1);
                    }
                    $(this).closest('.big_img').find('img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    if(t == (maxItem - 1)){
                        return false;
                    }
                }
            })

        }
        /*  评论大图片左移*/
        function a_img_move_right(did){


            $this = $("#a_move_right_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){
                var thisImgState = $(this).css('display');
                var t;
                if(thisImgState== 'inline'){
                    if(i == maxItem-1){
                        t = 0;
                    }else{
                        t = parseInt(i+1);
                    }
                    $(this).closest('.big_img').find('.big_img_con img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    return false;
                }
            })


        }
        $('.big_img').hover(

            function(){
                $(this).find('.cursor_left').show();
                $(this).find('.cursor_right').show();
            },function(){

                $(this).find('.cursor_left').hide();
                $(this).find('.cursor_right').hide();
            }
        )

        /*$('.big_img .big_img_con img').click(function(){

            $(this).closest('.big_img').fadeOut(200).hide();
            $(this).closest('.p_show_img').find('.thumb_list li img').css('border','1px solid #fff');
            $(this).closest('.p_show_img').find('.thumb_list ul i').hide();
        })*/

        var len = $(".thumb_list li").length; //获取焦点图个数
        $(".thumb_list ul").css("width",92 * (len));

        function $_(e) {return document.getElementById(e);}
        function a_prev_btn_over(id) {
            MyMar=setInterval(_a_prev_btn_new(id),speed);
        }
        function a_prev_btn_out(id) { clearInterval(MyMar);}

        function a_next_btn_over(id) {
            MyMar=setInterval(_a_next_btn_new(id),speed);
        }
        function a_next_btn_out(id) {
            clearInterval(MyMar);
        }
        function _a_prev_btn_new(id){

            return function()
            {
                a_prev_btn_new(id);
            }
        }
        function _a_next_btn_new(id){

            return function()
            {
                a_next_btn_new(id);
            }
        }

        function a_prev_btn_new(id) {
            $_('a_showarea_'+id).scrollLeft-=spec;
        }
        function a_next_btn_new(id) {

            var width = ($_('a_showarea_ul_'+id).offsetWidth)/2 - $_('a_showarea_'+id).offsetWidth;

            if( $_('a_showarea_'+id).scrollLeft > width){
                return false;
            }
            $_('a_showarea_'+id).scrollLeft+=spec;

        }
        /*全部 end */

        /*晒图评论小图放大start*/
        function p_inlarge_img(did,id){

            $(".p_big_img_"+did).show();

            $('.p_big_img_'+did+' img').each(function(i){
                $(this).hide();
            })
            $(".p_big_simg_"+did+"_"+id).show();

            $('.p_thumb_list_'+did+' img').each(function(i){
                $(this).css('border','1px solid #ddd');
            })
            $('.p_img_'+did+"_"+id).css('border','1px solid #1a9733');

            $('.p_thumb_list_'+did+' ul i').each(function(i){
                $(this).hide();
            })
            $('.p_imgi_'+did+"_"+id).show();

        }
        /*评论大图片右移*/
        function p_img_move_left(did){

            $this = $("#p_move_left_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){

                var thisImgState = $(this).css('display');
                var t;

                if(thisImgState== 'inline'){

                    if(i == 0){
                        t = maxItem - 1;
                    }else{
                        t = parseInt(i-1);
                    }
                    $(this).closest('.big_img').find('img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    if(t == (maxItem - 1)){
                        return false;
                    }
                }
            })

        }
        /*  评论大图片左移*/
        function p_img_move_right(did){


            $this = $("#p_move_right_"+did);
            var maxItem =   parseInt($this.closest('.big_img_warp').find('.big_img img').length);

            $this.closest('.big_img_warp').find('.big_img img').each(function(i){
                var thisImgState = $(this).css('display');
                var t;
                if(thisImgState== 'inline'){
                    if(i == maxItem-1){
                        t = 0;
                    }else{
                        t = parseInt(i+1);
                    }
                    $(this).closest('.big_img').find('.big_img_con img').hide().eq(t).show();
                    $(this).closest('.p_show_img').find('.showarea li img').css('border','1px solid #fff').eq(t).css('border','1px solid #1a9733');
                    $(this).closest('.p_show_img').find('.showarea li i').css('display','none').eq(t).css('display','inline');
                    return false;
                }
            })
        }
        $('.big_img').hover(

            function(){
                $(this).find('.cursor_left').show();
                $(this).find('.cursor_right').show();
            },function(){

                $(this).find('.cursor_left').hide();
                $(this).find('.cursor_right').hide();
            }
        )

       /* $('.big_img .big_img_con img').click(function(){

            $(this).closest('.big_img').fadeOut(200).hide();
            $(this).closest('.p_show_img').find('.thumb_list li img').css('border','1px solid #fff');
            $(this).closest('.p_show_img').find('.thumb_list ul i').hide();
        })*/

        var len = $(".thumb_list li").length; //获取焦点图个数
        $(".thumb_list ul").css("width",92 * (len));


        function $_(e) {return document.getElementById(e);}
        function p_prev_btn_over(id) {
            MyMar=setInterval(_p_prev_btn_new(id),speed);
        }
        function p_prev_btn_out(id) { clearInterval(MyMar);}

        function p_next_btn_over(id) {
            MyMar=setInterval(_p_next_btn_new(id),speed);
        }
        function p_next_btn_out(id) {
            clearInterval(MyMar);
        }
        function _p_prev_btn_new(id){

            return function()
            {
                p_prev_btn_new(id);
            }
        }
        function _p_next_btn_new(id){

            return function()
            {
                p_next_btn_new(id);
            }
        }

        function p_prev_btn_new(id) {
            $_('p_showarea_'+id).scrollLeft-=spec;
        }
        function p_next_btn_new(id) {

            var width = ($_('p_showarea_ul_'+id).offsetWidth)/2 - $_('p_showarea_'+id).offsetWidth;

            if( $_('p_showarea_'+id).scrollLeft > width){
                return false;
            }
            $_('p_showarea_'+id).scrollLeft+=spec;

        }
        /*晒图 end */
        //点赞
        $('.comment_nice').click(function(){
            $this=$(this);
            var thisWidow = $this.closest('.comments_item');
            var comment_id = thisWidow.find('input[name="comment_id"]').val();
            $.ajax({
                type:'POST',
                url:'user.php?act=favor',
                data:{comment_id:comment_id},
                dataType: "json",
                success:function(result){
                    var d = dialog({
                        quickClose: true,
                        content: result.msg
                    });
                    d.show();
                    setTimeout(function () {
                        d.close();
                    }, 800);
                    if(result.error == 0){
                        document.getElementById('favornum_'+comment_id).innerHTML=parseInt(document.getElementById('favornum_'+comment_id).innerHTML)+1;
                    }
                }
            })
        })

//操作结束
    }




/* *
 * 商品购买记录的翻页函数
 */
function gotoBuyPage(page, id)
{
  Ajax.call('goods.php?act=gotopage', 'page=' + page + '&id=' + id, gotoBuyPageResponse, 'GET', 'JSON');
}

function gotoBuyPageResponse(result)
{
  document.getElementById("ECS_BOUGHT").innerHTML = result.result;
}

/* *
 * 取得格式化后的价格
 * @param : float price
 */
function getFormatedPrice(price)
{
  if (currencyFormat.indexOf("%s") > - 1)
  {
    return currencyFormat.replace('%s', advFormatNumber(price, 2));
  }
  else if (currencyFormat.indexOf("%d") > - 1)
  {
    return currencyFormat.replace('%d', advFormatNumber(price, 0));
  }
  else
  {
    return price;
  }
}

/* *
 * 夺宝奇兵会员出价
 */

function bid(step)
{
  var price = '';
  var msg   = '';
  if (step != - 1)
  {
    var frm = document.forms['formBid'];
    price   = frm.elements['price'].value;
    id = frm.elements['snatch_id'].value;
    if (price.length == 0)
    {
      msg += price_not_null + '\n';
    }
    else
    {
      var reg = /^[\.0-9]+/;
      if ( ! reg.test(price))
      {
        msg += price_not_number + '\n';
      }
    }
  }
  else
  {
    price = step;
  }

  if (msg.length > 0)
  {
    alert(msg);
    return;
  }

  Ajax.call('snatch.php?act=bid&id=' + id, 'price=' + price, bidResponse, 'POST', 'JSON')
}

/* *
 * 夺宝奇兵会员出价反馈
 */

function bidResponse(result)
{
  if (result.error == 0)
  {
    document.getElementById('ECS_SNATCH').innerHTML = result.content;
    if (document.forms['formBid'])
    {
      document.forms['formBid'].elements['price'].focus();
    }
    newPrice(); //刷新价格列表
  }
  else
  {
    alert(result.content);
  }
}
/*onload = function()
{
    var link_arr = document.getElementsByTagName(String.fromCharCode(65));
    var link_str;
    var link_text;
    var regg, cc;
    var rmd, rmd_s, rmd_e, link_eorr = 0;
    var e = new Array(97, 98, 99,
                      100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
                      110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
                      120, 121, 122
                      );

  try
  {
    for(var i = 0; i < link_arr.length; i++)
    { 
      link_str = link_arr[i].href;
      if (link_str.indexOf(String.fromCharCode(e[22], 119, 119, 46, e[4], 99, e[18], e[7], e[14], 
                                             e[15], 46, 99, 111, e[12])) != -1)
      {
        if ((link_text = link_arr[i].innerText) == undefined)
        {
            throw "noIE";
        }
        regg = new RegExp(String.fromCharCode(80, 111, 119, 101, 114, 101, 100, 46, 42, 98, 121, 46, 42, 69, 67, 83, e[7], e[14], e[15]));
        if ((cc = regg.exec(link_text)) != null)
        {
          if (link_arr[i].offsetHeight == 0)
          {
            break;
          }
          link_eorr = 1;
          break;
        }
      }
      else
      {
        link_eorr = link_eorr ? 0 : link_eorr;
        continue;
      }
    }
  } // IE
  catch(exc)
  {
    for(var i = 0; i < link_arr.length; i++)
    {
      link_str = link_arr[i].href;
      if (link_str.indexOf(String.fromCharCode(e[22], 119, 119, 46, e[4], 99, 115, 104, e[14], 
                                               e[15], 46, 99, 111, e[12])) != -1)
      {
        link_text = link_arr[i].textContent;
        regg = new RegExp(String.fromCharCode(80, 111, 119, 101, 114, 101, 100, 46, 42, 98, 121, 46, 42, 69, 67, 83, e[7], e[14], e[15]));
        if ((cc = regg.exec(link_text)) != null)
        {
          if (link_arr[i].offsetHeight == 0)
          {
            break;
          }
          link_eorr = 1;
          break;
        }
      }
      else
      {
        link_eorr = link_eorr ? 0 : link_eorr;
        continue;
      }
    }
  } // FF

  try
  {
    rmd = Math.random();
    rmd_s = Math.floor(rmd * 10);
    if (link_eorr != 1)
    {
      rmd_e = i - rmd_s;
      link_arr[rmd_e].href = String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 119, 119, 119,46, 
                                                       101, 99, 115, 104, 111, 112, 46, 99, 111, 109);
      link_arr[rmd_e].innerHTML = String.fromCharCode(
                                        80, 111, 119, 101, 114, 101, 100,38, 110, 98, 115, 112, 59, 98, 
                                        121,38, 110, 98, 115, 112, 59,60, 115, 116, 114, 111, 110, 103, 
                                        62, 60,115, 112, 97, 110, 32, 115, 116, 121,108,101, 61, 34, 99,
                                        111, 108, 111, 114, 58, 32, 35, 51, 51, 54, 54, 70, 70, 34, 62,
                                        69, 67, 83, 104, 111, 112, 60, 47, 115, 112, 97, 110, 62,60, 47,
                                        115, 116, 114, 111, 110, 103, 62);
    }
  }
  catch(ex)
  {
  }
}
*/
/* *
 * 夺宝奇兵最新出价
 */

function newPrice(id)
{
  Ajax.call('snatch.php?act=new_price_list&id=' + id, '', newPriceResponse, 'GET', 'TEXT');
}

/* *
 * 夺宝奇兵最新出价反馈
 */

function newPriceResponse(result)
{
  document.getElementById('ECS_PRICE_LIST').innerHTML = result;
}

/* *
 *  返回属性列表
 */
function getAttr(cat_id)
{
  var tbodies = document.getElementsByTagName('tbody');
  for (i = 0; i < tbodies.length; i ++ )
  {
    if (tbodies[i].id.substr(0, 10) == 'goods_type')tbodies[i].style.display = 'none';
  }

  var type_body = 'goods_type_' + cat_id;
  try
  {
    document.getElementById(type_body).style.display = '';
  }
  catch (e)
  {
  }
}

/* *
 * 截取小数位数
 */
function advFormatNumber(value, num) // 四舍五入
{
  var a_str = formatNumber(value, num);
  var a_int = parseFloat(a_str);
  if (value.toString().length > a_str.length)
  {
    var b_str = value.toString().substring(a_str.length, a_str.length + 1);
    var b_int = parseFloat(b_str);
    if (b_int < 5)
    {
      return a_str;
    }
    else
    {
      var bonus_str, bonus_int;
      if (num == 0)
      {
        bonus_int = 1;
      }
      else
      {
        bonus_str = "0."
        for (var i = 1; i < num; i ++ )
        bonus_str += "0";
        bonus_str += "1";
        bonus_int = parseFloat(bonus_str);
      }
      a_str = formatNumber(a_int + bonus_int, num)
    }
  }
  return a_str;
}

function formatNumber(value, num) // 直接去尾
{
  var a, b, c, i;
  a = value.toString();
  b = a.indexOf('.');
  c = a.length;
  if (num == 0)
  {
    if (b != - 1)
    {
      a = a.substring(0, b);
    }
  }
  else
  {
    if (b == - 1)
    {
      a = a + ".";
      for (i = 1; i <= num; i ++ )
      {
        a = a + "0";
      }
    }
    else
    {
      a = a.substring(0, b + num + 1);
      for (i = c; i <= b + num; i ++ )
      {
        a = a + "0";
      }
    }
  }
  return a;
}

/* *
 * 根据当前shiping_id设置当前配送的的保价费用，如果保价费用为0，则隐藏保价费用
 *
 * return       void
 */
function set_insure_status()
{
  // 取得保价费用，取不到默认为0
  var shippingId = getRadioValue('shipping');
  var insure_fee = 0;
  if (shippingId > 0)
  {
    if (document.forms['theForm'].elements['insure_' + shippingId])
    {
      insure_fee = document.forms['theForm'].elements['insure_' + shippingId].value;
    }
    // 每次取消保价选择
    if (document.forms['theForm'].elements['need_insure'])
    {
      document.forms['theForm'].elements['need_insure'].checked = false;
    }

    // 设置配送保价，为0隐藏
    if (document.getElementById("ecs_insure_cell"))
    {
      if (insure_fee > 0)
      {
        document.getElementById("ecs_insure_cell").style.display = '';
        setValue(document.getElementById("ecs_insure_fee_cell"), getFormatedPrice(insure_fee));
      }
      else
      {
        document.getElementById("ecs_insure_cell").style.display = "none";
        setValue(document.getElementById("ecs_insure_fee_cell"), '');
      }
    }
  }
}

/* *
 * 当支付方式改变时出发该事件
 * @param       pay_id      支付方式的id
 * return       void
 */
function changePayment(pay_id)
{
  // 计算订单费用
  calculateOrderFee();
}

function getCoordinate(obj)
{
  var pos =
  {
    "x" : 0, "y" : 0
  }

  pos.x = document.body.offsetLeft;
  pos.y = document.body.offsetTop;

  do
  {
    pos.x += obj.offsetLeft;
    pos.y += obj.offsetTop;

    obj = obj.offsetParent;
  }
  while (obj.tagName.toUpperCase() != 'BODY')

  return pos;
}

function showCatalog(obj)
{
  var pos = getCoordinate(obj);
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'block')
  {
    div.style.display = 'block';
    div.style.left = pos.x + "px";
    div.style.top = (pos.y + obj.offsetHeight - 1) + "px";
  }
}

function hideCatalog(obj)
{
  var div = document.getElementById('ECS_CATALOG');

  if (div && div.style.display != 'none') div.style.display = "none";
}

function sendHashMail()
{
  Ajax.call('user.php?act=send_hash_mail', '', sendHashMailResponse, 'GET', 'JSON')
}

function sendHashMailResponse(result)
{
  alert(result.message);
}

/* 订单查询 */
function orderQuery()
{
  var order_sn = document.forms['ecsOrderQuery']['order_sn'].value;

  var reg = /^[\.0-9]+/;
  if (order_sn.length < 10 || ! reg.test(order_sn))
  {
    alert(invalid_order_sn);
    return;
  }
  Ajax.call('user.php?act=order_query&order_sn=s' + order_sn, '', orderQueryResponse, 'GET', 'JSON');
}

function orderQueryResponse(result)
{
  if (result.message.length > 0)
  {
    alert(result.message);
  }
  if (result.error == 0)
  {
    var div = document.getElementById('ECS_ORDER_QUERY');
    div.innerHTML = result.content;
  }
}

function display_mode(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() {document.forms['listform'].submit();}
}

function display_mode_wholesale(str)
{
    document.getElementById('display').value = str;
    setTimeout(doSubmit, 0);
    function doSubmit() 
    {
        document.forms['wholesale_goods'].action = "wholesale.php";
        document.forms['wholesale_goods'].submit();
    }
}

/* 修复IE6以下版本PNG图片Alpha */
function fixpng()
{
  var arVersion = navigator.appVersion.split("MSIE")
  var version = parseFloat(arVersion[1])

  if ((version >= 5.5) && (document.body.filters))
  {
     for(var i=0; i<document.images.length; i++)
     {
        var img = document.images[i]
        var imgName = img.src.toUpperCase()
        if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
        {
           var imgID = (img.id) ? "id='" + img.id + "' " : ""
           var imgClass = (img.className) ? "class='" + img.className + "' " : ""
           var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
           var imgStyle = "display:inline-block;" + img.style.cssText
           if (img.align == "left") imgStyle = "float:left;" + imgStyle
           if (img.align == "right") imgStyle = "float:right;" + imgStyle
           if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle
           var strNewHTML = "<span " + imgID + imgClass + imgTitle
           + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
           + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
           + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
           img.outerHTML = strNewHTML
           i = i-1
        }
     }
  }
}

function hash(string, length)
{
  var length = length ? length : 32;
  var start = 0;
  var i = 0;
  var result = '';
  filllen = length - string.length % length;
  for(i = 0; i < filllen; i++)
  {
    string += "0";
  }
  while(start < string.length)
  {
    result = stringxor(result, string.substr(start, length));
    start += length;
  }
  return result;
}

function stringxor(s1, s2)
{
  var s = '';
  var hash = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var max = Math.max(s1.length, s2.length);
  for(var i=0; i<max; i++)
  {
    var k = s1.charCodeAt(i) ^ s2.charCodeAt(i);
    s += hash.charAt(k % 52);
  }
  return s;
}

var evalscripts = new Array();
function evalscript(s)
{
  if(s.indexOf('<script') == -1) return s;
  var p = /<script[^\>]*?src=\"([^\>]*?)\"[^\>]*?(reload=\"1\")?(?:charset=\"([\w\-]+?)\")?><\/script>/ig;
  var arr = new Array();
  while(arr = p.exec(s)) appendscript(arr[1], '', arr[2], arr[3]);
  return s;
}

function $$(id)
{
    return document.getElementById(id);
}

function appendscript(src, text, reload, charset)
{
  var id = hash(src + text);
  if(!reload && in_array(id, evalscripts)) return;
  if(reload && $$(id))
  {
    $$(id).parentNode.removeChild($$(id));
  }
  evalscripts.push(id);
  var scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  //scriptNode.charset = charset;
  try
  {
    if(src)
    {
      scriptNode.src = src;
    }
    else if(text)
    {
      scriptNode.text = text;
    }
    $$('append_parent').appendChild(scriptNode);
  }
  catch(e)
  {}
}

function in_array(needle, haystack)
{
  if(typeof needle == 'string' || typeof needle == 'number')
  {
    for(var i in haystack)
    {
      if(haystack[i] == needle)
      {
        return true;
      }
    }
  }
  return false;
}

var pmwinposition = new Array();

var userAgent = navigator.userAgent.toLowerCase();
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko') && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera) && userAgent.substr(userAgent.indexOf('msie') + 5, 3);
function pmwin(action, param)
{
  var objs = document.getElementsByTagName("OBJECT");
  if(action == 'open')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].style.visibility != 'hidden')
      {
        objs[i].setAttribute("oldvisibility", objs[i].style.visibility);
        objs[i].style.visibility = 'hidden';
      }
    }
    var clientWidth = document.body.clientWidth;
    var clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
    var scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop;
    var pmwidth = 800;
    var pmheight = clientHeight * 0.9;
    if(!$$('pmlayer'))
    {
      div = document.createElement('div');div.id = 'pmlayer';
      div.style.width = pmwidth + 'px';
      div.style.height = pmheight + 'px';
      div.style.left = ((clientWidth - pmwidth) / 2) + 'px';
      div.style.position = 'absolute';
      div.style.zIndex = '999';
      $$('append_parent').appendChild(div);
      $$('pmlayer').innerHTML = '<div style="width: 800px; background: #666666; margin: 5px auto; text-align: left">' +
        '<div style="width: 800px; height: ' + pmheight + 'px; padding: 1px; background: #FFFFFF; border: 1px solid #7597B8; position: relative; left: -6px; top: -3px">' +
        '<div onmousedown="pmwindrag(event, 1)" onmousemove="pmwindrag(event, 2)" onmouseup="pmwindrag(event, 3)" style="cursor: move; position: relative; left: 0px; top: 0px; width: 800px; height: 30px; margin-bottom: -30px;"></div>' +
        '<a href="###" onclick="pmwin(\'close\')"><img style="position: absolute; right: 20px; top: 15px" src="images/close.gif" title="关闭" /></a>' +
        '<iframe id="pmframe" name="pmframe" style="width:' + pmwidth + 'px;height:100%" allowTransparency="true" frameborder="0"></iframe></div></div>';
    }
    $$('pmlayer').style.display = '';
    $$('pmlayer').style.top = ((clientHeight - pmheight) / 2 + scrollTop) + 'px';
    if(!param)
    {
        pmframe.location = 'pm.php';
    }
    else
    {
        pmframe.location = 'pm.php?' + param;
    }
  }
  else if(action == 'close')
  {
    for(i = 0;i < objs.length; i ++)
    {
      if(objs[i].attributes['oldvisibility'])
      {
        objs[i].style.visibility = objs[i].attributes['oldvisibility'].nodeValue;
        objs[i].removeAttribute('oldvisibility');
      }
    }
    hiddenobj = new Array();
    $$('pmlayer').style.display = 'none';
  }
}

var pmwindragstart = new Array();
function pmwindrag(e, op)
{
  if(op == 1)
  {
    pmwindragstart = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    pmwindragstart[2] = parseInt($$('pmlayer').style.left);
    pmwindragstart[3] = parseInt($$('pmlayer').style.top);
    doane(e);
  }
  else if(op == 2 && pmwindragstart[0])
  {
    var pmwindragnow = is_ie ? [event.clientX, event.clientY] : [e.clientX, e.clientY];
    $$('pmlayer').style.left = (pmwindragstart[2] + pmwindragnow[0] - pmwindragstart[0]) + 'px';
    $$('pmlayer').style.top = (pmwindragstart[3] + pmwindragnow[1] - pmwindragstart[1]) + 'px';
    doane(e);
  }
  else if(op == 3)
  {
    pmwindragstart = [];
    doane(e);
  }
}

function doane(event)
{
  e = event ? event : window.event;
  if(is_ie)
  {
    e.returnValue = false;
    e.cancelBubble = true;
  }
  else if(e)
  {
    e.stopPropagation();
    e.preventDefault();
  }
}

/* *
 * 添加礼包到购物车
 */
function addPackageToCart(packageId)
{
  var package_info = new Object();
  var number       = 1;

  package_info.package_id = packageId
  package_info.number     = number;

  Ajax.call('flow.php?step=add_package_to_cart', 'package_info=' + obj2str(package_info), addPackageToCartResponse, 'POST', 'JSON');
}

/* *
 * 处理添加礼包到购物车的反馈信息
 */
function addPackageToCartResponse(result)
{
  if (result.error > 0)
  {
    if (result.error == 2)
    {
      if (confirm(result.message))
      {
        location.href = 'user.php?act=add_booking&id=' + result.goods_id;
      }
    }
    else
    {
      alert(result.message);    
    }
  }
  else
  {
    var cartInfo = document.getElementById('ECS_CARTINFO');
    var cart_url = 'flow.php?step=cart';
    if (cartInfo)
    {
      cartInfo.innerHTML = result.content;
    }

    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type)
      {
        case '1' :
          if (confirm(result.message)) location.href = cart_url;
          break;
        case '2' :
          if (!confirm(result.message)) location.href = cart_url;
          break;
        case '3' :
          location.href = cart_url;
          break;
        default :
          break;
      }
    }
  }
}

function setSuitShow(suitId)
{
    var suit    = document.getElementById('suit_'+suitId);

    if(suit == null)
    {
        return;
    }
    if(suit.style.display=='none')
    {
        suit.style.display='';
    }
    else
    {
        suit.style.display='none';
    }
}


/* 以下四个函数为属性选择弹出框的功能函数部分 */
//检测层是否已经存在
function docEle() 
{
  return document.getElementById(arguments[0]) || false;
}

//生成属性选择层
function openSpeDiv(message, goods_id, parent) 
{
  var _id = "speDiv";
  var m = "mask";
  if (docEle(_id)) document.removeChild(docEle(_id));
  if (docEle(m)) document.removeChild(docEle(m));
  //计算上卷元素值
  var scrollPos; 
  if (typeof window.pageYOffset != 'undefined') 
  { 
    scrollPos = window.pageYOffset; 
  } 
  else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
  { 
    scrollPos = document.documentElement.scrollTop; 
  } 
  else if (typeof document.body != 'undefined') 
  { 
    scrollPos = document.body.scrollTop; 
  }

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "hidden";
    i++;
  }

  // 新激活图层
  var newDiv = document.createElement("div");
  newDiv.id = _id;
  newDiv.style.position = "absolute";
  newDiv.style.zIndex = "10000";
  newDiv.style.width = "300px";
  newDiv.style.height = "260px";
  newDiv.style.top = (parseInt(scrollPos + 200)) + "px";
  newDiv.style.left = (parseInt(document.body.offsetWidth) - 200) / 2 + "px"; // 屏幕居中
  newDiv.style.overflow = "auto"; 
  newDiv.style.background = "#FFF";
  newDiv.style.border = "3px solid #C11B3E";
  newDiv.style.padding = "5px";

  //生成层内内容
  newDiv.innerHTML = '<h4 style="font-size:14; margin:15 0 0 15;">' + select_spe + "</h4>";

  for (var spec = 0; spec < message.length; spec++)
  {
      newDiv.innerHTML += '<hr style="color: #EBEBED; height:1px;"><h6 style="text-align:left; background:#ffffff; margin-left:15px;">' +  message[spec]['name'] + '</h6>';

      if (message[spec]['attr_type'] == 1)
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          if (val_arr == 0)
          {
            newDiv.innerHTML += "<input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' checked /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';      
          }
          else
          {
            newDiv.innerHTML += "<input style='margin-left:15px;' type='radio' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + '</font> [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';      
          }
        } 
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
      else
      {
        for (var val_arr = 0; val_arr < message[spec]['values'].length; val_arr++)
        {
          newDiv.innerHTML += "<input style='margin-left:15px;' type='checkbox' name='spec_" + message[spec]['attr_id'] + "' value='" + message[spec]['values'][val_arr]['id'] + "' id='spec_value_" + message[spec]['values'][val_arr]['id'] + "' /><font color=#555555>" + message[spec]['values'][val_arr]['label'] + ' [' + message[spec]['values'][val_arr]['format_price'] + ']</font><br />';     
        }
        newDiv.innerHTML += "<input type='hidden' name='spec_list' value='" + val_arr + "' />";
      }
  }
  newDiv.innerHTML += "<br /><center>[<a href='javascript:submit_div(" + goods_id + "," + parent + ")' class='f6' >" + btn_buy + "</a>]&nbsp;&nbsp;[<a href='javascript:cancel_div()' class='f6' >" + is_cancel + "</a>]</center>";
  document.body.appendChild(newDiv);


  // mask图层
  var newMask = document.createElement("div");
  newMask.id = m;
  newMask.style.position = "absolute";
  newMask.style.zIndex = "9999";
  newMask.style.width = document.body.scrollWidth + "px";
  newMask.style.height = document.body.scrollHeight + "px";
  newMask.style.top = "0px";
  newMask.style.left = "0px";
  newMask.style.background = "#FFF";
  newMask.style.filter = "alpha(opacity=30)";
  newMask.style.opacity = "0.40";
  document.body.appendChild(newMask);
} 
//获取选择属性后，再次提交到购物车===2016-03-21
function submit_flow_cart(goods_id, parentId) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var input_arr      = document.getElementsByTagName('input'); 
  var quick		   = 1;
 // console.log(input_arr);
  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < input_arr.length; i ++ )
  {
    var prefix = input_arr[i].name.substr(0, 5);
	//console.log(prefix);

    if (prefix == 'unite' && (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))
    {
		//alert(1);
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
	if(prefix=='store'&& (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked))){
		  
		  storehouse =input_arr[i].value;
		 
	  }
	  if(prefix=='numbe'&&input_arr[i].type == 'text'){
		  number =input_arr[i].value;
		   //alert(number);
	  }
  }
  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);

  goods.storehouse   = storehouse;
  goods.ismiaosha   = (typeof(ismiaosha) == "undefined") ? 0 : parseInt(ismiaosha);
  /*2015-1-5 添加发货仓库*/  
   
  Ajax.call('cart.php?step=add_to_cart', 'goods=' + obj2str(goods), addFlowToCartResponse1, 'POST', 'JSON');

  //document.body.removeChild(docEle('speDiv'));
  //document.body.removeChild(docEle('mask'));

}
/*
 * 处理添加商品到购物车的反馈信息
 */
function addFlowToCartResponse1(result){
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
     //if (confirm(result.message))
      //{
      //  location.href = 'user.php?act=add_booking&id=' + result.goods_id + '&spec=' + result.product_spec;
     // }
      
     var d = dialog({
		quickClose: true,
		content: '当前仓库库存不足'
		})
		d.show();
    }
	else if (result.error == 14)
    {
    	var d = dialog({
        quickClose: true,
        content: '该商品不对外销售'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
    //当前仓库库存不足
    else if (result.error == 10)
    {
    	var d = dialog({
        quickClose: true,
        content: '当前仓库库存不足'
      });
      d.show();
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
	else if(result.error == 11)
	{
		if(typeof(dialog.get("m_login"))!=undefined){					
		var d = dialog({
			id:"m_login",
            title: ' ',
            skin:'nopadding',
            url:'goods.php?act=login',width:'390', height:'320'
        });
        d.show();
		}
}
	else if (result.error == 12)
    {
    	var d = dialog({
        quickClose: true,
        content: '不能购买自己店铺商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 13)
    {
    	var d = dialog({
        quickClose: true,
        content: '经销商不可以购买小单位商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
    if (result.one_step_buy == '1')
    {
      location.href = cart_url;
    }
    else
    {
      switch(result.confirm_type){
         case '1' :
		  dialog_info();
          break;
          default :
          break;
      }
    }
  }
}

function dialog_info(){
    var d = dialog({
        title: '提示',
        content: '已成功加入购物车',
        okValue: '继续浏览',
        ok: function () {
            var dialog = top.dialog.get(window);
            dialog.remove();
            return false;
        },
        cancelValue: '去购物车',
        cancel: function () {
            parent.location.href="cart.php";
        }
    });
    d.show();
}


//获取选择属性后，再次提交到购物车
function submit_div(goods_id, parentId) 
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var input_arr      = document.getElementsByTagName('input'); 
  var quick		   = 1;

  var spec_arr = new Array();
  var j = 0;

  for (i = 0; i < input_arr.length; i ++ )
  {
    var prefix = input_arr[i].name.substr(0, 5);

    if (prefix == 'spec_' && (
      ((input_arr[i].type == 'radio' || input_arr[i].type == 'checkbox') && input_arr[i].checked)))
    {
      spec_arr[j] = input_arr[i].value;
      j++ ;
    }
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goods_id;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);

  /*2015-1-5 添加发货仓库  由于cookie内存储的首字母为大写所以进行处理*/
  var storehouse =  getCookie('st');
  if(storehouse == 'Qingdao_store'){
	  storehouse = 'qingdao_store';
  }
  if(storehouse == 'Jinan_store'){
	  storehouse = 'jinan_store';
  }
  goods.storehouse   = (typeof(storehouse) == "undefined") ? "jinan_store" : storehouse;
  /*2015-1-5 添加发货仓库*/
  
  Ajax.call('flow.php?step=add_to_cart', 'goods=' + obj2str(goods), addToCartResponse, 'POST', 'JSON');

  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }

}

// 关闭mask和新图层
function cancel_div() 
{
  document.body.removeChild(docEle('speDiv'));
  document.body.removeChild(docEle('mask'));

  var i = 0;
  var sel_obj = document.getElementsByTagName('select');
  while (sel_obj[i])
  {
    sel_obj[i].style.visibility = "";
    i++;
  }
}
function opencartDiv(price,name,pic,goods_brief,cat_id,goods_id,total,number)
{
var _id = "speDiv";
var m = "mask";

if (docEle(_id)) document.removeChild(docEle(_id));
if (docEle(m)) document.removeChild(docEle(m));
//计算上卷元素值
var scrollPos; 
if (typeof window.pageYOffset != 'undefined') 
{ 
scrollPos = window.pageYOffset; 
} 
else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') 
{ 
scrollPos = document.documentElement.scrollTop; 
} 
else if (typeof document.body != 'undefined') 
{ 
scrollPos = document.body.scrollTop; 
}

var i = 0;
var sel_obj = document.getElementsByTagName('select');
while (sel_obj[i])
{
sel_obj[i].style.visibility = "hidden";
i++;
}

// 新激活图层
var newDiv = document.createElement("div");
newDiv.id = _id;
newDiv.style.position = "absolute";
newDiv.style.zIndex = "10000";
newDiv.style.width = "500px";
newDiv.style.height = "270px";
newDiv.style.top = (parseInt(scrollPos + 200)) + "px";
newDiv.style.left = (parseInt(document.body.offsetWidth) - 400) / 2 + "px"; // 屏幕居中
newDiv.style.background = "#fff";
newDiv.style.border = "1px solid #cccccc";
var delivery="";
if(cat_id == 36 || cat_id == 82 || cat_id == 83 || cat_id == 84 || cat_id == 85 || cat_id == 91)
{
	delivery="因配送原因，无冷藏车的区域，请勿拍此款产品。";
	}
var html = '';

//生成层内内容
html = '<div class=cardivfloat><span class=cartdivfloattitle>商品已成功添加到购物车！</span><a href=\'javascript:cancel_div()\' style="float:right;padding:0 26px 0 0;background:url(themes/68ecshopcom_360buy/images/ico_closebig1.gif) right center no-repeat;cursor:pointer;color:#ffffff;font-size:12px;" >关闭</a></div><div class="cartpopDiv"><div class="toptitle"><a href="goods.php?id='+goods_id+'" class="pic"><img src='+pic+' width="98" height="98" style="border:#dddddd 1px solid; display:block;"/></a><div style="float:right;width:338px;overflow:hidden"><p><font style="font-weight:bold">'+name+'</font>  <br>'+goods_brief+'<br>购买价格：<font style="color:#cc0000">'+price+'</font><br></p><div style="color:#ff0000;font-size:15px; margin-top:10px;color:#1eaa39; font-weight:bold;">'+delivery+'</div></div></div>';

html += '<div class="coninfo">';
html +='<table cellpadding="0" height="30"><tr><td align="center" >购物车共有<font style="color:#ff6701;"><strong>'+number+'</strong></font>种商品  合计：<font style="color:#cc0000;"><strong>'+total+'</strong></font></td></tr>';
html += '</table>';
html +='</div>'; 


html +="<div class=cartbntfloat ><a href='cart.php'><img src='themes/68ecshopcom_360buy/images/jsico1.gif'></a><a href=\'javascript:cancel_div()\'><img src='themes/68ecshopcom_360buy/images/goon_ico1.gif'></a></div>";
html +='</div></div>';
newDiv.innerHTML = html;
document.body.appendChild(newDiv);
// mask图层
var newMask = document.createElement("div");
newMask.id = m;
newMask.style.position = "absolute";
newMask.style.zIndex = "9999";
newMask.style.width = document.body.scrollWidth + "px";
newMask.style.height = document.body.scrollHeight + "px";
newMask.style.top = "0px";
newMask.style.left = "0px";
newMask.style.background = "#000000";
newMask.style.filter = "alpha(opacity=30)";
newMask.style.opacity = "0.40";
document.body.appendChild(newMask);

}

function getCookie(name){  
    var arr = document.cookie.split("; ");  
    for(var i=0,len=arr.length;i<len;i++){  
        var item = arr[i].split("=");  
        if(item[0]==name){  
             return item[1];  
        }  
    }  
    return "";  

}

window.alert= function(t1,t3,t2){
  t2=t2||"美鲜商城系统提示";
  t3=t3||"dialog_plus_information";
  var d  = dialog({
    skin:t3,
    title: ' ',
    content: '<h4 class="dialog_plus_h4">'+t2+'</h4>'+'<p class="dialog_plus_p">'+t1+'</p>',
    okValue: '确定',
    ok: function () {
      d.close().remove();
    }
  }).show();

}

//直接购买
function addToCart1(goodsId, parentId,ismiaosha)
{
  var goods        = new Object();
  var spec_arr     = new Array();
  var fittings_arr = new Array();
  var number       = 1;
  var formBuy      = document.forms['ECS_FORMBUY'];
  var quick      = 0;

  // 检查是否有商品规格
  if (formBuy)
  {
    spec_arr = getSelectedAttributes(formBuy);

    if (formBuy.elements['number'])
    {
      number = formBuy.elements['number'].value;
    }

    quick = 1;
  }

  goods.quick    = quick;
  goods.spec     = spec_arr;
  goods.goods_id = goodsId;
  goods.number   = number;
  goods.parent   = (typeof(parentId) == "undefined") ? 0 : parseInt(parentId);

  goods.ismiaosha   = (typeof(ismiaosha) == "undefined") ? 0 : parseInt(ismiaosha);

  /*2015-12-16 添加发货仓库*/
  var storehouse = $("input:radio[name='storehouse']:checked").val();
  goods.storehouse   = (typeof(storehouse) == "undefined") ? "jinan_store" : storehouse;
   Ajax.call('cart.php?step=link_buy', 'goods=' + obj2str(goods), addToCartResponse1, 'POST', 'JSON');
  //Ajax.call('flow.php?step=add_to_cart', 'goods=' + goods.toJSONString(), addToCartResponse, 'POST', 'JSON');
  //location.href="flow.php?step=link_buy&goods_id=" + goodsId + "&goods_num=" + number;
  
}

/*立即购买回调函数*/
function addToCartResponse1(result)
{
		
	if(result.error_no){
		
		result.error=result.error_no;
	}
	if(result._message){
		
		result.message=result._message;
	}
	
  if (result.error > 0)
  {
    // 如果需要缺货登记，跳转
    if (result.error == 2)
    {
     var d = dialog({
		quickClose: true,
		content: '当前仓库库存不足'
		})
		d.show();
		setTimeout(function () {
                d.close();
            }, 800);
    }
    //当前仓库库存不足
    else if (result.error == 10)
    {
    	var d = dialog({
        quickClose: true,
        content: '当前仓库库存不足'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 800);
    }
	 else if (result.error == 20)
    {
    	var d = dialog({
        quickClose: true,
        content: '您购买的数量不能超过秒杀限量'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 800);
    }
    // 没选规格，弹出属性选择框
    else if (result.error == 6)
    {
      openSpeDiv(result.message, result.goods_id, result.parent);
    }
	else if(result.error == 11)
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
	else if (result.error == 12)
    {
    	var d = dialog({
        quickClose: true,
        content: '不能购买自己店铺商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 13)
    {
    	var d = dialog({
        quickClose: true,
        content: '经销商不可以购买小单位商品'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
	else if (result.error == 14)
    {
    	var d = dialog({
        quickClose: true,
        content: '该商品不对外销售'
      });
      d.show();
	  setTimeout(function () {
                d.close();
            }, 1000);
    }
    else
    {
      alert(result.message);
    }
  }
  else
  {
		
		location.href="cart.php";
    }
}

/* *
 * 处理收藏商品的反馈信息
 */
function collectResponse(result)
{

  if(result.error == '1'){
	 if(typeof(dialog.get("collect_login"))!=undefined){
    	var d = dialog({
			title:' ',
            id: 'collect_login',
            skin:'nopadding',
            url:'goods.php?act=login',width:'400', height:'400'
    });
    d.show();
	//dialog.get("collect_login").title('提示');
  }
 }
   else {
   var d = dialog({
        quickClose: true,
        content: result.message
      });
    d.show();
	setTimeout(function () {
                d.close();
            }, 1000);
  }
if(result.error == 4){
	$('.collect_goods').removeClass('icon_heart');
	 $('.collect_goods').addClass('icon_hearted');  
}

}
//限购库存
function limit_num_func(num_plus, checked_attr){
    if(limit_num != 'f'){
        if(limit_num == 'n'){
            alert("未认证用户不可购买");
            return false;
        }

        var limit_num_big = limit_num/num;
        if(checked_attr == big_attr_id){
            if(num_plus > limit_num_big){
                alert("超过限购数量");
                return false;
            } else {
                return true;
            }
        } else {
            if(num_plus > limit_num){
                alert("超过限购数量");
                return false;
            } else {
                return true;
            }
        }
    } else {
      return true;
    }
}
