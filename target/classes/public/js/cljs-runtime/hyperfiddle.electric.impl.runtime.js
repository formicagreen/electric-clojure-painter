goog.provide('hyperfiddle.electric.impl.runtime');
hyperfiddle.electric.impl.runtime.fail = (function hyperfiddle$electric$impl$runtime$fail(x){
throw x;
});
hyperfiddle.electric.impl.runtime.failure = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$1((function (p1__43702_SHARP_){
if((p1__43702_SHARP_ instanceof hyperfiddle.electric.Failure)){
return p1__43702_SHARP_;
} else {
return null;
}
}));
hyperfiddle.electric.impl.runtime.pending = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));
hyperfiddle.electric.impl.runtime.error = (function hyperfiddle$electric$impl$runtime$error(msg){
return (new Error(msg));
});
hyperfiddle.electric.impl.runtime.pst = (function hyperfiddle$electric$impl$runtime$pst(e){
return console.error(e);
});
hyperfiddle.electric.impl.runtime.select_debug_info = (function hyperfiddle$electric$impl$runtime$select_debug_info(debug_info){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(debug_info,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425)], null)),contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),debug_info)], 0));
});
hyperfiddle.electric.impl.runtime.check_failure = (function hyperfiddle$electric$impl$runtime$check_failure(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),x);
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.latest_apply = (function hyperfiddle$electric$impl$runtime$latest_apply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44427 = arguments.length;
var i__5770__auto___44428 = (0);
while(true){
if((i__5770__auto___44428 < len__5769__auto___44427)){
args__5775__auto__.push((arguments[i__5770__auto___44428]));

var G__44429 = (i__5770__auto___44428 + (1));
i__5770__auto___44428 = G__44429;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$core$IFn$_invoke$arity$variadic = (function (debug_info,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary.core.latest,(function() { 
var G__44431__delegate = function (f,args__$1){
var temp__5802__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.failure,f,args__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),err);
} else {
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
}catch (e43734){var e = e43734;
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),args__$1),(new hyperfiddle.electric.Failure(e)));
}}
};
var G__44431 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__44433__i = 0, G__44433__a = new Array(arguments.length -  1);
while (G__44433__i < G__44433__a.length) {G__44433__a[G__44433__i] = arguments[G__44433__i + 1]; ++G__44433__i;}
  args__$1 = new cljs.core.IndexedSeq(G__44433__a,0,null);
} 
return G__44431__delegate.call(this,f,args__$1);};
G__44431.cljs$lang$maxFixedArity = 1;
G__44431.cljs$lang$applyTo = (function (arglist__44434){
var f = cljs.core.first(arglist__44434);
var args__$1 = cljs.core.rest(arglist__44434);
return G__44431__delegate(f,args__$1);
});
G__44431.cljs$core$IFn$_invoke$arity$variadic = G__44431__delegate;
return G__44431;
})()
,args);
}));

(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.latest_apply.cljs$lang$applyTo = (function (seq43713){
var G__43715 = cljs.core.first(seq43713);
var seq43713__$1 = cljs.core.next(seq43713);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43715,seq43713__$1);
}));

hyperfiddle.electric.impl.runtime.latest_first = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(missionary.core.latest,(function (x,y){
if((y instanceof hyperfiddle.electric.Failure)){
return y;
} else {
return x;
}
}));
hyperfiddle.electric.impl.runtime.pure = (function hyperfiddle$electric$impl$runtime$pure(x){
return missionary.core.cp_STAR_((function (){var cr43749_block_0 = (function hyperfiddle$electric$impl$runtime$pure_$_cr43749_block_0(cr43749_state){
try{var cr43749_place_0 = x;
(cr43749_state[(0)] = null);

return cr43749_place_0;
}catch (e43759){var cr43749_exception = e43759;
(cr43749_state[(0)] = null);

throw cr43749_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43764 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(G__43764[(0)] = cr43749_block_0);

return G__43764;
})());
})());
});
hyperfiddle.electric.impl.runtime.empty_event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"acks","acks",707064729),(0),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.PersistentHashSet.EMPTY], null);

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.It = (function (state,cancel,transfer){
this.state = state;
this.cancel = cancel;
this.transfer = transfer;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.It.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__43776 = (arguments.length - (1));
switch (G__43776) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.It.prototype.apply = (function (self__,args43773){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43773)));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.cancel.cljs$core$IFn$_invoke$arity$1 ? self__.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.transfer.cljs$core$IFn$_invoke$arity$1 ? self__.transfer.cljs$core$IFn$_invoke$arity$1(self__.state) : self__.transfer.call(null,self__.state));
}));

(hyperfiddle.electric.impl.runtime.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"transfer","transfer",1967954927,null)], null);
}));

(hyperfiddle.electric.impl.runtime.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/It");

(hyperfiddle.electric.impl.runtime.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/It.
 */
hyperfiddle.electric.impl.runtime.__GT_It = (function hyperfiddle$electric$impl$runtime$__GT_It(state,cancel,transfer){
return (new hyperfiddle.electric.impl.runtime.It(state,cancel,transfer));
});

hyperfiddle.electric.impl.runtime.lift_cancelled = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,(function (it){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime !== 'undefined') && (typeof hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789 = (function (it,meta43790){
this.it = it;
this.meta43790 = meta43790;
this.cljs$lang$protocol_mask$partition0$ = 425985;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43791,meta43790__$1){
var self__ = this;
var _43791__$1 = this;
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789(self__.it,meta43790__$1));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43791){
var self__ = this;
var _43791__$1 = this;
return self__.meta43790;
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__43795 = (arguments.length - (1));
switch (G__43795) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.apply = (function (self__,args43793){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args43793)));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return (self__.it.cljs$core$IFn$_invoke$arity$0 ? self__.it.cljs$core$IFn$_invoke$arity$0() : self__.it.call(null));
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
try{return cljs.core.deref(self__.it);
}catch (e43804){if((e43804 instanceof missionary.Cancelled)){
var e = e43804;
return (new hyperfiddle.electric.Failure(e));
} else {
throw e43804;

}
}}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"it","it",-1630841225,null),new cljs.core.Symbol(null,"meta43790","meta43790",1259092117,null)], null);
}));

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime43789");

(hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime43789");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/t_hyperfiddle$electric$impl$runtime43789.
 */
hyperfiddle.electric.impl.runtime.__GT_t_hyperfiddle$electric$impl$runtime43789 = (function hyperfiddle$electric$impl$runtime$__GT_t_hyperfiddle$electric$impl$runtime43789(it__$1,meta43790){
return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789(it__$1,meta43790));
});

}

return (new hyperfiddle.electric.impl.runtime.t_hyperfiddle$electric$impl$runtime43789(it,cljs.core.PersistentArrayMap.EMPTY));
}));
hyperfiddle.electric.impl.runtime.signal = (function hyperfiddle$electric$impl$runtime$signal(_LT_x){
return missionary.core.signal_BANG_(hyperfiddle.electric.impl.runtime.lift_cancelled(_LT_x));
});
hyperfiddle.electric.impl.runtime.this$ = cljs.core.volatile_BANG_(null);
hyperfiddle.electric.impl.runtime.context_slot_root = ((0) | (0));
hyperfiddle.electric.impl.runtime.context_slot_local_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.context_slot_remote_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_rpos = ((3) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_wpos = ((4) | (0));
hyperfiddle.electric.impl.runtime.context_slot_pending_buffer = ((5) | (0));
hyperfiddle.electric.impl.runtime.context_slot_frame_store = ((6) | (0));
hyperfiddle.electric.impl.runtime.context_slot_event = ((7) | (0));
hyperfiddle.electric.impl.runtime.context_slot_check = ((8) | (0));
hyperfiddle.electric.impl.runtime.context_slot_notifier = ((9) | (0));
hyperfiddle.electric.impl.runtime.context_slot_terminator = ((10) | (0));
hyperfiddle.electric.impl.runtime.context_slot_incoming = ((11) | (0));
hyperfiddle.electric.impl.runtime.context_slots = ((12) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_parent = ((0) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_position = ((1) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_buffer = ((2) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_size = ((3) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_foreigns = ((4) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_hooks = ((5) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_vars = ((6) | (0));
hyperfiddle.electric.impl.runtime.tier_slot_remote = ((7) | (0));
hyperfiddle.electric.impl.runtime.tier_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_context = ((0) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_parent = ((1) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_id = ((2) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_position = ((3) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_foreign = ((4) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_static = ((5) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_dynamic = ((6) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_variables = ((7) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_sources = ((8) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_targets = ((9) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_inputs = ((10) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_tiers = ((11) | (0));
hyperfiddle.electric.impl.runtime.frame_slot_constants = ((12) | (0));
hyperfiddle.electric.impl.runtime.frame_slots = ((13) | (0));
hyperfiddle.electric.impl.runtime.input_slot_frame = ((0) | (0));
hyperfiddle.electric.impl.runtime.input_slot_notifier = ((1) | (0));
hyperfiddle.electric.impl.runtime.input_slot_terminator = ((2) | (0));
hyperfiddle.electric.impl.runtime.input_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.input_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.input_slot_check = ((5) | (0));
hyperfiddle.electric.impl.runtime.input_slot_pending = ((6) | (0));
hyperfiddle.electric.impl.runtime.input_slot_cancel = ((7) | (0));
hyperfiddle.electric.impl.runtime.input_slots = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slot_input = ((0) | (0));
hyperfiddle.electric.impl.runtime.output_slot_id = ((1) | (0));
hyperfiddle.electric.impl.runtime.output_slot_iterator = ((2) | (0));
hyperfiddle.electric.impl.runtime.output_slot_current = ((3) | (0));
hyperfiddle.electric.impl.runtime.output_slot_dirty = ((4) | (0));
hyperfiddle.electric.impl.runtime.output_slot_done = ((5) | (0));
hyperfiddle.electric.impl.runtime.output_slot_prev = ((6) | (0));
hyperfiddle.electric.impl.runtime.output_slot_next = ((7) | (0));
hyperfiddle.electric.impl.runtime.output_slot_time = ((8) | (0));
hyperfiddle.electric.impl.runtime.output_slots = ((9) | (0));
hyperfiddle.electric.impl.runtime.aswap = (function hyperfiddle$electric$impl$runtime$aswap(var_args){
var G__43884 = arguments.length;
switch (G__43884) {
case 3:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___44473 = arguments.length;
var i__5770__auto___44474 = (0);
while(true){
if((i__5770__auto___44474 < len__5769__auto___44473)){
args_arr__5794__auto__.push((arguments[i__5770__auto___44474]));

var G__44475 = (i__5770__auto___44474 + (1));
i__5770__auto___44474 = G__44475;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((6)),(0),null));
return hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3 = (function (arr,slot,f){
return (arr[slot] = (function (){var G__43888 = (arr[slot]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43888) : f.call(null,G__43888));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4 = (function (arr,slot,f,a){
return (arr[slot] = (function (){var G__43889 = (arr[slot]);
var G__43890 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__43889,G__43890) : f.call(null,G__43889,G__43890));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5 = (function (arr,slot,f,a,b){
return (arr[slot] = (function (){var G__43892 = (arr[slot]);
var G__43893 = a;
var G__43894 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__43892,G__43893,G__43894) : f.call(null,G__43892,G__43893,G__43894));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$6 = (function (arr,slot,f,a,b,c){
return (arr[slot] = (function (){var G__43898 = (arr[slot]);
var G__43899 = a;
var G__43900 = b;
var G__43901 = c;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__43898,G__43899,G__43900,G__43901) : f.call(null,G__43898,G__43899,G__43900,G__43901));
})());
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$variadic = (function (arr,slot,f,a,b,c,ds){
return (arr[slot] = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,(arr[slot]),a,b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ds], 0)));
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$applyTo = (function (seq43877){
var G__43878 = cljs.core.first(seq43877);
var seq43877__$1 = cljs.core.next(seq43877);
var G__43879 = cljs.core.first(seq43877__$1);
var seq43877__$2 = cljs.core.next(seq43877__$1);
var G__43880 = cljs.core.first(seq43877__$2);
var seq43877__$3 = cljs.core.next(seq43877__$2);
var G__43881 = cljs.core.first(seq43877__$3);
var seq43877__$4 = cljs.core.next(seq43877__$3);
var G__43882 = cljs.core.first(seq43877__$4);
var seq43877__$5 = cljs.core.next(seq43877__$4);
var G__43883 = cljs.core.first(seq43877__$5);
var seq43877__$6 = cljs.core.next(seq43877__$5);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43878,G__43879,G__43880,G__43881,G__43882,G__43883,seq43877__$6);
}));

(hyperfiddle.electric.impl.runtime.aswap.cljs$lang$maxFixedArity = (6));

hyperfiddle.electric.impl.runtime.doto_aset = (function hyperfiddle$electric$impl$runtime$doto_aset(arr,k,v){
var G__43910 = arr;
(G__43910[(k | (0))] = v);

return G__43910;
});
hyperfiddle.electric.impl.runtime.make_context = (function hyperfiddle$electric$impl$runtime$make_context(){
var G__43912 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.context_slots);
(G__43912[hyperfiddle.electric.impl.runtime.context_slot_local_id] = cljs.core.identity((0)));

(G__43912[hyperfiddle.electric.impl.runtime.context_slot_remote_id] = cljs.core.identity((0)));

(G__43912[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = cljs.core.identity((0)));

(G__43912[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = cljs.core.identity((0)));

(G__43912[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2)));

(G__43912[hyperfiddle.electric.impl.runtime.context_slot_frame_store] = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return G__43912;
});
hyperfiddle.electric.impl.runtime.make_tier = (function hyperfiddle$electric$impl$runtime$make_tier(parent,position){
return ((parent[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))] = (function (){var G__43918 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.tier_slots);
(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_parent] = parent);

(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_position] = position);

(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8)));

(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_size] = cljs.core.identity(((0) | (0))));

(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.PersistentArrayMap.EMPTY);

(G__43918[hyperfiddle.electric.impl.runtime.tier_slot_hooks] = cljs.core.PersistentArrayMap.EMPTY);

return G__43918;
})());
});
hyperfiddle.electric.impl.runtime.make_frame = (function hyperfiddle$electric$impl$runtime$make_frame(context,parent,id,position,foreign,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buffer,vars,boot){
var tier_count = (variable_count + source_count);
var frame = (function (){var G__43924 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.frame_slots);
(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_context] = context);

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_parent] = parent);

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_id] = id);

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_position] = position);

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_foreign] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(foreign)));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_static] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(static$)));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_dynamic] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.count(dynamic)));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_variables] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(variable_count));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_sources] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(source_count));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_targets] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(target_count));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_inputs] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(input_count));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_tiers] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(tier_count));

