$(".nav .account").mouseover(function(){
    $(".dropBox").css("display","block");
});
$(".dropBox").mouseover(function(){
    $(".dropBox").css("display","block");
});
$(".dropBox").mouseout(function(){
    $(".dropBox").css("display","none");
});
//-----------地址管理地址管理地址管理地址管理地址管理地址管理地址管理--------------------------
// var change = document.getElementsByClassName('change')[0];
// var addressInfo = document.getElementsByClassName('addressInfo')[0];

// 新增收货地址
// 点击省份，发送ajax
$(".content_right11 .province").one("click",function(){
    console.log(1);
    $.ajax({
        type:"get",
        url:"http://211.159.187.227:8080/City/selectCity.do?cityid=0",
        dataType:"json",
        data:{},
        async:true,
        success:function(data){
            console.log(1);
            for(var i = 0; i < data.length ;i++){
                $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right11 .province");
            }
            console.log(data);
        }
    })
});
// 选择省份，发送ajax请求市的信息
$(".content_right11 .province").change(function(){
    var province = $(".content_right11 .province").find("option:selected").text();
    var province_id = $(".content_right11 .province").find("option:selected").val();
    console.log(province,province_id)
    if(province != "请选择省"){
        $.ajax({
            type:"get",
            url:"http://211.159.187.227:8080/City/selectCity.do",
            dataType:"json",
            data:{cityid:province_id},
            async:true,
            success:function(data){
                console.log(data);
                $("#city").html("<option value=''>请选择市</option>");
                for(i in data){
                    $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right11 .city");
                }
            }
        })
    }
})
// 选择市，发送ajax请求县的信息
$(".content_right11 .city").change(function(){
    var city = $(".content_right11 .city").find("option:selected").text();
    var city_id = $(".content_right11 .city").find("option:selected").val();
    console.log(city,city_id);
    if(city != "请选择县"){
        $.ajax({
            type:"get",
            url:"http://211.159.187.227:8080/City/selectCity.do",
            dataType:"json",
            data:{cityid:city_id},
            async:true,
            success:function(data){
                $("#xian").html("<option value=''>请选择县</option>");
                console.log(data);
                for(i in data){
                    $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right11 .xian");
                }
            }
        })
    }
})
// 获取县的id
var road_id;
$(".content_right11 .xian").change(function(){
    road_id = $(".content_right11 .xian").find("option:selected").val();
    console.log(road_id);
})
// 确认修改
var count = 0;
var TF = true;
//错误范例
// function SA(){
//     $('.sub').click(function(){
//         count++;
//             $(".number").text(count);
//             if(count==3){
//                 TF=false;
//             }
//     })
// }
// if(TF){
//     SA();
// } else{
//     console.log(1);
// }

//收货人姓名合法判断
// $(".content_right11 .username").blur(function(){
//     if($(".content_right11 .username").val()==null||){

