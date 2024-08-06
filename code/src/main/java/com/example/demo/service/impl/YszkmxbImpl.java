package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Yh;
import com.example.demo.entity.Ysyf;
import com.example.demo.entity.Yszkmxb;
import com.example.demo.mapper.YhMapper;
import com.example.demo.mapper.YsyfMapper;
import com.example.demo.mapper.YszkmxbMapper;
import com.example.demo.service.YhService;
import com.example.demo.service.YsyfService;
import com.example.demo.service.YszkmxbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YszkmxbImpl extends ServiceImpl<YszkmxbMapper, Yszkmxb> implements YszkmxbService {
    @Autowired
   YszkmxbMapper yszkmxbMapper;

    @Override
    public List<Yszkmxb> getList() {
        return yszkmxbMapper.getList();
    }
    @Override
    public List<Yszkmxb> getList1() {
        return yszkmxbMapper.getList1();
    }

    @Override
    public Yszkmxb add(Yszkmxb yszkmxb) { return save(yszkmxb) ? yszkmxb : null; }
    @Override
    public void delete() {
        yszkmxbMapper.delete();
    }
}
