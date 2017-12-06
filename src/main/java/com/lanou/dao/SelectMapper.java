package com.lanou.dao;

import com.lanou.entity.Product;
import com.lanou.entity.Select;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */
public interface SelectMapper {

    public List<String> findNames(String name);

    public List<String> listNames(String listNames);

}
