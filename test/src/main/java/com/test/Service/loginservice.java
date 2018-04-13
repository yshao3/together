package com.test.Service;

import com.test.Test.login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class loginservice {
    @Autowired
    public login login;

    public boolean getAllTables(String user, String password) throws Exception{
        return login.success_login(user, password);
    }
}
