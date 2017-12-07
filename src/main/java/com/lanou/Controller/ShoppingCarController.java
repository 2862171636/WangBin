package com.lanou.Controller;

import com.lanou.Service.ShoppingCarService;
import com.lanou.entity.Order;
import com.lanou.entity.ShoppingCar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
@Controller
@RequestMapping("/shopping")
public class ShoppingCarController {
    @Autowired
    private ShoppingCarService shoppingCarService;

    @RequestMapping(value = "/find.do",method = RequestMethod.GET)
    @ResponseBody
    public ShoppingCar findShoppingCar(int shoppingCarId){
        return shoppingCarService.findShoppingCarById(shoppingCarId);
    }

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
    @RequestMapping("/finds.do")
    @ResponseBody
    public List<ShoppingCar> findShoppingCars(int uId){
        return shoppingCarService.selectShoppingCarsForUser(uId);

    }


    //    根据购物车id更新购物车
    @RequestMapping("/update.do")
    @ResponseBody
    public boolean updateShoppingCar(ShoppingCar shoppingCar){
        return shoppingCarService.updateShoppingCar(shoppingCar);

    }



}
