package com.lanou.ServiceImpl;

import com.lanou.Service.ShoppingCarService;
import com.lanou.Service.TeacherService;
import com.lanou.dao.ShoppingCarMapper;
import com.lanou.dao.TeacherMapper;
import com.lanou.entity.ShoppingCar;
import com.lanou.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/1.
 */
@Service("ShoppingCarService")
public class ShoppingCarServiceImpl implements ShoppingCarService{

    @Autowired
    private ShoppingCarMapper ShoppingCarMapper;


    public boolean addToShoppingCar(ShoppingCar shoppingCar) {
        return false;
    }

    public List<ShoppingCar> selectShoppingCarsForUser(int uid) {
        return null;
    }

    public boolean deleteShoppingCarById(int shoppingCarId) {
        return false;
    }
}
