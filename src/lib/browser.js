/**
 * 放置浏览器相关信息返回
 * @param {string} [uaStr]  测试ua
 * @returns {object}
 * 
 */
export function Browser(uaStr) {
    var ua = uaStr || '',
        isIos,
        isAndroid,
        isIpad,
        isIphone,
        isWeixin,
        isUc,
        isWeibo,
        isLizhi;
    isIos = /mac\s+os\s+x/gi.test(ua);
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
    };
}

/**
 * [setCookie 设置cookie]
 * @param {string} name  [cookie变量名]
 * @param {string} value [cokkie值]
 * @param {number} options   [cookie配置]
 */
export function setCookie(name, value, options={}) {
    let optionsKey = Object.keys(options),
        optionsStr = optionsKey.map((option)=>{
            return `${option}=${options[option]};`;
        });
    optionsStr.unshift(`${name}=${escape(value)};`);
    document.cookie = optionsStr.join("");
}

/**
 * [getCookie 获取cookie]
 * @param  {string} name [cookie name]
 * @returns {string}      [description]
 */
export function getCookie(name) {
    var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr != null) {
        return unescape(arr[2]);
    }
    return null;
}


/**
 * [deleteCookie 删除cookie]
 * @param  {string} name [name]
 */
export function deleteCookie(name) {
    if(!name || !getCookie(name)) return false; 
    setCookie(name, '', {
        expires:'Thu, 01 Jan 1970 00:00:00 GMT'
    });
}

/**
 * [getQueryString 获取url请求参数]
 * @param  {string} name [参数名]
 * @returns {string}
 */
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]); return null;
}

/**
 * [getQueryGroup 获取url请求参数]
 * @returns {object}
 */
export function getQueryGroup() {
    var paramArray = window.location.search.match(/[a-zA-Z0-9]+=[^&]{0,}/gi),
        result = {};
    Array.isArray(paramArray) && paramArray.forEach((item)=>{
        let param = item.split('=');
        if(Array.isArray(param) && param[1]){
            result[param[0]] = param[1];
        }
    });
    return result
}
