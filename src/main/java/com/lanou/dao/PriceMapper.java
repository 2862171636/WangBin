package com.lanou.dao;

import com.lanou.entity.Price;

/**
 * Created by lanou on 2017/12/7.
 */
public interface PriceMapper {
    public Price selectPriceByPriceId(int priceId);
    public Price selectPriceByThreeLimits(Price price);
    public boolean addPriceWithOutPriceName(Price price);
    public boolean addPriceName(Price price);
}
