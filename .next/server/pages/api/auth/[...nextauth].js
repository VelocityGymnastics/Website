"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/discord":
/*!**********************************************!*\
  !*** external "next-auth/providers/discord" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/discord");

/***/ }),

/***/ "@t3-oss/env-nextjs":
/*!*************************************!*\
  !*** external "@t3-oss/env-nextjs" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("@t3-oss/env-nextjs");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/server/auth */ \"(api)/./src/server/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_1__]);\n_server_auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_server_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1c7QUFFNUMsaUVBQWVBLGdEQUFRQSxDQUFDQyxxREFBV0EsQ0FBQ0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phcnJldHMtYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/NTBhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwifi9zZXJ2ZXIvYXV0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/server/auth.ts":
/*!****************************!*\
  !*** ./src/server/auth.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   getServerAuthSession: () => (/* binding */ getServerAuthSession)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/discord */ \"next-auth/providers/discord\");\n/* harmony import */ var next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\n/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ~/server/db */ \"(api)/./src/server/db.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__]);\n([_env_mjs__WEBPACK_IMPORTED_MODULE_3__, _server_db__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n/**\n * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.\n *\n * @see https://next-auth.js.org/configuration/options\n */ const authOptions = {\n    callbacks: {\n        session: ({ session , user  })=>({\n                ...session,\n                user: {\n                    ...session.user,\n                    id: user.id\n                }\n            })\n    },\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_server_db__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_discord__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_ID,\n            clientSecret: _env_mjs__WEBPACK_IMPORTED_MODULE_3__.env.DISCORD_CLIENT_SECRET\n        })\n    ]\n};\n/**\n * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.\n *\n * @see https://next-auth.js.org/configuration/nextjs\n */ const getServerAuthSession = (ctx)=>{\n    return (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(ctx.req, ctx.res, authOptions);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRDtBQU12QztBQUN1QztBQUMxQjtBQUNLO0FBdUJyQzs7OztDQUlDLEdBQ00sTUFBTUssY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEMsU0FBUyxDQUFDLEVBQUVBLFFBQU8sRUFBRUMsS0FBSSxFQUFFLEdBQU07Z0JBQy9CLEdBQUdELE9BQU87Z0JBQ1ZDLE1BQU07b0JBQ0osR0FBR0QsUUFBUUMsSUFBSTtvQkFDZkMsSUFBSUQsS0FBS0M7Z0JBQ1g7WUFDRjtJQUNGO0lBQ0FDLFNBQVNWLHdFQUFhQSxDQUFDSSw4Q0FBTUE7SUFDN0JPLFdBQVc7UUFDVFQsa0VBQWVBLENBQUM7WUFDZFUsVUFBVVQseUNBQUdBLENBQUNVO1lBQ2RDLGNBQWNYLHlDQUFHQSxDQUFDWTtRQUNwQjtLQVVEO0FBQ0gsRUFBRTtBQUVGOzs7O0NBSUMsR0FDTSxNQUFNQyx1QkFBdUIsQ0FBQ0M7SUFJbkMsT0FBT2hCLDJEQUFnQkEsQ0FBQ2dCLElBQUlDLEtBQUtELElBQUlFLEtBQUtkO0FBQzVDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXJyZXRzLWFwcC8uL3NyYy9zZXJ2ZXIvYXV0aC50cz8yMmJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IHsgdHlwZSBHZXRTZXJ2ZXJTaWRlUHJvcHNDb250ZXh0IH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7XG4gIGdldFNlcnZlclNlc3Npb24sXG4gIHR5cGUgTmV4dEF1dGhPcHRpb25zLFxuICB0eXBlIERlZmF1bHRTZXNzaW9uLFxufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgRGlzY29yZFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2Rpc2NvcmRcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2Vudi5tanNcIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJ+L3NlcnZlci9kYlwiO1xuXG4vKipcbiAqIE1vZHVsZSBhdWdtZW50YXRpb24gZm9yIGBuZXh0LWF1dGhgIHR5cGVzLiBBbGxvd3MgdXMgdG8gYWRkIGN1c3RvbSBwcm9wZXJ0aWVzIHRvIHRoZSBgc2Vzc2lvbmBcbiAqIG9iamVjdCBhbmQga2VlcCB0eXBlIHNhZmV0eS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9nZXR0aW5nLXN0YXJ0ZWQvdHlwZXNjcmlwdCNtb2R1bGUtYXVnbWVudGF0aW9uXG4gKi9cbmRlY2xhcmUgbW9kdWxlIFwibmV4dC1hdXRoXCIge1xuICBpbnRlcmZhY2UgU2Vzc2lvbiBleHRlbmRzIERlZmF1bHRTZXNzaW9uIHtcbiAgICB1c2VyOiB7XG4gICAgICBpZDogc3RyaW5nO1xuICAgICAgLy8gLi4ub3RoZXIgcHJvcGVydGllc1xuICAgICAgLy8gcm9sZTogVXNlclJvbGU7XG4gICAgfSAmIERlZmF1bHRTZXNzaW9uW1widXNlclwiXTtcbiAgfVxuXG4gIC8vIGludGVyZmFjZSBVc2VyIHtcbiAgLy8gICAvLyAuLi5vdGhlciBwcm9wZXJ0aWVzXG4gIC8vICAgLy8gcm9sZTogVXNlclJvbGU7XG4gIC8vIH1cbn1cblxuLyoqXG4gKiBPcHRpb25zIGZvciBOZXh0QXV0aC5qcyB1c2VkIHRvIGNvbmZpZ3VyZSBhZGFwdGVycywgcHJvdmlkZXJzLCBjYWxsYmFja3MsIGV0Yy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL29wdGlvbnNcbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246ICh7IHNlc3Npb24sIHVzZXIgfSkgPT4gKHtcbiAgICAgIC4uLnNlc3Npb24sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIC4uLnNlc3Npb24udXNlcixcbiAgICAgICAgaWQ6IHVzZXIuaWQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9LFxuICBhZGFwdGVyOiBQcmlzbWFBZGFwdGVyKHByaXNtYSksXG4gIHByb3ZpZGVyczogW1xuICAgIERpc2NvcmRQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogZW52LkRJU0NPUkRfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBlbnYuRElTQ09SRF9DTElFTlRfU0VDUkVULFxuICAgIH0pLFxuICAgIC8qKlxuICAgICAqIC4uLmFkZCBtb3JlIHByb3ZpZGVycyBoZXJlLlxuICAgICAqXG4gICAgICogTW9zdCBvdGhlciBwcm92aWRlcnMgcmVxdWlyZSBhIGJpdCBtb3JlIHdvcmsgdGhhbiB0aGUgRGlzY29yZCBwcm92aWRlci4gRm9yIGV4YW1wbGUsIHRoZVxuICAgICAqIEdpdEh1YiBwcm92aWRlciByZXF1aXJlcyB5b3UgdG8gYWRkIHRoZSBgcmVmcmVzaF90b2tlbl9leHBpcmVzX2luYCBmaWVsZCB0byB0aGUgQWNjb3VudFxuICAgICAqIG1vZGVsLiBSZWZlciB0byB0aGUgTmV4dEF1dGguanMgZG9jcyBmb3IgdGhlIHByb3ZpZGVyIHlvdSB3YW50IHRvIHVzZS4gRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL3Byb3ZpZGVycy9naXRodWJcbiAgICAgKi9cbiAgXSxcbn07XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYGdldFNlcnZlclNlc3Npb25gIHNvIHRoYXQgeW91IGRvbid0IG5lZWQgdG8gaW1wb3J0IHRoZSBgYXV0aE9wdGlvbnNgIGluIGV2ZXJ5IGZpbGUuXG4gKlxuICogQHNlZSBodHRwczovL25leHQtYXV0aC5qcy5vcmcvY29uZmlndXJhdGlvbi9uZXh0anNcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlckF1dGhTZXNzaW9uID0gKGN0eDoge1xuICByZXE6IEdldFNlcnZlclNpZGVQcm9wc0NvbnRleHRbXCJyZXFcIl07XG4gIHJlczogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dFtcInJlc1wiXTtcbn0pID0+IHtcbiAgcmV0dXJuIGdldFNlcnZlclNlc3Npb24oY3R4LnJlcSwgY3R4LnJlcywgYXV0aE9wdGlvbnMpO1xufTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkRpc2NvcmRQcm92aWRlciIsImVudiIsInByaXNtYSIsImF1dGhPcHRpb25zIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwiZ2V0U2VydmVyQXV0aFNlc3Npb24iLCJjdHgiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/auth.ts\n");

