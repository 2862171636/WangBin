package com.lanou.Service;


import com.lanou.entity.ShoppingCar;

import java.util.List;

/**
 * Created by lanou on 2017/12/2.
 */
public interface ShoppingCarService {

    public boolean addToShoppingCar(ShoppingCar shoppingCar);
    public List<ShoppingCar> selectShoppingCarsForUser(int uid);
    public boolean deleteShoppingCarById(int shoppingCarId);

}
