package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Cgx;
import com.example.demo.entity.Xsd;
import com.example.demo.mapper.CgxMapper;
import com.example.demo.mapper.XsdMapper;
import com.example.demo.service.CgxService;
import com.example.demo.service.XsdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CgxImpl extends ServiceImpl<CgxMapper, Cgx> implements CgxService {
    @Autowired
    CgxMapper cgxMapper;

    @Override
    public List<Cgx> getList() {
        return cgxMapper.getList();
    }

    @Override
    public List<Cgx> queryList(String ksrq,String jsrq) {
        return cgxMapper.queryList(ksrq,jsrq);
    }

    @Override
    public boolean update(Cgx cgx) { return updateById(cgx); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public List<Cgx> getListByShdw(String shdw,String dh,String riqi) {
        return cgxMapper.getListByShdw(shdw,dh,riqi);
    }

    @Override
    public Cgx add(Cgx cgx) { return save(cgx) ? cgx : null; }

//    @Override
//    public List<Cgx> getDj(String dj) {return cgxMapper.getDj(dj);}

//    @Override
//    public List<Cgx> getListByShdw(String shdw,String dh,String riqi) {
//        return cgxMapper.getListByShdw(shdw,dh,riqi);
//    }

}
