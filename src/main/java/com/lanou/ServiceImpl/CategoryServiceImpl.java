package com.lanou.ServiceImpl;

import com.lanou.Service.CategoryService;
import com.lanou.dao.CategoryMapper;
import com.lanou.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
@Service("CategoryService")
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryMapper categoryMapper;

    public Category selectByPrimaryKey(Integer cId) {

        return null;
    }

    public List<Integer> selectCidParentIdForZero() {
        return null;
    }
}
