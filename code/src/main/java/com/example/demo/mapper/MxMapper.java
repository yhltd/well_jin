package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Kc;
import com.example.demo.entity.Mx;
import com.example.demo.entity.Rk;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MxMapper extends BaseMapper<Mx> {
    @Select("select * from mingxi")
    List<Mx> getList();
    @Select("select * from mingxi where riqi >= convert(date,#{ksrq}) and riqi <= convert(date,#{jsrq})")
    List<Mx> queryList(String ksrq, String jsrq);

    @Insert({"insert into mingxi(riqi,mc,rkzl,rksl,rkdj,zje,gsm,ziduan,danhao) " +
            "values(#{riqi},#{mc},#{rkzl},#{rksl},#{gsm},#{ziduan},#{danhao}"})
    boolean add(String mc,String rkzl,String rksl,String gsm,String ziduan,String danhao);

    @Insert("insert into mingxi(mc,js,je,zl,ziduan,danhao) values(#{mc},#{js},#{zl},#{je},#{ziduan},#{danhao}")
    boolean add1(String mc,String js,String zl,String je,String ziduan,String danhao);

    @Update("update mingxi set mc = #{mc},js = #{js},je = #{je},zl = #{zl} where danhao = #{danhao}")
    boolean update(String mc,String js,String zl,String je,String danhao);

}
