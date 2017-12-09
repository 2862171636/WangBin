package com.lanou.ServiceImpl;

import com.lanou.Service.CommentService;
import com.lanou.dao.CommentsMapper;
import com.lanou.entity.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by lanou on 2017/12/8.
 */

@Service("commentService")
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentsMapper commentsMapper;

    @Transactional
    public List<Comments> comments(Integer commentsId) {

        List<Comments> commentList = commentsMapper.findComments(commentsId);

        return commentList;
    }
}
