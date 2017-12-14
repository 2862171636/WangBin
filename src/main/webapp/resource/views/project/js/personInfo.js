var data_change = document.getElementsByClassName('data_change')[0];
var password_change = document.getElementsByClassName('password_change')[0];
var form1 = document.getElementsByClassName('form1')[0];
var form2 = document.getElementsByClassName('form2')[0];
data_change.onclick = function(){
    form1.style.display = "block";
    form2.style.display = "none";
    data_change.style.color = "#1eaa39";
    data_change.style.borderBottom = "2px solid #1eaa39";
    data_change.style.fontWeight = "bold";
    password_change.style.color = "#999";
    password_change.style.borderBottom = "none";
    password_change.style.fontWeight = "200";
}
password_change.onclick = function(){
    form1.style.display = "none";
    form2.style.display = "block";
    password_change.style.color = "#1eaa39";
    password_change.style.borderBottom = "2px solid #1eaa39";
    password_change.style.fontWeight = "bold";
    data_change.style.color = "#999";
    data_change.style.borderBottom = "none";   
    data_change.style.fontWeight = "200";
}


// 基本资料修改
var username = $(".content_right10 .user_item .user_con").html();
// 获取年月日
var year = 1990;
var month = 01;
var day = 01;
var date1 = "1990/01/01";
$(".content_right10 .year").change(function(){
    year = $(".content_right10 .year").find("option:selected").text();
     console.log($(".content_right10 .year").find("option:selected").text());
     date1 = year + "/" + month + "/" + day;
 })
 $(".content_right10 .month").change(function(){
    month = $(".content_right10 .month").find("option:selected").text();
    date1 = year + "/" + month + "/" + day;
 });
 $(".content_right10 .day").change(function(){
    day = $(".content_right10 .day").find("option:selected").text();
    date1 = year + "/" + month + "/" + day;
 });
// 点击省份，发送ajax
$(".content_right10 #province").click(function(){
    console.log(1);
    $.ajax({
        type:"get",
        url:"http://10.80.16.104:8080/City/selectCity.do?cityid=0",
        dataType:"json",
        data:{},
        async:true,
        success:function(data){
            console.log(1);
            for(var i = 0; i < data.length ;i++){
                $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right10 #province");
            }
            console.log(data);
        }
    })
});
// 选择省份，发送ajax请求市的信息
$(".content_right10 #province").change(function(){
    var province = $(".content_right10 #province").find("option:selected").text();
    var province_id = $(".content_right10 #province").find("option:selected").val();
    console.log(province,province_id)
    if(province != "请选择省"){
        $.ajax({
            type:"get",
            url:"http://10.80.16.104:8080/City/selectCity.do",
            dataType:"json",
            data:{cityid:province_id},
            async:true,
            success:function(data){
                console.log(data);
                $("#city").html("<option value=''>请选择市</option>");
                for(i in data){
                    $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right10 #city");
                }
            }
        })
    }
})
// 选择市，发送ajax请求县的信息
$(".content_right10 #city").change(function(){
    var city = $(".content_right10 #city").find("option:selected").text();
    var city_id = $(".content_right10 #city").find("option:selected").val();
    console.log(city,city_id);
    if(city != "请选择县"){
        $.ajax({
            type:"get",
            url:"http://10.80.16.104:8080/City/selectCity.do",
            dataType:"json",
            data:{cityid:city_id},
            async:true,
            success:function(data){
                $("#xian").html("<option value=''>请选择县</option>");
                console.log(data);
                for(i in data){
                    $("<option value="+data[i].cityid+">"+data[i].cityname+"</option>").appendTo(".content_right10 #xian");
                }
            }
        })
    }
})
// 获取县的id
var road_id;
$(".content_right10 #xian").change(function(){
    road_id = $(".content_right10 #xian").find("option:selected").val();
    console.log(road_id);
})
// 确认修改
$('.content_right10 .form1 .sub').click(function(){
    // 性别的值
    var sex = $(".content_right10 .user_sex input:checked").val();
    // 电子邮件
    var email = $(".content_right10 .email input").val();
    // 真实姓名
    var name = $(".content_right10 .name input").val();
    // 详细地址
    var address = $(".content_right10 .address input").val();
    console.log(username,sex,email,name,date1,address,road_id);
    $.ajax({
        type:"get",
        url:"http://10.80.16.104:8080/user/update.do",
        dataType:"json",
        data:{
                gener:sex,
                userName:username,
                birth:date1,
                name:name,
                detailed:address,
                email:email,
                road:road_id    
        },
        async:true,
        success:function(data){
          console.log(data);  
        }
    });
});

// 密码修改
//  新密码失焦
$(".content_right10 .form2 .password2 input").blur(function(){
    var passNew = $(".content_right10 .password2 input").val();
    if(!/^.{6,20}$/.test(passNew)){
        $("<div class='kuang1'>密码长度不能小于6位数</div>").appendTo($(".content_right10 .password2"));           
        $(".content_right10 .form2 .sub").attr("disabled", true);
    }else{
        $(".content_right10 .form2 .sub").attr("disabled", false);
        $(".content_right10 .kuang1").remove();
    }
})
// 确认密码失jiao
$(".content_right10 .form2 .password3 input").blur(function(){
    var passNew = $(".content_right10 .password2 input").val();
    var passagin = $(".content_right10 .password3 input").val();
    if(passNew != passagin){
        $("<div class='kuang2'>两次密码输入不一致</div>").appendTo($(".content_right10 .password3"));         
        $(".content_right10 .form2 .sub").attr("disabled", true);
    }else if(!/^.{6,20}$/.test(passNew)){
        $(".content_right10 .form2 .sub").attr("disabled", true);
    }else{
        $(".content_right10 .form2 .sub").attr("disabled", false);
        $(".content_right10 .kuang2").remove();  
    }   
})
$(".content_right10 .form2 .sub").click(function(){
    var pass = $(".content_right10 .password1 input").val();
    var passNew = $(".content_right10 .password2 input").val();
    var passagin = $(".content_right10 .password3 input").val();
    console.log(pass,passNew,username)
    $.ajax({
            type:"get",
            url:"http://10.80.16.104:8080/user/updatePassword.do",
            data:{
                userName:username,
                password:pass,
                newPass:passNew,    
            },
            dataType:"json",
            async:true,
            success:function(data){
                console.log(data);
            }
        });
})