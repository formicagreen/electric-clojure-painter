goog.provide('hyperfiddle.electric_ui4');
hyperfiddle.electric_ui4.value = (function hyperfiddle$electric_ui4$value(e){
return e.target.value;
});
hyperfiddle.electric_ui4.checked = (function hyperfiddle$electric_ui4$checked(e){
return e.target.checked;
});
hyperfiddle.electric_ui4.parse_edn = (function hyperfiddle$electric_ui4$parse_edn(s){
try{var G__48153 = s;
var G__48153__$1 = (((G__48153 == null))?null:contrib.str.blank__GT_nil(G__48153));
if((G__48153__$1 == null)){
return null;
} else {
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(G__48153__$1);
}
}catch (e48152){var _ = e48152;
return null;
}});
hyperfiddle.electric_ui4.keep_if = (function hyperfiddle$electric_ui4$keep_if(pred,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return v;
} else {
return null;
}
});
hyperfiddle.electric_ui4.parse_keyword = (function hyperfiddle$electric_ui4$parse_keyword(s){
return hyperfiddle.electric_ui4.keep_if(cljs.core.keyword_QMARK_,hyperfiddle.electric_ui4.parse_edn(s));
});
hyperfiddle.electric_ui4.parse_symbol = (function hyperfiddle$electric_ui4$parse_symbol(s){
return hyperfiddle.electric_ui4.keep_if(cljs.core.symbol_QMARK_,hyperfiddle.electric_ui4.parse_edn(s));
});
hyperfiddle.electric_ui4.uuid_pattern = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
hyperfiddle.electric_ui4.parse_date = (function hyperfiddle$electric_ui4$parse_date(s){
try{return (new Date(s));
}catch (e48156){var _ = e48156;
return null;
}});
hyperfiddle.electric_ui4.parse_datetime_local = (function hyperfiddle$electric_ui4$parse_datetime_local(s){
try{return (new Date(s));
}catch (e48157){var _ = e48157;
return null;
}});
hyperfiddle.electric_ui4.first_option = (function hyperfiddle$electric_ui4$first_option(elem){
return elem.parentElement.firstElementChild;
});
hyperfiddle.electric_ui4.last_option = (function hyperfiddle$electric_ui4$last_option(elem){
return elem.parentElement.lastElementChild;
});
hyperfiddle.electric_ui4.next_option = (function hyperfiddle$electric_ui4$next_option(elem){
var or__5045__auto__ = elem.nextElementSibling;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.electric_ui4.first_option(elem);
}
});
hyperfiddle.electric_ui4.prev_option = (function hyperfiddle$electric_ui4$prev_option(elem){
var or__5045__auto__ = elem.previousElementSibling;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return hyperfiddle.electric_ui4.last_option(elem);
}
});
hyperfiddle.electric_ui4.own = (function hyperfiddle$electric_ui4$own(event){
event.stopPropagation();

return event.preventDefault();
});
hyperfiddle.electric_ui4._QMARK_pass_on_to_first = (function hyperfiddle$electric_ui4$_QMARK_pass_on_to_first(selected,elem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,elem)){
var fst = hyperfiddle.electric_ui4.first_option(elem);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fst,elem)){
return elem.parentElement.nextElementSibling;
} else {
return fst;
}
} else {
return selected;
}
});
hyperfiddle.electric_ui4.select_if_first = (function hyperfiddle$electric_ui4$select_if_first(selected,elem){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elem,hyperfiddle.electric_ui4.first_option(elem))){
return elem;
} else {
return selected;
}
});
hyperfiddle.electric_ui4.track_id = (function hyperfiddle$electric_ui4$track_id(node,id){
return (node.hyperfiddle_id = id);
});
hyperfiddle.electric_ui4.get_id = (function hyperfiddle$electric_ui4$get_id(node){
return node.hyperfiddle_id;
});
hyperfiddle.electric_ui4.focus = (function hyperfiddle$electric_ui4$focus(elem){
elem.focus(({"focusVisible": true}));

return window.setTimeout((function (){
elem.dispatchEvent((new FocusEvent("focus")));

return elem.dispatchEvent((new FocusEvent("focusin",({"bubbles": true}))));
}));
});
hyperfiddle.electric_ui4.sample_scroll_state_BANG_ = (function hyperfiddle$electric_ui4$sample_scroll_state_BANG_(scrollable){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [scrollable.scrollTop,scrollable.scrollHeight,scrollable.clientHeight], null);
});
hyperfiddle.electric_ui4.scroll_state_GT_ = (function hyperfiddle$electric_ui4$scroll_state_GT_(scrollable){
return missionary.core.observe((function (_BANG_){
var sample = (function (){
var G__48214 = hyperfiddle.electric_ui4.sample_scroll_state_BANG_(scrollable);
return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(G__48214) : _BANG_.call(null,G__48214));
});
scrollable.addEventListener("scroll",sample,({"passive": true}));

return (function (){
return scrollable.removeEventListener("scroll",sample);
});
}));
});
hyperfiddle.electric_ui4._BANG_scrollStateDebug = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
hyperfiddle.electric_ui4.scroll_state_LT_ = (function hyperfiddle$electric_ui4$scroll_state_LT_(scrollable){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (p__48215){
var vec__48216 = p__48215;
var scrollTop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(0),null);
var scrollHeight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(1),null);
var clientHeight = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(2),null);
var s = vec__48216;
cljs.core.reset_BANG_(hyperfiddle.electric_ui4._BANG_scrollStateDebug,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("hyperfiddle.electric-ui4","scrollTop","hyperfiddle.electric-ui4/scrollTop",583402921),scrollTop,new cljs.core.Keyword("hyperfiddle.electric-ui4","scrollHeight","hyperfiddle.electric-ui4/scrollHeight",1458584203),scrollHeight,new cljs.core.Keyword("hyperfiddle.electric-ui4","clientHeight","hyperfiddle.electric-ui4/clientHeight",1551343163),clientHeight], null));

return s;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.relieve(cljs.core.PersistentArrayMap.EMPTY,missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),hyperfiddle.electric.throttle((16),hyperfiddle.electric_ui4.scroll_state_GT_(scrollable))))], 0));
});

//# sourceMappingURL=hyperfiddle.electric_ui4.js.map
