package com.lanou.Service;

import com.lanou.entity.FirstClasess;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */
public interface FirstClasessService {

    public List<FirstClasess> findsParendIdAndPage(int classId,int pages);
}
