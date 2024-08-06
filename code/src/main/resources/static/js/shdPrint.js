var aa;
let count = 1;
var arr = {};
function getGsm() {
    $ajax({
        type: 'post',
        url: '/khzl/hqxlGsm',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-shdw").append("<option>" + res.data[i].gsm + "</option>");
                // $("#update-shdw").append("<option>" + res.data[i].gsm + "</option>");
            }
        }
    })
}
// function hqgd() {
//     var shdw =document.getElementById("add-shdw").value
//     $ajax({
//         type: 'post',
//         url: '/khzl/hqgd',
//         data: JSON.stringify({
//             shdw: shdw
//         })
//     })
//
// }


function getMc() {
    $ajax({
        type: 'post',
        url: '/spmc/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-mc").append("<option>" + res.data[i].mc + "</option>");
                // $("#update-mc").append("<option>" + res.data[i].mc + "</option>");
            }
        }
    })
// }
// function hqgd() {
//     var shdw = document.getElementById("add-shdw").value;
//     $ajax({
//         type: 'post',
//         url: '/khzl/hqgd',
//         data: JSON.stringify ({
//             shdw: shdw,
//         })
//     }, true, '', function (res) {
//         var gd = res.data[0].gd
//         document.getElementById("add-gd").value=gd;
//
//     })
}
function getriqi(){
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
}

