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
//    添加到购物车 传入购物车对象
    @RequestMapping("/add.do")
    public String addToShoppingCar(ShoppingCar shoppingCar){
        if (shoppingCarService.addToShoppingCar(shoppingCar)){
            return "success";
        }else{
            return "error";
        }
    }
//    根据用户id查找购物车
    @RequestMapping("/find.do")
    @ResponseBody
    public List<ShoppingCar> findShoppingCar(int uId){
        return shoppingCarService.selectShoppingCarsForUser(uId);

    }


    //    根据购物车id更新购物车
    @RequestMapping("/update.do")
    @ResponseBody
    public boolean updateShoppingCar(ShoppingCar shoppingCar){
        return shoppingCarService.updateShoppingCar(shoppingCar);

    }


}
