package com.lanou.entity;

/**
 * Created by lanou on 2017/12/7.
 */
public class HomePage {
    private String pName;
    private String sPec;
    private String pImg;
    private  Double pMoney;
    private  Integer pId;

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

    public String getsPec() {
        return sPec;
    }

    public void setsPec(String sPec) {
        this.sPec = sPec;
    }

    public String getpImg() {
        return pImg;
    }

    public void setpImg(String pImg) {
        this.pImg = pImg;
    }

    public Double getpMoney() {
        return pMoney;
    }

    public void setpMoney(Double pMoney) {
        this.pMoney = pMoney;
    }

    public HomePage() {
        super();
    }

    public HomePage(String pName, String sPec, String pImg, Double pMoney) {
        this.pName = pName;
        this.sPec = sPec;
        this.pImg = pImg;
        this.pMoney = pMoney;
    }

    @Override
    public String toString() {
        return "HomePage{" +
                "pName='" + pName + '\'' +
                ", sPec='" + sPec + '\'' +
                ", pImg='" + pImg + '\'' +
                ", pMoney=" + pMoney +
                ", pId=" + pId +
                '}';
    }
}
