package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("yingshouzhangkuanmingxi")
public class Yszkmxb {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;

    /**
     * 公司名
     */
    private String gsm;

    private String sfyj;

    private String sfhs;
    private String qcye;
    private String yyys;
    private String yyyf;
    private String eyys;
    private String eyyf;
    private String syys;
    private String syyf;
    private String siyys;
    private String siyyf;
    private String wyys;
    private String wyyf;
    private String lyys;
    private String lyyf;
    private String qyys;
    private String qyyf;
    private String byys;
    private String byyf;
    private String jyys;
    private String jyyf;
    private String shiyys;
    private String shiyyf;
    private String syyys;
    private String syyyf;
    private String seyys;
    private String seyyf;

    private String ljysje;

    private String bnysje;

    private String ysyehj;
    private String yf;
    private String skje;
    private String ysje;

}
