package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.service.KhzlService;
import com.example.demo.service.QhdService;
import com.example.demo.service.ShdpService;
import com.example.demo.service.XsdService;
import com.example.demo.util.GsonUtil;
import com.example.demo.util.ResultInfo;
import com.example.demo.util.SessionUtil;
import com.example.demo.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author hui
 * @date 2024/8/8 9:38
 */
@Slf4j
@RestController
@RequestMapping("/shdp")
public class ShdpController {
    @Autowired
    private ShdpService shdpService;
    @Autowired
    private KhzlService khzlService;
    @Autowired
    private QhdService qhdService;
    @Autowired
    private XsdService xsdService;

    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<Shdp> getList = shdpService.getList();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    //    @RequestMapping("/add")
//    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//        try {
////            Shdp shdp = GsonUtil.toEntity(gsonUtil.get("dh"), Shdp.class);
//             shdpService.add();
//                return ResultInfo.success("添加成功", null);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("添加失败：{}", e.getMessage());
//            log.error("参数：{}", map);
//            return ResultInfo.error("添加失败");
//        }
//    }
    @RequestMapping("/add")
    public void add() {
        shdpService.add();
    }

    //修改数据
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(HttpSession session,  String riqi, String dh, String shdw, String mc, String mh, String gg, String js
            , String zl, String dj, String je, String bz, String shdz, String kddh, String sfyj, String fkfs, String sfhs, String gd,
                             String zdr, String shdwjjsr, String jgf, String kdf, String hsdj, String sd, String whsdj, String hjje,
                             String bzld, String hjzl, int id) {

        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            if (userInfo.getPower().equals("管理员")) {
                if (mc.equals("换铜块")) {
                    int jzl = Integer.parseInt(zl);
                    int yzl = Integer.parseInt(khzlService.gettkkc(shdw));
                    int xzl = yzl - jzl;
                    String tkkc = Integer.toString(xzl);
                    khzlService.tkkc(tkkc, shdw);
                    shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                            hsdj, sd, whsdj, hjje, bzld, hjzl, id);
//                    xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                            hsdj, sd, whsdj, hjje, bzld, hjzl);
                    if (fkfs.equals("签回单")) {
                        boolean list = qhdService.add1(riqi, shdw, hjje, bz, dh);
                        shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                hsdj, sd, whsdj, hjje, bzld, hjzl, id);
//                        xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                hsdj, sd, whsdj, hjje, bzld, hjzl);
                        return ResultInfo.success("添加成功", null);
                    }
                } else if (mc.equals("换铜渣")) {

                    int jzl = Integer.parseInt(zl);
                    int yzl = Integer.parseInt(khzlService.gettzkc(shdw));
                    int xzl = yzl - jzl;
                    String tzkc = Integer.toString(xzl);
                    khzlService.tzkc(tzkc, shdw);
//                    xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                            hsdj, sd, whsdj, hjje, bzld, hjzl);
                    shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                            hsdj, sd, whsdj, hjje, bzld, hjzl, id);
                    if (fkfs.equals("签回单")) {
                        qhdService.add1(riqi, shdw, hjje, bz, dh);
                        shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                hsdj, sd, whsdj, hjje, bzld, hjzl, id);
//                        xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                hsdj, sd, whsdj, hjje, bzld, hjzl);
                    }
                    return ResultInfo.success("添加成功", null);
                } else if (dj.equals("")) {
                    if (mc.equals("回收铜块")) {
                        int jzl = Integer.parseInt(zl);
                        int yzl = Integer.parseInt(khzlService.gettkkc(shdw));
                        int xzl = yzl + jzl;
                        String tkkc = Integer.toString(xzl);
                        khzlService.tkkc(tkkc, shdw);
//                        xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                hsdj, sd, whsdj, hjje, bzld, hjzl);
                        shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                hsdj, sd, whsdj, hjje, bzld, hjzl, id);
                        if (fkfs.equals("签回单")) {
                            qhdService.add1(riqi, shdw, hjje, bz, dh);
                            shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                    hsdj, sd, whsdj, hjje, bzld, hjzl, id);
//                            xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                    hsdj, sd, whsdj, hjje, bzld, hjzl);
                            return ResultInfo.success("添加成功", null);
                        }

                    } else if (mc.equals("回收铜渣")) {
                        int jzl = Integer.parseInt(zl);
                        int yzl = Integer.parseInt(khzlService.gettzkc(shdw));
                        int xzl = yzl + jzl;
                        String tzkc = Integer.toString(xzl);
                        khzlService.tzkc(tzkc, shdw);
//                        xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                hsdj, sd, whsdj, hjje, bzld, hjzl);
                        shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                hsdj, sd, whsdj, hjje, bzld, hjzl, id);
                        if (fkfs.equals("签回单")) {
                            qhdService.add1(riqi, shdw, hjje, bz, dh);
//                            xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                    hsdj, sd, whsdj, hjje, bzld, hjzl);
                            shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                    hsdj, sd, whsdj, hjje, bzld, hjzl, id);
                            return ResultInfo.success("添加成功", null);
                        }
                    }
                } else {
                    if (fkfs.equals("签回单")) {
                        qhdService.add1(riqi, shdw, hjje, bz, dh);
//                        xsdService.add2(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
//                                hsdj, sd, whsdj, hjje, bzld, hjzl);
                        shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                                hsdj, sd, whsdj, hjje, bzld, hjzl, id);
                        return ResultInfo.success("添加成功", null);
                    }
                }
            }
            if (shdpService.update(riqi, dh, shdw, mc, mh, gg, js, zl, dj, je, bz, shdz, kddh, sfyj, fkfs, sfhs, gd, zdr, shdwjjsr, jgf, kdf,
                    hsdj, sd, whsdj, hjje, bzld, hjzl, id)) {
                return ResultInfo.success("修改成功", riqi);
            } else {
                return ResultInfo.success("修改失败", riqi);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            return ResultInfo.error("修改失败");
        }
    }

    @RequestMapping("/delete")
    public void delete() {
        shdpService.delete();
    }


}
