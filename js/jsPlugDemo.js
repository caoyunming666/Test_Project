/**
 * (function(){}()); 这种写法是js插件常用写法，把插件代码封装在一个立即执行函数(闭包)内。
 * (理解这种写法需要明白几个概念：表达式，函数表达式，函数声明，尤其是表达式的概念理解后对阅读代码的能力会有较大的提升)
 * 
 * 下面的例子中 factory 这个参数是 匿名函数的形参，其类型是 函数类型(js中的一种常用类型)，需要一个参数 $ 。
 * 了解了 factory 这个参数所代表的类型，就不难理解接下来的：
 *     1， define(['jquery'], factory); 
 *     2， module.exports = factory(require('jquery'));
 *     3， factory(window.jQuery);
 *      
 *  先看第1种：
 *      这种写法是为了兼容 requirejs/AMD规范。其中 define(requirejs定义的) 函数的第一个参数 ['jquery'] 是把jquery.js 加载进来，并作为 
 *      define 函数的第二个参数 factory函数 的参数传入;
 * 
 *  第2种：
 *      module.exports = factory(require('jquery'));  module.exports 是nodejs(一个js服务器)中的一个属性, 等号 右边的代码
 *      factory(require('jquery')); 就是把jquery作为参数传给 factory。
 * 
 *  第3种：
 *      factory(window.jQuery); 这是js函数调用的常规写法了，不多做说明。
 */
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
}(function ($) {//这个匿名函数被当作参数传入上面的函数内：factory。这也是整个js插件的主要内容，上面的代码只是为了兼容各种js的运行环境
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