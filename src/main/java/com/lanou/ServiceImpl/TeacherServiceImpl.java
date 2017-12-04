package com.lanou.ServiceImpl;

import com.lanou.Service.TeacherService;
import com.lanou.dao.TeacherMapper;
import com.lanou.entity.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

/**
 * Created by lanou on 2017/12/1.
 */
@Service("teacherService")
public class TeacherServiceImpl implements TeacherService{

    @Autowired
    private TeacherMapper teacherMapper;

    public List<Teacher> findTeachers() {
         List<Teacher> teachers = teacherMapper.findTeachers();


        return teachers;
    }
}
