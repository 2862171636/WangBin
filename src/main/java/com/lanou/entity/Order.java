package com.lanou.entity;

import java.util.Date;

/**
 * Created by lanou on 2017/12/4.
 */
public class Order {
    private int orderId;
    private int shoppingCarId;
    private int state;
    private Date orderTime;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getShoppingCarId() {
        return shoppingCarId;
    }

    public void setShoppingCarId(int shoppingCarId) {
        this.shoppingCarId = shoppingCarId;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public Date getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(Date orderTime) {
        this.orderTime = orderTime;
    }

    public Order() {
    }

    public Order(int shoppingCarId, int state, Date orderTime) {
        this.shoppingCarId = shoppingCarId;
        this.state = state;
        this.orderTime = orderTime;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", shoppingCarId=" + shoppingCarId +
                ", state=" + state +
                ", orderTime=" + orderTime +
                '}';
    }
}
