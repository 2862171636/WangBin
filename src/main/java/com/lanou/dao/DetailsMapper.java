package com.lanou.dao;

import com.lanou.Service.DetailsService;
import com.lanou.entity.*;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
public interface DetailsMapper {
    public DetailsProduct selectProduct(Integer pId);
//    public Spec selectSpec(Integer sPecId);
//    public Stock selectStock(Integer stockId);
    public Unit selectUnit(Integer unit_id);
    public List<Integer> selectUnitId(Integer pId);
    public Spec selectSpec(Integer spec_id);
    public List<Integer> selectSpecId(Integer pId);
    public  Stock selectStock(Integer pId);
}
