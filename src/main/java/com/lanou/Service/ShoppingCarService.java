package com.lanou.Service;


import com.lanou.entity.Order;
import com.lanou.entity.ShoppingCar;

import java.util.List;

/**
 * Created by lanou on 2017/12/2.
 */
public interface ShoppingCarService {

    //public int addToShoppingCar(int price_id,int num,int u_id,int stock_id);
    public boolean addToShoppingCar(ShoppingCar shoppingCar);
    public List<ShoppingCar> selectShoppingCarsForUser(int uid);
    public boolean deleteShoppingCarById(int shoppingCarId);
    public boolean updateShoppingCar(ShoppingCar shoppingCar);
    public boolean orderShoppingCars(Order order);
    public ShoppingCar findShoppingCarById(int shoppingCarId);
    public boolean updateShopNum(ShoppingCar shoppingCar);

}
