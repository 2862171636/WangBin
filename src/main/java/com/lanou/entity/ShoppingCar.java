package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class ShoppingCar {

    private int shoppingCarId;
    private Price price;
    private int num;
    private int uId;

    public int getShoppingCarId() {
        return shoppingCarId;
    }

    public void setShoppingCarId(int shoppingCarId) {
        this.shoppingCarId = shoppingCarId;
    }

    public Price getPrice() {
        return price;
    }

    public void setPrice(Price price) {
        this.price = price;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }

    public ShoppingCar() {
    }


    public ShoppingCar(Price price, int num, int uId) {
        this.price = price;
        this.num = num;
        this.uId = uId;
    }

    @Override
    public String toString() {
        return "ShoppingCar{" +
                "shoppingCarId=" + shoppingCarId +
                ", price=" + price +
                ", num=" + num +
                ", uId=" + uId +
                '}';
    }
}
