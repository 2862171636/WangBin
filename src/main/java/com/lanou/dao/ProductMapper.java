package com.lanou.dao;

import com.lanou.entity.Product;

import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public interface ProductMapper {

    public List<Product> findsProdct(int parendId);
    public boolean updateProductDetail(Product product);
    public boolean addNewProduct(Product product);


}
