package com.lanou.ServiceImpl;

import com.lanou.Service.OrderService;
import com.lanou.dao.OrderMapper;
import com.lanou.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
@Service("orderService")
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderMapper orderMapper;
    @Transactional
    public Order selectOrderById(int oId) {
        return orderMapper.selectOrderById(oId);
    }

    public List<Order> findOrdersForUser(int uId) {
        return orderMapper.selectOrderForUser(uId);
    }

    public boolean addNewOrder(Order order){
        return orderMapper.addNewOrder(order);
    }
}
