package com.lanou.Service;

import com.lanou.entity.Select;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */
public interface SelectService {

    public List<String> findsNames(String names);

    public List<String> listName(String listName);
}
