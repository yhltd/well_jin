package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Yh;
import com.example.demo.entity.Ysyf;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface YsyfMapper extends BaseMapper<Ysyf> {

    @Select("select * from yingshouyingfu")
    List<Ysyf> getList();

    @Select("select * from yingshouyingfu where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq}) and gsm =#{gsm}")
    List<Ysyf> queryList(String ksrq,String jsrq,String gsm);

    @Update("update yingshouyingfu set riqi = #{riqi},gsm = #{gsm},skje = #{skje},zys = #{zys},bz = #{bz},fkriqi = #{fkriqi} where id = #{id}")
    boolean update(String riqi,String gsm,String skje,String zys,String bz,String fkriqi,int id);

    @Delete("delete from yingshouyingfu where id=#{id}")
    boolean delete(int id);

    @Insert("insert into yingshouyingfu(riqi,gsm,pm,zl,dj,je,ysyf) values(#{riqi},#{gsm},#{pm},#{zl},#{dj},#{je},#{ysyf})")
    boolean add(String riqi,String gsm,String pm,String zl,String dj,String je,String ysyf);

//    @Insert("insert into yingshouyingfu(riqi,fkriqi) values(#{riqi},#{gsm},#{pm},#{zl},#{dj},#{je},#{ysyf})")
//    boolean add(String riqi,String gsm,String pm,String zl,String dj,String je,String ysyf);




}
