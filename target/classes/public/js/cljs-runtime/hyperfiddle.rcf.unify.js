goog.provide('hyperfiddle.rcf.unify');
hyperfiddle.rcf.unify.wildcard_QMARK_ = (function hyperfiddle$rcf$unify$wildcard_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),x);
});
hyperfiddle.rcf.unify._AMPERSAND__QMARK_ = (function hyperfiddle$rcf$unify$_AMPERSAND__QMARK_(form){
return ((cljs.core.seqable_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.first(form))));
});
hyperfiddle.rcf.unify.lvar_QMARK_ = (function hyperfiddle$rcf$unify$lvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(x)))));
});
hyperfiddle.rcf.unify.failed_QMARK_ = (function hyperfiddle$rcf$unify$failed_QMARK_(env){
return cljs.core.contains_QMARK_(env,new cljs.core.Keyword("hyperfiddle.rcf.unify","fail","hyperfiddle.rcf.unify/fail",1502173494));
});
hyperfiddle.rcf.unify.unify_in_env = (function hyperfiddle$rcf$unify$unify_in_env(x,y,env){
if(cljs.core.contains_QMARK_(env,x)){
var y_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,y_SINGLEQUOTE_)){
return env;
} else {
if(hyperfiddle.rcf.unify.lvar_QMARK_(y_SINGLEQUOTE_)){
return (hyperfiddle.rcf.unify.unify_in_env.cljs$core$IFn$_invoke$arity$3 ? hyperfiddle.rcf.unify.unify_in_env.cljs$core$IFn$_invoke$arity$3(y_SINGLEQUOTE_,y,env) : hyperfiddle.rcf.unify.unify_in_env.call(null,y_SINGLEQUOTE_,y,env));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("hyperfiddle.rcf.unify","fail","hyperfiddle.rcf.unify/fail",1502173494),cljs.core.PersistentArrayMap.createAsIfByAssoc([x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y_SINGLEQUOTE_,y], null)]));
}
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,x,y);
}
});
hyperfiddle.rcf.unify.wildcard_in_env = (function hyperfiddle$rcf$unify$wildcard_in_env(v,env){
if(cljs.core.contains_QMARK_(env,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),cljs.core.conj,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null));
}
});
hyperfiddle.rcf.unify.resolve_STAR_ = (function hyperfiddle$rcf$unify$resolve_STAR_(var_args){
var G__39435 = arguments.length;
switch (G__39435) {
case 2:
return hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (env,k){
return hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,env,k);
}));

(hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,env,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(path))){
return new cljs.core.Keyword("hyperfiddle.rcf.unify","cycle","hyperfiddle.rcf.unify/cycle",1852298672);
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,k);
if(hyperfiddle.rcf.unify.lvar_QMARK_(v)){
return hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),env,v);
} else {
return v;
}
}
}));

(hyperfiddle.rcf.unify.resolve_STAR_.cljs$lang$maxFixedArity = 3);

