package com.lanou.entity;

/**
 价格属性 由产品 规格和单位一同决定
 */
public class Price {
    private int priceId;
    private Product product;
    private Spec spec;
    private Unit unit;
    private double priceName;

    public int getPriceId() {
        return priceId;
    }

    public void setPriceId(int priceId) {
        this.priceId = priceId;
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

    public Unit getUnit() {
        return unit;
    }

    public void setUnit(Unit unit) {
        this.unit = unit;
    }

    public double getPriceName() {
        return priceName;
    }

    public void setPriceName(double priceName) {
        this.priceName = priceName;
    }

    public Price() {
    }

    public Price(Product product, Spec spec, Unit unit, double priceName) {
        this.product = product;
        this.spec = spec;
        this.unit = unit;
        this.priceName = priceName;
    }

    @Override
    public String toString() {
        return "Price{" +
                "priceId=" + priceId +
                ", product=" + product +
                ", spec=" + spec +
                ", unit=" + unit +
                ", priceName=" + priceName +
                '}';
    }
}
