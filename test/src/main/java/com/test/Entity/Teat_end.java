package com.test.Entity;

public class Teat_end {
    private String farm, date, observer, milker;
    private Integer clean, dip, smallDirt, largeDirt;
    private boolean isbefore;
    public Teat_end(String farm, String date, String observer, String milker, Integer clean, Integer dip,
             Integer smallDirt, Integer largeDirt, boolean isbefore){
        this.farm = farm;
        this.date = date;
        this.observer = observer;
        this.milker = milker;
        this.clean = clean;
        this.dip = dip;
        this.smallDirt = smallDirt;
        this.largeDirt = largeDirt;
        this.isbefore = isbefore;
    }
    public Teat_end(){}

    public String getFarm() {
        return farm;
    }

    public String getDate() {
        return date;
    }

    public String getObserver() {
        return observer;
    }

    public boolean isIsbefore() {
        return isbefore;
    }

    public Integer getClean() {
        return clean;
    }

    public Integer getDip() {
        return dip;
    }

    public Integer getLargeDirt() {
        return largeDirt;
    }

    public Integer getSmallDirt() {
        return smallDirt;
    }

    public String getMilker() {
        return milker;
    }

    public void setClean(Integer clean) {
        this.clean = clean;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setDip(Integer dip) {
        this.dip = dip;
    }

    public void setFarm(String farm) {
        this.farm = farm;
    }

    public void setIsbefore(boolean isbefore) {
        this.isbefore = isbefore;
    }

    public void setLargeDirt(Integer largeDirt) {
        this.largeDirt = largeDirt;
    }

    public void setMilker(String milker) {
        this.milker = milker;
    }

    public void setObserver(String observer) {
        this.observer = observer;
    }

    public void setSmallDirt(Integer smallDirt) {
        this.smallDirt = smallDirt;
    }

    @Override
    public String toString() {
        return "[farm: "+farm+", date: "+date+", observer: "+observer+", milker: "+milker+", clean: "+clean
                +" , dip:"+dip+", smallDirt: "+smallDirt+ ", largeDirt: "+largeDirt+", Isbefore: "+isbefore+"]" ;
    }
}
