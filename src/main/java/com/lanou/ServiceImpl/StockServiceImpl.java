package com.lanou.ServiceImpl;

import com.lanou.Service.StockService;
import com.lanou.dao.StockMapper;
import com.lanou.entity.Stock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by lanou on 2017/12/11.
 */
@Service("stockService")
public class StockServiceImpl implements StockService{
    @Autowired
    private StockMapper stockMapper;

    public boolean updateByOrder(Stock stock) {
        return stockMapper.updateByOrder(stock);
    }
//    public boolean addNewStock(Stock){
//
//    };

}
