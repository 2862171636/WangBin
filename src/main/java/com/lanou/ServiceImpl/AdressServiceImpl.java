package com.lanou.ServiceImpl;

import com.lanou.Service.AdressService;
import com.lanou.Service.CityService;
import com.lanou.dao.AdressMapper;
import com.lanou.dao.CityMapper;
import com.lanou.entity.Adress;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * Created by lanou on 2017/12/4.
 */
@Service("adressService")
public class AdressServiceImpl implements AdressService{
    @Autowired
    private AdressMapper adressMapper;

    public void insertAdress(Adress adress) {
        adressMapper.insertAdress(adress);
    }

    public List<Adress> selectAdress(int uId) {
        List<Adress> adresses= adressMapper.selectAdress(uId);
        return  adresses;
    }
}
