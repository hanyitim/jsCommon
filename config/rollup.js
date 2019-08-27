var pkg = require('../package.json');

// 兼容 jsCommon 和 @hanyitim/jsCommon 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * jsCommon ${version} (https://github.com/hanyitim/jsCommon)
 * API https://github.com/hanyitim/jsCommon/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} hanyitim. All Rights Reserved
 * Licensed under MIT (https://github.com/hanyitim/jsCommon/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
