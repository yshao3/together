package com.test.Entity;

public class Strip {
    private String farm, date, observer, stall, ml;
    private boolean isbalance;
    public Strip(String farm, String date, String observer, String stall, String ml, boolean isbalance){
        this.farm = farm;
        this.date = date;
        this.observer = observer;
        this.stall = stall;
        this.ml = ml;
        this.isbalance = isbalance;
    }
    public String getObserver() {
        return observer;
    }

    public String getDate() {
        return date;
    }

    public String getFarm() {
        return farm;
    }

    public boolean isIsbalance() {
        return isbalance;
    }

    public String getMl() {
        return ml;
    }

    public String getStall() {
        return stall;
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

    public void setIsbalance(boolean isbalance) {
        this.isbalance = isbalance;
    }

    public void setMl(String ml) {
        this.ml = ml;
    }

    public void setStall(String stall) {
        this.stall = stall;
    }
}
