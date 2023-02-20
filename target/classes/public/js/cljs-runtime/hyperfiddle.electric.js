goog.provide('hyperfiddle.electric');
(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Pending.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (other instanceof hyperfiddle.electric.Pending);
}));
(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.electric.Failure.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return (((other instanceof hyperfiddle.electric.Failure)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.error,other.error)));
}));
hyperfiddle.electric.merge_vars = (function hyperfiddle$electric$merge_vars(var_args){
var G__47107 = arguments.length;
switch (G__47107) {
case 2:
return hyperfiddle.electric.merge_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___47303 = arguments.length;
var i__5770__auto___47304 = (0);
while(true){
if((i__5770__auto___47304 < len__5769__auto___47303)){
args_arr__5794__auto__.push((arguments[i__5770__auto___47304]));

var G__47305 = (i__5770__auto___47304 + (1));
i__5770__auto___47304 = G__47305;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return hyperfiddle.electric.merge_vars.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.merge_vars.cljs$core$IFn$_invoke$arity$2 = (function (fa,fb){
return (function (not_found,ident){
var a = (fa.cljs$core$IFn$_invoke$arity$2 ? fa.cljs$core$IFn$_invoke$arity$2(not_found,ident) : fa.call(null,not_found,ident));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(not_found,a)){
return (fb.cljs$core$IFn$_invoke$arity$2 ? fb.cljs$core$IFn$_invoke$arity$2(not_found,ident) : fb.call(null,not_found,ident));
} else {
return a;
}
});
}));

(hyperfiddle.electric.merge_vars.cljs$core$IFn$_invoke$arity$variadic = (function (fa,fb,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.merge_vars,hyperfiddle.electric.merge_vars.cljs$core$IFn$_invoke$arity$2(fa,fb),fs);
}));

/** @this {Function} */
(hyperfiddle.electric.merge_vars.cljs$lang$applyTo = (function (seq47104){
var G__47105 = cljs.core.first(seq47104);
var seq47104__$1 = cljs.core.next(seq47104);
var G__47106 = cljs.core.first(seq47104__$1);
var seq47104__$2 = cljs.core.next(seq47104__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47105,G__47106,seq47104__$2);
}));

(hyperfiddle.electric.merge_vars.cljs$lang$maxFixedArity = (2));

/**
 * Takes a resolve map and a program, returns a booting function.
 *   The booting function takes
 *   * as first argument a function Any->Task[Unit] returned task writes the value on the wire.
 *   * as second argument a flow producing the values read on the wire.
 *   and returning a task that runs the local reactor.
 */
hyperfiddle.electric.eval = hyperfiddle.electric.impl.runtime.eval;
hyperfiddle.electric.hook = hyperfiddle.electric.impl.runtime.hook;
hyperfiddle.electric.bind = hyperfiddle.electric.impl.runtime.bind;
hyperfiddle.electric.with$ = hyperfiddle.electric.impl.runtime.with$;
hyperfiddle.electric.pair = (function hyperfiddle$electric$pair(c,s){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47109_block_0 = (function hyperfiddle$electric$pair_$_cr47109_block_0(cr47109_state){
try{var cr47109_place_0 = missionary.core.dfv;
var cr47109_place_1 = (function (){var fexpr__47173 = cr47109_place_0;
return (fexpr__47173.cljs$core$IFn$_invoke$arity$0 ? fexpr__47173.cljs$core$IFn$_invoke$arity$0() : fexpr__47173.call(null));
})();
var cr47109_place_2 = missionary.core.dfv;
var cr47109_place_3 = (function (){var fexpr__47174 = cr47109_place_2;
return (fexpr__47174.cljs$core$IFn$_invoke$arity$0 ? fexpr__47174.cljs$core$IFn$_invoke$arity$0() : fexpr__47174.call(null));
})();
var cr47109_place_4 = missionary.core.join;
var cr47109_place_5 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47109_place_6 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47112_block_0 = (function (cr47112_state){
try{var cr47112_place_0 = cr47109_place_1;
(cr47112_state[(0)] = cr47112_block_1);

return missionary.core.park(cr47112_place_0);
}catch (e47179){var e47118 = e47179;
var cr47112_exception = e47118;
(cr47112_state[(0)] = null);

throw cr47112_exception;
}});
var cr47112_block_1 = (function (cr47112_state){
try{var cr47112_place_1 = missionary.core.unpark();
var cr47112_place_2 = cr47112_place_1;
var cr47112_place_3 = x;
var cr47112_place_4 = (function (){var G__47121 = cr47112_place_3;
var fexpr__47120 = cr47112_place_2;
var G__47182 = G__47121;
var fexpr__47181 = fexpr__47120;
return (fexpr__47181.cljs$core$IFn$_invoke$arity$1 ? fexpr__47181.cljs$core$IFn$_invoke$arity$1(G__47182) : fexpr__47181.call(null,G__47182));
})();
(cr47112_state[(0)] = null);

return cr47112_place_4;
}catch (e47180){var e47119 = e47180;
var cr47112_exception = e47119;
(cr47112_state[(0)] = null);

throw cr47112_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47122 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47122[(0)] = cr47112_block_0);

return G__47122;
})());
})(),missionary.core.sp_run);
});
var cr47109_place_7 = (function (_BANG_){
var G__47184_47308 = _BANG_;
var fexpr__47183_47309 = cr47109_place_3;
(fexpr__47183_47309.cljs$core$IFn$_invoke$arity$1 ? fexpr__47183_47309.cljs$core$IFn$_invoke$arity$1(G__47184_47308) : fexpr__47183_47309.call(null,G__47184_47308));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47109_place_8 = s;
var cr47109_place_9 = cr47109_place_6;
var cr47109_place_10 = cr47109_place_7;
var cr47109_place_11 = (function (){var G__47186 = cr47109_place_9;
var G__47187 = cr47109_place_10;
var fexpr__47185 = cr47109_place_8;
return (fexpr__47185.cljs$core$IFn$_invoke$arity$2 ? fexpr__47185.cljs$core$IFn$_invoke$arity$2(G__47186,G__47187) : fexpr__47185.call(null,G__47186,G__47187));
})();
var cr47109_place_12 = (function (x){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47126_block_0 = (function (cr47126_state){
try{var cr47126_place_0 = cr47109_place_3;
(cr47126_state[(0)] = cr47126_block_1);

return missionary.core.park(cr47126_place_0);
}catch (e47192){var e47132 = e47192;
var cr47126_exception = e47132;
(cr47126_state[(0)] = null);

throw cr47126_exception;
}});
var cr47126_block_1 = (function (cr47126_state){
try{var cr47126_place_1 = missionary.core.unpark();
var cr47126_place_2 = cr47126_place_1;
var cr47126_place_3 = x;
var cr47126_place_4 = (function (){var G__47135 = cr47126_place_3;
var fexpr__47134 = cr47126_place_2;
var G__47195 = G__47135;
var fexpr__47194 = fexpr__47134;
return (fexpr__47194.cljs$core$IFn$_invoke$arity$1 ? fexpr__47194.cljs$core$IFn$_invoke$arity$1(G__47195) : fexpr__47194.call(null,G__47195));
})();
(cr47126_state[(0)] = null);

return cr47126_place_4;
}catch (e47193){var e47133 = e47193;
var cr47126_exception = e47133;
(cr47126_state[(0)] = null);

throw cr47126_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47136 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47136[(0)] = cr47126_block_0);

return G__47136;
})());
})(),missionary.core.sp_run);
});
var cr47109_place_13 = (function (_BANG_){
var G__47197_47313 = _BANG_;
var fexpr__47196_47314 = cr47109_place_1;
(fexpr__47196_47314.cljs$core$IFn$_invoke$arity$1 ? fexpr__47196_47314.cljs$core$IFn$_invoke$arity$1(G__47197_47313) : fexpr__47196_47314.call(null,G__47197_47313));

return (function (){
return cljs.core.List.EMPTY;
});
});
var cr47109_place_14 = (function (p1__47108_SHARP_){
throw p1__47108_SHARP_;
});
var cr47109_place_15 = c;
var cr47109_place_16 = cr47109_place_12;
var cr47109_place_17 = cr47109_place_13;
var cr47109_place_18 = cr47109_place_14;
var cr47109_place_19 = (function (){var G__47199 = cr47109_place_16;
var G__47200 = cr47109_place_17;
var G__47201 = cr47109_place_18;
var fexpr__47198 = cr47109_place_15;
return (fexpr__47198.cljs$core$IFn$_invoke$arity$3 ? fexpr__47198.cljs$core$IFn$_invoke$arity$3(G__47199,G__47200,G__47201) : fexpr__47198.call(null,G__47199,G__47200,G__47201));
})();
var cr47109_place_20 = (function (){var G__47203 = cr47109_place_5;
var G__47204 = cr47109_place_11;
var G__47205 = cr47109_place_19;
var fexpr__47202 = cr47109_place_4;
return (fexpr__47202.cljs$core$IFn$_invoke$arity$3 ? fexpr__47202.cljs$core$IFn$_invoke$arity$3(G__47203,G__47204,G__47205) : fexpr__47202.call(null,G__47203,G__47204,G__47205));
})();
(cr47109_state[(0)] = cr47109_block_1);

