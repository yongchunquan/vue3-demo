
import UUID from 'uuidjs';

/**
 * 生成uuid
 */
function uuid() {
    return UUID.generate();
}

/**
 * 字串转化成日期
 * @param {string} strDate 
 */
function parseDate(strDate) {
    var myDate;
    if (strDate.indexOf("/Date(") > -1)
        myDate = new Date(parseInt(strDate.replace("/Date(", "").replace(")/", ""), 10));
    else
        myDate = new Date(Date.parse(strDate.replace(/-/g, "/").replace("T", " ").split(".")[0]));//.split(".")[0] 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
    return myDate;
}

/**
 * 格式化日期
 * @param {string} v '24/12/2019 09:15:00'
 * @param {string} format 'yyyy-MM-dd hh:mm:ss'
 */
function formatDate(v, format) {
    if (!v) return "";
    var d = v;
    if (typeof v === 'string') {
        if (v.indexOf("/Date(") > -1)
            d = new Date(parseInt(v.replace("/Date(", "").replace(")/", ""), 10));
        else
            d = new Date(Date.parse(v.replace(/-/g, "/").replace("T", " ").split(".")[0]));//.split(".")[0] 用来处理出现毫秒的情况，截取掉.xxx，否则会出错
    }
    var o = {
        "M+": d.getMonth() + 1,  //month
        "d+": d.getDate(),       //day
        "h+": d.getHours(),      //hour
        "m+": d.getMinutes(),    //minute
        "s+": d.getSeconds(),    //second
        "q+": Math.floor((d.getMonth() + 3) / 3),  //quarter
        "S": d.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

// 获取当前时间;format为格式
function getDate(format, strInterval, Number) {
    var myDate = new Date();
    if (!!strInterval) {
        myDate = myDate.DateAdd(strInterval, Number);
    }
    var res = formatDate(myDate, format);
    return res;
}
// 月
function getMonth(){
    var res = {
        begin: '',
        end: ''
    };
    var currentDate = parseDate(formatDate(new Date(), "yyyy-MM-01"));
    var endDate = currentDate.DateAdd('m', 1).DateAdd('d', -1);

    res.begin = formatDate(currentDate, 'yyyy-MM-dd 00:00:00');
    res.end = formatDate(endDate, 'yyyy-MM-dd 23:59:59');

    return res;
}
function getPreMonth() {
    var res = {
        begin:'',
        end:''
    };
    var currentDate = parseDate(formatDate(new Date(), "yyyy-MM-01"));
    var preMonth = currentDate.DateAdd('d',-1);

    res.begin = formatDate(preMonth, 'yyyy-MM-01 00:00:00');
    res.end = formatDate(preMonth, 'yyyy-MM-dd 23:59:59');

    return res;
}
// 季度
function getCurrentQuarter() {
    var currentDate = new Date();
    return getQuarter(currentDate.getFullYear(), currentDate.getMonth());
}
function getPreQuarter() {
    var currentDate = new Date().DateAdd('q', -1);
    return getQuarter(currentDate.getFullYear(), currentDate.getMonth());
}
function getQuarter(Year, month) {
    var res = {
        begin: '',
        end: ''
    };
    switch (month) {
        case 0:
        case 1:
        case 2:
            res.begin = Year + "-01-01 00:00:00";
            res.end = Year + "-03-31 23:59:59";
            break;
        case 3:
        case 4:
        case 5:
            res.begin = Year + "-04-01 00:00:00";
            res.end = Year + "-06-30 23:59:59";
            break;
        case 6:
        case 7:
        case 8:
            res.begin = Year + "-07-01 00:00:00";
            res.end = Year + "-09-30 23:59:59";
            break;
        case 9:
        case 10:
        case 11:
            res.begin = Year + "-10-01 00:00:00";
            res.end = Year + "-12-31 23:59:59";
            break;
    }
    return res;
}
// 年
function getYear() {
    var currentDate = new Date();
    var res = {
        begin: '',
        end: ''
    };
    var year = currentDate.getFullYear();
    res.begin = year + '-01-01 00:00:00';
    res.end = year + '-12-31 23:59:59';
    return res;
}
function getPreYear() {
    var currentDate = new Date();
    var res = {
        begin: '',
        end: ''
    };
    var year = currentDate.getFullYear()-1;
    res.begin = year + '-01-01 00:00:00';
    res.end = year + '-12-31 23:59:59';
    return res;
}
function getFirstHalfYear() {
    var currentDate = new Date();
    var res = {
        begin: '',
        end: ''
    };
    var year = currentDate.getFullYear();
    res.begin = year + '-01-01 00:00:00';
    res.end = year + '-06-30 23:59:59';
    return res;
}
function getSecondHalfYear() {
    var currentDate = new Date();
    var res = {
        begin: '',
        end: ''
    };
    var year = currentDate.getFullYear();
    res.begin = year + '-07-01 00:00:00';
    res.end = year + '-12-31 23:59:59';
    return res;
}
//+---------------------------------------------------  
//| 日期计算  
//+---------------------------------------------------  
Date.prototype.DateAdd = function (strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's': return new Date(Date.parse(dtTmp) + (1000 * Number));// 秒
        case 'n': return new Date(Date.parse(dtTmp) + (60000 * Number));// 分
        case 'h': return new Date(Date.parse(dtTmp) + (3600000 * Number));// 小时
        case 'd': return new Date(Date.parse(dtTmp) + (86400000 * Number));// 天
        case 'w': return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));// 星期
        case 'q': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());// 季度
        case 'm': return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());// 月
        case 'y': return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());// 年
    }
}
//+---------------------------------------------------  
//| 比较日期差 dtEnd 格式为日期型或者 有效日期格式字符串  
//+---------------------------------------------------  
Date.prototype.DateDiff = function (strInterval, dtEnd) {
    var dtStart = this;
    if (typeof dtEnd == 'string')//如果是字符串转换为日期型  
    {
        dtEnd = learun.parseDate(dtEnd);
    }
    switch (strInterval) {
        case 's': return parseInt((dtEnd - dtStart) / 1000);
        case 'n': return parseInt((dtEnd - dtStart) / 60000);
        case 'h': return parseInt((dtEnd - dtStart) / 3600000);
        case 'd': return parseInt((dtEnd - dtStart) / 86400000);
        case 'w': return parseInt((dtEnd - dtStart) / (86400000 * 7));
        case 'm': return (dtEnd.getMonth() + 1) + ((dtEnd.getFullYear() - dtStart.getFullYear()) * 12) - (dtStart.getMonth() + 1);
        case 'y': return dtEnd.getFullYear() - dtStart.getFullYear();
    }
}
//+---------------------------------------------------  
//| 取得当前日期所在月的最大天数  
//+---------------------------------------------------  
Date.prototype.MaxDayOfDate = function () {
    var myDate = this;
    var date1 = learun.parseDate(learun.formatDate(myDate, 'yyyy-MM-01 00:00:00'));
    var date2 = date1.DateAdd('m', 1);
    var result = date1.DateDiff('d', date2);
    return result;
} 
//---------------------------------------------------  
// 判断闰年  
//---------------------------------------------------  
Date.prototype.isLeapYear = function () {
    return (0 == this.getYear() % 4 && ((this.getYear() % 100 != 0) || (this.getYear() % 400 == 0)));
}
export default {
    uuid: uuid,
    parseDate: parseDate,
    formatDate: formatDate,
    getDate: getDate,
    getMonth: getMonth,
    getPreMonth: getPreMonth,
    getCurrentQuarter: getCurrentQuarter,
    getPreQuarter: getPreQuarter,
    getQuarter: getQuarter,
    getYear: getYear,
    getPreYear: getPreYear,
    getFirstHalfYear: getFirstHalfYear,
    getSecondHalfYear: getSecondHalfYear,
}