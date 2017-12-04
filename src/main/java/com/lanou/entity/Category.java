package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class Category {

    private int CategoryId;
    private String CategoryItem;
    private int CategoryRes;

    public int getCategoryId() {
        return CategoryId;
    }

    public void setCategoryId(int categoryId) {
        CategoryId = categoryId;
    }

    public String getCategoryItem() {
        return CategoryItem;
    }

    public void setCategoryItem(String categoryItem) {
        CategoryItem = categoryItem;
    }

    public int getCategoryRes() {
        return CategoryRes;
    }

    public void setCategoryRes(int categoryRes) {
        CategoryRes = categoryRes;
    }

    public Category() {
    }

    public Category(int categoryId, String categoryItem, int categoryRes) {
        CategoryId = categoryId;
        CategoryItem = categoryItem;
        CategoryRes = categoryRes;
    }

    @Override
    public String toString() {
        return "Category{" +
                "CategoryId=" + CategoryId +
                ", CategoryItem='" + CategoryItem + '\'' +
                ", CategoryRes=" + CategoryRes +
                '}';
    }
}
