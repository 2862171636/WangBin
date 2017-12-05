package com.lanou.entity;

import java.util.Date;
import java.util.List;

/**
 * Created by lanou on 2017/12/4.
 */
public class comment {
    private int commentId;
    private String commentContent;
    private Date commentTime;
    private int uId;
    private int pId;
    private int answerFor;//通过此id查找回复的是哪一条评论,如果无 说明是最父级
    private List<comment> answers;

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getCommentContent() {
        return commentContent;
    }

    public void setCommentContent(String commentContent) {
        this.commentContent = commentContent;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }

    public int getpId() {
        return pId;
    }

    public void setpId(int pId) {
        this.pId = pId;
    }

    public int getAnswerFor() {
        return answerFor;
    }

    public void setAnswerFor(int answerFor) {
        this.answerFor = answerFor;
    }

    public List<comment> getAnswers() {
        return answers;
    }

    public void setAnswers(List<comment> answers) {
        this.answers = answers;
    }

    public comment() {
    }

    @Override
    public String toString() {
        return "comment{" +
                "commentId=" + commentId +
                ", commentContent='" + commentContent + '\'' +
                ", commentTime=" + commentTime +
                ", uId=" + uId +
                ", pId=" + pId +
                ", answerFor=" + answerFor +
                ", answers=" + answers +
                '}';
    }
}

