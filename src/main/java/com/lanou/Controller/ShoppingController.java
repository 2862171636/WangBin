package com.lanou.Controller;

import com.lanou.Service.ShoppingCarService;
import com.lanou.Service.TeacherService;
import com.lanou.entity.ShoppingCar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by lanou on 2017/12/1.
 */
@Controller
@RequestMapping("/shopping")
public class ShoppingController {

    @Autowired
    private ShoppingCarService shoppingCarService;

    @RequestMapping("/add.do")
    public String addToShoppingCar(ShoppingCar shoppingCar){
        if (shoppingCarService.addToShoppingCar(shoppingCar)){
            return "success";
        }else{
            return "error";
        }
    }

    @RequestMapping("/find.do")
    @ResponseBody
    public List<ShoppingCar> findShoppingCar(int uId){
        return shoppingCarService.selectShoppingCarsForUser(uId);

    }

}
