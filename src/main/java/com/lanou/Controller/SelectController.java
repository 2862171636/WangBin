package com.lanou.Controller;

import com.lanou.Service.SelectService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/5.
 */
@Controller
@RequestMapping("/select")
public class SelectController {

    @Autowired
    private SelectService selectService;

    @RequestMapping("/select.do")
    public void findName(String name,HttpServletResponse response){
      Map maps = new HashMap();
      List<String> selects = selectService.findsNames(name);
      if (selects.size()!= 0){
          maps.put("seccess",selects);

      }else {

          maps.put("error",selects);

      }
      FastJson_All.toJson(maps,response);

    }

    @RequestMapping("/lists.do")
    public void ListNames(String listname,HttpServletResponse response) {

        Map maps = new HashMap();
        response.setContentType("text/html;charset=UTF-8");
        List<String> lists = selectService.listName(listname);

        if (lists.size()!=0){

            maps.put("success",lists);
        }else {

            maps.put("error",lists);
        }


        FastJson_All.toJson(maps,response);
    }


}
