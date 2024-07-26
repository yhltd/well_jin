package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.Kc;
import com.example.demo.entity.Mx;
import com.example.demo.entity.Qc;
import com.example.demo.entity.Rk;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MxService extends IService<Mx> {
    /**
     * 查询所有
     */
    List<Mx> getList();
    /**
     * 根据日期查询
     */
    List<Mx> queryList(String ksrq, String jsrq);

    //增加
    Mx add(Mx mx);

    Mx add1(Mx mx);
    /**
     * 修改
     */
//    boolean update(String mc,String js,String zl,String je,String danhao);
    boolean update(Mx mx);
    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

}
