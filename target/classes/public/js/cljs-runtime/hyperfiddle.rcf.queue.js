goog.provide('hyperfiddle.rcf.queue');

/**
 * @interface
 */
hyperfiddle.rcf.queue.IObservableQueue = function(){};

var hyperfiddle$rcf$queue$IObservableQueue$put_BANG_$dyn_39504 = (function (this$,val){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.rcf.queue.put_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,val) : m__5394__auto__.call(null,this$,val));
} else {
var m__5392__auto__ = (hyperfiddle.rcf.queue.put_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,val) : m__5392__auto__.call(null,this$,val));
} else {
throw cljs.core.missing_protocol("IObservableQueue.put!",this$);
}
}
});
hyperfiddle.rcf.queue.put_BANG_ = (function hyperfiddle$rcf$queue$put_BANG_(this$,val){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$rcf$queue$IObservableQueue$put_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$rcf$queue$IObservableQueue$put_BANG_$arity$2(this$,val);
} else {
return hyperfiddle$rcf$queue$IObservableQueue$put_BANG_$dyn_39504(this$,val);
}
});

var hyperfiddle$rcf$queue$IObservableQueue$take_BANG_$dyn_39510 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.rcf.queue.take_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hyperfiddle.rcf.queue.take_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObservableQueue.take!",this$);
}
}
});
hyperfiddle.rcf.queue.take_BANG_ = (function hyperfiddle$rcf$queue$take_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$rcf$queue$IObservableQueue$take_BANG_$arity$1 == null)))))){
return this$.hyperfiddle$rcf$queue$IObservableQueue$take_BANG_$arity$1(this$);
} else {
return hyperfiddle$rcf$queue$IObservableQueue$take_BANG_$dyn_39510(this$);
}
});

var hyperfiddle$rcf$queue$IObservableQueue$_empty_QMARK_$dyn_39511 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.rcf.queue._empty_QMARK_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (hyperfiddle.rcf.queue._empty_QMARK_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObservableQueue.-empty?",this$);
}
}
});
hyperfiddle.rcf.queue._empty_QMARK_ = (function hyperfiddle$rcf$queue$_empty_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$rcf$queue$IObservableQueue$_empty_QMARK_$arity$1 == null)))))){
return this$.hyperfiddle$rcf$queue$IObservableQueue$_empty_QMARK_$arity$1(this$);
} else {
return hyperfiddle$rcf$queue$IObservableQueue$_empty_QMARK_$dyn_39511(this$);
}
});

var hyperfiddle$rcf$queue$IObservableQueue$observe_BANG_$dyn_39523 = (function (this$,callback){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.rcf.queue.observe_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5394__auto__.call(null,this$,callback));
} else {
var m__5392__auto__ = (hyperfiddle.rcf.queue.observe_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5392__auto__.call(null,this$,callback));
} else {
throw cljs.core.missing_protocol("IObservableQueue.observe!",this$);
}
}
});
hyperfiddle.rcf.queue.observe_BANG_ = (function hyperfiddle$rcf$queue$observe_BANG_(this$,callback){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$rcf$queue$IObservableQueue$observe_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$rcf$queue$IObservableQueue$observe_BANG_$arity$2(this$,callback);
} else {
return hyperfiddle$rcf$queue$IObservableQueue$observe_BANG_$dyn_39523(this$,callback);
}
});

var hyperfiddle$rcf$queue$IObservableQueue$unobserve_BANG_$dyn_39524 = (function (this$,callback){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (hyperfiddle.rcf.queue.unobserve_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5394__auto__.call(null,this$,callback));
} else {
var m__5392__auto__ = (hyperfiddle.rcf.queue.unobserve_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,callback) : m__5392__auto__.call(null,this$,callback));
} else {
throw cljs.core.missing_protocol("IObservableQueue.unobserve!",this$);
}
}
});
hyperfiddle.rcf.queue.unobserve_BANG_ = (function hyperfiddle$rcf$queue$unobserve_BANG_(this$,callback){
if((((!((this$ == null)))) && ((!((this$.hyperfiddle$rcf$queue$IObservableQueue$unobserve_BANG_$arity$2 == null)))))){
return this$.hyperfiddle$rcf$queue$IObservableQueue$unobserve_BANG_$arity$2(this$,callback);
} else {
return hyperfiddle$rcf$queue$IObservableQueue$unobserve_BANG_$dyn_39524(this$,callback);
}
});


/**
* @constructor
 * @implements {hyperfiddle.rcf.queue.IObservableQueue}
*/
hyperfiddle.rcf.queue.ObservableArray = (function (arr,observers){
this.arr = arr;
this.observers = observers;
});
(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$ = cljs.core.PROTOCOL_SENTINEL);

