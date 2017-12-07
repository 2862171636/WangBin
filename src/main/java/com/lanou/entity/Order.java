package com.lanou.entity;

import java.util.Date;

/**
 * Created by lanou on 2017/12/4.
 */
public class Order {
    private int orderId;
    private ShoppingCar shoppingCar;
    private int state;
    private Date orderTime;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public ShoppingCar getShoppingCar() {
        return shoppingCar;
    }

    public void setShoppingCar(ShoppingCar shoppingCar) {
        this.shoppingCar = shoppingCar;
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

    public Order(ShoppingCar shoppingCar, int state, Date orderTime) {
        this.shoppingCar = shoppingCar;
        this.state = state;
        this.orderTime = orderTime;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", shoppingCar=" + shoppingCar +
                ", state=" + state +
                ", orderTime=" + orderTime +
                '}';
    }
}
