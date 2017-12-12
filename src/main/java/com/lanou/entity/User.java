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
    private String poneNum;
    private String headImgUrl;

    @DateTimeFormat(pattern="yyyy/MM/dd HH")
    private Date birth;
    private  int gener;
    private  String email;
    private  String name;
    private  String detailed;
    private  int road;
    private int userType;

    public int getUserType() {
        return userType;
    }

    public void setUserType(int userType) {
        this.userType = userType;
    }

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

    public String getPoneNum() {
        return poneNum;
    }

    public void setPoneNum(String poneNum) {
        this.poneNum = poneNum;
    }

    public String getHeadImgUrl() {
        return headImgUrl;
    }

    public void setHeadImgUrl(String headImgUrl) {
        this.headImgUrl = headImgUrl;
    }

    public User() {
    }


    @Override
    public String toString() {
        return "User{" +
                "uId=" + uId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", poneNum='" + poneNum + '\'' +
                ", headImgUrl='" + headImgUrl + '\'' +
                ", birth=" + birth +
                ", gener=" + gener +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", detailed='" + detailed + '\'' +
                ", road=" + road +
                ", userType=" + userType +
                '}';
    }
}