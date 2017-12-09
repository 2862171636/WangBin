package com.lanou.dao;

import com.lanou.entity.FirstClasess;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */
public interface FirstClasessMapper {

    public List<FirstClasess> findsClasess(int classId, int pages);

}
