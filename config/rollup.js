var pkg = require('../package.json');

// 兼容 jsCommon 和 @yanhaijing/jsCommon 
var name = pkg.name.split('/').pop();
var version = pkg.version;

var banner = 
`/*!
 * jsCommon ${version} (https://github.com/yanhaijing/jsCommon)
 * API https://github.com/yanhaijing/jsCommon/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/jsCommon/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