(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$put_BANG_$arity$2 = (function (this$,val){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto___39525 = self__.observers.shift();
if(cljs.core.truth_(temp__5802__auto___39525)){
var observer_39526 = temp__5802__auto___39525;
(observer_39526.cljs$core$IFn$_invoke$arity$1 ? observer_39526.cljs$core$IFn$_invoke$arity$1(val) : observer_39526.call(null,val));
} else {
self__.arr.push(val);
}

return this$__$1;
}));

(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$take_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.arr.shift();
}));

(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$_empty_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),self__.arr.length);
}));

(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$observe_BANG_$arity$2 = (function (_this,callback){
var self__ = this;
var _this__$1 = this;
return self__.observers.push(callback);
}));

(hyperfiddle.rcf.queue.ObservableArray.prototype.hyperfiddle$rcf$queue$IObservableQueue$unobserve_BANG_$arity$2 = (function (_this,callback){
var self__ = this;
var _this__$1 = this;
var idx = self__.observers.indexOf(callback);
if((idx > (-1))){
return self__.observers.splice(idx,(1));
} else {
return null;
}
}));

(hyperfiddle.rcf.queue.ObservableArray.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",2115492975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"js","js",-886355190,null)], null)),new cljs.core.Symbol(null,"observers","observers",-1812483924,null)], null);
}));

(hyperfiddle.rcf.queue.ObservableArray.cljs$lang$type = true);

(hyperfiddle.rcf.queue.ObservableArray.cljs$lang$ctorStr = "hyperfiddle.rcf.queue/ObservableArray");

(hyperfiddle.rcf.queue.ObservableArray.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.rcf.queue/ObservableArray");
}));

/**
 * Positional factory function for hyperfiddle.rcf.queue/ObservableArray.
 */
hyperfiddle.rcf.queue.__GT_ObservableArray = (function hyperfiddle$rcf$queue$__GT_ObservableArray(arr,observers){
return (new hyperfiddle.rcf.queue.ObservableArray(arr,observers));
});

hyperfiddle.rcf.queue.queue = (function hyperfiddle$rcf$queue$queue(){
return (new hyperfiddle.rcf.queue.ObservableArray([],[]));
});
hyperfiddle.rcf.queue.get_queue = (function hyperfiddle$rcf$queue$get_queue(q){
return cljs.core.seq(q.arr);
});
hyperfiddle.rcf.queue.poll_BANG_ = (function hyperfiddle$rcf$queue$poll_BANG_(var_args){
var G__39456 = arguments.length;
switch (G__39456) {
case 4:
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,___$2,___$3){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Blocking poll not available on a JS runtime.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (q,start,timeout,missing_value,callback){
var now = hyperfiddle.rcf.time.current_time();
if(hyperfiddle.rcf.time.timeout_QMARK_(now,start,timeout)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(missing_value) : callback.call(null,missing_value));
} else {
var resolved_QMARK_ = cljs.core.volatile_BANG_(false);
var resolve = (function (val){
if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
return null;
} else {
cljs.core.vreset_BANG_(resolved_QMARK_,true);

return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(val) : callback.call(null,val));
}
});
if(cljs.core.truth_(hyperfiddle.rcf.queue._empty_QMARK_(q))){
hyperfiddle.rcf.queue.observe_BANG_(q,resolve);

return setTimeout((function (){
hyperfiddle.rcf.queue.unobserve_BANG_(q,resolve);

return resolve(missing_value);
}),hyperfiddle.rcf.time.remaining(now,start,timeout));
} else {
return resolve(hyperfiddle.rcf.queue.take_BANG_(q));
}
}
}));

(hyperfiddle.rcf.queue.poll_BANG_.cljs$lang$maxFixedArity = 5);

hyperfiddle.rcf.queue.poll_n_BANG_ = (function hyperfiddle$rcf$queue$poll_n_BANG_(q,start,timeout,missing_value,n,callback){
if(cljs.core.nat_int_QMARK_(n)){
} else {
throw (new Error("Assert failed: (nat-int? n)"));
}

return hyperfiddle.rcf.queue.poll_BANG_.cljs$core$IFn$_invoke$arity$5(q,start,timeout,missing_value,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(x) : callback.call(null,x));
} else {
var G__39493 = q;
var G__39494 = start;
var G__39495 = timeout;
var G__39496 = missing_value;
var G__39497 = (n - (1));
var G__39498 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(callback,x);
return (hyperfiddle.rcf.queue.poll_n_BANG_.cljs$core$IFn$_invoke$arity$6 ? hyperfiddle.rcf.queue.poll_n_BANG_.cljs$core$IFn$_invoke$arity$6(G__39493,G__39494,G__39495,G__39496,G__39497,G__39498) : hyperfiddle.rcf.queue.poll_n_BANG_.call(null,G__39493,G__39494,G__39495,G__39496,G__39497,G__39498));
}
}));
});
hyperfiddle.rcf.queue.offer_BANG_ = (function hyperfiddle$rcf$queue$offer_BANG_(q,v){
hyperfiddle.rcf.queue.put_BANG_(q,v);

return v;
});

//# sourceMappingURL=hyperfiddle.rcf.queue.js.map
