package com.test.Service;
import com.test.Test.connection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class tableservice {
    @Autowired
    public connection con;

    public String getAllTables() throws Exception{
        return con.getAllTable();
    }
}
