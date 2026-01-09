(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode("@tailwind base;@tailwind components;@tailwind utilities;@layer base{body{@apply bg-fashion-white text-fashion-black antialiased selection:bg-fashion-black selection:text-fashion-white;}}:root{--fashion-black: #12100E;--fashion-white: #F2EFE9;--fashion-gray: #5C554F;--fashion-dark-beige: #CFC8BC;--fashion-dark-brown: #2A231E;--fashion-accent: #8F3434}.dark{--fashion-black: #F2EFE9;--fashion-white: #12100E}@keyframes blurIn{0%{filter:blur(15px);opacity:0;transform:scale(.98)}to{filter:blur(0);opacity:1;transform:scale(1)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}.animate-blur-in{animation:blurIn 1.5s cubic-bezier(.2,.8,.2,1) forwards}.animate-fade-in-up{animation:fadeInUp 1s ease-out forwards}.animate-fade-in{animation:fadeIn .8s ease-out forwards}.animate-slide-in{animation:slideIn .5s ease-out forwards}.fade-in{animation:fadeIn .8s ease-out forwards}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
function Xd(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var zc = { exports: {} }, st = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function dm() {
  if (jd) return st;
  jd = 1;
  var v = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), L = Symbol.for("react.context"), bt = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), ft = Symbol.iterator;
  function it(s) {
    return s === null || typeof s != "object" ? null : (s = ft && s[ft] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var W = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ot = Object.assign, dt = {};
  function B(s, _, g) {
    this.props = s, this.context = _, this.refs = dt, this.updater = g || W;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(s, _) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, _, "setState");
  }, B.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function X() {
  }
  X.prototype = B.prototype;
  function G(s, _, g) {
    this.props = s, this.context = _, this.refs = dt, this.updater = g || W;
  }
  var I = G.prototype = new X();
  I.constructor = G, ot(I, B.prototype), I.isPureReactComponent = !0;
  var ut = Array.isArray;
  function lt() {
  }
  var R = { H: null, A: null, T: null, S: null }, h = Object.prototype.hasOwnProperty;
  function m(s, _, g) {
    var j = g.ref;
    return {
      $$typeof: v,
      type: s,
      key: _,
      ref: j !== void 0 ? j : null,
      props: g
    };
  }
  function A(s, _) {
    return m(s.type, _, s.props);
  }
  function H(s) {
    return typeof s == "object" && s !== null && s.$$typeof === v;
  }
  function C(s) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(g) {
      return _[g];
    });
  }
  var F = /\/+/g;
  function gt(s, _) {
    return typeof s == "object" && s !== null && s.key != null ? C("" + s.key) : _.toString(36);
  }
  function Mt(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(lt, lt) : (s.status = "pending", s.then(
          function(_) {
            s.status === "pending" && (s.status = "fulfilled", s.value = _);
          },
          function(_) {
            s.status === "pending" && (s.status = "rejected", s.reason = _);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function E(s, _, g, j, Q) {
    var P = typeof s;
    (P === "undefined" || P === "boolean") && (s = null);
    var rt = !1;
    if (s === null) rt = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case v:
            case M:
              rt = !0;
              break;
            case $:
              return rt = s._init, E(
                rt(s._payload),
                _,
                g,
                j,
                Q
              );
          }
      }
    if (rt)
      return Q = Q(s), rt = j === "" ? "." + gt(s, 0) : j, ut(Q) ? (g = "", rt != null && (g = rt.replace(F, "$&/") + "/"), E(Q, _, g, "", function(Ht) {
        return Ht;
      })) : Q != null && (H(Q) && (Q = A(
        Q,
        g + (Q.key == null || s && s.key === Q.key ? "" : ("" + Q.key).replace(
          F,
          "$&/"
        ) + "/") + rt
      )), _.push(Q)), 1;
    rt = 0;
    var at = j === "" ? "." : j + ":";
    if (ut(s))
      for (var et = 0; et < s.length; et++)
        j = s[et], P = at + gt(j, et), rt += E(
          j,
          _,
          g,
          P,
          Q
        );
    else if (et = it(s), typeof et == "function")
      for (s = et.call(s), et = 0; !(j = s.next()).done; )
        j = j.value, P = at + gt(j, et++), rt += E(
          j,
          _,
          g,
          P,
          Q
        );
    else if (P === "object") {
      if (typeof s.then == "function")
        return E(
          Mt(s),
          _,
          g,
          j,
          Q
        );
      throw _ = String(s), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return rt;
  }
  function N(s, _, g) {
    if (s == null) return s;
    var j = [], Q = 0;
    return E(s, j, "", "", function(P) {
      return _.call(g, P, Q++);
    }), j;
  }
  function q(s) {
    if (s._status === -1) {
      var _ = s._result;
      _ = _(), _.then(
        function(g) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = g);
        },
        function(g) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = g);
        }
      ), s._status === -1 && (s._status = 0, s._result = _);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var w = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, ct = {
    map: N,
    forEach: function(s, _, g) {
      N(
        s,
        function() {
          _.apply(this, arguments);
        },
        g
      );
    },
    count: function(s) {
      var _ = 0;
      return N(s, function() {
        _++;
      }), _;
    },
    toArray: function(s) {
      return N(s, function(_) {
        return _;
      }) || [];
    },
    only: function(s) {
      if (!H(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return st.Activity = Y, st.Children = ct, st.Component = B, st.Fragment = U, st.Profiler = V, st.PureComponent = G, st.StrictMode = c, st.Suspense = k, st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, st.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return R.H.useMemoCache(s);
    }
  }, st.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, st.cacheSignal = function() {
    return null;
  }, st.cloneElement = function(s, _, g) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var j = ot({}, s.props), Q = s.key;
    if (_ != null)
      for (P in _.key !== void 0 && (Q = "" + _.key), _)
        !h.call(_, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && _.ref === void 0 || (j[P] = _[P]);
    var P = arguments.length - 2;
    if (P === 1) j.children = g;
    else if (1 < P) {
      for (var rt = Array(P), at = 0; at < P; at++)
        rt[at] = arguments[at + 2];
      j.children = rt;
    }
    return m(s.type, Q, j);
  }, st.createContext = function(s) {
    return s = {
      $$typeof: L,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: J,
      _context: s
    }, s;
  }, st.createElement = function(s, _, g) {
    var j, Q = {}, P = null;
    if (_ != null)
      for (j in _.key !== void 0 && (P = "" + _.key), _)
        h.call(_, j) && j !== "key" && j !== "__self" && j !== "__source" && (Q[j] = _[j]);
    var rt = arguments.length - 2;
    if (rt === 1) Q.children = g;
    else if (1 < rt) {
      for (var at = Array(rt), et = 0; et < rt; et++)
        at[et] = arguments[et + 2];
      Q.children = at;
    }
    if (s && s.defaultProps)
      for (j in rt = s.defaultProps, rt)
        Q[j] === void 0 && (Q[j] = rt[j]);
    return m(s, P, Q);
  }, st.createRef = function() {
    return { current: null };
  }, st.forwardRef = function(s) {
    return { $$typeof: bt, render: s };
  }, st.isValidElement = H, st.lazy = function(s) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: s },
      _init: q
    };
  }, st.memo = function(s, _) {
    return {
      $$typeof: b,
      type: s,
      compare: _ === void 0 ? null : _
    };
  }, st.startTransition = function(s) {
    var _ = R.T, g = {};
    R.T = g;
    try {
      var j = s(), Q = R.S;
      Q !== null && Q(g, j), typeof j == "object" && j !== null && typeof j.then == "function" && j.then(lt, w);
    } catch (P) {
      w(P);
    } finally {
      _ !== null && g.types !== null && (_.types = g.types), R.T = _;
    }
  }, st.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, st.use = function(s) {
    return R.H.use(s);
  }, st.useActionState = function(s, _, g) {
    return R.H.useActionState(s, _, g);
  }, st.useCallback = function(s, _) {
    return R.H.useCallback(s, _);
  }, st.useContext = function(s) {
    return R.H.useContext(s);
  }, st.useDebugValue = function() {
  }, st.useDeferredValue = function(s, _) {
    return R.H.useDeferredValue(s, _);
  }, st.useEffect = function(s, _) {
    return R.H.useEffect(s, _);
  }, st.useEffectEvent = function(s) {
    return R.H.useEffectEvent(s);
  }, st.useId = function() {
    return R.H.useId();
  }, st.useImperativeHandle = function(s, _, g) {
    return R.H.useImperativeHandle(s, _, g);
  }, st.useInsertionEffect = function(s, _) {
    return R.H.useInsertionEffect(s, _);
  }, st.useLayoutEffect = function(s, _) {
    return R.H.useLayoutEffect(s, _);
  }, st.useMemo = function(s, _) {
    return R.H.useMemo(s, _);
  }, st.useOptimistic = function(s, _) {
    return R.H.useOptimistic(s, _);
  }, st.useReducer = function(s, _, g) {
    return R.H.useReducer(s, _, g);
  }, st.useRef = function(s) {
    return R.H.useRef(s);
  }, st.useState = function(s) {
    return R.H.useState(s);
  }, st.useSyncExternalStore = function(s, _, g) {
    return R.H.useSyncExternalStore(
      s,
      _,
      g
    );
  }, st.useTransition = function() {
    return R.H.useTransition();
  }, st.version = "19.2.3", st;
}
var Md;
function Cc() {
  return Md || (Md = 1, zc.exports = dm()), zc.exports;
}
var zt = Cc();
const Zd = /* @__PURE__ */ Xd(zt);
var Ac = { exports: {} }, Qn = {}, Oc = { exports: {} }, Dc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cd;
function hm() {
  return Cd || (Cd = 1, (function(v) {
    function M(E, N) {
      var q = E.length;
      E.push(N);
      t: for (; 0 < q; ) {
        var w = q - 1 >>> 1, ct = E[w];
        if (0 < V(ct, N))
          E[w] = N, E[q] = ct, q = w;
        else break t;
      }
    }
    function U(E) {
      return E.length === 0 ? null : E[0];
    }
    function c(E) {
      if (E.length === 0) return null;
      var N = E[0], q = E.pop();
      if (q !== N) {
        E[0] = q;
        t: for (var w = 0, ct = E.length, s = ct >>> 1; w < s; ) {
          var _ = 2 * (w + 1) - 1, g = E[_], j = _ + 1, Q = E[j];
          if (0 > V(g, q))
            j < ct && 0 > V(Q, g) ? (E[w] = Q, E[j] = q, w = j) : (E[w] = g, E[_] = q, w = _);
          else if (j < ct && 0 > V(Q, q))
            E[w] = Q, E[j] = q, w = j;
          else break t;
        }
      }
      return N;
    }
    function V(E, N) {
      var q = E.sortIndex - N.sortIndex;
      return q !== 0 ? q : E.id - N.id;
    }
    if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var J = performance;
      v.unstable_now = function() {
        return J.now();
      };
    } else {
      var L = Date, bt = L.now();
      v.unstable_now = function() {
        return L.now() - bt;
      };
    }
    var k = [], b = [], $ = 1, Y = null, ft = 3, it = !1, W = !1, ot = !1, dt = !1, B = typeof setTimeout == "function" ? setTimeout : null, X = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function I(E) {
      for (var N = U(b); N !== null; ) {
        if (N.callback === null) c(b);
        else if (N.startTime <= E)
          c(b), N.sortIndex = N.expirationTime, M(k, N);
        else break;
        N = U(b);
      }
    }
    function ut(E) {
      if (ot = !1, I(E), !W)
        if (U(k) !== null)
          W = !0, lt || (lt = !0, C());
        else {
          var N = U(b);
          N !== null && Mt(ut, N.startTime - E);
        }
    }
    var lt = !1, R = -1, h = 5, m = -1;
    function A() {
      return dt ? !0 : !(v.unstable_now() - m < h);
    }
    function H() {
      if (dt = !1, lt) {
        var E = v.unstable_now();
        m = E;
        var N = !0;
        try {
          t: {
            W = !1, ot && (ot = !1, X(R), R = -1), it = !0;
            var q = ft;
            try {
              e: {
                for (I(E), Y = U(k); Y !== null && !(Y.expirationTime > E && A()); ) {
                  var w = Y.callback;
                  if (typeof w == "function") {
                    Y.callback = null, ft = Y.priorityLevel;
                    var ct = w(
                      Y.expirationTime <= E
                    );
                    if (E = v.unstable_now(), typeof ct == "function") {
                      Y.callback = ct, I(E), N = !0;
                      break e;
                    }
                    Y === U(k) && c(k), I(E);
                  } else c(k);
                  Y = U(k);
                }
                if (Y !== null) N = !0;
                else {
                  var s = U(b);
                  s !== null && Mt(
                    ut,
                    s.startTime - E
                  ), N = !1;
                }
              }
              break t;
            } finally {
              Y = null, ft = q, it = !1;
            }
            N = void 0;
          }
        } finally {
          N ? C() : lt = !1;
        }
      }
    }
    var C;
    if (typeof G == "function")
      C = function() {
        G(H);
      };
    else if (typeof MessageChannel < "u") {
      var F = new MessageChannel(), gt = F.port2;
      F.port1.onmessage = H, C = function() {
        gt.postMessage(null);
      };
    } else
      C = function() {
        B(H, 0);
      };
    function Mt(E, N) {
      R = B(function() {
        E(v.unstable_now());
      }, N);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(E) {
      E.callback = null;
    }, v.unstable_forceFrameRate = function(E) {
      0 > E || 125 < E ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : h = 0 < E ? Math.floor(1e3 / E) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return ft;
    }, v.unstable_next = function(E) {
      switch (ft) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = ft;
      }
      var q = ft;
      ft = N;
      try {
        return E();
      } finally {
        ft = q;
      }
    }, v.unstable_requestPaint = function() {
      dt = !0;
    }, v.unstable_runWithPriority = function(E, N) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var q = ft;
      ft = E;
      try {
        return N();
      } finally {
        ft = q;
      }
    }, v.unstable_scheduleCallback = function(E, N, q) {
      var w = v.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? w + q : w) : q = w, E) {
        case 1:
          var ct = -1;
          break;
        case 2:
          ct = 250;
          break;
        case 5:
          ct = 1073741823;
          break;
        case 4:
          ct = 1e4;
          break;
        default:
          ct = 5e3;
      }
      return ct = q + ct, E = {
        id: $++,
        callback: N,
        priorityLevel: E,
        startTime: q,
        expirationTime: ct,
        sortIndex: -1
      }, q > w ? (E.sortIndex = q, M(b, E), U(k) === null && E === U(b) && (ot ? (X(R), R = -1) : ot = !0, Mt(ut, q - w))) : (E.sortIndex = ct, M(k, E), W || it || (W = !0, lt || (lt = !0, C()))), E;
    }, v.unstable_shouldYield = A, v.unstable_wrapCallback = function(E) {
      var N = ft;
      return function() {
        var q = ft;
        ft = N;
        try {
          return E.apply(this, arguments);
        } finally {
          ft = q;
        }
      };
    };
  })(Dc)), Dc;
}
var Ud;
function mm() {
  return Ud || (Ud = 1, Oc.exports = hm()), Oc.exports;
}
var Nc = { exports: {} }, he = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rd;
function ym() {
  if (Rd) return he;
  Rd = 1;
  var v = Cc();
  function M(k) {
    var b = "https://react.dev/errors/" + k;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var $ = 2; $ < arguments.length; $++)
        b += "&args[]=" + encodeURIComponent(arguments[$]);
    }
    return "Minified React error #" + k + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function U() {
  }
  var c = {
    d: {
      f: U,
      r: function() {
        throw Error(M(522));
      },
      D: U,
      C: U,
      L: U,
      m: U,
      X: U,
      S: U,
      M: U
    },
    p: 0,
    findDOMNode: null
  }, V = Symbol.for("react.portal");
  function J(k, b, $) {
    var Y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: V,
      key: Y == null ? null : "" + Y,
      children: k,
      containerInfo: b,
      implementation: $
    };
  }
  var L = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function bt(k, b) {
    if (k === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return he.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, he.createPortal = function(k, b) {
    var $ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(M(299));
    return J(k, b, null, $);
  }, he.flushSync = function(k) {
    var b = L.T, $ = c.p;
    try {
      if (L.T = null, c.p = 2, k) return k();
    } finally {
      L.T = b, c.p = $, c.d.f();
    }
  }, he.preconnect = function(k, b) {
    typeof k == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, c.d.C(k, b));
  }, he.prefetchDNS = function(k) {
    typeof k == "string" && c.d.D(k);
  }, he.preinit = function(k, b) {
    if (typeof k == "string" && b && typeof b.as == "string") {
      var $ = b.as, Y = bt($, b.crossOrigin), ft = typeof b.integrity == "string" ? b.integrity : void 0, it = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      $ === "style" ? c.d.S(
        k,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: Y,
          integrity: ft,
          fetchPriority: it
        }
      ) : $ === "script" && c.d.X(k, {
        crossOrigin: Y,
        integrity: ft,
        fetchPriority: it,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, he.preinitModule = function(k, b) {
    if (typeof k == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var $ = bt(
            b.as,
            b.crossOrigin
          );
          c.d.M(k, {
            crossOrigin: $,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && c.d.M(k);
  }, he.preload = function(k, b) {
    if (typeof k == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var $ = b.as, Y = bt($, b.crossOrigin);
      c.d.L(k, $, {
        crossOrigin: Y,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, he.preloadModule = function(k, b) {
    if (typeof k == "string")
      if (b) {
        var $ = bt(b.as, b.crossOrigin);
        c.d.m(k, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: $,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else c.d.m(k);
  }, he.requestFormReset = function(k) {
    c.d.r(k);
  }, he.unstable_batchedUpdates = function(k, b) {
    return k(b);
  }, he.useFormState = function(k, b, $) {
    return L.H.useFormState(k, b, $);
  }, he.useFormStatus = function() {
    return L.H.useHostTransitionStatus();
  }, he.version = "19.2.3", he;
}
var Hd;
function vm() {
  if (Hd) return Nc.exports;
  Hd = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (M) {
        console.error(M);
      }
  }
  return v(), Nc.exports = ym(), Nc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wd;
function bm() {
  if (wd) return Qn;
  wd = 1;
  var v = mm(), M = Cc(), U = vm();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function J(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function L(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function bt(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function k(t) {
    if (J(t) !== t)
      throw Error(c(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = J(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return k(n), t;
          if (u === a) return k(n), e;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === l) {
            i = !0, l = n, a = u;
            break;
          }
          if (f === a) {
            i = !0, a = n, l = u;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === l) {
              i = !0, l = u, a = n;
              break;
            }
            if (f === a) {
              i = !0, a = u, l = n;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (l.alternate !== a) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
    return l.stateNode.current === l ? t : e;
  }
  function $(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = $(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var Y = Object.assign, ft = Symbol.for("react.element"), it = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), dt = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), G = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ut = Symbol.for("react.suspense"), lt = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.activity"), A = Symbol.for("react.memo_cache_sentinel"), H = Symbol.iterator;
  function C(t) {
    return t === null || typeof t != "object" ? null : (t = H && t[H] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = Symbol.for("react.client.reference");
  function gt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === F ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case ot:
        return "Fragment";
      case B:
        return "Profiler";
      case dt:
        return "StrictMode";
      case ut:
        return "Suspense";
      case lt:
        return "SuspenseList";
      case m:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case W:
          return "Portal";
        case G:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case I:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case R:
          return e = t.displayName || null, e !== null ? e : gt(t.type) || "Memo";
        case h:
          e = t._payload, t = t._init;
          try {
            return gt(t(e));
          } catch {
          }
      }
    return null;
  }
  var Mt = Array.isArray, E = M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, w = [], ct = -1;
  function s(t) {
    return { current: t };
  }
  function _(t) {
    0 > ct || (t.current = w[ct], w[ct] = null, ct--);
  }
  function g(t, e) {
    ct++, w[ct] = t.current, t.current = e;
  }
  var j = s(null), Q = s(null), P = s(null), rt = s(null);
  function at(t, e) {
    switch (g(P, e), g(Q, t), g(j, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Po(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Po(e), t = td(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    _(j), g(j, t);
  }
  function et() {
    _(j), _(Q), _(P);
  }
  function Ht(t) {
    t.memoizedState !== null && g(rt, t);
    var e = j.current, l = td(e, t.type);
    e !== l && (g(Q, t), g(j, l));
  }
  function ht(t) {
    Q.current === t && (_(j), _(Q)), rt.current === t && (_(rt), Bn._currentValue = q);
  }
  var wt, Jt;
  function At(t) {
    if (wt === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        wt = e && e[1] || "", Jt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wt + t + Jt;
  }
  var Ot = !1;
  function yt(t, e) {
    if (!t || Ot) return "";
    Ot = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (T) {
                  var x = T;
                }
                Reflect.construct(t, [], D);
              } else {
                try {
                  D.call();
                } catch (T) {
                  x = T;
                }
                t.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (T) {
                x = T;
              }
              (D = t()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (T) {
            if (T && x && typeof T.stack == "string")
              return [T.stack, x.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], f = u[1];
      if (i && f) {
        var r = i.split(`
`), S = f.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < S.length && !S[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === S.length)
          for (a = r.length - 1, n = S.length - 1; 1 <= a && 0 <= n && r[a] !== S[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== S[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== S[n]) {
                  var z = `
` + r[a].replace(" at new ", " at ");
                  return t.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", t.displayName)), z;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ot = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? At(l) : "";
  }
  function ae(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return At(t.type);
      case 16:
        return At("Lazy");
      case 13:
        return t.child !== e && e !== null ? At("Suspense Fallback") : At("Suspense");
      case 19:
        return At("SuspenseList");
      case 0:
      case 15:
        return yt(t.type, !1);
      case 11:
        return yt(t.type.render, !1);
      case 1:
        return yt(t.type, !0);
      case 31:
        return At("Activity");
      default:
        return "";
    }
  }
  function Et(t) {
    try {
      var e = "", l = null;
      do
        e += ae(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var kt = Object.prototype.hasOwnProperty, Zt = v.unstable_scheduleCallback, We = v.unstable_cancelCallback, Ce = v.unstable_shouldYield, Xl = v.unstable_requestPaint, Ct = v.unstable_now, Ue = v.unstable_getCurrentPriorityLevel, Wt = v.unstable_ImmediatePriority, ie = v.unstable_UserBlockingPriority, ye = v.unstable_NormalPriority, Wa = v.unstable_LowPriority, Fa = v.unstable_IdlePriority, gl = v.log, Re = v.unstable_setDisableYieldValue, Ze = null, de = null;
  function pl(t) {
    if (typeof gl == "function" && Re(t), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(Ze, t);
      } catch {
      }
  }
  var Te = Math.clz32 ? Math.clz32 : Id, Fd = Math.log, $d = Math.LN2;
  function Id(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Fd(t) / $d | 0) | 0;
  }
  var Kn = 256, Jn = 262144, Wn = 4194304;
  function Zl(t) {
    var e = t & 42;
    if (e !== 0) return e;
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
        return 64;
      case 128:
        return 128;
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Fn(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~u, a !== 0 ? n = Zl(a) : (i &= f, i !== 0 ? n = Zl(i) : l || (l = f & ~t, l !== 0 && (n = Zl(l))))) : (f = a & ~u, f !== 0 ? n = Zl(f) : i !== 0 ? n = Zl(i) : l || (l = a & ~t, l !== 0 && (n = Zl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
  }
  function $a(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Pd(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Uc() {
    var t = Wn;
    return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), t;
  }
  function di(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ia(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function th(t, e, l, a, n, u) {
    var i = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var f = t.entanglements, r = t.expirationTimes, S = t.hiddenUpdates;
    for (l = i & ~l; 0 < l; ) {
      var z = 31 - Te(l), D = 1 << z;
      f[z] = 0, r[z] = -1;
      var x = S[z];
      if (x !== null)
        for (S[z] = null, z = 0; z < x.length; z++) {
          var T = x[z];
          T !== null && (T.lane &= -536870913);
        }
      l &= ~D;
    }
    a !== 0 && Rc(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
  }
  function Rc(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Te(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
  }
  function Hc(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var a = 31 - Te(l), n = 1 << a;
      n & e | t[a] & e && (t[a] |= e), l &= ~n;
    }
  }
  function wc(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : hi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function hi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function mi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function kc() {
    var t = N.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Td(t.type));
  }
  function qc(t, e) {
    var l = N.p;
    try {
      return N.p = t, e();
    } finally {
      N.p = l;
    }
  }
  var Sl = Math.random().toString(36).slice(2), fe = "__reactFiber$" + Sl, ve = "__reactProps$" + Sl, ra = "__reactContainer$" + Sl, yi = "__reactEvents$" + Sl, eh = "__reactListeners$" + Sl, lh = "__reactHandles$" + Sl, Bc = "__reactResources$" + Sl, Pa = "__reactMarker$" + Sl;
  function vi(t) {
    delete t[fe], delete t[ve], delete t[yi], delete t[eh], delete t[lh];
  }
  function oa(t) {
    var e = t[fe];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[ra] || l[fe]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = fd(t); t !== null; ) {
            if (l = t[fe]) return l;
            t = fd(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function da(t) {
    if (t = t[fe] || t[ra]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function tn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function ha(t) {
    var e = t[Bc];
    return e || (e = t[Bc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ne(t) {
    t[Pa] = !0;
  }
  var Yc = /* @__PURE__ */ new Set(), Lc = {};
  function Vl(t, e) {
    ma(t, e), ma(t + "Capture", e);
  }
  function ma(t, e) {
    for (Lc[t] = e, t = 0; t < e.length; t++)
      Yc.add(e[t]);
  }
  var ah = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gc = {}, Qc = {};
  function nh(t) {
    return kt.call(Qc, t) ? !0 : kt.call(Gc, t) ? !1 : ah.test(t) ? Qc[t] = !0 : (Gc[t] = !0, !1);
  }
  function $n(t, e, l) {
    if (nh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function In(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function tl(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function He(t) {
    switch (typeof t) {
      case "bigint":
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
  function Xc(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function uh(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          l = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(i) {
          l = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function bi(t) {
    if (!t._valueTracker) {
      var e = Xc(t) ? "checked" : "value";
      t._valueTracker = uh(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Zc(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), a = "";
    return t && (a = Xc(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), !0) : !1;
  }
  function Pn(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ih = /[\n"\\]/g;
  function we(t) {
    return t.replace(
      ih,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gi(t, e, l, a, n, u, i, f) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + He(e)) : t.value !== "" + He(e) && (t.value = "" + He(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? pi(t, i, He(e)) : l != null ? pi(t, i, He(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + He(f) : t.removeAttribute("name");
  }
  function Vc(t, e, l, a, n, u, i, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        bi(t);
        return;
      }
      l = l != null ? "" + He(l) : "", e = e != null ? "" + He(e) : l, f || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = f ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), bi(t);
  }
  function pi(t, e, l) {
    e === "number" && Pn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function ya(t, e, l, a) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < l.length; n++)
        e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + He(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          t[n].selected = !0, a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Kc(t, e, l) {
    if (e != null && (e = "" + He(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + He(l) : "";
  }
  function Jc(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(c(92));
        if (Mt(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), e = l;
    }
    l = He(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), bi(t);
  }
  function va(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var fh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wc(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || fh.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Fc(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
      for (var n in e)
        a = e[n], e.hasOwnProperty(n) && l[n] !== a && Wc(t, n, a);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Wc(t, u, e[u]);
  }
  function Si(t) {
    if (t.indexOf("-") === -1) return !1;
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
  var ch = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), sh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function tu(t) {
    return sh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function el() {
  }
  var xi = null;
  function _i(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ba = null, ga = null;
  function $c(t) {
    var e = da(t);
    if (e && (t = e.stateNode)) {
      var l = t[ve] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (gi(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + we(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[ve] || null;
                if (!n) throw Error(c(90));
                gi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              a = l[e], a.form === t.form && Zc(a);
          }
          break t;
        case "textarea":
          Kc(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && ya(t, !!l.multiple, e, !1);
      }
    }
  }
  var Ti = !1;
  function Ic(t, e, l) {
    if (Ti) return t(e, l);
    Ti = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Ti = !1, (ba !== null || ga !== null) && (Lu(), ba && (e = ba, t = ga, ga = ba = null, $c(e), t)))
        for (e = 0; e < t.length; e++) $c(t[e]);
    }
  }
  function en(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[ve] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        c(231, e, typeof l)
      );
    return l;
  }
  var ll = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ei = !1;
  if (ll)
    try {
      var ln = {};
      Object.defineProperty(ln, "passive", {
        get: function() {
          Ei = !0;
        }
      }), window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
    } catch {
      Ei = !1;
    }
  var xl = null, zi = null, eu = null;
  function Pc() {
    if (eu) return eu;
    var t, e = zi, l = e.length, a, n = "value" in xl ? xl.value : xl.textContent, u = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++) ;
    var i = l - t;
    for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
    return eu = n.slice(t, 1 < a ? 1 - a : void 0);
  }
  function lu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function au() {
    return !0;
  }
  function ts() {
    return !1;
  }
  function be(t) {
    function e(l, a, n, u, i) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (l = t[f], this[f] = l ? l(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? au : ts, this.isPropagationStopped = ts, this;
    }
    return Y(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = au);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = au);
      },
      persist: function() {
      },
      isPersistent: au
    }), e;
  }
  var Kl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, nu = be(Kl), an = Y({}, Kl, { view: 0, detail: 0 }), rh = be(an), Ai, Oi, nn, uu = Y({}, an, {
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
    getModifierState: Ni,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== nn && (nn && t.type === "mousemove" ? (Ai = t.screenX - nn.screenX, Oi = t.screenY - nn.screenY) : Oi = Ai = 0, nn = t), Ai);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Oi;
    }
  }), es = be(uu), oh = Y({}, uu, { dataTransfer: 0 }), dh = be(oh), hh = Y({}, an, { relatedTarget: 0 }), Di = be(hh), mh = Y({}, Kl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yh = be(mh), vh = Y({}, Kl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), bh = be(vh), gh = Y({}, Kl, { data: 0 }), ls = be(gh), ph = {
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
    MozPrintableKey: "Unidentified"
  }, Sh = {
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
    224: "Meta"
  }, xh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _h(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = xh[t]) ? !!e[t] : !1;
  }
  function Ni() {
    return _h;
  }
  var Th = Y({}, an, {
    key: function(t) {
      if (t.key) {
        var e = ph[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = lu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Sh[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ni,
    charCode: function(t) {
      return t.type === "keypress" ? lu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Eh = be(Th), zh = Y({}, uu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), as = be(zh), Ah = Y({}, an, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ni
  }), Oh = be(Ah), Dh = Y({}, Kl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Nh = be(Dh), jh = Y({}, uu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Mh = be(jh), Ch = Y({}, Kl, {
    newState: 0,
    oldState: 0
  }), Uh = be(Ch), Rh = [9, 13, 27, 32], ji = ll && "CompositionEvent" in window, un = null;
  ll && "documentMode" in document && (un = document.documentMode);
  var Hh = ll && "TextEvent" in window && !un, ns = ll && (!ji || un && 8 < un && 11 >= un), us = " ", is = !1;
  function fs(t, e) {
    switch (t) {
      case "keyup":
        return Rh.indexOf(e.keyCode) !== -1;
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
  function cs(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var pa = !1;
  function wh(t, e) {
    switch (t) {
      case "compositionend":
        return cs(e);
      case "keypress":
        return e.which !== 32 ? null : (is = !0, us);
      case "textInput":
        return t = e.data, t === us && is ? null : t;
      default:
        return null;
    }
  }
  function kh(t, e) {
    if (pa)
      return t === "compositionend" || !ji && fs(t, e) ? (t = Pc(), eu = zi = xl = null, pa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ns && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var qh = {
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
    week: !0
  };
  function ss(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!qh[t.type] : e === "textarea";
  }
  function rs(t, e, l, a) {
    ba ? ga ? ga.push(a) : ga = [a] : ba = a, e = Ju(e, "onChange"), 0 < e.length && (l = new nu(
      "onChange",
      "change",
      null,
      l,
      a
    ), t.push({ event: l, listeners: e }));
  }
  var fn = null, cn = null;
  function Bh(t) {
    Ko(t, 0);
  }
  function iu(t) {
    var e = tn(t);
    if (Zc(e)) return t;
  }
  function os(t, e) {
    if (t === "change") return e;
  }
  var ds = !1;
  if (ll) {
    var Mi;
    if (ll) {
      var Ci = "oninput" in document;
      if (!Ci) {
        var hs = document.createElement("div");
        hs.setAttribute("oninput", "return;"), Ci = typeof hs.oninput == "function";
      }
      Mi = Ci;
    } else Mi = !1;
    ds = Mi && (!document.documentMode || 9 < document.documentMode);
  }
  function ms() {
    fn && (fn.detachEvent("onpropertychange", ys), cn = fn = null);
  }
  function ys(t) {
    if (t.propertyName === "value" && iu(cn)) {
      var e = [];
      rs(
        e,
        cn,
        t,
        _i(t)
      ), Ic(Bh, e);
    }
  }
  function Yh(t, e, l) {
    t === "focusin" ? (ms(), fn = e, cn = l, fn.attachEvent("onpropertychange", ys)) : t === "focusout" && ms();
  }
  function Lh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return iu(cn);
  }
  function Gh(t, e) {
    if (t === "click") return iu(e);
  }
  function Qh(t, e) {
    if (t === "input" || t === "change")
      return iu(e);
  }
  function Xh(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Ee = typeof Object.is == "function" ? Object.is : Xh;
  function sn(t, e) {
    if (Ee(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!kt.call(e, n) || !Ee(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function vs(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function bs(t, e) {
    var l = vs(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = t + l.textContent.length, t <= e && a >= e)
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = vs(l);
    }
  }
  function gs(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? gs(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function ps(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Pn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Pn(t.document);
    }
    return e;
  }
  function Ui(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var Zh = ll && "documentMode" in document && 11 >= document.documentMode, Sa = null, Ri = null, rn = null, Hi = !1;
  function Ss(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Hi || Sa == null || Sa !== Pn(a) || (a = Sa, "selectionStart" in a && Ui(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), rn && sn(rn, a) || (rn = a, a = Ju(Ri, "onSelect"), 0 < a.length && (e = new nu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: a }), e.target = Sa)));
  }
  function Jl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var xa = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionrun: Jl("Transition", "TransitionRun"),
    transitionstart: Jl("Transition", "TransitionStart"),
    transitioncancel: Jl("Transition", "TransitionCancel"),
    transitionend: Jl("Transition", "TransitionEnd")
  }, wi = {}, xs = {};
  ll && (xs = document.createElement("div").style, "AnimationEvent" in window || (delete xa.animationend.animation, delete xa.animationiteration.animation, delete xa.animationstart.animation), "TransitionEvent" in window || delete xa.transitionend.transition);
  function Wl(t) {
    if (wi[t]) return wi[t];
    if (!xa[t]) return t;
    var e = xa[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in xs)
        return wi[t] = e[l];
    return t;
  }
  var _s = Wl("animationend"), Ts = Wl("animationiteration"), Es = Wl("animationstart"), Vh = Wl("transitionrun"), Kh = Wl("transitionstart"), Jh = Wl("transitioncancel"), zs = Wl("transitionend"), As = /* @__PURE__ */ new Map(), ki = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ki.push("scrollEnd");
  function Ve(t, e) {
    As.set(t, e), Vl(e, [t]);
  }
  var fu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, ke = [], _a = 0, qi = 0;
  function cu() {
    for (var t = _a, e = qi = _a = 0; e < t; ) {
      var l = ke[e];
      ke[e++] = null;
      var a = ke[e];
      ke[e++] = null;
      var n = ke[e];
      ke[e++] = null;
      var u = ke[e];
      if (ke[e++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && Os(l, n, u);
    }
  }
  function su(t, e, l, a) {
    ke[_a++] = t, ke[_a++] = e, ke[_a++] = l, ke[_a++] = a, qi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Bi(t, e, l, a) {
    return su(t, e, l, a), ru(t);
  }
  function Fl(t, e) {
    return su(t, null, null, e), ru(t);
  }
  function Os(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = t.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - Te(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [e] : a.push(e), e.lane = l | 536870912), u) : null;
  }
  function ru(t) {
    if (50 < Cn)
      throw Cn = 0, Wf = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ta = {};
  function Wh(t, e, l, a) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ze(t, e, l, a) {
    return new Wh(t, e, l, a);
  }
  function Yi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function al(t, e) {
    var l = t.alternate;
    return l === null ? (l = ze(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Ds(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function ou(t, e, l, a, n, u) {
    var i = 0;
    if (a = t, typeof t == "function") Yi(t) && (i = 1);
    else if (typeof t == "string")
      i = tm(
        t,
        l,
        j.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case m:
          return t = ze(31, l, e, n), t.elementType = m, t.lanes = u, t;
        case ot:
          return $l(l.children, n, u, e);
        case dt:
          i = 8, n |= 24;
          break;
        case B:
          return t = ze(12, l, e, n | 2), t.elementType = B, t.lanes = u, t;
        case ut:
          return t = ze(13, l, e, n), t.elementType = ut, t.lanes = u, t;
        case lt:
          return t = ze(19, l, e, n), t.elementType = lt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case G:
                i = 10;
                break t;
              case X:
                i = 9;
                break t;
              case I:
                i = 11;
                break t;
              case R:
                i = 14;
                break t;
              case h:
                i = 16, a = null;
                break t;
            }
          i = 29, l = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = ze(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function $l(t, e, l, a) {
    return t = ze(7, t, a, e), t.lanes = l, t;
  }
  function Li(t, e, l) {
    return t = ze(6, t, null, e), t.lanes = l, t;
  }
  function Ns(t) {
    var e = ze(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Gi(t, e, l) {
    return e = ze(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var js = /* @__PURE__ */ new WeakMap();
  function qe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = js.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Et(e)
      }, js.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Et(e)
    };
  }
  var Ea = [], za = 0, du = null, on = 0, Be = [], Ye = 0, _l = null, Fe = 1, $e = "";
  function nl(t, e) {
    Ea[za++] = on, Ea[za++] = du, du = t, on = e;
  }
  function Ms(t, e, l) {
    Be[Ye++] = Fe, Be[Ye++] = $e, Be[Ye++] = _l, _l = t;
    var a = Fe;
    t = $e;
    var n = 32 - Te(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - Te(e) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Fe = 1 << 32 - Te(e) + n | l << n | a, $e = u + t;
    } else
      Fe = 1 << u | l << n | a, $e = t;
  }
  function Qi(t) {
    t.return !== null && (nl(t, 1), Ms(t, 1, 0));
  }
  function Xi(t) {
    for (; t === du; )
      du = Ea[--za], Ea[za] = null, on = Ea[--za], Ea[za] = null;
    for (; t === _l; )
      _l = Be[--Ye], Be[Ye] = null, $e = Be[--Ye], Be[Ye] = null, Fe = Be[--Ye], Be[Ye] = null;
  }
  function Cs(t, e) {
    Be[Ye++] = Fe, Be[Ye++] = $e, Be[Ye++] = _l, Fe = e.id, $e = e.overflow, _l = t;
  }
  var ce = null, Gt = null, Tt = !1, Tl = null, Le = !1, Zi = Error(c(519));
  function El(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw dn(qe(e, t)), Zi;
  }
  function Us(t) {
    var e = t.stateNode, l = t.type, a = t.memoizedProps;
    switch (e[fe] = t, e[ve] = a, l) {
      case "dialog":
        St("cancel", e), St("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        St("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Rn.length; l++)
          St(Rn[l], e);
        break;
      case "source":
        St("error", e);
        break;
      case "img":
      case "image":
      case "link":
        St("error", e), St("load", e);
        break;
      case "details":
        St("toggle", e);
        break;
      case "input":
        St("invalid", e), Vc(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        St("invalid", e);
        break;
      case "textarea":
        St("invalid", e), Jc(e, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === !0 || $o(e.textContent, l) ? (a.popover != null && (St("beforetoggle", e), St("toggle", e)), a.onScroll != null && St("scroll", e), a.onScrollEnd != null && St("scrollend", e), a.onClick != null && (e.onclick = el), e = !0) : e = !1, e || El(t, !0);
  }
  function Rs(t) {
    for (ce = t.return; ce; )
      switch (ce.tag) {
        case 5:
        case 31:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          ce = ce.return;
      }
  }
  function Aa(t) {
    if (t !== ce) return !1;
    if (!Tt) return Rs(t), Tt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || rc(t.type, t.memoizedProps)), l = !l), l && Gt && El(t), Rs(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Gt = id(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      Gt = id(t);
    } else
      e === 27 ? (e = Gt, ql(t.type) ? (t = yc, yc = null, Gt = t) : Gt = e) : Gt = ce ? Qe(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Il() {
    Gt = ce = null, Tt = !1;
  }
  function Vi() {
    var t = Tl;
    return t !== null && (xe === null ? xe = t : xe.push.apply(
      xe,
      t
    ), Tl = null), t;
  }
  function dn(t) {
    Tl === null ? Tl = [t] : Tl.push(t);
  }
  var Ki = s(null), Pl = null, ul = null;
  function zl(t, e, l) {
    g(Ki, e._currentValue), e._currentValue = l;
  }
  function il(t) {
    t._currentValue = Ki.current, _(Ki);
  }
  function Ji(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function Wi(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var r = 0; r < e.length; r++)
            if (f.context === e[r]) {
              u.lanes |= l, f = u.alternate, f !== null && (f.lanes |= l), Ji(
                u.return,
                l,
                t
              ), a || (i = null);
              break t;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(c(341));
        i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Ji(i, l, t), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function Oa(t, e, l, a) {
    t = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(c(387));
        if (i = i.memoizedProps, i !== null) {
          var f = n.type;
          Ee(n.pendingProps.value, i.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (n === rt.current) {
        if (i = n.alternate, i === null) throw Error(c(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Bn) : t = [Bn]);
      }
      n = n.return;
    }
    t !== null && Wi(
      e,
      t,
      l,
      a
    ), e.flags |= 262144;
  }
  function hu(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ee(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ta(t) {
    Pl = t, ul = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function se(t) {
    return Hs(Pl, t);
  }
  function mu(t, e) {
    return Pl === null && ta(t), Hs(t, e);
  }
  function Hs(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, ul === null) {
      if (t === null) throw Error(c(308));
      ul = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else ul = ul.next = e;
    return l;
  }
  var Fh = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, $h = v.unstable_scheduleCallback, Ih = v.unstable_NormalPriority, It = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Fi() {
    return {
      controller: new Fh(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hn(t) {
    t.refCount--, t.refCount === 0 && $h(Ih, function() {
      t.controller.abort();
    });
  }
  var mn = null, $i = 0, Da = 0, Na = null;
  function Ph(t, e) {
    if (mn === null) {
      var l = mn = [];
      $i = 0, Da = ec(), Na = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return $i++, e.then(ws, ws), e;
  }
  function ws() {
    if (--$i === 0 && mn !== null) {
      Na !== null && (Na.status = "fulfilled");
      var t = mn;
      mn = null, Da = 0, Na = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function t0(t, e) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var ks = E.S;
  E.S = function(t, e) {
    xo = Ct(), typeof e == "object" && e !== null && typeof e.then == "function" && Ph(t, e), ks !== null && ks(t, e);
  };
  var ea = s(null);
  function Ii() {
    var t = ea.current;
    return t !== null ? t : Lt.pooledCache;
  }
  function yu(t, e) {
    e === null ? g(ea, ea.current) : g(ea, e.pool);
  }
  function qs() {
    var t = Ii();
    return t === null ? null : { parent: It._currentValue, pool: t };
  }
  var ja = Error(c(460)), Pi = Error(c(474)), vu = Error(c(542)), bu = { then: function() {
  } };
  function Bs(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ys(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(el, el), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Gs(t), t;
      default:
        if (typeof e.status == "string") e.then(el, el);
        else {
          if (t = Lt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Gs(t), t;
        }
        throw aa = e, ja;
    }
  }
  function la(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (aa = l, ja) : l;
    }
  }
  var aa = null;
  function Ls() {
    if (aa === null) throw Error(c(459));
    var t = aa;
    return aa = null, t;
  }
  function Gs(t) {
    if (t === ja || t === vu)
      throw Error(c(483));
  }
  var Ma = null, yn = 0;
  function gu(t) {
    var e = yn;
    return yn += 1, Ma === null && (Ma = []), Ys(Ma, t, e);
  }
  function vn(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function pu(t, e) {
    throw e.$$typeof === ft ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Qs(t) {
    function e(y, d) {
      if (t) {
        var p = y.deletions;
        p === null ? (y.deletions = [d], y.flags |= 16) : p.push(d);
      }
    }
    function l(y, d) {
      if (!t) return null;
      for (; d !== null; )
        e(y, d), d = d.sibling;
      return null;
    }
    function a(y) {
      for (var d = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? d.set(y.key, y) : d.set(y.index, y), y = y.sibling;
      return d;
    }
    function n(y, d) {
      return y = al(y, d), y.index = 0, y.sibling = null, y;
    }
    function u(y, d, p) {
      return y.index = p, t ? (p = y.alternate, p !== null ? (p = p.index, p < d ? (y.flags |= 67108866, d) : p) : (y.flags |= 67108866, d)) : (y.flags |= 1048576, d);
    }
    function i(y) {
      return t && y.alternate === null && (y.flags |= 67108866), y;
    }
    function f(y, d, p, O) {
      return d === null || d.tag !== 6 ? (d = Li(p, y.mode, O), d.return = y, d) : (d = n(d, p), d.return = y, d);
    }
    function r(y, d, p, O) {
      var tt = p.type;
      return tt === ot ? z(
        y,
        d,
        p.props.children,
        O,
        p.key
      ) : d !== null && (d.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === h && la(tt) === d.type) ? (d = n(d, p.props), vn(d, p), d.return = y, d) : (d = ou(
        p.type,
        p.key,
        p.props,
        null,
        y.mode,
        O
      ), vn(d, p), d.return = y, d);
    }
    function S(y, d, p, O) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Gi(p, y.mode, O), d.return = y, d) : (d = n(d, p.children || []), d.return = y, d);
    }
    function z(y, d, p, O, tt) {
      return d === null || d.tag !== 7 ? (d = $l(
        p,
        y.mode,
        O,
        tt
      ), d.return = y, d) : (d = n(d, p), d.return = y, d);
    }
    function D(y, d, p) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = Li(
          "" + d,
          y.mode,
          p
        ), d.return = y, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case it:
            return p = ou(
              d.type,
              d.key,
              d.props,
              null,
              y.mode,
              p
            ), vn(p, d), p.return = y, p;
          case W:
            return d = Gi(
              d,
              y.mode,
              p
            ), d.return = y, d;
          case h:
            return d = la(d), D(y, d, p);
        }
        if (Mt(d) || C(d))
          return d = $l(
            d,
            y.mode,
            p,
            null
          ), d.return = y, d;
        if (typeof d.then == "function")
          return D(y, gu(d), p);
        if (d.$$typeof === G)
          return D(
            y,
            mu(y, d),
            p
          );
        pu(y, d);
      }
      return null;
    }
    function x(y, d, p, O) {
      var tt = d !== null ? d.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return tt !== null ? null : f(y, d, "" + p, O);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case it:
            return p.key === tt ? r(y, d, p, O) : null;
          case W:
            return p.key === tt ? S(y, d, p, O) : null;
          case h:
            return p = la(p), x(y, d, p, O);
        }
        if (Mt(p) || C(p))
          return tt !== null ? null : z(y, d, p, O, null);
        if (typeof p.then == "function")
          return x(
            y,
            d,
            gu(p),
            O
          );
        if (p.$$typeof === G)
          return x(
            y,
            d,
            mu(y, p),
            O
          );
        pu(y, p);
      }
      return null;
    }
    function T(y, d, p, O, tt) {
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return y = y.get(p) || null, f(d, y, "" + O, tt);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case it:
            return y = y.get(
              O.key === null ? p : O.key
            ) || null, r(d, y, O, tt);
          case W:
            return y = y.get(
              O.key === null ? p : O.key
            ) || null, S(d, y, O, tt);
          case h:
            return O = la(O), T(
              y,
              d,
              p,
              O,
              tt
            );
        }
        if (Mt(O) || C(O))
          return y = y.get(p) || null, z(d, y, O, tt, null);
        if (typeof O.then == "function")
          return T(
            y,
            d,
            p,
            gu(O),
            tt
          );
        if (O.$$typeof === G)
          return T(
            y,
            d,
            p,
            mu(d, O),
            tt
          );
        pu(d, O);
      }
      return null;
    }
    function Z(y, d, p, O) {
      for (var tt = null, Dt = null, K = d, vt = d = 0, _t = null; K !== null && vt < p.length; vt++) {
        K.index > vt ? (_t = K, K = null) : _t = K.sibling;
        var Nt = x(
          y,
          K,
          p[vt],
          O
        );
        if (Nt === null) {
          K === null && (K = _t);
          break;
        }
        t && K && Nt.alternate === null && e(y, K), d = u(Nt, d, vt), Dt === null ? tt = Nt : Dt.sibling = Nt, Dt = Nt, K = _t;
      }
      if (vt === p.length)
        return l(y, K), Tt && nl(y, vt), tt;
      if (K === null) {
        for (; vt < p.length; vt++)
          K = D(y, p[vt], O), K !== null && (d = u(
            K,
            d,
            vt
          ), Dt === null ? tt = K : Dt.sibling = K, Dt = K);
        return Tt && nl(y, vt), tt;
      }
      for (K = a(K); vt < p.length; vt++)
        _t = T(
          K,
          y,
          vt,
          p[vt],
          O
        ), _t !== null && (t && _t.alternate !== null && K.delete(
          _t.key === null ? vt : _t.key
        ), d = u(
          _t,
          d,
          vt
        ), Dt === null ? tt = _t : Dt.sibling = _t, Dt = _t);
      return t && K.forEach(function(Ql) {
        return e(y, Ql);
      }), Tt && nl(y, vt), tt;
    }
    function nt(y, d, p, O) {
      if (p == null) throw Error(c(151));
      for (var tt = null, Dt = null, K = d, vt = d = 0, _t = null, Nt = p.next(); K !== null && !Nt.done; vt++, Nt = p.next()) {
        K.index > vt ? (_t = K, K = null) : _t = K.sibling;
        var Ql = x(y, K, Nt.value, O);
        if (Ql === null) {
          K === null && (K = _t);
          break;
        }
        t && K && Ql.alternate === null && e(y, K), d = u(Ql, d, vt), Dt === null ? tt = Ql : Dt.sibling = Ql, Dt = Ql, K = _t;
      }
      if (Nt.done)
        return l(y, K), Tt && nl(y, vt), tt;
      if (K === null) {
        for (; !Nt.done; vt++, Nt = p.next())
          Nt = D(y, Nt.value, O), Nt !== null && (d = u(Nt, d, vt), Dt === null ? tt = Nt : Dt.sibling = Nt, Dt = Nt);
        return Tt && nl(y, vt), tt;
      }
      for (K = a(K); !Nt.done; vt++, Nt = p.next())
        Nt = T(K, y, vt, Nt.value, O), Nt !== null && (t && Nt.alternate !== null && K.delete(Nt.key === null ? vt : Nt.key), d = u(Nt, d, vt), Dt === null ? tt = Nt : Dt.sibling = Nt, Dt = Nt);
      return t && K.forEach(function(om) {
        return e(y, om);
      }), Tt && nl(y, vt), tt;
    }
    function Yt(y, d, p, O) {
      if (typeof p == "object" && p !== null && p.type === ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case it:
            t: {
              for (var tt = p.key; d !== null; ) {
                if (d.key === tt) {
                  if (tt = p.type, tt === ot) {
                    if (d.tag === 7) {
                      l(
                        y,
                        d.sibling
                      ), O = n(
                        d,
                        p.props.children
                      ), O.return = y, y = O;
                      break t;
                    }
                  } else if (d.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === h && la(tt) === d.type) {
                    l(
                      y,
                      d.sibling
                    ), O = n(d, p.props), vn(O, p), O.return = y, y = O;
                    break t;
                  }
                  l(y, d);
                  break;
                } else e(y, d);
                d = d.sibling;
              }
              p.type === ot ? (O = $l(
                p.props.children,
                y.mode,
                O,
                p.key
              ), O.return = y, y = O) : (O = ou(
                p.type,
                p.key,
                p.props,
                null,
                y.mode,
                O
              ), vn(O, p), O.return = y, y = O);
            }
            return i(y);
          case W:
            t: {
              for (tt = p.key; d !== null; ) {
                if (d.key === tt)
                  if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                    l(
                      y,
                      d.sibling
                    ), O = n(d, p.children || []), O.return = y, y = O;
                    break t;
                  } else {
                    l(y, d);
                    break;
                  }
                else e(y, d);
                d = d.sibling;
              }
              O = Gi(p, y.mode, O), O.return = y, y = O;
            }
            return i(y);
          case h:
            return p = la(p), Yt(
              y,
              d,
              p,
              O
            );
        }
        if (Mt(p))
          return Z(
            y,
            d,
            p,
            O
          );
        if (C(p)) {
          if (tt = C(p), typeof tt != "function") throw Error(c(150));
          return p = tt.call(p), nt(
            y,
            d,
            p,
            O
          );
        }
        if (typeof p.then == "function")
          return Yt(
            y,
            d,
            gu(p),
            O
          );
        if (p.$$typeof === G)
          return Yt(
            y,
            d,
            mu(y, p),
            O
          );
        pu(y, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p, d !== null && d.tag === 6 ? (l(y, d.sibling), O = n(d, p), O.return = y, y = O) : (l(y, d), O = Li(p, y.mode, O), O.return = y, y = O), i(y)) : l(y, d);
    }
    return function(y, d, p, O) {
      try {
        yn = 0;
        var tt = Yt(
          y,
          d,
          p,
          O
        );
        return Ma = null, tt;
      } catch (K) {
        if (K === ja || K === vu) throw K;
        var Dt = ze(29, K, null, y.mode);
        return Dt.lanes = O, Dt.return = y, Dt;
      } finally {
      }
    };
  }
  var na = Qs(!0), Xs = Qs(!1), Al = !1;
  function tf(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ef(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ol(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Dl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (jt & 2) !== 0) {
      var n = a.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = ru(t), Os(t, null, l), e;
    }
    return su(t, a, e, l), ru(t);
  }
  function bn(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Hc(t, l);
    }
  }
  function lf(t, e) {
    var l = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var i = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, l = l.next;
        } while (l !== null);
        u === null ? n = u = e : u = u.next = e;
      } else n = u = e;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var af = !1;
  function gn() {
    if (af) {
      var t = Na;
      if (t !== null) throw t;
    }
  }
  function pn(t, e, l, a) {
    af = !1;
    var n = t.updateQueue;
    Al = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var r = f, S = r.next;
      r.next = null, i === null ? u = S : i.next = S, i = r;
      var z = t.alternate;
      z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== i && (f === null ? z.firstBaseUpdate = S : f.next = S, z.lastBaseUpdate = r));
    }
    if (u !== null) {
      var D = n.baseState;
      i = 0, z = S = r = null, f = u;
      do {
        var x = f.lane & -536870913, T = x !== f.lane;
        if (T ? (xt & x) === x : (a & x) === x) {
          x !== 0 && x === Da && (af = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, nt = f;
            x = e;
            var Yt = l;
            switch (nt.tag) {
              case 1:
                if (Z = nt.payload, typeof Z == "function") {
                  D = Z.call(Yt, D, x);
                  break t;
                }
                D = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = nt.payload, x = typeof Z == "function" ? Z.call(Yt, D, x) : Z, x == null) break t;
                D = Y({}, D, x);
                break t;
              case 2:
                Al = !0;
            }
          }
          x = f.callback, x !== null && (t.flags |= 64, T && (t.flags |= 8192), T = n.callbacks, T === null ? n.callbacks = [x] : T.push(x));
        } else
          T = {
            lane: x,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, z === null ? (S = z = T, r = D) : z = z.next = T, i |= x;
        if (f = f.next, f === null) {
          if (f = n.shared.pending, f === null)
            break;
          T = f, f = T.next, T.next = null, n.lastBaseUpdate = T, n.shared.pending = null;
        }
      } while (!0);
      z === null && (r = D), n.baseState = r, n.firstBaseUpdate = S, n.lastBaseUpdate = z, u === null && (n.shared.lanes = 0), Ul |= i, t.lanes = i, t.memoizedState = D;
    }
  }
  function Zs(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function Vs(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        Zs(l[t], e);
  }
  var Ca = s(null), Su = s(0);
  function Ks(t, e) {
    t = yl, g(Su, t), g(Ca, e), yl = t | e.baseLanes;
  }
  function nf() {
    g(Su, yl), g(Ca, Ca.current);
  }
  function uf() {
    yl = Su.current, _(Ca), _(Su);
  }
  var Ae = s(null), Ge = null;
  function Nl(t) {
    var e = t.alternate;
    g(Ft, Ft.current & 1), g(Ae, t), Ge === null && (e === null || Ca.current !== null || e.memoizedState !== null) && (Ge = t);
  }
  function ff(t) {
    g(Ft, Ft.current), g(Ae, t), Ge === null && (Ge = t);
  }
  function Js(t) {
    t.tag === 22 ? (g(Ft, Ft.current), g(Ae, t), Ge === null && (Ge = t)) : jl();
  }
  function jl() {
    g(Ft, Ft.current), g(Ae, Ae.current);
  }
  function Oe(t) {
    _(Ae), Ge === t && (Ge = null), _(Ft);
  }
  var Ft = s(0);
  function xu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || hc(l) || mc(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var fl = 0, mt = null, qt = null, Pt = null, _u = !1, Ua = !1, ua = !1, Tu = 0, Sn = 0, Ra = null, e0 = 0;
  function Vt() {
    throw Error(c(321));
  }
  function cf(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ee(t[l], e[l])) return !1;
    return !0;
  }
  function sf(t, e, l, a, n, u) {
    return fl = u, mt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, E.H = t === null || t.memoizedState === null ? Mr : Ef, ua = !1, u = l(a, n), ua = !1, Ua && (u = Fs(
      e,
      l,
      a,
      n
    )), Ws(t), u;
  }
  function Ws(t) {
    E.H = Tn;
    var e = qt !== null && qt.next !== null;
    if (fl = 0, Pt = qt = mt = null, _u = !1, Sn = 0, Ra = null, e) throw Error(c(300));
    t === null || te || (t = t.dependencies, t !== null && hu(t) && (te = !0));
  }
  function Fs(t, e, l, a) {
    mt = t;
    var n = 0;
    do {
      if (Ua && (Ra = null), Sn = 0, Ua = !1, 25 <= n) throw Error(c(301));
      if (n += 1, Pt = qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      E.H = Cr, u = e(l, a);
    } while (Ua);
    return u;
  }
  function l0() {
    var t = E.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? xn(e) : e, t = t.useState()[0], (qt !== null ? qt.memoizedState : null) !== t && (mt.flags |= 1024), e;
  }
  function rf() {
    var t = Tu !== 0;
    return Tu = 0, t;
  }
  function of(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function df(t) {
    if (_u) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      _u = !1;
    }
    fl = 0, Pt = qt = mt = null, Ua = !1, Sn = Tu = 0, Ra = null;
  }
  function me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Pt === null ? mt.memoizedState = Pt = t : Pt = Pt.next = t, Pt;
  }
  function $t() {
    if (qt === null) {
      var t = mt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = qt.next;
    var e = Pt === null ? mt.memoizedState : Pt.next;
    if (e !== null)
      Pt = e, qt = t;
    else {
      if (t === null)
        throw mt.alternate === null ? Error(c(467)) : Error(c(310));
      qt = t, t = {
        memoizedState: qt.memoizedState,
        baseState: qt.baseState,
        baseQueue: qt.baseQueue,
        queue: qt.queue,
        next: null
      }, Pt === null ? mt.memoizedState = Pt = t : Pt = Pt.next = t;
    }
    return Pt;
  }
  function Eu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xn(t) {
    var e = Sn;
    return Sn += 1, Ra === null && (Ra = []), t = Ys(Ra, t, e), e = mt, (Pt === null ? e.memoizedState : Pt.next) === null && (e = e.alternate, E.H = e === null || e.memoizedState === null ? Mr : Ef), t;
  }
  function zu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return xn(t);
      if (t.$$typeof === G) return se(t);
    }
    throw Error(c(438, String(t)));
  }
  function hf(t) {
    var e = null, l = mt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var a = mt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Eu(), mt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++)
        l[a] = A;
    return e.index++, l;
  }
  function cl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Au(t) {
    var e = $t();
    return mf(e, qt, t);
  }
  function mf(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      e.baseQueue = n = u, a.pending = null;
    }
    if (u = t.baseState, n === null) t.memoizedState = u;
    else {
      e = n.next;
      var f = i = null, r = null, S = e, z = !1;
      do {
        var D = S.lane & -536870913;
        if (D !== S.lane ? (xt & D) === D : (fl & D) === D) {
          var x = S.revertLane;
          if (x === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }), D === Da && (z = !0);
          else if ((fl & x) === x) {
            S = S.next, x === Da && (z = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, r === null ? (f = r = D, i = u) : r = r.next = D, mt.lanes |= x, Ul |= x;
          D = S.action, ua && l(u, D), u = S.hasEagerState ? S.eagerState : l(u, D);
        } else
          x = {
            lane: D,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, r === null ? (f = r = x, i = u) : r = r.next = x, mt.lanes |= D, Ul |= D;
        S = S.next;
      } while (S !== null && S !== e);
      if (r === null ? i = u : r.next = f, !Ee(u, t.memoizedState) && (te = !0, z && (l = Na, l !== null)))
        throw l;
      t.memoizedState = u, t.baseState = i, t.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function yf(t) {
    var e = $t(), l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch, n = l.pending, u = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var i = n = n.next;
      do
        u = t(u, i.action), i = i.next;
      while (i !== n);
      Ee(u, e.memoizedState) || (te = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function $s(t, e, l) {
    var a = mt, n = $t(), u = Tt;
    if (u) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = e();
    var i = !Ee(
      (qt || n).memoizedState,
      l
    );
    if (i && (n.memoizedState = l, te = !0), n = n.queue, gf(tr.bind(null, a, n, t), [
      t
    ]), n.getSnapshot !== e || i || Pt !== null && Pt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Ha(
        9,
        { destroy: void 0 },
        Ps.bind(
          null,
          a,
          n,
          l,
          e
        ),
        null
      ), Lt === null) throw Error(c(349));
      u || (fl & 127) !== 0 || Is(a, e, l);
    }
    return l;
  }
  function Is(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = mt.updateQueue, e === null ? (e = Eu(), mt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function Ps(t, e, l, a) {
    e.value = l, e.getSnapshot = a, er(e) && lr(t);
  }
  function tr(t, e, l) {
    return l(function() {
      er(e) && lr(t);
    });
  }
  function er(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ee(t, l);
    } catch {
      return !0;
    }
  }
  function lr(t) {
    var e = Fl(t, 2);
    e !== null && _e(e, t, 2);
  }
  function vf(t) {
    var e = me();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), ua) {
        pl(!0);
        try {
          l();
        } finally {
          pl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cl,
      lastRenderedState: t
    }, e;
  }
  function ar(t, e, l, a) {
    return t.baseState = l, mf(
      t,
      qt,
      typeof a == "function" ? a : cl
    );
  }
  function a0(t, e, l, a, n) {
    if (Nu(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      E.T !== null ? l(!0) : u.isTransition = !1, a(u), l = e.pending, l === null ? (u.next = e.pending = u, nr(e, u)) : (u.next = l.next, e.pending = l.next = u);
    }
  }
  function nr(t, e) {
    var l = e.action, a = e.payload, n = t.state;
    if (e.isTransition) {
      var u = E.T, i = {};
      E.T = i;
      try {
        var f = l(n, a), r = E.S;
        r !== null && r(i, f), ur(t, e, f);
      } catch (S) {
        bf(t, e, S);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), E.T = u;
      }
    } else
      try {
        u = l(n, a), ur(t, e, u);
      } catch (S) {
        bf(t, e, S);
      }
  }
  function ur(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        ir(t, e, a);
      },
      function(a) {
        return bf(t, e, a);
      }
    ) : ir(t, e, l);
  }
  function ir(t, e, l) {
    e.status = "fulfilled", e.value = l, fr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, nr(t, l)));
  }
  function bf(t, e, l) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = l, fr(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function fr(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function cr(t, e) {
    return e;
  }
  function sr(t, e) {
    if (Tt) {
      var l = Lt.formState;
      if (l !== null) {
        t: {
          var a = mt;
          if (Tt) {
            if (Gt) {
              e: {
                for (var n = Gt, u = Le; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (n = Qe(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Gt = Qe(
                  n.nextSibling
                ), a = n.data === "F!";
                break t;
              }
            }
            El(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return l = me(), l.memoizedState = l.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e
    }, l.queue = a, l = Dr.bind(
      null,
      mt,
      a
    ), a.dispatch = l, a = vf(!1), u = Tf.bind(
      null,
      mt,
      !1,
      a.queue
    ), a = me(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = n, l = a0.bind(
      null,
      mt,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = t, [e, l, !1];
  }
  function rr(t) {
    var e = $t();
    return or(e, qt, t);
  }
  function or(t, e, l) {
    if (e = mf(
      t,
      e,
      cr
    )[0], t = Au(cl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = xn(e);
      } catch (i) {
        throw i === ja ? vu : i;
      }
    else a = e;
    e = $t();
    var n = e.queue, u = n.dispatch;
    return l !== e.memoizedState && (mt.flags |= 2048, Ha(
      9,
      { destroy: void 0 },
      n0.bind(null, n, l),
      null
    )), [a, u, t];
  }
  function n0(t, e) {
    t.action = e;
  }
  function dr(t) {
    var e = $t(), l = qt;
    if (l !== null)
      return or(e, l, t);
    $t(), e = e.memoizedState, l = $t();
    var a = l.queue.dispatch;
    return l.memoizedState = t, [e, a, !1];
  }
  function Ha(t, e, l, a) {
    return t = { tag: t, create: l, deps: a, inst: e, next: null }, e = mt.updateQueue, e === null && (e = Eu(), mt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
  }
  function hr() {
    return $t().memoizedState;
  }
  function Ou(t, e, l, a) {
    var n = me();
    mt.flags |= t, n.memoizedState = Ha(
      1 | e,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Du(t, e, l, a) {
    var n = $t();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    qt !== null && a !== null && cf(a, qt.memoizedState.deps) ? n.memoizedState = Ha(e, u, l, a) : (mt.flags |= t, n.memoizedState = Ha(
      1 | e,
      u,
      l,
      a
    ));
  }
  function mr(t, e) {
    Ou(8390656, 8, t, e);
  }
  function gf(t, e) {
    Du(2048, 8, t, e);
  }
  function u0(t) {
    mt.flags |= 4;
    var e = mt.updateQueue;
    if (e === null)
      e = Eu(), mt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function yr(t) {
    var e = $t().memoizedState;
    return u0({ ref: e, nextImpl: t }), function() {
      if ((jt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function vr(t, e) {
    return Du(4, 2, t, e);
  }
  function br(t, e) {
    return Du(4, 4, t, e);
  }
  function gr(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function pr(t, e, l) {
    l = l != null ? l.concat([t]) : null, Du(4, 4, gr.bind(null, e, t), l);
  }
  function pf() {
  }
  function Sr(t, e) {
    var l = $t();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && cf(e, a[1]) ? a[0] : (l.memoizedState = [t, e], t);
  }
  function xr(t, e) {
    var l = $t();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && cf(e, a[1]))
      return a[0];
    if (a = t(), ua) {
      pl(!0);
      try {
        t();
      } finally {
        pl(!1);
      }
    }
    return l.memoizedState = [a, e], a;
  }
  function Sf(t, e, l) {
    return l === void 0 || (fl & 1073741824) !== 0 && (xt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = To(), mt.lanes |= t, Ul |= t, l);
  }
  function _r(t, e, l, a) {
    return Ee(l, e) ? l : Ca.current !== null ? (t = Sf(t, l, a), Ee(t, e) || (te = !0), t) : (fl & 42) === 0 || (fl & 1073741824) !== 0 && (xt & 261930) === 0 ? (te = !0, t.memoizedState = l) : (t = To(), mt.lanes |= t, Ul |= t, e);
  }
  function Tr(t, e, l, a, n) {
    var u = N.p;
    N.p = u !== 0 && 8 > u ? u : 8;
    var i = E.T, f = {};
    E.T = f, Tf(t, !1, e, l);
    try {
      var r = n(), S = E.S;
      if (S !== null && S(f, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var z = t0(
          r,
          a
        );
        _n(
          t,
          e,
          z,
          je(t)
        );
      } else
        _n(
          t,
          e,
          a,
          je(t)
        );
    } catch (D) {
      _n(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: D },
        je()
      );
    } finally {
      N.p = u, i !== null && f.types !== null && (i.types = f.types), E.T = i;
    }
  }
  function i0() {
  }
  function xf(t, e, l, a) {
    if (t.tag !== 5) throw Error(c(476));
    var n = Er(t).queue;
    Tr(
      t,
      n,
      e,
      q,
      l === null ? i0 : function() {
        return zr(t), l(a);
      }
    );
  }
  function Er(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: q
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: cl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function zr(t) {
    var e = Er(t);
    e.next === null && (e = t.alternate.memoizedState), _n(
      t,
      e.next.queue,
      {},
      je()
    );
  }
  function _f() {
    return se(Bn);
  }
  function Ar() {
    return $t().memoizedState;
  }
  function Or() {
    return $t().memoizedState;
  }
  function f0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = je();
          t = Ol(l);
          var a = Dl(e, t, l);
          a !== null && (_e(a, e, l), bn(a, e, l)), e = { cache: Fi() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function c0(t, e, l) {
    var a = je();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Nu(t) ? Nr(e, l) : (l = Bi(t, e, l, a), l !== null && (_e(l, t, a), jr(l, e, a)));
  }
  function Dr(t, e, l) {
    var a = je();
    _n(t, e, l, a);
  }
  function _n(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Nu(t)) Nr(e, n);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var i = e.lastRenderedState, f = u(i, l);
          if (n.hasEagerState = !0, n.eagerState = f, Ee(f, i))
            return su(t, e, n, 0), Lt === null && cu(), !1;
        } catch {
        } finally {
        }
      if (l = Bi(t, e, n, a), l !== null)
        return _e(l, t, a), jr(l, e, a), !0;
    }
    return !1;
  }
  function Tf(t, e, l, a) {
    if (a = {
      lane: 2,
      revertLane: ec(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Nu(t)) {
      if (e) throw Error(c(479));
    } else
      e = Bi(
        t,
        l,
        a,
        2
      ), e !== null && _e(e, t, 2);
  }
  function Nu(t) {
    var e = t.alternate;
    return t === mt || e !== null && e === mt;
  }
  function Nr(t, e) {
    Ua = _u = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function jr(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, l |= a, e.lanes = l, Hc(t, l);
    }
  }
  var Tn = {
    readContext: se,
    use: zu,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt
  };
  Tn.useEffectEvent = Vt;
  var Mr = {
    readContext: se,
    use: zu,
    useCallback: function(t, e) {
      return me().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: se,
    useEffect: mr,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, Ou(
        4194308,
        4,
        gr.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return Ou(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Ou(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = me();
      e = e === void 0 ? null : e;
      var a = t();
      if (ua) {
        pl(!0);
        try {
          t();
        } finally {
          pl(!1);
        }
      }
      return l.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, l) {
      var a = me();
      if (l !== void 0) {
        var n = l(e);
        if (ua) {
          pl(!0);
          try {
            l(e);
          } finally {
            pl(!1);
          }
        }
      } else n = e;
      return a.memoizedState = a.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, a.queue = t, t = t.dispatch = c0.bind(
        null,
        mt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = me();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vf(t);
      var e = t.queue, l = Dr.bind(null, mt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: pf,
    useDeferredValue: function(t, e) {
      var l = me();
      return Sf(l, t, e);
    },
    useTransition: function() {
      var t = vf(!1);
      return t = Tr.bind(
        null,
        mt,
        t.queue,
        !0,
        !1
      ), me().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var a = mt, n = me();
      if (Tt) {
        if (l === void 0)
          throw Error(c(407));
        l = l();
      } else {
        if (l = e(), Lt === null)
          throw Error(c(349));
        (xt & 127) !== 0 || Is(a, e, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: e };
      return n.queue = u, mr(tr.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ha(
        9,
        { destroy: void 0 },
        Ps.bind(
          null,
          a,
          u,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = me(), e = Lt.identifierPrefix;
      if (Tt) {
        var l = $e, a = Fe;
        l = (a & ~(1 << 32 - Te(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Tu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = e0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: _f,
    useFormState: sr,
    useActionState: sr,
    useOptimistic: function(t) {
      var e = me();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Tf.bind(
        null,
        mt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: hf,
    useCacheRefresh: function() {
      return me().memoizedState = f0.bind(
        null,
        mt
      );
    },
    useEffectEvent: function(t) {
      var e = me(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((jt & 2) !== 0)
          throw Error(c(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, Ef = {
    readContext: se,
    use: zu,
    useCallback: Sr,
    useContext: se,
    useEffect: gf,
    useImperativeHandle: pr,
    useInsertionEffect: vr,
    useLayoutEffect: br,
    useMemo: xr,
    useReducer: Au,
    useRef: hr,
    useState: function() {
      return Au(cl);
    },
    useDebugValue: pf,
    useDeferredValue: function(t, e) {
      var l = $t();
      return _r(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Au(cl)[0], e = $t().memoizedState;
      return [
        typeof t == "boolean" ? t : xn(t),
        e
      ];
    },
    useSyncExternalStore: $s,
    useId: Ar,
    useHostTransitionStatus: _f,
    useFormState: rr,
    useActionState: rr,
    useOptimistic: function(t, e) {
      var l = $t();
      return ar(l, qt, t, e);
    },
    useMemoCache: hf,
    useCacheRefresh: Or
  };
  Ef.useEffectEvent = yr;
  var Cr = {
    readContext: se,
    use: zu,
    useCallback: Sr,
    useContext: se,
    useEffect: gf,
    useImperativeHandle: pr,
    useInsertionEffect: vr,
    useLayoutEffect: br,
    useMemo: xr,
    useReducer: yf,
    useRef: hr,
    useState: function() {
      return yf(cl);
    },
    useDebugValue: pf,
    useDeferredValue: function(t, e) {
      var l = $t();
      return qt === null ? Sf(l, t, e) : _r(
        l,
        qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = yf(cl)[0], e = $t().memoizedState;
      return [
        typeof t == "boolean" ? t : xn(t),
        e
      ];
    },
    useSyncExternalStore: $s,
    useId: Ar,
    useHostTransitionStatus: _f,
    useFormState: dr,
    useActionState: dr,
    useOptimistic: function(t, e) {
      var l = $t();
      return qt !== null ? ar(l, qt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: hf,
    useCacheRefresh: Or
  };
  Cr.useEffectEvent = yr;
  function zf(t, e, l, a) {
    e = t.memoizedState, l = l(a, e), l = l == null ? e : Y({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var Af = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var a = je(), n = Ol(a);
      n.payload = e, l != null && (n.callback = l), e = Dl(t, n, a), e !== null && (_e(e, t, a), bn(e, t, a));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var a = je(), n = Ol(a);
      n.tag = 1, n.payload = e, l != null && (n.callback = l), e = Dl(t, n, a), e !== null && (_e(e, t, a), bn(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = je(), a = Ol(l);
      a.tag = 2, e != null && (a.callback = e), e = Dl(t, a, l), e !== null && (_e(e, t, l), bn(e, t, l));
    }
  };
  function Ur(t, e, l, a, n, u, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !sn(l, a) || !sn(n, u) : !0;
  }
  function Rr(t, e, l, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Af.enqueueReplaceState(e, e.state, null);
  }
  function ia(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e)
        a !== "ref" && (l[a] = e[a]);
    }
    if (t = t.defaultProps) {
      l === e && (l = Y({}, l));
      for (var n in t)
        l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function Hr(t) {
    fu(t);
  }
  function wr(t) {
    console.error(t);
  }
  function kr(t) {
    fu(t);
  }
  function ju(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function qr(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Of(t, e, l) {
    return l = Ol(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ju(t, e);
    }, l;
  }
  function Br(t) {
    return t = Ol(t), t.tag = 3, t;
  }
  function Yr(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      t.payload = function() {
        return n(u);
      }, t.callback = function() {
        qr(e, l, a);
      };
    }
    var i = l.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      qr(e, l, a), typeof n != "function" && (Rl === null ? Rl = /* @__PURE__ */ new Set([this]) : Rl.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function s0(t, e, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = l.alternate, e !== null && Oa(
        e,
        l,
        n,
        !0
      ), l = Ae.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ge === null ? Gu() : l.alternate === null && Kt === 0 && (Kt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), If(t, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === bu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), If(t, a, n)), !1;
        }
        throw Error(c(435, l.tag));
      }
      return If(t, a, n), Gu(), !1;
    }
    if (Tt)
      return e = Ae.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Zi && (t = Error(c(422), { cause: a }), dn(qe(t, l)))) : (a !== Zi && (e = Error(c(423), {
        cause: a
      }), dn(
        qe(e, l)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = qe(a, l), n = Of(
        t.stateNode,
        a,
        n
      ), lf(t, n), Kt !== 4 && (Kt = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = qe(u, l), Mn === null ? Mn = [u] : Mn.push(u), Kt !== 4 && (Kt = 2), e === null) return !0;
    a = qe(a, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Of(l.stateNode, a, t), lf(l, t), !1;
        case 1:
          if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Rl === null || !Rl.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = Br(n), Yr(
              n,
              t,
              l,
              a
            ), lf(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Df = Error(c(461)), te = !1;
  function re(t, e, l, a) {
    e.child = t === null ? Xs(e, null, l, a) : na(
      e,
      t.child,
      l,
      a
    );
  }
  function Lr(t, e, l, a, n) {
    l = l.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a)
        f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return ta(e), a = sf(
      t,
      e,
      l,
      i,
      u,
      n
    ), f = rf(), t !== null && !te ? (of(t, e, n), sl(t, e, n)) : (Tt && f && Qi(e), e.flags |= 1, re(t, e, a, n), e.child);
  }
  function Gr(t, e, l, a, n) {
    if (t === null) {
      var u = l.type;
      return typeof u == "function" && !Yi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Qr(
        t,
        e,
        u,
        a,
        n
      )) : (t = ou(
        l.type,
        null,
        a,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !wf(t, n)) {
      var i = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : sn, l(i, a) && t.ref === e.ref)
        return sl(t, e, n);
    }
    return e.flags |= 1, t = al(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Qr(t, e, l, a, n) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (sn(u, a) && t.ref === e.ref)
        if (te = !1, e.pendingProps = a = u, wf(t, n))
          (t.flags & 131072) !== 0 && (te = !0);
        else
          return e.lanes = t.lanes, sl(t, e, n);
    }
    return Nf(
      t,
      e,
      l,
      a,
      n
    );
  }
  function Xr(t, e, l, a) {
    var n = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, t !== null) {
          for (a = e.child = t.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, e.child = null;
        return Zr(
          t,
          e,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && yu(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Ks(e, u) : nf(), Js(e);
      else
        return a = e.lanes = 536870912, Zr(
          t,
          e,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (yu(e, u.cachePool), Ks(e, u), jl(), e.memoizedState = null) : (t !== null && yu(e, null), nf(), jl());
    return re(t, e, n, l), e.child;
  }
  function En(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Zr(t, e, l, a, n) {
    var u = Ii();
    return u = u === null ? null : { parent: It._currentValue, pool: u }, e.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, t !== null && yu(e, null), nf(), Js(e), t !== null && Oa(t, e, a, !0), e.childLanes = n, null;
  }
  function Mu(t, e) {
    return e = Uu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Vr(t, e, l) {
    return na(e, t.child, null, l), t = Mu(e, e.pendingProps), t.flags |= 2, Oe(e), e.memoizedState = null, t;
  }
  function r0(t, e, l) {
    var a = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Tt) {
        if (a.mode === "hidden")
          return t = Mu(e, a), e.lanes = 536870912, En(null, t);
        if (ff(e), (t = Gt) ? (t = ud(
          t,
          Le
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: _l !== null ? { id: Fe, overflow: $e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ns(t), l.return = e, e.child = l, ce = e, Gt = null)) : t = null, t === null) throw El(e);
        return e.lanes = 536870912, null;
      }
      return Mu(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (ff(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = Vr(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (te || Oa(t, e, l, !1), n = (l & t.childLanes) !== 0, te || n) {
        if (a = Lt, a !== null && (i = wc(a, l), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Fl(t, i), _e(a, t, i), Df;
        Gu(), e = Vr(
          t,
          e,
          l
        );
      } else
        t = u.treeContext, Gt = Qe(i.nextSibling), ce = e, Tt = !0, Tl = null, Le = !1, t !== null && Cs(e, t), e = Mu(e, a), e.flags |= 4096;
      return e;
    }
    return t = al(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Cu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(c(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Nf(t, e, l, a, n) {
    return ta(e), l = sf(
      t,
      e,
      l,
      a,
      void 0,
      n
    ), a = rf(), t !== null && !te ? (of(t, e, n), sl(t, e, n)) : (Tt && a && Qi(e), e.flags |= 1, re(t, e, l, n), e.child);
  }
  function Kr(t, e, l, a, n, u) {
    return ta(e), e.updateQueue = null, l = Fs(
      e,
      a,
      l,
      n
    ), Ws(t), a = rf(), t !== null && !te ? (of(t, e, u), sl(t, e, u)) : (Tt && a && Qi(e), e.flags |= 1, re(t, e, l, u), e.child);
  }
  function Jr(t, e, l, a, n) {
    if (ta(e), e.stateNode === null) {
      var u = Ta, i = l.contextType;
      typeof i == "object" && i !== null && (u = se(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Af, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, tf(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? se(i) : Ta, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (zf(
        e,
        l,
        i,
        a
      ), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Af.enqueueReplaceState(u, u.state, null), pn(e, a, u, n), gn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var f = e.memoizedProps, r = ia(l, f);
      u.props = r;
      var S = u.context, z = l.contextType;
      i = Ta, typeof z == "object" && z !== null && (i = se(z));
      var D = l.getDerivedStateFromProps;
      z = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = e.pendingProps !== f, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || S !== i) && Rr(
        e,
        u,
        a,
        i
      ), Al = !1;
      var x = e.memoizedState;
      u.state = x, pn(e, a, u, n), gn(), S = e.memoizedState, f || x !== S || Al ? (typeof D == "function" && (zf(
        e,
        l,
        D,
        a
      ), S = e.memoizedState), (r = Al || Ur(
        e,
        l,
        r,
        a,
        x,
        S,
        i
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = S), u.props = a, u.state = S, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, ef(t, e), i = e.memoizedProps, z = ia(l, i), u.props = z, D = e.pendingProps, x = u.context, S = l.contextType, r = Ta, typeof S == "object" && S !== null && (r = se(S)), f = l.getDerivedStateFromProps, (S = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || x !== r) && Rr(
        e,
        u,
        a,
        r
      ), Al = !1, x = e.memoizedState, u.state = x, pn(e, a, u, n), gn();
      var T = e.memoizedState;
      i !== D || x !== T || Al || t !== null && t.dependencies !== null && hu(t.dependencies) ? (typeof f == "function" && (zf(
        e,
        l,
        f,
        a
      ), T = e.memoizedState), (z = Al || Ur(
        e,
        l,
        z,
        a,
        x,
        T,
        r
      ) || t !== null && t.dependencies !== null && hu(t.dependencies)) ? (S || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, T, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        T,
        r
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = T), u.props = a, u.state = T, u.context = r, a = z) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Cu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = na(
      e,
      t.child,
      null,
      n
    ), e.child = na(
      e,
      null,
      l,
      n
    )) : re(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = sl(
      t,
      e,
      n
    ), t;
  }
  function Wr(t, e, l, a) {
    return Il(), e.flags |= 256, re(t, e, l, a), e.child;
  }
  var jf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mf(t) {
    return { baseLanes: t, cachePool: qs() };
  }
  function Cf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Ne), t;
  }
  function Fr(t, e, l) {
    var a = e.pendingProps, n = !1, u = (e.flags & 128) !== 0, i;
    if ((i = u) || (i = t !== null && t.memoizedState === null ? !1 : (Ft.current & 2) !== 0), i && (n = !0, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Tt) {
        if (n ? Nl(e) : jl(), (t = Gt) ? (t = ud(
          t,
          Le
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: _l !== null ? { id: Fe, overflow: $e } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ns(t), l.return = e, e.child = l, ce = e, Gt = null)) : t = null, t === null) throw El(e);
        return mc(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var f = a.children;
      return a = a.fallback, n ? (jl(), n = e.mode, f = Uu(
        { mode: "hidden", children: f },
        n
      ), a = $l(
        a,
        n,
        l,
        null
      ), f.return = e, a.return = e, f.sibling = a, e.child = f, a = e.child, a.memoizedState = Mf(l), a.childLanes = Cf(
        t,
        i,
        l
      ), e.memoizedState = jf, En(null, a)) : (Nl(e), Uf(e, f));
    }
    var r = t.memoizedState;
    if (r !== null && (f = r.dehydrated, f !== null)) {
      if (u)
        e.flags & 256 ? (Nl(e), e.flags &= -257, e = Rf(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (jl(), e.child = t.child, e.flags |= 128, e = null) : (jl(), f = a.fallback, n = e.mode, a = Uu(
          { mode: "visible", children: a.children },
          n
        ), f = $l(
          f,
          n,
          l,
          null
        ), f.flags |= 2, a.return = e, f.return = e, a.sibling = f, e.child = a, na(
          e,
          t.child,
          null,
          l
        ), a = e.child, a.memoizedState = Mf(l), a.childLanes = Cf(
          t,
          i,
          l
        ), e.memoizedState = jf, e = En(null, a));
      else if (Nl(e), mc(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var S = i.dgst;
        i = S, a = Error(c(419)), a.stack = "", a.digest = i, dn({ value: a, source: null, stack: null }), e = Rf(
          t,
          e,
          l
        );
      } else if (te || Oa(t, e, l, !1), i = (l & t.childLanes) !== 0, te || i) {
        if (i = Lt, i !== null && (a = wc(i, l), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Fl(t, a), _e(i, t, a), Df;
        hc(f) || Gu(), e = Rf(
          t,
          e,
          l
        );
      } else
        hc(f) ? (e.flags |= 192, e.child = t.child, e = null) : (t = r.treeContext, Gt = Qe(
          f.nextSibling
        ), ce = e, Tt = !0, Tl = null, Le = !1, t !== null && Cs(e, t), e = Uf(
          e,
          a.children
        ), e.flags |= 4096);
      return e;
    }
    return n ? (jl(), f = a.fallback, n = e.mode, r = t.child, S = r.sibling, a = al(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, S !== null ? f = al(
      S,
      f
    ) : (f = $l(
      f,
      n,
      l,
      null
    ), f.flags |= 2), f.return = e, a.return = e, a.sibling = f, e.child = a, En(null, a), a = e.child, f = t.child.memoizedState, f === null ? f = Mf(l) : (n = f.cachePool, n !== null ? (r = It._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = qs(), f = {
      baseLanes: f.baseLanes | l,
      cachePool: n
    }), a.memoizedState = f, a.childLanes = Cf(
      t,
      i,
      l
    ), e.memoizedState = jf, En(t.child, a)) : (Nl(e), l = t.child, t = l.sibling, l = al(l, {
      mode: "visible",
      children: a.children
    }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [t], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function Uf(t, e) {
    return e = Uu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Uu(t, e) {
    return t = ze(22, t, null, e), t.lanes = 0, t;
  }
  function Rf(t, e, l) {
    return na(e, t.child, null, l), t = Uf(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function $r(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Ji(t.return, e, l);
  }
  function Hf(t, e, l, a, n, u) {
    var i = t.memoizedState;
    i === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
  }
  function Ir(t, e, l) {
    var a = e.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = Ft.current, f = (i & 2) !== 0;
    if (f ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, g(Ft, i), re(t, e, a, l), a = Tt ? on : 0, !f && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && $r(t, l, e);
        else if (t.tag === 19)
          $r(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          t = l.alternate, t !== null && xu(t) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Hf(
          e,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && xu(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = l, l = n, n = t;
        }
        Hf(
          e,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Hf(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function sl(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), Ul |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (Oa(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, l = al(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = al(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function wf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && hu(t)));
  }
  function o0(t, e, l) {
    switch (e.tag) {
      case 3:
        at(e, e.stateNode.containerInfo), zl(e, It, t.memoizedState.cache), Il();
        break;
      case 27:
      case 5:
        Ht(e);
        break;
      case 4:
        at(e, e.stateNode.containerInfo);
        break;
      case 10:
        zl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, ff(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Nl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Fr(t, e, l) : (Nl(e), t = sl(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Nl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (a = (l & e.childLanes) !== 0, a || (Oa(
          t,
          e,
          l,
          !1
        ), a = (l & e.childLanes) !== 0), n) {
          if (a)
            return Ir(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), g(Ft, Ft.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Xr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        zl(e, It, t.memoizedState.cache);
    }
    return sl(t, e, l);
  }
  function Pr(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        te = !0;
      else {
        if (!wf(t, l) && (e.flags & 128) === 0)
          return te = !1, o0(
            t,
            e,
            l
          );
        te = (t.flags & 131072) !== 0;
      }
    else
      te = !1, Tt && (e.flags & 1048576) !== 0 && Ms(e, on, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = la(e.elementType), e.type = t, typeof t == "function")
            Yi(t) ? (a = ia(t, a), e.tag = 1, e = Jr(
              null,
              e,
              t,
              a,
              l
            )) : (e.tag = 0, e = Nf(
              null,
              e,
              t,
              a,
              l
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === I) {
                e.tag = 11, e = Lr(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              } else if (n === R) {
                e.tag = 14, e = Gr(
                  null,
                  e,
                  t,
                  a,
                  l
                );
                break t;
              }
            }
            throw e = gt(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Nf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return a = e.type, n = ia(
          a,
          e.pendingProps
        ), Jr(
          t,
          e,
          a,
          n,
          l
        );
      case 3:
        t: {
          if (at(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          n = u.element, ef(t, e), pn(e, a, null, l);
          var i = e.memoizedState;
          if (a = i.cache, zl(e, It, a), a !== u.cache && Wi(
            e,
            [It],
            l,
            !0
          ), gn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Wr(
                t,
                e,
                a,
                l
              );
              break t;
            } else if (a !== n) {
              n = qe(
                Error(c(424)),
                e
              ), dn(n), e = Wr(
                t,
                e,
                a,
                l
              );
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Gt = Qe(t.firstChild), ce = e, Tt = !0, Tl = null, Le = !0, l = Xs(
                e,
                null,
                a,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (Il(), a === n) {
              e = sl(
                t,
                e,
                l
              );
              break t;
            }
            re(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Cu(t, e), t === null ? (l = od(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : Tt || (l = e.type, t = e.pendingProps, a = Wu(
          P.current
        ).createElement(l), a[fe] = e, a[ve] = t, oe(a, l, t), ne(a), e.stateNode = a) : e.memoizedState = od(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ht(e), t === null && Tt && (a = e.stateNode = cd(
          e.type,
          e.pendingProps,
          P.current
        ), ce = e, Le = !0, n = Gt, ql(e.type) ? (yc = n, Gt = Qe(a.firstChild)) : Gt = n), re(
          t,
          e,
          e.pendingProps.children,
          l
        ), Cu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Tt && ((n = a = Gt) && (a = L0(
          a,
          e.type,
          e.pendingProps,
          Le
        ), a !== null ? (e.stateNode = a, ce = e, Gt = Qe(a.firstChild), Le = !1, n = !0) : n = !1), n || El(e)), Ht(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, rc(n, u) ? a = null : i !== null && rc(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = sf(
          t,
          e,
          l0,
          null,
          null,
          l
        ), Bn._currentValue = n), Cu(t, e), re(t, e, a, l), e.child;
      case 6:
        return t === null && Tt && ((t = l = Gt) && (l = G0(
          l,
          e.pendingProps,
          Le
        ), l !== null ? (e.stateNode = l, ce = e, Gt = null, t = !0) : t = !1), t || El(e)), null;
      case 13:
        return Fr(t, e, l);
      case 4:
        return at(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = na(
          e,
          null,
          a,
          l
        ) : re(t, e, a, l), e.child;
      case 11:
        return Lr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return re(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return re(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return re(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return a = e.pendingProps, zl(e, e.type, a.value), re(t, e, a.children, l), e.child;
      case 9:
        return n = e.type._context, a = e.pendingProps.children, ta(e), n = se(n), a = a(n), e.flags |= 1, re(t, e, a, l), e.child;
      case 14:
        return Gr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Qr(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return Ir(t, e, l);
      case 31:
        return r0(t, e, l);
      case 22:
        return Xr(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return ta(e), a = se(It), t === null ? (n = Ii(), n === null && (n = Lt, u = Fi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = { parent: a, cache: n }, tf(e), zl(e, It, n)) : ((t.lanes & l) !== 0 && (ef(t, e), pn(e, null, null, l), gn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), zl(e, It, a)) : (a = u.cache, zl(e, It, a), a !== n.cache && Wi(
          e,
          [It],
          l,
          !0
        ))), re(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function rl(t) {
    t.flags |= 4;
  }
  function kf(t, e, l, a, n) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Oo()) t.flags |= 8192;
        else
          throw aa = bu, Pi;
    } else t.flags &= -16777217;
  }
  function to(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !vd(e))
      if (Oo()) t.flags |= 8192;
      else
        throw aa = bu, Pi;
  }
  function Ru(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Uc() : 536870912, t.lanes |= e, Ba |= e);
  }
  function zn(t, e) {
    if (!Tt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
  }
  function Qt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= a, t.childLanes = l, e;
  }
  function d0(t, e, l) {
    var a = e.pendingProps;
    switch (Xi(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Qt(e), null;
      case 1:
        return Qt(e), null;
      case 3:
        return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), il(It), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Aa(e) ? rl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Vi())), Qt(e), null;
      case 26:
        var n = e.type, u = e.memoizedState;
        return t === null ? (rl(e), u !== null ? (Qt(e), to(e, u)) : (Qt(e), kf(
          e,
          n,
          null,
          a,
          l
        ))) : u ? u !== t.memoizedState ? (rl(e), Qt(e), to(e, u)) : (Qt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && rl(e), Qt(e), kf(
          e,
          n,
          t,
          a,
          l
        )), null;
      case 27:
        if (ht(e), l = P.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && rl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          t = j.current, Aa(e) ? Us(e) : (t = cd(n, a, l), e.stateNode = t, rl(e));
        }
        return Qt(e), null;
      case 5:
        if (ht(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && rl(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(c(166));
            return Qt(e), null;
          }
          if (u = j.current, Aa(e))
            Us(e);
          else {
            var i = Wu(
              P.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[fe] = e, u[ve] = a;
            t: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === e) break t;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e)
                  break t;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            e.stateNode = u;
            t: switch (oe(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && rl(e);
          }
        }
        return Qt(e), kf(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && rl(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = P.current, Aa(e)) {
            if (t = e.stateNode, l = e.memoizedProps, a = null, n = ce, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            t[fe] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || $o(t.nodeValue, l)), t || El(e, !0);
          } else
            t = Wu(t).createTextNode(
              a
            ), t[fe] = e, e.stateNode = t;
        }
        return Qt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Aa(e), l !== null) {
            if (t === null) {
              if (!a) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[fe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Qt(e), t = !1;
          } else
            l = Vi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Qt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = Aa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(c(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
              n[fe] = e;
            } else
              Il(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Qt(e), n = !1;
          } else
            n = Vi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (Oe(e), e) : (Oe(e), null);
        }
        return Oe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ru(e, e.updateQueue), Qt(e), null);
      case 4:
        return et(), t === null && uc(e.stateNode.containerInfo), Qt(e), null;
      case 10:
        return il(e.type), Qt(e), null;
      case 19:
        if (_(Ft), a = e.memoizedState, a === null) return Qt(e), null;
        if (n = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) zn(a, !1);
          else {
            if (Kt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = xu(t), u !== null) {
                  for (e.flags |= 128, zn(a, !1), t = u.updateQueue, e.updateQueue = t, Ru(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Ds(l, t), l = l.sibling;
                  return g(
                    Ft,
                    Ft.current & 1 | 2
                  ), Tt && nl(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Ct() > Bu && (e.flags |= 128, n = !0, zn(a, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = xu(u), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, Ru(e, t), zn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Tt)
                return Qt(e), null;
            } else
              2 * Ct() - a.renderingStartTime > Bu && l !== 536870912 && (e.flags |= 128, n = !0, zn(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Ct(), t.sibling = null, l = Ft.current, g(
          Ft,
          n ? l & 1 | 2 : l & 1
        ), Tt && nl(e, a.treeForkCount), t) : (Qt(e), null);
      case 22:
      case 23:
        return Oe(e), uf(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Qt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Qt(e), l = e.updateQueue, l !== null && Ru(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && _(ea), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), il(It), Qt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function h0(t, e) {
    switch (Xi(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return il(It), et(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return ht(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Oe(e), e.alternate === null)
            throw Error(c(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Oe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          Il();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return _(Ft), null;
      case 4:
        return et(), null;
      case 10:
        return il(e.type), null;
      case 22:
      case 23:
        return Oe(e), uf(), t !== null && _(ea), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return il(It), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function eo(t, e) {
    switch (Xi(e), e.tag) {
      case 3:
        il(It), et();
        break;
      case 26:
      case 27:
      case 5:
        ht(e);
        break;
      case 4:
        et();
        break;
      case 31:
        e.memoizedState !== null && Oe(e);
        break;
      case 13:
        Oe(e);
        break;
      case 19:
        _(Ft);
        break;
      case 10:
        il(e.type);
        break;
      case 22:
      case 23:
        Oe(e), uf(), t !== null && _(ea);
        break;
      case 24:
        il(It);
    }
  }
  function An(t, e) {
    try {
      var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var u = l.create, i = l.inst;
            a = u(), i.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (f) {
      Rt(e, e.return, f);
    }
  }
  function Ml(t, e, l) {
    try {
      var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var i = a.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, n = e;
              var r = l, S = f;
              try {
                S();
              } catch (z) {
                Rt(
                  n,
                  r,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      Rt(e, e.return, z);
    }
  }
  function lo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Vs(e, l);
      } catch (a) {
        Rt(t, t.return, a);
      }
    }
  }
  function ao(t, e, l) {
    l.props = ia(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Rt(t, e, a);
    }
  }
  function On(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
      }
    } catch (n) {
      Rt(t, e, n);
    }
  }
  function Ie(t, e) {
    var l = t.ref, a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Rt(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Rt(t, e, n);
        }
      else l.current = null;
  }
  function no(t) {
    var e = t.type, l = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Rt(t, t.return, n);
    }
  }
  function qf(t, e, l) {
    try {
      var a = t.stateNode;
      H0(a, t.type, l, e), a[ve] = e;
    } catch (n) {
      Rt(t, t.return, n);
    }
  }
  function uo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && ql(t.type) || t.tag === 4;
  }
  function Bf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || uo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && ql(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Yf(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = el));
    else if (a !== 4 && (a === 27 && ql(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (Yf(t, e, l), t = t.sibling; t !== null; )
        Yf(t, e, l), t = t.sibling;
  }
  function Hu(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && (a === 27 && ql(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Hu(t, e, l), t = t.sibling; t !== null; )
        Hu(t, e, l), t = t.sibling;
  }
  function io(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      oe(e, a, l), e[fe] = t, e[ve] = l;
    } catch (u) {
      Rt(t, t.return, u);
    }
  }
  var ol = !1, ee = !1, Lf = !1, fo = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
  function m0(t, e) {
    if (t = t.containerInfo, cc = li, t = ps(t), Ui(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0, f = -1, r = -1, S = 0, z = 0, D = t, x = null;
            e: for (; ; ) {
              for (var T; D !== l || n !== 0 && D.nodeType !== 3 || (f = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (r = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (T = D.firstChild) !== null; )
                x = D, D = T;
              for (; ; ) {
                if (D === t) break e;
                if (x === l && ++S === n && (f = i), x === u && ++z === a && (r = i), (T = D.nextSibling) !== null) break;
                D = x, x = D.parentNode;
              }
              D = T;
            }
            l = f === -1 || r === -1 ? null : { start: f, end: r };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (sc = { focusedElem: t, selectionRange: l }, li = !1, ue = e; ue !== null; )
      if (e = ue, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, ue = t;
      else
        for (; ue !== null; ) {
          switch (e = ue, u = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  n = t[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && u !== null) {
                t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var Z = ia(
                    l.type,
                    n
                  );
                  t = a.getSnapshotBeforeUpdate(
                    Z,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = t;
                } catch (nt) {
                  Rt(
                    l,
                    l.return,
                    nt
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  dc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      dc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, ue = t;
            break;
          }
          ue = e.return;
        }
  }
  function co(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        hl(t, l), a & 4 && An(5, l);
        break;
      case 1:
        if (hl(t, l), a & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (i) {
              Rt(l, l.return, i);
            }
          else {
            var n = ia(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              Rt(
                l,
                l.return,
                i
              );
            }
          }
        a & 64 && lo(l), a & 512 && On(l, l.return);
        break;
      case 3:
        if (hl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Vs(t, e);
          } catch (i) {
            Rt(l, l.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && io(l);
      case 26:
      case 5:
        hl(t, l), e === null && a & 4 && no(l), a & 512 && On(l, l.return);
        break;
      case 12:
        hl(t, l);
        break;
      case 31:
        hl(t, l), a & 4 && oo(t, l);
        break;
      case 13:
        hl(t, l), a & 4 && ho(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = T0.bind(
          null,
          l
        ), Q0(t, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || ol, !a) {
          e = e !== null && e.memoizedState !== null || ee, n = ol;
          var u = ee;
          ol = a, (ee = e) && !u ? ml(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : hl(t, l), ol = n, ee = u;
        }
        break;
      case 30:
        break;
      default:
        hl(t, l);
    }
  }
  function so(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, so(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && vi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Xt = null, ge = !1;
  function dl(t, e, l) {
    for (l = l.child; l !== null; )
      ro(t, e, l), l = l.sibling;
  }
  function ro(t, e, l) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(Ze, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ee || Ie(l, e), dl(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ee || Ie(l, e);
        var a = Xt, n = ge;
        ql(l.type) && (Xt = l.stateNode, ge = !1), dl(
          t,
          e,
          l
        ), wn(l.stateNode), Xt = a, ge = n;
        break;
      case 5:
        ee || Ie(l, e);
      case 6:
        if (a = Xt, n = ge, Xt = null, dl(
          t,
          e,
          l
        ), Xt = a, ge = n, Xt !== null)
          if (ge)
            try {
              (Xt.nodeType === 9 ? Xt.body : Xt.nodeName === "HTML" ? Xt.ownerDocument.body : Xt).removeChild(l.stateNode);
            } catch (u) {
              Rt(
                l,
                e,
                u
              );
            }
          else
            try {
              Xt.removeChild(l.stateNode);
            } catch (u) {
              Rt(
                l,
                e,
                u
              );
            }
        break;
      case 18:
        Xt !== null && (ge ? (t = Xt, ad(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Ka(t)) : ad(Xt, l.stateNode));
        break;
      case 4:
        a = Xt, n = ge, Xt = l.stateNode.containerInfo, ge = !0, dl(
          t,
          e,
          l
        ), Xt = a, ge = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ml(2, l, e), ee || Ml(4, l, e), dl(
          t,
          e,
          l
        );
        break;
      case 1:
        ee || (Ie(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && ao(
          l,
          e,
          a
        )), dl(
          t,
          e,
          l
        );
        break;
      case 21:
        dl(
          t,
          e,
          l
        );
        break;
      case 22:
        ee = (a = ee) || l.memoizedState !== null, dl(
          t,
          e,
          l
        ), ee = a;
        break;
      default:
        dl(
          t,
          e,
          l
        );
    }
  }
  function oo(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Ka(t);
      } catch (l) {
        Rt(e, e.return, l);
      }
    }
  }
  function ho(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Ka(t);
      } catch (l) {
        Rt(e, e.return, l);
      }
  }
  function y0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new fo()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new fo()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function wu(t, e) {
    var l = y0(t);
    e.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = E0.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function pe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ql(f.type)) {
                Xt = f.stateNode, ge = !1;
                break t;
              }
              break;
            case 5:
              Xt = f.stateNode, ge = !1;
              break t;
            case 3:
            case 4:
              Xt = f.stateNode.containerInfo, ge = !0;
              break t;
          }
          f = f.return;
        }
        if (Xt === null) throw Error(c(160));
        ro(u, i, n), Xt = null, ge = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        mo(e, t), e = e.sibling;
  }
  var Ke = null;
  function mo(t, e) {
    var l = t.alternate, a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pe(e, t), Se(t), a & 4 && (Ml(3, t, t.return), An(3, t), Ml(5, t, t.return));
        break;
      case 1:
        pe(e, t), Se(t), a & 512 && (ee || l === null || Ie(l, l.return)), a & 64 && ol && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Ke;
        if (pe(e, t), Se(t), a & 512 && (ee || l === null || Ie(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                  e: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[Pa] || u[fe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), oe(u, a, l), u[fe] = t, ne(u), a = u;
                      break t;
                    case "link":
                      var i = md(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), oe(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = md(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (u = i[f], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      u = n.createElement(a), oe(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[fe] = t, ne(u), a = u;
                }
                t.stateNode = a;
              } else
                yd(
                  n,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = hd(
                n,
                a,
                t.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? yd(
              n,
              t.type,
              t.stateNode
            ) : hd(
              n,
              a,
              t.memoizedProps
            )) : a === null && t.stateNode !== null && qf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        pe(e, t), Se(t), a & 512 && (ee || l === null || Ie(l, l.return)), l !== null && a & 4 && qf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (pe(e, t), Se(t), a & 512 && (ee || l === null || Ie(l, l.return)), t.flags & 32) {
          n = t.stateNode;
          try {
            va(n, "");
          } catch (Z) {
            Rt(t, t.return, Z);
          }
        }
        a & 4 && t.stateNode != null && (n = t.memoizedProps, qf(
          t,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (Lf = !0);
        break;
      case 6:
        if (pe(e, t), Se(t), a & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          a = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = a;
          } catch (Z) {
            Rt(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (Iu = null, n = Ke, Ke = Fu(e.containerInfo), pe(e, t), Ke = n, Se(t), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ka(e.containerInfo);
          } catch (Z) {
            Rt(t, t.return, Z);
          }
        Lf && (Lf = !1, yo(t));
        break;
      case 4:
        a = Ke, Ke = Fu(
          t.stateNode.containerInfo
        ), pe(e, t), Se(t), Ke = a;
        break;
      case 12:
        pe(e, t), Se(t);
        break;
      case 31:
        pe(e, t), Se(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, wu(t, a)));
        break;
      case 13:
        pe(e, t), Se(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (qu = Ct()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, wu(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var r = l !== null && l.memoizedState !== null, S = ol, z = ee;
        if (ol = S || n, ee = z || r, pe(e, t), ee = z, ol = S, Se(t), a & 8192)
          t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || r || ol || ee || fa(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                r = l = e;
                try {
                  if (u = r.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = r.stateNode;
                    var D = r.memoizedProps.style, x = D != null && D.hasOwnProperty("display") ? D.display : null;
                    f.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (Z) {
                  Rt(r, r.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                r = e;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (Z) {
                  Rt(r, r.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                r = e;
                try {
                  var T = r.stateNode;
                  n ? nd(T, !0) : nd(r.stateNode, !1);
                } catch (Z) {
                  Rt(r, r.return, Z);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, wu(t, l))));
        break;
      case 19:
        pe(e, t), Se(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, wu(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pe(e, t), Se(t);
    }
  }
  function Se(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (uo(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Bf(t);
            Hu(t, u, n);
            break;
          case 5:
            var i = l.stateNode;
            l.flags & 32 && (va(i, ""), l.flags &= -33);
            var f = Bf(t);
            Hu(t, f, i);
            break;
          case 3:
          case 4:
            var r = l.stateNode.containerInfo, S = Bf(t);
            Yf(
              t,
              S,
              r
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        Rt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function yo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        yo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function hl(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        co(t, e.alternate, e), e = e.sibling;
  }
  function fa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ml(4, e, e.return), fa(e);
          break;
        case 1:
          Ie(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && ao(
            e,
            e.return,
            l
          ), fa(e);
          break;
        case 27:
          wn(e.stateNode);
        case 26:
        case 5:
          Ie(e, e.return), fa(e);
          break;
        case 22:
          e.memoizedState === null && fa(e);
          break;
        case 30:
          fa(e);
          break;
        default:
          fa(e);
      }
      t = t.sibling;
    }
  }
  function ml(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate, n = t, u = e, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ml(
            n,
            u,
            l
          ), An(4, u);
          break;
        case 1:
          if (ml(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (S) {
              Rt(a, a.return, S);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var f = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Zs(r[n], f);
            } catch (S) {
              Rt(a, a.return, S);
            }
          }
          l && i & 64 && lo(u), On(u, u.return);
          break;
        case 27:
          io(u);
        case 26:
        case 5:
          ml(
            n,
            u,
            l
          ), l && a === null && i & 4 && no(u), On(u, u.return);
          break;
        case 12:
          ml(
            n,
            u,
            l
          );
          break;
        case 31:
          ml(
            n,
            u,
            l
          ), l && i & 4 && oo(n, u);
          break;
        case 13:
          ml(
            n,
            u,
            l
          ), l && i & 4 && ho(n, u);
          break;
        case 22:
          u.memoizedState === null && ml(
            n,
            u,
            l
          ), On(u, u.return);
          break;
        case 30:
          break;
        default:
          ml(
            n,
            u,
            l
          );
      }
      e = e.sibling;
    }
  }
  function Gf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && hn(l));
  }
  function Qf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && hn(t));
  }
  function Je(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        vo(
          t,
          e,
          l,
          a
        ), e = e.sibling;
  }
  function vo(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Je(
          t,
          e,
          l,
          a
        ), n & 2048 && An(9, e);
        break;
      case 1:
        Je(
          t,
          e,
          l,
          a
        );
        break;
      case 3:
        Je(
          t,
          e,
          l,
          a
        ), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && hn(t)));
        break;
      case 12:
        if (n & 2048) {
          Je(
            t,
            e,
            l,
            a
          ), t = e.stateNode;
          try {
            var u = e.memoizedProps, i = u.id, f = u.onPostCommit;
            typeof f == "function" && f(
              i,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (r) {
            Rt(e, e.return, r);
          }
        } else
          Je(
            t,
            e,
            l,
            a
          );
        break;
      case 31:
        Je(
          t,
          e,
          l,
          a
        );
        break;
      case 13:
        Je(
          t,
          e,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Je(
          t,
          e,
          l,
          a
        ) : Dn(t, e) : u._visibility & 2 ? Je(
          t,
          e,
          l,
          a
        ) : (u._visibility |= 2, wa(
          t,
          e,
          l,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Gf(i, e);
        break;
      case 24:
        Je(
          t,
          e,
          l,
          a
        ), n & 2048 && Qf(e.alternate, e);
        break;
      default:
        Je(
          t,
          e,
          l,
          a
        );
    }
  }
  function wa(t, e, l, a, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, i = e, f = l, r = a, S = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          wa(
            u,
            i,
            f,
            r,
            n
          ), An(8, i);
          break;
        case 23:
          break;
        case 22:
          var z = i.stateNode;
          i.memoizedState !== null ? z._visibility & 2 ? wa(
            u,
            i,
            f,
            r,
            n
          ) : Dn(
            u,
            i
          ) : (z._visibility |= 2, wa(
            u,
            i,
            f,
            r,
            n
          )), n && S & 2048 && Gf(
            i.alternate,
            i
          );
          break;
        case 24:
          wa(
            u,
            i,
            f,
            r,
            n
          ), n && S & 2048 && Qf(i.alternate, i);
          break;
        default:
          wa(
            u,
            i,
            f,
            r,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Dn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Dn(l, a), n & 2048 && Gf(
              a.alternate,
              a
            );
            break;
          case 24:
            Dn(l, a), n & 2048 && Qf(a.alternate, a);
            break;
          default:
            Dn(l, a);
        }
        e = e.sibling;
      }
  }
  var Nn = 8192;
  function ka(t, e, l) {
    if (t.subtreeFlags & Nn)
      for (t = t.child; t !== null; )
        bo(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function bo(t, e, l) {
    switch (t.tag) {
      case 26:
        ka(
          t,
          e,
          l
        ), t.flags & Nn && t.memoizedState !== null && em(
          l,
          Ke,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        ka(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var a = Ke;
        Ke = Fu(t.stateNode.containerInfo), ka(
          t,
          e,
          l
        ), Ke = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Nn, Nn = 16777216, ka(
          t,
          e,
          l
        ), Nn = a) : ka(
          t,
          e,
          l
        ));
        break;
      default:
        ka(
          t,
          e,
          l
        );
    }
  }
  function go(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function jn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ue = a, So(
            a,
            t
          );
        }
      go(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        po(t), t = t.sibling;
  }
  function po(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jn(t), t.flags & 2048 && Ml(9, t, t.return);
        break;
      case 3:
        jn(t);
        break;
      case 12:
        jn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ku(t)) : jn(t);
        break;
      default:
        jn(t);
    }
  }
  function ku(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          ue = a, So(
            a,
            t
          );
        }
      go(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, e, e.return), ku(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, ku(e));
          break;
        default:
          ku(e);
      }
      t = t.sibling;
    }
  }
  function So(t, e) {
    for (; ue !== null; ) {
      var l = ue;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, ue = a;
      else
        t: for (l = t; ue !== null; ) {
          a = ue;
          var n = a.sibling, u = a.return;
          if (so(a), a === l) {
            ue = null;
            break t;
          }
          if (n !== null) {
            n.return = u, ue = n;
            break t;
          }
          ue = u;
        }
    }
  }
  var v0 = {
    getCacheForType: function(t) {
      var e = se(It), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return se(It).controller.signal;
    }
  }, b0 = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, Lt = null, pt = null, xt = 0, Ut = 0, De = null, Cl = !1, qa = !1, Xf = !1, yl = 0, Kt = 0, Ul = 0, ca = 0, Zf = 0, Ne = 0, Ba = 0, Mn = null, xe = null, Vf = !1, qu = 0, xo = 0, Bu = 1 / 0, Yu = null, Rl = null, le = 0, Hl = null, Ya = null, vl = 0, Kf = 0, Jf = null, _o = null, Cn = 0, Wf = null;
  function je() {
    return (jt & 2) !== 0 && xt !== 0 ? xt & -xt : E.T !== null ? ec() : kc();
  }
  function To() {
    if (Ne === 0)
      if ((xt & 536870912) === 0 || Tt) {
        var t = Jn;
        Jn <<= 1, (Jn & 3932160) === 0 && (Jn = 262144), Ne = t;
      } else Ne = 536870912;
    return t = Ae.current, t !== null && (t.flags |= 32), Ne;
  }
  function _e(t, e, l) {
    (t === Lt && (Ut === 2 || Ut === 9) || t.cancelPendingCommit !== null) && (La(t, 0), wl(
      t,
      xt,
      Ne,
      !1
    )), Ia(t, l), ((jt & 2) === 0 || t !== Lt) && (t === Lt && ((jt & 2) === 0 && (ca |= l), Kt === 4 && wl(
      t,
      xt,
      Ne,
      !1
    )), Pe(t));
  }
  function Eo(t, e, l) {
    if ((jt & 6) !== 0) throw Error(c(327));
    var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || $a(t, e), n = a ? S0(t, e) : $f(t, e, !0), u = a;
    do {
      if (n === 0) {
        qa && !a && wl(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, u && !g0(l)) {
          n = $f(t, e, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            e = i;
            t: {
              var f = t;
              n = Mn;
              var r = f.current.memoizedState.isDehydrated;
              if (r && (La(f, i).flags |= 256), i = $f(
                f,
                i,
                !1
              ), i !== 2) {
                if (Xf && !r) {
                  f.errorRecoveryDisabledLanes |= u, ca |= u, n = 4;
                  break t;
                }
                u = xe, xe = n, u !== null && (xe === null ? xe = u : xe.push.apply(
                  xe,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          La(t, 0), wl(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = n, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              wl(
                a,
                e,
                Ne,
                !Cl
              );
              break t;
            case 2:
              xe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (n = qu + 300 - Ct(), 10 < n)) {
            if (wl(
              a,
              e,
              Ne,
              !Cl
            ), Fn(a, 0, !0) !== 0) break t;
            vl = e, a.timeoutHandle = ed(
              zo.bind(
                null,
                a,
                l,
                xe,
                Yu,
                Vf,
                e,
                Ne,
                ca,
                Ba,
                Cl,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          zo(
            a,
            l,
            xe,
            Yu,
            Vf,
            e,
            Ne,
            ca,
            Ba,
            Cl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Pe(t);
  }
  function zo(t, e, l, a, n, u, i, f, r, S, z, D, x, T) {
    if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: el
      }, bo(
        e,
        u,
        D
      );
      var Z = (u & 62914560) === u ? qu - Ct() : (u & 4194048) === u ? xo - Ct() : 0;
      if (Z = lm(
        D,
        Z
      ), Z !== null) {
        vl = u, t.cancelPendingCommit = Z(
          Uo.bind(
            null,
            t,
            e,
            u,
            l,
            a,
            n,
            i,
            f,
            r,
            z,
            D,
            null,
            x,
            T
          )
        ), wl(t, u, i, !S);
        return;
      }
    }
    Uo(
      t,
      e,
      u,
      l,
      a,
      n,
      i,
      f,
      r
    );
  }
  function g0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Ee(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function wl(t, e, l, a) {
    e &= ~Zf, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var u = 31 - Te(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    l !== 0 && Rc(t, l, e);
  }
  function Lu() {
    return (jt & 6) === 0 ? (Un(0), !1) : !0;
  }
  function Ff() {
    if (pt !== null) {
      if (Ut === 0)
        var t = pt.return;
      else
        t = pt, ul = Pl = null, df(t), Ma = null, yn = 0, t = pt;
      for (; t !== null; )
        eo(t.alternate, t), t = t.return;
      pt = null;
    }
  }
  function La(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, q0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), vl = 0, Ff(), Lt = t, pt = l = al(t.current, null), xt = e, Ut = 0, De = null, Cl = !1, qa = $a(t, e), Xf = !1, Ba = Ne = Zf = ca = Ul = Kt = 0, xe = Mn = null, Vf = !1, (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - Te(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
    return yl = e, cu(), l;
  }
  function Ao(t, e) {
    mt = null, E.H = Tn, e === ja || e === vu ? (e = Ls(), Ut = 3) : e === Pi ? (e = Ls(), Ut = 4) : Ut = e === Df ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, De = e, pt === null && (Kt = 1, ju(
      t,
      qe(e, t.current)
    ));
  }
  function Oo() {
    var t = Ae.current;
    return t === null ? !0 : (xt & 4194048) === xt ? Ge === null : (xt & 62914560) === xt || (xt & 536870912) !== 0 ? t === Ge : !1;
  }
  function Do() {
    var t = E.H;
    return E.H = Tn, t === null ? Tn : t;
  }
  function No() {
    var t = E.A;
    return E.A = v0, t;
  }
  function Gu() {
    Kt = 4, Cl || (xt & 4194048) !== xt && Ae.current !== null || (qa = !0), (Ul & 134217727) === 0 && (ca & 134217727) === 0 || Lt === null || wl(
      Lt,
      xt,
      Ne,
      !1
    );
  }
  function $f(t, e, l) {
    var a = jt;
    jt |= 2;
    var n = Do(), u = No();
    (Lt !== t || xt !== e) && (Yu = null, La(t, e)), e = !1;
    var i = Kt;
    t: do
      try {
        if (Ut !== 0 && pt !== null) {
          var f = pt, r = De;
          switch (Ut) {
            case 8:
              Ff(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ae.current === null && (e = !0);
              var S = Ut;
              if (Ut = 0, De = null, Ga(t, f, r, S), l && qa) {
                i = 0;
                break t;
              }
              break;
            default:
              S = Ut, Ut = 0, De = null, Ga(t, f, r, S);
          }
        }
        p0(), i = Kt;
        break;
      } catch (z) {
        Ao(t, z);
      }
    while (!0);
    return e && t.shellSuspendCounter++, ul = Pl = null, jt = a, E.H = n, E.A = u, pt === null && (Lt = null, xt = 0, cu()), i;
  }
  function p0() {
    for (; pt !== null; ) jo(pt);
  }
  function S0(t, e) {
    var l = jt;
    jt |= 2;
    var a = Do(), n = No();
    Lt !== t || xt !== e ? (Yu = null, Bu = Ct() + 500, La(t, e)) : qa = $a(
      t,
      e
    );
    t: do
      try {
        if (Ut !== 0 && pt !== null) {
          e = pt;
          var u = De;
          e: switch (Ut) {
            case 1:
              Ut = 0, De = null, Ga(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Bs(u)) {
                Ut = 0, De = null, Mo(e);
                break;
              }
              e = function() {
                Ut !== 2 && Ut !== 9 || Lt !== t || (Ut = 7), Pe(t);
              }, u.then(e, e);
              break t;
            case 3:
              Ut = 7;
              break t;
            case 4:
              Ut = 5;
              break t;
            case 7:
              Bs(u) ? (Ut = 0, De = null, Mo(e)) : (Ut = 0, De = null, Ga(t, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (pt.tag) {
                case 26:
                  i = pt.memoizedState;
                case 5:
                case 27:
                  var f = pt;
                  if (i ? vd(i) : f.stateNode.complete) {
                    Ut = 0, De = null;
                    var r = f.sibling;
                    if (r !== null) pt = r;
                    else {
                      var S = f.return;
                      S !== null ? (pt = S, Qu(S)) : pt = null;
                    }
                    break e;
                  }
              }
              Ut = 0, De = null, Ga(t, e, u, 5);
              break;
            case 6:
              Ut = 0, De = null, Ga(t, e, u, 6);
              break;
            case 8:
              Ff(), Kt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        x0();
        break;
      } catch (z) {
        Ao(t, z);
      }
    while (!0);
    return ul = Pl = null, E.H = a, E.A = n, jt = l, pt !== null ? 0 : (Lt = null, xt = 0, cu(), Kt);
  }
  function x0() {
    for (; pt !== null && !Ce(); )
      jo(pt);
  }
  function jo(t) {
    var e = Pr(t.alternate, t, yl);
    t.memoizedProps = t.pendingProps, e === null ? Qu(t) : pt = e;
  }
  function Mo(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Kr(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          xt
        );
        break;
      case 11:
        e = Kr(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          xt
        );
        break;
      case 5:
        df(e);
      default:
        eo(l, e), e = pt = Ds(e, yl), e = Pr(l, e, yl);
    }
    t.memoizedProps = t.pendingProps, e === null ? Qu(t) : pt = e;
  }
  function Ga(t, e, l, a) {
    ul = Pl = null, df(e), Ma = null, yn = 0;
    var n = e.return;
    try {
      if (s0(
        t,
        n,
        e,
        l,
        xt
      )) {
        Kt = 1, ju(
          t,
          qe(l, t.current)
        ), pt = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw pt = n, u;
      Kt = 1, ju(
        t,
        qe(l, t.current)
      ), pt = null;
      return;
    }
    e.flags & 32768 ? (Tt || a === 1 ? t = !0 : qa || (xt & 536870912) !== 0 ? t = !1 : (Cl = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ae.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Co(e, t)) : Qu(e);
  }
  function Qu(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Co(
          e,
          Cl
        );
        return;
      }
      t = e.return;
      var l = d0(
        e.alternate,
        e,
        yl
      );
      if (l !== null) {
        pt = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        pt = e;
        return;
      }
      pt = e = t;
    } while (e !== null);
    Kt === 0 && (Kt = 5);
  }
  function Co(t, e) {
    do {
      var l = h0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, pt = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        pt = t;
        return;
      }
      pt = t = l;
    } while (t !== null);
    Kt = 6, pt = null;
  }
  function Uo(t, e, l, a, n, u, i, f, r) {
    t.cancelPendingCommit = null;
    do
      Xu();
    while (le !== 0);
    if ((jt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (u = e.lanes | e.childLanes, u |= qi, th(
        t,
        l,
        u,
        i,
        f,
        r
      ), t === Lt && (pt = Lt = null, xt = 0), Ya = e, Hl = t, vl = l, Kf = u, Jf = n, _o = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, z0(ye, function() {
        return qo(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
        a = E.T, E.T = null, n = N.p, N.p = 2, i = jt, jt |= 4;
        try {
          m0(t, e, l);
        } finally {
          jt = i, N.p = n, E.T = a;
        }
      }
      le = 1, Ro(), Ho(), wo();
    }
  }
  function Ro() {
    if (le === 1) {
      le = 0;
      var t = Hl, e = Ya, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = E.T, E.T = null;
        var a = N.p;
        N.p = 2;
        var n = jt;
        jt |= 4;
        try {
          mo(e, t);
          var u = sc, i = ps(t.containerInfo), f = u.focusedElem, r = u.selectionRange;
          if (i !== f && f && f.ownerDocument && gs(
            f.ownerDocument.documentElement,
            f
          )) {
            if (r !== null && Ui(f)) {
              var S = r.start, z = r.end;
              if (z === void 0 && (z = S), "selectionStart" in f)
                f.selectionStart = S, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var D = f.ownerDocument || document, x = D && D.defaultView || window;
                if (x.getSelection) {
                  var T = x.getSelection(), Z = f.textContent.length, nt = Math.min(r.start, Z), Yt = r.end === void 0 ? nt : Math.min(r.end, Z);
                  !T.extend && nt > Yt && (i = Yt, Yt = nt, nt = i);
                  var y = bs(
                    f,
                    nt
                  ), d = bs(
                    f,
                    Yt
                  );
                  if (y && d && (T.rangeCount !== 1 || T.anchorNode !== y.node || T.anchorOffset !== y.offset || T.focusNode !== d.node || T.focusOffset !== d.offset)) {
                    var p = D.createRange();
                    p.setStart(y.node, y.offset), T.removeAllRanges(), nt > Yt ? (T.addRange(p), T.extend(d.node, d.offset)) : (p.setEnd(d.node, d.offset), T.addRange(p));
                  }
                }
              }
            }
            for (D = [], T = f; T = T.parentNode; )
              T.nodeType === 1 && D.push({
                element: T,
                left: T.scrollLeft,
                top: T.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
              var O = D[f];
              O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
            }
          }
          li = !!cc, sc = cc = null;
        } finally {
          jt = n, N.p = a, E.T = l;
        }
      }
      t.current = e, le = 2;
    }
  }
  function Ho() {
    if (le === 2) {
      le = 0;
      var t = Hl, e = Ya, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = E.T, E.T = null;
        var a = N.p;
        N.p = 2;
        var n = jt;
        jt |= 4;
        try {
          co(t, e.alternate, e);
        } finally {
          jt = n, N.p = a, E.T = l;
        }
      }
      le = 3;
    }
  }
  function wo() {
    if (le === 4 || le === 3) {
      le = 0, Xl();
      var t = Hl, e = Ya, l = vl, a = _o;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? le = 5 : (le = 0, Ya = Hl = null, ko(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (n === 0 && (Rl = null), mi(l), e = e.stateNode, de && typeof de.onCommitFiberRoot == "function")
        try {
          de.onCommitFiberRoot(
            Ze,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        e = E.T, n = N.p, N.p = 2, E.T = null;
        try {
          for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          E.T = e, N.p = n;
        }
      }
      (vl & 3) !== 0 && Xu(), Pe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Wf ? Cn++ : (Cn = 0, Wf = t) : Cn = 0, Un(0);
    }
  }
  function ko(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, hn(e)));
  }
  function Xu() {
    return Ro(), Ho(), wo(), qo();
  }
  function qo() {
    if (le !== 5) return !1;
    var t = Hl, e = Kf;
    Kf = 0;
    var l = mi(vl), a = E.T, n = N.p;
    try {
      N.p = 32 > l ? 32 : l, E.T = null, l = Jf, Jf = null;
      var u = Hl, i = vl;
      if (le = 0, Ya = Hl = null, vl = 0, (jt & 6) !== 0) throw Error(c(331));
      var f = jt;
      if (jt |= 4, po(u.current), vo(
        u,
        u.current,
        i,
        l
      ), jt = f, Un(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
        try {
          de.onPostCommitFiberRoot(Ze, u);
        } catch {
        }
      return !0;
    } finally {
      N.p = n, E.T = a, ko(t, e);
    }
  }
  function Bo(t, e, l) {
    e = qe(l, e), e = Of(t.stateNode, e, 2), t = Dl(t, e, 2), t !== null && (Ia(t, 2), Pe(t));
  }
  function Rt(t, e, l) {
    if (t.tag === 3)
      Bo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Bo(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Rl === null || !Rl.has(a))) {
            t = qe(l, t), l = Br(2), a = Dl(e, l, 2), a !== null && (Yr(
              l,
              a,
              e,
              t
            ), Ia(a, 2), Pe(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function If(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new b0();
      var n = /* @__PURE__ */ new Set();
      a.set(e, n);
    } else
      n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
    n.has(l) || (Xf = !0, n.add(l), t = _0.bind(null, t, e, l), e.then(t, t));
  }
  function _0(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Lt === t && (xt & l) === l && (Kt === 4 || Kt === 3 && (xt & 62914560) === xt && 300 > Ct() - qu ? (jt & 2) === 0 && La(t, 0) : Zf |= l, Ba === xt && (Ba = 0)), Pe(t);
  }
  function Yo(t, e) {
    e === 0 && (e = Uc()), t = Fl(t, e), t !== null && (Ia(t, e), Pe(t));
  }
  function T0(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Yo(t, l);
  }
  function E0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    a !== null && a.delete(e), Yo(t, l);
  }
  function z0(t, e) {
    return Zt(t, e);
  }
  var Zu = null, Qa = null, Pf = !1, Vu = !1, tc = !1, kl = 0;
  function Pe(t) {
    t !== Qa && t.next === null && (Qa === null ? Zu = Qa = t : Qa = Qa.next = t), Vu = !0, Pf || (Pf = !0, O0());
  }
  function Un(t, e) {
    if (!tc && Vu) {
      tc = !0;
      do
        for (var l = !1, a = Zu; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, f = a.pingedLanes;
              u = (1 << 31 - Te(42 | t) + 1) - 1, u &= n & ~(i & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Xo(a, u));
          } else
            u = xt, u = Fn(
              a,
              a === Lt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || $a(a, u) || (l = !0, Xo(a, u));
          a = a.next;
        }
      while (l);
      tc = !1;
    }
  }
  function A0() {
    Lo();
  }
  function Lo() {
    Vu = Pf = !1;
    var t = 0;
    kl !== 0 && k0() && (t = kl);
    for (var e = Ct(), l = null, a = Zu; a !== null; ) {
      var n = a.next, u = Go(a, e);
      u === 0 ? (a.next = null, l === null ? Zu = n : l.next = n, n === null && (Qa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Vu = !0)), a = n;
    }
    le !== 0 && le !== 5 || Un(t), kl !== 0 && (kl = 0);
  }
  function Go(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - Te(u), f = 1 << i, r = n[i];
      r === -1 ? ((f & l) === 0 || (f & a) !== 0) && (n[i] = Pd(f, e)) : r <= e && (t.expiredLanes |= f), u &= ~f;
    }
    if (e = Lt, l = xt, l = Fn(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, l === 0 || t === e && (Ut === 2 || Ut === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && We(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || $a(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (a !== null && We(a), mi(l)) {
        case 2:
        case 8:
          l = ie;
          break;
        case 32:
          l = ye;
          break;
        case 268435456:
          l = Fa;
          break;
        default:
          l = ye;
      }
      return a = Qo.bind(null, t), l = Zt(l, a), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return a !== null && a !== null && We(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Qo(t, e) {
    if (le !== 0 && le !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (Xu() && t.callbackNode !== l)
      return null;
    var a = xt;
    return a = Fn(
      t,
      t === Lt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (Eo(t, a, e), Go(t, Ct()), t.callbackNode != null && t.callbackNode === l ? Qo.bind(null, t) : null);
  }
  function Xo(t, e) {
    if (Xu()) return null;
    Eo(t, e, !0);
  }
  function O0() {
    B0(function() {
      (jt & 6) !== 0 ? Zt(
        Wt,
        A0
      ) : Lo();
    });
  }
  function ec() {
    if (kl === 0) {
      var t = Da;
      t === 0 && (t = Kn, Kn <<= 1, (Kn & 261888) === 0 && (Kn = 256)), kl = t;
    }
    return kl;
  }
  function Zo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : tu("" + t);
  }
  function Vo(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function D0(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var u = Zo(
        (n[ve] || null).action
      ), i = a.submitter;
      i && (e = (e = i[ve] || null) ? Zo(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
      var f = new nu(
        "action",
        "action",
        null,
        a,
        n
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (kl !== 0) {
                  var r = i ? Vo(n, i) : new FormData(n);
                  xf(
                    l,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: u
                    },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" && (f.preventDefault(), r = i ? Vo(n, i) : new FormData(n), xf(
                  l,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: u
                  },
                  u,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var lc = 0; lc < ki.length; lc++) {
    var ac = ki[lc], N0 = ac.toLowerCase(), j0 = ac[0].toUpperCase() + ac.slice(1);
    Ve(
      N0,
      "on" + j0
    );
  }
  Ve(_s, "onAnimationEnd"), Ve(Ts, "onAnimationIteration"), Ve(Es, "onAnimationStart"), Ve("dblclick", "onDoubleClick"), Ve("focusin", "onFocus"), Ve("focusout", "onBlur"), Ve(Vh, "onTransitionRun"), Ve(Kh, "onTransitionStart"), Ve(Jh, "onTransitionCancel"), Ve(zs, "onTransitionEnd"), ma("onMouseEnter", ["mouseout", "mouseover"]), ma("onMouseLeave", ["mouseout", "mouseover"]), ma("onPointerEnter", ["pointerout", "pointerover"]), ma("onPointerLeave", ["pointerout", "pointerover"]), Vl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Rn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), M0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rn)
  );
  function Ko(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l], n = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i], r = f.instance, S = f.currentTarget;
            if (f = f.listener, r !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = S;
            try {
              u(n);
            } catch (z) {
              fu(z);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (f = a[i], r = f.instance, S = f.currentTarget, f = f.listener, r !== u && n.isPropagationStopped())
              break t;
            u = f, n.currentTarget = S;
            try {
              u(n);
            } catch (z) {
              fu(z);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function St(t, e) {
    var l = e[yi];
    l === void 0 && (l = e[yi] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    l.has(a) || (Jo(e, t, 2, !1), l.add(a));
  }
  function nc(t, e, l) {
    var a = 0;
    e && (a |= 4), Jo(
      l,
      t,
      a,
      e
    );
  }
  var Ku = "_reactListening" + Math.random().toString(36).slice(2);
  function uc(t) {
    if (!t[Ku]) {
      t[Ku] = !0, Yc.forEach(function(l) {
        l !== "selectionchange" && (M0.has(l) || nc(l, !1, t), nc(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Ku] || (e[Ku] = !0, nc("selectionchange", !1, e));
    }
  }
  function Jo(t, e, l, a) {
    switch (Td(e)) {
      case 2:
        var n = um;
        break;
      case 8:
        n = im;
        break;
      default:
        n = Sc;
    }
    l = n.bind(
      null,
      e,
      l,
      t
    ), n = void 0, !Ei || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), a ? n !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, l, !0) : n !== void 0 ? t.addEventListener(e, l, {
      passive: n
    }) : t.addEventListener(e, l, !1);
  }
  function ic(t, e, l, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = oa(f), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = u = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Ic(function() {
      var S = u, z = _i(l), D = [];
      t: {
        var x = As.get(t);
        if (x !== void 0) {
          var T = nu, Z = t;
          switch (t) {
            case "keypress":
              if (lu(l) === 0) break t;
            case "keydown":
            case "keyup":
              T = Eh;
              break;
            case "focusin":
              Z = "focus", T = Di;
              break;
            case "focusout":
              Z = "blur", T = Di;
              break;
            case "beforeblur":
            case "afterblur":
              T = Di;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              T = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = dh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Oh;
              break;
            case _s:
            case Ts:
            case Es:
              T = yh;
              break;
            case zs:
              T = Nh;
              break;
            case "scroll":
            case "scrollend":
              T = rh;
              break;
            case "wheel":
              T = Mh;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = bh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = as;
              break;
            case "toggle":
            case "beforetoggle":
              T = Uh;
          }
          var nt = (e & 4) !== 0, Yt = !nt && (t === "scroll" || t === "scrollend"), y = nt ? x !== null ? x + "Capture" : null : x;
          nt = [];
          for (var d = S, p; d !== null; ) {
            var O = d;
            if (p = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || p === null || y === null || (O = en(d, y), O != null && nt.push(
              Hn(d, O, p)
            )), Yt) break;
            d = d.return;
          }
          0 < nt.length && (x = new T(
            x,
            Z,
            null,
            l,
            z
          ), D.push({ event: x, listeners: nt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (x = t === "mouseover" || t === "pointerover", T = t === "mouseout" || t === "pointerout", x && l !== xi && (Z = l.relatedTarget || l.fromElement) && (oa(Z) || Z[ra]))
            break t;
          if ((T || x) && (x = z.window === z ? z : (x = z.ownerDocument) ? x.defaultView || x.parentWindow : window, T ? (Z = l.relatedTarget || l.toElement, T = S, Z = Z ? oa(Z) : null, Z !== null && (Yt = J(Z), nt = Z.tag, Z !== Yt || nt !== 5 && nt !== 27 && nt !== 6) && (Z = null)) : (T = null, Z = S), T !== Z)) {
            if (nt = es, O = "onMouseLeave", y = "onMouseEnter", d = "mouse", (t === "pointerout" || t === "pointerover") && (nt = as, O = "onPointerLeave", y = "onPointerEnter", d = "pointer"), Yt = T == null ? x : tn(T), p = Z == null ? x : tn(Z), x = new nt(
              O,
              d + "leave",
              T,
              l,
              z
            ), x.target = Yt, x.relatedTarget = p, O = null, oa(z) === S && (nt = new nt(
              y,
              d + "enter",
              Z,
              l,
              z
            ), nt.target = p, nt.relatedTarget = Yt, O = nt), Yt = O, T && Z)
              e: {
                for (nt = C0, y = T, d = Z, p = 0, O = y; O; O = nt(O))
                  p++;
                O = 0;
                for (var tt = d; tt; tt = nt(tt))
                  O++;
                for (; 0 < p - O; )
                  y = nt(y), p--;
                for (; 0 < O - p; )
                  d = nt(d), O--;
                for (; p--; ) {
                  if (y === d || d !== null && y === d.alternate) {
                    nt = y;
                    break e;
                  }
                  y = nt(y), d = nt(d);
                }
                nt = null;
              }
            else nt = null;
            T !== null && Wo(
              D,
              x,
              T,
              nt,
              !1
            ), Z !== null && Yt !== null && Wo(
              D,
              Yt,
              Z,
              nt,
              !0
            );
          }
        }
        t: {
          if (x = S ? tn(S) : window, T = x.nodeName && x.nodeName.toLowerCase(), T === "select" || T === "input" && x.type === "file")
            var Dt = os;
          else if (ss(x))
            if (ds)
              Dt = Qh;
            else {
              Dt = Lh;
              var K = Yh;
            }
          else
            T = x.nodeName, !T || T.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? S && Si(S.elementType) && (Dt = os) : Dt = Gh;
          if (Dt && (Dt = Dt(t, S))) {
            rs(
              D,
              Dt,
              l,
              z
            );
            break t;
          }
          K && K(t, x, S), t === "focusout" && S && x.type === "number" && S.memoizedProps.value != null && pi(x, "number", x.value);
        }
        switch (K = S ? tn(S) : window, t) {
          case "focusin":
            (ss(K) || K.contentEditable === "true") && (Sa = K, Ri = S, rn = null);
            break;
          case "focusout":
            rn = Ri = Sa = null;
            break;
          case "mousedown":
            Hi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hi = !1, Ss(D, l, z);
            break;
          case "selectionchange":
            if (Zh) break;
          case "keydown":
          case "keyup":
            Ss(D, l, z);
        }
        var vt;
        if (ji)
          t: {
            switch (t) {
              case "compositionstart":
                var _t = "onCompositionStart";
                break t;
              case "compositionend":
                _t = "onCompositionEnd";
                break t;
              case "compositionupdate":
                _t = "onCompositionUpdate";
                break t;
            }
            _t = void 0;
          }
        else
          pa ? fs(t, l) && (_t = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (_t = "onCompositionStart");
        _t && (ns && l.locale !== "ko" && (pa || _t !== "onCompositionStart" ? _t === "onCompositionEnd" && pa && (vt = Pc()) : (xl = z, zi = "value" in xl ? xl.value : xl.textContent, pa = !0)), K = Ju(S, _t), 0 < K.length && (_t = new ls(
          _t,
          t,
          null,
          l,
          z
        ), D.push({ event: _t, listeners: K }), vt ? _t.data = vt : (vt = cs(l), vt !== null && (_t.data = vt)))), (vt = Hh ? wh(t, l) : kh(t, l)) && (_t = Ju(S, "onBeforeInput"), 0 < _t.length && (K = new ls(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), D.push({
          event: K,
          listeners: _t
        }), K.data = vt)), D0(
          D,
          t,
          S,
          l,
          z
        );
      }
      Ko(D, e);
    });
  }
  function Hn(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function Ju(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = en(t, l), n != null && a.unshift(
        Hn(t, n, u)
      ), n = en(t, e), n != null && a.push(
        Hn(t, n, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function C0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Wo(t, e, l, a, n) {
    for (var u = e._reactName, i = []; l !== null && l !== a; ) {
      var f = l, r = f.alternate, S = f.stateNode;
      if (f = f.tag, r !== null && r === a) break;
      f !== 5 && f !== 26 && f !== 27 || S === null || (r = S, n ? (S = en(l, u), S != null && i.unshift(
        Hn(l, S, r)
      )) : n || (S = en(l, u), S != null && i.push(
        Hn(l, S, r)
      ))), l = l.return;
    }
    i.length !== 0 && t.push({ event: e, listeners: i });
  }
  var U0 = /\r\n?/g, R0 = /\u0000|\uFFFD/g;
  function Fo(t) {
    return (typeof t == "string" ? t : "" + t).replace(U0, `
`).replace(R0, "");
  }
  function $o(t, e) {
    return e = Fo(e), Fo(t) === e;
  }
  function Bt(t, e, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? e === "body" || e === "textarea" && a === "" || va(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && va(t, "" + a);
        break;
      case "className":
        In(t, "class", a);
        break;
      case "tabIndex":
        In(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        In(t, l, a);
        break;
      case "style":
        Fc(t, a, u);
        break;
      case "data":
        if (e !== "object") {
          In(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = tu("" + a), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (e !== "input" && Bt(t, e, "name", n.name, n, null), Bt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Bt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Bt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Bt(t, e, "encType", n.encType, n, null), Bt(t, e, "method", n.method, n, null), Bt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        a = tu("" + a), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = el);
        break;
      case "onScroll":
        a != null && St("scroll", t);
        break;
      case "onScrollEnd":
        a != null && St("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = tu("" + a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
        break;
      case "popover":
        St("beforetoggle", t), St("toggle", t), $n(t, "popover", a);
        break;
      case "xlinkActuate":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        tl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        tl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        tl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        tl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        $n(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = ch.get(l) || l, $n(t, l, a));
    }
  }
  function fc(t, e, l, a, n, u) {
    switch (l) {
      case "style":
        Fc(t, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(c(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? va(t, a) : (typeof a == "number" || typeof a == "bigint") && va(t, "" + a);
        break;
      case "onScroll":
        a != null && St("scroll", t);
        break;
      case "onScrollEnd":
        a != null && St("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = el);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Lc.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ve] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === !0 ? t.setAttribute(l, "") : $n(t, l, a);
          }
    }
  }
  function oe(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        St("error", t), St("load", t);
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Bt(t, e, u, i, l, null);
              }
          }
        n && Bt(t, e, "srcSet", l.srcSet, l, null), a && Bt(t, e, "src", l.src, l, null);
        return;
      case "input":
        St("invalid", t);
        var f = u = i = n = null, r = null, S = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  i = z;
                  break;
                case "checked":
                  r = z;
                  break;
                case "defaultChecked":
                  S = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Bt(t, e, a, z, l, null);
              }
          }
        Vc(
          t,
          u,
          f,
          r,
          S,
          i,
          n,
          !1
        );
        return;
      case "select":
        St("invalid", t), a = i = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (f = l[n], f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                Bt(t, e, n, f, l, null);
            }
        e = u, l = i, t.multiple = !!a, e != null ? ya(t, !!a, e, !1) : l != null && ya(t, !!a, l, !0);
        return;
      case "textarea":
        St("invalid", t), u = n = a = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (f = l[i], f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                Bt(t, e, i, f, l, null);
            }
        Jc(t, a, n, u);
        return;
      case "option":
        for (r in l)
          if (l.hasOwnProperty(r) && (a = l[r], a != null))
            switch (r) {
              case "selected":
                t.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Bt(t, e, r, a, l, null);
            }
        return;
      case "dialog":
        St("beforetoggle", t), St("toggle", t), St("cancel", t), St("close", t);
        break;
      case "iframe":
      case "object":
        St("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Rn.length; a++)
          St(Rn[a], t);
        break;
      case "image":
        St("error", t), St("load", t);
        break;
      case "details":
        St("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        St("error", t), St("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (S in l)
          if (l.hasOwnProperty(S) && (a = l[S], a != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Bt(t, e, S, a, l, null);
            }
        return;
      default:
        if (Si(e)) {
          for (z in l)
            l.hasOwnProperty(z) && (a = l[z], a !== void 0 && fc(
              t,
              e,
              z,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (f in l)
      l.hasOwnProperty(f) && (a = l[f], a != null && Bt(t, e, f, a, l, null));
  }
  function H0(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, f = null, r = null, S = null, z = null;
        for (T in l) {
          var D = l[T];
          if (l.hasOwnProperty(T) && D != null)
            switch (T) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = D;
              default:
                a.hasOwnProperty(T) || Bt(t, e, T, null, a, D);
            }
        }
        for (var x in a) {
          var T = a[x];
          if (D = l[x], a.hasOwnProperty(x) && (T != null || D != null))
            switch (x) {
              case "type":
                u = T;
                break;
              case "name":
                n = T;
                break;
              case "checked":
                S = T;
                break;
              case "defaultChecked":
                z = T;
                break;
              case "value":
                i = T;
                break;
              case "defaultValue":
                f = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null)
                  throw Error(c(137, e));
                break;
              default:
                T !== D && Bt(
                  t,
                  e,
                  x,
                  T,
                  a,
                  D
                );
            }
        }
        gi(
          t,
          i,
          f,
          r,
          S,
          z,
          u,
          n
        );
        return;
      case "select":
        T = i = f = x = null;
        for (u in l)
          if (r = l[u], l.hasOwnProperty(u) && r != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                T = r;
              default:
                a.hasOwnProperty(u) || Bt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  r
                );
            }
        for (n in a)
          if (u = a[n], r = l[n], a.hasOwnProperty(n) && (u != null || r != null))
            switch (n) {
              case "value":
                x = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== r && Bt(
                  t,
                  e,
                  n,
                  u,
                  a,
                  r
                );
            }
        e = f, l = i, a = T, x != null ? ya(t, !!l, x, !1) : !!a != !!l && (e != null ? ya(t, !!l, e, !0) : ya(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        T = x = null;
        for (f in l)
          if (n = l[f], l.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Bt(t, e, f, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                x = n;
                break;
              case "defaultValue":
                T = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(c(91));
                break;
              default:
                n !== u && Bt(t, e, i, n, a, u);
            }
        Kc(t, x, T);
        return;
      case "option":
        for (var Z in l)
          if (x = l[Z], l.hasOwnProperty(Z) && x != null && !a.hasOwnProperty(Z))
            switch (Z) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Bt(
                  t,
                  e,
                  Z,
                  null,
                  a,
                  x
                );
            }
        for (r in a)
          if (x = a[r], T = l[r], a.hasOwnProperty(r) && x !== T && (x != null || T != null))
            switch (r) {
              case "selected":
                t.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                Bt(
                  t,
                  e,
                  r,
                  x,
                  a,
                  T
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var nt in l)
          x = l[nt], l.hasOwnProperty(nt) && x != null && !a.hasOwnProperty(nt) && Bt(t, e, nt, null, a, x);
        for (S in a)
          if (x = a[S], T = l[S], a.hasOwnProperty(S) && x !== T && (x != null || T != null))
            switch (S) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(c(137, e));
                break;
              default:
                Bt(
                  t,
                  e,
                  S,
                  x,
                  a,
                  T
                );
            }
        return;
      default:
        if (Si(e)) {
          for (var Yt in l)
            x = l[Yt], l.hasOwnProperty(Yt) && x !== void 0 && !a.hasOwnProperty(Yt) && fc(
              t,
              e,
              Yt,
              void 0,
              a,
              x
            );
          for (z in a)
            x = a[z], T = l[z], !a.hasOwnProperty(z) || x === T || x === void 0 && T === void 0 || fc(
              t,
              e,
              z,
              x,
              a,
              T
            );
          return;
        }
    }
    for (var y in l)
      x = l[y], l.hasOwnProperty(y) && x != null && !a.hasOwnProperty(y) && Bt(t, e, y, null, a, x);
    for (D in a)
      x = a[D], T = l[D], !a.hasOwnProperty(D) || x === T || x == null && T == null || Bt(t, e, D, x, a, T);
  }
  function Io(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function w0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, i = n.initiatorType, f = n.duration;
        if (u && f && Io(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < l.length; a++) {
            var r = l[a], S = r.startTime;
            if (S > f) break;
            var z = r.transferSize, D = r.initiatorType;
            z && Io(D) && (r = r.responseEnd, i += z * (r < f ? 1 : (f - S) / (r - S)));
          }
          if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var cc = null, sc = null;
  function Wu(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Po(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function td(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function rc(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var oc = null;
  function k0() {
    var t = window.event;
    return t && t.type === "popstate" ? t === oc ? !1 : (oc = t, !0) : (oc = null, !1);
  }
  var ed = typeof setTimeout == "function" ? setTimeout : void 0, q0 = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, B0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(t) {
    return ld.resolve(null).then(t).catch(Y0);
  } : ed;
  function Y0(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function ql(t) {
    return t === "head";
  }
  function ad(t, e) {
    var l = e, a = 0;
    do {
      var n = l.nextSibling;
      if (t.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ka(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          wn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, wn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, f = u.nodeName;
            u[Pa] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else
          l === "body" && wn(t.ownerDocument.body);
      l = n;
    } while (l);
    Ka(e);
  }
  function nd(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = a;
    } while (l);
  }
  function dc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          dc(l), vi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function L0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Pa])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = Qe(t.nextSibling), t === null) break;
    }
    return null;
  }
  function G0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function ud(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Qe(t.nextSibling), t === null)) return null;
    return t;
  }
  function hc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function mc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Q0(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function Qe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var yc = null;
  function id(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Qe(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function fd(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function cd(t, e, l) {
    switch (e = Wu(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function wn(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    vi(t);
  }
  var Xe = /* @__PURE__ */ new Map(), sd = /* @__PURE__ */ new Set();
  function Fu(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var bl = N.d;
  N.d = {
    f: X0,
    r: Z0,
    D: V0,
    C: K0,
    L: J0,
    m: W0,
    X: $0,
    S: F0,
    M: I0
  };
  function X0() {
    var t = bl.f(), e = Lu();
    return t || e;
  }
  function Z0(t) {
    var e = da(t);
    e !== null && e.tag === 5 && e.type === "form" ? zr(e) : bl.r(t);
  }
  var Xa = typeof document > "u" ? null : document;
  function rd(t, e, l) {
    var a = Xa;
    if (a && typeof e == "string" && e) {
      var n = we(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), sd.has(n) || (sd.add(n), t = { rel: t, crossOrigin: l, href: e }, a.querySelector(n) === null && (e = a.createElement("link"), oe(e, "link", t), ne(e), a.head.appendChild(e)));
    }
  }
  function V0(t) {
    bl.D(t), rd("dns-prefetch", t, null);
  }
  function K0(t, e) {
    bl.C(t, e), rd("preconnect", t, e);
  }
  function J0(t, e, l) {
    bl.L(t, e, l);
    var a = Xa;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + we(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + we(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + we(
        l.imageSizes
      ) + '"]')) : n += '[href="' + we(t) + '"]';
      var u = n;
      switch (e) {
        case "style":
          u = Za(t);
          break;
        case "script":
          u = Va(t);
      }
      Xe.has(u) || (t = Y(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Xe.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(kn(u)) || e === "script" && a.querySelector(qn(u)) || (e = a.createElement("link"), oe(e, "link", t), ne(e), a.head.appendChild(e)));
    }
  }
  function W0(t, e) {
    bl.m(t, e);
    var l = Xa;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + we(a) + '"][href="' + we(t) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Va(t);
      }
      if (!Xe.has(u) && (t = Y({ rel: "modulepreload", href: t }, e), Xe.set(u, t), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(qn(u)))
              return;
        }
        a = l.createElement("link"), oe(a, "link", t), ne(a), l.head.appendChild(a);
      }
    }
  }
  function F0(t, e, l) {
    bl.S(t, e, l);
    var a = Xa;
    if (a && t) {
      var n = ha(a).hoistableStyles, u = Za(t);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = a.querySelector(
          kn(u)
        ))
          f.loading = 5;
        else {
          t = Y(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Xe.get(u)) && vc(t, l);
          var r = i = a.createElement("link");
          ne(r), oe(r, "link", t), r._p = new Promise(function(S, z) {
            r.onload = S, r.onerror = z;
          }), r.addEventListener("load", function() {
            f.loading |= 1;
          }), r.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, $u(i, e, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, n.set(u, i);
      }
    }
  }
  function $0(t, e) {
    bl.X(t, e);
    var l = Xa;
    if (l && t) {
      var a = ha(l).hoistableScripts, n = Va(t), u = a.get(n);
      u || (u = l.querySelector(qn(n)), u || (t = Y({ src: t, async: !0 }, e), (e = Xe.get(n)) && bc(t, e), u = l.createElement("script"), ne(u), oe(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function I0(t, e) {
    bl.M(t, e);
    var l = Xa;
    if (l && t) {
      var a = ha(l).hoistableScripts, n = Va(t), u = a.get(n);
      u || (u = l.querySelector(qn(n)), u || (t = Y({ src: t, async: !0, type: "module" }, e), (e = Xe.get(n)) && bc(t, e), u = l.createElement("script"), ne(u), oe(u, "link", t), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function od(t, e, l, a) {
    var n = (n = P.current) ? Fu(n) : null;
    if (!n) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Za(l.href), l = ha(
          n
        ).hoistableStyles, a = l.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Za(l.href);
          var u = ha(
            n
          ).hoistableStyles, i = u.get(t);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, i), (u = n.querySelector(
            kn(t)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Xe.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Xe.set(t, l), u || P0(
            n,
            t,
            l,
            i.state
          ))), e && a === null)
            throw Error(c(528, ""));
          return i;
        }
        if (e && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Va(l), l = ha(
          n
        ).hoistableScripts, a = l.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function Za(t) {
    return 'href="' + we(t) + '"';
  }
  function kn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function dd(t) {
    return Y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function P0(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    }), oe(e, "link", l), ne(e), t.head.appendChild(e));
  }
  function Va(t) {
    return '[src="' + we(t) + '"]';
  }
  function qn(t) {
    return "script[async]" + t;
  }
  function hd(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + we(l.href) + '"]'
          );
          if (a)
            return e.instance = a, ne(a), a;
          var n = Y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ne(a), oe(a, "style", n), $u(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Za(l.href);
          var u = t.querySelector(
            kn(n)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ne(u), u;
          a = dd(l), (n = Xe.get(n)) && vc(a, n), u = (t.ownerDocument || t).createElement("link"), ne(u);
          var i = u;
          return i._p = new Promise(function(f, r) {
            i.onload = f, i.onerror = r;
          }), oe(u, "link", a), e.state.loading |= 4, $u(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Va(l.src), (n = t.querySelector(
            qn(u)
          )) ? (e.instance = n, ne(n), n) : (a = l, (n = Xe.get(u)) && (a = Y({}, l), bc(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), ne(n), oe(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, $u(a, l.precedence, t));
    return e.instance;
  }
  function $u(t, e, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var f = a[i];
      if (f.dataset.precedence === e) u = f;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function vc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function bc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Iu = null;
  function md(t, e, l) {
    if (Iu === null) {
      var a = /* @__PURE__ */ new Map(), n = Iu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = Iu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(t)) return a;
    for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[Pa] || u[fe] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(e) || "";
        i = t + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function yd(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function tm(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        switch (e.rel) {
          case "stylesheet":
            return t = e.disabled, typeof e.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function vd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function em(t, e, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Za(a.href), u = e.querySelector(
          kn(n)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Pu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, ne(u);
          return;
        }
        u = e.ownerDocument || e, a = dd(a), (n = Xe.get(n)) && vc(a, n), u = u.createElement("link"), ne(u);
        var i = u;
        i._p = new Promise(function(f, r) {
          i.onload = f, i.onerror = r;
        }), oe(u, "link", a), l.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Pu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var gc = 0;
  function lm(t, e) {
    return t.stylesheets && t.count === 0 && ei(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && ei(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && gc === 0 && (gc = 62500 * w0());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && ei(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > gc ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Pu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ei(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var ti = null;
  function ei(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, ti = /* @__PURE__ */ new Map(), e.forEach(am, t), ti = null, Pu.call(t));
  }
  function am(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ti.get(t);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), ti.set(t, l);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
        }
        a && l.set(null, a);
      }
      n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Bn = {
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function nm(t, e, l, a, n, u, i, f, r) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = di(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = di(0), this.hiddenUpdates = di(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function bd(t, e, l, a, n, u, i, f, r, S, z, D) {
    return t = new nm(
      t,
      e,
      l,
      i,
      r,
      S,
      z,
      D,
      f
    ), e = 1, u === !0 && (e |= 24), u = ze(3, null, null, e), t.current = u, u.stateNode = t, e = Fi(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: e
    }, tf(u), t;
  }
  function gd(t) {
    return t ? (t = Ta, t) : Ta;
  }
  function pd(t, e, l, a, n, u) {
    n = gd(n), a.context === null ? a.context = n : a.pendingContext = n, a = Ol(e), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Dl(t, a, e), l !== null && (_e(l, t, e), bn(l, t, e));
  }
  function Sd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function pc(t, e) {
    Sd(t, e), (t = t.alternate) && Sd(t, e);
  }
  function xd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fl(t, 67108864);
      e !== null && _e(e, t, 67108864), pc(t, 67108864);
    }
  }
  function _d(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = je();
      e = hi(e);
      var l = Fl(t, e);
      l !== null && _e(l, t, e), pc(t, e);
    }
  }
  var li = !0;
  function um(t, e, l, a) {
    var n = E.T;
    E.T = null;
    var u = N.p;
    try {
      N.p = 2, Sc(t, e, l, a);
    } finally {
      N.p = u, E.T = n;
    }
  }
  function im(t, e, l, a) {
    var n = E.T;
    E.T = null;
    var u = N.p;
    try {
      N.p = 8, Sc(t, e, l, a);
    } finally {
      N.p = u, E.T = n;
    }
  }
  function Sc(t, e, l, a) {
    if (li) {
      var n = xc(a);
      if (n === null)
        ic(
          t,
          e,
          a,
          ai,
          l
        ), Ed(t, a);
      else if (cm(
        n,
        t,
        e,
        l,
        a
      ))
        a.stopPropagation();
      else if (Ed(t, a), e & 4 && -1 < fm.indexOf(t)) {
        for (; n !== null; ) {
          var u = da(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Zl(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - Te(i);
                      f.entanglements[1] |= r, i &= ~r;
                    }
                    Pe(u), (jt & 6) === 0 && (Bu = Ct() + 500, Un(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Fl(u, 2), f !== null && _e(f, u, 2), Lu(), pc(u, 2);
            }
          if (u = xc(a), u === null && ic(
            t,
            e,
            a,
            ai,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        ic(
          t,
          e,
          a,
          null,
          l
        );
    }
  }
  function xc(t) {
    return t = _i(t), _c(t);
  }
  var ai = null;
  function _c(t) {
    if (ai = null, t = oa(t), t !== null) {
      var e = J(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = L(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = bt(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ai = t, null;
  }
  function Td(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ue()) {
          case Wt:
            return 2;
          case ie:
            return 8;
          case ye:
          case Wa:
            return 32;
          case Fa:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Tc = !1, Bl = null, Yl = null, Ll = null, Yn = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Gl = [], fm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ed(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Bl = null;
        break;
      case "dragenter":
      case "dragleave":
        Yl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ln.delete(e.pointerId);
    }
  }
  function Gn(t, e, l, a, n, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, e !== null && (e = da(e), e !== null && xd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function cm(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return Bl = Gn(
          Bl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Yl = Gn(
          Yl,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Ll = Gn(
          Ll,
          t,
          e,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Yn.set(
          u,
          Gn(
            Yn.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Ln.set(
          u,
          Gn(
            Ln.get(u) || null,
            t,
            e,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function zd(t) {
    var e = oa(t.target);
    if (e !== null) {
      var l = J(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = L(l), e !== null) {
            t.blockedOn = e, qc(t.priority, function() {
              _d(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = bt(l), e !== null) {
            t.blockedOn = e, qc(t.priority, function() {
              _d(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function ni(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = xc(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        xi = a, l.target.dispatchEvent(a), xi = null;
      } else
        return e = da(l), e !== null && xd(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function Ad(t, e, l) {
    ni(t) && l.delete(e);
  }
  function sm() {
    Tc = !1, Bl !== null && ni(Bl) && (Bl = null), Yl !== null && ni(Yl) && (Yl = null), Ll !== null && ni(Ll) && (Ll = null), Yn.forEach(Ad), Ln.forEach(Ad);
  }
  function ui(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Tc || (Tc = !0, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      sm
    )));
  }
  var ii = null;
  function Od(t) {
    ii !== t && (ii = t, v.unstable_scheduleCallback(
      v.unstable_NormalPriority,
      function() {
        ii === t && (ii = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (_c(a || l) === null)
              continue;
            break;
          }
          var u = da(l);
          u !== null && (t.splice(e, 3), e -= 3, xf(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ka(t) {
    function e(r) {
      return ui(r, t);
    }
    Bl !== null && ui(Bl, t), Yl !== null && ui(Yl, t), Ll !== null && ui(Ll, t), Yn.forEach(e), Ln.forEach(e);
    for (var l = 0; l < Gl.length; l++) {
      var a = Gl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Gl.length && (l = Gl[0], l.blockedOn === null); )
      zd(l), l.blockedOn === null && Gl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[ve] || null;
        if (typeof u == "function")
          i || Od(l);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[ve] || null)
              f = i.formAction;
            else if (_c(n) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? l[a + 1] = f : (l.splice(a, 3), a -= 3), Od(l);
        }
      }
  }
  function Dd() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function Ec(t) {
    this._internalRoot = t;
  }
  fi.prototype.render = Ec.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var l = e.current, a = je();
    pd(l, a, t, e, null, null);
  }, fi.prototype.unmount = Ec.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      pd(t.current, 2, null, t, null, null), Lu(), e[ra] = null;
    }
  };
  function fi(t) {
    this._internalRoot = t;
  }
  fi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = kc();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Gl.length && e !== 0 && e < Gl[l].priority; l++) ;
      Gl.splice(l, 0, t), l === 0 && zd(t);
    }
  };
  var Nd = M.version;
  if (Nd !== "19.2.3")
    throw Error(
      c(
        527,
        Nd,
        "19.2.3"
      )
    );
  N.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = b(e), t = t !== null ? $(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var rm = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: E,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ci.isDisabled && ci.supportsFiber)
      try {
        Ze = ci.inject(
          rm
        ), de = ci;
      } catch {
      }
  }
  return Qn.createRoot = function(t, e) {
    if (!V(t)) throw Error(c(299));
    var l = !1, a = "", n = Hr, u = wr, i = kr;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = bd(
      t,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      i,
      Dd
    ), t[ra] = e.current, uc(t), new Ec(e);
  }, Qn.hydrateRoot = function(t, e, l) {
    if (!V(t)) throw Error(c(299));
    var a = !1, n = "", u = Hr, i = wr, f = kr, r = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.formState !== void 0 && (r = l.formState)), e = bd(
      t,
      1,
      !0,
      e,
      l ?? null,
      a,
      n,
      r,
      u,
      i,
      f,
      Dd
    ), e.context = gd(null), l = e.current, a = je(), a = hi(a), n = Ol(a), n.callback = null, Dl(l, n, a), l = a, e.current.lanes = l, Ia(e, l), Pe(e), t[ra] = e.current, uc(t), new fi(e);
  }, Qn.version = "19.2.3", Qn;
}
var kd;
function gm() {
  if (kd) return Ac.exports;
  kd = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
      } catch (M) {
        console.error(M);
      }
  }
  return v(), Ac.exports = bm(), Ac.exports;
}
var pm = gm(), Sm = Object.defineProperty, xm = (v, M, U) => M in v ? Sm(v, M, { enumerable: !0, configurable: !0, writable: !0, value: U }) : v[M] = U, si = (v, M, U) => xm(v, typeof M != "symbol" ? M + "" : M, U);
const _m = {
  stringify: (v) => v ? "true" : "false",
  parse: (v) => /^[ty1-9]/i.test(v)
}, Tm = {
  stringify: (v) => v.name,
  parse: (v, M, U) => {
    const c = (() => {
      if (typeof window < "u" && v in window)
        return window[v];
      if (typeof global < "u" && v in global)
        return global[v];
    })();
    return typeof c == "function" ? c.bind(U) : void 0;
  }
}, Em = {
  stringify: (v) => JSON.stringify(v),
  parse: (v) => JSON.parse(v)
};
function zm(v) {
  return v.replace(
    /([a-z0-9])([A-Z])/g,
    (M, U, c) => `${U}-${c.toLowerCase()}`
  );
}
function Vd(v) {
  return v.replace(/[-:]([a-z])/g, (M, U) => `${U.toUpperCase()}`);
}
const Am = {
  stringify: (v) => v.name,
  parse: (v, M, U) => {
    const c = (() => {
      const V = Vd(M);
      if (typeof U < "u" && V in U.container)
        return U.container[V];
    })();
    return typeof c == "function" ? c.bind(U) : void 0;
  }
}, Om = {
  stringify: (v) => `${v}`,
  parse: (v) => parseFloat(v)
}, Dm = {
  stringify: (v) => v,
  parse: (v) => v
}, jc = {
  string: Dm,
  number: Om,
  boolean: _m,
  function: Tm,
  method: Am,
  json: Em
}, Xn = Symbol.for("r2wc.render"), ri = Symbol.for("r2wc.connected"), sa = Symbol.for("r2wc.context"), Me = Symbol.for("r2wc.props");
function Nm(v, M, U) {
  var c, V, J;
  M.props || (M.props = v.propTypes ? Object.keys(v.propTypes) : []), M.events || (M.events = []);
  const L = Array.isArray(M.props) ? M.props.slice() : Object.keys(M.props), bt = Array.isArray(M.events) ? M.events.slice() : Object.keys(M.events), k = {}, b = {}, $ = {}, Y = {};
  for (const it of L) {
    k[it] = Array.isArray(M.props) ? "string" : M.props[it];
    const W = zm(it);
    $[it] = W, Y[W] = it;
  }
  for (const it of bt)
    b[it] = Array.isArray(M.events) ? {} : M.events[it];
  class ft extends HTMLElement {
    constructor() {
      super(), si(this, J, !0), si(this, V), si(this, c, {}), si(this, "container"), M.shadow ? this.container = this.attachShadow({
        mode: M.shadow
      }) : this.container = this, this[Me].container = this.container;
      for (const W of L) {
        const ot = $[W], dt = this.getAttribute(ot), B = k[W], X = B ? jc[B] : null;
        if (B === "method") {
          const G = Vd(ot);
          Object.defineProperty(this[Me].container, G, {
            enumerable: !0,
            configurable: !0,
            get() {
              return this[Me][G];
            },
            set(I) {
              this[Me][G] = I, this[Xn]();
            }
          }), this[Me][W] = X.parse(dt, ot, this);
        }
        X != null && X.parse && dt && (this[Me][W] = X.parse(dt, ot, this));
      }
      for (const W of bt)
        this[Me][W] = (ot) => {
          const dt = W.replace(/^on/, "").toLowerCase();
          this.dispatchEvent(
            new CustomEvent(dt, { detail: ot, ...b[W] })
          );
        };
    }
    static get observedAttributes() {
      return Object.keys(Y);
    }
    connectedCallback() {
      this[ri] = !0, this[Xn]();
    }
    disconnectedCallback() {
      this[ri] = !1, this[sa] && U.unmount(this[sa]), delete this[sa];
    }
    attributeChangedCallback(W, ot, dt) {
      const B = Y[W], X = k[B], G = X ? jc[X] : null;
      B in k && G != null && G.parse && dt && (this[Me][B] = G.parse(dt, W, this), this[Xn]());
    }
    [(J = ri, V = sa, c = Me, Xn)]() {
      this[ri] && (this[sa] ? U.update(this[sa], this[Me]) : this[sa] = U.mount(
        this.container,
        v,
        this[Me]
      ));
    }
  }
  for (const it of L) {
    const W = $[it], ot = k[it];
    Object.defineProperty(ft.prototype, it, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Me][it];
      },
      set(dt) {
        this[Me][it] = dt;
        const B = ot ? jc[ot] : null;
        if (B != null && B.stringify) {
          const X = B.stringify(dt, W, this);
          this.getAttribute(W) !== X && this.setAttribute(W, X);
        } else
          this[Xn]();
      }
    });
  }
  return ft;
}
function jm(v, M, U) {
  const c = pm.createRoot(v), V = Zd.createElement(M, U);
  return c.render(V), {
    root: c,
    ReactComponent: M
  };
}
function Mm({ root: v, ReactComponent: M }, U) {
  const c = Zd.createElement(M, U);
  v.render(c);
}
function Cm({ root: v }) {
  v.unmount();
}
function Um(v, M = {}) {
  return Nm(v, M, { mount: jm, update: Mm, unmount: Cm });
}
var Mc = { exports: {} }, Zn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qd;
function Rm() {
  if (qd) return Zn;
  qd = 1;
  var v = Symbol.for("react.transitional.element"), M = Symbol.for("react.fragment");
  function U(c, V, J) {
    var L = null;
    if (J !== void 0 && (L = "" + J), V.key !== void 0 && (L = "" + V.key), "key" in V) {
      J = {};
      for (var bt in V)
        bt !== "key" && (J[bt] = V[bt]);
    } else J = V;
    return V = J.ref, {
      $$typeof: v,
      type: c,
      key: L,
      ref: V !== void 0 ? V : null,
      props: J
    };
  }
  return Zn.Fragment = M, Zn.jsx = U, Zn.jsxs = U, Zn;
}
var Bd;
function Hm() {
  return Bd || (Bd = 1, Mc.exports = Rm()), Mc.exports;
}
var o = Hm();
const wm = ({
  lastUpdated: v,
  darkMode: M,
  toggleDarkMode: U,
  onLoginClick: c,
  isAdmin: V,
  onExport: J
}) => /* @__PURE__ */ o.jsxs("header", { className: "mb-12 pt-8", children: [
  /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center border-b border-fashion-black/20 dark:border-fashion-white/20 pb-2 mb-8 animate-fade-in", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "text-[10px] font-sans tracking-widest uppercase flex gap-4 font-bold opacity-90", children: [
      /* @__PURE__ */ o.jsx("span", { children: "Est. 2024" }),
      V && /* @__PURE__ */ o.jsx("span", { className: "text-fashion-accent font-bold", children: "ADMIN ACCESS" })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "text-[10px] font-sans tracking-widest uppercase font-bold opacity-90", children: v.toLocaleDateString("en-US", { month: "long", year: "numeric" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-4", children: [
      J && /* @__PURE__ */ o.jsxs(
        "button",
        {
          onClick: J,
          className: "text-[10px] font-sans tracking-widest uppercase hover:underline font-bold opacity-90 hover:opacity-100 flex items-center gap-1",
          children: [
            /* @__PURE__ */ o.jsx("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ o.jsx("path", { d: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" }) }),
            "Export"
          ]
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: U,
          className: "text-[10px] font-sans tracking-widest uppercase hover:underline font-bold opacity-90 hover:opacity-100",
          children: M ? "Light" : "Dark"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: c,
          className: "text-[10px] font-sans tracking-widest uppercase hover:underline font-bold opacity-90 hover:opacity-100",
          children: V ? "Portal" : "Admin"
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ o.jsxs("div", { className: "text-center relative", children: [
    /* @__PURE__ */ o.jsx("h1", { className: "font-vogue text-5xl md:text-7xl mb-2 tracking-[0.3em] animate-blur-in text-fashion-black dark:text-fashion-white font-semibold uppercase", children: "Protea Ridge" }),
    /* @__PURE__ */ o.jsx("div", { className: "h-px w-24 bg-fashion-black dark:bg-fashion-white mx-auto my-6 animate-fade-in-up", style: { animationDelay: "0.3s" } }),
    /* @__PURE__ */ o.jsx("p", { className: "font-sans text-xs tracking-[0.3em] uppercase mt-4 animate-fade-in-up font-bold opacity-80", style: { animationDelay: "0.5s" }, children: "Staff Roster & Schedule" })
  ] })
] }), Yd = (v, M = 60) => {
  const U = [];
  for (let c = 0; c < M; c++) {
    const V = new Date(v);
    V.setDate(v.getDate() + c), U.push({
      date: V,
      // Create a purely cosmetic "WorkDay" placeholder here, 
      // actual logic happens per staff member
      isWorkDay: !1,
      dayName: V.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase(),
      dayNumber: V.getDate(),
      fullDateStr: V.toISOString().split("T")[0]
    });
  }
  return U;
}, km = (v, M) => {
  const U = new Date(v.cycleStartDate), c = new Date(M);
  U.setHours(0, 0, 0, 0), c.setHours(0, 0, 0, 0);
  const V = c.getTime() - U.getTime(), J = Math.floor(V / (1e3 * 60 * 60 * 24)), L = v.patternOn + v.patternOff;
  return (J % L + L) % L < v.patternOn;
}, qm = "Automated (Sat = Half)", Kd = (v, M) => {
  var J;
  const U = (J = v.overrides) == null ? void 0 : J.find((L) => L.date === M.fullDateStr);
  return U != null && U.isDayOff ? {
    isWorking: !1,
    shiftType: "Off",
    visualType: "Dash",
    label: "Day Off (Manual)"
  } : km(v, M.fullDateStr) ? U != null && U.shiftType ? U.shiftType === "Half" ? {
    isWorking: !0,
    shiftType: "Half",
    visualType: "Hollow",
    label: "Half Shift (Manual)"
  } : {
    isWorking: !0,
    shiftType: "Normal",
    visualType: "Solid",
    label: "Normal Shift (Manual)"
  } : M.dayName === "SAT" ? {
    isWorking: !0,
    shiftType: "Half",
    visualType: "Hollow",
    label: "Half Shift"
  } : {
    isWorking: !0,
    shiftType: "Normal",
    visualType: "Solid",
    label: "Normal Shift"
  } : {
    isWorking: !1,
    shiftType: "Off",
    visualType: "Dash",
    label: "Off"
  };
}, Bm = (v, M, U) => {
  var V;
  const c = (V = v.overrides) == null ? void 0 : V.find((J) => J.date === M);
  return c ? { start: c.startTime, end: c.endTime } : U === "Half" ? { start: "08:00", end: "13:00" } : { start: "08:00", end: "17:00" };
};
function Jd(v) {
  var M, U, c = "";
  if (typeof v == "string" || typeof v == "number") c += v;
  else if (typeof v == "object") if (Array.isArray(v)) {
    var V = v.length;
    for (M = 0; M < V; M++) v[M] && (U = Jd(v[M])) && (c && (c += " "), c += U);
  } else for (U in v) v[U] && (c && (c += " "), c += U);
  return c;
}
function Ja() {
  for (var v, M, U = 0, c = "", V = arguments.length; U < V; U++) (v = arguments[U]) && (M = Jd(v)) && (c && (c += " "), c += M);
  return c;
}
const Ld = (v) => {
  if (!v) return "";
  const [M, U] = v.split(":"), c = parseInt(M, 10), V = c >= 12 ? "pm" : "am";
  return `${c % 12 || 12}${U === "00" ? "" : ":" + U}${V}`;
}, Ym = ({
  staff: v,
  dates: M,
  isAdmin: U = !1,
  onUpdateStaff: c,
  displayMode: V = "dots"
}) => {
  const J = (/* @__PURE__ */ new Date()).toISOString().split("T")[0], [L, bt] = zt.useState(null), [k, b] = zt.useState(""), [$, Y] = zt.useState(""), ft = (B, X, G) => {
    if (!c) return;
    const I = v.map((ut) => {
      if (ut.id !== B.id) return ut;
      const lt = ut.overrides ? [...ut.overrides] : [], R = lt.findIndex((A) => A.date === X.fullDateStr), h = R >= 0 ? lt[R] : null;
      let m = null;
      return h != null && h.isDayOff ? R >= 0 && lt.splice(R, 1) : (h == null ? void 0 : h.shiftType) === "Half" || !h && G.shiftType === "Half" ? m = {
        date: X.fullDateStr,
        isDayOff: !0,
        shiftType: void 0
      } : m = {
        date: X.fullDateStr,
        startTime: "08:00",
        endTime: "13:00",
        isDayOff: !1,
        shiftType: "Half"
      }, m && (R >= 0 ? lt[R] = m : lt.push(m)), { ...ut, overrides: lt };
    });
    c(I);
  }, it = (B, X, G) => {
    var R;
    if (U && c) {
      ft(B, X, G);
      return;
    }
    if (!G.isWorking) return;
    const I = G.isWorking ? Bm(B, X.fullDateStr, G.shiftType) : { start: "08:00", end: "17:00" }, ut = (R = B.overrides) == null ? void 0 : R.find((h) => h.date === X.fullDateStr), lt = (ut == null ? void 0 : ut.isDayOff) || !G.isWorking;
    bt({
      staffId: B.id,
      dateStr: X.fullDateStr,
      staffName: B.name,
      shiftType: G.shiftType,
      label: G.label,
      start: I.start,
      end: I.end,
      isDayOff: lt
    }), b(I.start), Y(I.end);
  }, W = () => {
    if (!L || !c) return;
    const B = v.map((X) => {
      if (X.id !== L.staffId) return X;
      const G = X.overrides ? [...X.overrides] : [], I = G.findIndex((ut) => ut.date === L.dateStr);
      if (L.isDayOff)
        I >= 0 && G.splice(I, 1);
      else {
        const ut = {
          date: L.dateStr,
          isDayOff: !0
        };
        I >= 0 ? G[I] = ut : G.push(ut);
      }
      return { ...X, overrides: G };
    });
    c(B), bt(null);
  }, ot = (B) => {
    if (!L || !c) return;
    const X = v.map((G) => {
      if (G.id !== L.staffId) return G;
      const I = G.overrides ? [...G.overrides] : [], ut = I.findIndex((lt) => lt.date === L.dateStr);
      if (B === "Off") {
        const lt = {
          date: L.dateStr,
          isDayOff: !0,
          shiftType: void 0
        };
        ut >= 0 ? I[ut] = lt : I.push(lt);
      } else {
        const lt = B === "Half" ? { start: "08:00", end: "13:00" } : { start: "08:00", end: "17:00" }, R = {
          date: L.dateStr,
          startTime: lt.start,
          endTime: lt.end,
          isDayOff: !1,
          shiftType: B
        };
        ut >= 0 ? I[ut] = R : I.push(R);
      }
      return { ...G, overrides: I };
    });
    c(X), bt(null);
  }, dt = () => {
    if (!L || !c) return;
    const B = v.map((X) => {
      if (X.id !== L.staffId) return X;
      const G = X.overrides ? [...X.overrides] : [], I = G.findIndex((lt) => lt.date === L.dateStr), ut = {
        date: L.dateStr,
        startTime: k,
        endTime: $,
        isDayOff: !1
        // Saving times means it's a working day
      };
      return I >= 0 ? G[I] = ut : G.push(ut), { ...X, overrides: G };
    });
    c(B), bt(null);
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("div", { className: "w-full animate-fade-in-up", style: { animationDelay: "0.3s" }, children: /* @__PURE__ */ o.jsx("div", { className: "overflow-x-auto pb-12 custom-scrollbar", children: /* @__PURE__ */ o.jsxs("table", { className: "w-full border-collapse text-left", children: [
      /* @__PURE__ */ o.jsx("thead", { children: /* @__PURE__ */ o.jsxs("tr", { children: [
        /* @__PURE__ */ o.jsx("th", { className: "sticky left-0 z-30 bg-fashion-white dark:bg-fashion-dark-brown p-5 min-w-[240px] border-b border-fashion-black dark:border-fashion-white text-left align-bottom shadow-[4px_0_15px_-5px_rgba(0,0,0,0.05)] transition-colors", children: /* @__PURE__ */ o.jsx("span", { className: "font-sans text-[10px] tracking-widest uppercase font-bold text-fashion-black dark:text-fashion-white", children: "The Personnel" }) }),
        M.map((B) => {
          const X = B.fullDateStr === J, G = B.dayName === "SAT" || B.dayName === "SUN";
          return /* @__PURE__ */ o.jsx(
            "th",
            {
              className: Ja(
                "min-w-[48px] px-1 py-5 text-center align-bottom border-b font-normal group transition-all duration-300",
                // Borders: Darker in light mode (black/20) for better contrast
                "border-fashion-black/20 dark:border-fashion-white/20",
                X ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black" : "text-fashion-black dark:text-fashion-white"
              ),
              children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                /* @__PURE__ */ o.jsx("span", { className: Ja(
                  "text-[10px] font-sans tracking-widest uppercase -rotate-90 origin-center translate-y-2 mb-6 transition-opacity font-bold",
                  X ? "opacity-100" : "opacity-80 group-hover:opacity-100"
                ), children: B.dayName }),
                /* @__PURE__ */ o.jsx("span", { className: Ja(
                  "text-sm font-serif",
                  G && !X && "italic font-bold"
                ), children: B.dayNumber })
              ] })
            },
            B.fullDateStr
          );
        })
      ] }) }),
      /* @__PURE__ */ o.jsx("tbody", { children: v.map((B, X) => {
        const G = B.status === "Casual";
        return /* @__PURE__ */ o.jsxs(
          "tr",
          {
            className: "group transition-colors duration-200 hover:bg-fashion-black/5 dark:hover:bg-fashion-white/10",
            style: { animationDelay: `${0.1 + X * 0.05}s` },
            children: [
              /* @__PURE__ */ o.jsx("td", { className: Ja(
                "sticky left-0 z-20 p-5 border-b shadow-[4px_0_15px_-5px_rgba(0,0,0,0.05)] transition-colors duration-200 bg-fashion-white dark:bg-fashion-dark-brown group-hover:bg-fashion-black/5 dark:group-hover:bg-fashion-white/10",
                "border-fashion-black/20 dark:border-fashion-white/20"
              ), children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "font-serif text-xl leading-none tracking-tight font-bold text-fashion-black dark:text-fashion-white", children: B.name }),
                  G && /* @__PURE__ */ o.jsx("span", { className: "text-[9px] border border-fashion-black dark:border-fashion-white px-1.5 py-0.5 uppercase tracking-widest font-bold opacity-90", children: "Casual" })
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-2 mt-2", children: /* @__PURE__ */ o.jsx("span", { className: "font-sans text-[10px] tracking-widest uppercase font-bold opacity-90 text-fashion-gray dark:text-fashion-white", children: B.role }) })
              ] }) }),
              M.map((I) => {
                const ut = Kd(B, I), { visualType: lt, isWorking: R } = ut, h = I.dayName === "SAT" || I.dayName === "SUN", m = I.fullDateStr === J;
                return /* @__PURE__ */ o.jsx(
                  "td",
                  {
                    onClick: () => it(B, I, ut),
                    className: Ja(
                      "text-center p-0 border-b h-20 w-12 relative transition-colors",
                      "border-fashion-black/20 dark:border-fashion-white/20",
                      h && !G && "bg-fashion-gray/30 dark:bg-fashion-white/5",
                      m && !G && "bg-fashion-accent/10",
                      (U || R) && "cursor-pointer hover:bg-fashion-black/10 dark:hover:bg-fashion-white/20"
                    ),
                    children: /* @__PURE__ */ o.jsx("div", { className: "w-full h-full flex items-center justify-center relative", children: V === "dots" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                      lt === "Solid" && /* @__PURE__ */ o.jsx("div", { className: "w-3 h-3 rounded-full bg-fashion-black dark:bg-fashion-white" }),
                      lt === "Hollow" && /* @__PURE__ */ o.jsx("div", { className: "w-3 h-3 rounded-full border-2 box-border border-fashion-black dark:border-fashion-white ring-1 ring-fashion-white dark:ring-fashion-dark-brown" }),
                      lt === "Dash" && /* @__PURE__ */ o.jsx("div", { className: "w-3 h-px bg-fashion-black/50 dark:bg-fashion-white/50" })
                    ] }) : /* @__PURE__ */ o.jsx("div", { className: Ja(
                      "w-10 h-16 rounded",
                      !R && "bg-gray-300/50 dark:bg-gray-600/40",
                      R && ut.shiftType === "Half" && "bg-orange-400/60 dark:bg-orange-500/50",
                      R && ut.shiftType === "Normal" && "bg-green-500/50 dark:bg-green-500/40"
                    ) }) })
                  },
                  `${B.id}-${I.fullDateStr}`
                );
              })
            ]
          },
          B.id
        );
      }) })
    ] }) }) }),
    L && /* @__PURE__ */ o.jsxs("div", { className: "fixed inset-0 z-[100] flex items-center justify-center p-4", children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          className: "absolute inset-0 bg-fashion-white/60 dark:bg-fashion-black/80 backdrop-blur-sm transition-opacity",
          onClick: () => bt(null)
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "bg-fashion-white dark:bg-fashion-dark-brown border border-fashion-black dark:border-fashion-white p-6 shadow-2xl w-full max-w-xs relative z-10 animate-fade-in-up flex flex-col items-center text-center", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => bt(null),
            className: "absolute top-3 right-3 p-2 opacity-60 hover:opacity-100 transition-opacity",
            children: /* @__PURE__ */ o.jsx("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", className: "stroke-fashion-black dark:stroke-fashion-white", children: /* @__PURE__ */ o.jsx("path", { d: "M1 1L11 11M1 11L11 1", strokeWidth: "1.5", strokeLinecap: "square" }) })
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: "mb-4 space-y-1", children: [
          /* @__PURE__ */ o.jsx("div", { className: "text-[9px] uppercase tracking-widest opacity-60 font-bold text-fashion-black dark:text-fashion-white", children: new Date(L.dateStr).toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }) }),
          /* @__PURE__ */ o.jsx("h3", { className: "font-serif text-2xl font-bold text-fashion-black dark:text-fashion-white", children: L.staffName }),
          /* @__PURE__ */ o.jsx("div", { className: "inline-block border border-fashion-black dark:border-fashion-white px-2 py-0.5 text-[9px] uppercase tracking-widest font-bold text-fashion-black dark:text-fashion-white mt-2", children: L.label })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "w-full", children: U ? /* @__PURE__ */ o.jsxs("div", { className: "bg-fashion-gray/10 dark:bg-fashion-white/5 p-4 space-y-4 w-full border border-fashion-black/10 dark:border-fashion-white/10", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("div", { className: "text-[9px] uppercase tracking-widest font-bold opacity-60 mb-3 text-center", children: "Set Shift Type" }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => ot("Normal"),
                  className: `flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${L.shiftType === "Normal" && !L.isDayOff ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white" : "border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-black/10 dark:hover:bg-fashion-white/10"}`,
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "w-3 h-3 rounded-full bg-current" }),
                    /* @__PURE__ */ o.jsx("span", { children: "Normal" })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => ot("Half"),
                  className: `flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${L.shiftType === "Half" && !L.isDayOff ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white" : "border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-black/10 dark:hover:bg-fashion-white/10"}`,
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "w-3 h-3 rounded-full border-2 border-current" }),
                    /* @__PURE__ */ o.jsx("span", { children: "Half" })
                  ]
                }
              ),
              /* @__PURE__ */ o.jsxs(
                "button",
                {
                  onClick: () => ot("Off"),
                  className: `flex-1 py-3 border text-[9px] uppercase tracking-widest font-bold transition-all flex flex-col items-center gap-1.5 ${L.isDayOff ? "bg-fashion-accent text-white border-fashion-accent" : "border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-accent/10"}`,
                  children: [
                    /* @__PURE__ */ o.jsx("span", { className: "w-4 h-0.5 bg-current" }),
                    /* @__PURE__ */ o.jsx("span", { children: "Day Off" })
                  ]
                }
              )
            ] })
          ] }),
          (L.label.includes("Manual") || L.isDayOff) && /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: W,
              className: "w-full py-2 text-[9px] uppercase tracking-widest font-bold transition-colors border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
              children: "↺ Restore to Pattern"
            }
          ),
          !L.isDayOff && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            /* @__PURE__ */ o.jsx("div", { className: "flex items-center justify-center gap-2 mt-2 mb-2 border-t border-fashion-black/10 dark:border-fashion-white/10 pt-4", children: /* @__PURE__ */ o.jsx("span", { className: "text-[9px] uppercase tracking-widest font-bold opacity-60", children: "Custom Hours" }) }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2 justify-center", children: [
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "time",
                  value: k,
                  onChange: (B) => b(B.target.value),
                  className: "bg-transparent border-b border-fashion-black dark:border-fashion-white text-center font-serif text-lg w-20 focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "opacity-50 font-serif text-fashion-black dark:text-fashion-white", children: "–" }),
              /* @__PURE__ */ o.jsx(
                "input",
                {
                  type: "time",
                  value: $,
                  onChange: (B) => Y(B.target.value),
                  className: "bg-transparent border-b border-fashion-black dark:border-fashion-white text-center font-serif text-lg w-20 focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                onClick: dt,
                className: "w-full mt-3 bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-2 text-[9px] uppercase tracking-widest hover:opacity-90 font-bold transition-opacity",
                children: "Update Hours"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ o.jsxs("div", { className: "py-4 border-t border-b border-fashion-black/10 dark:border-fashion-white/10 w-full mt-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "text-[9px] uppercase tracking-widest opacity-50 mb-1 font-bold text-fashion-black dark:text-fashion-white", children: "Shift Time" }),
          /* @__PURE__ */ o.jsxs("div", { className: "font-serif text-3xl text-fashion-black dark:text-fashion-white", children: [
            Ld(L.start),
            " – ",
            Ld(L.end)
          ] })
        ] }) })
      ] })
    ] })
  ] });
}, Gd = "Shane", Lm = "admin123", Gm = ({
  isOpen: v,
  onClose: M,
  onLogin: U,
  onLogout: c,
  isLoggedIn: V,
  currentDays: J = 45,
  displayMode: L = "dots",
  onSaveSettings: bt,
  staffData: k = [],
  onUpdateStaff: b
}) => {
  const [$, Y] = zt.useState(""), [ft, it] = zt.useState(""), [W, ot] = zt.useState(""), [dt, B] = zt.useState("settings"), [X, G] = zt.useState(J), [I, ut] = zt.useState(L), [lt, R] = zt.useState(""), [h, m] = zt.useState([]), [A, H] = zt.useState(null), [C, F] = zt.useState({}), [gt, Mt] = zt.useState(!1);
  if (zt.useEffect(() => {
    v && (G(J), ut(L), m(k), R(""), Y(""), it(""), ot(""), B("settings"), Mt(!1), H(null));
  }, [v, J, L, k]), !v) return null;
  const E = (g) => {
    g.preventDefault(), $.toLowerCase() === Gd.toLowerCase() && ft === Lm ? (U(), ot(""), Y(""), it("")) : $.toLowerCase() !== Gd.toLowerCase() ? ot("Invalid username") : ot("Invalid password");
  }, N = (g) => {
    g.preventDefault(), bt && (bt(X, I), R("Settings Saved"), setTimeout(() => R(""), 2e3));
  }, q = (g) => {
    H(g.id), F({ ...g }), Mt(!1);
  }, w = () => {
    H("new"), F({
      id: `staff-local-${Date.now()}`,
      name: "",
      role: "",
      cycleStartDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      patternOn: 5,
      patternOff: 2,
      shiftType: "Normal",
      // Default to normal
      status: "Permanent"
    }), Mt(!0);
  }, ct = () => {
    if (!C.name || !C.role) return;
    let g = [...h];
    gt ? g.push(C) : g = g.map((j) => j.id === A ? C : j), m(g), b && b(g), H(null), Mt(!1);
  }, s = (g) => {
    if (window.confirm("Are you sure you want to remove this staff member?")) {
      const j = h.filter((Q) => Q.id !== g);
      m(j), b && b(j);
    }
  }, _ = () => {
    var g;
    return /* @__PURE__ */ o.jsxs("div", { className: `space-y-6 p-5 border transition-all duration-300 animate-fade-in ${gt ? "bg-fashion-black/5 dark:bg-fashion-white/10 border-fashion-black dark:border-fashion-white shadow-md mb-6" : "bg-fashion-white dark:bg-fashion-dark-brown border-fashion-accent/60 border-2 shadow-xl relative z-10 -mx-2 my-4"}`, children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex items-center justify-between border-b border-fashion-black/10 dark:border-fashion-white/10 pb-3", children: [
        /* @__PURE__ */ o.jsx("h3", { className: `text-xs uppercase tracking-widest font-bold flex items-center gap-2 ${gt ? "text-fashion-black dark:text-fashion-white" : "text-fashion-accent"}`, children: gt ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-lg font-serif", children: "+" }),
          /* @__PURE__ */ o.jsx("span", { children: "New Staff Entry" })
        ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-lg font-serif", children: "✎" }),
          /* @__PURE__ */ o.jsxs("span", { children: [
            "Editing: ",
            /* @__PURE__ */ o.jsx("span", { className: "font-serif text-sm ml-1 text-fashion-black dark:text-fashion-white", children: ((g = h.find((j) => j.id === A)) == null ? void 0 : g.name) || "Personnel" })
          ] })
        ] }) }),
        gt && /* @__PURE__ */ o.jsx("span", { className: "text-[9px] uppercase font-bold bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black px-2 py-1", children: "Draft" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-5", children: [
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Name" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              autoFocus: !0,
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm font-serif focus:outline-none focus:border-fashion-accent focus:border-b-2",
              value: C.name || "",
              onChange: (j) => F({ ...C, name: j.target.value }),
              placeholder: "e.g. Miranda P."
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Role" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm font-sans focus:outline-none focus:border-fashion-accent focus:border-b-2",
              value: C.role || "",
              onChange: (j) => F({ ...C, role: j.target.value }),
              placeholder: "e.g. Editor"
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Status" }),
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white",
              value: C.status,
              onChange: (j) => F({ ...C, status: j.target.value }),
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "Permanent", className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "Permanent" }),
                /* @__PURE__ */ o.jsx("option", { value: "Casual", className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "Casual" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-60 font-medium block mb-1", children: "Shift Type" }),
          /* @__PURE__ */ o.jsx("div", { className: "w-full py-1 text-sm border-b border-fashion-black/30 dark:border-fashion-white/30 opacity-50 cursor-not-allowed italic", children: qm })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Days On" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "number",
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2",
              value: C.patternOn,
              onChange: (j) => F({ ...C, patternOn: parseInt(j.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Days Off" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "number",
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2",
              value: C.patternOff,
              onChange: (j) => F({ ...C, patternOff: parseInt(j.target.value) })
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ o.jsx("label", { className: "text-[9px] uppercase opacity-80 font-bold block mb-1", children: "Cycle Start Date" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "date",
              className: "w-full bg-transparent border-b border-fashion-black/50 dark:border-fashion-white/50 py-1 text-sm focus:outline-none focus:border-fashion-accent focus:border-b-2",
              value: C.cycleStartDate,
              onChange: (j) => F({ ...C, cycleStartDate: j.target.value })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 pt-4 border-t border-fashion-black/10 dark:border-fashion-white/10", children: [
        /* @__PURE__ */ o.jsx("button", { onClick: ct, className: "flex-1 bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-2 text-[10px] uppercase tracking-widest font-bold hover:opacity-90", children: "Save Changes" }),
        /* @__PURE__ */ o.jsx("button", { onClick: () => {
          H(null), Mt(!1);
        }, className: "flex-1 border border-fashion-black dark:border-fashion-white py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-fashion-black/5 dark:hover:bg-fashion-white/10 transition-colors", children: "Cancel" })
      ] })
    ] });
  };
  return /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-fashion-white/95 dark:bg-fashion-dark-brown/95 backdrop-blur-md transition-opacity animate-fade-in", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-fashion-white dark:bg-fashion-dark-brown border border-fashion-black dark:border-fashion-white p-6 md:p-8 max-w-2xl w-full h-[80vh] flex flex-col shadow-2xl relative animate-fade-in-up", children: [
    /* @__PURE__ */ o.jsx("button", { onClick: M, className: "absolute top-4 right-4 text-xs uppercase tracking-widest hover:opacity-50 z-10 text-fashion-black dark:text-fashion-white font-bold", children: "Close" }),
    /* @__PURE__ */ o.jsx("h2", { className: "font-serif text-3xl mb-2 flex-shrink-0 text-fashion-black dark:text-fashion-white", children: "Admin Portal" }),
    V ? /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col overflow-hidden text-fashion-black dark:text-fashion-white animate-slide-in", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "flex border-b border-fashion-black/20 dark:border-fashion-white/20 mb-6 flex-shrink-0", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => B("settings"),
            className: `flex-1 py-3 text-xs uppercase tracking-widest transition-colors ${dt === "settings" ? "border-b-2 border-fashion-accent font-bold" : "opacity-60 hover:opacity-100 font-medium"}`,
            children: "Settings"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            onClick: () => B("staff"),
            className: `flex-1 py-3 text-xs uppercase tracking-widest transition-colors ${dt === "staff" ? "border-b-2 border-fashion-accent font-bold" : "opacity-60 hover:opacity-100 font-medium"}`,
            children: "Manage Staff"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex-1 overflow-y-auto custom-scrollbar pr-2 pb-4", children: [
        dt === "settings" && /* @__PURE__ */ o.jsxs("form", { onSubmit: N, className: "space-y-6 animate-fade-in", children: [
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("label", { className: "block text-[10px] uppercase tracking-widest mb-3 opacity-80 font-bold", children: "Shift Display Style" }),
            /* @__PURE__ */ o.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ut("dots"),
                  className: `flex-1 py-3 border text-[10px] uppercase tracking-widest font-bold transition-colors ${I === "dots" ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white" : "border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-gray/20 dark:hover:bg-fashion-white/10"}`,
                  children: "● Dots"
                }
              ),
              /* @__PURE__ */ o.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => ut("colors"),
                  className: `flex-1 py-3 border text-[10px] uppercase tracking-widest font-bold transition-colors ${I === "colors" ? "bg-fashion-black text-fashion-white dark:bg-fashion-white dark:text-fashion-black border-fashion-black dark:border-fashion-white" : "border-fashion-black/40 dark:border-fashion-white/40 hover:bg-fashion-gray/20 dark:hover:bg-fashion-white/10"}`,
                  children: "◼ Colors"
                }
              )
            ] }),
            /* @__PURE__ */ o.jsx("p", { className: "text-[9px] opacity-60 mt-2", children: "Colors: Green = Working, Grey = Off" })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { children: [
            /* @__PURE__ */ o.jsx("label", { className: "block text-[10px] uppercase tracking-widest mb-2 opacity-80 font-bold", children: "Forecast Duration (Days)" }),
            /* @__PURE__ */ o.jsxs(
              "select",
              {
                value: X,
                onChange: (g) => G(Number(g.target.value)),
                className: "w-full bg-transparent border-b border-fashion-black dark:border-fashion-white py-2 text-sm font-serif focus:outline-none focus:border-fashion-accent text-fashion-black dark:text-fashion-white",
                children: [
                  /* @__PURE__ */ o.jsx("option", { value: 30, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "30 Days" }),
                  /* @__PURE__ */ o.jsx("option", { value: 45, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "45 Days" }),
                  /* @__PURE__ */ o.jsx("option", { value: 60, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "60 Days" }),
                  /* @__PURE__ */ o.jsx("option", { value: 90, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "90 Days" }),
                  /* @__PURE__ */ o.jsx("option", { value: 180, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "6 Months (180 Days)" }),
                  /* @__PURE__ */ o.jsx("option", { value: 365, className: "bg-fashion-white dark:bg-fashion-dark-brown", children: "Full Year (365 Days)" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "pt-4 flex flex-col gap-4", children: [
            /* @__PURE__ */ o.jsx("button", { type: "submit", className: "w-full bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-4 text-xs uppercase tracking-widest hover:opacity-90 font-bold", children: "Save Settings" }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                type: "button",
                onClick: c,
                className: "w-full border border-fashion-accent text-fashion-accent py-3 text-[10px] uppercase tracking-widest hover:bg-fashion-accent hover:text-white transition-colors font-bold",
                children: "Logout"
              }
            )
          ] }),
          lt && /* @__PURE__ */ o.jsx("div", { className: "text-center text-[10px] uppercase tracking-widest text-green-600 dark:text-green-400 font-bold", children: lt })
        ] }),
        dt === "staff" && /* @__PURE__ */ o.jsxs("div", { className: "space-y-4 animate-fade-in pb-10", children: [
          !A && /* @__PURE__ */ o.jsxs(
            "button",
            {
              onClick: w,
              className: "w-full py-4 border border-dashed border-fashion-black dark:border-fashion-white text-[10px] uppercase tracking-widest hover:bg-fashion-black hover:text-fashion-white dark:hover:bg-fashion-white dark:hover:text-fashion-black transition-colors mb-4 font-bold flex items-center justify-center gap-2",
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "text-lg leading-none", children: "+" }),
                " Add Personnel"
              ]
            }
          ),
          gt && _(),
          /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: h.map((g) => {
            const j = A === g.id, Q = A !== null && !j;
            return j ? /* @__PURE__ */ o.jsx("div", { children: _() }, g.id) : /* @__PURE__ */ o.jsxs(
              "div",
              {
                className: `flex justify-between items-center p-3 border transition-all duration-300 ${Q ? "opacity-30 pointer-events-none border-transparent" : "border-fashion-black/10 dark:border-fashion-white/10 bg-fashion-gray/20 dark:bg-fashion-white/5 hover:border-fashion-black dark:hover:border-fashion-white group"}`,
                children: [
                  /* @__PURE__ */ o.jsxs("div", { children: [
                    /* @__PURE__ */ o.jsx("div", { className: "font-serif text-sm font-medium", children: g.name }),
                    /* @__PURE__ */ o.jsx("div", { className: "text-[9px] uppercase opacity-60 font-bold", children: g.role })
                  ] }),
                  /* @__PURE__ */ o.jsxs("div", { className: `flex gap-2 transition-opacity ${Q ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`, children: [
                    /* @__PURE__ */ o.jsx("button", { onClick: () => q(g), className: "text-[9px] underline uppercase tracking-widest hover:text-fashion-accent font-bold", children: "Edit" }),
                    /* @__PURE__ */ o.jsx("button", { onClick: () => s(g.id), className: "text-[9px] underline uppercase tracking-widest text-fashion-accent hover:text-red-600 font-bold", children: "Remove" })
                  ] })
                ]
              },
              g.id
            );
          }) })
        ] })
      ] })
    ] }) : /* @__PURE__ */ o.jsxs("div", { className: "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full animate-slide-in", children: [
      /* @__PURE__ */ o.jsx("p", { className: "font-sans text-[10px] tracking-widest uppercase mb-8 opacity-80 font-bold text-center text-fashion-black dark:text-fashion-white", children: "Authorized Personnel Only" }),
      /* @__PURE__ */ o.jsxs("form", { onSubmit: E, className: "space-y-6", children: [
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "block text-[10px] uppercase tracking-widest mb-2 font-bold text-fashion-black dark:text-fashion-white", children: "Username" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "text",
              value: $,
              onChange: (g) => Y(g.target.value),
              className: "w-full bg-transparent border-b-2 border-fashion-black dark:border-fashion-white py-2 focus:outline-none focus:border-fashion-accent font-serif text-lg text-fashion-black dark:text-fashion-white",
              placeholder: "Enter username",
              autoFocus: !0
            }
          )
        ] }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx("label", { className: "block text-[10px] uppercase tracking-widest mb-2 font-bold text-fashion-black dark:text-fashion-white", children: "Password" }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "password",
              value: ft,
              onChange: (g) => it(g.target.value),
              className: "w-full bg-transparent border-b-2 border-fashion-black dark:border-fashion-white py-2 focus:outline-none focus:border-fashion-accent font-serif text-lg text-fashion-black dark:text-fashion-white",
              placeholder: "••••••••"
            }
          ),
          W && /* @__PURE__ */ o.jsx("p", { className: "text-fashion-accent text-xs mt-2 font-bold", children: W })
        ] }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "submit",
            className: "w-full bg-fashion-black dark:bg-fashion-white text-fashion-white dark:text-fashion-black py-4 text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform font-bold",
            children: "Login"
          }
        )
      ] })
    ] })
  ] }) });
};
var oi = { exports: {} };
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/
var Qm = oi.exports, Qd;
function Xm() {
  return Qd || (Qd = 1, (function(v, M) {
    ((U, c) => {
      v.exports = c();
    })(Qm, function U() {
      var c = typeof self < "u" ? self : typeof window < "u" ? window : c !== void 0 ? c : {}, V, J = !c.document && !!c.postMessage, L = c.IS_PAPA_WORKER || !1, bt = {}, k = 0, b = {};
      function $(h) {
        this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = { data: [], errors: [], meta: {} }, (function(m) {
          var A = ut(m);
          A.chunkSize = parseInt(A.chunkSize), m.step || m.chunk || (A.chunkSize = null), this._handle = new ot(A), (this._handle.streamer = this)._config = A;
        }).call(this, h), this.parseChunk = function(m, A) {
          var H = parseInt(this._config.skipFirstNLines) || 0;
          if (this.isFirstChunk && 0 < H) {
            let F = this._config.newline;
            F || (C = this._config.quoteChar || '"', F = this._handle.guessLineEndings(m, C)), m = [...m.split(F).slice(H)].join(F);
          }
          this.isFirstChunk && R(this._config.beforeFirstChunk) && (C = this._config.beforeFirstChunk(m)) !== void 0 && (m = C), this.isFirstChunk = !1, this._halted = !1;
          var H = this._partialLine + m, C = (this._partialLine = "", this._handle.parse(H, this._baseIndex, !this._finished));
          if (!this._handle.paused() && !this._handle.aborted()) {
            if (m = C.meta.cursor, H = (this._finished || (this._partialLine = H.substring(m - this._baseIndex), this._baseIndex = m), C && C.data && (this._rowCount += C.data.length), this._finished || this._config.preview && this._rowCount >= this._config.preview), L) c.postMessage({ results: C, workerId: b.WORKER_ID, finished: H });
            else if (R(this._config.chunk) && !A) {
              if (this._config.chunk(C, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
              this._completeResults = C = void 0;
            }
            return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(C.data), this._completeResults.errors = this._completeResults.errors.concat(C.errors), this._completeResults.meta = C.meta), this._completed || !H || !R(this._config.complete) || C && C.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), H || C && C.meta.paused || this._nextChunk(), C;
          }
          this._halted = !0;
        }, this._sendError = function(m) {
          R(this._config.error) ? this._config.error(m) : L && this._config.error && c.postMessage({ workerId: b.WORKER_ID, error: m, finished: !1 });
        };
      }
      function Y(h) {
        var m;
        (h = h || {}).chunkSize || (h.chunkSize = b.RemoteChunkSize), $.call(this, h), this._nextChunk = J ? function() {
          this._readChunk(), this._chunkLoaded();
        } : function() {
          this._readChunk();
        }, this.stream = function(A) {
          this._input = A, this._nextChunk();
        }, this._readChunk = function() {
          if (this._finished) this._chunkLoaded();
          else {
            if (m = new XMLHttpRequest(), this._config.withCredentials && (m.withCredentials = this._config.withCredentials), J || (m.onload = lt(this._chunkLoaded, this), m.onerror = lt(this._chunkError, this)), m.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !J), this._config.downloadRequestHeaders) {
              var A, H = this._config.downloadRequestHeaders;
              for (A in H) m.setRequestHeader(A, H[A]);
            }
            var C;
            this._config.chunkSize && (C = this._start + this._config.chunkSize - 1, m.setRequestHeader("Range", "bytes=" + this._start + "-" + C));
            try {
              m.send(this._config.downloadRequestBody);
            } catch (F) {
              this._chunkError(F.message);
            }
            J && m.status === 0 && this._chunkError();
          }
        }, this._chunkLoaded = function() {
          m.readyState === 4 && (m.status < 200 || 400 <= m.status ? this._chunkError() : (this._start += this._config.chunkSize || m.responseText.length, this._finished = !this._config.chunkSize || this._start >= ((A) => (A = A.getResponseHeader("Content-Range")) !== null ? parseInt(A.substring(A.lastIndexOf("/") + 1)) : -1)(m), this.parseChunk(m.responseText)));
        }, this._chunkError = function(A) {
          A = m.statusText || A, this._sendError(new Error(A));
        };
      }
      function ft(h) {
        (h = h || {}).chunkSize || (h.chunkSize = b.LocalChunkSize), $.call(this, h);
        var m, A, H = typeof FileReader < "u";
        this.stream = function(C) {
          this._input = C, A = C.slice || C.webkitSlice || C.mozSlice, H ? ((m = new FileReader()).onload = lt(this._chunkLoaded, this), m.onerror = lt(this._chunkError, this)) : m = new FileReaderSync(), this._nextChunk();
        }, this._nextChunk = function() {
          this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
        }, this._readChunk = function() {
          var C = this._input, F = (this._config.chunkSize && (F = Math.min(this._start + this._config.chunkSize, this._input.size), C = A.call(C, this._start, F)), m.readAsText(C, this._config.encoding));
          H || this._chunkLoaded({ target: { result: F } });
        }, this._chunkLoaded = function(C) {
          this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(C.target.result);
        }, this._chunkError = function() {
          this._sendError(m.error);
        };
      }
      function it(h) {
        var m;
        $.call(this, h = h || {}), this.stream = function(A) {
          return m = A, this._nextChunk();
        }, this._nextChunk = function() {
          var A, H;
          if (!this._finished) return A = this._config.chunkSize, m = A ? (H = m.substring(0, A), m.substring(A)) : (H = m, ""), this._finished = !m, this.parseChunk(H);
        };
      }
      function W(h) {
        $.call(this, h = h || {});
        var m = [], A = !0, H = !1;
        this.pause = function() {
          $.prototype.pause.apply(this, arguments), this._input.pause();
        }, this.resume = function() {
          $.prototype.resume.apply(this, arguments), this._input.resume();
        }, this.stream = function(C) {
          this._input = C, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError);
        }, this._checkIsFinished = function() {
          H && m.length === 1 && (this._finished = !0);
        }, this._nextChunk = function() {
          this._checkIsFinished(), m.length ? this.parseChunk(m.shift()) : A = !0;
        }, this._streamData = lt(function(C) {
          try {
            m.push(typeof C == "string" ? C : C.toString(this._config.encoding)), A && (A = !1, this._checkIsFinished(), this.parseChunk(m.shift()));
          } catch (F) {
            this._streamError(F);
          }
        }, this), this._streamError = lt(function(C) {
          this._streamCleanUp(), this._sendError(C);
        }, this), this._streamEnd = lt(function() {
          this._streamCleanUp(), H = !0, this._streamData("");
        }, this), this._streamCleanUp = lt(function() {
          this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError);
        }, this);
      }
      function ot(h) {
        var m, A, H, C, F = Math.pow(2, 53), gt = -F, Mt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/, E = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/, N = this, q = 0, w = 0, ct = !1, s = !1, _ = [], g = { data: [], errors: [], meta: {} };
        function j(at) {
          return h.skipEmptyLines === "greedy" ? at.join("").trim() === "" : at.length === 1 && at[0].length === 0;
        }
        function Q() {
          if (g && H && (rt("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + b.DefaultDelimiter + "'"), H = !1), h.skipEmptyLines && (g.data = g.data.filter(function(wt) {
            return !j(wt);
          })), P()) {
            let wt = function(Jt, At) {
              R(h.transformHeader) && (Jt = h.transformHeader(Jt, At)), _.push(Jt);
            };
            var ht = wt;
            if (g) if (Array.isArray(g.data[0])) {
              for (var at = 0; P() && at < g.data.length; at++) g.data[at].forEach(wt);
              g.data.splice(0, 1);
            } else g.data.forEach(wt);
          }
          function et(wt, Jt) {
            for (var At = h.header ? {} : [], Ot = 0; Ot < wt.length; Ot++) {
              var yt = Ot, ae = wt[Ot], ae = ((Et, kt) => ((Zt) => (h.dynamicTypingFunction && h.dynamicTyping[Zt] === void 0 && (h.dynamicTyping[Zt] = h.dynamicTypingFunction(Zt)), (h.dynamicTyping[Zt] || h.dynamicTyping) === !0))(Et) ? kt === "true" || kt === "TRUE" || kt !== "false" && kt !== "FALSE" && (((Zt) => {
                if (Mt.test(Zt) && (Zt = parseFloat(Zt), gt < Zt && Zt < F))
                  return 1;
              })(kt) ? parseFloat(kt) : E.test(kt) ? new Date(kt) : kt === "" ? null : kt) : kt)(yt = h.header ? Ot >= _.length ? "__parsed_extra" : _[Ot] : yt, ae = h.transform ? h.transform(ae, yt) : ae);
              yt === "__parsed_extra" ? (At[yt] = At[yt] || [], At[yt].push(ae)) : At[yt] = ae;
            }
            return h.header && (Ot > _.length ? rt("FieldMismatch", "TooManyFields", "Too many fields: expected " + _.length + " fields but parsed " + Ot, w + Jt) : Ot < _.length && rt("FieldMismatch", "TooFewFields", "Too few fields: expected " + _.length + " fields but parsed " + Ot, w + Jt)), At;
          }
          var Ht;
          g && (h.header || h.dynamicTyping || h.transform) && (Ht = 1, !g.data.length || Array.isArray(g.data[0]) ? (g.data = g.data.map(et), Ht = g.data.length) : g.data = et(g.data, 0), h.header && g.meta && (g.meta.fields = _), w += Ht);
        }
        function P() {
          return h.header && _.length === 0;
        }
        function rt(at, et, Ht, ht) {
          at = { type: at, code: et, message: Ht }, ht !== void 0 && (at.row = ht), g.errors.push(at);
        }
        R(h.step) && (C = h.step, h.step = function(at) {
          g = at, P() ? Q() : (Q(), g.data.length !== 0 && (q += at.data.length, h.preview && q > h.preview ? A.abort() : (g.data = g.data[0], C(g, N))));
        }), this.parse = function(at, et, Ht) {
          var ht = h.quoteChar || '"', ht = (h.newline || (h.newline = this.guessLineEndings(at, ht)), H = !1, h.delimiter ? R(h.delimiter) && (h.delimiter = h.delimiter(at), g.meta.delimiter = h.delimiter) : ((ht = ((wt, Jt, At, Ot, yt) => {
            var ae, Et, kt, Zt;
            yt = yt || [",", "	", "|", ";", b.RECORD_SEP, b.UNIT_SEP];
            for (var We = 0; We < yt.length; We++) {
              for (var Ce, Xl = yt[We], Ct = 0, Ue = 0, Wt = 0, ie = (kt = void 0, new B({ comments: Ot, delimiter: Xl, newline: Jt, preview: 10 }).parse(wt)), ye = 0; ye < ie.data.length; ye++) At && j(ie.data[ye]) ? Wt++ : (Ce = ie.data[ye].length, Ue += Ce, kt === void 0 ? kt = Ce : 0 < Ce && (Ct += Math.abs(Ce - kt), kt = Ce));
              0 < ie.data.length && (Ue /= ie.data.length - Wt), (Et === void 0 || Ct <= Et) && (Zt === void 0 || Zt < Ue) && 1.99 < Ue && (Et = Ct, ae = Xl, Zt = Ue);
            }
            return { successful: !!(h.delimiter = ae), bestDelimiter: ae };
          })(at, h.newline, h.skipEmptyLines, h.comments, h.delimitersToGuess)).successful ? h.delimiter = ht.bestDelimiter : (H = !0, h.delimiter = b.DefaultDelimiter), g.meta.delimiter = h.delimiter), ut(h));
          return h.preview && h.header && ht.preview++, m = at, A = new B(ht), g = A.parse(m, et, Ht), Q(), ct ? { meta: { paused: !0 } } : g || { meta: { paused: !1 } };
        }, this.paused = function() {
          return ct;
        }, this.pause = function() {
          ct = !0, A.abort(), m = R(h.chunk) ? "" : m.substring(A.getCharIndex());
        }, this.resume = function() {
          N.streamer._halted ? (ct = !1, N.streamer.parseChunk(m, !0)) : setTimeout(N.resume, 3);
        }, this.aborted = function() {
          return s;
        }, this.abort = function() {
          s = !0, A.abort(), g.meta.aborted = !0, R(h.complete) && h.complete(g), m = "";
        }, this.guessLineEndings = function(wt, ht) {
          wt = wt.substring(0, 1048576);
          var ht = new RegExp(dt(ht) + "([^]*?)" + dt(ht), "gm"), Ht = (wt = wt.replace(ht, "")).split("\r"), ht = wt.split(`
`), wt = 1 < ht.length && ht[0].length < Ht[0].length;
          if (Ht.length === 1 || wt) return `
`;
          for (var Jt = 0, At = 0; At < Ht.length; At++) Ht[At][0] === `
` && Jt++;
          return Jt >= Ht.length / 2 ? `\r
` : "\r";
        };
      }
      function dt(h) {
        return h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function B(h) {
        var m = (h = h || {}).delimiter, A = h.newline, H = h.comments, C = h.step, F = h.preview, gt = h.fastMode, Mt = null, E = !1, N = h.quoteChar == null ? '"' : h.quoteChar, q = N;
        if (h.escapeChar !== void 0 && (q = h.escapeChar), (typeof m != "string" || -1 < b.BAD_DELIMITERS.indexOf(m)) && (m = ","), H === m) throw new Error("Comment character same as delimiter");
        H === !0 ? H = "#" : (typeof H != "string" || -1 < b.BAD_DELIMITERS.indexOf(H)) && (H = !1), A !== `
` && A !== "\r" && A !== `\r
` && (A = `
`);
        var w = 0, ct = !1;
        this.parse = function(s, _, g) {
          if (typeof s != "string") throw new Error("Input must be a string");
          var j = s.length, Q = m.length, P = A.length, rt = H.length, at = R(C), et = [], Ht = [], ht = [], wt = w = 0;
          if (!s) return Ct();
          if (gt || gt !== !1 && s.indexOf(N) === -1) {
            for (var Jt = s.split(A), At = 0; At < Jt.length; At++) {
              if (ht = Jt[At], w += ht.length, At !== Jt.length - 1) w += A.length;
              else if (g) return Ct();
              if (!H || ht.substring(0, rt) !== H) {
                if (at) {
                  if (et = [], Zt(ht.split(m)), Ue(), ct) return Ct();
                } else Zt(ht.split(m));
                if (F && F <= At) return et = et.slice(0, F), Ct(!0);
              }
            }
            return Ct();
          }
          for (var Ot = s.indexOf(m, w), yt = s.indexOf(A, w), ae = new RegExp(dt(q) + dt(N), "g"), Et = s.indexOf(N, w); ; ) if (s[w] === N) for (Et = w, w++; ; ) {
            if ((Et = s.indexOf(N, Et + 1)) === -1) return g || Ht.push({ type: "Quotes", code: "MissingQuotes", message: "Quoted field unterminated", row: et.length, index: w }), Ce();
            if (Et === j - 1) return Ce(s.substring(w, Et).replace(ae, N));
            if (N === q && s[Et + 1] === q) Et++;
            else if (N === q || Et === 0 || s[Et - 1] !== q) {
              Ot !== -1 && Ot < Et + 1 && (Ot = s.indexOf(m, Et + 1));
              var kt = We((yt = yt !== -1 && yt < Et + 1 ? s.indexOf(A, Et + 1) : yt) === -1 ? Ot : Math.min(Ot, yt));
              if (s.substr(Et + 1 + kt, Q) === m) {
                ht.push(s.substring(w, Et).replace(ae, N)), s[w = Et + 1 + kt + Q] !== N && (Et = s.indexOf(N, w)), Ot = s.indexOf(m, w), yt = s.indexOf(A, w);
                break;
              }
              if (kt = We(yt), s.substring(Et + 1 + kt, Et + 1 + kt + P) === A) {
                if (ht.push(s.substring(w, Et).replace(ae, N)), Xl(Et + 1 + kt + P), Ot = s.indexOf(m, w), Et = s.indexOf(N, w), at && (Ue(), ct)) return Ct();
                if (F && et.length >= F) return Ct(!0);
                break;
              }
              Ht.push({ type: "Quotes", code: "InvalidQuotes", message: "Trailing quote on quoted field is malformed", row: et.length, index: w }), Et++;
            }
          }
          else if (H && ht.length === 0 && s.substring(w, w + rt) === H) {
            if (yt === -1) return Ct();
            w = yt + P, yt = s.indexOf(A, w), Ot = s.indexOf(m, w);
          } else if (Ot !== -1 && (Ot < yt || yt === -1)) ht.push(s.substring(w, Ot)), w = Ot + Q, Ot = s.indexOf(m, w);
          else {
            if (yt === -1) break;
            if (ht.push(s.substring(w, yt)), Xl(yt + P), at && (Ue(), ct)) return Ct();
            if (F && et.length >= F) return Ct(!0);
          }
          return Ce();
          function Zt(Wt) {
            et.push(Wt), wt = w;
          }
          function We(Wt) {
            var ie = 0;
            return ie = Wt !== -1 && (Wt = s.substring(Et + 1, Wt)) && Wt.trim() === "" ? Wt.length : ie;
          }
          function Ce(Wt) {
            return g || (Wt === void 0 && (Wt = s.substring(w)), ht.push(Wt), w = j, Zt(ht), at && Ue()), Ct();
          }
          function Xl(Wt) {
            w = Wt, Zt(ht), ht = [], yt = s.indexOf(A, w);
          }
          function Ct(Wt) {
            if (h.header && !_ && et.length && !E) {
              var ie = et[0], ye = /* @__PURE__ */ Object.create(null), Wa = new Set(ie);
              let Fa = !1;
              for (let gl = 0; gl < ie.length; gl++) {
                let Re = ie[gl];
                if (ye[Re = R(h.transformHeader) ? h.transformHeader(Re, gl) : Re]) {
                  let Ze, de = ye[Re];
                  for (; Ze = Re + "_" + de, de++, Wa.has(Ze); ) ;
                  Wa.add(Ze), ie[gl] = Ze, ye[Re]++, Fa = !0, (Mt = Mt === null ? {} : Mt)[Ze] = Re;
                } else ye[Re] = 1, ie[gl] = Re;
                Wa.add(Re);
              }
              Fa && console.warn("Duplicate headers found and renamed."), E = !0;
            }
            return { data: et, errors: Ht, meta: { delimiter: m, linebreak: A, aborted: ct, truncated: !!Wt, cursor: wt + (_ || 0), renamedHeaders: Mt } };
          }
          function Ue() {
            C(Ct()), et = [], Ht = [];
          }
        }, this.abort = function() {
          ct = !0;
        }, this.getCharIndex = function() {
          return w;
        };
      }
      function X(h) {
        var m = h.data, A = bt[m.workerId], H = !1;
        if (m.error) A.userError(m.error, m.file);
        else if (m.results && m.results.data) {
          var C = { abort: function() {
            H = !0, G(m.workerId, { data: [], errors: [], meta: { aborted: !0 } });
          }, pause: I, resume: I };
          if (R(A.userStep)) {
            for (var F = 0; F < m.results.data.length && (A.userStep({ data: m.results.data[F], errors: m.results.errors, meta: m.results.meta }, C), !H); F++) ;
            delete m.results;
          } else R(A.userChunk) && (A.userChunk(m.results, C, m.file), delete m.results);
        }
        m.finished && !H && G(m.workerId, m.results);
      }
      function G(h, m) {
        var A = bt[h];
        R(A.userComplete) && A.userComplete(m), A.terminate(), delete bt[h];
      }
      function I() {
        throw new Error("Not implemented.");
      }
      function ut(h) {
        if (typeof h != "object" || h === null) return h;
        var m, A = Array.isArray(h) ? [] : {};
        for (m in h) A[m] = ut(h[m]);
        return A;
      }
      function lt(h, m) {
        return function() {
          h.apply(m, arguments);
        };
      }
      function R(h) {
        return typeof h == "function";
      }
      return b.parse = function(h, m) {
        var A = (m = m || {}).dynamicTyping || !1;
        if (R(A) && (m.dynamicTypingFunction = A, A = {}), m.dynamicTyping = A, m.transform = !!R(m.transform) && m.transform, !m.worker || !b.WORKERS_SUPPORTED) return A = null, b.NODE_STREAM_INPUT, typeof h == "string" ? (h = ((H) => H.charCodeAt(0) !== 65279 ? H : H.slice(1))(h), A = new (m.download ? Y : it)(m)) : h.readable === !0 && R(h.read) && R(h.on) ? A = new W(m) : (c.File && h instanceof File || h instanceof Object) && (A = new ft(m)), A.stream(h);
        (A = (() => {
          var H;
          return !!b.WORKERS_SUPPORTED && (H = (() => {
            var C = c.URL || c.webkitURL || null, F = U.toString();
            return b.BLOB_URL || (b.BLOB_URL = C.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", F, ")();"], { type: "text/javascript" })));
          })(), (H = new c.Worker(H)).onmessage = X, H.id = k++, bt[H.id] = H);
        })()).userStep = m.step, A.userChunk = m.chunk, A.userComplete = m.complete, A.userError = m.error, m.step = R(m.step), m.chunk = R(m.chunk), m.complete = R(m.complete), m.error = R(m.error), delete m.worker, A.postMessage({ input: h, config: m, workerId: A.id });
      }, b.unparse = function(h, m) {
        var A = !1, H = !0, C = ",", F = `\r
`, gt = '"', Mt = gt + gt, E = !1, N = null, q = !1, w = ((() => {
          if (typeof m == "object") {
            if (typeof m.delimiter != "string" || b.BAD_DELIMITERS.filter(function(_) {
              return m.delimiter.indexOf(_) !== -1;
            }).length || (C = m.delimiter), typeof m.quotes != "boolean" && typeof m.quotes != "function" && !Array.isArray(m.quotes) || (A = m.quotes), typeof m.skipEmptyLines != "boolean" && typeof m.skipEmptyLines != "string" || (E = m.skipEmptyLines), typeof m.newline == "string" && (F = m.newline), typeof m.quoteChar == "string" && (gt = m.quoteChar), typeof m.header == "boolean" && (H = m.header), Array.isArray(m.columns)) {
              if (m.columns.length === 0) throw new Error("Option columns is empty");
              N = m.columns;
            }
            m.escapeChar !== void 0 && (Mt = m.escapeChar + gt), m.escapeFormulae instanceof RegExp ? q = m.escapeFormulae : typeof m.escapeFormulae == "boolean" && m.escapeFormulae && (q = /^[=+\-@\t\r].*$/);
          }
        })(), new RegExp(dt(gt), "g"));
        if (typeof h == "string" && (h = JSON.parse(h)), Array.isArray(h)) {
          if (!h.length || Array.isArray(h[0])) return ct(null, h, E);
          if (typeof h[0] == "object") return ct(N || Object.keys(h[0]), h, E);
        } else if (typeof h == "object") return typeof h.data == "string" && (h.data = JSON.parse(h.data)), Array.isArray(h.data) && (h.fields || (h.fields = h.meta && h.meta.fields || N), h.fields || (h.fields = Array.isArray(h.data[0]) ? h.fields : typeof h.data[0] == "object" ? Object.keys(h.data[0]) : []), Array.isArray(h.data[0]) || typeof h.data[0] == "object" || (h.data = [h.data])), ct(h.fields || [], h.data || [], E);
        throw new Error("Unable to serialize unrecognized input");
        function ct(_, g, j) {
          var Q = "", P = (typeof _ == "string" && (_ = JSON.parse(_)), typeof g == "string" && (g = JSON.parse(g)), Array.isArray(_) && 0 < _.length), rt = !Array.isArray(g[0]);
          if (P && H) {
            for (var at = 0; at < _.length; at++) 0 < at && (Q += C), Q += s(_[at], at);
            0 < g.length && (Q += F);
          }
          for (var et = 0; et < g.length; et++) {
            var Ht = (P ? _ : g[et]).length, ht = !1, wt = P ? Object.keys(g[et]).length === 0 : g[et].length === 0;
            if (j && !P && (ht = j === "greedy" ? g[et].join("").trim() === "" : g[et].length === 1 && g[et][0].length === 0), j === "greedy" && P) {
              for (var Jt = [], At = 0; At < Ht; At++) {
                var Ot = rt ? _[At] : At;
                Jt.push(g[et][Ot]);
              }
              ht = Jt.join("").trim() === "";
            }
            if (!ht) {
              for (var yt = 0; yt < Ht; yt++) {
                0 < yt && !wt && (Q += C);
                var ae = P && rt ? _[yt] : yt;
                Q += s(g[et][ae], yt);
              }
              et < g.length - 1 && (!j || 0 < Ht && !wt) && (Q += F);
            }
          }
          return Q;
        }
        function s(_, g) {
          var j, Q;
          return _ == null ? "" : _.constructor === Date ? JSON.stringify(_).slice(1, 25) : (Q = !1, q && typeof _ == "string" && q.test(_) && (_ = "'" + _, Q = !0), j = _.toString().replace(w, Mt), (Q = Q || A === !0 || typeof A == "function" && A(_, g) || Array.isArray(A) && A[g] || ((P, rt) => {
            for (var at = 0; at < rt.length; at++) if (-1 < P.indexOf(rt[at])) return !0;
            return !1;
          })(j, b.BAD_DELIMITERS) || -1 < j.indexOf(C) || j.charAt(0) === " " || j.charAt(j.length - 1) === " ") ? gt + j + gt : j);
        }
      }, b.RECORD_SEP = "", b.UNIT_SEP = "", b.BYTE_ORDER_MARK = "\uFEFF", b.BAD_DELIMITERS = ["\r", `
`, '"', b.BYTE_ORDER_MARK], b.WORKERS_SUPPORTED = !J && !!c.Worker, b.NODE_STREAM_INPUT = 1, b.LocalChunkSize = 10485760, b.RemoteChunkSize = 5242880, b.DefaultDelimiter = ",", b.Parser = B, b.ParserHandle = ot, b.NetworkStreamer = Y, b.FileStreamer = ft, b.StringStreamer = it, b.ReadableStreamStreamer = W, c.jQuery && ((V = c.jQuery).fn.parse = function(h) {
        var m = h.config || {}, A = [];
        return this.each(function(F) {
          if (!(V(this).prop("tagName").toUpperCase() === "INPUT" && V(this).attr("type").toLowerCase() === "file" && c.FileReader) || !this.files || this.files.length === 0) return !0;
          for (var gt = 0; gt < this.files.length; gt++) A.push({ file: this.files[gt], inputElem: this, instanceConfig: V.extend({}, m) });
        }), H(), this;
        function H() {
          if (A.length === 0) R(h.complete) && h.complete();
          else {
            var F, gt, Mt, E, N = A[0];
            if (R(h.before)) {
              var q = h.before(N.file, N.inputElem);
              if (typeof q == "object") {
                if (q.action === "abort") return F = "AbortError", gt = N.file, Mt = N.inputElem, E = q.reason, void (R(h.error) && h.error({ name: F }, gt, Mt, E));
                if (q.action === "skip") return void C();
                typeof q.config == "object" && (N.instanceConfig = V.extend(N.instanceConfig, q.config));
              } else if (q === "skip") return void C();
            }
            var w = N.instanceConfig.complete;
            N.instanceConfig.complete = function(ct) {
              R(w) && w(ct, N.file, N.inputElem), C();
            }, b.parse(N.file, N.instanceConfig);
          }
        }
        function C() {
          A.splice(0, 1), H();
        }
      }), L && (c.onmessage = function(h) {
        h = h.data, b.WORKER_ID === void 0 && h && (b.WORKER_ID = h.workerId), typeof h.input == "string" ? c.postMessage({ workerId: b.WORKER_ID, results: b.parse(h.input, h.config), finished: !0 }) : (c.File && h.input instanceof File || h.input instanceof Object) && (h = b.parse(h.input, h.config)) && c.postMessage({ workerId: b.WORKER_ID, results: h, finished: !0 });
      }), (Y.prototype = Object.create($.prototype)).constructor = Y, (ft.prototype = Object.create($.prototype)).constructor = ft, (it.prototype = Object.create(it.prototype)).constructor = it, (W.prototype = Object.create($.prototype)).constructor = W, b;
    });
  })(oi)), oi.exports;
}
var Zm = Xm();
const Vm = /* @__PURE__ */ Xd(Zm), Vn = [
  { id: "1", name: "Shane", role: "Manager", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "2", name: "Phil", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "3", name: "Tiku", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "4", name: "Kyra", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "5", name: "Angie", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "6", name: "Selinah", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "7", name: "Thembi", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" },
  { id: "8", name: "Marble", role: "Staff", cycleStartDate: "2024-01-01", patternOn: 5, patternOff: 2, shiftType: "Normal", status: "Permanent" }
], Wd = "", Km = (v = Wd, M) => {
  const [U, c] = zt.useState(M || []), [V, J] = zt.useState(!M), [L, bt] = zt.useState(null), [k, b] = zt.useState(!1);
  zt.useEffect(() => {
    M && M.length > 0 && (c(M), J(!1));
  }, [M]), zt.useEffect(() => {
    (async () => {
      J(!0), bt(null);
      const it = localStorage.getItem("protea_staff_data");
      if (it)
        try {
          const W = JSON.parse(it);
          if (Array.isArray(W) && W.length > 0) {
            c(W), b(!0), J(!1);
            return;
          }
        } catch (W) {
          console.error("Failed to parse local staff data", W);
        }
      if (b(!1), !v) {
        c(Vn), J(!1);
        return;
      }
      try {
        const W = await fetch(v);
        if (!W.ok) {
          console.warn(`CSV Fetch failed (${W.status}), using fallback data.`), c(Vn), J(!1);
          return;
        }
        const ot = await W.text();
        Vm.parse(ot, {
          header: !0,
          skipEmptyLines: !0,
          complete: (dt) => {
            if (dt.data && dt.data.length > 0) {
              const B = dt.data.filter((X) => X.Name && X.Name.trim().length > 0).map((X, G) => ({
                id: `staff-${G}`,
                name: X.Name || "Unknown",
                role: X.Role || "Staff",
                cycleStartDate: X.CycleStartDate || (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
                patternOn: parseInt(X.PatternOn || "4", 10),
                patternOff: parseInt(X.PatternOff || "2", 10),
                shiftType: X.ShiftType === "Half" ? "Half" : "Normal",
                status: X.Status === "Casual" ? "Casual" : "Permanent"
              }));
              c(B);
            } else
              c(Vn);
            J(!1);
          },
          error: (dt) => {
            console.error(dt), c(Vn), J(!1);
          }
        });
      } catch (W) {
        console.error("Fetch Error:", W.message), c(Vn), J(!1);
      }
    })();
  }, [v]);
  const $ = zt.useCallback((ft) => {
    c(ft), localStorage.setItem("protea_staff_data", JSON.stringify(ft)), b(!0);
  }, []), Y = zt.useCallback(() => {
    localStorage.removeItem("protea_staff_data"), window.location.reload();
  }, []);
  return { staff: U, loading: V, error: L, isUsingLocalData: k, updateStaffData: $, resetToCsv: Y };
}, Jm = 30, Wm = ({ staffData: v }) => {
  const [M, U] = zt.useState(() => parseInt(localStorage.getItem("protea_admin_days") || "30", 10)), [c, V] = zt.useState(() => localStorage.getItem("protea_display_mode") || "dots"), { staff: J, loading: L, updateStaffData: bt } = Km(Wd, v), [k, b] = zt.useState(!1), [$, Y] = zt.useState(!1), [ft, it] = zt.useState(!1), W = ft ? M : Jm, ot = zt.useMemo(() => Yd(/* @__PURE__ */ new Date(), W), [W]);
  zt.useEffect(() => {
    localStorage.setItem("protea_admin_days", M.toString()), localStorage.setItem("protea_display_mode", c);
  }, [M, c]), zt.useEffect(() => {
    k ? (document.documentElement.classList.add("dark"), document.body.classList.remove("bg-fashion-white", "text-fashion-black"), document.body.classList.add("bg-fashion-dark-brown", "text-fashion-white")) : (document.documentElement.classList.remove("dark"), document.body.classList.remove("bg-fashion-dark-brown", "text-fashion-white"), document.body.classList.add("bg-fashion-white", "text-fashion-black"));
  }, [k]);
  const dt = (G, I) => {
    U(G), V(I);
  }, B = () => {
    it(!1), Y(!1);
  }, X = zt.useCallback(() => {
    const I = Yd(/* @__PURE__ */ new Date(), 14), ut = ["Name", "Role", ...I.map(
      (H) => `${H.dayName} ${H.dayNumber}`
    )], lt = J.map((H) => {
      const C = I.map((F) => {
        const gt = Kd(H, F);
        return gt.shiftType === "Off" ? "OFF" : gt.shiftType === "Half" ? "HALF" : "FULL";
      });
      return [H.name, H.role, ...C];
    }), R = [ut, ...lt].map((H) => H.join(",")).join(`
`), h = new Blob([R], { type: "text/csv;charset=utf-8;" }), m = URL.createObjectURL(h), A = document.createElement("a");
    A.href = m, A.download = `protea-roster-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`, document.body.appendChild(A), A.click(), document.body.removeChild(A), URL.revokeObjectURL(m);
  }, [J]);
  return L ? /* @__PURE__ */ o.jsx("div", { className: "min-h-screen flex items-center justify-center font-sans tracking-widest uppercase text-xs animate-pulse", children: "Loading Protea Collection..." }) : /* @__PURE__ */ o.jsxs("div", { className: "min-h-screen w-full px-4 md:px-12 py-8 max-w-[1920px] mx-auto transition-colors duration-500 ease-in-out", children: [
    /* @__PURE__ */ o.jsx(
      wm,
      {
        lastUpdated: /* @__PURE__ */ new Date(),
        darkMode: k,
        toggleDarkMode: () => b(!k),
        onLoginClick: () => Y(!0),
        isAdmin: ft,
        onExport: X
      }
    ),
    /* @__PURE__ */ o.jsxs("main", { className: "fade-in mb-20", children: [
      /* @__PURE__ */ o.jsx("div", { className: "flex justify-end mb-4 px-1", children: /* @__PURE__ */ o.jsxs("div", { className: "text-[9px] font-sans tracking-widest uppercase opacity-60 font-bold", children: [
        "Displaying ",
        W,
        " Days"
      ] }) }),
      /* @__PURE__ */ o.jsx(
        Ym,
        {
          staff: J,
          dates: ot,
          isAdmin: ft,
          onUpdateStaff: bt,
          displayMode: c
        }
      ),
      /* @__PURE__ */ o.jsx("div", { className: "mt-8 flex flex-wrap gap-8 justify-center text-[10px] uppercase tracking-widest opacity-80 font-bold", children: c === "dots" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-fashion-black dark:bg-fashion-white" }),
          /* @__PURE__ */ o.jsx("span", { children: "Normal Shift" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-2.5 h-2.5 rounded-full border-2 border-fashion-black dark:border-fashion-white" }),
          /* @__PURE__ */ o.jsx("span", { children: "Half Shift (Sat)" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("span", { className: "w-3 h-px bg-fashion-black/50 dark:bg-fashion-white/50" }),
          /* @__PURE__ */ o.jsx("span", { children: "Off" })
        ] })
      ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-4 h-4 rounded bg-green-500/60" }),
          /* @__PURE__ */ o.jsx("span", { children: "Full Day" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-4 h-4 rounded bg-orange-400/60" }),
          /* @__PURE__ */ o.jsx("span", { children: "Half Day" })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ o.jsx("div", { className: "w-4 h-4 rounded bg-gray-300/60 dark:bg-gray-600/60" }),
          /* @__PURE__ */ o.jsx("span", { children: "Off" })
        ] })
      ] }) }),
      /* @__PURE__ */ o.jsxs("footer", { className: "mt-16 border-t border-fashion-black dark:border-fashion-white pt-8 flex justify-between items-center text-[10px] font-sans tracking-widest uppercase font-bold opacity-80", children: [
        /* @__PURE__ */ o.jsx("div", { children: "Protea Ridge ©" }),
        /* @__PURE__ */ o.jsx("div", { children: "All Rights Reserved" })
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      Gm,
      {
        isOpen: $,
        onClose: () => Y(!1),
        isLoggedIn: ft,
        onLogin: () => it(!0),
        onLogout: B,
        currentDays: M,
        displayMode: c,
        onSaveSettings: dt,
        staffData: J,
        onUpdateStaff: bt
      }
    )
  ] });
}, Fm = Um(Wm, {
  shadow: "open",
  props: {
    staffData: "json"
  }
});
customElements.get("protea-roster") || customElements.define("protea-roster", Fm);
console.log("Protea Roster Widget script loaded and element defined.");
