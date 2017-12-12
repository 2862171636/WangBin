package com.lanou.dao;

import com.lanou.entity.Price;
import com.lanou.entity.Spec;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
public interface SpecMapper {
    public Spec selectSpecById(int priceId);
    public boolean takeSpecToProduct(Price price);
    public List<Spec> selectAll();
    public boolean addNewSpec(Spec spec);
}
