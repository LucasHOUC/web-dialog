;(function ($) {

    var Dialog = function (config) {

        var _this_ = this;

        //默认参数配置
        this.config = {
            //对话框的宽
            width: 'auto',
            //对话框的高
            height: 'auto',
            //对话框的提示信息
            message: null,
            //对话框的配型
            type: 'waiting',
            //按钮配置
            buttons: null,
            //弹出框延迟多久关闭
            delay: null,
            //对话框遮罩层透明度
            maskOpacity: null
        };
        //默认参数扩展
        if (config && $.isPlainObject(config)) {
            $.extend(this.config, config);
        } else {
            this.isConfig = true;
        }
    };
    Dialog.prototype = {};

    window.Dialog = Dialog;

})(Zepto);