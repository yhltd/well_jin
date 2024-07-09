package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Rk;
import com.example.demo.entity.Yh;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface RkMapper extends BaseMapper<Rk> {

    @Select("select * from ruku")
    List<Rk> getList();

    @Select("select * from ruku where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq})")
    List<Rk> queryList(String ksrq, String jsrq);

    @Update("update ruku set riqi = #{riqi},gsm = #{gsm},gys = #{gys},spmc = #{spmc},sl = #{sl},dj = #{dj},zl = #{zl},zje = #{zje},fkfs = #{fkfs} where id = #{id}")
    boolean update(String riqi, String gsm,String gys, String spmc, String sl, String dj, String zl, String zje, String fkfs, int id);

    @Delete("delete from ruku where id=#{id}")
    boolean delete(int id);

    @Insert("insert into ruku(riqi,gsm,gys,spmc,sl,dj,zl,zje,fkfs) values(#{riqi},#{gsm},#{gys},#{spmc},#{sl},#{dj},#{zl},#{zje},#{fkfs})")
    boolean add(String riqi, String gsm, String gys,String spmc, String sl, String dj, String zl, String zje, String fkfs);

//    @Select("select ((select SUM(cast(zje as FLOAT)) from ruku where riqi = CAST(DATEADD(day,-1,GETDATE()) as date))-(select SUM(cast(zl as FLOAT)) from xiaoshoudan where riqi = CAST(GETDATE() AS DATE))*(select round(sum(cast(sl AS FLOAT)) / sum(cast(zje AS FLOAT)),2) from ruku where riqi = CAST(DATEADD(day,-1,GETDATE()) as date))-(select round((SELECT SUM(cast(zje AS FLOAT)) FROM ruku WHERE riqi = CAST(GETDATE() AS DATE)) / (SELECT SUM(cast(zl AS FLOAT)) FROM ruku WHERE riqi = CAST(DATEADD(day,-1,GETDATE()) as DATE)),2))-(select sum(cast(zl AS FLOAT)) from xiaoshoudan where riqi = CAST(GETDATE() as date))+(select sum(cast(zl AS FLOAT)) from ruku where riqi = CAST(GETDATE() as date)))")
    @Select("select (select SUM(convert(float,zje)) as zje from ruku where riqi = CAST(DATEADD(day,-1,GETDATE()) as date))-(select SUM(convert(float,zl)) as zl from xiaoshoudan where riqi = convert(date,GETDATE()))*(select round(sum(convert(float,sl))/sum(convert(float,zje)),2) as cs from ruku where riqi = CAST(DATEADD(day,-1,GETDATE()) as date))-(SELECT round((SELECT SUM(convert(float,zje)) FROM ruku WHERE riqi = convert(date,GETDATE()))/(SELECT SUM(convert(float,zl)) FROM ruku WHERE riqi = CAST(DATEADD(day,-1,GETDATE()) as DATE)),2) as cs)-(select sum(convert(float,zl)) as zl from xiaoshoudan where riqi = convert(date,GETDATE()))+(select sum(convert(float,zl)) as zl from ruku where riqi = convert(date,GETDATE()))kcjj")
    List<Rk> getKcjj();
}
