package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
//库存 与价格一同被容量和规格决定 因此在数据库中通过priceId绑定
//因为存在多个库存可能 因此与price为 1 对 多关系
public class Stock {
    private int stockId;

    private String stockName;

    private int stockNum;

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public String getStockName() {
        return stockName;
    }

    public void setStockName(String stockName) {
        this.stockName = stockName;
    }

    public int getStockNum() {
        return stockNum;
    }

    public void setStockNum(int stockNum) {
        this.stockNum = stockNum;
    }

    public Stock() {
    }

    public Stock(String stockName, int stockNum) {
        this.stockName = stockName;
        this.stockNum = stockNum;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "stockId=" + stockId +
                ", stockName='" + stockName + '\'' +
                ", stockNum=" + stockNum +
                '}';
    }
}

