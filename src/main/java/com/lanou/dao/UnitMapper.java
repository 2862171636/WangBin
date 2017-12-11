package com.lanou.dao;

import com.lanou.entity.Price;
import com.lanou.entity.Spec;
import com.lanou.entity.Unit;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
public interface UnitMapper {
    public Unit selectUnitById(int priceId);
    public boolean takeUnitToProduct(Price price);
    public List<Unit> selectAll();
}
