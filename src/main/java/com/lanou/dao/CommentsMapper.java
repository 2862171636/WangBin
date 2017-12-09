package com.lanou.dao;

import com.lanou.entity.Comments;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */
public interface CommentsMapper {

    public List<Comments> findComments(Integer productId);

}
