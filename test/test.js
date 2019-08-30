var expect = require('expect.js');
// var jsdom = require('mocha-jsdom');
var base = require('../dist/index.js');

describe('base.js', function() {
    describe('isEmtryObject', function() {
        it('{} 是空对象', function() {
            expect(base.isEmtryObject({})).to.equal(true);
        });
        it('{a:1} 不是空对象', function() {
            expect(base.isEmtryObject({a:1})).to.equal(false);
        });
    });
    describe('objectAssign', function() {
        it('合并object {a:1},{a:2}', function() {
            expect(JSON.stringify(base.objectAssign({a:1},{a:2}))).to.equal('{"a":2}');
        });
    });
});
describe('time.js',function(){
    describe('formatTimeStamp', function() {
        it('时间戳格式化', function() {
            expect(base.formatTimeStamp((new Date('2019-09-01')).getTime(),'YY/m/d')).to.equal('19/9/1');
        });
    });
    describe('countDown', function() {
        let  day_9 = (24*60*60*1000)*9 + Date.now() + 1000*1;//预留一秒钟的执行时间
        it('倒计时 9天', function() {
            expect(base.countDown(day_9)).to.equal('9天0小时0分0秒');
        });
        it('倒计时 9天,双位', function() {
            expect(base.countDown(day_9,{showDouble:true})).to.equal('09天00小时00分00秒');
        });
        it('自定义倒计时规则,xx小时xx分',function(){
            expect(base.countDown(day_9,{showDouble:true,utils:[60*60,60],info:['小时','分']})).to.equal('216小时00分')
        })
    });
})
describe('util.js',function(){
    describe('transformImageSize', function() {
        it('cnd图片格式转换 无尺寸', function() {
            expect(base.transformImageSize(80,'https://cdn.com/20190909/test.png')).to.equal('https://cdn.com/20190909/test_80x80.png');
        });
        it('cnd图片格式转换 80 to 100', function() {
            expect(base.transformImageSize(100,'https://cdn.com/20190909/test_80x80.png')).to.equal('https://cdn.com/20190909/test_100x100.png');
        });
        it('cnd图片格式转换 100 to 原图', function() {
            expect(base.transformImageSize(0,'https://cdn.com/20190909/test_100x100.png')).to.equal('https://cdn.com/20190909/test.png');
        });
    });
    describe('adapter', function() {
        it('数据转换器 {a:1,b:2,c:{cc:3}},{c:"a",a:"c.cc",b:"b.b"}', function() {
            expect(JSON.stringify(base.adapter({a:1,b:2,c:{cc:3}},{c:'a',a:'c.cc',b:'b.b'}))).to.equal(JSON.stringify({c:1,a:3,b:undefined}));
        });
    });
    describe('concatClass', function() {
        it('react className连接,(a,b)', function() {
            expect(base.concatClass('a','b')).to.equal('a b');
        });
    });
})
// describe('browser.js',function(){
//     jsdom();
//     describe('setCookie', function() {
//         it('设置cookie', function() {
//             expect(base.setCookie('test','abc')).to.equal(base.getCookie('test'));
//         });
//     });
//     describe('getCookie', function() {
//         it('获取cookie', function() {
//             expect(base.getCookie('test')).to.equal('abc');
//         });
//     });
//     describe('deleteCookie', function() {
//         it('删除cookie', function() {
//             base.deleteCookie('test');
//             expect(base.getCookie('test')).to.equal('');
//         });
//     });
// })
