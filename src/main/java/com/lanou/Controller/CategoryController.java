package com.lanou.Controller;


import com.lanou.Service.CategoryService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
@Controller
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/find2.do")
    public void findCategory2(int cId,HttpServletResponse response) throws IOException {

        //List<Integer> cids = categoryService.selectCidParentIdForZero();

        List<Category> SeccategoryList = categoryService.findChildCategory(cId);
        for(int i = 0;i<SeccategoryList.size();i++){
            List<Category> ThirdCat =  categoryService.findChildCategory(SeccategoryList.get(i).getcId());
            SeccategoryList.get(i).setCategoryList(ThirdCat);
        }
//        for (int i = 0;i<cids.size();i++){
//        Category category = categoryService.selectByPrimaryKey(cids.get(i));
//        categoryList.add(category);
//        }

        FastJson_All.toJson(SeccategoryList,response);
//        String jsonStr = JSON
//        response.setContentType("text/html");
//        response.setCharacterEncoding("utf-8");
//        PrintWriter writer = response.getWriter();
//        writer.println(jsonStr);
//        writer.flush();
    }

    @RequestMapping("/find.do")
    public void findCategory(HttpServletResponse response) {

//        List<Integer> cids = categoryService.selectCidParentIdForZero();
        List<Category> categoryList = categoryService.findChildCategory(0);
//        for (int i = 0;i<categoryList.size();i++){
//        Category category = categoryService.selectByPrimaryKey(categoryList.get(i));
//        categoryList.add(category);
//        }
        FastJson_All.toJson(categoryList,response);
//        String jsonStr = JSON
//        response.setContentType("text/html");
//        response.setCharacterEncoding("utf-8");
//        PrintWriter writer = response.getWriter();
//        writer.println(jsonStr);
//        writer.flush();
    }

}
