package com.lanou.dao;

import com.lanou.entity.City;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public interface CityMapper {
    public List<City> selectCity(Integer cityid);
    public  List<Integer> selectYear();
}
