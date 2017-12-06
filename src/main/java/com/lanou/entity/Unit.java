package com.lanou.entity;

/**
 容量单位 与表unit对应 与商品成多对多关系
 */
public class Unit {
    private int unit_id;
    private String unit_name;

    public int getUnit_id() {
        return unit_id;
    }

    public void setUnit_id(int unit_id) {
        this.unit_id = unit_id;
    }

    public String getUnit_name() {
        return unit_name;
    }

    public void setUnit_name(String unit_name) {
        this.unit_name = unit_name;
    }

    public Unit() {
        super();
    }

    public Unit(int unit_id, String unit_name) {
        this.unit_id = unit_id;
        this.unit_name = unit_name;
    }

    @Override
    public String toString() {
        return "Unit{" +
                "unit_id=" + unit_id +
                ", unit_name='" + unit_name + '\'' +
                '}';
    }
}
