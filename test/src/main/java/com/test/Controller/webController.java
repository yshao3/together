package com.test.Controller;

import com.test.Entity.*;
import com.test.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;


@RestController
@RequestMapping("/web")
public class webController {
    @Autowired
    public webservice web;

    @CrossOrigin
    @RequestMapping(value = "/teat/{date}", method = RequestMethod.GET)
    public Collection<Teat_end> get_teat(@PathVariable("date") String date) throws Exception{

        return web.getTeat_end(date);

    }
    @CrossOrigin
    @RequestMapping(value = "/lacto/{date}", method = RequestMethod.GET)
    public Collection<Lacto> get_lacto(@PathVariable("date") String date) throws Exception{

        return web.getLacto(date);

    }
    @CrossOrigin
    @RequestMapping(value = "/post_milking/{date}   ", method = RequestMethod.GET)
    public Collection<Post_milking> get_post_milking(@PathVariable("date") String date) throws Exception{

        return web.getPost_milking(date);

    }
    @CrossOrigin
    @RequestMapping(value = "/strip/{date}   ", method = RequestMethod.GET)
    public Collection<Strip> get_strip(@PathVariable("date") String date) throws Exception{

        return web.getStrip(date);

    }
    @CrossOrigin
    @RequestMapping(value = "/udder/{date}   ", method = RequestMethod.GET)
    public Collection<Udder> get_udder(@PathVariable("date") String date) throws Exception{

        return web.getUdder(date);

    }
    @CrossOrigin
    @RequestMapping(value = "/unit/{date}", method = RequestMethod.GET)
    public Collection<Unit_Alig> get_unit(@PathVariable("date") String date) throws Exception{

        return web.getUnit_Alig(date);

    }



}
