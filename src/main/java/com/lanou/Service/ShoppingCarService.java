package com.lanou.Service;


import com.lanou.entity.ShoppingCar;

import java.util.List;

/**
 * Created by lanou on 2017/12/2.
 */
public interface ShoppingCarService {

    public int addToShoppingCar(int price_id,int num,int u_id,int stock_id);
    public List<ShoppingCar> selectShoppingCarsForUser(int uid);
    public boolean deleteShoppingCarById(int shoppingCarId);
    public boolean updateShoppingCar(ShoppingCar shoppingCar);
    public boolean orderShoppingCar(int shoppingCarId,int orderId);
    public ShoppingCar findShoppingCarById(int shoppingCarId);

}
