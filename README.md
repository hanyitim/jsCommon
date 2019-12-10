## Functions

<dl>
<dt><a href="#isEmtryObject">isEmtryObject(obj)</a> ⇒ <code>Boolean</code></dt>
<dd><p>[isEmtryObject 判断Object是否为空对象]</p>
</dd>
<dt><a href="#objectAssign">objectAssign(obj1, obj2)</a> ⇒ <code>object</code></dt>
<dd><p>[objectAssign Object合并覆盖]</p>
</dd>
<dt><a href="#Browser">Browser([uaStr])</a> ⇒ <code>object</code></dt>
<dd><p>放置浏览器相关信息返回</p>
</dd>
<dt><a href="#setCookie">setCookie(name, value, day)</a></dt>
<dd><p>[setCookie 设置cookie]</p>
</dd>
<dt><a href="#getCookie">getCookie(name)</a> ⇒ <code>string</code></dt>
<dd><p>[getCookie 获取cookie]</p>
</dd>
<dt><a href="#deleteCookie">deleteCookie(name)</a></dt>
<dd><p>[deleteCookie 删除cookie]</p>
</dd>
<dt><a href="#getQueryString">getQueryString(name)</a> ⇒ <code>string</code></dt>
<dd><p>[getQueryString 获取url请求参数]</p>
</dd>
<dt><a href="#formatTimeStamp">formatTimeStamp(str, format)</a> ⇒ <code>string</code></dt>
<dd><p>formatTimeStamp 时间格式化转换</p>
</dd>
<dt><a href="#countDown">countDown(endTimeStamp, options)</a> ⇒ <code>string</code></dt>
<dd><p>倒计时</p>
</dd>
<dt><a href="#diffTime">diffTime(label, isStar)</a></dt>
<dd><p>计算代码执行diff时间</p>
</dd>
<dt><a href="#transformImageSize">transformImageSize(size, imgsrc)</a> ⇒ <code>string</code></dt>
<dd><p>裁剪cdn图片</p>
</dd>
<dt><a href="#concatClass">concatClass()</a> ⇒ <code>string</code></dt>
<dd><p>react classname 拼接</p>
</dd>
<dt><a href="#getRelesestage">getRelesestage()</a> ⇒ <code>string</code></dt>
<dd><p>判断当前环境</p>
</dd>
<dt><a href="#adapter">adapter(data, distkv)</a></dt>
<dd><p>数据转换器</p>
</dd>
<dt><a href="#throttling">throttling(fn, wait)</a></dt>
<dd><p>节流</p>
</dd>
<dt><a href="#antiShake">antiShake(fn, wait)</a></dt>
<dd><p>防抖</p>
</dd>
</dl>

<a name="isEmtryObject"></a>

## isEmtryObject(obj) ⇒ <code>Boolean</code>
[isEmtryObject 判断Object是否为空对象]

**Kind**: global function  
**Returns**: <code>Boolean</code> - [返回结果布尔值]  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | [obj] |

<a name="objectAssign"></a>

## objectAssign(obj1, obj2) ⇒ <code>object</code>
[objectAssign Object合并覆盖]

**Kind**: global function  
**Returns**: <code>object</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>Object</code> | [被覆盖对象] |
| obj2 | <code>Object</code> | [覆盖对象] |

<a name="Browser"></a>

## Browser([uaStr]) ⇒ <code>object</code>
放置浏览器相关信息返回

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| [uaStr] | <code>string</code> | 测试ua |

<a name="setCookie"></a>

## setCookie(name, value, day)
[setCookie 设置cookie]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | [cookie变量名] |
| value | <code>string</code> | [cokkie值] |
| day | <code>number</code> | [保存时间，单位：天，默认1天] |

<a name="getCookie"></a>

## getCookie(name) ⇒ <code>string</code>
[getCookie 获取cookie]

**Kind**: global function  
**Returns**: <code>string</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | [cookie name] |

<a name="deleteCookie"></a>

## deleteCookie(name)
[deleteCookie 删除cookie]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | [name] |

<a name="getQueryString"></a>

## getQueryString(name) ⇒ <code>string</code>
[getQueryString 获取url请求参数]

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | [参数名] |

<a name="formatTimeStamp"></a>

## formatTimeStamp(str, format) ⇒ <code>string</code>
formatTimeStamp 时间格式化转换

**Kind**: global function  
**Returns**: <code>string</code> - [指定时间格式结果]  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>number</code> | [时间戳] |
| format | <code>string</code> | [时间格式，[YY|YYYY]年 [mm|m]月 [dd|d]天 [hh|h]时 [ii|i]分 [ss|s]秒] |

<a name="countDown"></a>

## countDown(endTimeStamp, options) ⇒ <code>string</code>
倒计时

**Kind**: global function  
**Returns**: <code>string</code> - 倒计时结果，小时：分：秒  

| Param | Type | Description |
| --- | --- | --- |
| endTimeStamp | <code>number</code> | 倒计时结束时间戳 |
| options | <code>Object</code> | 配置  showDouble,utils,info |

<a name="diffTime"></a>

## diffTime(label, isStar)
计算代码执行diff时间

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>\*</code> | 日志标识 |
| isStar | <code>\*</code> | 开始执行时间标记 |

<a name="transformImageSize"></a>

## transformImageSize(size, imgsrc) ⇒ <code>string</code>
裁剪cdn图片

**Kind**: global function  
**Returns**: <code>string</code> - url  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | 需要裁剪的尺寸 |
| imgsrc | <code>string</code> | 需要裁剪的图片url |

<a name="concatClass"></a>

## concatClass() ⇒ <code>string</code>
react classname 拼接

**Kind**: global function  
<a name="getRelesestage"></a>

## getRelesestage() ⇒ <code>string</code>
判断当前环境

**Kind**: global function  
**Returns**: <code>string</code> - development || pre_product || localhost || product  
<a name="adapter"></a>

## adapter(data, distkv)
数据转换器

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | 需要转换的数据 |
| distkv | <code>object</code> | 输出的键值对 |

<a name="throttling"></a>

## throttling(fn, wait)
节流

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 行为函数 |
| wait | <code>number</code> | 时间间隔(ms) |

<a name="antiShake"></a>

## antiShake(fn, wait)
防抖

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | 行为函数 |
| wait | <code>number</code> | 防抖时长(ms) |

