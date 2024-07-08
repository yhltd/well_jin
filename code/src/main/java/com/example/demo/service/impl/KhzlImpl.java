package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Khzl;
import com.example.demo.entity.UserInfo;
import com.example.demo.mapper.KhzlMapper;
import com.example.demo.service.KhzlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KhzlImpl extends ServiceImpl<KhzlMapper, Khzl> implements KhzlService {
    @Autowired
    KhzlMapper khzlMapper;

    @Override
    public List<Khzl> getList() {
        return khzlMapper.getList();
    }

    @Override
    public List<Khzl> queryList(String gsm) {
        return khzlMapper.queryList(gsm);
    }

    @Override
    public boolean update(Khzl khzl) { return updateById(khzl); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public Khzl add(Khzl khzl) { return save(khzl) ? khzl : null; }

    @Override
    public List<Khzl> hqxlGsm() {return khzlMapper.hqxlGsm();}

}
