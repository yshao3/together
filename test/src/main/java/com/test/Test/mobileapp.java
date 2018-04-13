package com.test.Test;

import com.test.Entity.*;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Repository
public class mobileapp {
//    public Connection conn = null;


    public Connection getConn() throws  Exception{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false",
                "root","1234"
        );
        return conn;
    }

    public boolean post_teat(List<Teat_end> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Teat_end  tmp = data.get(i);
            String query = "insert into cleanliness_fact ( group_id, staff_id, milker_id, " +
                    "date, farm_id, isBefore, clean, deep, small_dirt, large_dirt)" +
                    "values(?,?,?,?,?,?,?,?,?,?)";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,"");
            prep.setString(2,tmp.getObserver());
            prep.setString(3,tmp.getMilker());
            prep.setString(4,tmp.getDate());
            prep.setString(5,tmp.getFarm());
            prep.setBoolean(6,tmp.isIsbefore());
            prep.setInt(7,tmp.getClean());
            prep.setInt(8,tmp.getDip());
            prep.setInt(9,tmp.getSmallDirt());
            prep.setInt(10,tmp.getLargeDirt());
            prep.executeUpdate();
        }

        return true;
    }
    public boolean post_udder(List<Udder> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Udder tmp = data.get(i);
            String query = "";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,tmp.getFarm());
            ResultSet rs = prep.executeQuery();
        }

        return true;
    }
    public boolean post_unit(List<Unit_Alig> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Unit_Alig tmp = data.get(i);
            String query = "insert into unit_fact(date, farm_id, good, bad) values(?,?,?,?);";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,tmp.getDate());
            prep.setString(2,tmp.getFarm());
            prep.setInt(3,tmp.getGood());
            prep.setInt(4,tmp.getBad());
            prep.executeUpdate();
        }

        return true;
    }
    public boolean post_strip(List<Strip> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Strip tmp = data.get(i);
            String query = "";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,tmp.getFarm());
            ResultSet rs = prep.executeQuery();
        }

        return true;
    }
    public boolean post_post(List<Post_milking> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Post_milking tmp = data.get(i);
            String query = "";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,tmp.getFarm());
            ResultSet rs = prep.executeQuery();
        }

        return true;
    }
    public boolean post_lacto(List<Lacto> data)throws Exception{
        Connection conn = getConn();
        for (int i = 0; i < data.size(); i++){
            Lacto tmp = data.get(i);

            String query = "insert into lactocoder_fact (staff_id,farm_id, parlor_type,size,no_operators,pre_milking,procedures," +
                    "prep,herd_size,milking_frequency,milking_routine,dates, dip,strip,wipe,attach,remove_,dip_contact_time," +
                    "lag_contact_stimulate,unit_on_time,total_milk,remark) " +
                    "values(?,?,?,?,?,?,?,?,?,?,?,?,?" +
                    ",?,?,?,?,?,?,?,?,?);";
            PreparedStatement prep = conn.prepareStatement(query);
            prep.setString(1,tmp.getOperaters());
            prep.setString(2,tmp.getFarm());
            prep.setString(3,tmp.getParlor());
            prep.setInt(4,tmp.getSize());
            prep.setInt(5,0);
            prep.setString(6,tmp.getPre_milking());
            prep.setString(7,tmp.getProcedures());
            prep.setString(8,tmp.getPrep());
            prep.setInt(9,tmp.getHerd_size());
            prep.setString(10,tmp.getFrequency());
            prep.setString(11,"");
            prep.setString(12,tmp.getDate());
            prep.setInt(13,0);
            prep.setInt(14,0);
            prep.setInt(15,0);
            prep.setInt(16,0);
            prep.setInt(17,0);
            prep.setInt(18,tmp.getDip_c_time());
            prep.setInt(19,tmp.getLag_time());
            prep.setInt(20,tmp.getUnit_time());
            prep.setInt(21,tmp.getMilk());
            prep.setString(22, "");

            prep.executeUpdate();

        }

        return true;
    }
}
