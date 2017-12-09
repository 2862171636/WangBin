package com.lanou.entity;

/**
 * Created by lanou on 2017/12/8.
 */
public class Focus {
    private int focousId;
    private Product product;
    private int uId;

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }

    public int getFocousId() {
        return focousId;
    }

    public void setFocousId(int focousId) {
        this.focousId = focousId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Focus() {
    }

    @Override
    public String toString() {
        return "Focus{" +
                "focousId=" + focousId +
                ", product=" + product +
                '}';
    }
}
