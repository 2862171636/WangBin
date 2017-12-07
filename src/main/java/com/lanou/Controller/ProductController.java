package com.lanou.Controller;

import com.lanou.Service.ProductService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/4.
 */


@Controller
@RequestMapping("product")
public class ProductController {
    @Autowired
    private HttpServletRequest request;

    @Autowired
    private ProductService productService;

    @RequestMapping("product.do")
    public void prodcut(int categoryId, HttpServletResponse response) {

        Map maps = new HashMap();
        response.setContentType("text/html;charset=UTF-8");
        List<Product> products = productService.findsProducts(categoryId);

        if (products.size() == 0) {


            maps.put("error",products);

        } else {


            maps.put("success",products);

        }

        FastJson_All.toJson(maps,response);

    }


}


