package com.lanou.dao;

import com.lanou.entity.ShoppingCar;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public interface ShoppingCarMapper {
    public boolean addToShoppingCar(ShoppingCar shoppingCar);
    public List<ShoppingCar> selectShoppingCarsForUser(int uid);
    public boolean deleteShoppingCarById(int shoppingCarId);
}