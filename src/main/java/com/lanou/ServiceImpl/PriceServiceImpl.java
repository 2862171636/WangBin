package com.lanou.ServiceImpl;

import com.lanou.Service.PriceService;
import com.lanou.dao.PriceMapper;
import com.lanou.dao.SpecMapper;
import com.lanou.dao.UnitMapper;
import com.lanou.entity.Price;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by lanou on 2017/12/8.
 */
@Service("priceService")
public class PriceServiceImpl implements PriceService{

    @Autowired
    private PriceMapper priceMapper;
    @Autowired
    private SpecMapper specMapper;
    @Autowired
    private UnitMapper unitMapper;

    public Price findPriceLimited(Price price) {
        return priceMapper.selectPriceByThreeLimits(price);
    }
    @Transactional
    public boolean addTagsToPrice(Price price){
        price.setSpec(specMapper.selectSpecById(price.getSpec().getSpec_id()));
        price.setUnit(unitMapper.selectUnitById(price.getUnit().getUnit_id()));
        return priceMapper.addPriceWithOutPriceName(price);
    }
    public boolean addSpecToProduct(Price price){
        return specMapper.takeSpecToProduct(price);
    }
    public boolean addUnitToProduct(Price price){
        return unitMapper.takeUnitToProduct(price);
    }

    public boolean addPriceName(Price price) {
        return priceMapper.addPriceName(price);
    }
}
