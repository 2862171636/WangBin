package com.lanou.dao;

import com.lanou.entity.Category;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public interface CategoryMapper {

    public Category selectByPrimaryKey(Integer cId);

    public List<Category> selectCategoryChildrenByParentId(Integer cId);

    public List<Integer> selectCidParentIdForZero();

}
