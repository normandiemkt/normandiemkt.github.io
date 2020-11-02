(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DashboardStockFlow"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/DashboardStockFlow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DashboardStockFlow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"DashboardStockFlow\",\n  data: function data() {\n    return {\n      headers: [{\n        text: \"ID\",\n        value: \"id\"\n      }, {\n        text: \"Produit\",\n        value: \"product.name\"\n      }, {\n        text: \"Establishment\",\n        value: \"branch.name\"\n      }, {\n        text: \"Direction\",\n        value: \"type\"\n      }, {\n        text: \"Date\",\n        value: \"created_at\"\n      }, {\n        text: \"Quantité\",\n        value: \"flow_quantity\"\n      }, {\n        text: \"Commande product_id (interne)\",\n        value: \"origin_id\"\n      }, {\n        text: \"Note\",\n        value: \"remark\"\n      }],\n      productsStockFlow: []\n    };\n  },\n  computed: {\n    products: function products() {\n      var _this = this;\n\n      if (this.$route.params.product_id) {\n        return this.productsStockFlow.filter(function (item) {\n          if (item.product.id == _this.$route.params.product_id) {\n            return true;\n          } else {\n            return false;\n          }\n        });\n      } else {\n        return this.productsStockFlow;\n      }\n    }\n  },\n  apollo: {\n    productsStockFlow: {\n      query: __webpack_require__(/*! @/graphql/products-stock-flow.gql */ \"./src/graphql/products-stock-flow.gql\"),\n      variables: function variables() {\n        return {\n          branchId: this.$store.getters[\"location/getBranchId\"],\n          regionId: this.$store.getters[\"location/getRegionId\"]\n        };\n      },\n      update: function update(data) {\n        return data.productsStockFlow.map(function (item) {\n          item.type = item.flow_quantity >= 0 ? \"Entrée\" : \"Sortie\";\n          item.flow_quantity = Math.abs(item.flow_quantity);\n          return item;\n        });\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/views/DashboardStockFlow.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2da0afc4-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2da0afc4-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-container\",\n    [\n      _c(\"h3\", { staticClass: \"primary--text\" }, [_vm._v(\"STOCK MOUVEMENT\")]),\n      _c(\"h6\", [_vm._v(_vm._s(_vm.$route.params.name))]),\n      _c(\"v-data-table\", {\n        staticClass: \"elevation-1 mt-8\",\n        attrs: {\n          headers: _vm.headers,\n          items: _vm.products,\n          \"items-per-page\": 15,\n          loading: _vm.$apollo.queries.productsStockFlow.loading\n        },\n        scopedSlots: _vm._u(\n          [\n            {\n              key: \"item.branch.name\",\n              fn: function(ref) {\n                var item = ref.item\n                return [\n                  _c(\"span\", { staticClass: \"font-weight-bold\" }, [\n                    _vm._v(_vm._s(item.branch.name))\n                  ])\n                ]\n              }\n            },\n            {\n              key: \"item.product.name\",\n              fn: function(ref) {\n                var item = ref.item\n                return [\n                  _c(\n                    \"router-link\",\n                    {\n                      staticClass: \"secondary--text\",\n                      attrs: { to: \"/dashboard/stock/flow/\" + item.product.id }\n                    },\n                    [_vm._v(_vm._s(item.product.name) + \" \")]\n                  )\n                ]\n              }\n            },\n            {\n              key: \"item.type\",\n              fn: function(ref) {\n                var item = ref.item\n                return [\n                  item.type === \"Entrée\"\n                    ? _c(\n                        \"div\",\n                        { staticClass: \"green--text\" },\n                        [\n                          _c(\"span\", [_vm._v(_vm._s(item.type))]),\n                          _c(\n                            \"v-icon\",\n                            { attrs: { \"x-small\": \"\", color: \"green\" } },\n                            [_vm._v(\" mdi-arrow-top-right-thick \")]\n                          )\n                        ],\n                        1\n                      )\n                    : _vm._e(),\n                  item.type === \"Sortie\"\n                    ? _c(\n                        \"div\",\n                        { staticClass: \"red--text\" },\n                        [\n                          _c(\"span\", [_vm._v(_vm._s(item.type))]),\n                          _c(\n                            \"v-icon\",\n                            { attrs: { \"x-small\": \"\", color: \"red\" } },\n                            [_vm._v(\" mdi-arrow-bottom-right-thick \")]\n                          )\n                        ],\n                        1\n                      )\n                    : _vm._e()\n                ]\n              }\n            },\n            {\n              key: \"item.actions\",\n              fn: function() {\n                return [\n                  _c(\n                    \"div\",\n                    { staticClass: \"d-inline\" },\n                    [\n                      _c(\n                        \"v-icon\",\n                        {\n                          attrs: { dark: \"\", color: \"blue\" },\n                          on: {\n                            click: function($event) {\n                              return false\n                            }\n                          }\n                        },\n                        [_vm._v(\" mdi-history \")]\n                      )\n                    ],\n                    1\n                  ),\n                  _c(\n                    \"div\",\n                    { staticClass: \"d-inline pl-1\" },\n                    [\n                      _c(\n                        \"v-icon\",\n                        {\n                          attrs: { dark: \"\", color: \"blue\" },\n                          on: {\n                            click: function($event) {\n                              return false\n                            }\n                          }\n                        },\n                        [_vm._v(\" mdi-eye-settings-outline \")]\n                      )\n                    ],\n                    1\n                  )\n                ]\n              },\n              proxy: true\n            },\n            {\n              key: \"no-data\",\n              fn: function() {\n                return [\n                  _c(\"span\", [\n                    _vm._v(\n                      \" Sélectionnez une succursale pour afficher le flux de stock\"\n                    )\n                  ])\n                ]\n              },\n              proxy: true\n            }\n          ],\n          null,\n          true\n        )\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/DashboardStockFlow.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%222da0afc4-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/graphql/products-stock-flow.gql":
/*!*********************************************!*\
  !*** ./src/graphql/products-stock-flow.gql ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"name\":{\"kind\":\"Name\",\"value\":\"productsStockFlow\"},\"variableDefinitions\":[{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"branchId\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}},\"directives\":[]},{\"kind\":\"VariableDefinition\",\"variable\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"regionId\"}},\"type\":{\"kind\":\"NamedType\",\"name\":{\"kind\":\"Name\",\"value\":\"Int\"}},\"directives\":[]}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"productsStockFlow\"},\"arguments\":[{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"branch_id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"branchId\"}}},{\"kind\":\"Argument\",\"name\":{\"kind\":\"Name\",\"value\":\"region_id\"},\"value\":{\"kind\":\"Variable\",\"name\":{\"kind\":\"Name\",\"value\":\"regionId\"}}}],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"origin_id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"remark\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"branch\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"product\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"id\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"name\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"price\"},\"arguments\":[],\"directives\":[]}]}},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"flow_quantity\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"created_at\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":303}};\n    doc.loc.source = {\"body\":\"query productsStockFlow($branchId: Int, $regionId: Int) {\\r\\n  productsStockFlow(branch_id: $branchId, region_id: $regionId) {\\r\\n    id\\r\\n    origin_id\\r\\n    remark\\r\\n    branch{\\r\\n      id\\r\\n      name\\r\\n    }\\r\\n    product {\\r\\n      id\\r\\n      name\\r\\n      price\\r\\n    }\\r\\n    flow_quantity\\r\\n    created_at\\r\\n  }\\r\\n}\\r\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \r\n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \r\n\n    // Collect any fragment/type references from a node, adding them to the refs Set\n    function collectFragmentReferences(node, refs) {\n      if (node.kind === \"FragmentSpread\") {\n        refs.add(node.name.value);\n      } else if (node.kind === \"VariableDefinition\") {\n        var type = node.type;\n        if (type.kind === \"NamedType\") {\n          refs.add(type.name.value);\n        }\n      }\n\n      if (node.selectionSet) {\n        node.selectionSet.selections.forEach(function(selection) {\n          collectFragmentReferences(selection, refs);\n        });\n      }\n\n      if (node.variableDefinitions) {\n        node.variableDefinitions.forEach(function(def) {\n          collectFragmentReferences(def, refs);\n        });\n      }\n\n      if (node.definitions) {\n        node.definitions.forEach(function(def) {\n          collectFragmentReferences(def, refs);\n        });\n      }\n    }\n\n    var definitionRefs = {};\n    (function extractReferences() {\n      doc.definitions.forEach(function(def) {\n        if (def.name) {\n          var refs = new Set();\n          collectFragmentReferences(def, refs);\n          definitionRefs[def.name.value] = refs;\n        }\n      });\n    })();\n\n    function findOperation(doc, name) {\n      for (var i = 0; i < doc.definitions.length; i++) {\n        var element = doc.definitions[i];\n        if (element.name && element.name.value == name) {\n          return element;\n        }\n      }\n    }\n\n    function oneQuery(doc, operationName) {\n      // Copy the DocumentNode, but clear out the definitions\n      var newDoc = {\n        kind: doc.kind,\n        definitions: [findOperation(doc, operationName)]\n      };\n      if (doc.hasOwnProperty(\"loc\")) {\n        newDoc.loc = doc.loc;\n      }\n\n      // Now, for the operation we're running, find any fragments referenced by\n      // it or the fragments it references\n      var opRefs = definitionRefs[operationName] || new Set();\n      var allRefs = new Set();\n      var newRefs = new Set();\n\n      // IE 11 doesn't support \"new Set(iterable)\", so we add the members of opRefs to newRefs one by one\n      opRefs.forEach(function(refName) {\n        newRefs.add(refName);\n      });\n\n      while (newRefs.size > 0) {\n        var prevRefs = newRefs;\n        newRefs = new Set();\n\n        prevRefs.forEach(function(refName) {\n          if (!allRefs.has(refName)) {\n            allRefs.add(refName);\n            var childRefs = definitionRefs[refName] || new Set();\n            childRefs.forEach(function(childRef) {\n              newRefs.add(childRef);\n            });\n          }\n        });\n      }\n\n      allRefs.forEach(function(refName) {\n        var op = findOperation(doc, refName);\n        if (op) {\n          newDoc.definitions.push(op);\n        }\n      });\n\n      return newDoc;\n    }\n\n    module.exports = doc;\n    \n        module.exports[\"productsStockFlow\"] = oneQuery(doc, \"productsStockFlow\");\n        \r\n\n\n//# sourceURL=webpack:///./src/graphql/products-stock-flow.gql?");

/***/ }),

