package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.Yh;
import com.example.demo.entity.Ysyf;
import com.example.demo.entity.Yszkmxb;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface YszkmxbService extends IService<Yszkmxb> {

    /**
     * 查询所有
     */
    List<Yszkmxb> getList();
    List<Yszkmxb> getList1();

    Yszkmxb add(Yszkmxb yszkmxb);
    void delete();
}
