package com.lanou.ServiceImpl;

import com.lanou.Service.HomePageService;
import com.lanou.dao.HomePageMapper;
import com.lanou.entity.HomePage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/7.
 */
@Service("homePageService")
public class HomePageServiceImpl implements HomePageService{
    @Autowired
    private HomePageMapper homePageMapper;
    public List<HomePage> selectHomePage(int category_id) {
        return homePageMapper.selectHomePage(category_id);
    }
}
