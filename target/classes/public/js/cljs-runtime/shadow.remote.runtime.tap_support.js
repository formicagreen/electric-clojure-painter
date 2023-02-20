goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37179,p__37180){
var map__37181 = p__37179;
var map__37181__$1 = cljs.core.__destructure_map(map__37181);
var svc = map__37181__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37181__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37182 = p__37180;
var map__37182__$1 = cljs.core.__destructure_map(map__37182);
var msg = map__37182__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37182__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37182__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37187,p__37188){
var map__37192 = p__37187;
var map__37192__$1 = cljs.core.__destructure_map(map__37192);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37192__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37193 = p__37188;
var map__37193__$1 = cljs.core.__destructure_map(map__37193);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37193__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37194,p__37195){
var map__37196 = p__37194;
var map__37196__$1 = cljs.core.__destructure_map(map__37196);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37196__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37197 = p__37195;
var map__37197__$1 = cljs.core.__destructure_map(map__37197);
var msg = map__37197__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37197__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37202,tid){
var map__37203 = p__37202;
var map__37203__$1 = cljs.core.__destructure_map(map__37203);
var svc = map__37203__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37203__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37208 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37209 = null;
var count__37210 = (0);
var i__37211 = (0);
while(true){
if((i__37211 < count__37210)){
var vec__37230 = chunk__37209.cljs$core$IIndexed$_nth$arity$2(null,i__37211);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37230,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37230,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37258 = seq__37208;
var G__37259 = chunk__37209;
var G__37260 = count__37210;
var G__37261 = (i__37211 + (1));
seq__37208 = G__37258;
chunk__37209 = G__37259;
count__37210 = G__37260;
i__37211 = G__37261;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37208);
if(temp__5804__auto__){
var seq__37208__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37208__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37208__$1);
var G__37262 = cljs.core.chunk_rest(seq__37208__$1);
var G__37263 = c__5568__auto__;
var G__37264 = cljs.core.count(c__5568__auto__);
var G__37265 = (0);
seq__37208 = G__37262;
chunk__37209 = G__37263;
count__37210 = G__37264;
i__37211 = G__37265;
continue;
} else {
var vec__37236 = cljs.core.first(seq__37208__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37266 = cljs.core.next(seq__37208__$1);
var G__37267 = null;
var G__37268 = (0);
var G__37269 = (0);
seq__37208 = G__37266;
chunk__37209 = G__37267;
count__37210 = G__37268;
i__37211 = G__37269;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37204_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37204_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37205_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37205_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37206_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37206_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37207_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37207_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37251){
var map__37252 = p__37251;
var map__37252__$1 = cljs.core.__destructure_map(map__37252);
var svc = map__37252__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37252__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