$(function () {
    getMc();
    getGsm();
    // this_kuan = $('table').width();
    //打印
    $('#print-btn').click(function () {
        var msg = confirm("确认要打印吗？");
        if (msg) {
            $ajax({
                type: 'post',
                url: '/xsd/add',
                data: JSON.stringify({
                    addInfo: arr
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            })

            // $('table').width(this_kuan)
            // $('.table-div').width(this_kuan)
            $('#select-btn').hide();
            $('#print-btn').hide();
            $('#dqy').hide();
            $('#sfyjlab').hide();
            $('#sfyj').hide();
            // var newstr = window.document.getElementById("div").innerHTML;
            // var oldstr = window.document.body.innerHTML;
            // document.body.innerHTML = newstr;
            window.print();
            // document.body.innerHTML = oldstr;
            // window.location.reload();
            // return false;
        }
    else {
            $ajax({
                type: 'post',
                url: '/cgx/add',
                data: JSON.stringify({
                    addInfo: arr
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            })
        }

    });

    $ajax({
        type: 'post',
        url: '/user/getName',
    }, false, '', function (res) {
        var this_name = res.data
        // document.getElementById("zdr").append = this_name;
        $("#zdr").append(this_name);
    });


    //选择数据
    $('#select-btn').click(function () {
        $ajax({
            type: 'post',
            url: '/cgx/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                $('#shdPrint-modal').modal('show');
            }
        })
    });
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');

        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        var aa = `${year}${month}${day}${hours}${minutes}${seconds}`;
        document.getElementById('add-dh').value = aa;

        $ajax({
            type: 'post',
            url: '/user/getName',
        }, false, '', function (res) {
            var this_name = res.data
            $("#add-zdr").val = this_name
            document.getElementById("add-zdr").value = this_name
        })

        //未含税锁定
        document.getElementById('add-sfhs').addEventListener('change', function () {
            var selectedOption = this.value;
            var textBoxes = document.querySelectorAll('input[type="text"]');
            // 根据选择的option值锁定对应的文本框
            if (selectedOption === '未含税') {
                document.getElementById('add-hsdj').disabled = true;
                document.getElementById('add-sd').disabled = true;
                document.getElementById('add-whsdj').disabled = false;
            } else {
                document.getElementById('add-whsdj').disabled = true;
                document.getElementById('add-hsdj').disabled = false;
                document.getElementById('add-sd').disabled = false;
                var sd = document.getElementById('add-sd');
                sd.value = 1.1;
            }
        });
    });

//新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });
//新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        // hqgd();
        var js = parseFloat(document.getElementById('add-js').value);
        var zl = parseFloat(document.getElementById('add-zl').value);
        var dj = parseFloat(document.getElementById('add-dj').value);
        var kdf = parseFloat(document.getElementById("add-kdf").value);
        var je = js * zl * dj;
        if(isNaN(je)){
            document.getElementById("add-je").value ="";
        }else {
            document.getElementById("add-je").value = je
        }
        var js = parseFloat(document.getElementById('add-js').value);
        var jgf = js * 0.5
        document.getElementById("add-jgf").value = jgf
        var hjje = je +jgf+ kdf
        if(isNaN(hjje)){
            document.getElementById("add-hjje").value="";
        }else {
            document.getElementById("add-hjje").value = hjje
        }
        if (parseFloat(document.getElementById('add-sd').value) != 0) {
            var hsdj = parseFloat(document.getElementById('add-hsdj').value);
            var sd = parseFloat(document.getElementById('add-sd').value);
            var whsdj = hsdj / sd
            document.getElementById("add-whsdj").value = whsdj
        }


        let rows = getData("#add-form")

        // $ajax({
        //     type: 'post',
        //     url: '/cgx/print',
        //     data: JSON.stringify({
        //         list: rows
        //     }),
        //     dataType: 'json',
        //     contentType: 'application/json;charset=utf-8'
        // }, false, '', function (res) {
        //     if (res.code == 200) {

        $("[name='printData']").remove();
        var t1 = document.getElementById('add-shdw').value;
        var t2 = document.getElementById('add-dh').value;
        var t3 = document.getElementById('add-riqi').value;
        t4 = "<tr name='printData'>" +
            // "<td style='text-align: center'>" + res.data.length + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-mc').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-mh').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-gg').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-js').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-zl').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-dj').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-je').value + "</td>" +
            "<td style='text-align: center'>" + document.getElementById('add-bz').value + "</td>" +
            "</tr>";

        $("#data").append(t4);


        var t11 = document.getElementById('add-jgf').value;
        var t12 = document.getElementById('add-kdf').value;
        var t22 = document.getElementById('add-shdz').value;
        var t13 = document.getElementById('add-kddh').value;
        var t14 = document.getElementById('add-sfyj').value;
        var t15 = document.getElementById('add-gd').value;
        var t16 = document.getElementById('add-sfhs').value;
        var t17 = document.getElementById('add-shdwjjsr').value;
        var t18 = document.getElementById('add-sd').value;
        var t19 = document.getElementById('add-zl').value;
        var t20 = document.getElementById('add-hjje').value;
        var t21 = document.getElementById('add-fkfs').value;
        var t23 = document.getElementById('add-bzld').value;
        $("#shdw").append(t1);
        $("#dh").append(t2);
        $("#riqi").append(t3);
        $("#jgf").append(t11);
        $("#kdf").append(t12);
        $("#shdz").append(t22);
        $("#kddh").append(t13);
        $("#sfyj").append(t14);
        $("#gd").append(t15);
        $("#sfhs").append(t16);
        $("#shdwjjsr").append(t17);
        $("#sd").append(t18);
        $("#hjzl").append(t19);
        $("#hjje").append(t20);
        $("#fkfs").append(t21);
        $("#bzld").append(t23);
        $('#add-modal').modal('hide');
        var t24=document.getElementById("add-mc").value;
        var t25=document.getElementById("add-mh").value;
        var t26=document.getElementById("add-gg").value;
        var t27=document.getElementById("add-js").value;
        var t28=document.getElementById("add-dj").value;
        var t29=document.getElementById("add-je").value;
        var t30=document.getElementById("add-bz").value;
        var t31=document.getElementById("add-zl").value;
        var t32=document.getElementById("add-zdr").value;
        var t33=document.getElementById("add-hsdj").value;
        var t34=document.getElementById("add-whsdj").value;
        var t35=document.getElementById("add-bz").value;
        if(isNaN(aa)){
            $("#zjedx").append("");
        }else {
            getHjje();
        }
        if ($("#sfhs" == '含税')) {
            $('#sdlable').hide();
            $('#sd').hide();
        }
        if ($("#sfhs" == '未含税')) {
            $('#sdlable').hide();
            $('#sd').hide();
        }
        arr={
            mc:t24,
            mh:t25,
            gg:t26,
            js:t27,
            dj:t28,
            je:t29,
            bz:t30,
            zl:t31,
            zdr:t32,
            hsdj:t33,
            whsdj:t34,
            bz:t35,
            shdw: t1,
            dh: t2,
            riqi: t3,
            jgf: t11,
            kdf: t12,
            shdz: t22,
            kddh: t13,
            sfyj: t14,
            gd: t15,
            sfhs: t16,
            shdwjjsr: t17,
            sd: t18,
            hjzl: t19,
            hjje: t20,
            fkfs: t21,
            bzld: t23
        };
    })

    $('#shdPrint-submit-btn').click(function () {
        let rows = getData("#show-shdPrint-table")
        if (rows.length == 0) {
            swal('请选择数据！');
        } else {
            $ajax({
                type: 'post',
                url: '/cgx/print',
                data: JSON.stringify({
                    list: rows
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    $("[name='printData']").remove();
                    var t1 = res.data[0].shdw;
                    var t2 = res.data[0].dh;
                    var t3 = res.data[0].riqi;
                    for (var i = 0; i < res.data.length; i++) {
                        t4 = "<tr name='printData'>" +
                            // "<td style='text-align: center'>" + res.data.length + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].mc + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].mh + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].gg + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].js + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].zl + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].dj + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].je + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].bz + "</td>" +
                            "</tr>";

                        $("#data").append(t4);
                    }
                    var t11 = res.data[0].jgf;
                    var t12 = res.data[0].kdf;
                    var t21 = res.data[0].shdz;
                    var t13 = res.data[0].kddh;
                    var t14 = res.data[0].sfyj;
                    var t15 = res.data[0].gd;
                    var t16 = res.data[0].sfhs;
                    var t17 = res.data[0].shdwjjsr;
                    var t18 = res.data[0].sd;
                    var t19 = res.data[0].zl;
                    var t20 = res.data[0].hjje;
                    var t23 = res.data[0].bzld;
                    var t22 = res.data[0].fkfs;
                    $("#shdw").append(t1);
                    $("#dh").append(t2);
                    $("#riqi").append(t3);
                    $("#jgf").append(t11);
                    $("#kdf").append(t12);
                    $("#shdz").append(t21);
                    $("#kddh").append(t13);
                    $("#sfyj").append(t14);
                    $("#gd").append(t15);
                    $("#sfhs").append(t16);
                    $("#shdwjjsr").append(t17);
                    $("#sd").append(t18);
                    $("#hjzl").append(t19);
                    $("#hjje").append(t20);
                    $("#bzld").append(t23);
                    $("#fkfs").append(t22);
                    $('#shdPrint-modal').modal('hide');
                    aa =t20;
                    if(isNaN(aa)){
                        $("#zjedx").append("");
                    }else {
                        getHjje();
                    }
                    if ($("#sfhs" == '含税')) {
                        $('#sdlable').hide();
                        $('#sd').hide();
                    }
                    if ($("#sfhs" == '未含税')) {
                        $('#sdlable').hide();
                        $('#sd').hide();
                    }
                }
            })
        }
    });


    $('#shdPrint-close-btn').click(function () {
        $('#shdPrint-modal').modal('hide');
    });


    //暂存
    $("#add-zancun-btn").click(function () {



        var js = parseFloat(document.getElementById('add-js').value);
        var zl = parseFloat(document.getElementById('add-zl').value);
        var dj = parseFloat(document.getElementById('add-dj').value);
        var kdf =parseFloat(document.getElementById('add-kdf').value);
        var je = js * zl * dj
        if(isNaN(je)){
                document.getElementById("add-je").value ="";
            }else {
                document.getElementById("add-je").value = je
        }
        var jgf = js * 0.5

        document.getElementById("update-jgf").value = jgf
        var hjje = je +jgf+ kdf
        if(isNaN(hjje)){
            document.getElementById("add-hjje").value="";
        }else {
            document.getElementById("add-hjje").value = hjje
        }
        if (parseFloat(document.getElementById('add-sd').value) != 0) {
            var hsdj = parseFloat(document.getElementById('add-hsdj').value);
            var sd = parseFloat(document.getElementById('add-sd').value);
            var whsdj = hsdj / sd
            if(isNaN(whsdj)){
                document.getElementById("add-whsdj").value="";
            }else {
                document.getElementById("add-whsdj").value = whsdj
            }
        }

        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/cgx/add',
                data: JSON.stringify({
                    addInfo: params
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    swal("", res.msg, "success");
                    $('#add-form')[0].reset();
                    $('#add-close-btn').click();
                }
            })
        }
    });

});


