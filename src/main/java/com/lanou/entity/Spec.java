package com.lanou.entity;

/**
 规格 对应表spec 与product成多对多关系
 */
public class Spec {
    private int specId;
    private String specName;

    public int getSpecId() {
        return specId;
    }

    public void setSpecId(int specId) {
        this.specId = specId;
    }

    public String getSpecName() {
        return specName;
    }

    public void setSpecName(String specName) {
        this.specName = specName;
    }

    public Spec() {
    }



    public Spec(String specName) {
        this.specName = specName;
    }

    @Override
    public String toString() {
        return "Spec{" +
                "specId=" + specId +
                ", specName='" + specName + '\'' +
                '}';
    }
}
