package com.lanou.ServiceImpl;

import com.lanou.Service.BrandService;
import com.lanou.dao.BrandMapper;
import com.lanou.entity.Brand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by lanou on 2017/12/15.
 */
@Service("brandService")
public class BrandServiceImpl implements BrandService {

    @Autowired
    private BrandMapper brandMapper;

    public List<Brand> brandAndProduct(Integer bId) {

        List<Brand> brands=  brandMapper.brandAndProduct(bId);

        return brands;
    }
}
