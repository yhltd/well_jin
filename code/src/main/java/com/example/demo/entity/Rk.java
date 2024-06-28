package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("ruku")
public class Rk {
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
     * 公司名
     */
    private String gsm;
    /**
     * 商品名称
     */
    private String spmc;
    /**
     * 数量
     */
    private String sl;
    /**
     * 单价
     */
    private String dj;
    /**
     * 重量
     */
    private String zl;
    /**
     * 总金额
     */
    private String zje;
    /**
     * 付款方式
     */
    private String fkfs;
    /**
     * 库存均价
     */
//    private String kcjj;
}
