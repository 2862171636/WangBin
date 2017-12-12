package com.lanou.dao;

import com.lanou.entity.User;

import java.util.Date;

/**
 * Created by lanou on 2017/12/2.
 */
public interface UserMapper {

    public User confirmUser(String userName);
    public void addUser(User user);
    public void updateUser(User user);
    public void updatePassword(User user);
    public int confirmUserType(User user);
    public boolean updateHeadImgUrl(User user);
    public User findUserByuId(Integer uId);

}
