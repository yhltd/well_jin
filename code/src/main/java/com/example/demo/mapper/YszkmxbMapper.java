package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Yh;
import com.example.demo.entity.Ysyf;
import com.example.demo.entity.Yszkmxb;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface YszkmxbMapper extends BaseMapper<Yszkmxb> {

    @Select("select * from yingshouzhangkuanmingxi")
    List<Yszkmxb> getList();


    @Select("SELECT qhd.gsm, khzl.sfyj, khzl.sfhs, SUM ( CONVERT ( FLOAT, qhd.ysje ) )AS ysje, MONTH ( qhd.riqi ) AS yf, SUM ( CONVERT ( FLOAT, ysyf.skje ) )AS skje, khzl.qcye AS qcye FROM qianhuidan AS qhd, yingshouyingfu AS ysyf, kehuziliao AS khzl WHERE qhd.riqi= ysyf.riqi AND qhd.gsm= ysyf.gsm AND khzl.fuzhu = qhd.gsm AND khzl.fuzhu = ysyf.gsm AND qhd.bh = ysyf.bh group by qhd.gsm, khzl.sfyj, khzl.sfhs, khzl.qcye, qhd.riqi")
    List<Yszkmxb> getList1();


    @Insert("insert into yingshouzhangkuanmingxi(gsm\n" +
            "\n" +
            "        sfyj\n" +
            "\n" +
            "        sfhs\n" +
            "        qcye\n" +
            "        yyys\n" +
            "        yyyf\n" +
            "        eyys\n" +
            "        eyyf\n" +
            "        syys\n" +
            "        syyf\n" +
            "        siyys\n" +
            "        siyyf\n" +
            "        wyys\n" +
            "        wyyf\n" +
            "        lyys\n" +
            "        lyyf\n" +
            "        qyys\n" +
            "        qyyf\n" +
            "        byys\n" +
            "        byyf\n" +
            "        jyys\n" +
            "        jyyf\n" +
            "        shiyys\n" +
            "        shiyyf\n" +
            "        syyys\n" +
            "        syyyf\n" +
            "        seyys\n" +
            "        seyyf\n" +
            "\n" +
            "        ljysje\n" +
            "\n" +
            "        bnysje\n" +
            "\n" +
            "        ysyehj\n" +
            "        yf\n" +
            "        skje\n" +
            "        ysje) values(#{gsm},#{sfyj},#{sfhs},#{qcye},#{yyys},#{yyyf},#{eyys},#{eyyf},#{syys},#{syyf},#{siyys},#{siyyf},#{wyys},#{wyyf},#{lyys},#{lyyf},#{qyys},#{qyyf},#{byys},#{byyf},#{jyys},#{jyyf},#{shiyys},#{shiyyf},#{syyys},#{syyyf},#{seyys},#{seyyf},#{ljysje},#{bnysje},#{ysyehj},#{yf},#{skje},#{ysje})")
    boolean add(String gsm,
                String sfyj,
                String sfhs,
                String qcye,
                String yyys,
                String yyyf,
                String eyys,
                String eyyf,
                String syys,
                String syyf,
                String siyys,
                String siyyf,
                String wyys,
                String wyyf,
                String lyys,
                String lyyf,
                String qyys,
                String qyyf,
                String byys,
                String byyf,
                String jyys,
                String jyyf,
                String shiyys,
                String shiyyf,
                String syyys,
                String syyyf,
                String seyys,
                String seyyf,
                String ljysje,
                String bnysje,
                String ysyehj,
                String yf,
                String skje,
                String ysje);

    @Delete("delete from yingshouzhangkuanmingxi ")
    void delete();

}
