// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_mapperRt = require("bs-platform/lib/js/js_mapperRt.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var ReactNative = require("react-native");
var UtilsRN$BsReactNative = require("../private/utilsRN.js");

function jsSectionToSection(jsSection) {
  return /* record */[
          /* data */jsSection.data,
          /* key */Js_primitive.undefined_to_opt(jsSection.key),
          /* renderItem */undefined
        ];
}

function renderItem(reRenderItem, jsRenderBag) {
  return Curry._1(reRenderItem, /* record */[
              /* item */jsRenderBag.item,
              /* index */jsRenderBag.index,
              /* section */jsSectionToSection(jsRenderBag.section),
              /* separators */jsRenderBag.separators
            ]);
}

function section(data, key, renderItem, _) {
  return /* record */[
          /* data */data,
          /* key */key,
          /* renderItem */renderItem
        ];
}

function sections(reSections) {
  return $$Array.map((function (reSection) {
                return {
                        data: reSection[/* data */0],
                        key: Js_undefined.fromOption(reSection[/* key */1]),
                        renderItem: Js_undefined.fromOption(UtilsRN$BsReactNative.option_map(renderItem, reSection[/* renderItem */2]))
                      };
              }), reSections);
}

function separatorComponent(reSeparatorComponent, jsSeparatorProps) {
  return Curry._1(reSeparatorComponent, /* record */[
              /* highlighted */jsSeparatorProps.highlighted,
              /* leadingItem */Js_primitive.undefined_to_opt(jsSeparatorProps.leadingItem),
              /* leadingSection */UtilsRN$BsReactNative.option_map(jsSectionToSection, Js_primitive.undefined_to_opt(jsSeparatorProps.leadingSection)),
              /* section */jsSectionToSection(jsSeparatorProps.section),
              /* trailingItem */Js_primitive.undefined_to_opt(jsSeparatorProps.trailingItem),
              /* trailingSection */UtilsRN$BsReactNative.option_map(jsSectionToSection, Js_primitive.undefined_to_opt(jsSeparatorProps.trailingSection))
            ]);
}

function renderAccessoryView(reRenderAccessory, jsRenderAccessory) {
  return Curry._1(reRenderAccessory, /* record */[/* section */jsSectionToSection(jsRenderAccessory.section)]);
}

var jsMapperConstantArray = /* array */[
  /* tuple */[
    -922086728,
    "none"
  ],
  /* tuple */[
    -453364557,
    "onDrag"
  ],
  /* tuple */[
    1012481506,
    "interactive"
  ]
];

function keyboardDismissModeToJs(param) {
  return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray);
}

var jsMapperConstantArray$1 = /* array */[
  /* tuple */[
    -975851588,
    "handled"
  ],
  /* tuple */[
    -958984497,
    "always"
  ],
  /* tuple */[
    422592140,
    "never"
  ]
];

function keyboardShouldPersistTapsToJs(param) {
  return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray$1);
}

function make(sections, renderItem, keyExtractor, itemSeparatorComponent, listEmptyComponent, listFooterComponent, listHeaderComponent, sectionSeparatorComponent, inverted, extraData, initialNumToRender, onEndReached, onEndReachedThreshold, onViewableItemsChanged, onRefresh, refreshing, renderSectionHeader, renderSectionFooter, stickySectionHeadersEnabled, keyboardDismissMode, keyboardShouldPersistTaps, showsHorizontalScrollIndicator, showsVerticalScrollIndicator, getItemLayout, _children) {
  return ReasonReact.wrapJsForReason(ReactNative.SectionList, {
              sections: sections,
              renderItem: renderItem,
              keyExtractor: keyExtractor,
              ItemSeparatorComponent: Js_undefined.fromOption(itemSeparatorComponent),
              ListEmptyComponent: Js_undefined.fromOption(listEmptyComponent),
              ListFooterComponent: Js_undefined.fromOption(listFooterComponent),
              ListHeaderComponent: Js_undefined.fromOption(listHeaderComponent),
              SectionSeparatorComponent: Js_undefined.fromOption(sectionSeparatorComponent),
              inverted: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(inverted)),
              extraData: Js_undefined.fromOption(extraData),
              initialNumToRender: Js_undefined.fromOption(initialNumToRender),
              onEndReached: Js_undefined.fromOption(onEndReached),
              onEndReachedThreshold: Js_undefined.fromOption(onEndReachedThreshold),
              onRefresh: Js_undefined.fromOption(onRefresh),
              onViewableItemsChanged: Js_undefined.fromOption(onViewableItemsChanged),
              refreshing: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(refreshing)),
              renderSectionHeader: Js_undefined.fromOption(renderSectionHeader),
              renderSectionFooter: Js_undefined.fromOption(renderSectionFooter),
              stickySectionHeadersEnabled: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(stickySectionHeadersEnabled)),
              keyboardDismissMode: Js_undefined.fromOption(UtilsRN$BsReactNative.option_map(keyboardDismissModeToJs, keyboardDismissMode)),
              keyboardShouldPersistTaps: Js_undefined.fromOption(UtilsRN$BsReactNative.option_map(keyboardShouldPersistTapsToJs, keyboardShouldPersistTaps)),
              showsHorizontalScrollIndicator: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(showsHorizontalScrollIndicator)),
              showsVerticalScrollIndicator: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(showsVerticalScrollIndicator)),
              getItemLayout: Js_undefined.fromOption(UtilsRN$BsReactNative.option_map((function (f, data, index) {
                          return Curry._2(f, data === undefined ? undefined : Js_primitive.some(data), index);
                        }), getItemLayout))
            }, _children);
}

exports.section = section;
exports.sections = sections;
exports.renderItem = renderItem;
exports.separatorComponent = separatorComponent;
exports.renderAccessoryView = renderAccessoryView;
exports.make = make;
/* ReasonReact Not a pure module */
