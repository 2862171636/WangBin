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

    //@Transactional
    public void addUser(User user) {

        userMapper.addUser(user);

    }
    @Transactional
    public void updateUser(User user) {
        userMapper.updateUser(user);
    }
    @Transactional

    public void updatePassword(User user) {
        userMapper.updatePassword(user);
    }

    public int confirmUserType(User user) {
        return userMapper.confirmUserType(user);
    }

    public boolean updateHeadImgUrl(User user) {
        return userMapper.updateHeadImgUrl(user);
    }

    public User findUserByuId(Integer uId) {
        return userMapper.findUserByuId(uId);
    }


}
