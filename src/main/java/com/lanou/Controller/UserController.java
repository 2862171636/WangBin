package com.lanou.Controller;

import com.lanou.Service.UserService;
import com.lanou.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

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
    @ResponseBody
    public String confirmUser(User user){
        System.out.println(user);
        String result = null;
        User loginUser = userService.confirmUser(user.getUserName());
       if(loginUser != null && user.getPassword().equals(loginUser.getPassword())){
           System.out.println("chengg");
           result = "success";
       }else {
           result = "error";
       }
       return  result;
    }

    //注册用户名失焦
    @RequestMapping(value = "/focus.do",method = RequestMethod.GET)
    @ResponseBody
    public String focus(User user) {
        String result = null;
        User regUser = userService.confirmUser(user.getUserName());
        if (regUser == null) {
            result = "success";
        } else {
            return "error";
        }
        return result;
    }

    //注册验证
    @RequestMapping(value = "/reg.do",method = RequestMethod.GET)
    @ResponseBody
    public  String reg(User user) throws IOException {
        System.out.println("aa"+ user);
        User regUser = userService.confirmUser(user.getUserName());

        String result = null;


            if(regUser == null){
                userService.addUser(user);
                result = "success";
            }else{
                result = "error";
            }
        return  result;

    }


    @InitBinder("user")
    public void initUser(WebDataBinder webDataBinder){
        webDataBinder.setFieldDefaultPrefix("user.");
    }

    //用户信息的修改
    @RequestMapping(value = "/update.do")
    @ResponseBody
    public  String updateUser(Integer gener, String email, String name, String detailed, Integer road, String userName, @DateTimeFormat(pattern="yyyy/MM/dd") Date birth) throws IOException {
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
        return "success";
    }

    // 密码的修改
    //用户信息的修改
    @RequestMapping(value = "/updatePassword.do")
    @ResponseBody
    public  String updatePassword(String password,String userName) throws IOException {
        System.out.println("aa" );
        User user = new User();
        user.setPassword(password);
        user.setUserName(userName);
        userService.updatePassword(user);
        return "success";
    }

}
