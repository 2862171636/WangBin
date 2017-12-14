// JavaScript Document
 // function track_follow_over(){
	// 		$('.order_track').css('display','block');
	// 		}
	// 	function track_follow_out(){
	// 		$('.order_track').css('display','none');
	// 		}
		function setover(){
			$(".count_nr").css({'display':'block','background':'#fff','width':'85px;'});		
			$(".zh").css("color","#666");
			}
		function setout(){
			$('.count_nr').css('display','none');
			$(".zh").css("color","#fff");
			}
		function time_over(){
			$('.time_con').css({'display':'block','background':'#fff','width':'85px;'});
			}
		function time_out(){
			$('.time_con').css('display','none');
			}	
	
//让placeholder兼容低版本浏览器	

    var doc=document,inputs=doc.getElementsByTagName('input'),supportPlaceholder='placeholder'in doc.createElement('input'),placeholder=function(input){var text=input.getAttribute('placeholder'),defaultValue=input.defaultValue;
    if(defaultValue==''){
        input.value=text}
        input.onfocus=function(){
            if(input.value===text){this.value=''}};
            input.onblur=function(){if(input.value===''){this.value=text}}};
            if(!supportPlaceholder){
                for(var i=0,len=inputs.length;i<len;i++){var input=inputs[i],text=input.getAttribute('placeholder');
                if(input.type==='text'&&text){placeholder(input)}}};
	
//收藏begin
var flag = "left"; 
function DY_scroll(wraper,prev,next,img,speed,or){ 
var wraper = $(wraper); 
var prev = $(prev); 
var next = $(next); 
var img = $(img).find('ul'); 
var w = img.find('li').outerWidth(true); 
var s = speed; 
next.click(function(){ 
img.animate({'margin-left':-w},function(){ 
img.find('li').eq(0).appendTo(img); 
img.css({'margin-left':0}); 
}); 
flag = "left"; 
}); 
prev.click(function(){ 
img.find('li:last').prependTo(img); 
img.css({'margin-left':-w}); 
img.animate({'margin-left':0}); 
flag = "right"; 
}); 
if (or == true){ 
ad = setInterval(function() { flag == "left" ? next.click() : prev.click()},s*1000); 
wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() {flag == "left" ? next.click() : prev.click()},s*1000);}); 
} 
} 
DY_scroll('.hl_main5_content','.hl_scrool_leftbtn','.hl_scrool_rightbtn','.hl_main5_content1',3,false);// true为自动播放，不加此参数或false就默认不自动

//收藏end

 //选择按钮样式修改后修复功能
    $(".a-upload").on("change","input[type='file']",function(){
        $this = $(this);
        var filePath=$(this).val();
        if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
            $(".fileerrorTip").html("").hide();
            var arr=filePath.split('\\');
            var fileName=arr[arr.length-1];
            $this.closest(".up").find("input[type='text']").val(fileName);
        }else{
            //$this.closest("td").find("input[type='text']").html("");
            $this.closest(".up").find("input[type='text']").html("您未上传文件，或者您上传文件类型有误！").show();
            return false
        }
    });
	

/*填写物流弹窗*/
jQuery(document).ready(function($) {
	$('.payment_now').click(function(){
		var id = $(this).attr("jsstr");
		$.post("refund.html",{id:id},function(result){
			$('.theme-popover-mask').show();
		$('.theme-popover').slideDown(200);
			});
		
		
	});
	
	$('.theme-poptit .close').click(function(){
		$('.theme-popover-mask').hide();
		$('.theme-popover').slideUp(200);
	})

});

function validate(){
	var company=$('.company').val();
	var expressNum=$('.expressNum').val();
	if(!company){
		$(".prompt").html("请填写物流公司");
		return false;
		}
	if(!expressNum || expressNum=="在此输入相应物流单号"){
		$(".prompt").html("请填写物流单号");
		return false;
		}	
	}

