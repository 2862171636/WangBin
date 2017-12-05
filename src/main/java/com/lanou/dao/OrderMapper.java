package com.lanou.dao;

import com.lanou.entity.Order;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */
public interface OrderMapper {
    public Order findOrderById(int oId);
    public List<Order> findOrdersForUser(int uId);
    public List<Order> findAllOrders();
}
