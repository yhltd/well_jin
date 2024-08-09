package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;

import com.example.demo.entity.Shdp;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author hui
 * @date 2024/8/7 18:35
 */
@Service
public interface ShdpService extends IService<Shdp> {
    List<Shdp> getList();

    int count1();

    void add();

    boolean update(String riqi,String dh,String shdw,String mc,String mh,String gg,String js
            ,String zl,String dj,String je,String bz,String shdz,String kddh,String sfyj,String fkfs,String sfhs,String gd,
                   String zdr,String shdwjjsr ,String jgf,String kdf,String hsdj,String sd,String whsdj,String hjje,String bzld,
                   String hjzl,int id);

    void delete();
}
