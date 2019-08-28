/**
 * [isEmtryObject 判断Object是否为空对象]
 * @param  {object}  obj [obj]
 * @returns {Boolean}     [返回结果布尔值]
 */
export function isEmtryObject(obj){
    if(!obj || Object.prototype.toString.call(obj) !== '[object Object]'){
        obj = {};
    }
    for (let key in obj) {
        return false;
    }
    return true;
}

/**
 * [objectAssign Object合并覆盖]
 * @param  {Object} obj1 [被覆盖对象]
 * @param  {Object} obj2 [覆盖对象]
 * @returns {object}      [description]
 */
export function objectAssign(obj1,obj2){
    if(Object.assign && Object.assign.call){
        obj1=Object.assign(obj1,obj2);
    }else{
        for(var k in obj2){
            if(Object.prototype.toString.call(obj2[k]) === '[object Object]'){
                obj2[k] = objectAssign(obj1[k],obj2[k]);
            }
            else{
                obj1[k] = obj2[k];
            }
        }
    }
    return obj1;
}