package com.test.Test;

import com.test.Entity.*;
import org.springframework.stereotype.Repository;

import javax.lang.model.type.UnionType;
import java.sql.*;

import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

@Repository
public class web {


    public Connection getConn() throws  Exception{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false",
                "root","1234"
        );
        return conn;
    }
    public Collection<Teat_end> get_teat(String date)throws Exception{

        Connection conn = getConn();
        List<Teat_end> h = new ArrayList<>();
        String query = "select farm_id, date, staff_id, milker_id, isBefore, clean, deep, small_dirt, large_dirt " +
                "from cleanliness_fact where date=?;";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){

            Teat_end tmp = new Teat_end(rs.getString(1), rs.getString(2),
                    rs.getString(3), rs.getString(4), rs.getInt(5),
                    rs.getInt(6), rs.getInt(7), rs.getInt(8),
                    rs.getBoolean(9)
                    );

            h.add(tmp);
        }

        return h;
    }
    public Collection<Udder> get_udder(String date)throws Exception{

        Connection conn = getConn();
        List<Udder> h = new ArrayList<>();
        String query = "";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){
            Udder tmp = new Udder(rs.getString(1), rs.getString(2), rs.getString(3),
                    rs.getString(4), rs.getInt(5), rs.getInt(6), rs.getInt(7)
            , rs.getInt(8));

            h.add(tmp);
        }

        return h;
    }
    public Collection<Unit_Alig> get_unit(String date)throws Exception{

        Connection conn = getConn();
        List<Unit_Alig> h = new ArrayList<>();
        String query = "select farm_id, date, good, bad " +
                "from unit_fact where date=?";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){
            Unit_Alig tmp = new Unit_Alig(rs.getString(1),rs.getString(2),
                    "", rs.getInt(3),rs.getInt(4));

            h.add(tmp);
        }

        return h;
    }
    public Collection<Strip> get_strip(String date)throws Exception{

        Connection conn = getConn();
        List<Strip> h = new ArrayList<>();
        String query = "";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){
            Strip tmp = new Strip(rs.getString(1),rs.getString(2),
                    rs.getString(3), rs.getString(4),
                    rs.getString(5),rs.getBoolean(6));

            h.add(tmp);
        }

        return h;
    }
    public Collection<Post_milking> get_post(String date)throws Exception{
        Connection conn = getConn();
        List<Post_milking> h = new ArrayList<>();
        String query = "";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){
//            Post_milking tmp = new Post_milking();
        }

        return h;
    }
    public Collection<Lacto> get_lacto(String date)throws Exception{

        Connection conn = getConn();
        List<Lacto> h = new ArrayList<>();
        String query = "Select farm_id, dates, " +
                "parlor_type, pre_milking,procedures,milking_frequency,staff_id,prep, " +
                "milking_routine, total_milk, herd_size,size,dip_contact_time, lag_contact_stimulate, unit_on_time " +
                "from  lactocoder_fact " +
                "Where dates = ?;";
        PreparedStatement prep = conn.prepareStatement(query);
        prep.setString(1,date);
        ResultSet rs = prep.executeQuery();
        while (rs.next()){
            Lacto tmp = new Lacto(rs.getString(1), rs.getString(2),rs.getString(3),
                    rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7),
                    rs.getString(8), rs.getString(9), rs.getInt(10), 0,rs.getInt(11),
                    rs.getInt(12), rs.getInt(13), rs.getInt(14),
                    rs.getInt(15));

            h.add(tmp);
        }

        return h;
    }
}
