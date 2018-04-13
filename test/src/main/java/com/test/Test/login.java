package com.test.Test;

import org.springframework.stereotype.Repository;

import java.sql.*;

@Repository
public class login {
    public Connection conn = null;
    public String url = "jdbc:mysql://localhost:3306/QMPS?autoReconnect=true&useSSL=false";
    public String user;
    public String password;
    public boolean success_login(String user, String password)throws Exception{
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        this.user = user;
        this.password = password;
        conn = DriverManager.getConnection(url,user,password);
        return true;
    }

}
