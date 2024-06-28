package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("yingshouyingfu")
public class Ysyf {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 日期
     */
    private String riqi;
    /**
     * 送货单号
     */
    private String shdh;
    /**
     * 客户名
     */
    private String khm;
    /**
     * 应收欠款
     */
    private String ysqk;
    /**
     * 应付欠款
     */
    private String yfqk;

}
