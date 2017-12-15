package com.lanou.entity;

/**
 * Created by lanou on 2017/12/13.
 */
public class Brand {

    private Integer bId;
    private String bName;
    private Product product;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

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

    public Brand(Integer bId, String bName, Product product) {
        this.bId = bId;
        this.bName = bName;
        this.product = product;
    }

    public Brand() {
        super();
    }

    @Override
    public String toString() {
        return "Brand{" +
                "bId=" + bId +
                ", bName='" + bName + '\'' +
                ", product=" + product +
                '}';
    }
}
