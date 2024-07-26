package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Kc;
import com.example.demo.entity.Mx;
import com.example.demo.mapper.KcMapper;
import com.example.demo.mapper.MxMapper;
import com.example.demo.service.KcService;
import com.example.demo.service.MxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MxImpl extends ServiceImpl<MxMapper, Mx> implements MxService {
    @Autowired
    MxMapper mxMapper;

    @Override
    public List<Mx> getList() {
        return mxMapper.getList();
    }

    @Override
    public List<Mx> queryList(String ksrq, String jsrq) {
        return mxMapper.queryList(ksrq, jsrq);
    }

    @Override
    public Mx add(Mx mx) {
        return save(mx) ? mx : null;
    }

    @Override
    public Mx add1(Mx mx) {
        return save(mx) ? mx : null;
    }

//    @Override
//    public boolean update(String mc,String js,String zl,String je,String danhao) {
//        return mxMapper.update(mc,js,zl,je,danhao);
//    }
    @Override
    public boolean update(Mx mx) { return updateById(mx); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }
}
