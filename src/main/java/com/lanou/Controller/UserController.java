package com.lanou.Controller;

import com.lanou.Service.UserService;
import com.lanou.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

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
        String result = null;
        User loginUser = userService.confirmUser(user.getUserName());
       if(loginUser != null && user.getPassword().equals(loginUser.getPassword())){
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
    public  String reg(User user, String password1) throws IOException {
        System.out.println("aa");
        User regUser = userService.confirmUser(user.getUserName());

        String result = null;
        System.out.println("yonghuming:"+user.getUserName()+"mima:"+user.getPassword()+",querenmima:"+password1);
        if(password1.equals(user.getPassword())){
            if(regUser == null){
                userService.addUser(user);
                result = "success";
            }else{

             //   String jsonStr = "{\"errormsg\":\"用户名存在\"}";
              //  System.out.println(jsonStr);
//                response.getWriter().println(jsonStr);;//得到写入流
//                response.getWriter().flush();//再调用一下flush
                result = "error";
            }
        }else{
            System.out.println("密码不一致");
            result = "error";
        }
        return  result;

    }

    @InitBinder("user")
    public void initUser(WebDataBinder webDataBinder){
        webDataBinder.setFieldDefaultPrefix("user.");
    }

}