hyperfiddle.rcf.unify.ground = (function hyperfiddle$rcf$unify$ground(env){
if(cljs.core.map_QMARK_(env)){
var env__$1 = cljs.core.reduce_kv((function (env__$1,k,_v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,k,hyperfiddle.rcf.unify.resolve_STAR_.cljs$core$IFn$_invoke$arity$2(env__$1,k));
}),env,env);
if(cljs.core.contains_QMARK_(env__$1,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Symbol(null,"_","_",-1201019570,null),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (x){
if(hyperfiddle.rcf.unify.lvar_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,x);
} else {
return x;
}
}),xs);
}));
} else {
return env__$1;
}
} else {
return env;
}
});
hyperfiddle.rcf.unify.unify_set = (function hyperfiddle$rcf$unify$unify_set(xs,ys,env){
if(cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(xs,ys))){
var G__39445 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(xs,ys);
var G__39446 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(ys,xs);
var G__39447 = env;
return (hyperfiddle.rcf.unify.unify_set.cljs$core$IFn$_invoke$arity$3 ? hyperfiddle.rcf.unify.unify_set.cljs$core$IFn$_invoke$arity$3(G__39445,G__39446,G__39447) : hyperfiddle.rcf.unify.unify_set.call(null,G__39445,G__39446,G__39447));
} else {
var env__$1 = (function (){var G__39449 = cljs.core.first(xs);
var G__39450 = cljs.core.first(ys);
var G__39451 = env;
return (hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3 ? hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(G__39449,G__39450,G__39451) : hyperfiddle.rcf.unify.unify.call(null,G__39449,G__39450,G__39451));
})();
if(hyperfiddle.rcf.unify.failed_QMARK_(env__$1)){
return env__$1;
} else {
var G__39453 = cljs.core.rest(xs);
var G__39454 = cljs.core.rest(ys);
var G__39455 = env__$1;
return (hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3 ? hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(G__39453,G__39454,G__39455) : hyperfiddle.rcf.unify.unify.call(null,G__39453,G__39454,G__39455));
}
}
});
hyperfiddle.rcf.unify.replace_keys = (function hyperfiddle$rcf$unify$replace_keys(m,ks_map){
return cljs.core.reduce_kv((function (r,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Symbol(null,"_","_",-1201019570,null)))?(function (){var or__5045__auto__ = cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ks_map,new cljs.core.Symbol(null,"_","_",-1201019570,null))),cljs.core.set(cljs.core.keys(r))));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
})():cljs.core.get.cljs$core$IFn$_invoke$arity$3(ks_map,k,k)),v);
}),m,m);
});
hyperfiddle.rcf.unify.unify_map = (function hyperfiddle$rcf$unify$unify_map(xs,ys,env){
var env__$1 = hyperfiddle.rcf.unify.unify_set(cljs.core.set(cljs.core.keys(xs)),cljs.core.set(cljs.core.keys(ys)),env);
var xs__$1 = hyperfiddle.rcf.unify.replace_keys(xs,env__$1);
var ys__$1 = hyperfiddle.rcf.unify.replace_keys(ys,env__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xs__$1,ys__$1)){
return env__$1;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$2,k){
var env__$3 = (function (){var G__39465 = cljs.core.find(xs__$1,k);
var G__39466 = cljs.core.find(ys__$1,k);
var G__39467 = env__$2;
return (hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3 ? hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(G__39465,G__39466,G__39467) : hyperfiddle.rcf.unify.unify.call(null,G__39465,G__39466,G__39467));
})();
if(hyperfiddle.rcf.unify.failed_QMARK_(env__$3)){
return cljs.core.reduced(env__$3);
} else {
return env__$3;
}
}),env__$1,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(xs__$1)),cljs.core.set(cljs.core.keys(ys__$1))));
}
});
hyperfiddle.rcf.unify.collection_QMARK_ = (function hyperfiddle$rcf$unify$collection_QMARK_(x){
return ((cljs.core.seqable_QMARK_(x)) && ((!(typeof x === 'string'))));
});
hyperfiddle.rcf.unify.unify = (function hyperfiddle$rcf$unify$unify(var_args){
var G__39472 = arguments.length;
switch (G__39472) {
case 2:
return hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(x,y,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3 = (function (x,y,env){
var env__$1 = ((hyperfiddle.rcf.unify.failed_QMARK_(env))?env:((hyperfiddle.rcf.unify.wildcard_QMARK_(x))?hyperfiddle.rcf.unify.wildcard_in_env(y,env):((hyperfiddle.rcf.unify.wildcard_QMARK_(y))?hyperfiddle.rcf.unify.wildcard_in_env(x,env):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y))?env:((hyperfiddle.rcf.unify._AMPERSAND__QMARK_(x))?((cljs.core.seq(y))?hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(cljs.core.second(x),cljs.core.seq(y),env):env):((hyperfiddle.rcf.unify._AMPERSAND__QMARK_(y))?((cljs.core.seq(x))?hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(cljs.core.second(y),cljs.core.seq(x),env):env):((hyperfiddle.rcf.unify.lvar_QMARK_(x))?hyperfiddle.rcf.unify.unify_in_env(x,y,env):((hyperfiddle.rcf.unify.lvar_QMARK_(y))?hyperfiddle.rcf.unify.unify_in_env(y,x,env):(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.set_QMARK_(x);
if(and__5043__auto__){
return cljs.core.set(y);
} else {
return and__5043__auto__;
}
})())?hyperfiddle.rcf.unify.unify_set(x,y,env):((((cljs.core.map_QMARK_(x)) && (cljs.core.map_QMARK_(y))))?hyperfiddle.rcf.unify.unify_map(x,y,env):((cljs.core.every_QMARK_(hyperfiddle.rcf.unify.collection_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?(function (){var env__$1 = hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(cljs.core.first(x),cljs.core.first(y),env);
if(hyperfiddle.rcf.unify.failed_QMARK_(env__$1)){
return env__$1;
} else {
return hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$3(cljs.core.rest(x),cljs.core.rest(y),env__$1);
}
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("hyperfiddle.rcf.unify","fail","hyperfiddle.rcf.unify/fail",1502173494),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.rcf.unify","root","hyperfiddle.rcf.unify/root",-1709721889),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null))
)))))))))));
if(hyperfiddle.rcf.unify.failed_QMARK_(env__$1)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword("hyperfiddle.rcf.unify","path","hyperfiddle.rcf.unify/path",-1062026972),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.List.EMPTY),x);
} else {
return env__$1;
}
}));