// let params = formToJson("#add-form");
// if (checkForm('#add-form')) {
//     $ajax({
//         type: 'post',
//         url: '/xsd/add',
//         data: JSON.stringify({
//             addInfo: params
//         }),
//         dataType: 'json',
//         contentType: 'application/json;charset=utf-8'
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             swal("", res.msg, "success");
//             $('#add-form')[0].reset();
//             $('#add-close-btn').click();
//         }
//     })
// }

// //暂存
// $("#add-zancun-btn").click(function () {
//
//     var js = parseFloat(document.getElementById('add-js').value);
//     var zl = parseFloat(document.getElementById('add-zl').value);
//     var dj = parseFloat(document.getElementById('add-dj').value);
//     var je = js * zl * dj
//     document.getElementById("add-je").value = je
//
//     var jgf = js * 0.5
//     document.getElementById("update-jgf").value = jgf
//
//     if (parseFloat(document.getElementById('add-sd').value) != 0) {
//         var hsdj = parseFloat(document.getElementById('add-hsdj').value);
//         var sd = parseFloat(document.getElementById('add-sd').value);
//         var whsdj = hsdj / sd
//         document.getElementById("add-whsdj").value = whsdj
//     }
//
//     let params = formToJson("#add-form");
//     if (checkForm('#add-form')) {
//         $ajax({
//             type: 'post',
//             url: '/cgx/add',
//             data: JSON.stringify({
//                 addInfo: params
//             }),
//             dataType: 'json',
//             contentType: 'application/json;charset=utf-8'
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 swal("", res.msg, "success");
//                 $('#add-form')[0].reset();
//                 $('#add-close-btn').click();
//             }
//         })
//     }
// });
//提交按钮
// $('#shdPrint-submit-btn').click(function () {
//     let rows = getData("#show-shdPrint-table")
//     if (rows.length == 0) {
//         swal('请选择数据！');
//     } else {
//         $ajax({
//             type: 'post',
//             url: '/cgx/print',
//             data: JSON.stringify({
//                 list: rows
//             }),
//             dataType: 'json',
//             contentType: 'application/json;charset=utf-8'
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 $("[name='printData']").remove();
//                 var t1 = res.data[0].shdw;
//                 var t2 = res.data[0].dh;
//                 var t3 = res.data[0].riqi;
//                 for (var i = 0; i < res.data.length; i++) {
//                     t4 = "<tr name='printData'>" +
//                         "<td style='text-align: center'>" + res.data.length + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].mc + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].mh + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].gg + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].js + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].zl + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].dj + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].je + "</td>" +
//                         "<td style='text-align: center'>" + res.data[i].bz + "</td>" +
//                         "</tr>";
//
//                     $("#data").append(t4);
//                 }
//                 var t11 = res.data[0].jgf;
//                 var t12 = res.data[0].kdf;
//                 var t21 = res.data[0].shdz;
//                 var t13 = res.data[0].kddh;
//                 var t14 = res.data[0].sfyj;
//                 var t15 = res.data[0].gd;
//                 var t16 = res.data[0].sfhs;
//                 var t17 = res.data[0].shdwjjsr;
//                 var t18 = res.data[0].sd;
//                 var t19 = res.data[0].zl;
//                 var t20 = res.data[0].je;
//
//                 $("#shdw").append(t1);
//                 $("#dh").append(t2);
//                 $("#riqi").append(t3);
//                 $("#jgf").append(t11);
//                 $("#kdf").append(t12);
//                 $("#shdz").append(t21);
//                 $("#kddh").append(t13);
//                 $("#sfyj").append(t14);
//                 $("#gd").append(t15);
//                 $("#sfhs").append(t16);
//                 $("#shdwjjsr").append(t17);
//                 $("#sd").append(t18);
//                 $("#hjzl").append(t19);
//                 $("#hjje").append(t20);
//                 $('#shdPrint-modal').modal('hide');
//                 aa = document.getElementById('add-hjje');
//                 getHjje();
//                 if ($("#sfhs" == '含税')) {
//                     $('#sdlable').hide();
//                     $('#sd').hide();
//                 }
//                 if ($("#sfhs" == '未含税')) {
//                     $('#sdlable').hide();
//                     $('#sd').hide();
//                 }
//             }
//         })
//     }
// });
//
//
// $('#shdPrint-close-btn').click(function () {
//     $('#shdPrint-modal').modal('hide');
// });


