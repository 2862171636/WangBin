package com.lanou.Controller;

import com.lanou.Service.OrderService;
import com.lanou.Service.ShoppingCarService;
import com.lanou.Service.StockService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private ShoppingCarService shoppingCarService;
    @Autowired
    private StockService stockService;



    @RequestMapping(value = "/find.do",method = RequestMethod.GET)
    public void findOrder(int oId, HttpServletResponse response){
        FastJson_All.toJson(orderService.selectOrderById(oId),response);
    }
//    查找当前用户的所有订单
    @RequestMapping(value = "/user.do",method = RequestMethod.GET)
    public void findOrdersForUser(int uId, HttpServletResponse response){
        FastJson_All.toJson(orderService.findOrdersForUser(uId),response);
    }
//      将购物车对象添加到订单
    @RequestMapping(value = "/add.do",method = RequestMethod.GET)
    public void findOrdersForUser(IDS shoppingCarIds, int addressId, int uId, HttpServletResponse response){

        Order order = new Order();
        Adress adress = new Adress();
        User user = new User();
        Date date = new Date();

        user.setuId(uId);
        adress.setdId(addressId);
        order.setAddress(adress);
        order.setUser(user);
        order.setOrderTime(date);

        List<ShoppingCar> shoppingCars = new ArrayList<ShoppingCar>();
        for (int id:shoppingCarIds.getIds()) {
            ShoppingCar shoppingCar = new ShoppingCar();
            shoppingCar.setShoppingCarId(id);
            shoppingCars.add(shoppingCar);
        }
        order.setShoppingCars(shoppingCars);
        orderService.addNewOrder(order);
        System.out.println(order.getOrderId());
        shoppingCarService.orderShoppingCars(order);
        FastJson_All.toJson("success",response);
    }
//    付款时将订单状态改为已支付并更改库存
    @Transactional
    public void payOrder(int orderId,HttpServletResponse response){
        Order order = orderService.selectOrderById(orderId);
        if (orderService.payOrder(orderId)){
            for (ShoppingCar shoppingCar:order.getShoppingCars()) {
                Stock stock = shoppingCar.getStock();
                stock.setStockNum(shoppingCar.getNum());
                stockService.updateByOrder(stock);
            }
        }
        FastJson_All.toJson("订单完成",response);

    }


}
