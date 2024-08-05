var idd;
var i=0;
var n=0;
function getList() {


    $ajax({
        type: 'post',
        url: '/yszkmxb/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            // if(res.data.yf=="1"){
            //     yyys=res.data.ysje
            //     document.getElementById("yyys").value=res.data.ysje,
            //         document.getElementById("yyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // }if(res.data.yf=="2"){
            //     document.getElementById("eyys").value=res.data.ysje,
            //         document.getElementById("eyyf").value=res.data.skje,
            //     i=i+ysje;
            //     n=n+skje;
            // }if(res.data.yf=="3"){
            //     document.getElementById("syys").value=res.data.ysje,
            //         document.getElementById("syyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="4"){
            //     document.getElementById("siyys").value=res.data.ysje,
            //         document.getElementById("siyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="5"){
            //     document.getElementById("wyys").value=res.data.ysje,
            //         document.getElementById("wyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="6"){
            //     document.getElementById("lyys").value=res.data.ysje,
            //         document.getElementById("lyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="7"){
            //     document.getElementById("qyys").value=res.data.ysje,
            //         document.getElementById("qyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="8"){
            //     document.getElementById("byys").value=res.data.ysje,
            //         document.getElementById("byyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="9"){
            //     document.getElementById("jyys").value=res.data.ysje,
            //         document.getElementById("jyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="10"){
            //     document.getElementById("shiyys").value=res.data.ysje,
            //         document.getElementById("shiyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // } if(res.data.yf=="11"){
            //     document.getElementById("syyys").value=res.data.ysje,
            //         document.getElementById("syyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // }if(res.data.yf=="12"){
            //     document.getElementById("seyys").value=res.data.ysje,
            //         document.getElementById("seyyf").value=res.data.skje
            //     i=i+ysje;
            //     n=n+skje;
            // }
            // // var m=i+res.data.qcye-n;
            // // document.getElementById("ljysje").value=i;
            // // document.getElementById("bnysje").value=n;
            // // document.getElementById("ysyehj").value=m;
            setTable(res.data);
            $("#ysmxbTable").colResizable({
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
function getList1() {


    $ajax({
        type: 'post',
        url: '/yszkmxb/getList1',
    }, false, '', function (res) {
        if (res.code == 200) {
            document.getElementById("add-yf").value = res.data.yf;
            if (res.data.yf == 1) {

                document.getElementById("add-yyys").value = res.data.ysje,
                    document.getElementById("add-yyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "2") {
                document.getElementById("add-eyys").value = res.data.ysje,
                    document.getElementById("add-eyyf").value = res.data.skje,
                    i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "3") {
                document.getElementById("add-syys").value = res.data.ysje,
                    document.getElementById("add-syyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "4") {
                document.getElementById("add-siyys").value = res.data.ysje,
                    document.getElementById("add-siyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "5") {
                document.getElementById("add-wyys").value = res.data.ysje,
                    document.getElementById("add-wyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "6") {
                document.getElementById("add-lyys").value = res.data.ysje,
                    document.getElementById("add-lyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == 7) {
                document.getElementById("add-qyys").value = res.data.ysje,
                    document.getElementById("add-qyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == 8) {
                document.getElementById("add-byys").value = res.data.ysje,
                    document.getElementById("add-byyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "9") {
                document.getElementById("add-jyys").value = res.data.ysje,
                    document.getElementById("add-jyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "10") {
                document.getElementById("add-shiyys").value = res.data.ysje,
                    document.getElementById("add-shiyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "11") {
                document.getElementById("add-syyys").value = res.data.ysje,
                    document.getElementById("add-syyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            if (res.data.yf == "12") {
                document.getElementById("add-seyys").value = res.data.ysje,
                    document.getElementById("add-seyyf").value = res.data.skje
                i = i + ysje;
                n = n + skje;
            }
            // var m = i + res.data.qcye - n;
            // document.getElementById("add-ljysje").value = i;
            // document.getElementById("add-bnysje").value = n;
            // document.getElementById("add-ysyehj").value = m;
            document.getElementById("add-gsm").value = res.data.gsm;
            document.getElementById("add-qcye").value = res.data.qcye;
            // document.getElementById("add-sfyj").value = res.data.sfyj;
            // document.getElementById("add-sfhs").value = res.data.sfhs;
            if (checkForm('#add-form')) {
                let params = formToJson('#add-form');
                $ajax({
                    type: 'post',
                    url: '/yszkmxb/add',
                    data: JSON.stringify ({
                        addInfo: params
                    }),
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8'

                })
            }
        }
    })
}
$(function () {
    getList1();
    getList();

    $ajax({
        type: 'post',
        url: '/user/getName',
    }, false, '', function (res) {
        var this_name = res.data
        document.getElementById("dlm").innerText = this_name;
    })

    $('#select-btn').click(function () {
        var ksrq = $('#ksrq').val();
        var jsrq = $('#jsrq').val();
        var khmc = $('#khmc').val();
        $ajax({
            type: 'post',
            url: '/yszkmxb/queryList',
            data: {
                ksrq: ksrq,
                jsrq: jsrq,
                khmc: khmc
            }
        }, true, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
            }
        })
    });

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });
})

function setTable(data) {
    if ($('#ysmxbTable').html != '') {
        $('#ysmxbTable').bootstrapTable('load', data);
    }

    $('#ysmxbTable').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-hover text-nowrap table table-bordered',
        idField: 'id',
        pagination: true,
        pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
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
                field: 'gsm',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 110,

            }, {
                field: 'sfyj',
                title: '是否月结',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'sfhs',
                title: '是否含税',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'qcye',
                title: '期初余额',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'yyys',
                title: '一月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'yyyf',
                title: '一月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'eyys',
                title: '二月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'eyyf',
                title: '二月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'syys',
                title: '三月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'syyf',
                title: '三月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'siyys',
                title: '四月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'siyyf',
                title: '四月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'wyys',
                title: '五月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'wyyf',
                title: '五月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'lyys',
                title: '六月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'lyyf',
                title: '六月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'qyys',
                title: '七月应收',
                align: 'center',
                sortable: true,
                width: 70,
                style:"id='byys'"

            }
            , {
                field: 'qyyf',
                title: '七月应付',
                align: 'center',
                sortable: true,
                width: 70,
                style:"id='byyf'"

            }, {
                field: 'byys',
                title: '八月应收',
                align: 'center',
                sortable: true,
                width: 70,
               style:"id='byys'"
            }
            , {
                field: 'byyf',
                title: '八月应付',
                align: 'center',
                sortable: true,
                width: 70,
                style:"id='byyf'"
            }, {
                field: 'jyys',
                title: '九月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'jyyf',
                title: '九月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'shiyys',
                title: '十月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'shiyyf',
                title: '十月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'syyys',
                title: '十一月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'syyyf',
                title: '十一月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'seyys',
                title: '十二月应收',
                align: 'center',
                sortable: true,
                width: 70,
            }
            , {
                field: 'seyyf',
                title: '十二月应付',
                align: 'center',
                sortable: true,
                width: 70,
            }, {
                field: 'ljysje',
                title: '累计应收金额',
                align: 'center',
                sortable: true,
                width: 70,

            }
            , {
                field: 'bnysje',
                title: '本年已收金额',
                align: 'center',
                sortable: true,
                width: 70,

            }, {
                field: 'ysyehj',
                title: '应收余额合计',
                align: 'center',
                sortable: true,
                width: 70,

            }, {
                field: 'yf',
                title: '',
                align: 'center',
                sortable: true,
                width: 0,
            }
            , {
                field: 'skje',
                title: '',
                align: 'center',
                sortable: true,
                width: 0,
            }, {
                field: 'ysje',
                title: '',
                align: 'center',
                sortable: true,
                width: 0,
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


