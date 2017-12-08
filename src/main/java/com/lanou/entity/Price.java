package com.lanou.entity;


import java.util.List;

/**
 价格属性 由产品 规格和单位一同决定
 */
public class Price {
    private Spec spec;
    private Unit unit;
    private Product product;
    private DetailsProduct detailsProduct;
    private Integer price_id;
    private Integer p_id;
    private Integer spec_id ;
    private Integer unit_id;
    private Double price_name;
    private List<Stock> stocks;

    public List<Stock> getStocks() {
        return stocks;
    }

    public void setStocks(List<Stock> stocks) {
        this.stocks = stocks;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Spec getSpec() {
        return spec;
    }

    public void setSpec(Spec spec) {
        this.spec = spec;
    }

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

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public Price() {
        super();
    }

    public DetailsProduct getDetailsProduct() {
        return detailsProduct;
    }

    public void setDetailsProduct(DetailsProduct detailsProduct) {
        this.detailsProduct = detailsProduct;
    }

    public Price(Integer p_id, Integer spec_id, Integer unit_id) {
        this.unit_id = unit_id;
        this.p_id = p_id;
        this.spec_id = spec_id;
    }

    @Override
    public String toString() {
        return "Price{" +
                "spec=" + spec +
                ", unit=" + unit +
                ", product=" + product +
                ", detailsProduct=" + detailsProduct +
                ", price_id=" + price_id +
                ", p_id=" + p_id +
                ", spec_id=" + spec_id +
                ", unit_id=" + unit_id +
                ", price_name=" + price_name +
                ", stocks=" + stocks +
                '}';
    }
}
