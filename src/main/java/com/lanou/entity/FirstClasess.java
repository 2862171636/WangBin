package com.lanou.entity;

/**
 * Created by lanou on 2017/12/8.
 */
public class FirstClasess {


    private Integer pId;
    private String pName;
    private  String pImg;
    private Integer pMoney;

    public Integer getpId() {
        return pId;
    }

    public void setpId(Integer pId) {
        this.pId = pId;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public String getpImg() {
        return pImg;
    }

    public void setpImg(String pImg) {
        this.pImg = pImg;
    }

    public Integer getpMoney() {
        return pMoney;
    }

    public void setpMoney(Integer pMoney) {
        this.pMoney = pMoney;
    }


    public FirstClasess(Integer pId, String pName, String pImg, Integer pMoney) {
        this.pId = pId;
        this.pName = pName;
        this.pImg = pImg;
        this.pMoney = pMoney;
    }

    public FirstClasess() {
        super();
    }


    @Override
    public String toString() {
        return "FirstClasess{" +
                "pId=" + pId +
                ", pName='" + pName + '\'' +
                ", pImg='" + pImg + '\'' +
                ", pMoney=" + pMoney +
                '}';
    }



}
