/**
 * Copyright (C) 2015 tieba.baidu.com
 * logger.js
 *
 * changelog
 * 2015-11-23[19:08:38]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */

var keys = 'info,log,debug,warn,error'.split(',');

var defaultLog = console.log || function () {};

export var Logger = {};

keys.forEach(function (key) {
    Logger[key] = function () {
        (console[key] || defaultLog).apply(console, arguments);
    };
});