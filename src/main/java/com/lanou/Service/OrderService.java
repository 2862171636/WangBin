package com.lanou.Service;

import com.lanou.entity.Order;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
public interface OrderService {
    public Order selectOrderById(int oId);
    public List<Order> findOrdersForUser(int uId);
}
