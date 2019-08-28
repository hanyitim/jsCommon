var pkg = require('../package.json');

// 兼容 jsfunc 和 @hanyitim/jsfunc 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * jsfunc ${version} (https://github.com/hanyitim/jsfunc)
 * API https://github.com/hanyitim/jsfunc/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} hanyitim. All Rights Reserved
 * Licensed under MIT (https://github.com/hanyitim/jsfunc/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
