package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("kuaidigongsiduizhangdan")
public class Kdgsdzd {
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
     * 客户名称
     */
    private String khmc;
    /**
     * 代收金额
     */
    private String dsje;
    /**
     * 快递单号
     */
    private String kddh;
}
