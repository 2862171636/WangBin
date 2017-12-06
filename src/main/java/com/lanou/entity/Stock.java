package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
//库存
public class Stock {
    private int stock_id;

    private String stockName;
    private int stockNum;

    public int getStock_id() {
        return stock_id;
    }

    public void setStock_id(int stock_id) {
        this.stock_id = stock_id;
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
        super();
    }

    public Stock(int stock_id, String stockName, int stockNum) {
        this.stock_id = stock_id;
        this.stockName = stockName;
        this.stockNum = stockNum;
    }

    @Override
    public String toString() {
        return "Stock{" +
                "stock_id=" + stock_id +
                ", stockName='" + stockName + '\'' +
                ", stockNum=" + stockNum +
                '}';
    }
}
