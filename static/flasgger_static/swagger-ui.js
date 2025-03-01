!(function webpackUniversalModuleDefinition(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.SwaggerUICore = t())
        : (e.SwaggerUICore = t());
})(this, () =>
  (() => {
    "use strict";
    var e = {
        158: (e) => {
          e.exports = require("buffer");
        },
      },
      t = {};
    function __webpack_require__(r) {
      var a = t[r];
      if (void 0 !== a) return a.exports;
      var n = (t[r] = { exports: {} });
      return e[r](n, n.exports, __webpack_require__), n.exports;
    }
    (__webpack_require__.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return __webpack_require__.d(t, { a: t }), t;
    }),
      (__webpack_require__.d = (e, t) => {
        for (var r in t)
          __webpack_require__.o(t, r) &&
            !__webpack_require__.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (__webpack_require__.o = (e, t) =>
        Object.prototype.hasOwnProperty.call(e, t)),
      (__webpack_require__.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        __webpack_require__.d(r, { default: () => To });
        var e = {};
        __webpack_require__.r(e),
          __webpack_require__.d(e, {
            CLEAR: () => D,
            CLEAR_BY: () => K,
            NEW_AUTH_ERR: () => V,
            NEW_SPEC_ERR: () => J,
            NEW_SPEC_ERR_BATCH: () => $,
            NEW_THROWN_ERR: () => R,
            NEW_THROWN_ERR_BATCH: () => T,
            clear: () => clear,
            clearBy: () => clearBy,
            newAuthErr: () => newAuthErr,
            newSpecErr: () => newSpecErr,
            newSpecErrBatch: () => newSpecErrBatch,
            newThrownErr: () => newThrownErr,
            newThrownErrBatch: () => newThrownErrBatch,
          });
        var t = {};
        __webpack_require__.r(t),
          __webpack_require__.d(t, {
            AUTHORIZE: () => he,
            AUTHORIZE_OAUTH2: () => fe,
            CONFIGURE_AUTH: () => Ee,
            LOGOUT: () => ge,
            PRE_AUTHORIZE_OAUTH2: () => ye,
            RESTORE_AUTHORIZATION: () => _e,
            SHOW_AUTH_POPUP: () => de,
            VALIDATE: () => Se,
            authPopup: () => authPopup,
            authorize: () => authorize,
            authorizeAccessCodeWithBasicAuthentication: () =>
              authorizeAccessCodeWithBasicAuthentication,
            authorizeAccessCodeWithFormParams: () =>
              authorizeAccessCodeWithFormParams,
            authorizeApplication: () => authorizeApplication,
            authorizeOauth2: () => authorizeOauth2,
            authorizeOauth2WithPersistOption: () =>
              authorizeOauth2WithPersistOption,
            authorizePassword: () => authorizePassword,
            authorizeRequest: () => authorizeRequest,
            authorizeWithPersistOption: () => authorizeWithPersistOption,
            configureAuth: () => configureAuth,
            logout: () => logout,
            logoutWithPersistOption: () => logoutWithPersistOption,
            persistAuthorizationIfNeeded: () => persistAuthorizationIfNeeded,
            preAuthorizeImplicit: () => preAuthorizeImplicit,
            restoreAuthorization: () => restoreAuthorization,
            showDefinitions: () => showDefinitions,
          });
        var a = {};
        __webpack_require__.r(a),
          __webpack_require__.d(a, {
            authorized: () => xe,
            definitionsForRequirements: () => definitionsForRequirements,
            definitionsToAuthorize: () => Ce,
            getConfigs: () => Oe,
            getDefinitionsByNames: () => getDefinitionsByNames,
            isAuthorized: () => isAuthorized,
            shownDefinitions: () => be,
          });
        var n = {};
        __webpack_require__.r(n),
          __webpack_require__.d(n, {
            TOGGLE_CONFIGS: () => Te,
            UPDATE_CONFIGS: () => Re,
            downloadConfig: () => downloadConfig,
            getConfigByUrl: () => getConfigByUrl,
            loaded: () => actions_loaded,
            toggle: () => toggle,
            update: () => update,
          });
        var s = {};
        __webpack_require__.r(s), __webpack_require__.d(s, { get: () => get });
        var o = {};
        __webpack_require__.r(o),
          __webpack_require__.d(o, { transform: () => transform });
        var l = {};
        __webpack_require__.r(l),
          __webpack_require__.d(l, {
            transform: () => parameter_oneof_transform,
          });
        var c = {};
        __webpack_require__.r(c),
          __webpack_require__.d(c, {
            allErrors: () => Ye,
            lastError: () => Qe,
          });
        var i = {};
        __webpack_require__.r(i),
          __webpack_require__.d(i, {
            SHOW: () => nt,
            UPDATE_FILTER: () => rt,
            UPDATE_LAYOUT: () => tt,
            UPDATE_MODE: () => at,
            changeMode: () => changeMode,
            show: () => actions_show,
            updateFilter: () => updateFilter,
            updateLayout: () => updateLayout,
          });
        var p = {};
        __webpack_require__.r(p),
          __webpack_require__.d(p, {
            current: () => current,
            currentFilter: () => currentFilter,
            isShown: () => isShown,
            showSummary: () => ot,
            whatMode: () => whatMode,
          });
        var m = {};
        __webpack_require__.r(m),
          __webpack_require__.d(m, {
            taggedOperations: () => taggedOperations,
          });
        var u = {};
        __webpack_require__.r(u),
          __webpack_require__.d(u, {
            requestSnippetGenerator_curl_bash: () =>
              requestSnippetGenerator_curl_bash,
            requestSnippetGenerator_curl_cmd: () =>
              requestSnippetGenerator_curl_cmd,
            requestSnippetGenerator_curl_powershell: () =>
              requestSnippetGenerator_curl_powershell,
          });
        var d = {};
        __webpack_require__.r(d),
          __webpack_require__.d(d, {
            getActiveLanguage: () => it,
            getDefaultExpanded: () => pt,
            getGenerators: () => ct,
            getSnippetGenerators: () => getSnippetGenerators,
          });
        var h = {};
        __webpack_require__.r(h),
          __webpack_require__.d(h, {
            JsonSchemaArrayItemFile: () => JsonSchemaArrayItemFile,
            JsonSchemaArrayItemText: () => JsonSchemaArrayItemText,
            JsonSchemaForm: () => JsonSchemaForm,
            JsonSchema_array: () => JsonSchema_array,
            JsonSchema_boolean: () => JsonSchema_boolean,
            JsonSchema_object: () => JsonSchema_object,
            JsonSchema_string: () => JsonSchema_string,
          });
        var g = {};
        __webpack_require__.r(g),
          __webpack_require__.d(g, {
            allowTryItOutFor: () => allowTryItOutFor,
            basePath: () => cr,
            canExecuteScheme: () => canExecuteScheme,
            consumes: () => ar,
            consumesOptionsFor: () => consumesOptionsFor,
            contentTypeValues: () => contentTypeValues,
            currentProducesFor: () => currentProducesFor,
            definitions: () => lr,
            externalDocs: () => Yt,
            findDefinition: () => findDefinition,
            getOAS3RequiredRequestBodyContentType: () =>
              getOAS3RequiredRequestBodyContentType,
            getParameter: () => getParameter,
            hasHost: () => fr,
            host: () => ir,
            info: () => Gt,
            isMediaTypeSchemaPropertiesEqual: () =>
              isMediaTypeSchemaPropertiesEqual,
            isOAS3: () => Xt,
            lastError: () => Kt,
            mutatedRequestFor: () => mutatedRequestFor,
            mutatedRequests: () => yr,
            operationScheme: () => operationScheme,
            operationWithMeta: () => operationWithMeta,
            operations: () => rr,
            operationsWithRootInherited: () => mr,
            operationsWithTags: () => dr,
            parameterInclusionSettingFor: () => parameterInclusionSettingFor,
            parameterValues: () => parameterValues,
            parameterWithMeta: () => parameterWithMeta,
            parameterWithMetaByIdentity: () => parameterWithMetaByIdentity,
            parametersIncludeIn: () => parametersIncludeIn,
            parametersIncludeType: () => parametersIncludeType,
            paths: () => er,
            produces: () => nr,
            producesOptionsFor: () => producesOptionsFor,
            requestFor: () => requestFor,
            requests: () => gr,
            responseFor: () => responseFor,
            responses: () => hr,
            schemes: () => pr,
            security: () => sr,
            securityDefinitions: () => or,
            semver: () => Zt,
            spec: () => spec,
            specJS: () => Ft,
            specJson: () => Bt,
            specJsonWithResolvedSubtrees: () => Ht,
            specResolved: () => Wt,
            specResolvedSubtree: () => specResolvedSubtree,
            specSource: () => zt,
            specStr: () => Ut,
            tagDetails: () => tagDetails,
            taggedOperations: () => selectors_taggedOperations,
            tags: () => ur,
            url: () => Lt,
            validOperationMethods: () => tr,
            validateBeforeExecute: () => validateBeforeExecute,
            validationErrors: () => validationErrors,
            version: () => Qt,
          });
        var y = {};
        __webpack_require__.r(y),
          __webpack_require__.d(y, {
            CLEAR_REQUEST: () => Jr,
            CLEAR_RESPONSE: () => Tr,
            CLEAR_VALIDATE_PARAMS: () => $r,
            LOG_REQUEST: () => Rr,
            SET_MUTATED_REQUEST: () => Mr,
            SET_REQUEST: () => Pr,
            SET_RESPONSE: () => jr,
            SET_SCHEME: () => Lr,
            UPDATE_EMPTY_PARAM_INCLUSION: () => Ir,
            UPDATE_JSON: () => kr,
            UPDATE_OPERATION_META_VALUE: () => Vr,
            UPDATE_PARAM: () => Ar,
            UPDATE_RESOLVED: () => Dr,
            UPDATE_RESOLVED_SUBTREE: () => Kr,
            UPDATE_SPEC: () => Or,
            UPDATE_URL: () => Nr,
            VALIDATE_PARAMS: () => qr,
            changeConsumesValue: () => changeConsumesValue,
            changeParam: () => changeParam,
            changeParamByIdentity: () => changeParamByIdentity,
            changeProducesValue: () => changeProducesValue,
            clearRequest: () => clearRequest,
            clearResponse: () => clearResponse,
            clearValidateParams: () => clearValidateParams,
            execute: () => actions_execute,
            executeRequest: () => executeRequest,
            invalidateResolvedSubtreeCache: () =>
              invalidateResolvedSubtreeCache,
            logRequest: () => logRequest,
            parseToJson: () => parseToJson,
            requestResolvedSubtree: () => requestResolvedSubtree,
            resolveSpec: () => resolveSpec,
            setMutatedRequest: () => setMutatedRequest,
            setRequest: () => setRequest,
            setResponse: () => setResponse,
            setScheme: () => setScheme,
            updateEmptyParamInclusion: () => updateEmptyParamInclusion,
            updateJsonSpec: () => updateJsonSpec,
            updateResolved: () => updateResolved,
            updateResolvedSubtree: () => updateResolvedSubtree,
            updateSpec: () => updateSpec,
            updateUrl: () => updateUrl,
            validateParams: () => validateParams,
          });
        var f = {};
        __webpack_require__.r(f),
          __webpack_require__.d(f, {
            executeRequest: () => wrap_actions_executeRequest,
            updateJsonSpec: () => wrap_actions_updateJsonSpec,
            updateSpec: () => wrap_actions_updateSpec,
            validateParams: () => wrap_actions_validateParams,
          });
        var S = {};
        __webpack_require__.r(S),
          __webpack_require__.d(S, {
            Button: () => Button,
            Col: () => Col,
            Collapse: () => Collapse,
            Container: () => Container,
            Input: () => Input,
            Link: () => Link,
            Row: () => Row,
            Select: () => Select,
            TextArea: () => TextArea,
          });
        var E = {};
        __webpack_require__.r(E),
          __webpack_require__.d(E, {
            basePath: () => wn,
            consumes: () => bn,
            definitions: () => Sn,
            findDefinition: () => fn,
            hasHost: () => En,
            host: () => vn,
            produces: () => Cn,
            schemes: () => xn,
            securityDefinitions: () => _n,
            validOperationMethods: () => wrap_selectors_validOperationMethods,
          });
        var _ = {};
        __webpack_require__.r(_),
          __webpack_require__.d(_, { definitionsToAuthorize: () => On });
        var v = {};
        __webpack_require__.r(v),
          __webpack_require__.d(v, {
            callbacksOperations: () => An,
            findSchema: () => findSchema,
            isOAS3: () => selectors_isOAS3,
            isOAS30: () => selectors_isOAS30,
            isSwagger2: () => selectors_isSwagger2,
            servers: () => kn,
          });
        var w = {};
        __webpack_require__.r(w),
          __webpack_require__.d(w, {
            CLEAR_REQUEST_BODY_VALIDATE_ERROR: () => Xn,
            CLEAR_REQUEST_BODY_VALUE: () => Gn,
            SET_REQUEST_BODY_VALIDATE_ERROR: () => Hn,
            UPDATE_ACTIVE_EXAMPLES_MEMBER: () => zn,
            UPDATE_REQUEST_BODY_INCLUSION: () => Un,
            UPDATE_REQUEST_BODY_VALUE: () => Kn,
            UPDATE_REQUEST_BODY_VALUE_RETAIN_FLAG: () => Ln,
            UPDATE_REQUEST_CONTENT_TYPE: () => Bn,
            UPDATE_RESPONSE_CONTENT_TYPE: () => Fn,
            UPDATE_SELECTED_SERVER: () => Dn,
            UPDATE_SERVER_VARIABLE_VALUE: () => Wn,
            clearRequestBodyValidateError: () => clearRequestBodyValidateError,
            clearRequestBodyValue: () => clearRequestBodyValue,
            initRequestBodyValidateError: () => initRequestBodyValidateError,
            setActiveExamplesMember: () => setActiveExamplesMember,
            setRequestBodyInclusion: () => setRequestBodyInclusion,
            setRequestBodyValidateError: () => setRequestBodyValidateError,
            setRequestBodyValue: () => setRequestBodyValue,
            setRequestContentType: () => setRequestContentType,
            setResponseContentType: () => setResponseContentType,
            setRetainRequestBodyValueFlag: () => setRetainRequestBodyValueFlag,
            setSelectedServer: () => setSelectedServer,
            setServerVariableValue: () => setServerVariableValue,
          });
        var b = {};
        __webpack_require__.r(b),
          __webpack_require__.d(b, {
            activeExamplesMember: () => ss,
            hasUserEditedBody: () => rs,
            requestBodyErrors: () => ns,
            requestBodyInclusionSetting: () => as,
            requestBodyValue: () => es,
            requestContentType: () => os,
            responseContentType: () => ls,
            selectDefaultRequestBodyValue: () => selectDefaultRequestBodyValue,
            selectedServer: () => Zn,
            serverEffectiveValue: () => ps,
            serverVariableValue: () => cs,
            serverVariables: () => is,
            shouldRetainRequestBodyValue: () => ts,
            validOperationMethods: () => us,
            validateBeforeExecute: () => ms,
            validateShallowRequired: () => validateShallowRequired,
          });
        const C = require("react");
        var x = __webpack_require__.n(C);
        const O = require("redux"),
          N = require("immutable");
        var k = __webpack_require__.n(N);
        const A = require("deep-extend");
        var I = __webpack_require__.n(A);
        const q = require("redux-immutable"),
          j = require("serialize-error"),
          P = require("lodash/merge");
        var M = __webpack_require__.n(P);
        const R = "err_new_thrown_err",
          T = "err_new_thrown_err_batch",
          J = "err_new_spec_err",
          $ = "err_new_spec_err_batch",
          V = "err_new_auth_err",
          D = "err_clear",
          K = "err_clear_by";
        function newThrownErr(e) {
          return { type: R, payload: (0, j.serializeError)(e) };
        }
        function newThrownErrBatch(e) {
          return { type: T, payload: e };
        }
        function newSpecErr(e) {
          return { type: J, payload: e };
        }
        function newSpecErrBatch(e) {
          return { type: $, payload: e };
        }
        function newAuthErr(e) {
          return { type: V, payload: e };
        }
        function clear(e = {}) {
          return { type: D, payload: e };
        }
        function clearBy(e = () => !0) {
          return { type: K, payload: e };
        }
        const L = (function makeWindow() {
            var e = {
              location: {},
              history: {},
              open: () => {},
              close: () => {},
              File: function () {},
              FormData: function () {},
            };
            if ("undefined" == typeof window) return e;
            try {
              e = window;
              for (var t of ["File", "Blob", "FormData"])
                t in window && (e[t] = window[t]);
            } catch (e) {
              console.error(e);
            }
            return e;
          })(),
          U = require("@braintree/sanitize-url"),
          z =
            (require("lodash/camelCase"),
            require("lodash/upperFirst"),
            require("lodash/memoize"));
        var B = __webpack_require__.n(z);
        const F = require("lodash/find");
        var W = __webpack_require__.n(F);
        const H = require("lodash/some");
        var X = __webpack_require__.n(H);
        const G = require("lodash/eq");
        var Y = __webpack_require__.n(G);
        const Q = require("lodash/isFunction");
        var Z = __webpack_require__.n(Q);
        const ee = require("css.escape");
        var te = __webpack_require__.n(ee);
        const re = require("randombytes");
        var ae = __webpack_require__.n(re);
        const ne = require("sha.js");
        var se = __webpack_require__.n(ne);
        const oe = k().Set.of(
          "type",
          "format",
          "items",
          "default",
          "maximum",
          "exclusiveMaximum",
          "minimum",
          "exclusiveMinimum",
          "maxLength",
          "minLength",
          "pattern",
          "maxItems",
          "minItems",
          "uniqueItems",
          "enum",
          "multipleOf",
        );
        function getParameterSchema(e, { isOAS3: t } = {}) {
          if (!k().Map.isMap(e))
            return { schema: k().Map(), parameterContentMediaType: null };
          if (!t)
            return "body" === e.get("in")
              ? {
                  schema: e.get("schema", k().Map()),
                  parameterContentMediaType: null,
                }
              : {
                  schema: e.filter((e, t) => oe.includes(t)),
                  parameterContentMediaType: null,
                };
          if (e.get("content")) {
            const t = e.get("content", k().Map({})).keySeq().first();
            return {
              schema: e.getIn(["content", t, "schema"], k().Map()),
              parameterContentMediaType: t,
            };
          }
          return {
            schema: e.get("schema") ? e.get("schema", k().Map()) : k().Map(),
            parameterContentMediaType: null,
          };
        }
        var le = __webpack_require__(158).Buffer;
        const ce = "default",
          isImmutable = (e) => k().Iterable.isIterable(e);
        function objectify(e) {
          return isObject(e) ? (isImmutable(e) ? e.toJS() : e) : {};
        }
        function fromJSOrdered(e) {
          if (isImmutable(e)) return e;
          if (e instanceof L.File) return e;
          if (!isObject(e)) return e;
          if (Array.isArray(e)) return k().Seq(e).map(fromJSOrdered).toList();
          if (Z()(e.entries)) {
            const t = (function createObjWithHashedKeys(e) {
              if (!Z()(e.entries)) return e;
              const t = {},
                r = "_**[]",
                a = {};
              for (let n of e.entries())
                if (t[n[0]] || (a[n[0]] && a[n[0]].containsMultiple)) {
                  if (!a[n[0]]) {
                    (a[n[0]] = { containsMultiple: !0, length: 1 }),
                      (t[`${n[0]}${r}${a[n[0]].length}`] = t[n[0]]),
                      delete t[n[0]];
                  }
                  (a[n[0]].length += 1),
                    (t[`${n[0]}${r}${a[n[0]].length}`] = n[1]);
                } else t[n[0]] = n[1];
              return t;
            })(e);
            return k().OrderedMap(t).map(fromJSOrdered);
          }
          return k().OrderedMap(e).map(fromJSOrdered);
        }
        function normalizeArray(e) {
          return Array.isArray(e) ? e : [e];
        }
        function isFn(e) {
          return "function" == typeof e;
        }
        function isObject(e) {
          return !!e && "object" == typeof e;
        }
        function isFunc(e) {
          return "function" == typeof e;
        }
        function isArray(e) {
          return Array.isArray(e);
        }
        const ie = B();
        function objMap(e, t) {
          return Object.keys(e).reduce((r, a) => ((r[a] = t(e[a], a)), r), {});
        }
        function objReduce(e, t) {
          return Object.keys(e).reduce((r, a) => {
            let n = t(e[a], a);
            return n && "object" == typeof n && Object.assign(r, n), r;
          }, {});
        }
        function systemThunkMiddleware(e) {
          return ({ dispatch: t, getState: r }) =>
            (t) =>
            (r) =>
              "function" == typeof r ? r(e()) : t(r);
        }
        function validateValueBySchema(e, t, r, a, n) {
          if (!t) return [];
          let s = [],
            o = t.get("nullable"),
            l = t.get("required"),
            c = t.get("maximum"),
            i = t.get("minimum"),
            p = t.get("type"),
            m = t.get("format"),
            u = t.get("maxLength"),
            d = t.get("minLength"),
            h = t.get("uniqueItems"),
            g = t.get("maxItems"),
            y = t.get("minItems"),
            f = t.get("pattern");
          const S = r || !0 === l,
            E = null != e,
            _ = S || (E && "array" === p) || !(!S && !E),
            v = o && null === e;
          if (S && !E && !v && !a && !p)
            return s.push("Required field is not provided"), s;
          if (v || !p || !_) return [];
          let w = "string" === p && e,
            b = "array" === p && Array.isArray(e) && e.length,
            C = "array" === p && k().List.isList(e) && e.count();
          const x = [
            w,
            b,
            C,
            "array" === p && "string" == typeof e && e,
            "file" === p && e instanceof L.File,
            "boolean" === p && (e || !1 === e),
            "number" === p && (e || 0 === e),
            "integer" === p && (e || 0 === e),
            "object" === p && "object" == typeof e && null !== e,
            "object" === p && "string" == typeof e && e,
          ].some((e) => !!e);
          if (S && !x && !a) return s.push("Required field is not provided"), s;
          if ("object" === p && (null === n || "application/json" === n)) {
            let r = e;
            if ("string" == typeof e)
              try {
                r = JSON.parse(e);
              } catch (e) {
                return s.push("Parameter string value must be valid JSON"), s;
              }
            t &&
              t.has("required") &&
              isFunc(l.isList) &&
              l.isList() &&
              l.forEach((e) => {
                void 0 === r[e] &&
                  s.push({ propKey: e, error: "Required property not found" });
              }),
              t &&
                t.has("properties") &&
                t.get("properties").forEach((e, t) => {
                  const o = validateValueBySchema(r[t], e, !1, a, n);
                  s.push(...o.map((e) => ({ propKey: t, error: e })));
                });
          }
          if (f) {
            let t = ((e, t) => {
              if (!new RegExp(t).test(e))
                return "Value must follow pattern " + t;
            })(e, f);
            t && s.push(t);
          }
          if (y && "array" === p) {
            let t = ((e, t) => {
              if ((!e && t >= 1) || (e && e.length < t))
                return `Array must contain at least ${t} item${1 === t ? "" : "s"}`;
            })(e, y);
            t && s.push(t);
          }
          if (g && "array" === p) {
            let t = ((e, t) => {
              if (e && e.length > t)
                return `Array must not contain more then ${t} item${1 === t ? "" : "s"}`;
            })(e, g);
            t && s.push({ needRemove: !0, error: t });
          }
          if (h && "array" === p) {
            let t = ((e, t) => {
              if (e && ("true" === t || !0 === t)) {
                const t = (0, N.fromJS)(e),
                  r = t.toSet();
                if (e.length > r.size) {
                  let e = (0, N.Set)();
                  if (
                    (t.forEach((r, a) => {
                      t.filter((e) =>
                        isFunc(e.equals) ? e.equals(r) : e === r,
                      ).size > 1 && (e = e.add(a));
                    }),
                    0 !== e.size)
                  )
                    return e
                      .map((e) => ({
                        index: e,
                        error: "No duplicates allowed.",
                      }))
                      .toArray();
                }
              }
            })(e, h);
            t && s.push(...t);
          }
          if (u || 0 === u) {
            let t = ((e, t) => {
              if (e.length > t)
                return `Value must be no longer than ${t} character${1 !== t ? "s" : ""}`;
            })(e, u);
            t && s.push(t);
          }
          if (d) {
            let t = ((e, t) => {
              if (e.length < t)
                return `Value must be at least ${t} character${1 !== t ? "s" : ""}`;
            })(e, d);
            t && s.push(t);
          }
          if (c || 0 === c) {
            let t = ((e, t) => {
              if (e > t) return `Value must be less than ${t}`;
            })(e, c);
            t && s.push(t);
          }
          if (i || 0 === i) {
            let t = ((e, t) => {
              if (e < t) return `Value must be greater than ${t}`;
            })(e, i);
            t && s.push(t);
          }
          if ("string" === p) {
            let t;
            if (
              ((t =
                "date-time" === m
                  ? ((e) => {
                      if (isNaN(Date.parse(e)))
                        return "Value must be a DateTime";
                    })(e)
                  : "uuid" === m
                    ? ((e) => {
                        if (
                          ((e = e.toString().toLowerCase()),
                          !/^[{(]?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}[)}]?$/.test(
                            e,
                          ))
                        )
                          return "Value must be a Guid";
                      })(e)
                    : ((e) => {
                        if (e && "string" != typeof e)
                          return "Value must be a string";
                      })(e)),
              !t)
            )
              return s;
            s.push(t);
          } else if ("boolean" === p) {
            let t = ((e) => {
              if ("true" !== e && "false" !== e && !0 !== e && !1 !== e)
                return "Value must be a boolean";
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ("number" === p) {
            let t = ((e) => {
              if (!/^-?\d+(\.?\d+)?$/.test(e)) return "Value must be a number";
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ("integer" === p) {
            let t = ((e) => {
              if (!/^-?\d+$/.test(e)) return "Value must be an integer";
            })(e);
            if (!t) return s;
            s.push(t);
          } else if ("array" === p) {
            if (!b && !C) return s;
            e &&
              e.forEach((e, r) => {
                const o = validateValueBySchema(e, t.get("items"), !1, a, n);
                s.push(...o.map((e) => ({ index: r, error: e })));
              });
          } else if ("file" === p) {
            let t = ((e) => {
              if (e && !(e instanceof L.File)) return "Value must be a file";
            })(e);
            if (!t) return s;
            s.push(t);
          }
          return s;
        }
        const btoa = (e) => {
            let t;
            return (
              (t = e instanceof le ? e : le.from(e.toString(), "utf-8")),
              t.toString("base64")
            );
          },
          pe = {
            operationsSorter: {
              alpha: (e, t) => e.get("path").localeCompare(t.get("path")),
              method: (e, t) => e.get("method").localeCompare(t.get("method")),
            },
            tagsSorter: { alpha: (e, t) => e.localeCompare(t) },
          },
          buildFormData = (e) => {
            let t = [];
            for (let r in e) {
              let a = e[r];
              void 0 !== a &&
                "" !== a &&
                t.push(
                  [r, "=", encodeURIComponent(a).replace(/%20/g, "+")].join(""),
                );
            }
            return t.join("&");
          },
          shallowEqualKeys = (e, t, r) => !!W()(r, (r) => Y()(e[r], t[r]));
        function sanitizeUrl(e) {
          return "string" != typeof e || "" === e ? "" : (0, U.sanitizeUrl)(e);
        }
        function requiresValidationURL(e) {
          return !(
            !e ||
            e.indexOf("localhost") >= 0 ||
            e.indexOf("127.0.0.1") >= 0 ||
            "none" === e
          );
        }
        const createDeepLinkPath = (e) =>
            "string" == typeof e || e instanceof String
              ? e.trim().replace(/\s/g, "%20")
              : "",
          escapeDeepLinkPath = (e) =>
            te()(createDeepLinkPath(e).replace(/%20/g, "_")),
          getExtensions = (e) => e.filter((e, t) => /^x-/.test(t)),
          getCommonExtensions = (e) =>
            e.filter((e, t) =>
              /^pattern|maxLength|minLength|maximum|minimum/.test(t),
            );
        function deeplyStripKey(e, t, r = () => !0) {
          if ("object" != typeof e || Array.isArray(e) || null === e || !t)
            return e;
          const a = Object.assign({}, e);
          return (
            Object.keys(a).forEach((e) => {
              e === t && r(a[e], e)
                ? delete a[e]
                : (a[e] = deeplyStripKey(a[e], t, r));
            }),
            a
          );
        }
        function stringify(e) {
          if ("string" == typeof e) return e;
          if (
            (e && e.toJS && (e = e.toJS()), "object" == typeof e && null !== e)
          )
            try {
              return JSON.stringify(e, null, 2);
            } catch (t) {
              return String(e);
            }
          return null == e ? "" : e.toString();
        }
        function paramToIdentifier(
          e,
          { returnAll: t = !1, allowHashes: r = !0 } = {},
        ) {
          if (!k().Map.isMap(e))
            throw new Error(
              "paramToIdentifier: received a non-Im.Map parameter as input",
            );
          const a = e.get("name"),
            n = e.get("in");
          let s = [];
          return (
            e &&
              e.hashCode &&
              n &&
              a &&
              r &&
              s.push(`${n}.${a}.hash-${e.hashCode()}`),
            n && a && s.push(`${n}.${a}`),
            s.push(a),
            t ? s : s[0] || ""
          );
        }
        function paramToValue(e, t) {
          return paramToIdentifier(e, { returnAll: !0 })
            .map((e) => t[e])
            .filter((e) => void 0 !== e)[0];
        }
        function b64toB64UrlEncoded(e) {
          return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        }
        const isEmptyValue = (e) => !e || !(!isImmutable(e) || !e.isEmpty()),
          idFn = (e) => e;
        class Store {
          constructor(e = {}) {
            I()(
              this,
              {
                state: {},
                plugins: [],
                system: {
                  configs: {},
                  fn: {},
                  components: {},
                  rootInjects: {},
                  statePlugins: {},
                },
                boundSystem: {},
                toolbox: {},
              },
              e,
            ),
              (this.getSystem = this._getSystem.bind(this)),
              (this.store = (function configureStore(e, t, r) {
                return (function createStoreWithMiddleware(e, t, r) {
                  let a = [systemThunkMiddleware(r)];
                  const n = L.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || O.compose;
                  return (0, O.createStore)(
                    e,
                    t,
                    n((0, O.applyMiddleware)(...a)),
                  );
                })(e, t, r);
              })(idFn, (0, N.fromJS)(this.state), this.getSystem)),
              this.buildSystem(!1),
              this.register(this.plugins);
          }
          getStore() {
            return this.store;
          }
          register(e, t = !0) {
            var r = combinePlugins(e, this.getSystem());
            systemExtend(this.system, r), t && this.buildSystem();
            callAfterLoad.call(this.system, e, this.getSystem()) &&
              this.buildSystem();
          }
          buildSystem(e = !0) {
            let t = this.getStore().dispatch,
              r = this.getStore().getState;
            (this.boundSystem = Object.assign(
              {},
              this.getRootInjects(),
              this.getWrappedAndBoundActions(t),
              this.getWrappedAndBoundSelectors(r, this.getSystem),
              this.getStateThunks(r),
              this.getFn(),
              this.getConfigs(),
            )),
              e && this.rebuildReducer();
          }
          _getSystem() {
            return this.boundSystem;
          }
          getRootInjects() {
            return Object.assign(
              {
                getSystem: this.getSystem,
                getStore: this.getStore.bind(this),
                getComponents: this.getComponents.bind(this),
                getState: this.getStore().getState,
                getConfigs: this._getConfigs.bind(this),
                Im: k(),
                React: x(),
              },
              this.system.rootInjects || {},
            );
          }
          _getConfigs() {
            return this.system.configs;
          }
          getConfigs() {
            return { configs: this.system.configs };
          }
          setConfigs(e) {
            this.system.configs = e;
          }
          rebuildReducer() {
            this.store.replaceReducer(
              (function buildReducer(e) {
                return (function allReducers(e) {
                  let t = Object.keys(e).reduce(
                    (t, r) => (
                      (t[r] = (function makeReducer(e) {
                        return (t = new N.Map(), r) => {
                          if (!e) return t;
                          let a = e[r.type];
                          if (a) {
                            const e = wrapWithTryCatch(a)(t, r);
                            return null === e ? t : e;
                          }
                          return t;
                        };
                      })(e[r])),
                      t
                    ),
                    {},
                  );
                  if (!Object.keys(t).length) return idFn;
                  return (0, q.combineReducers)(t);
                })(objMap(e, (e) => e.reducers));
              })(this.system.statePlugins),
            );
          }
          getType(e) {
            let t = e[0].toUpperCase() + e.slice(1);
            return objReduce(this.system.statePlugins, (r, a) => {
              let n = r[e];
              if (n) return { [a + t]: n };
            });
          }
          getSelectors() {
            return this.getType("selectors");
          }
          getActions() {
            return objMap(this.getType("actions"), (e) =>
              objReduce(e, (e, t) => {
                if (isFn(e)) return { [t]: e };
              }),
            );
          }
          getWrappedAndBoundActions(e) {
            return objMap(this.getBoundActions(e), (e, t) => {
              let r = this.system.statePlugins[t.slice(0, -7)].wrapActions;
              return r
                ? objMap(e, (e, t) => {
                    let a = r[t];
                    return a
                      ? (Array.isArray(a) || (a = [a]),
                        a.reduce((e, t) => {
                          let newAction = (...r) =>
                            t(e, this.getSystem())(...r);
                          if (!isFn(newAction))
                            throw new TypeError(
                              "wrapActions needs to return a function that returns a new function (ie the wrapped action)",
                            );
                          return wrapWithTryCatch(newAction);
                        }, e || Function.prototype))
                      : e;
                  })
                : e;
            });
          }
          getWrappedAndBoundSelectors(e, t) {
            return objMap(this.getBoundSelectors(e, t), (t, r) => {
              let a = [r.slice(0, -9)],
                n = this.system.statePlugins[a].wrapSelectors;
              return n
                ? objMap(t, (t, r) => {
                    let s = n[r];
                    return s
                      ? (Array.isArray(s) || (s = [s]),
                        s.reduce((t, r) => {
                          let wrappedSelector = (...n) =>
                            r(t, this.getSystem())(e().getIn(a), ...n);
                          if (!isFn(wrappedSelector))
                            throw new TypeError(
                              "wrapSelector needs to return a function that returns a new function (ie the wrapped action)",
                            );
                          return wrappedSelector;
                        }, t || Function.prototype))
                      : t;
                  })
                : t;
            });
          }
          getStates(e) {
            return Object.keys(this.system.statePlugins).reduce(
              (t, r) => ((t[r] = e.get(r)), t),
              {},
            );
          }
          getStateThunks(e) {
            return Object.keys(this.system.statePlugins).reduce(
              (t, r) => ((t[r] = () => e().get(r)), t),
              {},
            );
          }
          getFn() {
            return { fn: this.system.fn };
          }
          getComponents(e) {
            const t = this.system.components[e];
            return Array.isArray(t)
              ? t.reduce((e, t) => t(e, this.getSystem()))
              : void 0 !== e
                ? this.system.components[e]
                : this.system.components;
          }
          getBoundSelectors(e, t) {
            return objMap(this.getSelectors(), (r, a) => {
              let n = [a.slice(0, -9)];
              return objMap(r, (r) => (...a) => {
                let s = wrapWithTryCatch(r).apply(null, [e().getIn(n), ...a]);
                return (
                  "function" == typeof s && (s = wrapWithTryCatch(s)(t())), s
                );
              });
            });
          }
          getBoundActions(e) {
            e = e || this.getStore().dispatch;
            const t = this.getActions(),
              process = (e) =>
                "function" != typeof e
                  ? objMap(e, (e) => process(e))
                  : (...t) => {
                      var r = null;
                      try {
                        r = e(...t);
                      } catch (e) {
                        r = {
                          type: R,
                          error: !0,
                          payload: (0, j.serializeError)(e),
                        };
                      } finally {
                        return r;
                      }
                    };
            return objMap(t, (t) => (0, O.bindActionCreators)(process(t), e));
          }
          getMapStateToProps() {
            return () => Object.assign({}, this.getSystem());
          }
          getMapDispatchToProps(e) {
            return (t) =>
              I()({}, this.getWrappedAndBoundActions(t), this.getFn(), e);
          }
        }
        function combinePlugins(e, t) {
          return isObject(e) && !isArray(e)
            ? M()({}, e)
            : isFunc(e)
              ? combinePlugins(e(t), t)
              : isArray(e)
                ? e
                    .map((e) => combinePlugins(e, t))
                    .reduce(systemExtend, { components: t.getComponents() })
                : {};
        }
        function callAfterLoad(e, t, { hasLoaded: r } = {}) {
          let a = r;
          return (
            isObject(e) &&
              !isArray(e) &&
              "function" == typeof e.afterLoad &&
              ((a = !0), wrapWithTryCatch(e.afterLoad).call(this, t)),
            isFunc(e)
              ? callAfterLoad.call(this, e(t), t, { hasLoaded: a })
              : isArray(e)
                ? e.map((e) => callAfterLoad.call(this, e, t, { hasLoaded: a }))
                : a
          );
        }
        function systemExtend(e = {}, t = {}) {
          if (!isObject(e)) return {};
          if (!isObject(t)) return e;
          t.wrapComponents &&
            (objMap(t.wrapComponents, (r, a) => {
              const n = e.components && e.components[a];
              n && Array.isArray(n)
                ? ((e.components[a] = n.concat([r])),
                  delete t.wrapComponents[a])
                : n && ((e.components[a] = [n, r]), delete t.wrapComponents[a]);
            }),
            Object.keys(t.wrapComponents).length || delete t.wrapComponents);
          const { statePlugins: r } = e;
          if (isObject(r))
            for (let e in r) {
              const a = r[e];
              if (!isObject(a)) continue;
              const { wrapActions: n, wrapSelectors: s } = a;
              if (isObject(n))
                for (let r in n) {
                  let a = n[r];
                  Array.isArray(a) || ((a = [a]), (n[r] = a)),
                    t &&
                      t.statePlugins &&
                      t.statePlugins[e] &&
                      t.statePlugins[e].wrapActions &&
                      t.statePlugins[e].wrapActions[r] &&
                      (t.statePlugins[e].wrapActions[r] = n[r].concat(
                        t.statePlugins[e].wrapActions[r],
                      ));
                }
              if (isObject(s))
                for (let r in s) {
                  let a = s[r];
                  Array.isArray(a) || ((a = [a]), (s[r] = a)),
                    t &&
                      t.statePlugins &&
                      t.statePlugins[e] &&
                      t.statePlugins[e].wrapSelectors &&
                      t.statePlugins[e].wrapSelectors[r] &&
                      (t.statePlugins[e].wrapSelectors[r] = s[r].concat(
                        t.statePlugins[e].wrapSelectors[r],
                      ));
                }
            }
          return I()(e, t);
        }
        function wrapWithTryCatch(e, { logErrors: t = !0 } = {}) {
          return "function" != typeof e
            ? e
            : function (...r) {
                try {
                  return e.call(this, ...r);
                } catch (e) {
                  return t && console.error(e), null;
                }
              };
        }
        const me = require("url-parse");
        var ue = __webpack_require__.n(me);
        const de = "show_popup",
          he = "authorize",
          ge = "logout",
          ye = "pre_authorize_oauth2",
          fe = "authorize_oauth2",
          Se = "validate",
          Ee = "configure_auth",
          _e = "restore_authorization";
        function showDefinitions(e) {
          return { type: de, payload: e };
        }
        function authorize(e) {
          return { type: he, payload: e };
        }
        const authorizeWithPersistOption =
          (e) =>
          ({ authActions: t }) => {
            t.authorize(e), t.persistAuthorizationIfNeeded();
          };
        function logout(e) {
          return { type: ge, payload: e };
        }
        const logoutWithPersistOption =
            (e) =>
            ({ authActions: t }) => {
              t.logout(e), t.persistAuthorizationIfNeeded();
            },
          preAuthorizeImplicit =
            (e) =>
            ({ authActions: t, errActions: r }) => {
              let { auth: a, token: n, isValid: s } = e,
                { schema: o, name: l } = a,
                c = o.get("flow");
              delete L.swaggerUIRedirectOauth2,
                "accessCode" === c ||
                  s ||
                  r.newAuthErr({
                    authId: l,
                    source: "auth",
                    level: "warning",
                    message:
                      "Authorization may be unsafe, passed state was changed in server Passed state wasn't returned from auth server",
                  }),
                n.error
                  ? r.newAuthErr({
                      authId: l,
                      source: "auth",
                      level: "error",
                      message: JSON.stringify(n),
                    })
                  : t.authorizeOauth2WithPersistOption({ auth: a, token: n });
            };
        function authorizeOauth2(e) {
          return { type: fe, payload: e };
        }
        const authorizeOauth2WithPersistOption =
            (e) =>
            ({ authActions: t }) => {
              t.authorizeOauth2(e), t.persistAuthorizationIfNeeded();
            },
          authorizePassword =
            (e) =>
            ({ authActions: t }) => {
              let {
                  schema: r,
                  name: a,
                  username: n,
                  password: s,
                  passwordType: o,
                  clientId: l,
                  clientSecret: c,
                } = e,
                i = {
                  grant_type: "password",
                  scope: e.scopes.join(" "),
                  username: n,
                  password: s,
                },
                p = {};
              switch (o) {
                case "request-body":
                  !(function setClientIdAndSecret(e, t, r) {
                    t && Object.assign(e, { client_id: t });
                    r && Object.assign(e, { client_secret: r });
                  })(i, l, c);
                  break;
                case "basic":
                  p.Authorization = "Basic " + btoa(l + ":" + c);
                  break;
                default:
                  console.warn(
                    `Warning: invalid passwordType ${o} was passed, not including client id and secret`,
                  );
              }
              return t.authorizeRequest({
                body: buildFormData(i),
                url: r.get("tokenUrl"),
                name: a,
                headers: p,
                query: {},
                auth: e,
              });
            };
        const authorizeApplication =
            (e) =>
            ({ authActions: t }) => {
              let {
                  schema: r,
                  scopes: a,
                  name: n,
                  clientId: s,
                  clientSecret: o,
                } = e,
                l = { Authorization: "Basic " + btoa(s + ":" + o) },
                c = { grant_type: "client_credentials", scope: a.join(" ") };
              return t.authorizeRequest({
                body: buildFormData(c),
                name: n,
                url: r.get("tokenUrl"),
                auth: e,
                headers: l,
              });
            },
          authorizeAccessCodeWithFormParams =
            ({ auth: e, redirectUrl: t }) =>
            ({ authActions: r }) => {
              let {
                  schema: a,
                  name: n,
                  clientId: s,
                  clientSecret: o,
                  codeVerifier: l,
                } = e,
                c = {
                  grant_type: "authorization_code",
                  code: e.code,
                  client_id: s,
                  client_secret: o,
                  redirect_uri: t,
                  code_verifier: l,
                };
              return r.authorizeRequest({
                body: buildFormData(c),
                name: n,
                url: a.get("tokenUrl"),
                auth: e,
              });
            },
          authorizeAccessCodeWithBasicAuthentication =
            ({ auth: e, redirectUrl: t }) =>
            ({ authActions: r }) => {
              let {
                  schema: a,
                  name: n,
                  clientId: s,
                  clientSecret: o,
                  codeVerifier: l,
                } = e,
                c = { Authorization: "Basic " + btoa(s + ":" + o) },
                i = {
                  grant_type: "authorization_code",
                  code: e.code,
                  client_id: s,
                  redirect_uri: t,
                  code_verifier: l,
                };
              return r.authorizeRequest({
                body: buildFormData(i),
                name: n,
                url: a.get("tokenUrl"),
                auth: e,
                headers: c,
              });
            },
          authorizeRequest =
            (e) =>
            ({
              fn: t,
              getConfigs: r,
              authActions: a,
              errActions: n,
              oas3Selectors: s,
              specSelectors: o,
              authSelectors: l,
            }) => {
              let c,
                {
                  body: i,
                  query: p = {},
                  headers: m = {},
                  name: u,
                  url: d,
                  auth: h,
                } = e,
                { additionalQueryStringParams: g } = l.getConfigs() || {};
              if (o.isOAS3()) {
                let e = s.serverEffectiveValue(s.selectedServer());
                c = ue()(d, e, !0);
              } else c = ue()(d, o.url(), !0);
              "object" == typeof g && (c.query = Object.assign({}, c.query, g));
              const y = c.toString();
              let f = Object.assign(
                {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/x-www-form-urlencoded",
                  "X-Requested-With": "XMLHttpRequest",
                },
                m,
              );
              t.fetch({
                url: y,
                method: "post",
                headers: f,
                query: p,
                body: i,
                requestInterceptor: r().requestInterceptor,
                responseInterceptor: r().responseInterceptor,
              })
                .then(function (e) {
                  let t = JSON.parse(e.data),
                    r = t && (t.error || ""),
                    s = t && (t.parseError || "");
                  e.ok
                    ? r || s
                      ? n.newAuthErr({
                          authId: u,
                          level: "error",
                          source: "auth",
                          message: JSON.stringify(t),
                        })
                      : a.authorizeOauth2WithPersistOption({
                          auth: h,
                          token: t,
                        })
                    : n.newAuthErr({
                        authId: u,
                        level: "error",
                        source: "auth",
                        message: e.statusText,
                      });
                })
                .catch((e) => {
                  let t = new Error(e).message;
                  if (e.response && e.response.data) {
                    const r = e.response.data;
                    try {
                      const e = "string" == typeof r ? JSON.parse(r) : r;
                      e.error && (t += `, error: ${e.error}`),
                        e.error_description &&
                          (t += `, description: ${e.error_description}`);
                    } catch (e) {}
                  }
                  n.newAuthErr({
                    authId: u,
                    level: "error",
                    source: "auth",
                    message: t,
                  });
                });
            };
        function configureAuth(e) {
          return { type: Ee, payload: e };
        }
        function restoreAuthorization(e) {
          return { type: _e, payload: e };
        }
        const persistAuthorizationIfNeeded =
            () =>
            ({ authSelectors: e, getConfigs: t }) => {
              if (!t().persistAuthorization) return;
              const r = e.authorized().toJS();
              localStorage.setItem("authorized", JSON.stringify(r));
            },
          authPopup = (e, t) => () => {
            (L.swaggerUIRedirectOauth2 = t), L.open(e);
          },
          ve = {
            [de]: (e, { payload: t }) => e.set("showDefinitions", t),
            [he]: (e, { payload: t }) => {
              let r = (0, N.fromJS)(t),
                a = e.get("authorized") || (0, N.Map)();
              return (
                r.entrySeq().forEach(([t, r]) => {
                  if (!isFunc(r.getIn)) return e.set("authorized", a);
                  let n = r.getIn(["schema", "type"]);
                  if ("apiKey" === n || "http" === n) a = a.set(t, r);
                  else if ("basic" === n) {
                    let e = r.getIn(["value", "username"]),
                      n = r.getIn(["value", "password"]);
                    (a = a.setIn([t, "value"], {
                      username: e,
                      header: "Basic " + btoa(e + ":" + n),
                    })),
                      (a = a.setIn([t, "schema"], r.get("schema")));
                  }
                }),
                e.set("authorized", a)
              );
            },
            [fe]: (e, { payload: t }) => {
              let r,
                { auth: a, token: n } = t;
              (a.token = Object.assign({}, n)), (r = (0, N.fromJS)(a));
              let s = e.get("authorized") || (0, N.Map)();
              return (s = s.set(r.get("name"), r)), e.set("authorized", s);
            },
            [ge]: (e, { payload: t }) => {
              let r = e.get("authorized").withMutations((e) => {
                t.forEach((t) => {
                  e.delete(t);
                });
              });
              return e.set("authorized", r);
            },
            [Ee]: (e, { payload: t }) => e.set("configs", t),
            [_e]: (e, { payload: t }) =>
              e.set("authorized", (0, N.fromJS)(t.authorized)),
          },
          we = require("reselect"),
          state = (e) => e,
          be = (0, we.createSelector)(state, (e) => e.get("showDefinitions")),
          Ce = (0, we.createSelector)(state, () => ({ specSelectors: e }) => {
            let t = e.securityDefinitions() || (0, N.Map)({}),
              r = (0, N.List)();
            return (
              t.entrySeq().forEach(([e, t]) => {
                let a = (0, N.Map)();
                (a = a.set(e, t)), (r = r.push(a));
              }),
              r
            );
          }),
          getDefinitionsByNames =
            (e, t) =>
            ({ specSelectors: e }) => {
              console.warn(
                "WARNING: getDefinitionsByNames is deprecated and will be removed in the next major version.",
              );
              let r = e.securityDefinitions(),
                a = (0, N.List)();
              return (
                t.valueSeq().forEach((e) => {
                  let t = (0, N.Map)();
                  e.entrySeq().forEach(([e, a]) => {
                    let n,
                      s = r.get(e);
                    "oauth2" === s.get("type") &&
                      a.size &&
                      ((n = s.get("scopes")),
                      n.keySeq().forEach((e) => {
                        a.contains(e) || (n = n.delete(e));
                      }),
                      (s = s.set("allowedScopes", n))),
                      (t = t.set(e, s));
                  }),
                    (a = a.push(t));
                }),
                a
              );
            },
          definitionsForRequirements =
            (e, t = (0, N.List)()) =>
            ({ authSelectors: e }) => {
              const r = e.definitionsToAuthorize() || (0, N.List)();
              let a = (0, N.List)();
              return (
                r.forEach((e) => {
                  let r = t.find((t) => t.get(e.keySeq().first()));
                  r &&
                    (e.forEach((t, a) => {
                      if ("oauth2" === t.get("type")) {
                        const n = r.get(a);
                        let s = t.get("scopes");
                        N.List.isList(n) &&
                          N.Map.isMap(s) &&
                          (s.keySeq().forEach((e) => {
                            n.contains(e) || (s = s.delete(e));
                          }),
                          (e = e.set(a, t.set("scopes", s))));
                      }
                    }),
                    (a = a.push(e)));
                }),
                a
              );
            },
          xe = (0, we.createSelector)(
            state,
            (e) => e.get("authorized") || (0, N.Map)(),
          ),
          isAuthorized =
            (e, t) =>
            ({ authSelectors: e }) => {
              let r = e.authorized();
              return N.List.isList(t)
                ? !!t.toJS().filter(
                    (e) =>
                      -1 ===
                      Object.keys(e)
                        .map((e) => !!r.get(e))
                        .indexOf(!1),
                  ).length
                : null;
            },
          Oe = (0, we.createSelector)(state, (e) => e.get("configs")),
          execute =
            (e, { authSelectors: t, specSelectors: r }) =>
            ({ path: a, method: n, operation: s, extras: o }) => {
              let l = {
                authorized: t.authorized() && t.authorized().toJS(),
                definitions:
                  r.securityDefinitions() && r.securityDefinitions().toJS(),
                specSecurity: r.security() && r.security().toJS(),
              };
              return e({
                path: a,
                method: n,
                operation: s,
                securities: l,
                ...o,
              });
            },
          loaded = (e, t) => (r) => {
            const { getConfigs: a, authActions: n } = t,
              s = a();
            if ((e(r), s.persistAuthorization)) {
              const e = localStorage.getItem("authorized");
              e && n.restoreAuthorization({ authorized: JSON.parse(e) });
            }
          },
          wrap_actions_authorize = (e, t) => (r) => {
            e(r);
            if (t.getConfigs().persistAuthorization)
              try {
                const [{ schema: e, value: t }] = Object.values(r),
                  a = "apiKey" === e.get("type"),
                  n = "cookie" === e.get("in");
                a &&
                  n &&
                  (document.cookie = `${e.get("name")}=${t}; SameSite=None; Secure`);
              } catch (e) {
                console.error(
                  "Error persisting cookie based apiKey in document.cookie.",
                  e,
                );
              }
          },
          wrap_actions_logout = (e, t) => (r) => {
            const a = t.getConfigs(),
              n = t.authSelectors.authorized();
            try {
              a.persistAuthorization &&
                Array.isArray(r) &&
                r.forEach((e) => {
                  const t = n.get(e, {}),
                    r = "apiKey" === t.getIn(["schema", "type"]),
                    a = "cookie" === t.getIn(["schema", "in"]);
                  if (r && a) {
                    const e = t.getIn(["schema", "name"]);
                    document.cookie = `${e}=; Max-Age=-99999999`;
                  }
                });
            } catch (e) {
              console.error(
                "Error deleting cookie based apiKey from document.cookie.",
                e,
              );
            }
            e(r);
          },
          Ne = require("prop-types");
        var ke = __webpack_require__.n(Ne);
        const Ae = require("lodash/omit");
        var Ie = __webpack_require__.n(Ae);
        class LockAuthIcon extends x().Component {
          mapStateToProps(e, t) {
            return { state: e, ownProps: Ie()(t, Object.keys(t.getSystem())) };
          }
          render() {
            const { getComponent: e, ownProps: t } = this.props,
              r = e("LockIcon");
            return x().createElement(r, t);
          }
        }
        const qe = LockAuthIcon;
        class UnlockAuthIcon extends x().Component {
          mapStateToProps(e, t) {
            return { state: e, ownProps: Ie()(t, Object.keys(t.getSystem())) };
          }
          render() {
            const { getComponent: e, ownProps: t } = this.props,
              r = e("UnlockIcon");
            return x().createElement(r, t);
          }
        }
        const je = UnlockAuthIcon;
        function auth() {
          return {
            afterLoad(e) {
              (this.rootInjects = this.rootInjects || {}),
                (this.rootInjects.initOAuth = e.authActions.configureAuth),
                (this.rootInjects.preauthorizeApiKey = preauthorizeApiKey.bind(
                  null,
                  e,
                )),
                (this.rootInjects.preauthorizeBasic = preauthorizeBasic.bind(
                  null,
                  e,
                ));
            },
            components: {
              LockAuthIcon: qe,
              UnlockAuthIcon: je,
              LockAuthOperationIcon: qe,
              UnlockAuthOperationIcon: je,
            },
            statePlugins: {
              auth: {
                reducers: ve,
                actions: t,
                selectors: a,
                wrapActions: {
                  authorize: wrap_actions_authorize,
                  logout: wrap_actions_logout,
                },
              },
              configs: { wrapActions: { loaded } },
              spec: { wrapActions: { execute } },
            },
          };
        }
        function preauthorizeBasic(e, t, r, a) {
          const {
              authActions: { authorize: n },
              specSelectors: { specJson: s, isOAS3: o },
            } = e,
            l = o()
              ? ["components", "securitySchemes"]
              : ["securityDefinitions"],
            c = s().getIn([...l, t]);
          return c
            ? n({
                [t]: { value: { username: r, password: a }, schema: c.toJS() },
              })
            : null;
        }
        function preauthorizeApiKey(e, t, r) {
          const {
              authActions: { authorize: a },
              specSelectors: { specJson: n, isOAS3: s },
            } = e,
            o = s()
              ? ["components", "securitySchemes"]
              : ["securityDefinitions"],
            l = n().getIn([...o, t]);
          return l ? a({ [t]: { value: r, schema: l.toJS() } }) : null;
        }
        const Pe = require("js-yaml");
        var Me = __webpack_require__.n(Pe);
        const Re = "configs_update",
          Te = "configs_toggle";
        function update(e, t) {
          return { type: Re, payload: { [e]: t } };
        }
        function toggle(e) {
          return { type: Te, payload: e };
        }
        const actions_loaded = () => () => {},
          downloadConfig = (e) => (t) => {
            const {
              fn: { fetch: r },
            } = t;
            return r(e);
          },
          getConfigByUrl = (e, t) => (r) => {
            const { specActions: a, configsActions: n } = r;
            if (e) return n.downloadConfig(e).then(next, next);
            function next(n) {
              n instanceof Error || n.status >= 400
                ? (a.updateLoadingStatus("failedConfig"),
                  a.updateLoadingStatus("failedConfig"),
                  a.updateUrl(""),
                  console.error(n.statusText + " " + e.url),
                  t(null))
                : t(
                    ((e, t) => {
                      try {
                        return Me().load(e);
                      } catch (e) {
                        return t && t.errActions.newThrownErr(new Error(e)), {};
                      }
                    })(n.text, r),
                  );
            }
          },
          get = (e, t) => e.getIn(Array.isArray(t) ? t : [t]),
          Je = {
            [Re]: (e, t) => e.merge((0, N.fromJS)(t.payload)),
            [Te]: (e, t) => {
              const r = t.payload,
                a = e.get(r);
              return e.set(r, !a);
            },
          };
        function configsPlugin() {
          return {
            statePlugins: {
              configs: { reducers: Je, actions: n, selectors: s },
            },
          };
        }
        const setHash = (e) =>
            e
              ? history.pushState(null, null, `#${e}`)
              : (window.location.hash = ""),
          $e = require("zenscroll");
        var Ve = __webpack_require__.n($e);
        const De = "layout_scroll_to",
          Ke = "layout_clear_scroll";
        const Le = {
            fn: {
              getScrollParent: function getScrollParent(e, t) {
                const r = document.documentElement;
                let a = getComputedStyle(e);
                const n = "absolute" === a.position,
                  s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
                if ("fixed" === a.position) return r;
                for (let t = e; (t = t.parentElement); )
                  if (
                    ((a = getComputedStyle(t)),
                    (!n || "static" !== a.position) &&
                      s.test(a.overflow + a.overflowY + a.overflowX))
                  )
                    return t;
                return r;
              },
            },
            statePlugins: {
              layout: {
                actions: {
                  scrollToElement: (e, t) => (r) => {
                    try {
                      (t = t || r.fn.getScrollParent(e)),
                        Ve().createScroller(t).to(e);
                    } catch (e) {
                      console.error(e);
                    }
                  },
                  scrollTo: (e) => ({
                    type: De,
                    payload: Array.isArray(e) ? e : [e],
                  }),
                  clearScrollTo: () => ({ type: Ke }),
                  readyToScroll: (e, t) => (r) => {
                    const a = r.layoutSelectors.getScrollToKey();
                    k().is(a, (0, N.fromJS)(e)) &&
                      (r.layoutActions.scrollToElement(t),
                      r.layoutActions.clearScrollTo());
                  },
                  parseDeepLinkHash:
                    (e) =>
                    ({
                      layoutActions: t,
                      layoutSelectors: r,
                      getConfigs: a,
                    }) => {
                      if (a().deepLinking && e) {
                        let a = e.slice(1);
                        "!" === a[0] && (a = a.slice(1)),
                          "/" === a[0] && (a = a.slice(1));
                        const n = a.split("/").map((e) => e || ""),
                          s = r.isShownKeyFromUrlHashArray(n),
                          [o, l = "", c = ""] = s;
                        if ("operations" === o) {
                          const e = r.isShownKeyFromUrlHashArray([l]);
                          l.indexOf("_") > -1 &&
                            (console.warn(
                              "Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.",
                            ),
                            t.show(
                              e.map((e) => e.replace(/_/g, " ")),
                              !0,
                            )),
                            t.show(e, !0);
                        }
                        (l.indexOf("_") > -1 || c.indexOf("_") > -1) &&
                          (console.warn(
                            "Warning: escaping deep link whitespace with `_` will be unsupported in v4.0, use `%20` instead.",
                          ),
                          t.show(
                            s.map((e) => e.replace(/_/g, " ")),
                            !0,
                          )),
                          t.show(s, !0),
                          t.scrollTo(s);
                      }
                    },
                },
                selectors: {
                  getScrollToKey: (e) => e.get("scrollToKey"),
                  isShownKeyFromUrlHashArray(e, t) {
                    const [r, a] = t;
                    return a
                      ? ["operations", r, a]
                      : r
                        ? ["operations-tag", r]
                        : [];
                  },
                  urlHashArrayFromIsShownKey(e, t) {
                    let [r, a, n] = t;
                    return "operations" == r
                      ? [a, n]
                      : "operations-tag" == r
                        ? [a]
                        : [];
                  },
                },
                reducers: {
                  [De]: (e, t) => e.set("scrollToKey", k().fromJS(t.payload)),
                  [Ke]: (e) => e.delete("scrollToKey"),
                },
                wrapActions: {
                  show:
                    (e, { getConfigs: t, layoutSelectors: r }) =>
                    (...a) => {
                      if ((e(...a), t().deepLinking))
                        try {
                          let [e, t] = a;
                          e = Array.isArray(e) ? e : [e];
                          const n = r.urlHashArrayFromIsShownKey(e);
                          if (!n.length) return;
                          const [s, o] = n;
                          if (!t) return setHash("/");
                          2 === n.length
                            ? setHash(
                                createDeepLinkPath(
                                  `/${encodeURIComponent(s)}/${encodeURIComponent(o)}`,
                                ),
                              )
                            : 1 === n.length &&
                              setHash(
                                createDeepLinkPath(`/${encodeURIComponent(s)}`),
                              );
                        } catch (e) {
                          console.error(e);
                        }
                    },
                },
              },
            },
          },
          Ue = require("react-immutable-proptypes");
        var ze = __webpack_require__.n(Ue);
        const operation_wrapper = (e, t) =>
            class OperationWrapper extends x().Component {
              onLoad = (e) => {
                const { operation: r } = this.props,
                  { tag: a, operationId: n } = r.toObject();
                let { isShownKey: s } = r.toObject();
                (s = s || ["operations", a, n]),
                  t.layoutActions.readyToScroll(s, e);
              };
              render() {
                return x().createElement(
                  "span",
                  { ref: this.onLoad },
                  x().createElement(e, this.props),
                );
              }
            },
          operation_tag_wrapper = (e, t) =>
            class OperationTagWrapper extends x().Component {
              onLoad = (e) => {
                const { tag: r } = this.props,
                  a = ["operations-tag", r];
                t.layoutActions.readyToScroll(a, e);
              };
              render() {
                return x().createElement(
                  "span",
                  { ref: this.onLoad },
                  x().createElement(e, this.props),
                );
              }
            };
        function deep_linking() {
          return [
            Le,
            {
              statePlugins: {
                configs: {
                  wrapActions: {
                    loaded:
                      (e, t) =>
                      (...r) => {
                        e(...r);
                        const a = decodeURIComponent(window.location.hash);
                        t.layoutActions.parseDeepLinkHash(a);
                      },
                  },
                },
              },
              wrapComponents: {
                operation: operation_wrapper,
                OperationTag: operation_tag_wrapper,
              },
            },
          ];
        }
        const Be = require("lodash/reduce");
        var Fe = __webpack_require__.n(Be);
        function transform(e) {
          return e.map((e) => {
            let t = "is not of a type(s)",
              r = e.get("message").indexOf(t);
            if (r > -1) {
              let t = e
                .get("message")
                .slice(r + 19)
                .split(",");
              return e.set(
                "message",
                e.get("message").slice(0, r) +
                  (function makeNewMessage(e) {
                    return e.reduce(
                      (e, t, r, a) =>
                        r === a.length - 1 && a.length > 1
                          ? e + "or " + t
                          : a[r + 1] && a.length > 2
                            ? e + t + ", "
                            : a[r + 1]
                              ? e + t + " "
                              : e + t,
                      "should be a",
                    );
                  })(t),
              );
            }
            return e;
          });
        }
        const We = require("lodash/get");
        var He = __webpack_require__.n(We);
        function parameter_oneof_transform(e, { jsSpec: t }) {
          return e;
        }
        const Xe = [o, l];
        function transformErrors(e) {
          let t = { jsSpec: {} },
            r = Fe()(
              Xe,
              (e, r) => {
                try {
                  return r.transform(e, t).filter((e) => !!e);
                } catch (t) {
                  return console.error("Transformer error:", t), e;
                }
              },
              e,
            );
          return r
            .filter((e) => !!e)
            .map((e) => (!e.get("line") && e.get("path"), e));
        }
        let Ge = { line: 0, level: "error", message: "Unknown error" };
        const Ye = (0, we.createSelector)(
            (e) => e,
            (e) => e.get("errors", (0, N.List)()),
          ),
          Qe = (0, we.createSelector)(Ye, (e) => e.last());
        function err(t) {
          return {
            statePlugins: {
              err: {
                reducers: {
                  [R]: (e, { payload: t }) => {
                    let r = Object.assign(Ge, t, { type: "thrown" });
                    return e
                      .update("errors", (e) =>
                        (e || (0, N.List)()).push((0, N.fromJS)(r)),
                      )
                      .update("errors", (e) => transformErrors(e));
                  },
                  [T]: (e, { payload: t }) => (
                    (t = t.map((e) =>
                      (0, N.fromJS)(Object.assign(Ge, e, { type: "thrown" })),
                    )),
                    e
                      .update("errors", (e) =>
                        (e || (0, N.List)()).concat((0, N.fromJS)(t)),
                      )
                      .update("errors", (e) => transformErrors(e))
                  ),
                  [J]: (e, { payload: t }) => {
                    let r = (0, N.fromJS)(t);
                    return (
                      (r = r.set("type", "spec")),
                      e
                        .update("errors", (e) =>
                          (e || (0, N.List)())
                            .push((0, N.fromJS)(r))
                            .sortBy((e) => e.get("line")),
                        )
                        .update("errors", (e) => transformErrors(e))
                    );
                  },
                  [$]: (e, { payload: t }) => (
                    (t = t.map((e) =>
                      (0, N.fromJS)(Object.assign(Ge, e, { type: "spec" })),
                    )),
                    e
                      .update("errors", (e) =>
                        (e || (0, N.List)()).concat((0, N.fromJS)(t)),
                      )
                      .update("errors", (e) => transformErrors(e))
                  ),
                  [V]: (e, { payload: t }) => {
                    let r = (0, N.fromJS)(Object.assign({}, t));
                    return (
                      (r = r.set("type", "auth")),
                      e
                        .update("errors", (e) =>
                          (e || (0, N.List)()).push((0, N.fromJS)(r)),
                        )
                        .update("errors", (e) => transformErrors(e))
                    );
                  },
                  [D]: (e, { payload: t }) => {
                    if (!t || !e.get("errors")) return e;
                    let r = e.get("errors").filter((e) =>
                      e.keySeq().every((r) => {
                        const a = e.get(r),
                          n = t[r];
                        return !n || a !== n;
                      }),
                    );
                    return e.merge({ errors: r });
                  },
                  [K]: (e, { payload: t }) => {
                    if (!t || "function" != typeof t) return e;
                    let r = e.get("errors").filter((e) => t(e));
                    return e.merge({ errors: r });
                  },
                },
                actions: e,
                selectors: c,
              },
            },
          };
        }
        function opsFilter(e, t) {
          return e.filter((e, r) => -1 !== r.indexOf(t));
        }
        function filter() {
          return { fn: { opsFilter } };
        }
        const Ze = require("@babel/runtime-corejs3/helpers/extends");
        var et = __webpack_require__.n(Ze);
        const arrow_up = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z",
              }),
            ),
          arrow_down = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z",
              }),
            ),
          arrow = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z",
              }),
            ),
          components_close = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z",
              }),
            ),
          copy = ({
            className: e = null,
            width: t = 15,
            height: r = 16,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 15 16",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement(
                "g",
                { transform: "translate(2, -1)" },
                x().createElement("path", {
                  fill: "#ffffff",
                  fillRule: "evenodd",
                  d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z",
                }),
              ),
            ),
          lock = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z",
              }),
            ),
          unlock = ({
            className: e = null,
            width: t = 20,
            height: r = 20,
            ...a
          }) =>
            x().createElement(
              "svg",
              et()(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  className: e,
                  width: t,
                  height: r,
                  "aria-hidden": "true",
                  focusable: "false",
                },
                a,
              ),
              x().createElement("path", {
                d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z",
              }),
            ),
          icons = () => ({
            components: {
              ArrowUpIcon: arrow_up,
              ArrowDownIcon: arrow_down,
              ArrowIcon: arrow,
              CloseIcon: components_close,
              CopyIcon: copy,
              LockIcon: lock,
              UnlockIcon: unlock,
            },
          }),
          tt = "layout_update_layout",
          rt = "layout_update_filter",
          at = "layout_update_mode",
          nt = "layout_show";
        function updateLayout(e) {
          return { type: tt, payload: e };
        }
        function updateFilter(e) {
          return { type: rt, payload: e };
        }
        function actions_show(e, t = !0) {
          return (
            (e = normalizeArray(e)),
            { type: nt, payload: { thing: e, shown: t } }
          );
        }
        function changeMode(e, t = "") {
          return (
            (e = normalizeArray(e)),
            { type: at, payload: { thing: e, mode: t } }
          );
        }
        const st = {
            [tt]: (e, t) => e.set("layout", t.payload),
            [rt]: (e, t) => e.set("filter", t.payload),
            [nt]: (e, t) => {
              const r = t.payload.shown,
                a = (0, N.fromJS)(t.payload.thing);
              return e.update("shown", (0, N.fromJS)({}), (e) => e.set(a, r));
            },
            [at]: (e, t) => {
              let r = t.payload.thing,
                a = t.payload.mode;
              return e.setIn(["modes"].concat(r), (a || "") + "");
            },
          },
          current = (e) => e.get("layout"),
          currentFilter = (e) => e.get("filter"),
          isShown = (e, t, r) => (
            (t = normalizeArray(t)),
            e.get("shown", (0, N.fromJS)({})).get((0, N.fromJS)(t), r)
          ),
          whatMode = (e, t, r = "") => (
            (t = normalizeArray(t)), e.getIn(["modes", ...t], r)
          ),
          ot = (0, we.createSelector)(
            (e) => e,
            (e) => !isShown(e, "editor"),
          ),
          taggedOperations =
            (e, t) =>
            (r, ...a) => {
              let n = e(r, ...a);
              const {
                  fn: s,
                  layoutSelectors: o,
                  getConfigs: l,
                } = t.getSystem(),
                c = l(),
                { maxDisplayedTags: i } = c;
              let p = o.currentFilter();
              return (
                p && !0 !== p && (n = s.opsFilter(n, p)),
                i >= 0 && (n = n.slice(0, i)),
                n
              );
            };
        function plugins_layout() {
          return {
            statePlugins: {
              layout: { reducers: st, actions: i, selectors: p },
              spec: { wrapSelectors: m },
            },
          };
        }
        function logs({ configs: e }) {
          const t = { debug: 0, info: 1, log: 2, warn: 3, error: 4 },
            getLevel = (e) => t[e] || -1;
          let { logLevel: r } = e,
            a = getLevel(r);
          function log(e, ...t) {
            getLevel(e) >= a && console[e](...t);
          }
          return (
            (log.warn = log.bind(null, "warn")),
            (log.error = log.bind(null, "error")),
            (log.info = log.bind(null, "info")),
            (log.debug = log.bind(null, "debug")),
            { rootInjects: { log } }
          );
        }
        let lt = !1;
        function on_complete() {
          return {
            statePlugins: {
              spec: {
                wrapActions: {
                  updateSpec:
                    (e) =>
                    (...t) => ((lt = !0), e(...t)),
                  updateJsonSpec:
                    (e, t) =>
                    (...r) => {
                      const a = t.getConfigs().onComplete;
                      return (
                        lt &&
                          "function" == typeof a &&
                          (setTimeout(a, 0), (lt = !1)),
                        e(...r)
                      );
                    },
                },
              },
            },
          };
        }
        const extractKey = (e) => {
            const t = "_**[]";
            return e.indexOf(t) < 0 ? e : e.split(t)[0].trim();
          },
          escapeShell = (e) =>
            "-d " === e || /^[_\/-]/g.test(e)
              ? e
              : "'" + e.replace(/'/g, "'\\''") + "'",
          escapeCMD = (e) =>
            "-d " ===
            (e = e
              .replace(/\^/g, "^^")
              .replace(/\\"/g, '\\\\"')
              .replace(/"/g, '""')
              .replace(/\n/g, "^\n"))
              ? e.replace(/-d /g, "-d ^\n")
              : /^[_\/-]/g.test(e)
                ? e
                : '"' + e + '"',
          escapePowershell = (e) => {
            if ("-d " === e) return e;
            if (/\n/.test(e)) {
              return `@"\n${e.replace(/`/g, "``").replace(/\$/g, "`$")}\n"@`;
            }
            if (!/^[_\/-]/.test(e)) {
              return `'${e.replace(/'/g, "''")}'`;
            }
            return e;
          };
        const curlify = (e, t, r, a = "") => {
            let n = !1,
              s = "";
            const addWords = (...e) => (s += " " + e.map(t).join(" ")),
              addWordsWithoutLeadingSpace = (...e) => (s += e.map(t).join(" ")),
              addNewLine = () => (s += ` ${r}`),
              addIndent = (e = 1) => (s += "  ".repeat(e));
            let o = e.get("headers");
            s += "curl" + a;
            const l = e.get("curlOptions");
            if (
              (N.List.isList(l) &&
                !l.isEmpty() &&
                addWords(...e.get("curlOptions")),
              addWords("-X", e.get("method")),
              addNewLine(),
              addIndent(),
              addWordsWithoutLeadingSpace(`${e.get("url")}`),
              o && o.size)
            )
              for (let t of e.get("headers").entries()) {
                addNewLine(), addIndent();
                let [e, r] = t;
                addWordsWithoutLeadingSpace("-H", `${e}: ${r}`),
                  (n =
                    n ||
                    (/^content-type$/i.test(e) &&
                      /^multipart\/form-data$/i.test(r)));
              }
            const c = e.get("body");
            if (c)
              if (n && ["POST", "PUT", "PATCH"].includes(e.get("method")))
                for (let [e, t] of c.entrySeq()) {
                  let r = extractKey(e);
                  addNewLine(),
                    addIndent(),
                    addWordsWithoutLeadingSpace("-F"),
                    t instanceof L.File && "string" == typeof t.valueOf()
                      ? addWords(
                          `${r}=${t.data}${t.type ? `;type=${t.type}` : ""}`,
                        )
                      : t instanceof L.File
                        ? addWords(
                            `${r}=@${t.name}${t.type ? `;type=${t.type}` : ""}`,
                          )
                        : addWords(`${r}=${t}`);
                }
              else if (c instanceof L.File)
                addNewLine(),
                  addIndent(),
                  addWordsWithoutLeadingSpace(`--data-binary '@${c.name}'`);
              else {
                addNewLine(), addIndent(), addWordsWithoutLeadingSpace("-d ");
                let t = c;
                N.Map.isMap(t)
                  ? addWordsWithoutLeadingSpace(
                      (function getStringBodyOfMap(e) {
                        let t = [];
                        for (let [r, a] of e.get("body").entrySeq()) {
                          let e = extractKey(r);
                          a instanceof L.File
                            ? t.push(
                                `  "${e}": {\n    "name": "${a.name}"${a.type ? `,\n    "type": "${a.type}"` : ""}\n  }`,
                              )
                            : t.push(
                                `  "${e}": ${JSON.stringify(a, null, 2).replace(/(\r\n|\r|\n)/g, "\n  ")}`,
                              );
                        }
                        return `{\n${t.join(",\n")}\n}`;
                      })(e),
                    )
                  : ("string" != typeof t && (t = JSON.stringify(t)),
                    addWordsWithoutLeadingSpace(t));
              }
            else
              c ||
                "POST" !== e.get("method") ||
                (addNewLine(),
                addIndent(),
                addWordsWithoutLeadingSpace("-d ''"));
            return s;
          },
          requestSnippetGenerator_curl_powershell = (e) =>
            curlify(e, escapePowershell, "`\n", ".exe"),
          requestSnippetGenerator_curl_bash = (e) =>
            curlify(e, escapeShell, "\\\n"),
          requestSnippetGenerator_curl_cmd = (e) =>
            curlify(e, escapeCMD, "^\n"),
          request_snippets_selectors_state = (e) => e || (0, N.Map)(),
          ct = (0, we.createSelector)(request_snippets_selectors_state, (e) => {
            const t = e.get("languages"),
              r = e.get("generators", (0, N.Map)());
            return !t || t.isEmpty() ? r : r.filter((e, r) => t.includes(r));
          }),
          getSnippetGenerators =
            (e) =>
            ({ fn: t }) =>
              ct(e)
                .map((e, r) => {
                  const a = ((e) => t[`requestSnippetGenerator_${e}`])(r);
                  return "function" != typeof a ? null : e.set("fn", a);
                })
                .filter((e) => e),
          it = (0, we.createSelector)(request_snippets_selectors_state, (e) =>
            e.get("activeLanguage"),
          ),
          pt = (0, we.createSelector)(request_snippets_selectors_state, (e) =>
            e.get("defaultExpanded"),
          ),
          mt = require("classnames");
        var ut = __webpack_require__.n(mt);
        const dt = require("react-copy-to-clipboard"),
          ht = {
            cursor: "pointer",
            lineHeight: 1,
            display: "inline-flex",
            backgroundColor: "rgb(250, 250, 250)",
            paddingBottom: "0",
            paddingTop: "0",
            border: "1px solid rgb(51, 51, 51)",
            borderRadius: "4px 4px 0 0",
            boxShadow: "none",
            borderBottom: "none",
          },
          gt = {
            cursor: "pointer",
            lineHeight: 1,
            display: "inline-flex",
            backgroundColor: "rgb(51, 51, 51)",
            boxShadow: "none",
            border: "1px solid rgb(51, 51, 51)",
            paddingBottom: "0",
            paddingTop: "0",
            borderRadius: "4px 4px 0 0",
            marginTop: "-5px",
            marginRight: "-5px",
            marginLeft: "-5px",
            zIndex: "9999",
            borderBottom: "none",
          },
          request_snippets = ({
            request: e,
            requestSnippetsSelectors: t,
            getComponent: r,
          }) => {
            const a = (0, C.useRef)(null),
              n = r("ArrowUpIcon"),
              s = r("ArrowDownIcon"),
              o = r("SyntaxHighlighter", !0),
              [l, c] = (0, C.useState)(
                t.getSnippetGenerators()?.keySeq().first(),
              ),
              [i, p] = (0, C.useState)(t?.getDefaultExpanded()),
              m = t.getSnippetGenerators(),
              u = m.get(l),
              d = u.get("fn")(e),
              handleSetIsExpanded = () => {
                p(!i);
              },
              handleGetBtnStyle = (e) => (e === l ? gt : ht),
              handlePreventYScrollingBeyondElement = (e) => {
                const { target: t, deltaY: r } = e,
                  { scrollHeight: a, offsetHeight: n, scrollTop: s } = t;
                a > n &&
                  ((0 === s && r < 0) || (n + s >= a && r > 0)) &&
                  e.preventDefault();
              };
            return (
              (0, C.useEffect)(() => {}, []),
              (0, C.useEffect)(() => {
                const e = Array.from(a.current.childNodes).filter(
                  (e) => !!e.nodeType && e.classList?.contains("curl-command"),
                );
                return (
                  e.forEach((e) =>
                    e.addEventListener(
                      "mousewheel",
                      handlePreventYScrollingBeyondElement,
                      { passive: !1 },
                    ),
                  ),
                  () => {
                    e.forEach((e) =>
                      e.removeEventListener(
                        "mousewheel",
                        handlePreventYScrollingBeyondElement,
                      ),
                    );
                  }
                );
              }, [e]),
              x().createElement(
                "div",
                { className: "request-snippets", ref: a },
                x().createElement(
                  "div",
                  {
                    style: {
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom: "15px",
                    },
                  },
                  x().createElement(
                    "h4",
                    {
                      onClick: () => handleSetIsExpanded(),
                      style: { cursor: "pointer" },
                    },
                    "Snippets",
                  ),
                  x().createElement(
                    "button",
                    {
                      onClick: () => handleSetIsExpanded(),
                      style: { border: "none", background: "none" },
                      title: i ? "Collapse operation" : "Expand operation",
                    },
                    i
                      ? x().createElement(s, {
                          className: "arrow",
                          width: "10",
                          height: "10",
                        })
                      : x().createElement(n, {
                          className: "arrow",
                          width: "10",
                          height: "10",
                        }),
                  ),
                ),
                i &&
                  x().createElement(
                    "div",
                    { className: "curl-command" },
                    x().createElement(
                      "div",
                      {
                        style: {
                          paddingLeft: "15px",
                          paddingRight: "10px",
                          width: "100%",
                          display: "flex",
                        },
                      },
                      m.entrySeq().map(([e, t]) =>
                        x().createElement(
                          "div",
                          {
                            className: ut()("btn", { active: e === l }),
                            style: handleGetBtnStyle(e),
                            key: e,
                            onClick: () =>
                              ((e) => {
                                l !== e && c(e);
                              })(e),
                          },
                          x().createElement(
                            "h4",
                            { style: e === l ? { color: "white" } : {} },
                            t.get("title"),
                          ),
                        ),
                      ),
                    ),
                    x().createElement(
                      "div",
                      { className: "copy-to-clipboard" },
                      x().createElement(
                        dt.CopyToClipboard,
                        { text: d },
                        x().createElement("button", null),
                      ),
                    ),
                    x().createElement(
                      "div",
                      null,
                      x().createElement(
                        o,
                        {
                          language: u.get("syntax"),
                          className: "curl microlight",
                          renderPlainText: ({
                            children: e,
                            PlainTextViewer: t,
                          }) => x().createElement(t, { className: "curl" }, e),
                        },
                        d,
                      ),
                    ),
                  ),
              )
            );
          },
          plugins_request_snippets = () => ({
            components: { RequestSnippets: request_snippets },
            fn: u,
            statePlugins: { requestSnippets: { selectors: d } },
          });
        class ModelCollapse extends C.Component {
          static defaultProps = {
            collapsedContent: "{...}",
            expanded: !1,
            title: null,
            onToggle: () => {},
            hideSelfOnExpand: !1,
            specPath: k().List([]),
          };
          constructor(e, t) {
            super(e, t);
            let { expanded: r, collapsedContent: a } = this.props;
            this.state = {
              expanded: r,
              collapsedContent:
                a || ModelCollapse.defaultProps.collapsedContent,
            };
          }
          componentDidMount() {
            const {
              hideSelfOnExpand: e,
              expanded: t,
              modelName: r,
            } = this.props;
            e && t && this.props.onToggle(r, t);
          }
          UNSAFE_componentWillReceiveProps(e) {
            this.props.expanded !== e.expanded &&
              this.setState({ expanded: e.expanded });
          }
          toggleCollapsed = () => {
            this.props.onToggle &&
              this.props.onToggle(this.props.modelName, !this.state.expanded),
              this.setState({ expanded: !this.state.expanded });
          };
          onLoad = (e) => {
            if (e && this.props.layoutSelectors) {
              const t = this.props.layoutSelectors.getScrollToKey();
              k().is(t, this.props.specPath) && this.toggleCollapsed(),
                this.props.layoutActions.readyToScroll(
                  this.props.specPath,
                  e.parentElement,
                );
            }
          };
          render() {
            const { title: e, classes: t } = this.props;
            return this.state.expanded && this.props.hideSelfOnExpand
              ? x().createElement(
                  "span",
                  { className: t || "" },
                  this.props.children,
                )
              : x().createElement(
                  "span",
                  { className: t || "", ref: this.onLoad },
                  x().createElement(
                    "button",
                    {
                      "aria-expanded": this.state.expanded,
                      className: "model-box-control",
                      onClick: this.toggleCollapsed,
                    },
                    e && x().createElement("span", { className: "pointer" }, e),
                    x().createElement("span", {
                      className:
                        "model-toggle" +
                        (this.state.expanded ? "" : " collapsed"),
                    }),
                    !this.state.expanded &&
                      x().createElement(
                        "span",
                        null,
                        this.state.collapsedContent,
                      ),
                  ),
                  this.state.expanded && this.props.children,
                );
          }
        }
        const useTabs = ({
            initialTab: e,
            isExecute: t,
            schema: r,
            example: a,
          }) => {
            const n = (0, C.useMemo)(
                () => ({ example: "example", model: "model" }),
                [],
              ),
              s =
                (0, C.useMemo)(() => Object.keys(n), [n]).includes(e) && r && !t
                  ? e
                  : n.example,
              o = ((e) => {
                const t = (0, C.useRef)();
                return (
                  (0, C.useEffect)(() => {
                    t.current = e;
                  }),
                  t.current
                );
              })(t),
              [l, c] = (0, C.useState)(s),
              i = (0, C.useCallback)((e) => {
                c(e.target.dataset.name);
              }, []);
            return (
              (0, C.useEffect)(() => {
                o && !t && a && c(n.example);
              }, [o, t, a]),
              { activeTab: l, onTabChange: i, tabs: n }
            );
          },
          model_example = ({
            schema: e,
            example: t,
            isExecute: r = !1,
            specPath: a,
            includeWriteOnly: n = !1,
            includeReadOnly: s = !1,
            getComponent: o,
            getConfigs: l,
            specSelectors: c,
          }) => {
            const { defaultModelRendering: i, defaultModelExpandDepth: p } =
                l(),
              m = o("ModelWrapper"),
              u = o("HighlightCode", !0),
              d = ae()(5).toString("base64"),
              h = ae()(5).toString("base64"),
              g = ae()(5).toString("base64"),
              y = ae()(5).toString("base64"),
              f = c.isOAS3(),
              {
                activeTab: S,
                tabs: E,
                onTabChange: _,
              } = useTabs({
                initialTab: i,
                isExecute: r,
                schema: e,
                example: t,
              });
            return x().createElement(
              "div",
              { className: "model-example" },
              x().createElement(
                "ul",
                { className: "tab", role: "tablist" },
                x().createElement(
                  "li",
                  {
                    className: ut()("tabitem", { active: S === E.example }),
                    role: "presentation",
                  },
                  x().createElement(
                    "button",
                    {
                      "aria-controls": h,
                      "aria-selected": S === E.example,
                      className: "tablinks",
                      "data-name": "example",
                      id: d,
                      onClick: _,
                      role: "tab",
                    },
                    r ? "Edit Value" : "Example Value",
                  ),
                ),
                e &&
                  x().createElement(
                    "li",
                    {
                      className: ut()("tabitem", { active: S === E.model }),
                      role: "presentation",
                    },
                    x().createElement(
                      "button",
                      {
                        "aria-controls": y,
                        "aria-selected": S === E.model,
                        className: ut()("tablinks", { inactive: r }),
                        "data-name": "model",
                        id: g,
                        onClick: _,
                        role: "tab",
                      },
                      f ? "Schema" : "Model",
                    ),
                  ),
              ),
              S === E.example &&
                x().createElement(
                  "div",
                  {
                    "aria-hidden": S !== E.example,
                    "aria-labelledby": d,
                    "data-name": "examplePanel",
                    id: h,
                    role: "tabpanel",
                    tabIndex: "0",
                  },
                  t || x().createElement(u, null, "(no example available"),
                ),
              S === E.model &&
                x().createElement(
                  "div",
                  {
                    "aria-hidden": S === E.example,
                    "aria-labelledby": g,
                    "data-name": "modelPanel",
                    id: y,
                    role: "tabpanel",
                    tabIndex: "0",
                  },
                  x().createElement(m, {
                    schema: e,
                    getComponent: o,
                    getConfigs: l,
                    specSelectors: c,
                    expandDepth: p,
                    specPath: a,
                    includeReadOnly: s,
                    includeWriteOnly: n,
                  }),
                ),
            );
          };
        class ModelWrapper extends C.Component {
          onToggle = (e, t) => {
            this.props.layoutActions &&
              this.props.layoutActions.show(this.props.fullPath, t);
          };
          render() {
            let { getComponent: e, getConfigs: t } = this.props;
            const r = e("Model");
            let a;
            return (
              this.props.layoutSelectors &&
                (a = this.props.layoutSelectors.isShown(this.props.fullPath)),
              x().createElement(
                "div",
                { className: "model-box" },
                x().createElement(
                  r,
                  et()({}, this.props, {
                    getConfigs: t,
                    expanded: a,
                    depth: 1,
                    onToggle: this.onToggle,
                    expandDepth: this.props.expandDepth || 0,
                  }),
                ),
              )
            );
          }
        }
        const yt = require("react-immutable-pure-component");
        var ft,
          St = __webpack_require__.n(yt);
        function _extends() {
          return (
            (_extends = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r)
                      Object.prototype.hasOwnProperty.call(r, a) &&
                        (e[a] = r[a]);
                  }
                  return e;
                }),
            _extends.apply(this, arguments)
          );
        }
        const rolling_load = (e) =>
            C.createElement(
              "svg",
              _extends(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: 200,
                  height: 200,
                  className: "rolling-load_svg__lds-rolling",
                  preserveAspectRatio: "xMidYMid",
                  style: {
                    backgroundImage: "none",
                    backgroundPosition: "initial initial",
                    backgroundRepeat: "initial initial",
                  },
                  viewBox: "0 0 100 100",
                },
                e,
              ),
              ft ||
                (ft = C.createElement(
                  "circle",
                  {
                    cx: 50,
                    cy: 50,
                    r: 35,
                    fill: "none",
                    stroke: "#555",
                    strokeDasharray: "164.93361431346415 56.97787143782138",
                    strokeWidth: 10,
                  },
                  C.createElement("animateTransform", {
                    attributeName: "transform",
                    begin: "0s",
                    calcMode: "linear",
                    dur: "1s",
                    keyTimes: "0;1",
                    repeatCount: "indefinite",
                    type: "rotate",
                    values: "0 50 50;360 50 50",
                  }),
                )),
            ),
          decodeRefName = (e) => {
            const t = e.replace(/~1/g, "/").replace(/~0/g, "~");
            try {
              return decodeURIComponent(t);
            } catch {
              return t;
            }
          };
        class Model extends St() {
          static propTypes = {
            schema: ze().map.isRequired,
            getComponent: ke().func.isRequired,
            getConfigs: ke().func.isRequired,
            specSelectors: ke().object.isRequired,
            name: ke().string,
            displayName: ke().string,
            isRef: ke().bool,
            required: ke().bool,
            expandDepth: ke().number,
            depth: ke().number,
            specPath: ze().list.isRequired,
            includeReadOnly: ke().bool,
            includeWriteOnly: ke().bool,
          };
          getModelName = (e) =>
            -1 !== e.indexOf("#/definitions/")
              ? decodeRefName(e.replace(/^.*#\/definitions\//, ""))
              : -1 !== e.indexOf("#/components/schemas/")
                ? decodeRefName(e.replace(/^.*#\/components\/schemas\//, ""))
                : void 0;
          getRefSchema = (e) => {
            let { specSelectors: t } = this.props;
            return t.findDefinition(e);
          };
          render() {
            let {
              getComponent: e,
              getConfigs: t,
              specSelectors: r,
              schema: a,
              required: n,
              name: s,
              isRef: o,
              specPath: l,
              displayName: c,
              includeReadOnly: i,
              includeWriteOnly: p,
            } = this.props;
            const m = e("ObjectModel"),
              u = e("ArrayModel"),
              d = e("PrimitiveModel");
            let h = "object",
              g = a && a.get("$$ref"),
              y = a && a.get("$ref");
            if ((!s && g && (s = this.getModelName(g)), y)) {
              const e = this.getModelName(y),
                t = this.getRefSchema(e);
              N.Map.isMap(t)
                ? ((a = t.mergeDeep(a)),
                  g || ((a = a.set("$$ref", y)), (g = y)))
                : N.Map.isMap(a) && 1 === a.size && ((a = null), (s = y));
            }
            if (!a)
              return x().createElement(
                "span",
                { className: "model model-title" },
                x().createElement(
                  "span",
                  { className: "model-title__text" },
                  c || s,
                ),
                !y &&
                  x().createElement(rolling_load, {
                    height: "20px",
                    width: "20px",
                  }),
              );
            const f = r.isOAS3() && a.get("deprecated");
            switch (
              ((o = void 0 !== o ? o : !!g), (h = (a && a.get("type")) || h), h)
            ) {
              case "object":
                return x().createElement(
                  m,
                  et()({ className: "object" }, this.props, {
                    specPath: l,
                    getConfigs: t,
                    schema: a,
                    name: s,
                    deprecated: f,
                    isRef: o,
                    includeReadOnly: i,
                    includeWriteOnly: p,
                  }),
                );
              case "array":
                return x().createElement(
                  u,
                  et()({ className: "array" }, this.props, {
                    getConfigs: t,
                    schema: a,
                    name: s,
                    deprecated: f,
                    required: n,
                    includeReadOnly: i,
                    includeWriteOnly: p,
                  }),
                );
              default:
                return x().createElement(
                  d,
                  et()({}, this.props, {
                    getComponent: e,
                    getConfigs: t,
                    schema: a,
                    name: s,
                    deprecated: f,
                    required: n,
                  }),
                );
            }
          }
        }
        class Models extends C.Component {
          getSchemaBasePath = () =>
            this.props.specSelectors.isOAS3()
              ? ["components", "schemas"]
              : ["definitions"];
          getCollapsedContent = () => " ";
          handleToggle = (e, t) => {
            const { layoutActions: r } = this.props;
            r.show([...this.getSchemaBasePath(), e], t),
              t &&
                this.props.specActions.requestResolvedSubtree([
                  ...this.getSchemaBasePath(),
                  e,
                ]);
          };
          onLoadModels = (e) => {
            e &&
              this.props.layoutActions.readyToScroll(
                this.getSchemaBasePath(),
                e,
              );
          };
          onLoadModel = (e) => {
            if (e) {
              const t = e.getAttribute("data-name");
              this.props.layoutActions.readyToScroll(
                [...this.getSchemaBasePath(), t],
                e,
              );
            }
          };
          render() {
            let {
                specSelectors: e,
                getComponent: t,
                layoutSelectors: r,
                layoutActions: a,
                getConfigs: n,
              } = this.props,
              s = e.definitions(),
              { docExpansion: o, defaultModelsExpandDepth: l } = n();
            if (!s.size || l < 0) return null;
            const c = this.getSchemaBasePath();
            let i = r.isShown(c, l > 0 && "none" !== o);
            const p = e.isOAS3(),
              m = t("ModelWrapper"),
              u = t("Collapse"),
              d = t("ModelCollapse"),
              h = t("JumpToPath", !0),
              g = t("ArrowUpIcon"),
              y = t("ArrowDownIcon");
            return x().createElement(
              "section",
              {
                className: i ? "models is-open" : "models",
                ref: this.onLoadModels,
              },
              x().createElement(
                "h4",
                null,
                x().createElement(
                  "button",
                  {
                    "aria-expanded": i,
                    className: "models-control",
                    onClick: () => a.show(c, !i),
                  },
                  x().createElement("span", null, p ? "Schemas" : "Models"),
                  i ? x().createElement(g, null) : x().createElement(y, null),
                ),
              ),
              x().createElement(
                u,
                { isOpened: i },
                s
                  .entrySeq()
                  .map(([s]) => {
                    const o = [...c, s],
                      i = k().List(o),
                      p = e.specResolvedSubtree(o),
                      u = e.specJson().getIn(o),
                      g = N.Map.isMap(p) ? p : k().Map(),
                      y = N.Map.isMap(u) ? u : k().Map(),
                      f = g.get("title") || y.get("title") || s,
                      S = r.isShown(o, !1);
                    S &&
                      0 === g.size &&
                      y.size > 0 &&
                      this.props.specActions.requestResolvedSubtree(o);
                    const E = x().createElement(m, {
                        name: s,
                        expandDepth: l,
                        schema: g || k().Map(),
                        displayName: f,
                        fullPath: o,
                        specPath: i,
                        getComponent: t,
                        specSelectors: e,
                        getConfigs: n,
                        layoutSelectors: r,
                        layoutActions: a,
                        includeReadOnly: !0,
                        includeWriteOnly: !0,
                      }),
                      _ = x().createElement(
                        "span",
                        { className: "model-box" },
                        x().createElement(
                          "span",
                          { className: "model model-title" },
                          f,
                        ),
                      );
                    return x().createElement(
                      "div",
                      {
                        id: `model-${s}`,
                        className: "model-container",
                        key: `models-section-${s}`,
                        "data-name": s,
                        ref: this.onLoadModel,
                      },
                      x().createElement(
                        "span",
                        { className: "models-jump-to-path" },
                        x().createElement(h, { specPath: i }),
                      ),
                      x().createElement(
                        d,
                        {
                          classes: "model-box",
                          collapsedContent: this.getCollapsedContent(s),
                          onToggle: this.handleToggle,
                          title: _,
                          displayName: f,
                          modelName: s,
                          specPath: i,
                          layoutSelectors: r,
                          layoutActions: a,
                          hideSelfOnExpand: !0,
                          expanded: l > 0 && S,
                        },
                        E,
                      ),
                    );
                  })
                  .toArray(),
              ),
            );
          }
        }
        const enum_model = ({ value: e, getComponent: t }) => {
          let r = t("ModelCollapse"),
            a = x().createElement("span", null, "Array [ ", e.count(), " ]");
          return x().createElement(
            "span",
            { className: "prop-enum" },
            "Enum:",
            x().createElement("br", null),
            x().createElement(
              r,
              { collapsedContent: a },
              "[ ",
              e.map(String).join(", "),
              " ]",
            ),
          );
        };
        class ObjectModel extends C.Component {
          render() {
            let {
                schema: e,
                name: t,
                displayName: r,
                isRef: a,
                getComponent: n,
                getConfigs: s,
                depth: o,
                onToggle: l,
                expanded: c,
                specPath: i,
                ...p
              } = this.props,
              {
                specSelectors: m,
                expandDepth: u,
                includeReadOnly: d,
                includeWriteOnly: h,
              } = p;
            const { isOAS3: g } = m;
            if (!e) return null;
            const { showExtensions: y } = s();
            let f = e.get("description"),
              S = e.get("properties"),
              E = e.get("additionalProperties"),
              _ = e.get("title") || r || t,
              v = e.get("required"),
              w = e.filter(
                (e, t) =>
                  -1 !==
                  [
                    "maxProperties",
                    "minProperties",
                    "nullable",
                    "example",
                  ].indexOf(t),
              ),
              b = e.get("deprecated"),
              C = e.getIn(["externalDocs", "url"]),
              O = e.getIn(["externalDocs", "description"]);
            const k = n("JumpToPath", !0),
              A = n("Markdown", !0),
              I = n("Model"),
              q = n("ModelCollapse"),
              j = n("Property"),
              P = n("Link"),
              JumpToPathSection = () =>
                x().createElement(
                  "span",
                  { className: "model-jump-to-path" },
                  x().createElement(k, { specPath: i }),
                ),
              M = x().createElement(
                "span",
                null,
                x().createElement("span", null, "{"),
                "...",
                x().createElement("span", null, "}"),
                a ? x().createElement(JumpToPathSection, null) : "",
              ),
              R = m.isOAS3() ? e.get("allOf") : null,
              T = m.isOAS3() ? e.get("anyOf") : null,
              J = m.isOAS3() ? e.get("oneOf") : null,
              $ = m.isOAS3() ? e.get("not") : null,
              V =
                _ &&
                x().createElement(
                  "span",
                  { className: "model-title" },
                  a &&
                    e.get("$$ref") &&
                    x().createElement(
                      "span",
                      { className: "model-hint" },
                      e.get("$$ref"),
                    ),
                  x().createElement(
                    "span",
                    { className: "model-title__text" },
                    _,
                  ),
                );
            return x().createElement(
              "span",
              { className: "model" },
              x().createElement(
                q,
                {
                  modelName: t,
                  title: V,
                  onToggle: l,
                  expanded: !!c || o <= u,
                  collapsedContent: M,
                },
                x().createElement(
                  "span",
                  { className: "brace-open object" },
                  "{",
                ),
                a ? x().createElement(JumpToPathSection, null) : null,
                x().createElement(
                  "span",
                  { className: "inner-object" },
                  x().createElement(
                    "table",
                    { className: "model" },
                    x().createElement(
                      "tbody",
                      null,
                      f
                        ? x().createElement(
                            "tr",
                            { className: "description" },
                            x().createElement("td", null, "description:"),
                            x().createElement(
                              "td",
                              null,
                              x().createElement(A, { source: f }),
                            ),
                          )
                        : null,
                      C &&
                        x().createElement(
                          "tr",
                          { className: "external-docs" },
                          x().createElement("td", null, "externalDocs:"),
                          x().createElement(
                            "td",
                            null,
                            x().createElement(
                              P,
                              { target: "_blank", href: sanitizeUrl(C) },
                              O || C,
                            ),
                          ),
                        ),
                      b
                        ? x().createElement(
                            "tr",
                            { className: "property" },
                            x().createElement("td", null, "deprecated:"),
                            x().createElement("td", null, "true"),
                          )
                        : null,
                      S && S.size
                        ? S.entrySeq()
                            .filter(
                              ([, e]) =>
                                (!e.get("readOnly") || d) &&
                                (!e.get("writeOnly") || h),
                            )
                            .map(([e, r]) => {
                              let a = g() && r.get("deprecated"),
                                l = N.List.isList(v) && v.contains(e),
                                c = ["property-row"];
                              return (
                                a && c.push("deprecated"),
                                l && c.push("required"),
                                x().createElement(
                                  "tr",
                                  { key: e, className: c.join(" ") },
                                  x().createElement(
                                    "td",
                                    null,
                                    e,
                                    l &&
                                      x().createElement(
                                        "span",
                                        { className: "star" },
                                        "*",
                                      ),
                                  ),
                                  x().createElement(
                                    "td",
                                    null,
                                    x().createElement(
                                      I,
                                      et()(
                                        { key: `object-${t}-${e}_${r}` },
                                        p,
                                        {
                                          required: l,
                                          getComponent: n,
                                          specPath: i.push("properties", e),
                                          getConfigs: s,
                                          schema: r,
                                          depth: o + 1,
                                        },
                                      ),
                                    ),
                                  ),
                                )
                              );
                            })
                            .toArray()
                        : null,
                      y
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, " "),
                          )
                        : null,
                      y
                        ? e
                            .entrySeq()
                            .map(([e, t]) => {
                              if ("x-" !== e.slice(0, 2)) return;
                              const r = t ? (t.toJS ? t.toJS() : t) : null;
                              return x().createElement(
                                "tr",
                                { key: e, className: "extension" },
                                x().createElement("td", null, e),
                                x().createElement(
                                  "td",
                                  null,
                                  JSON.stringify(r),
                                ),
                              );
                            })
                            .toArray()
                        : null,
                      E && E.size
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, "< * >:"),
                            x().createElement(
                              "td",
                              null,
                              x().createElement(
                                I,
                                et()({}, p, {
                                  required: !1,
                                  getComponent: n,
                                  specPath: i.push("additionalProperties"),
                                  getConfigs: s,
                                  schema: E,
                                  depth: o + 1,
                                }),
                              ),
                            ),
                          )
                        : null,
                      R
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, "allOf ->"),
                            x().createElement(
                              "td",
                              null,
                              R.map((e, t) =>
                                x().createElement(
                                  "div",
                                  { key: t },
                                  x().createElement(
                                    I,
                                    et()({}, p, {
                                      required: !1,
                                      getComponent: n,
                                      specPath: i.push("allOf", t),
                                      getConfigs: s,
                                      schema: e,
                                      depth: o + 1,
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          )
                        : null,
                      T
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, "anyOf ->"),
                            x().createElement(
                              "td",
                              null,
                              T.map((e, t) =>
                                x().createElement(
                                  "div",
                                  { key: t },
                                  x().createElement(
                                    I,
                                    et()({}, p, {
                                      required: !1,
                                      getComponent: n,
                                      specPath: i.push("anyOf", t),
                                      getConfigs: s,
                                      schema: e,
                                      depth: o + 1,
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          )
                        : null,
                      J
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, "oneOf ->"),
                            x().createElement(
                              "td",
                              null,
                              J.map((e, t) =>
                                x().createElement(
                                  "div",
                                  { key: t },
                                  x().createElement(
                                    I,
                                    et()({}, p, {
                                      required: !1,
                                      getComponent: n,
                                      specPath: i.push("oneOf", t),
                                      getConfigs: s,
                                      schema: e,
                                      depth: o + 1,
                                    }),
                                  ),
                                ),
                              ),
                            ),
                          )
                        : null,
                      $
                        ? x().createElement(
                            "tr",
                            null,
                            x().createElement("td", null, "not ->"),
                            x().createElement(
                              "td",
                              null,
                              x().createElement(
                                "div",
                                null,
                                x().createElement(
                                  I,
                                  et()({}, p, {
                                    required: !1,
                                    getComponent: n,
                                    specPath: i.push("not"),
                                    getConfigs: s,
                                    schema: $,
                                    depth: o + 1,
                                  }),
                                ),
                              ),
                            ),
                          )
                        : null,
                    ),
                  ),
                ),
                x().createElement("span", { className: "brace-close" }, "}"),
              ),
              w.size
                ? w.entrySeq().map(([e, t]) =>
                    x().createElement(j, {
                      key: `${e}-${t}`,
                      propKey: e,
                      propVal: t,
                      propClass: "property",
                    }),
                  )
                : null,
            );
          }
        }
        class ArrayModel extends C.Component {
          render() {
            let {
                getComponent: e,
                getConfigs: t,
                schema: r,
                depth: a,
                expandDepth: n,
                name: s,
                displayName: o,
                specPath: l,
              } = this.props,
              c = r.get("description"),
              i = r.get("items"),
              p = r.get("title") || o || s,
              m = r.filter(
                (e, t) =>
                  -1 ===
                  [
                    "type",
                    "items",
                    "description",
                    "$$ref",
                    "externalDocs",
                  ].indexOf(t),
              ),
              u = r.getIn(["externalDocs", "url"]),
              d = r.getIn(["externalDocs", "description"]);
            const h = e("Markdown", !0),
              g = e("ModelCollapse"),
              y = e("Model"),
              f = e("Property"),
              S = e("Link"),
              E =
                p &&
                x().createElement(
                  "span",
                  { className: "model-title" },
                  x().createElement(
                    "span",
                    { className: "model-title__text" },
                    p,
                  ),
                );
            return x().createElement(
              "span",
              { className: "model" },
              x().createElement(
                g,
                { title: E, expanded: a <= n, collapsedContent: "[...]" },
                "[",
                m.size
                  ? m.entrySeq().map(([e, t]) =>
                      x().createElement(f, {
                        key: `${e}-${t}`,
                        propKey: e,
                        propVal: t,
                        propClass: "property",
                      }),
                    )
                  : null,
                c
                  ? x().createElement(h, { source: c })
                  : m.size
                    ? x().createElement("div", { className: "markdown" })
                    : null,
                u &&
                  x().createElement(
                    "div",
                    { className: "external-docs" },
                    x().createElement(
                      S,
                      { target: "_blank", href: sanitizeUrl(u) },
                      d || u,
                    ),
                  ),
                x().createElement(
                  "span",
                  null,
                  x().createElement(
                    y,
                    et()({}, this.props, {
                      getConfigs: t,
                      specPath: l.push("items"),
                      name: null,
                      schema: i,
                      required: !1,
                      depth: a + 1,
                    }),
                  ),
                ),
                "]",
              ),
            );
          }
        }
        const Et = "property primitive";
        class Primitive extends C.Component {
          render() {
            let {
              schema: e,
              getComponent: t,
              getConfigs: r,
              name: a,
              displayName: n,
              depth: s,
              expandDepth: o,
            } = this.props;
            const { showExtensions: l } = r();
            if (!e || !e.get) return x().createElement("div", null);
            let c = e.get("type"),
              i = e.get("format"),
              p = e.get("xml"),
              m = e.get("enum"),
              u = e.get("title") || n || a,
              d = e.get("description"),
              h = getExtensions(e),
              g = e
                .filter(
                  (e, t) =>
                    -1 ===
                    [
                      "enum",
                      "type",
                      "format",
                      "description",
                      "$$ref",
                      "externalDocs",
                    ].indexOf(t),
                )
                .filterNot((e, t) => h.has(t)),
              y = e.getIn(["externalDocs", "url"]),
              f = e.getIn(["externalDocs", "description"]);
            const S = t("Markdown", !0),
              E = t("EnumModel"),
              _ = t("Property"),
              v = t("ModelCollapse"),
              w = t("Link"),
              b =
                u &&
                x().createElement(
                  "span",
                  { className: "model-title" },
                  x().createElement(
                    "span",
                    { className: "model-title__text" },
                    u,
                  ),
                );
            return x().createElement(
              "span",
              { className: "model" },
              x().createElement(
                v,
                { title: b, expanded: s <= o, collapsedContent: "[...]" },
                x().createElement(
                  "span",
                  { className: "prop" },
                  a &&
                    s > 1 &&
                    x().createElement("span", { className: "prop-name" }, u),
                  x().createElement("span", { className: "prop-type" }, c),
                  i &&
                    x().createElement(
                      "span",
                      { className: "prop-format" },
                      "($",
                      i,
                      ")",
                    ),
                  g.size
                    ? g.entrySeq().map(([e, t]) =>
                        x().createElement(_, {
                          key: `${e}-${t}`,
                          propKey: e,
                          propVal: t,
                          propClass: Et,
                        }),
                      )
                    : null,
                  l && h.size
                    ? h.entrySeq().map(([e, t]) =>
                        x().createElement(_, {
                          key: `${e}-${t}`,
                          propKey: e,
                          propVal: t,
                          propClass: Et,
                        }),
                      )
                    : null,
                  d ? x().createElement(S, { source: d }) : null,
                  y &&
                    x().createElement(
                      "div",
                      { className: "external-docs" },
                      x().createElement(
                        w,
                        { target: "_blank", href: sanitizeUrl(y) },
                        f || y,
                      ),
                    ),
                  p && p.size
                    ? x().createElement(
                        "span",
                        null,
                        x().createElement("br", null),
                        x().createElement("span", { className: Et }, "xml:"),
                        p
                          .entrySeq()
                          .map(([e, t]) =>
                            x().createElement(
                              "span",
                              { key: `${e}-${t}`, className: Et },
                              x().createElement("br", null),
                              "   ",
                              e,
                              ": ",
                              String(t),
                            ),
                          )
                          .toArray(),
                      )
                    : null,
                  m && x().createElement(E, { value: m, getComponent: t }),
                ),
              ),
            );
          }
        }
        class Schemes extends x().Component {
          UNSAFE_componentWillMount() {
            let { schemes: e } = this.props;
            this.setScheme(e.first());
          }
          UNSAFE_componentWillReceiveProps(e) {
            (this.props.currentScheme &&
              e.schemes.includes(this.props.currentScheme)) ||
              this.setScheme(e.schemes.first());
          }
          onChange = (e) => {
            this.setScheme(e.target.value);
          };
          setScheme = (e) => {
            let { path: t, method: r, specActions: a } = this.props;
            a.setScheme(e, t, r);
          };
          render() {
            let { schemes: e, currentScheme: t } = this.props;
            return x().createElement(
              "label",
              { htmlFor: "schemes" },
              x().createElement(
                "span",
                { className: "schemes-title" },
                "Schemes",
              ),
              x().createElement(
                "select",
                { onChange: this.onChange, value: t, id: "schemes" },
                e
                  .valueSeq()
                  .map((e) =>
                    x().createElement("option", { value: e, key: e }, e),
                  )
                  .toArray(),
              ),
            );
          }
        }
        class SchemesContainer extends x().Component {
          render() {
            const {
                specActions: e,
                specSelectors: t,
                getComponent: r,
              } = this.props,
              a = t.operationScheme(),
              n = t.schemes(),
              s = r("schemes");
            return n && n.size
              ? x().createElement(s, {
                  currentScheme: a,
                  schemes: n,
                  specActions: e,
                })
              : null;
          }
        }
        const _t = require("react-debounce-input");
        var vt = __webpack_require__.n(_t);
        const wt = {
          value: "",
          onChange: () => {},
          schema: {},
          keyName: "",
          required: !1,
          errors: (0, N.List)(),
        };
        class JsonSchemaForm extends C.Component {
          static defaultProps = wt;
          componentDidMount() {
            const {
              dispatchInitialValue: e,
              value: t,
              onChange: r,
            } = this.props;
            e ? r(t) : !1 === e && r("");
          }
          render() {
            let {
              schema: e,
              errors: t,
              value: r,
              onChange: a,
              getComponent: n,
              fn: s,
              disabled: o,
            } = this.props;
            const l = e && e.get ? e.get("format") : null,
              c = e && e.get ? e.get("type") : null;
            let getComponentSilently = (e) => n(e, !1, { failSilently: !0 }),
              i = c
                ? getComponentSilently(
                    l ? `JsonSchema_${c}_${l}` : `JsonSchema_${c}`,
                  )
                : n("JsonSchema_string");
            return (
              i || (i = n("JsonSchema_string")),
              x().createElement(
                i,
                et()({}, this.props, {
                  errors: t,
                  fn: s,
                  getComponent: n,
                  value: r,
                  onChange: a,
                  schema: e,
                  disabled: o,
                }),
              )
            );
          }
        }
        class JsonSchema_string extends C.Component {
          static defaultProps = wt;
          onChange = (e) => {
            const t =
              this.props.schema && "file" === this.props.schema.get("type")
                ? e.target.files[0]
                : e.target.value;
            this.props.onChange(t, this.props.keyName);
          };
          onEnumChange = (e) => this.props.onChange(e);
          render() {
            let {
              getComponent: e,
              value: t,
              schema: r,
              errors: a,
              required: n,
              description: s,
              disabled: o,
            } = this.props;
            const l = r && r.get ? r.get("enum") : null,
              c = r && r.get ? r.get("format") : null,
              i = r && r.get ? r.get("type") : null,
              p = r && r.get ? r.get("in") : null;
            if ((t || (t = ""), (a = a.toJS ? a.toJS() : []), l)) {
              const r = e("Select");
              return x().createElement(r, {
                className: a.length ? "invalid" : "",
                title: a.length ? a : "",
                allowedValues: [...l],
                value: t,
                allowEmptyValue: !n,
                disabled: o,
                onChange: this.onEnumChange,
              });
            }
            const m = o || (p && "formData" === p && !("FormData" in window)),
              u = e("Input");
            return i && "file" === i
              ? x().createElement(u, {
                  type: "file",
                  className: a.length ? "invalid" : "",
                  title: a.length ? a : "",
                  onChange: this.onChange,
                  disabled: m,
                })
              : x().createElement(vt(), {
                  type: c && "password" === c ? "password" : "text",
                  className: a.length ? "invalid" : "",
                  title: a.length ? a : "",
                  value: t,
                  minLength: 0,
                  debounceTimeout: 350,
                  placeholder: s,
                  onChange: this.onChange,
                  disabled: m,
                });
          }
        }
        class JsonSchema_array extends C.PureComponent {
          static defaultProps = wt;
          constructor(e, t) {
            super(e, t),
              (this.state = {
                value: valueOrEmptyList(e.value),
                schema: e.schema,
              });
          }
          UNSAFE_componentWillReceiveProps(e) {
            const t = valueOrEmptyList(e.value);
            t !== this.state.value && this.setState({ value: t }),
              e.schema !== this.state.schema &&
                this.setState({ schema: e.schema });
          }
          onChange = () => {
            this.props.onChange(this.state.value);
          };
          onItemChange = (e, t) => {
            this.setState(
              ({ value: r }) => ({ value: r.set(t, e) }),
              this.onChange,
            );
          };
          removeItem = (e) => {
            this.setState(
              ({ value: t }) => ({ value: t.delete(e) }),
              this.onChange,
            );
          };
          addItem = () => {
            const { fn: e } = this.props;
            let t = valueOrEmptyList(this.state.value);
            this.setState(
              () => ({
                value: t.push(
                  e.getSampleSchema(this.state.schema.get("items"), !1, {
                    includeWriteOnly: !0,
                  }),
                ),
              }),
              this.onChange,
            );
          };
          onEnumChange = (e) => {
            this.setState(() => ({ value: e }), this.onChange);
          };
          render() {
            let {
              getComponent: e,
              required: t,
              schema: r,
              errors: a,
              fn: n,
              disabled: s,
            } = this.props;
            a = a.toJS ? a.toJS() : Array.isArray(a) ? a : [];
            const o = a.filter((e) => "string" == typeof e),
              l = a.filter((e) => void 0 !== e.needRemove).map((e) => e.error),
              c = this.state.value,
              i = !!(c && c.count && c.count() > 0),
              p = r.getIn(["items", "enum"]),
              m = r.getIn(["items", "type"]),
              u = r.getIn(["items", "format"]),
              d = r.get("items");
            let h,
              g = !1,
              y = "file" === m || ("string" === m && "binary" === u);
            if (
              (m && u
                ? (h = e(`JsonSchema_${m}_${u}`))
                : ("boolean" !== m && "array" !== m && "object" !== m) ||
                  (h = e(`JsonSchema_${m}`)),
              h || y || (g = !0),
              p)
            ) {
              const r = e("Select");
              return x().createElement(r, {
                className: a.length ? "invalid" : "",
                title: a.length ? a : "",
                multiple: !0,
                value: c,
                disabled: s,
                allowedValues: p,
                allowEmptyValue: !t,
                onChange: this.onEnumChange,
              });
            }
            const f = e("Button");
            return x().createElement(
              "div",
              { className: "json-schema-array" },
              i
                ? c.map((t, r) => {
                    const o = (0, N.fromJS)([
                      ...a.filter((e) => e.index === r).map((e) => e.error),
                    ]);
                    return x().createElement(
                      "div",
                      { key: r, className: "json-schema-form-item" },
                      y
                        ? x().createElement(JsonSchemaArrayItemFile, {
                            value: t,
                            onChange: (e) => this.onItemChange(e, r),
                            disabled: s,
                            errors: o,
                            getComponent: e,
                          })
                        : g
                          ? x().createElement(JsonSchemaArrayItemText, {
                              value: t,
                              onChange: (e) => this.onItemChange(e, r),
                              disabled: s,
                              errors: o,
                            })
                          : x().createElement(
                              h,
                              et()({}, this.props, {
                                value: t,
                                onChange: (e) => this.onItemChange(e, r),
                                disabled: s,
                                errors: o,
                                schema: d,
                                getComponent: e,
                                fn: n,
                              }),
                            ),
                      s
                        ? null
                        : x().createElement(
                            f,
                            {
                              className: `btn btn-sm json-schema-form-item-remove ${l.length ? "invalid" : null}`,
                              title: l.length ? l : "",
                              onClick: () => this.removeItem(r),
                            },
                            " - ",
                          ),
                    );
                  })
                : null,
              s
                ? null
                : x().createElement(
                    f,
                    {
                      className: `btn btn-sm json-schema-form-item-add ${o.length ? "invalid" : null}`,
                      title: o.length ? o : "",
                      onClick: this.addItem,
                    },
                    "Add ",
                    m ? `${m} ` : "",
                    "item",
                  ),
            );
          }
        }
        class JsonSchemaArrayItemText extends C.Component {
          static defaultProps = wt;
          onChange = (e) => {
            const t = e.target.value;
            this.props.onChange(t, this.props.keyName);
          };
          render() {
            let {
              value: e,
              errors: t,
              description: r,
              disabled: a,
            } = this.props;
            return (
              e || (e = ""),
              (t = t.toJS ? t.toJS() : []),
              x().createElement(vt(), {
                type: "text",
                className: t.length ? "invalid" : "",
                title: t.length ? t : "",
                value: e,
                minLength: 0,
                debounceTimeout: 350,
                placeholder: r,
                onChange: this.onChange,
                disabled: a,
              })
            );
          }
        }
        class JsonSchemaArrayItemFile extends C.Component {
          static defaultProps = wt;
          onFileChange = (e) => {
            const t = e.target.files[0];
            this.props.onChange(t, this.props.keyName);
          };
          render() {
            let { getComponent: e, errors: t, disabled: r } = this.props;
            const a = e("Input"),
              n = r || !("FormData" in window);
            return x().createElement(a, {
              type: "file",
              className: t.length ? "invalid" : "",
              title: t.length ? t : "",
              onChange: this.onFileChange,
              disabled: n,
            });
          }
        }
        class JsonSchema_boolean extends C.Component {
          static defaultProps = wt;
          onEnumChange = (e) => this.props.onChange(e);
          render() {
            let {
              getComponent: e,
              value: t,
              errors: r,
              schema: a,
              required: n,
              disabled: s,
            } = this.props;
            r = r.toJS ? r.toJS() : [];
            let o = a && a.get ? a.get("enum") : null,
              l = !o || !n,
              c = !o && ["true", "false"];
            const i = e("Select");
            return x().createElement(i, {
              className: r.length ? "invalid" : "",
              title: r.length ? r : "",
              value: String(t),
              disabled: s,
              allowedValues: o ? [...o] : c,
              allowEmptyValue: l,
              onChange: this.onEnumChange,
            });
          }
        }
        const stringifyObjectErrors = (e) =>
          e.map((e) => {
            const t = void 0 !== e.propKey ? e.propKey : e.index;
            let r =
              "string" == typeof e
                ? e
                : "string" == typeof e.error
                  ? e.error
                  : null;
            if (!t && r) return r;
            let a = e.error,
              n = `/${e.propKey}`;
            for (; "object" == typeof a; ) {
              const e = void 0 !== a.propKey ? a.propKey : a.index;
              if (void 0 === e) break;
              if (((n += `/${e}`), !a.error)) break;
              a = a.error;
            }
            return `${n}: ${a}`;
          });
        class JsonSchema_object extends C.PureComponent {
          constructor() {
            super();
          }
          static defaultProps = wt;
          onChange = (e) => {
            this.props.onChange(e);
          };
          handleOnChange = (e) => {
            const t = e.target.value;
            this.onChange(t);
          };
          render() {
            let {
              getComponent: e,
              value: t,
              errors: r,
              disabled: a,
            } = this.props;
            const n = e("TextArea");
            return (
              (r = r.toJS ? r.toJS() : Array.isArray(r) ? r : []),
              x().createElement(
                "div",
                null,
                x().createElement(n, {
                  className: ut()({ invalid: r.length }),
                  title: r.length ? stringifyObjectErrors(r).join(", ") : "",
                  value: stringify(t),
                  disabled: a,
                  onChange: this.handleOnChange,
                }),
              )
            );
          }
        }
        function valueOrEmptyList(e) {
          return N.List.isList(e)
            ? e
            : Array.isArray(e)
              ? (0, N.fromJS)(e)
              : (0, N.List)();
        }
        const json_schema_5 = () => ({
            components: {
              modelExample: model_example,
              ModelWrapper,
              ModelCollapse,
              Model,
              Models,
              EnumModel: enum_model,
              ObjectModel,
              ArrayModel,
              PrimitiveModel: Primitive,
              schemes: Schemes,
              SchemesContainer,
              ...h,
            },
          }),
          bt = require("xml");
        var Ct = __webpack_require__.n(bt);
        const xt = require("randexp");
        var Ot = __webpack_require__.n(xt);
        const Nt = require("lodash/isEmpty");
        var kt = __webpack_require__.n(Nt);
        const shallowArrayEquals = (e) => (t) =>
            Array.isArray(e) &&
            Array.isArray(t) &&
            e.length === t.length &&
            e.every((e, r) => e === t[r]),
          list = (...e) => e;
        class Cache extends Map {
          delete(e) {
            const t = Array.from(this.keys()).find(shallowArrayEquals(e));
            return super.delete(t);
          }
          get(e) {
            const t = Array.from(this.keys()).find(shallowArrayEquals(e));
            return super.get(t);
          }
          has(e) {
            return (
              -1 !== Array.from(this.keys()).findIndex(shallowArrayEquals(e))
            );
          }
        }
        const utils_memoizeN = (e, t = list) => {
            const { Cache: r } = B();
            B().Cache = Cache;
            const a = B()(e, t);
            return (B().Cache = r), a;
          },
          At = {
            string: (e) =>
              e.pattern
                ? ((e) => {
                    try {
                      return new (Ot())(e).gen();
                    } catch (e) {
                      return "string";
                    }
                  })(e.pattern)
                : "string",
            string_email: () => "user@example.com",
            "string_date-time": () => new Date().toISOString(),
            string_date: () => new Date().toISOString().substring(0, 10),
            string_uuid: () => "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            string_hostname: () => "example.com",
            string_ipv4: () => "198.51.100.42",
            string_ipv6: () => "2001:0db8:5b96:0000:0000:426f:8e17:642a",
            number: () => 0,
            number_float: () => 0,
            integer: () => 0,
            boolean: (e) => "boolean" != typeof e.default || e.default,
          },
          primitive = (e) => {
            e = objectify(e);
            let { type: t, format: r } = e,
              a = At[`${t}_${r}`] || At[t];
            return isFunc(a) ? a(e) : "Unknown Type: " + e.type;
          },
          sanitizeRef = (e) =>
            deeplyStripKey(
              e,
              "$$ref",
              (e) => "string" == typeof e && e.indexOf("#") > -1,
            ),
          It = ["maxProperties", "minProperties"],
          qt = ["minItems", "maxItems"],
          jt = ["minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum"],
          Pt = ["minLength", "maxLength"],
          mergeJsonSchema = (e, t, r = {}) => {
            const a = { ...e };
            if (
              ([
                "example",
                "default",
                "enum",
                "xml",
                "type",
                ...It,
                ...qt,
                ...jt,
                ...Pt,
              ].forEach((e) =>
                ((e) => {
                  void 0 === a[e] && void 0 !== t[e] && (a[e] = t[e]);
                })(e),
              ),
              void 0 !== t.required &&
                Array.isArray(t.required) &&
                ((void 0 !== a.required && a.required.length) ||
                  (a.required = []),
                t.required.forEach((e) => {
                  a.required.includes(e) || a.required.push(e);
                })),
              t.properties)
            ) {
              a.properties || (a.properties = {});
              let e = objectify(t.properties);
              for (let n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  ((e[n] && e[n].deprecated) ||
                    (e[n] && e[n].readOnly && !r.includeReadOnly) ||
                    (e[n] && e[n].writeOnly && !r.includeWriteOnly) ||
                    a.properties[n] ||
                    ((a.properties[n] = e[n]),
                    !t.required &&
                      Array.isArray(t.required) &&
                      -1 !== t.required.indexOf(n) &&
                      (a.required ? a.required.push(n) : (a.required = [n]))));
            }
            return (
              t.items &&
                (a.items || (a.items = {}),
                (a.items = mergeJsonSchema(a.items, t.items, r))),
              a
            );
          },
          sampleFromSchemaGeneric = (e, t = {}, r = void 0, a = !1) => {
            e && isFunc(e.toJS) && (e = e.toJS());
            let n =
              void 0 !== r ||
              (e && void 0 !== e.example) ||
              (e && void 0 !== e.default);
            const s = !n && e && e.oneOf && e.oneOf.length > 0,
              o = !n && e && e.anyOf && e.anyOf.length > 0;
            if (!n && (s || o)) {
              const r = objectify(s ? e.oneOf[0] : e.anyOf[0]);
              if (
                (!(e = mergeJsonSchema(e, r, t)).xml &&
                  r.xml &&
                  (e.xml = r.xml),
                void 0 !== e.example && void 0 !== r.example)
              )
                n = !0;
              else if (r.properties) {
                e.properties || (e.properties = {});
                let a = objectify(r.properties);
                for (let n in a)
                  Object.prototype.hasOwnProperty.call(a, n) &&
                    ((a[n] && a[n].deprecated) ||
                      (a[n] && a[n].readOnly && !t.includeReadOnly) ||
                      (a[n] && a[n].writeOnly && !t.includeWriteOnly) ||
                      e.properties[n] ||
                      ((e.properties[n] = a[n]),
                      !r.required &&
                        Array.isArray(r.required) &&
                        -1 !== r.required.indexOf(n) &&
                        (e.required
                          ? e.required.push(n)
                          : (e.required = [n]))));
              }
            }
            const l = {};
            let {
                xml: c,
                type: i,
                example: p,
                properties: m,
                additionalProperties: u,
                items: d,
              } = e || {},
              { includeReadOnly: h, includeWriteOnly: g } = t;
            c = c || {};
            let y,
              { name: f, prefix: S, namespace: E } = c,
              _ = {};
            if (
              a &&
              ((f = f || "notagname"), (y = (S ? S + ":" : "") + f), E)
            ) {
              l[S ? "xmlns:" + S : "xmlns"] = E;
            }
            a && (_[y] = []);
            const schemaHasAny = (t) =>
              t.some((t) => Object.prototype.hasOwnProperty.call(e, t));
            e &&
              !i &&
              (m || u || schemaHasAny(It)
                ? (i = "object")
                : d || schemaHasAny(qt)
                  ? (i = "array")
                  : schemaHasAny(jt)
                    ? ((i = "number"), (e.type = "number"))
                    : n || e.enum || ((i = "string"), (e.type = "string")));
            const handleMinMaxItems = (t) => {
                if (
                  (null != e?.maxItems && (t = t.slice(0, e?.maxItems)),
                  null != e?.minItems)
                ) {
                  let r = 0;
                  for (; t.length < e?.minItems; ) t.push(t[r++ % t.length]);
                }
                return t;
              },
              v = objectify(m);
            let w,
              b = 0;
            const hasExceededMaxProperties = () =>
                e &&
                null !== e.maxProperties &&
                void 0 !== e.maxProperties &&
                b >= e.maxProperties,
              canAddProperty = (t) =>
                !e ||
                null === e.maxProperties ||
                void 0 === e.maxProperties ||
                (!hasExceededMaxProperties() &&
                  (!((t) =>
                    !(
                      e &&
                      e.required &&
                      e.required.length &&
                      e.required.includes(t)
                    ))(t) ||
                    e.maxProperties -
                      b -
                      (() => {
                        if (!e || !e.required) return 0;
                        let t = 0;
                        return (
                          a
                            ? e.required.forEach(
                                (e) => (t += void 0 === _[e] ? 0 : 1),
                              )
                            : e.required.forEach(
                                (e) =>
                                  (t +=
                                    void 0 ===
                                    _[y]?.find((t) => void 0 !== t[e])
                                      ? 0
                                      : 1),
                              ),
                          e.required.length - t
                        );
                      })() >
                      0));
            if (
              ((w = a
                ? (r, n = void 0) => {
                    if (e && v[r]) {
                      if (((v[r].xml = v[r].xml || {}), v[r].xml.attribute)) {
                        const e = Array.isArray(v[r].enum)
                            ? v[r].enum[0]
                            : void 0,
                          t = v[r].example,
                          a = v[r].default;
                        return void (l[v[r].xml.name || r] =
                          void 0 !== t
                            ? t
                            : void 0 !== a
                              ? a
                              : void 0 !== e
                                ? e
                                : primitive(v[r]));
                      }
                      v[r].xml.name = v[r].xml.name || r;
                    } else v[r] || !1 === u || (v[r] = { xml: { name: r } });
                    let s = sampleFromSchemaGeneric(
                      (e && v[r]) || void 0,
                      t,
                      n,
                      a,
                    );
                    canAddProperty(r) &&
                      (b++,
                      Array.isArray(s)
                        ? (_[y] = _[y].concat(s))
                        : _[y].push(s));
                  }
                : (r, n) => {
                    if (canAddProperty(r)) {
                      if (
                        Object.prototype.hasOwnProperty.call(
                          e,
                          "discriminator",
                        ) &&
                        e.discriminator &&
                        Object.prototype.hasOwnProperty.call(
                          e.discriminator,
                          "mapping",
                        ) &&
                        e.discriminator.mapping &&
                        Object.prototype.hasOwnProperty.call(e, "$$ref") &&
                        e.$$ref &&
                        e.discriminator.propertyName === r
                      ) {
                        for (let t in e.discriminator.mapping)
                          if (
                            -1 !== e.$$ref.search(e.discriminator.mapping[t])
                          ) {
                            _[r] = t;
                            break;
                          }
                      } else _[r] = sampleFromSchemaGeneric(v[r], t, n, a);
                      b++;
                    }
                  }),
              n)
            ) {
              let n;
              if (
                ((n = sanitizeRef(
                  void 0 !== r ? r : void 0 !== p ? p : e.default,
                )),
                !a)
              ) {
                if ("number" == typeof n && "string" === i) return `${n}`;
                if ("string" != typeof n || "string" === i) return n;
                try {
                  return JSON.parse(n);
                } catch (e) {
                  return n;
                }
              }
              if (
                (e || (i = Array.isArray(n) ? "array" : typeof n),
                "array" === i)
              ) {
                if (!Array.isArray(n)) {
                  if ("string" == typeof n) return n;
                  n = [n];
                }
                const r = e ? e.items : void 0;
                r &&
                  ((r.xml = r.xml || c || {}),
                  (r.xml.name = r.xml.name || c.name));
                let s = n.map((e) => sampleFromSchemaGeneric(r, t, e, a));
                return (
                  (s = handleMinMaxItems(s)),
                  c.wrapped
                    ? ((_[y] = s), kt()(l) || _[y].push({ _attr: l }))
                    : (_ = s),
                  _
                );
              }
              if ("object" === i) {
                if ("string" == typeof n) return n;
                for (let t in n)
                  Object.prototype.hasOwnProperty.call(n, t) &&
                    ((e && v[t] && v[t].readOnly && !h) ||
                      (e && v[t] && v[t].writeOnly && !g) ||
                      (e && v[t] && v[t].xml && v[t].xml.attribute
                        ? (l[v[t].xml.name || t] = n[t])
                        : w(t, n[t])));
                return kt()(l) || _[y].push({ _attr: l }), _;
              }
              return (_[y] = kt()(l) ? n : [{ _attr: l }, n]), _;
            }
            if ("object" === i) {
              for (let e in v)
                Object.prototype.hasOwnProperty.call(v, e) &&
                  ((v[e] && v[e].deprecated) ||
                    (v[e] && v[e].readOnly && !h) ||
                    (v[e] && v[e].writeOnly && !g) ||
                    w(e));
              if (
                (a && l && _[y].push({ _attr: l }), hasExceededMaxProperties())
              )
                return _;
              if (!0 === u)
                a
                  ? _[y].push({ additionalProp: "Anything can be here" })
                  : (_.additionalProp1 = {}),
                  b++;
              else if (u) {
                const r = objectify(u),
                  n = sampleFromSchemaGeneric(r, t, void 0, a);
                if (a && r.xml && r.xml.name && "notagname" !== r.xml.name)
                  _[y].push(n);
                else {
                  const t =
                    null !== e.minProperties &&
                    void 0 !== e.minProperties &&
                    b < e.minProperties
                      ? e.minProperties - b
                      : 3;
                  for (let e = 1; e <= t; e++) {
                    if (hasExceededMaxProperties()) return _;
                    if (a) {
                      const t = {};
                      (t["additionalProp" + e] = n.notagname), _[y].push(t);
                    } else _["additionalProp" + e] = n;
                    b++;
                  }
                }
              }
              return _;
            }
            if ("array" === i) {
              if (!d) return;
              let r;
              if (
                (a &&
                  ((d.xml = d.xml || e?.xml || {}),
                  (d.xml.name = d.xml.name || c.name)),
                Array.isArray(d.anyOf))
              )
                r = d.anyOf.map((e) =>
                  sampleFromSchemaGeneric(
                    mergeJsonSchema(e, d, t),
                    t,
                    void 0,
                    a,
                  ),
                );
              else if (Array.isArray(d.oneOf))
                r = d.oneOf.map((e) =>
                  sampleFromSchemaGeneric(
                    mergeJsonSchema(e, d, t),
                    t,
                    void 0,
                    a,
                  ),
                );
              else {
                if (!(!a || (a && c.wrapped)))
                  return sampleFromSchemaGeneric(d, t, void 0, a);
                r = [sampleFromSchemaGeneric(d, t, void 0, a)];
              }
              return (
                (r = handleMinMaxItems(r)),
                a && c.wrapped
                  ? ((_[y] = r), kt()(l) || _[y].push({ _attr: l }), _)
                  : r
              );
            }
            let C;
            if (e && Array.isArray(e.enum)) C = normalizeArray(e.enum)[0];
            else {
              if (!e) return;
              if (((C = primitive(e)), "number" == typeof C)) {
                let t = e.minimum;
                null != t && (e.exclusiveMinimum && t++, (C = t));
                let r = e.maximum;
                null != r && (e.exclusiveMaximum && r--, (C = r));
              }
              if (
                "string" == typeof C &&
                (null !== e.maxLength &&
                  void 0 !== e.maxLength &&
                  (C = C.slice(0, e.maxLength)),
                null !== e.minLength && void 0 !== e.minLength)
              ) {
                let t = 0;
                for (; C.length < e.minLength; ) C += C[t++ % C.length];
              }
            }
            if ("file" !== i)
              return a ? ((_[y] = kt()(l) ? C : [{ _attr: l }, C]), _) : C;
          },
          inferSchema = (e) => (
            e.schema && (e = e.schema), e.properties && (e.type = "object"), e
          ),
          createXMLExample = (e, t, r) => {
            const a = sampleFromSchemaGeneric(e, t, r, !0);
            if (a)
              return "string" == typeof a
                ? a
                : Ct()(a, { declaration: !0, indent: "\t" });
          },
          sampleFromSchema = (e, t, r) => sampleFromSchemaGeneric(e, t, r, !1),
          resolver = (e, t, r) => [e, JSON.stringify(t), JSON.stringify(r)],
          Mt = utils_memoizeN(createXMLExample, resolver),
          Rt = utils_memoizeN(sampleFromSchema, resolver),
          Tt = [{ when: /json/, shouldStringifyTypes: ["string"] }],
          Jt = ["object"],
          get_json_sample_schema = (e) => (t, r, a, n) => {
            const { fn: s } = e(),
              o = s.memoizedSampleFromSchema(t, r, n),
              l = typeof o,
              c = Tt.reduce(
                (e, t) =>
                  t.when.test(a) ? [...e, ...t.shouldStringifyTypes] : e,
                Jt,
              );
            return X()(c, (e) => e === l) ? JSON.stringify(o, null, 2) : o;
          },
          get_yaml_sample_schema = (e) => (t, r, a, n) => {
            const { fn: s } = e(),
              o = s.getJsonSampleSchema(t, r, a, n);
            let l;
            try {
              (l = Me().dump(
                Me().load(o),
                { lineWidth: -1 },
                { schema: Pe.JSON_SCHEMA },
              )),
                "\n" === l[l.length - 1] && (l = l.slice(0, l.length - 1));
            } catch (e) {
              return console.error(e), "error: could not generate yaml example";
            }
            return l.replace(/\t/g, "  ");
          },
          get_xml_sample_schema = (e) => (t, r, a) => {
            const { fn: n } = e();
            if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
              if (
                !t.$$ref &&
                (t.type || t.items || t.properties || t.additionalProperties)
              )
                return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
              if (t.$$ref) {
                let e = t.$$ref.match(/\S*\/(\S+)$/);
                t.xml.name = e[1];
              }
            }
            return n.memoizedCreateXMLExample(t, r, a);
          },
          get_sample_schema =
            (e) =>
            (t, r = "", a = {}, n = void 0) => {
              const { fn: s } = e();
              return (
                "function" == typeof t?.toJS && (t = t.toJS()),
                "function" == typeof n?.toJS && (n = n.toJS()),
                /xml/.test(r)
                  ? s.getXmlSampleSchema(t, a, n)
                  : /(yaml|yml)/.test(r)
                    ? s.getYamlSampleSchema(t, a, r, n)
                    : s.getJsonSampleSchema(t, a, r, n)
              );
            },
          json_schema_5_samples = ({ getSystem: e }) => {
            const t = get_json_sample_schema(e),
              r = get_yaml_sample_schema(e),
              a = get_xml_sample_schema(e),
              n = get_sample_schema(e);
            return {
              fn: {
                jsonSchema5: {
                  inferSchema,
                  sampleFromSchema,
                  sampleFromSchemaGeneric,
                  createXMLExample,
                  memoizedSampleFromSchema: Rt,
                  memoizedCreateXMLExample: Mt,
                  getJsonSampleSchema: t,
                  getYamlSampleSchema: r,
                  getXmlSampleSchema: a,
                  getSampleSchema: n,
                  mergeJsonSchema,
                },
                inferSchema,
                sampleFromSchema,
                sampleFromSchemaGeneric,
                createXMLExample,
                memoizedSampleFromSchema: Rt,
                memoizedCreateXMLExample: Mt,
                getJsonSampleSchema: t,
                getYamlSampleSchema: r,
                getXmlSampleSchema: a,
                getSampleSchema: n,
                mergeJsonSchema,
              },
            };
          },
          $t = require("lodash/constant");
        var Vt = __webpack_require__.n($t);
        const Dt = [
            "get",
            "put",
            "post",
            "delete",
            "options",
            "head",
            "patch",
            "trace",
          ],
          spec_selectors_state = (e) => e || (0, N.Map)(),
          Kt = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("lastError"),
          ),
          Lt = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("url"),
          ),
          Ut = (0, we.createSelector)(
            spec_selectors_state,
            (e) => e.get("spec") || "",
          ),
          zt = (0, we.createSelector)(
            spec_selectors_state,
            (e) => e.get("specSource") || "not-editor",
          ),
          Bt = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("json", (0, N.Map)()),
          ),
          Ft = (0, we.createSelector)(Bt, (e) => e.toJS()),
          Wt = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("resolved", (0, N.Map)()),
          ),
          specResolvedSubtree = (e, t) =>
            e.getIn(["resolvedSubtrees", ...t], void 0),
          mergerFn = (e, t) =>
            N.Map.isMap(e) && N.Map.isMap(t)
              ? t.get("$$ref")
                ? t
                : (0, N.OrderedMap)().mergeWith(mergerFn, e, t)
              : t,
          Ht = (0, we.createSelector)(spec_selectors_state, (e) =>
            (0, N.OrderedMap)().mergeWith(
              mergerFn,
              e.get("json"),
              e.get("resolvedSubtrees"),
            ),
          ),
          spec = (e) => Bt(e),
          Xt = (0, we.createSelector)(spec, () => !1),
          Gt = (0, we.createSelector)(spec, (e) =>
            returnSelfOrNewMap(e && e.get("info")),
          ),
          Yt = (0, we.createSelector)(spec, (e) =>
            returnSelfOrNewMap(e && e.get("externalDocs")),
          ),
          Qt = (0, we.createSelector)(Gt, (e) => e && e.get("version")),
          Zt = (0, we.createSelector)(Qt, (e) =>
            /v?([0-9]*)\.([0-9]*)\.([0-9]*)/i.exec(e).slice(1),
          ),
          er = (0, we.createSelector)(Ht, (e) => e.get("paths")),
          tr = Vt()([
            "get",
            "put",
            "post",
            "delete",
            "options",
            "head",
            "patch",
          ]),
          rr = (0, we.createSelector)(er, (e) => {
            if (!e || e.size < 1) return (0, N.List)();
            let t = (0, N.List)();
            return e && e.forEach
              ? (e.forEach((e, r) => {
                  if (!e || !e.forEach) return {};
                  e.forEach((e, a) => {
                    Dt.indexOf(a) < 0 ||
                      (t = t.push(
                        (0, N.fromJS)({
                          path: r,
                          method: a,
                          operation: e,
                          id: `${a}-${r}`,
                        }),
                      ));
                  });
                }),
                t)
              : (0, N.List)();
          }),
          ar = (0, we.createSelector)(spec, (e) =>
            (0, N.Set)(e.get("consumes")),
          ),
          nr = (0, we.createSelector)(spec, (e) =>
            (0, N.Set)(e.get("produces")),
          ),
          sr = (0, we.createSelector)(spec, (e) =>
            e.get("security", (0, N.List)()),
          ),
          or = (0, we.createSelector)(spec, (e) =>
            e.get("securityDefinitions"),
          ),
          findDefinition = (e, t) => {
            const r = e.getIn(["resolvedSubtrees", "definitions", t], null),
              a = e.getIn(["json", "definitions", t], null);
            return r || a || null;
          },
          lr = (0, we.createSelector)(spec, (e) => {
            const t = e.get("definitions");
            return N.Map.isMap(t) ? t : (0, N.Map)();
          }),
          cr = (0, we.createSelector)(spec, (e) => e.get("basePath")),
          ir = (0, we.createSelector)(spec, (e) => e.get("host")),
          pr = (0, we.createSelector)(spec, (e) =>
            e.get("schemes", (0, N.Map)()),
          ),
          mr = (0, we.createSelector)([rr, ar, nr], (e, t, r) =>
            e.map((e) =>
              e.update("operation", (e) => {
                if (e) {
                  if (!N.Map.isMap(e)) return;
                  return e.withMutations(
                    (e) => (
                      e.get("consumes") ||
                        e.update("consumes", (e) => (0, N.Set)(e).merge(t)),
                      e.get("produces") ||
                        e.update("produces", (e) => (0, N.Set)(e).merge(r)),
                      e
                    ),
                  );
                }
                return (0, N.Map)();
              }),
            ),
          ),
          ur = (0, we.createSelector)(spec, (e) => {
            const t = e.get("tags", (0, N.List)());
            return N.List.isList(t)
              ? t.filter((e) => N.Map.isMap(e))
              : (0, N.List)();
          }),
          tagDetails = (e, t) =>
            (ur(e) || (0, N.List)())
              .filter(N.Map.isMap)
              .find((e) => e.get("name") === t, (0, N.Map)()),
          dr = (0, we.createSelector)(mr, ur, (e, t) =>
            e.reduce(
              (e, t) => {
                let r = (0, N.Set)(t.getIn(["operation", "tags"]));
                return r.count() < 1
                  ? e.update("default", (0, N.List)(), (e) => e.push(t))
                  : r.reduce(
                      (e, r) => e.update(r, (0, N.List)(), (e) => e.push(t)),
                      e,
                    );
              },
              t.reduce(
                (e, t) => e.set(t.get("name"), (0, N.List)()),
                (0, N.OrderedMap)(),
              ),
            ),
          ),
          selectors_taggedOperations =
            (e) =>
            ({ getConfigs: t }) => {
              let { tagsSorter: r, operationsSorter: a } = t();
              return dr(e)
                .sortBy(
                  (e, t) => t,
                  (e, t) => {
                    let a = "function" == typeof r ? r : pe.tagsSorter[r];
                    return a ? a(e, t) : null;
                  },
                )
                .map((t, r) => {
                  let n = "function" == typeof a ? a : pe.operationsSorter[a],
                    s = n ? t.sort(n) : t;
                  return (0, N.Map)({
                    tagDetails: tagDetails(e, r),
                    operations: s,
                  });
                });
            },
          hr = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("responses", (0, N.Map)()),
          ),
          gr = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("requests", (0, N.Map)()),
          ),
          yr = (0, we.createSelector)(spec_selectors_state, (e) =>
            e.get("mutatedRequests", (0, N.Map)()),
          ),
          responseFor = (e, t, r) => hr(e).getIn([t, r], null),
          requestFor = (e, t, r) => gr(e).getIn([t, r], null),
          mutatedRequestFor = (e, t, r) => yr(e).getIn([t, r], null),
          allowTryItOutFor = () => !0,
          parameterWithMetaByIdentity = (e, t, r) => {
            const a = Ht(e).getIn(
                ["paths", ...t, "parameters"],
                (0, N.OrderedMap)(),
              ),
              n = e.getIn(
                ["meta", "paths", ...t, "parameters"],
                (0, N.OrderedMap)(),
              );
            return a
              .map((e) => {
                const t = n.get(`${r.get("in")}.${r.get("name")}`),
                  a = n.get(
                    `${r.get("in")}.${r.get("name")}.hash-${r.hashCode()}`,
                  );
                return (0, N.OrderedMap)().merge(e, t, a);
              })
              .find(
                (e) =>
                  e.get("in") === r.get("in") &&
                  e.get("name") === r.get("name"),
                (0, N.OrderedMap)(),
              );
          },
          parameterInclusionSettingFor = (e, t, r, a) => {
            const n = `${a}.${r}`;
            return e.getIn(
              ["meta", "paths", ...t, "parameter_inclusions", n],
              !1,
            );
          },
          parameterWithMeta = (e, t, r, a) => {
            const n = Ht(e)
              .getIn(["paths", ...t, "parameters"], (0, N.OrderedMap)())
              .find(
                (e) => e.get("in") === a && e.get("name") === r,
                (0, N.OrderedMap)(),
              );
            return parameterWithMetaByIdentity(e, t, n);
          },
          operationWithMeta = (e, t, r) => {
            const a = Ht(e).getIn(["paths", t, r], (0, N.OrderedMap)()),
              n = e.getIn(["meta", "paths", t, r], (0, N.OrderedMap)()),
              s = a
                .get("parameters", (0, N.List)())
                .map((a) => parameterWithMetaByIdentity(e, [t, r], a));
            return (0, N.OrderedMap)().merge(a, n).set("parameters", s);
          };
        function getParameter(e, t, r, a) {
          return (
            (t = t || []),
            e
              .getIn(["meta", "paths", ...t, "parameters"], (0, N.fromJS)([]))
              .find(
                (e) =>
                  N.Map.isMap(e) && e.get("name") === r && e.get("in") === a,
              ) || (0, N.Map)()
          );
        }
        const fr = (0, we.createSelector)(spec, (e) => {
          const t = e.get("host");
          return "string" == typeof t && t.length > 0 && "/" !== t[0];
        });
        function parameterValues(e, t, r) {
          return (
            (t = t || []),
            operationWithMeta(e, ...t)
              .get("parameters", (0, N.List)())
              .reduce(
                (e, t) => {
                  let a =
                    r && "body" === t.get("in")
                      ? t.get("value_xml")
                      : t.get("value");
                  return (
                    N.List.isList(a) && (a = a.filter((e) => "" !== e)),
                    e.set(paramToIdentifier(t, { allowHashes: !1 }), a)
                  );
                },
                (0, N.fromJS)({}),
              )
          );
        }
        function parametersIncludeIn(e, t = "") {
          if (N.List.isList(e))
            return e.some((e) => N.Map.isMap(e) && e.get("in") === t);
        }
        function parametersIncludeType(e, t = "") {
          if (N.List.isList(e))
            return e.some((e) => N.Map.isMap(e) && e.get("type") === t);
        }
        function contentTypeValues(e, t) {
          t = t || [];
          let r = Ht(e).getIn(["paths", ...t], (0, N.fromJS)({})),
            a = e.getIn(["meta", "paths", ...t], (0, N.fromJS)({})),
            n = currentProducesFor(e, t);
          const s = r.get("parameters") || new N.List(),
            o = a.get("consumes_value")
              ? a.get("consumes_value")
              : parametersIncludeType(s, "file")
                ? "multipart/form-data"
                : parametersIncludeType(s, "formData")
                  ? "application/x-www-form-urlencoded"
                  : void 0;
          return (0, N.fromJS)({
            requestContentType: o,
            responseContentType: n,
          });
        }
        function currentProducesFor(e, t) {
          t = t || [];
          const r = Ht(e).getIn(["paths", ...t], null);
          if (null === r) return;
          const a = e.getIn(["meta", "paths", ...t, "produces_value"], null),
            n = r.getIn(["produces", 0], null);
          return a || n || "application/json";
        }
        function producesOptionsFor(e, t) {
          t = t || [];
          const r = Ht(e),
            a = r.getIn(["paths", ...t], null);
          if (null === a) return;
          const [n] = t,
            s = a.get("produces", null),
            o = r.getIn(["paths", n, "produces"], null),
            l = r.getIn(["produces"], null);
          return s || o || l;
        }
        function consumesOptionsFor(e, t) {
          t = t || [];
          const r = Ht(e),
            a = r.getIn(["paths", ...t], null);
          if (null === a) return;
          const [n] = t,
            s = a.get("consumes", null),
            o = r.getIn(["paths", n, "consumes"], null),
            l = r.getIn(["consumes"], null);
          return s || o || l;
        }
        const operationScheme = (e, t, r) => {
            let a = e.get("url").match(/^([a-z][a-z0-9+\-.]*):/),
              n = Array.isArray(a) ? a[1] : null;
            return (
              e.getIn(["scheme", t, r]) ||
              e.getIn(["scheme", "_defaultScheme"]) ||
              n ||
              ""
            );
          },
          canExecuteScheme = (e, t, r) =>
            ["http", "https"].indexOf(operationScheme(e, t, r)) > -1,
          validationErrors = (e, t) => {
            t = t || [];
            const r = e.getIn(
                ["meta", "paths", ...t, "parameters"],
                (0, N.fromJS)([]),
              ),
              a = [];
            if (0 === r.length) return a;
            const getErrorsWithPaths = (e, t = []) => {
              const getNestedErrorsWithPaths = (e, t) => {
                const r = [...t, e.get("propKey") || e.get("index")];
                return N.Map.isMap(e.get("error"))
                  ? getErrorsWithPaths(e.get("error"), r)
                  : { error: e.get("error"), path: r };
              };
              return N.List.isList(e)
                ? e.map((e) =>
                    N.Map.isMap(e)
                      ? getNestedErrorsWithPaths(e, t)
                      : { error: e, path: t },
                  )
                : getNestedErrorsWithPaths(e, t);
            };
            return (
              r.forEach((e, t) => {
                const r = t.split(".").slice(1, -1).join("."),
                  n = e.get("errors");
                if (n && n.count()) {
                  getErrorsWithPaths(n).forEach(({ error: e, path: t }) => {
                    a.push(
                      ((e, t, r) =>
                        `For '${r}'${(t = t.reduce((e, t) => ("number" == typeof t ? `${e}[${t}]` : e ? `${e}.${t}` : t), "")) ? ` at path '${t}'` : ""}: ${e}.`)(
                        e,
                        t,
                        r,
                      ),
                    );
                  });
                }
              }),
              a
            );
          },
          validateBeforeExecute = (e, t) => 0 === validationErrors(e, t).length,
          getOAS3RequiredRequestBodyContentType = (e, t) => {
            let r = { requestBody: !1, requestContentType: {} },
              a = e.getIn(
                ["resolvedSubtrees", "paths", ...t, "requestBody"],
                (0, N.fromJS)([]),
              );
            return (
              a.size < 1 ||
                (a.getIn(["required"]) &&
                  (r.requestBody = a.getIn(["required"])),
                a
                  .getIn(["content"])
                  .entrySeq()
                  .forEach((e) => {
                    const t = e[0];
                    if (e[1].getIn(["schema", "required"])) {
                      const a = e[1].getIn(["schema", "required"]).toJS();
                      r.requestContentType[t] = a;
                    }
                  })),
              r
            );
          },
          isMediaTypeSchemaPropertiesEqual = (e, t, r, a) => {
            if ((r || a) && r === a) return !0;
            let n = e.getIn(
              ["resolvedSubtrees", "paths", ...t, "requestBody", "content"],
              (0, N.fromJS)([]),
            );
            if (n.size < 2 || !r || !a) return !1;
            let s = n.getIn([r, "schema", "properties"], (0, N.fromJS)([])),
              o = n.getIn([a, "schema", "properties"], (0, N.fromJS)([]));
            return !!s.equals(o);
          };
        function returnSelfOrNewMap(e) {
          return N.Map.isMap(e) ? e : new N.Map();
        }
        const Sr = require("lodash/isString");
        var Er = __webpack_require__.n(Sr);
        const _r = require("lodash/debounce");
        var vr = __webpack_require__.n(_r);
        const wr = require("lodash/set");
        var br = __webpack_require__.n(wr);
        const Cr = require("lodash/fp/assocPath");
        var xr = __webpack_require__.n(Cr);
        const Or = "spec_update_spec",
          Nr = "spec_update_url",
          kr = "spec_update_json",
          Ar = "spec_update_param",
          Ir = "spec_update_empty_param_inclusion",
          qr = "spec_validate_param",
          jr = "spec_set_response",
          Pr = "spec_set_request",
          Mr = "spec_set_mutated_request",
          Rr = "spec_log_request",
          Tr = "spec_clear_response",
          Jr = "spec_clear_request",
          $r = "spec_clear_validate_param",
          Vr = "spec_update_operation_meta_value",
          Dr = "spec_update_resolved",
          Kr = "spec_update_resolved_subtree",
          Lr = "set_scheme",
          toStr = (e) => (Er()(e) ? e : "");
        function updateSpec(e) {
          const t = toStr(e).replace(/\t/g, "  ");
          if ("string" == typeof e) return { type: Or, payload: t };
        }
        function updateResolved(e) {
          return { type: Dr, payload: e };
        }
        function updateUrl(e) {
          return { type: Nr, payload: e };
        }
        function updateJsonSpec(e) {
          return { type: kr, payload: e };
        }
        const parseToJson =
          (e) =>
          ({ specActions: t, specSelectors: r, errActions: a }) => {
            let { specStr: n } = r,
              s = null;
            try {
              (e = e || n()),
                a.clear({ source: "parser" }),
                (s = Me().load(e, { schema: Pe.JSON_SCHEMA }));
            } catch (e) {
              return (
                console.error(e),
                a.newSpecErr({
                  source: "parser",
                  level: "error",
                  message: e.reason,
                  line: e.mark && e.mark.line ? e.mark.line + 1 : void 0,
                })
              );
            }
            return s && "object" == typeof s ? t.updateJsonSpec(s) : {};
          };
        let Ur = !1;
        const resolveSpec =
          (e, t) =>
          ({
            specActions: r,
            specSelectors: a,
            errActions: n,
            fn: { fetch: s, resolve: o, AST: l = {} },
            getConfigs: c,
          }) => {
            Ur ||
              (console.warn(
                "specActions.resolveSpec is deprecated since v3.10.0 and will be removed in v4.0.0; use requestResolvedSubtree instead!",
              ),
              (Ur = !0));
            const {
              modelPropertyMacro: i,
              parameterMacro: p,
              requestInterceptor: m,
              responseInterceptor: u,
            } = c();
            void 0 === e && (e = a.specJson()), void 0 === t && (t = a.url());
            let d = l.getLineNumberForPath ? l.getLineNumberForPath : () => {},
              h = a.specStr();
            return o({
              fetch: s,
              spec: e,
              baseDoc: String(new URL(t, document.baseURI)),
              modelPropertyMacro: i,
              parameterMacro: p,
              requestInterceptor: m,
              responseInterceptor: u,
            }).then(({ spec: e, errors: t }) => {
              if (
                (n.clear({ type: "thrown" }), Array.isArray(t) && t.length > 0)
              ) {
                let e = t.map(
                  (e) => (
                    console.error(e),
                    (e.line = e.fullPath ? d(h, e.fullPath) : null),
                    (e.path = e.fullPath ? e.fullPath.join(".") : null),
                    (e.level = "error"),
                    (e.type = "thrown"),
                    (e.source = "resolver"),
                    Object.defineProperty(e, "message", {
                      enumerable: !0,
                      value: e.message,
                    }),
                    e
                  ),
                );
                n.newThrownErrBatch(e);
              }
              return r.updateResolved(e);
            });
          };
        let zr = [];
        const Br = vr()(() => {
            const e = zr.reduce(
              (e, { path: t, system: r }) => (
                e.has(r) || e.set(r, []), e.get(r).push(t), e
              ),
              new Map(),
            );
            (zr = []),
              e.forEach(async (e, t) => {
                if (!t)
                  return void console.error(
                    "debResolveSubtrees: don't have a system to operate on, aborting.",
                  );
                if (!t.fn.resolveSubtree)
                  return void console.error(
                    "Error: Swagger-Client did not provide a `resolveSubtree` method, doing nothing.",
                  );
                const {
                    errActions: r,
                    errSelectors: a,
                    fn: { resolveSubtree: n, fetch: s, AST: o = {} },
                    specSelectors: l,
                    specActions: c,
                  } = t,
                  i = o.getLineNumberForPath ?? Vt()(void 0),
                  p = l.specStr(),
                  {
                    modelPropertyMacro: m,
                    parameterMacro: u,
                    requestInterceptor: d,
                    responseInterceptor: h,
                  } = t.getConfigs();
                try {
                  const t = await e.reduce(
                    async (e, t) => {
                      let { resultMap: o, specWithCurrentSubtrees: c } =
                        await e;
                      const { errors: g, spec: y } = await n(c, t, {
                        baseDoc: String(new URL(l.url(), document.baseURI)),
                        modelPropertyMacro: m,
                        parameterMacro: u,
                        requestInterceptor: d,
                        responseInterceptor: h,
                      });
                      if (
                        (a.allErrors().size &&
                          r.clearBy(
                            (e) =>
                              "thrown" !== e.get("type") ||
                              "resolver" !== e.get("source") ||
                              !e
                                .get("fullPath")
                                .every((e, r) => e === t[r] || void 0 === t[r]),
                          ),
                        Array.isArray(g) && g.length > 0)
                      ) {
                        let e = g.map(
                          (e) => (
                            (e.line = e.fullPath ? i(p, e.fullPath) : null),
                            (e.path = e.fullPath ? e.fullPath.join(".") : null),
                            (e.level = "error"),
                            (e.type = "thrown"),
                            (e.source = "resolver"),
                            Object.defineProperty(e, "message", {
                              enumerable: !0,
                              value: e.message,
                            }),
                            e
                          ),
                        );
                        r.newThrownErrBatch(e);
                      }
                      return (
                        y &&
                          l.isOAS3() &&
                          "components" === t[0] &&
                          "securitySchemes" === t[1] &&
                          (await Promise.all(
                            Object.values(y)
                              .filter((e) => "openIdConnect" === e.type)
                              .map(async (e) => {
                                const t = {
                                  url: e.openIdConnectUrl,
                                  requestInterceptor: d,
                                  responseInterceptor: h,
                                };
                                try {
                                  const r = await s(t);
                                  r instanceof Error || r.status >= 400
                                    ? console.error(r.statusText + " " + t.url)
                                    : (e.openIdConnectData = JSON.parse(
                                        r.text,
                                      ));
                                } catch (e) {
                                  console.error(e);
                                }
                              }),
                          )),
                        br()(o, t, y),
                        (c = xr()(t, y, c)),
                        { resultMap: o, specWithCurrentSubtrees: c }
                      );
                    },
                    Promise.resolve({
                      resultMap: (
                        l.specResolvedSubtree([]) || (0, N.Map)()
                      ).toJS(),
                      specWithCurrentSubtrees: l.specJS(),
                    }),
                  );
                  c.updateResolvedSubtree([], t.resultMap);
                } catch (e) {
                  console.error(e);
                }
              });
          }, 35),
          requestResolvedSubtree = (e) => (t) => {
            zr.find(
              ({ path: r, system: a }) =>
                a === t && r.toString() === e.toString(),
            ) || (zr.push({ path: e, system: t }), Br());
          };
        function changeParam(e, t, r, a, n) {
          return {
            type: Ar,
            payload: { path: e, value: a, paramName: t, paramIn: r, isXml: n },
          };
        }
        function changeParamByIdentity(e, t, r, a) {
          return {
            type: Ar,
            payload: { path: e, param: t, value: r, isXml: a },
          };
        }
        const updateResolvedSubtree = (e, t) => ({
            type: Kr,
            payload: { path: e, value: t },
          }),
          invalidateResolvedSubtreeCache = () => ({
            type: Kr,
            payload: { path: [], value: (0, N.Map)() },
          }),
          validateParams = (e, t) => ({
            type: qr,
            payload: { pathMethod: e, isOAS3: t },
          }),
          updateEmptyParamInclusion = (e, t, r, a) => ({
            type: Ir,
            payload: {
              pathMethod: e,
              paramName: t,
              paramIn: r,
              includeEmptyValue: a,
            },
          });
        function clearValidateParams(e) {
          return { type: $r, payload: { pathMethod: e } };
        }
        function changeConsumesValue(e, t) {
          return {
            type: Vr,
            payload: { path: e, value: t, key: "consumes_value" },
          };
        }
        function changeProducesValue(e, t) {
          return {
            type: Vr,
            payload: { path: e, value: t, key: "produces_value" },
          };
        }
        const setResponse = (e, t, r) => ({
            payload: { path: e, method: t, res: r },
            type: jr,
          }),
          setRequest = (e, t, r) => ({
            payload: { path: e, method: t, req: r },
            type: Pr,
          }),
          setMutatedRequest = (e, t, r) => ({
            payload: { path: e, method: t, req: r },
            type: Mr,
          }),
          logRequest = (e) => ({ payload: e, type: Rr }),
          executeRequest =
            (e) =>
            ({
              fn: t,
              specActions: r,
              specSelectors: a,
              getConfigs: n,
              oas3Selectors: s,
            }) => {
              let { pathName: o, method: l, operation: c } = e,
                { requestInterceptor: i, responseInterceptor: p } = n(),
                m = c.toJS();
              if (
                (c &&
                  c.get("parameters") &&
                  c
                    .get("parameters")
                    .filter((e) => e && !0 === e.get("allowEmptyValue"))
                    .forEach((t) => {
                      if (
                        a.parameterInclusionSettingFor(
                          [o, l],
                          t.get("name"),
                          t.get("in"),
                        )
                      ) {
                        e.parameters = e.parameters || {};
                        const r = paramToValue(t, e.parameters);
                        (!r || (r && 0 === r.size)) &&
                          (e.parameters[t.get("name")] = "");
                      }
                    }),
                (e.contextUrl = ue()(a.url()).toString()),
                m && m.operationId
                  ? (e.operationId = m.operationId)
                  : m && o && l && (e.operationId = t.opId(m, o, l)),
                a.isOAS3())
              ) {
                const t = `${o}:${l}`;
                e.server = s.selectedServer(t) || s.selectedServer();
                const r = s
                    .serverVariables({ server: e.server, namespace: t })
                    .toJS(),
                  a = s.serverVariables({ server: e.server }).toJS();
                (e.serverVariables = Object.keys(r).length ? r : a),
                  (e.requestContentType = s.requestContentType(o, l)),
                  (e.responseContentType =
                    s.responseContentType(o, l) || "*/*");
                const n = s.requestBodyValue(o, l),
                  c = s.requestBodyInclusionSetting(o, l);
                n && n.toJS
                  ? (e.requestBody = n
                      .map((e) => (N.Map.isMap(e) ? e.get("value") : e))
                      .filter(
                        (e, t) =>
                          (Array.isArray(e)
                            ? 0 !== e.length
                            : !isEmptyValue(e)) || c.get(t),
                      )
                      .toJS())
                  : (e.requestBody = n);
              }
              let u = Object.assign({}, e);
              (u = t.buildRequest(u)), r.setRequest(e.pathName, e.method, u);
              (e.requestInterceptor = async (t) => {
                let a = await i.apply(void 0, [t]),
                  n = Object.assign({}, a);
                return r.setMutatedRequest(e.pathName, e.method, n), a;
              }),
                (e.responseInterceptor = p);
              const d = Date.now();
              return t
                .execute(e)
                .then((t) => {
                  (t.duration = Date.now() - d),
                    r.setResponse(e.pathName, e.method, t);
                })
                .catch((t) => {
                  "Failed to fetch" === t.message &&
                    ((t.name = ""),
                    (t.message =
                      '**Failed to fetch.**  \n**Possible Reasons:** \n  - CORS \n  - Network Failure \n  - URL scheme must be "http" or "https" for CORS request.')),
                    r.setResponse(e.pathName, e.method, { error: !0, err: t });
                });
            },
          actions_execute =
            ({ path: e, method: t, ...r } = {}) =>
            (a) => {
              let {
                  fn: { fetch: n },
                  specSelectors: s,
                  specActions: o,
                } = a,
                l = s.specJsonWithResolvedSubtrees().toJS(),
                c = s.operationScheme(e, t),
                { requestContentType: i, responseContentType: p } = s
                  .contentTypeValues([e, t])
                  .toJS(),
                m = /xml/i.test(i),
                u = s.parameterValues([e, t], m).toJS();
              return o.executeRequest({
                ...r,
                fetch: n,
                spec: l,
                pathName: e,
                method: t,
                parameters: u,
                requestContentType: i,
                scheme: c,
                responseContentType: p,
              });
            };
        function clearResponse(e, t) {
          return { type: Tr, payload: { path: e, method: t } };
        }
        function clearRequest(e, t) {
          return { type: Jr, payload: { path: e, method: t } };
        }
        function setScheme(e, t, r) {
          return { type: Lr, payload: { scheme: e, path: t, method: r } };
        }
        const Fr = {
            [Or]: (e, t) =>
              "string" == typeof t.payload ? e.set("spec", t.payload) : e,
            [Nr]: (e, t) => e.set("url", t.payload + ""),
            [kr]: (e, t) => e.set("json", fromJSOrdered(t.payload)),
            [Dr]: (e, t) => e.setIn(["resolved"], fromJSOrdered(t.payload)),
            [Kr]: (e, t) => {
              const { value: r, path: a } = t.payload;
              return e.setIn(["resolvedSubtrees", ...a], fromJSOrdered(r));
            },
            [Ar]: (e, { payload: t }) => {
              let {
                  path: r,
                  paramName: a,
                  paramIn: n,
                  param: s,
                  value: o,
                  isXml: l,
                } = t,
                c = s ? paramToIdentifier(s) : `${n}.${a}`;
              const i = l ? "value_xml" : "value";
              return e.setIn(
                ["meta", "paths", ...r, "parameters", c, i],
                (0, N.fromJS)(o),
              );
            },
            [Ir]: (e, { payload: t }) => {
              let {
                pathMethod: r,
                paramName: a,
                paramIn: n,
                includeEmptyValue: s,
              } = t;
              if (!a || !n)
                return (
                  console.warn(
                    "Warning: UPDATE_EMPTY_PARAM_INCLUSION could not generate a paramKey.",
                  ),
                  e
                );
              const o = `${n}.${a}`;
              return e.setIn(
                ["meta", "paths", ...r, "parameter_inclusions", o],
                s,
              );
            },
            [qr]: (e, { payload: { pathMethod: t, isOAS3: r } }) => {
              const a = Ht(e).getIn(["paths", ...t]),
                n = parameterValues(e, t).toJS();
              return e.updateIn(
                ["meta", "paths", ...t, "parameters"],
                (0, N.fromJS)({}),
                (s) =>
                  a.get("parameters", (0, N.List)()).reduce((a, s) => {
                    const o = paramToValue(s, n),
                      l = parameterInclusionSettingFor(
                        e,
                        t,
                        s.get("name"),
                        s.get("in"),
                      ),
                      c = ((
                        e,
                        t,
                        { isOAS3: r = !1, bypassRequiredCheck: a = !1 } = {},
                      ) => {
                        let n = e.get("required"),
                          { schema: s, parameterContentMediaType: o } =
                            getParameterSchema(e, { isOAS3: r });
                        return validateValueBySchema(t, s, n, a, o);
                      })(s, o, { bypassRequiredCheck: l, isOAS3: r });
                    return a.setIn(
                      [paramToIdentifier(s), "errors"],
                      (0, N.fromJS)(c),
                    );
                  }, s),
              );
            },
            [$r]: (e, { payload: { pathMethod: t } }) =>
              e.updateIn(
                ["meta", "paths", ...t, "parameters"],
                (0, N.fromJS)([]),
                (e) => e.map((e) => e.set("errors", (0, N.fromJS)([]))),
              ),
            [jr]: (e, { payload: { res: t, path: r, method: a } }) => {
              let n;
              (n = t.error
                ? Object.assign(
                    {
                      error: !0,
                      name: t.err.name,
                      message: t.err.message,
                      statusCode: t.err.statusCode,
                    },
                    t.err.response,
                  )
                : t),
                (n.headers = n.headers || {});
              let s = e.setIn(["responses", r, a], fromJSOrdered(n));
              return (
                L.Blob &&
                  n.data instanceof L.Blob &&
                  (s = s.setIn(["responses", r, a, "text"], n.data)),
                s
              );
            },
            [Pr]: (e, { payload: { req: t, path: r, method: a } }) =>
              e.setIn(["requests", r, a], fromJSOrdered(t)),
            [Mr]: (e, { payload: { req: t, path: r, method: a } }) =>
              e.setIn(["mutatedRequests", r, a], fromJSOrdered(t)),
            [Vr]: (e, { payload: { path: t, value: r, key: a } }) => {
              let n = ["paths", ...t],
                s = ["meta", "paths", ...t];
              return e.getIn(["json", ...n]) ||
                e.getIn(["resolved", ...n]) ||
                e.getIn(["resolvedSubtrees", ...n])
                ? e.setIn([...s, a], (0, N.fromJS)(r))
                : e;
            },
            [Tr]: (e, { payload: { path: t, method: r } }) =>
              e.deleteIn(["responses", t, r]),
            [Jr]: (e, { payload: { path: t, method: r } }) =>
              e.deleteIn(["requests", t, r]),
            [Lr]: (e, { payload: { scheme: t, path: r, method: a } }) =>
              r && a
                ? e.setIn(["scheme", r, a], t)
                : r || a
                  ? void 0
                  : e.setIn(["scheme", "_defaultScheme"], t),
          },
          wrap_actions_updateSpec =
            (e, { specActions: t }) =>
            (...r) => {
              e(...r), t.parseToJson(...r);
            },
          wrap_actions_updateJsonSpec =
            (e, { specActions: t }) =>
            (...r) => {
              e(...r), t.invalidateResolvedSubtreeCache();
              const [a] = r,
                n = He()(a, ["paths"]) || {};
              Object.keys(n).forEach((e) => {
                He()(n, [e]).$ref && t.requestResolvedSubtree(["paths", e]);
              }),
                t.requestResolvedSubtree(["components", "securitySchemes"]);
            },
          wrap_actions_executeRequest =
            (e, { specActions: t }) =>
            (r) => (t.logRequest(r), e(r)),
          wrap_actions_validateParams =
            (e, { specSelectors: t }) =>
            (r) =>
              e(r, t.isOAS3()),
          plugins_spec = () => ({
            statePlugins: {
              spec: {
                wrapActions: { ...f },
                reducers: { ...Fr },
                actions: { ...y },
                selectors: { ...g },
              },
            },
          }),
          Wr = require("swagger-client/es/resolver/strategies/generic");
        var Hr = __webpack_require__.n(Wr);
        const Xr = require("swagger-client/es/resolver/strategies/openapi-2");
        var Gr = __webpack_require__.n(Xr);
        const Yr = require("swagger-client/es/resolver/strategies/openapi-3-0");
        var Qr = __webpack_require__.n(Yr);
        const Zr = require("swagger-client/es/resolver/strategies/openapi-3-1-apidom");
        var ea = __webpack_require__.n(Zr);
        const ta = require("swagger-client/es/resolver"),
          ra = require("swagger-client/es/execute"),
          aa = require("swagger-client/es/http");
        var na = __webpack_require__.n(aa);
        const sa = require("swagger-client/es/subtree-resolver"),
          oa = require("swagger-client/es/helpers"),
          configs_wrap_actions_loaded =
            (e, t) =>
            (...r) => {
              e(...r);
              const a = t.getConfigs().withCredentials;
              t.fn.fetch.withCredentials = a;
            };
        function swagger_client({ configs: e, getConfigs: t }) {
          return {
            fn: {
              fetch: (0, aa.makeHttp)(na(), e.preFetch, e.postFetch),
              buildRequest: ra.buildRequest,
              execute: ra.execute,
              resolve: (0, ta.makeResolve)({
                strategies: [ea(), Qr(), Gr(), Hr()],
              }),
              resolveSubtree: async (e, r, a = {}) => {
                const n = t(),
                  s = {
                    modelPropertyMacro: n.modelPropertyMacro,
                    parameterMacro: n.parameterMacro,
                    requestInterceptor: n.requestInterceptor,
                    responseInterceptor: n.responseInterceptor,
                    strategies: [ea(), Qr(), Gr(), Hr()],
                  };
                return (0, sa.makeResolveSubtree)(s)(e, r, a);
              },
              serializeRes: aa.serializeRes,
              opId: oa.opId,
            },
            statePlugins: {
              configs: { wrapActions: { loaded: configs_wrap_actions_loaded } },
            },
          };
        }
        function util() {
          return { fn: { shallowEqualKeys } };
        }
        const la = require("react-dom");
        var ca = __webpack_require__.n(la);
        const ia = require("react-redux"),
          pa = require("lodash/identity");
        var ma = __webpack_require__.n(pa);
        const withSystem = (e) => (t) => {
            const { fn: r } = e();
            class WithSystem extends C.Component {
              render() {
                return x().createElement(
                  t,
                  et()({}, e(), this.props, this.context),
                );
              }
            }
            return (
              (WithSystem.displayName = `WithSystem(${r.getDisplayName(t)})`),
              WithSystem
            );
          },
          withRoot = (e, t) => (r) => {
            const { fn: a } = e();
            class WithRoot extends C.Component {
              render() {
                return x().createElement(
                  ia.Provider,
                  { store: t },
                  x().createElement(r, et()({}, this.props, this.context)),
                );
              }
            }
            return (
              (WithRoot.displayName = `WithRoot(${a.getDisplayName(r)})`),
              WithRoot
            );
          },
          withConnect = (e, t, r) =>
            (0, O.compose)(
              r ? withRoot(e, r) : ma(),
              (0, ia.connect)((r, a) => {
                const n = { ...a, ...e() },
                  s = t.prototype?.mapStateToProps || ((e) => ({ state: e }));
                return s(r, n);
              }),
              withSystem(e),
            )(t),
          handleProps = (e, t, r, a) => {
            for (const n in t) {
              const s = t[n];
              "function" == typeof s && s(r[n], a[n], e());
            }
          },
          withMappedContainer = (e, t, r) => (t, a) => {
            const { fn: n } = e(),
              s = r(t, "root");
            class WithMappedContainer extends C.Component {
              constructor(t, r) {
                super(t, r), handleProps(e, a, t, {});
              }
              UNSAFE_componentWillReceiveProps(t) {
                handleProps(e, a, t, this.props);
              }
              render() {
                const e = Ie()(this.props, a ? Object.keys(a) : []);
                return x().createElement(s, e);
              }
            }
            return (
              (WithMappedContainer.displayName = `WithMappedContainer(${n.getDisplayName(s)})`),
              WithMappedContainer
            );
          },
          render = (e, t, r, a) => (n) => {
            const s = r(e, t, a)("App", "root"),
              { createRoot: o } = ca();
            o(n).render(x().createElement(s, null));
          },
          getComponent =
            (e, t, r) =>
            (a, n, s = {}) => {
              if ("string" != typeof a)
                throw new TypeError(
                  "Need a string, to fetch a component. Was given a " +
                    typeof a,
                );
              const o = r(a);
              return o
                ? n
                  ? "root" === n
                    ? withConnect(e, o, t())
                    : withConnect(e, o)
                  : o
                : (s.failSilently ||
                    e().log.warn("Could not find component:", a),
                  null);
            },
          getDisplayName = (e) => e.displayName || e.name || "Component",
          view = ({ getComponents: e, getStore: t, getSystem: r }) => {
            const a =
              ((n = getComponent(r, t, e)), ie(n, (...e) => JSON.stringify(e)));
            var n;
            const s = ((e) => utils_memoizeN(e, (...e) => e))(
              withMappedContainer(r, 0, a),
            );
            return {
              rootInjects: {
                getComponent: a,
                makeMappedContainer: s,
                render: render(r, t, getComponent, e),
              },
              fn: { getDisplayName },
            };
          },
          view_legacy = ({
            React: e,
            getSystem: t,
            getStore: r,
            getComponents: a,
          }) => {
            const n = {},
              s = parseInt(e?.version, 10);
            return (
              s >= 16 &&
                s < 18 &&
                (n.render = ((e, t, r, a) => (n) => {
                  const s = r(e, t, a)("App", "root");
                  ca().render(x().createElement(s, null), n);
                })(t, r, getComponent, a)),
              { rootInjects: n }
            );
          };
        function downloadUrlPlugin(e) {
          let { fn: t } = e;
          const r = {
            download:
              (e) =>
              ({
                errActions: r,
                specSelectors: a,
                specActions: n,
                getConfigs: s,
              }) => {
                let { fetch: o } = t;
                const l = s();
                function next(t) {
                  if (t instanceof Error || t.status >= 400)
                    return (
                      n.updateLoadingStatus("failed"),
                      r.newThrownErr(
                        Object.assign(
                          new Error((t.message || t.statusText) + " " + e),
                          { source: "fetch" },
                        ),
                      ),
                      void (
                        !t.status &&
                        t instanceof Error &&
                        (function checkPossibleFailReasons() {
                          try {
                            let t;
                            if (
                              ("URL" in L
                                ? (t = new URL(e))
                                : ((t = document.createElement("a")),
                                  (t.href = e)),
                              "https:" !== t.protocol &&
                                "https:" === L.location.protocol)
                            ) {
                              const e = Object.assign(
                                new Error(
                                  `Possible mixed-content issue? The page was loaded over https:// but a ${t.protocol}// URL was specified. Check that you are not attempting to load mixed content.`,
                                ),
                                { source: "fetch" },
                              );
                              return void r.newThrownErr(e);
                            }
                            if (t.origin !== L.location.origin) {
                              const e = Object.assign(
                                new Error(
                                  `Possible cross-origin (CORS) issue? The URL origin (${t.origin}) does not match the page (${L.location.origin}). Check the server returns the correct 'Access-Control-Allow-*' headers.`,
                                ),
                                { source: "fetch" },
                              );
                              r.newThrownErr(e);
                            }
                          } catch (e) {
                            return;
                          }
                        })()
                      )
                    );
                  n.updateLoadingStatus("success"),
                    n.updateSpec(t.text),
                    a.url() !== e && n.updateUrl(e);
                }
                (e = e || a.url()),
                  n.updateLoadingStatus("loading"),
                  r.clear({ source: "fetch" }),
                  o({
                    url: e,
                    loadSpec: !0,
                    requestInterceptor: l.requestInterceptor || ((e) => e),
                    responseInterceptor: l.responseInterceptor || ((e) => e),
                    credentials: "same-origin",
                    headers: { Accept: "application/json,*/*" },
                  }).then(next, next);
              },
            updateLoadingStatus: (e) => {
              let t = [null, "loading", "failed", "success", "failedConfig"];
              return (
                -1 === t.indexOf(e) &&
                  console.error(
                    `Error: ${e} is not one of ${JSON.stringify(t)}`,
                  ),
                { type: "spec_update_loading_status", payload: e }
              );
            },
          };
          let a = {
            loadingStatus: (0, we.createSelector)(
              (e) => e || (0, N.Map)(),
              (e) => e.get("loadingStatus") || null,
            ),
          };
          return {
            statePlugins: {
              spec: {
                actions: r,
                reducers: {
                  spec_update_loading_status: (e, t) =>
                    "string" == typeof t.payload
                      ? e.set("loadingStatus", t.payload)
                      : e,
                },
                selectors: a,
              },
            },
          };
        }
        const ua = require("react-syntax-highlighter/dist/esm/light");
        var da = __webpack_require__.n(ua);
        const ha = require("react-syntax-highlighter/dist/esm/languages/hljs/javascript");
        var ga = __webpack_require__.n(ha);
        const ya = require("react-syntax-highlighter/dist/esm/languages/hljs/json");
        var fa = __webpack_require__.n(ya);
        const Sa = require("react-syntax-highlighter/dist/esm/languages/hljs/xml");
        var Ea = __webpack_require__.n(Sa);
        const _a = require("react-syntax-highlighter/dist/esm/languages/hljs/bash");
        var va = __webpack_require__.n(_a);
        const wa = require("react-syntax-highlighter/dist/esm/languages/hljs/yaml");
        var ba = __webpack_require__.n(wa);
        const Ca = require("react-syntax-highlighter/dist/esm/languages/hljs/http");
        var xa = __webpack_require__.n(Ca);
        const Oa = require("react-syntax-highlighter/dist/esm/languages/hljs/powershell");
        var Na = __webpack_require__.n(Oa);
        const after_load = () => {
            da().registerLanguage("json", fa()),
              da().registerLanguage("js", ga()),
              da().registerLanguage("xml", Ea()),
              da().registerLanguage("yaml", ba()),
              da().registerLanguage("http", xa()),
              da().registerLanguage("bash", va()),
              da().registerLanguage("powershell", Na()),
              da().registerLanguage("javascript", ga());
          },
          ka = require("react-syntax-highlighter/dist/esm/styles/hljs/agate");
        var Aa = __webpack_require__.n(ka);
        const Ia = require("react-syntax-highlighter/dist/esm/styles/hljs/arta");
        var qa = __webpack_require__.n(Ia);
        const ja = require("react-syntax-highlighter/dist/esm/styles/hljs/monokai");
        var Pa = __webpack_require__.n(ja);
        const Ma = require("react-syntax-highlighter/dist/esm/styles/hljs/nord");
        var Ra = __webpack_require__.n(Ma);
        const Ta = require("react-syntax-highlighter/dist/esm/styles/hljs/obsidian");
        var Ja = __webpack_require__.n(Ta);
        const $a = require("react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night");
        var Va = __webpack_require__.n($a);
        const Da = require("react-syntax-highlighter/dist/esm/styles/hljs/idea");
        var Ka = __webpack_require__.n(Da);
        const La = {
            agate: Aa(),
            arta: qa(),
            monokai: Pa(),
            nord: Ra(),
            obsidian: Ja(),
            "tomorrow-night": Va(),
            idea: Ka(),
          },
          Ua = Aa(),
          components_SyntaxHighlighter = ({
            language: e,
            className: t = "",
            getConfigs: r,
            syntaxHighlighting: a = {},
            children: n = "",
          }) => {
            const s = r().syntaxHighlight.theme,
              { styles: o, defaultStyle: l } = a,
              c = o?.[s] ?? l;
            return x().createElement(
              da(),
              { language: e, className: t, style: c },
              n,
            );
          },
          za = require("js-file-download");
        var Ba = __webpack_require__.n(za);
        const components_HighlightCode = ({
            fileName: e = "response.txt",
            className: t,
            downloadable: r,
            getComponent: a,
            canCopy: n,
            language: s,
            children: o,
          }) => {
            const l = (0, C.useRef)(null),
              c = a("SyntaxHighlighter", !0),
              handlePreventYScrollingBeyondElement = (e) => {
                const { target: t, deltaY: r } = e,
                  { scrollHeight: a, offsetHeight: n, scrollTop: s } = t;
                a > n &&
                  ((0 === s && r < 0) || (n + s >= a && r > 0)) &&
                  e.preventDefault();
              };
            return (
              (0, C.useEffect)(() => {
                const e = Array.from(l.current.childNodes).filter(
                  (e) => !!e.nodeType && e.classList.contains("microlight"),
                );
                return (
                  e.forEach((e) =>
                    e.addEventListener(
                      "mousewheel",
                      handlePreventYScrollingBeyondElement,
                      { passive: !1 },
                    ),
                  ),
                  () => {
                    e.forEach((e) =>
                      e.removeEventListener(
                        "mousewheel",
                        handlePreventYScrollingBeyondElement,
                      ),
                    );
                  }
                );
              }, [o, t, s]),
              x().createElement(
                "div",
                { className: "highlight-code", ref: l },
                n &&
                  x().createElement(
                    "div",
                    { className: "copy-to-clipboard" },
                    x().createElement(
                      dt.CopyToClipboard,
                      { text: o },
                      x().createElement("button", null),
                    ),
                  ),
                r
                  ? x().createElement(
                      "button",
                      {
                        className: "download-contents",
                        onClick: () => {
                          Ba()(o, e);
                        },
                      },
                      "Download",
                    )
                  : null,
                x().createElement(
                  c,
                  {
                    language: s,
                    className: ut()(t, "microlight"),
                    renderPlainText: ({ children: e, PlainTextViewer: r }) =>
                      x().createElement(r, { className: t }, e),
                  },
                  o,
                ),
              )
            );
          },
          components_PlainTextViewer = ({ className: e = "", children: t }) =>
            x().createElement("pre", { className: ut()("microlight", e) }, t),
          wrap_components_SyntaxHighlighter =
            (e, t) =>
            ({ renderPlainText: r, children: a, ...n }) => {
              const s = t.getConfigs().syntaxHighlight.activated,
                o = t.getComponent("PlainTextViewer");
              return s || "function" != typeof r
                ? s
                  ? x().createElement(e, n, a)
                  : x().createElement(o, null, a)
                : r({ children: a, PlainTextViewer: o });
            },
          SyntaxHighlightingPlugin1 = () => ({
            afterLoad: after_load,
            rootInjects: {
              syntaxHighlighting: { styles: La, defaultStyle: Ua },
            },
            components: {
              SyntaxHighlighter: components_SyntaxHighlighter,
              HighlightCode: components_HighlightCode,
              PlainTextViewer: components_PlainTextViewer,
            },
          }),
          SyntaxHighlightingPlugin2 = () => ({
            wrapComponents: {
              SyntaxHighlighter: wrap_components_SyntaxHighlighter,
            },
          }),
          syntax_highlighting = () => [
            SyntaxHighlightingPlugin1,
            SyntaxHighlightingPlugin2,
          ],
          versions_after_load = () => {
            const {
              GIT_DIRTY: e,
              GIT_COMMIT: t,
              PACKAGE_VERSION: r,
              BUILD_TIME: a,
            } = {
              PACKAGE_VERSION: "5.17.14",
              GIT_COMMIT: "g8aa52920",
              GIT_DIRTY: !0,
              BUILD_TIME: "Tue, 28 May 2024 05:23:41 GMT",
            };
            (L.versions = L.versions || {}),
              (L.versions.swaggerUI = {
                version: r,
                gitRevision: t,
                gitDirty: e,
                buildTimestamp: a,
              });
          },
          versions = () => ({ afterLoad: versions_after_load }),
          Fa = require("lodash/zipObject");
        var Wa = __webpack_require__.n(Fa);
        const Ha = console.error,
          withErrorBoundary = (e) => (t) => {
            const { getComponent: r, fn: a } = e(),
              n = r("ErrorBoundary"),
              s = a.getDisplayName(t);
            class WithErrorBoundary extends C.Component {
              render() {
                return x().createElement(
                  n,
                  { targetName: s, getComponent: r, fn: a },
                  x().createElement(t, et()({}, this.props, this.context)),
                );
              }
            }
            var o;
            return (
              (WithErrorBoundary.displayName = `WithErrorBoundary(${s})`),
              (o = t).prototype &&
                o.prototype.isReactComponent &&
                (WithErrorBoundary.prototype.mapStateToProps =
                  t.prototype.mapStateToProps),
              WithErrorBoundary
            );
          },
          fallback = ({ name: e }) =>
            x().createElement(
              "div",
              { className: "fallback" },
              "😱 ",
              x().createElement(
                "i",
                null,
                "Could not render ",
                "t" === e ? "this component" : e,
                ", see the console.",
              ),
            );
        class ErrorBoundary extends C.Component {
          static defaultProps = {
            targetName: "this component",
            getComponent: () => fallback,
            fn: { componentDidCatch: Ha },
            children: null,
          };
          static getDerivedStateFromError(e) {
            return { hasError: !0, error: e };
          }
          constructor(...e) {
            super(...e), (this.state = { hasError: !1, error: null });
          }
          componentDidCatch(e, t) {
            this.props.fn.componentDidCatch(e, t);
          }
          render() {
            const { getComponent: e, targetName: t, children: r } = this.props;
            if (this.state.hasError) {
              const r = e("Fallback");
              return x().createElement(r, { name: t });
            }
            return r;
          }
        }
        const Xa = ErrorBoundary,
          safe_render =
            ({ componentList: e = [], fullOverride: t = !1 } = {}) =>
            ({ getSystem: r }) => {
              const a = t
                  ? e
                  : [
                      "App",
                      "BaseLayout",
                      "VersionPragmaFilter",
                      "InfoContainer",
                      "ServersContainer",
                      "SchemesContainer",
                      "AuthorizeBtnContainer",
                      "FilterContainer",
                      "Operations",
                      "OperationContainer",
                      "parameters",
                      "responses",
                      "OperationServers",
                      "Models",
                      "ModelWrapper",
                      ...e,
                    ],
                n = Wa()(
                  a,
                  Array(a.length).fill((e, { fn: t }) =>
                    t.withErrorBoundary(e),
                  ),
                );
              return {
                fn: {
                  componentDidCatch: Ha,
                  withErrorBoundary: withErrorBoundary(r),
                },
                components: { ErrorBoundary: Xa, Fallback: fallback },
                wrapComponents: n,
              };
            };
        class App extends x().Component {
          getLayout() {
            const { getComponent: e, layoutSelectors: t } = this.props,
              r = t.current(),
              a = e(r, !0);
            return (
              a ||
              (() =>
                x().createElement(
                  "h1",
                  null,
                  ' No layout defined for "',
                  r,
                  '" ',
                ))
            );
          }
          render() {
            const e = this.getLayout();
            return x().createElement(e, null);
          }
        }
        const Ga = App;
        class AuthorizationPopup extends x().Component {
          close = () => {
            let { authActions: e } = this.props;
            e.showDefinitions(!1);
          };
          render() {
            let {
                authSelectors: e,
                authActions: t,
                getComponent: r,
                errSelectors: a,
                specSelectors: n,
                fn: { AST: s = {} },
              } = this.props,
              o = e.shownDefinitions();
            const l = r("auths"),
              c = r("CloseIcon");
            return x().createElement(
              "div",
              { className: "dialog-ux" },
              x().createElement("div", { className: "backdrop-ux" }),
              x().createElement(
                "div",
                { className: "modal-ux" },
                x().createElement(
                  "div",
                  { className: "modal-dialog-ux" },
                  x().createElement(
                    "div",
                    { className: "modal-ux-inner" },
                    x().createElement(
                      "div",
                      { className: "modal-ux-header" },
                      x().createElement("h3", null, "Available authorizations"),
                      x().createElement(
                        "button",
                        {
                          type: "button",
                          className: "close-modal",
                          onClick: this.close,
                        },
                        x().createElement(c, null),
                      ),
                    ),
                    x().createElement(
                      "div",
                      { className: "modal-ux-content" },
                      o.valueSeq().map((o, c) =>
                        x().createElement(l, {
                          key: c,
                          AST: s,
                          definitions: o,
                          getComponent: r,
                          errSelectors: a,
                          authSelectors: e,
                          authActions: t,
                          specSelectors: n,
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        class AuthorizeBtn extends x().Component {
          render() {
            let {
              isAuthorized: e,
              showPopup: t,
              onClick: r,
              getComponent: a,
            } = this.props;
            const n = a("authorizationPopup", !0),
              s = a("LockAuthIcon", !0),
              o = a("UnlockAuthIcon", !0);
            return x().createElement(
              "div",
              { className: "auth-wrapper" },
              x().createElement(
                "button",
                {
                  className: e
                    ? "btn authorize locked"
                    : "btn authorize unlocked",
                  onClick: r,
                },
                x().createElement("span", null, "Authorize"),
                e ? x().createElement(s, null) : x().createElement(o, null),
              ),
              t && x().createElement(n, null),
            );
          }
        }
        class AuthorizeBtnContainer extends x().Component {
          render() {
            const {
                authActions: e,
                authSelectors: t,
                specSelectors: r,
                getComponent: a,
              } = this.props,
              n = r.securityDefinitions(),
              s = t.definitionsToAuthorize(),
              o = a("authorizeBtn");
            return n
              ? x().createElement(o, {
                  onClick: () => e.showDefinitions(s),
                  isAuthorized: !!t.authorized().size,
                  showPopup: !!t.shownDefinitions(),
                  getComponent: a,
                })
              : null;
          }
        }
        class AuthorizeOperationBtn extends x().Component {
          onClick = (e) => {
            e.stopPropagation();
            let { onClick: t } = this.props;
            t && t();
          };
          render() {
            let { isAuthorized: e, getComponent: t } = this.props;
            const r = t("LockAuthOperationIcon", !0),
              a = t("UnlockAuthOperationIcon", !0);
            return x().createElement(
              "button",
              {
                className: "authorization__btn",
                "aria-label": e
                  ? "authorization button locked"
                  : "authorization button unlocked",
                onClick: this.onClick,
              },
              e
                ? x().createElement(r, { className: "locked" })
                : x().createElement(a, { className: "unlocked" }),
            );
          }
        }
        class Auths extends x().Component {
          constructor(e, t) {
            super(e, t), (this.state = {});
          }
          onAuthChange = (e) => {
            let { name: t } = e;
            this.setState({ [t]: e });
          };
          submitAuth = (e) => {
            e.preventDefault();
            let { authActions: t } = this.props;
            t.authorizeWithPersistOption(this.state);
          };
          logoutClick = (e) => {
            e.preventDefault();
            let { authActions: t, definitions: r } = this.props,
              a = r.map((e, t) => t).toArray();
            this.setState(a.reduce((e, t) => ((e[t] = ""), e), {})),
              t.logoutWithPersistOption(a);
          };
          close = (e) => {
            e.preventDefault();
            let { authActions: t } = this.props;
            t.showDefinitions(!1);
          };
          render() {
            let {
              definitions: e,
              getComponent: t,
              authSelectors: r,
              errSelectors: a,
            } = this.props;
            const n = t("AuthItem"),
              s = t("oauth2", !0),
              o = t("Button");
            let l = r.authorized(),
              c = e.filter((e, t) => !!l.get(t)),
              i = e.filter((e) => "oauth2" !== e.get("type")),
              p = e.filter((e) => "oauth2" === e.get("type"));
            return x().createElement(
              "div",
              { className: "auth-container" },
              !!i.size &&
                x().createElement(
                  "form",
                  { onSubmit: this.submitAuth },
                  i
                    .map((e, r) =>
                      x().createElement(n, {
                        key: r,
                        schema: e,
                        name: r,
                        getComponent: t,
                        onAuthChange: this.onAuthChange,
                        authorized: l,
                        errSelectors: a,
                      }),
                    )
                    .toArray(),
                  x().createElement(
                    "div",
                    { className: "auth-btn-wrapper" },
                    i.size === c.size
                      ? x().createElement(
                          o,
                          {
                            className: "btn modal-btn auth",
                            onClick: this.logoutClick,
                            "aria-label": "Remove authorization",
                          },
                          "Logout",
                        )
                      : x().createElement(
                          o,
                          {
                            type: "submit",
                            className: "btn modal-btn auth authorize",
                            "aria-label": "Apply credentials",
                          },
                          "Authorize",
                        ),
                    x().createElement(
                      o,
                      {
                        className: "btn modal-btn auth btn-done",
                        onClick: this.close,
                      },
                      "Close",
                    ),
                  ),
                ),
              p && p.size
                ? x().createElement(
                    "div",
                    null,
                    x().createElement(
                      "div",
                      { className: "scope-def" },
                      x().createElement(
                        "p",
                        null,
                        "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.",
                      ),
                      x().createElement(
                        "p",
                        null,
                        "API requires the following scopes. Select which ones you want to grant to Swagger UI.",
                      ),
                    ),
                    e
                      .filter((e) => "oauth2" === e.get("type"))
                      .map((e, t) =>
                        x().createElement(
                          "div",
                          { key: t },
                          x().createElement(s, {
                            authorized: l,
                            schema: e,
                            name: t,
                          }),
                        ),
                      )
                      .toArray(),
                  )
                : null,
            );
          }
        }
        class auth_item_Auths extends x().Component {
          render() {
            let {
              schema: e,
              name: t,
              getComponent: r,
              onAuthChange: a,
              authorized: n,
              errSelectors: s,
            } = this.props;
            const o = r("apiKeyAuth"),
              l = r("basicAuth");
            let c;
            const i = e.get("type");
            switch (i) {
              case "apiKey":
                c = x().createElement(o, {
                  key: t,
                  schema: e,
                  name: t,
                  errSelectors: s,
                  authorized: n,
                  getComponent: r,
                  onChange: a,
                });
                break;
              case "basic":
                c = x().createElement(l, {
                  key: t,
                  schema: e,
                  name: t,
                  errSelectors: s,
                  authorized: n,
                  getComponent: r,
                  onChange: a,
                });
                break;
              default:
                c = x().createElement(
                  "div",
                  { key: t },
                  "Unknown security definition type ",
                  i,
                );
            }
            return x().createElement("div", { key: `${t}-jump` }, c);
          }
        }
        class AuthError extends x().Component {
          render() {
            let { error: e } = this.props,
              t = e.get("level"),
              r = e.get("message"),
              a = e.get("source");
            return x().createElement(
              "div",
              { className: "errors" },
              x().createElement("b", null, a, " ", t),
              x().createElement("span", null, r),
            );
          }
        }
        class ApiKeyAuth extends x().Component {
          constructor(e, t) {
            super(e, t);
            let { name: r, schema: a } = this.props,
              n = this.getValue();
            this.state = { name: r, schema: a, value: n };
          }
          getValue() {
            let { name: e, authorized: t } = this.props;
            return t && t.getIn([e, "value"]);
          }
          onChange = (e) => {
            let { onChange: t } = this.props,
              r = e.target.value,
              a = Object.assign({}, this.state, { value: r });
            this.setState(a), t(a);
          };
          render() {
            let {
              schema: e,
              getComponent: t,
              errSelectors: r,
              name: a,
            } = this.props;
            const n = t("Input"),
              s = t("Row"),
              o = t("Col"),
              l = t("authError"),
              c = t("Markdown", !0),
              i = t("JumpToPath", !0);
            let p = this.getValue(),
              m = r.allErrors().filter((e) => e.get("authId") === a);
            return x().createElement(
              "div",
              null,
              x().createElement(
                "h4",
                null,
                x().createElement("code", null, a || e.get("name")),
                " (apiKey)",
                x().createElement(i, { path: ["securityDefinitions", a] }),
              ),
              p && x().createElement("h6", null, "Authorized"),
              x().createElement(
                s,
                null,
                x().createElement(c, { source: e.get("description") }),
              ),
              x().createElement(
                s,
                null,
                x().createElement(
                  "p",
                  null,
                  "Name: ",
                  x().createElement("code", null, e.get("name")),
                ),
              ),
              x().createElement(
                s,
                null,
                x().createElement(
                  "p",
                  null,
                  "In: ",
                  x().createElement("code", null, e.get("in")),
                ),
              ),
              x().createElement(
                s,
                null,
                x().createElement(
                  "label",
                  { htmlFor: "api_key_value" },
                  "Value:",
                ),
                p
                  ? x().createElement("code", null, " ****** ")
                  : x().createElement(
                      o,
                      null,
                      x().createElement(n, {
                        id: "api_key_value",
                        type: "text",
                        onChange: this.onChange,
                        autoFocus: !0,
                      }),
                    ),
              ),
              m
                .valueSeq()
                .map((e, t) => x().createElement(l, { error: e, key: t })),
            );
          }
        }
        class BasicAuth extends x().Component {
          constructor(e, t) {
            super(e, t);
            let { schema: r, name: a } = this.props,
              n = this.getValue().username;
            this.state = {
              name: a,
              schema: r,
              value: n ? { username: n } : {},
            };
          }
          getValue() {
            let { authorized: e, name: t } = this.props;
            return (e && e.getIn([t, "value"])) || {};
          }
          onChange = (e) => {
            let { onChange: t } = this.props,
              { value: r, name: a } = e.target,
              n = this.state.value;
            (n[a] = r), this.setState({ value: n }), t(this.state);
          };
          render() {
            let {
              schema: e,
              getComponent: t,
              name: r,
              errSelectors: a,
            } = this.props;
            const n = t("Input"),
              s = t("Row"),
              o = t("Col"),
              l = t("authError"),
              c = t("JumpToPath", !0),
              i = t("Markdown", !0);
            let p = this.getValue().username,
              m = a.allErrors().filter((e) => e.get("authId") === r);
            return x().createElement(
              "div",
              null,
              x().createElement(
                "h4",
                null,
                "Basic authorization",
                x().createElement(c, { path: ["securityDefinitions", r] }),
              ),
              p && x().createElement("h6", null, "Authorized"),
              x().createElement(
                s,
                null,
                x().createElement(i, { source: e.get("description") }),
              ),
              x().createElement(
                s,
                null,
                x().createElement(
                  "label",
                  { htmlFor: "auth_username" },
                  "Username:",
                ),
                p
                  ? x().createElement("code", null, " ", p, " ")
                  : x().createElement(
                      o,
                      null,
                      x().createElement(n, {
                        id: "auth_username",
                        type: "text",
                        required: "required",
                        name: "username",
                        onChange: this.onChange,
                        autoFocus: !0,
                      }),
                    ),
              ),
              x().createElement(
                s,
                null,
                x().createElement(
                  "label",
                  { htmlFor: "auth_password" },
                  "Password:",
                ),
                p
                  ? x().createElement("code", null, " ****** ")
                  : x().createElement(
                      o,
                      null,
                      x().createElement(n, {
                        id: "auth_password",
                        autoComplete: "new-password",
                        name: "password",
                        type: "password",
                        onChange: this.onChange,
                      }),
                    ),
              ),
              m
                .valueSeq()
                .map((e, t) => x().createElement(l, { error: e, key: t })),
            );
          }
        }
        function Example(e) {
          const { example: t, showValue: r, getComponent: a } = e,
            n = a("Markdown", !0),
            s = a("HighlightCode", !0);
          return t
            ? x().createElement(
                "div",
                { className: "example" },
                t.get("description")
                  ? x().createElement(
                      "section",
                      { className: "example__section" },
                      x().createElement(
                        "div",
                        { className: "example__section-header" },
                        "Example Description",
                      ),
                      x().createElement(
                        "p",
                        null,
                        x().createElement(n, { source: t.get("description") }),
                      ),
                    )
                  : null,
                r && t.has("value")
                  ? x().createElement(
                      "section",
                      { className: "example__section" },
                      x().createElement(
                        "div",
                        { className: "example__section-header" },
                        "Example Value",
                      ),
                      x().createElement(s, null, stringify(t.get("value"))),
                    )
                  : null,
              )
            : null;
        }
        class ExamplesSelect extends x().PureComponent {
          static defaultProps = {
            examples: k().Map({}),
            onSelect: (...e) =>
              console.log(
                "DEBUG: ExamplesSelect was not given an onSelect callback",
                ...e,
              ),
            currentExampleKey: null,
            showLabels: !0,
          };
          _onSelect = (e, { isSyntheticChange: t = !1 } = {}) => {
            "function" == typeof this.props.onSelect &&
              this.props.onSelect(e, { isSyntheticChange: t });
          };
          _onDomSelect = (e) => {
            if ("function" == typeof this.props.onSelect) {
              const t = e.target.selectedOptions[0].getAttribute("value");
              this._onSelect(t, { isSyntheticChange: !1 });
            }
          };
          getCurrentExample = () => {
            const { examples: e, currentExampleKey: t } = this.props,
              r = e.get(t),
              a = e.keySeq().first(),
              n = e.get(a);
            return r || n || Map({});
          };
          componentDidMount() {
            const { onSelect: e, examples: t } = this.props;
            if ("function" == typeof e) {
              const e = t.first(),
                r = t.keyOf(e);
              this._onSelect(r, { isSyntheticChange: !0 });
            }
          }
          UNSAFE_componentWillReceiveProps(e) {
            const { currentExampleKey: t, examples: r } = e;
            if (r !== this.props.examples && !r.has(t)) {
              const e = r.first(),
                t = r.keyOf(e);
              this._onSelect(t, { isSyntheticChange: !0 });
            }
          }
          render() {
            const {
              examples: e,
              currentExampleKey: t,
              isValueModified: r,
              isModifiedValueAvailable: a,
              showLabels: n,
            } = this.props;
            return x().createElement(
              "div",
              { className: "examples-select" },
              n
                ? x().createElement(
                    "span",
                    { className: "examples-select__section-label" },
                    "Examples: ",
                  )
                : null,
              x().createElement(
                "select",
                {
                  className: "examples-select-element",
                  onChange: this._onDomSelect,
                  value: a && r ? "__MODIFIED__VALUE__" : t || "",
                },
                a
                  ? x().createElement(
                      "option",
                      { value: "__MODIFIED__VALUE__" },
                      "[Modified value]",
                    )
                  : null,
                e
                  .map((e, t) =>
                    x().createElement(
                      "option",
                      { key: t, value: t },
                      e.get("summary") || t,
                    ),
                  )
                  .valueSeq(),
              ),
            );
          }
        }
        const stringifyUnlessList = (e) =>
          N.List.isList(e) ? e : stringify(e);
        class ExamplesSelectValueRetainer extends x().PureComponent {
          static defaultProps = {
            userHasEditedBody: !1,
            examples: (0, N.Map)({}),
            currentNamespace: "__DEFAULT__NAMESPACE__",
            setRetainRequestBodyValueFlag: () => {},
            onSelect: (...e) =>
              console.log(
                "ExamplesSelectValueRetainer: no `onSelect` function was provided",
                ...e,
              ),
            updateValue: (...e) =>
              console.log(
                "ExamplesSelectValueRetainer: no `updateValue` function was provided",
                ...e,
              ),
          };
          constructor(e) {
            super(e);
            const t = this._getCurrentExampleValue();
            this.state = {
              [e.currentNamespace]: (0, N.Map)({
                lastUserEditedValue: this.props.currentUserInputValue,
                lastDownstreamValue: t,
                isModifiedValueSelected:
                  this.props.userHasEditedBody ||
                  this.props.currentUserInputValue !== t,
              }),
            };
          }
          componentWillUnmount() {
            this.props.setRetainRequestBodyValueFlag(!1);
          }
          _getStateForCurrentNamespace = () => {
            const { currentNamespace: e } = this.props;
            return (this.state[e] || (0, N.Map)()).toObject();
          };
          _setStateForCurrentNamespace = (e) => {
            const { currentNamespace: t } = this.props;
            return this._setStateForNamespace(t, e);
          };
          _setStateForNamespace = (e, t) => {
            const r = (this.state[e] || (0, N.Map)()).mergeDeep(t);
            return this.setState({ [e]: r });
          };
          _isCurrentUserInputSameAsExampleValue = () => {
            const { currentUserInputValue: e } = this.props;
            return this._getCurrentExampleValue() === e;
          };
          _getValueForExample = (e, t) => {
            const { examples: r } = t || this.props;
            return stringifyUnlessList(
              (r || (0, N.Map)({})).getIn([e, "value"]),
            );
          };
          _getCurrentExampleValue = (e) => {
            const { currentKey: t } = e || this.props;
            return this._getValueForExample(t, e || this.props);
          };
          _onExamplesSelect = (e, { isSyntheticChange: t } = {}, ...r) => {
            const {
                onSelect: a,
                updateValue: n,
                currentUserInputValue: s,
                userHasEditedBody: o,
              } = this.props,
              { lastUserEditedValue: l } = this._getStateForCurrentNamespace(),
              c = this._getValueForExample(e);
            if ("__MODIFIED__VALUE__" === e)
              return (
                n(stringifyUnlessList(l)),
                this._setStateForCurrentNamespace({
                  isModifiedValueSelected: !0,
                })
              );
            "function" == typeof a && a(e, { isSyntheticChange: t }, ...r),
              this._setStateForCurrentNamespace({
                lastDownstreamValue: c,
                isModifiedValueSelected: (t && o) || (!!s && s !== c),
              }),
              t || ("function" == typeof n && n(stringifyUnlessList(c)));
          };
          UNSAFE_componentWillReceiveProps(e) {
            const {
                currentUserInputValue: t,
                examples: r,
                onSelect: a,
                userHasEditedBody: n,
              } = e,
              { lastUserEditedValue: s, lastDownstreamValue: o } =
                this._getStateForCurrentNamespace(),
              l = this._getValueForExample(e.currentKey, e),
              c = r.filter(
                (e) => e.get("value") === t || stringify(e.get("value")) === t,
              );
            if (c.size) {
              let t;
              (t = c.has(e.currentKey) ? e.currentKey : c.keySeq().first()),
                a(t, { isSyntheticChange: !0 });
            } else
              t !== this.props.currentUserInputValue &&
                t !== s &&
                t !== o &&
                (this.props.setRetainRequestBodyValueFlag(!0),
                this._setStateForNamespace(e.currentNamespace, {
                  lastUserEditedValue: e.currentUserInputValue,
                  isModifiedValueSelected: n || t !== l,
                }));
          }
          render() {
            const {
                currentUserInputValue: e,
                examples: t,
                currentKey: r,
                getComponent: a,
                userHasEditedBody: n,
              } = this.props,
              {
                lastDownstreamValue: s,
                lastUserEditedValue: o,
                isModifiedValueSelected: l,
              } = this._getStateForCurrentNamespace(),
              c = a("ExamplesSelect");
            return x().createElement(c, {
              examples: t,
              currentExampleKey: r,
              onSelect: this._onExamplesSelect,
              isModifiedValueAvailable: !!o && o !== s,
              isValueModified:
                (void 0 !== e && l && e !== this._getCurrentExampleValue()) ||
                n,
            });
          }
        }
        function oauth2_authorize_authorize({
          auth: e,
          authActions: t,
          errActions: r,
          configs: a,
          authConfigs: n = {},
          currentServer: s,
        }) {
          let { schema: o, scopes: l, name: c, clientId: i } = e,
            p = o.get("flow"),
            m = [];
          switch (p) {
            case "password":
              return void t.authorizePassword(e);
            case "application":
            case "clientCredentials":
            case "client_credentials":
              return void t.authorizeApplication(e);
            case "accessCode":
            case "authorizationCode":
            case "authorization_code":
              m.push("response_type=code");
              break;
            case "implicit":
              m.push("response_type=token");
          }
          "string" == typeof i && m.push("client_id=" + encodeURIComponent(i));
          let u = a.oauth2RedirectUrl;
          if (void 0 === u)
            return void r.newAuthErr({
              authId: c,
              source: "validation",
              level: "error",
              message:
                "oauth2RedirectUrl configuration is not passed. Oauth2 authorization cannot be performed.",
            });
          m.push("redirect_uri=" + encodeURIComponent(u));
          let d = [];
          if (
            (Array.isArray(l)
              ? (d = l)
              : k().List.isList(l) && (d = l.toArray()),
            d.length > 0)
          ) {
            let e = n.scopeSeparator || " ";
            m.push("scope=" + encodeURIComponent(d.join(e)));
          }
          let h = btoa(new Date());
          if (
            (m.push("state=" + encodeURIComponent(h)),
            void 0 !== n.realm &&
              m.push("realm=" + encodeURIComponent(n.realm)),
            ("authorizationCode" === p ||
              "authorization_code" === p ||
              "accessCode" === p) &&
              n.usePkceWithAuthorizationCodeGrant)
          ) {
            const t = (function generateCodeVerifier() {
                return b64toB64UrlEncoded(ae()(32).toString("base64"));
              })(),
              r = (function createCodeChallenge(e) {
                return b64toB64UrlEncoded(
                  se()("sha256").update(e).digest("base64"),
                );
              })(t);
            m.push("code_challenge=" + r),
              m.push("code_challenge_method=S256"),
              (e.codeVerifier = t);
          }
          let { additionalQueryStringParams: g } = n;
          for (let e in g)
            void 0 !== g[e] &&
              m.push([e, g[e]].map(encodeURIComponent).join("="));
          const y = o.get("authorizationUrl");
          let f;
          f = s ? ue()(sanitizeUrl(y), s, !0).toString() : sanitizeUrl(y);
          let S,
            E = [f, m.join("&")].join(-1 === y.indexOf("?") ? "?" : "&");
          (S =
            "implicit" === p
              ? t.preAuthorizeImplicit
              : n.useBasicAuthenticationWithAccessCodeGrant
                ? t.authorizeAccessCodeWithBasicAuthentication
                : t.authorizeAccessCodeWithFormParams),
            t.authPopup(E, {
              auth: e,
              state: h,
              redirectUrl: u,
              callback: S,
              errCb: r.newAuthErr,
            });
        }
        class Oauth2 extends x().Component {
          constructor(e, t) {
            super(e, t);
            let {
                name: r,
                schema: a,
                authorized: n,
                authSelectors: s,
              } = this.props,
              o = n && n.get(r),
              l = s.getConfigs() || {},
              c = (o && o.get("username")) || "",
              i = (o && o.get("clientId")) || l.clientId || "",
              p = (o && o.get("clientSecret")) || l.clientSecret || "",
              m = (o && o.get("passwordType")) || "basic",
              u = (o && o.get("scopes")) || l.scopes || [];
            "string" == typeof u && (u = u.split(l.scopeSeparator || " ")),
              (this.state = {
                appName: l.appName,
                name: r,
                schema: a,
                scopes: u,
                clientId: i,
                clientSecret: p,
                username: c,
                password: "",
                passwordType: m,
              });
          }
          close = (e) => {
            e.preventDefault();
            let { authActions: t } = this.props;
            t.showDefinitions(!1);
          };
          authorize = () => {
            let {
                authActions: e,
                errActions: t,
                getConfigs: r,
                authSelectors: a,
                oas3Selectors: n,
              } = this.props,
              s = r(),
              o = a.getConfigs();
            t.clear({ authId: name, type: "auth", source: "auth" }),
              oauth2_authorize_authorize({
                auth: this.state,
                currentServer: n.serverEffectiveValue(n.selectedServer()),
                authActions: e,
                errActions: t,
                configs: s,
                authConfigs: o,
              });
          };
          onScopeChange = (e) => {
            let { target: t } = e,
              { checked: r } = t,
              a = t.dataset.value;
            if (r && -1 === this.state.scopes.indexOf(a)) {
              let e = this.state.scopes.concat([a]);
              this.setState({ scopes: e });
            } else
              !r &&
                this.state.scopes.indexOf(a) > -1 &&
                this.setState({
                  scopes: this.state.scopes.filter((e) => e !== a),
                });
          };
          onInputChange = (e) => {
            let {
                target: {
                  dataset: { name: t },
                  value: r,
                },
              } = e,
              a = { [t]: r };
            this.setState(a);
          };
          selectScopes = (e) => {
            e.target.dataset.all
              ? this.setState({
                  scopes: Array.from(
                    (
                      this.props.schema.get("allowedScopes") ||
                      this.props.schema.get("scopes")
                    ).keys(),
                  ),
                })
              : this.setState({ scopes: [] });
          };
          logout = (e) => {
            e.preventDefault();
            let { authActions: t, errActions: r, name: a } = this.props;
            r.clear({ authId: a, type: "auth", source: "auth" }),
              t.logoutWithPersistOption([a]);
          };
          render() {
            let {
              schema: e,
              getComponent: t,
              authSelectors: r,
              errSelectors: a,
              name: n,
              specSelectors: s,
            } = this.props;
            const o = t("Input"),
              l = t("Row"),
              c = t("Col"),
              i = t("Button"),
              p = t("authError"),
              m = t("JumpToPath", !0),
              u = t("Markdown", !0),
              d = t("InitializedInput"),
              { isOAS3: h } = s;
            let g = h() ? e.get("openIdConnectUrl") : null;
            const y = "implicit",
              f = "password",
              S = h()
                ? g
                  ? "authorization_code"
                  : "authorizationCode"
                : "accessCode",
              E = h()
                ? g
                  ? "client_credentials"
                  : "clientCredentials"
                : "application";
            let _ = !!(r.getConfigs() || {}).usePkceWithAuthorizationCodeGrant,
              v = e.get("flow"),
              w = v === S && _ ? v + " with PKCE" : v,
              b = e.get("allowedScopes") || e.get("scopes"),
              C = !!r.authorized().get(n),
              O = a.allErrors().filter((e) => e.get("authId") === n),
              N = !O.filter((e) => "validation" === e.get("source")).size,
              k = e.get("description");
            return x().createElement(
              "div",
              null,
              x().createElement(
                "h4",
                null,
                n,
                " (OAuth2, ",
                w,
                ") ",
                x().createElement(m, { path: ["securityDefinitions", n] }),
              ),
              this.state.appName
                ? x().createElement(
                    "h5",
                    null,
                    "Application: ",
                    this.state.appName,
                    " ",
                  )
                : null,
              k && x().createElement(u, { source: e.get("description") }),
              C && x().createElement("h6", null, "Authorized"),
              g &&
                x().createElement(
                  "p",
                  null,
                  "OpenID Connect URL: ",
                  x().createElement("code", null, g),
                ),
              (v === y || v === S) &&
                x().createElement(
                  "p",
                  null,
                  "Authorization URL: ",
                  x().createElement("code", null, e.get("authorizationUrl")),
                ),
              (v === f || v === S || v === E) &&
                x().createElement(
                  "p",
                  null,
                  "Token URL:",
                  x().createElement("code", null, " ", e.get("tokenUrl")),
                ),
              x().createElement(
                "p",
                { className: "flow" },
                "Flow: ",
                x().createElement("code", null, w),
              ),
              v !== f
                ? null
                : x().createElement(
                    l,
                    null,
                    x().createElement(
                      l,
                      null,
                      x().createElement(
                        "label",
                        { htmlFor: "oauth_username" },
                        "username:",
                      ),
                      C
                        ? x().createElement(
                            "code",
                            null,
                            " ",
                            this.state.username,
                            " ",
                          )
                        : x().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            x().createElement("input", {
                              id: "oauth_username",
                              type: "text",
                              "data-name": "username",
                              onChange: this.onInputChange,
                              autoFocus: !0,
                            }),
                          ),
                    ),
                    x().createElement(
                      l,
                      null,
                      x().createElement(
                        "label",
                        { htmlFor: "oauth_password" },
                        "password:",
                      ),
                      C
                        ? x().createElement("code", null, " ****** ")
                        : x().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            x().createElement("input", {
                              id: "oauth_password",
                              type: "password",
                              "data-name": "password",
                              onChange: this.onInputChange,
                            }),
                          ),
                    ),
                    x().createElement(
                      l,
                      null,
                      x().createElement(
                        "label",
                        { htmlFor: "password_type" },
                        "Client credentials location:",
                      ),
                      C
                        ? x().createElement(
                            "code",
                            null,
                            " ",
                            this.state.passwordType,
                            " ",
                          )
                        : x().createElement(
                            c,
                            { tablet: 10, desktop: 10 },
                            x().createElement(
                              "select",
                              {
                                id: "password_type",
                                "data-name": "passwordType",
                                onChange: this.onInputChange,
                              },
                              x().createElement(
                                "option",
                                { value: "basic" },
                                "Authorization header",
                              ),
                              x().createElement(
                                "option",
                                { value: "request-body" },
                                "Request body",
                              ),
                            ),
                          ),
                    ),
                  ),
              (v === E || v === y || v === S || v === f) &&
                (!C || (C && this.state.clientId)) &&
                x().createElement(
                  l,
                  null,
                  x().createElement(
                    "label",
                    { htmlFor: `client_id_${v}` },
                    "client_id:",
                  ),
                  C
                    ? x().createElement("code", null, " ****** ")
                    : x().createElement(
                        c,
                        { tablet: 10, desktop: 10 },
                        x().createElement(d, {
                          id: `client_id_${v}`,
                          type: "text",
                          required: v === f,
                          initialValue: this.state.clientId,
                          "data-name": "clientId",
                          onChange: this.onInputChange,
                        }),
                      ),
                ),
              (v === E || v === S || v === f) &&
                x().createElement(
                  l,
                  null,
                  x().createElement(
                    "label",
                    { htmlFor: `client_secret_${v}` },
                    "client_secret:",
                  ),
                  C
                    ? x().createElement("code", null, " ****** ")
                    : x().createElement(
                        c,
                        { tablet: 10, desktop: 10 },
                        x().createElement(d, {
                          id: `client_secret_${v}`,
                          initialValue: this.state.clientSecret,
                          type: "password",
                          "data-name": "clientSecret",
                          onChange: this.onInputChange,
                        }),
                      ),
                ),
              !C && b && b.size
                ? x().createElement(
                    "div",
                    { className: "scopes" },
                    x().createElement(
                      "h2",
                      null,
                      "Scopes:",
                      x().createElement(
                        "a",
                        { onClick: this.selectScopes, "data-all": !0 },
                        "select all",
                      ),
                      x().createElement(
                        "a",
                        { onClick: this.selectScopes },
                        "select none",
                      ),
                    ),
                    b
                      .map((e, t) =>
                        x().createElement(
                          l,
                          { key: t },
                          x().createElement(
                            "div",
                            { className: "checkbox" },
                            x().createElement(o, {
                              "data-value": t,
                              id: `${t}-${v}-checkbox-${this.state.name}`,
                              disabled: C,
                              checked: this.state.scopes.includes(t),
                              type: "checkbox",
                              onChange: this.onScopeChange,
                            }),
                            x().createElement(
                              "label",
                              {
                                htmlFor: `${t}-${v}-checkbox-${this.state.name}`,
                              },
                              x().createElement("span", { className: "item" }),
                              x().createElement(
                                "div",
                                { className: "text" },
                                x().createElement(
                                  "p",
                                  { className: "name" },
                                  t,
                                ),
                                x().createElement(
                                  "p",
                                  { className: "description" },
                                  e,
                                ),
                              ),
                            ),
                          ),
                        ),
                      )
                      .toArray(),
                  )
                : null,
              O.valueSeq().map((e, t) =>
                x().createElement(p, { error: e, key: t }),
              ),
              x().createElement(
                "div",
                { className: "auth-btn-wrapper" },
                N &&
                  (C
                    ? x().createElement(
                        i,
                        {
                          className: "btn modal-btn auth authorize",
                          onClick: this.logout,
                          "aria-label": "Remove authorization",
                        },
                        "Logout",
                      )
                    : x().createElement(
                        i,
                        {
                          className: "btn modal-btn auth authorize",
                          onClick: this.authorize,
                          "aria-label": "Apply given OAuth2 credentials",
                        },
                        "Authorize",
                      )),
                x().createElement(
                  i,
                  {
                    className: "btn modal-btn auth btn-done",
                    onClick: this.close,
                  },
                  "Close",
                ),
              ),
            );
          }
        }
        class Clear extends C.Component {
          onClick = () => {
            let { specActions: e, path: t, method: r } = this.props;
            e.clearResponse(t, r), e.clearRequest(t, r);
          };
          render() {
            return x().createElement(
              "button",
              {
                className: "btn btn-clear opblock-control__btn",
                onClick: this.onClick,
              },
              "Clear",
            );
          }
        }
        const Headers = ({ headers: e }) =>
            x().createElement(
              "div",
              null,
              x().createElement("h5", null, "Response headers"),
              x().createElement("pre", { className: "microlight" }, e),
            ),
          Duration = ({ duration: e }) =>
            x().createElement(
              "div",
              null,
              x().createElement("h5", null, "Request duration"),
              x().createElement("pre", { className: "microlight" }, e, " ms"),
            );
        class LiveResponse extends x().Component {
          shouldComponentUpdate(e) {
            return (
              this.props.response !== e.response ||
              this.props.path !== e.path ||
              this.props.method !== e.method ||
              this.props.displayRequestDuration !== e.displayRequestDuration
            );
          }
          render() {
            const {
                response: e,
                getComponent: t,
                getConfigs: r,
                displayRequestDuration: a,
                specSelectors: n,
                path: s,
                method: o,
              } = this.props,
              { showMutatedRequest: l, requestSnippetsEnabled: c } = r(),
              i = l ? n.mutatedRequestFor(s, o) : n.requestFor(s, o),
              p = e.get("status"),
              m = i.get("url"),
              u = e.get("headers").toJS(),
              d = e.get("notDocumented"),
              h = e.get("error"),
              g = e.get("text"),
              y = e.get("duration"),
              f = Object.keys(u),
              S = u["content-type"] || u["Content-Type"],
              E = t("responseBody"),
              _ = f.map((e) => {
                var t = Array.isArray(u[e]) ? u[e].join() : u[e];
                return x().createElement(
                  "span",
                  { className: "headerline", key: e },
                  " ",
                  e,
                  ": ",
                  t,
                  " ",
                );
              }),
              v = 0 !== _.length,
              w = t("Markdown", !0),
              b = t("RequestSnippets", !0),
              C = t("curl", !0);
            return x().createElement(
              "div",
              null,
              i && c
                ? x().createElement(b, { request: i })
                : x().createElement(C, { request: i }),
              m &&
                x().createElement(
                  "div",
                  null,
                  x().createElement(
                    "div",
                    { className: "request-url" },
                    x().createElement("h4", null, "Request URL"),
                    x().createElement("pre", { className: "microlight" }, m),
                  ),
                ),
              x().createElement("h4", null, "Server response"),
              x().createElement(
                "table",
                { className: "responses-table live-responses-table" },
                x().createElement(
                  "thead",
                  null,
                  x().createElement(
                    "tr",
                    { className: "responses-header" },
                    x().createElement(
                      "td",
                      { className: "col_header response-col_status" },
                      "Code",
                    ),
                    x().createElement(
                      "td",
                      { className: "col_header response-col_description" },
                      "Details",
                    ),
                  ),
                ),
                x().createElement(
                  "tbody",
                  null,
                  x().createElement(
                    "tr",
                    { className: "response" },
                    x().createElement(
                      "td",
                      { className: "response-col_status" },
                      p,
                      d
                        ? x().createElement(
                            "div",
                            { className: "response-undocumented" },
                            x().createElement("i", null, " Undocumented "),
                          )
                        : null,
                    ),
                    x().createElement(
                      "td",
                      { className: "response-col_description" },
                      h
                        ? x().createElement(w, {
                            source: `${"" !== e.get("name") ? `${e.get("name")}: ` : ""}${e.get("message")}`,
                          })
                        : null,
                      g
                        ? x().createElement(E, {
                            content: g,
                            contentType: S,
                            url: m,
                            headers: u,
                            getConfigs: r,
                            getComponent: t,
                          })
                        : null,
                      v ? x().createElement(Headers, { headers: _ }) : null,
                      a && y
                        ? x().createElement(Duration, { duration: y })
                        : null,
                    ),
                  ),
                ),
              ),
            );
          }
        }
        class OnlineValidatorBadge extends x().Component {
          constructor(e, t) {
            super(e, t);
            let { getConfigs: r } = e,
              { validatorUrl: a } = r();
            this.state = {
              url: this.getDefinitionUrl(),
              validatorUrl:
                void 0 === a ? "https://validator.swagger.io/validator" : a,
            };
          }
          getDefinitionUrl = () => {
            let { specSelectors: e } = this.props;
            return new (ue())(e.url(), L.location).toString();
          };
          UNSAFE_componentWillReceiveProps(e) {
            let { getConfigs: t } = e,
              { validatorUrl: r } = t();
            this.setState({
              url: this.getDefinitionUrl(),
              validatorUrl:
                void 0 === r ? "https://validator.swagger.io/validator" : r,
            });
          }
          render() {
            let { getConfigs: e } = this.props,
              { spec: t } = e(),
              r = sanitizeUrl(this.state.validatorUrl);
            return "object" == typeof t && Object.keys(t).length
              ? null
              : this.state.url &&
                  requiresValidationURL(this.state.validatorUrl) &&
                  requiresValidationURL(this.state.url)
                ? x().createElement(
                    "span",
                    { className: "float-right" },
                    x().createElement(
                      "a",
                      {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: `${r}/debug?url=${encodeURIComponent(this.state.url)}`,
                      },
                      x().createElement(ValidatorImage, {
                        src: `${r}?url=${encodeURIComponent(this.state.url)}`,
                        alt: "Online validator badge",
                      }),
                    ),
                  )
                : null;
          }
        }
        class ValidatorImage extends x().Component {
          constructor(e) {
            super(e), (this.state = { loaded: !1, error: !1 });
          }
          componentDidMount() {
            const e = new Image();
            (e.onload = () => {
              this.setState({ loaded: !0 });
            }),
              (e.onerror = () => {
                this.setState({ error: !0 });
              }),
              (e.src = this.props.src);
          }
          UNSAFE_componentWillReceiveProps(e) {
            if (e.src !== this.props.src) {
              const t = new Image();
              (t.onload = () => {
                this.setState({ loaded: !0 });
              }),
                (t.onerror = () => {
                  this.setState({ error: !0 });
                }),
                (t.src = e.src);
            }
          }
          render() {
            return this.state.error
              ? x().createElement("img", { alt: "Error" })
              : this.state.loaded
                ? x().createElement("img", {
                    src: this.props.src,
                    alt: this.props.alt,
                  })
                : null;
          }
        }
        class Operations extends x().Component {
          render() {
            let { specSelectors: e } = this.props;
            const t = e.taggedOperations();
            return 0 === t.size
              ? x().createElement("h3", null, " No operations defined in spec!")
              : x().createElement(
                  "div",
                  null,
                  t.map(this.renderOperationTag).toArray(),
                  t.size < 1
                    ? x().createElement(
                        "h3",
                        null,
                        " No operations defined in spec! ",
                      )
                    : null,
                );
          }
          renderOperationTag = (e, t) => {
            const {
                specSelectors: r,
                getComponent: a,
                oas3Selectors: n,
                layoutSelectors: s,
                layoutActions: o,
                getConfigs: l,
              } = this.props,
              c = r.validOperationMethods(),
              i = a("OperationContainer", !0),
              p = a("OperationTag"),
              m = e.get("operations");
            return x().createElement(
              p,
              {
                key: "operation-" + t,
                tagObj: e,
                tag: t,
                oas3Selectors: n,
                layoutSelectors: s,
                layoutActions: o,
                getConfigs: l,
                getComponent: a,
                specUrl: r.url(),
              },
              x().createElement(
                "div",
                { className: "operation-tag-content" },
                m
                  .map((e) => {
                    const r = e.get("path"),
                      a = e.get("method"),
                      n = k().List(["paths", r, a]);
                    return -1 === c.indexOf(a)
                      ? null
                      : x().createElement(i, {
                          key: `${r}-${a}`,
                          specPath: n,
                          op: e,
                          path: r,
                          method: a,
                          tag: t,
                        });
                  })
                  .toArray(),
              ),
            );
          };
        }
        function isAbsoluteUrl(e) {
          return e.match(/^(?:[a-z]+:)?\/\//i);
        }
        function buildBaseUrl(e, t) {
          return e
            ? isAbsoluteUrl(e)
              ? (function addProtocol(e) {
                  return e.match(/^\/\//i)
                    ? `${window.location.protocol}${e}`
                    : e;
                })(e)
              : new URL(e, t).href
            : t;
        }
        function safeBuildUrl(e, t, { selectedServer: r = "" } = {}) {
          try {
            return (function buildUrl(e, t, { selectedServer: r = "" } = {}) {
              if (!e) return;
              if (isAbsoluteUrl(e)) return e;
              const a = buildBaseUrl(r, t);
              return isAbsoluteUrl(a)
                ? new URL(e, a).href
                : new URL(e, window.location.href).href;
            })(e, t, { selectedServer: r });
          } catch {
            return;
          }
        }
        class OperationTag extends x().Component {
          static defaultProps = { tagObj: k().fromJS({}), tag: "" };
          render() {
            const {
              tagObj: e,
              tag: t,
              children: r,
              oas3Selectors: a,
              layoutSelectors: n,
              layoutActions: s,
              getConfigs: o,
              getComponent: l,
              specUrl: c,
            } = this.props;
            let { docExpansion: i, deepLinking: p } = o();
            const m = l("Collapse"),
              u = l("Markdown", !0),
              d = l("DeepLink"),
              h = l("Link"),
              g = l("ArrowUpIcon"),
              y = l("ArrowDownIcon");
            let f,
              S = e.getIn(["tagDetails", "description"], null),
              E = e.getIn(["tagDetails", "externalDocs", "description"]),
              _ = e.getIn(["tagDetails", "externalDocs", "url"]);
            f =
              isFunc(a) && isFunc(a.selectedServer)
                ? safeBuildUrl(_, c, { selectedServer: a.selectedServer() })
                : _;
            let v = ["operations-tag", t],
              w = n.isShown(v, "full" === i || "list" === i);
            return x().createElement(
              "div",
              {
                className: w
                  ? "opblock-tag-section is-open"
                  : "opblock-tag-section",
              },
              x().createElement(
                "h3",
                {
                  onClick: () => s.show(v, !w),
                  className: S ? "opblock-tag" : "opblock-tag no-desc",
                  id: v.map((e) => escapeDeepLinkPath(e)).join("-"),
                  "data-tag": t,
                  "data-is-open": w,
                },
                x().createElement(d, {
                  enabled: p,
                  isShown: w,
                  path: createDeepLinkPath(t),
                  text: t,
                }),
                S
                  ? x().createElement(
                      "small",
                      null,
                      x().createElement(u, { source: S }),
                    )
                  : x().createElement("small", null),
                f
                  ? x().createElement(
                      "div",
                      { className: "info__externaldocs" },
                      x().createElement(
                        "small",
                        null,
                        x().createElement(
                          h,
                          {
                            href: sanitizeUrl(f),
                            onClick: (e) => e.stopPropagation(),
                            target: "_blank",
                          },
                          E || f,
                        ),
                      ),
                    )
                  : null,
                x().createElement(
                  "button",
                  {
                    "aria-expanded": w,
                    className: "expand-operation",
                    title: w ? "Collapse operation" : "Expand operation",
                    onClick: () => s.show(v, !w),
                  },
                  w
                    ? x().createElement(g, { className: "arrow" })
                    : x().createElement(y, { className: "arrow" }),
                ),
              ),
              x().createElement(m, { isOpened: w }, r),
            );
          }
        }
        class Operation extends C.PureComponent {
          static defaultProps = {
            operation: null,
            response: null,
            request: null,
            specPath: (0, N.List)(),
            summary: "",
          };
          render() {
            let {
                specPath: e,
                response: t,
                request: r,
                toggleShown: a,
                onTryoutClick: n,
                onResetClick: s,
                onCancelClick: o,
                onExecute: l,
                fn: c,
                getComponent: i,
                getConfigs: p,
                specActions: m,
                specSelectors: u,
                authActions: d,
                authSelectors: h,
                oas3Actions: g,
                oas3Selectors: y,
              } = this.props,
              f = this.props.operation,
              {
                deprecated: S,
                isShown: E,
                path: _,
                method: v,
                op: w,
                tag: b,
                operationId: C,
                allowTryItOut: O,
                displayRequestDuration: N,
                tryItOutEnabled: A,
                executeInProgress: I,
              } = f.toJS(),
              { description: q, externalDocs: j, schemes: P } = w;
            const M = j
              ? safeBuildUrl(j.url, u.url(), {
                  selectedServer: y.selectedServer(),
                })
              : "";
            let R = f.getIn(["op"]),
              T = R.get("responses"),
              J = (function getList(e, t) {
                if (!k().Iterable.isIterable(e)) return k().List();
                let r = e.getIn(Array.isArray(t) ? t : [t]);
                return k().List.isList(r) ? r : k().List();
              })(R, ["parameters"]),
              $ = u.operationScheme(_, v),
              V = ["operations", b, C],
              D = getExtensions(R);
            const K = i("responses"),
              L = i("parameters"),
              U = i("execute"),
              z = i("clear"),
              B = i("Collapse"),
              F = i("Markdown", !0),
              W = i("schemes"),
              H = i("OperationServers"),
              X = i("OperationExt"),
              G = i("OperationSummary"),
              Y = i("Link"),
              { showExtensions: Q } = p();
            if (T && t && t.size > 0) {
              let e = !T.get(String(t.get("status"))) && !T.get("default");
              t = t.set("notDocumented", e);
            }
            let Z = [_, v];
            const ee = u.validationErrors([_, v]);
            return x().createElement(
              "div",
              {
                className: S
                  ? "opblock opblock-deprecated"
                  : E
                    ? `opblock opblock-${v} is-open`
                    : `opblock opblock-${v}`,
                id: escapeDeepLinkPath(V.join("-")),
              },
              x().createElement(G, {
                operationProps: f,
                isShown: E,
                toggleShown: a,
                getComponent: i,
                authActions: d,
                authSelectors: h,
                specPath: e,
              }),
              x().createElement(
                B,
                { isOpened: E },
                x().createElement(
                  "div",
                  { className: "opblock-body" },
                  (R && R.size) || null === R
                    ? null
                    : x().createElement(rolling_load, {
                        height: "32px",
                        width: "32px",
                        className: "opblock-loading-animation",
                      }),
                  S &&
                    x().createElement(
                      "h4",
                      { className: "opblock-title_normal" },
                      " Warning: Deprecated",
                    ),
                  q &&
                    x().createElement(
                      "div",
                      { className: "opblock-description-wrapper" },
                      x().createElement(
                        "div",
                        { className: "opblock-description" },
                        x().createElement(F, { source: q }),
                      ),
                    ),
                  M
                    ? x().createElement(
                        "div",
                        { className: "opblock-external-docs-wrapper" },
                        x().createElement(
                          "h4",
                          { className: "opblock-title_normal" },
                          "Find more details",
                        ),
                        x().createElement(
                          "div",
                          { className: "opblock-external-docs" },
                          j.description &&
                            x().createElement(
                              "span",
                              {
                                className: "opblock-external-docs__description",
                              },
                              x().createElement(F, { source: j.description }),
                            ),
                          x().createElement(
                            Y,
                            {
                              target: "_blank",
                              className: "opblock-external-docs__link",
                              href: sanitizeUrl(M),
                            },
                            M,
                          ),
                        ),
                      )
                    : null,
                  R && R.size
                    ? x().createElement(L, {
                        parameters: J,
                        specPath: e.push("parameters"),
                        operation: R,
                        onChangeKey: Z,
                        onTryoutClick: n,
                        onResetClick: s,
                        onCancelClick: o,
                        tryItOutEnabled: A,
                        allowTryItOut: O,
                        fn: c,
                        getComponent: i,
                        specActions: m,
                        specSelectors: u,
                        pathMethod: [_, v],
                        getConfigs: p,
                        oas3Actions: g,
                        oas3Selectors: y,
                      })
                    : null,
                  A
                    ? x().createElement(H, {
                        getComponent: i,
                        path: _,
                        method: v,
                        operationServers: R.get("servers"),
                        pathServers: u.paths().getIn([_, "servers"]),
                        getSelectedServer: y.selectedServer,
                        setSelectedServer: g.setSelectedServer,
                        setServerVariableValue: g.setServerVariableValue,
                        getServerVariable: y.serverVariableValue,
                        getEffectiveServerValue: y.serverEffectiveValue,
                      })
                    : null,
                  A && O && P && P.size
                    ? x().createElement(
                        "div",
                        { className: "opblock-schemes" },
                        x().createElement(W, {
                          schemes: P,
                          path: _,
                          method: v,
                          specActions: m,
                          currentScheme: $,
                        }),
                      )
                    : null,
                  !A || !O || ee.length <= 0
                    ? null
                    : x().createElement(
                        "div",
                        { className: "validation-errors errors-wrapper" },
                        "Please correct the following validation errors and try again.",
                        x().createElement(
                          "ul",
                          null,
                          ee.map((e, t) =>
                            x().createElement("li", { key: t }, " ", e, " "),
                          ),
                        ),
                      ),
                  x().createElement(
                    "div",
                    {
                      className: A && t && O ? "btn-group" : "execute-wrapper",
                    },
                    A && O
                      ? x().createElement(U, {
                          operation: R,
                          specActions: m,
                          specSelectors: u,
                          oas3Selectors: y,
                          oas3Actions: g,
                          path: _,
                          method: v,
                          onExecute: l,
                          disabled: I,
                        })
                      : null,
                    A && t && O
                      ? x().createElement(z, {
                          specActions: m,
                          path: _,
                          method: v,
                        })
                      : null,
                  ),
                  I
                    ? x().createElement(
                        "div",
                        { className: "loading-container" },
                        x().createElement("div", { className: "loading" }),
                      )
                    : null,
                  T
                    ? x().createElement(K, {
                        responses: T,
                        request: r,
                        tryItOutResponse: t,
                        getComponent: i,
                        getConfigs: p,
                        specSelectors: u,
                        oas3Actions: g,
                        oas3Selectors: y,
                        specActions: m,
                        produces: u.producesOptionsFor([_, v]),
                        producesValue: u.currentProducesFor([_, v]),
                        specPath: e.push("responses"),
                        path: _,
                        method: v,
                        displayRequestDuration: N,
                        fn: c,
                      })
                    : null,
                  Q && D.size
                    ? x().createElement(X, { extensions: D, getComponent: i })
                    : null,
                ),
              ),
            );
          }
        }
        class OperationContainer extends C.PureComponent {
          constructor(e, t) {
            super(e, t);
            const { tryItOutEnabled: r } = e.getConfigs();
            this.state = { tryItOutEnabled: r, executeInProgress: !1 };
          }
          static defaultProps = {
            showSummary: !0,
            response: null,
            allowTryItOut: !0,
            displayOperationId: !1,
            displayRequestDuration: !1,
          };
          mapStateToProps(e, t) {
            const { op: r, layoutSelectors: a, getConfigs: n } = t,
              {
                docExpansion: s,
                deepLinking: o,
                displayOperationId: l,
                displayRequestDuration: c,
                supportedSubmitMethods: i,
              } = n(),
              p = a.showSummary(),
              m =
                r.getIn(["operation", "__originalOperationId"]) ||
                r.getIn(["operation", "operationId"]) ||
                (0, oa.opId)(r.get("operation"), t.path, t.method) ||
                r.get("id"),
              u = ["operations", t.tag, m],
              d =
                i.indexOf(t.method) >= 0 &&
                (void 0 === t.allowTryItOut
                  ? t.specSelectors.allowTryItOutFor(t.path, t.method)
                  : t.allowTryItOut),
              h =
                r.getIn(["operation", "security"]) ||
                t.specSelectors.security();
            return {
              operationId: m,
              isDeepLinkingEnabled: o,
              showSummary: p,
              displayOperationId: l,
              displayRequestDuration: c,
              allowTryItOut: d,
              security: h,
              isAuthorized: t.authSelectors.isAuthorized(h),
              isShown: a.isShown(u, "full" === s),
              jumpToKey: `paths.${t.path}.${t.method}`,
              response: t.specSelectors.responseFor(t.path, t.method),
              request: t.specSelectors.requestFor(t.path, t.method),
            };
          }
          componentDidMount() {
            const { isShown: e } = this.props,
              t = this.getResolvedSubtree();
            e && void 0 === t && this.requestResolvedSubtree();
          }
          UNSAFE_componentWillReceiveProps(e) {
            const { response: t, isShown: r } = e,
              a = this.getResolvedSubtree();
            t !== this.props.response &&
              this.setState({ executeInProgress: !1 }),
              r && void 0 === a && this.requestResolvedSubtree();
          }
          toggleShown = () => {
            let {
              layoutActions: e,
              tag: t,
              operationId: r,
              isShown: a,
            } = this.props;
            const n = this.getResolvedSubtree();
            a || void 0 !== n || this.requestResolvedSubtree(),
              e.show(["operations", t, r], !a);
          };
          onCancelClick = () => {
            this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled });
          };
          onTryoutClick = () => {
            this.setState({ tryItOutEnabled: !this.state.tryItOutEnabled });
          };
          onResetClick = (e) => {
            const t = this.props.oas3Selectors.selectDefaultRequestBodyValue(
              ...e,
            );
            this.props.oas3Actions.setRequestBodyValue({
              value: t,
              pathMethod: e,
            });
          };
          onExecute = () => {
            this.setState({ executeInProgress: !0 });
          };
          getResolvedSubtree = () => {
            const {
              specSelectors: e,
              path: t,
              method: r,
              specPath: a,
            } = this.props;
            return a
              ? e.specResolvedSubtree(a.toJS())
              : e.specResolvedSubtree(["paths", t, r]);
          };
          requestResolvedSubtree = () => {
            const {
              specActions: e,
              path: t,
              method: r,
              specPath: a,
            } = this.props;
            return a
              ? e.requestResolvedSubtree(a.toJS())
              : e.requestResolvedSubtree(["paths", t, r]);
          };
          render() {
            let {
              op: e,
              tag: t,
              path: r,
              method: a,
              security: n,
              isAuthorized: s,
              operationId: o,
              showSummary: l,
              isShown: c,
              jumpToKey: i,
              allowTryItOut: p,
              response: m,
              request: u,
              displayOperationId: d,
              displayRequestDuration: h,
              isDeepLinkingEnabled: g,
              specPath: y,
              specSelectors: f,
              specActions: S,
              getComponent: E,
              getConfigs: _,
              layoutSelectors: v,
              layoutActions: w,
              authActions: b,
              authSelectors: C,
              oas3Actions: O,
              oas3Selectors: k,
              fn: A,
            } = this.props;
            const I = E("operation"),
              q = this.getResolvedSubtree() || (0, N.Map)(),
              j = (0, N.fromJS)({
                op: q,
                tag: t,
                path: r,
                summary: e.getIn(["operation", "summary"]) || "",
                deprecated:
                  q.get("deprecated") ||
                  e.getIn(["operation", "deprecated"]) ||
                  !1,
                method: a,
                security: n,
                isAuthorized: s,
                operationId: o,
                originalOperationId: q.getIn([
                  "operation",
                  "__originalOperationId",
                ]),
                showSummary: l,
                isShown: c,
                jumpToKey: i,
                allowTryItOut: p,
                request: u,
                displayOperationId: d,
                displayRequestDuration: h,
                isDeepLinkingEnabled: g,
                executeInProgress: this.state.executeInProgress,
                tryItOutEnabled: this.state.tryItOutEnabled,
              });
            return x().createElement(I, {
              operation: j,
              response: m,
              request: u,
              isShown: c,
              toggleShown: this.toggleShown,
              onTryoutClick: this.onTryoutClick,
              onResetClick: this.onResetClick,
              onCancelClick: this.onCancelClick,
              onExecute: this.onExecute,
              specPath: y,
              specActions: S,
              specSelectors: f,
              oas3Actions: O,
              oas3Selectors: k,
              layoutActions: w,
              layoutSelectors: v,
              authActions: b,
              authSelectors: C,
              getComponent: E,
              getConfigs: _,
              fn: A,
            });
          }
        }
        const Ya = require("lodash/toString");
        var Qa = __webpack_require__.n(Ya);
        class OperationSummary extends C.PureComponent {
          static defaultProps = {
            operationProps: null,
            specPath: (0, N.List)(),
            summary: "",
          };
          render() {
            let {
                isShown: e,
                toggleShown: t,
                getComponent: r,
                authActions: a,
                authSelectors: n,
                operationProps: s,
                specPath: o,
              } = this.props,
              {
                summary: l,
                isAuthorized: c,
                method: i,
                op: p,
                showSummary: m,
                path: u,
                operationId: d,
                originalOperationId: h,
                displayOperationId: g,
              } = s.toJS(),
              { summary: y } = p,
              f = s.get("security");
            const S = r("authorizeOperationBtn", !0),
              E = r("OperationSummaryMethod"),
              _ = r("OperationSummaryPath"),
              v = r("JumpToPath", !0),
              w = r("CopyToClipboardBtn", !0),
              b = r("ArrowUpIcon"),
              C = r("ArrowDownIcon"),
              O = f && !!f.count(),
              N = O && 1 === f.size && f.first().isEmpty(),
              k = !O || N;
            return x().createElement(
              "div",
              { className: `opblock-summary opblock-summary-${i}` },
              x().createElement(
                "button",
                {
                  "aria-expanded": e,
                  className: "opblock-summary-control",
                  onClick: t,
                },
                x().createElement(E, { method: i }),
                x().createElement(
                  "div",
                  { className: "opblock-summary-path-description-wrapper" },
                  x().createElement(_, {
                    getComponent: r,
                    operationProps: s,
                    specPath: o,
                  }),
                  m
                    ? x().createElement(
                        "div",
                        { className: "opblock-summary-description" },
                        Qa()(y || l),
                      )
                    : null,
                ),
                g && (h || d)
                  ? x().createElement(
                      "span",
                      { className: "opblock-summary-operation-id" },
                      h || d,
                    )
                  : null,
              ),
              x().createElement(w, { textToCopy: `${o.get(1)}` }),
              k
                ? null
                : x().createElement(S, {
                    isAuthorized: c,
                    onClick: () => {
                      const e = n.definitionsForRequirements(f);
                      a.showDefinitions(e);
                    },
                  }),
              x().createElement(v, { path: o }),
              x().createElement(
                "button",
                {
                  "aria-label": `${i} ${u.replace(/\//g, "​/")}`,
                  className: "opblock-control-arrow",
                  "aria-expanded": e,
                  tabIndex: "-1",
                  onClick: t,
                },
                e
                  ? x().createElement(b, { className: "arrow" })
                  : x().createElement(C, { className: "arrow" }),
              ),
            );
          }
        }
        class OperationSummaryMethod extends C.PureComponent {
          static defaultProps = { operationProps: null };
          render() {
            let { method: e } = this.props;
            return x().createElement(
              "span",
              { className: "opblock-summary-method" },
              e.toUpperCase(),
            );
          }
        }
        class OperationSummaryPath extends C.PureComponent {
          render() {
            let { getComponent: e, operationProps: t } = this.props,
              {
                deprecated: r,
                isShown: a,
                path: n,
                tag: s,
                operationId: o,
                isDeepLinkingEnabled: l,
              } = t.toJS();
            const c = n.split(/(?=\/)/g);
            for (let e = 1; e < c.length; e += 2)
              c.splice(e, 0, x().createElement("wbr", { key: e }));
            const i = e("DeepLink");
            return x().createElement(
              "span",
              {
                className: r
                  ? "opblock-summary-path__deprecated"
                  : "opblock-summary-path",
                "data-path": n,
              },
              x().createElement(i, {
                enabled: l,
                isShown: a,
                path: createDeepLinkPath(`${s}/${o}`),
                text: c,
              }),
            );
          }
        }
        const operation_extensions = ({ extensions: e, getComponent: t }) => {
            let r = t("OperationExtRow");
            return x().createElement(
              "div",
              { className: "opblock-section" },
              x().createElement(
                "div",
                { className: "opblock-section-header" },
                x().createElement("h4", null, "Extensions"),
              ),
              x().createElement(
                "div",
                { className: "table-container" },
                x().createElement(
                  "table",
                  null,
                  x().createElement(
                    "thead",
                    null,
                    x().createElement(
                      "tr",
                      null,
                      x().createElement(
                        "td",
                        { className: "col_header" },
                        "Field",
                      ),
                      x().createElement(
                        "td",
                        { className: "col_header" },
                        "Value",
                      ),
                    ),
                  ),
                  x().createElement(
                    "tbody",
                    null,
                    e.entrySeq().map(([e, t]) =>
                      x().createElement(r, {
                        key: `${e}-${t}`,
                        xKey: e,
                        xVal: t,
                      }),
                    ),
                  ),
                ),
              ),
            );
          },
          operation_extension_row = ({ xKey: e, xVal: t }) => {
            const r = t ? (t.toJS ? t.toJS() : t) : null;
            return x().createElement(
              "tr",
              null,
              x().createElement("td", null, e),
              x().createElement("td", null, JSON.stringify(r)),
            );
          };
        function createHtmlReadyId(e, t = "_") {
          return e.replace(/[^\w-]/g, t);
        }
        class Responses extends x().Component {
          static defaultProps = {
            tryItOutResponse: null,
            produces: (0, N.fromJS)(["application/json"]),
            displayRequestDuration: !1,
          };
          onChangeProducesWrapper = (e) =>
            this.props.specActions.changeProducesValue(
              [this.props.path, this.props.method],
              e,
            );
          onResponseContentTypeChange = ({
            controlsAcceptHeader: e,
            value: t,
          }) => {
            const { oas3Actions: r, path: a, method: n } = this.props;
            e && r.setResponseContentType({ value: t, path: a, method: n });
          };
          render() {
            let {
                responses: e,
                tryItOutResponse: t,
                getComponent: r,
                getConfigs: a,
                specSelectors: n,
                fn: s,
                producesValue: o,
                displayRequestDuration: l,
                specPath: c,
                path: i,
                method: p,
                oas3Selectors: m,
                oas3Actions: u,
              } = this.props,
              d = (function defaultStatusCode(e) {
                let t = e.keySeq();
                return t.contains(ce)
                  ? ce
                  : t
                      .filter((e) => "2" === (e + "")[0])
                      .sort()
                      .first();
              })(e);
            const h = r("contentType"),
              g = r("liveResponse"),
              y = r("response");
            let f =
              this.props.produces && this.props.produces.size
                ? this.props.produces
                : Responses.defaultProps.produces;
            const S = n.isOAS3()
                ? (function getAcceptControllingResponse(e) {
                    if (!k().OrderedMap.isOrderedMap(e)) return null;
                    if (!e.size) return null;
                    const t = e.find(
                        (e, t) =>
                          t.startsWith("2") &&
                          Object.keys(e.get("content") || {}).length > 0,
                      ),
                      r = e.get("default") || k().OrderedMap(),
                      a = (r.get("content") || k().OrderedMap()).keySeq().toJS()
                        .length
                        ? r
                        : null;
                    return t || a;
                  })(e)
                : null,
              E = createHtmlReadyId(`${p}${i}_responses`),
              _ = `${E}_select`;
            return x().createElement(
              "div",
              { className: "responses-wrapper" },
              x().createElement(
                "div",
                { className: "opblock-section-header" },
                x().createElement("h4", null, "Responses"),
                n.isOAS3()
                  ? null
                  : x().createElement(
                      "label",
                      { htmlFor: _ },
                      x().createElement("span", null, "Response content type"),
                      x().createElement(h, {
                        value: o,
                        ariaControls: E,
                        ariaLabel: "Response content type",
                        className: "execute-content-type",
                        contentTypes: f,
                        controlId: _,
                        onChange: this.onChangeProducesWrapper,
                      }),
                    ),
              ),
              x().createElement(
                "div",
                { className: "responses-inner" },
                t
                  ? x().createElement(
                      "div",
                      null,
                      x().createElement(g, {
                        response: t,
                        getComponent: r,
                        getConfigs: a,
                        specSelectors: n,
                        path: this.props.path,
                        method: this.props.method,
                        displayRequestDuration: l,
                      }),
                      x().createElement("h4", null, "Responses"),
                    )
                  : null,
                x().createElement(
                  "table",
                  {
                    "aria-live": "polite",
                    className: "responses-table",
                    id: E,
                    role: "region",
                  },
                  x().createElement(
                    "thead",
                    null,
                    x().createElement(
                      "tr",
                      { className: "responses-header" },
                      x().createElement(
                        "td",
                        { className: "col_header response-col_status" },
                        "Code",
                      ),
                      x().createElement(
                        "td",
                        { className: "col_header response-col_description" },
                        "Description",
                      ),
                      n.isOAS3()
                        ? x().createElement(
                            "td",
                            { className: "col col_header response-col_links" },
                            "Links",
                          )
                        : null,
                    ),
                  ),
                  x().createElement(
                    "tbody",
                    null,
                    e
                      .entrySeq()
                      .map(([e, l]) => {
                        let h =
                          t && t.get("status") == e ? "response_current" : "";
                        return x().createElement(y, {
                          key: e,
                          path: i,
                          method: p,
                          specPath: c.push(e),
                          isDefault: d === e,
                          fn: s,
                          className: h,
                          code: e,
                          response: l,
                          specSelectors: n,
                          controlsAcceptHeader: l === S,
                          onContentTypeChange: this.onResponseContentTypeChange,
                          contentType: o,
                          getConfigs: a,
                          activeExamplesKey: m.activeExamplesMember(
                            i,
                            p,
                            "responses",
                            e,
                          ),
                          oas3Actions: u,
                          getComponent: r,
                        });
                      })
                      .toArray(),
                  ),
                ),
              ),
            );
          }
        }
        function getKnownSyntaxHighlighterLanguage(e) {
          return (function canJsonParse(e) {
            try {
              return !!JSON.parse(e);
            } catch (e) {
              return null;
            }
          })(e)
            ? "json"
            : null;
        }
        class Response extends x().Component {
          constructor(e, t) {
            super(e, t), (this.state = { responseContentType: "" });
          }
          static defaultProps = {
            response: (0, N.fromJS)({}),
            onContentTypeChange: () => {},
          };
          _onContentTypeChange = (e) => {
            const { onContentTypeChange: t, controlsAcceptHeader: r } =
              this.props;
            this.setState({ responseContentType: e }),
              t({ value: e, controlsAcceptHeader: r });
          };
          getTargetExamplesKey = () => {
            const {
                response: e,
                contentType: t,
                activeExamplesKey: r,
              } = this.props,
              a = this.state.responseContentType || t,
              n = e
                .getIn(["content", a], (0, N.Map)({}))
                .get("examples", null)
                .keySeq()
                .first();
            return r || n;
          };
          render() {
            let {
                path: e,
                method: t,
                code: r,
                response: a,
                className: n,
                specPath: s,
                fn: o,
                getComponent: l,
                getConfigs: c,
                specSelectors: i,
                contentType: p,
                controlsAcceptHeader: m,
                oas3Actions: u,
              } = this.props,
              { inferSchema: d, getSampleSchema: h } = o,
              g = i.isOAS3();
            const { showExtensions: y } = c();
            let f = y ? getExtensions(a) : null,
              S = a.get("headers"),
              E = a.get("links");
            const _ = l("ResponseExtension"),
              v = l("headers"),
              w = l("HighlightCode", !0),
              b = l("modelExample"),
              C = l("Markdown", !0),
              O = l("operationLink"),
              k = l("contentType"),
              A = l("ExamplesSelect"),
              I = l("Example");
            var q, j;
            const P = this.state.responseContentType || p,
              M = a.getIn(["content", P], (0, N.Map)({})),
              R = M.get("examples", null);
            if (g) {
              const e = M.get("schema");
              (q = e ? d(e.toJS()) : null),
                (j = e
                  ? (0, N.List)([
                      "content",
                      this.state.responseContentType,
                      "schema",
                    ])
                  : s);
            } else
              (q = a.get("schema")),
                (j = a.has("schema") ? s.push("schema") : s);
            let T,
              J,
              $ = !1,
              V = { includeReadOnly: !0 };
            if (g)
              if (
                ((J = M.get("schema")?.toJS()), N.Map.isMap(R) && !R.isEmpty())
              ) {
                const e = this.getTargetExamplesKey(),
                  getMediaTypeExample = (e) => e.get("value");
                (T = getMediaTypeExample(R.get(e, (0, N.Map)({})))),
                  void 0 === T &&
                    (T = getMediaTypeExample(R.values().next().value)),
                  ($ = !0);
              } else
                void 0 !== M.get("example") &&
                  ((T = M.get("example")), ($ = !0));
            else {
              (J = q), (V = { ...V, includeWriteOnly: !0 });
              const e = a.getIn(["examples", P]);
              e && ((T = e), ($ = !0));
            }
            const D = ((e, t) => {
              if (null == e) return null;
              const r = getKnownSyntaxHighlighterLanguage(e) ? "json" : null;
              return x().createElement(
                "div",
                null,
                x().createElement(
                  t,
                  { className: "example", language: r },
                  stringify(e),
                ),
              );
            })(h(J, P, V, $ ? T : void 0), w);
            return x().createElement(
              "tr",
              { className: "response " + (n || ""), "data-code": r },
              x().createElement("td", { className: "response-col_status" }, r),
              x().createElement(
                "td",
                { className: "response-col_description" },
                x().createElement(
                  "div",
                  { className: "response-col_description__inner" },
                  x().createElement(C, { source: a.get("description") }),
                ),
                y && f.size
                  ? f.entrySeq().map(([e, t]) =>
                      x().createElement(_, {
                        key: `${e}-${t}`,
                        xKey: e,
                        xVal: t,
                      }),
                    )
                  : null,
                g && a.get("content")
                  ? x().createElement(
                      "section",
                      { className: "response-controls" },
                      x().createElement(
                        "div",
                        {
                          className: ut()("response-control-media-type", {
                            "response-control-media-type--accept-controller": m,
                          }),
                        },
                        x().createElement(
                          "small",
                          { className: "response-control-media-type__title" },
                          "Media type",
                        ),
                        x().createElement(k, {
                          value: this.state.responseContentType,
                          contentTypes: a.get("content")
                            ? a.get("content").keySeq()
                            : (0, N.Seq)(),
                          onChange: this._onContentTypeChange,
                          ariaLabel: "Media Type",
                        }),
                        m
                          ? x().createElement(
                              "small",
                              {
                                className:
                                  "response-control-media-type__accept-message",
                              },
                              "Controls ",
                              x().createElement("code", null, "Accept"),
                              " header.",
                            )
                          : null,
                      ),
                      N.Map.isMap(R) && !R.isEmpty()
                        ? x().createElement(
                            "div",
                            { className: "response-control-examples" },
                            x().createElement(
                              "small",
                              { className: "response-control-examples__title" },
                              "Examples",
                            ),
                            x().createElement(A, {
                              examples: R,
                              currentExampleKey: this.getTargetExamplesKey(),
                              onSelect: (a) =>
                                u.setActiveExamplesMember({
                                  name: a,
                                  pathMethod: [e, t],
                                  contextType: "responses",
                                  contextName: r,
                                }),
                              showLabels: !1,
                            }),
                          )
                        : null,
                    )
                  : null,
                D || q
                  ? x().createElement(b, {
                      specPath: j,
                      getComponent: l,
                      getConfigs: c,
                      specSelectors: i,
                      schema: fromJSOrdered(q),
                      example: D,
                      includeReadOnly: !0,
                    })
                  : null,
                g && R
                  ? x().createElement(I, {
                      example: R.get(
                        this.getTargetExamplesKey(),
                        (0, N.Map)({}),
                      ),
                      getComponent: l,
                      getConfigs: c,
                      omitValue: !0,
                    })
                  : null,
                S
                  ? x().createElement(v, { headers: S, getComponent: l })
                  : null,
              ),
              g
                ? x().createElement(
                    "td",
                    { className: "response-col_links" },
                    E
                      ? E.toSeq()
                          .entrySeq()
                          .map(([e, t]) =>
                            x().createElement(O, {
                              key: e,
                              name: e,
                              link: t,
                              getComponent: l,
                            }),
                          )
                      : x().createElement("i", null, "No links"),
                  )
                : null,
            );
          }
        }
        const response_extension = ({ xKey: e, xVal: t }) =>
            x().createElement(
              "div",
              { className: "response__extension" },
              e,
              ": ",
              String(t),
            ),
          Za = require("xml-but-prettier");
        var en = __webpack_require__.n(Za);
        const tn = require("lodash/toLower");
        var rn = __webpack_require__.n(tn);
        class ResponseBody extends x().PureComponent {
          state = { parsedContent: null };
          updateParsedContent = (e) => {
            const { content: t } = this.props;
            if (e !== t)
              if (t && t instanceof Blob) {
                var r = new FileReader();
                (r.onload = () => {
                  this.setState({ parsedContent: r.result });
                }),
                  r.readAsText(t);
              } else this.setState({ parsedContent: t.toString() });
          };
          componentDidMount() {
            this.updateParsedContent(null);
          }
          componentDidUpdate(e) {
            this.updateParsedContent(e.content);
          }
          render() {
            let {
              content: e,
              contentType: t,
              url: r,
              headers: a = {},
              getComponent: n,
            } = this.props;
            const { parsedContent: s } = this.state,
              o = n("HighlightCode", !0),
              l = "response_" + new Date().getTime();
            let c, i;
            if (
              ((r = r || ""),
              (/^application\/octet-stream/i.test(t) ||
                (a["Content-Disposition"] &&
                  /attachment/i.test(a["Content-Disposition"])) ||
                (a["content-disposition"] &&
                  /attachment/i.test(a["content-disposition"])) ||
                (a["Content-Description"] &&
                  /File Transfer/i.test(a["Content-Description"])) ||
                (a["content-description"] &&
                  /File Transfer/i.test(a["content-description"]))) &&
                (e.size > 0 || e.length > 0))
            )
              if ("Blob" in window) {
                let n = t || "text/html",
                  s = e instanceof Blob ? e : new Blob([e], { type: n }),
                  o = window.URL.createObjectURL(s),
                  l = [n, r.substr(r.lastIndexOf("/") + 1), o].join(":"),
                  c = a["content-disposition"] || a["Content-Disposition"];
                if (void 0 !== c) {
                  let e = (function extractFileNameFromContentDispositionHeader(
                    e,
                  ) {
                    let t;
                    if (
                      ([
                        /filename\*=[^']+'\w*'"([^"]+)";?/i,
                        /filename\*=[^']+'\w*'([^;]+);?/i,
                        /filename="([^;]*);?"/i,
                        /filename=([^;]*);?/i,
                      ].some((r) => ((t = r.exec(e)), null !== t)),
                      null !== t && t.length > 1)
                    )
                      try {
                        return decodeURIComponent(t[1]);
                      } catch (e) {
                        console.error(e);
                      }
                    return null;
                  })(c);
                  null !== e && (l = e);
                }
                i =
                  L.navigator && L.navigator.msSaveOrOpenBlob
                    ? x().createElement(
                        "div",
                        null,
                        x().createElement(
                          "a",
                          {
                            href: o,
                            onClick: () => L.navigator.msSaveOrOpenBlob(s, l),
                          },
                          "Download file",
                        ),
                      )
                    : x().createElement(
                        "div",
                        null,
                        x().createElement(
                          "a",
                          { href: o, download: l },
                          "Download file",
                        ),
                      );
              } else
                i = x().createElement(
                  "pre",
                  { className: "microlight" },
                  "Download headers detected but your browser does not support downloading binary via XHR (Blob).",
                );
            else if (/json/i.test(t)) {
              let t = null;
              getKnownSyntaxHighlighterLanguage(e) && (t = "json");
              try {
                c = JSON.stringify(JSON.parse(e), null, "  ");
              } catch (t) {
                c = "can't parse JSON.  Raw result:\n\n" + e;
              }
              i = x().createElement(
                o,
                {
                  language: t,
                  downloadable: !0,
                  fileName: `${l}.json`,
                  canCopy: !0,
                },
                c,
              );
            } else
              /xml/i.test(t)
                ? ((c = en()(e, { textNodesOnSameLine: !0, indentor: "  " })),
                  (i = x().createElement(
                    o,
                    { downloadable: !0, fileName: `${l}.xml`, canCopy: !0 },
                    c,
                  )))
                : (i =
                    "text/html" === rn()(t) || /text\/plain/.test(t)
                      ? x().createElement(
                          o,
                          {
                            downloadable: !0,
                            fileName: `${l}.html`,
                            canCopy: !0,
                          },
                          e,
                        )
                      : "text/csv" === rn()(t) || /text\/csv/.test(t)
                        ? x().createElement(
                            o,
                            {
                              downloadable: !0,
                              fileName: `${l}.csv`,
                              canCopy: !0,
                            },
                            e,
                          )
                        : /^image\//i.test(t)
                          ? t.includes("svg")
                            ? x().createElement("div", null, " ", e, " ")
                            : x().createElement("img", {
                                src: window.URL.createObjectURL(e),
                              })
                          : /^audio\//i.test(t)
                            ? x().createElement(
                                "pre",
                                { className: "microlight" },
                                x().createElement(
                                  "audio",
                                  { controls: !0, key: r },
                                  x().createElement("source", {
                                    src: r,
                                    type: t,
                                  }),
                                ),
                              )
                            : "string" == typeof e
                              ? x().createElement(
                                  o,
                                  {
                                    downloadable: !0,
                                    fileName: `${l}.txt`,
                                    canCopy: !0,
                                  },
                                  e,
                                )
                              : e.size > 0
                                ? s
                                  ? x().createElement(
                                      "div",
                                      null,
                                      x().createElement(
                                        "p",
                                        { className: "i" },
                                        "Unrecognized response type; displaying content as text.",
                                      ),
                                      x().createElement(
                                        o,
                                        {
                                          downloadable: !0,
                                          fileName: `${l}.txt`,
                                          canCopy: !0,
                                        },
                                        s,
                                      ),
                                    )
                                  : x().createElement(
                                      "p",
                                      { className: "i" },
                                      "Unrecognized response type; unable to display.",
                                    )
                                : null);
            return i
              ? x().createElement(
                  "div",
                  null,
                  x().createElement("h5", null, "Response body"),
                  i,
                )
              : null;
          }
        }
        class Parameters extends C.Component {
          constructor(e) {
            super(e),
              (this.state = { callbackVisible: !1, parametersVisible: !0 });
          }
          static defaultProps = {
            onTryoutClick: Function.prototype,
            onCancelClick: Function.prototype,
            tryItOutEnabled: !1,
            allowTryItOut: !0,
            onChangeKey: [],
            specPath: [],
          };
          onChange = (e, t, r) => {
            let {
              specActions: { changeParamByIdentity: a },
              onChangeKey: n,
            } = this.props;
            a(n, e, t, r);
          };
          onChangeConsumesWrapper = (e) => {
            let {
              specActions: { changeConsumesValue: t },
              onChangeKey: r,
            } = this.props;
            t(r, e);
          };
          toggleTab = (e) =>
            "parameters" === e
              ? this.setState({ parametersVisible: !0, callbackVisible: !1 })
              : "callbacks" === e
                ? this.setState({ callbackVisible: !0, parametersVisible: !1 })
                : void 0;
          onChangeMediaType = ({ value: e, pathMethod: t }) => {
            let {
              specActions: r,
              oas3Selectors: a,
              oas3Actions: n,
            } = this.props;
            const s = a.hasUserEditedBody(...t),
              o = a.shouldRetainRequestBodyValue(...t);
            n.setRequestContentType({ value: e, pathMethod: t }),
              n.initRequestBodyValidateError({ pathMethod: t }),
              s ||
                (o || n.setRequestBodyValue({ value: void 0, pathMethod: t }),
                r.clearResponse(...t),
                r.clearRequest(...t),
                r.clearValidateParams(t));
          };
          render() {
            let {
              onTryoutClick: e,
              onResetClick: t,
              parameters: r,
              allowTryItOut: a,
              tryItOutEnabled: n,
              specPath: s,
              fn: o,
              getComponent: l,
              getConfigs: c,
              specSelectors: i,
              specActions: p,
              pathMethod: m,
              oas3Actions: u,
              oas3Selectors: d,
              operation: h,
            } = this.props;
            const g = l("parameterRow"),
              y = l("TryItOutButton"),
              f = l("contentType"),
              S = l("Callbacks", !0),
              E = l("RequestBody", !0),
              _ = n && a,
              v = i.isOAS3(),
              w = `${createHtmlReadyId(`${m[1]}${m[0]}_requests`)}_select`,
              b = h.get("requestBody"),
              C = Object.values(
                r.reduce((e, t) => {
                  const r = t.get("in");
                  return (e[r] ??= []), e[r].push(t), e;
                }, {}),
              ).reduce((e, t) => e.concat(t), []);
            return x().createElement(
              "div",
              { className: "opblock-section" },
              x().createElement(
                "div",
                { className: "opblock-section-header" },
                v
                  ? x().createElement(
                      "div",
                      { className: "tab-header" },
                      x().createElement(
                        "div",
                        {
                          onClick: () => this.toggleTab("parameters"),
                          className: `tab-item ${this.state.parametersVisible && "active"}`,
                        },
                        x().createElement(
                          "h4",
                          { className: "opblock-title" },
                          x().createElement("span", null, "Parameters"),
                        ),
                      ),
                      h.get("callbacks")
                        ? x().createElement(
                            "div",
                            {
                              onClick: () => this.toggleTab("callbacks"),
                              className: `tab-item ${this.state.callbackVisible && "active"}`,
                            },
                            x().createElement(
                              "h4",
                              { className: "opblock-title" },
                              x().createElement("span", null, "Callbacks"),
                            ),
                          )
                        : null,
                    )
                  : x().createElement(
                      "div",
                      { className: "tab-header" },
                      x().createElement(
                        "h4",
                        { className: "opblock-title" },
                        "Parameters",
                      ),
                    ),
                a
                  ? x().createElement(y, {
                      isOAS3: i.isOAS3(),
                      hasUserEditedBody: d.hasUserEditedBody(...m),
                      enabled: n,
                      onCancelClick: this.props.onCancelClick,
                      onTryoutClick: e,
                      onResetClick: () => t(m),
                    })
                  : null,
              ),
              this.state.parametersVisible
                ? x().createElement(
                    "div",
                    { className: "parameters-container" },
                    C.length
                      ? x().createElement(
                          "div",
                          { className: "table-container" },
                          x().createElement(
                            "table",
                            { className: "parameters" },
                            x().createElement(
                              "thead",
                              null,
                              x().createElement(
                                "tr",
                                null,
                                x().createElement(
                                  "th",
                                  {
                                    className: "col_header parameters-col_name",
                                  },
                                  "Name",
                                ),
                                x().createElement(
                                  "th",
                                  {
                                    className:
                                      "col_header parameters-col_description",
                                  },
                                  "Description",
                                ),
                              ),
                            ),
                            x().createElement(
                              "tbody",
                              null,
                              C.map((e, t) =>
                                x().createElement(g, {
                                  fn: o,
                                  specPath: s.push(t.toString()),
                                  getComponent: l,
                                  getConfigs: c,
                                  rawParam: e,
                                  param: i.parameterWithMetaByIdentity(m, e),
                                  key: `${e.get("in")}.${e.get("name")}`,
                                  onChange: this.onChange,
                                  onChangeConsumes:
                                    this.onChangeConsumesWrapper,
                                  specSelectors: i,
                                  specActions: p,
                                  oas3Actions: u,
                                  oas3Selectors: d,
                                  pathMethod: m,
                                  isExecute: _,
                                }),
                              ),
                            ),
                          ),
                        )
                      : x().createElement(
                          "div",
                          { className: "opblock-description-wrapper" },
                          x().createElement("p", null, "No parameters"),
                        ),
                  )
                : null,
              this.state.callbackVisible
                ? x().createElement(
                    "div",
                    {
                      className:
                        "callbacks-container opblock-description-wrapper",
                    },
                    x().createElement(S, {
                      callbacks: (0, N.Map)(h.get("callbacks")),
                      specPath: s.slice(0, -1).push("callbacks"),
                    }),
                  )
                : null,
              v &&
                b &&
                this.state.parametersVisible &&
                x().createElement(
                  "div",
                  { className: "opblock-section opblock-section-request-body" },
                  x().createElement(
                    "div",
                    { className: "opblock-section-header" },
                    x().createElement(
                      "h4",
                      {
                        className: `opblock-title parameter__name ${b.get("required") && "required"}`,
                      },
                      "Request body",
                    ),
                    x().createElement(
                      "label",
                      { id: w },
                      x().createElement(f, {
                        value: d.requestContentType(...m),
                        contentTypes: b.get("content", (0, N.List)()).keySeq(),
                        onChange: (e) => {
                          this.onChangeMediaType({ value: e, pathMethod: m });
                        },
                        className: "body-param-content-type",
                        ariaLabel: "Request content type",
                        controlId: w,
                      }),
                    ),
                  ),
                  x().createElement(
                    "div",
                    { className: "opblock-description-wrapper" },
                    x().createElement(E, {
                      setRetainRequestBodyValueFlag: (e) =>
                        u.setRetainRequestBodyValueFlag({
                          value: e,
                          pathMethod: m,
                        }),
                      userHasEditedBody: d.hasUserEditedBody(...m),
                      specPath: s.slice(0, -1).push("requestBody"),
                      requestBody: b,
                      requestBodyValue: d.requestBodyValue(...m),
                      requestBodyInclusionSetting:
                        d.requestBodyInclusionSetting(...m),
                      requestBodyErrors: d.requestBodyErrors(...m),
                      isExecute: _,
                      getConfigs: c,
                      activeExamplesKey: d.activeExamplesMember(
                        ...m,
                        "requestBody",
                        "requestBody",
                      ),
                      updateActiveExamplesKey: (e) => {
                        this.props.oas3Actions.setActiveExamplesMember({
                          name: e,
                          pathMethod: this.props.pathMethod,
                          contextType: "requestBody",
                          contextName: "requestBody",
                        });
                      },
                      onChange: (e, t) => {
                        if (t) {
                          const r = d.requestBodyValue(...m),
                            a = N.Map.isMap(r) ? r : (0, N.Map)();
                          return u.setRequestBodyValue({
                            pathMethod: m,
                            value: a.setIn(t, e),
                          });
                        }
                        u.setRequestBodyValue({ value: e, pathMethod: m });
                      },
                      onChangeIncludeEmpty: (e, t) => {
                        u.setRequestBodyInclusion({
                          pathMethod: m,
                          value: t,
                          name: e,
                        });
                      },
                      contentType: d.requestContentType(...m),
                    }),
                  ),
                ),
            );
          }
        }
        const parameter_extension = ({ xKey: e, xVal: t }) =>
            x().createElement(
              "div",
              { className: "parameter__extension" },
              e,
              ": ",
              String(t),
            ),
          an = { onChange: () => {}, isIncludedOptions: {} };
        class ParameterIncludeEmpty extends C.Component {
          static defaultProps = an;
          componentDidMount() {
            const { isIncludedOptions: e, onChange: t } = this.props,
              { shouldDispatchInit: r, defaultValue: a } = e;
            r && t(a);
          }
          onCheckboxChange = (e) => {
            const { onChange: t } = this.props;
            t(e.target.checked);
          };
          render() {
            let { isIncluded: e, isDisabled: t } = this.props;
            return x().createElement(
              "div",
              null,
              x().createElement(
                "label",
                {
                  htmlFor: "include_empty_value",
                  className: ut()("parameter__empty_value_toggle", {
                    disabled: t,
                  }),
                },
                x().createElement("input", {
                  id: "include_empty_value",
                  type: "checkbox",
                  disabled: t,
                  checked: !t && e,
                  onChange: this.onCheckboxChange,
                }),
                "Send empty value",
              ),
            );
          }
        }
        class ParameterRow extends C.Component {
          constructor(e, t) {
            super(e, t), this.setDefaultValue();
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t,
              { specSelectors: r, pathMethod: a, rawParam: n } = e,
              s = r.isOAS3(),
              o = r.parameterWithMetaByIdentity(a, n) || new N.Map();
            if (((o = o.isEmpty() ? n : o), s)) {
              let { schema: e } = getParameterSchema(o, { isOAS3: s });
              t = e ? e.get("enum") : void 0;
            } else t = o ? o.get("enum") : void 0;
            let l,
              c = o ? o.get("value") : void 0;
            void 0 !== c
              ? (l = c)
              : n.get("required") && t && t.size && (l = t.first()),
              void 0 !== l &&
                l !== c &&
                this.onChangeWrapper(
                  (function numberToString(e) {
                    return "number" == typeof e ? e.toString() : e;
                  })(l),
                ),
              this.setDefaultValue();
          }
          onChangeWrapper = (e, t = !1) => {
            let r,
              { onChange: a, rawParam: n } = this.props;
            return (r = "" === e || (e && 0 === e.size) ? null : e), a(n, r, t);
          };
          _onExampleSelect = (e) => {
            this.props.oas3Actions.setActiveExamplesMember({
              name: e,
              pathMethod: this.props.pathMethod,
              contextType: "parameters",
              contextName: this.getParamKey(),
            });
          };
          onChangeIncludeEmpty = (e) => {
            let { specActions: t, param: r, pathMethod: a } = this.props;
            const n = r.get("name"),
              s = r.get("in");
            return t.updateEmptyParamInclusion(a, n, s, e);
          };
          setDefaultValue = () => {
            let {
              specSelectors: e,
              pathMethod: t,
              rawParam: r,
              oas3Selectors: a,
              fn: n,
            } = this.props;
            const s = e.parameterWithMetaByIdentity(t, r) || (0, N.Map)();
            let { schema: o } = getParameterSchema(s, { isOAS3: e.isOAS3() });
            const l = s
                .get("content", (0, N.Map)())
                .keySeq()
                .first(),
              c = o
                ? n.getSampleSchema(o.toJS(), l, { includeWriteOnly: !0 })
                : null;
            if (s && void 0 === s.get("value") && "body" !== s.get("in")) {
              let r;
              if (e.isSwagger2())
                r =
                  void 0 !== s.get("x-example")
                    ? s.get("x-example")
                    : void 0 !== s.getIn(["schema", "example"])
                      ? s.getIn(["schema", "example"])
                      : o && o.getIn(["default"]);
              else if (e.isOAS3()) {
                o = this.composeJsonSchema(o);
                const e = a.activeExamplesMember(
                  ...t,
                  "parameters",
                  this.getParamKey(),
                );
                r =
                  void 0 !== s.getIn(["examples", e, "value"])
                    ? s.getIn(["examples", e, "value"])
                    : void 0 !== s.getIn(["content", l, "example"])
                      ? s.getIn(["content", l, "example"])
                      : void 0 !== s.get("example")
                        ? s.get("example")
                        : void 0 !== (o && o.get("example"))
                          ? o && o.get("example")
                          : void 0 !== (o && o.get("default"))
                            ? o && o.get("default")
                            : s.get("default");
              }
              void 0 === r || N.List.isList(r) || (r = stringify(r)),
                void 0 !== r
                  ? this.onChangeWrapper(r)
                  : o &&
                    "object" === o.get("type") &&
                    c &&
                    !s.get("examples") &&
                    this.onChangeWrapper(N.List.isList(c) ? c : stringify(c));
            }
          };
          getParamKey() {
            const { param: e } = this.props;
            return e ? `${e.get("name")}-${e.get("in")}` : null;
          }
          composeJsonSchema(e) {
            const { fn: t } = this.props,
              r = e.get("oneOf")?.get(0)?.toJS(),
              a = e.get("anyOf")?.get(0)?.toJS();
            return (0, N.fromJS)(t.mergeJsonSchema(e.toJS(), r ?? a ?? {}));
          }
          render() {
            let {
                param: e,
                rawParam: t,
                getComponent: r,
                getConfigs: a,
                isExecute: n,
                fn: s,
                onChangeConsumes: o,
                specSelectors: l,
                pathMethod: c,
                specPath: i,
                oas3Selectors: p,
              } = this.props,
              m = l.isOAS3();
            const { showExtensions: u, showCommonExtensions: d } = a();
            if ((e || (e = t), !t)) return null;
            const h = r("JsonSchemaForm"),
              g = r("ParamBody");
            let y = e.get("in"),
              f =
                "body" !== y
                  ? null
                  : x().createElement(g, {
                      getComponent: r,
                      getConfigs: a,
                      fn: s,
                      param: e,
                      consumes: l.consumesOptionsFor(c),
                      consumesValue: l
                        .contentTypeValues(c)
                        .get("requestContentType"),
                      onChange: this.onChangeWrapper,
                      onChangeConsumes: o,
                      isExecute: n,
                      specSelectors: l,
                      pathMethod: c,
                    });
            const S = r("modelExample"),
              E = r("Markdown", !0),
              _ = r("ParameterExt"),
              v = r("ParameterIncludeEmpty"),
              w = r("ExamplesSelectValueRetainer"),
              b = r("Example");
            let { schema: C } = getParameterSchema(e, { isOAS3: m }),
              O = l.parameterWithMetaByIdentity(c, t) || (0, N.Map)();
            m && (C = this.composeJsonSchema(C));
            let k,
              A,
              I,
              q,
              j = C ? C.get("format") : null,
              P = C ? C.get("type") : null,
              M = C ? C.getIn(["items", "type"]) : null,
              R = "formData" === y,
              T = "FormData" in L,
              J = e.get("required"),
              $ = O ? O.get("value") : "",
              V = d ? getCommonExtensions(C) : null,
              D = u ? getExtensions(e) : null,
              K = !1;
            return (
              void 0 !== e && C && (k = C.get("items")),
              void 0 !== k
                ? ((A = k.get("enum")), (I = k.get("default")))
                : C && (A = C.get("enum")),
              A && A.size && A.size > 0 && (K = !0),
              void 0 !== e &&
                (C && (I = C.get("default")),
                void 0 === I && (I = e.get("default")),
                (q = e.get("example")),
                void 0 === q && (q = e.get("x-example"))),
              x().createElement(
                "tr",
                {
                  "data-param-name": e.get("name"),
                  "data-param-in": e.get("in"),
                },
                x().createElement(
                  "td",
                  { className: "parameters-col_name" },
                  x().createElement(
                    "div",
                    {
                      className: J
                        ? "parameter__name required"
                        : "parameter__name",
                    },
                    e.get("name"),
                    J ? x().createElement("span", null, " *") : null,
                  ),
                  x().createElement(
                    "div",
                    { className: "parameter__type" },
                    P,
                    M && `[${M}]`,
                    j &&
                      x().createElement(
                        "span",
                        { className: "prop-format" },
                        "($",
                        j,
                        ")",
                      ),
                  ),
                  x().createElement(
                    "div",
                    { className: "parameter__deprecated" },
                    m && e.get("deprecated") ? "deprecated" : null,
                  ),
                  x().createElement(
                    "div",
                    { className: "parameter__in" },
                    "(",
                    e.get("in"),
                    ")",
                  ),
                ),
                x().createElement(
                  "td",
                  { className: "parameters-col_description" },
                  e.get("description")
                    ? x().createElement(E, { source: e.get("description") })
                    : null,
                  (!f && n) || !K
                    ? null
                    : x().createElement(E, {
                        className: "parameter__enum",
                        source:
                          "<i>Available values</i> : " +
                          A.map(function (e) {
                            return e;
                          })
                            .toArray()
                            .map(String)
                            .join(", "),
                      }),
                  (!f && n) || void 0 === I
                    ? null
                    : x().createElement(E, {
                        className: "parameter__default",
                        source: "<i>Default value</i> : " + I,
                      }),
                  (!f && n) || void 0 === q
                    ? null
                    : x().createElement(E, { source: "<i>Example</i> : " + q }),
                  R &&
                    !T &&
                    x().createElement(
                      "div",
                      null,
                      "Error: your browser does not support FormData",
                    ),
                  m && e.get("examples")
                    ? x().createElement(
                        "section",
                        { className: "parameter-controls" },
                        x().createElement(w, {
                          examples: e.get("examples"),
                          onSelect: this._onExampleSelect,
                          updateValue: this.onChangeWrapper,
                          getComponent: r,
                          defaultToFirstExample: !0,
                          currentKey: p.activeExamplesMember(
                            ...c,
                            "parameters",
                            this.getParamKey(),
                          ),
                          currentUserInputValue: $,
                        }),
                      )
                    : null,
                  f
                    ? null
                    : x().createElement(h, {
                        fn: s,
                        getComponent: r,
                        value: $,
                        required: J,
                        disabled: !n,
                        description: e.get("name"),
                        onChange: this.onChangeWrapper,
                        errors: O.get("errors"),
                        schema: C,
                      }),
                  f && C
                    ? x().createElement(S, {
                        getComponent: r,
                        specPath: i.push("schema"),
                        getConfigs: a,
                        isExecute: n,
                        specSelectors: l,
                        schema: C,
                        example: f,
                        includeWriteOnly: !0,
                      })
                    : null,
                  !f && n && e.get("allowEmptyValue")
                    ? x().createElement(v, {
                        onChange: this.onChangeIncludeEmpty,
                        isIncluded: l.parameterInclusionSettingFor(
                          c,
                          e.get("name"),
                          e.get("in"),
                        ),
                        isDisabled: !isEmptyValue($),
                      })
                    : null,
                  m && e.get("examples")
                    ? x().createElement(b, {
                        example: e.getIn([
                          "examples",
                          p.activeExamplesMember(
                            ...c,
                            "parameters",
                            this.getParamKey(),
                          ),
                        ]),
                        getComponent: r,
                        getConfigs: a,
                      })
                    : null,
                  d && V.size
                    ? V.entrySeq().map(([e, t]) =>
                        x().createElement(_, {
                          key: `${e}-${t}`,
                          xKey: e,
                          xVal: t,
                        }),
                      )
                    : null,
                  u && D.size
                    ? D.entrySeq().map(([e, t]) =>
                        x().createElement(_, {
                          key: `${e}-${t}`,
                          xKey: e,
                          xVal: t,
                        }),
                      )
                    : null,
                ),
              )
            );
          }
        }
        class Execute extends C.Component {
          handleValidateParameters = () => {
            let {
              specSelectors: e,
              specActions: t,
              path: r,
              method: a,
            } = this.props;
            return t.validateParams([r, a]), e.validateBeforeExecute([r, a]);
          };
          handleValidateRequestBody = () => {
            let {
                path: e,
                method: t,
                specSelectors: r,
                oas3Selectors: a,
                oas3Actions: n,
              } = this.props,
              s = { missingBodyValue: !1, missingRequiredKeys: [] };
            n.clearRequestBodyValidateError({ path: e, method: t });
            let o = r.getOAS3RequiredRequestBodyContentType([e, t]),
              l = a.requestBodyValue(e, t),
              c = a.validateBeforeExecute([e, t]),
              i = a.requestContentType(e, t);
            if (!c)
              return (
                (s.missingBodyValue = !0),
                n.setRequestBodyValidateError({
                  path: e,
                  method: t,
                  validationErrors: s,
                }),
                !1
              );
            if (!o) return !0;
            let p = a.validateShallowRequired({
              oas3RequiredRequestBodyContentType: o,
              oas3RequestContentType: i,
              oas3RequestBodyValue: l,
            });
            return (
              !p ||
              p.length < 1 ||
              (p.forEach((e) => {
                s.missingRequiredKeys.push(e);
              }),
              n.setRequestBodyValidateError({
                path: e,
                method: t,
                validationErrors: s,
              }),
              !1)
            );
          };
          handleValidationResultPass = () => {
            let {
              specActions: e,
              operation: t,
              path: r,
              method: a,
            } = this.props;
            this.props.onExecute && this.props.onExecute(),
              e.execute({ operation: t, path: r, method: a });
          };
          handleValidationResultFail = () => {
            let { specActions: e, path: t, method: r } = this.props;
            e.clearValidateParams([t, r]),
              setTimeout(() => {
                e.validateParams([t, r]);
              }, 40);
          };
          handleValidationResult = (e) => {
            e
              ? this.handleValidationResultPass()
              : this.handleValidationResultFail();
          };
          onClick = () => {
            let e = this.handleValidateParameters(),
              t = this.handleValidateRequestBody(),
              r = e && t;
            this.handleValidationResult(r);
          };
          onChangeProducesWrapper = (e) =>
            this.props.specActions.changeProducesValue(
              [this.props.path, this.props.method],
              e,
            );
          render() {
            const { disabled: e } = this.props;
            return x().createElement(
              "button",
              {
                className: "btn execute opblock-control__btn",
                onClick: this.onClick,
                disabled: e,
              },
              "Execute",
            );
          }
        }
        class headers_Headers extends x().Component {
          render() {
            let { headers: e, getComponent: t } = this.props;
            const r = t("Property"),
              a = t("Markdown", !0);
            return e && e.size
              ? x().createElement(
                  "div",
                  { className: "headers-wrapper" },
                  x().createElement(
                    "h4",
                    { className: "headers__title" },
                    "Headers:",
                  ),
                  x().createElement(
                    "table",
                    { className: "headers" },
                    x().createElement(
                      "thead",
                      null,
                      x().createElement(
                        "tr",
                        { className: "header-row" },
                        x().createElement(
                          "th",
                          { className: "header-col" },
                          "Name",
                        ),
                        x().createElement(
                          "th",
                          { className: "header-col" },
                          "Description",
                        ),
                        x().createElement(
                          "th",
                          { className: "header-col" },
                          "Type",
                        ),
                      ),
                    ),
                    x().createElement(
                      "tbody",
                      null,
                      e
                        .entrySeq()
                        .map(([e, t]) => {
                          if (!k().Map.isMap(t)) return null;
                          const n = t.get("description"),
                            s = t.getIn(["schema"])
                              ? t.getIn(["schema", "type"])
                              : t.getIn(["type"]),
                            o = t.getIn(["schema", "example"]);
                          return x().createElement(
                            "tr",
                            { key: e },
                            x().createElement(
                              "td",
                              { className: "header-col" },
                              e,
                            ),
                            x().createElement(
                              "td",
                              { className: "header-col" },
                              n ? x().createElement(a, { source: n }) : null,
                            ),
                            x().createElement(
                              "td",
                              { className: "header-col" },
                              s,
                              " ",
                              o
                                ? x().createElement(r, {
                                    propKey: "Example",
                                    propVal: o,
                                    propClass: "header-example",
                                  })
                                : null,
                            ),
                          );
                        })
                        .toArray(),
                    ),
                  ),
                )
              : null;
          }
        }
        class Errors extends x().Component {
          render() {
            let {
              editorActions: e,
              errSelectors: t,
              layoutSelectors: r,
              layoutActions: a,
              getComponent: n,
            } = this.props;
            const s = n("Collapse");
            if (e && e.jumpToLine) var o = e.jumpToLine;
            let l = t
              .allErrors()
              .filter(
                (e) => "thrown" === e.get("type") || "error" === e.get("level"),
              );
            if (!l || l.count() < 1) return null;
            let c = r.isShown(["errorPane"], !0),
              i = l.sortBy((e) => e.get("line"));
            return x().createElement(
              "pre",
              { className: "errors-wrapper" },
              x().createElement(
                "hgroup",
                { className: "error" },
                x().createElement(
                  "h4",
                  { className: "errors__title" },
                  "Errors",
                ),
                x().createElement(
                  "button",
                  {
                    className: "btn errors__clear-btn",
                    onClick: () => a.show(["errorPane"], !c),
                  },
                  c ? "Hide" : "Show",
                ),
              ),
              x().createElement(
                s,
                { isOpened: c, animated: !0 },
                x().createElement(
                  "div",
                  { className: "errors" },
                  i.map((e, t) => {
                    let r = e.get("type");
                    return "thrown" === r || "auth" === r
                      ? x().createElement(ThrownErrorItem, {
                          key: t,
                          error: e.get("error") || e,
                          jumpToLine: o,
                        })
                      : "spec" === r
                        ? x().createElement(SpecErrorItem, {
                            key: t,
                            error: e,
                            jumpToLine: o,
                          })
                        : void 0;
                  }),
                ),
              ),
            );
          }
        }
        const ThrownErrorItem = ({ error: e, jumpToLine: t }) => {
            if (!e) return null;
            let r = e.get("line");
            return x().createElement(
              "div",
              { className: "error-wrapper" },
              e
                ? x().createElement(
                    "div",
                    null,
                    x().createElement(
                      "h4",
                      null,
                      e.get("source") && e.get("level")
                        ? toTitleCase(e.get("source")) + " " + e.get("level")
                        : "",
                      e.get("path")
                        ? x().createElement(
                            "small",
                            null,
                            " at ",
                            e.get("path"),
                          )
                        : null,
                    ),
                    x().createElement(
                      "span",
                      { className: "message thrown" },
                      e.get("message"),
                    ),
                    x().createElement(
                      "div",
                      { className: "error-line" },
                      r && t
                        ? x().createElement(
                            "a",
                            { onClick: t.bind(null, r) },
                            "Jump to line ",
                            r,
                          )
                        : null,
                    ),
                  )
                : null,
            );
          },
          SpecErrorItem = ({ error: e, jumpToLine: t = null }) => {
            let r = null;
            return (
              e.get("path")
                ? (r = N.List.isList(e.get("path"))
                    ? x().createElement(
                        "small",
                        null,
                        "at ",
                        e.get("path").join("."),
                      )
                    : x().createElement("small", null, "at ", e.get("path")))
                : e.get("line") &&
                  !t &&
                  (r = x().createElement(
                    "small",
                    null,
                    "on line ",
                    e.get("line"),
                  )),
              x().createElement(
                "div",
                { className: "error-wrapper" },
                e
                  ? x().createElement(
                      "div",
                      null,
                      x().createElement(
                        "h4",
                        null,
                        toTitleCase(e.get("source")) + " " + e.get("level"),
                        " ",
                        r,
                      ),
                      x().createElement(
                        "span",
                        { className: "message" },
                        e.get("message"),
                      ),
                      x().createElement(
                        "div",
                        { className: "error-line" },
                        t
                          ? x().createElement(
                              "a",
                              { onClick: t.bind(null, e.get("line")) },
                              "Jump to line ",
                              e.get("line"),
                            )
                          : null,
                      ),
                    )
                  : null,
              )
            );
          };
        function toTitleCase(e) {
          return (e || "")
            .split(" ")
            .map((e) => e[0].toUpperCase() + e.slice(1))
            .join(" ");
        }
        const content_type_noop = () => {};
        class ContentType extends x().Component {
          static defaultProps = {
            onChange: content_type_noop,
            value: null,
            contentTypes: (0, N.fromJS)(["application/json"]),
          };
          componentDidMount() {
            this.props.contentTypes &&
              this.props.onChange(this.props.contentTypes.first());
          }
          UNSAFE_componentWillReceiveProps(e) {
            e.contentTypes &&
              e.contentTypes.size &&
              (e.contentTypes.includes(e.value) ||
                e.onChange(e.contentTypes.first()));
          }
          onChangeWrapper = (e) => this.props.onChange(e.target.value);
          render() {
            let {
              ariaControls: e,
              ariaLabel: t,
              className: r,
              contentTypes: a,
              controlId: n,
              value: s,
            } = this.props;
            return a && a.size
              ? x().createElement(
                  "div",
                  { className: "content-type-wrapper " + (r || "") },
                  x().createElement(
                    "select",
                    {
                      "aria-controls": e,
                      "aria-label": t,
                      className: "content-type",
                      id: n,
                      onChange: this.onChangeWrapper,
                      value: s || "",
                    },
                    a
                      .map((e) =>
                        x().createElement("option", { key: e, value: e }, e),
                      )
                      .toArray(),
                  ),
                )
              : null;
          }
        }
        function xclass(...e) {
          return e
            .filter((e) => !!e)
            .join(" ")
            .trim();
        }
        class Container extends x().Component {
          render() {
            let { fullscreen: e, full: t, ...r } = this.props;
            if (e) return x().createElement("section", r);
            let a = "swagger-container" + (t ? "-full" : "");
            return x().createElement(
              "section",
              et()({}, r, { className: xclass(r.className, a) }),
            );
          }
        }
        const nn = {
          mobile: "",
          tablet: "-tablet",
          desktop: "-desktop",
          large: "-hd",
        };
        class Col extends x().Component {
          render() {
            const {
              hide: e,
              keepContents: t,
              mobile: r,
              tablet: a,
              desktop: n,
              large: s,
              ...o
            } = this.props;
            if (e && !t) return x().createElement("span", null);
            let l = [];
            for (let e in nn) {
              if (!Object.prototype.hasOwnProperty.call(nn, e)) continue;
              let t = nn[e];
              if (e in this.props) {
                let r = this.props[e];
                if (r < 1) {
                  l.push("none" + t);
                  continue;
                }
                l.push("block" + t), l.push("col-" + r + t);
              }
            }
            e && l.push("hidden");
            let c = xclass(o.className, ...l);
            return x().createElement("section", et()({}, o, { className: c }));
          }
        }
        class Row extends x().Component {
          render() {
            return x().createElement(
              "div",
              et()({}, this.props, {
                className: xclass(this.props.className, "wrapper"),
              }),
            );
          }
        }
        class Button extends x().Component {
          static defaultProps = { className: "" };
          render() {
            return x().createElement(
              "button",
              et()({}, this.props, {
                className: xclass(this.props.className, "button"),
              }),
            );
          }
        }
        const TextArea = (e) => x().createElement("textarea", e),
          Input = (e) => x().createElement("input", e);
        class Select extends x().Component {
          static defaultProps = { multiple: !1, allowEmptyValue: !0 };
          constructor(e, t) {
            let r;
            super(e, t),
              (r = e.value ? e.value : e.multiple ? [""] : ""),
              (this.state = { value: r });
          }
          onChange = (e) => {
            let t,
              { onChange: r, multiple: a } = this.props,
              n = [].slice.call(e.target.options);
            (t = a
              ? n
                  .filter(function (e) {
                    return e.selected;
                  })
                  .map(function (e) {
                    return e.value;
                  })
              : e.target.value),
              this.setState({ value: t }),
              r && r(t);
          };
          UNSAFE_componentWillReceiveProps(e) {
            e.value !== this.props.value && this.setState({ value: e.value });
          }
          render() {
            let {
                allowedValues: e,
                multiple: t,
                allowEmptyValue: r,
                disabled: a,
              } = this.props,
              n = this.state.value?.toJS?.() || this.state.value;
            return x().createElement(
              "select",
              {
                className: this.props.className,
                multiple: t,
                value: n,
                onChange: this.onChange,
                disabled: a,
              },
              r ? x().createElement("option", { value: "" }, "--") : null,
              e.map(function (e, t) {
                return x().createElement(
                  "option",
                  { key: t, value: String(e) },
                  String(e),
                );
              }),
            );
          }
        }
        class Link extends x().Component {
          render() {
            return x().createElement(
              "a",
              et()({}, this.props, {
                rel: "noopener noreferrer",
                className: xclass(this.props.className, "link"),
              }),
            );
          }
        }
        const NoMargin = ({ children: e }) =>
          x().createElement("div", { className: "no-margin" }, " ", e, " ");
        class Collapse extends x().Component {
          static defaultProps = { isOpened: !1, animated: !1 };
          renderNotAnimated() {
            return this.props.isOpened
              ? x().createElement(NoMargin, null, this.props.children)
              : x().createElement("noscript", null);
          }
          render() {
            let { animated: e, isOpened: t, children: r } = this.props;
            return e
              ? ((r = t ? r : null), x().createElement(NoMargin, null, r))
              : this.renderNotAnimated();
          }
        }
        class Overview extends x().Component {
          constructor(...e) {
            super(...e), (this.setTagShown = this._setTagShown.bind(this));
          }
          _setTagShown(e, t) {
            this.props.layoutActions.show(e, t);
          }
          showOp(e, t) {
            let { layoutActions: r } = this.props;
            r.show(e, t);
          }
          render() {
            let {
                specSelectors: e,
                layoutSelectors: t,
                layoutActions: r,
                getComponent: a,
              } = this.props,
              n = e.taggedOperations();
            const s = a("Collapse");
            return x().createElement(
              "div",
              null,
              x().createElement(
                "h4",
                { className: "overview-title" },
                "Overview",
              ),
              n
                .map((e, a) => {
                  let n = e.get("operations"),
                    o = ["overview-tags", a],
                    l = t.isShown(o, !0);
                  return x().createElement(
                    "div",
                    { key: "overview-" + a },
                    x().createElement(
                      "h4",
                      {
                        onClick: () => r.show(o, !l),
                        className: "link overview-tag",
                      },
                      " ",
                      l ? "-" : "+",
                      a,
                    ),
                    x().createElement(
                      s,
                      { isOpened: l, animated: !0 },
                      n
                        .map((e) => {
                          let { path: a, method: n, id: s } = e.toObject(),
                            o = "operations",
                            l = s,
                            c = t.isShown([o, l]);
                          return x().createElement(OperationLink, {
                            key: s,
                            path: a,
                            method: n,
                            id: a + "-" + n,
                            shown: c,
                            showOpId: l,
                            showOpIdPrefix: o,
                            href: `#operation-${l}`,
                            onClick: r.show,
                          });
                        })
                        .toArray(),
                    ),
                  );
                })
                .toArray(),
              n.size < 1 &&
                x().createElement(
                  "h3",
                  null,
                  " No operations defined in spec! ",
                ),
            );
          }
        }
        class OperationLink extends x().Component {
          constructor(e) {
            super(e), (this.onClick = this._onClick.bind(this));
          }
          _onClick() {
            let {
              showOpId: e,
              showOpIdPrefix: t,
              onClick: r,
              shown: a,
            } = this.props;
            r([t, e], !a);
          }
          render() {
            let { id: e, method: t, shown: r, href: a } = this.props;
            return x().createElement(
              Link,
              {
                href: a,
                onClick: this.onClick,
                className: "block opblock-link " + (r ? "shown" : ""),
              },
              x().createElement(
                "div",
                null,
                x().createElement(
                  "small",
                  { className: `bold-label-${t}` },
                  t.toUpperCase(),
                ),
                x().createElement("span", { className: "bold-label" }, e),
              ),
            );
          }
        }
        class InitializedInput extends x().Component {
          componentDidMount() {
            this.props.initialValue &&
              (this.inputRef.value = this.props.initialValue);
          }
          render() {
            const {
              value: e,
              defaultValue: t,
              initialValue: r,
              ...a
            } = this.props;
            return x().createElement(
              "input",
              et()({}, a, { ref: (e) => (this.inputRef = e) }),
            );
          }
        }
        class InfoBasePath extends x().Component {
          render() {
            const { host: e, basePath: t } = this.props;
            return x().createElement(
              "pre",
              { className: "base-url" },
              "[ Base URL: ",
              e,
              t,
              " ]",
            );
          }
        }
        class InfoUrl extends x().PureComponent {
          render() {
            const { url: e, getComponent: t } = this.props,
              r = t("Link");
            return x().createElement(
              r,
              { target: "_blank", href: sanitizeUrl(e) },
              x().createElement("span", { className: "url" }, " ", e),
            );
          }
        }
        class Info extends x().Component {
          render() {
            const {
                info: e,
                url: t,
                host: r,
                basePath: a,
                getComponent: n,
                externalDocs: s,
                selectedServer: o,
                url: l,
              } = this.props,
              c = e.get("version"),
              i = e.get("description"),
              p = e.get("title"),
              m = safeBuildUrl(e.get("termsOfService"), l, {
                selectedServer: o,
              }),
              u = e.get("contact"),
              d = e.get("license"),
              h = safeBuildUrl(s && s.get("url"), l, { selectedServer: o }),
              g = s && s.get("description"),
              y = n("Markdown", !0),
              f = n("Link"),
              S = n("VersionStamp"),
              E = n("OpenAPIVersion"),
              _ = n("InfoUrl"),
              v = n("InfoBasePath"),
              w = n("License"),
              b = n("Contact");
            return x().createElement(
              "div",
              { className: "info" },
              x().createElement(
                "hgroup",
                { className: "main" },
                x().createElement(
                  "h2",
                  { className: "title" },
                  p,
                  x().createElement(
                    "span",
                    null,
                    c && x().createElement(S, { version: c }),
                    x().createElement(E, { oasVersion: "2.0" }),
                  ),
                ),
                r || a ? x().createElement(v, { host: r, basePath: a }) : null,
                t && x().createElement(_, { getComponent: n, url: t }),
              ),
              x().createElement(
                "div",
                { className: "description" },
                x().createElement(y, { source: i }),
              ),
              m &&
                x().createElement(
                  "div",
                  { className: "info__tos" },
                  x().createElement(
                    f,
                    { target: "_blank", href: sanitizeUrl(m) },
                    "Terms of service",
                  ),
                ),
              u?.size > 0 &&
                x().createElement(b, {
                  getComponent: n,
                  data: u,
                  selectedServer: o,
                  url: t,
                }),
              d?.size > 0 &&
                x().createElement(w, {
                  getComponent: n,
                  license: d,
                  selectedServer: o,
                  url: t,
                }),
              h
                ? x().createElement(
                    f,
                    {
                      className: "info__extdocs",
                      target: "_blank",
                      href: sanitizeUrl(h),
                    },
                    g || h,
                  )
                : null,
            );
          }
        }
        const sn = Info;
        class InfoContainer extends x().Component {
          render() {
            const {
                specSelectors: e,
                getComponent: t,
                oas3Selectors: r,
              } = this.props,
              a = e.info(),
              n = e.url(),
              s = e.basePath(),
              o = e.host(),
              l = e.externalDocs(),
              c = r.selectedServer(),
              i = t("info");
            return x().createElement(
              "div",
              null,
              a && a.count()
                ? x().createElement(i, {
                    info: a,
                    url: n,
                    host: o,
                    basePath: s,
                    externalDocs: l,
                    getComponent: t,
                    selectedServer: c,
                  })
                : null,
            );
          }
        }
        class Contact extends x().Component {
          render() {
            const {
                data: e,
                getComponent: t,
                selectedServer: r,
                url: a,
              } = this.props,
              n = e.get("name", "the developer"),
              s = safeBuildUrl(e.get("url"), a, { selectedServer: r }),
              o = e.get("email"),
              l = t("Link");
            return x().createElement(
              "div",
              { className: "info__contact" },
              s &&
                x().createElement(
                  "div",
                  null,
                  x().createElement(
                    l,
                    { href: sanitizeUrl(s), target: "_blank" },
                    n,
                    " - Website",
                  ),
                ),
              o &&
                x().createElement(
                  l,
                  { href: sanitizeUrl(`mailto:${o}`) },
                  s ? `Send email to ${n}` : `Contact ${n}`,
                ),
            );
          }
        }
        const on = Contact;
        class License extends x().Component {
          render() {
            const {
                license: e,
                getComponent: t,
                selectedServer: r,
                url: a,
              } = this.props,
              n = e.get("name", "License"),
              s = safeBuildUrl(e.get("url"), a, { selectedServer: r }),
              o = t("Link");
            return x().createElement(
              "div",
              { className: "info__license" },
              s
                ? x().createElement(
                    "div",
                    { className: "info__license__url" },
                    x().createElement(
                      o,
                      { target: "_blank", href: sanitizeUrl(s) },
                      n,
                    ),
                  )
                : x().createElement("span", null, n),
            );
          }
        }
        const ln = License;
        class JumpToPath extends x().Component {
          render() {
            return null;
          }
        }
        class CopyToClipboardBtn extends x().Component {
          render() {
            let { getComponent: e } = this.props;
            const t = e("CopyIcon");
            return x().createElement(
              "div",
              {
                className: "view-line-link copy-to-clipboard",
                title: "Copy to clipboard",
              },
              x().createElement(
                dt.CopyToClipboard,
                { text: this.props.textToCopy },
                x().createElement(t, null),
              ),
            );
          }
        }
        class Footer extends x().Component {
          render() {
            return x().createElement("div", { className: "footer" });
          }
        }
        class FilterContainer extends x().Component {
          onFilterChange = (e) => {
            const {
              target: { value: t },
            } = e;
            this.props.layoutActions.updateFilter(t);
          };
          render() {
            const {
                specSelectors: e,
                layoutSelectors: t,
                getComponent: r,
              } = this.props,
              a = r("Col"),
              n = "loading" === e.loadingStatus(),
              s = "failed" === e.loadingStatus(),
              o = t.currentFilter(),
              l = ["operation-filter-input"];
            return (
              s && l.push("failed"),
              n && l.push("loading"),
              x().createElement(
                "div",
                null,
                !1 === o
                  ? null
                  : x().createElement(
                      "div",
                      { className: "filter-container" },
                      x().createElement(
                        a,
                        { className: "filter wrapper", mobile: 12 },
                        x().createElement("input", {
                          className: l.join(" "),
                          placeholder: "Filter by tag",
                          type: "text",
                          onChange: this.onFilterChange,
                          value: "string" == typeof o ? o : "",
                          disabled: n,
                        }),
                      ),
                    ),
              )
            );
          }
        }
        const cn = Function.prototype;
        class ParamBody extends C.PureComponent {
          static defaultProp = {
            consumes: (0, N.fromJS)(["application/json"]),
            param: (0, N.fromJS)({}),
            onChange: cn,
            onChangeConsumes: cn,
          };
          constructor(e, t) {
            super(e, t), (this.state = { isEditBox: !1, value: "" });
          }
          componentDidMount() {
            this.updateValues.call(this, this.props);
          }
          UNSAFE_componentWillReceiveProps(e) {
            this.updateValues.call(this, e);
          }
          updateValues = (e) => {
            let { param: t, isExecute: r, consumesValue: a = "" } = e,
              n = /xml/i.test(a),
              s = /json/i.test(a),
              o = n ? t.get("value_xml") : t.get("value");
            if (void 0 !== o) {
              let e = !o && s ? "{}" : o;
              this.setState({ value: e }),
                this.onChange(e, { isXml: n, isEditBox: r });
            } else
              n
                ? this.onChange(this.sample("xml"), { isXml: n, isEditBox: r })
                : this.onChange(this.sample(), { isEditBox: r });
          };
          sample = (e) => {
            let { param: t, fn: r } = this.props,
              a = r.inferSchema(t.toJS());
            return r.getSampleSchema(a, e, { includeWriteOnly: !0 });
          };
          onChange = (e, { isEditBox: t, isXml: r }) => {
            this.setState({ value: e, isEditBox: t }), this._onChange(e, r);
          };
          _onChange = (e, t) => {
            (this.props.onChange || cn)(e, t);
          };
          handleOnChange = (e) => {
            const { consumesValue: t } = this.props,
              r = /xml/i.test(t),
              a = e.target.value;
            this.onChange(a, { isXml: r, isEditBox: this.state.isEditBox });
          };
          toggleIsEditBox = () =>
            this.setState((e) => ({ isEditBox: !e.isEditBox }));
          render() {
            let {
              onChangeConsumes: e,
              param: t,
              isExecute: r,
              specSelectors: a,
              pathMethod: n,
              getComponent: s,
            } = this.props;
            const o = s("Button"),
              l = s("TextArea"),
              c = s("HighlightCode", !0),
              i = s("contentType");
            let p = (a ? a.parameterWithMetaByIdentity(n, t) : t).get(
                "errors",
                (0, N.List)(),
              ),
              m = a.contentTypeValues(n).get("requestContentType"),
              u =
                this.props.consumes && this.props.consumes.size
                  ? this.props.consumes
                  : ParamBody.defaultProp.consumes,
              { value: d, isEditBox: h } = this.state,
              g = null;
            getKnownSyntaxHighlighterLanguage(d) && (g = "json");
            const y = `${createHtmlReadyId(`${n[1]}${n[0]}_parameters`)}_select`;
            return x().createElement(
              "div",
              {
                className: "body-param",
                "data-param-name": t.get("name"),
                "data-param-in": t.get("in"),
              },
              h && r
                ? x().createElement(l, {
                    className:
                      "body-param__text" + (p.count() ? " invalid" : ""),
                    value: d,
                    onChange: this.handleOnChange,
                  })
                : d &&
                    x().createElement(
                      c,
                      { className: "body-param__example", language: g },
                      d,
                    ),
              x().createElement(
                "div",
                { className: "body-param-options" },
                r
                  ? x().createElement(
                      "div",
                      { className: "body-param-edit" },
                      x().createElement(
                        o,
                        {
                          className: h
                            ? "btn cancel body-param__example-edit"
                            : "btn edit body-param__example-edit",
                          onClick: this.toggleIsEditBox,
                        },
                        h ? "Cancel" : "Edit",
                      ),
                    )
                  : null,
                x().createElement(
                  "label",
                  { htmlFor: y },
                  x().createElement("span", null, "Parameter content type"),
                  x().createElement(i, {
                    value: m,
                    contentTypes: u,
                    onChange: e,
                    className: "body-param-content-type",
                    ariaLabel: "Parameter content type",
                    controlId: y,
                  }),
                ),
              ),
            );
          }
        }
        class Curl extends x().Component {
          render() {
            const { request: e, getComponent: t } = this.props,
              r = requestSnippetGenerator_curl_bash(e),
              a = t("SyntaxHighlighter", !0);
            return x().createElement(
              "div",
              { className: "curl-command" },
              x().createElement("h4", null, "Curl"),
              x().createElement(
                "div",
                { className: "copy-to-clipboard" },
                x().createElement(
                  dt.CopyToClipboard,
                  { text: r },
                  x().createElement("button", null),
                ),
              ),
              x().createElement(
                "div",
                null,
                x().createElement(
                  a,
                  {
                    language: "bash",
                    className: "curl microlight",
                    renderPlainText: ({ children: e, PlainTextViewer: t }) =>
                      x().createElement(t, { className: "curl" }, e),
                  },
                  r,
                ),
              ),
            );
          }
        }
        const property = ({ propKey: e, propVal: t, propClass: r }) =>
          x().createElement(
            "span",
            { className: r },
            x().createElement("br", null),
            e,
            ": ",
            String(t),
          );
        class TryItOutButton extends x().Component {
          static defaultProps = {
            onTryoutClick: Function.prototype,
            onCancelClick: Function.prototype,
            onResetClick: Function.prototype,
            enabled: !1,
            hasUserEditedBody: !1,
            isOAS3: !1,
          };
          render() {
            const {
                onTryoutClick: e,
                onCancelClick: t,
                onResetClick: r,
                enabled: a,
                hasUserEditedBody: n,
                isOAS3: s,
              } = this.props,
              o = s && n;
            return x().createElement(
              "div",
              { className: o ? "try-out btn-group" : "try-out" },
              a
                ? x().createElement(
                    "button",
                    { className: "btn try-out__btn cancel", onClick: t },
                    "Cancel",
                  )
                : x().createElement(
                    "button",
                    { className: "btn try-out__btn", onClick: e },
                    "Try it out ",
                  ),
              o &&
                x().createElement(
                  "button",
                  { className: "btn try-out__btn reset", onClick: r },
                  "Reset",
                ),
            );
          }
        }
        class VersionPragmaFilter extends x().PureComponent {
          static defaultProps = { alsoShow: null, children: null, bypass: !1 };
          render() {
            const {
              bypass: e,
              isSwagger2: t,
              isOAS3: r,
              alsoShow: a,
            } = this.props;
            return e
              ? x().createElement("div", null, this.props.children)
              : t && r
                ? x().createElement(
                    "div",
                    { className: "version-pragma" },
                    a,
                    x().createElement(
                      "div",
                      {
                        className:
                          "version-pragma__message version-pragma__message--ambiguous",
                      },
                      x().createElement(
                        "div",
                        null,
                        x().createElement(
                          "h3",
                          null,
                          "Unable to render this definition",
                        ),
                        x().createElement(
                          "p",
                          null,
                          x().createElement("code", null, "swagger"),
                          " and ",
                          x().createElement("code", null, "openapi"),
                          " fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.",
                        ),
                        x().createElement(
                          "p",
                          null,
                          "Supported version fields are ",
                          x().createElement("code", null, "swagger: ", '"2.0"'),
                          " and those that match ",
                          x().createElement("code", null, "openapi: 3.0.n"),
                          " (for example, ",
                          x().createElement("code", null, "openapi: 3.0.0"),
                          ").",
                        ),
                      ),
                    ),
                  )
                : t || r
                  ? x().createElement("div", null, this.props.children)
                  : x().createElement(
                      "div",
                      { className: "version-pragma" },
                      a,
                      x().createElement(
                        "div",
                        {
                          className:
                            "version-pragma__message version-pragma__message--missing",
                        },
                        x().createElement(
                          "div",
                          null,
                          x().createElement(
                            "h3",
                            null,
                            "Unable to render this definition",
                          ),
                          x().createElement(
                            "p",
                            null,
                            "The provided definition does not specify a valid version field.",
                          ),
                          x().createElement(
                            "p",
                            null,
                            "Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ",
                            x().createElement(
                              "code",
                              null,
                              "swagger: ",
                              '"2.0"',
                            ),
                            " and those that match ",
                            x().createElement("code", null, "openapi: 3.0.n"),
                            " (for example, ",
                            x().createElement("code", null, "openapi: 3.0.0"),
                            ").",
                          ),
                        ),
                      ),
                    );
          }
        }
        const version_stamp = ({ version: e }) =>
            x().createElement(
              "small",
              null,
              x().createElement("pre", { className: "version" }, " ", e, " "),
            ),
          openapi_version = ({ oasVersion: e }) =>
            x().createElement(
              "small",
              { className: "version-stamp" },
              x().createElement("pre", { className: "version" }, "OAS ", e),
            ),
          deep_link = ({ enabled: e, path: t, text: r }) =>
            x().createElement(
              "a",
              {
                className: "nostyle",
                onClick: e ? (e) => e.preventDefault() : null,
                href: e ? `#/${t}` : null,
              },
              x().createElement("span", null, r),
            ),
          svg_assets = () =>
            x().createElement(
              "div",
              null,
              x().createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  className: "svg-assets",
                },
                x().createElement(
                  "defs",
                  null,
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "unlocked" },
                    x().createElement("path", {
                      d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "locked" },
                    x().createElement("path", {
                      d: "M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "close" },
                    x().createElement("path", {
                      d: "M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "large-arrow" },
                    x().createElement("path", {
                      d: "M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "large-arrow-down" },
                    x().createElement("path", {
                      d: "M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 20 20", id: "large-arrow-up" },
                    x().createElement("path", {
                      d: "M 17.418 14.908 C 17.69 15.176 18.127 15.176 18.397 14.908 C 18.667 14.64 18.668 14.207 18.397 13.939 L 10.489 6.109 C 10.219 5.841 9.782 5.841 9.51 6.109 L 1.602 13.939 C 1.332 14.207 1.332 14.64 1.602 14.908 C 1.873 15.176 2.311 15.176 2.581 14.908 L 10 7.767 L 17.418 14.908 Z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 24 24", id: "jump-to" },
                    x().createElement("path", {
                      d: "M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 24 24", id: "expand" },
                    x().createElement("path", {
                      d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z",
                    }),
                  ),
                  x().createElement(
                    "symbol",
                    { viewBox: "0 0 15 16", id: "copy" },
                    x().createElement(
                      "g",
                      { transform: "translate(2, -1)" },
                      x().createElement("path", {
                        fill: "#ffffff",
                        fillRule: "evenodd",
                        d: "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z",
                      }),
                    ),
                  ),
                ),
              ),
            ),
          pn = require("remarkable"),
          mn = require("remarkable/linkify"),
          un = require("dompurify");
        var dn = __webpack_require__.n(un);
        dn().addHook &&
          dn().addHook("beforeSanitizeElements", function (e) {
            return e.href && e.setAttribute("rel", "noopener noreferrer"), e;
          });
        const hn = function Markdown({
          source: e,
          className: t = "",
          getConfigs: r = () => ({ useUnsafeMarkdown: !1 }),
        }) {
          if ("string" != typeof e) return null;
          const a = new pn.Remarkable({
            html: !0,
            typographer: !0,
            breaks: !0,
            linkTarget: "_blank",
          }).use(mn.linkify);
          a.core.ruler.disable(["replacements", "smartquotes"]);
          const { useUnsafeMarkdown: n } = r(),
            s = a.render(e),
            o = sanitizer(s, { useUnsafeMarkdown: n });
          return e && s && o
            ? x().createElement("div", {
                className: ut()(t, "markdown"),
                dangerouslySetInnerHTML: { __html: o },
              })
            : null;
        };
        function sanitizer(e, { useUnsafeMarkdown: t = !1 } = {}) {
          const r = t,
            a = t ? [] : ["style", "class"];
          return (
            t &&
              !sanitizer.hasWarnedAboutDeprecation &&
              (console.warn(
                "useUnsafeMarkdown display configuration parameter is deprecated since >3.26.0 and will be removed in v4.0.0.",
              ),
              (sanitizer.hasWarnedAboutDeprecation = !0)),
            dn().sanitize(e, {
              ADD_ATTR: ["target"],
              FORBID_TAGS: ["style", "form"],
              ALLOW_DATA_ATTR: r,
              FORBID_ATTR: a,
            })
          );
        }
        sanitizer.hasWarnedAboutDeprecation = !1;
        class BaseLayout extends x().Component {
          render() {
            const {
                errSelectors: e,
                specSelectors: t,
                getComponent: r,
              } = this.props,
              a = r("SvgAssets"),
              n = r("InfoContainer", !0),
              s = r("VersionPragmaFilter"),
              o = r("operations", !0),
              l = r("Models", !0),
              c = r("Webhooks", !0),
              i = r("Row"),
              p = r("Col"),
              m = r("errors", !0),
              u = r("ServersContainer", !0),
              d = r("SchemesContainer", !0),
              h = r("AuthorizeBtnContainer", !0),
              g = r("FilterContainer", !0),
              y = t.isSwagger2(),
              f = t.isOAS3(),
              S = t.isOAS31(),
              E = !t.specStr(),
              _ = t.loadingStatus();
            let v = null;
            if (
              ("loading" === _ &&
                (v = x().createElement(
                  "div",
                  { className: "info" },
                  x().createElement(
                    "div",
                    { className: "loading-container" },
                    x().createElement("div", { className: "loading" }),
                  ),
                )),
              "failed" === _ &&
                (v = x().createElement(
                  "div",
                  { className: "info" },
                  x().createElement(
                    "div",
                    { className: "loading-container" },
                    x().createElement(
                      "h4",
                      { className: "title" },
                      "Failed to load API definition.",
                    ),
                    x().createElement(m, null),
                  ),
                )),
              "failedConfig" === _)
            ) {
              const t = e.lastError(),
                r = t ? t.get("message") : "";
              v = x().createElement(
                "div",
                { className: "info failed-config" },
                x().createElement(
                  "div",
                  { className: "loading-container" },
                  x().createElement(
                    "h4",
                    { className: "title" },
                    "Failed to load remote configuration.",
                  ),
                  x().createElement("p", null, r),
                ),
              );
            }
            if (
              (!v &&
                E &&
                (v = x().createElement(
                  "h4",
                  null,
                  "No API definition provided.",
                )),
              v)
            )
              return x().createElement(
                "div",
                { className: "swagger-ui" },
                x().createElement("div", { className: "loading-container" }, v),
              );
            const w = t.servers(),
              b = t.schemes(),
              C = w && w.size,
              O = b && b.size,
              N = !!t.securityDefinitions();
            return x().createElement(
              "div",
              { className: "swagger-ui" },
              x().createElement(a, null),
              x().createElement(
                s,
                {
                  isSwagger2: y,
                  isOAS3: f,
                  alsoShow: x().createElement(m, null),
                },
                x().createElement(m, null),
                x().createElement(
                  i,
                  { className: "information-container" },
                  x().createElement(
                    p,
                    { mobile: 12 },
                    x().createElement(n, null),
                  ),
                ),
                C || O || N
                  ? x().createElement(
                      "div",
                      { className: "scheme-container" },
                      x().createElement(
                        p,
                        { className: "schemes wrapper", mobile: 12 },
                        C || O
                          ? x().createElement(
                              "div",
                              { className: "schemes-server-container" },
                              C ? x().createElement(u, null) : null,
                              O ? x().createElement(d, null) : null,
                            )
                          : null,
                        N ? x().createElement(h, null) : null,
                      ),
                    )
                  : null,
                x().createElement(g, null),
                x().createElement(
                  i,
                  null,
                  x().createElement(
                    p,
                    { mobile: 12, desktop: 12 },
                    x().createElement(o, null),
                  ),
                ),
                S &&
                  x().createElement(
                    i,
                    { className: "webhooks-container" },
                    x().createElement(
                      p,
                      { mobile: 12, desktop: 12 },
                      x().createElement(c, null),
                    ),
                  ),
                x().createElement(
                  i,
                  null,
                  x().createElement(
                    p,
                    { mobile: 12, desktop: 12 },
                    x().createElement(l, null),
                  ),
                ),
              ),
            );
          }
        }
        const core_components = () => ({
            components: {
              App: Ga,
              authorizationPopup: AuthorizationPopup,
              authorizeBtn: AuthorizeBtn,
              AuthorizeBtnContainer,
              authorizeOperationBtn: AuthorizeOperationBtn,
              auths: Auths,
              AuthItem: auth_item_Auths,
              authError: AuthError,
              oauth2: Oauth2,
              apiKeyAuth: ApiKeyAuth,
              basicAuth: BasicAuth,
              clear: Clear,
              liveResponse: LiveResponse,
              InitializedInput,
              info: sn,
              InfoContainer,
              InfoUrl,
              InfoBasePath,
              Contact: on,
              License: ln,
              JumpToPath,
              CopyToClipboardBtn,
              onlineValidatorBadge: OnlineValidatorBadge,
              operations: Operations,
              operation: Operation,
              OperationSummary,
              OperationSummaryMethod,
              OperationSummaryPath,
              responses: Responses,
              response: Response,
              ResponseExtension: response_extension,
              responseBody: ResponseBody,
              parameters: Parameters,
              parameterRow: ParameterRow,
              execute: Execute,
              headers: headers_Headers,
              errors: Errors,
              contentType: ContentType,
              overview: Overview,
              footer: Footer,
              FilterContainer,
              ParamBody,
              curl: Curl,
              Property: property,
              TryItOutButton,
              Markdown: hn,
              BaseLayout,
              VersionPragmaFilter,
              VersionStamp: version_stamp,
              OperationExt: operation_extensions,
              OperationExtRow: operation_extension_row,
              ParameterExt: parameter_extension,
              ParameterIncludeEmpty,
              OperationTag,
              OperationContainer,
              OpenAPIVersion: openapi_version,
              DeepLink: deep_link,
              SvgAssets: svg_assets,
              Example,
              ExamplesSelect,
              ExamplesSelectValueRetainer,
            },
          }),
          form_components = () => ({ components: { ...S } }),
          base = () => [
            configsPlugin,
            util,
            logs,
            view,
            view_legacy,
            plugins_spec,
            err,
            icons,
            plugins_layout,
            json_schema_5,
            json_schema_5_samples,
            core_components,
            form_components,
            swagger_client,
            auth,
            downloadUrlPlugin,
            deep_linking,
            filter,
            on_complete,
            plugins_request_snippets,
            syntax_highlighting,
            versions,
            safe_render(),
          ],
          gn = (0, N.Map)();
        function onlyOAS3(e) {
          return (t, r) =>
            (...a) => {
              if (r.getSystem().specSelectors.isOAS3()) {
                const t = e(...a);
                return "function" == typeof t ? t(r) : t;
              }
              return t(...a);
            };
        }
        const yn = onlyOAS3(Vt()(null)),
          fn = onlyOAS3(
            (e, t) => (e) => e.getSystem().specSelectors.findSchema(t),
          ),
          Sn = onlyOAS3(() => (e) => {
            const t = e
              .getSystem()
              .specSelectors.specJson()
              .getIn(["components", "schemas"]);
            return N.Map.isMap(t) ? t : gn;
          }),
          En = onlyOAS3(
            () => (e) =>
              e.getSystem().specSelectors.specJson().hasIn(["servers", 0]),
          ),
          _n = onlyOAS3(
            (0, we.createSelector)(
              Ht,
              (e) => e.getIn(["components", "securitySchemes"]) || null,
            ),
          ),
          wrap_selectors_validOperationMethods =
            (e, t) =>
            (r, ...a) =>
              t.specSelectors.isOAS3()
                ? t.oas3Selectors.validOperationMethods()
                : e(...a),
          vn = yn,
          wn = yn,
          bn = yn,
          Cn = yn,
          xn = yn;
        const On = (function wrap_selectors_onlyOAS3(e) {
          return (t, r) =>
            (...a) => {
              if (r.getSystem().specSelectors.isOAS3()) {
                let t = r
                  .getState()
                  .getIn([
                    "spec",
                    "resolvedSubtrees",
                    "components",
                    "securitySchemes",
                  ]);
                return e(r, t, ...a);
              }
              return t(...a);
            };
        })(
          (0, we.createSelector)(
            (e) => e,
            ({ specSelectors: e }) => e.securityDefinitions(),
            (e, t) => {
              let r = (0, N.List)();
              return t
                ? (t.entrySeq().forEach(([e, t]) => {
                    const a = t.get("type");
                    if (
                      ("oauth2" === a &&
                        t
                          .get("flows")
                          .entrySeq()
                          .forEach(([a, n]) => {
                            let s = (0, N.fromJS)({
                              flow: a,
                              authorizationUrl: n.get("authorizationUrl"),
                              tokenUrl: n.get("tokenUrl"),
                              scopes: n.get("scopes"),
                              type: t.get("type"),
                              description: t.get("description"),
                            });
                            r = r.push(
                              new N.Map({ [e]: s.filter((e) => void 0 !== e) }),
                            );
                          }),
                      ("http" !== a && "apiKey" !== a) ||
                        (r = r.push(new N.Map({ [e]: t }))),
                      "openIdConnect" === a && t.get("openIdConnectData"))
                    ) {
                      let a = t.get("openIdConnectData");
                      (
                        a.get("grant_types_supported") || [
                          "authorization_code",
                          "implicit",
                        ]
                      ).forEach((n) => {
                        let s =
                            a.get("scopes_supported") &&
                            a
                              .get("scopes_supported")
                              .reduce((e, t) => e.set(t, ""), new N.Map()),
                          o = (0, N.fromJS)({
                            flow: n,
                            authorizationUrl: a.get("authorization_endpoint"),
                            tokenUrl: a.get("token_endpoint"),
                            scopes: s,
                            type: "oauth2",
                            openIdConnectUrl: t.get("openIdConnectUrl"),
                          });
                        r = r.push(
                          new N.Map({ [e]: o.filter((e) => void 0 !== e) }),
                        );
                      });
                    }
                  }),
                  r)
                : r;
            },
          ),
        );
        function OAS3ComponentWrapFactory(e) {
          return (t, r) => (a) =>
            "function" == typeof r.specSelectors?.isOAS3
              ? r.specSelectors.isOAS3()
                ? x().createElement(e, et()({}, a, r, { Ori: t }))
                : x().createElement(t, a)
              : (console.warn("OAS3 wrapper: couldn't get spec"), null);
        }
        const Nn = (0, N.Map)(),
          selectors_isSwagger2 = () => (e) =>
            (function isSwagger2(e) {
              const t = e.get("swagger");
              return "string" == typeof t && "2.0" === t;
            })(e.getSystem().specSelectors.specJson()),
          selectors_isOAS30 = () => (e) =>
            (function isOAS30(e) {
              const t = e.get("openapi");
              return (
                "string" == typeof t && /^3\.0\.([0123])(?:-rc[012])?$/.test(t)
              );
            })(e.getSystem().specSelectors.specJson()),
          selectors_isOAS3 = () => (e) => e.getSystem().specSelectors.isOAS30();
        function selectors_onlyOAS3(e) {
          return (t, ...r) =>
            (a) => {
              if (a.specSelectors.isOAS3()) {
                const n = e(t, ...r);
                return "function" == typeof n ? n(a) : n;
              }
              return null;
            };
        }
        const kn = selectors_onlyOAS3(
            () => (e) => e.specSelectors.specJson().get("servers", Nn),
          ),
          findSchema = (e, t) => {
            const r = e.getIn(
                ["resolvedSubtrees", "components", "schemas", t],
                null,
              ),
              a = e.getIn(["json", "components", "schemas", t], null);
            return r || a || null;
          },
          An = selectors_onlyOAS3((e, { callbacks: t, specPath: r }) => (e) => {
            const a = e.specSelectors.validOperationMethods();
            return N.Map.isMap(t)
              ? t
                  .reduce(
                    (e, t, n) => {
                      if (!N.Map.isMap(t)) return e;
                      const s = t.reduce(
                        (e, t, s) => {
                          if (!N.Map.isMap(t)) return e;
                          const o = t
                            .entrySeq()
                            .filter(([e]) => a.includes(e))
                            .map(([e, t]) => ({
                              operation: (0, N.Map)({ operation: t }),
                              method: e,
                              path: s,
                              callbackName: n,
                              specPath: r.concat([n, s, e]),
                            }));
                          return e.concat(o);
                        },
                        (0, N.List)(),
                      );
                      return e.concat(s);
                    },
                    (0, N.List)(),
                  )
                  .groupBy((e) => e.callbackName)
                  .map((e) => e.toArray())
                  .toObject()
              : {};
          }),
          callbacks = ({
            callbacks: e,
            specPath: t,
            specSelectors: r,
            getComponent: a,
          }) => {
            const n = r.callbacksOperations({ callbacks: e, specPath: t }),
              s = Object.keys(n),
              o = a("OperationContainer", !0);
            return 0 === s.length
              ? x().createElement("span", null, "No callbacks")
              : x().createElement(
                  "div",
                  null,
                  s.map((e) =>
                    x().createElement(
                      "div",
                      { key: `${e}` },
                      x().createElement("h2", null, e),
                      n[e].map((t) =>
                        x().createElement(o, {
                          key: `${e}-${t.path}-${t.method}`,
                          op: t.operation,
                          tag: "callbacks",
                          method: t.method,
                          path: t.path,
                          specPath: t.specPath,
                          allowTryItOut: !1,
                        }),
                      ),
                    ),
                  ),
                );
          },
          getDefaultRequestBodyValue = (e, t, r, a) => {
            const n = e.getIn(["content", t]) ?? (0, N.OrderedMap)(),
              s = n.get("schema", (0, N.OrderedMap)()).toJS(),
              o = void 0 !== n.get("examples"),
              l = n.get("example"),
              c = o ? n.getIn(["examples", r, "value"]) : l;
            return stringify(
              a.getSampleSchema(s, t, { includeWriteOnly: !0 }, c),
            );
          },
          request_body = ({
            userHasEditedBody: e,
            requestBody: t,
            requestBodyValue: r,
            requestBodyInclusionSetting: a,
            requestBodyErrors: n,
            getComponent: s,
            getConfigs: o,
            specSelectors: l,
            fn: c,
            contentType: i,
            isExecute: p,
            specPath: m,
            onChange: u,
            onChangeIncludeEmpty: d,
            activeExamplesKey: h,
            updateActiveExamplesKey: g,
            setRetainRequestBodyValueFlag: y,
          }) => {
            const handleFile = (e) => {
                u(e.target.files[0]);
              },
              setIsIncludedOptions = (e) => {
                let t = { key: e, shouldDispatchInit: !1, defaultValue: !0 };
                return (
                  "no value" === a.get(e, "no value") &&
                    (t.shouldDispatchInit = !0),
                  t
                );
              },
              f = s("Markdown", !0),
              S = s("modelExample"),
              E = s("RequestBodyEditor"),
              _ = s("HighlightCode", !0),
              v = s("ExamplesSelectValueRetainer"),
              w = s("Example"),
              b = s("ParameterIncludeEmpty"),
              { showCommonExtensions: C } = o(),
              O = t?.get("description") ?? null,
              k = t?.get("content") ?? new N.OrderedMap();
            i = i || k.keySeq().first() || "";
            const A = k.get(i) ?? (0, N.OrderedMap)(),
              I = A.get("schema", (0, N.OrderedMap)()),
              q = A.get("examples", null),
              j = q?.map((e, r) => {
                const a = e?.get("value", null);
                return (
                  a &&
                    (e = e.set(
                      "value",
                      getDefaultRequestBodyValue(t, i, r, c),
                      a,
                    )),
                  e
                );
              });
            if (((n = N.List.isList(n) ? n : (0, N.List)()), !A.size))
              return null;
            const P = "object" === A.getIn(["schema", "type"]),
              M = "binary" === A.getIn(["schema", "format"]),
              R = "base64" === A.getIn(["schema", "format"]);
            if (
              "application/octet-stream" === i ||
              0 === i.indexOf("image/") ||
              0 === i.indexOf("audio/") ||
              0 === i.indexOf("video/") ||
              M ||
              R
            ) {
              const e = s("Input");
              return p
                ? x().createElement(e, { type: "file", onChange: handleFile })
                : x().createElement(
                    "i",
                    null,
                    "Example values are not available for ",
                    x().createElement("code", null, i),
                    " media types.",
                  );
            }
            if (
              P &&
              ("application/x-www-form-urlencoded" === i ||
                0 === i.indexOf("multipart/")) &&
              I.get("properties", (0, N.OrderedMap)()).size > 0
            ) {
              const e = s("JsonSchemaForm"),
                t = s("ParameterExt"),
                o = I.get("properties", (0, N.OrderedMap)());
              return (
                (r = N.Map.isMap(r) ? r : (0, N.OrderedMap)()),
                x().createElement(
                  "div",
                  { className: "table-container" },
                  O && x().createElement(f, { source: O }),
                  x().createElement(
                    "table",
                    null,
                    x().createElement(
                      "tbody",
                      null,
                      N.Map.isMap(o) &&
                        o.entrySeq().map(([o, l]) => {
                          if (l.get("readOnly")) return;
                          const i = l.get("oneOf")?.get(0)?.toJS(),
                            m = l.get("anyOf")?.get(0)?.toJS();
                          l = (0, N.fromJS)(
                            c.mergeJsonSchema(l.toJS(), i ?? m ?? {}),
                          );
                          let h = C ? getCommonExtensions(l) : null;
                          const g = I.get("required", (0, N.List)()).includes(
                              o,
                            ),
                            y = l.get("type"),
                            S = l.get("format"),
                            E = l.get("description"),
                            _ = r.getIn([o, "value"]),
                            v = r.getIn([o, "errors"]) || n,
                            w = a.get(o) || !1;
                          let O = c.getSampleSchema(l, !1, {
                            includeWriteOnly: !0,
                          });
                          !1 === O && (O = "false"),
                            0 === O && (O = "0"),
                            "string" != typeof O &&
                              "object" === y &&
                              (O = stringify(O)),
                            "string" == typeof O &&
                              "array" === y &&
                              (O = JSON.parse(O));
                          const k =
                            "string" === y &&
                            ("binary" === S || "base64" === S);
                          return x().createElement(
                            "tr",
                            {
                              key: o,
                              className: "parameters",
                              "data-property-name": o,
                            },
                            x().createElement(
                              "td",
                              { className: "parameters-col_name" },
                              x().createElement(
                                "div",
                                {
                                  className: g
                                    ? "parameter__name required"
                                    : "parameter__name",
                                },
                                o,
                                g
                                  ? x().createElement("span", null, " *")
                                  : null,
                              ),
                              x().createElement(
                                "div",
                                { className: "parameter__type" },
                                y,
                                S &&
                                  x().createElement(
                                    "span",
                                    { className: "prop-format" },
                                    "($",
                                    S,
                                    ")",
                                  ),
                                C && h.size
                                  ? h.entrySeq().map(([e, r]) =>
                                      x().createElement(t, {
                                        key: `${e}-${r}`,
                                        xKey: e,
                                        xVal: r,
                                      }),
                                    )
                                  : null,
                              ),
                              x().createElement(
                                "div",
                                { className: "parameter__deprecated" },
                                l.get("deprecated") ? "deprecated" : null,
                              ),
                            ),
                            x().createElement(
                              "td",
                              { className: "parameters-col_description" },
                              x().createElement(f, { source: E }),
                              p
                                ? x().createElement(
                                    "div",
                                    null,
                                    x().createElement(e, {
                                      fn: c,
                                      dispatchInitialValue: !k,
                                      schema: l,
                                      description: o,
                                      getComponent: s,
                                      value: void 0 === _ ? O : _,
                                      required: g,
                                      errors: v,
                                      onChange: (e) => {
                                        u(e, [o]);
                                      },
                                    }),
                                    g
                                      ? null
                                      : x().createElement(b, {
                                          onChange: (e) => d(o, e),
                                          isIncluded: w,
                                          isIncludedOptions:
                                            setIsIncludedOptions(o),
                                          isDisabled: Array.isArray(_)
                                            ? 0 !== _.length
                                            : !isEmptyValue(_),
                                        }),
                                  )
                                : null,
                            ),
                          );
                        }),
                    ),
                  ),
                )
              );
            }
            const T = getDefaultRequestBodyValue(t, i, h, c);
            let J = null;
            return (
              getKnownSyntaxHighlighterLanguage(T) && (J = "json"),
              x().createElement(
                "div",
                null,
                O && x().createElement(f, { source: O }),
                j
                  ? x().createElement(v, {
                      userHasEditedBody: e,
                      examples: j,
                      currentKey: h,
                      currentUserInputValue: r,
                      onSelect: (e) => {
                        g(e);
                      },
                      updateValue: u,
                      defaultToFirstExample: !0,
                      getComponent: s,
                      setRetainRequestBodyValueFlag: y,
                    })
                  : null,
                p
                  ? x().createElement(
                      "div",
                      null,
                      x().createElement(E, {
                        value: r,
                        errors: n,
                        defaultValue: T,
                        onChange: u,
                        getComponent: s,
                      }),
                    )
                  : x().createElement(S, {
                      getComponent: s,
                      getConfigs: o,
                      specSelectors: l,
                      expandDepth: 1,
                      isExecute: p,
                      schema: A.get("schema"),
                      specPath: m.push("content", i),
                      example: x().createElement(
                        _,
                        { className: "body-param__example", language: J },
                        stringify(r) || T,
                      ),
                      includeWriteOnly: !0,
                    }),
                j
                  ? x().createElement(w, {
                      example: j.get(h),
                      getComponent: s,
                      getConfigs: o,
                    })
                  : null,
              )
            );
          };
        class operation_link_OperationLink extends C.Component {
          render() {
            const { link: e, name: t, getComponent: r } = this.props,
              a = r("Markdown", !0);
            let n = e.get("operationId") || e.get("operationRef"),
              s = e.get("parameters") && e.get("parameters").toJS(),
              o = e.get("description");
            return x().createElement(
              "div",
              { className: "operation-link" },
              x().createElement(
                "div",
                { className: "description" },
                x().createElement(
                  "b",
                  null,
                  x().createElement("code", null, t),
                ),
                o ? x().createElement(a, { source: o }) : null,
              ),
              x().createElement(
                "pre",
                null,
                "Operation `",
                n,
                "`",
                x().createElement("br", null),
                x().createElement("br", null),
                "Parameters ",
                (function padString(e, t) {
                  if ("string" != typeof t) return "";
                  return t
                    .split("\n")
                    .map((t, r) => (r > 0 ? Array(e + 1).join(" ") + t : t))
                    .join("\n");
                })(0, JSON.stringify(s, null, 2)) || "{}",
                x().createElement("br", null),
              ),
            );
          }
        }
        const In = operation_link_OperationLink,
          components_servers = ({
            servers: e,
            currentServer: t,
            setSelectedServer: r,
            setServerVariableValue: a,
            getServerVariable: n,
            getEffectiveServerValue: s,
          }) => {
            const o =
                (e.find((e) => e.get("url") === t) || (0, N.OrderedMap)()).get(
                  "variables",
                ) || (0, N.OrderedMap)(),
              l = 0 !== o.size;
            (0, C.useEffect)(() => {
              t || r(e.first()?.get("url"));
            }, []),
              (0, C.useEffect)(() => {
                const n = e.find((e) => e.get("url") === t);
                if (!n) return void r(e.first().get("url"));
                (n.get("variables") || (0, N.OrderedMap)()).map((e, r) => {
                  a({ server: t, key: r, val: e.get("default") || "" });
                });
              }, [t, e]);
            const c = (0, C.useCallback)(
                (e) => {
                  r(e.target.value);
                },
                [r],
              ),
              i = (0, C.useCallback)(
                (e) => {
                  const r = e.target.getAttribute("data-variable"),
                    n = e.target.value;
                  a({ server: t, key: r, val: n });
                },
                [a, t],
              );
            return x().createElement(
              "div",
              { className: "servers" },
              x().createElement(
                "label",
                { htmlFor: "servers" },
                x().createElement(
                  "select",
                  { onChange: c, value: t, id: "servers" },
                  e
                    .valueSeq()
                    .map((e) =>
                      x().createElement(
                        "option",
                        { value: e.get("url"), key: e.get("url") },
                        e.get("url"),
                        e.get("description") && ` - ${e.get("description")}`,
                      ),
                    )
                    .toArray(),
                ),
              ),
              l &&
                x().createElement(
                  "div",
                  null,
                  x().createElement(
                    "div",
                    { className: "computed-url" },
                    "Computed URL:",
                    x().createElement("code", null, s(t)),
                  ),
                  x().createElement("h4", null, "Server variables"),
                  x().createElement(
                    "table",
                    null,
                    x().createElement(
                      "tbody",
                      null,
                      o.entrySeq().map(([e, r]) =>
                        x().createElement(
                          "tr",
                          { key: e },
                          x().createElement("td", null, e),
                          x().createElement(
                            "td",
                            null,
                            r.get("enum")
                              ? x().createElement(
                                  "select",
                                  { "data-variable": e, onChange: i },
                                  r.get("enum").map((r) =>
                                    x().createElement(
                                      "option",
                                      {
                                        selected: r === n(t, e),
                                        key: r,
                                        value: r,
                                      },
                                      r,
                                    ),
                                  ),
                                )
                              : x().createElement("input", {
                                  type: "text",
                                  value: n(t, e) || "",
                                  onChange: i,
                                  "data-variable": e,
                                }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          };
        class ServersContainer extends x().Component {
          render() {
            const {
                specSelectors: e,
                oas3Selectors: t,
                oas3Actions: r,
                getComponent: a,
              } = this.props,
              n = e.servers(),
              s = a("Servers");
            return n && n.size
              ? x().createElement(
                  "div",
                  null,
                  x().createElement(
                    "span",
                    { className: "servers-title" },
                    "Servers",
                  ),
                  x().createElement(s, {
                    servers: n,
                    currentServer: t.selectedServer(),
                    setSelectedServer: r.setSelectedServer,
                    setServerVariableValue: r.setServerVariableValue,
                    getServerVariable: t.serverVariableValue,
                    getEffectiveServerValue: t.serverEffectiveValue,
                  }),
                )
              : null;
          }
        }
        const qn = Function.prototype;
        class RequestBodyEditor extends C.PureComponent {
          static defaultProps = { onChange: qn, userHasEditedBody: !1 };
          constructor(e, t) {
            super(e, t),
              (this.state = { value: stringify(e.value) || e.defaultValue }),
              e.onChange(e.value);
          }
          applyDefaultValue = (e) => {
            const { onChange: t, defaultValue: r } = e || this.props;
            return this.setState({ value: r }), t(r);
          };
          onChange = (e) => {
            this.props.onChange(stringify(e));
          };
          onDomChange = (e) => {
            const t = e.target.value;
            this.setState({ value: t }, () => this.onChange(t));
          };
          UNSAFE_componentWillReceiveProps(e) {
            this.props.value !== e.value &&
              e.value !== this.state.value &&
              this.setState({ value: stringify(e.value) }),
              !e.value &&
                e.defaultValue &&
                this.state.value &&
                this.applyDefaultValue(e);
          }
          render() {
            let { getComponent: e, errors: t } = this.props,
              { value: r } = this.state,
              a = t.size > 0;
            const n = e("TextArea");
            return x().createElement(
              "div",
              { className: "body-param" },
              x().createElement(n, {
                className: ut()("body-param__text", { invalid: a }),
                title: t.size ? t.join(", ") : "",
                value: r,
                onChange: this.onDomChange,
              }),
            );
          }
        }
        class HttpAuth extends x().Component {
          constructor(e, t) {
            super(e, t);
            let { name: r, schema: a } = this.props,
              n = this.getValue();
            this.state = { name: r, schema: a, value: n };
          }
          getValue() {
            let { name: e, authorized: t } = this.props;
            return t && t.getIn([e, "value"]);
          }
          onChange = (e) => {
            let { onChange: t } = this.props,
              { value: r, name: a } = e.target,
              n = Object.assign({}, this.state.value);
            a ? (n[a] = r) : (n = r),
              this.setState({ value: n }, () => t(this.state));
          };
          render() {
            let {
              schema: e,
              getComponent: t,
              errSelectors: r,
              name: a,
            } = this.props;
            const n = t("Input"),
              s = t("Row"),
              o = t("Col"),
              l = t("authError"),
              c = t("Markdown", !0),
              i = t("JumpToPath", !0),
              p = (e.get("scheme") || "").toLowerCase();
            let m = this.getValue(),
              u = r.allErrors().filter((e) => e.get("authId") === a);
            if ("basic" === p) {
              let t = m ? m.get("username") : null;
              return x().createElement(
                "div",
                null,
                x().createElement(
                  "h4",
                  null,
                  x().createElement("code", null, a || e.get("name")),
                  "  (http, Basic)",
                  x().createElement(i, { path: ["securityDefinitions", a] }),
                ),
                t && x().createElement("h6", null, "Authorized"),
                x().createElement(
                  s,
                  null,
                  x().createElement(c, { source: e.get("description") }),
                ),
                x().createElement(
                  s,
                  null,
                  x().createElement(
                    "label",
                    { htmlFor: "auth-basic-username" },
                    "Username:",
                  ),
                  t
                    ? x().createElement("code", null, " ", t, " ")
                    : x().createElement(
                        o,
                        null,
                        x().createElement(n, {
                          id: "auth-basic-username",
                          type: "text",
                          required: "required",
                          name: "username",
                          "aria-label": "auth-basic-username",
                          onChange: this.onChange,
                          autoFocus: !0,
                        }),
                      ),
                ),
                x().createElement(
                  s,
                  null,
                  x().createElement(
                    "label",
                    { htmlFor: "auth-basic-password" },
                    "Password:",
                  ),
                  t
                    ? x().createElement("code", null, " ****** ")
                    : x().createElement(
                        o,
                        null,
                        x().createElement(n, {
                          id: "auth-basic-password",
                          autoComplete: "new-password",
                          name: "password",
                          type: "password",
                          "aria-label": "auth-basic-password",
                          onChange: this.onChange,
                        }),
                      ),
                ),
                u
                  .valueSeq()
                  .map((e, t) => x().createElement(l, { error: e, key: t })),
              );
            }
            return "bearer" === p
              ? x().createElement(
                  "div",
                  null,
                  x().createElement(
                    "h4",
                    null,
                    x().createElement("code", null, a || e.get("name")),
                    "  (http, Bearer)",
                    x().createElement(i, { path: ["securityDefinitions", a] }),
                  ),
                  m && x().createElement("h6", null, "Authorized"),
                  x().createElement(
                    s,
                    null,
                    x().createElement(c, { source: e.get("description") }),
                  ),
                  x().createElement(
                    s,
                    null,
                    x().createElement(
                      "label",
                      { htmlFor: "auth-bearer-value" },
                      "Value:",
                    ),
                    m
                      ? x().createElement("code", null, " ****** ")
                      : x().createElement(
                          o,
                          null,
                          x().createElement(n, {
                            id: "auth-bearer-value",
                            type: "text",
                            "aria-label": "auth-bearer-value",
                            onChange: this.onChange,
                            autoFocus: !0,
                          }),
                        ),
                  ),
                  u
                    .valueSeq()
                    .map((e, t) => x().createElement(l, { error: e, key: t })),
                )
              : x().createElement(
                  "div",
                  null,
                  x().createElement(
                    "em",
                    null,
                    x().createElement("b", null, a),
                    " HTTP authentication: unsupported scheme ",
                    `'${p}'`,
                  ),
                );
          }
        }
        class OperationServers extends x().Component {
          setSelectedServer = (e) => {
            const { path: t, method: r } = this.props;
            return (
              this.forceUpdate(), this.props.setSelectedServer(e, `${t}:${r}`)
            );
          };
          setServerVariableValue = (e) => {
            const { path: t, method: r } = this.props;
            return (
              this.forceUpdate(),
              this.props.setServerVariableValue({
                ...e,
                namespace: `${t}:${r}`,
              })
            );
          };
          getSelectedServer = () => {
            const { path: e, method: t } = this.props;
            return this.props.getSelectedServer(`${e}:${t}`);
          };
          getServerVariable = (e, t) => {
            const { path: r, method: a } = this.props;
            return this.props.getServerVariable(
              { namespace: `${r}:${a}`, server: e },
              t,
            );
          };
          getEffectiveServerValue = (e) => {
            const { path: t, method: r } = this.props;
            return this.props.getEffectiveServerValue({
              server: e,
              namespace: `${t}:${r}`,
            });
          };
          render() {
            const {
              operationServers: e,
              pathServers: t,
              getComponent: r,
            } = this.props;
            if (!e && !t) return null;
            const a = r("Servers"),
              n = e || t,
              s = e ? "operation" : "path";
            return x().createElement(
              "div",
              { className: "opblock-section operation-servers" },
              x().createElement(
                "div",
                { className: "opblock-section-header" },
                x().createElement(
                  "div",
                  { className: "tab-header" },
                  x().createElement(
                    "h4",
                    { className: "opblock-title" },
                    "Servers",
                  ),
                ),
              ),
              x().createElement(
                "div",
                { className: "opblock-description-wrapper" },
                x().createElement(
                  "h4",
                  { className: "message" },
                  "These ",
                  s,
                  "-level options override the global server options.",
                ),
                x().createElement(a, {
                  servers: n,
                  currentServer: this.getSelectedServer(),
                  setSelectedServer: this.setSelectedServer,
                  setServerVariableValue: this.setServerVariableValue,
                  getServerVariable: this.getServerVariable,
                  getEffectiveServerValue: this.getEffectiveServerValue,
                }),
              ),
            );
          }
        }
        const jn = {
            Callbacks: callbacks,
            HttpAuth,
            RequestBody: request_body,
            Servers: components_servers,
            ServersContainer,
            RequestBodyEditor,
            OperationServers,
            operationLink: In,
          },
          Pn = new pn.Remarkable("commonmark");
        Pn.block.ruler.enable(["table"]), Pn.set({ linkTarget: "_blank" });
        const Mn = OAS3ComponentWrapFactory(
            ({
              source: e,
              className: t = "",
              getConfigs: r = () => ({ useUnsafeMarkdown: !1 }),
            }) => {
              if ("string" != typeof e) return null;
              if (e) {
                const { useUnsafeMarkdown: a } = r(),
                  n = sanitizer(Pn.render(e), { useUnsafeMarkdown: a });
                let s;
                return (
                  "string" == typeof n && (s = n.trim()),
                  x().createElement("div", {
                    dangerouslySetInnerHTML: { __html: s },
                    className: ut()(t, "renderedMarkdown"),
                  })
                );
              }
              return null;
            },
          ),
          Rn = OAS3ComponentWrapFactory(({ Ori: e, ...t }) => {
            const {
                schema: r,
                getComponent: a,
                errSelectors: n,
                authorized: s,
                onAuthChange: o,
                name: l,
              } = t,
              c = a("HttpAuth");
            return "http" === r.get("type")
              ? x().createElement(c, {
                  key: l,
                  schema: r,
                  name: l,
                  errSelectors: n,
                  authorized: s,
                  getComponent: a,
                  onChange: o,
                })
              : x().createElement(e, t);
          }),
          Tn = OAS3ComponentWrapFactory(OnlineValidatorBadge);
        class ModelComponent extends C.Component {
          render() {
            let { getConfigs: e, schema: t, Ori: r } = this.props,
              a = ["model-box"],
              n = null;
            return (
              !0 === t.get("deprecated") &&
                (a.push("deprecated"),
                (n = x().createElement(
                  "span",
                  { className: "model-deprecated-warning" },
                  "Deprecated:",
                ))),
              x().createElement(
                "div",
                { className: a.join(" ") },
                n,
                x().createElement(
                  r,
                  et()({}, this.props, {
                    getConfigs: e,
                    depth: 1,
                    expandDepth: this.props.expandDepth || 0,
                  }),
                ),
              )
            );
          }
        }
        const Jn = OAS3ComponentWrapFactory(ModelComponent),
          $n = OAS3ComponentWrapFactory(({ Ori: e, ...t }) => {
            const { schema: r, getComponent: a, errors: n, onChange: s } = t,
              o = r && r.get ? r.get("format") : null,
              l = r && r.get ? r.get("type") : null,
              c = a("Input");
            return l &&
              "string" === l &&
              o &&
              ("binary" === o || "base64" === o)
              ? x().createElement(c, {
                  type: "file",
                  className: n.length ? "invalid" : "",
                  title: n.length ? n : "",
                  onChange: (e) => {
                    s(e.target.files[0]);
                  },
                  disabled: e.isDisabled,
                })
              : x().createElement(e, t);
          }),
          Vn = {
            Markdown: Mn,
            AuthItem: Rn,
            OpenAPIVersion: (function OAS30ComponentWrapFactory(e) {
              return (t, r) => (a) =>
                "function" == typeof r.specSelectors?.isOAS30
                  ? r.specSelectors.isOAS30()
                    ? x().createElement(e, et()({}, a, r, { Ori: t }))
                    : x().createElement(t, a)
                  : (console.warn("OAS30 wrapper: couldn't get spec"), null);
            })((e) => {
              const { Ori: t } = e;
              return x().createElement(t, { oasVersion: "3.0" });
            }),
            JsonSchema_string: $n,
            model: Jn,
            onlineValidatorBadge: Tn,
          },
          Dn = "oas3_set_servers",
          Kn = "oas3_set_request_body_value",
          Ln = "oas3_set_request_body_retain_flag",
          Un = "oas3_set_request_body_inclusion",
          zn = "oas3_set_active_examples_member",
          Bn = "oas3_set_request_content_type",
          Fn = "oas3_set_response_content_type",
          Wn = "oas3_set_server_variable_value",
          Hn = "oas3_set_request_body_validate_error",
          Xn = "oas3_clear_request_body_validate_error",
          Gn = "oas3_clear_request_body_value";
        function setSelectedServer(e, t) {
          return { type: Dn, payload: { selectedServerUrl: e, namespace: t } };
        }
        function setRequestBodyValue({ value: e, pathMethod: t }) {
          return { type: Kn, payload: { value: e, pathMethod: t } };
        }
        const setRetainRequestBodyValueFlag = ({
          value: e,
          pathMethod: t,
        }) => ({ type: Ln, payload: { value: e, pathMethod: t } });
        function setRequestBodyInclusion({ value: e, pathMethod: t, name: r }) {
          return { type: Un, payload: { value: e, pathMethod: t, name: r } };
        }
        function setActiveExamplesMember({
          name: e,
          pathMethod: t,
          contextType: r,
          contextName: a,
        }) {
          return {
            type: zn,
            payload: { name: e, pathMethod: t, contextType: r, contextName: a },
          };
        }
        function setRequestContentType({ value: e, pathMethod: t }) {
          return { type: Bn, payload: { value: e, pathMethod: t } };
        }
        function setResponseContentType({ value: e, path: t, method: r }) {
          return { type: Fn, payload: { value: e, path: t, method: r } };
        }
        function setServerVariableValue({
          server: e,
          namespace: t,
          key: r,
          val: a,
        }) {
          return {
            type: Wn,
            payload: { server: e, namespace: t, key: r, val: a },
          };
        }
        const setRequestBodyValidateError = ({
            path: e,
            method: t,
            validationErrors: r,
          }) => ({
            type: Hn,
            payload: { path: e, method: t, validationErrors: r },
          }),
          clearRequestBodyValidateError = ({ path: e, method: t }) => ({
            type: Xn,
            payload: { path: e, method: t },
          }),
          initRequestBodyValidateError = ({ pathMethod: e }) => ({
            type: Xn,
            payload: { path: e[0], method: e[1] },
          }),
          clearRequestBodyValue = ({ pathMethod: e }) => ({
            type: Gn,
            payload: { pathMethod: e },
          }),
          Yn = require("lodash/escapeRegExp");
        var Qn = __webpack_require__.n(Yn);
        const oas3_selectors_onlyOAS3 =
          (e) =>
          (t, ...r) =>
          (a) => {
            if (a.getSystem().specSelectors.isOAS3()) {
              const n = e(t, ...r);
              return "function" == typeof n ? n(a) : n;
            }
            return null;
          };
        const Zn = oas3_selectors_onlyOAS3((e, t) => {
            const r = t ? [t, "selectedServer"] : ["selectedServer"];
            return e.getIn(r) || "";
          }),
          es = oas3_selectors_onlyOAS3(
            (e, t, r) => e.getIn(["requestData", t, r, "bodyValue"]) || null,
          ),
          ts = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(["requestData", t, r, "retainBodyValue"]) || !1,
          ),
          selectDefaultRequestBodyValue = (e, t, r) => (e) => {
            const { oas3Selectors: a, specSelectors: n, fn: s } = e.getSystem();
            if (n.isOAS3()) {
              const e = a.requestContentType(t, r);
              if (e)
                return getDefaultRequestBodyValue(
                  n.specResolvedSubtree(["paths", t, r, "requestBody"]),
                  e,
                  a.activeExamplesMember(t, r, "requestBody", "requestBody"),
                  s,
                );
            }
            return null;
          },
          rs = oas3_selectors_onlyOAS3((e, t, r) => (e) => {
            const { oas3Selectors: a, specSelectors: n, fn: s } = e;
            let o = !1;
            const l = a.requestContentType(t, r);
            let c = a.requestBodyValue(t, r);
            const i = n.specResolvedSubtree(["paths", t, r, "requestBody"]);
            if (!i) return !1;
            if (
              (N.Map.isMap(c) &&
                (c = stringify(
                  c
                    .mapEntries((e) =>
                      N.Map.isMap(e[1]) ? [e[0], e[1].get("value")] : e,
                    )
                    .toJS(),
                )),
              N.List.isList(c) && (c = stringify(c)),
              l)
            ) {
              const e = getDefaultRequestBodyValue(
                i,
                l,
                a.activeExamplesMember(t, r, "requestBody", "requestBody"),
                s,
              );
              o = !!c && c !== e;
            }
            return o;
          }),
          as = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(["requestData", t, r, "bodyInclusion"]) || (0, N.Map)(),
          ),
          ns = oas3_selectors_onlyOAS3(
            (e, t, r) => e.getIn(["requestData", t, r, "errors"]) || null,
          ),
          ss = oas3_selectors_onlyOAS3(
            (e, t, r, a, n) =>
              e.getIn(["examples", t, r, a, n, "activeExample"]) || null,
          ),
          os = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(["requestData", t, r, "requestContentType"]) || null,
          ),
          ls = oas3_selectors_onlyOAS3(
            (e, t, r) =>
              e.getIn(["requestData", t, r, "responseContentType"]) || null,
          ),
          cs = oas3_selectors_onlyOAS3((e, t, r) => {
            let a;
            if ("string" != typeof t) {
              const { server: e, namespace: n } = t;
              a = n
                ? [n, "serverVariableValues", e, r]
                : ["serverVariableValues", e, r];
            } else {
              a = ["serverVariableValues", t, r];
            }
            return e.getIn(a) || null;
          }),
          is = oas3_selectors_onlyOAS3((e, t) => {
            let r;
            if ("string" != typeof t) {
              const { server: e, namespace: a } = t;
              r = a
                ? [a, "serverVariableValues", e]
                : ["serverVariableValues", e];
            } else {
              r = ["serverVariableValues", t];
            }
            return e.getIn(r) || (0, N.OrderedMap)();
          }),
          ps = oas3_selectors_onlyOAS3((e, t) => {
            var r, a;
            if ("string" != typeof t) {
              const { server: n, namespace: s } = t;
              (a = n),
                (r = s
                  ? e.getIn([s, "serverVariableValues", a])
                  : e.getIn(["serverVariableValues", a]));
            } else (a = t), (r = e.getIn(["serverVariableValues", a]));
            r = r || (0, N.OrderedMap)();
            let n = a;
            return (
              r.map((e, t) => {
                n = n.replace(new RegExp(`{${Qn()(t)}}`, "g"), e);
              }),
              n
            );
          }),
          ms = (function validateRequestBodyIsRequired(e) {
            return (...t) =>
              (r) => {
                const a = r.getSystem().specSelectors.specJson();
                let n = [...t][1] || [];
                return (
                  !a.getIn(["paths", ...n, "requestBody", "required"]) ||
                  e(...t)
                );
              };
          })((e, t) =>
            ((e, t) => (
              (t = t || []), !!e.getIn(["requestData", ...t, "bodyValue"])
            ))(e, t),
          ),
          validateShallowRequired = (
            e,
            {
              oas3RequiredRequestBodyContentType: t,
              oas3RequestContentType: r,
              oas3RequestBodyValue: a,
            },
          ) => {
            let n = [];
            if (!N.Map.isMap(a)) return n;
            let s = [];
            return (
              Object.keys(t.requestContentType).forEach((e) => {
                if (e === r) {
                  t.requestContentType[e].forEach((e) => {
                    s.indexOf(e) < 0 && s.push(e);
                  });
                }
              }),
              s.forEach((e) => {
                a.getIn([e, "value"]) || n.push(e);
              }),
              n
            );
          },
          us = Vt()([
            "get",
            "put",
            "post",
            "delete",
            "options",
            "head",
            "patch",
            "trace",
          ]),
          ds = {
            [Dn]: (e, { payload: { selectedServerUrl: t, namespace: r } }) => {
              const a = r ? [r, "selectedServer"] : ["selectedServer"];
              return e.setIn(a, t);
            },
            [Kn]: (e, { payload: { value: t, pathMethod: r } }) => {
              let [a, n] = r;
              if (!N.Map.isMap(t))
                return e.setIn(["requestData", a, n, "bodyValue"], t);
              let s,
                o = e.getIn(["requestData", a, n, "bodyValue"]) || (0, N.Map)();
              N.Map.isMap(o) || (o = (0, N.Map)());
              const [...l] = t.keys();
              return (
                l.forEach((e) => {
                  let r = t.getIn([e]);
                  (o.has(e) && N.Map.isMap(r)) ||
                    (s = o.setIn([e, "value"], r));
                }),
                e.setIn(["requestData", a, n, "bodyValue"], s)
              );
            },
            [Ln]: (e, { payload: { value: t, pathMethod: r } }) => {
              let [a, n] = r;
              return e.setIn(["requestData", a, n, "retainBodyValue"], t);
            },
            [Un]: (e, { payload: { value: t, pathMethod: r, name: a } }) => {
              let [n, s] = r;
              return e.setIn(["requestData", n, s, "bodyInclusion", a], t);
            },
            [zn]: (
              e,
              {
                payload: {
                  name: t,
                  pathMethod: r,
                  contextType: a,
                  contextName: n,
                },
              },
            ) => {
              let [s, o] = r;
              return e.setIn(["examples", s, o, a, n, "activeExample"], t);
            },
            [Bn]: (e, { payload: { value: t, pathMethod: r } }) => {
              let [a, n] = r;
              return e.setIn(["requestData", a, n, "requestContentType"], t);
            },
            [Fn]: (e, { payload: { value: t, path: r, method: a } }) =>
              e.setIn(["requestData", r, a, "responseContentType"], t),
            [Wn]: (
              e,
              { payload: { server: t, namespace: r, key: a, val: n } },
            ) => {
              const s = r
                ? [r, "serverVariableValues", t, a]
                : ["serverVariableValues", t, a];
              return e.setIn(s, n);
            },
            [Hn]: (
              e,
              { payload: { path: t, method: r, validationErrors: a } },
            ) => {
              let n = [];
              if (
                (n.push("Required field is not provided"), a.missingBodyValue)
              )
                return e.setIn(
                  ["requestData", t, r, "errors"],
                  (0, N.fromJS)(n),
                );
              if (a.missingRequiredKeys && a.missingRequiredKeys.length > 0) {
                const { missingRequiredKeys: s } = a;
                return e.updateIn(
                  ["requestData", t, r, "bodyValue"],
                  (0, N.fromJS)({}),
                  (e) =>
                    s.reduce(
                      (e, t) => e.setIn([t, "errors"], (0, N.fromJS)(n)),
                      e,
                    ),
                );
              }
              return (
                console.warn(
                  "unexpected result: SET_REQUEST_BODY_VALIDATE_ERROR",
                ),
                e
              );
            },
            [Xn]: (e, { payload: { path: t, method: r } }) => {
              const a = e.getIn(["requestData", t, r, "bodyValue"]);
              if (!N.Map.isMap(a))
                return e.setIn(
                  ["requestData", t, r, "errors"],
                  (0, N.fromJS)([]),
                );
              const [...n] = a.keys();
              return n
                ? e.updateIn(
                    ["requestData", t, r, "bodyValue"],
                    (0, N.fromJS)({}),
                    (e) =>
                      n.reduce(
                        (e, t) => e.setIn([t, "errors"], (0, N.fromJS)([])),
                        e,
                      ),
                  )
                : e;
            },
            [Gn]: (e, { payload: { pathMethod: t } }) => {
              let [r, a] = t;
              const n = e.getIn(["requestData", r, a, "bodyValue"]);
              return n
                ? N.Map.isMap(n)
                  ? e.setIn(["requestData", r, a, "bodyValue"], (0, N.Map)())
                  : e.setIn(["requestData", r, a, "bodyValue"], "")
                : e;
            },
          };
        function oas3() {
          return {
            components: jn,
            wrapComponents: Vn,
            statePlugins: {
              spec: { wrapSelectors: E, selectors: v },
              auth: { wrapSelectors: _ },
              oas3: { actions: { ...w }, reducers: ds, selectors: { ...b } },
            },
          };
        }
        const webhooks = ({ specSelectors: e, getComponent: t }) => {
            const r = e.selectWebhooksOperations(),
              a = Object.keys(r),
              n = t("OperationContainer", !0);
            return 0 === a.length
              ? null
              : x().createElement(
                  "div",
                  { className: "webhooks" },
                  x().createElement("h2", null, "Webhooks"),
                  a.map((e) =>
                    x().createElement(
                      "div",
                      { key: `${e}-webhook` },
                      r[e].map((t) =>
                        x().createElement(n, {
                          key: `${e}-${t.method}-webhook`,
                          op: t.operation,
                          tag: "webhooks",
                          method: t.method,
                          path: e,
                          specPath: (0, N.List)(t.specPath),
                          allowTryItOut: !1,
                        }),
                      ),
                    ),
                  ),
                );
          },
          components_license = ({ getComponent: e, specSelectors: t }) => {
            const r = t.selectLicenseNameField(),
              a = t.selectLicenseUrl(),
              n = e("Link");
            return x().createElement(
              "div",
              { className: "info__license" },
              a
                ? x().createElement(
                    "div",
                    { className: "info__license__url" },
                    x().createElement(
                      n,
                      { target: "_blank", href: sanitizeUrl(a) },
                      r,
                    ),
                  )
                : x().createElement("span", null, r),
            );
          },
          components_contact = ({ getComponent: e, specSelectors: t }) => {
            const r = t.selectContactNameField(),
              a = t.selectContactUrl(),
              n = t.selectContactEmailField(),
              s = e("Link");
            return x().createElement(
              "div",
              { className: "info__contact" },
              a &&
                x().createElement(
                  "div",
                  null,
                  x().createElement(
                    s,
                    { href: sanitizeUrl(a), target: "_blank" },
                    r,
                    " - Website",
                  ),
                ),
              n &&
                x().createElement(
                  s,
                  { href: sanitizeUrl(`mailto:${n}`) },
                  a ? `Send email to ${r}` : `Contact ${r}`,
                ),
            );
          },
          oas31_components_info = ({ getComponent: e, specSelectors: t }) => {
            const r = t.version(),
              a = t.url(),
              n = t.basePath(),
              s = t.host(),
              o = t.selectInfoSummaryField(),
              l = t.selectInfoDescriptionField(),
              c = t.selectInfoTitleField(),
              i = t.selectInfoTermsOfServiceUrl(),
              p = t.selectExternalDocsUrl(),
              m = t.selectExternalDocsDescriptionField(),
              u = t.contact(),
              d = t.license(),
              h = e("Markdown", !0),
              g = e("Link"),
              y = e("VersionStamp"),
              f = e("OpenAPIVersion"),
              S = e("InfoUrl"),
              E = e("InfoBasePath"),
              _ = e("License", !0),
              v = e("Contact", !0),
              w = e("JsonSchemaDialect", !0);
            return x().createElement(
              "div",
              { className: "info" },
              x().createElement(
                "hgroup",
                { className: "main" },
                x().createElement(
                  "h2",
                  { className: "title" },
                  c,
                  x().createElement(
                    "span",
                    null,
                    r && x().createElement(y, { version: r }),
                    x().createElement(f, { oasVersion: "3.1" }),
                  ),
                ),
                (s || n) && x().createElement(E, { host: s, basePath: n }),
                a && x().createElement(S, { getComponent: e, url: a }),
              ),
              o && x().createElement("p", { className: "info__summary" }, o),
              x().createElement(
                "div",
                { className: "info__description description" },
                x().createElement(h, { source: l }),
              ),
              i &&
                x().createElement(
                  "div",
                  { className: "info__tos" },
                  x().createElement(
                    g,
                    { target: "_blank", href: sanitizeUrl(i) },
                    "Terms of service",
                  ),
                ),
              u.size > 0 && x().createElement(v, null),
              d.size > 0 && x().createElement(_, null),
              p &&
                x().createElement(
                  g,
                  {
                    className: "info__extdocs",
                    target: "_blank",
                    href: sanitizeUrl(p),
                  },
                  m || p,
                ),
              x().createElement(w, null),
            );
          },
          json_schema_dialect = ({ getComponent: e, specSelectors: t }) => {
            const r = t.selectJsonSchemaDialectField(),
              a = t.selectJsonSchemaDialectDefault(),
              n = e("Link");
            return x().createElement(
              x().Fragment,
              null,
              r &&
                r === a &&
                x().createElement(
                  "p",
                  { className: "info__jsonschemadialect" },
                  "JSON Schema dialect:",
                  " ",
                  x().createElement(
                    n,
                    { target: "_blank", href: sanitizeUrl(r) },
                    r,
                  ),
                ),
              r &&
                r !== a &&
                x().createElement(
                  "div",
                  { className: "error-wrapper" },
                  x().createElement(
                    "div",
                    { className: "no-margin" },
                    x().createElement(
                      "div",
                      { className: "errors" },
                      x().createElement(
                        "div",
                        { className: "errors-wrapper" },
                        x().createElement(
                          "h4",
                          { className: "center" },
                          "Warning",
                        ),
                        x().createElement(
                          "p",
                          { className: "message" },
                          x().createElement(
                            "strong",
                            null,
                            "OpenAPI.jsonSchemaDialect",
                          ),
                          " field contains a value different from the default value of",
                          " ",
                          x().createElement(
                            n,
                            { target: "_blank", href: a },
                            a,
                          ),
                          ". Values different from the default one are currently not supported. Please either omit the field or provide it with the default value.",
                        ),
                      ),
                    ),
                  ),
                ),
            );
          },
          version_pragma_filter = ({
            bypass: e,
            isSwagger2: t,
            isOAS3: r,
            isOAS31: a,
            alsoShow: n,
            children: s,
          }) =>
            e
              ? x().createElement("div", null, s)
              : t && (r || a)
                ? x().createElement(
                    "div",
                    { className: "version-pragma" },
                    n,
                    x().createElement(
                      "div",
                      {
                        className:
                          "version-pragma__message version-pragma__message--ambiguous",
                      },
                      x().createElement(
                        "div",
                        null,
                        x().createElement(
                          "h3",
                          null,
                          "Unable to render this definition",
                        ),
                        x().createElement(
                          "p",
                          null,
                          x().createElement("code", null, "swagger"),
                          " and ",
                          x().createElement("code", null, "openapi"),
                          " fields cannot be present in the same Swagger or OpenAPI definition. Please remove one of the fields.",
                        ),
                        x().createElement(
                          "p",
                          null,
                          "Supported version fields are ",
                          x().createElement("code", null, 'swagger: "2.0"'),
                          " and those that match ",
                          x().createElement("code", null, "openapi: 3.x.y"),
                          " (for example,",
                          " ",
                          x().createElement("code", null, "openapi: 3.1.0"),
                          ").",
                        ),
                      ),
                    ),
                  )
                : t || r || a
                  ? x().createElement("div", null, s)
                  : x().createElement(
                      "div",
                      { className: "version-pragma" },
                      n,
                      x().createElement(
                        "div",
                        {
                          className:
                            "version-pragma__message version-pragma__message--missing",
                        },
                        x().createElement(
                          "div",
                          null,
                          x().createElement(
                            "h3",
                            null,
                            "Unable to render this definition",
                          ),
                          x().createElement(
                            "p",
                            null,
                            "The provided definition does not specify a valid version field.",
                          ),
                          x().createElement(
                            "p",
                            null,
                            "Please indicate a valid Swagger or OpenAPI version field. Supported version fields are ",
                            x().createElement("code", null, 'swagger: "2.0"'),
                            " and those that match ",
                            x().createElement("code", null, "openapi: 3.x.y"),
                            " (for example,",
                            " ",
                            x().createElement("code", null, "openapi: 3.1.0"),
                            ").",
                          ),
                        ),
                      ),
                    ),
          getModelName = (e) =>
            "string" == typeof e && e.includes("#/components/schemas/")
              ? ((e) => {
                  const t = e.replace(/~1/g, "/").replace(/~0/g, "~");
                  try {
                    return decodeURIComponent(t);
                  } catch {
                    return t;
                  }
                })(e.replace(/^.*#\/components\/schemas\//, ""))
              : null,
          hs = (0, C.forwardRef)(
            ({ schema: e, getComponent: t, onToggle: r = () => {} }, a) => {
              const n = t("JSONSchema202012"),
                s = getModelName(e.get("$$ref")),
                o = (0, C.useCallback)(
                  (e, t) => {
                    r(s, t);
                  },
                  [s, r],
                );
              return x().createElement(n, {
                name: s,
                schema: e.toJS(),
                ref: a,
                onExpand: o,
              });
            },
          ),
          gs = hs,
          models = ({
            specActions: e,
            specSelectors: t,
            layoutSelectors: r,
            layoutActions: a,
            getComponent: n,
            getConfigs: s,
            fn: o,
          }) => {
            const l = t.selectSchemas(),
              c = Object.keys(l).length > 0,
              i = ["components", "schemas"],
              { docExpansion: p, defaultModelsExpandDepth: m } = s(),
              u = m > 0 && "none" !== p,
              d = r.isShown(i, u),
              h = n("Collapse"),
              g = n("JSONSchema202012"),
              y = n("ArrowUpIcon"),
              f = n("ArrowDownIcon"),
              { getTitle: S } = o.jsonSchema202012.useFn();
            (0, C.useEffect)(() => {
              const r = d && m > 1,
                a = null != t.specResolvedSubtree(i);
              r && !a && e.requestResolvedSubtree(i);
            }, [d, m]);
            const E = (0, C.useCallback)(() => {
                a.show(i, !d);
              }, [d]),
              _ = (0, C.useCallback)((e) => {
                null !== e && a.readyToScroll(i, e);
              }, []),
              handleJSONSchema202012Ref = (e) => (t) => {
                null !== t && a.readyToScroll([...i, e], t);
              },
              handleJSONSchema202012Expand = (r) => (a, n) => {
                if (n) {
                  const a = [...i, r];
                  null != t.specResolvedSubtree(a) ||
                    e.requestResolvedSubtree([...i, r]);
                }
              };
            return !c || m < 0
              ? null
              : x().createElement(
                  "section",
                  { className: ut()("models", { "is-open": d }), ref: _ },
                  x().createElement(
                    "h4",
                    null,
                    x().createElement(
                      "button",
                      {
                        "aria-expanded": d,
                        className: "models-control",
                        onClick: E,
                      },
                      x().createElement("span", null, "Schemas"),
                      d
                        ? x().createElement(y, null)
                        : x().createElement(f, null),
                    ),
                  ),
                  x().createElement(
                    h,
                    { isOpened: d },
                    Object.entries(l).map(([e, t]) => {
                      const r = S(t, { lookup: "basic" }) || e;
                      return x().createElement(g, {
                        key: e,
                        ref: handleJSONSchema202012Ref(e),
                        schema: t,
                        name: r,
                        onExpand: handleJSONSchema202012Expand(e),
                      });
                    }),
                  ),
                );
          },
          mutual_tls_auth = ({ schema: e, getComponent: t }) => {
            const r = t("JumpToPath", !0);
            return x().createElement(
              "div",
              null,
              x().createElement(
                "h4",
                null,
                e.get("name"),
                " (mutualTLS)",
                " ",
                x().createElement(r, {
                  path: ["securityDefinitions", e.get("name")],
                }),
              ),
              x().createElement(
                "p",
                null,
                "Mutual TLS is required by this API/Operation. Certificates are managed via your Operating System and/or your browser.",
              ),
              x().createElement("p", null, e.get("description")),
            );
          };
        class auths_Auths extends x().Component {
          constructor(e, t) {
            super(e, t), (this.state = {});
          }
          onAuthChange = (e) => {
            let { name: t } = e;
            this.setState({ [t]: e });
          };
          submitAuth = (e) => {
            e.preventDefault();
            let { authActions: t } = this.props;
            t.authorizeWithPersistOption(this.state);
          };
          logoutClick = (e) => {
            e.preventDefault();
            let { authActions: t, definitions: r } = this.props,
              a = r.map((e, t) => t).toArray();
            this.setState(a.reduce((e, t) => ((e[t] = ""), e), {})),
              t.logoutWithPersistOption(a);
          };
          close = (e) => {
            e.preventDefault();
            let { authActions: t } = this.props;
            t.showDefinitions(!1);
          };
          render() {
            let {
              definitions: e,
              getComponent: t,
              authSelectors: r,
              errSelectors: a,
            } = this.props;
            const n = t("AuthItem"),
              s = t("oauth2", !0),
              o = t("Button"),
              l = r.authorized(),
              c = e.filter((e, t) => !!l.get(t)),
              i = e.filter(
                (e) =>
                  "oauth2" !== e.get("type") && "mutualTLS" !== e.get("type"),
              ),
              p = e.filter((e) => "oauth2" === e.get("type")),
              m = e.filter((e) => "mutualTLS" === e.get("type"));
            return x().createElement(
              "div",
              { className: "auth-container" },
              i.size > 0 &&
                x().createElement(
                  "form",
                  { onSubmit: this.submitAuth },
                  i
                    .map((e, r) =>
                      x().createElement(n, {
                        key: r,
                        schema: e,
                        name: r,
                        getComponent: t,
                        onAuthChange: this.onAuthChange,
                        authorized: l,
                        errSelectors: a,
                      }),
                    )
                    .toArray(),
                  x().createElement(
                    "div",
                    { className: "auth-btn-wrapper" },
                    i.size === c.size
                      ? x().createElement(
                          o,
                          {
                            className: "btn modal-btn auth",
                            onClick: this.logoutClick,
                            "aria-label": "Remove authorization",
                          },
                          "Logout",
                        )
                      : x().createElement(
                          o,
                          {
                            type: "submit",
                            className: "btn modal-btn auth authorize",
                            "aria-label": "Apply credentials",
                          },
                          "Authorize",
                        ),
                    x().createElement(
                      o,
                      {
                        className: "btn modal-btn auth btn-done",
                        onClick: this.close,
                      },
                      "Close",
                    ),
                  ),
                ),
              p.size > 0
                ? x().createElement(
                    "div",
                    null,
                    x().createElement(
                      "div",
                      { className: "scope-def" },
                      x().createElement(
                        "p",
                        null,
                        "Scopes are used to grant an application different levels of access to data on behalf of the end user. Each API may declare one or more scopes.",
                      ),
                      x().createElement(
                        "p",
                        null,
                        "API requires the following scopes. Select which ones you want to grant to Swagger UI.",
                      ),
                    ),
                    e
                      .filter((e) => "oauth2" === e.get("type"))
                      .map((e, t) =>
                        x().createElement(
                          "div",
                          { key: t },
                          x().createElement(s, {
                            authorized: l,
                            schema: e,
                            name: t,
                          }),
                        ),
                      )
                      .toArray(),
                  )
                : null,
              m.size > 0 &&
                x().createElement(
                  "div",
                  null,
                  m
                    .map((e, r) =>
                      x().createElement(n, {
                        key: r,
                        schema: e,
                        name: r,
                        getComponent: t,
                        onAuthChange: this.onAuthChange,
                        authorized: l,
                        errSelectors: a,
                      }),
                    )
                    .toArray(),
                ),
            );
          }
        }
        const ys = auths_Auths,
          isOAS31 = (e) => {
            const t = e.get("openapi");
            return "string" == typeof t && /^3\.1\.(?:[1-9]\d*|0)$/.test(t);
          },
          fn_createOnlyOAS31Selector =
            (e) =>
            (t, ...r) =>
            (a) => {
              if (a.getSystem().specSelectors.isOAS31()) {
                const n = e(t, ...r);
                return "function" == typeof n ? n(a) : n;
              }
              return null;
            },
          createOnlyOAS31SelectorWrapper =
            (e) =>
            (t, r) =>
            (a, ...n) => {
              if (r.getSystem().specSelectors.isOAS31()) {
                const s = e(a, ...n);
                return "function" == typeof s ? s(t, r) : s;
              }
              return t(...n);
            },
          fn_createSystemSelector =
            (e) =>
            (t, ...r) =>
            (a) => {
              const n = e(t, a, ...r);
              return "function" == typeof n ? n(a) : n;
            },
          createOnlyOAS31ComponentWrapper = (e) => (t, r) => (a) =>
            r.specSelectors.isOAS31()
              ? x().createElement(
                  e,
                  et()({}, a, { originalComponent: t, getSystem: r.getSystem }),
                )
              : x().createElement(t, a),
          fs = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
            const t = e().getComponent("OAS31License", !0);
            return x().createElement(t, null);
          }),
          Ss = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
            const t = e().getComponent("OAS31Contact", !0);
            return x().createElement(t, null);
          }),
          Es = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
            const t = e().getComponent("OAS31Info", !0);
            return x().createElement(t, null);
          }),
          _s = createOnlyOAS31ComponentWrapper(({ getSystem: e, ...t }) => {
            const r = e(),
              { getComponent: a, fn: n, getConfigs: s } = r,
              o = s(),
              l = a("OAS31Model"),
              c = a("JSONSchema202012"),
              i = a("JSONSchema202012Keyword$schema"),
              p = a("JSONSchema202012Keyword$vocabulary"),
              m = a("JSONSchema202012Keyword$id"),
              u = a("JSONSchema202012Keyword$anchor"),
              d = a("JSONSchema202012Keyword$dynamicAnchor"),
              h = a("JSONSchema202012Keyword$ref"),
              g = a("JSONSchema202012Keyword$dynamicRef"),
              y = a("JSONSchema202012Keyword$defs"),
              f = a("JSONSchema202012Keyword$comment"),
              S = a("JSONSchema202012KeywordAllOf"),
              E = a("JSONSchema202012KeywordAnyOf"),
              _ = a("JSONSchema202012KeywordOneOf"),
              v = a("JSONSchema202012KeywordNot"),
              w = a("JSONSchema202012KeywordIf"),
              b = a("JSONSchema202012KeywordThen"),
              C = a("JSONSchema202012KeywordElse"),
              O = a("JSONSchema202012KeywordDependentSchemas"),
              N = a("JSONSchema202012KeywordPrefixItems"),
              k = a("JSONSchema202012KeywordItems"),
              A = a("JSONSchema202012KeywordContains"),
              I = a("JSONSchema202012KeywordProperties"),
              q = a("JSONSchema202012KeywordPatternProperties"),
              j = a("JSONSchema202012KeywordAdditionalProperties"),
              P = a("JSONSchema202012KeywordPropertyNames"),
              M = a("JSONSchema202012KeywordUnevaluatedItems"),
              R = a("JSONSchema202012KeywordUnevaluatedProperties"),
              T = a("JSONSchema202012KeywordType"),
              J = a("JSONSchema202012KeywordEnum"),
              $ = a("JSONSchema202012KeywordConst"),
              V = a("JSONSchema202012KeywordConstraint"),
              D = a("JSONSchema202012KeywordDependentRequired"),
              K = a("JSONSchema202012KeywordContentSchema"),
              L = a("JSONSchema202012KeywordTitle"),
              U = a("JSONSchema202012KeywordDescription"),
              z = a("JSONSchema202012KeywordDefault"),
              B = a("JSONSchema202012KeywordDeprecated"),
              F = a("JSONSchema202012KeywordReadOnly"),
              W = a("JSONSchema202012KeywordWriteOnly"),
              H = a("JSONSchema202012Accordion"),
              X = a("JSONSchema202012ExpandDeepButton"),
              G = a("JSONSchema202012ChevronRightIcon"),
              Y = a("withJSONSchema202012Context")(l, {
                config: {
                  default$schema:
                    "https://spec.openapis.org/oas/3.1/dialect/base",
                  defaultExpandedLevels: o.defaultModelExpandDepth,
                  includeReadOnly: Boolean(t.includeReadOnly),
                  includeWriteOnly: Boolean(t.includeWriteOnly),
                },
                components: {
                  JSONSchema: c,
                  Keyword$schema: i,
                  Keyword$vocabulary: p,
                  Keyword$id: m,
                  Keyword$anchor: u,
                  Keyword$dynamicAnchor: d,
                  Keyword$ref: h,
                  Keyword$dynamicRef: g,
                  Keyword$defs: y,
                  Keyword$comment: f,
                  KeywordAllOf: S,
                  KeywordAnyOf: E,
                  KeywordOneOf: _,
                  KeywordNot: v,
                  KeywordIf: w,
                  KeywordThen: b,
                  KeywordElse: C,
                  KeywordDependentSchemas: O,
                  KeywordPrefixItems: N,
                  KeywordItems: k,
                  KeywordContains: A,
                  KeywordProperties: I,
                  KeywordPatternProperties: q,
                  KeywordAdditionalProperties: j,
                  KeywordPropertyNames: P,
                  KeywordUnevaluatedItems: M,
                  KeywordUnevaluatedProperties: R,
                  KeywordType: T,
                  KeywordEnum: J,
                  KeywordConst: $,
                  KeywordConstraint: V,
                  KeywordDependentRequired: D,
                  KeywordContentSchema: K,
                  KeywordTitle: L,
                  KeywordDescription: U,
                  KeywordDefault: z,
                  KeywordDeprecated: B,
                  KeywordReadOnly: F,
                  KeywordWriteOnly: W,
                  Accordion: H,
                  ExpandDeepButton: X,
                  ChevronRightIcon: G,
                },
                fn: {
                  upperFirst: n.upperFirst,
                  isExpandable: n.jsonSchema202012.isExpandable,
                  getProperties: n.jsonSchema202012.getProperties,
                },
              });
            return x().createElement(Y, t);
          }),
          vs = _s,
          ws = createOnlyOAS31ComponentWrapper(({ getSystem: e }) => {
            const { getComponent: t, fn: r, getConfigs: a } = e(),
              n = a();
            if (ws.ModelsWithJSONSchemaContext)
              return x().createElement(ws.ModelsWithJSONSchemaContext, null);
            const s = t("OAS31Models", !0),
              o = t("JSONSchema202012"),
              l = t("JSONSchema202012Keyword$schema"),
              c = t("JSONSchema202012Keyword$vocabulary"),
              i = t("JSONSchema202012Keyword$id"),
              p = t("JSONSchema202012Keyword$anchor"),
              m = t("JSONSchema202012Keyword$dynamicAnchor"),
              u = t("JSONSchema202012Keyword$ref"),
              d = t("JSONSchema202012Keyword$dynamicRef"),
              h = t("JSONSchema202012Keyword$defs"),
              g = t("JSONSchema202012Keyword$comment"),
              y = t("JSONSchema202012KeywordAllOf"),
              f = t("JSONSchema202012KeywordAnyOf"),
              S = t("JSONSchema202012KeywordOneOf"),
              E = t("JSONSchema202012KeywordNot"),
              _ = t("JSONSchema202012KeywordIf"),
              v = t("JSONSchema202012KeywordThen"),
              w = t("JSONSchema202012KeywordElse"),
              b = t("JSONSchema202012KeywordDependentSchemas"),
              C = t("JSONSchema202012KeywordPrefixItems"),
              O = t("JSONSchema202012KeywordItems"),
              N = t("JSONSchema202012KeywordContains"),
              k = t("JSONSchema202012KeywordProperties"),
              A = t("JSONSchema202012KeywordPatternProperties"),
              I = t("JSONSchema202012KeywordAdditionalProperties"),
              q = t("JSONSchema202012KeywordPropertyNames"),
              j = t("JSONSchema202012KeywordUnevaluatedItems"),
              P = t("JSONSchema202012KeywordUnevaluatedProperties"),
              M = t("JSONSchema202012KeywordType"),
              R = t("JSONSchema202012KeywordEnum"),
              T = t("JSONSchema202012KeywordConst"),
              J = t("JSONSchema202012KeywordConstraint"),
              $ = t("JSONSchema202012KeywordDependentRequired"),
              V = t("JSONSchema202012KeywordContentSchema"),
              D = t("JSONSchema202012KeywordTitle"),
              K = t("JSONSchema202012KeywordDescription"),
              L = t("JSONSchema202012KeywordDefault"),
              U = t("JSONSchema202012KeywordDeprecated"),
              z = t("JSONSchema202012KeywordReadOnly"),
              B = t("JSONSchema202012KeywordWriteOnly"),
              F = t("JSONSchema202012Accordion"),
              W = t("JSONSchema202012ExpandDeepButton"),
              H = t("JSONSchema202012ChevronRightIcon"),
              X = t("withJSONSchema202012Context");
            return (
              (ws.ModelsWithJSONSchemaContext = X(s, {
                config: {
                  default$schema:
                    "https://spec.openapis.org/oas/3.1/dialect/base",
                  defaultExpandedLevels: n.defaultModelsExpandDepth - 1,
                  includeReadOnly: !0,
                  includeWriteOnly: !0,
                },
                components: {
                  JSONSchema: o,
                  Keyword$schema: l,
                  Keyword$vocabulary: c,
                  Keyword$id: i,
                  Keyword$anchor: p,
                  Keyword$dynamicAnchor: m,
                  Keyword$ref: u,
                  Keyword$dynamicRef: d,
                  Keyword$defs: h,
                  Keyword$comment: g,
                  KeywordAllOf: y,
                  KeywordAnyOf: f,
                  KeywordOneOf: S,
                  KeywordNot: E,
                  KeywordIf: _,
                  KeywordThen: v,
                  KeywordElse: w,
                  KeywordDependentSchemas: b,
                  KeywordPrefixItems: C,
                  KeywordItems: O,
                  KeywordContains: N,
                  KeywordProperties: k,
                  KeywordPatternProperties: A,
                  KeywordAdditionalProperties: I,
                  KeywordPropertyNames: q,
                  KeywordUnevaluatedItems: j,
                  KeywordUnevaluatedProperties: P,
                  KeywordType: M,
                  KeywordEnum: R,
                  KeywordConst: T,
                  KeywordConstraint: J,
                  KeywordDependentRequired: $,
                  KeywordContentSchema: V,
                  KeywordTitle: D,
                  KeywordDescription: K,
                  KeywordDefault: L,
                  KeywordDeprecated: U,
                  KeywordReadOnly: z,
                  KeywordWriteOnly: B,
                  Accordion: F,
                  ExpandDeepButton: W,
                  ChevronRightIcon: H,
                },
                fn: {
                  upperFirst: r.upperFirst,
                  isExpandable: r.jsonSchema202012.isExpandable,
                  getProperties: r.jsonSchema202012.getProperties,
                },
              })),
              x().createElement(ws.ModelsWithJSONSchemaContext, null)
            );
          });
        ws.ModelsWithJSONSchemaContext = null;
        const bs = ws,
          wrap_components_version_pragma_filter = (e, t) => (e) => {
            const r = t.specSelectors.isOAS31(),
              a = t.getComponent("OAS31VersionPragmaFilter");
            return x().createElement(a, et()({ isOAS31: r }, e));
          },
          Cs = createOnlyOAS31ComponentWrapper(
            ({ originalComponent: e, ...t }) => {
              const { getComponent: r, schema: a } = t,
                n = r("MutualTLSAuth", !0);
              return "mutualTLS" === a.get("type")
                ? x().createElement(n, { schema: a })
                : x().createElement(e, t);
            },
          ),
          xs = Cs,
          Os = createOnlyOAS31ComponentWrapper(({ getSystem: e, ...t }) => {
            const r = e().getComponent("OAS31Auths", !0);
            return x().createElement(r, t);
          }),
          Ns = (0, N.Map)(),
          ks = (0, we.createSelector)(
            (e, t) => t.specSelectors.specJson(),
            isOAS31,
          ),
          selectors_webhooks = () => (e) => {
            const t = e.specSelectors.specJson().get("webhooks");
            return N.Map.isMap(t) ? t : Ns;
          },
          As = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.webhooks(),
              (e, t) => t.specSelectors.validOperationMethods(),
              (e, t) => t.specSelectors.specResolvedSubtree(["webhooks"]),
            ],
            (e, t) =>
              e
                .reduce(
                  (e, r, a) => {
                    if (!N.Map.isMap(r)) return e;
                    const n = r
                      .entrySeq()
                      .filter(([e]) => t.includes(e))
                      .map(([e, t]) => ({
                        operation: (0, N.Map)({ operation: t }),
                        method: e,
                        path: a,
                        specPath: ["webhooks", a, e],
                      }));
                    return e.concat(n);
                  },
                  (0, N.List)(),
                )
                .groupBy((e) => e.path)
                .map((e) => e.toArray())
                .toObject(),
          ),
          selectors_license = () => (e) => {
            const t = e.specSelectors.info().get("license");
            return N.Map.isMap(t) ? t : Ns;
          },
          selectLicenseNameField = () => (e) =>
            e.specSelectors.license().get("name", "License"),
          selectLicenseUrlField = () => (e) =>
            e.specSelectors.license().get("url"),
          Is = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.url(),
              (e, t) => t.oas3Selectors.selectedServer(),
              (e, t) => t.specSelectors.selectLicenseUrlField(),
            ],
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            },
          ),
          selectLicenseIdentifierField = () => (e) =>
            e.specSelectors.license().get("identifier"),
          selectors_contact = () => (e) => {
            const t = e.specSelectors.info().get("contact");
            return N.Map.isMap(t) ? t : Ns;
          },
          selectContactNameField = () => (e) =>
            e.specSelectors.contact().get("name", "the developer"),
          selectContactEmailField = () => (e) =>
            e.specSelectors.contact().get("email"),
          selectContactUrlField = () => (e) =>
            e.specSelectors.contact().get("url"),
          qs = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.url(),
              (e, t) => t.oas3Selectors.selectedServer(),
              (e, t) => t.specSelectors.selectContactUrlField(),
            ],
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            },
          ),
          selectInfoTitleField = () => (e) =>
            e.specSelectors.info().get("title"),
          selectInfoSummaryField = () => (e) =>
            e.specSelectors.info().get("summary"),
          selectInfoDescriptionField = () => (e) =>
            e.specSelectors.info().get("description"),
          selectInfoTermsOfServiceField = () => (e) =>
            e.specSelectors.info().get("termsOfService"),
          js = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.url(),
              (e, t) => t.oas3Selectors.selectedServer(),
              (e, t) => t.specSelectors.selectInfoTermsOfServiceField(),
            ],
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            },
          ),
          selectExternalDocsDescriptionField = () => (e) =>
            e.specSelectors.externalDocs().get("description"),
          selectExternalDocsUrlField = () => (e) =>
            e.specSelectors.externalDocs().get("url"),
          Ps = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.url(),
              (e, t) => t.oas3Selectors.selectedServer(),
              (e, t) => t.specSelectors.selectExternalDocsUrlField(),
            ],
            (e, t, r) => {
              if (r) return safeBuildUrl(r, e, { selectedServer: t });
            },
          ),
          selectJsonSchemaDialectField = () => (e) =>
            e.specSelectors.specJson().get("jsonSchemaDialect"),
          selectJsonSchemaDialectDefault = () =>
            "https://spec.openapis.org/oas/3.1/dialect/base",
          Ms = (0, we.createSelector)(
            (e, t) => t.specSelectors.definitions(),
            (e, t) =>
              t.specSelectors.specResolvedSubtree(["components", "schemas"]),
            (e, t) =>
              N.Map.isMap(e)
                ? N.Map.isMap(t)
                  ? Object.entries(e.toJS()).reduce((e, [r, a]) => {
                      const n = t.get(r);
                      return (e[r] = n?.toJS() || a), e;
                    }, {})
                  : e.toJS()
                : {},
          ),
          wrap_selectors_isOAS3 =
            (e, t) =>
            (r, ...a) =>
              t.specSelectors.isOAS31() || e(...a),
          Rs = createOnlyOAS31SelectorWrapper(
            () => (e, t) => t.oas31Selectors.selectLicenseUrl(),
          ),
          Ts = createOnlyOAS31SelectorWrapper(() => (e, t) => {
            const r = t.specSelectors.securityDefinitions();
            let a = e();
            return r
              ? (r.entrySeq().forEach(([e, t]) => {
                  "mutualTLS" === t.get("type") &&
                    (a = a.push(new N.Map({ [e]: t })));
                }),
                a)
              : a;
          }),
          Js = (0, we.createSelector)(
            [
              (e, t) => t.specSelectors.url(),
              (e, t) => t.oas3Selectors.selectedServer(),
              (e, t) => t.specSelectors.selectLicenseUrlField(),
              (e, t) => t.specSelectors.selectLicenseIdentifierField(),
            ],
            (e, t, r, a) =>
              r
                ? safeBuildUrl(r, e, { selectedServer: t })
                : a
                  ? `https://spdx.org/licenses/${a}.html`
                  : void 0,
          ),
          keywords_Example = ({ schema: e, getSystem: t }) => {
            const { fn: r } = t(),
              { hasKeyword: a, stringify: n } = r.jsonSchema202012.useFn();
            return a(e, "example")
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--example",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "Example",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const",
                    },
                    n(e.example),
                  ),
                )
              : null;
          },
          keywords_Xml = ({ schema: e, getSystem: t }) => {
            const r = e?.xml || {},
              { fn: a, getComponent: n } = t(),
              { useIsExpandedDeeply: s, useComponent: o } = a.jsonSchema202012,
              l = s(),
              c = !!(r.name || r.namespace || r.prefix),
              [i, p] = (0, C.useState)(l),
              [m, u] = (0, C.useState)(!1),
              d = o("Accordion"),
              h = o("ExpandDeepButton"),
              g = n("JSONSchema202012DeepExpansionContext")(),
              y = (0, C.useCallback)(() => {
                p((e) => !e);
              }, []),
              f = (0, C.useCallback)((e, t) => {
                p(t), u(t);
              }, []);
            return 0 === Object.keys(r).length
              ? null
              : x().createElement(
                  g.Provider,
                  { value: m },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--xml",
                    },
                    c
                      ? x().createElement(
                          x().Fragment,
                          null,
                          x().createElement(
                            d,
                            { expanded: i, onChange: y },
                            x().createElement(
                              "span",
                              {
                                className:
                                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                              },
                              "XML",
                            ),
                          ),
                          x().createElement(h, { expanded: i, onClick: f }),
                        )
                      : x().createElement(
                          "span",
                          {
                            className:
                              "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                          },
                          "XML",
                        ),
                    !0 === r.attribute &&
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted",
                        },
                        "attribute",
                      ),
                    !0 === r.wrapped &&
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted",
                        },
                        "wrapped",
                      ),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !i,
                          },
                        ),
                      },
                      i &&
                        x().createElement(
                          x().Fragment,
                          null,
                          r.name &&
                            x().createElement(
                              "li",
                              { className: "json-schema-2020-12-property" },
                              x().createElement(
                                "div",
                                {
                                  className:
                                    "json-schema-2020-12-keyword json-schema-2020-12-keyword",
                                },
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                                  },
                                  "name",
                                ),
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                                  },
                                  r.name,
                                ),
                              ),
                            ),
                          r.namespace &&
                            x().createElement(
                              "li",
                              { className: "json-schema-2020-12-property" },
                              x().createElement(
                                "div",
                                { className: "json-schema-2020-12-keyword" },
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                                  },
                                  "namespace",
                                ),
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                                  },
                                  r.namespace,
                                ),
                              ),
                            ),
                          r.prefix &&
                            x().createElement(
                              "li",
                              { className: "json-schema-2020-12-property" },
                              x().createElement(
                                "div",
                                { className: "json-schema-2020-12-keyword" },
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                                  },
                                  "prefix",
                                ),
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                                  },
                                  r.prefix,
                                ),
                              ),
                            ),
                        ),
                    ),
                  ),
                );
          },
          Discriminator_DiscriminatorMapping = ({ discriminator: e }) => {
            const t = e?.mapping || {};
            return 0 === Object.keys(t).length
              ? null
              : Object.entries(t).map(([e, t]) =>
                  x().createElement(
                    "div",
                    {
                      key: `${e}-${t}`,
                      className: "json-schema-2020-12-keyword",
                    },
                    x().createElement(
                      "span",
                      {
                        className:
                          "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                      },
                      e,
                    ),
                    x().createElement(
                      "span",
                      {
                        className:
                          "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                      },
                      t,
                    ),
                  ),
                );
          },
          Discriminator_Discriminator = ({ schema: e, getSystem: t }) => {
            const r = e?.discriminator || {},
              { fn: a, getComponent: n } = t(),
              { useIsExpandedDeeply: s, useComponent: o } = a.jsonSchema202012,
              l = s(),
              c = !!r.mapping,
              [i, p] = (0, C.useState)(l),
              [m, u] = (0, C.useState)(!1),
              d = o("Accordion"),
              h = o("ExpandDeepButton"),
              g = n("JSONSchema202012DeepExpansionContext")(),
              y = (0, C.useCallback)(() => {
                p((e) => !e);
              }, []),
              f = (0, C.useCallback)((e, t) => {
                p(t), u(t);
              }, []);
            return 0 === Object.keys(r).length
              ? null
              : x().createElement(
                  g.Provider,
                  { value: m },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--discriminator",
                    },
                    c
                      ? x().createElement(
                          x().Fragment,
                          null,
                          x().createElement(
                            d,
                            { expanded: i, onChange: y },
                            x().createElement(
                              "span",
                              {
                                className:
                                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                              },
                              "Discriminator",
                            ),
                          ),
                          x().createElement(h, { expanded: i, onClick: f }),
                        )
                      : x().createElement(
                          "span",
                          {
                            className:
                              "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                          },
                          "Discriminator",
                        ),
                    r.propertyName &&
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted",
                        },
                        r.propertyName,
                      ),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !i,
                          },
                        ),
                      },
                      i &&
                        x().createElement(
                          "li",
                          { className: "json-schema-2020-12-property" },
                          x().createElement(
                            Discriminator_DiscriminatorMapping,
                            { discriminator: r },
                          ),
                        ),
                    ),
                  ),
                );
          },
          keywords_ExternalDocs = ({ schema: e, getSystem: t }) => {
            const r = e?.externalDocs || {},
              { fn: a, getComponent: n } = t(),
              { useIsExpandedDeeply: s, useComponent: o } = a.jsonSchema202012,
              l = s(),
              c = !(!r.description && !r.url),
              [i, p] = (0, C.useState)(l),
              [m, u] = (0, C.useState)(!1),
              d = o("Accordion"),
              h = o("ExpandDeepButton"),
              g = n("JSONSchema202012KeywordDescription"),
              y = n("Link"),
              f = n("JSONSchema202012DeepExpansionContext")(),
              S = (0, C.useCallback)(() => {
                p((e) => !e);
              }, []),
              E = (0, C.useCallback)((e, t) => {
                p(t), u(t);
              }, []);
            return 0 === Object.keys(r).length
              ? null
              : x().createElement(
                  f.Provider,
                  { value: m },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--externalDocs",
                    },
                    c
                      ? x().createElement(
                          x().Fragment,
                          null,
                          x().createElement(
                            d,
                            { expanded: i, onChange: S },
                            x().createElement(
                              "span",
                              {
                                className:
                                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                              },
                              "External documentation",
                            ),
                          ),
                          x().createElement(h, { expanded: i, onClick: E }),
                        )
                      : x().createElement(
                          "span",
                          {
                            className:
                              "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                          },
                          "External documentation",
                        ),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !i,
                          },
                        ),
                      },
                      i &&
                        x().createElement(
                          x().Fragment,
                          null,
                          r.description &&
                            x().createElement(
                              "li",
                              { className: "json-schema-2020-12-property" },
                              x().createElement(g, { schema: r, getSystem: t }),
                            ),
                          r.url &&
                            x().createElement(
                              "li",
                              { className: "json-schema-2020-12-property" },
                              x().createElement(
                                "div",
                                {
                                  className:
                                    "json-schema-2020-12-keyword json-schema-2020-12-keyword",
                                },
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                                  },
                                  "url",
                                ),
                                x().createElement(
                                  "span",
                                  {
                                    className:
                                      "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                                  },
                                  x().createElement(
                                    y,
                                    {
                                      target: "_blank",
                                      href: sanitizeUrl(r.url),
                                    },
                                    r.url,
                                  ),
                                ),
                              ),
                            ),
                        ),
                    ),
                  ),
                );
          },
          keywords_Description = ({ schema: e, getSystem: t }) => {
            if (!e?.description) return null;
            const { getComponent: r } = t(),
              a = r("Markdown");
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--description",
              },
              x().createElement(
                "div",
                {
                  className:
                    "json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary",
                },
                x().createElement(a, { source: e.description }),
              ),
            );
          },
          $s = createOnlyOAS31ComponentWrapper(keywords_Description),
          Vs = createOnlyOAS31ComponentWrapper(
            ({ schema: e, getSystem: t, originalComponent: r }) => {
              const { getComponent: a } = t(),
                n = a("JSONSchema202012KeywordDiscriminator"),
                s = a("JSONSchema202012KeywordXml"),
                o = a("JSONSchema202012KeywordExample"),
                l = a("JSONSchema202012KeywordExternalDocs");
              return x().createElement(
                x().Fragment,
                null,
                x().createElement(r, { schema: e }),
                x().createElement(n, { schema: e, getSystem: t }),
                x().createElement(s, { schema: e, getSystem: t }),
                x().createElement(l, { schema: e, getSystem: t }),
                x().createElement(o, { schema: e, getSystem: t }),
              );
            },
          ),
          Ds = Vs,
          keywords_Properties = ({ schema: e, getSystem: t }) => {
            const { fn: r } = t(),
              { useComponent: a } = r.jsonSchema202012,
              { getDependentRequired: n, getProperties: s } =
                r.jsonSchema202012.useFn(),
              o = r.jsonSchema202012.useConfig(),
              l = Array.isArray(e?.required) ? e.required : [],
              c = a("JSONSchema"),
              i = s(e, o);
            return 0 === Object.keys(i).length
              ? null
              : x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--properties",
                  },
                  x().createElement(
                    "ul",
                    null,
                    Object.entries(i).map(([t, r]) => {
                      const a = l.includes(t),
                        s = n(t, e);
                      return x().createElement(
                        "li",
                        {
                          key: t,
                          className: ut()("json-schema-2020-12-property", {
                            "json-schema-2020-12-property--required": a,
                          }),
                        },
                        x().createElement(c, {
                          name: t,
                          schema: r,
                          dependentRequired: s,
                        }),
                      );
                    }),
                  ),
                );
          },
          Ks = createOnlyOAS31ComponentWrapper(keywords_Properties),
          getProperties = (e, { includeReadOnly: t, includeWriteOnly: r }) => {
            if (!e?.properties) return {};
            const a = Object.entries(e.properties).filter(
              ([, e]) =>
                (!(!0 === e?.readOnly) || t) && (!(!0 === e?.writeOnly) || r),
            );
            return Object.fromEntries(a);
          };
        const Ls = function oas31_after_load_afterLoad({
            fn: e,
            getSystem: t,
          }) {
            if (e.jsonSchema202012) {
              const r = ((e, t) => {
                const { fn: r } = t();
                if ("function" != typeof e) return null;
                const { hasKeyword: a } = r.jsonSchema202012;
                return (t) =>
                  e(t) ||
                  a(t, "example") ||
                  t?.xml ||
                  t?.discriminator ||
                  t?.externalDocs;
              })(e.jsonSchema202012.isExpandable, t);
              Object.assign(this.fn.jsonSchema202012, {
                isExpandable: r,
                getProperties,
              });
            }
            if ("function" == typeof e.sampleFromSchema && e.jsonSchema202012) {
              const r = ((e, t) => {
                const { fn: r, specSelectors: a } = t;
                return Object.fromEntries(
                  Object.entries(e).map(([e, t]) => {
                    const n = r[e];
                    return [
                      e,
                      (...e) =>
                        a.isOAS31()
                          ? t(...e)
                          : "function" == typeof n
                            ? n(...e)
                            : void 0,
                    ];
                  }),
                );
              })(
                {
                  sampleFromSchema: e.jsonSchema202012.sampleFromSchema,
                  sampleFromSchemaGeneric:
                    e.jsonSchema202012.sampleFromSchemaGeneric,
                  createXMLExample: e.jsonSchema202012.createXMLExample,
                  memoizedSampleFromSchema:
                    e.jsonSchema202012.memoizedSampleFromSchema,
                  memoizedCreateXMLExample:
                    e.jsonSchema202012.memoizedCreateXMLExample,
                  getJsonSampleSchema: e.jsonSchema202012.getJsonSampleSchema,
                  getYamlSampleSchema: e.jsonSchema202012.getYamlSampleSchema,
                  getXmlSampleSchema: e.jsonSchema202012.getXmlSampleSchema,
                  getSampleSchema: e.jsonSchema202012.getSampleSchema,
                  mergeJsonSchema: e.jsonSchema202012.mergeJsonSchema,
                },
                t(),
              );
              Object.assign(this.fn, r);
            }
          },
          oas31 = ({ fn: e }) => {
            const t = e.createSystemSelector || fn_createSystemSelector,
              r = e.createOnlyOAS31Selector || fn_createOnlyOAS31Selector;
            return {
              afterLoad: Ls,
              fn: {
                isOAS31,
                createSystemSelector: fn_createSystemSelector,
                createOnlyOAS31Selector: fn_createOnlyOAS31Selector,
              },
              components: {
                Webhooks: webhooks,
                JsonSchemaDialect: json_schema_dialect,
                MutualTLSAuth: mutual_tls_auth,
                OAS31Info: oas31_components_info,
                OAS31License: components_license,
                OAS31Contact: components_contact,
                OAS31VersionPragmaFilter: version_pragma_filter,
                OAS31Model: gs,
                OAS31Models: models,
                OAS31Auths: ys,
                JSONSchema202012KeywordExample: keywords_Example,
                JSONSchema202012KeywordXml: keywords_Xml,
                JSONSchema202012KeywordDiscriminator:
                  Discriminator_Discriminator,
                JSONSchema202012KeywordExternalDocs: keywords_ExternalDocs,
              },
              wrapComponents: {
                InfoContainer: Es,
                License: fs,
                Contact: Ss,
                VersionPragmaFilter: wrap_components_version_pragma_filter,
                Model: vs,
                Models: bs,
                AuthItem: xs,
                auths: Os,
                JSONSchema202012KeywordDescription: $s,
                JSONSchema202012KeywordDefault: Ds,
                JSONSchema202012KeywordProperties: Ks,
              },
              statePlugins: {
                auth: { wrapSelectors: { definitionsToAuthorize: Ts } },
                spec: {
                  selectors: {
                    isOAS31: t(ks),
                    license: selectors_license,
                    selectLicenseNameField,
                    selectLicenseUrlField,
                    selectLicenseIdentifierField: r(
                      selectLicenseIdentifierField,
                    ),
                    selectLicenseUrl: t(Is),
                    contact: selectors_contact,
                    selectContactNameField,
                    selectContactEmailField,
                    selectContactUrlField,
                    selectContactUrl: t(qs),
                    selectInfoTitleField,
                    selectInfoSummaryField: r(selectInfoSummaryField),
                    selectInfoDescriptionField,
                    selectInfoTermsOfServiceField,
                    selectInfoTermsOfServiceUrl: t(js),
                    selectExternalDocsDescriptionField,
                    selectExternalDocsUrlField,
                    selectExternalDocsUrl: t(Ps),
                    webhooks: r(selectors_webhooks),
                    selectWebhooksOperations: r(t(As)),
                    selectJsonSchemaDialectField,
                    selectJsonSchemaDialectDefault,
                    selectSchemas: t(Ms),
                  },
                  wrapSelectors: {
                    isOAS3: wrap_selectors_isOAS3,
                    selectLicenseUrl: Rs,
                  },
                },
                oas31: { selectors: { selectLicenseUrl: r(t(Js)) } },
              },
            };
          },
          Us = ke().object,
          zs = ke().bool,
          Bs = (ke().oneOfType([Us, zs]), (0, C.createContext)(null));
        Bs.displayName = "JSONSchemaContext";
        const Fs = (0, C.createContext)(0);
        Fs.displayName = "JSONSchemaLevelContext";
        const Ws = (0, C.createContext)(!1);
        Ws.displayName = "JSONSchemaDeepExpansionContext";
        const Hs = (0, C.createContext)(new Set()),
          useConfig = () => {
            const { config: e } = (0, C.useContext)(Bs);
            return e;
          },
          useComponent = (e) => {
            const { components: t } = (0, C.useContext)(Bs);
            return t[e] || null;
          },
          useFn = (e = void 0) => {
            const { fn: t } = (0, C.useContext)(Bs);
            return void 0 !== e ? t[e] : t;
          },
          useLevel = () => {
            const e = (0, C.useContext)(Fs);
            return [e, e + 1];
          },
          useIsExpanded = () => {
            const [e] = useLevel(),
              { defaultExpandedLevels: t } = useConfig();
            return t - e > 0;
          },
          useIsExpandedDeeply = () => (0, C.useContext)(Ws),
          useRenderedSchemas = (e = void 0) => {
            if (void 0 === e) return (0, C.useContext)(Hs);
            const t = (0, C.useContext)(Hs);
            return new Set([...t, e]);
          },
          Xs = (0, C.forwardRef)(
            (
              {
                schema: e,
                name: t = "",
                dependentRequired: r = [],
                onExpand: a = () => {},
              },
              n,
            ) => {
              const s = useFn(),
                o = useIsExpanded(),
                l = useIsExpandedDeeply(),
                [c, i] = (0, C.useState)(o || l),
                [p, m] = (0, C.useState)(l),
                [u, d] = useLevel(),
                h = (() => {
                  const [e] = useLevel();
                  return e > 0;
                })(),
                g = s.isExpandable(e) || r.length > 0,
                y = ((e) => useRenderedSchemas().has(e))(e),
                f = useRenderedSchemas(e),
                S = s.stringifyConstraints(e),
                E = useComponent("Accordion"),
                _ = useComponent("Keyword$schema"),
                v = useComponent("Keyword$vocabulary"),
                w = useComponent("Keyword$id"),
                b = useComponent("Keyword$anchor"),
                O = useComponent("Keyword$dynamicAnchor"),
                N = useComponent("Keyword$ref"),
                k = useComponent("Keyword$dynamicRef"),
                A = useComponent("Keyword$defs"),
                I = useComponent("Keyword$comment"),
                q = useComponent("KeywordAllOf"),
                j = useComponent("KeywordAnyOf"),
                P = useComponent("KeywordOneOf"),
                M = useComponent("KeywordNot"),
                R = useComponent("KeywordIf"),
                T = useComponent("KeywordThen"),
                J = useComponent("KeywordElse"),
                $ = useComponent("KeywordDependentSchemas"),
                V = useComponent("KeywordPrefixItems"),
                D = useComponent("KeywordItems"),
                K = useComponent("KeywordContains"),
                L = useComponent("KeywordProperties"),
                U = useComponent("KeywordPatternProperties"),
                z = useComponent("KeywordAdditionalProperties"),
                B = useComponent("KeywordPropertyNames"),
                F = useComponent("KeywordUnevaluatedItems"),
                W = useComponent("KeywordUnevaluatedProperties"),
                H = useComponent("KeywordType"),
                X = useComponent("KeywordEnum"),
                G = useComponent("KeywordConst"),
                Y = useComponent("KeywordConstraint"),
                Q = useComponent("KeywordDependentRequired"),
                Z = useComponent("KeywordContentSchema"),
                ee = useComponent("KeywordTitle"),
                te = useComponent("KeywordDescription"),
                re = useComponent("KeywordDefault"),
                ae = useComponent("KeywordDeprecated"),
                ne = useComponent("KeywordReadOnly"),
                se = useComponent("KeywordWriteOnly"),
                oe = useComponent("ExpandDeepButton");
              (0, C.useEffect)(() => {
                m(l);
              }, [l]),
                (0, C.useEffect)(() => {
                  m(p);
                }, [p]);
              const le = (0, C.useCallback)(
                  (e, t) => {
                    i(t), !t && m(!1), a(e, t, !1);
                  },
                  [a],
                ),
                ce = (0, C.useCallback)(
                  (e, t) => {
                    i(t), m(t), a(e, t, !0);
                  },
                  [a],
                );
              return x().createElement(
                Fs.Provider,
                { value: d },
                x().createElement(
                  Ws.Provider,
                  { value: p },
                  x().createElement(
                    Hs.Provider,
                    { value: f },
                    x().createElement(
                      "article",
                      {
                        ref: n,
                        "data-json-schema-level": u,
                        className: ut()("json-schema-2020-12", {
                          "json-schema-2020-12--embedded": h,
                          "json-schema-2020-12--circular": y,
                        }),
                      },
                      x().createElement(
                        "div",
                        { className: "json-schema-2020-12-head" },
                        g && !y
                          ? x().createElement(
                              x().Fragment,
                              null,
                              x().createElement(
                                E,
                                { expanded: c, onChange: le },
                                x().createElement(ee, { title: t, schema: e }),
                              ),
                              x().createElement(oe, {
                                expanded: c,
                                onClick: ce,
                              }),
                            )
                          : x().createElement(ee, { title: t, schema: e }),
                        x().createElement(ae, { schema: e }),
                        x().createElement(ne, { schema: e }),
                        x().createElement(se, { schema: e }),
                        x().createElement(H, { schema: e, isCircular: y }),
                        S.length > 0 &&
                          S.map((e) =>
                            x().createElement(Y, {
                              key: `${e.scope}-${e.value}`,
                              constraint: e,
                            }),
                          ),
                      ),
                      x().createElement(
                        "div",
                        {
                          className: ut()("json-schema-2020-12-body", {
                            "json-schema-2020-12-body--collapsed": !c,
                          }),
                        },
                        c &&
                          x().createElement(
                            x().Fragment,
                            null,
                            x().createElement(te, { schema: e }),
                            !y &&
                              g &&
                              x().createElement(
                                x().Fragment,
                                null,
                                x().createElement(L, { schema: e }),
                                x().createElement(U, { schema: e }),
                                x().createElement(z, { schema: e }),
                                x().createElement(W, { schema: e }),
                                x().createElement(B, { schema: e }),
                                x().createElement(q, { schema: e }),
                                x().createElement(j, { schema: e }),
                                x().createElement(P, { schema: e }),
                                x().createElement(M, { schema: e }),
                                x().createElement(R, { schema: e }),
                                x().createElement(T, { schema: e }),
                                x().createElement(J, { schema: e }),
                                x().createElement($, { schema: e }),
                                x().createElement(V, { schema: e }),
                                x().createElement(D, { schema: e }),
                                x().createElement(F, { schema: e }),
                                x().createElement(K, { schema: e }),
                                x().createElement(Z, { schema: e }),
                              ),
                            x().createElement(X, { schema: e }),
                            x().createElement(G, { schema: e }),
                            x().createElement(Q, {
                              schema: e,
                              dependentRequired: r,
                            }),
                            x().createElement(re, { schema: e }),
                            x().createElement(_, { schema: e }),
                            x().createElement(v, { schema: e }),
                            x().createElement(w, { schema: e }),
                            x().createElement(b, { schema: e }),
                            x().createElement(O, { schema: e }),
                            x().createElement(N, { schema: e }),
                            !y && g && x().createElement(A, { schema: e }),
                            x().createElement(k, { schema: e }),
                            x().createElement(I, { schema: e }),
                          ),
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
          Gs = Xs,
          keywords_$schema = ({ schema: e }) =>
            e?.$schema
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$schema",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$schema",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$schema,
                  ),
                )
              : null,
          $vocabulary_$vocabulary = ({ schema: e }) => {
            const t = useIsExpanded(),
              r = useIsExpandedDeeply(),
              [a, n] = (0, C.useState)(t || r),
              s = useComponent("Accordion"),
              o = (0, C.useCallback)(() => {
                n((e) => !e);
              }, []);
            return e?.$vocabulary
              ? "object" != typeof e.$vocabulary
                ? null
                : x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--$vocabulary",
                    },
                    x().createElement(
                      s,
                      { expanded: a, onChange: o },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                        },
                        "$vocabulary",
                      ),
                    ),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      null,
                      a &&
                        Object.entries(e.$vocabulary).map(([e, t]) =>
                          x().createElement(
                            "li",
                            {
                              key: e,
                              className: ut()(
                                "json-schema-2020-12-$vocabulary-uri",
                                {
                                  "json-schema-2020-12-$vocabulary-uri--disabled":
                                    !t,
                                },
                              ),
                            },
                            x().createElement(
                              "span",
                              {
                                className:
                                  "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                              },
                              e,
                            ),
                          ),
                        ),
                    ),
                  )
              : null;
          },
          keywords_$id = ({ schema: e }) =>
            e?.$id
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$id",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$id",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$id,
                  ),
                )
              : null,
          keywords_$anchor = ({ schema: e }) =>
            e?.$anchor
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$anchor",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$anchor",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$anchor,
                  ),
                )
              : null,
          keywords_$dynamicAnchor = ({ schema: e }) =>
            e?.$dynamicAnchor
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicAnchor",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$dynamicAnchor",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$dynamicAnchor,
                  ),
                )
              : null,
          keywords_$ref = ({ schema: e }) =>
            e?.$ref
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$ref",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$ref",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$ref,
                  ),
                )
              : null,
          keywords_$dynamicRef = ({ schema: e }) =>
            e?.$dynamicRef
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$dynamicRef",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$dynamicRef",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$dynamicRef,
                  ),
                )
              : null,
          keywords_$defs = ({ schema: e }) => {
            const t = e?.$defs || {},
              r = useIsExpanded(),
              a = useIsExpandedDeeply(),
              [n, s] = (0, C.useState)(r || a),
              [o, l] = (0, C.useState)(!1),
              c = useComponent("Accordion"),
              i = useComponent("ExpandDeepButton"),
              p = useComponent("JSONSchema"),
              m = (0, C.useCallback)(() => {
                s((e) => !e);
              }, []),
              u = (0, C.useCallback)((e, t) => {
                s(t), l(t);
              }, []);
            return 0 === Object.keys(t).length
              ? null
              : x().createElement(
                  Ws.Provider,
                  { value: o },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--$defs",
                    },
                    x().createElement(
                      c,
                      { expanded: n, onChange: m },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                        },
                        "$defs",
                      ),
                    ),
                    x().createElement(i, { expanded: n, onClick: u }),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !n,
                          },
                        ),
                      },
                      n &&
                        x().createElement(
                          x().Fragment,
                          null,
                          Object.entries(t).map(([e, t]) =>
                            x().createElement(
                              "li",
                              {
                                key: e,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(p, { name: e, schema: t }),
                            ),
                          ),
                        ),
                    ),
                  ),
                );
          },
          keywords_$comment = ({ schema: e }) =>
            e?.$comment
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--$comment",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--secondary",
                    },
                    "$comment",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--secondary",
                    },
                    e.$comment,
                  ),
                )
              : null,
          keywords_AllOf = ({ schema: e }) => {
            const t = e?.allOf || [],
              r = useFn(),
              a = useIsExpanded(),
              n = useIsExpandedDeeply(),
              [s, o] = (0, C.useState)(a || n),
              [l, c] = (0, C.useState)(!1),
              i = useComponent("Accordion"),
              p = useComponent("ExpandDeepButton"),
              m = useComponent("JSONSchema"),
              u = useComponent("KeywordType"),
              d = (0, C.useCallback)(() => {
                o((e) => !e);
              }, []),
              h = (0, C.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(t) && 0 !== t.length
              ? x().createElement(
                  Ws.Provider,
                  { value: l },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--allOf",
                    },
                    x().createElement(
                      i,
                      { expanded: s, onChange: d },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                        },
                        "All of",
                      ),
                    ),
                    x().createElement(p, { expanded: s, onClick: h }),
                    x().createElement(u, { schema: { allOf: t } }),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !s,
                          },
                        ),
                      },
                      s &&
                        x().createElement(
                          x().Fragment,
                          null,
                          t.map((e, t) =>
                            x().createElement(
                              "li",
                              {
                                key: `#${t}`,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(m, {
                                name: `#${t} ${r.getTitle(e)}`,
                                schema: e,
                              }),
                            ),
                          ),
                        ),
                    ),
                  ),
                )
              : null;
          },
          keywords_AnyOf = ({ schema: e }) => {
            const t = e?.anyOf || [],
              r = useFn(),
              a = useIsExpanded(),
              n = useIsExpandedDeeply(),
              [s, o] = (0, C.useState)(a || n),
              [l, c] = (0, C.useState)(!1),
              i = useComponent("Accordion"),
              p = useComponent("ExpandDeepButton"),
              m = useComponent("JSONSchema"),
              u = useComponent("KeywordType"),
              d = (0, C.useCallback)(() => {
                o((e) => !e);
              }, []),
              h = (0, C.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(t) && 0 !== t.length
              ? x().createElement(
                  Ws.Provider,
                  { value: l },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--anyOf",
                    },
                    x().createElement(
                      i,
                      { expanded: s, onChange: d },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                        },
                        "Any of",
                      ),
                    ),
                    x().createElement(p, { expanded: s, onClick: h }),
                    x().createElement(u, { schema: { anyOf: t } }),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !s,
                          },
                        ),
                      },
                      s &&
                        x().createElement(
                          x().Fragment,
                          null,
                          t.map((e, t) =>
                            x().createElement(
                              "li",
                              {
                                key: `#${t}`,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(m, {
                                name: `#${t} ${r.getTitle(e)}`,
                                schema: e,
                              }),
                            ),
                          ),
                        ),
                    ),
                  ),
                )
              : null;
          },
          keywords_OneOf = ({ schema: e }) => {
            const t = e?.oneOf || [],
              r = useFn(),
              a = useIsExpanded(),
              n = useIsExpandedDeeply(),
              [s, o] = (0, C.useState)(a || n),
              [l, c] = (0, C.useState)(!1),
              i = useComponent("Accordion"),
              p = useComponent("ExpandDeepButton"),
              m = useComponent("JSONSchema"),
              u = useComponent("KeywordType"),
              d = (0, C.useCallback)(() => {
                o((e) => !e);
              }, []),
              h = (0, C.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(t) && 0 !== t.length
              ? x().createElement(
                  Ws.Provider,
                  { value: l },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--oneOf",
                    },
                    x().createElement(
                      i,
                      { expanded: s, onChange: d },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                        },
                        "One of",
                      ),
                    ),
                    x().createElement(p, { expanded: s, onClick: h }),
                    x().createElement(u, { schema: { oneOf: t } }),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !s,
                          },
                        ),
                      },
                      s &&
                        x().createElement(
                          x().Fragment,
                          null,
                          t.map((e, t) =>
                            x().createElement(
                              "li",
                              {
                                key: `#${t}`,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(m, {
                                name: `#${t} ${r.getTitle(e)}`,
                                schema: e,
                              }),
                            ),
                          ),
                        ),
                    ),
                  ),
                )
              : null;
          },
          keywords_Not = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "not")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Not",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--not",
              },
              x().createElement(r, { name: a, schema: e.not }),
            );
          },
          keywords_If = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "if")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "If",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--if",
              },
              x().createElement(r, { name: a, schema: e.if }),
            );
          },
          keywords_Then = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "then")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Then",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--then",
              },
              x().createElement(r, { name: a, schema: e.then }),
            );
          },
          keywords_Else = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "else")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Else",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--if",
              },
              x().createElement(r, { name: a, schema: e.else }),
            );
          },
          keywords_DependentSchemas = ({ schema: e }) => {
            const t = e?.dependentSchemas || [],
              r = useIsExpanded(),
              a = useIsExpandedDeeply(),
              [n, s] = (0, C.useState)(r || a),
              [o, l] = (0, C.useState)(!1),
              c = useComponent("Accordion"),
              i = useComponent("ExpandDeepButton"),
              p = useComponent("JSONSchema"),
              m = (0, C.useCallback)(() => {
                s((e) => !e);
              }, []),
              u = (0, C.useCallback)((e, t) => {
                s(t), l(t);
              }, []);
            return "object" != typeof t || 0 === Object.keys(t).length
              ? null
              : x().createElement(
                  Ws.Provider,
                  { value: o },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentSchemas",
                    },
                    x().createElement(
                      c,
                      { expanded: n, onChange: m },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                        },
                        "Dependent schemas",
                      ),
                    ),
                    x().createElement(i, { expanded: n, onClick: u }),
                    x().createElement(
                      "strong",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "object",
                    ),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !n,
                          },
                        ),
                      },
                      n &&
                        x().createElement(
                          x().Fragment,
                          null,
                          Object.entries(t).map(([e, t]) =>
                            x().createElement(
                              "li",
                              {
                                key: e,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(p, { name: e, schema: t }),
                            ),
                          ),
                        ),
                    ),
                  ),
                );
          },
          keywords_PrefixItems = ({ schema: e }) => {
            const t = e?.prefixItems || [],
              r = useFn(),
              a = useIsExpanded(),
              n = useIsExpandedDeeply(),
              [s, o] = (0, C.useState)(a || n),
              [l, c] = (0, C.useState)(!1),
              i = useComponent("Accordion"),
              p = useComponent("ExpandDeepButton"),
              m = useComponent("JSONSchema"),
              u = useComponent("KeywordType"),
              d = (0, C.useCallback)(() => {
                o((e) => !e);
              }, []),
              h = (0, C.useCallback)((e, t) => {
                o(t), c(t);
              }, []);
            return Array.isArray(t) && 0 !== t.length
              ? x().createElement(
                  Ws.Provider,
                  { value: l },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-keyword json-schema-2020-12-keyword--prefixItems",
                    },
                    x().createElement(
                      i,
                      { expanded: s, onChange: d },
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                        },
                        "Prefix items",
                      ),
                    ),
                    x().createElement(p, { expanded: s, onClick: h }),
                    x().createElement(u, { schema: { prefixItems: t } }),
                    x().createElement(
                      "ul",
                      {
                        className: ut()(
                          "json-schema-2020-12-keyword__children",
                          {
                            "json-schema-2020-12-keyword__children--collapsed":
                              !s,
                          },
                        ),
                      },
                      s &&
                        x().createElement(
                          x().Fragment,
                          null,
                          t.map((e, t) =>
                            x().createElement(
                              "li",
                              {
                                key: `#${t}`,
                                className: "json-schema-2020-12-property",
                              },
                              x().createElement(m, {
                                name: `#${t} ${r.getTitle(e)}`,
                                schema: e,
                              }),
                            ),
                          ),
                        ),
                    ),
                  ),
                )
              : null;
          },
          keywords_Items = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "items")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Items",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--items",
              },
              x().createElement(r, { name: a, schema: e.items }),
            );
          },
          keywords_Contains = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "contains")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Contains",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--contains",
              },
              x().createElement(r, { name: a, schema: e.contains }),
            );
          },
          keywords_Properties_Properties = ({ schema: e }) => {
            const t = useFn(),
              r = e?.properties || {},
              a = Array.isArray(e?.required) ? e.required : [],
              n = useComponent("JSONSchema");
            return 0 === Object.keys(r).length
              ? null
              : x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--properties",
                  },
                  x().createElement(
                    "ul",
                    null,
                    Object.entries(r).map(([r, s]) => {
                      const o = a.includes(r),
                        l = t.getDependentRequired(r, e);
                      return x().createElement(
                        "li",
                        {
                          key: r,
                          className: ut()("json-schema-2020-12-property", {
                            "json-schema-2020-12-property--required": o,
                          }),
                        },
                        x().createElement(n, {
                          name: r,
                          schema: s,
                          dependentRequired: l,
                        }),
                      );
                    }),
                  ),
                );
          },
          PatternProperties_PatternProperties = ({ schema: e }) => {
            const t = e?.patternProperties || {},
              r = useComponent("JSONSchema");
            return 0 === Object.keys(t).length
              ? null
              : x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--patternProperties",
                  },
                  x().createElement(
                    "ul",
                    null,
                    Object.entries(t).map(([e, t]) =>
                      x().createElement(
                        "li",
                        { key: e, className: "json-schema-2020-12-property" },
                        x().createElement(r, { name: e, schema: t }),
                      ),
                    ),
                  ),
                );
          },
          keywords_AdditionalProperties = ({ schema: e }) => {
            const t = useFn(),
              { additionalProperties: r } = e,
              a = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "additionalProperties")) return null;
            const n = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Additional properties",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--additionalProperties",
              },
              !0 === r
                ? x().createElement(
                    x().Fragment,
                    null,
                    n,
                    x().createElement(
                      "span",
                      {
                        className:
                          "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                      },
                      "allowed",
                    ),
                  )
                : !1 === r
                  ? x().createElement(
                      x().Fragment,
                      null,
                      n,
                      x().createElement(
                        "span",
                        {
                          className:
                            "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
                        },
                        "forbidden",
                      ),
                    )
                  : x().createElement(a, { name: n, schema: r }),
            );
          },
          keywords_PropertyNames = ({ schema: e }) => {
            const t = useFn(),
              { propertyNames: r } = e,
              a = useComponent("JSONSchema"),
              n = x().createElement(
                "span",
                {
                  className:
                    "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                },
                "Property names",
              );
            return t.hasKeyword(e, "propertyNames")
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--propertyNames",
                  },
                  x().createElement(a, { name: n, schema: r }),
                )
              : null;
          },
          keywords_UnevaluatedItems = ({ schema: e }) => {
            const t = useFn(),
              { unevaluatedItems: r } = e,
              a = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "unevaluatedItems")) return null;
            const n = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Unevaluated items",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedItems",
              },
              x().createElement(a, { name: n, schema: r }),
            );
          },
          keywords_UnevaluatedProperties = ({ schema: e }) => {
            const t = useFn(),
              { unevaluatedProperties: r } = e,
              a = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "unevaluatedProperties")) return null;
            const n = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Unevaluated properties",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--unevaluatedProperties",
              },
              x().createElement(a, { name: n, schema: r }),
            );
          },
          keywords_Type = ({ schema: e, isCircular: t = !1 }) => {
            const r = useFn().getType(e),
              a = t ? " [circular]" : "";
            return x().createElement(
              "strong",
              {
                className:
                  "json-schema-2020-12__attribute json-schema-2020-12__attribute--primary",
              },
              `${r}${a}`,
            );
          },
          Enum_Enum = ({ schema: e }) => {
            const t = useFn();
            return Array.isArray(e?.enum)
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--enum",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                    },
                    "Allowed values",
                  ),
                  x().createElement(
                    "ul",
                    null,
                    e.enum.map((e) => {
                      const r = t.stringify(e);
                      return x().createElement(
                        "li",
                        { key: r },
                        x().createElement(
                          "span",
                          {
                            className:
                              "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const",
                          },
                          r,
                        ),
                      );
                    }),
                  ),
                )
              : null;
          },
          keywords_Const = ({ schema: e }) => {
            const t = useFn();
            return t.hasKeyword(e, "const")
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--const",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                    },
                    "Const",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const",
                    },
                    t.stringify(e.const),
                  ),
                )
              : null;
          },
          Constraint = ({ constraint: e }) =>
            x().createElement(
              "span",
              {
                className: `json-schema-2020-12__constraint json-schema-2020-12__constraint--${e.scope}`,
              },
              e.value,
            ),
          Ys = x().memo(Constraint),
          DependentRequired_DependentRequired = ({ dependentRequired: e }) =>
            0 === e.length
              ? null
              : x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--dependentRequired",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                    },
                    "Required when defined",
                  ),
                  x().createElement(
                    "ul",
                    null,
                    e.map((e) =>
                      x().createElement(
                        "li",
                        { key: e },
                        x().createElement(
                          "span",
                          {
                            className:
                              "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--warning",
                          },
                          e,
                        ),
                      ),
                    ),
                  ),
                ),
          keywords_ContentSchema = ({ schema: e }) => {
            const t = useFn(),
              r = useComponent("JSONSchema");
            if (!t.hasKeyword(e, "contentSchema")) return null;
            const a = x().createElement(
              "span",
              {
                className:
                  "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
              },
              "Content schema",
            );
            return x().createElement(
              "div",
              {
                className:
                  "json-schema-2020-12-keyword json-schema-2020-12-keyword--contentSchema",
              },
              x().createElement(r, { name: a, schema: e.contentSchema }),
            );
          },
          Title_Title = ({ title: e = "", schema: t }) => {
            const r = useFn(),
              a = e || r.getTitle(t);
            return a
              ? x().createElement(
                  "div",
                  { className: "json-schema-2020-12__title" },
                  a,
                )
              : null;
          },
          keywords_Description_Description = ({ schema: e }) =>
            e?.description
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--description",
                  },
                  x().createElement(
                    "div",
                    {
                      className:
                        "json-schema-2020-12-core-keyword__value json-schema-2020-12-core-keyword__value--secondary",
                    },
                    e.description,
                  ),
                )
              : null,
          keywords_Default = ({ schema: e }) => {
            const t = useFn();
            return t.hasKeyword(e, "default")
              ? x().createElement(
                  "div",
                  {
                    className:
                      "json-schema-2020-12-keyword json-schema-2020-12-keyword--default",
                  },
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__name json-schema-2020-12-keyword__name--primary",
                    },
                    "Default",
                  ),
                  x().createElement(
                    "span",
                    {
                      className:
                        "json-schema-2020-12-keyword__value json-schema-2020-12-keyword__value--const",
                    },
                    t.stringify(e.default),
                  ),
                )
              : null;
          },
          keywords_Deprecated = ({ schema: e }) =>
            !0 !== e?.deprecated
              ? null
              : x().createElement(
                  "span",
                  {
                    className:
                      "json-schema-2020-12__attribute json-schema-2020-12__attribute--warning",
                  },
                  "deprecated",
                ),
          keywords_ReadOnly = ({ schema: e }) =>
            !0 !== e?.readOnly
              ? null
              : x().createElement(
                  "span",
                  {
                    className:
                      "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted",
                  },
                  "read-only",
                ),
          keywords_WriteOnly = ({ schema: e }) =>
            !0 !== e?.writeOnly
              ? null
              : x().createElement(
                  "span",
                  {
                    className:
                      "json-schema-2020-12__attribute json-schema-2020-12__attribute--muted",
                  },
                  "write-only",
                ),
          Accordion_Accordion = ({
            expanded: e = !1,
            children: t,
            onChange: r,
          }) => {
            const a = useComponent("ChevronRightIcon"),
              n = (0, C.useCallback)(
                (t) => {
                  r(t, !e);
                },
                [e, r],
              );
            return x().createElement(
              "button",
              {
                type: "button",
                className: "json-schema-2020-12-accordion",
                onClick: n,
              },
              x().createElement(
                "div",
                { className: "json-schema-2020-12-accordion__children" },
                t,
              ),
              x().createElement(
                "span",
                {
                  className: ut()("json-schema-2020-12-accordion__icon", {
                    "json-schema-2020-12-accordion__icon--expanded": e,
                    "json-schema-2020-12-accordion__icon--collapsed": !e,
                  }),
                },
                x().createElement(a, null),
              ),
            );
          },
          ExpandDeepButton_ExpandDeepButton = ({ expanded: e, onClick: t }) => {
            const r = (0, C.useCallback)(
              (r) => {
                t(r, !e);
              },
              [e, t],
            );
            return x().createElement(
              "button",
              {
                type: "button",
                className: "json-schema-2020-12-expand-deep-button",
                onClick: r,
              },
              e ? "Collapse all" : "Expand all",
            );
          },
          icons_ChevronRight = () =>
            x().createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
              },
              x().createElement("path", {
                d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
              }),
            ),
          fn_upperFirst = (e) =>
            "string" == typeof e
              ? `${e.charAt(0).toUpperCase()}${e.slice(1)}`
              : e,
          getTitle = (e, { lookup: t = "extended" } = {}) => {
            const r = useFn();
            if (null != e?.title) return r.upperFirst(String(e.title));
            if ("extended" === t) {
              if (null != e?.$anchor) return r.upperFirst(String(e.$anchor));
              if (null != e?.$id) return String(e.$id);
            }
            return "";
          },
          getType = (e, t = new WeakSet()) => {
            const r = useFn();
            if (null == e) return "any";
            if (r.isBooleanJSONSchema(e)) return e ? "any" : "never";
            if ("object" != typeof e) return "any";
            if (t.has(e)) return "any";
            t.add(e);
            const { type: a, prefixItems: n, items: s } = e,
              getArrayType = () => {
                if (Array.isArray(n)) {
                  const e = n.map((e) => getType(e, t)),
                    r = s ? getType(s, t) : "any";
                  return `array<[${e.join(", ")}], ${r}>`;
                }
                if (s) {
                  return `array<${getType(s, t)}>`;
                }
                return "array<any>";
              };
            if (e.not && "any" === getType(e.not)) return "never";
            const handleCombiningKeywords = (r, a) => {
                if (Array.isArray(e[r])) {
                  return `(${e[r].map((e) => getType(e, t)).join(a)})`;
                }
                return null;
              },
              o = [
                Array.isArray(a)
                  ? a
                      .map((e) => ("array" === e ? getArrayType() : e))
                      .join(" | ")
                  : "array" === a
                    ? getArrayType()
                    : [
                          "null",
                          "boolean",
                          "object",
                          "array",
                          "number",
                          "integer",
                          "string",
                        ].includes(a)
                      ? a
                      : (() => {
                          if (
                            Object.hasOwn(e, "prefixItems") ||
                            Object.hasOwn(e, "items") ||
                            Object.hasOwn(e, "contains")
                          )
                            return getArrayType();
                          if (
                            Object.hasOwn(e, "properties") ||
                            Object.hasOwn(e, "additionalProperties") ||
                            Object.hasOwn(e, "patternProperties")
                          )
                            return "object";
                          if (["int32", "int64"].includes(e.format))
                            return "integer";
                          if (["float", "double"].includes(e.format))
                            return "number";
                          if (
                            Object.hasOwn(e, "minimum") ||
                            Object.hasOwn(e, "maximum") ||
                            Object.hasOwn(e, "exclusiveMinimum") ||
                            Object.hasOwn(e, "exclusiveMaximum") ||
                            Object.hasOwn(e, "multipleOf")
                          )
                            return "number | integer";
                          if (
                            Object.hasOwn(e, "pattern") ||
                            Object.hasOwn(e, "format") ||
                            Object.hasOwn(e, "minLength") ||
                            Object.hasOwn(e, "maxLength")
                          )
                            return "string";
                          if (void 0 !== e.const) {
                            if (null === e.const) return "null";
                            if ("boolean" == typeof e.const) return "boolean";
                            if ("number" == typeof e.const)
                              return Number.isInteger(e.const)
                                ? "integer"
                                : "number";
                            if ("string" == typeof e.const) return "string";
                            if (Array.isArray(e.const)) return "array<any>";
                            if ("object" == typeof e.const) return "object";
                          }
                          return null;
                        })(),
                handleCombiningKeywords("oneOf", " | "),
                handleCombiningKeywords("anyOf", " | "),
                handleCombiningKeywords("allOf", " & "),
              ]
                .filter(Boolean)
                .join(" | ");
            return t.delete(e), o || "any";
          },
          isBooleanJSONSchema = (e) => "boolean" == typeof e,
          hasKeyword = (e, t) =>
            null !== e && "object" == typeof e && Object.hasOwn(e, t),
          isExpandable = (e) => {
            const t = useFn();
            return (
              e?.$schema ||
              e?.$vocabulary ||
              e?.$id ||
              e?.$anchor ||
              e?.$dynamicAnchor ||
              e?.$ref ||
              e?.$dynamicRef ||
              e?.$defs ||
              e?.$comment ||
              e?.allOf ||
              e?.anyOf ||
              e?.oneOf ||
              t.hasKeyword(e, "not") ||
              t.hasKeyword(e, "if") ||
              t.hasKeyword(e, "then") ||
              t.hasKeyword(e, "else") ||
              e?.dependentSchemas ||
              e?.prefixItems ||
              t.hasKeyword(e, "items") ||
              t.hasKeyword(e, "contains") ||
              e?.properties ||
              e?.patternProperties ||
              t.hasKeyword(e, "additionalProperties") ||
              t.hasKeyword(e, "propertyNames") ||
              t.hasKeyword(e, "unevaluatedItems") ||
              t.hasKeyword(e, "unevaluatedProperties") ||
              e?.description ||
              e?.enum ||
              t.hasKeyword(e, "const") ||
              t.hasKeyword(e, "contentSchema") ||
              t.hasKeyword(e, "default")
            );
          },
          fn_stringify = (e) =>
            null === e || ["number", "bigint", "boolean"].includes(typeof e)
              ? String(e)
              : Array.isArray(e)
                ? `[${e.map(fn_stringify).join(", ")}]`
                : JSON.stringify(e),
          stringifyConstraintRange = (e, t, r) => {
            const a = "number" == typeof t,
              n = "number" == typeof r;
            return a && n
              ? t === r
                ? `${t} ${e}`
                : `[${t}, ${r}] ${e}`
              : a
                ? `>= ${t} ${e}`
                : n
                  ? `<= ${r} ${e}`
                  : null;
          },
          stringifyConstraints = (e) => {
            const t = [],
              r = ((e) => {
                if ("number" != typeof e?.multipleOf) return null;
                if (e.multipleOf <= 0) return null;
                if (1 === e.multipleOf) return null;
                const { multipleOf: t } = e;
                if (Number.isInteger(t)) return `multiple of ${t}`;
                const r = 10 ** t.toString().split(".")[1].length;
                return `multiple of ${t * r}/${r}`;
              })(e);
            null !== r && t.push({ scope: "number", value: r });
            const a = ((e) => {
              const t = e?.minimum,
                r = e?.maximum,
                a = e?.exclusiveMinimum,
                n = e?.exclusiveMaximum,
                s = "number" == typeof t,
                o = "number" == typeof r,
                l = "number" == typeof a,
                c = "number" == typeof n,
                i = l && (!s || t < a),
                p = c && (!o || r > n);
              if ((s || l) && (o || c))
                return `${i ? "(" : "["}${i ? a : t}, ${p ? n : r}${p ? ")" : "]"}`;
              if (s || l) return `${i ? ">" : "≥"} ${i ? a : t}`;
              if (o || c) return `${p ? "<" : "≤"} ${p ? n : r}`;
              return null;
            })(e);
            null !== a && t.push({ scope: "number", value: a }),
              e?.format && t.push({ scope: "string", value: e.format });
            const n = stringifyConstraintRange(
              "characters",
              e?.minLength,
              e?.maxLength,
            );
            null !== n && t.push({ scope: "string", value: n }),
              e?.pattern &&
                t.push({ scope: "string", value: `matches ${e?.pattern}` }),
              e?.contentMediaType &&
                t.push({
                  scope: "string",
                  value: `media type: ${e.contentMediaType}`,
                }),
              e?.contentEncoding &&
                t.push({
                  scope: "string",
                  value: `encoding: ${e.contentEncoding}`,
                });
            const s = stringifyConstraintRange(
              e?.hasUniqueItems ? "unique items" : "items",
              e?.minItems,
              e?.maxItems,
            );
            null !== s && t.push({ scope: "array", value: s });
            const o = stringifyConstraintRange(
              "contained items",
              e?.minContains,
              e?.maxContains,
            );
            null !== o && t.push({ scope: "array", value: o });
            const l = stringifyConstraintRange(
              "properties",
              e?.minProperties,
              e?.maxProperties,
            );
            return null !== l && t.push({ scope: "object", value: l }), t;
          },
          getDependentRequired = (e, t) =>
            t?.dependentRequired
              ? Array.from(
                  Object.entries(t.dependentRequired).reduce(
                    (t, [r, a]) =>
                      Array.isArray(a) && a.includes(e) ? (t.add(r), t) : t,
                    new Set(),
                  ),
                )
              : [],
          withJSONSchemaContext = (e, t = {}) => {
            const r = {
                components: {
                  JSONSchema: Gs,
                  Keyword$schema: keywords_$schema,
                  Keyword$vocabulary: $vocabulary_$vocabulary,
                  Keyword$id: keywords_$id,
                  Keyword$anchor: keywords_$anchor,
                  Keyword$dynamicAnchor: keywords_$dynamicAnchor,
                  Keyword$ref: keywords_$ref,
                  Keyword$dynamicRef: keywords_$dynamicRef,
                  Keyword$defs: keywords_$defs,
                  Keyword$comment: keywords_$comment,
                  KeywordAllOf: keywords_AllOf,
                  KeywordAnyOf: keywords_AnyOf,
                  KeywordOneOf: keywords_OneOf,
                  KeywordNot: keywords_Not,
                  KeywordIf: keywords_If,
                  KeywordThen: keywords_Then,
                  KeywordElse: keywords_Else,
                  KeywordDependentSchemas: keywords_DependentSchemas,
                  KeywordPrefixItems: keywords_PrefixItems,
                  KeywordItems: keywords_Items,
                  KeywordContains: keywords_Contains,
                  KeywordProperties: keywords_Properties_Properties,
                  KeywordPatternProperties: PatternProperties_PatternProperties,
                  KeywordAdditionalProperties: keywords_AdditionalProperties,
                  KeywordPropertyNames: keywords_PropertyNames,
                  KeywordUnevaluatedItems: keywords_UnevaluatedItems,
                  KeywordUnevaluatedProperties: keywords_UnevaluatedProperties,
                  KeywordType: keywords_Type,
                  KeywordEnum: Enum_Enum,
                  KeywordConst: keywords_Const,
                  KeywordConstraint: Ys,
                  KeywordDependentRequired: DependentRequired_DependentRequired,
                  KeywordContentSchema: keywords_ContentSchema,
                  KeywordTitle: Title_Title,
                  KeywordDescription: keywords_Description_Description,
                  KeywordDefault: keywords_Default,
                  KeywordDeprecated: keywords_Deprecated,
                  KeywordReadOnly: keywords_ReadOnly,
                  KeywordWriteOnly: keywords_WriteOnly,
                  Accordion: Accordion_Accordion,
                  ExpandDeepButton: ExpandDeepButton_ExpandDeepButton,
                  ChevronRightIcon: icons_ChevronRight,
                  ...t.components,
                },
                config: {
                  default$schema:
                    "https://json-schema.org/draft/2020-12/schema",
                  defaultExpandedLevels: 0,
                  ...t.config,
                },
                fn: {
                  upperFirst: fn_upperFirst,
                  getTitle,
                  getType,
                  isBooleanJSONSchema,
                  hasKeyword,
                  isExpandable,
                  stringify: fn_stringify,
                  stringifyConstraints,
                  getDependentRequired,
                  ...t.fn,
                },
              },
              HOC = (t) =>
                x().createElement(
                  Bs.Provider,
                  { value: r },
                  x().createElement(e, t),
                );
            return (
              (HOC.contexts = { JSONSchemaContext: Bs }),
              (HOC.displayName = e.displayName),
              HOC
            );
          },
          json_schema_2020_12 = () => ({
            components: {
              JSONSchema202012: Gs,
              JSONSchema202012Keyword$schema: keywords_$schema,
              JSONSchema202012Keyword$vocabulary: $vocabulary_$vocabulary,
              JSONSchema202012Keyword$id: keywords_$id,
              JSONSchema202012Keyword$anchor: keywords_$anchor,
              JSONSchema202012Keyword$dynamicAnchor: keywords_$dynamicAnchor,
              JSONSchema202012Keyword$ref: keywords_$ref,
              JSONSchema202012Keyword$dynamicRef: keywords_$dynamicRef,
              JSONSchema202012Keyword$defs: keywords_$defs,
              JSONSchema202012Keyword$comment: keywords_$comment,
              JSONSchema202012KeywordAllOf: keywords_AllOf,
              JSONSchema202012KeywordAnyOf: keywords_AnyOf,
              JSONSchema202012KeywordOneOf: keywords_OneOf,
              JSONSchema202012KeywordNot: keywords_Not,
              JSONSchema202012KeywordIf: keywords_If,
              JSONSchema202012KeywordThen: keywords_Then,
              JSONSchema202012KeywordElse: keywords_Else,
              JSONSchema202012KeywordDependentSchemas:
                keywords_DependentSchemas,
              JSONSchema202012KeywordPrefixItems: keywords_PrefixItems,
              JSONSchema202012KeywordItems: keywords_Items,
              JSONSchema202012KeywordContains: keywords_Contains,
              JSONSchema202012KeywordProperties: keywords_Properties_Properties,
              JSONSchema202012KeywordPatternProperties:
                PatternProperties_PatternProperties,
              JSONSchema202012KeywordAdditionalProperties:
                keywords_AdditionalProperties,
              JSONSchema202012KeywordPropertyNames: keywords_PropertyNames,
              JSONSchema202012KeywordUnevaluatedItems:
                keywords_UnevaluatedItems,
              JSONSchema202012KeywordUnevaluatedProperties:
                keywords_UnevaluatedProperties,
              JSONSchema202012KeywordType: keywords_Type,
              JSONSchema202012KeywordEnum: Enum_Enum,
              JSONSchema202012KeywordConst: keywords_Const,
              JSONSchema202012KeywordConstraint: Ys,
              JSONSchema202012KeywordDependentRequired:
                DependentRequired_DependentRequired,
              JSONSchema202012KeywordContentSchema: keywords_ContentSchema,
              JSONSchema202012KeywordTitle: Title_Title,
              JSONSchema202012KeywordDescription:
                keywords_Description_Description,
              JSONSchema202012KeywordDefault: keywords_Default,
              JSONSchema202012KeywordDeprecated: keywords_Deprecated,
              JSONSchema202012KeywordReadOnly: keywords_ReadOnly,
              JSONSchema202012KeywordWriteOnly: keywords_WriteOnly,
              JSONSchema202012Accordion: Accordion_Accordion,
              JSONSchema202012ExpandDeepButton:
                ExpandDeepButton_ExpandDeepButton,
              JSONSchema202012ChevronRightIcon: icons_ChevronRight,
              withJSONSchema202012Context: withJSONSchemaContext,
              JSONSchema202012DeepExpansionContext: () => Ws,
            },
            fn: {
              upperFirst: fn_upperFirst,
              jsonSchema202012: {
                isExpandable,
                hasKeyword,
                useFn,
                useConfig,
                useComponent,
                useIsExpandedDeeply,
              },
            },
          }),
          Qs = require("lodash/isPlainObject");
        var Zs = __webpack_require__.n(Qs);
        const array = (e, { sample: t }) =>
            ((e, t = {}) => {
              const { minItems: r, maxItems: a, uniqueItems: n } = t,
                { contains: s, minContains: o, maxContains: l } = t;
              let c = [...e];
              if (null != s && "object" == typeof s) {
                if (Number.isInteger(o) && o > 1) {
                  const e = c.at(0);
                  for (let t = 1; t < o; t += 1) c.unshift(e);
                }
                Number.isInteger(l);
              }
              if (
                (Number.isInteger(a) && a > 0 && (c = e.slice(0, a)),
                Number.isInteger(r) && r > 0)
              )
                for (let e = 0; c.length < r; e += 1) c.push(c[e % c.length]);
              return !0 === n && (c = Array.from(new Set(c))), c;
            })(t, e),
          object = () => {
            throw new Error("Not implemented");
          },
          bytes = (e) => ae()(e),
          pick = (e) => e.at(0),
          predicates_isBooleanJSONSchema = (e) => "boolean" == typeof e,
          isJSONSchemaObject = (e) => Zs()(e),
          isJSONSchema = (e) =>
            predicates_isBooleanJSONSchema(e) || isJSONSchemaObject(e);
        const eo = class Registry {
            data = {};
            register(e, t) {
              this.data[e] = t;
            }
            unregister(e) {
              void 0 === e ? (this.data = {}) : delete this.data[e];
            }
            get(e) {
              return this.data[e];
            }
          },
          int32 = () => (2 ** 30) >>> 0,
          int64 = () => 2 ** 53 - 1,
          generators_float = () => 0.1,
          generators_double = () => 0.1,
          email = () => "user@example.com",
          idn_email = () => "실례@example.com",
          hostname = () => "example.com",
          idn_hostname = () => "실례.com",
          ipv4 = () => "198.51.100.42",
          ipv6 = () => "2001:0db8:5b96:0000:0000:426f:8e17:642a",
          uri = () => "https://example.com/",
          uri_reference = () => "path/index.html",
          iri = () => "https://실례.com/",
          iri_reference = () => "path/실례.html",
          uuid = () => "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          uri_template = () => "https://example.com/dictionary/{term:1}/{term}",
          json_pointer = () => "/a/b/c",
          relative_json_pointer = () => "1/0",
          date_time = () => new Date().toISOString(),
          date = () => new Date().toISOString().substring(0, 10),
          time = () => new Date().toISOString().substring(11),
          duration = () => "P3D",
          generators_password = () => "********",
          regex = () => "^[a-z]+$";
        const to = new (class FormatRegistry extends eo {
            #e = {
              int32,
              int64,
              float: generators_float,
              double: generators_double,
              email,
              "idn-email": idn_email,
              hostname,
              "idn-hostname": idn_hostname,
              ipv4,
              ipv6,
              uri,
              "uri-reference": uri_reference,
              iri,
              "iri-reference": iri_reference,
              uuid,
              "uri-template": uri_template,
              "json-pointer": json_pointer,
              "relative-json-pointer": relative_json_pointer,
              "date-time": date_time,
              date,
              time,
              duration,
              password: generators_password,
              regex,
            };
            data = { ...this.#e };
            get defaults() {
              return { ...this.#e };
            }
          })(),
          formatAPI = (e, t) =>
            "function" == typeof t
              ? to.register(e, t)
              : null === t
                ? to.unregister(e)
                : to.get(e);
        formatAPI.getDefaults = () => to.defaults;
        const ro = formatAPI;
        var ao = __webpack_require__(158).Buffer;
        const _7bit = (e) => ao.from(e).toString("ascii");
        var no = __webpack_require__(158).Buffer;
        const _8bit = (e) => no.from(e).toString("utf8");
        var so = __webpack_require__(158).Buffer;
        const binary = (e) => so.from(e).toString("binary"),
          quoted_printable = (e) => {
            let t = "";
            for (let r = 0; r < e.length; r++) {
              const a = e.charCodeAt(r);
              if (61 === a) t += "=3D";
              else if (
                (a >= 33 && a <= 60) ||
                (a >= 62 && a <= 126) ||
                9 === a ||
                32 === a
              )
                t += e.charAt(r);
              else if (13 === a || 10 === a) t += "\r\n";
              else if (a > 126) {
                const a = unescape(encodeURIComponent(e.charAt(r)));
                for (let e = 0; e < a.length; e++)
                  t +=
                    "=" +
                    ("0" + a.charCodeAt(e).toString(16))
                      .slice(-2)
                      .toUpperCase();
              } else t += "=" + ("0" + a.toString(16)).slice(-2).toUpperCase();
            }
            return t;
          };
        var oo = __webpack_require__(158).Buffer;
        const base16 = (e) => oo.from(e).toString("hex");
        var lo = __webpack_require__(158).Buffer;
        const base32 = (e) => {
          const t = lo.from(e).toString("utf8"),
            r = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
          let a = 0,
            n = "",
            s = 0,
            o = 0;
          for (let e = 0; e < t.length; e++)
            for (s = (s << 8) | t.charCodeAt(e), o += 8; o >= 5; )
              (n += r.charAt((s >>> (o - 5)) & 31)), (o -= 5);
          o > 0 &&
            ((n += r.charAt((s << (5 - o)) & 31)),
            (a = (8 - ((8 * t.length) % 5)) % 5));
          for (let e = 0; e < a; e++) n += "=";
          return n;
        };
        var co = __webpack_require__(158).Buffer;
        const base64 = (e) => co.from(e).toString("base64");
        var io = __webpack_require__(158).Buffer;
        const base64url = (e) => io.from(e).toString("base64url");
        const po = new (class EncoderRegistry extends eo {
            #e = {
              "7bit": _7bit,
              "8bit": _8bit,
              binary,
              "quoted-printable": quoted_printable,
              base16,
              base32,
              base64,
              base64url,
            };
            data = { ...this.#e };
            get defaults() {
              return { ...this.#e };
            }
          })(),
          encoderAPI = (e, t) =>
            "function" == typeof t
              ? po.register(e, t)
              : null === t
                ? po.unregister(e)
                : po.get(e);
        encoderAPI.getDefaults = () => po.defaults;
        const mo = encoderAPI,
          uo = {
            "text/plain": () => "string",
            "text/css": () => ".selector { border: 1px solid red }",
            "text/csv": () => "value1,value2,value3",
            "text/html": () => "<p>content</p>",
            "text/calendar": () => "BEGIN:VCALENDAR",
            "text/javascript": () => "console.dir('Hello world!');",
            "text/xml": () => '<person age="30">John Doe</person>',
            "text/*": () => "string",
          },
          ho = { "image/*": () => bytes(25).toString("binary") },
          go = { "audio/*": () => bytes(25).toString("binary") },
          yo = { "video/*": () => bytes(25).toString("binary") },
          fo = {
            "application/json": () => '{"key":"value"}',
            "application/ld+json": () => '{"name": "John Doe"}',
            "application/x-httpd-php": () =>
              "<?php echo '<p>Hello World!</p>'; ?>",
            "application/rtf": () =>
              String.raw`{\rtf1\adeflang1025\ansi\ansicpg1252\uc1`,
            "application/x-sh": () => 'echo "Hello World!"',
            "application/xhtml+xml": () => "<p>content</p>",
            "application/*": () => bytes(25).toString("binary"),
          };
        const So = new (class MediaTypeRegistry extends eo {
            #e = { ...uo, ...ho, ...go, ...yo, ...fo };
            data = { ...this.#e };
            get defaults() {
              return { ...this.#e };
            }
          })(),
          mediaTypeAPI = (e, t) => {
            if ("function" == typeof t) return So.register(e, t);
            if (null === t) return So.unregister(e);
            const r = e.split(";").at(0),
              a = `${r.split("/").at(0)}/*`;
            return So.get(e) || So.get(r) || So.get(a);
          };
        mediaTypeAPI.getDefaults = () => So.defaults;
        const Eo = mediaTypeAPI,
          applyStringConstraints = (e, t = {}) => {
            const { maxLength: r, minLength: a } = t;
            let n = e;
            if (
              (Number.isInteger(r) && r > 0 && (n = n.slice(0, r)),
              Number.isInteger(a) && a > 0)
            ) {
              let e = 0;
              for (; n.length < a; ) n += n[e++ % n.length];
            }
            return n;
          },
          types_string = (e, { sample: t } = {}) => {
            const {
                contentEncoding: r,
                contentMediaType: a,
                contentSchema: n,
              } = e,
              { pattern: s, format: o } = e,
              l = mo(r) || ma();
            let c;
            return (
              (c =
                "string" == typeof s
                  ? applyStringConstraints(
                      ((e) => {
                        try {
                          return new (Ot())(e).gen();
                        } catch {
                          return "string";
                        }
                      })(s),
                      e,
                    )
                  : "string" == typeof o
                    ? ((e) => {
                        const { format: t } = e,
                          r = ro(t);
                        return "function" == typeof r ? r(e) : "string";
                      })(e)
                    : isJSONSchema(n) && "string" == typeof a && void 0 !== t
                      ? Array.isArray(t) || "object" == typeof t
                        ? JSON.stringify(t)
                        : applyStringConstraints(String(t), e)
                      : "string" == typeof a
                        ? ((e) => {
                            const { contentMediaType: t } = e,
                              r = Eo(t);
                            return "function" == typeof r ? r(e) : "string";
                          })(e)
                        : applyStringConstraints("string", e)),
              l(c)
            );
          },
          applyNumberConstraints = (e, t = {}) => {
            const {
                minimum: r,
                maximum: a,
                exclusiveMinimum: n,
                exclusiveMaximum: s,
              } = t,
              { multipleOf: o } = t,
              l = Number.isInteger(e) ? 1 : Number.EPSILON;
            let c = "number" == typeof r ? r : null,
              i = "number" == typeof a ? a : null,
              p = e;
            if (
              ("number" == typeof n &&
                (c = null !== c ? Math.max(c, n + l) : n + l),
              "number" == typeof s &&
                (i = null !== i ? Math.min(i, s - l) : s - l),
              (p = (c > i && e) || c || i || p),
              "number" == typeof o && o > 0)
            ) {
              const e = p % o;
              p = 0 === e ? p : p + o - e;
            }
            return p;
          },
          types_number = (e) => {
            const { format: t } = e;
            let r;
            return (
              (r =
                "string" == typeof t
                  ? ((e) => {
                      const { format: t } = e,
                        r = ro(t);
                      return "function" == typeof r ? r(e) : 0;
                    })(e)
                  : 0),
              applyNumberConstraints(r, e)
            );
          },
          types_integer = (e) => {
            const { format: t } = e;
            let r;
            return (
              (r =
                "string" == typeof t
                  ? ((e) => {
                      const { format: t } = e,
                        r = ro(t);
                      if ("function" == typeof r) return r(e);
                      switch (t) {
                        case "int32":
                          return int32();
                        case "int64":
                          return int64();
                      }
                      return 0;
                    })(e)
                  : 0),
              applyNumberConstraints(r, e)
            );
          },
          types_boolean = (e) => "boolean" != typeof e.default || e.default,
          _o = new Proxy(
            {
              array,
              object,
              string: types_string,
              number: types_number,
              integer: types_integer,
              boolean: types_boolean,
              null: () => null,
            },
            {
              get: (e, t) =>
                "string" == typeof t && Object.hasOwn(e, t)
                  ? e[t]
                  : () => `Unknown Type: ${t}`,
            },
          ),
          vo = [
            "array",
            "object",
            "number",
            "integer",
            "string",
            "boolean",
            "null",
          ],
          hasExample = (e) => {
            if (!isJSONSchemaObject(e)) return !1;
            const { examples: t, example: r, default: a } = e;
            return (
              !!(Array.isArray(t) && t.length >= 1) ||
              void 0 !== a ||
              void 0 !== r
            );
          },
          extractExample = (e) => {
            if (!isJSONSchemaObject(e)) return null;
            const { examples: t, example: r, default: a } = e;
            return Array.isArray(t) && t.length >= 1
              ? t.at(0)
              : void 0 !== a
                ? a
                : void 0 !== r
                  ? r
                  : void 0;
          },
          wo = {
            array: [
              "items",
              "prefixItems",
              "contains",
              "maxContains",
              "minContains",
              "maxItems",
              "minItems",
              "uniqueItems",
              "unevaluatedItems",
            ],
            object: [
              "properties",
              "additionalProperties",
              "patternProperties",
              "propertyNames",
              "minProperties",
              "maxProperties",
              "required",
              "dependentSchemas",
              "dependentRequired",
              "unevaluatedProperties",
            ],
            string: [
              "pattern",
              "format",
              "minLength",
              "maxLength",
              "contentEncoding",
              "contentMediaType",
              "contentSchema",
            ],
            integer: [
              "minimum",
              "maximum",
              "exclusiveMinimum",
              "exclusiveMaximum",
              "multipleOf",
            ],
          };
        wo.number = wo.integer;
        const bo = "string",
          inferTypeFromValue = (e) =>
            void 0 === e
              ? null
              : null === e
                ? "null"
                : Array.isArray(e)
                  ? "array"
                  : Number.isInteger(e)
                    ? "integer"
                    : typeof e,
          foldType = (e) => {
            if (Array.isArray(e) && e.length >= 1) {
              if (e.includes("array")) return "array";
              if (e.includes("object")) return "object";
              {
                const t = pick(e);
                if (vo.includes(t)) return t;
              }
            }
            return vo.includes(e) ? e : null;
          },
          inferType = (e, t = new WeakSet()) => {
            if (!isJSONSchemaObject(e)) return bo;
            if (t.has(e)) return bo;
            t.add(e);
            let { type: r, const: a } = e;
            if (((r = foldType(r)), "string" != typeof r)) {
              const t = Object.keys(wo);
              e: for (let a = 0; a < t.length; a += 1) {
                const n = t[a],
                  s = wo[n];
                for (let t = 0; t < s.length; t += 1) {
                  const a = s[t];
                  if (Object.hasOwn(e, a)) {
                    r = n;
                    break e;
                  }
                }
              }
            }
            if ("string" != typeof r && void 0 !== a) {
              const e = inferTypeFromValue(a);
              r = "string" == typeof e ? e : r;
            }
            if ("string" != typeof r) {
              const combineTypes = (r) => {
                  if (Array.isArray(e[r])) {
                    const a = e[r].map((e) => inferType(e, t));
                    return foldType(a);
                  }
                  return null;
                },
                a = combineTypes("allOf"),
                n = combineTypes("anyOf"),
                s = combineTypes("oneOf"),
                o = e.not ? inferType(e.not, t) : null;
              (a || n || s || o) &&
                (r = foldType([a, n, s, o].filter(Boolean)));
            }
            if ("string" != typeof r && hasExample(e)) {
              const t = extractExample(e),
                a = inferTypeFromValue(t);
              r = "string" == typeof a ? a : r;
            }
            return t.delete(e), r || bo;
          },
          type_getType = (e) => inferType(e),
          typeCast = (e) =>
            predicates_isBooleanJSONSchema(e)
              ? ((e) => (!1 === e ? { not: {} } : {}))(e)
              : isJSONSchemaObject(e)
                ? e
                : {},
          merge = (e, t, r = {}) => {
            if (predicates_isBooleanJSONSchema(e) && !0 === e) return !0;
            if (predicates_isBooleanJSONSchema(e) && !1 === e) return !1;
            if (predicates_isBooleanJSONSchema(t) && !0 === t) return !0;
            if (predicates_isBooleanJSONSchema(t) && !1 === t) return !1;
            if (!isJSONSchema(e)) return t;
            if (!isJSONSchema(t)) return e;
            const a = { ...t, ...e };
            if (
              t.type &&
              e.type &&
              Array.isArray(t.type) &&
              "string" == typeof t.type
            ) {
              const r = normalizeArray(t.type).concat(e.type);
              a.type = Array.from(new Set(r));
            }
            if (
              (Array.isArray(t.required) &&
                Array.isArray(e.required) &&
                (a.required = [...new Set([...e.required, ...t.required])]),
              t.properties && e.properties)
            ) {
              const n = new Set([
                ...Object.keys(t.properties),
                ...Object.keys(e.properties),
              ]);
              a.properties = {};
              for (const s of n) {
                const n = t.properties[s] || {},
                  o = e.properties[s] || {};
                (n.readOnly && !r.includeReadOnly) ||
                (n.writeOnly && !r.includeWriteOnly)
                  ? (a.required = (a.required || []).filter((e) => e !== s))
                  : (a.properties[s] = merge(o, n, r));
              }
            }
            return (
              isJSONSchema(t.items) &&
                isJSONSchema(e.items) &&
                (a.items = merge(e.items, t.items, r)),
              isJSONSchema(t.contains) &&
                isJSONSchema(e.contains) &&
                (a.contains = merge(e.contains, t.contains, r)),
              isJSONSchema(t.contentSchema) &&
                isJSONSchema(e.contentSchema) &&
                (a.contentSchema = merge(e.contentSchema, t.contentSchema, r)),
              a
            );
          },
          Co = merge,
          main_sampleFromSchemaGeneric = (e, t = {}, r = void 0, a = !1) => {
            if (null == e && void 0 === r) return;
            "function" == typeof e?.toJS && (e = e.toJS()), (e = typeCast(e));
            let n = void 0 !== r || hasExample(e);
            const s = !n && Array.isArray(e.oneOf) && e.oneOf.length > 0,
              o = !n && Array.isArray(e.anyOf) && e.anyOf.length > 0;
            if (!n && (s || o)) {
              const r = typeCast(pick(s ? e.oneOf : e.anyOf));
              !(e = Co(e, r, t)).xml && r.xml && (e.xml = r.xml),
                hasExample(e) && hasExample(r) && (n = !0);
            }
            const l = {};
            let {
                xml: c,
                properties: i,
                additionalProperties: p,
                items: m,
                contains: u,
              } = e || {},
              d = type_getType(e),
              { includeReadOnly: h, includeWriteOnly: g } = t;
            c = c || {};
            let y,
              { name: f, prefix: S, namespace: E } = c,
              _ = {};
            if (
              (Object.hasOwn(e, "type") || (e.type = d),
              a && ((f = f || "notagname"), (y = (S ? `${S}:` : "") + f), E))
            ) {
              l[S ? `xmlns:${S}` : "xmlns"] = E;
            }
            a && (_[y] = []);
            const v = objectify(i);
            let w,
              b = 0;
            const hasExceededMaxProperties = () =>
                Number.isInteger(e.maxProperties) &&
                e.maxProperties > 0 &&
                b >= e.maxProperties,
              canAddProperty = (t) =>
                !(Number.isInteger(e.maxProperties) && e.maxProperties > 0) ||
                (!hasExceededMaxProperties() &&
                  (!((t) =>
                    !Array.isArray(e.required) ||
                    0 === e.required.length ||
                    !e.required.includes(t))(t) ||
                    e.maxProperties -
                      b -
                      (() => {
                        if (
                          !Array.isArray(e.required) ||
                          0 === e.required.length
                        )
                          return 0;
                        let t = 0;
                        return (
                          a
                            ? e.required.forEach(
                                (e) => (t += void 0 === _[e] ? 0 : 1),
                              )
                            : e.required.forEach((e) => {
                                t +=
                                  void 0 === _[y]?.find((t) => void 0 !== t[e])
                                    ? 0
                                    : 1;
                              }),
                          e.required.length - t
                        );
                      })() >
                      0));
            if (
              ((w = a
                ? (r, n = void 0) => {
                    if (e && v[r]) {
                      if (((v[r].xml = v[r].xml || {}), v[r].xml.attribute)) {
                        const e = Array.isArray(v[r].enum)
                          ? pick(v[r].enum)
                          : void 0;
                        if (hasExample(v[r]))
                          l[v[r].xml.name || r] = extractExample(v[r]);
                        else if (void 0 !== e) l[v[r].xml.name || r] = e;
                        else {
                          const e = typeCast(v[r]),
                            t = type_getType(e),
                            a = v[r].xml.name || r;
                          l[a] = _o[t](e);
                        }
                        return;
                      }
                      v[r].xml.name = v[r].xml.name || r;
                    } else v[r] || !1 === p || (v[r] = { xml: { name: r } });
                    let s = main_sampleFromSchemaGeneric(v[r], t, n, a);
                    canAddProperty(r) &&
                      (b++,
                      Array.isArray(s)
                        ? (_[y] = _[y].concat(s))
                        : _[y].push(s));
                  }
                : (r, n) => {
                    if (canAddProperty(r)) {
                      if (
                        Zs()(e.discriminator?.mapping) &&
                        e.discriminator.propertyName === r &&
                        "string" == typeof e.$$ref
                      ) {
                        for (const t in e.discriminator.mapping)
                          if (
                            -1 !== e.$$ref.search(e.discriminator.mapping[t])
                          ) {
                            _[r] = t;
                            break;
                          }
                      } else _[r] = main_sampleFromSchemaGeneric(v[r], t, n, a);
                      b++;
                    }
                  }),
              n)
            ) {
              let n;
              if (((n = void 0 !== r ? r : extractExample(e)), !a)) {
                if ("number" == typeof n && "string" === d) return `${n}`;
                if ("string" != typeof n || "string" === d) return n;
                try {
                  return JSON.parse(n);
                } catch {
                  return n;
                }
              }
              if ("array" === d) {
                if (!Array.isArray(n)) {
                  if ("string" == typeof n) return n;
                  n = [n];
                }
                let r = [];
                return (
                  isJSONSchemaObject(m) &&
                    ((m.xml = m.xml || c || {}),
                    (m.xml.name = m.xml.name || c.name),
                    (r = n.map((e) =>
                      main_sampleFromSchemaGeneric(m, t, e, a),
                    ))),
                  isJSONSchemaObject(u) &&
                    ((u.xml = u.xml || c || {}),
                    (u.xml.name = u.xml.name || c.name),
                    (r = [
                      main_sampleFromSchemaGeneric(u, t, void 0, a),
                      ...r,
                    ])),
                  (r = _o.array(e, { sample: r })),
                  c.wrapped
                    ? ((_[y] = r), kt()(l) || _[y].push({ _attr: l }))
                    : (_ = r),
                  _
                );
              }
              if ("object" === d) {
                if ("string" == typeof n) return n;
                for (const e in n)
                  Object.hasOwn(n, e) &&
                    ((v[e]?.readOnly && !h) ||
                      (v[e]?.writeOnly && !g) ||
                      (v[e]?.xml?.attribute
                        ? (l[v[e].xml.name || e] = n[e])
                        : w(e, n[e])));
                return kt()(l) || _[y].push({ _attr: l }), _;
              }
              return (_[y] = kt()(l) ? n : [{ _attr: l }, n]), _;
            }
            if ("array" === d) {
              let r = [];
              if (isJSONSchemaObject(u))
                if (
                  (a &&
                    ((u.xml = u.xml || e.xml || {}),
                    (u.xml.name = u.xml.name || c.name)),
                  Array.isArray(u.anyOf))
                ) {
                  const { anyOf: e, ...n } = m;
                  r.push(
                    ...u.anyOf.map((e) =>
                      main_sampleFromSchemaGeneric(Co(e, n, t), t, void 0, a),
                    ),
                  );
                } else if (Array.isArray(u.oneOf)) {
                  const { oneOf: e, ...n } = m;
                  r.push(
                    ...u.oneOf.map((e) =>
                      main_sampleFromSchemaGeneric(Co(e, n, t), t, void 0, a),
                    ),
                  );
                } else {
                  if (!(!a || (a && c.wrapped)))
                    return main_sampleFromSchemaGeneric(u, t, void 0, a);
                  r.push(main_sampleFromSchemaGeneric(u, t, void 0, a));
                }
              if (isJSONSchemaObject(m))
                if (
                  (a &&
                    ((m.xml = m.xml || e.xml || {}),
                    (m.xml.name = m.xml.name || c.name)),
                  Array.isArray(m.anyOf))
                ) {
                  const { anyOf: e, ...n } = m;
                  r.push(
                    ...m.anyOf.map((e) =>
                      main_sampleFromSchemaGeneric(Co(e, n, t), t, void 0, a),
                    ),
                  );
                } else if (Array.isArray(m.oneOf)) {
                  const { oneOf: e, ...n } = m;
                  r.push(
                    ...m.oneOf.map((e) =>
                      main_sampleFromSchemaGeneric(Co(e, n, t), t, void 0, a),
                    ),
                  );
                } else {
                  if (!(!a || (a && c.wrapped)))
                    return main_sampleFromSchemaGeneric(m, t, void 0, a);
                  r.push(main_sampleFromSchemaGeneric(m, t, void 0, a));
                }
              return (
                (r = _o.array(e, { sample: r })),
                a && c.wrapped
                  ? ((_[y] = r), kt()(l) || _[y].push({ _attr: l }), _)
                  : r
              );
            }
            if ("object" === d) {
              for (let e in v)
                Object.hasOwn(v, e) &&
                  (v[e]?.deprecated ||
                    (v[e]?.readOnly && !h) ||
                    (v[e]?.writeOnly && !g) ||
                    w(e));
              if (
                (a && l && _[y].push({ _attr: l }), hasExceededMaxProperties())
              )
                return _;
              if (predicates_isBooleanJSONSchema(p) && p)
                a
                  ? _[y].push({ additionalProp: "Anything can be here" })
                  : (_.additionalProp1 = {}),
                  b++;
              else if (isJSONSchemaObject(p)) {
                const r = p,
                  n = main_sampleFromSchemaGeneric(r, t, void 0, a);
                if (
                  a &&
                  "string" == typeof r?.xml?.name &&
                  "notagname" !== r?.xml?.name
                )
                  _[y].push(n);
                else {
                  const t =
                    Number.isInteger(e.minProperties) &&
                    e.minProperties > 0 &&
                    b < e.minProperties
                      ? e.minProperties - b
                      : 3;
                  for (let e = 1; e <= t; e++) {
                    if (hasExceededMaxProperties()) return _;
                    if (a) {
                      const t = {};
                      (t["additionalProp" + e] = n.notagname), _[y].push(t);
                    } else _["additionalProp" + e] = n;
                    b++;
                  }
                }
              }
              return _;
            }
            let C;
            if (void 0 !== e.const) C = e.const;
            else if (e && Array.isArray(e.enum))
              C = pick(normalizeArray(e.enum));
            else {
              const r = isJSONSchemaObject(e.contentSchema)
                ? main_sampleFromSchemaGeneric(e.contentSchema, t, void 0, a)
                : void 0;
              C = _o[d](e, { sample: r });
            }
            return a ? ((_[y] = kt()(l) ? C : [{ _attr: l }, C]), _) : C;
          },
          main_createXMLExample = (e, t, r) => {
            const a = main_sampleFromSchemaGeneric(e, t, r, !0);
            if (a)
              return "string" == typeof a
                ? a
                : Ct()(a, { declaration: !0, indent: "\t" });
          },
          main_sampleFromSchema = (e, t, r) =>
            main_sampleFromSchemaGeneric(e, t, r, !1),
          main_resolver = (e, t, r) => [
            e,
            JSON.stringify(t),
            JSON.stringify(r),
          ],
          xo = utils_memoizeN(main_createXMLExample, main_resolver),
          Oo = utils_memoizeN(main_sampleFromSchema, main_resolver);
        const No = new (class OptionRegistry extends eo {
            #e = {};
            data = { ...this.#e };
            get defaults() {
              return { ...this.#e };
            }
          })(),
          api_optionAPI = (e, t) => (
            void 0 !== t && No.register(e, t), No.get(e)
          ),
          ko = [{ when: /json/, shouldStringifyTypes: ["string"] }],
          Ao = ["object"],
          fn_get_json_sample_schema = (e) => (t, r, a, n) => {
            const { fn: s } = e(),
              o = s.jsonSchema202012.memoizedSampleFromSchema(t, r, n),
              l = typeof o,
              c = ko.reduce(
                (e, t) =>
                  t.when.test(a) ? [...e, ...t.shouldStringifyTypes] : e,
                Ao,
              );
            return X()(c, (e) => e === l) ? JSON.stringify(o, null, 2) : o;
          },
          fn_get_yaml_sample_schema = (e) => (t, r, a, n) => {
            const { fn: s } = e(),
              o = s.jsonSchema202012.getJsonSampleSchema(t, r, a, n);
            let l;
            try {
              (l = Me().dump(
                Me().load(o),
                { lineWidth: -1 },
                { schema: Pe.JSON_SCHEMA },
              )),
                "\n" === l[l.length - 1] && (l = l.slice(0, l.length - 1));
            } catch (e) {
              return console.error(e), "error: could not generate yaml example";
            }
            return l.replace(/\t/g, "  ");
          },
          fn_get_xml_sample_schema = (e) => (t, r, a) => {
            const { fn: n } = e();
            if ((t && !t.xml && (t.xml = {}), t && !t.xml.name)) {
              if (
                !t.$$ref &&
                (t.type || t.items || t.properties || t.additionalProperties)
              )
                return '<?xml version="1.0" encoding="UTF-8"?>\n\x3c!-- XML example cannot be generated; root element name is undefined --\x3e';
              if (t.$$ref) {
                let e = t.$$ref.match(/\S*\/(\S+)$/);
                t.xml.name = e[1];
              }
            }
            return n.jsonSchema202012.memoizedCreateXMLExample(t, r, a);
          },
          fn_get_sample_schema =
            (e) =>
            (t, r = "", a = {}, n = void 0) => {
              const { fn: s } = e();
              return (
                "function" == typeof t?.toJS && (t = t.toJS()),
                "function" == typeof n?.toJS && (n = n.toJS()),
                /xml/.test(r)
                  ? s.jsonSchema202012.getXmlSampleSchema(t, a, n)
                  : /(yaml|yml)/.test(r)
                    ? s.jsonSchema202012.getYamlSampleSchema(t, a, r, n)
                    : s.jsonSchema202012.getJsonSampleSchema(t, a, r, n)
              );
            },
          json_schema_2020_12_samples = ({ getSystem: e }) => {
            const t = fn_get_json_sample_schema(e),
              r = fn_get_yaml_sample_schema(e),
              a = fn_get_xml_sample_schema(e),
              n = fn_get_sample_schema(e);
            return {
              fn: {
                jsonSchema202012: {
                  sampleFromSchema: main_sampleFromSchema,
                  sampleFromSchemaGeneric: main_sampleFromSchemaGeneric,
                  sampleOptionAPI: api_optionAPI,
                  sampleEncoderAPI: mo,
                  sampleFormatAPI: ro,
                  sampleMediaTypeAPI: Eo,
                  createXMLExample: main_createXMLExample,
                  memoizedSampleFromSchema: Oo,
                  memoizedCreateXMLExample: xo,
                  getJsonSampleSchema: t,
                  getYamlSampleSchema: r,
                  getXmlSampleSchema: a,
                  getSampleSchema: n,
                  mergeJsonSchema: Co,
                },
              },
            };
          };
        function PresetApis() {
          return [
            base,
            oas3,
            json_schema_2020_12,
            json_schema_2020_12_samples,
            oas31,
          ];
        }
        const inline_plugin = (e) => () => ({
            fn: e.fn,
            components: e.components,
          }),
          factorization_system = (e) => {
            const t = I()(
              {
                layout: { layout: e.layout, filter: e.filter },
                spec: { spec: "", url: e.url },
                requestSnippets: e.requestSnippets,
              },
              e.initialState,
            );
            if (e.initialState)
              for (const [r, a] of Object.entries(e.initialState))
                void 0 === a && delete t[r];
            return {
              system: { configs: e.configs },
              plugins: e.presets,
              state: t,
            };
          },
          query = () => (e) => {
            const t = e.queryConfigEnabled
              ? (() => {
                  const e = new URLSearchParams(L.location.search);
                  return Object.fromEntries(e);
                })()
              : {};
            return Object.entries(t).reduce(
              (e, [t, r]) => (
                "config" === t
                  ? (e.configUrl = r)
                  : "urls.primaryName" === t
                    ? (e[t] = r)
                    : (e = br()(e, t, r)),
                e
              ),
              {},
            );
          },
          sources_url =
            ({ url: e, system: t }) =>
            async (r) => {
              if (!e) return {};
              if ("function" != typeof t.configsActions?.getConfigByUrl)
                return {};
              const a = (() => {
                const e = {};
                return (
                  (e.promise = new Promise((t, r) => {
                    (e.resolve = t), (e.reject = r);
                  })),
                  e
                );
              })();
              return (
                t.configsActions.getConfigByUrl(
                  {
                    url: e,
                    loadRemoteConfig: !0,
                    requestInterceptor: r.requestInterceptor,
                    responseInterceptor: r.responseInterceptor,
                  },
                  (e) => {
                    a.resolve(e);
                  },
                ),
                a.promise
              );
            },
          runtime = () => () => {
            const e = {};
            return (
              globalThis.location &&
                (e.oauth2RedirectUrl = `${globalThis.location.protocol}//${globalThis.location.host}${globalThis.location.pathname.substring(0, globalThis.location.pathname.lastIndexOf("/"))}/oauth2-redirect.html`),
              e
            );
          },
          Io = Object.freeze({
            dom_id: null,
            domNode: null,
            spec: {},
            url: "",
            urls: null,
            configUrl: null,
            layout: "BaseLayout",
            docExpansion: "list",
            maxDisplayedTags: -1,
            filter: !1,
            validatorUrl: "https://validator.swagger.io/validator",
            oauth2RedirectUrl: void 0,
            persistAuthorization: !1,
            configs: {},
            displayOperationId: !1,
            displayRequestDuration: !1,
            deepLinking: !1,
            tryItOutEnabled: !1,
            requestInterceptor: (e) => ((e.curlOptions = []), e),
            responseInterceptor: (e) => e,
            showMutatedRequest: !0,
            defaultModelRendering: "example",
            defaultModelExpandDepth: 1,
            defaultModelsExpandDepth: 1,
            showExtensions: !1,
            showCommonExtensions: !1,
            withCredentials: !1,
            requestSnippetsEnabled: !1,
            requestSnippets: {
              generators: {
                curl_bash: { title: "cURL (bash)", syntax: "bash" },
                curl_powershell: {
                  title: "cURL (PowerShell)",
                  syntax: "powershell",
                },
                curl_cmd: { title: "cURL (CMD)", syntax: "bash" },
              },
              defaultExpanded: !0,
              languages: null,
            },
            supportedSubmitMethods: [
              "get",
              "put",
              "post",
              "delete",
              "options",
              "head",
              "patch",
              "trace",
            ],
            queryConfigEnabled: !1,
            presets: [PresetApis],
            plugins: [],
            initialState: {},
            fn: {},
            components: {},
            syntaxHighlight: { activated: !0, theme: "agate" },
            operationsSorter: null,
            tagsSorter: null,
            onComplete: null,
            modelPropertyMacro: null,
            parameterMacro: null,
          }),
          qo = require("lodash/has");
        var jo = __webpack_require__.n(qo);
        const Po = require("lodash/fp/set");
        var Mo = __webpack_require__.n(Po);
        const type_casters_array = (e, t = []) => (Array.isArray(e) ? e : t),
          type_casters_boolean = (e, t = !1) =>
            !0 === e ||
            "true" === e ||
            1 === e ||
            "1" === e ||
            (!1 !== e && "false" !== e && 0 !== e && "0" !== e && t),
          dom_node = (e) => (null === e || "null" === e ? null : e),
          type_casters_filter = (e) => {
            const t = String(e);
            return type_casters_boolean(e, t);
          },
          type_casters_function = (e, t) => ("function" == typeof e ? e : t),
          nullable_array = (e) => (Array.isArray(e) ? e : null),
          nullable_function = (e) => ("function" == typeof e ? e : null),
          nullable_string = (e) =>
            null === e || "null" === e ? null : String(e),
          type_casters_number = (e, t = -1) => {
            const r = parseInt(e, 10);
            return Number.isNaN(r) ? t : r;
          },
          type_casters_object = (e, t = {}) => (Zs()(e) ? e : t),
          sorter = (e) =>
            "function" == typeof e || "string" == typeof e ? e : null,
          type_casters_string = (e) => String(e),
          syntax_highlight = (e, t) =>
            Zs()(e)
              ? e
              : !1 === e || "false" === e || 0 === e || "0" === e
                ? { activated: !1 }
                : t,
          undefined_string = (e) =>
            void 0 === e || "undefined" === e ? void 0 : String(e),
          Ro = {
            components: { typeCaster: type_casters_object },
            configs: { typeCaster: type_casters_object },
            configUrl: { typeCaster: nullable_string },
            deepLinking: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.deepLinking,
            },
            defaultModelExpandDepth: {
              typeCaster: type_casters_number,
              defaultValue: Io.defaultModelExpandDepth,
            },
            defaultModelRendering: { typeCaster: type_casters_string },
            defaultModelsExpandDepth: {
              typeCaster: type_casters_number,
              defaultValue: Io.defaultModelsExpandDepth,
            },
            displayOperationId: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.displayOperationId,
            },
            displayRequestDuration: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.displayRequestDuration,
            },
            docExpansion: { typeCaster: type_casters_string },
            dom_id: { typeCaster: nullable_string },
            domNode: { typeCaster: dom_node },
            filter: { typeCaster: type_casters_filter },
            fn: { typeCaster: type_casters_object },
            initialState: { typeCaster: type_casters_object },
            layout: { typeCaster: type_casters_string },
            maxDisplayedTags: {
              typeCaster: type_casters_number,
              defaultValue: Io.maxDisplayedTags,
            },
            modelPropertyMacro: { typeCaster: nullable_function },
            oauth2RedirectUrl: { typeCaster: undefined_string },
            onComplete: { typeCaster: nullable_function },
            operationsSorter: { typeCaster: sorter },
            paramaterMacro: { typeCaster: nullable_function },
            persistAuthorization: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.persistAuthorization,
            },
            plugins: {
              typeCaster: type_casters_array,
              defaultValue: Io.plugins,
            },
            presets: {
              typeCaster: type_casters_array,
              defaultValue: Io.presets,
            },
            requestInterceptor: {
              typeCaster: type_casters_function,
              defaultValue: Io.requestInterceptor,
            },
            requestSnippets: {
              typeCaster: type_casters_object,
              defaultValue: Io.requestSnippets,
            },
            requestSnippetsEnabled: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.requestSnippetsEnabled,
            },
            responseInterceptor: {
              typeCaster: type_casters_function,
              defaultValue: Io.responseInterceptor,
            },
            showCommonExtensions: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.showCommonExtensions,
            },
            showExtensions: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.showExtensions,
            },
            showMutatedRequest: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.showMutatedRequest,
            },
            spec: { typeCaster: type_casters_object, defaultValue: Io.spec },
            supportedSubmitMethods: {
              typeCaster: type_casters_array,
              defaultValue: Io.supportedSubmitMethods,
            },
            syntaxHighlight: {
              typeCaster: syntax_highlight,
              defaultValue: Io.syntaxHighlight,
            },
            "syntaxHighlight.activated": {
              typeCaster: type_casters_boolean,
              defaultValue: Io.syntaxHighlight.activated,
            },
            "syntaxHighlight.theme": { typeCaster: type_casters_string },
            tagsSorter: { typeCaster: sorter },
            tryItOutEnabled: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.tryItOutEnabled,
            },
            url: { typeCaster: type_casters_string },
            urls: { typeCaster: nullable_array },
            "urls.primaryName": { typeCaster: type_casters_string },
            validatorUrl: { typeCaster: nullable_string },
            withCredentials: {
              typeCaster: type_casters_boolean,
              defaultValue: Io.withCredentials,
            },
          },
          type_cast = (e) =>
            Object.entries(Ro).reduce(
              (e, [t, { typeCaster: r, defaultValue: a }]) => {
                if (jo()(e, t)) {
                  const n = r(He()(e, t), a);
                  e = Mo()(t, n, e);
                }
                return e;
              },
              { ...e },
            ),
          config_merge = (e, ...t) => {
            let r = Symbol.for("domNode"),
              a = Symbol.for("primaryName");
            const n = [];
            for (const e of t) {
              const t = { ...e };
              Object.hasOwn(t, "domNode") &&
                ((r = t.domNode), delete t.domNode),
                Object.hasOwn(t, "urls.primaryName")
                  ? ((a = t["urls.primaryName"]), delete t["urls.primaryName"])
                  : Array.isArray(t.urls) &&
                    Object.hasOwn(t.urls, "primaryName") &&
                    ((a = t.urls.primaryName), delete t.urls.primaryName),
                n.push(t);
            }
            const s = I()(e, ...n);
            return (
              r !== Symbol.for("domNode") && (s.domNode = r),
              a !== Symbol.for("primaryName") &&
                Array.isArray(s.urls) &&
                (s.urls.primaryName = a),
              type_cast(s)
            );
          };
        function SwaggerUI(e) {
          const t = query()(e),
            r = runtime()(),
            a = SwaggerUI.config.merge({}, SwaggerUI.config.defaults, r, e, t),
            n = factorization_system(a),
            s = inline_plugin(a),
            o = new Store(n);
          o.register([a.plugins, s]);
          const l = o.getSystem(),
            persistConfigs = (e) => {
              o.setConfigs(e), l.configsActions.loaded();
            },
            updateSpec = (e) => {
              !t.url &&
              "object" == typeof e.spec &&
              Object.keys(e.spec).length > 0
                ? (l.specActions.updateUrl(""),
                  l.specActions.updateLoadingStatus("success"),
                  l.specActions.updateSpec(JSON.stringify(e.spec)))
                : "function" == typeof l.specActions.download &&
                  e.url &&
                  !e.urls &&
                  (l.specActions.updateUrl(e.url),
                  l.specActions.download(e.url));
            },
            render = (e) => {
              if (e.domNode) l.render(e.domNode, "App");
              else if (e.dom_id) {
                const t = document.querySelector(e.dom_id);
                l.render(t, "App");
              } else
                null === e.dom_id ||
                  null === e.domNode ||
                  console.error(
                    "Skipped rendering: no `dom_id` or `domNode` was specified",
                  );
            };
          return a.configUrl
            ? ((async () => {
                const { configUrl: e } = a,
                  r = await sources_url({ url: e, system: l })(a),
                  n = SwaggerUI.config.merge({}, a, r, t);
                persistConfigs(n), null !== r && updateSpec(n), render(n);
              })(),
              l)
            : (persistConfigs(a), updateSpec(a), render(a), l);
        }
        (SwaggerUI.System = Store),
          (SwaggerUI.config = {
            defaults: Io,
            merge: config_merge,
            typeCast: type_cast,
            typeCastMappings: Ro,
          }),
          (SwaggerUI.presets = { base, apis: PresetApis }),
          (SwaggerUI.plugins = {
            Auth: auth,
            Configs: configsPlugin,
            DeepLining: deep_linking,
            Err: err,
            Filter: filter,
            Icons: icons,
            JSONSchema5: json_schema_5,
            JSONSchema5Samples: json_schema_5_samples,
            JSONSchema202012: json_schema_2020_12,
            JSONSchema202012Samples: json_schema_2020_12_samples,
            Layout: plugins_layout,
            Logs: logs,
            OpenAPI30: oas3,
            OpenAPI31: oas3,
            OnComplete: on_complete,
            RequestSnippets: plugins_request_snippets,
            Spec: plugins_spec,
            SwaggerClient: swagger_client,
            Util: util,
            View: view,
            ViewLegacy: view_legacy,
            DownloadUrl: downloadUrlPlugin,
            SyntaxHighlighting: syntax_highlighting,
            Versions: versions,
            SafeRender: safe_render,
          });
        const To = SwaggerUI;
      })(),
      (r = r.default)
    );
  })(),
);
//# sourceMappingURL=swagger-ui.js.map
