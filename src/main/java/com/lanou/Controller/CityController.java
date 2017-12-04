package com.lanou.Controller;

import com.lanou.Service.CityService;

import com.lanou.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
@Controller
@RequestMapping(value="/City")
public class CityController {
    @Autowired
    private CityService cityService;

    @RequestMapping(value = "/selectCity.do",method = RequestMethod.GET)
    @ResponseBody
    public  List<City> findTeachers(Integer cityid){
        System.out.println("date1:"+cityid);
        List<City> city=cityService.selectCity(cityid);
        System.out.println(city);
       return city;
    }

}
