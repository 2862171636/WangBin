package com.lanou.ServiceImpl;

import com.lanou.Service.ProductService;
import com.lanou.dao.ProductMapper;
import com.lanou.dao.SpecMapper;
import com.lanou.dao.UnitMapper;
import com.lanou.entity.Product;
import com.lanou.entity.Spec;
import com.lanou.entity.Unit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/5.
 */

@Service("ProdcutService")

public class ProductServiceImpl implements ProductService{

    @Autowired private  ProductMapper productMapper;

    @Autowired
    private SpecMapper specMapper;
    @Autowired
    private UnitMapper unitMapper;

    public List<Product> findsProducts(int parendId) {

        List<Product> Products = productMapper.findsProdct(parendId);

        return Products;

    }

    public boolean updateProductDetail(Product product) {
        return productMapper.updateProductDetail(product);
    }

    public boolean addNewProduct(Product product){
        return productMapper.addNewProduct(product);
    }

    public Map<String,List> findAllTags(){
            Map<String,List> tags = new HashMap<String, List>();
            List<Spec> specs = specMapper.selectAll();
            List<Unit> units = unitMapper.selectAll();
            tags.put("specs",specs);
            tags.put("unit",units);
            return tags;
    }

    public boolean addNewUnit(Unit unit){
       return unitMapper.addNewUnit(unit);
    }
    public boolean addNewSpec(Spec spec){
        return specMapper.addNewSpec(spec);
    }
}
