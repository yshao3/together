package com.test.Controller;
import com.test.Entity.*;
import com.test.Service.*;
import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/mobile")
public class mobileController {
    @Autowired
    public mobileappservice mobile;

    @CrossOrigin
    @RequestMapping(value = "/teat", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_teat(@RequestBody List<Teat_end> data) throws Exception{
        System.out.print(data);
        return mobile.postTeat_end(data);
    }
    @CrossOrigin
    @RequestMapping(value = "/lacto", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_latco(@RequestBody List<Lacto> data) throws Exception{
        System.out.println(data);
        return mobile.postLacto(data);
    }
    @CrossOrigin
    @RequestMapping(value = "/udder", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_udder(@RequestBody List<Udder> data) throws Exception{
        return mobile.postUdder(data);
    }
    @CrossOrigin
    @RequestMapping(value = "/post", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_post(@RequestBody List<Post_milking> data) throws Exception{
        return mobile.postPost_milking(data);
    }
    @CrossOrigin
    @RequestMapping(value = "/strip", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_strip(@RequestBody List<Strip> data) throws Exception{
        return mobile.postStrip(data);
    }
    @CrossOrigin
    @RequestMapping(value = "/unit", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean post_unit(@RequestBody List<Unit_Alig> data) throws Exception{
        return mobile.postUnit_Alig(data);
    }
}
