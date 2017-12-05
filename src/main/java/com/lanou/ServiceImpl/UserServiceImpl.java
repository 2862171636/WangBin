package com.lanou.ServiceImpl;

import com.lanou.Service.UserService;
import com.lanou.dao.UserMapper;
import com.lanou.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * Created by lanou on 2017/12/2.
 */
@Service("userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Transactional
    public User confirmUser(String userName) {

        return userMapper.confirmUser(userName);
    }

    public void addUser(User user) {

        userMapper.addUser(user);

    }

    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

    public void updatePassword(User user) {
        userMapper.updatePassword(user);
    }


}
