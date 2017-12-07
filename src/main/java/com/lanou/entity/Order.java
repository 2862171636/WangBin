package com.lanou.entity;

import java.util.Date;
import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public class Order {
    private int orderId;
    private List<ShoppingCar> shoppingCars;
    private int state;
    private Date orderTime;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public List<ShoppingCar> getShoppingCars() {
        return shoppingCars;
    }

    public void setShoppingCars(List<ShoppingCar> shoppingCars) {
        this.shoppingCars = shoppingCars;
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

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", shoppingCar=" + shoppingCars +
                ", state=" + state +
                ", orderTime=" + orderTime +
                '}';
    }
}
