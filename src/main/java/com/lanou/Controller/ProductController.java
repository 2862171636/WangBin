package com.lanou.Controller;

import com.lanou.Service.ProductService;
import com.lanou.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
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
    @ResponseBody
    public Map<String,Object> prodcut(int categoryId) {

        Map maps = new HashMap();

        List<Product> products = productService.findsProducts(categoryId);

        if (products.size() == 0) {


            maps.put("error",products);

        } else {


            maps.put("success",products);

        }

        return maps;

    }


}


