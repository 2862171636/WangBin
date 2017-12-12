package com.lanou.Controller;

import com.lanou.Service.PriceService;
import com.lanou.Service.ProductService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.*;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

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
    @Autowired
    private PriceService priceService;

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
    @RequestMapping("add.do")
    public void newProduct(Product product,Integer[] specs, Integer[] units,HttpServletResponse response){
        Date time = new Date();
        product.setpTime(time);
        productService.addNewProduct(product);
        List<Price> prices = new ArrayList<Price>();
        for (int specId:specs) {
            for (int unitId:units){
                Price price = new Price();
                Spec spec = new Spec();
                spec.setSpec_id(specId);
                Unit unit = new Unit();
                unit.setUnit_id(unitId);
                price.setSpec(spec);
                price.setUnit(unit);
                price.setP_id(product.getpId());
                priceService.addTagsToProduct(price);
                System.out.println(price.getPrice_id());
                prices.add(price);
            }
        }
        FastJson_All.toJson(prices,response);
    }
    @RequestMapping(value = "update.do",method = RequestMethod.GET)
    public void updateProduct(Product product,HttpServletResponse response){
        FastJson_All.toJson(productService.updateProductDetail(product),response);
    }

    @RequestMapping("addTag.do")
    public void addTagsToProduct(Integer[] specs, Integer[] units,int pId,HttpServletResponse response){
        List<Price> prices = new ArrayList<Price>();
        for (int specId:specs) {
            for (int unitId:units){
                Price price = new Price();
                Spec spec = new Spec();
                spec.setSpec_id(specId);
                Unit unit = new Unit();
                unit.setUnit_id(unitId);
                price.setSpec(spec);
                price.setUnit(unit);
                price.setP_id(pId);
                priceService.addTagsToProduct(price);
                System.out.println(price.getPrice_id());
                prices.add(price);
            }
        }
        FastJson_All.toJson(prices,response);
    }
//    @RequestMapping("ggg.do")
//    public void addTagsToProduct(Details details,int pId,HttpServletResponse response){
//        System.out.println(details.getSpec());
//        System.out.println(details.getStock());
//        System.out.println(pId);
//        FastJson_All.toJson("男男女女女",response);
//    }
//    @RequestMapping("HHH.do")
//    public void addTagsToProductDDDDD(@Param("specs")IDS specs, @Param("units") IDS units, int pId, HttpServletResponse response){
//        System.out.println(specs);
//        System.out.println(units);
//        System.out.println(pId);
//        FastJson_All.toJson("男男女女女",response);
//    }

    @RequestMapping("HHH.do")
    public void addTagsToProductDDDDD(Integer[] specs, Integer[] units, int pId, HttpServletResponse response){
        System.out.println(specs[0]);
        System.out.println(specs[1]);
        System.out.println(units[0]);
        System.out.println(units[1]);
        System.out.println(pId);
        FastJson_All.toJson("男男女女女",response);
    }
}


