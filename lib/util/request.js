import param from './param.js';

var processRequestResponse = function (promise, url) {
    var color = 'color: #8a6d3b;';
    return promise.then(function (res) {
        return res.json();
    }).then(function (json) {
        if (json.code === 0) {
            return json.data;
        } else {
            console.log('%c*** Request url: %s、code: %s、msg: %s', color, url, json.code, json.msg);
            return Promise.reject(json.msg || '位置错误');
        }
    }).catch(function (reason) {
        console.log('%c*** Request catch %s', color, reason);
        // reason 是个对象。目前先给字符串。吧。后续有需要在扩展
        return Promise.reject('' + reason);
    });
};

var Request = function (url, options) {
    this._data = {};
    this.url = url;
    this.options = Object.assign({
        method: 'get',
        credentials: 'include' // 需要设置才能获取cookie
    }, options);
};
Request.prototype = {
    data: function (data) {
        this._data = data || {};
        return this;
    },
    json: function (data) {
        this._data = JSON.stringify(data);
        return this;
    },
    get: function () {
        var p = param(this._data);
        var newUrl = this.url + (this.url.indexOf('?') > -1 ? '&' : '?') + p;

        return processRequestResponse(fetch(newUrl, this.options), this.url);
    },
    post: function () {
        var data = this._data;
        var body;
        // 兼容传json string 的情况
        if (toString.call(data) === '[object Object]') {
            body = new FormData();
            for (var e in data) {
                body.append(e, data[e]);
            }
        }else{
            body = data;
        }
        this.options.method = 'post';
        this.options.body = body;
        return processRequestResponse(fetch(this.url, this.options), this.url);
    }
};

var RequestFactory = function (url, options) {
    return new Request(url, options);
};

module.exports = RequestFactory;