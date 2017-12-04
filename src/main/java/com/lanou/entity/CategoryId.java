package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class CategoryId {

    private int categoryId;
    private String categoryItem;
    private  int categoryRes;



    public String getCategoryItem() {
        return categoryItem;
    }

    public void setCategoryItem(String categoryItem) {
        this.categoryItem = categoryItem;
    }

    public int getCategoryRes() {
        return categoryRes;
    }

    public void setCategoryRes(int categoryRes) {
        this.categoryRes = categoryRes;
    }

    public CategoryId() {
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public CategoryId(int categoryId, String categoryItem, int categoryRes) {
        this.categoryId = categoryId;
        this.categoryItem = categoryItem;
        this.categoryRes = categoryRes;
    }

    @Override
    public String toString() {
        return "CategoryId{" +
                "categoryId=" + categoryId +
                ", categoryItem='" + categoryItem + '\'' +
                ", categoryRes=" + categoryRes +
                '}';
    }
}
