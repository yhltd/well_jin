idd=0;
function getHjje() {
    $("#zjedx").append(menoyToUppercase(aa));
}
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
$(function(){

    $ajax({
        type: 'post',
        url: '/shdp/getList',
    }, false, '', function (res) {
        $("[name='printData']").remove();

        // var t1 = res.data[0].shdw;
        // var t2 =res.data[0].dh;
        // var t3 =res.data[0].riqi;
        // var t7 =res.data[0].zdr;
        // var t8 =res.data[0].gd;
        // var t9 = res.data[0].shdwjjsr;
        for (var i = 0; res.data[i].id!=null; i++) {
        t4 = "<tr name='printData'>" +
            // "<td style='text-align: center'>" + res.data[i].length + "</td>" +
            "<td style='text-align: center'>" + res.data[i].dh + "</td>" +
            "<td style='text-align: center'>" + res.data[i].riqi + "</td>" +
            "<td style='text-align: center'>" + res.data[i].shdw + "</td>" +
            "<td style='text-align: center'>" + res.data[i].mc + "</td>" +
            "<td style='text-align: center'>" + res.data[i].mh + "</td>" +
            "<td style='text-align: center'>" + res.data[i].gg + "</td>" +
            "<td style='text-align: center'>" + res.data[i].js + "</td>" +
            "<td style='text-align: center'>" + res.data[i].zl + "</td>" +
            "<td style='text-align: center'>" + res.data[i].dj + "</td>" +
            "<td style='text-align: center'>" + res.data[i].je + "</td>" +
            "<td style='text-align: center'>" + res.data[i].jgf + "</td>" +
            "<td style='text-align: center'>" + res.data[i].kdf + "</td>" +
            "</tr>";
            $("#data").append(t4);
            t5 = "<tr name='printData'>" +
                "<td style='text-align: center'>" + res.data[i].shdz + "</td>" +
                "<td style='text-align: center'>" + res.data[i].kddh + "</td>" +
                "<td style='text-align: center'>" + res.data[i].bz + "</td>" +
                "<td style='text-align: center'>" + res.data[i].sfyj + "</td>" +
                "<td style='text-align: center'>" + res.data[i].fkfs + "</td>" +
                "<td style='text-align: center'>" + res.data[i].sfhs + "</td>" +
                "<td style='text-align: center'>" +"          " +"</td>" +
                "<td style='text-align: center'>" + res.data[i].zdr + "</td>" +
                "<td style='text-align: center'>" + res.data[i].gd + "</td>" +
                "<td style='text-align: center'>" + res.data[i].shdwjjsr + "</td>" +
                "<td style='text-align: center'>" + res.data[i].hjzl + "</td>" +
                "<td style='text-align: center'>" + res.data[i].hjje + "</td>" +
                "</tr>";
            $("#data1").append(t5);
        }
        document.getElementById("#print-btn").click().hidden=true;
    })
    $("#print-btn").click(function () {
        window.print();
    })

})