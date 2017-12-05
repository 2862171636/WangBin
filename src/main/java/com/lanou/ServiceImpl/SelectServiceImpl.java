package com.lanou.ServiceImpl;

import com.lanou.Service.SelectService;
import com.lanou.dao.SelectMapper;
import com.lanou.entity.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */

@Service("selectService")
public class SelectServiceImpl implements SelectService {

    @Autowired private SelectMapper selectMapper;


    public List<Select> findsNames(String names ) {

        List<Select> selectsName = selectMapper.findNames(names);

        return selectsName;
    }
}
