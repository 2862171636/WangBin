package com.lanou.test;

import com.lanou.Controller.ShoppingController;
import com.lanou.dao.ShoppingCarMapper;
import com.lanou.entity.ShoppingCar;
import org.junit.Test;

/**
 * Created by lanou on 2017/12/5.
 */
public class testShoppingCar {


    @Test
    public void testAdd(){
        ShoppingController shoppingController = new ShoppingController();
        ShoppingCar shoppingCar = new ShoppingCar(1,3,5);
        System.out.println(shoppingController.addToShoppingCar(shoppingCar));
    }

}
