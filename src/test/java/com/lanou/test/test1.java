package com.lanou.test;

import com.lanou.entity.Teacher;
import org.junit.Before;
import org.junit.Test;

public class test1 {
    @Before
    public void testBwefor(){
        System.out.println("bbbb");
    }
    @Test
    public void testcon(){
        Teacher teacher = new Teacher(1,"vjjs");
        System.out.println(teacher);
        System.out.println("aaaaa");
    }

	
	
}
