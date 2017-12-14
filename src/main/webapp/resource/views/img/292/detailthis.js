/**
 * Created on 2016/6/25 0025.
 */
$(".comments_item").live('mouseover',function(){
    //console.log('over');
    $(this).find('.comment_operate a').addClass('curr');
})
$(".comments_item").live('mouseout',function(){
    //console.log('out')
    /*console.log($(this).find(".reply_textarea").css("display"))
    if($(this).find(".reply_textarea").css("display")=="block"){
        $(this).find('.comment_operate a').addClass('curr');
    }else{

    }*/
    $(this).find('.comment_operate a').removeClass('curr');
})
$('.comment_reply').click(function(){
    $(this).closest('.comment_operate').find('.reply_textarea').toggle();
})
$(function(){
    //tab页切换
    $(".tab .tab_control li").each(function(i){
        $(this).find('a').click(function(){
            $('.tab .tab_control li a').removeClass('selected').eq(i).addClass('selected');
            $('.tab .tabs_content ').hide().eq(i).show();
            comm_control();
        })
    });
    $('.tab_wrap li').live('click',function(){
        //console.log('aa');
        $(this).each(function(i){
            var thisI = $(this).index();
            $('.comments_list .tab_wrap li').removeClass('curr')
            $(this).addClass('curr');
            $(this).closest('.comments_list').find('.comments_tab_content').hide().eq(thisI).show();
        });
    })
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
    //评论操作
    comm_control();
	function  comm_control(){
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
		

    }
});