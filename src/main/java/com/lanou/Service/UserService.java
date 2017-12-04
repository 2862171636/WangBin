package com.lanou.Service;

import com.lanou.entity.User;

/**
 * Created by lanou on 2017/12/2.
 */
public interface UserService {

    public User confirmUser(String userName);

    public void addUser(User user);

}
