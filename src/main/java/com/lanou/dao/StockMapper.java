package com.lanou.dao;

import com.lanou.entity.Stock;

import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
public interface StockMapper {
    public List<Stock> findStockByPriceId(int priceId);
}