// function sdvalue(){
//     var sfhs =document.getElementById("shfs");
//     var sd = doucument.getElementById("sd");
//     if(sfhs=="未含税"){
//         sd = 0;
//     }else if(sfhs =="含税"){
//         sd = 1.1;
//     }else{
//         sd=1.1;
//     }
// }


//点击新增按钮显示弹窗


function menoyToUppercase(money) {

    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'); //汉字的数字

    var cnIntRadice = new Array('', '拾', '佰', '仟'); //基本单位

    var cnIntUnits = new Array('', '万', '亿', '兆'); //对应整数部分扩展单位

    var cnDecUnits = new Array('角', '分', '毫', '厘'); //对应小数部分单位

    var cnInteger = '整'; //整数金额时后面跟的字符

    var cnIntLast = '元'; //整数完以后的单位

//最大处理的数字

    var maxNum = 999999999999999.9999;

    var integerNum; //金额整数部分

    var decimalNum; //金额小数部分

//输出的中文金额字符串

    var chineseStr = '';

    var parts; //分离金额后用的数组，预定义

    if (money == '') {
        return '';
    }

    money = parseFloat(money);

    if (money >= maxNum) {

//超出最大处理数字

        return '超出最大处理数字';

    }

    if (money == 0) {

        chineseStr = cnNums[0] + cnIntLast + cnInteger;

        return chineseStr;

    }

//四舍五入保留两位小数,转换为字符串

    money = Math.round(money * 100).toString();

    integerNum = money.substr(0, money.length - 2);

    decimalNum = money.substr(money.length - 2);

//获取整型部分转换

    if (parseInt(integerNum, 10) > 0) {

        var zeroCount = 0;

        var IntLen = integerNum.length;

        for (var i = 0; i < IntLen; i++) {

            var n = integerNum.substr(i, 1);

            var p = IntLen - i - 1;

            var q = p / 4;

            var m = p % 4;

            if (n == '0') {

                zeroCount++;

            } else {

                if (zeroCount > 0) {

                    chineseStr += cnNums[0];

                }

//归零

                zeroCount = 0;

                chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];

            }

            if (m == 0 && zeroCount < 4) {

                chineseStr += cnIntUnits[q];

            }

        }

        chineseStr += cnIntLast;

    }

