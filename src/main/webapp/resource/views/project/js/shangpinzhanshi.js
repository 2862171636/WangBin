var h = document.getElementsByClassName('hh')[0].offsetHeight;
document.getElementsByClassName('pp')[0].style.height = h - 1 + 'px';
var hs = document.getElementsByClassName('hs')[0].offsetHeight;
document.getElementsByClassName('xg')[0].style.height = hs - 2 + 'px';
//
//var obj = {
//	"seccess": [{
//		"pId": 3,
//		"pSpec": "伊赛牛肉 冻牛肚—抄码 18kg-22kg/箱",
//		"pMoney": 15247,
//		"pImg": "http://www.emeixian.com/images/201703/thumb_img/3890_thumb_G_1490913766816.jpg"
//	}, {
//		"pId": 5,
//		"pSpec": "澳馨 肥牛1号 3.575kg/板 7板/箱\n\n\n商品编号： 11350 关注\nEng\n冷冻去骨牛肉 牛腩肉 -抄码 巴西进口 23kg-27kg/箱\n\n商品编号： 11350 关注\nEng\n冷冻去骨牛肉 牛腩肉 -抄码 巴西进口 23kg-27kg/箱\n\n商品编号： 11350 关注\nEng\n冷冻去骨牛肉 牛腩肉 -抄码 巴西进口 23kg-27kg/箱",
//		"pMoney": 3543,
//		"pImg": "http://www.emeixian.com/images/201609/thumb_img/2763_thumb_G_1473794677249.jpg\n\n商品编号： 11350 关注\nEng\n冷冻去骨牛肉 牛腩肉 -抄码 巴西进口 23kg-27kg/箱"
//	}, {
//		"pId": 6,
//		"pSpec": "冷冻去骨牛肉 牛腩肉 -抄码 巴西进口 23kg-27kg/箱",
//		"pMoney": 354,
//		"pImg": "http://www.emeixian.com/images/201611/thumb_img/3343_thumb_G_1478472780664.jpg"
//	}]
//}
//for(var i = 0; i < obj.seccess.length; i++) {
//	$(".wrap_show").append($("<div><a><img src=" + obj.seccess[i].pImg + " /></a>	<span>￥" + obj.seccess[i].pMoney + "元</span><p>" + obj.seccess[i].pSpec + "</p><a class='tu'></a></div>"));
//}
var arrId = (location.href).split("?")[1].split("&");
var way = arrId[0].split("=")[1];
var val = decodeURI(arrId[1].split("=")[1]);
console.log(way,val);
// if(way == "name"){
// 	$.ajax({
// 		type:"get",
// 		url:"http://211.159.187.227:8081/lcks-SSM/select/lists.do",
// 		data:{
// 			listname:val
// 		},
// 		dataType:"json",
// 		async:true,
// 		success:function(data){
// 			console.log(data);
// 			$(".wrap_show").html("");
// 			if(data.success){
// 				for(var i = 0; i < data.success.length; i++) {
// 						$(".wrap_show").append($("<div><a href='shangpinxiangqing.html?pId="+data.success[i].pId+"><img src=" + data.success[i].pImg + " /></a>	<span>￥" + data.success[i].pMoney + "元</span><p>" + data.success[i].pName + "</p><a class='tu'></a></div>"));
// 				}
// 			}else{
// 				$(".wrap_show").append("<div class='import'>暂无该商品<div>");
// 			}
			
// 		}
// 	});
// }
if(true){
	$.ajax({
		type:"get",
		url:"http://211.159.187.227:8081/lcks-SSM/clasess/clasess.do",
		data:{
			classId:"14",
			pages: "1",
		},
		dataType:"json",
		async:true,
		success:function(data){
			console.log(data);
			$(".wrap_show").html("");
			for(var i = 0; i < data.success.length; i++) {
					console.log("hhhhhhhhhh"+data.success[i].pId);
					$(".wrap_show").append($("<div><a href='shangpinxiangqing.html?pId="+data.success[i].pId+"><img src=" + data.success[i].pImg + " /></a>	<span>￥" + data.success[i].pMoney + "元</span><p>" + data.success[i].pName + "</p><a class='tu'></a></div>"));
					
			}
		}
	});
}

//分页插件使用
$('.fenye').pagination({
	    pageCount:50,//
	    jump:true,
	    coping:false,
	    prevContent:'上页',
	    nextContent:'下页',
	    current:5,
	    activeCls:"xh",
	    keepShowPN:true,
	    isHide:false,
	    callback:function(api){
	   		api.setPageCount(23);
	   		console.log(api.getCurrent());
		   	$.getJSON('http://211.159.187.227:8081/lcks-SSM/clasess/clasess.do',{classId:"14",pages: api.getCurrent(),},function(data){
		   		$(".wrap_show").html("");
	            console.log(data);
	            for(var i = 0; i < data.success.length; i++) {
					$(".wrap_show").append($("<div><a href='../html/shangpinxiangqing.html?'"+data.success[i].pId+"><img src=" + data.success[i].pImg + " /></a>	<span>￥" + data.success[i].pMoney + "元</span><p>" + data.success[i].pName + "</p><a class='tu'></a></div>"));
				}
	        });
	    }
});

// 解码
//function tohanzi(data){
//  if(data == '') return 'no';
//  data = data.split("%5Cu");
//  var str ='';
//  for(var i=0;i<data.length;i++)
//  {
//      str+=String.fromCharCode(parseInt(data[i],16).toString(10));
//  }
//  return str;
//}