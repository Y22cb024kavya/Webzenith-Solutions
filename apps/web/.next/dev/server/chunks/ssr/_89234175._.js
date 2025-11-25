module.exports = [
"[project]/apps/web/components/auth/can.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Can",
    ()=>Can
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$auth$2f$permission$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/components/auth/permission-provider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
function Can({ perform, children, fallback = null // Optional: Show "Access Denied" text instead of null
 }) {
    const { permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$components$2f$auth$2f$permission$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    // The Magic Check
    if (!permissions.includes(perform)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: fallback
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/apps/web/app/dashboard/actions.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
"use turbopack no side effects";
;
;
;
}),
"[project]/apps/web/app/dashboard/data:0ae0d1 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40658a9929058b6b3f3838f6e8dae77ba2c8a3762e":"createLead"},"apps/web/app/dashboard/actions.ts",""] */ __turbopack_context__.s([
    "createLead",
    ()=>createLead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createLead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40658a9929058b6b3f3838f6e8dae77ba2c8a3762e", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createLead"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyUGVybWlzc2lvbnMgfSBmcm9tIFwiQC91dGlscy9wZXJtaXNzaW9uc1wiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyAtLS0gMS4gQ1JFQVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhZChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBwZXJtaXNzaW9ucyA9IGF3YWl0IGdldFVzZXJQZXJtaXNzaW9ucygpO1xyXG4gIGlmICghcGVybWlzc2lvbnMuaW5jbHVkZXMoJ2xlYWRzLmNyZWF0ZScpKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWNjZXNzIERlbmllZDogTWlzc2luZyAnbGVhZHMuY3JlYXRlJyBwZXJtaXNzaW9uXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgY29uc3QgY29tcGFueU5hbWUgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnlOYW1lJykgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KCd2YWx1ZScpIGFzIHN0cmluZztcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnbGVhZHMnKS5pbnNlcnQoeyBcclxuICAgIGNvbXBhbnlfbmFtZTogY29tcGFueU5hbWUsIFxyXG4gICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgIHN0YXR1czogJ05ldydcclxuICB9KTtcclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vIC0tLSAyLiBVUERBVEUgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWFkU3RhdHVzKGxlYWRJZDogc3RyaW5nLCBuZXdTdGF0dXM6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgaWYgKCFwZXJtaXNzaW9ucy5pbmNsdWRlcygnbGVhZHMudXBkYXRlJykpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICdsZWFkcy51cGRhdGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLnVwZGF0ZSh7IHN0YXR1czogbmV3U3RhdHVzIH0pLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyAtLS0gMy4gREVMRVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTGVhZChsZWFkSWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgLy8gUmV1c2luZyAndXNlcnMuZGVsZXRlJyBmb3IgdGhpcyBoaWdoLXJpc2sgYWN0aW9uIGRlbW9uc3RyYXRpb25cclxuICBpZiAoIXBlcm1pc3Npb25zLmluY2x1ZGVzKCd1c2Vycy5kZWxldGUnKSkgeyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICd1c2Vycy5kZWxldGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0FPc0IifQ==
}),
"[project]/apps/web/app/dashboard/data:2fb005 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60278df50d8167221ff0d1a815f3e5ab03706913cc":"updateLeadStatus"},"apps/web/app/dashboard/actions.ts",""] */ __turbopack_context__.s([
    "updateLeadStatus",
    ()=>updateLeadStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateLeadStatus = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60278df50d8167221ff0d1a815f3e5ab03706913cc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateLeadStatus"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyUGVybWlzc2lvbnMgfSBmcm9tIFwiQC91dGlscy9wZXJtaXNzaW9uc1wiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyAtLS0gMS4gQ1JFQVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhZChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBwZXJtaXNzaW9ucyA9IGF3YWl0IGdldFVzZXJQZXJtaXNzaW9ucygpO1xyXG4gIGlmICghcGVybWlzc2lvbnMuaW5jbHVkZXMoJ2xlYWRzLmNyZWF0ZScpKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWNjZXNzIERlbmllZDogTWlzc2luZyAnbGVhZHMuY3JlYXRlJyBwZXJtaXNzaW9uXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgY29uc3QgY29tcGFueU5hbWUgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnlOYW1lJykgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KCd2YWx1ZScpIGFzIHN0cmluZztcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnbGVhZHMnKS5pbnNlcnQoeyBcclxuICAgIGNvbXBhbnlfbmFtZTogY29tcGFueU5hbWUsIFxyXG4gICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgIHN0YXR1czogJ05ldydcclxuICB9KTtcclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vIC0tLSAyLiBVUERBVEUgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWFkU3RhdHVzKGxlYWRJZDogc3RyaW5nLCBuZXdTdGF0dXM6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgaWYgKCFwZXJtaXNzaW9ucy5pbmNsdWRlcygnbGVhZHMudXBkYXRlJykpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICdsZWFkcy51cGRhdGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLnVwZGF0ZSh7IHN0YXR1czogbmV3U3RhdHVzIH0pLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyAtLS0gMy4gREVMRVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTGVhZChsZWFkSWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgLy8gUmV1c2luZyAndXNlcnMuZGVsZXRlJyBmb3IgdGhpcyBoaWdoLXJpc2sgYWN0aW9uIGRlbW9uc3RyYXRpb25cclxuICBpZiAoIXBlcm1pc3Npb25zLmluY2x1ZGVzKCd1c2Vycy5kZWxldGUnKSkgeyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICd1c2Vycy5kZWxldGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIyU0E0QnNCIn0=
}),
"[project]/apps/web/app/dashboard/data:1b50b5 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4074d9d5118f9e09ed814d65c0c65566419dfa0795":"deleteLead"},"apps/web/app/dashboard/actions.ts",""] */ __turbopack_context__.s([
    "deleteLead",
    ()=>deleteLead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteLead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4074d9d5118f9e09ed814d65c0c65566419dfa0795", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteLead"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gXCJAL3V0aWxzL3N1cGFiYXNlL3NlcnZlclwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyUGVybWlzc2lvbnMgfSBmcm9tIFwiQC91dGlscy9wZXJtaXNzaW9uc1wiO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG4vLyAtLS0gMS4gQ1JFQVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTGVhZChmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICBjb25zdCBwZXJtaXNzaW9ucyA9IGF3YWl0IGdldFVzZXJQZXJtaXNzaW9ucygpO1xyXG4gIGlmICghcGVybWlzc2lvbnMuaW5jbHVkZXMoJ2xlYWRzLmNyZWF0ZScpKSB7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQWNjZXNzIERlbmllZDogTWlzc2luZyAnbGVhZHMuY3JlYXRlJyBwZXJtaXNzaW9uXCIgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KCk7XHJcbiAgY29uc3QgY29tcGFueU5hbWUgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnlOYW1lJykgYXMgc3RyaW5nO1xyXG4gIGNvbnN0IHZhbHVlID0gZm9ybURhdGEuZ2V0KCd2YWx1ZScpIGFzIHN0cmluZztcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2UuZnJvbSgnbGVhZHMnKS5pbnNlcnQoeyBcclxuICAgIGNvbXBhbnlfbmFtZTogY29tcGFueU5hbWUsIFxyXG4gICAgdmFsdWU6IHBhcnNlSW50KHZhbHVlKSxcclxuICAgIHN0YXR1czogJ05ldydcclxuICB9KTtcclxuXHJcbiAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTtcclxuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XHJcbn1cclxuXHJcbi8vIC0tLSAyLiBVUERBVEUgLS0tXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVMZWFkU3RhdHVzKGxlYWRJZDogc3RyaW5nLCBuZXdTdGF0dXM6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgaWYgKCFwZXJtaXNzaW9ucy5pbmNsdWRlcygnbGVhZHMudXBkYXRlJykpIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICdsZWFkcy51cGRhdGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLnVwZGF0ZSh7IHN0YXR1czogbmV3U3RhdHVzIH0pLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59XHJcblxyXG4vLyAtLS0gMy4gREVMRVRFIC0tLVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTGVhZChsZWFkSWQ6IHN0cmluZykge1xyXG4gIGNvbnN0IHBlcm1pc3Npb25zID0gYXdhaXQgZ2V0VXNlclBlcm1pc3Npb25zKCk7XHJcbiAgLy8gUmV1c2luZyAndXNlcnMuZGVsZXRlJyBmb3IgdGhpcyBoaWdoLXJpc2sgYWN0aW9uIGRlbW9uc3RyYXRpb25cclxuICBpZiAoIXBlcm1pc3Npb25zLmluY2x1ZGVzKCd1c2Vycy5kZWxldGUnKSkgeyBcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBY2Nlc3MgRGVuaWVkOiBNaXNzaW5nICd1c2Vycy5kZWxldGUnIHBlcm1pc3Npb25cIiB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3VwYWJhc2UgPSBhd2FpdCBjcmVhdGVDbGllbnQoKTtcclxuICBhd2FpdCBzdXBhYmFzZS5mcm9tKCdsZWFkcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGxlYWRJZCk7XHJcblxyXG4gIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkJyk7XHJcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xyXG59Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0EwQ3NCIn0=
}),
"[project]/apps/web/app/dashboard/actions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLead",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$0ae0d1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createLead"],
    "deleteLead",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$1b50b5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteLead"],
    "updateLeadStatus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$2fb005__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateLeadStatus"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/actions.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$0ae0d1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/data:0ae0d1 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$2fb005__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/data:2fb005 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$data$3a$1b50b5__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/data:1b50b5 [app-ssr] (ecmascript) <text/javascript>");
}),
"[project]/apps/web/components/delete-button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DeleteButton",
    ()=>DeleteButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/dashboard/actions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DeleteButton() {
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleClick = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$dashboard$2f$actions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDatabaseAction"])();
        setMessage(result.message);
        if (result.success) {
            alert("BOOM! Database deleted.");
        } else {
            alert("STOP! You are not allowed to do that.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleClick,
                className: "bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 font-medium transition-colors",
                children: "⚠️ Delete Entire Database"
            }, void 0, false, {
                fileName: "[project]/apps/web/components/delete-button.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$1_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm font-bold",
                children: message
            }, void 0, false, {
                fileName: "[project]/apps/web/components/delete-button.tsx",
                lineNumber: 28,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/components/delete-button.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.0.1_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=_89234175._.js.map