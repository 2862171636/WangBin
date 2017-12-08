package com.lanou.Controller;

import com.lanou.Service.ShoppingCarService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Price;
import com.lanou.entity.ShoppingCar;
import com.lanou.entity.Stock;
import com.lanou.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
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
    public void findShoppingCar(int shoppingCarId, HttpServletResponse response){
         FastJson_All.toJson(shoppingCarService.findShoppingCarById(shoppingCarId),response);
    }

    //    添加到购物车 传入购物车对象
    @RequestMapping("/add.do")
    public void addToShoppingCar(@Param("priceId") Integer priceId, @Param("num")Integer num, @Param("uId")Integer uId, @Param("stockId")Integer stockId, HttpServletResponse response){
        if (priceId == null || num == null || uId == null || stockId == null){
            FastJson_All.toJson("error",response);
        }else {
                ShoppingCar shoppingCar = new ShoppingCar();
                Price price = new Price();
                price.setPrice_id(priceId);
                User user = new User();
                user.setuId(uId);
                Stock stock = new Stock();
                stock.setStockId(stockId);
                shoppingCar.setPrice(price);
                shoppingCar.setNum(num);
                shoppingCar.setUser(user);
                shoppingCar.setStock(stock);
                shoppingCarService.addToShoppingCar(shoppingCar);
                FastJson_All.toJson("success",response);
        }

    }
    //    根据用户id查找购物车
    @RequestMapping("/user.do")
    public void findShoppingCars(int uId,HttpServletResponse response){
        FastJson_All.toJson(shoppingCarService.selectShoppingCarsForUser(uId),response);

    }


    //    根据购物车id更新购物车
    @RequestMapping("/update.do")
    public void updateShoppingCar(ShoppingCar shoppingCar,HttpServletResponse response){
        FastJson_All.toJson(shoppingCarService.updateShoppingCar(shoppingCar),response);

    }



}
