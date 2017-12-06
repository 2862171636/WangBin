package com.lanou.ServiceImpl;

import com.lanou.Service.DetailsService;
import com.lanou.dao.DetailsMapper;
import com.lanou.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lanou on 2017/12/6.
 */
@Service("detailsService")
public class DetailsServiceImpl implements DetailsService{
    @Autowired
    private DetailsMapper detailsMapper;

    public Details selectProduct(Integer pId) {
        DetailsProduct detailsProduct=detailsMapper.selectProduct(pId);
         List<Integer> unit=  detailsMapper.selectUnitId(pId);
        System.out.println("dhdhdh"+unit);
        List<Unit> units=new ArrayList<Unit>();
        for (int i=0;i<unit.size();i++){
            System.out.println(unit.get(i));
             Unit unit1= detailsMapper.selectUnit(unit.get(i));
             units.add(unit1);
        }
        System.out.println("ghjmk"+units);
        List<Integer> Spec1=  detailsMapper.selectSpecId(pId);
        System.out.println("fghjk"+Spec1);
        List<Spec> sPecs=new ArrayList<Spec>();
        for (int i=0;i<Spec1.size();i++){
            System.out.println(unit.get(i));
           Spec spec= detailsMapper.selectSpec(Spec1.get(i));
            sPecs.add(spec);
        }
        System.out.println(sPecs);
       Stock stock= detailsMapper.selectStock(pId);
        Details details=new Details(detailsProduct,units,sPecs,stock);
        System.out.println(details);
        return details;
    }
}
