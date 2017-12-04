package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class City {
    private Integer cityid;
    private String cityname;
    private Integer parentid;

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCityname() {
        return cityname;
    }

    public void setCityname(String cityname) {
        this.cityname = cityname;
    }

    public Integer getParentid() {
        return parentid;
    }

    public void setParentid(Integer parentid) {
        this.parentid = parentid;
    }

    public City() {
        super();
    }

    public City(Integer cityid, String cityname) {
        this.cityid = cityid;
        this.cityname = cityname;

    }

    @Override
    public String toString() {
        return "City{" +
                "cityid=" + cityid +
                ", cityname='" + cityname + '\'' +
                '}';
    }
}