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

@Service("SelectService")
public class SelectServiceImpl implements SelectService {

    @Autowired private SelectMapper selectMapper;


    public List<String> findsNames(String names ) {

        List<String> selectsName = selectMapper.findNames(names);

        return selectsName;
    }

    public List<String> listName(String listName) {

        List<String> listNames = selectMapper.listNames(listName);

        return listNames;
    }
}
