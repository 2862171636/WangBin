package com.lanou.Controller;

import com.lanou.Service.AdressService;
import com.lanou.entity.Adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lanou on 2017/12/5.
 */
@Controller
@RequestMapping("/adress" )
public class AdressController {
    @Autowired
    private AdressService adressService;
    @RequestMapping("/adress.do")
    @ResponseBody
    public String  insertAdress(String name, String email, Integer city, String detailAdress, String telephone, String phone, String building, String code) {
        Adress adress=new Adress(name,email,city,detailAdress,telephone,phone,building,code);
        adress.setuId(1);
        System.out.println(adress);
        adressService.insertAdress(adress);
        return "chenggong";
    }
}
