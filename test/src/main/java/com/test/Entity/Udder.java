package com.test.Entity;

public class Udder {
    private String farm, date, observer, group;
    private Integer clean, slightlyDirt, moderatelyDirt, cakedOnDirt;
    public Udder(String farm, String date, String observer, String group, Integer clean, Integer slightlyDirt,
    Integer moderatelyDirt, Integer cakedOnDirt){
        this.farm = farm;
        this.date = date;
        this.observer = observer;
        this.group = group;
        this.clean = clean;
        this.slightlyDirt = slightlyDirt;
        this.moderatelyDirt = moderatelyDirt;
        this.cakedOnDirt = cakedOnDirt;
    }
    public Udder(){}
    public Integer getClean() {
        return clean;
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

    public Integer getCakedOnDirt() {
        return cakedOnDirt;
    }

    public Integer getModeratelyDirt() {
        return moderatelyDirt;
    }

    public Integer getSlightlyDirt() {
        return slightlyDirt;
    }

    public String getGroup() {
        return group;
    }

    public void setObserver(String observer) {
        this.observer = observer;
    }

    public void setFarm(String farm) {
        this.farm = farm;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setGroup(String group) {
        this.group = group;
    }

    public void setClean(Integer clean) {
        this.clean = clean;
    }

    public void setCakedOnDirt(Integer cakedOnDirt) {
        this.cakedOnDirt = cakedOnDirt;
    }

    public void setModeratelyDirt(Integer moderatelyDirt) {
        this.moderatelyDirt = moderatelyDirt;
    }

    public void setSlightlyDirt(Integer slightlyDirt) {
        this.slightlyDirt = slightlyDirt;
    }
}
