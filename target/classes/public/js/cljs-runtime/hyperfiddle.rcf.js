goog.provide('hyperfiddle.rcf');
hyperfiddle.rcf._EQ_ = cljs.core._EQ_;
/**
 * @define {boolean}
 */
hyperfiddle.rcf.ENABLED = goog.define("hyperfiddle.rcf.ENABLED",false);
/**
 * @define {number}
 */
hyperfiddle.rcf.TIMEOUT = goog.define("hyperfiddle.rcf.TIMEOUT",(400));
hyperfiddle.rcf._STAR_enabled_STAR_ = hyperfiddle.rcf.ENABLED;
hyperfiddle.rcf.enable_BANG_ = (function hyperfiddle$rcf$enable_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41057 = arguments.length;
var i__5770__auto___41058 = (0);
while(true){
if((i__5770__auto___41058 < len__5769__auto___41057)){
args__5775__auto__.push((arguments[i__5770__auto___41058]));

var G__41059 = (i__5770__auto___41058 + (1));
i__5770__auto___41058 = G__41059;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40975){
var vec__40977 = p__40975;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977,(0),null);
return (hyperfiddle.rcf._STAR_enabled_STAR_ = (((!((v == null))))?v:true));
}));

(hyperfiddle.rcf.enable_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.rcf.enable_BANG_.cljs$lang$applyTo = (function (seq40974){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40974));
}));

hyperfiddle.rcf._STAR_timeout_STAR_ = hyperfiddle.rcf.TIMEOUT;
hyperfiddle.rcf.set_timeout_BANG_ = (function hyperfiddle$rcf$set_timeout_BANG_(ms){
return (hyperfiddle.rcf._STAR_timeout_STAR_ = ms);
});
/**
 * 
 * Function to push value to async queue, e.g. `(tap 42)`. RCF redefines this var in tests context. For REPL
 * convenience, defaults to println outside of tests context.
 */
hyperfiddle.rcf.tap = (function hyperfiddle$rcf$tap(x){
var G__40986 = x;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__40986], 0));

return G__40986;
});
/**
 * Deprecated alias for `tap`.
 */
hyperfiddle.rcf._BANG_ = hyperfiddle.rcf.tap;
hyperfiddle.rcf.push_binding = (function hyperfiddle$rcf$push_binding(q,d){
var vec__40988 = q;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(1),null);
var _a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40988,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b], null);
});
hyperfiddle.rcf.binding_queue = (function hyperfiddle$rcf$binding_queue(){
var _BANG_q = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null));
var push_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.swap_BANG_,_BANG_q,hyperfiddle.rcf.push_binding);
var peek_BANG_ = (function (p1__40992_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(_BANG_q),p1__40992_SHARP_);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [push_BANG_,peek_BANG_], null);
});
hyperfiddle.rcf.gen_name = (function hyperfiddle$rcf$gen_name(form){
var map__41006 = cljs.core.meta(form);
var map__41006__$1 = cljs.core.__destructure_map(map__41006);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var _column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41006__$1,new cljs.core.Keyword(null,"_column","_column",1701250361));
var file = clojure.string.replace(cljs.core.name(cljs.core.ns_name(cljs.core._STAR_ns_STAR_)),/[-\.]/,"_");
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["generated__",file,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
});
hyperfiddle.rcf.done = (function hyperfiddle$rcf$done(){
return null;
});
hyperfiddle.rcf.async_notifier = (function hyperfiddle$rcf$async_notifier(n,done){
var _BANG_seen = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(_BANG_seen,cljs.core.inc);

if(cljs.core.truth_((function (){var G__41031 = cljs.core.deref(_BANG_seen);
var G__41032 = n;
return (hyperfiddle.rcf._EQ_.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.rcf._EQ_.cljs$core$IFn$_invoke$arity$2(G__41031,G__41032) : hyperfiddle.rcf._EQ_.call(null,G__41031,G__41032));
})())){
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
} else {
return null;
}
});
});
hyperfiddle.rcf.rcf_shadow_hook = (function hyperfiddle$rcf$rcf_shadow_hook(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41061 = arguments.length;
var i__5770__auto___41062 = (0);
while(true){
if((i__5770__auto___41062 < len__5769__auto___41061)){
args__5775__auto__.push((arguments[i__5770__auto___41062]));

var G__41063 = (i__5770__auto___41062 + (1));
i__5770__auto___41062 = G__41063;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.rcf.rcf_shadow_hook.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.rcf.rcf_shadow_hook.cljs$core$IFn$_invoke$arity$variadic = (function (build_state,args){
var G__41052_41064 = new cljs.core.Keyword("shadow.build","stage","shadow.build/stage",1205499684).cljs$core$IFn$_invoke$arity$1(build_state);
var G__41052_41065__$1 = (((G__41052_41064 instanceof cljs.core.Keyword))?G__41052_41064.fqn:null);
switch (G__41052_41065__$1) {
case "configure":
hyperfiddle.rcf.enable_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));

break;
case "flush":
hyperfiddle.rcf.enable_BANG_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41052_41065__$1)].join('')));

}

return build_state;
}));

(hyperfiddle.rcf.rcf_shadow_hook.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.rcf.rcf_shadow_hook.cljs$lang$applyTo = (function (seq41047){
var G__41048 = cljs.core.first(seq41047);
var seq41047__$1 = cljs.core.next(seq41047);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41048,seq41047__$1);
}));


//# sourceMappingURL=hyperfiddle.rcf.js.map
