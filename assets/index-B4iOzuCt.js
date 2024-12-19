(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
var Ku = { exports: {} },
  nl = {},
  Zu = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  uc = Symbol.for("react.portal"),
  sc = Symbol.for("react.fragment"),
  ac = Symbol.for("react.strict_mode"),
  cc = Symbol.for("react.profiler"),
  dc = Symbol.for("react.provider"),
  fc = Symbol.for("react.context"),
  pc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  hc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  Do = Symbol.iterator;
function gc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Do && e[Do]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Gu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Xu = {};
function un(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xu),
    (this.updater = n || Gu);
}
un.prototype.isReactComponent = {};
un.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ju() {}
Ju.prototype = un.prototype;
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xu),
    (this.updater = n || Gu);
}
var Bi = ($i.prototype = new Ju());
Bi.constructor = $i;
Yu(Bi, un.prototype);
Bi.isPureReactComponent = !0;
var Oo = Array.isArray,
  qu = Object.prototype.hasOwnProperty,
  Vi = { current: null },
  bu = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      qu.call(t, r) && !bu.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Vi.current,
  };
}
function yc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Uo = /\/+/g;
function kl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : t.toString(36);
}
function xr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xn:
          case uc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + kl(o, 0) : r),
      Oo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Uo, "$&/") + "/"),
          xr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Hi(l) &&
            (l = yc(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Uo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Oo(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + kl(i, u);
      o += xr(i, t, n, s, l);
    }
  else if (((s = gc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + kl(i, u++)), (o += xr(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function rr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    xr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function xc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  kr = { transition: null },
  kc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: kr,
    ReactCurrentOwner: Vi,
  };
function ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: rr,
  forEach: function (e, t, n) {
    rr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      rr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      rr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = un;
T.Fragment = sc;
T.Profiler = cc;
T.PureComponent = $i;
T.StrictMode = ac;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kc;
T.act = ts;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Vi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      qu.call(t, s) &&
        !bu.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: fc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = es;
T.createFactory = function (e) {
  var t = es.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: pc, render: e };
};
T.isValidElement = Hi;
T.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: xc };
};
T.memo = function (e, t) {
  return { $$typeof: hc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = t;
  }
};
T.unstable_act = ts;
T.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = "18.3.1";
Zu.exports = T;
var De = Zu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = De,
  Ec = Symbol.for("react.element"),
  Nc = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  jc = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function ns(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) Cc.call(t, r) && !_c.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Ec,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: jc.current,
  };
}
nl.Fragment = Nc;
nl.jsx = ns;
nl.jsxs = ns;
Ku.exports = nl;
var a = Ku.exports,
  rs = { exports: {} },
  ye = {},
  ls = { exports: {} },
  is = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, z) {
    var P = N.length;
    N.push(z);
    e: for (; 0 < P; ) {
      var W = (P - 1) >>> 1,
        Y = N[W];
      if (0 < l(Y, z)) (N[W] = z), (N[P] = Y), (P = W);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var z = N[0],
      P = N.pop();
    if (P !== z) {
      N[0] = P;
      e: for (var W = 0, Y = N.length, tr = Y >>> 1; W < tr; ) {
        var gt = 2 * (W + 1) - 1,
          xl = N[gt],
          yt = gt + 1,
          nr = N[yt];
        if (0 > l(xl, P))
          yt < Y && 0 > l(nr, xl)
            ? ((N[W] = nr), (N[yt] = P), (W = yt))
            : ((N[W] = xl), (N[gt] = P), (W = gt));
        else if (yt < Y && 0 > l(nr, P)) (N[W] = nr), (N[yt] = P), (W = yt);
        else break e;
      }
    }
    return z;
  }
  function l(N, z) {
    var P = N.sortIndex - z.sortIndex;
    return P !== 0 ? P : N.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    d = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    x = !1,
    k = !1,
    D = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(N) {
    for (var z = n(d); z !== null; ) {
      if (z.callback === null) r(d);
      else if (z.startTime <= N)
        r(d), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(d);
    }
  }
  function g(N) {
    if (((k = !1), p(N), !x))
      if (n(s) !== null) (x = !0), yl(E);
      else {
        var z = n(d);
        z !== null && wl(g, z.startTime - N);
      }
  }
  function E(N, z) {
    (x = !1), k && ((k = !1), f(_), (_ = -1)), (w = !0);
    var P = m;
    try {
      for (
        p(z), h = n(s);
        h !== null && (!(h.expirationTime > z) || (N && !je()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var Y = W(h.expirationTime <= z);
          (z = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            p(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var tr = !0;
      else {
        var gt = n(d);
        gt !== null && wl(g, gt.startTime - z), (tr = !1);
      }
      return tr;
    } finally {
      (h = null), (m = P), (w = !1);
    }
  }
  var C = !1,
    j = null,
    _ = -1,
    H = 5,
    F = -1;
  function je() {
    return !(e.unstable_now() - F < H);
  }
  function cn() {
    if (j !== null) {
      var N = e.unstable_now();
      F = N;
      var z = !0;
      try {
        z = j(!0, N);
      } finally {
        z ? dn() : ((C = !1), (j = null));
      }
    } else C = !1;
  }
  var dn;
  if (typeof c == "function")
    dn = function () {
      c(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      oc = Mo.port2;
    (Mo.port1.onmessage = cn),
      (dn = function () {
        oc.postMessage(null);
      });
  } else
    dn = function () {
      D(cn, 0);
    };
  function yl(N) {
    (j = N), C || ((C = !0), dn());
  }
  function wl(N, z) {
    _ = D(function () {
      N(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || w || ((x = !0), yl(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = m;
      }
      var P = m;
      m = z;
      try {
        return N();
      } finally {
        m = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, z) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var P = m;
      m = N;
      try {
        return z();
      } finally {
        m = P;
      }
    }),
    (e.unstable_scheduleCallback = function (N, z, P) {
      var W = e.unstable_now();
      switch (
        (typeof P == "object" && P !== null
          ? ((P = P.delay), (P = typeof P == "number" && 0 < P ? W + P : W))
          : (P = W),
        N)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = P + Y),
        (N = {
          id: v++,
          callback: z,
          priorityLevel: N,
          startTime: P,
          expirationTime: Y,
          sortIndex: -1,
        }),
        P > W
          ? ((N.sortIndex = P),
            t(d, N),
            n(s) === null &&
              N === n(d) &&
              (k ? (f(_), (_ = -1)) : (k = !0), wl(g, P - W)))
          : ((N.sortIndex = Y), t(s, N), x || w || ((x = !0), yl(E))),
        N
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (N) {
      var z = m;
      return function () {
        var P = m;
        m = z;
        try {
          return N.apply(this, arguments);
        } finally {
          m = P;
        }
      };
    });
})(is);
ls.exports = is;
var zc = ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pc = De,
  ge = zc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var os = new Set(),
  An = {};
function Ft(e, t) {
  bt(e, t), bt(e + "Capture", t);
}
function bt(e, t) {
  for (An[e] = t, e = 0; e < t.length; e++) os.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Tc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $o = {},
  Bo = {};
function Fc(e) {
  return Gl.call(Bo, e)
    ? !0
    : Gl.call($o, e)
    ? !1
    : Tc.test(e)
    ? (Bo[e] = !0)
    : (($o[e] = !0), !1);
}
function Lc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Ac(e, t, n, r) {
  if (t === null || typeof t > "u" || Lc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function se(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new se(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wi = /[\-:]([a-z])/g;
function Qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wi, Qi);
    ee[t] = new se(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wi, Qi);
    ee[t] = new se(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wi, Qi);
  ee[t] = new se(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ki(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ac(t, n, l, r) && (n = null),
    r || l === null
      ? Fc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ye = Pc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  lr = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Mt = Symbol.for("react.fragment"),
  Zi = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  us = Symbol.for("react.provider"),
  ss = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  Yi = Symbol.for("react.memo"),
  qe = Symbol.for("react.lazy"),
  as = Symbol.for("react.offscreen"),
  Vo = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vo && e[Vo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var B = Object.assign,
  Sl;
function xn(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var El = !1;
function Nl(e, t) {
  if (!e || El) return "";
  El = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (El = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Rc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mt:
      return "Fragment";
    case It:
      return "Portal";
    case Yl:
      return "Profiler";
    case Zi:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ss:
        return (e.displayName || "Context") + ".Consumer";
      case us:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Yi:
        return (
          (t = e.displayName || null), t !== null ? t : ql(e.type) || "Memo"
        );
      case qe:
        (t = e._payload), (e = e._init);
        try {
          return ql(e(t));
        } catch {}
    }
  return null;
}
function Ic(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ql(t);
    case 8:
      return t === Zi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function cs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Mc(e) {
  var t = cs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ir(e) {
  e._valueTracker || (e._valueTracker = Mc(e));
}
function ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = cs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function bl(e, t) {
  var n = t.checked;
  return B({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ho(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function fs(e, t) {
  (t = t.checked), t != null && Ki(e, "checked", t, !1);
}
function ei(e, t) {
  fs(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ti(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ti(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ti(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var kn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return B({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (kn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ft(n) };
}
function ps(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ko(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ms(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ri(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ms(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  hs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Nn = {
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
  Dc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function (e) {
  Dc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Nn[t] = Nn[e]);
  });
});
function vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Nn.hasOwnProperty(e) && Nn[e])
    ? ("" + t).trim()
    : t + "px";
}
function gs(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = vs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Oc = B(
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
function li(e, t) {
  if (t) {
    if (Oc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ii(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var oi = null;
function Xi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ui = null,
  Gt = null,
  Yt = null;
function Zo(e) {
  if ((e = bn(e))) {
    if (typeof ui != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ul(t)), ui(e.stateNode, e.type, t));
  }
}
function ys(e) {
  Gt ? (Yt ? Yt.push(e) : (Yt = [e])) : (Gt = e);
}
function ws() {
  if (Gt) {
    var e = Gt,
      t = Yt;
    if (((Yt = Gt = null), Zo(e), t)) for (e = 0; e < t.length; e++) Zo(t[e]);
  }
}
function xs(e, t) {
  return e(t);
}
function ks() {}
var Cl = !1;
function Ss(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return xs(e, t, n);
  } finally {
    (Cl = !1), (Gt !== null || Yt !== null) && (ks(), ws());
  }
}
function In(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ul(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var si = !1;
if (Qe)
  try {
    var pn = {};
    Object.defineProperty(pn, "passive", {
      get: function () {
        si = !0;
      },
    }),
      window.addEventListener("test", pn, pn),
      window.removeEventListener("test", pn, pn);
  } catch {
    si = !1;
  }
function Uc(e, t, n, r, l, i, o, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Cn = !1,
  Ar = null,
  Rr = !1,
  ai = null,
  $c = {
    onError: function (e) {
      (Cn = !0), (Ar = e);
    },
  };
function Bc(e, t, n, r, l, i, o, u, s) {
  (Cn = !1), (Ar = null), Uc.apply($c, arguments);
}
function Vc(e, t, n, r, l, i, o, u, s) {
  if ((Bc.apply(this, arguments), Cn)) {
    if (Cn) {
      var d = Ar;
      (Cn = !1), (Ar = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (ai = d));
  }
}
function Lt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Es(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Go(e) {
  if (Lt(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Lt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Go(l), e;
        if (i === r) return Go(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ns(e) {
  return (e = Hc(e)), e !== null ? Cs(e) : null;
}
function Cs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var js = ge.unstable_scheduleCallback,
  Yo = ge.unstable_cancelCallback,
  Wc = ge.unstable_shouldYield,
  Qc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Kc = ge.unstable_getCurrentPriorityLevel,
  Ji = ge.unstable_ImmediatePriority,
  _s = ge.unstable_UserBlockingPriority,
  Ir = ge.unstable_NormalPriority,
  Zc = ge.unstable_LowPriority,
  zs = ge.unstable_IdlePriority,
  rl = null,
  Oe = null;
function Gc(e) {
  if (Oe && typeof Oe.onCommitFiberRoot == "function")
    try {
      Oe.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : Jc,
  Yc = Math.log,
  Xc = Math.LN2;
function Jc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Yc(e) / Xc) | 0)) | 0;
}
var ur = 64,
  sr = 4194304;
function Sn(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Sn(u)) : ((i &= o), i !== 0 && (r = Sn(i)));
  } else (o = n & ~l), o !== 0 ? (r = Sn(o)) : i !== 0 && (r = Sn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function qc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function bc(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Fe(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = qc(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function ci(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ps() {
  var e = ur;
  return (ur <<= 1), !(ur & 4194240) && (ur = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Jn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n);
}
function ed(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var A = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Fs,
  bi,
  Ls,
  As,
  Rs,
  di = !1,
  ar = [],
  lt = null,
  it = null,
  ot = null,
  Mn = new Map(),
  Dn = new Map(),
  et = [],
  td =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      Mn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
  }
}
function mn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = bn(t)), t !== null && bi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function nd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = mn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = mn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = mn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Mn.set(i, mn(Mn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Dn.set(i, mn(Dn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Is(e) {
  var t = kt(e.target);
  if (t !== null) {
    var n = Lt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Es(n)), t !== null)) {
          (e.blockedOn = t),
            Rs(e.priority, function () {
              Ls(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (oi = r), n.target.dispatchEvent(r), (oi = null);
    } else return (t = bn(n)), t !== null && bi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Jo(e, t, n) {
  Sr(e) && n.delete(t);
}
function rd() {
  (di = !1),
    lt !== null && Sr(lt) && (lt = null),
    it !== null && Sr(it) && (it = null),
    ot !== null && Sr(ot) && (ot = null),
    Mn.forEach(Jo),
    Dn.forEach(Jo);
}
function hn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    di ||
      ((di = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, rd)));
}
function On(e) {
  function t(l) {
    return hn(l, e);
  }
  if (0 < ar.length) {
    hn(ar[0], e);
    for (var n = 1; n < ar.length; n++) {
      var r = ar[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && hn(lt, e),
      it !== null && hn(it, e),
      ot !== null && hn(ot, e),
      Mn.forEach(t),
      Dn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    Is(n), n.blockedOn === null && et.shift();
}
var Xt = Ye.ReactCurrentBatchConfig,
  Dr = !0;
function ld(e, t, n, r) {
  var l = A,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (A = 1), eo(e, t, n, r);
  } finally {
    (A = l), (Xt.transition = i);
  }
}
function id(e, t, n, r) {
  var l = A,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (A = 4), eo(e, t, n, r);
  } finally {
    (A = l), (Xt.transition = i);
  }
}
function eo(e, t, n, r) {
  if (Dr) {
    var l = fi(e, t, n, r);
    if (l === null) Ml(e, t, r, Or, n), Xo(e, r);
    else if (nd(l, e, t, n, r)) r.stopPropagation();
    else if ((Xo(e, r), t & 4 && -1 < td.indexOf(e))) {
      for (; l !== null; ) {
        var i = bn(l);
        if (
          (i !== null && Fs(i),
          (i = fi(e, t, n, r)),
          i === null && Ml(e, t, r, Or, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var Or = null;
function fi(e, t, n, r) {
  if (((Or = null), (e = Xi(r)), (e = kt(e)), e !== null))
    if (((t = Lt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Es(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Or = e), null;
}
function Ms(e) {
  switch (e) {
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
      switch (Kc()) {
        case Ji:
          return 1;
        case _s:
          return 4;
        case Ir:
        case Zc:
          return 16;
        case zs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  to = null,
  Er = null;
function Ds() {
  if (Er) return Er;
  var e,
    t = to,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (Er = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Nr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function cr() {
  return !0;
}
function qo() {
  return !1;
}
function we(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? cr
        : qo),
      (this.isPropagationStopped = qo),
      this
    );
  }
  return (
    B(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = cr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = cr));
      },
      persist: function () {},
      isPersistent: cr,
    }),
    t
  );
}
var sn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = we(sn),
  qn = B({}, sn, { view: 0, detail: 0 }),
  od = we(qn),
  _l,
  zl,
  vn,
  ll = B({}, qn, {
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
    getModifierState: ro,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vn &&
            (vn && e.type === "mousemove"
              ? ((_l = e.screenX - vn.screenX), (zl = e.screenY - vn.screenY))
              : (zl = _l = 0),
            (vn = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  bo = we(ll),
  ud = B({}, ll, { dataTransfer: 0 }),
  sd = we(ud),
  ad = B({}, qn, { relatedTarget: 0 }),
  Pl = we(ad),
  cd = B({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dd = we(cd),
  fd = B({}, sn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  pd = we(fd),
  md = B({}, sn, { data: 0 }),
  eu = we(md),
  hd = {
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
  vd = {
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
  gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function yd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = gd[e]) ? !!t[e] : !1;
}
function ro() {
  return yd;
}
var wd = B({}, qn, {
    key: function (e) {
      if (e.key) {
        var t = hd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Nr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vd[e.keyCode] || "Unidentified"
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
    getModifierState: ro,
    charCode: function (e) {
      return e.type === "keypress" ? Nr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Nr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  xd = we(wd),
  kd = B({}, ll, {
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
  tu = we(kd),
  Sd = B({}, qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  Ed = we(Sd),
  Nd = B({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cd = we(Nd),
  jd = B({}, ll, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _d = we(jd),
  zd = [9, 13, 27, 32],
  lo = Qe && "CompositionEvent" in window,
  jn = null;
Qe && "documentMode" in document && (jn = document.documentMode);
var Pd = Qe && "TextEvent" in window && !jn,
  Os = Qe && (!lo || (jn && 8 < jn && 11 >= jn)),
  nu = " ",
  ru = !1;
function Us(e, t) {
  switch (e) {
    case "keyup":
      return zd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function Td(e, t) {
  switch (e) {
    case "compositionend":
      return $s(t);
    case "keypress":
      return t.which !== 32 ? null : ((ru = !0), nu);
    case "textInput":
      return (e = t.data), e === nu && ru ? null : e;
    default:
      return null;
  }
}
function Fd(e, t) {
  if (Dt)
    return e === "compositionend" || (!lo && Us(e, t))
      ? ((e = Ds()), (Er = to = nt = null), (Dt = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Os && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ld = {
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
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ld[e.type] : t === "textarea";
}
function Bs(e, t, n, r) {
  ys(r),
    (t = Ur(t, "onChange")),
    0 < t.length &&
      ((n = new no("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _n = null,
  Un = null;
function Ad(e) {
  qs(e, 0);
}
function il(e) {
  var t = $t(e);
  if (ds(t)) return e;
}
function Rd(e, t) {
  if (e === "change") return t;
}
var Vs = !1;
if (Qe) {
  var Tl;
  if (Qe) {
    var Fl = "oninput" in document;
    if (!Fl) {
      var iu = document.createElement("div");
      iu.setAttribute("oninput", "return;"),
        (Fl = typeof iu.oninput == "function");
    }
    Tl = Fl;
  } else Tl = !1;
  Vs = Tl && (!document.documentMode || 9 < document.documentMode);
}
function ou() {
  _n && (_n.detachEvent("onpropertychange", Hs), (Un = _n = null));
}
function Hs(e) {
  if (e.propertyName === "value" && il(Un)) {
    var t = [];
    Bs(t, Un, e, Xi(e)), Ss(Ad, t);
  }
}
function Id(e, t, n) {
  e === "focusin"
    ? (ou(), (_n = t), (Un = n), _n.attachEvent("onpropertychange", Hs))
    : e === "focusout" && ou();
}
function Md(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(Un);
}
function Dd(e, t) {
  if (e === "click") return il(t);
}
function Od(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function Ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == "function" ? Object.is : Ud;
function $n(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, t) {
  var n = uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
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
    n = uu(n);
  }
}
function Ws(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ws(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qs() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $d(e) {
  var t = Qs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ws(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && io(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = su(n, i));
        var o = su(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Bd = Qe && "documentMode" in document && 11 >= document.documentMode,
  Ot = null,
  pi = null,
  zn = null,
  mi = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  mi ||
    Ot == null ||
    Ot !== Lr(r) ||
    ((r = Ot),
    "selectionStart" in r && io(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (zn && $n(zn, r)) ||
      ((zn = r),
      (r = Ur(pi, "onSelect")),
      0 < r.length &&
        ((t = new no("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ot))));
}
function dr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ut = {
    animationend: dr("Animation", "AnimationEnd"),
    animationiteration: dr("Animation", "AnimationIteration"),
    animationstart: dr("Animation", "AnimationStart"),
    transitionend: dr("Transition", "TransitionEnd"),
  },
  Ll = {},
  Ks = {};
Qe &&
  ((Ks = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ut.animationend.animation,
    delete Ut.animationiteration.animation,
    delete Ut.animationstart.animation),
  "TransitionEvent" in window || delete Ut.transitionend.transition);
function ol(e) {
  if (Ll[e]) return Ll[e];
  if (!Ut[e]) return e;
  var t = Ut[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ks) return (Ll[e] = t[n]);
  return e;
}
var Zs = ol("animationend"),
  Gs = ol("animationiteration"),
  Ys = ol("animationstart"),
  Xs = ol("transitionend"),
  Js = new Map(),
  cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mt(e, t) {
  Js.set(e, t), Ft(t, [e]);
}
for (var Al = 0; Al < cu.length; Al++) {
  var Rl = cu[Al],
    Vd = Rl.toLowerCase(),
    Hd = Rl[0].toUpperCase() + Rl.slice(1);
  mt(Vd, "on" + Hd);
}
mt(Zs, "onAnimationEnd");
mt(Gs, "onAnimationIteration");
mt(Ys, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Xs, "onTransitionEnd");
bt("onMouseEnter", ["mouseout", "mouseover"]);
bt("onMouseLeave", ["mouseout", "mouseover"]);
bt("onPointerEnter", ["pointerout", "pointerover"]);
bt("onPointerLeave", ["pointerout", "pointerover"]);
Ft(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ft(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ft(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var En =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
function du(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function qs(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          du(l, u, d), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          du(l, u, d), (i = s);
        }
    }
  }
  if (Rr) throw ((e = ai), (Rr = !1), (ai = null), e);
}
function I(e, t) {
  var n = t[wi];
  n === void 0 && (n = t[wi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (bs(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), bs(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      os.forEach(function (n) {
        n !== "selectionchange" && (Wd.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Il("selectionchange", !1, t));
  }
}
function bs(e, t, n, r) {
  switch (Ms(t)) {
    case 1:
      var l = ld;
      break;
    case 4:
      l = id;
      break;
    default:
      l = eo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !si ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = kt(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ss(function () {
    var d = i,
      v = Xi(n),
      h = [];
    e: {
      var m = Js.get(e);
      if (m !== void 0) {
        var w = no,
          x = e;
        switch (e) {
          case "keypress":
            if (Nr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = xd;
            break;
          case "focusin":
            (x = "focus"), (w = Pl);
            break;
          case "focusout":
            (x = "blur"), (w = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Pl;
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
            w = bo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = sd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Ed;
            break;
          case Zs:
          case Gs:
          case Ys:
            w = dd;
            break;
          case Xs:
            w = Cd;
            break;
          case "scroll":
            w = od;
            break;
          case "wheel":
            w = _d;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = pd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = tu;
        }
        var k = (t & 4) !== 0,
          D = !k && e === "scroll",
          f = k ? (m !== null ? m + "Capture" : null) : m;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = In(c, f)), g != null && k.push(Vn(c, g, p)))),
            D)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((m = new w(m, x, null, n, v)), h.push({ event: m, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            n !== oi &&
            (x = n.relatedTarget || n.fromElement) &&
            (kt(x) || x[Ke]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((x = n.relatedTarget || n.toElement),
              (w = d),
              (x = x ? kt(x) : null),
              x !== null &&
                ((D = Lt(x)), x !== D || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((w = null), (x = d)),
          w !== x)
        ) {
          if (
            ((k = bo),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = tu),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (D = w == null ? m : $t(w)),
            (p = x == null ? m : $t(x)),
            (m = new k(g, c + "leave", w, n, v)),
            (m.target = D),
            (m.relatedTarget = p),
            (g = null),
            kt(v) === d &&
              ((k = new k(f, c + "enter", x, n, v)),
              (k.target = p),
              (k.relatedTarget = D),
              (g = k)),
            (D = g),
            w && x)
          )
            t: {
              for (k = w, f = x, c = 0, p = k; p; p = Rt(p)) c++;
              for (p = 0, g = f; g; g = Rt(g)) p++;
              for (; 0 < c - p; ) (k = Rt(k)), c--;
              for (; 0 < p - c; ) (f = Rt(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Rt(k)), (f = Rt(f));
              }
              k = null;
            }
          else k = null;
          w !== null && fu(h, m, w, k, !1),
            x !== null && D !== null && fu(h, D, x, k, !0);
        }
      }
      e: {
        if (
          ((m = d ? $t(d) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var E = Rd;
        else if (lu(m))
          if (Vs) E = Od;
          else {
            E = Md;
            var C = Id;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (E = Dd);
        if (E && (E = E(e, d))) {
          Bs(h, E, n, v);
          break e;
        }
        C && C(e, m, d),
          e === "focusout" &&
            (C = m._wrapperState) &&
            C.controlled &&
            m.type === "number" &&
            ti(m, "number", m.value);
      }
      switch (((C = d ? $t(d) : window), e)) {
        case "focusin":
          (lu(C) || C.contentEditable === "true") &&
            ((Ot = C), (pi = d), (zn = null));
          break;
        case "focusout":
          zn = pi = Ot = null;
          break;
        case "mousedown":
          mi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (mi = !1), au(h, n, v);
          break;
        case "selectionchange":
          if (Bd) break;
        case "keydown":
        case "keyup":
          au(h, n, v);
      }
      var j;
      if (lo)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Dt
          ? Us(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Os &&
          n.locale !== "ko" &&
          (Dt || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Dt && (j = Ds())
            : ((nt = v),
              (to = "value" in nt ? nt.value : nt.textContent),
              (Dt = !0))),
        (C = Ur(d, _)),
        0 < C.length &&
          ((_ = new eu(_, e, null, n, v)),
          h.push({ event: _, listeners: C }),
          j ? (_.data = j) : ((j = $s(n)), j !== null && (_.data = j)))),
        (j = Pd ? Td(e, n) : Fd(e, n)) &&
          ((d = Ur(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new eu("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: d }),
            (v.data = j)));
    }
    qs(h, t);
  });
}
function Vn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ur(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = In(e, n)),
      i != null && r.unshift(Vn(e, i, l)),
      (i = In(e, t)),
      i != null && r.push(Vn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function fu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = In(n, i)), s != null && o.unshift(Vn(n, s, u)))
        : l || ((s = In(n, i)), s != null && o.push(Vn(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Qd = /\r\n?/g,
  Kd = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Qd,
      `
`
    )
    .replace(Kd, "");
}
function pr(e, t, n) {
  if (((t = pu(t)), pu(e) !== t && n)) throw Error(y(425));
}
function $r() {}
var hi = null,
  vi = null;
function gi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var yi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mu = typeof Promise == "function" ? Promise : void 0,
  Gd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mu < "u"
      ? function (e) {
          return mu.resolve(null).then(e).catch(Yd);
        }
      : yi;
function Yd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), On(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  On(t);
}
function ut(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var an = Math.random().toString(36).slice(2),
  Me = "__reactFiber$" + an,
  Hn = "__reactProps$" + an,
  Ke = "__reactContainer$" + an,
  wi = "__reactEvents$" + an,
  Xd = "__reactListeners$" + an,
  Jd = "__reactHandles$" + an;
function kt(e) {
  var t = e[Me];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Me])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hu(e); e !== null; ) {
          if ((n = e[Me])) return n;
          e = hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function bn(e) {
  return (
    (e = e[Me] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $t(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ul(e) {
  return e[Hn] || null;
}
var xi = [],
  Bt = -1;
function ht(e) {
  return { current: e };
}
function M(e) {
  0 > Bt || ((e.current = xi[Bt]), (xi[Bt] = null), Bt--);
}
function R(e, t) {
  Bt++, (xi[Bt] = e.current), (e.current = t);
}
var pt = {},
  le = ht(pt),
  de = ht(!1),
  jt = pt;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return pt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Br() {
  M(de), M(le);
}
function vu(e, t, n) {
  if (le.current !== pt) throw Error(y(168));
  R(le, t), R(de, n);
}
function ea(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Ic(e) || "Unknown", l));
  return B({}, n, r);
}
function Vr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || pt),
    (jt = le.current),
    R(le, e),
    R(de, de.current),
    !0
  );
}
function gu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = ea(e, t, jt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(de),
      M(le),
      R(le, e))
    : M(de),
    R(de, n);
}
var Be = null,
  sl = !1,
  Ol = !1;
function ta(e) {
  Be === null ? (Be = [e]) : Be.push(e);
}
function qd(e) {
  (sl = !0), ta(e);
}
function vt() {
  if (!Ol && Be !== null) {
    Ol = !0;
    var e = 0,
      t = A;
    try {
      var n = Be;
      for (A = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Be = null), (sl = !1);
    } catch (l) {
      throw (Be !== null && (Be = Be.slice(e + 1)), js(Ji, vt), l);
    } finally {
      (A = t), (Ol = !1);
    }
  }
  return null;
}
var Vt = [],
  Ht = 0,
  Hr = null,
  Wr = 0,
  xe = [],
  ke = 0,
  _t = null,
  Ve = 1,
  He = "";
function wt(e, t) {
  (Vt[Ht++] = Wr), (Vt[Ht++] = Hr), (Hr = e), (Wr = t);
}
function na(e, t, n) {
  (xe[ke++] = Ve), (xe[ke++] = He), (xe[ke++] = _t), (_t = e);
  var r = Ve;
  e = He;
  var l = 32 - Fe(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Fe(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ve = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (He = i + e);
  } else (Ve = (1 << i) | (n << l) | r), (He = e);
}
function oo(e) {
  e.return !== null && (wt(e, 1), na(e, 1, 0));
}
function uo(e) {
  for (; e === Hr; )
    (Hr = Vt[--Ht]), (Vt[Ht] = null), (Wr = Vt[--Ht]), (Vt[Ht] = null);
  for (; e === _t; )
    (_t = xe[--ke]),
      (xe[ke] = null),
      (He = xe[--ke]),
      (xe[ke] = null),
      (Ve = xe[--ke]),
      (xe[ke] = null);
}
var ve = null,
  he = null,
  O = !1,
  Te = null;
function ra(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function yu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (he = ut(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _t !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ki(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Si(e) {
  if (O) {
    var t = he;
    if (t) {
      var n = t;
      if (!yu(e, t)) {
        if (ki(e)) throw Error(y(418));
        t = ut(n.nextSibling);
        var r = ve;
        t && yu(e, t)
          ? ra(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (O = !1), (ve = e));
      }
    } else {
      if (ki(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (O = !1), (ve = e);
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function mr(e) {
  if (e !== ve) return !1;
  if (!O) return wu(e), (O = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
    t && (t = he))
  ) {
    if (ki(e)) throw (la(), Error(y(418)));
    for (; t; ) ra(e, t), (t = ut(t.nextSibling));
  }
  if ((wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              he = ut(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? ut(e.stateNode.nextSibling) : null;
  return !0;
}
function la() {
  for (var e = he; e; ) e = ut(e.nextSibling);
}
function tn() {
  (he = ve = null), (O = !1);
}
function so(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var bd = Ye.ReactCurrentBatchConfig;
function gn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function hr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function ia(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = dt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = Ql(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function s(f, c, p, g) {
    var E = p.type;
    return E === Mt
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === qe &&
            xu(E) === c.type))
      ? ((g = l(c, p.props)), (g.ref = gn(f, c, p)), (g.return = f), g)
      : ((g = Fr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = gn(f, c, p)),
        (g.return = f),
        g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Kl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, E) {
    return c === null || c.tag !== 7
      ? ((c = Ct(p, f.mode, g, E)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Ql("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case lr:
          return (
            (p = Fr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = gn(f, null, c)),
            (p.return = f),
            p
          );
        case It:
          return (c = Kl(c, f.mode, p)), (c.return = f), c;
        case qe:
          var g = c._init;
          return h(f, g(c._payload), p);
      }
      if (kn(c) || fn(c))
        return (c = Ct(c, f.mode, p, null)), (c.return = f), c;
      hr(f, c);
    }
    return null;
  }
  function m(f, c, p, g) {
    var E = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return E !== null ? null : u(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case lr:
          return p.key === E ? s(f, c, p, g) : null;
        case It:
          return p.key === E ? d(f, c, p, g) : null;
        case qe:
          return (E = p._init), m(f, c, E(p._payload), g);
      }
      if (kn(p) || fn(p)) return E !== null ? null : v(f, c, p, g, null);
      hr(f, p);
    }
    return null;
  }
  function w(f, c, p, g, E) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), u(c, f, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case lr:
          return (f = f.get(g.key === null ? p : g.key) || null), s(c, f, g, E);
        case It:
          return (f = f.get(g.key === null ? p : g.key) || null), d(c, f, g, E);
        case qe:
          var C = g._init;
          return w(f, c, p, C(g._payload), E);
      }
      if (kn(g) || fn(g)) return (f = f.get(p) || null), v(c, f, g, E, null);
      hr(c, g);
    }
    return null;
  }
  function x(f, c, p, g) {
    for (
      var E = null, C = null, j = c, _ = (c = 0), H = null;
      j !== null && _ < p.length;
      _++
    ) {
      j.index > _ ? ((H = j), (j = null)) : (H = j.sibling);
      var F = m(f, j, p[_], g);
      if (F === null) {
        j === null && (j = H);
        break;
      }
      e && j && F.alternate === null && t(f, j),
        (c = i(F, c, _)),
        C === null ? (E = F) : (C.sibling = F),
        (C = F),
        (j = H);
    }
    if (_ === p.length) return n(f, j), O && wt(f, _), E;
    if (j === null) {
      for (; _ < p.length; _++)
        (j = h(f, p[_], g)),
          j !== null &&
            ((c = i(j, c, _)), C === null ? (E = j) : (C.sibling = j), (C = j));
      return O && wt(f, _), E;
    }
    for (j = r(f, j); _ < p.length; _++)
      (H = w(j, f, _, p[_], g)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? _ : H.key),
          (c = i(H, c, _)),
          C === null ? (E = H) : (C.sibling = H),
          (C = H));
    return (
      e &&
        j.forEach(function (je) {
          return t(f, je);
        }),
      O && wt(f, _),
      E
    );
  }
  function k(f, c, p, g) {
    var E = fn(p);
    if (typeof E != "function") throw Error(y(150));
    if (((p = E.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (E = null), j = c, _ = (c = 0), H = null, F = p.next();
      j !== null && !F.done;
      _++, F = p.next()
    ) {
      j.index > _ ? ((H = j), (j = null)) : (H = j.sibling);
      var je = m(f, j, F.value, g);
      if (je === null) {
        j === null && (j = H);
        break;
      }
      e && j && je.alternate === null && t(f, j),
        (c = i(je, c, _)),
        C === null ? (E = je) : (C.sibling = je),
        (C = je),
        (j = H);
    }
    if (F.done) return n(f, j), O && wt(f, _), E;
    if (j === null) {
      for (; !F.done; _++, F = p.next())
        (F = h(f, F.value, g)),
          F !== null &&
            ((c = i(F, c, _)), C === null ? (E = F) : (C.sibling = F), (C = F));
      return O && wt(f, _), E;
    }
    for (j = r(f, j); !F.done; _++, F = p.next())
      (F = w(j, f, _, F.value, g)),
        F !== null &&
          (e && F.alternate !== null && j.delete(F.key === null ? _ : F.key),
          (c = i(F, c, _)),
          C === null ? (E = F) : (C.sibling = F),
          (C = F));
    return (
      e &&
        j.forEach(function (cn) {
          return t(f, cn);
        }),
      O && wt(f, _),
      E
    );
  }
  function D(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Mt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case lr:
          e: {
            for (var E = p.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (((E = p.type), E === Mt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === qe &&
                    xu(E) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = gn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === Mt
              ? ((c = Ct(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Fr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = gn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return o(f);
        case It:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Kl(p, f.mode, g)), (c.return = f), (f = c);
          }
          return o(f);
        case qe:
          return (C = p._init), D(f, c, C(p._payload), g);
      }
      if (kn(p)) return x(f, c, p, g);
      if (fn(p)) return k(f, c, p, g);
      hr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Ql(p, f.mode, g)), (c.return = f), (f = c)),
        o(f))
      : n(f, c);
  }
  return D;
}
var nn = ia(!0),
  oa = ia(!1),
  Qr = ht(null),
  Kr = null,
  Wt = null,
  ao = null;
function co() {
  ao = Wt = Kr = null;
}
function fo(e) {
  var t = Qr.current;
  M(Qr), (e._currentValue = t);
}
function Ei(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jt(e, t) {
  (Kr = e),
    (ao = Wt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (ao !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wt === null)) {
      if (Kr === null) throw Error(y(308));
      (Wt = e), (Kr.dependencies = { lanes: 0, firstContext: e });
    } else Wt = Wt.next = e;
  return t;
}
var St = null;
function po(e) {
  St === null ? (St = [e]) : St.push(e);
}
function ua(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), po(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var be = !1;
function mo(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sa(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function We(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), L & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), po(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
function ku(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
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
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  be = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), o === null ? (i = d) : (o.next = d), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = d) : (u.next = d),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = d = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var x = e,
            k = u;
          switch (((m = t), (w = n), k.tag)) {
            case 1:
              if (((x = k.payload), typeof x == "function")) {
                h = x.call(w, h, m);
                break e;
              }
              h = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = k.payload),
                (m = typeof x == "function" ? x.call(w, h, m) : x),
                m == null)
              )
                break e;
              h = B({}, h, m);
              break e;
            case 2:
              be = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((d = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Pt |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function Su(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var er = {},
  Ue = ht(er),
  Wn = ht(er),
  Qn = ht(er);
function Et(e) {
  if (e === er) throw Error(y(174));
  return e;
}
function ho(e, t) {
  switch ((R(Qn, t), R(Wn, e), R(Ue, er), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ri(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ri(t, e));
  }
  M(Ue), R(Ue, t);
}
function rn() {
  M(Ue), M(Wn), M(Qn);
}
function aa(e) {
  Et(Qn.current);
  var t = Et(Ue.current),
    n = ri(t, e.type);
  t !== n && (R(Wn, e), R(Ue, n));
}
function vo(e) {
  Wn.current === e && (M(Ue), M(Wn));
}
var U = ht(0);
function Gr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ul = [];
function go() {
  for (var e = 0; e < Ul.length; e++)
    Ul[e]._workInProgressVersionPrimary = null;
  Ul.length = 0;
}
var jr = Ye.ReactCurrentDispatcher,
  $l = Ye.ReactCurrentBatchConfig,
  zt = 0,
  $ = null,
  Z = null,
  X = null,
  Yr = !1,
  Pn = !1,
  Kn = 0,
  ef = 0;
function te() {
  throw Error(y(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, l, i) {
  if (
    ((zt = i),
    ($ = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jr.current = e === null || e.memoizedState === null ? lf : of),
    (e = n(r, l)),
    Pn)
  ) {
    i = 0;
    do {
      if (((Pn = !1), (Kn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (X = Z = null),
        (t.updateQueue = null),
        (jr.current = uf),
        (e = n(r, l));
    } while (Pn);
  }
  if (
    ((jr.current = Xr),
    (t = Z !== null && Z.next !== null),
    (zt = 0),
    (X = Z = $ = null),
    (Yr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function xo() {
  var e = Kn !== 0;
  return (Kn = 0), e;
}
function Ie() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? ($.memoizedState = X = e) : (X = X.next = e), X;
}
function Ce() {
  if (Z === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = X === null ? $.memoizedState : X.next;
  if (t !== null) (X = t), (Z = e);
  else {
    if (e === null) throw Error(y(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      X === null ? ($.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Z,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      d = i;
    do {
      var v = d.lane;
      if ((zt & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var h = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          ($.lanes |= v),
          (Pt |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    s === null ? (o = r) : (s.next = u),
      Ae(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), ($.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = Ce(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Ae(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ca() {}
function da(e, t) {
  var n = $,
    r = Ce(),
    l = t(),
    i = !Ae(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ko(ma.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gn(9, pa.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zt & 30 || fa(n, t, l);
  }
  return l;
}
function fa(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ha(t) && va(e);
}
function ma(e, t, n) {
  return n(function () {
    ha(t) && va(e);
  });
}
function ha(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function va(e) {
  var t = Ze(e, 1);
  t !== null && Le(t, e, 1, -1);
}
function Eu(e) {
  var t = Ie();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = rf.bind(null, $, e)),
    [t.memoizedState, e]
  );
}
function Gn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = $.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        ($.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ga() {
  return Ce().memoizedState;
}
function _r(e, t, n, r) {
  var l = Ie();
  ($.flags |= e),
    (l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = Ce();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (((i = o.destroy), r !== null && yo(r, o.deps))) {
      l.memoizedState = Gn(t, n, i, r);
      return;
    }
  }
  ($.flags |= e), (l.memoizedState = Gn(1 | t, n, i, r));
}
function Nu(e, t) {
  return _r(8390656, 8, e, t);
}
function ko(e, t) {
  return al(2048, 8, e, t);
}
function ya(e, t) {
  return al(4, 2, e, t);
}
function wa(e, t) {
  return al(4, 4, e, t);
}
function xa(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ka(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), al(4, 4, xa.bind(null, t, e), n)
  );
}
function So() {}
function Sa(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ea(e, t) {
  var n = Ce();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Na(e, t, n) {
  return zt & 21
    ? (Ae(n, t) || ((n = Ps()), ($.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function tf(e, t) {
  var n = A;
  (A = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (A = n), ($l.transition = r);
  }
}
function Ca() {
  return Ce().memoizedState;
}
function nf(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ja(e))
  )
    _a(t, n);
  else if (((n = ua(e, t, n, r)), n !== null)) {
    var l = oe();
    Le(n, e, r, l), za(n, t, r);
  }
}
function rf(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) _a(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), po(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ua(e, t, l, r)),
      n !== null && ((l = oe()), Le(n, e, r, l), za(n, t, r));
  }
}
function ja(e) {
  var t = e.alternate;
  return e === $ || (t !== null && t === $);
}
function _a(e, t) {
  Pn = Yr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function za(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
var Xr = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  lf = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (Ie().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Nu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _r(4194308, 4, xa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _r(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _r(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ie();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ie();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = nf.bind(null, $, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ie();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Eu,
    useDebugValue: So,
    useDeferredValue: function (e) {
      return (Ie().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = tf.bind(null, e[1])), (Ie().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = $,
        l = Ie();
      if (O) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        zt & 30 || fa(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Nu(ma.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Gn(9, pa.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ie(),
        t = J.identifierPrefix;
      if (O) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Kn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ef++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Ne,
    useCallback: Sa,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: wa,
    useMemo: Ea,
    useReducer: Bl,
    useRef: ga,
    useState: function () {
      return Bl(Zn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = Ce();
      return Na(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Zn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: da,
    useId: Ca,
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: Ne,
    useCallback: Sa,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ka,
    useInsertionEffect: ya,
    useLayoutEffect: wa,
    useMemo: Ea,
    useReducer: Vl,
    useRef: ga,
    useState: function () {
      return Vl(Zn);
    },
    useDebugValue: So,
    useDeferredValue: function (e) {
      var t = Ce();
      return Z === null ? (t.memoizedState = e) : Na(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Zn)[0],
        t = Ce().memoizedState;
      return [e, t];
    },
    useMutableSource: ca,
    useSyncExternalStore: da,
    useId: Ca,
    unstable_isNewReconciler: !1,
  };
function ze(e, t) {
  if (e && e.defaultProps) {
    (t = B({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ni(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : B({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Lt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      i = We(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Le(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      i = We(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Le(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ct(e),
      l = We(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Le(t, e, r, n), Cr(t, e, r));
  },
};
function Cu(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !$n(n, r) || !$n(l, i)
      : !0
  );
}
function Pa(e, t, n) {
  var r = !1,
    l = pt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = fe(t) ? jt : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? en(e, l) : pt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = cl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && cl.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), mo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = fe(t) ? jt : le.current), (l.context = en(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ni(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && cl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ji(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sf = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, t, n) {
  (n = We(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      qr || ((qr = !0), (Mi = r)), ji(e, t);
    }),
    n
  );
}
function Fa(e, t, n) {
  (n = We(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        ji(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ji(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function _u(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sf.bind(null, e, t, n)), t.then(e, e));
}
function zu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = We(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var af = Ye.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? oa(t, null, n, r) : nn(t, e.child, n, r);
}
function Tu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Jt(t, l),
    (r = wo(e, t, n, r, i, l)),
    (n = xo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (O && n && oo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Fu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !To(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), La(e, t, i, r, l))
      : ((e = Fr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : $n), n(o, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function La(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if ($n(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return _i(e, t, n, r, l);
}
function Aa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Kt, me),
        (me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Kt, me),
          (me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Kt, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Kt, me),
      (me |= r);
  return ie(e, t, l, n), t.child;
}
function Ra(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function _i(e, t, n, r, l) {
  var i = fe(n) ? jt : le.current;
  return (
    (i = en(t, i)),
    Jt(t, l),
    (n = wo(e, t, n, r, i, l)),
    (r = xo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (O && r && oo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (fe(n)) {
    var i = !0;
    Vr(t);
  } else i = !1;
  if ((Jt(t, l), t.stateNode === null))
    zr(e, t), Pa(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ne(d))
      : ((d = fe(n) ? jt : le.current), (d = en(t, d)));
    var v = n.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && ju(t, o, r, d)),
      (be = !1);
    var m = t.memoizedState;
    (o.state = m),
      Zr(t, r, o, l),
      (s = t.memoizedState),
      u !== r || m !== s || de.current || be
        ? (typeof v == "function" && (Ni(t, n, v, r), (s = t.memoizedState)),
          (u = be || Cu(t, n, u, r, m, s, d))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = d),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      sa(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : ze(t.type, u)),
      (o.props = d),
      (h = t.pendingProps),
      (m = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ne(s))
        : ((s = fe(n) ? jt : le.current), (s = en(t, s)));
    var w = n.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && ju(t, o, r, s)),
      (be = !1),
      (m = t.memoizedState),
      (o.state = m),
      Zr(t, r, o, l);
    var x = t.memoizedState;
    u !== h || m !== x || de.current || be
      ? (typeof w == "function" && (Ni(t, n, w, r), (x = t.memoizedState)),
        (d = be || Cu(t, n, d, r, m, x, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = d))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zi(e, t, n, r, i, l);
}
function zi(e, t, n, r, l, i) {
  Ra(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && gu(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (af.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = nn(t, e.child, null, i)), (t.child = nn(t, null, u, i)))
      : ie(e, t, u, i),
    (t.memoizedState = r.state),
    l && gu(t, n, !0),
    t.child
  );
}
function Ia(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(e, t.context, !1),
    ho(e, t.containerInfo);
}
function Au(e, t, n, r, l) {
  return tn(), so(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ma(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(U, l & 1),
    e === null)
  )
    return (
      Si(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = pl(o, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = Pi),
              e)
            : Eo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return cf(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = dt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = dt(u, i)) : ((i = Ct(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ti(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = dt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eo(e, t) {
  return (
    (t = pl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function vr(e, t, n, r) {
  return (
    r !== null && so(r),
    nn(t, e.child, null, n),
    (e = Eo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cf(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(y(422)))), vr(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = pl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ct(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, o),
        (t.child.memoizedState = Ti(o)),
        (t.memoizedState = Pi),
        i);
  if (!(t.mode & 1)) return vr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Hl(i, r, void 0)), vr(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ze(e, l), Le(r, e, l, -1));
    }
    return Po(), (r = Hl(Error(y(421)))), vr(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ef.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (he = ut(l.nextSibling)),
      (ve = t),
      (O = !0),
      (Te = null),
      e !== null &&
        ((xe[ke++] = Ve),
        (xe[ke++] = He),
        (xe[ke++] = _t),
        (Ve = e.id),
        (He = e.overflow),
        (_t = t)),
      (t = Eo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ei(e.return, t, n);
}
function Wl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Da(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, n, t);
        else if (e.tag === 19) Ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wl(t, !0, n, null, i);
        break;
      case "together":
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function zr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function df(e, t, n) {
  switch (t.tag) {
    case 3:
      Ia(t), tn();
      break;
    case 5:
      aa(t);
      break;
    case 1:
      fe(t.type) && Vr(t);
      break;
    case 4:
      ho(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Qr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ma(e, t, n)
          : (R(U, U.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      R(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Da(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Aa(e, t, n);
  }
  return Ge(e, t, n);
}
var Oa, Fi, Ua, $a;
Oa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fi = function () {};
Ua = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Et(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (l = bl(e, l)), (r = bl(e, r)), (i = []);
        break;
      case "select":
        (l = B({}, l, { value: void 0 })),
          (r = B({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ni(e, l)), (r = ni(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $r);
    }
    li(n, r);
    var o;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (An.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(d, n)), (n = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (An.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && I("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(d, s));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
$a = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!O)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ff(e, t, n) {
  var r = t.pendingProps;
  switch ((uo(t), t.tag)) {
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
      return ne(t), null;
    case 1:
      return fe(t.type) && Br(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        M(de),
        M(le),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (mr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Ui(Te), (Te = null)))),
        Fi(e, t),
        ne(t),
        null
      );
    case 5:
      vo(t);
      var l = Et(Qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ua(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = Et(Ue.current)), mr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Me] = t), (r[Hn] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < En.length; l++) I(En[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              Ho(r, i), I("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                I("invalid", r);
              break;
            case "textarea":
              Qo(r, i), I("invalid", r);
          }
          li(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      pr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : An.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  I("scroll", r);
            }
          switch (n) {
            case "input":
              ir(r), Wo(r, i, !0);
              break;
            case "textarea":
              ir(r), Ko(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = $r);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ms(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Me] = t),
            (e[Hn] = r),
            Oa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ii(n, r)), n)) {
              case "dialog":
                I("cancel", e), I("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < En.length; l++) I(En[l], e);
                l = r;
                break;
              case "source":
                I("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                I("error", e), I("load", e), (l = r);
                break;
              case "details":
                I("toggle", e), (l = r);
                break;
              case "input":
                Ho(e, r), (l = bl(e, r)), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = B({}, r, { value: void 0 })),
                  I("invalid", e);
                break;
              case "textarea":
                Qo(e, r), (l = ni(e, r)), I("invalid", e);
                break;
              default:
                l = r;
            }
            li(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? gs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && hs(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (An.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && I("scroll", e)
                      : s != null && Ki(e, i, s, o));
              }
            switch (n) {
              case "input":
                ir(e), Wo(e, r, !1);
                break;
              case "textarea":
                ir(e), Ko(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Zt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = $r);
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
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) $a(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = Et(Qn.current)), Et(Ue.current), mr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Me] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  pr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Me] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (M(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (O && he !== null && t.mode & 1 && !(t.flags & 128))
          la(), tn(), (t.flags |= 98560), (i = !1);
        else if (((i = mr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Me] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Te !== null && (Ui(Te), (Te = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : Po())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        rn(), Fi(e, t), e === null && Bn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fo(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Br(), ne(t), null;
    case 19:
      if ((M(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) yn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Gr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yn(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
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
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > on &&
            ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !O)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > on &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          R(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        zo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? me & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function pf(e, t) {
  switch ((uo(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Br(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        M(de),
        M(le),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((M(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return M(U), null;
    case 4:
      return rn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return zo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var gr = !1,
  re = !1,
  mf = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Qt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        V(e, t, r);
      }
    else n.current = null;
}
function Li(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Iu = !1;
function hf(e, t) {
  if (((hi = Dr), (e = Qs()), io(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            d = 0,
            v = 0,
            h = e,
            m = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (m === n && ++d === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vi = { focusedElem: e, selectionRange: n }, Dr = !1, S = t; S !== null; )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var k = x.memoizedProps,
                    D = x.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : ze(t.type, k),
                      D
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          V(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (x = Iu), (Iu = !1), x;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Li(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ai(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ba(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ba(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Me], delete t[Hn], delete t[wi], delete t[Xd], delete t[Jd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $r));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
var q = null,
  Pe = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) Ha(e, t, n), (n = n.sibling);
}
function Ha(e, t, n) {
  if (Oe && typeof Oe.onCommitFiberUnmount == "function")
    try {
      Oe.onCommitFiberUnmount(rl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Qt(n, t);
    case 6:
      var r = q,
        l = Pe;
      (q = null),
        Je(e, t, n),
        (q = r),
        (Pe = l),
        q !== null &&
          (Pe
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Pe
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            On(e))
          : Dl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Pe),
        (q = n.stateNode.containerInfo),
        (Pe = !0),
        Je(e, t, n),
        (q = r),
        (Pe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Li(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Qt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          V(n, t, u);
        }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Je(e, t, n), (re = r))
        : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Du(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mf()),
      t.forEach(function (r) {
        var l = Nf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function _e(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (Pe = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (Pe = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Ha(i, o, l), (q = null), (Pe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        V(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wa(t, e), (t = t.sibling);
}
function Wa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((_e(t, e), Re(e), r & 4)) {
        try {
          Tn(3, e, e.return), dl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          Tn(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      _e(t, e), Re(e), r & 512 && n !== null && Qt(n, n.return);
      break;
    case 5:
      if (
        (_e(t, e),
        Re(e),
        r & 512 && n !== null && Qt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fs(l, i),
              ii(u, o);
            var d = ii(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? gs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? hs(l, h)
                : v === "children"
                ? Rn(l, h)
                : Ki(l, v, h, d);
            }
            switch (u) {
              case "input":
                ei(l, i);
                break;
              case "textarea":
                ps(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Zt(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Zt(l, !!i.multiple, i.defaultValue, !0)
                      : Zt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Hn] = i;
          } catch (k) {
            V(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((_e(t, e), Re(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (_e(t, e), Re(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          On(t.containerInfo);
        } catch (k) {
          V(e, e.return, k);
        }
      break;
    case 4:
      _e(t, e), Re(e);
      break;
    case 13:
      _e(t, e),
        Re(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (jo = Q())),
        r & 4 && Du(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || v), _e(t, e), (re = d)) : _e(t, e),
        Re(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (S = e, v = e.child; v !== null; ) {
            for (h = S = v; S !== null; ) {
              switch (((m = S), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  Qt(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (k) {
                      V(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Qt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Uu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (S = w)) : Uu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = vs("display", o)));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
              } catch (k) {
                V(e, e.return, k);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      _e(t, e), Re(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      _e(t, e), Re(e);
  }
}
function Re(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Va(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var i = Mu(e);
          Ii(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Ri(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vf(e, t, n) {
  (S = e), Qa(e);
}
function Qa(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || gr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = gr;
        var d = re;
        if (((gr = o), (re = s) && !d))
          for (S = l; S !== null; )
            (o = S),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? $u(l)
                : s !== null
                ? ((s.return = o), (S = s))
                : $u(l);
        for (; i !== null; ) (S = i), Qa(i), (i = i.sibling);
        (S = l), (gr = u), (re = d);
      }
      Ou(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (S = i)) : Ou(e);
  }
}
function Ou(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ze(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Su(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Su(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && On(h);
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
              throw Error(y(163));
          }
        re || (t.flags & 512 && Ai(t));
      } catch (m) {
        V(t, t.return, m);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function $u(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var i = t.return;
          try {
            Ai(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ai(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var gf = Math.ceil,
  Jr = Ye.ReactCurrentDispatcher,
  No = Ye.ReactCurrentOwner,
  Ee = Ye.ReactCurrentBatchConfig,
  L = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Kt = ht(0),
  G = 0,
  Yn = null,
  Pt = 0,
  fl = 0,
  Co = 0,
  Fn = null,
  ae = null,
  jo = 0,
  on = 1 / 0,
  $e = null,
  qr = !1,
  Mi = null,
  at = null,
  yr = !1,
  rt = null,
  br = 0,
  Ln = 0,
  Di = null,
  Pr = -1,
  Tr = 0;
function oe() {
  return L & 6 ? Q() : Pr !== -1 ? Pr : (Pr = Q());
}
function ct(e) {
  return e.mode & 1
    ? L & 2 && b !== 0
      ? b & -b
      : bd.transition !== null
      ? (Tr === 0 && (Tr = Ps()), Tr)
      : ((e = A),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ms(e.type))),
        e)
    : 1;
}
function Le(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Di = null), Error(y(185)));
  Jn(e, n, r),
    (!(L & 2) || e !== J) &&
      (e === J && (!(L & 2) && (fl |= n), G === 4 && tt(e, b)),
      pe(e, r),
      n === 1 && L === 0 && !(t.mode & 1) && ((on = Q() + 500), sl && vt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  bc(e, t);
  var r = Mr(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Yo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yo(n), t === 1))
      e.tag === 0 ? qd(Bu.bind(null, e)) : ta(Bu.bind(null, e)),
        Gd(function () {
          !(L & 6) && vt();
        }),
        (n = null);
    else {
      switch (Ts(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = _s;
          break;
        case 16:
          n = Ir;
          break;
        case 536870912:
          n = zs;
          break;
        default:
          n = Ir;
      }
      n = ba(n, Ka.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ka(e, t) {
  if (((Pr = -1), (Tr = 0), L & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (qt() && e.callbackNode !== n) return null;
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = el(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var i = Ga();
    (J !== e || b !== t) && (($e = null), (on = Q() + 500), Nt(e, t));
    do
      try {
        xf();
        break;
      } catch (u) {
        Za(e, u);
      }
    while (!0);
    co(),
      (Jr.current = i),
      (L = l),
      K !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ci(e)), l !== 0 && ((r = l), (t = Oi(e, l)))), t === 1)
    )
      throw ((n = Yn), Nt(e, 0), tt(e, r), pe(e, Q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !yf(l) &&
          ((t = el(e, r)),
          t === 2 && ((i = ci(e)), i !== 0 && ((r = i), (t = Oi(e, i)))),
          t === 1))
      )
        throw ((n = Yn), Nt(e, 0), tt(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xt(e, ae, $e);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = jo + 500 - Q()), 10 < t))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = yi(xt.bind(null, e, ae, $e), t);
            break;
          }
          xt(e, ae, $e);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
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
                : 1960 * gf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = yi(xt.bind(null, e, ae, $e), r);
            break;
          }
          xt(e, ae, $e);
          break;
        case 5:
          xt(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ka.bind(null, e) : null;
}
function Oi(e, t) {
  var n = Fn;
  return (
    e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256),
    (e = el(e, t)),
    e !== 2 && ((t = ae), (ae = n), t !== null && Ui(t)),
    e
  );
}
function Ui(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function yf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function tt(e, t) {
  for (
    t &= ~Co,
      t &= ~fl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bu(e) {
  if (L & 6) throw Error(y(327));
  qt();
  var t = Mr(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = el(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ci(e);
    r !== 0 && ((t = r), (n = Oi(e, r)));
  }
  if (n === 1) throw ((n = Yn), Nt(e, 0), tt(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function _o(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    (L = n), L === 0 && ((on = Q() + 500), sl && vt());
  }
}
function Tt(e) {
  rt !== null && rt.tag === 0 && !(L & 6) && qt();
  var t = L;
  L |= 1;
  var n = Ee.transition,
    r = A;
  try {
    if (((Ee.transition = null), (A = 1), e)) return e();
  } finally {
    (A = r), (Ee.transition = n), (L = t), !(L & 6) && vt();
  }
}
function zo() {
  (me = Kt.current), M(Kt);
}
function Nt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((uo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Br();
          break;
        case 3:
          rn(), M(de), M(le), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          M(U);
          break;
        case 19:
          M(U);
          break;
        case 10:
          fo(r.type._context);
          break;
        case 22:
        case 23:
          zo();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (K = e = dt(e.current, null)),
    (b = me = t),
    (G = 0),
    (Yn = null),
    (Co = fl = Pt = 0),
    (ae = Fn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Za(e, t) {
  do {
    var n = K;
    try {
      if ((co(), (jr.current = Xr), Yr)) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((zt = 0),
        (X = Z = $ = null),
        (Pn = !1),
        (Kn = 0),
        (No.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Yn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = zu(o);
          if (w !== null) {
            (w.flags &= -257),
              Pu(w, o, u, i, t),
              w.mode & 1 && _u(i, d, t),
              (t = w),
              (s = d);
            var x = t.updateQueue;
            if (x === null) {
              var k = new Set();
              k.add(s), (t.updateQueue = k);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              _u(i, d, t), Po();
              break e;
            }
            s = Error(y(426));
          }
        } else if (O && u.mode & 1) {
          var D = zu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256),
              Pu(D, o, u, i, t),
              so(ln(s, u));
            break e;
          }
        }
        (i = s = ln(s, u)),
          G !== 4 && (G = 2),
          Fn === null ? (Fn = [i]) : Fn.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ta(i, s, t);
              ku(i, f);
              break e;
            case 1:
              u = s;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (at === null || !at.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Fa(i, u, t);
                ku(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xa(n);
    } catch (E) {
      (t = E), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ga() {
  var e = Jr.current;
  return (Jr.current = Xr), e === null ? Xr : e;
}
function Po() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Pt & 268435455) && !(fl & 268435455)) || tt(J, b);
}
function el(e, t) {
  var n = L;
  L |= 2;
  var r = Ga();
  (J !== e || b !== t) && (($e = null), Nt(e, t));
  do
    try {
      wf();
      break;
    } catch (l) {
      Za(e, l);
    }
  while (!0);
  if ((co(), (L = n), (Jr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function wf() {
  for (; K !== null; ) Ya(K);
}
function xf() {
  for (; K !== null && !Wc(); ) Ya(K);
}
function Ya(e) {
  var t = qa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Xa(e) : (K = t),
    (No.current = null);
}
function Xa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (K = null);
        return;
      }
    } else if (((n = ff(n, t, me)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function xt(e, t, n) {
  var r = A,
    l = Ee.transition;
  try {
    (Ee.transition = null), (A = 1), kf(e, t, n, r);
  } finally {
    (Ee.transition = l), (A = r);
  }
  return null;
}
function kf(e, t, n, r) {
  do qt();
  while (rt !== null);
  if (L & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (ed(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      ba(Ir, function () {
        return qt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ee.transition), (Ee.transition = null);
    var o = A;
    A = 1;
    var u = L;
    (L |= 4),
      (No.current = null),
      hf(e, n),
      Wa(n, e),
      $d(vi),
      (Dr = !!hi),
      (vi = hi = null),
      (e.current = n),
      vf(n),
      Qc(),
      (L = u),
      (A = o),
      (Ee.transition = i);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (rt = e), (br = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    Gc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr) throw ((qr = !1), (e = Mi), (Mi = null), e);
  return (
    br & 1 && e.tag !== 0 && qt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Di ? Ln++ : ((Ln = 0), (Di = e))) : (Ln = 0),
    vt(),
    null
  );
}
function qt() {
  if (rt !== null) {
    var e = Ts(br),
      t = Ee.transition,
      n = A;
    try {
      if (((Ee.transition = null), (A = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (br = 0), L & 6)) throw Error(y(331));
        var l = L;
        for (L |= 4, S = e.current; S !== null; ) {
          var i = S,
            o = i.child;
          if (S.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (S = d; S !== null; ) {
                  var v = S;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (S = h);
                  else
                    for (; S !== null; ) {
                      v = S;
                      var m = v.sibling,
                        w = v.return;
                      if ((Ba(v), v === d)) {
                        S = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (S = m);
                        break;
                      }
                      S = w;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var k = x.child;
                if (k !== null) {
                  x.child = null;
                  do {
                    var D = k.sibling;
                    (k.sibling = null), (k = D);
                  } while (k !== null);
                }
              }
              S = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (S = o);
          else
            e: for (; S !== null; ) {
              if (((i = S), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (S = f);
                break e;
              }
              S = i.return;
            }
        }
        var c = e.current;
        for (S = c; S !== null; ) {
          o = S;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (S = p);
          else
            e: for (o = c; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (E) {
                  V(u, u.return, E);
                }
              if (u === o) {
                S = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (S = g);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((L = l), vt(), Oe && typeof Oe.onPostCommitFiberRoot == "function")
        )
          try {
            Oe.onPostCommitFiberRoot(rl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (A = n), (Ee.transition = t);
    }
  }
  return !1;
}
function Vu(e, t, n) {
  (t = ln(n, t)),
    (t = Ta(e, t, 1)),
    (e = st(e, t, 1)),
    (t = oe()),
    e !== null && (Jn(e, 1, t), pe(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) Vu(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = ln(n, e)),
            (e = Fa(t, e, 1)),
            (t = st(t, e, 1)),
            (e = oe()),
            t !== null && (Jn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - jo)
        ? Nt(e, 0)
        : (Co |= n)),
    pe(e, t);
}
function Ja(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = sr), (sr <<= 1), !(sr & 130023424) && (sr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ze(e, t)), e !== null && (Jn(e, t, n), pe(e, n));
}
function Ef(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Ja(e, n);
}
function Nf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), Ja(e, n);
}
var qa;
qa = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), df(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), O && t.flags & 1048576 && na(t, Wr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      zr(e, t), (e = t.pendingProps);
      var l = en(t, le.current);
      Jt(t, n), (l = wo(null, t, r, e, l, n));
      var i = xo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((i = !0), Vr(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            mo(t),
            (l.updater = cl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = zi(null, t, r, !0, i, n)))
          : ((t.tag = 0), O && i && oo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (zr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = jf(r)),
          (e = ze(r, e)),
          l)
        ) {
          case 0:
            t = _i(null, t, r, e, n);
            break e;
          case 1:
            t = Lu(null, t, r, e, n);
            break e;
          case 11:
            t = Tu(null, t, r, e, n);
            break e;
          case 14:
            t = Fu(null, t, r, ze(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        _i(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Lu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ia(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          sa(e, t),
          Zr(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = ln(Error(y(423)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(y(424)), t)), (t = Au(e, t, r, n, l));
            break e;
          } else
            for (
              he = ut(t.stateNode.containerInfo.firstChild),
                ve = t,
                O = !0,
                Te = null,
                n = oa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        aa(t),
        e === null && Si(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        gi(r, l) ? (o = null) : i !== null && gi(r, i) && (t.flags |= 32),
        Ra(e, t),
        ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Si(t), null;
    case 13:
      return Ma(e, t, n);
    case 4:
      return (
        ho(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        Tu(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          R(Qr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Ae(i.value, o)) {
            if (i.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = We(-1, n & -n)), (s.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (d.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Ei(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Ei(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
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
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Jt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = ze(r, t.pendingProps)),
        (l = ze(r.type, l)),
        Fu(e, t, r, l, n)
      );
    case 15:
      return La(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ze(r, l)),
        zr(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), Vr(t)) : (e = !1),
        Jt(t, n),
        Pa(t, r, l),
        Ci(t, r, l, n),
        zi(null, t, r, !0, e, n)
      );
    case 19:
      return Da(e, t, n);
    case 22:
      return Aa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ba(e, t) {
  return js(e, t);
}
function Cf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Cf(e, t, n, r);
}
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function jf(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Yi) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Fr(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) To(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mt:
        return Ct(n.children, l, i, t);
      case Zi:
        (o = 8), (l |= 8);
        break;
      case Yl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Xl:
        return (e = Se(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Jl:
        return (e = Se(19, n, t, l)), (e.elementType = Jl), (e.lanes = i), e;
      case as:
        return pl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case us:
              o = 10;
              break e;
            case ss:
              o = 9;
              break e;
            case Gi:
              o = 11;
              break e;
            case Yi:
              o = 14;
              break e;
            case qe:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ct(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function pl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = as),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ql(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Kl(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _f(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Fo(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new _f(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    mo(i),
    e
  );
}
function zf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function ec(e) {
  if (!e) return pt;
  e = e._reactInternals;
  e: {
    if (Lt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return ea(e, n, t);
  }
  return t;
}
function tc(e, t, n, r, l, i, o, u, s) {
  return (
    (e = Fo(n, r, !0, e, l, i, o, u, s)),
    (e.context = ec(null)),
    (n = e.current),
    (r = oe()),
    (l = ct(n)),
    (i = We(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    Jn(e, l, r),
    pe(e, r),
    e
  );
}
function ml(e, t, n, r) {
  var l = t.current,
    i = oe(),
    o = ct(l);
  return (
    (n = ec(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = We(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, o)),
    e !== null && (Le(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function tl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Lo(e, t) {
  Hu(e, t), (e = e.alternate) && Hu(e, t);
}
function Pf() {
  return null;
}
var nc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ao(e) {
  this._internalRoot = e;
}
hl.prototype.render = Ao.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  ml(e, t, null, null);
};
hl.prototype.unmount = Ao.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      ml(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = As();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && Is(e);
  }
};
function Ro(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function vl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wu() {}
function Tf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = tl(o);
        i.call(d);
      };
    }
    var o = tc(t, r, e, 0, null, !1, !1, "", Wu);
    return (
      (e._reactRootContainer = o),
      (e[Ke] = o.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = tl(s);
      u.call(d);
    };
  }
  var s = Fo(e, 0, !1, null, null, !1, !1, "", Wu);
  return (
    (e._reactRootContainer = s),
    (e[Ke] = s.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      ml(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = tl(o);
        u.call(s);
      };
    }
    ml(t, o, e, l);
  } else o = Tf(n, t, e, l, r);
  return tl(o);
}
Fs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (qi(t, n | 1), pe(t, Q()), !(L & 6) && ((on = Q() + 500), vt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = oe();
          Le(r, e, 1, l);
        }
      }),
        Lo(e, 1);
  }
};
bi = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = oe();
      Le(t, e, 134217728, n);
    }
    Lo(e, 134217728);
  }
};
Ls = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = oe();
      Le(n, e, t, r);
    }
    Lo(e, t);
  }
};
As = function () {
  return A;
};
Rs = function (e, t) {
  var n = A;
  try {
    return (A = e), t();
  } finally {
    A = n;
  }
};
ui = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ei(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ul(r);
            if (!l) throw Error(y(90));
            ds(r), ei(r, l);
          }
        }
      }
      break;
    case "textarea":
      ps(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
xs = _o;
ks = Tt;
var Ff = { usingClientEntryPoint: !1, Events: [bn, $t, ul, ys, ws, _o] },
  wn = {
    findFiberByHostInstance: kt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Lf = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ns(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || Pf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      (rl = wr.inject(Lf)), (Oe = wr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ff;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ro(t)) throw Error(y(200));
  return zf(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Ro(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = nc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Fo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Ao(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Tt(e);
};
ye.hydrate = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Ro(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = nc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = tc(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Ke] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
ye.render = function (e, t, n) {
  if (!vl(t)) throw Error(y(200));
  return gl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!vl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = _o;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!vl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), (rs.exports = ye);
var Af = rs.exports,
  lc,
  Qu = Af;
(lc = Qu.createRoot), Qu.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rf = {
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
 */ const If = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  Io = (e, t) => {
    const n = De.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: i = 2,
          absoluteStrokeWidth: o,
          className: u = "",
          children: s,
          ...d
        },
        v
      ) =>
        De.createElement(
          "svg",
          {
            ref: v,
            ...Rf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: o ? (Number(i) * 24) / Number(l) : i,
            className: ["lucide", `lucide-${If(e)}`, u].join(" "),
            ...d,
          },
          [
            ...t.map(([h, m]) => De.createElement(h, m)),
            ...(Array.isArray(s) ? s : [s]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mf = Io("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = Io("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Of = Io("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Uf = [
    { id: "introduction", title: "1. Introduction" },
    { id: "vision", title: "2. Vision and Mission" },
    { id: "market", title: "3. Market Overview" },
    { id: "how-it-works", title: "4. How it works?" },
    { id: "ecosystem", title: "5. The Ecosystem" },
    { id: "ai-agents", title: "6. How AI Agents work?" },
    { id: "tokenomics", title: "7. Tokenomics" },
    { id: "deflationary", title: "8. Deflationary Ecosystem" },
    { id: "business", title: "9. Business Model" },
  ];
function $f({
  isOpen: e,
  setIsOpen: t,
  activeSection: n,
  setActiveSection: r,
}) {
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx("button", {
        onClick: () => t(!e),
        className:
          "lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-[#151516] text-[#A3FF21] hover:bg-[#151516]/80 transition-colors duration-200",
        children: e ? a.jsx(Of, { size: 24 }) : a.jsx(Df, { size: 24 }),
      }),
      a.jsx("div", {
        className: `fixed top-0 left-0 h-full bg-[#151516] text-white w-64 transform transition-transform duration-300 ease-in-out z-40
          ${e ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`,
        children: a.jsxs("div", {
          className: "p-6",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3 mb-8",
              children: [
                a.jsx(Mf, { size: 32, className: "text-[#A3FF21]" }),
                a.jsx("h1", {
                  className: "text-xl font-bold",
                  children: "AgentZero",
                }),
              ],
            }),
            a.jsx("nav", {
              className: "space-y-2",
              children: Uf.map((l) =>
                a.jsx(
                  "button",
                  {
                    onClick: () => {
                      r(l.id), t(!1);
                    },
                    className: `w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                  ${
                    n === l.id
                      ? "bg-[#A3FF21] text-[#151516] font-medium"
                      : "hover:bg-white/10"
                  }`,
                    children: l.title,
                  },
                  l.id
                )
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
function Bf({ children: e }) {
  return a.jsx("div", {
    className: "relative",
    children: a.jsx("div", {
      className:
        "relative backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:bg-white/10",
      children: e,
    }),
  });
}
function Xe({ title: e, children: t }) {
  return a.jsxs(Bf, {
    children: [
      a.jsx("h2", {
        className: "text-2xl font-bold mb-6 text-[#A3FF21]/90",
        children: e,
      }),
      a.jsx("div", {
        className: "text-lg leading-relaxed text-white/80",
        children: t,
      }),
    ],
  });
}
function Vf() {
  return a.jsx(Xe, {
    title: "Introduction",
    children: a.jsxs("div", {
      className: "space-y-6",
      children: [
        a.jsx("p", {
          children:
            "AgentZero is a groundbreaking platform at the intersection of blockchain, artificial intelligence, and decentralized finance (DeFi). Our mission is to empower individuals with private, secure, and AI-driven wealth management tools. By leveraging the power of Ethereum blockchain and cutting-edge AI technology, AgentZero enables users to deploy personalized AI agents to manage their assets, trade in DeFi markets, and seize financial opportunities while maintaining privacy and control.",
        }),
        a.jsx("p", {
          children:
            "As decentralized finance becomes increasingly prominent, the need for efficient and private wealth management solutions grows. AgentZero addresses this demand by combining advanced AI capabilities with blockchain transparency. It offers a user-centric platform where financial autonomy and privacy converge, setting a new standard for DeFi innovation.",
        }),
      ],
    }),
  });
}
function Hf() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Vision",
      }),
      a.jsx("p", {
        children:
          "To become the leading decentralized platform where individuals can securely manage their wealth using private, customizable AI agents.",
      }),
      a.jsx("p", {
        children:
          "AgentZero envisions a future where financial management is democratized and decentralized, offering unparalleled privacy and flexibility. By empowering users with AI tools that adapt to their unique goals, AgentZero strives to redefine the way people interact with digital assets and decentralized markets.",
      }),
    ],
  });
}
const Wf = [
  "Empower users with accessible and secure AI-driven tools for wealth management.",
  "Provide a fully decentralized and privacy-centric ecosystem for financial autonomy.",
  "Enable seamless interaction with DeFi markets to maximize users' financial potential.",
  "Foster a global community of users who value privacy, transparency, and innovation.",
  "Drive adoption of AI and blockchain technologies for mainstream financial applications.",
];
function Qf() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Mission",
      }),
      a.jsx("ul", {
        className: "list-disc list-inside space-y-2",
        children: Wf.map((e, t) =>
          a.jsx("li", { className: "text-white/80", children: e }, t)
        ),
      }),
    ],
  });
}
function Kf() {
  return a.jsx(Xe, {
    title: "Vision and Mission",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [a.jsx(Hf, {}), a.jsx(Qf, {})],
    }),
  });
}
const Zf = [
  {
    title: "Complexity",
    description: "Navigating DeFi platforms can be intimidating for newcomers.",
  },
  {
    title: "Security Risks",
    description:
      "Many platforms lack robust security measures, leaving users vulnerable.",
  },
  {
    title: "Privacy Concerns",
    description:
      "Traditional financial tools often require users to compromise their personal data.",
  },
  {
    title: "Information Overload",
    description:
      "Keeping up with rapidly evolving DeFi opportunities is a daunting task.",
  },
];
function Gf() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Challenges",
      }),
      a.jsx("div", {
        className: "grid gap-4 md:grid-cols-2",
        children: Zf.map((e, t) =>
          a.jsxs(
            "div",
            {
              className: "backdrop-blur-sm bg-white/5 p-4 rounded-lg",
              children: [
                a.jsx("h4", {
                  className: "font-medium mb-2",
                  children: e.title,
                }),
                a.jsx("p", {
                  className: "text-white/80",
                  children: e.description,
                }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function Yf() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Opportunities",
      }),
      a.jsx("p", {
        children:
          "AgentZero addresses these gaps by combining AI-driven automation with robust blockchain technology, giving users a secure and efficient way to navigate the DeFi ecosystem. With increasing demand for privacy and efficiency, AgentZero is positioned to become a leader in the market, catering to both novice and experienced users.",
      }),
    ],
  });
}
function Xf() {
  return a.jsx(Xe, {
    title: "Market Overview",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          children:
            "The global DeFi market has witnessed explosive growth, with billions of dollars locked in decentralized protocols. However, users face challenges such as:",
        }),
        a.jsx(Gf, {}),
        a.jsx(Yf, {}),
      ],
    }),
  });
}
function At({ number: e, title: t }) {
  return a.jsxs("h3", {
    className: "text-xl font-semibold text-[#A3FF21]/90",
    children: [e, ". ", t],
  });
}
function Jf() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 1, title: "User-Created Custom Agents" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "AgentZero allows users to create personalized AI agents that align with their specific financial goals. These agents are tailored to user-defined parameters, including preferred trading strategies, risk levels, and target data sources.",
      }),
    ],
  });
}
const qf = [
    {
      title: "DeFi platforms",
      description:
        "Monitoring token performance, liquidity pools, and market trends.",
    },
    {
      title: "Social Media",
      description:
        "Collecting insights and sentiment analysis from platforms like Telegram and Twitter to identify early project opportunities and trends.",
    },
  ],
  bf = [
    "Agents verify data from multiple sources to minimize inaccuracies.",
    "Risk analysis ensures that decisions align with the user's preferences.",
  ],
  ep = [
    "Identifying tokens with high growth potential.",
    "Highlighting profitable staking or yield farming opportunities.",
    "Determining optimal trading times and conditions.",
  ],
  tp = [
    {
      title: "Non-Custodial Control",
      description:
        "Wallets remain entirely in the user's control, with private keys securely stored on the Akash Network, a decentralized cloud solution ensuring robust security and privacy.",
    },
    {
      title: "Automated Transactions",
      description:
        "The protocol automates trade execution, staking, or portfolio rebalancing according to the user's agent-defined strategies.",
    },
  ],
  np = [
    "User data and wallet keys are encrypted and stored securely on the Akash Network.",
    "AI agents operate in isolated environments to ensure that sensitive information is never exposed.",
  ];
function rp() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 2, title: "Research and Analysis" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "Once deployed, the agents actively gather and analyze data from multiple sources, including:",
      }),
      a.jsx("ul", {
        className: "list-none space-y-3",
        children: qf.map((e, t) =>
          a.jsxs(
            "li",
            {
              className: "flex items-start space-x-3",
              children: [
                a.jsx("span", {
                  className: "text-[#A3FF21] mt-1",
                  children: "•",
                }),
                a.jsxs("div", {
                  children: [
                    a.jsxs("span", {
                      className: "font-medium text-[#A3FF21]/90",
                      children: [e.title, ":"],
                    }),
                    a.jsxs("span", {
                      className: "text-white/80",
                      children: [" ", e.description],
                    }),
                  ],
                }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function lp() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 3, title: "Due Diligence and Decision-Making" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "After collecting data, the agents perform in-depth research, applying AI-driven algorithms to evaluate the credibility, risks, and potential returns of the identified opportunities.",
      }),
      a.jsx("ul", {
        className: "list-none space-y-3",
        children: bf.map((e, t) =>
          a.jsxs(
            "li",
            {
              className: "flex items-start space-x-3",
              children: [
                a.jsx("span", {
                  className: "text-[#A3FF21] mt-1",
                  children: "•",
                }),
                a.jsx("span", { className: "text-white/80", children: e }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function ip() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 4, title: "Generating Decisions" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "Based on their research, the agents generate actionable decisions, such as:",
      }),
      a.jsx("ul", {
        className: "list-none space-y-3",
        children: ep.map((e, t) =>
          a.jsxs(
            "li",
            {
              className: "flex items-start space-x-3",
              children: [
                a.jsx("span", {
                  className: "text-[#A3FF21] mt-1",
                  children: "•",
                }),
                a.jsx("span", { className: "text-white/80", children: e }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function op() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 5, title: "Order Execution" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "The agents execute these decisions through the user's connected wallet, ensuring seamless interaction with DeFi protocols. Key aspects include:",
      }),
      a.jsx("div", {
        className: "grid gap-4 md:grid-cols-2",
        children: tp.map((e, t) =>
          a.jsxs(
            "div",
            {
              className: "backdrop-blur-sm bg-white/5 p-4 rounded-lg",
              children: [
                a.jsx("h4", {
                  className: "font-medium text-[#A3FF21]/90 mb-2",
                  children: e.title,
                }),
                a.jsx("p", {
                  className: "text-white/80",
                  children: e.description,
                }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function up() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 6, title: "Feedback and Optimization" }),
      a.jsx("p", {
        className: "text-white/80",
        children:
          "AgentZero's AI agents continuously learn from outcomes, adapting strategies to market conditions and improving decision-making over time. Users can monitor performance and make real-time adjustments through an intuitive dashboard.",
      }),
    ],
  });
}
function sp() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx(At, { number: 7, title: "Privacy and Security" }),
      a.jsx("p", {
        className: "text-white/80",
        children: "AgentZero is built with privacy at its core:",
      }),
      a.jsx("ul", {
        className: "list-none space-y-3",
        children: np.map((e, t) =>
          a.jsxs(
            "li",
            {
              className: "flex items-start space-x-3",
              children: [
                a.jsx("span", {
                  className: "text-[#A3FF21] mt-1",
                  children: "•",
                }),
                a.jsx("span", { className: "text-white/80", children: e }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function ap() {
  return a.jsx(Xe, {
    title: "How AgentZero Protocol Works",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children:
            "AgentZero operates as a decentralized, AI-powered protocol designed to empower users with customized wealth management agents. Here's a step-by-step explanation of how the protocol functions:",
        }),
        a.jsx(Jf, {}),
        a.jsx(rp, {}),
        a.jsx(lp, {}),
        a.jsx(ip, {}),
        a.jsx(op, {}),
        a.jsx(up, {}),
        a.jsx(sp, {}),
      ],
    }),
  });
}
const cp = [
  {
    title: "AI Agents",
    description:
      "Tailored for standard and advanced DeFi interactions. These agents simplify complex tasks and enable users to focus on their financial goals.",
  },
  {
    title: "AgentZero Token (AGZRO)",
    description:
      "The native ERC20 token that powers the platform. AGZRO integrates seamlessly into the ecosystem, offering utility and incentives.",
  },
  {
    title: "Decentralized Tools",
    description:
      "Integration with DEXs for trading, staking, and liquidity provision. Users can interact with top-tier DeFi protocols directly from the platform.",
  },
  {
    title: "Community Governance",
    description:
      "Token holders influence platform decisions through voting, ensuring that AgentZero evolves in alignment with user needs and preferences.",
  },
  {
    title: "Educational Resources",
    description:
      "Tutorials, guides, and community support to help users maximize the platform's potential.",
  },
];
function dp() {
  return a.jsx("div", {
    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
    children: cp.map((e, t) =>
      a.jsxs(
        "div",
        {
          className:
            "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
          children: [
            a.jsx("h3", {
              className: "text-lg font-semibold text-[#A3FF21]/90 mb-3",
              children: e.title,
            }),
            a.jsx("p", { className: "text-white/80", children: e.description }),
          ],
        },
        t
      )
    ),
  });
}
function fp() {
  return a.jsx(Xe, {
    title: "The Ecosystem",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children:
            "The AgentZero ecosystem is designed to provide a comprehensive suite of tools and features that cater to diverse user needs:",
        }),
        a.jsx(dp, {}),
      ],
    }),
  });
}
const pp = [
  {
    title: "Data Aggregation",
    description:
      "Collecting data from DeFi markets, Telegram channels, and other sources. The agents filter relevant information, ensuring users receive actionable insights.",
  },
  {
    title: "Analysis and Insights",
    description:
      "Identifying trends, sentiment, and opportunities in real time. The AI agents employ advanced algorithms to detect patterns and predict market movements.",
  },
  {
    title: "Automation",
    description:
      "Executing trades, rebalancing portfolios, and managing risks based on user-defined parameters. Automation reduces manual effort and enhances efficiency.",
  },
  {
    title: "Customization",
    description:
      "Allowing users to configure their AI agent's behavior to align with specific financial goals. From risk tolerance to preferred data sources, customization ensures a tailored experience.",
  },
  {
    title: "Performance Tracking",
    description:
      "Users can monitor the performance of their AI agents through detailed analytics and reports. This transparency fosters trust and enables informed decision-making.",
  },
  {
    title: "Security Protocols",
    description:
      "AI agents operate in secure, isolated environments, protecting user data from unauthorized access.",
  },
];
function mp() {
  return a.jsx("div", {
    className: "grid gap-6 md:grid-cols-2",
    children: pp.map((e, t) =>
      a.jsxs(
        "div",
        {
          className:
            "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
          children: [
            a.jsx("h3", {
              className: "text-lg font-semibold text-[#A3FF21]/90 mb-3",
              children: e.title,
            }),
            a.jsx("p", { className: "text-white/80", children: e.description }),
          ],
        },
        t
      )
    ),
  });
}
function hp() {
  return a.jsx(Xe, {
    title: "How AI Agents Work?",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children:
            "AgentZero's AI agents are designed to simplify wealth management by:",
        }),
        a.jsx(mp, {}),
      ],
    }),
  });
}
const Zl = {
    name: "AgentZero AI",
    ticker: "AGZRO",
    totalSupply: "100,000,000 AGZRO",
  },
  vp = [
    {
      title: "Foundation Allocation",
      description:
        "10% allocated to the foundation for long-term development and ecosystem growth.",
      percentage: 10,
    },
  ],
  gp = [
    {
      title: "Transaction Tax",
      description:
        "A 5% tax applies to all buy and sell transactions, distributed to:",
      subFeatures: [
        "Team Development",
        "Marketing Initiatives",
        "Platform Enhancements",
      ],
    },
  ];
function yp() {
  return a.jsx("div", {
    className:
      "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10",
    children: a.jsxs("div", {
      className: "grid gap-4 md:grid-cols-3",
      children: [
        a.jsxs("div", {
          children: [
            a.jsx("h3", {
              className: "text-sm text-white/60",
              children: "Token Name",
            }),
            a.jsx("p", {
              className: "text-lg font-semibold text-[#A3FF21]",
              children: Zl.name,
            }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("h3", {
              className: "text-sm text-white/60",
              children: "Ticker",
            }),
            a.jsx("p", {
              className: "text-lg font-semibold text-[#A3FF21]",
              children: Zl.ticker,
            }),
          ],
        }),
        a.jsxs("div", {
          children: [
            a.jsx("h3", {
              className: "text-sm text-white/60",
              children: "Total Supply",
            }),
            a.jsx("p", {
              className: "text-lg font-semibold text-[#A3FF21]",
              children: Zl.totalSupply,
            }),
          ],
        }),
      ],
    }),
  });
}
function wp() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Distribution",
      }),
      a.jsx("div", {
        className: "grid gap-4",
        children: vp.map((e, t) =>
          a.jsxs(
            "div",
            {
              className:
                "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
              children: [
                a.jsxs("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [
                    a.jsx("h4", {
                      className: "font-medium",
                      children: e.title,
                    }),
                    a.jsxs("span", {
                      className: "text-[#A3FF21]",
                      children: [e.percentage, "%"],
                    }),
                  ],
                }),
                a.jsx("p", {
                  className: "text-white/80",
                  children: e.description,
                }),
              ],
            },
            t
          )
        ),
      }),
    ],
  });
}
function xp() {
  return a.jsxs("div", {
    className: "space-y-4",
    children: [
      a.jsx("h3", {
        className: "text-xl font-semibold text-[#A3FF21]/90",
        children: "Transaction Tax",
      }),
      gp.map((e, t) =>
        a.jsxs(
          "div",
          {
            className:
              "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10",
            children: [
              a.jsx("h4", { className: "font-medium mb-2", children: e.title }),
              a.jsx("p", {
                className: "text-white/80 mb-4",
                children: e.description,
              }),
              a.jsx("ul", {
                className: "list-disc list-inside space-y-2",
                children: e.subFeatures.map((n, r) =>
                  a.jsx("li", { className: "text-white/80", children: n }, r)
                ),
              }),
            ],
          },
          t
        )
      ),
    ],
  });
}
function kp() {
  return a.jsx(Xe, {
    title: "Tokenomics",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [a.jsx(yp, {}), a.jsx(wp, {}), a.jsx(xp, {})],
    }),
  });
}
function Sp({ title: e, description: t }) {
  return a.jsxs("div", {
    className:
      "backdrop-blur-sm bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
    children: [
      a.jsx("h3", {
        className: "text-lg font-semibold text-[#A3FF21]/90 mb-3",
        children: e,
      }),
      a.jsx("p", { className: "text-white/80", children: t }),
    ],
  });
}
function ic({ features: e, columns: t = 2 }) {
  return a.jsx("div", {
    className: `grid gap-6 md:grid-cols-${t}`,
    children: e.map((n, r) => a.jsx(Sp, { ...n }, r)),
  });
}
const Ep = [
  {
    title: "Burn Mechanism",
    description:
      "A percentage of transaction tax is used to reduce the circulating supply over time, driving scarcity and value appreciation.",
  },
  {
    title: "Staking Rewards",
    description:
      "Users earn tokens by staking, incentivizing long-term holding and ecosystem participation.",
  },
  {
    title: "Utility Growth",
    description:
      "Increasing demand for AGZRO through its ecosystem utility, including AI agent subscriptions, governance, and premium features.",
  },
  {
    title: "Sustainable Development",
    description:
      "Revenue from transaction taxes and subscriptions is reinvested into platform improvements and community rewards.",
  },
];
function Np() {
  return a.jsx(ic, { features: Ep, columns: 2 });
}
function Cp() {
  return a.jsx(Xe, {
    title: "Deflationary Ecosystem",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children:
            "AgentZero employs a deflationary model to enhance token value:",
        }),
        a.jsx(Np, {}),
      ],
    }),
  });
}
const jp = [
  {
    title: "Subscription Fees",
    description:
      "Users pay in AGZRO for premium AI agent features and customizations. This creates a recurring revenue stream that supports platform sustainability.",
  },
  {
    title: "Transaction Tax",
    description:
      "A portion of transaction fees funds platform development, marketing, and liquidity, ensuring long-term stability and growth.",
  },
  {
    title: "Staking and Governance",
    description:
      "Incentives and rewards for token holders who actively participate in the ecosystem. Staking enhances user engagement and aligns interests with platform success.",
  },
  {
    title: "Partnerships",
    description:
      "Collaborations with DeFi platforms and data providers to expand the ecosystem's reach and capabilities.",
  },
];
function _p() {
  return a.jsx(ic, { features: jp, columns: 2 });
}
function zp() {
  return a.jsx(Xe, {
    title: "Business Model",
    children: a.jsxs("div", {
      className: "space-y-8",
      children: [
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children: "AgentZero's revenue model includes:",
        }),
        a.jsx(_p, {}),
        a.jsx("p", {
          className: "text-lg leading-relaxed",
          children:
            "By aligning our revenue streams with user incentives, AgentZero ensures a sustainable and community-driven growth trajectory. The business model emphasizes transparency, innovation, and user-centric development.",
        }),
      ],
    }),
  });
}
const Pp = {
  introduction: a.jsx(Vf, {}),
  vision: a.jsx(Kf, {}),
  market: a.jsx(Xf, {}),
  "how-it-works": a.jsx(ap, {}),
  ecosystem: a.jsx(fp, {}),
  "ai-agents": a.jsx(hp, {}),
  tokenomics: a.jsx(kp, {}),
  deflationary: a.jsx(Cp, {}),
  business: a.jsx(zp, {}),
};
function Tp({ activeSection: e }) {
  return a.jsx("div", { className: "p-8 lg:p-12 space-y-8", children: Pp[e] });
}
class Fp {
  constructor(t, n, r, l) {
    (this.canvasWidth = t),
      (this.canvasHeight = n),
      (this.baseColor = r),
      (this.opacityMultiplier = l),
      (this.x = Math.random() * t),
      (this.y = Math.random() * n),
      (this.size = Math.random() * 2),
      (this.opacity = Math.random()),
      (this.speed = 0.1 + Math.random() * 0.2),
      (this.pulseSpeed = 0.02 + Math.random() * 0.02);
  }
  update() {
    (this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.02),
      (this.opacity = Math.max(0, Math.min(1, this.opacity))),
      (this.y += this.speed),
      this.y > this.canvasHeight &&
        ((this.y = 0), (this.x = Math.random() * this.canvasWidth));
  }
  draw(t) {
    t.beginPath(),
      t.arc(this.x, this.y, this.size, 0, Math.PI * 2),
      (t.fillStyle = `${this.baseColor}, ${
        this.opacity * this.opacityMultiplier
      })`),
      t.fill();
  }
}
function Lp(e) {
  const t = De.useRef(null);
  return (
    De.useEffect(() => {
      const n = t.current;
      if (!n) return;
      const r = n.getContext("2d");
      if (!r) return;
      const l = () => {
        (n.width = window.innerWidth),
          (n.height = window.innerHeight),
          (r.fillStyle = "#151516"),
          r.fillRect(0, 0, n.width, n.height);
      };
      l();
      const i = () =>
        Array.from(
          { length: e.starCount },
          () => new Fp(n.width, n.height, e.baseColor, e.opacityMultiplier)
        );
      let o = i();
      const u = () => {
          (r.fillStyle = "rgba(21, 21, 22, 0.1)"),
            r.fillRect(0, 0, n.width, n.height),
            o.forEach((d) => {
              d.update(), d.draw(r);
            }),
            requestAnimationFrame(u);
        },
        s = () => {
          l(), (o = i());
        };
      return (
        window.addEventListener("resize", s),
        u(),
        () => {
          window.removeEventListener("resize", s);
        }
      );
    }, [e]),
    t
  );
}
function Ap() {
  const e = Lp({
    starCount: 150,
    baseColor: "rgba(163, 255, 33",
    opacityMultiplier: 0.5,
  });
  return a.jsx("canvas", {
    ref: e,
    className: "fixed inset-0 w-full h-full pointer-events-none z-0",
  });
}
function Rp() {
  return a.jsxs("div", {
    className: "relative w-32 h-32 animate-pulse",
    children: [
      a.jsx("img", {
        src: "/agent.png",
        alt: "AgentZero Logo",
        className: "w-full h-full object-contain",
      }),
      a.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-[#151516] to-transparent opacity-20",
      }),
    ],
  });
}
function Ip() {
  return a.jsxs("div", {
    className: "text-center space-y-2",
    children: [
      a.jsx("h1", {
        className: "text-4xl font-bold text-white",
        children: "AgentZero",
      }),
      a.jsx("p", {
        className: "text-xl text-[#A3FF21]/90",
        children: "Whitepaper V1",
      }),
    ],
  });
}
function Mp() {
  return a.jsx("button", {
    className: `px-8 py-3 bg-[#A3FF21] text-[#151516] rounded-lg font-semibold 
        transform transition-all duration-200 hover:scale-105 hover:bg-[#A3FF21]/90
        focus:outline-none focus:ring-2 focus:ring-[#A3FF21]/50 focus:ring-offset-2 focus:ring-offset-[#151516]`,
    onClick: () => {
      const e = document.getElementById("page-loader");
      e &&
        (e.classList.add("fade-out"),
        setTimeout(() => {
          e.style.display = "none";
        }, 500));
    },
    children: "Read Whitepaper",
  });
}
function Dp() {
  return a.jsx("div", {
    id: "page-loader",
    className:
      "fixed inset-0 bg-[#151516] flex flex-col items-center justify-center z-50",
    children: a.jsxs("div", {
      className: "flex flex-col items-center space-y-8",
      children: [a.jsx(Rp, {}), a.jsx(Ip, {}), a.jsx(Mp, {})],
    }),
  });
}
function Op() {
  const [e, t] = De.useState(!1),
    [n, r] = De.useState("introduction");
  return a.jsxs(a.Fragment, {
    children: [
      a.jsx(Dp, {}),
      a.jsxs("div", {
        className:
          "relative min-h-screen bg-[#151516] text-white overflow-x-hidden",
        children: [
          a.jsx(Ap, {}),
          a.jsxs("div", {
            className: "relative z-10",
            children: [
              a.jsx($f, {
                isOpen: e,
                setIsOpen: t,
                activeSection: n,
                setActiveSection: r,
              }),
              a.jsx("div", {
                className: "lg:ml-64 relative",
                children: a.jsx(Tp, { activeSection: n }),
              }),
              e &&
                a.jsx("div", {
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 lg:hidden z-30",
                  onClick: () => t(!1),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
lc(document.getElementById("root")).render(
  a.jsx(De.StrictMode, { children: a.jsx(Op, {}) })
);
