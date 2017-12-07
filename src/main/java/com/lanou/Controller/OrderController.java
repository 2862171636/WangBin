package com.lanou.Controller;

import com.lanou.Service.OrderService;
import com.lanou.entity.Order;
import com.lanou.entity.ShoppingCar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by lanou on 2017/12/7.
 */
@Controller
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;



    @RequestMapping(value = "/find.do",method = RequestMethod.GET)
    @ResponseBody
    public Order findOrder(int oId){
        return orderService.selectOrderById(oId);
    }


}
