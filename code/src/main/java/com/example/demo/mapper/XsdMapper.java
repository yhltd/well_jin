package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Xsd;
import com.example.demo.entity.Yh;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface XsdMapper extends BaseMapper<Xsd> {

    @Select("select * from xiaoshoudan")
    List<Xsd> getList();

    @Select("select * from xiaoshoudan where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq})")
    List<Xsd> queryList(String ksrq,String jsrq);

    @Update("update xiaoshoudan set riqi = #{riqi},dh = #{dh},shdw = #{shdw},mc = #{mc},mh = #{mh},gg = #{gg},js = #{js},zl = #{zl},dj = #{dj},je = #{je},bz = #{bz},shdz = #{shdz},kddh = #{kddh},sfyj = #{sfyj},fkfs = #{fkfs},sfhs = #{sfhs},gd = #{gd},zdr = #{zdr},shdwjjsr = #{shdwjjsr},jgf = #{jgf},kdf = #{kdf},hsdj = #{hsdj},sd = #{sd},whsdj = #{whsdj} where id = #{id}")
    boolean update(String riqi,String dh,String shdw,String mc,String mh,String gg,String js,String zl,String dj,String je,String bz,String shdz,String kddh,String sfyj,String fkfs,String sfhs,String gd,String zdr,String shdwjjsr,String jgf,String kdf,String hsdj,String sd,String whsdj,int id);

    @Delete("delete from xiaoshoudan where id=#{id}")
    boolean delete(int id);

    @Insert("insert into xiaoshoudan(riqi,dh,shdw,mc,mh,gg,js,zl,dj,je,bz,shdz,kddh,sfyj,fkfs,sfhs,gd,zdr,shdwjjsr,jgf,kdf,hsdj,sd,whsdj) values(#{riqi},#{dh},#{shdw},#{mc},#{mh},#{gg},#{js},#{zl},#{dj},#{je},#{bz},#{shdz},#{kddh},#{sfyj},#{fkfs},#{sfhs},#{gd},#{zdr},#{shdwjjsr},#{jgf},#{kdf},#{hsdj},#{sd},#{whsdj})")
    boolean add(String riqi,String dh,String shdw,String mc,String mh,String gg,String js,String zl,String dj,String je,String bz,String shdz,String kddh,String sfyj,String fkfs,String sfhs,String gd,String zdr,String shdwjjsr,String jgf,String kdf,String hsdj,String sd,String whsdj);

    @Insert("insert into mingxi(spmc,cksl,ckje,ziduan) values(#{spmc},#{ckcl},#{ckjg},#{ziduan}")
    boolean add1(String spmc,String ckcl,String ckjg,String ziduan);


    @Select("select DISTINCT dj from xiaoshoudan where riqi = convert(DATE,riqi)")
    List<Xsd> getDj(String dj);

    @Select("select * from xiaoshoudan where shdw=#{shdw} and dh=#{dh} and riqi=#{riqi}")
    List<Xsd> getListByShdw(String shdw,String dh,String riqi);



}
