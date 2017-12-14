package com.lanou.entity;

/**
 * Created by lanou on 2017/12/13.
 */
public class Brand {

    private Integer bId;
    private String bName;


    public Integer getbId() {
        return bId;
    }

    public void setbId(Integer bId) {
        this.bId = bId;
    }

    public String getbName() {
        return bName;
    }

    public void setbName(String bName) {
        this.bName = bName;
    }

    public Brand(Integer bId, String bName) {
        this.bId = bId;
        this.bName = bName;
    }

    public Brand() {
        super();
    }

    @Override
    public String toString() {
        return "Brand{" +
                "bId=" + bId +
                ", bName='" + bName + '\'' +
                '}';
    }
}
