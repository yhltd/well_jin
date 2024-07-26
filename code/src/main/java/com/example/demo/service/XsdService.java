package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.Xsd;
import com.example.demo.entity.Yh;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface XsdService extends IService<Xsd> {

    /**
     * 查询所有
     */
    List<Xsd> getList();

    /**
     * 根据姓名和部门查询
     */
    List<Xsd> queryList(String ksrq,String jsrq);

    /**
     * 修改
     */
    boolean update(Xsd xsd);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

    /**
     * 添加
     */
    Xsd add(Xsd xsd);
    Xsd add1(Xsd xsd);

    /**
     * 获取当天销售单单价
     */
    List<Xsd> getDj(String dj);

    List<Xsd> getListByShdw(String shdw,String dh,String riqi);

}
