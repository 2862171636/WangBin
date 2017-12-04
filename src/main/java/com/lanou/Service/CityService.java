package com.lanou.Service;

import com.lanou.entity.City;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */

public interface CityService {
    public List<City> selectCity(Integer city);


}
