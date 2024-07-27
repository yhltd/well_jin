package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Khzl;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface KhzlMapper extends BaseMapper<Khzl> {

    @Select("select * from kehuziliao")
    List<Khzl> getList();

    @Select("select * from kehuziliao where gsm like '%'+#{gsm}+'%'")
    List<Khzl> queryList(String gsm);

    @Update("update kehuziliao set gsm = #{gsm},bh = #{bh},lxr = #{lxr},lxdh = #{lxdh},dz = #{dz},sfhs = #{sfhs},sfyj = #{sfyj},qcye = #{qcye},tzkc = #{tzkc},tkkc = #{tkkc},ysje = #{ysje},kddsje = #{kddsje} where id = #{id}")
    boolean update(String gsm,String bh,String lxr,String lxdh,String dz,String sfhs,String sfyj,String qcye,String tzkc,String tkkc,String ysje,String kddsje,int id);

    @Delete("delete from kehuziliao where id=#{id}")
    boolean delete(int id);

    @Insert("insert into kehuziliao(gsm,bh,lxr,lxdh,dz,sfhs,sfyj,qcye,tzkc,tkkc,ysje,kddsje) values(#{gsm},#{bh},#{lxr},#{lxdh},#{dz},#{sfhs},#{sfyj},#{qcye},#{tzkc},#{tkkc},#{ysje},#{kddsje})")
    boolean add(String gsm,String bh,String lxr,String lxdh,String dz,String sfhs,String sfyj,String qcye,String tzkc,String tkkc,String ysje,String kddsje);

//    List<Khzl> hqxlGsm();
    @Select("select gsm from kehuziliao")
    List<Khzl> hqxlGsm();
}
