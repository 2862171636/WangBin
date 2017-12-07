package com.lanou.entity;



/**
 价格属性 由产品 规格和单位一同决定
 */
public class Price {
    private Integer price_id;
    private  Integer p_id;
    private  Integer spec_id ;
    private  Integer unit_id;
    private Double price_name;
    public Integer getPrice_id() {
        return price_id;
    }

    public void setPrice_id(Integer price_id) {
        this.price_id = price_id;
    }

    public Integer getP_id() {
        return p_id;
    }

    public void setP_id(Integer p_id) {
        this.p_id = p_id;
    }

    public Integer getSpec_id() {
        return spec_id;
    }

    public void setSpec_id(Integer spec_id) {
        this.spec_id = spec_id;
    }

    public Integer getUnit_id() {
        return unit_id;
    }

    public void setUnit_id(Integer unit_id) {
        this.unit_id = unit_id;
    }

    public Double getPrice_name() {
        return price_name;
    }

    public void setPrice_name(Double price_name) {
        this.price_name = price_name;
    }

    public Price() {
        super();
    }

    public Price( Integer p_id, Integer spec_id, Integer unit_id) {

        this.p_id = p_id;
        this.spec_id = spec_id;
        this.unit_id = unit_id;
    }

    @Override
    public String toString() {
        return "Price{" +
                "price_id=" + price_id +
                ", p_id=" + p_id +
                ", spec_id=" + spec_id +
                ", unit_id=" + unit_id +
                '}';
    }
}
