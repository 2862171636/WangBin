package com.lanou.Controller;

import com.alibaba.druid.support.json.JSONUtils;
import com.lanou.Service.AdressService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/5.
 */
@Controller
@RequestMapping("/adress" )
public class AdressController {
    @Autowired
    private AdressService adressService;
    @RequestMapping("/adress.do")
    public void insertAdress(HttpServletResponse response,String aname, String email, Integer city, String detailAdress, String telephone, String phone, String building, String code) {
        Adress adress=new Adress(aname,email,city,detailAdress,telephone,phone,building,code);
        adress.setU_id(1);
        System.out.println(adress);
        adressService.insertAdress(adress);
        FastJson_All.toJson("成功",response);
    }
    @RequestMapping("/selectAdress.do")
    public void selectAdress(int uId,HttpServletResponse response){
        List<Adress> adresses=adressService.selectAdress(1);
        FastJson_All.toJson(adresses,response);
    }
    @RequestMapping("/updateAdress.do")
    public void updateAdress(String aname, String email, Integer city, String detailAdress, String telephone, String phone, String building, String codes,int dId,HttpServletResponse response) {
        Adress adress=new Adress(aname,email,city,detailAdress,telephone,phone,building,codes);
        adress.setdId(dId);
        System.out.println(adress);
        adressService.updateAdress(adress);
        FastJson_All.toJson("成功",response);
    }
    @RequestMapping("/deleteAdress.do")
    public void deleteAdress(HttpServletResponse response,Integer dId) {
        System.out.println("竟来了");
        adressService.deleteAdress(dId);
        FastJson_All.toJson("成功",response);
    }
    @RequestMapping("/selectAdressDid.do")
    public void selectAdressDid(int dId,HttpServletResponse response){
        Adress adresses= (Adress) adressService.selectAdressDid(dId);
        FastJson_All.toJson(adresses,response);
    }
}
