package com.lanou.entity;

import java.util.List;

/**
 * Created by lanou on 2017/12/9.
 */
public class IDS {
    private List<Integer> Ids;
    private List<Integer> Ids2;

    @Override
    public String toString() {
        return "IDS{" +
                "Ids=" + Ids +
                ", Ids2=" + Ids2 +
                '}';
    }

    public List<Integer> getIds2() {
        return Ids2;
    }

    public void setIds2(List<Integer> ids2) {
        Ids2 = ids2;
    }

    public List<Integer> getIds() {
        return Ids;
    }

    public void setIds(List<Integer> Ids) {
        this.Ids = Ids;
    }

}