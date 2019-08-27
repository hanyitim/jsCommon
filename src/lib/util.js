/**
 * 裁剪cdn图片
 * @param {number} size  需要裁剪的尺寸
 * @param {string} imgsrc  需要裁剪的图片url
 * @returns {string} url
 */
function transformImageSize(size, imgsrc) {
    let reg = /(.*?)\/([\w\d]*?)(\_?(\d*?)x\d*?)?\.(jpg|png|gif|jpeg)$/gi;
    let arr = reg.exec(imgsrc) || [];
  
    if (imgsrc && typeof imgsrc == "string" && !isNaN(size) && size >= 0 && arr.length > 0) {
      let info = {
        address: arr[1],
        name: arr[2],
        size: arr[4] || 0,
        type: arr[5]
      }
  
      if (info.address && info.name && info.type && size !== info.size) {
        if (size == 0) {
          imgsrc = `${info.address}/${info.name + info.type}`;
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
function concatClass(){
    return Array.prototype.join.call(arguments," ");
}

/**
 * 判断当前环境
 * @returns {string} development || pre_product || localhost || product
 */
function getRelesestage() {
    let result = null,
        link = window.location.href.toLocaleLowerCase();
    if (link.indexOf('office') !== -1 || link.indexOf('test') !== -1) {
        result = "development"
    }
    else if (link.indexOf('pre') !== -1) {
        result = "pre_product"
    }
    else if (/^https?:\/\/(\d+\.){3}/i.test(link) || /localhost/i.test(link)) {
        result = "localhost";
    }
    else {
        result = "product"
    }
    return result;
}

export default {
  getRelesestage,
  transformImageSize,
  concatClass
}