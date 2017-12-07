package com.lanou.Controller;

import com.lanou.Service.HomePageService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.HomePage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
@Controller
@RequestMapping("/homePage" )
public class HomePageController {
    @Autowired
    private HomePageService homePageService;
    @RequestMapping("/selectHomePage.do")
    public void selectHomePage(int category_id, HttpServletResponse response){
       FastJson_All.toJson(homePageService.selectHomePage(category_id),response);
    }
}
