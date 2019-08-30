/**
 * 裁剪cdn图片
 * @param {number} size  需要裁剪的尺寸
 * @param {string} imgsrc  需要裁剪的图片url
 * @returns {string} url
 */
export function transformImageSize(size, imgsrc) {
    let reg = /(.*?)\/([\w\d]*?)(_?(\d*?)x\d*?)?\.(jpg|png|gif|jpeg)$/gi;
    let arr = reg.exec(imgsrc) || [];

    if (imgsrc && typeof imgsrc == 'string' && !isNaN(size) && size >= 0 && arr.length > 0) {
        let info = {
            address: arr[1],
            name: arr[2],
            size: arr[4] || 0,
            type: arr[5]
        };

        if (info.address && info.name && info.type && size !== info.size) {
            if (size == 0) {
                imgsrc = `${info.address}/${info.name}.${info.type}`;
            }
            else {
                imgsrc = `${info.address}/${info.name}_${size}x${size}.${info.type}`;
            }
        }
    }
    return imgsrc;
}

/**
 * react classname 拼接
 * @returns {string}
 */
export function concatClass() {
    return `${Array.prototype.join.call(arguments, ' ')}`.trim();
}

/**
 * 判断当前环境
 * @returns {string} development || pre_product || localhost || product
 */
export function getRelesestage() {
    let result = null,
        link = window.location.href.toLocaleLowerCase();
    if (link.indexOf('office') !== -1 || link.indexOf('test') !== -1) {
        result = 'development';
    }
    else if (link.indexOf('pre') !== -1) {
        result = 'pre_product';
    }
    else if (/^https?:\/\/(\d+\.){3}/i.test(link) || /localhost/i.test(link)) {
        result = 'localhost';
    }
    else {
        result = 'product';
    }
    return result;
}
/**
 * 数据转换器
 * @param {object} data 需要转换的数据
 * @param {object} distkv 输出的键值对
 */
export function adapter(data,distkv){
    let result = {};
    try{
        let getObjectVaule=function(data,keys){
            let val = data[keys.splice(0,1)[0]];
            if(keys.length >0){
                if(Object.prototype.toString.call(val) === '[object Object]'){
                    val = getObjectVaule(val,keys);
                }else{
                    return undefined;
                }
            }
            return val;
        };
        Object.keys(distkv).forEach((item) => {
            let keys = distkv[item].split('.');
            result[item] = getObjectVaule(data,keys);
        });
    }catch(e){
        console.log(e);
    }
    return result;
}