/***/ }),

/***/ "(api)/./src/server/db.ts":
/*!**************************!*\
  !*** ./src/server/db.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/env.mjs */ \"(api)/./src/env.mjs\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_mjs__WEBPACK_IMPORTED_MODULE_1__]);\n_env_mjs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: _env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV === \"development\" ? [\n        \"query\",\n        \"error\",\n        \"warn\"\n    ] : [\n        \"error\"\n    ]\n});\nif (_env_mjs__WEBPACK_IMPORTED_MODULE_1__.env.NODE_ENV !== \"production\") globalForPrisma.prisma = prisma;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUVoQyxNQUFNRSxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQ1hGLGdCQUFnQkUsVUFDaEIsSUFBSUosd0RBQVlBLENBQUM7SUFDZkssS0FDRUoseUNBQUdBLENBQUNLLGFBQWEsZ0JBQWdCO1FBQUM7UUFBUztRQUFTO0tBQU8sR0FBRztRQUFDO0tBQVE7QUFDM0UsR0FBRztBQUVMLElBQUlMLHlDQUFHQSxDQUFDSyxhQUFhLGNBQWNKLGdCQUFnQkUsU0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXJyZXRzLWFwcC8uL3NyYy9zZXJ2ZXIvZGIudHM/YWE2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IGVudiB9IGZyb20gXCJ+L2Vudi5tanNcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgY29uc3QgcHJpc21hID1cbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/P1xuICBuZXcgUHJpc21hQ2xpZW50KHtcbiAgICBsb2c6XG4gICAgICBlbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiA/IFtcInF1ZXJ5XCIsIFwiZXJyb3JcIiwgXCJ3YXJuXCJdIDogW1wiZXJyb3JcIl0sXG4gIH0pO1xuXG5pZiAoZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJlbnYiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwicHJpc21hIiwibG9nIiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/server/db.ts\n");

