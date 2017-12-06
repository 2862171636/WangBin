package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class Product {

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public String getpSpec() {
        return pSpec;
    }

    public void setpSpec(String pSpec) {
        this.pSpec = pSpec;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public int getpMoney() {
        return pMoney;
    }

    public void setpMoney(int pMoney) {
        this.pMoney = pMoney;
    }

    public String getpImg() {
        return pImg;
    }

    public void setpImg(String pImg) {
        this.pImg = pImg;
    }

    private int pId;
    private String pSpec;
    private int category_id;
    private int pMoney;
    private  String pImg;

    public Product(int pId, String pSpec, int category_id, int pMoney, String pImg) {
        this.pId = pId;
        this.pSpec = pSpec;
        this.category_id = category_id;
        this.pMoney = pMoney;
        this.pImg = pImg;
    }

    public Product() {
        super();
    }

    @Override
    public String toString() {
        return "Product{" +
                "pId=" + pId +
                ", pSpec='" + pSpec + '\'' +
                ", category_id=" + category_id +
                ", pMoney=" + pMoney +
                ", pImg='" + pImg + '\'' +
                '}';
    }
}





