var aa;
var idd = 0;
let count = 1;
var arr = {};
var n = 0;
var h ="";
let select=[];
let select_mc=[];
function getGsm() {
    $ajax({
        type: 'post',
        url: '/khzl/hqxlGsm',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item="";
            select = res.data;
            for (var i = 0; i < res.data.length; i++) {
                $("#add-shdw").append("<option>" + res.data[i].gsm + "</option>");
                $("#shdw").append("<option>" + res.data[i].gsm + "</option>");
                item="<option value=\"" + res.data[i].gsm + "\">" + res.data[i].gsm + "</option>"
                // $("#update-shdw").append("<option>" + res.data[i].gsm + "</option>");
            }
        }
    })
}
function zhdy() {
    window.location.href ="zhdy.html";
}
function deleteq1(){
    $ajax({
        type: 'post',
        url: '/shdp/delete',
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
            var item=""
            select_mc=res.data;
            for (var i = 0; i < res.data.length; i++) {
                $("#add-mc").append("<option>" + res.data[i].mc + "</option>");
                item="<option value=\"" + res.data[i].mc + "\">" + res.data[i].mc + "</option>"
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

function getriqi() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
}

function getList() {

    $ajax({
        type: 'post',
        url: '/shdp/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable1(res.data);
            $("#shdptable").colResizable({
                liveDrag: true,
                gripInnerHtml: "<div class='grip'></div>",
                draggingClass: "dragging",
                resizeMode: 'fit'
            });
            for (i = 0; i <= res.data.id; i++) {
                idd = i;
            }
        }
    })
}

$(function () {
    deleteq1();
    getList();
    getMc();
    getGsm();
    const date = new Date(); // 获取当前日期
    const year = date.getFullYear(); // 获取年份
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份并补齐两位
    const day = String(date.getDate()).padStart(2, '0'); // 获取日期并补齐两位
    var riqi = year + '-' + month + '-' + day
    // let count = localStorage.getItem('count') || 0; // 从localStorage中获取自增值，如果没有则默认为0
    // count = parseInt(count) + 1; // 自增值加1
    // localStorage.setItem('count', count); // 将新的自增值存回localStorage
    // const number = String(count).padStart(4, '0'); // 将自增值转为字符串并补齐四位


    document.getElementById("riqi").value = riqi;
    $('#loc-btn').click(function () {
        // 获取当前日期
        const currentDate = new Date().toLocaleDateString();
// 从localStorage中获取上次存储的日期和计数器值
        let lastDate = localStorage.getItem('lastDate');
        let count = parseInt(localStorage.getItem('count'), 10) || 0;
// 检查当前日期是否与上次存储的日期相同
        if (currentDate !== lastDate) {
            // 如果不同，重置计数器
            count = 1;
        } else {
            // 如果相同，递增计数器
            count++;
        }
// 更新localStorage中的日期和计数器值
        localStorage.setItem('lastDate', currentDate);
        localStorage.setItem('count', count.toString().padStart(4, '0'));
// 拼接编号年月日和自增数字
        const date = new Date(currentDate);
        const year = date.getFullYear(); // 获取年份
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份并补齐两位
        const day = String(date.getDate()).padStart(2, '0'); // 获取日期并补齐两位
        const dh = `${year}${month}${day}${count.toString().padStart(4, '0')}`;
        // const dh = "${year}${month}${day}${count.toString().padStart(4, '0')}";
        document.getElementById("dh").value = dh;
        var sfhs = document.getElementById("sfhs").value;
        var sd = 0;
        if (sfhs == "含税" || sfhs == "金额含税") {
            sd = 1.11;
        } else {
            sd = 0;
        }
        document.getElementById("sd").value = sd;
        document.getElementById("riqi").disabled = true;
        document.getElementById("dh").disabled = true;
        document.getElementById("shdw").disabled = true;
        document.getElementById("fkfs").disabled = true;
        document.getElementById("sfhs").disabled = true;
        document.getElementById("loc-btn").hidden = true;
        document.getElementById("kddh").disabled = true;
        document.getElementById("shdwjjsr").disabled = true;
        document.getElementById("sfyj").disabled = true;
        document.getElementById("kdf").disabled = true;
        document.getElementById("bzld").disabled = true;

    })

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
        } else {
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
        $("#dlm").append(this_name);
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

    function columnUpd(id, column) {

        var this_value = $('#' + column + id).val();
        $ajax({
            type: 'post',
            url: '/shdp/update',
            data: {
                column: column,
                id: id,
                value: this_value,
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                getList();
            }
        })
    }
    $('#gg-btn').click(function (){
        var str = document.getElementById("gg").value;
        var strArray = str.split(" ");
        for(i=0;i<n;i=i+1){
            let c = parseFloat($('#id1').val()) + i;
            let q = c.toString();
            var gg = strArray[i];
            document.getElementById("gg"+q).value=gg;
        }
    })
    $('#add-btn2').click(function () {
        for (i = 0; i < n; i = i + 1) {
            let c = parseFloat($('#id1').val()) + i
            var q = c.toString();
            var mc = $('#mc' + q).val();
            var mh = $('#mh' + q).val();
            var gg = $('#gg' + q).val();
            var js = $('#js' + q).val();
            var zl = $('#zl' + q).val();
            var dj = $('#dj' + q).val();
            var je = $('#je' + q).val();
            var bz = $('#bz' + q).val();
            var sd = document.getElementById("sd").value;
            var hjzl = zl;
            $ajax({
                type: 'post',
                url: '/shdp/update',
                data: {
                    mc: mc,
                    mh: mh,
                    gg: gg,
                    js: js,
                    zl: zl,
                    dj: dj,
                    je: je,
                    bz: bz,
                    hjzl:hjzl,
                    sd:sd,
                    id: q,
                },

            }, false, '', function (res) {
                swal("", res.msg, "success");
                getList();
                zhdy();
            })

        }
    })


    $('#add-cgx').click(function () {

        for (i = 0; i < n; i = i + 1) {
            var riqi = document.getElementById("riqi").value;
            var dh = document.getElementById("dh").value;
            var kddh = document.getElementById("kddh").value;
            var shdwjjsr = document.getElementById("shdwjjsr").value;
            var shdw = document.getElementById("shdw").value;
            var fkfs = document.getElementById("fkfs").value;
            var sfhs = document.getElementById("sfhs").value;
            var sd = document.getElementById("sd").value;
            var sfyj = document.getElementById("sfyj").value;
            var kdf = document.getElementById("kdf").value;
            var bzld = document.getElementById("bzld").value;
            let c = parseFloat($('#id1').val()) + i
            var q = c.toString();
            var mc = $('#mc' + q).val();
            var mh = $('#mh' + q).val();
            var gg = $('#gg' + q).val();
            var js = $('#js' + q).val();
            var zl = $('#zl' + q).val();
            var dj = $('#dj' + q).val();
            var je = $('#je' + q).val();
            var bz = $('#bz' + q).val();
            var hjzl = zl;
            $ajax({
                    type: 'post',
                    url: '/cgx/add',
                    data:{
                        riqi: riqi,
                        dh: dh,
                        kddh: kddh,
                        shdwjjsr: shdwjjsr,
                        shdw: shdw,
                        fkfs: fkfs,
                        sfhs: sfhs,
                        sd: sd,
                        sfyj: sfyj,
                        kdf: kdf,
                        mc: mc,
                        mh: mh,
                        gg: gg,
                        js: js,
                        zl: zl,
                        dj: dj,
                        je: je,
                        bz: bz,
                        hjzl:hjzl,
                        bzld:bzld
                    },

                }, false, '', function (res) {
                    swal("", res.msg, "success");

                    getList();
                }
            )
        }
    })


    $('#add-btn1').click(function () {
        n++;
        // const now = new Date();
        // const year = now.getFullYear();
        // const month = (now.getMonth() + 1).toString().padStart(2, '0');
        // const day = now.getDate().toString().padStart(2, '0');
        // const hours = now.getHours().toString().padStart(2, '0');
        // const minutes = now.getMinutes().toString().padStart(2, '0');
        // const seconds = now.getSeconds().toString().padStart(2, '0');
        // var aa = `${year}${month}${day}${hours}${minutes}${seconds}`;
        // document.getElementById('add-dh').value = aa;
        var riqi = document.getElementById("riqi").value;
        var dh = document.getElementById("dh").value;
        var kddh = document.getElementById("kddh").value;
        var shdwjjsr = document.getElementById("shdwjjsr").value;
        var shdw = document.getElementById("shdw").value;
        var fkfs = document.getElementById("fkfs").value;
        var sfhs = document.getElementById("sfhs").value;
        var sd = document.getElementById("sd").value;
        var sfyj = document.getElementById("sfyj").value;
        var kdf = document.getElementById("kdf").value;
        var bzld = document.getElementById("bzld").value;
        $ajax({
            type: 'post',
            url: '/shdp/add',
            data: {
                riqi: riqi,
                dh: dh,
                kddh: kddh,
                shdwjjsr: shdwjjsr,
                shdw: shdw,
                fkfs: fkfs,
                sfhs: sfhs,
                sd: sd,
                sfyj: sfyj,
                kdf: kdf,
                bzld:bzld
            }
        }, false, '', function (res) {
            getList();

        })
        $ajax({
            type: 'post',
            url: '/khzl/hqxlGsm',
        }, false, '', function (res) {
            if (res.code == 200) {
                for (var i = 0; i < res.data.length; i++) {
                    for (z = 0; z < n; z = z + 1) {
                        let c = parseFloat($('#id1').val()) + z
                        var q = c.toString();
                        $('#shdw' + q).append("<option>" + res.data[i].gsm + "</option>");
                    }
                    $("#add-shdw").append("<option>" + res.data[i].gsm + "</option>");
                    // $("#update-shdw").append("<option>" + res.data[i].gsm + "</option>");

                }
            }
        })
    })

})

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
                width: 250,
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

        onClickRow: function (row, el) {
            let isSelect = $(el).hasClass('selected')
            if (isSelect) {
                $(el).removeClass('selected')
            } else {
                $(el).addClass('selected')
            }
        }
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


function setTable1(data) {
    if ($('#shdptable').html != '') {
        $('#shdptable').bootstrapTable('load', data);
    }

    $('#shdptable').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-striped table-hover',
        idField: 'id',
        pagination: true,
        pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight * 0.85,
        columns: [
             {
                field: '',
                title: '序号',
                align: 'center',
                width: 50,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'mc',
                title: '名称',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var this_mc=""
                    var select1=""
                    for(var i=0; i<select_mc.length; i++) {
                        this_mc = this_mc + "<option value=\"" + select_mc[i].mc+"\" selected=\"selected\">"+select_mc[i].mc+"</option>"
                        select1= "<select id='mc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"mc\"" + ")' placeholder='名称' type='text' class='form-control'  value='" + value + "'>"
                        select1 = select1+this_mc;
                        select1=select1+"<select/>"

                    }
                    return select1;
                }
            }, {
                field: 'mh',
                title: '模号',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='mh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"mh\"" + ")' placeholder='模号' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'gg',
                title: '规格',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='gg" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gg\"" + ")' placeholder='规格' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'js',
                title: '件数',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='js" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"js\"" + ")' placeholder='件数' type='text' class='form-control' value='" + value + "'>"
                }
            }, {
                field: 'zl',
                title: '重量',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='zl" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"zl\"" + ")' placeholder='重量' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'dj',
                title: '单价',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='dj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dj\"" + ")' placeholder='单价' type='text' class='form-control' value='" + value + "'>"
                }
            }, {
                field: 'je',
                title: '金额',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='je" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"je\"" + ")'  placeholder='金额' type='text' class='form-control' value='" + value + "'>"
                }
            }, {
                field: 'bz',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 130,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='bz" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"bz\"" + ")' placeholder='备注' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'id',
                title: 'id',
                align: 'center',
                sortable: true,
                width: 1,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var c= row.id
                    return "<input id='id1' name='id' value='"+c+"' oninput='javascript:columnUpd(" + row.id + "," + "\"id\"" + ")' placeholder='id' type='text' class='form-control'  value='" + value + "'>"
                }
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