(hyperfiddle.rcf.unify.unify.cljs$lang$maxFixedArity = 3);

hyperfiddle.rcf.unify.subst = (function hyperfiddle$rcf$unify$subst(form,env){
var idx = cljs.core.volatile_BANG_((-1));
var get_idx_BANG_ = (function (){
return idx.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(idx.cljs$core$IDeref$_deref$arity$1(null) + (1)));
});
if(cljs.core.map_QMARK_(env)){
return clojure.walk.prewalk((function (expr){
if(hyperfiddle.rcf.unify.lvar_QMARK_(expr)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(env,expr,expr);
} else {
if(hyperfiddle.rcf.unify.wildcard_QMARK_(expr)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),get_idx_BANG_()], null),new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return expr;

}
}
}),form);
} else {
return form;
}
});
hyperfiddle.rcf.unify.unifier_STAR_ = (function hyperfiddle$rcf$unify$unifier_STAR_(x,y){
var env = hyperfiddle.rcf.unify.unify.cljs$core$IFn$_invoke$arity$2(x,y);
if(hyperfiddle.rcf.unify.failed_QMARK_(env)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.rcf.unify","fail","hyperfiddle.rcf.unify/fail",1502173494),env], null);
} else {
var env__$1 = hyperfiddle.rcf.unify.ground(env);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hyperfiddle.rcf.unify.subst(y,env__$1),env__$1], null);
}
});
hyperfiddle.rcf.unify.unifier = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hyperfiddle.rcf.unify.unifier_STAR_);
hyperfiddle.rcf.unify.explain = (function hyperfiddle$rcf$unify$explain(env){
var temp__5804__auto__ = new cljs.core.Keyword("hyperfiddle.rcf.unify","fail","hyperfiddle.rcf.unify/fail",1502173494).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5804__auto__)){
var fail = temp__5804__auto__;
return ["Failed to unify ",(function (){var temp__5806__auto__ = new cljs.core.Keyword("hyperfiddle.rcf.unify","root","hyperfiddle.rcf.unify/root",-1709721889).cljs$core$IFn$_invoke$arity$1(fail);
if((temp__5806__auto__ == null)){
var vec__39514 = cljs.core.first(fail);
var lvar = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39514,(0),null);
var vec__39517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39514,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517,(1),null);
return [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lvar], 0))," with ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0))].join('');
} else {
var vec__39520 = temp__5806__auto__;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39520,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39520,(1),null);
return [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([b], 0))].join('');
}
})(),(function (){var temp__5808__auto__ = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.map_entry_QMARK_,new cljs.core.Keyword("hyperfiddle.rcf.unify","path","hyperfiddle.rcf.unify/path",-1062026972).cljs$core$IFn$_invoke$arity$1(env))));
if((temp__5808__auto__ == null)){
return null;
} else {
var path = temp__5808__auto__;
return [" in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path))].join('');
}
})()].join('');
} else {
return null;
}
});

//# sourceMappingURL=hyperfiddle.rcf.unify.js.map
