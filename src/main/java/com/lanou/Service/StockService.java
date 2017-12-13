package com.lanou.Service;

import com.lanou.entity.Stock;

/**
 * Created by lanou on 2017/12/11.
 */
public interface StockService {
    public boolean updateByOrder(Stock stock);
    public boolean addStockByPriceId(Stock stock);
}
