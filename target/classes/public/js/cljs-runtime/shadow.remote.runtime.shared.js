goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33280,res){
var map__33281 = p__33280;
var map__33281__$1 = cljs.core.__destructure_map(map__33281);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33281__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33281__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33288 = res;
var G__33288__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33288,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33288);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33288__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33288__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33298,msg,handlers,timeout_after_ms){
var map__33299 = p__33298;
var map__33299__$1 = cljs.core.__destructure_map(map__33299);
var runtime = map__33299__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33520 = arguments.length;
var i__5770__auto___33521 = (0);
while(true){
if((i__5770__auto___33521 < len__5769__auto___33520)){
args__5775__auto__.push((arguments[i__5770__auto___33521]));

var G__33522 = (i__5770__auto___33521 + (1));
i__5770__auto___33521 = G__33522;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33309,ev,args){
var map__33310 = p__33309;
var map__33310__$1 = cljs.core.__destructure_map(map__33310);
var runtime = map__33310__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33310__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33311 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33314 = null;
var count__33315 = (0);
var i__33316 = (0);
while(true){
if((i__33316 < count__33315)){
var ext = chunk__33314.cljs$core$IIndexed$_nth$arity$2(null,i__33316);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33536 = seq__33311;
var G__33537 = chunk__33314;
var G__33538 = count__33315;
var G__33539 = (i__33316 + (1));
seq__33311 = G__33536;
chunk__33314 = G__33537;
count__33315 = G__33538;
i__33316 = G__33539;
continue;
} else {
var G__33544 = seq__33311;
var G__33545 = chunk__33314;
var G__33546 = count__33315;
var G__33547 = (i__33316 + (1));
seq__33311 = G__33544;
chunk__33314 = G__33545;
count__33315 = G__33546;
i__33316 = G__33547;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33311);
if(temp__5804__auto__){
var seq__33311__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33311__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33311__$1);
var G__33554 = cljs.core.chunk_rest(seq__33311__$1);
var G__33555 = c__5568__auto__;
var G__33556 = cljs.core.count(c__5568__auto__);
var G__33557 = (0);
seq__33311 = G__33554;
chunk__33314 = G__33555;
count__33315 = G__33556;
i__33316 = G__33557;
continue;
} else {
var ext = cljs.core.first(seq__33311__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33559 = cljs.core.next(seq__33311__$1);
var G__33560 = null;
var G__33561 = (0);
var G__33562 = (0);
seq__33311 = G__33559;
chunk__33314 = G__33560;
count__33315 = G__33561;
i__33316 = G__33562;
continue;
} else {
var G__33563 = cljs.core.next(seq__33311__$1);
var G__33564 = null;
var G__33565 = (0);
var G__33566 = (0);
seq__33311 = G__33563;
chunk__33314 = G__33564;
count__33315 = G__33565;
i__33316 = G__33566;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33306){
var G__33307 = cljs.core.first(seq33306);
var seq33306__$1 = cljs.core.next(seq33306);
var G__33308 = cljs.core.first(seq33306__$1);
var seq33306__$2 = cljs.core.next(seq33306__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33307,G__33308,seq33306__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33336,p__33337){
var map__33351 = p__33336;
var map__33351__$1 = cljs.core.__destructure_map(map__33351);
var runtime = map__33351__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33352 = p__33337;
var map__33352__$1 = cljs.core.__destructure_map(map__33352);
var msg = map__33352__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33352__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33353 = cljs.core.deref(state_ref);
var map__33353__$1 = cljs.core.__destructure_map(map__33353);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33353__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33353__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33357){
var map__33359 = p__33357;
var map__33359__$1 = cljs.core.__destructure_map(map__33359);
var runtime = map__33359__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33359__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33380,msg){
var map__33381 = p__33380;
var map__33381__$1 = cljs.core.__destructure_map(map__33381);
var runtime = map__33381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33385,key,p__33386){
var map__33388 = p__33385;
var map__33388__$1 = cljs.core.__destructure_map(map__33388);
var state = map__33388__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33388__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33390 = p__33386;
var map__33390__$1 = cljs.core.__destructure_map(map__33390);
var spec = map__33390__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33390__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33394,key,spec){
var map__33396 = p__33394;
var map__33396__$1 = cljs.core.__destructure_map(map__33396);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33400_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33400_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33401_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33401_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33402_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33402_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33403_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33403_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33404_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33404_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33414,key){
var map__33415 = p__33414;
var map__33415__$1 = cljs.core.__destructure_map(map__33415);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33422,msg){
var map__33423 = p__33422;
var map__33423__$1 = cljs.core.__destructure_map(map__33423);
var runtime = map__33423__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33423__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33433,p__33434){
var map__33435 = p__33433;
var map__33435__$1 = cljs.core.__destructure_map(map__33435);
var runtime = map__33435__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33435__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33437 = p__33434;
var map__33437__$1 = cljs.core.__destructure_map(map__33437);
var msg = map__33437__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33437__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33444 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33446 = null;
var count__33447 = (0);
var i__33448 = (0);
while(true){
if((i__33448 < count__33447)){
var map__33458 = chunk__33446.cljs$core$IIndexed$_nth$arity$2(null,i__33448);
var map__33458__$1 = cljs.core.__destructure_map(map__33458);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33458__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33585 = seq__33444;
var G__33586 = chunk__33446;
var G__33587 = count__33447;
var G__33588 = (i__33448 + (1));
seq__33444 = G__33585;
chunk__33446 = G__33586;
count__33447 = G__33587;
i__33448 = G__33588;
continue;
} else {
var G__33589 = seq__33444;
var G__33590 = chunk__33446;
var G__33591 = count__33447;
var G__33592 = (i__33448 + (1));
seq__33444 = G__33589;
chunk__33446 = G__33590;
count__33447 = G__33591;
i__33448 = G__33592;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33444);
if(temp__5804__auto__){
var seq__33444__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33444__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33444__$1);
var G__33594 = cljs.core.chunk_rest(seq__33444__$1);
var G__33595 = c__5568__auto__;
var G__33596 = cljs.core.count(c__5568__auto__);
var G__33597 = (0);
seq__33444 = G__33594;
chunk__33446 = G__33595;
count__33447 = G__33596;
i__33448 = G__33597;
continue;
} else {
var map__33463 = cljs.core.first(seq__33444__$1);
var map__33463__$1 = cljs.core.__destructure_map(map__33463);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33604 = cljs.core.next(seq__33444__$1);
var G__33605 = null;
var G__33606 = (0);
var G__33607 = (0);
seq__33444 = G__33604;
chunk__33446 = G__33605;
count__33447 = G__33606;
i__33448 = G__33607;
continue;
} else {
var G__33614 = cljs.core.next(seq__33444__$1);
var G__33615 = null;
var G__33616 = (0);
var G__33617 = (0);
seq__33444 = G__33614;
chunk__33446 = G__33615;
count__33447 = G__33616;
i__33448 = G__33617;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
