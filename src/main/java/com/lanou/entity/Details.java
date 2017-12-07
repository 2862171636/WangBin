package com.lanou.entity;

import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
public class Details {
    private  DetailsProduct product;
    private  List<Unit> unit ;
    private  List<Spec> spec;
    private  Stock stock;

    public DetailsProduct getProduct() {
        return product;
    }

    public void setProduct(DetailsProduct product) {
        this.product = product;
    }

    public List<Unit> getUnit() {
        return unit;
    }

    public void setUnit(List<Unit> unit) {
        this.unit = unit;
    }

    public List<Spec> getSpec() {
        return spec;
    }

    public void setSpec(List<Spec> spec) {
        this.spec = spec;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }

    public Details() {
        super();
    }

    public Details(DetailsProduct product, List<Unit> unit, List<Spec> spec, Stock stock) {
        this.product = product;
        this.unit = unit;
        this.spec = spec;
        this.stock = stock;
    }

    @Override
    public String toString() {
        return "Details{" +
                "product=" + product +
                ", unit=" + unit +
                ", spec=" + spec +
                ", stock=" + stock +
                '}';
    }
}
