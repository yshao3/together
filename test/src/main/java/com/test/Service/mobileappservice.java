package com.test.Service;
import com.test.Entity.*;
import com.test.Test.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class mobileappservice {
    @Autowired
    public mobileapp instance;

    public boolean postLacto(List<Lacto> data) throws Exception{
        return instance.post_lacto(data);
    }
    public boolean postTeat_end(List<Teat_end> data) throws Exception{
        return instance.post_teat(data);
    }
    public boolean postUdder(List<Udder> data) throws Exception{
        return instance.post_udder(data);
    }
    public boolean postUnit_Alig(List<Unit_Alig> data) throws Exception{
        return instance.post_unit(data);

    }
    public boolean postStrip(List<Strip> data) throws Exception{
        return instance.post_strip(data);

    }
    public boolean postPost_milking(List<Post_milking> data) throws Exception{
        return instance.post_post(data);

    }
}
