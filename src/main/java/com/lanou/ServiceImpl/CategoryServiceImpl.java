package com.lanou.ServiceImpl;

import com.lanou.Service.CategoryService;
import com.lanou.dao.CategoryMapper;
import com.lanou.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
@Service("CategoryService")
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryMapper categoryMapper;

    @Transactional
    public Category selectByPrimaryKey(Integer cId) {
        Category category = categoryMapper.selectByPrimaryKey(cId);
        if(category == null){
            return null;
        }
        category.setCategoryList(findChildCategory(category,cId));//对应起来
        return category;
    }

    //递归
    private List<Category> findChildCategory(Category categoryRes,Integer categoryId){
        List<Category> categoryList = categoryMapper.selectCategoryChildrenByParentId(categoryId);
        for(Category categoryItem:categoryList){
            categoryItem.setCategoryList(findChildCategory(categoryRes,categoryItem.getcId()));
        }
        return categoryList;
    }

    //把parentId是0的取出来
    @Transactional
    public List<Integer> selectCidParentIdForZero() {
        List<Integer> cids = categoryMapper.selectCidParentIdForZero();
        return cids;
    }
}































