package com.lanou.entity;

/**
 * Created by lanou on 2017/12/5.
 */
public class Adress {
    private  int dId;
    private  int u_id;
    private String aname;
    private  String email;
    private  Integer city;
    private  String detailAdress;
    private String telephone;
    private  String phone;
    private String building;
    private String codes;
    private  Integer deleteId;

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }

    public int getdId() {
        return dId;
    }

    public void setdId(int dId) {
        this.dId = dId;
    }

    public String getName() {
        return aname;
    }

    public void setName(String name) {
        this.aname = aname;
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
        return codes;
    }

    public void setCode(String code) {
        this.codes = codes;
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

    public Adress(String aname, String email, Integer city, String detailAdress, String telephone, String phone, String building, String codes) {
        this.aname = aname;
        this.email = email;
        this.city = city;
        this.detailAdress = detailAdress;
        this.telephone = telephone;
        this.phone = phone;
        this.building = building;
        this.codes = codes;
    }

    @Override
    public String toString() {
        return "Adress{" +
                "dId=" + dId +
                ", aname='" + aname + '\'' +
                ", email='" + email + '\'' +
                ", city=" + city +
                ", detailAdress='" + detailAdress + '\'' +
                ", telephone='" + telephone + '\'' +
                ", phone='" + phone + '\'' +
                ", building='" + building + '\'' +
                ", codes='" + codes + '\'' +

                '}';
    }
}
