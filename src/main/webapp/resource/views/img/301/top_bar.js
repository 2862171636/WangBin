/**
 * Created by mefisto on 2016/2/22.
 */
//购物车隐藏
$(function (){
    $(".item_04").hover(function(){
        $(".cart_list").show();
    },function(){
        $(".cart_list").hide();
    });
	$(".item_07").hover(function(){
        $("#code_donwload").show();
        
    },function(){
        $("#code_donwload").hide();
    });

//        购物车删除事件
    $(".cart_list .carts_delete").click(function(e){
          o=e.target;
       
        $.ajax({
    
            url:'cart.php?step=drop_to_collects',
            
            type:'POST',
           
            data:'data=' +$(this).attr("rid"),
           
            success:function(result){

               result=result.replace("\r","").replace("\n","");
                $(o).closest("li").hide();
               
               eval("num="+result);
               $("#nubs").html(num.number);
               $("#nubs2").html(num.number);
               $("#prices").html(num.amount);

            },
            error:function(msg){
                alert('Error:'+msg);
            }
        });
       

    });
//        dorpdown hover 事件
    $(".dorpdown").hover(function(){
        $(this).find(".dorpdown_ul").show();
    },function(){
        $(this).find(".dorpdown_ul").hide()
    });

});
