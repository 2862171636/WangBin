package com.lanou.Service;

import com.lanou.entity.Category;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public interface CategoryService {



    public List<Category> findChildCategory(Integer cId);

   // public boolean updateLbtUrl(Category category);

}
