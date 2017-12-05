package com.lanou.Controller;

import com.lanou.Service.SelectService;
import com.lanou.entity.Select;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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
    @ResponseBody
    public Map<String,Object> findName(String name){
      Map maps = new HashMap();
      List<Select> selects = selectService.findsNames(name);
      if (selects.size()!= 0){
          maps.put("seccess",selects);

      }else {

          maps.put("error",selects);

      }
      return maps;

    }


}
