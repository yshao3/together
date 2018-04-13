package com.test.Entity;

public class Unit_Alig {
    private String farm, date, observer;
    private Integer good, bad;
    public Unit_Alig(String farm, String date, String observer, Integer good, Integer bad){
        this.farm = farm;
        this.date = date;
        this.observer = observer;
        this.good = good;
        this.bad = bad;
    }
    public Unit_Alig(){}
    public String getFarm() {
        return farm;
    }

    public String getDate() {
        return date;
    }

    public String getObserver() {
        return observer;
    }

    public Integer getBad() {
        return bad;
    }

    public Integer getGood() {
        return good;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setFarm(String farm) {
        this.farm = farm;
    }

    public void setObserver(String observer) {
        this.observer = observer;
    }

    public void setBad(Integer bad) {
        this.bad = bad;
    }

    public void setGood(Integer good) {
        this.good = good;
    }
}
