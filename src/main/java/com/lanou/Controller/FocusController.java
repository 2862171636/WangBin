package com.lanou.Controller;

import com.lanou.Service.FocusService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Focus;
import com.lanou.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;

/**
 * Created by lanou on 2017/12/9.
 */
@Controller
@RequestMapping(value = "/focus")
public class FocusController {
    @Autowired
    private FocusService focusService;

    @RequestMapping(value = "/find.do")
    public void findFocusList(int uId, HttpServletResponse response){
        FastJson_All.toJson(focusService.findFocusList(uId),response);
    }

    @RequestMapping(value = "/add.do")
    public void addToFocus(int uId,int pId,HttpServletResponse response){
        Focus focus = new Focus();
        focus.setuId(uId);
        Product product = new Product();
        product.setpId(pId);
        focus.setProduct(product);
        FastJson_All.toJson(focusService.addToFocus(focus),response);
    };
    @RequestMapping(value = "/delete.do")
    public void deleteFocus(int focusId,HttpServletResponse response){
        FastJson_All.toJson(focusService.deleteFocus(focusId),response);
    };
    @RequestMapping(value = "/disFocus.do")
    public void deleteFocus(int uId,int pId,HttpServletResponse response){
        Focus focus = new Focus();
        focus.setuId(uId);
        Product product = new Product();
        product.setpId(pId);
        focus.setProduct(product);
        FastJson_All.toJson(focusService.disFocus(focus),response);
    };
}
