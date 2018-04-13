package com.test.Service;

import com.test.Entity.*;
import com.test.Test.*;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class webservice {
    @Autowired
    public web instance;

    public Collection<Lacto> getLacto(String date) throws Exception{
        return instance.get_lacto(date);
    }
    public Collection<Teat_end> getTeat_end(String date) throws Exception{
        return instance.get_teat(date);
    }
    public Collection<Udder> getUdder(String date) throws Exception{
        return instance.get_udder(date);
    }
    public Collection<Unit_Alig> getUnit_Alig(String date) throws Exception{
        return instance.get_unit(date);
    }
    public Collection<Strip> getStrip(String date) throws Exception{
        return instance.get_strip(date);
    }
    public Collection<Post_milking> getPost_milking(String date) throws Exception{
        return instance.get_post(date);
    }
}