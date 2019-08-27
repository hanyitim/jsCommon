/**
 * 放置浏览器相关信息返回
 * @param {string} [testUa]  测试ua
 * @returns {object}
 * 
 */
function Browser(testUa){
    var ua = testUa || "",
        result=null,
        isIos,
        isAndroid,
        isIpad,
        isIphone,
        isWeixin,
        isQQ,
        isUc,
        isSafari,
        isWeibo,
        isLizhi,
        envInfo,
        phoneModel;
    // if(window && window.navigator){
    //     ua = window.navigator.userAgent.toLocaleLowerCase();
    // }
    isIos = /mac\s+os\s+x/gi.test(ua);;
    isAndroid = /android/gi.test(ua);
    isIphone = /iphone/gi.test(ua);
    isIpad = /ipad/gi.test(ua);
    isLizhi = /lizhi/gi.test(ua);
    isWeixin = /micromessenger/gi.test(ua);
    isWeibo = /weibo/gi.test(ua);
    isUc = /ucbrowser/gi.test(ua);

    return {
        isIos,
        isAndroid,
        isIphone,
        isIpad,
        isLizhi,
        isWeixin,
        isUc,
        isWeibo
    }
}

/**
 * [setCookie 设置cookie]
 * @param {string} name  [cookie变量名]
 * @param {string} value [cokkie值]
 * @param {number} day   [保存时间，单位：小时]
 */
function setCookie(name,value,day){
    var exp = new Date(),
        day =!isNaN(day) ? day : 1;

    exp.setTime(exp.getTime() + day * 60 * 60 * 1000);//有效期1小时 
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}

/**
 * [getCookie 获取cookie]
 * @param  {string} name [cookie name]
 * @returns {string}      [description]
 */
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
　　if (arr != null)
　　　　return unescape(arr[2]);
　　return null;
}


/**
 * [deleteCookie 删除cookie]
 * @param  {string} name [name]
 */
function deleteCookie(name) {
  　　setCookie(name, '', -1);
}

/**
 * [getQueryString 获取url请求参数]
 * @param  {string} name [参数名]
 * @returns {string}
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}

export default {
    getQueryString,
    getCookie,
    deleteCookie,
    setCookie,
    Browser
}