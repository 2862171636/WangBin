package com.lanou.ServiceImpl;

import com.lanou.Service.CityService;
import com.lanou.dao.CityMapper;
import com.lanou.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
@Service("cityService")
public class CityServiceImpl implements CityService{
    @Autowired
    private CityMapper cityMapper;
    @Transactional
    public List<City> selectCity(Integer cityid) {
        return cityMapper.selectCity(cityid);
    }


}
