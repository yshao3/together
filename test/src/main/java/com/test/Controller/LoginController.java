package com.test.Controller;

import com.test.Service.loginservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Login")

public class LoginController {
    @Autowired
    public loginservice login;

    @CrossOrigin
    @RequestMapping(value="/{user}/{password}",method = RequestMethod.GET)
    public boolean getAllTables(@PathVariable("user") String user, @PathVariable("password") String password) throws Exception{
        return login.getAllTables(user, password);
    }
    @CrossOrigin
    @RequestMapping(value ="/{tablename}", method = RequestMethod.GET)
    public boolean getFirstTable(@PathVariable("tablename") String tablename) throws  Exception{
        return login.getAllTables(tablename, tablename);
    }
}