/***/ "./src/views/DashboardStockFlow.vue":
/*!******************************************!*\
  !*** ./src/views/DashboardStockFlow.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardStockFlow.vue?vue&type=template&id=305cb62c& */ \"./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c&\");\n/* harmony import */ var _DashboardStockFlow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardStockFlow.vue?vue&type=script&lang=js& */ \"./src/views/DashboardStockFlow.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/index.js\");\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ \"./node_modules/vuetify/lib/components/VDataTable/index.js\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"./node_modules/vuetify/lib/components/VIcon/index.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _DashboardStockFlow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__[\"VContainer\"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_5__[\"VDataTable\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__[\"VIcon\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/views/DashboardStockFlow.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/views/DashboardStockFlow.vue?");

/***/ }),

/***/ "./src/views/DashboardStockFlow.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/views/DashboardStockFlow.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardStockFlow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./DashboardStockFlow.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/DashboardStockFlow.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardStockFlow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/views/DashboardStockFlow.vue?");

/***/ }),

/***/ "./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c&":
/*!*************************************************************************!*\
  !*** ./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2da0afc4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2da0afc4-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./DashboardStockFlow.vue?vue&type=template&id=305cb62c& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"2da0afc4-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/DashboardStockFlow.vue?vue&type=template&id=305cb62c&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2da0afc4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2da0afc4_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardStockFlow_vue_vue_type_template_id_305cb62c___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/views/DashboardStockFlow.vue?");

/***/ })

}]);