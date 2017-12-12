package com.lanou.Controller;

import com.lanou.Service.LBTService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.LBT;
import org.apache.commons.io.FileUtils;
import org.aspectj.util.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by lanou on 2017/12/11.
 */
@Controller
@RequestMapping("/LBT")
public class LBTController {


    @Autowired
    private LBTService lbtService;

    @RequestMapping("/lbt.do")
    public void Lbt(Integer rId,HttpServletResponse response){
        List<LBT> lbts = (List<LBT>) lbtService.selectpId(0);
        FastJson_All.toJson(lbts,response);
    }


}
