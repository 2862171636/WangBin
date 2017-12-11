package com.lanou.entity;

import java.util.Date;

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
//    规格
@Override
public String toString() {
    return "Product{" +
            "pId=" + pId +
            ", pSpec='" + pSpec + '\'' +
            ", category_id=" + category_id +
            ", pMoney=" + pMoney +
            ", pImg='" + pImg + '\'' +
            ", pNumber=" + pNumber +
            ", pName='" + pName + '\'' +
            ", pPoint=" + pPoint +
            ", pInfo=" + pInfo +
            ", pTime=" + pTime +
            ", pDiscount=" + pDiscount +
            '}';
}private String pSpec;
//    标签
    private int category_id;
//    价格
    private int pMoney;
//    图片
    private String pImg;
    private int pNumber;
    private String pName;
    private int pPoint;
    private String pInfo;
    private Date pTime;
    private double pDiscount;

    public int getpNumber() {
        return pNumber;
    }

    public void setpNumber(int pNumber) {
        this.pNumber = pNumber;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public int getpPoint() {
        return pPoint;
    }

    public void setpPoint(int pPoint) {
        this.pPoint = pPoint;
    }

    public String getpInfo() {
        return pInfo;
    }

    public void setpInfo(String pInfo) {
        this.pInfo = pInfo;
    }

    public Date getpTime() {
        return pTime;
    }

    public void setpTime(Date pTime) {
        this.pTime = pTime;
    }

    public double getpDiscount() {
        return pDiscount;
    }

    public void setpDiscount(double pDiscount) {
        this.pDiscount = pDiscount;
    }

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

}





