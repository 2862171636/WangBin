package com.lanou.entity;

/**
 * Created by lanou on 2017/12/5.
 */
public class Select {

    private int pId;
    private String pSpec;
    private int pMoney;
    private String pImg;

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

    @Override
    public String toString() {
        return "Select{" +
                "pId=" + pId +
                ", pSpec='" + pSpec + '\'' +
                ", pMoney=" + pMoney +
                ", pImg='" + pImg + '\'' +
                '}';
    }

    public Select() {
        super();
    }

    public Select(int pId, String pSpec, int pMoney, String pImg) {
        this.pId = pId;
        this.pSpec = pSpec;
        this.pMoney = pMoney;
        this.pImg = pImg;
    }
}
