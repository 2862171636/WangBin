package com.lanou.Service;

import com.lanou.entity.Price;

/**
 * Created by lanou on 2017/12/8.
 */
public interface PriceService {
    public Price findPriceLimited(Price price);
    public boolean addTagsToProduct(Price price);
}
