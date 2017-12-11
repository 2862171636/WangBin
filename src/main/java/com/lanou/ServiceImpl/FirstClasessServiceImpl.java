package com.lanou.ServiceImpl;

import com.lanou.Service.FirstClasessService;
import com.lanou.dao.FirstClasessMapper;
import com.lanou.entity.FirstClasess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */

@Service("firstClasessService")
public class FirstClasessServiceImpl implements FirstClasessService {

    @Autowired
    private FirstClasessMapper firstClasessMapper;


    public List<FirstClasess> findsParendIdAndPage(int classId, int pages) {
        System.out.println("classid:"+classId);
        System.out.println("pages:"+pages);
        List<FirstClasess> firstClasesses = firstClasessMapper.findsClasess(classId,pages);

        return firstClasesses;
    }
}
