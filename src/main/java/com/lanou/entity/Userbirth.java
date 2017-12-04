package com.lanou.entity;

/**
 * Created by lanou on 2017/12/4.
 */
public class Userbirth {
    private  Integer dateid;
    private  Integer year;
    private  Integer month;
    private  Integer day;

    public Integer getDateid() {
        return dateid;
    }

    public void setDateid(Integer dateid) {
        this.dateid = dateid;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Userbirth() {
        super();
    }

    public Userbirth(Integer dateid, Integer year, Integer month, Integer day) {
        this.dateid = dateid;
        this.year = year;
        this.month = month;
        this.day = day;
    }

    @Override
    public String toString() {
        return "Userbirth{" +
                "dateid=" + dateid +
                ", year=" + year +
                ", month=" + month +
                ", day=" + day +
                '}';
    }
}
