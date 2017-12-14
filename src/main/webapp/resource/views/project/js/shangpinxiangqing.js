var guanzhu = true;
$(".detail_main_l_3_2").click(function() {
    if (guanzhu) {
        guanzhu = false;
        $(".detail_main_l_3_2").html("已关注");
    } else {
        guanzhu = true
        $(".detail_main_l_3_2").html("关注");
    }
});
// 放大镜初始化
$("#etalage").zoom({
    zoom_area_width: 200,
    autoplay_interval: 3000,
    small_thumbs: 4,
    thumb_image_width: 350, // 当前展示图片的宽
    thumb_image_height: 350,
    source_image_width: 640, // 放大图片的宽
    source_image_height: 640,
    zoom_area_width: 400, // 放大图片的展示区域的宽
    zoom_area_height: "justify",
    autoplay: true
});
//		var _option = {
//		    align: "right",              // 当前展示图片的位置，则放大的图片在其相对的位置
//		    thumb_image_width: 250,     // 当前展示图片的宽
//		    thumb_image_height: 250,    // 当前展示图片的高
//		    source_image_width: 940,    // 放大图片的宽
//		    source_image_height: 940,  // 放大图片的高
//		    zoom_area_width: 600,       // 放大图片的展示区域的宽
//		    zoom_area_height: "justify",// 放大图片的展示区域的高
//		    zoom_area_distance: 10,     //
//		    zoom_easing: true,          // 是否淡入淡出
//		    description_opacity: 0.7,
//		    small_thumbs: 4,            // 小图片展示的数量
//		    smallthumb_inactive_opacity: 0.4,   // 小图片处于非激活状态时的遮罩透明度
//		    smallthumbs_position: "bottom",     // 小图片的位置
//		    show_icon: true,
//		    hide_cursor: false,         // 鼠标放到图片时，是否隐藏指针
//		    speed: 600,                 //
//		    autoplay: true,             // 是否自动播放
//		    autoplay_interval: 6000,    // 自动播放时每张图片的停留时间
//		}

// 数据交互
// 从链接中获取键名和值
function getArgs() {
    //创建一个存放键值对的数组
    var args = [];
    //去除?号
    var qs = location.search.length > 0 ? location.search.substring(1) : '';
    //按&字符串拆分数组
    var items = qs.split('&');
    var item = null,
        name = null,
        value = null;
    //遍历
    for (var i = 0; i < items.length; i++) {
        item = items[i].split('=');
        name = item[0];
        value = item[1];
        //把键值对存放到数组中去
        args[name] = value;
    }
    return args;
}
var arr_href = location.search;
console.log(arr_href);
var arr_pId = arr_href.split("=");
var pId = parseInt(arr_pId[1]);
console.log(pId);
$.ajax({
    type: "get",
    url: "http://10.80.16.104:8080/Details/selectProduct.do?pId=" + pId,
    async: true,
    dataType: "json",
    success: function(data) {
        //      console.log(data);
        //商品编号
        $(".detail_main_l_3_1").html("商品编号：" + data.product.pNumber);
        $(".bh").html(data.product.pNumber);
        //商品名称
        $(".main_r_content_1>h2").html(data.product.pName).attr("aa", data.product.pId);
        //商品描述
        $(".main_r_content_2>p").html(data.product.pInfo);
        //商品价格
        //      $(".main_r_content_3_2").html("￥" + data.product.pMoney + "元");
        //规格
        $(".gg").html(data.product.pSpec);
        //积分
        $(".jf").html(data.product.pPoint + " 积分");
        //单整箱
        $(data.unit).each(function(x) {
            $(".dw").after($("<div class='danwei' aa=" + data.unit[data.unit.length - 1 - x].unit_id + ">" + data.unit[data.unit.length - 1 - x].unit_name + "</div>"));
        });
        $(".danwei").click(function() {
            $(".danwei").removeClass("xuanz");
            $(this).addClass("xuanz");
            qpck();
        });
        $(".danwei").eq(0).addClass("xuanz");
        //购买种类
        $(data.spec).each(function(x) {
            $(".spgg").after($("<div class='guige' aa=" + data.spec[data.spec.length - 1 - x].spec_id + ">" + data.spec[data.spec.length - 1 - x].spec_name + "</div>"));
        });
        $(".guige").click(function() {
            $(".guige").removeClass("xuanz");
            $(this).addClass("xuanz");
            qpck();
        });
        $(".guige").eq(0).addClass("xuanz");
        //发货仓库
        qpck();

        function qpck(xx) {
            var a = $(".xuanz").eq(0).attr("aa");
            var b = $(".xuanz").eq(1).attr("aa");
            $.ajax({
                type: "get",
                url: "http://10.80.16.104:8080/Details/selectPrice.do?p_id=" + data.product.pId + "&spec_id=" + b + "&unit_id=" + a,
                async: true,
                dataType: "json",
                success: function(nn) {
                    //商品价格
                    $(".main_r_content_3_2").html("￥" + nn.price_name + "元").attr("aa", nn.price_id);
                    $(".cck").html(" <span class='ckk'>发货仓库：</span><div class='xuanz' aa=" + nn.price_id + ">" + nn.stocks[0].stockName + "<span>(" + nn.stocks[0].stockNum + ")</span></div>");
                    $(".int").val(nn.stocks[0].stockId);
                    //加减数量
                    $(".sl_jian").off("click");
                    $(".sl_jian").on("click", function() {
                        var aa = parseInt($(this).next().val());
                        aa <= 1 ? aa = 1 : aa--;
                        $(this).next().val(aa);
                    });
                    $(".sl_jia").off("click");
                    $(".sl_jia").on("click", function() {
                        var aa = parseInt($(this).prev().prev().val());
                        aa >= nn.stocks[0].stockNum ? aa : aa++;
                        $(this).prev().prev().val(aa);
                    });
                }
            });
        }
        //点击购买发送数据
        $("#goumai").click(function() {
            var jiag = Number($(".main_r_content_3_2").html().substring(1));
            window.location.href = "gouwuche.html?danjia=" + jiag;

            $.ajax({
                type: "get",
                url: "",
                async: true
            });
        });
    }
});