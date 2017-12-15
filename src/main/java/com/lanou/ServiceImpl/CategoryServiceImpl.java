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
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryMapper categoryMapper;

    //轮播图
//    public boolean updateLbtUrl(Category category) {
//        return categoryMapper.updateLbtUrl(category);
//    }

    //递归
    @Transactional
    public List<Category> findChildCategory(Integer cId) {
        List<Category> categoryList = categoryMapper.selectCategoryChildrenByParentId(cId);
//        for(Category categoryItem:categoryList){
//            categoryItem.setCategoryList(findChildCategory(categoryRes,categoryItem.getcId()));
//        }
        return categoryList;
    }


    @Transactional
    public List<Category> findChildCategory2(Integer cId) {
        List<Category> categoryList = categoryMapper.selectCategoryChildrenByParentId(cId);
        return categoryList;
    }

//    //把parentId是0的取出来
//    @Transactional
//    public List<Integer> selectCidParentIdForZero() {
//        List<Integer> cids = categoryMapper.selectCidParentIdForZero();
//        return cids;
//    }

    @Transactional
    public Boolean deletCategorys(Integer cid) {

       Boolean res =  categoryMapper.deletCategory(cid);

       if (res){

           return  true;
       }else {

           return false;
       }


    }
}































