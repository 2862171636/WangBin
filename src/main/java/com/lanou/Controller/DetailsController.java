package com.lanou.Controller;

import com.lanou.Service.DetailsService;
import com.lanou.Service.PriceService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
@Controller
@RequestMapping("/Details")
public class DetailsController {
    @Autowired
    private DetailsService detailsService;
    @Autowired
    private PriceService priceService;
    @RequestMapping(value = "/selectProduct.do")
    public void findTeachers(Integer pId, HttpServletResponse response){
        System.out.println("date1:");
        FastJson_All.toJson(detailsService.selectProduct(pId),response);
    }
//    需要商品的id 规格的id 单位的id
    @RequestMapping(value = "/selectPrice")
    public void selectPrice(int p_id,int spec_id,int unit_id,HttpServletResponse response){
        Price price = new Price(p_id,spec_id,unit_id);
        System.out.println(price);
        price = priceService.findPriceLimited(price);
        System.out.println(price);
        FastJson_All.toJson(price,response);
    }

}
