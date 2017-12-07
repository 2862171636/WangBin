package com.lanou.dao;

import com.lanou.entity.HomePage;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
public interface HomePageMapper {
    public List<HomePage> selectHomePage(int category_id);
}
