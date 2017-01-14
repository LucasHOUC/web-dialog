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

        //创建基本的DOM
        this.body = $('body');
        //创建遮罩层
        this.mask = $('<div class="g-dialog-container">');
        //创建弹出框
        this.win = $('<div class="dialog-window">');
        //创建弹出框头部
        this.winHeader = $('<div class="dialog-header"></div>');
        //创建提示信息
        this.winContent = $('<div class="dialog-content">');
        //创建弹出框按钮组
        this.winFooter = $('<div class="dialog-footer">');

        //渲染DOM
        this.create();

    };
    Dialog.prototype = {
        //创建弹出框
        create: function () {

            var _this_ = this,
                config = this.config,
                mask = this.mask,
                win = this.win,
                header = this.winHeader,
                content = this.winContent,
                footer = this.winFooter,
                body = this.body;

            //如果没有传递任何配置参数
            //就弹出一个等待的图标形式的弹框
            if (this.isConfig) {
                win.append(header.addClass('waiting'));
                mask.append(win);
                body.append(mask);
            } else {

            }
        }
    };

    window.Dialog = Dialog;

})(Zepto);