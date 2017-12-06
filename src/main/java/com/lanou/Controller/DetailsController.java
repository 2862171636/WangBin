package com.lanou.Controller;

import com.lanou.Service.DetailsService;
import com.lanou.entity.City;
import com.lanou.entity.Details;
import com.lanou.entity.DetailsProduct;
import com.lanou.entity.Product;
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


        return detailsService.selectProduct(pId);
    }

}
