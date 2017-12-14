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
// --------------------------收货人信息判断--------------------------
//电子邮件地址
function checkEmail(){ 
     var sEmail = $(".content_right11 .input_container .email").val();
     if(sEmail==""){ 
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .input_container .email_span").html("");
        $("<span style='color:red;'>*请填写电子邮件地址</span>").appendTo($(".content_right11 .input_container .email_span")); 
     } else if(!(/\w@\w*\.\w/.test(sEmail))){
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .input_container .email_span").html("");
        $("<span style='color:red;'>*请填写正确的电子邮件地址</span>").appendTo($(".content_right11 .input_container .email_span"));   
     } else{
        $(".content_right11 .input_container .email_span").html("");
     }
} 
$(".content_right11 .input_container .email").blur(function(){
    checkEmail();
});
//电话号码的判断
function checkTel(){ 
     var sTelephone = $(".content_right11 .container .telephone").val();
     if(sTelephone==""){ 
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container .tel_span").html("");
        $("<span style='color:red;'>*请填写电话号码</span>").appendTo($(".content_right11 .container .tel_span")); 
     } else if(!(/(\d{4}-)?\d{6,8}/.test(sTelephone))){
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container .tel_span").html("");
        $("<span style='color:red;'>*请填写正确的电话号码</span>").appendTo($(".content_right11 .container .tel_span"));   
     } else{
        $(".content_right11 .container .tel_span").html("");
     }
} 
$(".content_right11 .container .telephone").blur(function(){
    checkTel();
});
// 手机号码的判断
function checkMobile(){ 
     var sMobile = $(".content_right11 .phone").val();
     if(sMobile==""){ 
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container .mp .mp_span").html("");
        $("<span style='color:red;'>*请填写手机号码</span>").appendTo($(".content_right11 .container .mp .mp_span")); 
     } else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(sMobile))){
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container .mp .mp_span").html("");
        $("<span style='color:red;'>*请填写正确的手机号码</span>").appendTo($(".content_right11 .container .mp .mp_span"));   
     } else{
        $(".content_right11 .container .mp .mp_span").html("");
     }
} 
$(".content_right11 .phone").blur(function(){
    checkMobile();
});
// 邮政编码的判断 
function checkCode(){ 
     var sCode = $(".content_right11 .container_yz .code").val();
     if(sCode==""){ 
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container_yz .code_span").html("");
        $("<span style='color:red;'>*请填写邮政编码</span>").appendTo($(".content_right11 .container_yz .code_span")); 
     } else if(!(/^[1-9][0-9]{5}$/.test(sCode))){
        //用户重复失焦下清空上一次判断提示
        $(".content_right11 .container_yz .code_span").html("");
        $("<span style='color:red;'>*请填写正确的邮政编码</span>").appendTo($(".content_right11 .container_yz .code_span"));   
     } else{
        $(".content_right11 .container_yz .code_span").html("");
     }
} 
$(".content_right11 .code").blur(function(){
    checkCode();
});
//--------------------------------------------------------------------
 // 保存收货地址
    var count = 0;
    var TF = true;
    $('.content_right11 .sub').click(function(){
        if(TF&&$(".content_right11 .info_span").html()==""){
           saveAddress(); 
           $(".content_right11 .address_one input").val("");
           $(".content_right11 textarea").val("");
           $(".content_right11 .sub").val("保存收货地址");
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
        
        $.ajax({
            type:"get",
            url:"http://211.159.187.227:8080/adress/adress.do",
            dataType:"json",
            data:{
                    aname:"lck",
                    email:"123",
                    detailAdress:"123",
                    phone:"13964887945",
                    telephone:"123456",
                    codes:"c123" 
            },
            async:true,
            success:function(data){
              console.log(data);  
            }
        });
            //创建收货地址个数
            $(".content_right11 .number").text(count);
            //创建收货地址个数限制
            if(count==20){
                TF=false;
            }
            // $(".content_right11 input").val("");
            // $(".content_right11 textarea").val("");

        };
    // 修改按钮
    var num;
    function changeBtn(_this){
        $(".content_right11 .change").css("display","block");
        num=_this.dataset.id;
        // $(this).parents('tr').remove();
    }
    $(".content_right11 .cha").click(function(){
        $(".content_right11 .change").css("display","none");

    });
    // 删除按钮
    function cutBtn(a){
        var isCut = confirm("你确定要删除该收货地址吗？");
        if(isCut==true){
            $(a).parents(".tableTr").remove();
            count--;
            $(".content_right11 .number").text(count);
            
        }  
    }

    // 修改收货地址
    $(".content_right11 .sub2").click(function(){       
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
        $(".content_right11 .change").css("display","none");
    });
    //----------------选项卡--------选项卡-----------------------------
    var content_right = document.querySelectorAll('.content_right');
    content_right[0].style.display = "block";
    var lastContentRight = content_right[0];
    $('.content_left li a').each(function(index,ele){
        $(this).click(function(){  
            console.log(index);
            lastContentRight.style.display = "none";
            content_right[index].style.display = "block";
            lastContentRight = content_right[index];
        })
    })

























