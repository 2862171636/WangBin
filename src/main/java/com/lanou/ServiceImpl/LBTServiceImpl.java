package com.lanou.ServiceImpl;

import com.lanou.Service.LBTService;
import com.lanou.dao.LBTMapper;
import com.lanou.entity.LBT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/11.
 */
@Service("LBTService")
public class LBTServiceImpl implements LBTService{

    @Autowired
    private LBTMapper lbtMapper;

    public List<LBT> selectrId(Integer rId) {
        return lbtMapper.selectrId(rId);
    }

//    @Transactional
//    public boolean updaterUrl(LBT lbt) {
//        return lbtMapper.updaterUrl(lbt);
//    }


}
