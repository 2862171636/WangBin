package com.lanou.entity;

import java.util.Date;

/**
 * Created by lanou on 2017/12/8.
 */
public class Comments {

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    private int cid;

    public String getContents() {
        return contents;
    }

    public void setContents(String contents) {
        this.contents = contents;
    }

    public String getAnswerFor() {
        return answerFor;
    }

    public void setAnswerFor(String answerFor) {
        this.answerFor = answerFor;
    }

    public Date getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(Date commentTime) {
        this.commentTime = commentTime;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    private String contents;
    private String answerFor;
    private Date commentTime;
    private User user;

    private Product product;



    public Comments(int cid, String contents, String answerFor, Date commentTime, User user, Product product) {
        this.cid = cid;
        this.contents = contents;
        this.answerFor = answerFor;
        this.commentTime = commentTime;
        this.user = user;
        this.product = product;
    }

    public Comments() {
        super();
    }

    @Override
    public String toString() {
        return "Comments{" +
                "cid=" + cid +
                ", contents='" + contents + '\'' +
                ", answerFor='" + answerFor + '\'' +
                ", commentTime=" + commentTime +
                ", user=" + user +
                ", product=" + product +
                '}';
    }
}
