package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.Ysyf;
import com.example.demo.entity.Yszkmxb;
import com.example.demo.service.YsyfService;
import com.example.demo.service.YszkmxbService;
import com.example.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/yszkmxb")
public class YszkmxbController {
    @Autowired
    private YszkmxbService yszkmxbService;

    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<Yszkmxb> getList = yszkmxbService.getList();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/getList1")
    public ResultInfo getList1(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<Yszkmxb> getList = yszkmxbService.getList1();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));

        try {
            Yszkmxb yszkmxb = GsonUtil.toEntity(gsonUtil.get("addInfo"), Yszkmxb.class);
            yszkmxb = yszkmxbService.add(yszkmxb);
            if (StringUtils.isNotNull(yszkmxb)) {
                return ResultInfo.success("添加成功", yszkmxb);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            log.error("参数：{}", map);
            return ResultInfo.error("添加失败");
        }
    }

    @RequestMapping("/delete")
    public void delete() {
               yszkmxbService.delete();
    }

}

