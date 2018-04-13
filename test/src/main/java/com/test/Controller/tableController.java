package com.test.Controller;
import com.test.Service.tableservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/Alltables")
public class tableController {
    @Autowired
    public tableservice table;

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET)
    public String getAllTables() throws Exception{
        return table.getAllTables();
    }
}
