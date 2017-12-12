package com.lanou.Service;

import com.lanou.entity.Product;
import com.lanou.entity.Spec;
import com.lanou.entity.Unit;

import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/5.
 */
public interface ProductService {

    public List<Product> findsProducts(int parendId);
    public boolean updateProductDetail(Product product);
    public boolean addNewProduct(Product product);

    public Map<String,List> findAllTags();

    public boolean addNewUnit(Unit unit);
    public boolean addNewSpec(Spec spec);

}
