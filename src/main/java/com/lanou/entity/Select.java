package com.lanou.entity;

/**
 * Created by lanou on 2017/12/5.
 */
public class Select {

    private int pId;
    private String pSpec;
    private double pMoney;
    private String pImg;
    private String pName;

    private String pNumber;

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public String getpNumber() {
        return pNumber;
    }

    public void setpNumber(String pNumber) {
        this.pNumber = pNumber;
    }

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

    public double getpMoney() {
        return pMoney;
    }

    public void setpMoney(double pMoney) {
        this.pMoney = pMoney;
    }

    public String getpImg() {
        return pImg;
    }

    public void setpImg(String pImg) {
        this.pImg = pImg;
    }


    public Select() {
        super();
    }

    public Select(int pId, String pSpec, double pMoney, String pImg, String pName, String pNumber) {
        this.pId = pId;
        this.pSpec = pSpec;
        this.pMoney = pMoney;
        this.pImg = pImg;
        this.pName = pName;
        this.pNumber = pNumber;
    }

    @Override
    public String toString() {
        return "Select{" +
                "pId=" + pId +
                ", pSpec='" + pSpec + '\'' +
                ", pMoney=" + pMoney +
                ", pImg='" + pImg + '\'' +
                ", pName='" + pName + '\'' +
                ", pNumber='" + pNumber + '\'' +
                '}';
    }
}

