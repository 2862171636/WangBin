package com.lanou.entity;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * Created by lanou on 2017/12/2.
 */
public class User {

    private Integer uId;
    private String userName;
    private String password;
    private int poneNum;

    @DateTimeFormat(pattern="yyyy/MM/dd HH")
    private Date birth;
    private  int gener;
    private  String email;
    private  String name;
    private  String detailed;
    private  int road;

    public int getRoad() {
        return road;
    }

    public void setRoad(int road) {
        this.road = road;
    }

    public Date getBirth() {
        return birth;
    }

    public void setBirth(Date birth) {
        this.birth = birth;
    }

    public int getGener() {
        return gener;
    }

    public void setGener(int gener) {
        this.gener = gener;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetailed() {
        return detailed;
    }

    public void setDetailed(String detailed) {
        this.detailed = detailed;
    }

    public Integer getuId() {
        return uId;
    }

    public void setuId(Integer uId) {
        this.uId = uId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPoneNum() {
        return poneNum;
    }

    public void setPoneNum(int poneNum) {
        this.poneNum = poneNum;
    }



    public User() {
    }

    public User(Integer uId, String userName, String password, int poneNum) {
        this.uId = uId;
        this.userName = userName;
        this.password = password;
        this.poneNum = poneNum;
    }

    @Override
    public String toString() {
        return "User{" +
                "uId=" + uId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", poneNum=" + poneNum +
                ", birth=" + birth +
                ", gener=" + gener +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", detailed='" + detailed + '\'' +
                ", road=" + road +
                '}';
    }
}