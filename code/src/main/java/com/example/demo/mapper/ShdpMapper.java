package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.Shdp;
import com.example.demo.entity.Spmc;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author hui
 * @date 2024/8/7 18:24
 */
@Mapper
@Repository
public interface ShdpMapper extends BaseMapper<Shdp> {
    @Select("select * from shdprint")
    List<Shdp> getList();

    @Select("select count(*) from shdprint")
    int count1();

    @Insert("insert into shdprint(riqi,dh,shdw,mc,mh,gg,js,zl,dj,je,bz,shdz,kddh,sfyj,fkfs,sfhs,gd,zdr,shdwjjsr,jgf,kdf,hsdj,sd,whsdj,hjje,bzld,hjzl)" +
            " values(NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)")
    void add();

    @Update("update shdprint set riqi = #{riqi},dh = #{dh},shdw = #{shdw},mc = #{mc},mh = #{mh},gg = #{gg},js = #{js},zl = #{zl},dj = #{dj},je = #{je},bz = #{bz},shdz = #{shdz},kddh = #{kddh},sfyj = #{sfyj},fkfs = #{fkfs},sfhs = #{sfhs},gd = #{gd},zdr = #{zdr},shdwjjsr = #{shdwjjsr},jgf = #{jgf},kdf = #{kdf},hsdj = #{hsdj},sd = #{sd},whsdj = #{whsdj},hjje=#{hjje},bzld=#{bzld},hjzl=#{hjzl} where id=#{id}")
    boolean update(String riqi, String dh, String shdw, String mc, String mh, String gg, String js
            , String zl, String dj, String je, String bz, String shdz, String kddh, String sfyj, String fkfs, String sfhs, String gd,
                   String zdr, String shdwjjsr, String jgf, String kdf, String hsdj, String sd, String whsdj, String hjje, String bzld,
                   String hjzl, int id);

    @Delete("delete from shdprint ")
    void delete();

}
//    #{riqi},#{dh},#{shdw},#{mc},#{mh},#{gg},#{js},#{zl},#{dj},#{je},#{bz},#{shdz},#{kddh},#{sfyj},#{fkfs},#{sfhs}" +
//            ",,#{gd},#{zdr},#{shdwjjsr},#{jgf},#{kdf},#{hsdj},#{sd},#{whsdj}