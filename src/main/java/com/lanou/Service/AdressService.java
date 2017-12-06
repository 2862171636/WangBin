package com.lanou.Service;

import com.lanou.entity.Adress;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */
public interface AdressService {
    public  void insertAdress(Adress adress);
    public List<Adress> selectAdress(int uId);
    public void deleteAdress(Integer dId);
    public  Adress selectAdressDid(int dId);
}
