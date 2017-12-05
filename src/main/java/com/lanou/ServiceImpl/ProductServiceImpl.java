package com.lanou.ServiceImpl;

import com.lanou.Service.ProductService;
import com.lanou.dao.ProductMapper;
import com.lanou.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/5.
 */

@Service("ProdcutService")

public class ProductServiceImpl implements ProductService{

    @Autowired private  ProductMapper productMapper;

    public List<Product> findsProducts(int parendId) {

        List<Product> Products = productMapper.findsProdct(parendId);

        return Products;

    }
}
