package com.lanou.ServiceImpl;

import com.lanou.Service.PriceService;
import com.lanou.dao.PriceMapper;
import com.lanou.entity.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by lanou on 2017/12/8.
 */
@Service("priceService")
public class PriceServiceImpl implements PriceService{

    @Autowired
    private PriceMapper priceMapper;

    public Price findPriceLimited(Price price) {
        return priceMapper.selectPriceByThreeLimits(price);
    }
}
