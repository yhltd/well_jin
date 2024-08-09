package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.Rk;
import com.example.demo.entity.Shdp;
import com.example.demo.mapper.ShdpMapper;
import com.example.demo.service.ShdpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author hui
 * @date 2024/8/8 9:26
 */
@Service
public class ShdpImpl extends ServiceImpl<ShdpMapper, Shdp> implements ShdpService {
    @Autowired
    ShdpMapper shdpMapper;

    @Override
    public List<Shdp> getList() {
        return shdpMapper.getList();
    }

    @Override
    public int count1() {
        return shdpMapper.count1();
    }
    @Override
    public void add() { shdpMapper.add(); }

    @Override
    public boolean update(String riqi,String dh,String shdw,String mc,String mh,String gg,String js
            ,String zl,String dj,String je,String bz,String shdz,String kddh,String sfyj,String fkfs,String sfhs,String gd,
                          String zdr,String shdwjjsr ,String jgf,String kdf,String hsdj,String sd,String whsdj,String hjje,
                          String bzld,String hjzl,
                          int id) {
        return shdpMapper.update(riqi,dh,shdw,mc,mh,gg,js,zl,dj,je,bz,shdz,kddh,sfyj,fkfs,sfhs,gd,zdr,shdwjjsr,jgf,kdf,
                hsdj,sd,whsdj,hjje,bzld,hjzl,id);
    }
    @Override
    public void delete() {
        shdpMapper.delete();
    }

}
