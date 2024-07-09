package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Qhd;
import com.example.demo.entity.Ysyf;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface QhdMapper extends BaseMapper<Qhd> {

    @Select("select * from qianhuidan")
    List<Qhd> getList();

    @Select("select * from qianhuidan where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq})")
    List<Qhd> queryList(String ksrq,String jsrq);

    @Update("update qianhuidan set riqi = #{riqi},gsm = #{gsm},pm = #{pm},zl = #{zl},dj = #{dj},je = #{je} where id = #{id}")
    boolean update(String riqi,String gsm,String pm,String zl,String dj,String je,int id);

    @Delete("delete from qianhuidan where id=#{id}")
    boolean delete(int id);

    @Insert("insert into qianhuidan(riqi,gsm,pm,zl,dj,je,ysyf) values(#{riqi},#{gsm},#{pm},#{zl},#{dj},#{je})")
    boolean add(String riqi,String gsm,String pm,String zl,String dj,String je);

}
