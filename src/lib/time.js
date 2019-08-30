/**
 * formatTimeStamp 时间格式化转换
 * @param  {number} str    [时间戳]
 * @param  {string} format [时间格式，[YY|YYYY]年 [mm|m]月 [dd|d]天 [hh|h]时 [ii|i]分 [ss|s]秒]
 * @returns {string}        [指定时间格式结果]
 */
export function formatTimeStamp(str, format) {
    str = parseInt(str);
    var D = false;
    if (isNaN(str)) {
        D = new Date();
    }
    else {
        D = new Date(str);
    }
    var ret = '';
    if (D && !isNaN(D.getTime())) {
        var fullyear = D.getFullYear();
        var month = D.getMonth() + 1;
        var date = D.getDate();
        var hours = D.getHours();
        var minute = D.getMinutes();
        var second = D.getSeconds();
        var doublemonth = month > 9 ? month : '0' + month;
        var doubledate = date > 9 ? date : '0' + date;
        var doubleyear = fullyear.toString().substr(2);
        var doublehours = hours > 9 ? hours : '0' + hours;
        var doubleminues = minute > 9 ? minute : '0' + minute;
        var doublesecond = second > 9 ? second : '0' + second;
        ret = `${format}` || '';
        ret = ret.replace(/YYYY/g, fullyear);
        ret = ret.replace(/YY/g, doubleyear);
        ret = ret.replace(/mm/g, doublemonth);
        ret = ret.replace(/m/g, month);
        ret = ret.replace(/dd/g, doubledate);
        ret = ret.replace(/d/g, date);
        ret = ret.replace(/hh/g, doublehours);
        ret = ret.replace(/h/g, hours);
        ret = ret.replace(/ii/g, doubleminues);
        ret = ret.replace(/i/g, minute);
        ret = ret.replace(/ss/g, doublesecond);
        ret = ret.replace(/s/g, second);
    }
    return ret;
}

function compter(second, utils, showDouble) {
    let arr = [],
        numStr = parseInt(second / utils[0]) < 10 && showDouble ? `0${parseInt(second / utils[0])}` : `${parseInt(second / utils[0])}`;
    arr.push(numStr);
    let num = second % utils[0];
    if (num >= 0 && utils.slice(1).length > 0) {
        arr = arr.concat(compter(num, utils.slice(1), showDouble));
    }
    return arr;
}
/**
 * 倒计时
 * @param {number} endTimeStamp   倒计时结束时间戳
 * @param {Object} options  配置  showDouble,utils,info
 * @returns {string} 倒计时结果，小时：分：秒
 */
export function countDown(endTimeStamp, options = {}) {
    let now = new Date(),
        result = null,
        defaultOptions = Object.assign({
            showDouble: false,
            utils: [24 * 60 * 60, 60 * 60, 60, 1],
            info: ['天', '小时', '分', '秒']
        },options),
        { showDouble, utils, info } = defaultOptions;
    if (endTimeStamp && endTimeStamp > now.getTime()) {
        let time_diff = parseInt((endTimeStamp - now.getTime()) / 1000),
            compArr = compter(time_diff, utils, showDouble);

        result = compArr.map((item, index) => {
            return `${item}${info[index]}`;
        });
    }
    return result.join('');
}

let cancheTimeStamp = Date.now();
/**
 * 计算代码执行diff时间
 * @param {*} label  日志标识
 * @param {*} isStar 开始执行时间标记
 */
export function diffTime(label, isStar) {
    let now = Date.now(),
        diff = now - cancheTimeStamp;
    !isStar && console.info(`${label} diffTime:${diff}ms`);
    cancheTimeStamp = now;
}