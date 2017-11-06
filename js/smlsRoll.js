/**
 * smlsRoll  1.0.0
 * Author:  rwaiting
 * License: MIT
 * Date:    2017-11-06
 */
;(function (undefined) {
    'use strict';
    var smlsRoll = function (container, params) {
        var defaults = {
            speed: 30,
            direction: 'top',
            wrapper: 'rollWrapper',
            source: 'rollSource',
            copy: 'rollCopy',
            item: 'rollItem',
            boxWidth: 300,
            boxHeight: 300,
            boxLength: ''
        };
        this.params = this.extend(defaults, params, true);
        this.params.container = container || 'rollContainer';
        this.intTimer = [];
        this._init();
    };

    smlsRoll.prototype = {
        _init: function () {
            var _this = this;
            var s = _this.params;
            var w = _this.getClass(s.wrapper)[0];
            var b = _this.getClass(s.source)[0];
            var p = _this.createEle('ul', s.copy, b, w);
            var e = [s.wrapper, s.source, s.copy, s.item];
            e.forEach(function (v) {
                if (!_this.hasClass(v, 'rollfl')) {
                    _this.addClass(v, 'rollfl');
                }
            });
            _this._execute(s.direction);
        },
        _execute: function (d) {
            var _this = this;
            var s = _this.params;
            var c = _this.getClass(s.container)[0];
            var w = _this.getClass(s.wrapper)[0];
            var b = _this.getClass(s.source)[0];
            var i = _this.getClass(s.item);
            var l = i.length;
            if (d === 'left' || d === 'right') {
                var csw;
                var ww = 0;
                for (var n = 0; n < l; n++) {
                    ww += i[n].offsetWidth;
                }
                if (s.boxLength) {
                    csw = (s.boxLength / 2) * i[0];
                } else {
                    csw = s.boxWidth;
                }
                c.style.width = csw + 'px';
                w.style.width = ww + 'px';
            } else {
                var ch, csh;
                var e = [s.wrapper, s.source, s.copy, s.item];
                e.forEach(function (v) {
                    if (!_this.hasClass(v, 'expand')) {
                        _this.addClass(v, 'expand');
                    }
                });
                var bh = b.offsetHeight;
                var ih = i[0].offsetHeight;

                if (s.boxLength) {
                    ch = s.boxLength * ih;
                } else {
                    ch = s.boxHeight;
                }
                if (ch <= bh) {
                    csh = ch;
                } else {
                    csh = bh;
                }
                c.style.height = csh + 'px';
            }

            // 设置定时器
            _this.intTimer[i] = setInterval(function () {
                _this._marquee(d)
            }, s.speed);

            // 鼠标悬停暂停
            c.onmouseover = function () {
                clearInterval(_this.intTimer[i]);
            };

            // 鼠标离开滚动
            c.onmouseout = function () {
                if (_this.isEleInViewport(c)) {
                    _this.intTimer[i] = setInterval(function () {
                        _this._marquee(d)
                    }, s.speed);
                }
            };

            window.onscroll = function () {
                clearInterval(_this.intTimer[i]);
                if (_this.isEleInViewport(c)) {
                    _this.intTimer[i] = setInterval(function () {
                        _this._marquee(d)
                    }, s.speed);
                }
            }
        },
        _marquee: function (q) {
            var _this = this;
            var s = _this.params;
            var c = _this.getClass(s.container)[0];
            var b = _this.getClass(s.source)[0];
            var bw = b.offsetWidth;
            var bh = b.offsetHeight;
            switch (q) {
                case 'bottom':
                    var ct = c.scrollTop;
                    if (ct === 0) {
                        ct = bh;
                    } else {
                        ct--;
                    }
                    c.scrollTop = ct;
                    break;
                case 'left':
                    var cl = c.scrollLeft;
                    if (cl >= bw) {
                        cl = 0;
                    } else {
                        cl++;
                    }
                    c.scrollLeft = cl;
                    break;
                case 'right':
                    var cl = c.scrollLeft;
                    if (cl === 0) {
                        cl = bw;
                    } else {
                        cl--;
                    }
                    c.scrollLeft = cl;
                    break;
                default:
                    var ct = c.scrollTop;
                    if (ct >= bh) {
                        ct = 0;
                    } else {
                        ct++;
                    }
                    c.scrollTop = ct;
                    break;
            }
        },
        extend: function (f, o, r) {
            for (var key in o) {
                if (o.hasOwnProperty(key) && (!f.hasOwnProperty(key) || r)) {
                    f[key] = o[key];
                }
            }
            return f;
        },
        getClass: function (g) {
            var r = document.getElementsByClassName(g);
            return r;
        },
        hasClass: function (h, n) {
            var _this = this;
            if (!_this.getClass(h)[0]) {
                return false;
            } else {
                return _this.getClass(h)[0].classList.contains(n);
            }
        },
        addClass: function (a, c) {
            var _this = this;
            var m = _this.getClass(a);
            if (typeof c === 'undefined') {
                return m;
            }
            var cs = c.split(' ');
            for (var i = 0; i < cs.length; i++) {
                for (var j = 0; j < m.length; j++) {
                    m[j].classList.add(cs[i]);
                }
            }
            return m;
        },
        createEle: function (e, c, i, a) {
            var u = document.createElement(e);
            u.className = c;
            u.innerHTML = i.innerHTML;
            a.appendChild(u);
            return u;
        },
        isEleInViewport: function (e) {
            var r = e.getBoundingClientRect();
            var w = (window.innerWidth) || (document.documentElement.clientWidth);
            var h = (window.innerHeight) || (document.documentElement.clientHeight);
            var ew = e.offsetWidth;
            var eh = e.offsetHeight;
            return (
                (r.top >= 0 && r.top <= h && r.left >= 0 && r.left <= w) || (r.bottom >= 0 && r.bottom <= (h + eh) && r.right >= 0 && r.right <= (w + ew))
            );
        }
    };

    window.smlsRoll = smlsRoll;

    if (typeof(module) !== 'undefined') {
        module.exports = window.smlsRoll;
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            'use strict';
            return window.smlsRoll;
        });
    }
}());