/***/ }),

/***/ "(api)/./src/env.mjs":
/*!*********************!*\
  !*** ./src/env.mjs ***!
  \*********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-nextjs */ \"@t3-oss/env-nextjs\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);\n([_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst env = (0,_t3_oss_env_nextjs__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n    /**\n   * Specify your server-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars.\n   */ server: {\n        DATABASE_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url(),\n        NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_1__.z.enum([\n            \"development\",\n            \"test\",\n            \"production\"\n        ]),\n        NEXTAUTH_SECRET:  false ? 0 : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1).optional(),\n        NEXTAUTH_URL: zod__WEBPACK_IMPORTED_MODULE_1__.z.preprocess(// This makes Vercel deployments not fail if you don't set NEXTAUTH_URL\n        // Since NextAuth.js automatically uses the VERCEL_URL if present.\n        (str)=>process.env.VERCEL_URL ?? str, // VERCEL_URL doesn't include `https` so it cant be validated as a URL\n        process.env.VERCEL ? zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1) : zod__WEBPACK_IMPORTED_MODULE_1__.z.string().url()),\n        // Add `.min(1) on ID and SECRET if you want to make sure they're not empty\n        DISCORD_CLIENT_ID: zod__WEBPACK_IMPORTED_MODULE_1__.z.string(),\n        DISCORD_CLIENT_SECRET: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()\n    },\n    /**\n   * Specify your client-side environment variables schema here. This way you can ensure the app\n   * isn't built with invalid env vars. To expose them to the client, prefix them with\n   * `NEXT_PUBLIC_`.\n   */ client: {\n    },\n    /**\n   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.\n   * middlewares) or client-side so we need to destruct manually.\n   */ runtimeEnv: {\n        DATABASE_URL: process.env.DATABASE_URL,\n        NODE_ENV: \"development\",\n        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,\n        NEXTAUTH_URL: process.env.NEXTAUTH_URL,\n        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,\n        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET\n    },\n    /**\n   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.\n   * This is especially useful for Docker builds.\n   */ skipValidation: !!process.env.SKIP_ENV_VALIDATION\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZW52Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFDdkI7QUFFakIsTUFBTUUsTUFBTUYsNkRBQVNBLENBQUM7SUFDM0I7OztHQUdDLEdBQ0RHLFFBQVE7UUFDTkMsY0FBY0gsa0NBQUNBLENBQUNJLFNBQVNDO1FBQ3pCQyxVQUFVTixrQ0FBQ0EsQ0FBQ08sS0FBSztZQUFDO1lBQWU7WUFBUTtTQUFhO1FBQ3REQyxpQkFDRUMsTUFBcUMsR0FDakNULENBQWlCLEdBQ2pCQSxrQ0FBQ0EsQ0FBQ0ksU0FBU00sSUFBSSxHQUFHQztRQUN4QkMsY0FBY1osa0NBQUNBLENBQUNhLFdBQ2QsdUVBQXVFO1FBQ3ZFLGtFQUFrRTtRQUNsRSxDQUFDQyxNQUFRTCxRQUFRUixJQUFJYyxjQUFjRCxLQUNuQyxzRUFBc0U7UUFDdEVMLFFBQVFSLElBQUllLFNBQVNoQixrQ0FBQ0EsQ0FBQ0ksU0FBU00sSUFBSSxLQUFLVixrQ0FBQ0EsQ0FBQ0ksU0FBU0M7UUFFdEQsMkVBQTJFO1FBQzNFWSxtQkFBbUJqQixrQ0FBQ0EsQ0FBQ0k7UUFDckJjLHVCQUF1QmxCLGtDQUFDQSxDQUFDSTtJQUMzQjtJQUVBOzs7O0dBSUMsR0FDRGUsUUFBUTtJQUVSO0lBRUE7OztHQUdDLEdBQ0RDLFlBQVk7UUFDVmpCLGNBQWNNLFFBQVFSLElBQUlFO1FBQzFCRyxVQTFDSjtRQTJDSUUsaUJBQWlCQyxRQUFRUixJQUFJTztRQUM3QkksY0FBY0gsUUFBUVIsSUFBSVc7UUFDMUJLLG1CQUFtQlIsUUFBUVIsSUFBSWdCO1FBQy9CQyx1QkFBdUJULFFBQVFSLElBQUlpQjtJQUNyQztJQUNBOzs7R0FHQyxHQUNERyxnQkFBZ0IsQ0FBQyxDQUFDWixRQUFRUixJQUFJcUI7QUFDaEMsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2phcnJldHMtYXBwLy4vc3JjL2Vudi5tanM/YzNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbnYgfSBmcm9tIFwiQHQzLW9zcy9lbnYtbmV4dGpzXCI7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY29uc3QgZW52ID0gY3JlYXRlRW52KHtcbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBzZXJ2ZXItc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLlxuICAgKi9cbiAgc2VydmVyOiB7XG4gICAgREFUQUJBU0VfVVJMOiB6LnN0cmluZygpLnVybCgpLFxuICAgIE5PREVfRU5WOiB6LmVudW0oW1wiZGV2ZWxvcG1lbnRcIiwgXCJ0ZXN0XCIsIFwicHJvZHVjdGlvblwiXSksXG4gICAgTkVYVEFVVEhfU0VDUkVUOlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gei5zdHJpbmcoKS5taW4oMSlcbiAgICAgICAgOiB6LnN0cmluZygpLm1pbigxKS5vcHRpb25hbCgpLFxuICAgIE5FWFRBVVRIX1VSTDogei5wcmVwcm9jZXNzKFxuICAgICAgLy8gVGhpcyBtYWtlcyBWZXJjZWwgZGVwbG95bWVudHMgbm90IGZhaWwgaWYgeW91IGRvbid0IHNldCBORVhUQVVUSF9VUkxcbiAgICAgIC8vIFNpbmNlIE5leHRBdXRoLmpzIGF1dG9tYXRpY2FsbHkgdXNlcyB0aGUgVkVSQ0VMX1VSTCBpZiBwcmVzZW50LlxuICAgICAgKHN0cikgPT4gcHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTCA/PyBzdHIsXG4gICAgICAvLyBWRVJDRUxfVVJMIGRvZXNuJ3QgaW5jbHVkZSBgaHR0cHNgIHNvIGl0IGNhbnQgYmUgdmFsaWRhdGVkIGFzIGEgVVJMXG4gICAgICBwcm9jZXNzLmVudi5WRVJDRUwgPyB6LnN0cmluZygpLm1pbigxKSA6IHouc3RyaW5nKCkudXJsKCksXG4gICAgKSxcbiAgICAvLyBBZGQgYC5taW4oMSkgb24gSUQgYW5kIFNFQ1JFVCBpZiB5b3Ugd2FudCB0byBtYWtlIHN1cmUgdGhleSdyZSBub3QgZW1wdHlcbiAgICBESVNDT1JEX0NMSUVOVF9JRDogei5zdHJpbmcoKSxcbiAgICBESVNDT1JEX0NMSUVOVF9TRUNSRVQ6IHouc3RyaW5nKCksXG4gIH0sXG5cbiAgLyoqXG4gICAqIFNwZWNpZnkgeW91ciBjbGllbnQtc2lkZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgc2NoZW1hIGhlcmUuIFRoaXMgd2F5IHlvdSBjYW4gZW5zdXJlIHRoZSBhcHBcbiAgICogaXNuJ3QgYnVpbHQgd2l0aCBpbnZhbGlkIGVudiB2YXJzLiBUbyBleHBvc2UgdGhlbSB0byB0aGUgY2xpZW50LCBwcmVmaXggdGhlbSB3aXRoXG4gICAqIGBORVhUX1BVQkxJQ19gLlxuICAgKi9cbiAgY2xpZW50OiB7XG4gICAgLy8gTkVYVF9QVUJMSUNfQ0xJRU5UVkFSOiB6LnN0cmluZygpLm1pbigxKSxcbiAgfSxcblxuICAvKipcbiAgICogWW91IGNhbid0IGRlc3RydWN0IGBwcm9jZXNzLmVudmAgYXMgYSByZWd1bGFyIG9iamVjdCBpbiB0aGUgTmV4dC5qcyBlZGdlIHJ1bnRpbWVzIChlLmcuXG4gICAqIG1pZGRsZXdhcmVzKSBvciBjbGllbnQtc2lkZSBzbyB3ZSBuZWVkIHRvIGRlc3RydWN0IG1hbnVhbGx5LlxuICAgKi9cbiAgcnVudGltZUVudjoge1xuICAgIERBVEFCQVNFX1VSTDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMLFxuICAgIE5PREVfRU5WOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbiAgICBORVhUQVVUSF9TRUNSRVQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgICBORVhUQVVUSF9VUkw6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgICBESVNDT1JEX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuRElTQ09SRF9DTElFTlRfSUQsXG4gICAgRElTQ09SRF9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQsXG4gIH0sXG4gIC8qKlxuICAgKiBSdW4gYGJ1aWxkYCBvciBgZGV2YCB3aXRoIGBTS0lQX0VOVl9WQUxJREFUSU9OYCB0byBza2lwIGVudiB2YWxpZGF0aW9uLlxuICAgKiBUaGlzIGlzIGVzcGVjaWFsbHkgdXNlZnVsIGZvciBEb2NrZXIgYnVpbGRzLlxuICAgKi9cbiAgc2tpcFZhbGlkYXRpb246ICEhcHJvY2Vzcy5lbnYuU0tJUF9FTlZfVkFMSURBVElPTixcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUVudiIsInoiLCJlbnYiLCJzZXJ2ZXIiLCJEQVRBQkFTRV9VUkwiLCJzdHJpbmciLCJ1cmwiLCJOT0RFX0VOViIsImVudW0iLCJORVhUQVVUSF9TRUNSRVQiLCJwcm9jZXNzIiwibWluIiwib3B0aW9uYWwiLCJORVhUQVVUSF9VUkwiLCJwcmVwcm9jZXNzIiwic3RyIiwiVkVSQ0VMX1VSTCIsIlZFUkNFTCIsIkRJU0NPUkRfQ0xJRU5UX0lEIiwiRElTQ09SRF9DTElFTlRfU0VDUkVUIiwiY2xpZW50IiwicnVudGltZUVudiIsInNraXBWYWxpZGF0aW9uIiwiU0tJUF9FTlZfVkFMSURBVElPTiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/env.mjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();