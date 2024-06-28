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

    @Select("select * from yingshouyingfu where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq})")
    List<Ysyf> queryList(String ksrq,String jsrq);

    @Update("update yingshouyingfu set riqi = #{riqi},shdh = #{shdh},khm = #{khm},ysqk = #{ysqk},yfqk = #{yfqk} where id = #{id}")
    boolean update(String riqi,String shdh,String khm,String ysqk,String yfqk,int id);

    @Delete("delete from yingshouyingfu where id=#{id}")
    boolean delete(int id);

    @Insert("insert into yingshouyingfu(riqi,shdh,khm,ysqk,yfqk) values(#{riqi},#{shdh},#{khm},#{ysqk},#{yfqk})")
    boolean add(String riqi,String shdh,String khm,String ysqk,String yfqk);

}