//     }
// });
 // 保存收货地址
    $('.content_right11 .sub').click(function(){
        if(TF){
           saveAddress(); 
       }else{
            console.log(1);
       }
        
    });
       function saveAddress(){
        count++;
        //收货人姓名值
        var username = $(".content_right11 .username").val();
        // 电话的值
        var telephone = $(".content_right11 .telephone").val();
        //手机的值
        var phone = $(".content_right11 .phone").val();
        // 电子邮件
        var email = $(".content_right11 .email").val();
        // 邮政编码
        var code = $(".content_right11 .code").val();
        // 详细地址
        var address = $(".content_right11 .detailedAddress").val();
        //标志建筑
        var building = $(".content_right11 .building").val();
        // 保存收货地址判断
        if(username==""||telephone==""||phone==""||email==""||code==""||address==""||building==""){
            alert("请填全收货人信息");
            return false;
        }
        var addressInfo = document.createElement("tr");
        addressInfo.className = "tableTr";
        $(".content_right11 .addressTable").append(addressInfo);
        for(var i=0;i<6;i++){
            var td=document.createElement("td");
            $(".content_right11 .tableTr:last-child").append(td);
        }
        $('.content_right11 .tableTr:last-child td:nth-child(1)').text(username);
        $('.content_right11 .tableTr:last-child td:nth-child(2)').text(address);
        $('.content_right11 .tableTr:last-child td:nth-child(3)').text(telephone);
        $('.content_right11 .tableTr:last-child td:nth-child(4)').text(phone);
        $('.content_right11 .tableTr:last-child td:nth-child(5)').text(email);
        $('.content_right11 .tableTr:last-child td:nth-child(6)').html("<a href='###' data-id='" + count + "'class='xiugai' onclick='changeBtn(this)'>修改</a>&nbsp;&nbsp;&nbsp;<a href='###' class='cut' onclick='cutBtn(this)'>删除</a>");

        //<input type='button' value='删除' class='cut' onclick='cutBtn(this)'
        // console.log(111111); ///////////data-id=" + count + "//////
        // console.log(username,sex,email,name,date1,address,road_id);
        $.ajax({
            type:"get",
            url:"http://211.159.187.227:8080/adress/adress.do",
            dataType:"json",
            data:{
                    aname:username,
                    email:email,
                    detailAdress:detailedAddress,
                    phone:phone,
                    telephone:telephone,
                    building:building,
                    codes:code 
            },
            async:true,
            success:function(data){
              console.log(data);  
            }
        });
        // var xiugai = document.getElementsByClassName('xiugai')[0];
        // var cut = document.getElementsByClassName('cut')[0];
        // var cha = document.getElementsByClassName('cha')[0];
        // xiugai.onclick = function(){
        //     change.style.display = "block";
        // }
        // cut.onclick = function(){
        //     var tf = confirm("你确定要删除该收货地址吗？");
        //     if(tf==true){
        //         addressInfo.style.display = "none";
        //     } 
        // }
        // cha.onclick = function(){
        //     change.style.display = "none";
        // }

        // $('.cut').each(function(index,obj){
        //     $(this).click(function(){
        //         $('.tableTr').remove();
        //     });
        // });
        // $('.cha').click(function(){
        //     $('.change').remove();
        // });
            
            $(".content_right11 .number").text(count);
            if(count==20){
                TF=false;
            }
        };
    // if(TF==true){
    //     saveAddress();
    // } else{
    //     console.log(1);
    // }
    var num;
    function changeBtn(_this){
        $(".content_right11 .change").css("display","block");
        num=_this.dataset.id;
        // $(this).parents('tr').remove();
    }
    $(".content_right11 .cha").click(function(){
        $(".content_right11 .change").css("display","none");

    });
    function cutBtn(a){
        // console.log(1);
        // console.log(a);
        // var confirm = confirm("你确定要删除该收货地址吗？");
        var isCut = confirm("你确定要删除该收货地址吗？");
        if(isCut==true){
            $(a).parents(".tableTr").remove();
            count--;
            $(".content_right11 .number").text(count);
            
        }  
    }


    // 修改收货地址
    $(".content_right11 .sub2").click(function(){
    //     add(num);
    // })
        
    // function add(num){
        //收货人姓名值
        var changeUsername = $(".content_right11 .changeUsername").val();
        // 电话的值
        var changeTelephone = $(".content_right11 .changeTelephone").val();
        //手机的值
        var changePhone = $(".content_right11 .changePhone").val();
        // 电子邮件
        var changeEmail = $(".content_right11 .changeEmail").val();
        // 邮政编码
        var changeCode = $(".content_right11 .changeCode").val();
        // 详细地址
        var changeAddress = $(".content_right11 .changeAddress").val();
        //标志建筑
        var changeBuilding = $(".content_right11 .changeBuilding").val();
        //修改收货地址判断
        if(changeUsername==""||changeTelephone==""||changePhone==""||changeEmail==""||changeCode==""||changeAddress==""||changeBuilding==""){
            alert("请填全收货地址");
            return false;
        }
        $("a[data-id='" + num + "']").parents(".tableTr").children("td:nth-child(1)").text(changeUsername);
        $("a[data-id='" + num + "']").parents(".tableTr").children("td:nth-child(2)").text(changeAddress);
        $("a[data-id='" + num + "']").parents(".tableTr").children("td:nth-child(3)").text(changeTelephone);
        $("a[data-id='" + num + "']").parents(".tableTr").children("td:nth-child(4)").text(changePhone);
        $("a[data-id='" + num + "']").parents(".tableTr").children("td:nth-child(5)").text(changeEmail);
        // console.log(this);
        console.log($("a[data-id='" + num + "']"));
        $.ajax({
            type:"get",
            url:"http://211.159.187.227:8080/adress/selectAdressDid.do?dId=1",
            dataType:"json",
            data:{
                    name:changeUsername,
                    email:changeEmail,
                    detailAdress:changeAddress,
                    phone:changePhone,
                    telephone:changeTelephone,
                    building:changeBuilding,
                    codes:changeCode 
            },
            async:true,
            success:function(data){
              console.log(data);  
            }
        });
        // $(".tableTr").eq(num).children("td:nth-child(1)").text(changeUsername);
        // console.log(1);     .parents(".tableTr").children("td:nth-child(1)").text(changeUsername)
        $(".content_right11 .change").css("display","none");
    });
    //----------------选项卡选项卡选项卡选项卡选项卡选项卡-----------------------------
    var content_right = document.querySelectorAll('.content_right');
    content_right[0].style.display = "block";
    var lastContentRight = content_right[0];
    $('.content_left li a').each(function(index,ele){
        $(this).click(function(){  
            console.log(index);
            lastContentRight.style.display = "none";
            content_right[index].style.display = "block";
            lastContentRight = content_right[index];
            // $(".content_right").each(function(){
            //     $(this).css("display","block");
            //     console.log(this);
            // })

        })
    })