(G__43924[hyperfiddle.electric.impl.runtime.frame_slot_constants] = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(constant_count));

return G__43924;
})();
var n__5636__auto___44494 = tier_count;
var i_44495 = (0);
while(true){
if((i_44495 < n__5636__auto___44494)){
hyperfiddle.electric.impl.runtime.make_tier(frame,i_44495);

var G__44496 = (i_44495 + (1));
i_44495 = G__44496;
continue;
} else {
}
break;
}

(buffer[(position | (0))] = frame);

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.assoc_BANG_,id,frame);

var prevs = cljs.core.reduce_kv((function (m,v,_LT_x){
var prev = (vars[(v | (0))]);
var proc = hyperfiddle.electric.impl.runtime.signal(_LT_x);
((frame[hyperfiddle.electric.impl.runtime.frame_slot_foreign])[cljs.core.count(m)] = proc);

(vars[(v | (0))] = proc);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,prev);
}),cljs.core.PersistentArrayMap.EMPTY,foreign);
cljs.core.reduce_kv((function (arr,i,_LT_x){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal(_LT_x));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_static]),static$);

cljs.core.reduce_kv((function (arr,i,v){
(arr[(i | (0))] = hyperfiddle.electric.impl.runtime.signal((vars[(v | (0))])));

return arr;
}),(frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]),dynamic);

var result = (boot.cljs$core$IFn$_invoke$arity$2 ? boot.cljs$core$IFn$_invoke$arity$2(frame,vars) : boot.call(null,frame,vars));
cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.doto_aset,vars,prevs);

