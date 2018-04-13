package com.test.Test;

import org.springframework.stereotype.Repository;

import java.sql.*;
@Repository
public class connection {
    public Connection conn = null;

    public connection()throws Exception{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false",
                "root","1234"
        );
        System.out.println(conn);
    }
    public String getAllTable() throws Exception{

        Statement s = conn.createStatement();
        String arr = "";
        ResultSet rs = s.executeQuery("show tables;");
        while (rs.next()) {
            arr+=rs.getNString(1);
        }
        return arr;
    }

}
