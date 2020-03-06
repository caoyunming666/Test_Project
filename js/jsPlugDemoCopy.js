
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        //兼容 requirejs
        define(['jquery'], factory);
    } else {
        if (typeof module === 'object' && module.exports) {
            //兼容 nodejs内的commonjs
            module.exports = factory(require('jquery'));
        } else {
            //兼容 页面直接通过 script 标签引入
            factory(window.jQuery);
        }
    }
}(function ($) {
    "use strict";

    /*
        这里编写插件的主要代码。
    */

    // some code...
    $.fn.fileinputLocales = {};
    $.fn.fileinputThemes = {};
    // some code...
    $.fn.fileinput.Constructor = FileInput;
}));