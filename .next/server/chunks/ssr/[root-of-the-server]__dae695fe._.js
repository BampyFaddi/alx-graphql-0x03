module.exports = [
"[externals]/@sentry/nextjs [external] (@sentry/nextjs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@sentry/nextjs", () => require("@sentry/nextjs"));

module.exports = mod;
}),
"[externals]/next/error.js [external] (next/error.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/error.js", () => require("next/error.js"));

module.exports = mod;
}),
"[project]/pages/_error.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$nextjs__$5b$external$5d$__$2840$sentry$2f$nextjs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@sentry/nextjs [external] (@sentry/nextjs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$error$2e$js__$5b$external$5d$__$28$next$2f$error$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/error.js [external] (next/error.js, cjs)");
;
;
;
const CustomErrorComponent = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$error$2e$js__$5b$external$5d$__$28$next$2f$error$2e$js$2c$__cjs$29$__["default"], {
        statusCode: props.statusCode
    }, void 0, false, {
        fileName: "[project]/pages/_error.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
CustomErrorComponent.getInitialProps = async (contextData)=>{
    // In case this is running in a serverless function, await this in order to give Sentry
    // time to send the error before the lambda exits
    await __TURBOPACK__imported__module__$5b$externals$5d2f40$sentry$2f$nextjs__$5b$external$5d$__$2840$sentry$2f$nextjs$2c$__cjs$29$__["captureUnderscoreErrorException"](contextData);
    // This will contain the status code of the response
    return __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$error$2e$js__$5b$external$5d$__$28$next$2f$error$2e$js$2c$__cjs$29$__["default"].getInitialProps(contextData);
};
const __TURBOPACK__default__export__ = CustomErrorComponent;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dae695fe._.js.map