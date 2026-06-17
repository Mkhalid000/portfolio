(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_TopProgressbar_jsx_a0723d26._.js", {

"[project]/components/TopProgressbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>TopProgressbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nprogress/nprogress.js [app-client] (ecmascript)");
"use client";
;
;
let timer;
let state;
let activeRequests = 0;
function load() {
    if (state === "loading") {
        return;
    }
    state = "loading";
    timer = setTimeout(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].start();
    }, 1);
}
function stop() {
    if (activeRequests > 0) {
        return;
    }
    state = "stop";
    clearTimeout(timer);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].done();
}
function routeChangeStart() {
    if (window.location.pathname !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pathname) {
        load();
    }
}
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeStart", routeChangeStart);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeComplete", stop);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeError", stop);
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    if (activeRequests === 0) {
        load();
    }
    activeRequests++;
    try {
        const response = await originalFetch(...args);
        return response;
    } catch (error) {
        return Promise.reject(error);
    } finally{
        activeRequests -= 1;
        if (activeRequests === 0) {
            stop();
        }
    }
};
function TopProgressbar() {
    return null;
}
_c = TopProgressbar;
var _c;
__turbopack_context__.k.register(_c, "TopProgressbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/TopProgressbar.jsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/TopProgressbar.jsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=components_TopProgressbar_jsx_a0723d26._.js.map