package com.lanou.Controller;

import com.lanou.Service.UserService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.User;
import com.sun.org.apache.regexp.internal.RE;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/2.
 */
@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    //登录验证用的
    @RequestMapping(value = "/login.do",method = RequestMethod.GET)
    public void confirmUser(User user,HttpServletResponse response,HttpServletRequest request){
        System.out.println(user);
        String result = null;
        User loginUser = userService.confirmUser(user.getUserName());
        request.getSession().setAttribute("user1",loginUser);
       if(loginUser != null && user.getPassword().equals(loginUser.getPassword())){
           if (user.getUserType() == 1){
               result = "admin";
           }else{
               result = "user";
           }
       }else {
           result = "error";
       }

       Map<String,Object> results = new HashMap<String, Object>();
       results.put("msg",result);
       results.put("user",loginUser);

    }

    //注册用户名失焦
    @RequestMapping(value = "/focus.do",method = RequestMethod.GET)
    public void focus(User user,HttpServletResponse response) {
        boolean result ;
        User regUser = userService.confirmUser(user.getUserName());
        if (regUser == null) {
            result = true;
        } else {
            result = false;
        }
        FastJson_All.toJson(result,response);
    }

    //注册验证
    @RequestMapping(value = "/reg.do",method = RequestMethod.GET)
    public  void reg(User user,HttpServletResponse response) throws IOException {
        System.out.println("aa"+ user);
        User regUser = userService.confirmUser(user.getUserName());

        String result = null;


            if(regUser == null){
                userService.addUser(user);
                result = "success";
            }else{
                result = "error";
            }
        FastJson_All.toJson(result,response);

    }


    @InitBinder("user")
    public void initUser(WebDataBinder webDataBinder){
        webDataBinder.setFieldDefaultPrefix("user.");
    }

    //用户信息的修改
    @RequestMapping(value = "/update.do")
    public void updateUser(HttpServletResponse response,Integer gener, String email, String name, String detailed, Integer road, String userName, @DateTimeFormat(pattern="yyyy/MM/dd") Date birth) throws IOException {
        System.out.println("aa" + gener);
        User user = new User();
        user.setGener(gener);
        user.setUserName(userName);
        user.setBirth(birth);
        user.setDetailed(detailed);
        user.setRoad(road);
        user.setEmail(email);
        user.setName(name);
        userService.updateUser(user);
        FastJson_All.toJson("success",response);
    }

    // 密码的修改
    //用户信息的修改
    @RequestMapping(value = "/updatePassword.do")
    public void updatePassword(String password,String userName,String newPass,HttpServletResponse response) throws IOException {
        System.out.println("aa" );
        User user = new User();
        user.setPassword(newPass);
        user.setUserName(userName);
        if (password.equals(userService.confirmUser(userName).getPassword())){
            userService.updatePassword(user);
            FastJson_All.toJson("success", response);
        }else {
            FastJson_All.toJson("密码错误", response);
        }
    }

    //上传头像
    @RequestMapping("/upload.do")
    public void updateHeadImg(@RequestParam("myFile") MultipartFile files, HttpServletRequest request, HttpServletResponse response){
        System.out.println("图片："+files);
        User user = (User) request.getSession().getAttribute("user1");
        System.out.println("用户"+user);
        boolean results = false;
//        String headImg = "/Users/lanou/Desktop/mvcImg/Lbt/"+user.getuId()+".jpg";
        String headImg = "/Users/lanou/Desktop/mvcImg/Lbt/wym.jpg";
        File file = new File(headImg);
        try {
            FileUtils.copyInputStreamToFile(files.getInputStream(),file);
            String headImgUrl = "http://10.80.13.111:8080/resource/views/headImg/"+user.getuId()+".jpg";
        user.setHeadImgUrl(headImgUrl);
        boolean result = userService.updateHeadImgUrl(user);
        if (result){
            results = true;
            User user1 = userService.findUserByuId(user.getuId());
            request.getSession().setAttribute("user1",user1);
        }
        FastJson_All.toJson(results,response);
        } catch (IOException e) {
            e.printStackTrace();
        }


    }

}
