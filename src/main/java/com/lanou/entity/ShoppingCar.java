package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class ShoppingCar {

    private int shoppingCarId;
    private int priceId;
    private int num;
    private int uId;

    public int getShoppingCarId() {
        return shoppingCarId;
    }

    public void setShoppingCarId(int shoppingCarId) {
        this.shoppingCarId = shoppingCarId;
    }

    public int getPriceId() {
        return priceId;
    }

    public void setPriceId(int priceId) {
        this.priceId = priceId;
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


    public ShoppingCar(int priceId, int num, int uId) {
        this.priceId = priceId;
        this.num = num;
        this.uId = uId;
    }

    @Override
    public String toString() {
        return "ShoppingCar{" +
                "shoppingCarId=" + shoppingCarId +
                ", priceId=" + priceId +
                ", num=" + num +
                ", uId=" + uId +
                '}';
    }
}