$(function(){
	$(".td05 .track").hover(function(){

		var thiId = $(this).attr('id');
		var dialog_content;
		$.get("user.php", { order_id: thiId,act: "order_track"},
                                function(data){
                                  
                                   dialog_content = data;
                                   var d = dialog({
    	content: dialog_content,
    	quickClose: true// 点击空白处快速关闭
		});
		d.show(document.getElementById(thiId));
                                });
		

	},function(){
		
	})
});
$(function(){
	$(".track_follow .track").hover(function(){

		var thiId = $(this).attr('jsorderid');
		var dialog_content;
		$.get("user.php", { order_id: thiId,act: "order_track"},
                                function(data){
                                  
                                   dialog_content = data;
                                   var d = dialog({
    	content: dialog_content,
    	quickClose: true// 点击空白处快速关闭
		});
		d.show(document.getElementById(thiId));
                                });
		

	},function(){
		
	})
});
//认证hover
$(function(){
	$(".authen_restauran").hover(function(){
		$(".h_tips_part01").show();
	},function(){
		$(".h_tips_part01").hide();
	});
	$(".authen_agency").hover(function(){
		$(".h_tips_part02").show();
	},function(){
		$(".h_tips_part02").hide();
	});
	$("#map_tips").hover(function(){
		$(".map_dialog").show();
	},function(){
		$(".map_dialog").hide();
	});
//说明hover
	$("#uploading_liance_tips").hover(function(){
		$(".uploading_liance_dialog ").show();
	},function(){
		$(".uploading_liance_dialog ").hide();
	});
});
//猜你喜欢hover返回二级菜单
$(function(){
	greenBorder();
	function greenBorder(){
		$('.p-img .top_warp  ').hover(function(){
		$(this).closest('.p-img').find('.jump_cata').show();
		$(this).closest('li').css('border','1px solid #3ca752')
	},function(){
		$(this).closest('.p-img').find('.jump_cata').hide();
		$(this).closest('li').css('border','1px solid #eeeeee')

	});
	}
	
});

//换一组
$(function(){
	$("#get_change_page").click(function(){
		var page = $("#like_page").val();//console.log(page);
		var content = '';
		$.ajax({
			type:'POST',
			url:'user.php?act=change_like_page',
			data:{page:page},
			dataType: "json",
			success:function(result){
				if(result.error == '0'){
					//eval("var r="+result);
					$.each(result.like_list,function(index,value){
						if(value.shop_id == 0){
                        	var shop_name = '<span class="form_title">'+
												'<i class="icon_meixian_selfn1"></i>'+
												'<s>美鲜自营</s>'+
											'</span>';
                        }else{
                        	var shop_name = '<span class="form_title shop_title">'+
												'<i class="icon_shop_selfn"></i>'+
												'<s>'+value.shop_name+'</s>'+
											'</span>';
                        }
                        if (value.is_promote == 1) {
                        	var huodong = '<i class="icon icon_prompt"></i>';
                        }else if (value.is_miaosha == 1) {
                        	var huodong = '<i class="icon icon_miaosha"></i>';
                        }else{
                        	var huodong = '';
                        }
						content += '<li>'+
	                                    '<div class="p-img">'+
	                                        '<div class="top_warp">'+
	                                            '<a target="_blank" href="goods.php?id='+value.goods_id+'">'+
	                                                '<img src="'+value.goods_thumb+'" alt="'+value.goods_name+'" width="218px" height="220px">'+
	                                            '</a>'+
	                                            '<div class="jump_cata" style="display: none;">'+
	                                                '<a href="category.php?id='+value.cid1+'" class="cata_lt"><i class="jump_cata_item"></i><em>'+value.name1+'</em></a>'+
	                                                '<a href="category.php?id='+value.cid2+'" class="cata_rt"><em>'+value.name2+'</em><i class="jump_cata_item"></i></a>'+
	                                            '</div>'+
	                                        '</div>'+
	                                        '<a target="_blank" href="goods.php?id='+value.goods_id+'">'+
	                                            '<span class="goods_price">'+value.final_price+'</span>'+
	                                            '<div class="warp_p">'+
	                                                '<p>'+value.goods_name+'</p>'+
	                                                shop_name+
	                                                huodong+
	                                            '</div>'+
	                                        '</a>'+
	                                    '</div>'+
	                                '</li>';
		            })
					$('#like_goods').html();
					$('#like_goods').html(content);
					$('#like_page').val(result.page);
					greenBorder();
					function greenBorder(){
						$('.p-img .top_warp  ').hover(function(){
						$(this).closest('.p-img').find('.jump_cata').show();
						$(this).closest('li').css('border','1px solid #3ca752')
					},function(){
						$(this).closest('.p-img').find('.jump_cata').hide();
						$(this).closest('li').css('border','1px solid #eeeeee')

					});
					}

				}else{
					var d = dialog({
					quickClose: true,
					content: result.msg
					})
					d.show();
					setTimeout(function () {
						d.close();
					}, 1000);
				}
			}
		})
	})
});






