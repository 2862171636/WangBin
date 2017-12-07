package com.lanou.Controller;

import com.lanou.Service.DetailsService;
import com.lanou.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
@Controller
@RequestMapping("/Details")
public class DetailsController {
    @Autowired
    private DetailsService detailsService;
    @RequestMapping(value = "/selectProduct.do")
    @ResponseBody
    public Details findTeachers(Integer pId){
        System.out.println("date1:");
        return detailsService.selectProduct(pId)    ;
    }
//    需要商品的id 规格的id 单位的id
    @RequestMapping(value = "selectPrice")
    @ResponseBody
    public  Double selectPrice(int p_id,int spec_id,int unit_id){
        Price price=new Price(p_id,spec_id,unit_id);
        System.out.println(price);
        System.out.println(detailsService.selectPrice(price));
       return detailsService.selectPrice(price);
    }

}
