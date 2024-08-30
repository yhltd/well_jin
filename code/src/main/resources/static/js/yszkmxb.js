var idd;
var c=0;
var n=0;
function getList() {


    $ajax({
        type: 'post',
        url: '/yszkmxb/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
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
function deleteq1(){
    $ajax({
        type: 'post',
        url: '/yszkmxb/delete',
    })
}


function getList1() {
   deleteq1();

    $ajax({
        type: 'post',
        url: '/yszkmxb/getList1',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                document.getElementById("add-yf").value = res.data[i].yf;
                if (res.data[i].yf == "1") {
                    document.getElementById("add-yyys").value = res.data[i].ysje,
                        document.getElementById("add-yyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-yyys").value),
                        n = n +  parseFloat(document.getElementById("add-yyyf").value)
                }
                if (res.data[i].yf == "2") {
                    document.getElementById("add-eyys").value = res.data[i].ysje,
                        document.getElementById("add-eyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-eyys").value),
                        n = n +  parseFloat(document.getElementById("add-eyyf").value)
                }
                if (res.data[i].yf == "3") {
                    document.getElementById("add-syys").value = res.data[i].ysje,
                        document.getElementById("add-syyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-syys").value),
                        n = n +  parseFloat(document.getElementById("add-syyf").value)
                }
                if (res.data[i].yf == "4") {
                    document.getElementById("add-siyys").value = res.data[i].ysje,
                        document.getElementById("add-siyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-siyys").value),
                        n = n +  parseFloat(document.getElementById("add-siyyf").value)
                }
                if (res.data[i].yf == "5") {
                    document.getElementById("add-wyys").value = res.data[i].ysje,
                        document.getElementById("add-wyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-wyys").value),
                        n = n +  parseFloat(document.getElementById("add-wyyf").value)
                }
                if (res.data[i].yf == "6") {
                    document.getElementById("add-lyys").value = res.data[i].ysje,
                        document.getElementById("add-lyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-lyys").value),
                        n = n +  parseFloat(document.getElementById("add-lyyf").value)
                }
                if (res.data[i].yf == "7") {
                    document.getElementById("add-qyys").value = res.data[i].ysje,
                        document.getElementById("add-qyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-qyys").value),
                    n = n +  parseFloat(document.getElementById("add-qyyf").value)
                }
                if (res.data[i].yf == "8") {
                    document.getElementById("add-byys").value = res.data[i].ysje,
                        document.getElementById("add-byyf").value = res.data[i].skje,
                        c = c + parseFloat(document.getElementById("add-byys").value),
                    n = n +  parseFloat(document.getElementById("add-byyf").value)
                }
                if (res.data[i].yf == "9") {
                    document.getElementById("add-jyys").value = res.data[i].ysje,
                        document.getElementById("add-jyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-jyys").value),
                        n = n +  parseFloat(document.getElementById("add-jyyf").value);
                }
                if (res.data[i].yf == "10") {
                    document.getElementById("add-shiyys").value = res.data[i].ysje,
                        document.getElementById("add-shiyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-shiyys").value),
                        n = n +  parseFloat(document.getElementById("add-shiyyf").value)
                }
                if (res.data[i].yf == "11") {
                    document.getElementById("add-syyys").value = res.data[i].ysje,
                        document.getElementById("add-syyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-syyys").value),
                        n = n +  parseFloat(document.getElementById("add-syyyf").value)
                }
                if (res.data[i].yf == "12") {
                    document.getElementById("add-seyys").value = res.data[i].ysje,
                        document.getElementById("add-seyyf").value = res.data[i].skje,
                        c = c +  parseFloat(document.getElementById("add-seyys").value),
                        n = n +  parseFloat(document.getElementById("add-seyyf").value)
                }
                // var m = i + res.data.qcye - n;
                // document.getElementById("add-ljysje").value = i;
                // document.getElementById("add-bnysje").value = n;
                // document.getElementById("add-ysyehj").value = m;
                document.getElementById("add-gsm").value = res.data[i].gsm,
                    document.getElementById("add-qcye").value = res.data[i].qcye;
                document.getElementById("add-sfyj").value = res.data[i].sfyj;
                document.getElementById("add-sfhs").value = res.data[i].sfhs;
            }
            var m = c + parseFloat(document.getElementById("add-qcye").value) - n;
            document.getElementById("add-ljysje").value = c;
            document.getElementById("add-bnysje").value = n;
            document.getElementById("add-ysyehj").value = m;
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

    })
    getList();
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
                width: 80,
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
                width: 160,
            }
            , {
                field: 'yyys',
                title: '一月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'yyyf',
                title: '一月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'eyys',
                title: '二月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'eyyf',
                title: '二月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'syys',
                title: '三月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'syyf',
                title: '三月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'siyys',
                title: '四月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'siyyf',
                title: '四月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'wyys',
                title: '五月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'wyyf',
                title: '五月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'lyys',
                title: '六月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'lyyf',
                title: '六月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'qyys',
                title: '七月应收',
                align: 'center',
                sortable: true,
                width: 160,
                style:"id='byys'"

            }
            , {
                field: 'qyyf',
                title: '七月应付',
                align: 'center',
                sortable: true,
                width: 160,
                style:"id='byyf'"

            }, {
                field: 'byys',
                title: '八月应收',
                align: 'center',
                sortable: true,
                width: 160,
               style:"id='byys'"
            }
            , {
                field: 'byyf',
                title: '八月应付',
                align: 'center',
                sortable: true,
                width: 160,
                style:"id='byyf'"
            }, {
                field: 'jyys',
                title: '九月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'jyyf',
                title: '九月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'shiyys',
                title: '十月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'shiyyf',
                title: '十月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'syyys',
                title: '十一月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'syyyf',
                title: '十一月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'seyys',
                title: '十二月应收',
                align: 'center',
                sortable: true,
                width: 160,
            }
            , {
                field: 'seyyf',
                title: '十二月应付',
                align: 'center',
                sortable: true,
                width: 160,
            }, {
                field: 'ljysje',
                title: '累计应收金额',
                align: 'center',
                sortable: true,
                width: 160,

            }
            , {
                field: 'bnysje',
                title: '本年已收金额',
                align: 'center',
                sortable: true,
                width: 160,

            }, {
                field: 'ysyehj',
                title: '应收余额合计',
                align: 'center',
                sortable: true,
                width: 160,

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


