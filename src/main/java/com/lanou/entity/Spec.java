package com.lanou.entity;

/**
 规格 对应表spec 与product成多对多关系
 */
public class Spec {
    private int spec_id;
    private String spec_name;


    public int getSpec_id() {
        return spec_id;
    }

    public void setSpec_id(int spec_id) {
        this.spec_id = spec_id;
    }

    public String getSpec_name() {
        return spec_name;
    }

    public void setSpec_name(String spec_name) {
        this.spec_name = spec_name;
    }

    public Spec() {
        super();
    }

    public Spec(int spec_id, String spec_name) {
        this.spec_id = spec_id;
        this.spec_name = spec_name;
    }

    @Override
    public String toString() {
        return "Spec{" +
                "spec_id=" + spec_id +
                ", spec_name='" + spec_name + '\'' +
                '}';
    }
}
