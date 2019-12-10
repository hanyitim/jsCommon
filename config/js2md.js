const js2md = require('jsdoc-to-markdown'),
      path = require('path'),
      fs = require('fs');
console.log(path.join(__dirname,'../src/lib/*.js'));
js2md.render({files:path.join(__dirname,'../src/lib/*.js')}).then((res)=>{
    console.log(res);
    fs.writeFileSync(path.join(__dirname,'../README.md'),res,'utf8')
})