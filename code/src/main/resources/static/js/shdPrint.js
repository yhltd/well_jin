var aa;
$(function () {
    // this_kuan = $('table').width();
    //打印
    $('#print-btn').click(function () {
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
    });

    $ajax({
        type: 'post',
        url: '/user/getName',
    }, false, '', function (res) {
        var this_name = res.data
        // document.getElementById("zdr").append = this_name;
        $("#zdr").append(this_name);
    })

    //选择数据
    $('#select-btn').click(function () {
        $ajax({
            type: 'post',
            url: '/xsd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                $('#shdPrint-modal').modal('show');
            }
        })
    });

    //提交按钮
    $('#shdPrint-submit-btn').click(function () {
        let rows = getData("#show-shdPrint-table")
        if (rows.length == 0) {
            swal('请选择数据！');
        } else {
            $ajax({
                type: 'post',
                url: '/xsd/print',
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
                    for(var i = 0;i<res.data.length;i++){
                        t4 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data.length + "</td>" +
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
                    var t20 = res.data[0].je;

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

                    $('#shdPrint-modal').modal('hide');
                    aa = res.data[0].je;
                    getHjje();
                    if($("#sfhs" == '含税')){
                        $('#sdlable').hide();
                        $('#sd').hide();
                    }
                    if($("#sfhs" == '未含税')){
                        $('#sdlable').hide();
                        $('#sd').hide();
                    }
                }
            })
        }
    });
    $('#shdPrint-close-btn').click(function () {
        $('#shdPrint-modal').modal('hide');
    })
});

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

    if (money == '') { return ''; }

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

    integerNum = money.substr(0,money.length-2);

    decimalNum = money.substr(money.length-2);

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

function getHjje(){
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