return result;
});
hyperfiddle.electric.impl.runtime.input_ready = (function hyperfiddle$electric$impl$runtime$input_ready(input){
if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__43946 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__43946.cljs$core$IFn$_invoke$arity$0 ? fexpr__43946.cljs$core$IFn$_invoke$arity$0() : fexpr__43946.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.output_dirty = (function hyperfiddle$electric$impl$runtime$output_dirty(output){
var input = (output[hyperfiddle.electric.impl.runtime.output_slot_input]);
var dirty = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = dirty);

(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = output);

if((dirty == null)){
if((input === (input[hyperfiddle.electric.impl.runtime.input_slot_check]))){
var frame_44501 = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context_44502 = (frame_44501[hyperfiddle.electric.impl.runtime.frame_slot_context]);
var check_44503 = (context_44502[hyperfiddle.electric.impl.runtime.context_slot_check]);
(context_44502[hyperfiddle.electric.impl.runtime.context_slot_check] = input);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = check_44503);

if(((context_44502[hyperfiddle.electric.impl.runtime.context_slot_event]) == null)){
(context_44502[hyperfiddle.electric.impl.runtime.context_slot_event] = hyperfiddle.electric.impl.runtime.empty_event);

var fexpr__43952_44504 = (context_44502[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
(fexpr__43952_44504.cljs$core$IFn$_invoke$arity$0 ? fexpr__43952_44504.cljs$core$IFn$_invoke$arity$0() : fexpr__43952_44504.call(null));
} else {
}
} else {
}
} else {
}

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.output_spawn = (function hyperfiddle$electric$impl$runtime$output_spawn(input,output){
if((output == null)){
} else {
(output[hyperfiddle.electric.impl.runtime.output_slot_input] = input);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = (function (){var G__43959 = (function (){
return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var G__43960 = (function (){
(output[hyperfiddle.electric.impl.runtime.output_slot_done] = true);

return hyperfiddle.electric.impl.runtime.output_dirty(output);
});
var fexpr__43958 = (output[hyperfiddle.electric.impl.runtime.output_slot_iterator]);
return (fexpr__43958.cljs$core$IFn$_invoke$arity$2 ? fexpr__43958.cljs$core$IFn$_invoke$arity$2(G__43959,G__43960) : fexpr__43958.call(null,G__43959,G__43960));
})());
}

return input;
});
hyperfiddle.electric.impl.runtime.make_output = (function hyperfiddle$electric$impl$runtime$make_output(id,_LT_x){
var output = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.output_slots);
(output[hyperfiddle.electric.impl.runtime.output_slot_id] = id);

(output[hyperfiddle.electric.impl.runtime.output_slot_done] = false);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_current] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_iterator] = _LT_x);

return output;
});
hyperfiddle.electric.impl.runtime.input_cancel = (function hyperfiddle$electric$impl$runtime$input_cancel(input){
var c = (input[hyperfiddle.electric.impl.runtime.input_slot_cancel]);
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = true);

if((c == null)){
var fexpr__43972 = (input[hyperfiddle.electric.impl.runtime.input_slot_notifier]);
return (fexpr__43972.cljs$core$IFn$_invoke$arity$0 ? fexpr__43972.cljs$core$IFn$_invoke$arity$0() : fexpr__43972.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.input_change = (function hyperfiddle$electric$impl$runtime$input_change(input,x){
(input[hyperfiddle.electric.impl.runtime.input_slot_current] = x);

return hyperfiddle.electric.impl.runtime.input_ready(input);
});
hyperfiddle.electric.impl.runtime.input_freeze = (function hyperfiddle$electric$impl$runtime$input_freeze(input){
(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (-1));

if(((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]) == null)){
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

var fexpr__43976 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
return (fexpr__43976.cljs$core$IFn$_invoke$arity$0 ? fexpr__43976.cljs$core$IFn$_invoke$arity$0() : fexpr__43976.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.runtime.update_event = (function hyperfiddle$electric$impl$runtime$update_event(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44513 = arguments.length;
var i__5770__auto___44514 = (0);
while(true){
if((i__5770__auto___44514 < len__5769__auto___44513)){
args__5775__auto__.push((arguments[i__5770__auto___44514]));

var G__44515 = (i__5770__auto___44514 + (1));
i__5770__auto___44514 = G__44515;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic = (function (context,k,f,args){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if((temp__5806__auto__ == null)){
(context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,hyperfiddle.electric.impl.runtime.empty_event,k,f,args));

var fexpr__43992 = (context[hyperfiddle.electric.impl.runtime.context_slot_notifier]);
return (fexpr__43992.cljs$core$IFn$_invoke$arity$0 ? fexpr__43992.cljs$core$IFn$_invoke$arity$0() : fexpr__43992.call(null));
} else {
var event = temp__5806__auto__;
return (context[hyperfiddle.electric.impl.runtime.context_slot_event] = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,event,k,f,args));
}
}));

(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.update_event.cljs$lang$applyTo = (function (seq43979){
var G__43980 = cljs.core.first(seq43979);
var seq43979__$1 = cljs.core.next(seq43979);
var G__43981 = cljs.core.first(seq43979__$1);
var seq43979__$2 = cljs.core.next(seq43979__$1);
var G__43982 = cljs.core.first(seq43979__$2);
var seq43979__$3 = cljs.core.next(seq43979__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43980,G__43981,G__43982,seq43979__$3);
}));

hyperfiddle.electric.impl.runtime.input_check = (function hyperfiddle$electric$impl$runtime$input_check(input){
var frame = (input[hyperfiddle.electric.impl.runtime.input_slot_frame]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
while(true){
var temp__5806__auto__ = (input[hyperfiddle.electric.impl.runtime.input_slot_dirty]);
if((temp__5806__auto__ == null)){
return null;
} else {
var output = temp__5806__auto__;
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),(output[hyperfiddle.electric.impl.runtime.output_slot_id])], null);
(input[hyperfiddle.electric.impl.runtime.input_slot_dirty] = (output[hyperfiddle.electric.impl.runtime.output_slot_dirty]));

(output[hyperfiddle.electric.impl.runtime.output_slot_dirty] = output);

if(cljs.core.truth_((output[hyperfiddle.electric.impl.runtime.output_slot_done]))){
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"freeze","freeze",2043466309),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));
} else {
var x_44526 = cljs.core.deref((output[hyperfiddle.electric.impl.runtime.output_slot_iterator]));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((output[hyperfiddle.electric.impl.runtime.output_slot_current]),(output[hyperfiddle.electric.impl.runtime.output_slot_current] = x_44526))){
} else {
var buffer_44532 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var wpos_44533 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
var temp__5806__auto___44534__$1 = (output[hyperfiddle.electric.impl.runtime.output_slot_time]);
if((temp__5806__auto___44534__$1 == null)){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.inc);
} else {
var t_44535 = temp__5806__auto___44534__$1;
var p_44536 = (output[hyperfiddle.electric.impl.runtime.output_slot_prev]);
var n_44537 = (output[hyperfiddle.electric.impl.runtime.output_slot_next]);
(buffer_44532[t_44535] = (((p_44536 === output))?null:(function (){
(p_44536[hyperfiddle.electric.impl.runtime.output_slot_next] = n_44537);

return (n_44537[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_44536);
})()
));
}

(output[hyperfiddle.electric.impl.runtime.output_slot_time] = wpos_44533);

var temp__5806__auto___44539__$1 = (buffer_44532[wpos_44533]);
if((temp__5806__auto___44539__$1 == null)){
(buffer_44532[wpos_44533] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = output);
} else {
var p_44540 = temp__5806__auto___44539__$1;
var n_44544 = (p_44540[hyperfiddle.electric.impl.runtime.output_slot_next]);
(p_44540[hyperfiddle.electric.impl.runtime.output_slot_next] = output);

(n_44544[hyperfiddle.electric.impl.runtime.output_slot_prev] = output);

(output[hyperfiddle.electric.impl.runtime.output_slot_prev] = p_44540);

(output[hyperfiddle.electric.impl.runtime.output_slot_next] = n_44544);
}

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"change","change",-1163046502),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,x_44526], 0));
}
}

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.input_transfer = (function hyperfiddle$electric$impl$runtime$input_transfer(input){
hyperfiddle.electric.impl.runtime.input_check(input);

if(cljs.core.truth_((input[hyperfiddle.electric.impl.runtime.input_slot_cancel]))){
var fexpr__44011_44546 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__44011_44546.cljs$core$IFn$_invoke$arity$0 ? fexpr__44011_44546.cljs$core$IFn$_invoke$arity$0() : fexpr__44011_44546.call(null));

throw (new missionary.Cancelled());
} else {
var G__44012 = (input[hyperfiddle.electric.impl.runtime.input_slot_pending]);
switch (G__44012) {
case (-1):
var fexpr__44014_44548 = (input[hyperfiddle.electric.impl.runtime.input_slot_terminator]);
(fexpr__44014_44548.cljs$core$IFn$_invoke$arity$0 ? fexpr__44014_44548.cljs$core$IFn$_invoke$arity$0() : fexpr__44014_44548.call(null));

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
case (0):
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return (input[hyperfiddle.electric.impl.runtime.input_slot_current]);

break;
default:
(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = null);

return hyperfiddle.electric.impl.runtime.pending;

}
}
});
hyperfiddle.electric.impl.runtime.make_input = (function hyperfiddle$electric$impl$runtime$make_input(frame,deps){
var input = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.input_slots);
(input[hyperfiddle.electric.impl.runtime.input_slot_frame] = frame);

(input[hyperfiddle.electric.impl.runtime.input_slot_pending] = (0));

(input[hyperfiddle.electric.impl.runtime.input_slot_current] = hyperfiddle.electric.impl.runtime.pending);

(input[hyperfiddle.electric.impl.runtime.input_slot_cancel] = false);

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.output_spawn,input,deps);
});
hyperfiddle.electric.impl.runtime.input_spawn = (function hyperfiddle$electric$impl$runtime$input_spawn(frame,slot,deps){
return missionary.core.signal_BANG_((function (n,t){
var input = hyperfiddle.electric.impl.runtime.make_input(frame,deps);
(input[hyperfiddle.electric.impl.runtime.input_slot_notifier] = n);

(input[hyperfiddle.electric.impl.runtime.input_slot_terminator] = t);

((frame[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[(slot | (0))] = input);

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return hyperfiddle.electric.impl.runtime.__GT_It(input,hyperfiddle.electric.impl.runtime.input_cancel,hyperfiddle.electric.impl.runtime.input_transfer);
}));
});
hyperfiddle.electric.impl.runtime.check_unbound_var = (function hyperfiddle$electric$impl$runtime$check_unbound_var(debug_info,_LT_x){
return missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117),x)){
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.impl.runtime.error(["Unbound var `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(debug_info)),"`"].join(''))));
} else {
return x;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_x], 0));
});
hyperfiddle.electric.impl.runtime.static$ = (function hyperfiddle$electric$impl$runtime$static(frame,slot){
return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_static])[(slot | (0))]);
});
hyperfiddle.electric.impl.runtime.dynamic = (function hyperfiddle$electric$impl$runtime$dynamic(frame,slot,debug_info){
return hyperfiddle.electric.impl.runtime.check_unbound_var(debug_info,((frame[hyperfiddle.electric.impl.runtime.frame_slot_dynamic])[(slot | (0))]));
});
/**
 * A snapshot of the tree below given frame, as nested vectors. Frame vectors start with their id.
 */
hyperfiddle.electric.impl.runtime.tree = (function hyperfiddle$electric$impl$runtime$tree(f){
var tiers = (f[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var v = cljs.core.PersistentVector.EMPTY;
var i = ((0) | (0));
while(true){
if((i === tiers.length)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),(f[hyperfiddle.electric.impl.runtime.frame_slot_id]),new cljs.core.Keyword(null,"inputs","inputs",865803858),(f[hyperfiddle.electric.impl.runtime.frame_slot_inputs]).length,new cljs.core.Keyword(null,"targets","targets",2014963406),(f[hyperfiddle.electric.impl.runtime.frame_slot_targets]).length,new cljs.core.Keyword(null,"sources","sources",-321166424),(f[hyperfiddle.electric.impl.runtime.frame_slot_sources]).length,new cljs.core.Keyword(null,"tiers","tiers",-46242789),v], null);
} else {
var G__44567 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,(function (){var tier = (tiers[i]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var v__$1 = cljs.core.PersistentVector.EMPTY;
var i__$1 = ((0) | (0));
while(true){
if((i__$1 === (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]))){
return v__$1;
} else {
var G__44571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v__$1,(function (){var G__44110 = (buf[i__$1]);
return (hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.runtime.tree.cljs$core$IFn$_invoke$arity$1(G__44110) : hyperfiddle.electric.impl.runtime.tree.call(null,G__44110));
})());
var G__44572 = (i__$1 + (1));
v__$1 = G__44571;
i__$1 = G__44572;
continue;
}
break;
}
})());
var G__44568 = (i + (1));
v = G__44567;
i = G__44568;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.find_scope = (function hyperfiddle$electric$impl$runtime$find_scope(f){
var f__$1 = f;
var s = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__5806__auto__ = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5806__auto__ == null)){
return s;
} else {
var tier = temp__5806__auto__;
var G__44574 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var G__44575 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,cljs.core.keys((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks])));
f__$1 = G__44574;
s = G__44575;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_walk_tiers = (function hyperfiddle$electric$impl$runtime$frame_walk_tiers(frame,step,k,cb,start){
var tiers = (frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers]);
var size = tiers.length;
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = (function (){var tier = (tiers[i__$1]);
var temp__5806__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k);
if((temp__5806__auto__ == null)){
return (hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5 ? hyperfiddle.electric.impl.runtime.tier_walk_frames.cljs$core$IFn$_invoke$arity$5(tier,step,k,cb,null) : hyperfiddle.electric.impl.runtime.tier_walk_frames.call(null,tier,step,k,cb,null));
} else {
var v = temp__5806__auto__;
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(v) : cb.call(null,v));
}
})();
if((temp__5806__auto__ == null)){
var G__44576 = i__$1;
i = G__44576;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.tier_walk_frames = (function hyperfiddle$electric$impl$runtime$tier_walk_frames(tier,step,k,cb,start){
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var size = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var back = (((1) - step) >> (1));
var back_inc_size = (back * (size + (1)));
var stop = (size - back_inc_size);
var i = (((start == null))?(back_inc_size - (1)):start);
while(true){
var i__$1 = (i + step);
if((i__$1 === stop)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.frame_walk_tiers((buf[i__$1]),step,k,cb,null);
if((temp__5806__auto__ == null)){
var G__44577 = i__$1;
i = G__44577;
continue;
} else {
var x = temp__5806__auto__;
return x;
}
}
break;
}
});
hyperfiddle.electric.impl.runtime.notify_rotate = (function hyperfiddle$electric$impl$runtime$notify_rotate(f,k){
var anchor = (function (){var f__$1 = f;
while(true){
var tier = (f__$1[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if(cljs.core.contains_QMARK_((tier[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
return null;
} else {
var temp__5806__auto__ = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier,(1),k,cljs.core.identity,(f__$1[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto__ == null)){
var G__44578 = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
f__$1 = G__44578;
continue;
} else {
var a = temp__5806__auto__;
return a;
}
}
break;
}
})();
hyperfiddle.electric.impl.runtime.frame_walk_tiers(f,(1),k,(function (target){
return (k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(target,anchor) : k.call(null,target,anchor));
}),null);

return f;
});
hyperfiddle.electric.impl.runtime.array_call = (function hyperfiddle$electric$impl$runtime$array_call(arr){
var n__5636__auto__ = arr.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__44145_44580 = (arr[i]);
(fexpr__44145_44580.cljs$core$IFn$_invoke$arity$0 ? fexpr__44145_44580.cljs$core$IFn$_invoke$arity$0() : fexpr__44145_44580.call(null));

var G__44581 = (i + (1));
i = G__44581;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.runtime.frame_dispose = (function hyperfiddle$electric$impl$runtime$frame_dispose(f){
(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = null);

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_static]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_dynamic]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_foreign]));

hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_variables]));

return hyperfiddle.electric.impl.runtime.array_call((f[hyperfiddle.electric.impl.runtime.frame_slot_constants]));
});
hyperfiddle.electric.impl.runtime.frame_rotate = (function hyperfiddle$electric$impl$runtime$frame_rotate(f,to){
var from = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
var step = cljs.core.compare(to,from);
var tier = (f[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
if((to === from)){
var size = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_size]) - (1));
var i_44583 = to;
while(true){
if((i_44583 === size)){
} else {
var j_44584 = (i_44583 + (1));
var y_44585 = (buf[(j_44584 | (0))]);
(y_44585[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_44583);

(buf[(i_44583 | (0))] = y_44585);

var G__44586 = j_44584;
i_44583 = G__44586;
continue;
}
break;
}

(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = size);

(buf[(size | (0))] = null);

return hyperfiddle.electric.impl.runtime.frame_dispose(f);
} else {
var i_44587 = from;
while(true){
var j_44588 = (i_44587 + step);
var y_44589 = (buf[(j_44588 | (0))]);
(y_44589[hyperfiddle.electric.impl.runtime.frame_slot_position] = i_44587);

(buf[(i_44587 | (0))] = y_44589);

if((to === j_44588)){
} else {
var G__44590 = j_44588;
i_44587 = G__44590;
continue;
}
break;
}

(f[hyperfiddle.electric.impl.runtime.frame_slot_position] = to);

(buf[(to | (0))] = f);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.notify_rotate,f,hyperfiddle.electric.impl.runtime.find_scope(f));
}
});
/**
 * Move a frame. If origin position is equal to target position, frame is removed. Will search and call `hook`.
 */
hyperfiddle.electric.impl.runtime.move = (function hyperfiddle$electric$impl$runtime$move(tier,from,to){
var f = ((tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer])[(from | (0))]);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),to], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,to);
});
hyperfiddle.electric.impl.runtime.frame_cancel = (function hyperfiddle$electric$impl$runtime$frame_cancel(f){
var temp__5808__auto__ = (f[hyperfiddle.electric.impl.runtime.frame_slot_position]);
if((temp__5808__auto__ == null)){
return null;
} else {
var pos = temp__5808__auto__;
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic((f[hyperfiddle.electric.impl.runtime.frame_slot_context]),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- (f[hyperfiddle.electric.impl.runtime.frame_slot_id])),new cljs.core.Keyword(null,"position","position",-2011731912),pos], null)], 0));

return hyperfiddle.electric.impl.runtime.frame_rotate(f,pos);
}
});
hyperfiddle.electric.impl.runtime.acopy = (function hyperfiddle$electric$impl$runtime$acopy(src,src_off,dest,dest_off,size){
var n__5636__auto___44598 = size;
var i_44599 = (0);
while(true){
if((i_44599 < n__5636__auto___44598)){
(dest[(dest_off + i_44599)] = (src[(src_off + i_44599)]));

var G__44601 = (i_44599 + (1));
i_44599 = G__44601;
continue;
} else {
}
break;
}

return dest;
});
hyperfiddle.electric.impl.runtime.constructor$ = (function hyperfiddle$electric$impl$runtime$constructor(static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,boot){
return (function (tier,id){
var par = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var buf = (tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer]);
var pos = (tier[hyperfiddle.electric.impl.runtime.tier_slot_size]);
var cap = buf.length;
var buf__$1 = (((pos < cap))?buf:(tier[hyperfiddle.electric.impl.runtime.tier_slot_buffer] = hyperfiddle.electric.impl.runtime.acopy(buf,(0),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((cap << (1))),(0),cap)));
(tier[hyperfiddle.electric.impl.runtime.tier_slot_size] = (pos + (1)));

return hyperfiddle.electric.impl.runtime.make_frame((par[hyperfiddle.electric.impl.runtime.frame_slot_context]),tier,id,pos,(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]),static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,buf__$1,(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars]),boot);
});
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.runtime.FrameIterator = (function (f,it){
this.f = f;
this.it = it;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__44198 = (arguments.length - (1));
switch (G__44198) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.apply = (function (self__,args44196){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args44196)));
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
return hyperfiddle.electric.impl.runtime.frame_cancel(self__.f);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.it);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"it","it",-1630841225,null)], null);
}));

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$type = true);

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorStr = "hyperfiddle.electric.impl.runtime/FrameIterator");

(hyperfiddle.electric.impl.runtime.FrameIterator.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.runtime/FrameIterator");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.runtime/FrameIterator.
 */
hyperfiddle.electric.impl.runtime.__GT_FrameIterator = (function hyperfiddle$electric$impl$runtime$__GT_FrameIterator(f,it){
return (new hyperfiddle.electric.impl.runtime.FrameIterator(f,it));
});

hyperfiddle.electric.impl.runtime.constant = (function hyperfiddle$electric$impl$runtime$constant(frame,slot,ctor){
var consts = (frame[hyperfiddle.electric.impl.runtime.frame_slot_constants]);
var context = (frame[hyperfiddle.electric.impl.runtime.frame_slot_context]);
return (consts[slot] = hyperfiddle.electric.impl.runtime.signal(missionary.core.watch(cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to build frame - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var parent = (tier[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var id = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_local_id,cljs.core.inc);
hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"create","create",-1301499256),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (frame[hyperfiddle.electric.impl.runtime.frame_slot_id])),slot], null),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- (parent[hyperfiddle.electric.impl.runtime.frame_slot_id])),(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote])], null)], null)], 0));

var _LT_x = (ctor.cljs$core$IFn$_invoke$arity$2 ? ctor.cljs$core$IFn$_invoke$arity$2(tier,id) : ctor.call(null,tier,id));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id);
return hyperfiddle.electric.impl.runtime.__GT_FrameIterator(f,(function (){var G__44213 = n;
var G__44214 = (function (){
hyperfiddle.electric.impl.runtime.frame_cancel(f);

hyperfiddle.electric.impl.runtime.update_event.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"frame","frame",-1711082588),(- id)], null)], 0));

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,(f[hyperfiddle.electric.impl.runtime.frame_slot_id]));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__44213,G__44214) : _LT_x.call(null,G__44213,G__44214));
})());
}
})))));
});
hyperfiddle.electric.impl.runtime.inject = (function hyperfiddle$electric$impl$runtime$inject(v){
return (function (_LT_x,_LT_y){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to inject - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var foreigns = (tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(foreigns,v,_LT_y));

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {(tier[hyperfiddle.electric.impl.runtime.tier_slot_foreigns] = foreigns);
}}
});
});
});
hyperfiddle.electric.impl.runtime.bind = (function hyperfiddle$electric$impl$runtime$bind(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44614 = arguments.length;
var i__5770__auto___44615 = (0);
while(true){
if((i__5770__auto___44615 < len__5769__auto___44614)){
args__5775__auto__.push((arguments[i__5770__auto___44615]));

var G__44618 = (i__5770__auto___44615 + (1));
i__5770__auto___44615 = G__44618;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.bind.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to bind - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
try{var fexpr__44224 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,tier,args);
return (fexpr__44224.cljs$core$IFn$_invoke$arity$2 ? fexpr__44224.cljs$core$IFn$_invoke$arity$2(n,t) : fexpr__44224.call(null,n,t));
}catch (e44223){var e = e44223;
return hyperfiddle.electric.impl.failer.run(e,n,t);
}}
});
}));

(hyperfiddle.electric.impl.runtime.bind.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.bind.cljs$lang$applyTo = (function (seq44219){
var G__44220 = cljs.core.first(seq44219);
var seq44219__$1 = cljs.core.next(seq44219);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44220,seq44219__$1);
}));

hyperfiddle.electric.impl.runtime.with$ = (function hyperfiddle$electric$impl$runtime$with(tier,_LT_x){
return (function (n,t){
var prev = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,tier);

try{return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(n,t) : _LT_x.call(null,n,t));
}finally {cljs.core.vreset_BANG_(hyperfiddle.electric.impl.runtime.this$,prev);
}});
});
hyperfiddle.electric.impl.runtime.clause = (function hyperfiddle$electric$impl$runtime$clause(var_args){
var G__44228 = arguments.length;
switch (G__44228) {
case 1:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (e){
var G__44229 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44229) : f.call(null,G__44229));
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$core$IFn$_invoke$arity$2 = (function (f,c){
return (function (e){
if((hyperfiddle.electric.debug.unwrap(e) instanceof c)){
var G__44230 = hyperfiddle.electric.impl.runtime.pure(e);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44230) : f.call(null,G__44230));
} else {
return null;
}
});
}));

(hyperfiddle.electric.impl.runtime.clause.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.recover = (function hyperfiddle$electric$impl$runtime$recover(tier,catch$,_LT_x){
return hyperfiddle.electric.impl.yield$.yield$((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var temp__5808__auto__ = (function (){var G__44231 = x.error;
return (catch$.cljs$core$IFn$_invoke$arity$1 ? catch$.cljs$core$IFn$_invoke$arity$1(G__44231) : catch$.call(null,G__44231));
})();
if((temp__5808__auto__ == null)){
return null;
} else {
var _LT_c = temp__5808__auto__;
return hyperfiddle.electric.impl.runtime.with$(tier,_LT_c);
}
} else {
return null;
}
}),_LT_x);
});
hyperfiddle.electric.impl.runtime.variable = (function hyperfiddle$electric$impl$runtime$variable(frame,vars,position,slot,_LT__LT_x){
var tier = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(tier[hyperfiddle.electric.impl.runtime.tier_slot_remote] = slot);

(tier[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return ((frame[hyperfiddle.electric.impl.runtime.frame_slot_variables])[(slot | (0))] = missionary.core.signal_BANG_(missionary.core.cp_STAR_((function (){var cr44235_block_0 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_0(cr44235_state){
try{var cr44235_place_0 = null;
var cr44235_place_1 = false;
(cr44235_state[(0)] = cr44235_block_1);

(cr44235_state[(1)] = cr44235_place_0);

(cr44235_state[(2)] = cr44235_place_1);

return cr44235_state;
}catch (e44274){var cr44235_exception = e44274;
(cr44235_state[(0)] = null);

throw cr44235_exception;
}});
var cr44235_block_3 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_3(cr44235_state){
try{var cr44235_place_3 = (cr44235_state[(3)]);
var cr44235_place_8 = hyperfiddle.electric.impl.runtime.with$;
var cr44235_place_9 = tier;
var cr44235_place_10 = cr44235_place_3;
var cr44235_place_11 = (function (){var G__44277 = cr44235_place_9;
var G__44278 = cr44235_place_10;
var fexpr__44276 = cr44235_place_8;
return (fexpr__44276.cljs$core$IFn$_invoke$arity$2 ? fexpr__44276.cljs$core$IFn$_invoke$arity$2(G__44277,G__44278) : fexpr__44276.call(null,G__44277,G__44278));
})();
(cr44235_state[(0)] = cr44235_block_4);

(cr44235_state[(3)] = null);

return missionary.core.switch$(cr44235_place_11);
}catch (e44275){var cr44235_exception = e44275;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(3)] = null);

(cr44235_state[(4)] = null);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_6 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_6(cr44235_state){
try{var cr44235_place_7 = (cr44235_state[(4)]);
(cr44235_state[(0)] = cr44235_block_8);

(cr44235_state[(4)] = null);

(cr44235_state[(1)] = cr44235_place_7);

return cr44235_state;
}catch (e44279){var cr44235_exception = e44279;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(4)] = null);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_7 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_7(cr44235_state){
try{var cr44235_place_0 = (cr44235_state[(1)]);
var cr44235_place_14 = cr44235_place_0;
var cr44235_place_15 = cr44235_place_14;
var cr44235_place_16 = (new hyperfiddle.electric.Failure(cr44235_place_15));
(cr44235_state[(0)] = cr44235_block_8);

(cr44235_state[(1)] = cr44235_place_16);

return cr44235_state;
}catch (e44280){var cr44235_exception = e44280;
(cr44235_state[(0)] = cr44235_block_8);

(cr44235_state[(2)] = true);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_4 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_4(cr44235_state){
try{var cr44235_place_12 = missionary.core.unpark();
(cr44235_state[(0)] = cr44235_block_6);

(cr44235_state[(4)] = cr44235_place_12);

return cr44235_state;
}catch (e44281){var cr44235_exception = e44281;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(4)] = null);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_8 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_8(cr44235_state){
try{var cr44235_place_0 = (cr44235_state[(1)]);
var cr44235_place_1 = (cr44235_state[(2)]);
var cr44235_place_17 = (cljs.core.truth_(cr44235_place_1)?(function(){throw cr44235_place_0})():cr44235_place_0);
(cr44235_state[(0)] = null);

(cr44235_state[(1)] = null);

(cr44235_state[(2)] = null);

return cr44235_place_17;
}catch (e44282){var cr44235_exception = e44282;
(cr44235_state[(0)] = null);

(cr44235_state[(1)] = null);

(cr44235_state[(2)] = null);

throw cr44235_exception;
}});
var cr44235_block_2 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_2(cr44235_state){
try{var cr44235_place_3 = missionary.core.unpark();
var cr44235_place_4 = hyperfiddle.electric.impl.runtime.failure;
var cr44235_place_5 = cr44235_place_3;
var cr44235_place_6 = cr44235_place_4(cr44235_place_5);
var cr44235_place_7 = null;
if(cljs.core.truth_(cr44235_place_6)){
(cr44235_state[(0)] = cr44235_block_5);

(cr44235_state[(3)] = cr44235_place_3);

(cr44235_state[(4)] = cr44235_place_7);

return cr44235_state;
} else {
(cr44235_state[(0)] = cr44235_block_3);

(cr44235_state[(3)] = cr44235_place_3);

(cr44235_state[(4)] = cr44235_place_7);

return cr44235_state;
}
}catch (e44283){var cr44235_exception = e44283;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_5 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_5(cr44235_state){
try{var cr44235_place_3 = (cr44235_state[(3)]);
var cr44235_place_13 = cr44235_place_3;
(cr44235_state[(0)] = cr44235_block_6);

(cr44235_state[(3)] = null);

(cr44235_state[(4)] = cr44235_place_13);

return cr44235_state;
}catch (e44287){var cr44235_exception = e44287;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(3)] = null);

(cr44235_state[(4)] = null);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
var cr44235_block_1 = (function hyperfiddle$electric$impl$runtime$variable_$_cr44235_block_1(cr44235_state){
try{var cr44235_place_2 = _LT__LT_x;
(cr44235_state[(0)] = cr44235_block_2);

return missionary.core.switch$(cr44235_place_2);
}catch (e44289){var cr44235_exception = e44289;
(cr44235_state[(0)] = cr44235_block_7);

(cr44235_state[(1)] = cr44235_exception);

return cr44235_state;
}});
return cloroutine.impl.coroutine((function (){var G__44291 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44291[(0)] = cr44235_block_0);

return G__44291;
})());
})())));
});
hyperfiddle.electric.impl.runtime.source = (function hyperfiddle$electric$impl$runtime$source(frame,vars,position,slot){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_sources])[(slot | (0))] = (function (){var G__44292 = ((frame[hyperfiddle.electric.impl.runtime.frame_slot_tiers])[(position | (0))]);
(G__44292[hyperfiddle.electric.impl.runtime.tier_slot_vars] = cljs.core.aclone(vars));

return G__44292;
})());

return null;
});
hyperfiddle.electric.impl.runtime.target = (function hyperfiddle$electric$impl$runtime$target(frame,slot,ctor){
((frame[hyperfiddle.electric.impl.runtime.frame_slot_targets])[(slot | (0))] = ctor);

return null;
});
hyperfiddle.electric.impl.runtime.hook = (function hyperfiddle$electric$impl$runtime$hook(k,v,_LT_x){
if((!((v == null)))){
} else {
throw (new Error(["Assert failed: ","hook value must be non-nil.","\n","(some? v)"].join('')));
}

return (function (n,t){
var temp__5806__auto__ = cljs.core.deref(hyperfiddle.electric.impl.runtime.this$);
if((temp__5806__auto__ == null)){
return hyperfiddle.electric.impl.failer.run(hyperfiddle.electric.impl.runtime.error("Unable to hook - not an object."),n,t);
} else {
var tier = temp__5806__auto__;
var tier_44660__$1 = tier;
while(true){
var f_44661 = (tier_44660__$1[hyperfiddle.electric.impl.runtime.tier_slot_parent]);
var temp__5806__auto___44662__$1 = hyperfiddle.electric.impl.runtime.frame_walk_tiers(f_44661,(1),k,cljs.core.identity,(tier_44660__$1[hyperfiddle.electric.impl.runtime.tier_slot_position]));
if((temp__5806__auto___44662__$1 == null)){
var temp__5808__auto___44663 = (f_44661[hyperfiddle.electric.impl.runtime.frame_slot_parent]);
if((temp__5808__auto___44663 == null)){
} else {
var tier_44664__$2 = temp__5808__auto___44663;
var temp__5806__auto___44665__$2 = hyperfiddle.electric.impl.runtime.tier_walk_frames(tier_44664__$2,(1),k,cljs.core.identity,(f_44661[hyperfiddle.electric.impl.runtime.frame_slot_position]));
if((temp__5806__auto___44665__$2 == null)){
if(cljs.core.contains_QMARK_((tier_44664__$2[hyperfiddle.electric.impl.runtime.tier_slot_hooks]),k)){
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,null) : k.call(null,v,null));
} else {
var G__44667 = tier_44664__$2;
tier_44660__$1 = G__44667;
continue;
}
} else {
var a_44669 = temp__5806__auto___44665__$2;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_44669) : k.call(null,v,a_44669));
}
}
} else {
var a_44670 = temp__5806__auto___44662__$1;
(k.cljs$core$IFn$_invoke$arity$2 ? k.cljs$core$IFn$_invoke$arity$2(v,a_44670) : k.call(null,v,a_44670));
}
break;
}

hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$5(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.assoc,k,v);

var G__44294 = n;
var G__44295 = (function (){
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(tier,hyperfiddle.electric.impl.runtime.tier_slot_hooks,cljs.core.dissoc,k);

(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(v) : k.call(null,v));

return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
});
return (_LT_x.cljs$core$IFn$_invoke$arity$2 ? _LT_x.cljs$core$IFn$_invoke$arity$2(G__44294,G__44295) : _LT_x.call(null,G__44294,G__44295));
}
});
});
hyperfiddle.electric.impl.runtime.unbound = hyperfiddle.electric.impl.runtime.pure(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","unbound","hyperfiddle.electric.impl.runtime/unbound",63043117));
hyperfiddle.electric.impl.runtime.subject_at = (function hyperfiddle$electric$impl$runtime$subject_at(arr,slot){
return (function (_BANG_){
(arr[slot] = _BANG_);

return (function (){
return (arr[slot] = null);
});
});
});
hyperfiddle.electric.impl.runtime.context_ack = (function hyperfiddle$electric$impl$runtime$context_ack(context){
var rpos = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var buffer = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var output = (buffer[rpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]))){
throw hyperfiddle.electric.impl.runtime.error("Unexpected ack.");
} else {
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = ((rpos + (1)) & (buffer.length - (1))));

(buffer[rpos] = null);

var output__$1 = output;
while(true){
if((output__$1 == null)){
return null;
} else {
((output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev])[hyperfiddle.electric.impl.runtime.output_slot_next] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_prev] = null);

(output__$1[hyperfiddle.electric.impl.runtime.output_slot_time] = null);

var input_44675 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_input]);
if((hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(input_44675,hyperfiddle.electric.impl.runtime.input_slot_pending,cljs.core.dec) === (0))){
hyperfiddle.electric.impl.runtime.input_ready(input_44675);
} else {
}

var G__44676 = (output__$1[hyperfiddle.electric.impl.runtime.output_slot_next]);
output__$1 = G__44676;
continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.context_cancel = (function hyperfiddle$electric$impl$runtime$context_cancel(context){
return hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),cljs.core.identity);
});
hyperfiddle.electric.impl.runtime.context_transfer = (function hyperfiddle$electric$impl$runtime$context_transfer(context){
while(true){
var temp__5806__auto__ = (context[hyperfiddle.electric.impl.runtime.context_slot_check]);
if((temp__5806__auto__ == null)){
var event = (context[hyperfiddle.electric.impl.runtime.context_slot_event]);
if(cljs.core.contains_QMARK_(event,new cljs.core.Keyword(null,"cancel","cancel",-1964088360))){
var fexpr__44298_44680 = (context[hyperfiddle.electric.impl.runtime.context_slot_terminator]);
(fexpr__44298_44680.cljs$core$IFn$_invoke$arity$0 ? fexpr__44298_44680.cljs$core$IFn$_invoke$arity$0() : fexpr__44298_44680.call(null));

throw (new missionary.Cancelled());
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"change","change",-1163046502).cljs$core$IFn$_invoke$arity$1(event))){
} else {
var buffer_44681 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer]);
var size_44682 = buffer_44681.length;
var rpos_44683 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos]);
var wpos_44684 = (context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos]);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rpos_44683,(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = ((wpos_44684 + (1)) & (size_44682 - (1)))))){
var larger_44685 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((size_44682 << (1)));
var split_44686 = (size_44682 - rpos_44683);
hyperfiddle.electric.impl.runtime.acopy(buffer_44681,rpos_44683,larger_44685,(0),split_44686);

hyperfiddle.electric.impl.runtime.acopy(buffer_44681,(0),larger_44685,split_44686,rpos_44683);

var n__5636__auto___44688 = size_44682;
var t_44689 = (0);
while(true){
if((t_44689 < n__5636__auto___44688)){
var temp__5808__auto___44690 = (larger_44685[t_44689]);
if((temp__5808__auto___44690 == null)){
} else {
var output_44691 = temp__5808__auto___44690;
var o_44692 = output_44691;
while(true){
(o_44692[hyperfiddle.electric.impl.runtime.output_slot_time] = t_44689);

var n_44693 = (o_44692[hyperfiddle.electric.impl.runtime.output_slot_next]);
if((n_44693 === output_44691)){
} else {
var G__44694 = n_44693;
o_44692 = G__44694;
continue;
}
break;
}
}

var G__44695 = (t_44689 + (1));
t_44689 = G__44695;
continue;
} else {
}
break;
}

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_buffer] = larger_44685);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_wpos] = size_44682);

(context[hyperfiddle.electric.impl.runtime.context_slot_pending_rpos] = (0));
} else {
}
}

(context[hyperfiddle.electric.impl.runtime.context_slot_event] = null);

return event;
} else {
var input = temp__5806__auto__;
(context[hyperfiddle.electric.impl.runtime.context_slot_check] = (input[hyperfiddle.electric.impl.runtime.input_slot_check]));

(input[hyperfiddle.electric.impl.runtime.input_slot_check] = input);

hyperfiddle.electric.impl.runtime.input_check(input);

continue;
}
break;
}
});
hyperfiddle.electric.impl.runtime.eval_tree_inst = (function hyperfiddle$electric$impl$runtime$eval_tree_inst(context,inst){
var G__44299_44697 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(inst);
var G__44299_44698__$1 = (((G__44299_44697 instanceof cljs.core.Keyword))?G__44299_44697.fqn:null);
switch (G__44299_44698__$1) {
case "create":
var map__44300_44700 = inst;
var map__44300_44701__$1 = cljs.core.__destructure_map(map__44300_44700);
var vec__44301_44702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44300_44701__$1,new cljs.core.Keyword(null,"target","target",253001721));
var target_frame_44703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44301_44702,(0),null);
var target_slot_44704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44301_44702,(1),null);
var vec__44304_44705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44300_44701__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var source_frame_44706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44304_44705,(0),null);
var source_slot_44707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44304_44705,(1),null);
var G__44308_44709 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),source_frame_44706)[hyperfiddle.electric.impl.runtime.frame_slot_sources])[source_slot_44707]);
var G__44309_44710 = hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$3(context,hyperfiddle.electric.impl.runtime.context_slot_remote_id,cljs.core.dec);
var fexpr__44307_44711 = ((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),target_frame_44703)[hyperfiddle.electric.impl.runtime.frame_slot_targets])[target_slot_44704]);
(fexpr__44307_44711.cljs$core$IFn$_invoke$arity$2 ? fexpr__44307_44711.cljs$core$IFn$_invoke$arity$2(G__44308_44709,G__44309_44710) : fexpr__44307_44711.call(null,G__44308_44709,G__44309_44710));

break;
case "rotate":
hyperfiddle.electric.impl.runtime.frame_rotate(cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst)),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(inst));

break;
case "remove":
hyperfiddle.electric.impl.runtime.aswap.cljs$core$IFn$_invoke$arity$4(context,hyperfiddle.electric.impl.runtime.context_slot_frame_store,cljs.core.dissoc_BANG_,new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(inst));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44299_44698__$1)].join('')));

}

return context;
});
hyperfiddle.electric.impl.runtime.eval_change_inst = (function hyperfiddle$electric$impl$runtime$eval_change_inst(context,p__44310,value){
var vec__44311 = p__44310;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44311,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44311,(1),null);
hyperfiddle.electric.impl.runtime.input_change(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]),value);

return context;
});
hyperfiddle.electric.impl.runtime.eval_freeze_inst = (function hyperfiddle$electric$impl$runtime$eval_freeze_inst(context,p__44314){
var vec__44315 = p__44314;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44315,(0),null);
var slot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44315,(1),null);
hyperfiddle.electric.impl.runtime.input_freeze(((cljs.core.get.cljs$core$IFn$_invoke$arity$2((context[hyperfiddle.electric.impl.runtime.context_slot_frame_store]),id)[hyperfiddle.electric.impl.runtime.frame_slot_inputs])[slot]));

return context;
});
hyperfiddle.electric.impl.runtime.parse_event = (function hyperfiddle$electric$impl$runtime$parse_event(context,p__44318){
var map__44319 = p__44318;
var map__44319__$1 = cljs.core.__destructure_map(map__44319);
var acks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44319__$1,new cljs.core.Keyword(null,"acks","acks",707064729));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44319__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44319__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
var freeze = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44319__$1,new cljs.core.Keyword(null,"freeze","freeze",2043466309));
var n__5636__auto___44717 = acks;
var __44718 = (0);
while(true){
if((__44718 < n__5636__auto___44717)){
hyperfiddle.electric.impl.runtime.context_ack(context);

var G__44719 = (__44718 + (1));
__44718 = G__44719;
continue;
} else {
}
break;
}

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_tree_inst,context,tree);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,change)){
} else {
hyperfiddle.electric.impl.runtime.update_event(context,new cljs.core.Keyword(null,"acks","acks",707064729),cljs.core.inc);

cljs.core.reduce_kv(hyperfiddle.electric.impl.runtime.eval_change_inst,context,change);
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.eval_freeze_inst,context,freeze);
});
hyperfiddle.electric.impl.runtime.process_incoming_events = (function hyperfiddle$electric$impl$runtime$process_incoming_events(context,_GT_incoming){
return missionary.core.sample(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce,hyperfiddle.electric.impl.runtime.parse_event,context),_GT_incoming);
});
hyperfiddle.electric.impl.runtime.write_outgoing_events = (function hyperfiddle$electric$impl$runtime$write_outgoing_events(write,_GT_events){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44320_block_0 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_0(cr44320_state){
try{var cr44320_place_0 = (1);
var cr44320_place_1 = _GT_events;
(cr44320_state[(0)] = cr44320_block_1);

return missionary.core.fork(cr44320_place_0,cr44320_place_1);
}catch (e44336){var cr44320_exception = e44336;
(cr44320_state[(0)] = null);

throw cr44320_exception;
}});
var cr44320_block_1 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_1(cr44320_state){
try{var cr44320_place_2 = missionary.core.unpark();
var cr44320_place_3 = cljs.core._EQ_;
var cr44320_place_4 = cr44320_place_2;
var cr44320_place_5 = hyperfiddle.electric.impl.runtime.empty_event;
var cr44320_place_6 = (function (){var G__44339 = cr44320_place_4;
var G__44340 = cr44320_place_5;
var fexpr__44338 = cr44320_place_3;
return (fexpr__44338.cljs$core$IFn$_invoke$arity$2 ? fexpr__44338.cljs$core$IFn$_invoke$arity$2(G__44339,G__44340) : fexpr__44338.call(null,G__44339,G__44340));
})();
var cr44320_place_7 = null;
if(cljs.core.truth_(cr44320_place_6)){
(cr44320_state[(0)] = cr44320_block_4);

(cr44320_state[(2)] = cr44320_place_7);

return cr44320_state;
} else {
(cr44320_state[(0)] = cr44320_block_2);

(cr44320_state[(1)] = cr44320_place_2);

(cr44320_state[(2)] = cr44320_place_7);

return cr44320_state;
}
}catch (e44337){var cr44320_exception = e44337;
(cr44320_state[(0)] = null);

throw cr44320_exception;
}});
var cr44320_block_2 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_2(cr44320_state){
try{var cr44320_place_2 = (cr44320_state[(1)]);
var cr44320_place_8 = write;
var cr44320_place_9 = cr44320_place_2;
var cr44320_place_10 = (function (){var G__44343 = cr44320_place_9;
var fexpr__44342 = cr44320_place_8;
return (fexpr__44342.cljs$core$IFn$_invoke$arity$1 ? fexpr__44342.cljs$core$IFn$_invoke$arity$1(G__44343) : fexpr__44342.call(null,G__44343));
})();
(cr44320_state[(0)] = cr44320_block_3);

(cr44320_state[(1)] = null);

return missionary.core.park(cr44320_place_10);
}catch (e44341){var cr44320_exception = e44341;
(cr44320_state[(0)] = null);

(cr44320_state[(1)] = null);

(cr44320_state[(2)] = null);

throw cr44320_exception;
}});
var cr44320_block_3 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_3(cr44320_state){
try{var cr44320_place_11 = missionary.core.unpark();
(cr44320_state[(0)] = cr44320_block_5);

(cr44320_state[(2)] = cr44320_place_11);

return cr44320_state;
}catch (e44344){var cr44320_exception = e44344;
(cr44320_state[(0)] = null);

(cr44320_state[(2)] = null);

throw cr44320_exception;
}});
var cr44320_block_4 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_4(cr44320_state){
try{var cr44320_place_12 = null;
(cr44320_state[(0)] = cr44320_block_5);

(cr44320_state[(2)] = cr44320_place_12);

return cr44320_state;
}catch (e44345){var cr44320_exception = e44345;
(cr44320_state[(0)] = null);

(cr44320_state[(2)] = null);

throw cr44320_exception;
}});
var cr44320_block_5 = (function hyperfiddle$electric$impl$runtime$write_outgoing_events_$_cr44320_block_5(cr44320_state){
try{var cr44320_place_7 = (cr44320_state[(2)]);
(cr44320_state[(0)] = null);

(cr44320_state[(2)] = null);

return cr44320_place_7;
}catch (e44346){var cr44320_exception = e44346;
(cr44320_state[(0)] = null);

(cr44320_state[(2)] = null);

throw cr44320_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44347 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44347[(0)] = cr44320_block_0);

return G__44347;
})());
})(),missionary.core.ap_run);
});
hyperfiddle.electric.impl.runtime.peer = (function hyperfiddle$electric$impl$runtime$peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,ctor){
return (function() {
var hyperfiddle$electric$impl$runtime$peer_$_rec = null;
var hyperfiddle$electric$impl$runtime$peer_$_rec__2 = (function (write,_QMARK_read){
return hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3(write,_QMARK_read,hyperfiddle.electric.impl.runtime.pst);
});
var hyperfiddle$electric$impl$runtime$peer_$_rec__3 = (function (write,_QMARK_read,on_error){
return missionary.core.reactor_call((function (){
var context = hyperfiddle.electric.impl.runtime.make_context();
missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.write_outgoing_events(write,missionary.core.stream_BANG_((function (n,t){
(context[hyperfiddle.electric.impl.runtime.context_slot_notifier] = n);

(context[hyperfiddle.electric.impl.runtime.context_slot_terminator] = t);

var temp__5808__auto___44739 = hyperfiddle.electric.impl.runtime.make_frame(context,null,(0),(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,context,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(var_count,hyperfiddle.electric.impl.runtime.unbound)),ctor);
if((temp__5808__auto___44739 == null)){
} else {
var _LT_main_44740 = temp__5808__auto___44739;
missionary.core.stream_BANG_(missionary.core.latest.cljs$core$IFn$_invoke$arity$variadic((function (x){
if((x instanceof hyperfiddle.electric.Failure)){
var G__44348 = x.error;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(G__44348) : on_error.call(null,G__44348));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_LT_main_44740], 0)));
}

return hyperfiddle.electric.impl.runtime.__GT_It(context,hyperfiddle.electric.impl.runtime.context_cancel,hyperfiddle.electric.impl.runtime.context_transfer);
}))));

return missionary.core.stream_BANG_(hyperfiddle.electric.impl.runtime.process_incoming_events(context,missionary.core.stream_BANG_(missionary.core.relieve(cljs.core.into,missionary.core.sample(cljs.core.vector,missionary.core.observe(_QMARK_read))))));
}));
});
hyperfiddle$electric$impl$runtime$peer_$_rec = function(write,_QMARK_read,on_error){
switch(arguments.length){
case 2:
return hyperfiddle$electric$impl$runtime$peer_$_rec__2.call(this,write,_QMARK_read);
case 3:
return hyperfiddle$electric$impl$runtime$peer_$_rec__3.call(this,write,_QMARK_read,on_error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric$impl$runtime$peer_$_rec__2;
hyperfiddle$electric$impl$runtime$peer_$_rec.cljs$core$IFn$_invoke$arity$3 = hyperfiddle$electric$impl$runtime$peer_$_rec__3;
return hyperfiddle$electric$impl$runtime$peer_$_rec;
})()
});
hyperfiddle.electric.impl.runtime.collapse = (function hyperfiddle$electric$impl$runtime$collapse(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44746 = arguments.length;
var i__5770__auto___44747 = (0);
while(true){
if((i__5770__auto___44747 < len__5769__auto___44746)){
args__5775__auto__.push((arguments[i__5770__auto___44747]));

var G__44748 = (i__5770__auto___44747 + (1));
i__5770__auto___44747 = G__44748;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.collapse.cljs$core$IFn$_invoke$arity$variadic = (function (s,n,f,args){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.pop,s),n),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.peek),cljs.core.take.cljs$core$IFn$_invoke$arity$1(n)),cljs.core.conj,args,cljs.core.iterate(cljs.core.pop,s))));
}));

(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.collapse.cljs$lang$applyTo = (function (seq44349){
var G__44350 = cljs.core.first(seq44349);
var seq44349__$1 = cljs.core.next(seq44349);
var G__44351 = cljs.core.first(seq44349__$1);
var seq44349__$2 = cljs.core.next(seq44349__$1);
var G__44352 = cljs.core.first(seq44349__$2);
var seq44349__$3 = cljs.core.next(seq44349__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44350,G__44351,G__44352,seq44349__$3);
}));

hyperfiddle.electric.impl.runtime.snapshot = (function hyperfiddle$electric$impl$runtime$snapshot(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44749 = arguments.length;
var i__5770__auto___44750 = (0);
while(true){
if((i__5770__auto___44750 < len__5769__auto___44749)){
args__5775__auto__.push((arguments[i__5770__auto___44750]));

var G__44751 = (i__5770__auto___44750 + (1));
i__5770__auto___44750 = G__44751;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.snapshot.cljs$core$IFn$_invoke$arity$variadic = (function (env,f,args){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,env,args));
}));

(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.snapshot.cljs$lang$applyTo = (function (seq44353){
var G__44354 = cljs.core.first(seq44353);
var seq44353__$1 = cljs.core.next(seq44353);
var G__44355 = cljs.core.first(seq44353__$1);
var seq44353__$2 = cljs.core.next(seq44353__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44354,G__44355,seq44353__$2);
}));

hyperfiddle.electric.impl.runtime.reverse_index = (function hyperfiddle$electric$impl$runtime$reverse_index(m){
return cljs.core.reduce_kv((function (v,x,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,i,x);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(m),null)),m);
});
hyperfiddle.electric.impl.runtime.empty_frame = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"variable","variable",-281346492),(0),new cljs.core.Keyword(null,"source","source",-433931539),(0),new cljs.core.Keyword(null,"constant","constant",-379609303),(0),new cljs.core.Keyword(null,"target","target",253001721),(0),new cljs.core.Keyword(null,"output","output",-1105869043),(0),new cljs.core.Keyword(null,"input","input",556931961),(0),new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.PersistentArrayMap.EMPTY], null);
hyperfiddle.electric.impl.runtime.compile = (function hyperfiddle$electric$impl$runtime$compile(inst,p__44356){
var map__44357 = p__44356;
var map__44357__$1 = cljs.core.__destructure_map(map__44357);
var fns = map__44357__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"input","input",556931961));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"target","target",253001721));
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"main","main",-2117802661));
var pub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"pub","pub",-1189143908));
var bind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"bind","bind",-113428417));
var lift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"lift","lift",903632035));
var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));
var do$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"do","do",46310725));
var sub = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"sub","sub",-2093760025));
var global__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"global","global",93595047));
var constant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"constant","constant",-379609303));
var static$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"static","static",1214358571));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var nop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"nop","nop",-1754075182));
var inject = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"inject","inject",-1882635533));
var dynamic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571));
var literal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"literal","literal",1664775605));
var invoke = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"invoke","invoke",1145927159));
var vget = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44357__$1,new cljs.core.Keyword(null,"vget","vget",1720343287));
return cljs.core.peek(hyperfiddle.electric.impl.runtime.collapse(new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot((function hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,inst__$1){
var G__44358 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__44358__$1 = (((G__44358 instanceof cljs.core.Keyword))?G__44358.fqn:null);
switch (G__44358__$1) {
case "hyperfiddle.electric.impl.ir/nop":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,nop);

break;
case "hyperfiddle.electric.impl.ir/sub":
var p = (idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1));
if((p < off)){
var f = new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(env);
var i = (function (){var G__44359 = p;
var G__44360 = cljs.core.count(f);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44359,G__44360) : f.call(null,G__44359,G__44360));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"static","static",1214358571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,p,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(static$.cljs$core$IFn$_invoke$arity$1 ? static$.cljs$core$IFn$_invoke$arity$1(i) : static$.call(null,i)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(sub.cljs$core$IFn$_invoke$arity$1 ? sub.cljs$core$IFn$_invoke$arity$1(p) : sub.call(null,p)));
}

break;
case "hyperfiddle.electric.impl.ir/pub":
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(hyperfiddle$electric$impl$runtime$compile_$_walk(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),off,(idx + (1)),dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),pub,idx);

break;
case "hyperfiddle.electric.impl.ir/do":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),do$);

break;
case "hyperfiddle.electric.impl.ir/def":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(inject.cljs$core$IFn$_invoke$arity$1 ? inject.cljs$core$IFn$_invoke$arity$1(v) : inject.call(null,v)));

break;
case "hyperfiddle.electric.impl.ir/lift":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),lift);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44362 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915).cljs$core$IFn$_invoke$arity$1(inst__$1);
var G__44363 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","ns","hyperfiddle.electric.impl.ir/ns",1363348916).cljs$core$IFn$_invoke$arity$1(inst__$1);
var fexpr__44361 = new cljs.core.Keyword(null,"eval","eval",-1103567905).cljs$core$IFn$_invoke$arity$1(fns);
return (fexpr__44361.cljs$core$IFn$_invoke$arity$2 ? fexpr__44361.cljs$core$IFn$_invoke$arity$2(G__44362,G__44363) : fexpr__44361.call(null,G__44362,G__44363));
})());

break;
case "hyperfiddle.electric.impl.ir/node":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
var env__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v);
if(cljs.core.truth_((dyn.cljs$core$IFn$_invoke$arity$1 ? dyn.cljs$core$IFn$_invoke$arity$1(v) : dyn.call(null,v)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env__$1,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(vget.cljs$core$IFn$_invoke$arity$1 ? vget.cljs$core$IFn$_invoke$arity$1(v) : vget.call(null,v)));
} else {
var d = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(env__$1);
var i = (function (){var G__44364 = v;
var G__44365 = cljs.core.count(d);
return (d.cljs$core$IFn$_invoke$arity$2 ? d.cljs$core$IFn$_invoke$arity$2(G__44364,G__44365) : d.call(null,G__44364,G__44365));
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,v,i)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(dynamic.cljs$core$IFn$_invoke$arity$2 ? dynamic.cljs$core$IFn$_invoke$arity$2(i,inst__$1) : dynamic.call(null,i,inst__$1)));
}

break;
case "hyperfiddle.electric.impl.ir/bind":
var v = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.max,v),off,idx,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dyn,v),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(1),bind,v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(idx - new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129).cljs$core$IFn$_invoke$arity$1(inst__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/apply":
var f = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(inst__$1);
var args = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,inst__$2);
}),env,cljs.core.cons(f,args)),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(cljs.core.count(args) + (1)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(invoke,(function (){var f__$1 = f;
while(true){
var G__44366 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(f__$1);
var G__44366__$1 = (((G__44366 instanceof cljs.core.Keyword))?G__44366.fqn:null);
switch (G__44366__$1) {
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(f__$1))], 0));

break;
case "hyperfiddle.electric.impl.ir/node":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/literal":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493),new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(f__$1)], null);

break;
case "hyperfiddle.electric.impl.ir/eval":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"eval","eval",-1103567905));

break;
case "hyperfiddle.electric.impl.ir/sub":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/input":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"apply","apply",1320385493));

break;
case "hyperfiddle.electric.impl.ir/apply":
var G__44766 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864).cljs$core$IFn$_invoke$arity$1(f__$1);
f__$1 = G__44766;
continue;

break;
default:
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),new cljs.core.Keyword(null,"unknown-apply","unknown-apply",-1407042085),new cljs.core.Keyword(null,"op","op",-1882987955),f__$1], null);

}
break;
}
})()));

break;
case "hyperfiddle.electric.impl.ir/input":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,arg){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,off,idx,dyn,arg);
}),env,deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),input);

break;
case "hyperfiddle.electric.impl.ir/output":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(output,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/global":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44367 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (global__$1.cljs$core$IFn$_invoke$arity$1 ? global__$1.cljs$core$IFn$_invoke$arity$1(G__44367) : global__$1.call(null,G__44367));
})());

break;
case "hyperfiddle.electric.impl.ir/literal":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,(function (){var G__44368 = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275).cljs$core$IFn$_invoke$arity$1(inst__$1);
return (literal.cljs$core$IFn$_invoke$arity$1 ? literal.cljs$core$IFn$_invoke$arity$1(G__44368) : literal.call(null,G__44368));
})());

break;
case "hyperfiddle.electric.impl.ir/variable":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(env,off,idx,dyn,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"variable","variable",-281346492),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(3),variable);

break;
case "hyperfiddle.electric.impl.ir/source":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(env,new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(2),source);

break;
case "hyperfiddle.electric.impl.ir/constant":
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle$electric$impl$runtime$compile_$_walk(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),idx,idx,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966).cljs$core$IFn$_invoke$arity$1(inst__$1)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(constant,inst__$1));

break;
case "hyperfiddle.electric.impl.ir/target":
var deps = new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773).cljs$core$IFn$_invoke$arity$1(inst__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(hyperfiddle.electric.impl.runtime.snapshot(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (env__$1,inst__$2){
return hyperfiddle$electric$impl$runtime$compile_$_walk(env__$1,idx,idx,cljs.core.PersistentHashSet.EMPTY,inst__$2);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([env,hyperfiddle.electric.impl.runtime.empty_frame], 0)),deps),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,cljs.core.count(deps),cljs.core.vector),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"static","static",1214358571))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961)),cljs.core.select_keys(env,cljs.core.keys(hyperfiddle.electric.impl.runtime.empty_frame))], 0)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"target","target",253001721),cljs.core.inc),new cljs.core.Keyword(null,"stack","stack",-793405930),hyperfiddle.electric.impl.runtime.collapse,(10),target);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44358__$1)].join('')));

}
})(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.empty_frame,new cljs.core.Keyword(null,"vars","vars",-2046957217),(-1)),(0),(0),cljs.core.PersistentHashSet.EMPTY,inst),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,new cljs.core.Keyword(null,"vars","vars",-2046957217))),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.reverse_index,new cljs.core.Keyword(null,"dynamic","dynamic",704819571))),new cljs.core.Keyword(null,"variable","variable",-281346492)),new cljs.core.Keyword(null,"source","source",-433931539)),new cljs.core.Keyword(null,"constant","constant",-379609303)),new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"output","output",-1105869043)),new cljs.core.Keyword(null,"input","input",556931961))),(9),main));
});
hyperfiddle.electric.impl.runtime.sym = (function hyperfiddle$electric$impl$runtime$sym(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44774 = arguments.length;
var i__5770__auto___44775 = (0);
while(true){
if((i__5770__auto___44775 < len__5769__auto___44774)){
args__5775__auto__.push((arguments[i__5770__auto___44775]));

var G__44776 = (i__5770__auto___44775 + (1));
i__5770__auto___44775 = G__44776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",args));
}));

(hyperfiddle.electric.impl.runtime.sym.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.sym.cljs$lang$applyTo = (function (seq44369){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44369));
}));

hyperfiddle.electric.impl.runtime.emit = (function hyperfiddle$electric$impl$runtime$emit(prefix,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
}),(function (form,remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","variable","hyperfiddle.electric.impl.runtime/variable",510769532,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (deps,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x),null,(1),null)))));
}),(function (idx){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0));
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constant","hyperfiddle.electric.impl.runtime/constant",73011709,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","static","hyperfiddle.electric.impl.runtime/static",-547873025,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}),(function (remote,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","source","hyperfiddle.electric.impl.runtime/source",-2004538047,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),(new cljs.core.List(null,(remote + slot),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))], 0))));
}),(function (debug_info,form,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-output","hyperfiddle.electric.impl.runtime/make-output",1149148798,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","check-failure","hyperfiddle.electric.impl.runtime/check-failure",-1123078405,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),null,(function (i,debug_info){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","dynamic","hyperfiddle.electric.impl.runtime/dynamic",1076292141,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null))], 0))));
}),(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","inject","hyperfiddle.electric.impl.runtime/inject",-834159193,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)))));
}),(function (x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
}),(function() { 
var G__44797__delegate = function (debug_info,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","latest-apply","hyperfiddle.electric.impl.runtime/latest-apply",694267757,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.select_debug_info(debug_info),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0))));
};
var G__44797 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__44803__i = 0, G__44803__a = new Array(arguments.length -  1);
while (G__44803__i < G__44803__a.length) {G__44803__a[G__44803__i] = arguments[G__44803__i + 1]; ++G__44803__i;}
  forms = new cljs.core.IndexedSeq(G__44803__a,0,null);
} 
return G__44797__delegate.call(this,debug_info,forms);};
G__44797.cljs$lang$maxFixedArity = 1;
G__44797.cljs$lang$applyTo = (function (arglist__44804){
var debug_info = cljs.core.first(arglist__44804);
var forms = cljs.core.rest(arglist__44804);
return G__44797__delegate(debug_info,forms);
});
G__44797.cljs$core$IFn$_invoke$arity$variadic = G__44797__delegate;
return G__44797;
})()
,(function (v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
}),(function (deps,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","input-spawn","hyperfiddle.electric.impl.runtime/input-spawn",1447350587,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,deps,null,(1),null))], 0))));
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","target","hyperfiddle.electric.impl.runtime/target",1172525771,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","constructor","hyperfiddle.electric.impl.runtime/constructor",-1501318103,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
return hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),p], 0));
}),static$),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","make-input","hyperfiddle.electric.impl.runtime/make-input",566179856,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,deps,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","peer","hyperfiddle.electric.impl.runtime/peer",1821280250,null),null,(1),null)),(new cljs.core.List(null,var_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dynamic,null,(1),null)),(new cljs.core.List(null,variable_count,null,(1),null)),(new cljs.core.List(null,source_count,null,(1),null)),(new cljs.core.List(null,constant_count,null,(1),null)),(new cljs.core.List(null,target_count,null,(1),null)),(new cljs.core.List(null,output_count,null,(1),null)),(new cljs.core.List(null,input_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"frame","frame",-70551061,null)], 0)),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,cont,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","signal","hyperfiddle.electric.impl.runtime/signal",340452693,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cont,null,(1),null))], 0))));
}),(function (form,slot,idx){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aget","cljs.core/aget",6345791,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"pub","pub",451387619,null),idx], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"vars","vars",-406425690,null)], 0)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int","cljs.core/int",20935062,null),null,(1),null)),(new cljs.core.List(null,slot,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"prev","prev",43462301,null)], 0)),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,hyperfiddle.electric.impl.runtime.sym.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,new cljs.core.Symbol(null,"res","res",245523648,null)], 0)),null,(1),null))], 0)))),null,(1),null))], 0))));
}),(function (form,_ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","pure","hyperfiddle.electric.impl.runtime/pure",-470880532,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))));
})]));
});
hyperfiddle.electric.impl.runtime.juxt_with = (function hyperfiddle$electric$impl$runtime$juxt_with(var_args){
var G__44381 = arguments.length;
switch (G__44381) {
case 1:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___44817 = arguments.length;
var i__5770__auto___44818 = (0);
while(true){
if((i__5770__auto___44818 < len__5769__auto___44817)){
args_arr__5794__auto__.push((arguments[i__5770__auto___44818]));

var G__44819 = (i__5770__auto___44818 + (1));
i__5770__auto___44818 = G__44819;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((4)),(0),null));
return hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5795__auto__);

}
});

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function() {
var G__44821 = null;
var G__44821__0 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__44821__1 = (function (a){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__44821__2 = (function (a,b){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__44821__3 = (function (a,b,c){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__44821__4 = (function() { 
var G__44822__delegate = function (a,b,c,ds){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__44822 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__44823__i = 0, G__44823__a = new Array(arguments.length -  3);
while (G__44823__i < G__44823__a.length) {G__44823__a[G__44823__i] = arguments[G__44823__i + 3]; ++G__44823__i;}
  ds = new cljs.core.IndexedSeq(G__44823__a,0,null);
} 
return G__44822__delegate.call(this,a,b,c,ds);};
G__44822.cljs$lang$maxFixedArity = 3;
G__44822.cljs$lang$applyTo = (function (arglist__44824){
var a = cljs.core.first(arglist__44824);
arglist__44824 = cljs.core.next(arglist__44824);
var b = cljs.core.first(arglist__44824);
arglist__44824 = cljs.core.next(arglist__44824);
var c = cljs.core.first(arglist__44824);
var ds = cljs.core.rest(arglist__44824);
return G__44822__delegate(a,b,c,ds);
});
G__44822.cljs$core$IFn$_invoke$arity$variadic = G__44822__delegate;
return G__44822;
})()
;
G__44821 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__44821__0.call(this);
case 1:
return G__44821__1.call(this,a);
case 2:
return G__44821__2.call(this,a,b);
case 3:
return G__44821__3.call(this,a,b,c);
default:
var G__44826 = null;
if (arguments.length > 3) {
var G__44827__i = 0, G__44827__a = new Array(arguments.length -  3);
while (G__44827__i < G__44827__a.length) {G__44827__a[G__44827__i] = arguments[G__44827__i + 3]; ++G__44827__i;}
G__44826 = new cljs.core.IndexedSeq(G__44827__a,0,null);
}
return G__44821__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__44826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44821.cljs$lang$maxFixedArity = 3;
G__44821.cljs$lang$applyTo = G__44821__4.cljs$lang$applyTo;
G__44821.cljs$core$IFn$_invoke$arity$0 = G__44821__0;
G__44821.cljs$core$IFn$_invoke$arity$1 = G__44821__1;
G__44821.cljs$core$IFn$_invoke$arity$2 = G__44821__2;
G__44821.cljs$core$IFn$_invoke$arity$3 = G__44821__3;
G__44821.cljs$core$IFn$_invoke$arity$variadic = G__44821__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44821;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function() {
var G__44828 = null;
var G__44828__0 = (function (){
var G__44382 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44382) : f.call(null,G__44382));
});
var G__44828__1 = (function (a){
var G__44383 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44383) : f.call(null,G__44383));
});
var G__44828__2 = (function (a,b){
var G__44384 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44384) : f.call(null,G__44384));
});
var G__44828__3 = (function (a,b,c){
var G__44385 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44385) : f.call(null,G__44385));
});
var G__44828__4 = (function() { 
var G__44835__delegate = function (a,b,c,ds){
var G__44386 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44386) : f.call(null,G__44386));
};
var G__44835 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__44836__i = 0, G__44836__a = new Array(arguments.length -  3);
while (G__44836__i < G__44836__a.length) {G__44836__a[G__44836__i] = arguments[G__44836__i + 3]; ++G__44836__i;}
  ds = new cljs.core.IndexedSeq(G__44836__a,0,null);
} 
return G__44835__delegate.call(this,a,b,c,ds);};
G__44835.cljs$lang$maxFixedArity = 3;
G__44835.cljs$lang$applyTo = (function (arglist__44837){
var a = cljs.core.first(arglist__44837);
arglist__44837 = cljs.core.next(arglist__44837);
var b = cljs.core.first(arglist__44837);
arglist__44837 = cljs.core.next(arglist__44837);
var c = cljs.core.first(arglist__44837);
var ds = cljs.core.rest(arglist__44837);
return G__44835__delegate(a,b,c,ds);
});
G__44835.cljs$core$IFn$_invoke$arity$variadic = G__44835__delegate;
return G__44835;
})()
;
G__44828 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__44828__0.call(this);
case 1:
return G__44828__1.call(this,a);
case 2:
return G__44828__2.call(this,a,b);
case 3:
return G__44828__3.call(this,a,b,c);
default:
var G__44839 = null;
if (arguments.length > 3) {
var G__44840__i = 0, G__44840__a = new Array(arguments.length -  3);
while (G__44840__i < G__44840__a.length) {G__44840__a[G__44840__i] = arguments[G__44840__i + 3]; ++G__44840__i;}
G__44839 = new cljs.core.IndexedSeq(G__44840__a,0,null);
}
return G__44828__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__44839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44828.cljs$lang$maxFixedArity = 3;
G__44828.cljs$lang$applyTo = G__44828__4.cljs$lang$applyTo;
G__44828.cljs$core$IFn$_invoke$arity$0 = G__44828__0;
G__44828.cljs$core$IFn$_invoke$arity$1 = G__44828__1;
G__44828.cljs$core$IFn$_invoke$arity$2 = G__44828__2;
G__44828.cljs$core$IFn$_invoke$arity$3 = G__44828__3;
G__44828.cljs$core$IFn$_invoke$arity$variadic = G__44828__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44828;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$3 = (function (f,g,h){
return (function() {
var G__44841 = null;
var G__44841__0 = (function (){
var G__44387 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__44388 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44387,G__44388) : f.call(null,G__44387,G__44388));
});
var G__44841__1 = (function (a){
var G__44389 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__44390 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44389,G__44390) : f.call(null,G__44389,G__44390));
});
var G__44841__2 = (function (a,b){
var G__44391 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__44392 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44391,G__44392) : f.call(null,G__44391,G__44392));
});
var G__44841__3 = (function (a,b,c){
var G__44393 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__44394 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44393,G__44394) : f.call(null,G__44393,G__44394));
});
var G__44841__4 = (function() { 
var G__44844__delegate = function (a,b,c,ds){
var G__44395 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__44396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44395,G__44396) : f.call(null,G__44395,G__44396));
};
var G__44844 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__44846__i = 0, G__44846__a = new Array(arguments.length -  3);
while (G__44846__i < G__44846__a.length) {G__44846__a[G__44846__i] = arguments[G__44846__i + 3]; ++G__44846__i;}
  ds = new cljs.core.IndexedSeq(G__44846__a,0,null);
} 
return G__44844__delegate.call(this,a,b,c,ds);};
G__44844.cljs$lang$maxFixedArity = 3;
G__44844.cljs$lang$applyTo = (function (arglist__44847){
var a = cljs.core.first(arglist__44847);
arglist__44847 = cljs.core.next(arglist__44847);
var b = cljs.core.first(arglist__44847);
arglist__44847 = cljs.core.next(arglist__44847);
var c = cljs.core.first(arglist__44847);
var ds = cljs.core.rest(arglist__44847);
return G__44844__delegate(a,b,c,ds);
});
G__44844.cljs$core$IFn$_invoke$arity$variadic = G__44844__delegate;
return G__44844;
})()
;
G__44841 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__44841__0.call(this);
case 1:
return G__44841__1.call(this,a);
case 2:
return G__44841__2.call(this,a,b);
case 3:
return G__44841__3.call(this,a,b,c);
default:
var G__44848 = null;
if (arguments.length > 3) {
var G__44849__i = 0, G__44849__a = new Array(arguments.length -  3);
while (G__44849__i < G__44849__a.length) {G__44849__a[G__44849__i] = arguments[G__44849__i + 3]; ++G__44849__i;}
G__44848 = new cljs.core.IndexedSeq(G__44849__a,0,null);
}
return G__44841__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__44848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44841.cljs$lang$maxFixedArity = 3;
G__44841.cljs$lang$applyTo = G__44841__4.cljs$lang$applyTo;
G__44841.cljs$core$IFn$_invoke$arity$0 = G__44841__0;
G__44841.cljs$core$IFn$_invoke$arity$1 = G__44841__1;
G__44841.cljs$core$IFn$_invoke$arity$2 = G__44841__2;
G__44841.cljs$core$IFn$_invoke$arity$3 = G__44841__3;
G__44841.cljs$core$IFn$_invoke$arity$variadic = G__44841__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44841;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$4 = (function (f,g,h,i){
return (function() {
var G__44851 = null;
var G__44851__0 = (function (){
var G__44397 = (g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null));
var G__44398 = (h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null));
var G__44399 = (i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44397,G__44398,G__44399) : f.call(null,G__44397,G__44398,G__44399));
});
var G__44851__1 = (function (a){
var G__44400 = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a));
var G__44401 = (h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a));
var G__44402 = (i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44400,G__44401,G__44402) : f.call(null,G__44400,G__44401,G__44402));
});
var G__44851__2 = (function (a,b){
var G__44403 = (g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b));
var G__44404 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b));
var G__44405 = (i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44403,G__44404,G__44405) : f.call(null,G__44403,G__44404,G__44405));
});
var G__44851__3 = (function (a,b,c){
var G__44406 = (g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c));
var G__44407 = (h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c));
var G__44408 = (i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44406,G__44407,G__44408) : f.call(null,G__44406,G__44407,G__44408));
});
var G__44851__4 = (function() { 
var G__44853__delegate = function (a,b,c,ds){
var G__44409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds);
var G__44410 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds);
var G__44411 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__44409,G__44410,G__44411) : f.call(null,G__44409,G__44410,G__44411));
};
var G__44853 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__44855__i = 0, G__44855__a = new Array(arguments.length -  3);
while (G__44855__i < G__44855__a.length) {G__44855__a[G__44855__i] = arguments[G__44855__i + 3]; ++G__44855__i;}
  ds = new cljs.core.IndexedSeq(G__44855__a,0,null);
} 
return G__44853__delegate.call(this,a,b,c,ds);};
G__44853.cljs$lang$maxFixedArity = 3;
G__44853.cljs$lang$applyTo = (function (arglist__44856){
var a = cljs.core.first(arglist__44856);
arglist__44856 = cljs.core.next(arglist__44856);
var b = cljs.core.first(arglist__44856);
arglist__44856 = cljs.core.next(arglist__44856);
var c = cljs.core.first(arglist__44856);
var ds = cljs.core.rest(arglist__44856);
return G__44853__delegate(a,b,c,ds);
});
G__44853.cljs$core$IFn$_invoke$arity$variadic = G__44853__delegate;
return G__44853;
})()
;
G__44851 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__44851__0.call(this);
case 1:
return G__44851__1.call(this,a);
case 2:
return G__44851__2.call(this,a,b);
case 3:
return G__44851__3.call(this,a,b,c);
default:
var G__44858 = null;
if (arguments.length > 3) {
var G__44859__i = 0, G__44859__a = new Array(arguments.length -  3);
while (G__44859__i < G__44859__a.length) {G__44859__a[G__44859__i] = arguments[G__44859__i + 3]; ++G__44859__i;}
G__44858 = new cljs.core.IndexedSeq(G__44859__a,0,null);
}
return G__44851__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__44858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44851.cljs$lang$maxFixedArity = 3;
G__44851.cljs$lang$applyTo = G__44851__4.cljs$lang$applyTo;
G__44851.cljs$core$IFn$_invoke$arity$0 = G__44851__0;
G__44851.cljs$core$IFn$_invoke$arity$1 = G__44851__1;
G__44851.cljs$core$IFn$_invoke$arity$2 = G__44851__2;
G__44851.cljs$core$IFn$_invoke$arity$3 = G__44851__3;
G__44851.cljs$core$IFn$_invoke$arity$variadic = G__44851__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44851;
})()
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,g,h,i,js){
return (function() {
var G__44860 = null;
var G__44860__0 = (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$0 ? g.cljs$core$IFn$_invoke$arity$0() : g.call(null)),(h.cljs$core$IFn$_invoke$arity$0 ? h.cljs$core$IFn$_invoke$arity$0() : h.call(null)),(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44370_SHARP_){
return (p1__44370_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__44370_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__44370_SHARP_.call(null));
}),js));
});
var G__44860__1 = (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(a) : g.call(null,a)),(h.cljs$core$IFn$_invoke$arity$1 ? h.cljs$core$IFn$_invoke$arity$1(a) : h.call(null,a)),(i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(a) : i.call(null,a)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44371_SHARP_){
return (p1__44371_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44371_SHARP_.cljs$core$IFn$_invoke$arity$1(a) : p1__44371_SHARP_.call(null,a));
}),js));
});
var G__44860__2 = (function (a,b){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$2 ? g.cljs$core$IFn$_invoke$arity$2(a,b) : g.call(null,a,b)),(h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(a,b) : h.call(null,a,b)),(i.cljs$core$IFn$_invoke$arity$2 ? i.cljs$core$IFn$_invoke$arity$2(a,b) : i.call(null,a,b)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44372_SHARP_){
return (p1__44372_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__44372_SHARP_.cljs$core$IFn$_invoke$arity$2(a,b) : p1__44372_SHARP_.call(null,a,b));
}),js));
});
var G__44860__3 = (function (a,b,c){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(g.cljs$core$IFn$_invoke$arity$3 ? g.cljs$core$IFn$_invoke$arity$3(a,b,c) : g.call(null,a,b,c)),(h.cljs$core$IFn$_invoke$arity$3 ? h.cljs$core$IFn$_invoke$arity$3(a,b,c) : h.call(null,a,b,c)),(i.cljs$core$IFn$_invoke$arity$3 ? i.cljs$core$IFn$_invoke$arity$3(a,b,c) : i.call(null,a,b,c)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44373_SHARP_){
return (p1__44373_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__44373_SHARP_.cljs$core$IFn$_invoke$arity$3(a,b,c) : p1__44373_SHARP_.call(null,a,b,c));
}),js));
});
var G__44860__4 = (function() { 
var G__44868__delegate = function (a,b,c,ds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(g,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(h,a,b,c,ds),cljs.core.apply.cljs$core$IFn$_invoke$arity$5(i,a,b,c,ds),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44374_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(p1__44374_SHARP_,a,b,c,ds);
}),js));
};
var G__44868 = function (a,b,c,var_args){
var ds = null;
if (arguments.length > 3) {
var G__44871__i = 0, G__44871__a = new Array(arguments.length -  3);
while (G__44871__i < G__44871__a.length) {G__44871__a[G__44871__i] = arguments[G__44871__i + 3]; ++G__44871__i;}
  ds = new cljs.core.IndexedSeq(G__44871__a,0,null);
} 
return G__44868__delegate.call(this,a,b,c,ds);};
G__44868.cljs$lang$maxFixedArity = 3;
G__44868.cljs$lang$applyTo = (function (arglist__44872){
var a = cljs.core.first(arglist__44872);
arglist__44872 = cljs.core.next(arglist__44872);
var b = cljs.core.first(arglist__44872);
arglist__44872 = cljs.core.next(arglist__44872);
var c = cljs.core.first(arglist__44872);
var ds = cljs.core.rest(arglist__44872);
return G__44868__delegate(a,b,c,ds);
});
G__44868.cljs$core$IFn$_invoke$arity$variadic = G__44868__delegate;
return G__44868;
})()
;
G__44860 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 0:
return G__44860__0.call(this);
case 1:
return G__44860__1.call(this,a);
case 2:
return G__44860__2.call(this,a,b);
case 3:
return G__44860__3.call(this,a,b,c);
default:
var G__44873 = null;
if (arguments.length > 3) {
var G__44874__i = 0, G__44874__a = new Array(arguments.length -  3);
while (G__44874__i < G__44874__a.length) {G__44874__a[G__44874__i] = arguments[G__44874__i + 3]; ++G__44874__i;}
G__44873 = new cljs.core.IndexedSeq(G__44874__a,0,null);
}
return G__44860__4.cljs$core$IFn$_invoke$arity$variadic(a,b,c, G__44873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44860.cljs$lang$maxFixedArity = 3;
G__44860.cljs$lang$applyTo = G__44860__4.cljs$lang$applyTo;
G__44860.cljs$core$IFn$_invoke$arity$0 = G__44860__0;
G__44860.cljs$core$IFn$_invoke$arity$1 = G__44860__1;
G__44860.cljs$core$IFn$_invoke$arity$2 = G__44860__2;
G__44860.cljs$core$IFn$_invoke$arity$3 = G__44860__3;
G__44860.cljs$core$IFn$_invoke$arity$variadic = G__44860__4.cljs$core$IFn$_invoke$arity$variadic;
return G__44860;
})()
}));

/** @this {Function} */
(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$applyTo = (function (seq44376){
var G__44377 = cljs.core.first(seq44376);
var seq44376__$1 = cljs.core.next(seq44376);
var G__44378 = cljs.core.first(seq44376__$1);
var seq44376__$2 = cljs.core.next(seq44376__$1);
var G__44379 = cljs.core.first(seq44376__$2);
var seq44376__$3 = cljs.core.next(seq44376__$2);
var G__44380 = cljs.core.first(seq44376__$3);
var seq44376__$4 = cljs.core.next(seq44376__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44377,G__44378,G__44379,G__44380,seq44376__$4);
}));

(hyperfiddle.electric.impl.runtime.juxt_with.cljs$lang$maxFixedArity = (4));

hyperfiddle.electric.impl.runtime.globals = (function hyperfiddle$electric$impl$runtime$globals(program){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.name),cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.vector_QMARK_),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__44412){
var vec__44413 = p__44412;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44413,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44413,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"global","global",93595047),a);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0)),cljs.core.tree_seq(cljs.core.coll_QMARK_,cljs.core.seq,program)], 0)));
});
hyperfiddle.electric.impl.runtime.missing_exports = (function hyperfiddle$electric$impl$runtime$missing_exports(resolvef,program){
return cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(resolvef,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095)),cljs.core.identity)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__44416_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),cljs.core.first(p1__44416_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol),hyperfiddle.electric.impl.runtime.globals(program)], 0));
});
hyperfiddle.electric.impl.runtime.dynamic_resolve = (function hyperfiddle$electric$impl$runtime$dynamic_resolve(nf,x){
return nf;
});
hyperfiddle.electric.impl.runtime.eval = (function hyperfiddle$electric$impl$runtime$eval(var_args){
var G__44418 = arguments.length;
switch (G__44418) {
case 1:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$1 = (function (inst){
return hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.dynamic_resolve,inst);
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$core$IFn$_invoke$arity$2 = (function (resolvef,inst){
return hyperfiddle.electric.impl.runtime.compile(inst,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"static","static",1214358571),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"nop","nop",-1754075182),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"inject","inject",-1882635533),new cljs.core.Keyword(null,"literal","literal",1664775605),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"vget","vget",1720343287),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"pub","pub",-1189143908),new cljs.core.Keyword(null,"bind","bind",-113428417),new cljs.core.Keyword(null,"eval","eval",-1103567905)],[(function (form){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.pure((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (form,remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.variable(frame,vars,(remote + slot),slot,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars)));
});
}),(function (deps,inst__$1){
return (function (pubs,frame,vars){
hyperfiddle.electric.impl.runtime.make_input(frame,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$2){
return (inst__$2.cljs$core$IFn$_invoke$arity$3 ? inst__$2.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$2.call(null,pubs,frame,vars));
}),deps));

return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
});
}),(function (x){
var r = (resolvef.cljs$core$IFn$_invoke$arity$2 ? resolvef.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x) : resolvef.call(null,new cljs.core.Keyword("hyperfiddle.electric.impl.runtime","not-found","hyperfiddle.electric.impl.runtime/not-found",-1898753095),x));
var G__44419 = r;
var G__44419__$1 = (((G__44419 instanceof cljs.core.Keyword))?G__44419.fqn:null);
switch (G__44419__$1) {
case "hyperfiddle.electric.impl.runtime/not-found":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
default:
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(r));

}
}),(function (idx){
return (function (pubs,frame,vars){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,idx);
});
}),(function (debug_info,form,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.constant(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function() { 
var G__44889__delegate = function (args){
return hyperfiddle.electric.impl.runtime.check_failure(debug_info,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(form,pubs,args));
};
var G__44889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44890__i = 0, G__44890__a = new Array(arguments.length -  0);
while (G__44890__i < G__44890__a.length) {G__44890__a[G__44890__i] = arguments[G__44890__i + 0]; ++G__44890__i;}
  args = new cljs.core.IndexedSeq(G__44890__a,0,null);
} 
return G__44889__delegate.call(this,args);};
G__44889.cljs$lang$maxFixedArity = 0;
G__44889.cljs$lang$applyTo = (function (arglist__44891){
var args = cljs.core.seq(arglist__44891);
return G__44889__delegate(args);
});
G__44889.cljs$core$IFn$_invoke$arity$variadic = G__44889__delegate;
return G__44889;
})()
));
});
}),(function (slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.static$(frame,slot);
});
}),(function (remote,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.source(frame,vars,(remote + slot),slot);
});
}),(function (debug_info,form,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.make_output(slot,hyperfiddle.electric.impl.runtime.check_failure(debug_info,(form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
});
}),cljs.core.constantly(null),(function (slot,debug_info){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.dynamic(frame,slot,debug_info);
});
}),(function (slot){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(hyperfiddle.electric.impl.runtime.inject(slot)));
}),(function (x){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(x));
}),(function() { 
var G__44893__delegate = function (debug_info,forms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(hyperfiddle.electric.impl.runtime.juxt_with,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.impl.runtime.latest_apply,debug_info),forms);
};
var G__44893 = function (debug_info,var_args){
var forms = null;
if (arguments.length > 1) {
var G__44894__i = 0, G__44894__a = new Array(arguments.length -  1);
while (G__44894__i < G__44894__a.length) {G__44894__a[G__44894__i] = arguments[G__44894__i + 1]; ++G__44894__i;}
  forms = new cljs.core.IndexedSeq(G__44894__a,0,null);
} 
return G__44893__delegate.call(this,debug_info,forms);};
G__44893.cljs$lang$maxFixedArity = 1;
G__44893.cljs$lang$applyTo = (function (arglist__44895){
var debug_info = cljs.core.first(arglist__44895);
var forms = cljs.core.rest(arglist__44895);
return G__44893__delegate(debug_info,forms);
});
G__44893.cljs$core$IFn$_invoke$arity$variadic = G__44893__delegate;
return G__44893;
})()
,(function (slot){
return (function (pubs,frame,vars){
return (vars[(slot | (0))]);
});
}),(function (deps,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.input_spawn(frame,slot,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : inst__$1.call(null,pubs,frame,vars));
}),deps));
});
}),(function (deps,static$,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,slot){
return (function (pubs,frame,vars){
return hyperfiddle.electric.impl.runtime.target(frame,slot,hyperfiddle.electric.impl.runtime.constructor$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pubs,static$),dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,(function (frame__$1,vars__$1){
return hyperfiddle.electric.impl.runtime.make_input(frame__$1,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (inst__$1){
return (inst__$1.cljs$core$IFn$_invoke$arity$3 ? inst__$1.cljs$core$IFn$_invoke$arity$3(pubs,frame__$1,vars__$1) : inst__$1.call(null,pubs,frame__$1,vars__$1));
}),deps));
})));
});
}),(function (form,var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count){
return hyperfiddle.electric.impl.runtime.peer(var_count,dynamic,variable_count,source_count,constant_count,target_count,output_count,input_count,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form,cljs.core.PersistentVector.EMPTY));
}),(function (form,cont,_){
return (function (pubs,frame,vars){
var G__44420 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pubs,hyperfiddle.electric.impl.runtime.signal((form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars))));
var G__44421 = frame;
var G__44422 = vars;
return (cont.cljs$core$IFn$_invoke$arity$3 ? cont.cljs$core$IFn$_invoke$arity$3(G__44420,G__44421,G__44422) : cont.call(null,G__44420,G__44421,G__44422));
});
}),(function (form,slot,s){
return (function (pubs,frame,vars){
var prev = (vars[(slot | (0))]);
(vars[(slot | (0))] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pubs,s));

var res = (form.cljs$core$IFn$_invoke$arity$3 ? form.cljs$core$IFn$_invoke$arity$3(pubs,frame,vars) : form.call(null,pubs,frame,vars));
(vars[(slot | (0))] = prev);

return res;
});
}),(function (form,ns){
var temp__5806__auto__ = (function (){var G__44423 = ns;
if((G__44423 == null)){
return null;
} else {
return cljs.core.find_ns(G__44423);
}
})();
if((temp__5806__auto__ == null)){
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure(cljs.core.eval(form)));
} else {
var ns__$1 = temp__5806__auto__;
return cljs.core.constantly(hyperfiddle.electric.impl.runtime.pure((function (){var _STAR_ns_STAR__orig_val__44424 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__44425 = ns__$1;
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__44425);

try{return cljs.core.eval(form);
}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__44424);
}})()));
}
})]));
}));

(hyperfiddle.electric.impl.runtime.eval.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.impl.runtime.queue = (function hyperfiddle$electric$impl$runtime$queue(){
var q = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
return (function() {
var G__44896 = null;
var G__44896__0 = (function (){
if((q.length === (0))){
throw (new Error("No such element."));
} else {
}

return q.shift();
});
var G__44896__1 = (function (x){
q.push(x);

return x;
});
G__44896 = function(x){
switch(arguments.length){
case 0:
return G__44896__0.call(this);
case 1:
return G__44896__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44896.cljs$core$IFn$_invoke$arity$0 = G__44896__0;
G__44896.cljs$core$IFn$_invoke$arity$1 = G__44896__1;
return G__44896;
})()
});

//# sourceMappingURL=hyperfiddle.electric.impl.runtime.js.map
