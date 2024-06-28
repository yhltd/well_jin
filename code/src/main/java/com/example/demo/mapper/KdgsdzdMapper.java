package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Dskh;
import com.example.demo.entity.Kdgsdzd;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface KdgsdzdMapper extends BaseMapper<Kdgsdzd> {

    @Select("select * from kuaidigongsiduizhangdan")
    List<Kdgsdzd> getList();

    @Select("select * from kuaidigongsiduizhangdan where khmc like '%'+#{khmc}+'%' and kddh like '%''+#{kddh}+%'")
    List<Kdgsdzd> queryList(String khmc,String kddh);

    @Update("update kuaidigongsiduizhangdan set riqi = #{riqi},khmc = #{khmc},dsje = #{dsje},kddh = #{kddh} where id = #{id}")
    boolean update(String riqi,String khmc,String dsje,String kddh,int id);

    @Delete("delete from kuaidigongsiduizhangdan where id=#{id}")
    boolean delete(int id);

    @Insert("insert into kuaidigongsiduizhangdan(riqi,khmc,dsje,kddh) values(#{riqi},#{khmc},#{dsje},#{kddh})")
    boolean add(String riqi,String khmc,String dsje,String kddh);

}
