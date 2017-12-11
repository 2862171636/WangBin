package com.lanou.Controller;

import com.lanou.Service.CommentService;
import com.lanou.Util.FastJson_All;
import com.lanou.entity.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lanou on 2017/12/8.
 */

@Controller
@RequestMapping("comments")
public class CommentsController {
    @Autowired
    private CommentService commentService;

    @RequestMapping("comments.do")
    public void commentsId(Integer productId, HttpServletResponse response){

        System.out.print("---------------_____--------__---_--_-_-------"+productId);
        Map maps = new HashMap();
        List<Comments> con = commentService.comments(productId);

        if (con.size()!=0){
            maps.put("success",con);

        }else {

            maps.put("error",con);
        }
        FastJson_All.toJson(maps,response);

    }

}
