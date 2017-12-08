package com.lanou.ServiceImpl;

import com.lanou.Service.ShoppingCarService;
import com.lanou.dao.ShoppingCarMapper;
import com.lanou.entity.ShoppingCar;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/1.
 */
@Service("ShoppingCarService")
public class ShoppingCarServiceImpl implements ShoppingCarService{

    @Autowired
    private ShoppingCarMapper shoppingCarMapper;


    public int addToShoppingCar(int price_id,int num,int u_id,int stock_id) {
        System.out.println("啊啊啊啊啊啊啊啊啊啊啊啊啊");
        return shoppingCarMapper.addToShoppingCar(price_id,num,u_id,stock_id);
    }

    public List<ShoppingCar> selectShoppingCarsForUser(int uid) {
        return shoppingCarMapper.selectShoppingCarsForUser(uid);
    }

    public boolean deleteShoppingCarById(int shoppingCarId) {
        return deleteShoppingCarById(shoppingCarId);
    }

    public boolean updateShoppingCar(ShoppingCar shoppingCar) {
        return shoppingCarMapper.updateShoppingCar(shoppingCar);
    }

    public boolean orderShoppingCar(int shoppingCarId, int orderId) {
        return shoppingCarMapper.orderShoppingCar(shoppingCarId,orderId);
    }

    public ShoppingCar findShoppingCarById(int shoppingCarId) {
        return shoppingCarMapper.selectShoppingCarById(shoppingCarId);
    }
}
