package com.lanou.Controller;

import com.lanou.Service.OrderService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Order;
import com.lanou.entity.ShoppingCar;
import com.sun.deploy.net.HttpResponse;
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
@RequestMapping("/order")
public class OrderController {
    @Autowired
    private OrderService orderService;



    @RequestMapping(value = "/find.do",method = RequestMethod.GET)
    public void findOrder(int oId, HttpServletResponse response){
        FastJson_All.toJson(orderService.selectOrderById(oId),response);
    }

    @RequestMapping(value = "/user.do",method = RequestMethod.GET)
    public void findOrdersForUser(int uId, HttpServletResponse response){
        FastJson_All.toJson(orderService.findOrdersForUser(uId),response);
    }


}
