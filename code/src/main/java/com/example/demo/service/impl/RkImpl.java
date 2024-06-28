package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Rk;
import com.example.demo.mapper.RkMapper;
import com.example.demo.service.RkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RkImpl extends ServiceImpl<RkMapper, Rk> implements RkService {
    @Autowired
    RkMapper rkMapper;

    @Override
    public List<Rk> getList() {
        return rkMapper.getList();
    }

    @Override
    public List<Rk> queryList(String ksrq,String jsrq) {
        return rkMapper.queryList(ksrq,jsrq);
    }

    @Override
    public boolean update(Rk rk) { return updateById(rk); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public Rk add(Rk rk) { return save(rk) ? rk : null; }

    @Override
    public List<Rk> getKcjj() {return rkMapper.getKcjj();}

}
