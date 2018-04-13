package com.test.Entity;

import java.util.HashMap;

public class Post_milking {
    private String farm, date, observer, group;
    private HashMap<String, String> teatSkin, teatColor, teatSwelling, teatHardness, teatScore;
    public Post_milking(String farm, String date, String observer, String group, HashMap<String, String> teatSkin,
                 HashMap<String, String> teatColor, HashMap<String, String> teatSwelling,
                 HashMap<String, String> teatHardness, HashMap<String, String> teatScore){
        this.farm = farm;
        this.date = date;
        this.observer = observer;
        this.group = group;
        this.teatColor = teatColor;
        this.teatSkin = teatSkin;
        this.teatSwelling = teatSwelling;
        this.teatHardness =teatHardness;
        this.teatScore = teatScore;
    }

    public String getFarm() {
        return farm;
    }

    public String getDate() {
        return date;
    }

    public String getObserver() {
        return observer;
    }

    public String getGroup() {
        return group;
    }

    public HashMap<String, String> getTeatColor() {
        return teatColor;
    }

    public HashMap<String, String> getTeatHardness() {
        return teatHardness;
    }

    public HashMap<String, String> getTeatScore() {
        return teatScore;
    }

    public HashMap<String, String> getTeatSkin() {
        return teatSkin;
    }

    public HashMap<String, String> getTeatSwelling() {
        return teatSwelling;
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

    public void setTeatColor(HashMap<String, String> teatColor) {
        this.teatColor = teatColor;
    }

    public void setTeatHardness(HashMap<String, String> teatHardness) {
        this.teatHardness = teatHardness;
    }

    public void setTeatScore(HashMap<String, String> teatScore) {
        this.teatScore = teatScore;
    }

    public void setTeatSkin(HashMap<String, String> teatSkin) {
        this.teatSkin = teatSkin;
    }

    public void setTeatSwelling(HashMap<String, String> teatSwelling) {
        this.teatSwelling = teatSwelling;
    }
}

