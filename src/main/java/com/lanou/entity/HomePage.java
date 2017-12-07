package com.lanou.entity;

/**
 * Created by lanou on 2017/12/7.
 */
public class HomePage {
    private String pName;
    private String sPec;
    private String pImg;
    private  Double pPrice;

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

    public Double getpPrice() {
        return pPrice;
    }

    public void setpPrice(Double pPrice) {
        this.pPrice = pPrice;
    }

    public HomePage() {
        super();
    }

    public HomePage(String pName, String sPec, String pImg, Double pPrice) {
        this.pName = pName;
        this.sPec = sPec;
        this.pImg = pImg;
        this.pPrice = pPrice;
    }

    @Override
    public String toString() {
        return "HomePage{" +
                "pName='" + pName + '\'' +
                ", sPec='" + sPec + '\'' +
                ", pImg='" + pImg + '\'' +
                ", pPrice=" + pPrice +
                '}';
    }
}
