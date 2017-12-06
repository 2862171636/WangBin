package com.lanou.entity;

import java.util.Date;

/**
 * Created by lanou on 2017/12/4.
 */
public class DetailsProduct {
    private  Integer pId;
    private  String pSpec;
    private  String pNumber;
    private  String pName;
    private  Integer pPoint;
    private  String pInfo;
    private  Date  pTime;
    private  Double pDiscount;
    private  Integer pStock;
    private  Integer category_id;
    private  String pDes;
    private  String pMoney;
    private  String pImg;
    private  Integer pPrice;

    public Integer getpId() {
        return pId;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public String getpSpec() {
        return pSpec;
    }

    public void setpSpec(String pSpec) {
        this.pSpec = pSpec;
    }

    public String getpNumber() {
        return pNumber;
    }

    public void setpNumber(String pNumber) {
        this.pNumber = pNumber;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public Integer getpPoint() {
        return pPoint;
    }

    public void setpPoint(Integer pPoint) {
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

    public Double getpDiscount() {
        return pDiscount;
    }

    public void setpDiscount(Double pDiscount) {
        this.pDiscount = pDiscount;
    }

    public Integer getpStock() {
        return pStock;
    }

    public void setpStock(Integer pStock) {
        this.pStock = pStock;
    }

    public Integer getCategory_id() {
        return category_id;
    }

    public void setCategory_id(Integer category_id) {
        this.category_id = category_id;
    }

    public String getpDes() {
        return pDes;
    }

    public void setpDes(String pDes) {
        this.pDes = pDes;
    }

    public String getpMoney() {
        return pMoney;
    }

    public void setpMoney(String pMoney) {
        this.pMoney = pMoney;
    }

    public String getpImg() {
        return pImg;
    }

    public void setpImg(String pImg) {
        this.pImg = pImg;
    }

    public Integer getpPrice() {
        return pPrice;
    }

    public void setpPrice(Integer pPrice) {
        this.pPrice = pPrice;
    }

    public DetailsProduct() {
        super();
    }

    public DetailsProduct(Integer pId, String pSpec, String pNumber, String pName, Integer pPoint, String pInfo, Date pTime, Double pDiscount, Integer pStock, Integer category_id, String pDes, String pMoney, String pImg, Integer pPrice) {
        this.pId = pId;
        this.pSpec = pSpec;
        this.pNumber = pNumber;
        this.pName = pName;
        this.pPoint = pPoint;
        this.pInfo = pInfo;
        this.pTime = pTime;
        this.pDiscount = pDiscount;
        this.pStock = pStock;
        this.category_id = category_id;
        this.pDes = pDes;
        this.pMoney = pMoney;
        this.pImg = pImg;
        this.pPrice = pPrice;
    }

    @Override
    public String toString() {
        return "DetailsProduct{" +
                "pId=" + pId +
                ", pSpec='" + pSpec + '\'' +
                ", pNumber='" + pNumber + '\'' +
                ", pName='" + pName + '\'' +
                ", pPoint=" + pPoint +
                ", pInfo='" + pInfo + '\'' +
                ", pTime=" + pTime +
                ", pDiscount=" + pDiscount +
                ", pStock=" + pStock +
                ", category_id=" + category_id +
                ", pDes='" + pDes + '\'' +
                ", pMoney='" + pMoney + '\'' +
                ", pImg='" + pImg + '\'' +
                ", pPrice=" + pPrice +
                '}';
    }
}





