package com.test.Entity;

public class Lacto {
    private String farm, date, parlor, pre_milking, procedures, frequency, operaters, prep, routine;
    private Integer milk, cow, herd_size, size;
    private Integer Dip_c_time, Lag_time, Unit_time;
    public Lacto(String farm, String date, String parlor, String pre_milking, String procedures, String frequency,
          String operaters, String prep, String routine, Integer milk, Integer cow, Integer herd_size, Integer size,
          Integer Dip, Integer Lag, Integer Unit){
        this.farm = farm;
        this.date = date;
        this.parlor = parlor;
        this.pre_milking = pre_milking;
        this.procedures = procedures;
        this.frequency = frequency;
        this.operaters = operaters;
        this.prep = prep;
        this.routine = routine;
        this.milk = milk;
        this.cow = cow;
        this.herd_size = herd_size;
        this.size = size;
        this.Dip_c_time = Dip;
        this.Lag_time = Lag;
        this.Unit_time = Unit;
    }
    public Lacto(){}
    public Integer getCow() {
        return cow;
    }

    public Integer getDip_c_time() {
        return Dip_c_time;
    }

    public Integer getHerd_size() {
        return herd_size;
    }

    public Integer getLag_time() {
        return Lag_time;
    }

    public Integer getMilk() {
        return milk;
    }

    public Integer getSize() {
        return size;
    }

    public Integer getUnit_time() {
        return Unit_time;
    }

    public String getDate() {
        return date;
    }

    public String getFarm() {
        return farm;
    }

    public String getFrequency() {
        return frequency;
    }

    public String getOperaters() {
        return operaters;
    }

    public String getParlor() {
        return parlor;
    }

    public String getPre_milking() {
        return pre_milking;
    }

    public String getPrep() {
        return prep;
    }

    public String getProcedures() {
        return procedures;
    }

    public String getRoutine() {
        return routine;
    }

    public void setFarm(String farm) {
        this.farm = farm;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setCow(Integer cow) {
        this.cow = cow;
    }

    public void setDip_c_time(Integer dip_c_time) {
        Dip_c_time = dip_c_time;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public void setHerd_size(Integer herd_size) {
        this.herd_size = herd_size;
    }

    public void setLag_time(Integer lag_time) {
        Lag_time = lag_time;
    }

    public void setOperaters(String operaters) {
        this.operaters = operaters;
    }

    public void setMilk(Integer milk) {
        this.milk = milk;
    }

    public void setParlor(String parlor) {
        this.parlor = parlor;
    }

    public void setPre_milking(String pre_milking) {
        this.pre_milking = pre_milking;
    }

    public void setPrep(String prep) {
        this.prep = prep;
    }

    public void setProcedures(String procedures) {
        this.procedures = procedures;
    }

    public void setRoutine(String routine) {
        this.routine = routine;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public void setUnit_time(Integer unit_time) {
        Unit_time = unit_time;
    }

    @Override
    public String toString() {
        return "["+getDip_c_time()+","+getFarm()+","+getLag_time()+","+getHerd_size()+"]";
    }
}
