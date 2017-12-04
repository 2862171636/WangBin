package com.lanou.Controller;

import com.lanou.ServiceImpl.TeacherServiceImpl;
import com.lanou.Service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lanou on 2017/12/1.
 */
@Controller
@RequestMapping("/teacher")
public class TeacherController{

    @Autowired
    private TeacherService teacherService;

    @RequestMapping("/find.do")
    public String findTeachers(Model model){
        model.addAttribute("teachers", teacherService.findTeachers());
        return "index";
    }

}
