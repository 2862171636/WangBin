package com.lanou.Service;

import com.lanou.entity.Comments;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */
public interface CommentService {
    public List<Comments> comments(Integer commentsId);

}
