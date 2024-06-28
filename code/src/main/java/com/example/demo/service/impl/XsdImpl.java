package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Xsd;
import com.example.demo.entity.Yh;
import com.example.demo.mapper.XsdMapper;
import com.example.demo.mapper.YhMapper;
import com.example.demo.service.XsdService;
import com.example.demo.service.YhService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class XsdImpl extends ServiceImpl<XsdMapper, Xsd> implements XsdService {
    @Autowired
    XsdMapper xsdMapper;

    @Override
    public List<Xsd> getList() {
        return xsdMapper.getList();
    }

    @Override
    public List<Xsd> queryList(String ksrq,String jsrq) {
        return xsdMapper.queryList(ksrq,jsrq);
    }

    @Override
    public boolean update(Xsd xsd) { return updateById(xsd); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public Xsd add(Xsd xsd) { return save(xsd) ? xsd : null; }

    @Override
    public List<Xsd> getDj(String dj) {return xsdMapper.getDj(dj);}

}
