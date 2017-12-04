package com.lanou.entity;

/**
 * Created by lanou on 2017/12/2.
 */
public class Teacher {
    private Integer tId;
    private String teacherName;

    public Teacher(Integer tId, String teacherName) {
        this.tId = tId;
        this.teacherName = teacherName;
    }

    public Teacher() {
    }

    public Integer gettId() {
        return tId;
    }

    public void settId(Integer tId) {
        this.tId = tId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "tId=" + tId +
                ", teacherName='" + teacherName + '\'' +
                '}';
    }
}