// -----------点击密码修改---------
$(".header_info_right ul .li2").click(function(){
	change(9);
})
function change(i){
	$(".content_right").css({display:"none"});
	 content_right[i].style.display = "block";
	 $('.content_left li a').css({color:"black"});
     content_left[i].style.color = "#1a9733";
	 
}
// -------------账户设置-----------------
$(".dropBox ul li").eq(1).click(function(){
	change(9);
})
$(".dropBox ul li").eq(4).click(function(){
	change(10);
})

// ------------订单页--------------------
// 订单页面
//if(content_right[0].style.display == "block"){
$.ajax({
	type:"get",
	url:"http://211.159.187.227:8080/order/user.do?uId=1",
//	dataType:"json",
	async:true,
	success:function(data){
		var json1 = JSON.parse(data);
		console.log(json);
		$(".dingdan_top ul").append(dingdanhao(json1)); 
		$(".orderContent").html($(".orderContent").html()+dingdanmore(json1));
	}
});
// 商品订单详情
function dingdanmore(data){
	var divs = "";
	for(var i = 0 ; i < data[0].shoppingCars.length ; i++){
		divs += `   <div class="mxzy">
                        <ul class="clearfix">
                            <li>美鲜自营</li>
                            <li>${data[0].shoppingCars[i].stock.stockName}</li>
                            <li>子订单号 : ${data[0].orderId}</li>
                        </ul>
                    </div>
                    <div class="buyGoods">
                        <ul>
                            <li>
                                <ul class="clearfix">
                                    <li><img src="../image/img_chen/foodPic.jpg"></li>
                                    <li><p>${data[0].shoppingCars[i].price.detailsProduct.pName} x<span>${data[0].shoppingCars[i].num}</span></p></li>
                                    <li>654151</li>
                                    <li>${data[0].shoppingCars[i].price.detailsProduct.pMoney}</li>
                                    <li><span>未付款</span><span class="dayin block">打印凭证</span></li>
                                    <li><p>查看详情</p><p>申请售后</p></li>
                                </ul>
                            </li>
                        </ul>
                    </div>`
	}
	return divs;
	
}
// 总订单号
function dingdanhao(data){
	var time = timeconvert(data[0].orderTime);
	var divs = ` <ul class="clearfix">
                            <li>总订单号：${data[0].orderId}</li>
                            <li>再来一单</li>
                            <li>${time}</li>
                            <li class="allmoney">￥166.90元</li>
                            <li>点我扫码</li>
                            <li>
                                <select>
                                    <option value="">更换支付方式</option>
                                </select>
                            </li>
                            <li><input type="button" name="" value="确定"></li>
                            <li>取消订单</li>
                        </ul>`
	return divs;
}
//}
// 时间戳转化年月日
function timeconvert(timenum){
	var timestamp=new Date(timenum);
	var y=timestamp.getFullYear();
	var m=timestamp.getMonth()+1;
	var d=timestamp.getDate();
	var h=timestamp.getHours();
	var min=timestamp.getMinutes();
	var s=timestamp.getSeconds();
	return y+"-"+m+"-"+d+" "+h+":"+min+":"+s;
}
var json = [
    {
        "address": {
            "building": "6",
            "city": 12,
            "code": "123",
            "dId": 1,
            "deleteId": 0,
            "detailAdress": "上海市 松江区 泗泾镇 九干路 丽德创业园",
            "email": "123",
            "name": "fairy",
            "phone": "13964887945",
            "telephone": "18815252135",
            "u_id": 1
        },
        "orderId": 1,
        "orderTime": 1512576000000,
        "shoppingCars": [
            {
                "num": 3,
                "price": {
                    "detailsProduct": {
                        "pDiscount": 0,
                        "pId": 37,
                        "pInfo": "发喜纯牛奶产品原料来自纯天然优质无污染的牧场，100%源自新鲜优质牛奶，每一滴都散发鲜奶清香，原料品质有保证。本品奶香味道浓郁，细腻爽口，健康营养，严格按照纯牛奶制品统一标准进行检验，超高温灭菌，安全又可靠。常温包装，保存食用更方便。整箱购买价格更实惠！",
                        "pMoney": "888",
                        "pName": "发喜 纯牛奶 盒装 1L/盒 12盒/箱",
                        "pNumber": "06835",
                        "pPoint": 0,
                        "pSpec": "1L/盒，12盒/箱",
                        "pStock": 302,
                        "pTime": 1512403200000
                    },
                    "price_id": 1,
                    "price_name": 5.5,
                    "spec": {
                        "spec_id": 1,
                        "spec_name": "纯牛奶"
                    },
                    "unit": {
                        "unit_id": 1,
                        "unit_name": "单盒"
                    }
                },
                "shoppingCarId": 1,
                "stock": {
                    "stockId": 5,
                    "stockName": "南京",
                    "stockNum": 666
                },
                "uId": 1
            },
            {
                "num": 1,
                "price": {
                    "detailsProduct": {
                        "pDiscount": 0,
                        "pId": 37,
                        "pInfo": "发喜纯牛奶产品原料来自纯天然优质无污染的牧场，100%源自新鲜优质牛奶，每一滴都散发鲜奶清香，原料品质有保证。本品奶香味道浓郁，细腻爽口，健康营养，严格按照纯牛奶制品统一标准进行检验，超高温灭菌，安全又可靠。常温包装，保存食用更方便。整箱购买价格更实惠！",
                        "pMoney": "888",
                        "pName": "发喜 纯牛奶 盒装 1L/盒 12盒/箱",
                        "pNumber": "06835",
                        "pPoint": 0,
                        "pSpec": "1L/盒，12盒/箱",
                        "pStock": 302,
                        "pTime": 1512403200000
                    },
                    "price_id": 3,
                    "price_name": 105,
                    "spec": {
                        "spec_id": 2,
                        "spec_name": "餐饮专用纯牛奶"
                    },
                    "unit": {
                        "unit_id": 1,
                        "unit_name": "单盒"
                    }
                },
                "shoppingCarId": 2,
                "stock": {
                    "stockId": 2,
                    "stockName": "济南",
                    "stockNum": 1008
                },
                "uId": 1
            }
        ],
        "state": 1
    }
]
//console.log(json);

















