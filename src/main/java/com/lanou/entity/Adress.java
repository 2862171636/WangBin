package com.lanou.entity;

/**
 * Created by lanou on 2017/12/5.
 */
public class Adress {
    private  int uId;
    private String name;
    private  String email;
    private  Integer city;
    private  String detailAdress;
    private String telephone;
    private  String phone;
    private String building;
    private String code;
    private  Integer deleteId;

    public int getuId() {
        return uId;
    }

    public void setuId(int uId) {
        this.uId = uId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getCity() {
        return city;
    }

    public void setCity(int city) {
        this.city = city;
    }

    public String getDetailAdress() {
        return detailAdress;
    }

    public void setDetailAdress(String detailAdress) {
        this.detailAdress = detailAdress;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getBuilding() {
        return building;
    }

    public void setBuilding(String building) {
        this.building = building;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getDeleteId() {
        return deleteId;
    }

    public void setDeleteId(Integer deleteId) {
        this.deleteId = deleteId;
    }

    public Adress() {
        super();
    }

    public Adress(String name, String email, Integer city, String detailAdress, String telephone, String phone, String building, String code) {
        this.name = name;
        this.email = email;
        this.city = city;
        this.detailAdress = detailAdress;
        this.telephone = telephone;
        this.phone = phone;
        this.building = building;
        this.code = code;

    }

    @Override
    public String toString() {
        return "Adress{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", city=" + city +
                ", detailAdress='" + detailAdress + '\'' +
                ", telephone='" + telephone + '\'' +
                ", phone='" + phone + '\'' +
                ", building='" + building + '\'' +
                ", code='" + code + '\'' +
                ", deleteId=" + deleteId +
                '}';
    }
}
