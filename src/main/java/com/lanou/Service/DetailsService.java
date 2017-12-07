package com.lanou.Service;

import com.lanou.entity.Details;
import com.lanou.entity.Price;

/**
 * Created by lanou on 2017/12/6.
 */
public interface DetailsService {
    public Details selectProduct(Integer pId);
    public  Double selectPrice(Price price);
}
