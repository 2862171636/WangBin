package com.lanou.entity;

/**
 * Created by lanou on 2017/12/2.
 */
public class User {

    private Integer uId;
    private String userName;
    private String password;
    private int poneNum;

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

    @Override
    public String toString() {
        return "User{" +
                "uId=" + uId +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", poneNum=" + poneNum +
                '}';
    }

    public User() {
    }

    public User(Integer uId, String userName, String password, int poneNum) {
        this.uId = uId;
        this.userName = userName;
        this.password = password;
        this.poneNum = poneNum;
    }
}
