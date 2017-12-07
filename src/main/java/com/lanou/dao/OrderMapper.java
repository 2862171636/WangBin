package com.lanou.dao;

import com.lanou.entity.Order;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */
public interface OrderMapper {
    public Order selectOrderById(int oId);
    public List<Order> selectOrderForUser(int uId);
//    public List<Order> findAllOrders();
}
