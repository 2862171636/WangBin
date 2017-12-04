package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
//库存
public class Stock {
    private int stockId;
    private int priceId;
    private String stockName;
    private int stockNum;

    public int getStockId() {
        return stockId;
    }

    public void setStockId(int stockId) {
        this.stockId = stockId;
    }

    public int getPriceId() {
        return priceId;
    }

    public void setPriceId(int priceId) {
        this.priceId = priceId;
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

    public Stock(int priceId, String stockName, int stockNum) {
        this.priceId = priceId;
        this.stockName = stockName;
        this.stockNum = stockNum;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "stockId=" + stockId +
                ", priceId=" + priceId +
                ", stockName='" + stockName + '\'' +
                ", stockNum=" + stockNum +
                '}';
    }
}
