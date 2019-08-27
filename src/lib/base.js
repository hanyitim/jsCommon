

/**
 * [isFunction 判断是否为Function]
 * @param  {*}  arg [需要判断类型的参数]
 * @returns {Boolean}     [返回结果布尔值]
 */
function isFunction(arg){
    return typeof arg == "function";
}


/**
 * [isObject 判断是否为Object]
 * @param  {*}  arg [需要判断类型的参数]
 * @returns {Boolean}     [返回结果布尔值]
 */
function isObject(arg){
    return Object.prototype.toString.call(arg) == `[object Object]`;
}


/**
 * [isArray 判断是否为Array]
 * @param  {*}  arg [需要判断类型的参数]
 * @returns {Boolean}     [返回结果布尔值]
 */
function isArray(arg){
    return typeof arg == "object" && arg.constructor == Array;
}

/**
 * [isEmtryObject 判断Object是否为空对象]
 * @param  {object}  obj [obj]
 * @returns {Boolean}     [返回结果布尔值]
 */
function isEmtryObject(obj){
    if(!obj || !isObject(obj)){
        obj = {};
    }
    for (key in obj) {
        return false;
    }
    return true
}

/**
 * [objectAssign Object合并覆盖]
 * @param  {Object} obj1 [被覆盖对象]
 * @param  {Object} obj2 [覆盖对象]
 * @returns {object}      [description]
 */
function objectAssign(obj1,obj2){
    if(Object.assign && Object.assign.call){
        obj1=Object.assign(obj1,obj2);
    }else{
        for(var k in obj2){
            if(isObject(obj2[k])){
                obj2[k] = objectAssign(obj1[k],obj2[k]);
            }
            else{
                obj1[k] = obj2[k];
            }
        }
    }
    return obj1;
}
export default {
    isFunction,
    isObject,
    isArray,
    isEmtryObject,
    objectAssign
}