//小数部分

    if (decimalNum != '') {

        var decLen = decimalNum.length;

        for (var i = 0; i < decLen; i++) {

            var n = decimalNum.substr(i, 1);

            if (n != '0') {

                chineseStr += cnNums[Number(n)] + cnDecUnits[i];

            }

        }

    }

    if (chineseStr == '') {

        chineseStr += cnNums[0] + cnIntLast + cnInteger;

    } else if (decimalNum == '' || /^0*$/.test(decimalNum)) {

        chineseStr += cnInteger;

    }

    return chineseStr;

}

function getHjje() {
        $("#zjedx").append(menoyToUppercase(aa));
}

function setTable(data) {
    if ($('#show-shdPrint-table').html != '') {
        $('#show-shdPrint-table').bootstrapTable('load', data);
    }

    $('#show-shdPrint-table').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-hover',
        idField: 'id',
        pagination: true,
        search: true,
        searchAlign: 'left',
        clickToSelect: false,
        locale: 'zh-CN',
        singleSelect: true,
        columns: [
            {
                checkbox: true
            }, {
                field: '',
                title: '序号',
                align: 'center',
                width: 50,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'riqi',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'dh',
                title: '单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shdw',
                title: '收货单位',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'mc',
                title: '名称',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'mh',
                title: '模号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'gg',
                title: '规格',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'js',
                title: '件数',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'zl',
                title: '重量',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'dj',
                title: '单价',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'je',
                title: '金额',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'bz',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'shdz',
                title: '收货地址',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'kddh',
                title: '快递单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'sfyj',
                title: '是否月结',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'fkfs',
                title: '付款方式',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'sfhs',
                title: '是否含税',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'gd',
                title: '跟单',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'zdr',
                title: '制单人',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shdwjjsr',
                title: '收货单位及经手人',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jgf',
                title: '锯工费',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'kdf',
                title: '快递费',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'hsdj',
                title: '含税单价',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'sd',
                title: '税点',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'whsdj',
                title: '未含税单价',
                align: 'center',
                sortable: true,
                width: 130,
            }
        ],
        // onClickRow: function (row, el) {
        //     let isSelect = $(el).hasClass('selected')
        //     if (isSelect) {
        //         $(el).removeClass('selected')
        //     } else {
        //         $(el).addClass('selected')
        //     }
        // }
    })
}

function getData(tableEl) {
    let result = [];
    let tableData = $(tableEl).bootstrapTable('getData');
    $(tableEl + ' tr').each(function (i, tr) {
        let index = $(tr).data('index');
        if (index != undefined) {
            if ($(tr).hasClass('selected')) {
                result.push({
                    shdw: tableData[index].shdw,
                    dh: tableData[index].dh,
                    riqi: tableData[index].riqi,
                })
            }
        }
    });
    return result;
}