package com.lanou.entity;

/**
 容量单位 与表unit对应 与商品成多对多关系
 */
public class Unit {
    private int unitId;
    private String unitName;

    public int getUnitId() {
        return unitId;
    }

    public void setUnitId(int unitId) {
        this.unitId = unitId;
    }

    public String getUnitName() {
        return unitName;
    }

    public void setUnitName(String unitName) {
        this.unitName = unitName;
    }

    public Unit() {
    }

    public Unit(String unitName) {
        this.unitName = unitName;
    }

    @Override
    public String toString() {
        return "Unit{" +
                "unitId=" + unitId +
                ", unitName='" + unitName + '\'' +
                '}';
    }
}
