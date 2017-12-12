package com.lanou.entity;

/**
 * Created by lanou on 2017/12/11.
 */
public class LBT {

    public Integer rId;
    public String rName;
    public String rUrl;

    public Integer getrId() {
        return rId;
    }

    public void setrId(Integer rId) {
        this.rId = rId;
    }

    public String getrName() {
        return rName;
    }

    public void setrName(String rName) {
        this.rName = rName;
    }

    public String getrUrl() {
        return rUrl;
    }

    public void setrUrl(String rUrl) {
        this.rUrl = rUrl;
    }

    @Override
    public String toString() {
        return "LBT{" +
                "rId=" + rId +
                ", rName='" + rName + '\'' +
                ", rUrl='" + rUrl + '\'' +
                '}';
    }

    public LBT() {

    }

    public LBT(Integer rId, String rName, String rUrl) {
        this.rId = rId;
        this.rName = rName;
        this.rUrl = rUrl;
    }
}
