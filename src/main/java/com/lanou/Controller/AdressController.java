package com.lanou.Controller;

import com.lanou.Service.AdressService;
import com.lanou.entity.Adress;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

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
    public String  insertAdress(String aname, String email, Integer city, String detailAdress, String telephone, String phone, String building, String code) {
        Adress adress=new Adress(aname,email,city,detailAdress,telephone,phone,building,code);
        adress.setU_id(1);
        System.out.println(adress);
        adressService.insertAdress(adress);
        return "chenggong";
    }
    @RequestMapping("/selectAdress.do")
    @ResponseBody
    public List<Adress> selectAdress(){
        List<Adress> adresses=adressService.selectAdress(1);
        return  adresses;

    }
    @RequestMapping("/updateAdress.do")
    @ResponseBody
    public String  updateAdress(String aname, String email, Integer city, String detailAdress, String telephone, String phone, String building, String codes,int dId) {
        Adress adress=new Adress(aname,email,city,detailAdress,telephone,phone,building,codes);
        adress.setdId(dId);
        System.out.println(adress);
        adressService.updateAdress(adress);
        return "chenggong";
    }
    @RequestMapping("/deleteAdress.do")
    @ResponseBody
    public String  deleteAdress(Integer dId) {
        System.out.println("竟来了");
        adressService.deleteAdress(dId);
        return  "success";
    }
    @RequestMapping("/selectAdressDid.do")
    @ResponseBody
    public Adress selectAdressDid(int dId){
        Adress adresses= (Adress) adressService.selectAdressDid(dId);
        return  adresses;

    }
}
