package com.lanou.Controller;

import com.lanou.Service.FirstClasessService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.FirstClasess;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/8.
 */

@Controller
@RequestMapping("clasess")
public class FirstClasessController {

    @Autowired
    private FirstClasessService firstClasessService;

    @RequestMapping("clasess.do")
    public void firstClasesses (int classId, int pages , HttpServletResponse response){
        System.out.print("+++:::::"+classId+"00000000000000");
        System.out.print("88888888888888888888888888888888888:::::"+pages+"00000000000000");

         Map maps = new HashMap();



         pages = (pages-1) * 2;

         List<FirstClasess> fClasesse = firstClasessService.findsParendIdAndPage(classId,pages);

         if (fClasesse.size()!=0){

             maps.put("success",fClasesse);

         }else {

             maps.put("error",fClasesse);

         }

        FastJson_All.toJson(maps,response);

    }


}
