module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/@apollo/client/core [external] (@apollo/client/core, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@apollo/client/core");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@apollo/client/react [external] (@apollo/client/react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@apollo/client/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/@apollo/client/link/context [external] (@apollo/client/link/context, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@apollo/client/link/context");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/@sentry/react [external] (@sentry/react, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("@sentry/react");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/components/ErrorBoundary.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$react__$5b$external$5d$__$2840$sentry$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@sentry/react [external] (@sentry/react, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$react__$5b$external$5d$__$2840$sentry$2f$react$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$react__$5b$external$5d$__$2840$sentry$2f$react$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error: null
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by ErrorBoundary:', error);
        __TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$react__$5b$external$5d$__$2840$sentry$2f$react$2c$__esm_import$29$__["captureException"](error, {
            extra: errorInfo
        });
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                style: {
                    padding: '40px',
                    textAlign: 'center',
                    color: 'red'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Oops! Something went wrong."
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: this.state.error?.message
                    }, void 0, false, {
                        fileName: "[project]/components/ErrorBoundary.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ErrorBoundary.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@apollo/client/core [external] (@apollo/client/core, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@apollo/client/react [external] (@apollo/client/react, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/@apollo/client/link/context [external] (@apollo/client/link/context, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.tsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const httpLink = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__["createHttpLink"])({
    uri: "https://rickandmortyapi.com/graphql"
});
const authLink = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$link$2f$context__$5b$external$5d$__$2840$apollo$2f$client$2f$link$2f$context$2c$__esm_import$29$__["setContext"])((_, { headers })=>({
        headers: {
            ...headers
        }
    }));
const client = new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__["ApolloClient"]({
    link: authLink.concat(httpLink),
    cache: new __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$core__$5b$external$5d$__$2840$apollo$2f$client$2f$core$2c$__esm_import$29$__["InMemoryCache"]()
});
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client$2f$react__$5b$external$5d$__$2840$apollo$2f$client$2f$react$2c$__esm_import$29$__["ApolloProvider"], {
            client: client,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4c5f2034._.js.map