return missionary.core.park(cr47109_place_20);
}catch (e47172){var cr47109_exception = e47172;
(cr47109_state[(0)] = null);

throw cr47109_exception;
}});
var cr47109_block_1 = (function hyperfiddle$electric$pair_$_cr47109_block_1(cr47109_state){
try{var cr47109_place_21 = missionary.core.unpark();
(cr47109_state[(0)] = null);

return cr47109_place_21;
}catch (e47206){var cr47109_exception = e47206;
(cr47109_state[(0)] = null);

throw cr47109_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47207 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47207[(0)] = cr47109_block_0);

return G__47207;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric.failure_QMARK_ = (function hyperfiddle$electric$failure_QMARK_(x){
return (x instanceof hyperfiddle.electric.Failure);
});
hyperfiddle.electric.wrap_STAR_ = (function hyperfiddle$electric$wrap_STAR_(thunk){
return null;
});
hyperfiddle.electric.chan_read_BANG_ = contrib.missionary_contrib.chan_read_BANG_;
hyperfiddle.electric.chan__GT_ap = contrib.missionary_contrib.chan__GT_ap;
hyperfiddle.electric.chan__GT_task = contrib.missionary_contrib.chan__GT_task;
hyperfiddle.electric.task__GT_cp = (function hyperfiddle$electric$task__GT_cp(var_args){
var G__47211 = arguments.length;
switch (G__47211) {
case 1:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$1 = (function (_BANG_x){
return hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2(_BANG_x,(new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending()))));
}));

(hyperfiddle.electric.task__GT_cp.cljs$core$IFn$_invoke$arity$2 = (function (_BANG_x,pending){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,pending,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47212_block_0 = (function hyperfiddle$electric$cr47212_block_0(cr47212_state){
try{var cr47212_place_0 = _BANG_x;
(cr47212_state[(0)] = cr47212_block_1);

return missionary.core.park(cr47212_place_0);
}catch (e47215){var cr47212_exception = e47215;
(cr47212_state[(0)] = null);

throw cr47212_exception;
}});
var cr47212_block_1 = (function hyperfiddle$electric$cr47212_block_1(cr47212_state){
try{var cr47212_place_1 = missionary.core.unpark();
(cr47212_state[(0)] = null);

return cr47212_place_1;
}catch (e47216){var cr47212_exception = e47216;
(cr47212_state[(0)] = null);

throw cr47212_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47217 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__47217[(0)] = cr47212_block_0);

return G__47217;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.task__GT_cp.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric._check_fn_arity_BANG_ = (function hyperfiddle$electric$_check_fn_arity_BANG_(name,expected,actual){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(expected,actual)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["You called ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric","unnamed-efn","hyperfiddle.electric/unnamed-efn",1016396331)], 0));
}
})()),", a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected),"-arg e/fn with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)," arguments."].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null));
} else {
return null;
}
});
hyperfiddle.electric.watchable_QMARK_ = (function hyperfiddle$electric$watchable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IWatchable$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IWatchable,x);
}
});
hyperfiddle.electric.checked_watch = (function hyperfiddle$electric$checked_watch(_BANG_x){
if(hyperfiddle.electric.watchable_QMARK_(_BANG_x)){
} else {
throw (new Error(["Assert failed: ","Provided argument is not Watchable.","\n","(watchable? !x)"].join('')));
}

return missionary.core.watch(_BANG_x);
});
hyperfiddle.electric._invalid_watch_usage_message = "Invalid e/watch (use from Electric code only, maybe you forgot a e/def?)";
hyperfiddle.electric.debounce_discreet = (function hyperfiddle$electric$debounce_discreet(var_args){
var G__47221 = arguments.length;
switch (G__47221) {
case 2:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$2 = (function (delay,flow){
return hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3(delay,null,flow);
}));

(hyperfiddle.electric.debounce_discreet.cljs$core$IFn$_invoke$arity$3 = (function (delay,init,flow){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,init,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47222_block_10 = (function hyperfiddle$electric$cr47222_block_10(cr47222_state){
try{var cr47222_place_21 = missionary.core.unpark();
(cr47222_state[(0)] = cr47222_block_11);

(cr47222_state[(3)] = cr47222_place_21);

return cr47222_state;
}catch (e47240){var cr47222_exception = e47240;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_4 = (function hyperfiddle$electric$cr47222_block_4(cr47222_state){
try{var cr47222_place_2 = (cr47222_state[(2)]);
var cr47222_place_9 = cr47222_place_2;
var cr47222_place_10 = missionary.Cancelled;
var cr47222_place_11 = (cr47222_place_9 instanceof cr47222_place_10);
var cr47222_place_12 = null;
if(cr47222_place_11){
(cr47222_state[(0)] = cr47222_block_9);

(cr47222_state[(3)] = cr47222_place_12);

return cr47222_state;
} else {
(cr47222_state[(0)] = cr47222_block_5);

(cr47222_state[(3)] = cr47222_place_12);

return cr47222_state;
}
}catch (e47241){var cr47222_exception = e47241;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_9 = (function hyperfiddle$electric$cr47222_block_9(cr47222_state){
try{var cr47222_place_2 = (cr47222_state[(2)]);
var cr47222_place_18 = cr47222_place_2;
var cr47222_place_19 = (1);
var cr47222_place_20 = missionary.core.none;
(cr47222_state[(0)] = cr47222_block_10);

return missionary.core.fork(cr47222_place_19,cr47222_place_20);
}catch (e47242){var cr47222_exception = e47242;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_3 = (function hyperfiddle$electric$cr47222_block_3(cr47222_state){
try{var cr47222_place_8 = missionary.core.unpark();
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(2)] = cr47222_place_8);

return cr47222_state;
}catch (e47243){var cr47222_exception = e47243;
(cr47222_state[(0)] = cr47222_block_4);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_11 = (function hyperfiddle$electric$cr47222_block_11(cr47222_state){
try{var cr47222_place_12 = (cr47222_state[(3)]);
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(3)] = null);

(cr47222_state[(2)] = cr47222_place_12);

return cr47222_state;
}catch (e47244){var cr47222_exception = e47244;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_2 = (function hyperfiddle$electric$cr47222_block_2(cr47222_state){
try{var cr47222_place_1 = (cr47222_state[(3)]);
var cr47222_place_4 = missionary.core.sleep;
var cr47222_place_5 = delay;
var cr47222_place_6 = cr47222_place_1;
var cr47222_place_7 = (function (){var G__47247 = cr47222_place_5;
var G__47248 = cr47222_place_6;
var fexpr__47246 = cr47222_place_4;
return (fexpr__47246.cljs$core$IFn$_invoke$arity$2 ? fexpr__47246.cljs$core$IFn$_invoke$arity$2(G__47247,G__47248) : fexpr__47246.call(null,G__47247,G__47248));
})();
(cr47222_state[(0)] = cr47222_block_3);

(cr47222_state[(3)] = null);

return missionary.core.park(cr47222_place_7);
}catch (e47245){var cr47222_exception = e47245;
(cr47222_state[(0)] = cr47222_block_4);

(cr47222_state[(3)] = null);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_6 = (function hyperfiddle$electric$cr47222_block_6(cr47222_state){
try{var cr47222_place_15 = null;
(cr47222_state[(0)] = cr47222_block_8);

(cr47222_state[(4)] = cr47222_place_15);

return cr47222_state;
}catch (e47249){var cr47222_exception = e47249;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(4)] = null);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_12 = (function hyperfiddle$electric$cr47222_block_12(cr47222_state){
try{var cr47222_place_3 = (cr47222_state[(1)]);
var cr47222_place_2 = (cr47222_state[(2)]);
var cr47222_place_22 = (cljs.core.truth_(cr47222_place_3)?(function(){throw cr47222_place_2})():cr47222_place_2);
(cr47222_state[(0)] = null);

(cr47222_state[(1)] = null);

(cr47222_state[(2)] = null);

return cr47222_place_22;
}catch (e47250){var cr47222_exception = e47250;
(cr47222_state[(0)] = null);

(cr47222_state[(1)] = null);

(cr47222_state[(2)] = null);

throw cr47222_exception;
}});
var cr47222_block_8 = (function hyperfiddle$electric$cr47222_block_8(cr47222_state){
try{var cr47222_place_14 = (cr47222_state[(4)]);
(cr47222_state[(0)] = cr47222_block_11);

(cr47222_state[(4)] = null);

(cr47222_state[(3)] = cr47222_place_14);

return cr47222_state;
}catch (e47251){var cr47222_exception = e47251;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(4)] = null);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_1 = (function hyperfiddle$electric$cr47222_block_1(cr47222_state){
try{var cr47222_place_1 = missionary.core.unpark();
var cr47222_place_2 = null;
var cr47222_place_3 = false;
(cr47222_state[(0)] = cr47222_block_2);

(cr47222_state[(3)] = cr47222_place_1);

(cr47222_state[(2)] = cr47222_place_2);

(cr47222_state[(1)] = cr47222_place_3);

return cr47222_state;
}catch (e47252){var cr47222_exception = e47252;
(cr47222_state[(0)] = null);

throw cr47222_exception;
}});
var cr47222_block_5 = (function hyperfiddle$electric$cr47222_block_5(cr47222_state){
try{var cr47222_place_13 = new cljs.core.Keyword(null,"else","else",-1508377146);
var cr47222_place_14 = null;
if(cljs.core.truth_(cr47222_place_13)){
(cr47222_state[(0)] = cr47222_block_7);

(cr47222_state[(3)] = null);

return cr47222_state;
} else {
(cr47222_state[(0)] = cr47222_block_6);

(cr47222_state[(4)] = cr47222_place_14);

return cr47222_state;
}
}catch (e47253){var cr47222_exception = e47253;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(3)] = null);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_7 = (function hyperfiddle$electric$cr47222_block_7(cr47222_state){
try{var cr47222_place_2 = (cr47222_state[(2)]);
var cr47222_place_16 = cr47222_place_2;
var cr47222_place_17 = (function(){throw cr47222_place_16})();
(cr47222_state[(0)] = null);

(cr47222_state[(1)] = null);

(cr47222_state[(2)] = null);

return null;
}catch (e47254){var cr47222_exception = e47254;
(cr47222_state[(0)] = cr47222_block_12);

(cr47222_state[(1)] = true);

(cr47222_state[(2)] = cr47222_exception);

return cr47222_state;
}});
var cr47222_block_0 = (function hyperfiddle$electric$cr47222_block_0(cr47222_state){
try{var cr47222_place_0 = flow;
(cr47222_state[(0)] = cr47222_block_1);

return missionary.core.switch$(cr47222_place_0);
}catch (e47255){var cr47222_exception = e47255;
(cr47222_state[(0)] = null);

throw cr47222_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47256 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__47256[(0)] = cr47222_block_0);

return G__47256;
})());
})(),missionary.core.ap_run));
}));

(hyperfiddle.electric.debounce_discreet.cljs$lang$maxFixedArity = 3);

hyperfiddle.electric.throttle = (function hyperfiddle$electric$throttle(dur,_GT_in){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr47257_block_8 = (function hyperfiddle$electric$throttle_$_cr47257_block_8(cr47257_state){
try{var cr47257_place_14 = (cr47257_state[(2)]);
(cr47257_state[(0)] = null);

(cr47257_state[(2)] = null);

return cr47257_place_14;
}catch (e47278){var cr47257_exception = e47278;
(cr47257_state[(0)] = null);

(cr47257_state[(2)] = null);

throw cr47257_exception;
}});
var cr47257_block_2 = (function hyperfiddle$electric$throttle_$_cr47257_block_2(cr47257_state){
try{var cr47257_place_12 = missionary.core.unpark();
var cr47257_place_13 = cr47257_place_12;
var cr47257_place_14 = null;
var G__47280 = cr47257_place_13;
switch (G__47280) {
case (0):
(cr47257_state[(0)] = cr47257_block_3);

(cr47257_state[(2)] = cr47257_place_14);

return cr47257_state;

break;
case (1):
(cr47257_state[(0)] = cr47257_block_4);

(cr47257_state[(1)] = null);

(cr47257_state[(2)] = cr47257_place_14);

return cr47257_state;

break;
default:
(cr47257_state[(0)] = cr47257_block_7);

(cr47257_state[(1)] = null);

(cr47257_state[(1)] = cr47257_place_12);

return cr47257_state;

}
}catch (e47279){var cr47257_exception = e47279;
(cr47257_state[(0)] = null);

(cr47257_state[(1)] = null);

throw cr47257_exception;
}});
var cr47257_block_5 = (function hyperfiddle$electric$throttle_$_cr47257_block_5(cr47257_state){
try{var cr47257_place_19 = missionary.core.unpark();
var cr47257_place_20 = (1);
var cr47257_place_21 = missionary.core.none;
(cr47257_state[(0)] = cr47257_block_6);

return missionary.core.fork(cr47257_place_20,cr47257_place_21);
}catch (e47281){var cr47257_exception = e47281;
(cr47257_state[(0)] = null);

(cr47257_state[(2)] = null);

throw cr47257_exception;
}});
var cr47257_block_3 = (function hyperfiddle$electric$throttle_$_cr47257_block_3(cr47257_state){
try{var cr47257_place_5 = (cr47257_state[(1)]);
var cr47257_place_15 = cr47257_place_5;
(cr47257_state[(0)] = cr47257_block_8);

(cr47257_state[(1)] = null);

(cr47257_state[(2)] = cr47257_place_15);

return cr47257_state;
}catch (e47282){var cr47257_exception = e47282;
(cr47257_state[(0)] = null);

(cr47257_state[(1)] = null);

(cr47257_state[(2)] = null);

throw cr47257_exception;
}});
var cr47257_block_0 = (function hyperfiddle$electric$throttle_$_cr47257_block_0(cr47257_state){
try{var cr47257_place_0 = (1);
var cr47257_place_1 = missionary.core.relieve;
var cr47257_place_2 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr47257_place_3 = _GT_in;
var cr47257_place_4 = (function (){var G__47285 = cr47257_place_2;
var G__47286 = cr47257_place_3;
var fexpr__47284 = cr47257_place_1;
return (fexpr__47284.cljs$core$IFn$_invoke$arity$2 ? fexpr__47284.cljs$core$IFn$_invoke$arity$2(G__47285,G__47286) : fexpr__47284.call(null,G__47285,G__47286));
})();
(cr47257_state[(0)] = cr47257_block_1);

return missionary.core.fork(cr47257_place_0,cr47257_place_4);
}catch (e47283){var cr47257_exception = e47283;
(cr47257_state[(0)] = null);

throw cr47257_exception;
}});
var cr47257_block_6 = (function hyperfiddle$electric$throttle_$_cr47257_block_6(cr47257_state){
try{var cr47257_place_22 = missionary.core.unpark();
(cr47257_state[(0)] = cr47257_block_8);

(cr47257_state[(2)] = cr47257_place_22);

return cr47257_state;
}catch (e47287){var cr47257_exception = e47287;
(cr47257_state[(0)] = null);

(cr47257_state[(2)] = null);

throw cr47257_exception;
}});
var cr47257_block_4 = (function hyperfiddle$electric$throttle_$_cr47257_block_4(cr47257_state){
try{var cr47257_place_16 = missionary.core.sleep;
var cr47257_place_17 = dur;
var cr47257_place_18 = (function (){var G__47290 = cr47257_place_17;
var fexpr__47289 = cr47257_place_16;
return (fexpr__47289.cljs$core$IFn$_invoke$arity$1 ? fexpr__47289.cljs$core$IFn$_invoke$arity$1(G__47290) : fexpr__47289.call(null,G__47290));
})();
(cr47257_state[(0)] = cr47257_block_5);

return missionary.core.park(cr47257_place_18);
}catch (e47288){var cr47257_exception = e47288;
(cr47257_state[(0)] = null);

(cr47257_state[(2)] = null);

throw cr47257_exception;
}});
var cr47257_block_1 = (function hyperfiddle$electric$throttle_$_cr47257_block_1(cr47257_state){
try{var cr47257_place_5 = missionary.core.unpark();
var cr47257_place_6 = (1);
var cr47257_place_7 = missionary.core.seed;
var cr47257_place_8 = cljs.core.range;
var cr47257_place_9 = (2);
var cr47257_place_10 = (function (){var G__47293 = cr47257_place_9;
var fexpr__47292 = cr47257_place_8;
return (fexpr__47292.cljs$core$IFn$_invoke$arity$1 ? fexpr__47292.cljs$core$IFn$_invoke$arity$1(G__47293) : fexpr__47292.call(null,G__47293));
})();
var cr47257_place_11 = (function (){var G__47295 = cr47257_place_10;
var fexpr__47294 = cr47257_place_7;
return (fexpr__47294.cljs$core$IFn$_invoke$arity$1 ? fexpr__47294.cljs$core$IFn$_invoke$arity$1(G__47295) : fexpr__47294.call(null,G__47295));
})();
(cr47257_state[(0)] = cr47257_block_2);

(cr47257_state[(1)] = cr47257_place_5);

return missionary.core.fork(cr47257_place_6,cr47257_place_11);
}catch (e47291){var cr47257_exception = e47291;
(cr47257_state[(0)] = null);

throw cr47257_exception;
}});
var cr47257_block_7 = (function hyperfiddle$electric$throttle_$_cr47257_block_7(cr47257_state){
try{var cr47257_place_12 = (cr47257_state[(1)]);
var cr47257_place_23 = "No matching clause: ";
var cr47257_place_24 = cr47257_place_12;
var cr47257_place_25 = [cr47257_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr47257_place_24)].join('');
var cr47257_place_26 = (new Error(cr47257_place_25));
var cr47257_place_27 = (function(){throw cr47257_place_26})();
(cr47257_state[(0)] = null);

(cr47257_state[(1)] = null);

return null;
}catch (e47296){var cr47257_exception = e47296;
(cr47257_state[(0)] = null);

(cr47257_state[(1)] = null);

throw cr47257_exception;
}});
return cloroutine.impl.coroutine((function (){var G__47297 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__47297[(0)] = cr47257_block_0);

return G__47297;
})());
})(),missionary.core.ap_run);
});

//# sourceMappingURL=hyperfiddle.electric.js.map
