package com.lanou.dao;

import com.lanou.entity.LBT;

import java.util.List;

/**
 * Created by lanou on 2017/12/11.
 */
public interface LBTMapper {

    //public boolean updaterUrl(LBT lbt);

    public List<LBT> selectpId(Integer pId);

}
