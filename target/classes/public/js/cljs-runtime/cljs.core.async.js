goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33165 = arguments.length;
switch (G__33165) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33166 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33166 = (function (f,blockable,meta33167){
this.f = f;
this.blockable = blockable;
this.meta33167 = meta33167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33168,meta33167__$1){
var self__ = this;
var _33168__$1 = this;
return (new cljs.core.async.t_cljs$core$async33166(self__.f,self__.blockable,meta33167__$1));
}));

(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33168){
var self__ = this;
var _33168__$1 = this;
return self__.meta33167;
}));

(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33167","meta33167",668392753,null)], null);
}));

(cljs.core.async.t_cljs$core$async33166.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33166");

(cljs.core.async.t_cljs$core$async33166.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33166");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33166.
 */
cljs.core.async.__GT_t_cljs$core$async33166 = (function cljs$core$async$__GT_t_cljs$core$async33166(f__$1,blockable__$1,meta33167){
return (new cljs.core.async.t_cljs$core$async33166(f__$1,blockable__$1,meta33167));
});

}

return (new cljs.core.async.t_cljs$core$async33166(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33171 = arguments.length;
switch (G__33171) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33173 = arguments.length;
switch (G__33173) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33182 = arguments.length;
switch (G__33182) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35355 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35355) : fn1.call(null,val_35355));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35355) : fn1.call(null,val_35355));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33189 = arguments.length;
switch (G__33189) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35358 = n;
var x_35359 = (0);
while(true){
if((x_35359 < n__5636__auto___35358)){
(a[x_35359] = x_35359);

var G__35360 = (x_35359 + (1));
x_35359 = G__35360;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33194 = (function (flag,meta33195){
this.flag = flag;
this.meta33195 = meta33195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33196,meta33195__$1){
var self__ = this;
var _33196__$1 = this;
return (new cljs.core.async.t_cljs$core$async33194(self__.flag,meta33195__$1));
}));

(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33196){
var self__ = this;
var _33196__$1 = this;
return self__.meta33195;
}));

(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33194.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33195","meta33195",-120039055,null)], null);
}));

(cljs.core.async.t_cljs$core$async33194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33194");

(cljs.core.async.t_cljs$core$async33194.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33194.
 */
cljs.core.async.__GT_t_cljs$core$async33194 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33194(flag__$1,meta33195){
return (new cljs.core.async.t_cljs$core$async33194(flag__$1,meta33195));
});

}

return (new cljs.core.async.t_cljs$core$async33194(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33197 = (function (flag,cb,meta33198){
this.flag = flag;
this.cb = cb;
this.meta33198 = meta33198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33199,meta33198__$1){
var self__ = this;
var _33199__$1 = this;
return (new cljs.core.async.t_cljs$core$async33197(self__.flag,self__.cb,meta33198__$1));
}));

(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33199){
var self__ = this;
var _33199__$1 = this;
return self__.meta33198;
}));

(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33197.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33198","meta33198",-1356973235,null)], null);
}));

(cljs.core.async.t_cljs$core$async33197.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33197");

(cljs.core.async.t_cljs$core$async33197.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33197");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33197.
 */
cljs.core.async.__GT_t_cljs$core$async33197 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33197(flag__$1,cb__$1,meta33198){
return (new cljs.core.async.t_cljs$core$async33197(flag__$1,cb__$1,meta33198));
});

}

return (new cljs.core.async.t_cljs$core$async33197(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33201_SHARP_){
var G__33207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33201_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33207) : fret.call(null,G__33207));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33202_SHARP_){
var G__33208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33202_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33208) : fret.call(null,G__33208));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35367 = (i + (1));
i = G__35367;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35368 = arguments.length;
var i__5770__auto___35369 = (0);
while(true){
if((i__5770__auto___35369 < len__5769__auto___35368)){
args__5775__auto__.push((arguments[i__5770__auto___35369]));

var G__35372 = (i__5770__auto___35369 + (1));
i__5770__auto___35369 = G__35372;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33211){
var map__33212 = p__33211;
var map__33212__$1 = cljs.core.__destructure_map(map__33212);
var opts = map__33212__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33209){
var G__33210 = cljs.core.first(seq33209);
var seq33209__$1 = cljs.core.next(seq33209);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33210,seq33209__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33218 = arguments.length;
switch (G__33218) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33107__auto___35380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33247){
var state_val_33248 = (state_33247[(1)]);
if((state_val_33248 === (7))){
var inst_33242 = (state_33247[(2)]);
var state_33247__$1 = state_33247;
var statearr_33249_35381 = state_33247__$1;
(statearr_33249_35381[(2)] = inst_33242);

(statearr_33249_35381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (1))){
var state_33247__$1 = state_33247;
var statearr_33250_35382 = state_33247__$1;
(statearr_33250_35382[(2)] = null);

(statearr_33250_35382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (4))){
var inst_33225 = (state_33247[(7)]);
var inst_33225__$1 = (state_33247[(2)]);
var inst_33226 = (inst_33225__$1 == null);
var state_33247__$1 = (function (){var statearr_33251 = state_33247;
(statearr_33251[(7)] = inst_33225__$1);

return statearr_33251;
})();
if(cljs.core.truth_(inst_33226)){
var statearr_33252_35383 = state_33247__$1;
(statearr_33252_35383[(1)] = (5));

} else {
var statearr_33253_35384 = state_33247__$1;
(statearr_33253_35384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (13))){
var state_33247__$1 = state_33247;
var statearr_33254_35385 = state_33247__$1;
(statearr_33254_35385[(2)] = null);

(statearr_33254_35385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (6))){
var inst_33225 = (state_33247[(7)]);
var state_33247__$1 = state_33247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33247__$1,(11),to,inst_33225);
} else {
if((state_val_33248 === (3))){
var inst_33244 = (state_33247[(2)]);
var state_33247__$1 = state_33247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33247__$1,inst_33244);
} else {
if((state_val_33248 === (12))){
var state_33247__$1 = state_33247;
var statearr_33255_35389 = state_33247__$1;
(statearr_33255_35389[(2)] = null);

(statearr_33255_35389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (2))){
var state_33247__$1 = state_33247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33247__$1,(4),from);
} else {
if((state_val_33248 === (11))){
var inst_33235 = (state_33247[(2)]);
var state_33247__$1 = state_33247;
if(cljs.core.truth_(inst_33235)){
var statearr_33258_35390 = state_33247__$1;
(statearr_33258_35390[(1)] = (12));

} else {
var statearr_33259_35391 = state_33247__$1;
(statearr_33259_35391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (9))){
var state_33247__$1 = state_33247;
var statearr_33260_35392 = state_33247__$1;
(statearr_33260_35392[(2)] = null);

(statearr_33260_35392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (5))){
var state_33247__$1 = state_33247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33261_35393 = state_33247__$1;
(statearr_33261_35393[(1)] = (8));

} else {
var statearr_33262_35394 = state_33247__$1;
(statearr_33262_35394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (14))){
var inst_33240 = (state_33247[(2)]);
var state_33247__$1 = state_33247;
var statearr_33263_35395 = state_33247__$1;
(statearr_33263_35395[(2)] = inst_33240);

(statearr_33263_35395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (10))){
var inst_33232 = (state_33247[(2)]);
var state_33247__$1 = state_33247;
var statearr_33264_35396 = state_33247__$1;
(statearr_33264_35396[(2)] = inst_33232);

(statearr_33264_35396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33248 === (8))){
var inst_33229 = cljs.core.async.close_BANG_(to);
var state_33247__$1 = state_33247;
var statearr_33265_35397 = state_33247__$1;
(statearr_33265_35397[(2)] = inst_33229);

(statearr_33265_35397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_33266 = [null,null,null,null,null,null,null,null];
(statearr_33266[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_33266[(1)] = (1));

return statearr_33266;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_33247){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33247);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33267){var ex__32813__auto__ = e33267;
var statearr_33268_35398 = state_33247;
(statearr_33268_35398[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33247[(4)]))){
var statearr_33269_35399 = state_33247;
(statearr_33269_35399[(1)] = cljs.core.first((state_33247[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35400 = state_33247;
state_33247 = G__35400;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_33247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_33247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33270 = f__33108__auto__();
(statearr_33270[(6)] = c__33107__auto___35380);

return statearr_33270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33294){
var vec__33295 = p__33294;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33295,(1),null);
var job = vec__33295;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33107__auto___35401 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33304){
var state_val_33305 = (state_33304[(1)]);
if((state_val_33305 === (1))){
var state_33304__$1 = state_33304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33304__$1,(2),res,v);
} else {
if((state_val_33305 === (2))){
var inst_33301 = (state_33304[(2)]);
var inst_33302 = cljs.core.async.close_BANG_(res);
var state_33304__$1 = (function (){var statearr_33319 = state_33304;
(statearr_33319[(7)] = inst_33301);

return statearr_33319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33304__$1,inst_33302);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_33320 = [null,null,null,null,null,null,null,null];
(statearr_33320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__);

(statearr_33320[(1)] = (1));

return statearr_33320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1 = (function (state_33304){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33304);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33321){var ex__32813__auto__ = e33321;
var statearr_33322_35402 = state_33304;
(statearr_33322_35402[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33304[(4)]))){
var statearr_33323_35403 = state_33304;
(statearr_33323_35403[(1)] = cljs.core.first((state_33304[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35404 = state_33304;
state_33304 = G__35404;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = function(state_33304){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1.call(this,state_33304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33324 = f__33108__auto__();
(statearr_33324[(6)] = c__33107__auto___35401);

return statearr_33324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33325){
var vec__33326 = p__33325;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33326,(1),null);
var job = vec__33326;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35405 = n;
var __35406 = (0);
while(true){
if((__35406 < n__5636__auto___35405)){
var G__33334_35407 = type;
var G__33334_35408__$1 = (((G__33334_35407 instanceof cljs.core.Keyword))?G__33334_35407.fqn:null);
switch (G__33334_35408__$1) {
case "compute":
var c__33107__auto___35410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35406,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = ((function (__35406,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (state_33349){
var state_val_33350 = (state_33349[(1)]);
if((state_val_33350 === (1))){
var state_33349__$1 = state_33349;
var statearr_33355_35411 = state_33349__$1;
(statearr_33355_35411[(2)] = null);

(statearr_33355_35411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (2))){
var state_33349__$1 = state_33349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33349__$1,(4),jobs);
} else {
if((state_val_33350 === (3))){
var inst_33347 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33349__$1,inst_33347);
} else {
if((state_val_33350 === (4))){
var inst_33339 = (state_33349[(2)]);
var inst_33340 = process__$1(inst_33339);
var state_33349__$1 = state_33349;
if(cljs.core.truth_(inst_33340)){
var statearr_33356_35412 = state_33349__$1;
(statearr_33356_35412[(1)] = (5));

} else {
var statearr_33358_35413 = state_33349__$1;
(statearr_33358_35413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (5))){
var state_33349__$1 = state_33349;
var statearr_33360_35414 = state_33349__$1;
(statearr_33360_35414[(2)] = null);

(statearr_33360_35414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (6))){
var state_33349__$1 = state_33349;
var statearr_33361_35415 = state_33349__$1;
(statearr_33361_35415[(2)] = null);

(statearr_33361_35415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33350 === (7))){
var inst_33345 = (state_33349[(2)]);
var state_33349__$1 = state_33349;
var statearr_33362_35416 = state_33349__$1;
(statearr_33362_35416[(2)] = inst_33345);

(statearr_33362_35416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35406,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
;
return ((function (__35406,switch__32809__auto__,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_33363 = [null,null,null,null,null,null,null];
(statearr_33363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__);

(statearr_33363[(1)] = (1));

return statearr_33363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1 = (function (state_33349){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33349);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33364){var ex__32813__auto__ = e33364;
var statearr_33365_35417 = state_33349;
(statearr_33365_35417[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33349[(4)]))){
var statearr_33366_35418 = state_33349;
(statearr_33366_35418[(1)] = cljs.core.first((state_33349[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35419 = state_33349;
state_33349 = G__35419;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = function(state_33349){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1.call(this,state_33349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__;
})()
;})(__35406,switch__32809__auto__,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
})();
var state__33109__auto__ = (function (){var statearr_33367 = f__33108__auto__();
(statearr_33367[(6)] = c__33107__auto___35410);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
});})(__35406,c__33107__auto___35410,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
);


break;
case "async":
var c__33107__auto___35420 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35406,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = ((function (__35406,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (1))){
var state_33382__$1 = state_33382;
var statearr_33384_35421 = state_33382__$1;
(statearr_33384_35421[(2)] = null);

(statearr_33384_35421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (2))){
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33382__$1,(4),jobs);
} else {
if((state_val_33383 === (3))){
var inst_33378 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33382__$1,inst_33378);
} else {
if((state_val_33383 === (4))){
var inst_33370 = (state_33382[(2)]);
var inst_33371 = async(inst_33370);
var state_33382__$1 = state_33382;
if(cljs.core.truth_(inst_33371)){
var statearr_33387_35422 = state_33382__$1;
(statearr_33387_35422[(1)] = (5));

} else {
var statearr_33389_35423 = state_33382__$1;
(statearr_33389_35423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (5))){
var state_33382__$1 = state_33382;
var statearr_33391_35424 = state_33382__$1;
(statearr_33391_35424[(2)] = null);

(statearr_33391_35424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (6))){
var state_33382__$1 = state_33382;
var statearr_33392_35425 = state_33382__$1;
(statearr_33392_35425[(2)] = null);

(statearr_33392_35425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (7))){
var inst_33376 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33393_35426 = state_33382__$1;
(statearr_33393_35426[(2)] = inst_33376);

(statearr_33393_35426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35406,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
;
return ((function (__35406,switch__32809__auto__,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_33395 = [null,null,null,null,null,null,null];
(statearr_33395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__);

(statearr_33395[(1)] = (1));

return statearr_33395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1 = (function (state_33382){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33382);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33397){var ex__32813__auto__ = e33397;
var statearr_33398_35427 = state_33382;
(statearr_33398_35427[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33382[(4)]))){
var statearr_33399_35428 = state_33382;
(statearr_33399_35428[(1)] = cljs.core.first((state_33382[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35429 = state_33382;
state_33382 = G__35429;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__;
})()
;})(__35406,switch__32809__auto__,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
})();
var state__33109__auto__ = (function (){var statearr_33405 = f__33108__auto__();
(statearr_33405[(6)] = c__33107__auto___35420);

return statearr_33405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
});})(__35406,c__33107__auto___35420,G__33334_35407,G__33334_35408__$1,n__5636__auto___35405,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33334_35408__$1)].join('')));

}

var G__35433 = (__35406 + (1));
__35406 = G__35433;
continue;
} else {
}
break;
}

var c__33107__auto___35434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33427 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33438_35436 = state_33431__$1;
(statearr_33438_35436[(2)] = inst_33427);

(statearr_33438_35436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var state_33431__$1 = state_33431;
var statearr_33439_35437 = state_33431__$1;
(statearr_33439_35437[(2)] = null);

(statearr_33439_35437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33408 = (state_33431[(7)]);
var inst_33408__$1 = (state_33431[(2)]);
var inst_33409 = (inst_33408__$1 == null);
var state_33431__$1 = (function (){var statearr_33440 = state_33431;
(statearr_33440[(7)] = inst_33408__$1);

return statearr_33440;
})();
if(cljs.core.truth_(inst_33409)){
var statearr_33441_35438 = state_33431__$1;
(statearr_33441_35438[(1)] = (5));

} else {
var statearr_33442_35439 = state_33431__$1;
(statearr_33442_35439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var inst_33413 = (state_33431[(8)]);
var inst_33408 = (state_33431[(7)]);
var inst_33413__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33417 = [inst_33408,inst_33413__$1];
var inst_33418 = (new cljs.core.PersistentVector(null,2,(5),inst_33416,inst_33417,null));
var state_33431__$1 = (function (){var statearr_33443 = state_33431;
(statearr_33443[(8)] = inst_33413__$1);

return statearr_33443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33431__$1,(8),jobs,inst_33418);
} else {
if((state_val_33432 === (3))){
var inst_33429 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33431__$1,inst_33429);
} else {
if((state_val_33432 === (2))){
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33431__$1,(4),from);
} else {
if((state_val_33432 === (9))){
var inst_33424 = (state_33431[(2)]);
var state_33431__$1 = (function (){var statearr_33450 = state_33431;
(statearr_33450[(9)] = inst_33424);

return statearr_33450;
})();
var statearr_33451_35444 = state_33431__$1;
(statearr_33451_35444[(2)] = null);

(statearr_33451_35444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (5))){
var inst_33411 = cljs.core.async.close_BANG_(jobs);
var state_33431__$1 = state_33431;
var statearr_33453_35445 = state_33431__$1;
(statearr_33453_35445[(2)] = inst_33411);

(statearr_33453_35445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33413 = (state_33431[(8)]);
var inst_33420 = (state_33431[(2)]);
var state_33431__$1 = (function (){var statearr_33454 = state_33431;
(statearr_33454[(10)] = inst_33420);

return statearr_33454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33431__$1,(9),results,inst_33413);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_33456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__);

(statearr_33456[(1)] = (1));

return statearr_33456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1 = (function (state_33431){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33431);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33457){var ex__32813__auto__ = e33457;
var statearr_33459_35446 = state_33431;
(statearr_33459_35446[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33431[(4)]))){
var statearr_33460_35447 = state_33431;
(statearr_33460_35447[(1)] = cljs.core.first((state_33431[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35448 = state_33431;
state_33431 = G__35448;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33461 = f__33108__auto__();
(statearr_33461[(6)] = c__33107__auto___35434);

return statearr_33461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


var c__33107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33501){
var state_val_33502 = (state_33501[(1)]);
if((state_val_33502 === (7))){
var inst_33497 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33503_35449 = state_33501__$1;
(statearr_33503_35449[(2)] = inst_33497);

(statearr_33503_35449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (20))){
var state_33501__$1 = state_33501;
var statearr_33504_35450 = state_33501__$1;
(statearr_33504_35450[(2)] = null);

(statearr_33504_35450[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (1))){
var state_33501__$1 = state_33501;
var statearr_33505_35451 = state_33501__$1;
(statearr_33505_35451[(2)] = null);

(statearr_33505_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (4))){
var inst_33465 = (state_33501[(7)]);
var inst_33465__$1 = (state_33501[(2)]);
var inst_33466 = (inst_33465__$1 == null);
var state_33501__$1 = (function (){var statearr_33506 = state_33501;
(statearr_33506[(7)] = inst_33465__$1);

return statearr_33506;
})();
if(cljs.core.truth_(inst_33466)){
var statearr_33507_35453 = state_33501__$1;
(statearr_33507_35453[(1)] = (5));

} else {
var statearr_33508_35455 = state_33501__$1;
(statearr_33508_35455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (15))){
var inst_33479 = (state_33501[(8)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33501__$1,(18),to,inst_33479);
} else {
if((state_val_33502 === (21))){
var inst_33492 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33509_35456 = state_33501__$1;
(statearr_33509_35456[(2)] = inst_33492);

(statearr_33509_35456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (13))){
var inst_33494 = (state_33501[(2)]);
var state_33501__$1 = (function (){var statearr_33510 = state_33501;
(statearr_33510[(9)] = inst_33494);

return statearr_33510;
})();
var statearr_33511_35457 = state_33501__$1;
(statearr_33511_35457[(2)] = null);

(statearr_33511_35457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (6))){
var inst_33465 = (state_33501[(7)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(11),inst_33465);
} else {
if((state_val_33502 === (17))){
var inst_33487 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
if(cljs.core.truth_(inst_33487)){
var statearr_33512_35458 = state_33501__$1;
(statearr_33512_35458[(1)] = (19));

} else {
var statearr_33513_35459 = state_33501__$1;
(statearr_33513_35459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (3))){
var inst_33499 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33501__$1,inst_33499);
} else {
if((state_val_33502 === (12))){
var inst_33476 = (state_33501[(10)]);
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(14),inst_33476);
} else {
if((state_val_33502 === (2))){
var state_33501__$1 = state_33501;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33501__$1,(4),results);
} else {
if((state_val_33502 === (19))){
var state_33501__$1 = state_33501;
var statearr_33514_35460 = state_33501__$1;
(statearr_33514_35460[(2)] = null);

(statearr_33514_35460[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (11))){
var inst_33476 = (state_33501[(2)]);
var state_33501__$1 = (function (){var statearr_33515 = state_33501;
(statearr_33515[(10)] = inst_33476);

return statearr_33515;
})();
var statearr_33516_35461 = state_33501__$1;
(statearr_33516_35461[(2)] = null);

(statearr_33516_35461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (9))){
var state_33501__$1 = state_33501;
var statearr_33517_35462 = state_33501__$1;
(statearr_33517_35462[(2)] = null);

(statearr_33517_35462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (5))){
var state_33501__$1 = state_33501;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33518_35463 = state_33501__$1;
(statearr_33518_35463[(1)] = (8));

} else {
var statearr_33519_35464 = state_33501__$1;
(statearr_33519_35464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (14))){
var inst_33479 = (state_33501[(8)]);
var inst_33481 = (state_33501[(11)]);
var inst_33479__$1 = (state_33501[(2)]);
var inst_33480 = (inst_33479__$1 == null);
var inst_33481__$1 = cljs.core.not(inst_33480);
var state_33501__$1 = (function (){var statearr_33558 = state_33501;
(statearr_33558[(8)] = inst_33479__$1);

(statearr_33558[(11)] = inst_33481__$1);

return statearr_33558;
})();
if(inst_33481__$1){
var statearr_33567_35465 = state_33501__$1;
(statearr_33567_35465[(1)] = (15));

} else {
var statearr_33568_35466 = state_33501__$1;
(statearr_33568_35466[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (16))){
var inst_33481 = (state_33501[(11)]);
var state_33501__$1 = state_33501;
var statearr_33569_35467 = state_33501__$1;
(statearr_33569_35467[(2)] = inst_33481);

(statearr_33569_35467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (10))){
var inst_33472 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33570_35469 = state_33501__$1;
(statearr_33570_35469[(2)] = inst_33472);

(statearr_33570_35469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (18))){
var inst_33484 = (state_33501[(2)]);
var state_33501__$1 = state_33501;
var statearr_33571_35470 = state_33501__$1;
(statearr_33571_35470[(2)] = inst_33484);

(statearr_33571_35470[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33502 === (8))){
var inst_33469 = cljs.core.async.close_BANG_(to);
var state_33501__$1 = state_33501;
var statearr_33572_35472 = state_33501__$1;
(statearr_33572_35472[(2)] = inst_33469);

(statearr_33572_35472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_33574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__);

(statearr_33574[(1)] = (1));

return statearr_33574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1 = (function (state_33501){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33501);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33575){var ex__32813__auto__ = e33575;
var statearr_33576_35474 = state_33501;
(statearr_33576_35474[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33501[(4)]))){
var statearr_33577_35475 = state_33501;
(statearr_33577_35475[(1)] = cljs.core.first((state_33501[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35476 = state_33501;
state_33501 = G__35476;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__ = function(state_33501){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1.call(this,state_33501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33578 = f__33108__auto__();
(statearr_33578[(6)] = c__33107__auto__);

return statearr_33578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

return c__33107__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33593 = arguments.length;
switch (G__33593) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33612 = arguments.length;
switch (G__33612) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33107__auto___35500 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33656){
var state_val_33657 = (state_33656[(1)]);
if((state_val_33657 === (7))){
var inst_33652 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33660_35501 = state_33656__$1;
(statearr_33660_35501[(2)] = inst_33652);

(statearr_33660_35501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (1))){
var state_33656__$1 = state_33656;
var statearr_33661_35509 = state_33656__$1;
(statearr_33661_35509[(2)] = null);

(statearr_33661_35509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (4))){
var inst_33623 = (state_33656[(7)]);
var inst_33623__$1 = (state_33656[(2)]);
var inst_33629 = (inst_33623__$1 == null);
var state_33656__$1 = (function (){var statearr_33662 = state_33656;
(statearr_33662[(7)] = inst_33623__$1);

return statearr_33662;
})();
if(cljs.core.truth_(inst_33629)){
var statearr_33664_35513 = state_33656__$1;
(statearr_33664_35513[(1)] = (5));

} else {
var statearr_33665_35514 = state_33656__$1;
(statearr_33665_35514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (13))){
var state_33656__$1 = state_33656;
var statearr_33666_35515 = state_33656__$1;
(statearr_33666_35515[(2)] = null);

(statearr_33666_35515[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (6))){
var inst_33623 = (state_33656[(7)]);
var inst_33639 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33623) : p.call(null,inst_33623));
var state_33656__$1 = state_33656;
if(cljs.core.truth_(inst_33639)){
var statearr_33676_35517 = state_33656__$1;
(statearr_33676_35517[(1)] = (9));

} else {
var statearr_33679_35519 = state_33656__$1;
(statearr_33679_35519[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (3))){
var inst_33654 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33656__$1,inst_33654);
} else {
if((state_val_33657 === (12))){
var state_33656__$1 = state_33656;
var statearr_33690_35520 = state_33656__$1;
(statearr_33690_35520[(2)] = null);

(statearr_33690_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (2))){
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33656__$1,(4),ch);
} else {
if((state_val_33657 === (11))){
var inst_33623 = (state_33656[(7)]);
var inst_33643 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33656__$1,(8),inst_33643,inst_33623);
} else {
if((state_val_33657 === (9))){
var state_33656__$1 = state_33656;
var statearr_33692_35521 = state_33656__$1;
(statearr_33692_35521[(2)] = tc);

(statearr_33692_35521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (5))){
var inst_33635 = cljs.core.async.close_BANG_(tc);
var inst_33636 = cljs.core.async.close_BANG_(fc);
var state_33656__$1 = (function (){var statearr_33693 = state_33656;
(statearr_33693[(8)] = inst_33635);

return statearr_33693;
})();
var statearr_33694_35525 = state_33656__$1;
(statearr_33694_35525[(2)] = inst_33636);

(statearr_33694_35525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (14))){
var inst_33650 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
var statearr_33695_35526 = state_33656__$1;
(statearr_33695_35526[(2)] = inst_33650);

(statearr_33695_35526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (10))){
var state_33656__$1 = state_33656;
var statearr_33696_35531 = state_33656__$1;
(statearr_33696_35531[(2)] = fc);

(statearr_33696_35531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33657 === (8))){
var inst_33645 = (state_33656[(2)]);
var state_33656__$1 = state_33656;
if(cljs.core.truth_(inst_33645)){
var statearr_33697_35535 = state_33656__$1;
(statearr_33697_35535[(1)] = (12));

} else {
var statearr_33698_35536 = state_33656__$1;
(statearr_33698_35536[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_33699 = [null,null,null,null,null,null,null,null,null];
(statearr_33699[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_33699[(1)] = (1));

return statearr_33699;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_33656){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33656);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33704){var ex__32813__auto__ = e33704;
var statearr_33705_35540 = state_33656;
(statearr_33705_35540[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33656[(4)]))){
var statearr_33707_35541 = state_33656;
(statearr_33707_35541[(1)] = cljs.core.first((state_33656[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_33656;
state_33656 = G__35542;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_33656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_33656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33721 = f__33108__auto__();
(statearr_33721[(6)] = c__33107__auto___35500);

return statearr_33721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33750){
var state_val_33751 = (state_33750[(1)]);
if((state_val_33751 === (7))){
var inst_33746 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33756_35549 = state_33750__$1;
(statearr_33756_35549[(2)] = inst_33746);

(statearr_33756_35549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (1))){
var inst_33727 = init;
var inst_33728 = inst_33727;
var state_33750__$1 = (function (){var statearr_33761 = state_33750;
(statearr_33761[(7)] = inst_33728);

return statearr_33761;
})();
var statearr_33762_35552 = state_33750__$1;
(statearr_33762_35552[(2)] = null);

(statearr_33762_35552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (4))){
var inst_33731 = (state_33750[(8)]);
var inst_33731__$1 = (state_33750[(2)]);
var inst_33732 = (inst_33731__$1 == null);
var state_33750__$1 = (function (){var statearr_33767 = state_33750;
(statearr_33767[(8)] = inst_33731__$1);

return statearr_33767;
})();
if(cljs.core.truth_(inst_33732)){
var statearr_33770_35553 = state_33750__$1;
(statearr_33770_35553[(1)] = (5));

} else {
var statearr_33771_35554 = state_33750__$1;
(statearr_33771_35554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (6))){
var inst_33731 = (state_33750[(8)]);
var inst_33728 = (state_33750[(7)]);
var inst_33735 = (state_33750[(9)]);
var inst_33735__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33728,inst_33731) : f.call(null,inst_33728,inst_33731));
var inst_33736 = cljs.core.reduced_QMARK_(inst_33735__$1);
var state_33750__$1 = (function (){var statearr_33772 = state_33750;
(statearr_33772[(9)] = inst_33735__$1);

return statearr_33772;
})();
if(inst_33736){
var statearr_33773_35555 = state_33750__$1;
(statearr_33773_35555[(1)] = (8));

} else {
var statearr_33774_35556 = state_33750__$1;
(statearr_33774_35556[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (3))){
var inst_33748 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33750__$1,inst_33748);
} else {
if((state_val_33751 === (2))){
var state_33750__$1 = state_33750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33750__$1,(4),ch);
} else {
if((state_val_33751 === (9))){
var inst_33735 = (state_33750[(9)]);
var inst_33728 = inst_33735;
var state_33750__$1 = (function (){var statearr_33775 = state_33750;
(statearr_33775[(7)] = inst_33728);

return statearr_33775;
})();
var statearr_33776_35557 = state_33750__$1;
(statearr_33776_35557[(2)] = null);

(statearr_33776_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (5))){
var inst_33728 = (state_33750[(7)]);
var state_33750__$1 = state_33750;
var statearr_33777_35559 = state_33750__$1;
(statearr_33777_35559[(2)] = inst_33728);

(statearr_33777_35559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (10))){
var inst_33744 = (state_33750[(2)]);
var state_33750__$1 = state_33750;
var statearr_33778_35561 = state_33750__$1;
(statearr_33778_35561[(2)] = inst_33744);

(statearr_33778_35561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33751 === (8))){
var inst_33735 = (state_33750[(9)]);
var inst_33740 = cljs.core.deref(inst_33735);
var state_33750__$1 = state_33750;
var statearr_33779_35562 = state_33750__$1;
(statearr_33779_35562[(2)] = inst_33740);

(statearr_33779_35562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32810__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32810__auto____0 = (function (){
var statearr_33781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33781[(0)] = cljs$core$async$reduce_$_state_machine__32810__auto__);

(statearr_33781[(1)] = (1));

return statearr_33781;
});
var cljs$core$async$reduce_$_state_machine__32810__auto____1 = (function (state_33750){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33750);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33782){var ex__32813__auto__ = e33782;
var statearr_33783_35563 = state_33750;
(statearr_33783_35563[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33750[(4)]))){
var statearr_33784_35564 = state_33750;
(statearr_33784_35564[(1)] = cljs.core.first((state_33750[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35565 = state_33750;
state_33750 = G__35565;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32810__auto__ = function(state_33750){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32810__auto____1.call(this,state_33750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32810__auto____0;
cljs$core$async$reduce_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32810__auto____1;
return cljs$core$async$reduce_$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33785 = f__33108__auto__();
(statearr_33785[(6)] = c__33107__auto__);

return statearr_33785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

return c__33107__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33792){
var state_val_33793 = (state_33792[(1)]);
if((state_val_33793 === (1))){
var inst_33787 = cljs.core.async.reduce(f__$1,init,ch);
var state_33792__$1 = state_33792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33792__$1,(2),inst_33787);
} else {
if((state_val_33793 === (2))){
var inst_33789 = (state_33792[(2)]);
var inst_33790 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33789) : f__$1.call(null,inst_33789));
var state_33792__$1 = state_33792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33792__$1,inst_33790);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32810__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32810__auto____0 = (function (){
var statearr_33795 = [null,null,null,null,null,null,null];
(statearr_33795[(0)] = cljs$core$async$transduce_$_state_machine__32810__auto__);

(statearr_33795[(1)] = (1));

return statearr_33795;
});
var cljs$core$async$transduce_$_state_machine__32810__auto____1 = (function (state_33792){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33792);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33796){var ex__32813__auto__ = e33796;
var statearr_33797_35566 = state_33792;
(statearr_33797_35566[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33792[(4)]))){
var statearr_33798_35568 = state_33792;
(statearr_33798_35568[(1)] = cljs.core.first((state_33792[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_33792;
state_33792 = G__35569;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32810__auto__ = function(state_33792){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32810__auto____1.call(this,state_33792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32810__auto____0;
cljs$core$async$transduce_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32810__auto____1;
return cljs$core$async$transduce_$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33800 = f__33108__auto__();
(statearr_33800[(6)] = c__33107__auto__);

return statearr_33800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

return c__33107__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33802 = arguments.length;
switch (G__33802) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33827){
var state_val_33828 = (state_33827[(1)]);
if((state_val_33828 === (7))){
var inst_33809 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33830_35571 = state_33827__$1;
(statearr_33830_35571[(2)] = inst_33809);

(statearr_33830_35571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (1))){
var inst_33803 = cljs.core.seq(coll);
var inst_33804 = inst_33803;
var state_33827__$1 = (function (){var statearr_33831 = state_33827;
(statearr_33831[(7)] = inst_33804);

return statearr_33831;
})();
var statearr_33832_35572 = state_33827__$1;
(statearr_33832_35572[(2)] = null);

(statearr_33832_35572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (4))){
var inst_33804 = (state_33827[(7)]);
var inst_33807 = cljs.core.first(inst_33804);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33827__$1,(7),ch,inst_33807);
} else {
if((state_val_33828 === (13))){
var inst_33821 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33833_35573 = state_33827__$1;
(statearr_33833_35573[(2)] = inst_33821);

(statearr_33833_35573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (6))){
var inst_33812 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33812)){
var statearr_33835_35574 = state_33827__$1;
(statearr_33835_35574[(1)] = (8));

} else {
var statearr_33836_35575 = state_33827__$1;
(statearr_33836_35575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (3))){
var inst_33825 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33827__$1,inst_33825);
} else {
if((state_val_33828 === (12))){
var state_33827__$1 = state_33827;
var statearr_33837_35576 = state_33827__$1;
(statearr_33837_35576[(2)] = null);

(statearr_33837_35576[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (2))){
var inst_33804 = (state_33827[(7)]);
var state_33827__$1 = state_33827;
if(cljs.core.truth_(inst_33804)){
var statearr_33838_35577 = state_33827__$1;
(statearr_33838_35577[(1)] = (4));

} else {
var statearr_33839_35578 = state_33827__$1;
(statearr_33839_35578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (11))){
var inst_33818 = cljs.core.async.close_BANG_(ch);
var state_33827__$1 = state_33827;
var statearr_33840_35579 = state_33827__$1;
(statearr_33840_35579[(2)] = inst_33818);

(statearr_33840_35579[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (9))){
var state_33827__$1 = state_33827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33841_35580 = state_33827__$1;
(statearr_33841_35580[(1)] = (11));

} else {
var statearr_33842_35581 = state_33827__$1;
(statearr_33842_35581[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (5))){
var inst_33804 = (state_33827[(7)]);
var state_33827__$1 = state_33827;
var statearr_33843_35582 = state_33827__$1;
(statearr_33843_35582[(2)] = inst_33804);

(statearr_33843_35582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (10))){
var inst_33823 = (state_33827[(2)]);
var state_33827__$1 = state_33827;
var statearr_33845_35583 = state_33827__$1;
(statearr_33845_35583[(2)] = inst_33823);

(statearr_33845_35583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33828 === (8))){
var inst_33804 = (state_33827[(7)]);
var inst_33814 = cljs.core.next(inst_33804);
var inst_33804__$1 = inst_33814;
var state_33827__$1 = (function (){var statearr_33846 = state_33827;
(statearr_33846[(7)] = inst_33804__$1);

return statearr_33846;
})();
var statearr_33847_35592 = state_33827__$1;
(statearr_33847_35592[(2)] = null);

(statearr_33847_35592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_33848 = [null,null,null,null,null,null,null,null];
(statearr_33848[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_33848[(1)] = (1));

return statearr_33848;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_33827){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33827);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e33849){var ex__32813__auto__ = e33849;
var statearr_33850_35602 = state_33827;
(statearr_33850_35602[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33827[(4)]))){
var statearr_33852_35604 = state_33827;
(statearr_33852_35604[(1)] = cljs.core.first((state_33827[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35606 = state_33827;
state_33827 = G__35606;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_33827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_33827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_33853 = f__33108__auto__();
(statearr_33853[(6)] = c__33107__auto__);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

return c__33107__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35610 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35610(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35611 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35611(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35612 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35612(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35613 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35613(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33858 = (function (ch,cs,meta33859){
this.ch = ch;
this.cs = cs;
this.meta33859 = meta33859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33860,meta33859__$1){
var self__ = this;
var _33860__$1 = this;
return (new cljs.core.async.t_cljs$core$async33858(self__.ch,self__.cs,meta33859__$1));
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33860){
var self__ = this;
var _33860__$1 = this;
return self__.meta33859;
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33859","meta33859",-2065364339,null)], null);
}));

(cljs.core.async.t_cljs$core$async33858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33858");

(cljs.core.async.t_cljs$core$async33858.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33858.
 */
cljs.core.async.__GT_t_cljs$core$async33858 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33858(ch__$1,cs__$1,meta33859){
return (new cljs.core.async.t_cljs$core$async33858(ch__$1,cs__$1,meta33859));
});

}

return (new cljs.core.async.t_cljs$core$async33858(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33107__auto___35618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_33998){
var state_val_33999 = (state_33998[(1)]);
if((state_val_33999 === (7))){
var inst_33993 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34000_35619 = state_33998__$1;
(statearr_34000_35619[(2)] = inst_33993);

(statearr_34000_35619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (20))){
var inst_33896 = (state_33998[(7)]);
var inst_33908 = cljs.core.first(inst_33896);
var inst_33909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33908,(0),null);
var inst_33910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33908,(1),null);
var state_33998__$1 = (function (){var statearr_34001 = state_33998;
(statearr_34001[(8)] = inst_33909);

return statearr_34001;
})();
if(cljs.core.truth_(inst_33910)){
var statearr_34002_35623 = state_33998__$1;
(statearr_34002_35623[(1)] = (22));

} else {
var statearr_34003_35624 = state_33998__$1;
(statearr_34003_35624[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (27))){
var inst_33938 = (state_33998[(9)]);
var inst_33864 = (state_33998[(10)]);
var inst_33946 = (state_33998[(11)]);
var inst_33940 = (state_33998[(12)]);
var inst_33946__$1 = cljs.core._nth(inst_33938,inst_33940);
var inst_33947 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33946__$1,inst_33864,done);
var state_33998__$1 = (function (){var statearr_34004 = state_33998;
(statearr_34004[(11)] = inst_33946__$1);

return statearr_34004;
})();
if(cljs.core.truth_(inst_33947)){
var statearr_34005_35625 = state_33998__$1;
(statearr_34005_35625[(1)] = (30));

} else {
var statearr_34006_35626 = state_33998__$1;
(statearr_34006_35626[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (1))){
var state_33998__$1 = state_33998;
var statearr_34007_35627 = state_33998__$1;
(statearr_34007_35627[(2)] = null);

(statearr_34007_35627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (24))){
var inst_33896 = (state_33998[(7)]);
var inst_33915 = (state_33998[(2)]);
var inst_33916 = cljs.core.next(inst_33896);
var inst_33873 = inst_33916;
var inst_33874 = null;
var inst_33875 = (0);
var inst_33876 = (0);
var state_33998__$1 = (function (){var statearr_34009 = state_33998;
(statearr_34009[(13)] = inst_33873);

(statearr_34009[(14)] = inst_33874);

(statearr_34009[(15)] = inst_33875);

(statearr_34009[(16)] = inst_33876);

(statearr_34009[(17)] = inst_33915);

return statearr_34009;
})();
var statearr_34010_35631 = state_33998__$1;
(statearr_34010_35631[(2)] = null);

(statearr_34010_35631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (39))){
var state_33998__$1 = state_33998;
var statearr_34014_35632 = state_33998__$1;
(statearr_34014_35632[(2)] = null);

(statearr_34014_35632[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (4))){
var inst_33864 = (state_33998[(10)]);
var inst_33864__$1 = (state_33998[(2)]);
var inst_33865 = (inst_33864__$1 == null);
var state_33998__$1 = (function (){var statearr_34015 = state_33998;
(statearr_34015[(10)] = inst_33864__$1);

return statearr_34015;
})();
if(cljs.core.truth_(inst_33865)){
var statearr_34016_35633 = state_33998__$1;
(statearr_34016_35633[(1)] = (5));

} else {
var statearr_34017_35634 = state_33998__$1;
(statearr_34017_35634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (15))){
var inst_33873 = (state_33998[(13)]);
var inst_33874 = (state_33998[(14)]);
var inst_33875 = (state_33998[(15)]);
var inst_33876 = (state_33998[(16)]);
var inst_33892 = (state_33998[(2)]);
var inst_33893 = (inst_33876 + (1));
var tmp34011 = inst_33873;
var tmp34012 = inst_33874;
var tmp34013 = inst_33875;
var inst_33873__$1 = tmp34011;
var inst_33874__$1 = tmp34012;
var inst_33875__$1 = tmp34013;
var inst_33876__$1 = inst_33893;
var state_33998__$1 = (function (){var statearr_34019 = state_33998;
(statearr_34019[(18)] = inst_33892);

(statearr_34019[(13)] = inst_33873__$1);

(statearr_34019[(14)] = inst_33874__$1);

(statearr_34019[(15)] = inst_33875__$1);

(statearr_34019[(16)] = inst_33876__$1);

return statearr_34019;
})();
var statearr_34020_35638 = state_33998__$1;
(statearr_34020_35638[(2)] = null);

(statearr_34020_35638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (21))){
var inst_33919 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34024_35639 = state_33998__$1;
(statearr_34024_35639[(2)] = inst_33919);

(statearr_34024_35639[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (31))){
var inst_33946 = (state_33998[(11)]);
var inst_33950 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33946);
var state_33998__$1 = state_33998;
var statearr_34026_35641 = state_33998__$1;
(statearr_34026_35641[(2)] = inst_33950);

(statearr_34026_35641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (32))){
var inst_33938 = (state_33998[(9)]);
var inst_33937 = (state_33998[(19)]);
var inst_33940 = (state_33998[(12)]);
var inst_33939 = (state_33998[(20)]);
var inst_33952 = (state_33998[(2)]);
var inst_33953 = (inst_33940 + (1));
var tmp34021 = inst_33938;
var tmp34022 = inst_33937;
var tmp34023 = inst_33939;
var inst_33937__$1 = tmp34022;
var inst_33938__$1 = tmp34021;
var inst_33939__$1 = tmp34023;
var inst_33940__$1 = inst_33953;
var state_33998__$1 = (function (){var statearr_34027 = state_33998;
(statearr_34027[(9)] = inst_33938__$1);

(statearr_34027[(21)] = inst_33952);

(statearr_34027[(19)] = inst_33937__$1);

(statearr_34027[(12)] = inst_33940__$1);

(statearr_34027[(20)] = inst_33939__$1);

return statearr_34027;
})();
var statearr_34028_35644 = state_33998__$1;
(statearr_34028_35644[(2)] = null);

(statearr_34028_35644[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (40))){
var inst_33966 = (state_33998[(22)]);
var inst_33970 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33966);
var state_33998__$1 = state_33998;
var statearr_34029_35645 = state_33998__$1;
(statearr_34029_35645[(2)] = inst_33970);

(statearr_34029_35645[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (33))){
var inst_33956 = (state_33998[(23)]);
var inst_33958 = cljs.core.chunked_seq_QMARK_(inst_33956);
var state_33998__$1 = state_33998;
if(inst_33958){
var statearr_34031_35646 = state_33998__$1;
(statearr_34031_35646[(1)] = (36));

} else {
var statearr_34032_35647 = state_33998__$1;
(statearr_34032_35647[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (13))){
var inst_33886 = (state_33998[(24)]);
var inst_33889 = cljs.core.async.close_BANG_(inst_33886);
var state_33998__$1 = state_33998;
var statearr_34033_35652 = state_33998__$1;
(statearr_34033_35652[(2)] = inst_33889);

(statearr_34033_35652[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (22))){
var inst_33909 = (state_33998[(8)]);
var inst_33912 = cljs.core.async.close_BANG_(inst_33909);
var state_33998__$1 = state_33998;
var statearr_34034_35656 = state_33998__$1;
(statearr_34034_35656[(2)] = inst_33912);

(statearr_34034_35656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (36))){
var inst_33956 = (state_33998[(23)]);
var inst_33960 = cljs.core.chunk_first(inst_33956);
var inst_33961 = cljs.core.chunk_rest(inst_33956);
var inst_33962 = cljs.core.count(inst_33960);
var inst_33937 = inst_33961;
var inst_33938 = inst_33960;
var inst_33939 = inst_33962;
var inst_33940 = (0);
var state_33998__$1 = (function (){var statearr_34035 = state_33998;
(statearr_34035[(9)] = inst_33938);

(statearr_34035[(19)] = inst_33937);

(statearr_34035[(12)] = inst_33940);

(statearr_34035[(20)] = inst_33939);

return statearr_34035;
})();
var statearr_34036_35657 = state_33998__$1;
(statearr_34036_35657[(2)] = null);

(statearr_34036_35657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (41))){
var inst_33956 = (state_33998[(23)]);
var inst_33972 = (state_33998[(2)]);
var inst_33973 = cljs.core.next(inst_33956);
var inst_33937 = inst_33973;
var inst_33938 = null;
var inst_33939 = (0);
var inst_33940 = (0);
var state_33998__$1 = (function (){var statearr_34037 = state_33998;
(statearr_34037[(9)] = inst_33938);

(statearr_34037[(19)] = inst_33937);

(statearr_34037[(25)] = inst_33972);

(statearr_34037[(12)] = inst_33940);

(statearr_34037[(20)] = inst_33939);

return statearr_34037;
})();
var statearr_34038_35658 = state_33998__$1;
(statearr_34038_35658[(2)] = null);

(statearr_34038_35658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (43))){
var state_33998__$1 = state_33998;
var statearr_34039_35659 = state_33998__$1;
(statearr_34039_35659[(2)] = null);

(statearr_34039_35659[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (29))){
var inst_33981 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34040_35660 = state_33998__$1;
(statearr_34040_35660[(2)] = inst_33981);

(statearr_34040_35660[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (44))){
var inst_33990 = (state_33998[(2)]);
var state_33998__$1 = (function (){var statearr_34041 = state_33998;
(statearr_34041[(26)] = inst_33990);

return statearr_34041;
})();
var statearr_34042_35661 = state_33998__$1;
(statearr_34042_35661[(2)] = null);

(statearr_34042_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (6))){
var inst_33929 = (state_33998[(27)]);
var inst_33928 = cljs.core.deref(cs);
var inst_33929__$1 = cljs.core.keys(inst_33928);
var inst_33930 = cljs.core.count(inst_33929__$1);
var inst_33931 = cljs.core.reset_BANG_(dctr,inst_33930);
var inst_33936 = cljs.core.seq(inst_33929__$1);
var inst_33937 = inst_33936;
var inst_33938 = null;
var inst_33939 = (0);
var inst_33940 = (0);
var state_33998__$1 = (function (){var statearr_34043 = state_33998;
(statearr_34043[(28)] = inst_33931);

(statearr_34043[(9)] = inst_33938);

(statearr_34043[(27)] = inst_33929__$1);

(statearr_34043[(19)] = inst_33937);

(statearr_34043[(12)] = inst_33940);

(statearr_34043[(20)] = inst_33939);

return statearr_34043;
})();
var statearr_34044_35662 = state_33998__$1;
(statearr_34044_35662[(2)] = null);

(statearr_34044_35662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (28))){
var inst_33956 = (state_33998[(23)]);
var inst_33937 = (state_33998[(19)]);
var inst_33956__$1 = cljs.core.seq(inst_33937);
var state_33998__$1 = (function (){var statearr_34045 = state_33998;
(statearr_34045[(23)] = inst_33956__$1);

return statearr_34045;
})();
if(inst_33956__$1){
var statearr_34046_35669 = state_33998__$1;
(statearr_34046_35669[(1)] = (33));

} else {
var statearr_34047_35670 = state_33998__$1;
(statearr_34047_35670[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (25))){
var inst_33940 = (state_33998[(12)]);
var inst_33939 = (state_33998[(20)]);
var inst_33942 = (inst_33940 < inst_33939);
var inst_33943 = inst_33942;
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33943)){
var statearr_34048_35671 = state_33998__$1;
(statearr_34048_35671[(1)] = (27));

} else {
var statearr_34049_35672 = state_33998__$1;
(statearr_34049_35672[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (34))){
var state_33998__$1 = state_33998;
var statearr_34050_35673 = state_33998__$1;
(statearr_34050_35673[(2)] = null);

(statearr_34050_35673[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (17))){
var state_33998__$1 = state_33998;
var statearr_34051_35674 = state_33998__$1;
(statearr_34051_35674[(2)] = null);

(statearr_34051_35674[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (3))){
var inst_33995 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33998__$1,inst_33995);
} else {
if((state_val_33999 === (12))){
var inst_33924 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34052_35678 = state_33998__$1;
(statearr_34052_35678[(2)] = inst_33924);

(statearr_34052_35678[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (2))){
var state_33998__$1 = state_33998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33998__$1,(4),ch);
} else {
if((state_val_33999 === (23))){
var state_33998__$1 = state_33998;
var statearr_34054_35679 = state_33998__$1;
(statearr_34054_35679[(2)] = null);

(statearr_34054_35679[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (35))){
var inst_33979 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34055_35680 = state_33998__$1;
(statearr_34055_35680[(2)] = inst_33979);

(statearr_34055_35680[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (19))){
var inst_33896 = (state_33998[(7)]);
var inst_33900 = cljs.core.chunk_first(inst_33896);
var inst_33901 = cljs.core.chunk_rest(inst_33896);
var inst_33902 = cljs.core.count(inst_33900);
var inst_33873 = inst_33901;
var inst_33874 = inst_33900;
var inst_33875 = inst_33902;
var inst_33876 = (0);
var state_33998__$1 = (function (){var statearr_34056 = state_33998;
(statearr_34056[(13)] = inst_33873);

(statearr_34056[(14)] = inst_33874);

(statearr_34056[(15)] = inst_33875);

(statearr_34056[(16)] = inst_33876);

return statearr_34056;
})();
var statearr_34057_35681 = state_33998__$1;
(statearr_34057_35681[(2)] = null);

(statearr_34057_35681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (11))){
var inst_33873 = (state_33998[(13)]);
var inst_33896 = (state_33998[(7)]);
var inst_33896__$1 = cljs.core.seq(inst_33873);
var state_33998__$1 = (function (){var statearr_34058 = state_33998;
(statearr_34058[(7)] = inst_33896__$1);

return statearr_34058;
})();
if(inst_33896__$1){
var statearr_34059_35684 = state_33998__$1;
(statearr_34059_35684[(1)] = (16));

} else {
var statearr_34060_35685 = state_33998__$1;
(statearr_34060_35685[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (9))){
var inst_33926 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34062_35687 = state_33998__$1;
(statearr_34062_35687[(2)] = inst_33926);

(statearr_34062_35687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (5))){
var inst_33871 = cljs.core.deref(cs);
var inst_33872 = cljs.core.seq(inst_33871);
var inst_33873 = inst_33872;
var inst_33874 = null;
var inst_33875 = (0);
var inst_33876 = (0);
var state_33998__$1 = (function (){var statearr_34063 = state_33998;
(statearr_34063[(13)] = inst_33873);

(statearr_34063[(14)] = inst_33874);

(statearr_34063[(15)] = inst_33875);

(statearr_34063[(16)] = inst_33876);

return statearr_34063;
})();
var statearr_34064_35688 = state_33998__$1;
(statearr_34064_35688[(2)] = null);

(statearr_34064_35688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (14))){
var state_33998__$1 = state_33998;
var statearr_34065_35689 = state_33998__$1;
(statearr_34065_35689[(2)] = null);

(statearr_34065_35689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (45))){
var inst_33987 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34066_35690 = state_33998__$1;
(statearr_34066_35690[(2)] = inst_33987);

(statearr_34066_35690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (26))){
var inst_33929 = (state_33998[(27)]);
var inst_33983 = (state_33998[(2)]);
var inst_33984 = cljs.core.seq(inst_33929);
var state_33998__$1 = (function (){var statearr_34067 = state_33998;
(statearr_34067[(29)] = inst_33983);

return statearr_34067;
})();
if(inst_33984){
var statearr_34068_35691 = state_33998__$1;
(statearr_34068_35691[(1)] = (42));

} else {
var statearr_34069_35692 = state_33998__$1;
(statearr_34069_35692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (16))){
var inst_33896 = (state_33998[(7)]);
var inst_33898 = cljs.core.chunked_seq_QMARK_(inst_33896);
var state_33998__$1 = state_33998;
if(inst_33898){
var statearr_34070_35693 = state_33998__$1;
(statearr_34070_35693[(1)] = (19));

} else {
var statearr_34071_35694 = state_33998__$1;
(statearr_34071_35694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (38))){
var inst_33976 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34072_35695 = state_33998__$1;
(statearr_34072_35695[(2)] = inst_33976);

(statearr_34072_35695[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (30))){
var state_33998__$1 = state_33998;
var statearr_34073_35696 = state_33998__$1;
(statearr_34073_35696[(2)] = null);

(statearr_34073_35696[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (10))){
var inst_33874 = (state_33998[(14)]);
var inst_33876 = (state_33998[(16)]);
var inst_33885 = cljs.core._nth(inst_33874,inst_33876);
var inst_33886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33885,(0),null);
var inst_33887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33885,(1),null);
var state_33998__$1 = (function (){var statearr_34075 = state_33998;
(statearr_34075[(24)] = inst_33886);

return statearr_34075;
})();
if(cljs.core.truth_(inst_33887)){
var statearr_34076_35697 = state_33998__$1;
(statearr_34076_35697[(1)] = (13));

} else {
var statearr_34077_35699 = state_33998__$1;
(statearr_34077_35699[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (18))){
var inst_33922 = (state_33998[(2)]);
var state_33998__$1 = state_33998;
var statearr_34078_35700 = state_33998__$1;
(statearr_34078_35700[(2)] = inst_33922);

(statearr_34078_35700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (42))){
var state_33998__$1 = state_33998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33998__$1,(45),dchan);
} else {
if((state_val_33999 === (37))){
var inst_33956 = (state_33998[(23)]);
var inst_33864 = (state_33998[(10)]);
var inst_33966 = (state_33998[(22)]);
var inst_33966__$1 = cljs.core.first(inst_33956);
var inst_33967 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33966__$1,inst_33864,done);
var state_33998__$1 = (function (){var statearr_34079 = state_33998;
(statearr_34079[(22)] = inst_33966__$1);

return statearr_34079;
})();
if(cljs.core.truth_(inst_33967)){
var statearr_34080_35701 = state_33998__$1;
(statearr_34080_35701[(1)] = (39));

} else {
var statearr_34081_35702 = state_33998__$1;
(statearr_34081_35702[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33999 === (8))){
var inst_33875 = (state_33998[(15)]);
var inst_33876 = (state_33998[(16)]);
var inst_33879 = (inst_33876 < inst_33875);
var inst_33880 = inst_33879;
var state_33998__$1 = state_33998;
if(cljs.core.truth_(inst_33880)){
var statearr_34082_35703 = state_33998__$1;
(statearr_34082_35703[(1)] = (10));

} else {
var statearr_34083_35704 = state_33998__$1;
(statearr_34083_35704[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32810__auto__ = null;
var cljs$core$async$mult_$_state_machine__32810__auto____0 = (function (){
var statearr_34084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34084[(0)] = cljs$core$async$mult_$_state_machine__32810__auto__);

(statearr_34084[(1)] = (1));

return statearr_34084;
});
var cljs$core$async$mult_$_state_machine__32810__auto____1 = (function (state_33998){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_33998);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34085){var ex__32813__auto__ = e34085;
var statearr_34086_35705 = state_33998;
(statearr_34086_35705[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_33998[(4)]))){
var statearr_34088_35706 = state_33998;
(statearr_34088_35706[(1)] = cljs.core.first((state_33998[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35707 = state_33998;
state_33998 = G__35707;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32810__auto__ = function(state_33998){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32810__auto____1.call(this,state_33998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32810__auto____0;
cljs$core$async$mult_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32810__auto____1;
return cljs$core$async$mult_$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34089 = f__33108__auto__();
(statearr_34089[(6)] = c__33107__auto___35618);

return statearr_34089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34091 = arguments.length;
switch (G__34091) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35709 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35709(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35710 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35710(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35711 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35711(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35712 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35712(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35722 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35722(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35724 = arguments.length;
var i__5770__auto___35727 = (0);
while(true){
if((i__5770__auto___35727 < len__5769__auto___35724)){
args__5775__auto__.push((arguments[i__5770__auto___35727]));

var G__35731 = (i__5770__auto___35727 + (1));
i__5770__auto___35727 = G__35731;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34100){
var map__34101 = p__34100;
var map__34101__$1 = cljs.core.__destructure_map(map__34101);
var opts = map__34101__$1;
var statearr_34102_35733 = state;
(statearr_34102_35733[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34103_35734 = state;
(statearr_34103_35734[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34104_35735 = state;
(statearr_34104_35735[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34095){
var G__34096 = cljs.core.first(seq34095);
var seq34095__$1 = cljs.core.next(seq34095);
var G__34097 = cljs.core.first(seq34095__$1);
var seq34095__$2 = cljs.core.next(seq34095__$1);
var G__34098 = cljs.core.first(seq34095__$2);
var seq34095__$3 = cljs.core.next(seq34095__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34096,G__34097,G__34098,seq34095__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34106 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34107){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34107 = meta34107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34108,meta34107__$1){
var self__ = this;
var _34108__$1 = this;
return (new cljs.core.async.t_cljs$core$async34106(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34107__$1));
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34108){
var self__ = this;
var _34108__$1 = this;
return self__.meta34107;
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34106.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34107","meta34107",-523554720,null)], null);
}));

(cljs.core.async.t_cljs$core$async34106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34106");

(cljs.core.async.t_cljs$core$async34106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34106.
 */
cljs.core.async.__GT_t_cljs$core$async34106 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34106(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34107){
return (new cljs.core.async.t_cljs$core$async34106(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34107));
});

}

return (new cljs.core.async.t_cljs$core$async34106(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33107__auto___35763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34183){
var state_val_34184 = (state_34183[(1)]);
if((state_val_34184 === (7))){
var inst_34139 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
if(cljs.core.truth_(inst_34139)){
var statearr_34186_35764 = state_34183__$1;
(statearr_34186_35764[(1)] = (8));

} else {
var statearr_34187_35765 = state_34183__$1;
(statearr_34187_35765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (20))){
var inst_34131 = (state_34183[(7)]);
var state_34183__$1 = state_34183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34183__$1,(23),out,inst_34131);
} else {
if((state_val_34184 === (1))){
var inst_34114 = calc_state();
var inst_34115 = cljs.core.__destructure_map(inst_34114);
var inst_34116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34115,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34115,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34115,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34119 = inst_34114;
var state_34183__$1 = (function (){var statearr_34188 = state_34183;
(statearr_34188[(8)] = inst_34116);

(statearr_34188[(9)] = inst_34118);

(statearr_34188[(10)] = inst_34117);

(statearr_34188[(11)] = inst_34119);

return statearr_34188;
})();
var statearr_34189_35766 = state_34183__$1;
(statearr_34189_35766[(2)] = null);

(statearr_34189_35766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (24))){
var inst_34122 = (state_34183[(12)]);
var inst_34119 = inst_34122;
var state_34183__$1 = (function (){var statearr_34190 = state_34183;
(statearr_34190[(11)] = inst_34119);

return statearr_34190;
})();
var statearr_34191_35767 = state_34183__$1;
(statearr_34191_35767[(2)] = null);

(statearr_34191_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (4))){
var inst_34134 = (state_34183[(13)]);
var inst_34131 = (state_34183[(7)]);
var inst_34130 = (state_34183[(2)]);
var inst_34131__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34130,(0),null);
var inst_34132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34130,(1),null);
var inst_34134__$1 = (inst_34131__$1 == null);
var state_34183__$1 = (function (){var statearr_34193 = state_34183;
(statearr_34193[(14)] = inst_34132);

(statearr_34193[(13)] = inst_34134__$1);

(statearr_34193[(7)] = inst_34131__$1);

return statearr_34193;
})();
if(cljs.core.truth_(inst_34134__$1)){
var statearr_34195_35781 = state_34183__$1;
(statearr_34195_35781[(1)] = (5));

} else {
var statearr_34196_35782 = state_34183__$1;
(statearr_34196_35782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (15))){
var inst_34123 = (state_34183[(15)]);
var inst_34153 = (state_34183[(16)]);
var inst_34153__$1 = cljs.core.empty_QMARK_(inst_34123);
var state_34183__$1 = (function (){var statearr_34197 = state_34183;
(statearr_34197[(16)] = inst_34153__$1);

return statearr_34197;
})();
if(inst_34153__$1){
var statearr_34198_35784 = state_34183__$1;
(statearr_34198_35784[(1)] = (17));

} else {
var statearr_34199_35785 = state_34183__$1;
(statearr_34199_35785[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (21))){
var inst_34122 = (state_34183[(12)]);
var inst_34119 = inst_34122;
var state_34183__$1 = (function (){var statearr_34200 = state_34183;
(statearr_34200[(11)] = inst_34119);

return statearr_34200;
})();
var statearr_34201_35786 = state_34183__$1;
(statearr_34201_35786[(2)] = null);

(statearr_34201_35786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (13))){
var inst_34146 = (state_34183[(2)]);
var inst_34147 = calc_state();
var inst_34119 = inst_34147;
var state_34183__$1 = (function (){var statearr_34203 = state_34183;
(statearr_34203[(17)] = inst_34146);

(statearr_34203[(11)] = inst_34119);

return statearr_34203;
})();
var statearr_34205_35787 = state_34183__$1;
(statearr_34205_35787[(2)] = null);

(statearr_34205_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (22))){
var inst_34177 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34206_35797 = state_34183__$1;
(statearr_34206_35797[(2)] = inst_34177);

(statearr_34206_35797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (6))){
var inst_34132 = (state_34183[(14)]);
var inst_34137 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34132,change);
var state_34183__$1 = state_34183;
var statearr_34207_35798 = state_34183__$1;
(statearr_34207_35798[(2)] = inst_34137);

(statearr_34207_35798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (25))){
var state_34183__$1 = state_34183;
var statearr_34208_35799 = state_34183__$1;
(statearr_34208_35799[(2)] = null);

(statearr_34208_35799[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (17))){
var inst_34132 = (state_34183[(14)]);
var inst_34124 = (state_34183[(18)]);
var inst_34155 = (inst_34124.cljs$core$IFn$_invoke$arity$1 ? inst_34124.cljs$core$IFn$_invoke$arity$1(inst_34132) : inst_34124.call(null,inst_34132));
var inst_34156 = cljs.core.not(inst_34155);
var state_34183__$1 = state_34183;
var statearr_34209_35800 = state_34183__$1;
(statearr_34209_35800[(2)] = inst_34156);

(statearr_34209_35800[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (3))){
var inst_34181 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34183__$1,inst_34181);
} else {
if((state_val_34184 === (12))){
var state_34183__$1 = state_34183;
var statearr_34210_35818 = state_34183__$1;
(statearr_34210_35818[(2)] = null);

(statearr_34210_35818[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (2))){
var inst_34122 = (state_34183[(12)]);
var inst_34119 = (state_34183[(11)]);
var inst_34122__$1 = cljs.core.__destructure_map(inst_34119);
var inst_34123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34122__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34122__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34122__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34183__$1 = (function (){var statearr_34211 = state_34183;
(statearr_34211[(12)] = inst_34122__$1);

(statearr_34211[(15)] = inst_34123);

(statearr_34211[(18)] = inst_34124);

return statearr_34211;
})();
return cljs.core.async.ioc_alts_BANG_(state_34183__$1,(4),inst_34125);
} else {
if((state_val_34184 === (23))){
var inst_34168 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
if(cljs.core.truth_(inst_34168)){
var statearr_34212_35819 = state_34183__$1;
(statearr_34212_35819[(1)] = (24));

} else {
var statearr_34213_35820 = state_34183__$1;
(statearr_34213_35820[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (19))){
var inst_34159 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34214_35822 = state_34183__$1;
(statearr_34214_35822[(2)] = inst_34159);

(statearr_34214_35822[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (11))){
var inst_34132 = (state_34183[(14)]);
var inst_34143 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34132);
var state_34183__$1 = state_34183;
var statearr_34215_35823 = state_34183__$1;
(statearr_34215_35823[(2)] = inst_34143);

(statearr_34215_35823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (9))){
var inst_34132 = (state_34183[(14)]);
var inst_34123 = (state_34183[(15)]);
var inst_34150 = (state_34183[(19)]);
var inst_34150__$1 = (inst_34123.cljs$core$IFn$_invoke$arity$1 ? inst_34123.cljs$core$IFn$_invoke$arity$1(inst_34132) : inst_34123.call(null,inst_34132));
var state_34183__$1 = (function (){var statearr_34216 = state_34183;
(statearr_34216[(19)] = inst_34150__$1);

return statearr_34216;
})();
if(cljs.core.truth_(inst_34150__$1)){
var statearr_34217_35826 = state_34183__$1;
(statearr_34217_35826[(1)] = (14));

} else {
var statearr_34218_35827 = state_34183__$1;
(statearr_34218_35827[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (5))){
var inst_34134 = (state_34183[(13)]);
var state_34183__$1 = state_34183;
var statearr_34219_35828 = state_34183__$1;
(statearr_34219_35828[(2)] = inst_34134);

(statearr_34219_35828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (14))){
var inst_34150 = (state_34183[(19)]);
var state_34183__$1 = state_34183;
var statearr_34220_35829 = state_34183__$1;
(statearr_34220_35829[(2)] = inst_34150);

(statearr_34220_35829[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (26))){
var inst_34173 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34221_35830 = state_34183__$1;
(statearr_34221_35830[(2)] = inst_34173);

(statearr_34221_35830[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (16))){
var inst_34161 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
if(cljs.core.truth_(inst_34161)){
var statearr_34222_35831 = state_34183__$1;
(statearr_34222_35831[(1)] = (20));

} else {
var statearr_34223_35832 = state_34183__$1;
(statearr_34223_35832[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (10))){
var inst_34179 = (state_34183[(2)]);
var state_34183__$1 = state_34183;
var statearr_34224_35836 = state_34183__$1;
(statearr_34224_35836[(2)] = inst_34179);

(statearr_34224_35836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (18))){
var inst_34153 = (state_34183[(16)]);
var state_34183__$1 = state_34183;
var statearr_34227_35841 = state_34183__$1;
(statearr_34227_35841[(2)] = inst_34153);

(statearr_34227_35841[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34184 === (8))){
var inst_34131 = (state_34183[(7)]);
var inst_34141 = (inst_34131 == null);
var state_34183__$1 = state_34183;
if(cljs.core.truth_(inst_34141)){
var statearr_34228_35846 = state_34183__$1;
(statearr_34228_35846[(1)] = (11));

} else {
var statearr_34229_35847 = state_34183__$1;
(statearr_34229_35847[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32810__auto__ = null;
var cljs$core$async$mix_$_state_machine__32810__auto____0 = (function (){
var statearr_34230 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34230[(0)] = cljs$core$async$mix_$_state_machine__32810__auto__);

(statearr_34230[(1)] = (1));

return statearr_34230;
});
var cljs$core$async$mix_$_state_machine__32810__auto____1 = (function (state_34183){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34183);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34231){var ex__32813__auto__ = e34231;
var statearr_34232_35853 = state_34183;
(statearr_34232_35853[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34183[(4)]))){
var statearr_34233_35854 = state_34183;
(statearr_34233_35854[(1)] = cljs.core.first((state_34183[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35855 = state_34183;
state_34183 = G__35855;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32810__auto__ = function(state_34183){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32810__auto____1.call(this,state_34183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32810__auto____0;
cljs$core$async$mix_$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32810__auto____1;
return cljs$core$async$mix_$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34234 = f__33108__auto__();
(statearr_34234[(6)] = c__33107__auto___35763);

return statearr_34234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35858 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35858(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35863 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35863(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35872 = (function() {
var G__35873 = null;
var G__35873__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35873__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35873 = function(p,v){
switch(arguments.length){
case 1:
return G__35873__1.call(this,p);
case 2:
return G__35873__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35873.cljs$core$IFn$_invoke$arity$1 = G__35873__1;
G__35873.cljs$core$IFn$_invoke$arity$2 = G__35873__2;
return G__35873;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34260 = arguments.length;
switch (G__34260) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35872(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35872(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34265 = arguments.length;
switch (G__34265) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34262_SHARP_){
if(cljs.core.truth_((p1__34262_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34262_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34262_SHARP_.call(null,topic)))){
return p1__34262_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34262_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34269 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34269 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34270){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34270 = meta34270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34271,meta34270__$1){
var self__ = this;
var _34271__$1 = this;
return (new cljs.core.async.t_cljs$core$async34269(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34270__$1));
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34271){
var self__ = this;
var _34271__$1 = this;
return self__.meta34270;
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34270","meta34270",1207855190,null)], null);
}));

(cljs.core.async.t_cljs$core$async34269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34269");

(cljs.core.async.t_cljs$core$async34269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34269.
 */
cljs.core.async.__GT_t_cljs$core$async34269 = (function cljs$core$async$__GT_t_cljs$core$async34269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34270){
return (new cljs.core.async.t_cljs$core$async34269(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34270));
});

}

return (new cljs.core.async.t_cljs$core$async34269(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33107__auto___35889 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34365){
var state_val_34366 = (state_34365[(1)]);
if((state_val_34366 === (7))){
var inst_34361 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34371_35890 = state_34365__$1;
(statearr_34371_35890[(2)] = inst_34361);

(statearr_34371_35890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (20))){
var state_34365__$1 = state_34365;
var statearr_34375_35891 = state_34365__$1;
(statearr_34375_35891[(2)] = null);

(statearr_34375_35891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (1))){
var state_34365__$1 = state_34365;
var statearr_34376_35892 = state_34365__$1;
(statearr_34376_35892[(2)] = null);

(statearr_34376_35892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (24))){
var inst_34343 = (state_34365[(7)]);
var inst_34352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34343);
var state_34365__$1 = state_34365;
var statearr_34378_35893 = state_34365__$1;
(statearr_34378_35893[(2)] = inst_34352);

(statearr_34378_35893[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (4))){
var inst_34290 = (state_34365[(8)]);
var inst_34290__$1 = (state_34365[(2)]);
var inst_34292 = (inst_34290__$1 == null);
var state_34365__$1 = (function (){var statearr_34382 = state_34365;
(statearr_34382[(8)] = inst_34290__$1);

return statearr_34382;
})();
if(cljs.core.truth_(inst_34292)){
var statearr_34387_35896 = state_34365__$1;
(statearr_34387_35896[(1)] = (5));

} else {
var statearr_34388_35897 = state_34365__$1;
(statearr_34388_35897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (15))){
var inst_34337 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34390_35904 = state_34365__$1;
(statearr_34390_35904[(2)] = inst_34337);

(statearr_34390_35904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (21))){
var inst_34357 = (state_34365[(2)]);
var state_34365__$1 = (function (){var statearr_34394 = state_34365;
(statearr_34394[(9)] = inst_34357);

return statearr_34394;
})();
var statearr_34397_35905 = state_34365__$1;
(statearr_34397_35905[(2)] = null);

(statearr_34397_35905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (13))){
var inst_34319 = (state_34365[(10)]);
var inst_34321 = cljs.core.chunked_seq_QMARK_(inst_34319);
var state_34365__$1 = state_34365;
if(inst_34321){
var statearr_34401_35909 = state_34365__$1;
(statearr_34401_35909[(1)] = (16));

} else {
var statearr_34403_35910 = state_34365__$1;
(statearr_34403_35910[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (22))){
var inst_34349 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
if(cljs.core.truth_(inst_34349)){
var statearr_34407_35911 = state_34365__$1;
(statearr_34407_35911[(1)] = (23));

} else {
var statearr_34409_35912 = state_34365__$1;
(statearr_34409_35912[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (6))){
var inst_34345 = (state_34365[(11)]);
var inst_34290 = (state_34365[(8)]);
var inst_34343 = (state_34365[(7)]);
var inst_34343__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34290) : topic_fn.call(null,inst_34290));
var inst_34344 = cljs.core.deref(mults);
var inst_34345__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34344,inst_34343__$1);
var state_34365__$1 = (function (){var statearr_34411 = state_34365;
(statearr_34411[(11)] = inst_34345__$1);

(statearr_34411[(7)] = inst_34343__$1);

return statearr_34411;
})();
if(cljs.core.truth_(inst_34345__$1)){
var statearr_34412_35917 = state_34365__$1;
(statearr_34412_35917[(1)] = (19));

} else {
var statearr_34413_35918 = state_34365__$1;
(statearr_34413_35918[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (25))){
var inst_34354 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34417_35919 = state_34365__$1;
(statearr_34417_35919[(2)] = inst_34354);

(statearr_34417_35919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (17))){
var inst_34319 = (state_34365[(10)]);
var inst_34328 = cljs.core.first(inst_34319);
var inst_34329 = cljs.core.async.muxch_STAR_(inst_34328);
var inst_34330 = cljs.core.async.close_BANG_(inst_34329);
var inst_34331 = cljs.core.next(inst_34319);
var inst_34301 = inst_34331;
var inst_34302 = null;
var inst_34303 = (0);
var inst_34304 = (0);
var state_34365__$1 = (function (){var statearr_34419 = state_34365;
(statearr_34419[(12)] = inst_34301);

(statearr_34419[(13)] = inst_34302);

(statearr_34419[(14)] = inst_34330);

(statearr_34419[(15)] = inst_34303);

(statearr_34419[(16)] = inst_34304);

return statearr_34419;
})();
var statearr_34424_35920 = state_34365__$1;
(statearr_34424_35920[(2)] = null);

(statearr_34424_35920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (3))){
var inst_34363 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34365__$1,inst_34363);
} else {
if((state_val_34366 === (12))){
var inst_34339 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34425_35927 = state_34365__$1;
(statearr_34425_35927[(2)] = inst_34339);

(statearr_34425_35927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (2))){
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34365__$1,(4),ch);
} else {
if((state_val_34366 === (23))){
var state_34365__$1 = state_34365;
var statearr_34429_35928 = state_34365__$1;
(statearr_34429_35928[(2)] = null);

(statearr_34429_35928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (19))){
var inst_34345 = (state_34365[(11)]);
var inst_34290 = (state_34365[(8)]);
var inst_34347 = cljs.core.async.muxch_STAR_(inst_34345);
var state_34365__$1 = state_34365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34365__$1,(22),inst_34347,inst_34290);
} else {
if((state_val_34366 === (11))){
var inst_34301 = (state_34365[(12)]);
var inst_34319 = (state_34365[(10)]);
var inst_34319__$1 = cljs.core.seq(inst_34301);
var state_34365__$1 = (function (){var statearr_34434 = state_34365;
(statearr_34434[(10)] = inst_34319__$1);

return statearr_34434;
})();
if(inst_34319__$1){
var statearr_34436_35935 = state_34365__$1;
(statearr_34436_35935[(1)] = (13));

} else {
var statearr_34437_35936 = state_34365__$1;
(statearr_34437_35936[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (9))){
var inst_34341 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34439_35937 = state_34365__$1;
(statearr_34439_35937[(2)] = inst_34341);

(statearr_34439_35937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (5))){
var inst_34298 = cljs.core.deref(mults);
var inst_34299 = cljs.core.vals(inst_34298);
var inst_34300 = cljs.core.seq(inst_34299);
var inst_34301 = inst_34300;
var inst_34302 = null;
var inst_34303 = (0);
var inst_34304 = (0);
var state_34365__$1 = (function (){var statearr_34440 = state_34365;
(statearr_34440[(12)] = inst_34301);

(statearr_34440[(13)] = inst_34302);

(statearr_34440[(15)] = inst_34303);

(statearr_34440[(16)] = inst_34304);

return statearr_34440;
})();
var statearr_34441_35938 = state_34365__$1;
(statearr_34441_35938[(2)] = null);

(statearr_34441_35938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (14))){
var state_34365__$1 = state_34365;
var statearr_34447_35939 = state_34365__$1;
(statearr_34447_35939[(2)] = null);

(statearr_34447_35939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (16))){
var inst_34319 = (state_34365[(10)]);
var inst_34323 = cljs.core.chunk_first(inst_34319);
var inst_34324 = cljs.core.chunk_rest(inst_34319);
var inst_34325 = cljs.core.count(inst_34323);
var inst_34301 = inst_34324;
var inst_34302 = inst_34323;
var inst_34303 = inst_34325;
var inst_34304 = (0);
var state_34365__$1 = (function (){var statearr_34449 = state_34365;
(statearr_34449[(12)] = inst_34301);

(statearr_34449[(13)] = inst_34302);

(statearr_34449[(15)] = inst_34303);

(statearr_34449[(16)] = inst_34304);

return statearr_34449;
})();
var statearr_34450_35941 = state_34365__$1;
(statearr_34450_35941[(2)] = null);

(statearr_34450_35941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (10))){
var inst_34301 = (state_34365[(12)]);
var inst_34302 = (state_34365[(13)]);
var inst_34303 = (state_34365[(15)]);
var inst_34304 = (state_34365[(16)]);
var inst_34312 = cljs.core._nth(inst_34302,inst_34304);
var inst_34313 = cljs.core.async.muxch_STAR_(inst_34312);
var inst_34314 = cljs.core.async.close_BANG_(inst_34313);
var inst_34315 = (inst_34304 + (1));
var tmp34442 = inst_34301;
var tmp34443 = inst_34302;
var tmp34444 = inst_34303;
var inst_34301__$1 = tmp34442;
var inst_34302__$1 = tmp34443;
var inst_34303__$1 = tmp34444;
var inst_34304__$1 = inst_34315;
var state_34365__$1 = (function (){var statearr_34455 = state_34365;
(statearr_34455[(12)] = inst_34301__$1);

(statearr_34455[(13)] = inst_34302__$1);

(statearr_34455[(17)] = inst_34314);

(statearr_34455[(15)] = inst_34303__$1);

(statearr_34455[(16)] = inst_34304__$1);

return statearr_34455;
})();
var statearr_34456_35943 = state_34365__$1;
(statearr_34456_35943[(2)] = null);

(statearr_34456_35943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (18))){
var inst_34334 = (state_34365[(2)]);
var state_34365__$1 = state_34365;
var statearr_34457_35944 = state_34365__$1;
(statearr_34457_35944[(2)] = inst_34334);

(statearr_34457_35944[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34366 === (8))){
var inst_34303 = (state_34365[(15)]);
var inst_34304 = (state_34365[(16)]);
var inst_34307 = (inst_34304 < inst_34303);
var inst_34309 = inst_34307;
var state_34365__$1 = state_34365;
if(cljs.core.truth_(inst_34309)){
var statearr_34461_35945 = state_34365__$1;
(statearr_34461_35945[(1)] = (10));

} else {
var statearr_34464_35946 = state_34365__$1;
(statearr_34464_35946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_34478 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34478[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_34478[(1)] = (1));

return statearr_34478;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_34365){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34365);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34479){var ex__32813__auto__ = e34479;
var statearr_34480_35952 = state_34365;
(statearr_34480_35952[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34365[(4)]))){
var statearr_34482_35953 = state_34365;
(statearr_34482_35953[(1)] = cljs.core.first((state_34365[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35954 = state_34365;
state_34365 = G__35954;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_34365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_34365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34486 = f__33108__auto__();
(statearr_34486[(6)] = c__33107__auto___35889);

return statearr_34486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34488 = arguments.length;
switch (G__34488) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34505 = arguments.length;
switch (G__34505) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34516 = arguments.length;
switch (G__34516) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33107__auto___35972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34577){
var state_val_34578 = (state_34577[(1)]);
if((state_val_34578 === (7))){
var state_34577__$1 = state_34577;
var statearr_34583_35973 = state_34577__$1;
(statearr_34583_35973[(2)] = null);

(statearr_34583_35973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (1))){
var state_34577__$1 = state_34577;
var statearr_34584_35974 = state_34577__$1;
(statearr_34584_35974[(2)] = null);

(statearr_34584_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (4))){
var inst_34533 = (state_34577[(7)]);
var inst_34532 = (state_34577[(8)]);
var inst_34535 = (inst_34533 < inst_34532);
var state_34577__$1 = state_34577;
if(cljs.core.truth_(inst_34535)){
var statearr_34585_35975 = state_34577__$1;
(statearr_34585_35975[(1)] = (6));

} else {
var statearr_34586_35976 = state_34577__$1;
(statearr_34586_35976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (15))){
var inst_34562 = (state_34577[(9)]);
var inst_34567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34562);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34577__$1,(17),out,inst_34567);
} else {
if((state_val_34578 === (13))){
var inst_34562 = (state_34577[(9)]);
var inst_34562__$1 = (state_34577[(2)]);
var inst_34563 = cljs.core.some(cljs.core.nil_QMARK_,inst_34562__$1);
var state_34577__$1 = (function (){var statearr_34587 = state_34577;
(statearr_34587[(9)] = inst_34562__$1);

return statearr_34587;
})();
if(cljs.core.truth_(inst_34563)){
var statearr_34588_35977 = state_34577__$1;
(statearr_34588_35977[(1)] = (14));

} else {
var statearr_34589_35978 = state_34577__$1;
(statearr_34589_35978[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (6))){
var state_34577__$1 = state_34577;
var statearr_34593_35979 = state_34577__$1;
(statearr_34593_35979[(2)] = null);

(statearr_34593_35979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (17))){
var inst_34569 = (state_34577[(2)]);
var state_34577__$1 = (function (){var statearr_34608 = state_34577;
(statearr_34608[(10)] = inst_34569);

return statearr_34608;
})();
var statearr_34609_35980 = state_34577__$1;
(statearr_34609_35980[(2)] = null);

(statearr_34609_35980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (3))){
var inst_34574 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34577__$1,inst_34574);
} else {
if((state_val_34578 === (12))){
var _ = (function (){var statearr_34610 = state_34577;
(statearr_34610[(4)] = cljs.core.rest((state_34577[(4)])));

return statearr_34610;
})();
var state_34577__$1 = state_34577;
var ex34604 = (state_34577__$1[(2)]);
var statearr_34615_35981 = state_34577__$1;
(statearr_34615_35981[(5)] = ex34604);


if((ex34604 instanceof Object)){
var statearr_34617_35982 = state_34577__$1;
(statearr_34617_35982[(1)] = (11));

(statearr_34617_35982[(5)] = null);

} else {
throw ex34604;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (2))){
var inst_34530 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34532 = cnt;
var inst_34533 = (0);
var state_34577__$1 = (function (){var statearr_34622 = state_34577;
(statearr_34622[(7)] = inst_34533);

(statearr_34622[(8)] = inst_34532);

(statearr_34622[(11)] = inst_34530);

return statearr_34622;
})();
var statearr_34623_35987 = state_34577__$1;
(statearr_34623_35987[(2)] = null);

(statearr_34623_35987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (11))){
var inst_34541 = (state_34577[(2)]);
var inst_34542 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34577__$1 = (function (){var statearr_34624 = state_34577;
(statearr_34624[(12)] = inst_34541);

return statearr_34624;
})();
var statearr_34625_35988 = state_34577__$1;
(statearr_34625_35988[(2)] = inst_34542);

(statearr_34625_35988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (9))){
var inst_34533 = (state_34577[(7)]);
var _ = (function (){var statearr_34630 = state_34577;
(statearr_34630[(4)] = cljs.core.cons((12),(state_34577[(4)])));

return statearr_34630;
})();
var inst_34548 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34533) : chs__$1.call(null,inst_34533));
var inst_34549 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34533) : done.call(null,inst_34533));
var inst_34550 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34548,inst_34549);
var ___$1 = (function (){var statearr_34634 = state_34577;
(statearr_34634[(4)] = cljs.core.rest((state_34577[(4)])));

return statearr_34634;
})();
var state_34577__$1 = state_34577;
var statearr_34635_35989 = state_34577__$1;
(statearr_34635_35989[(2)] = inst_34550);

(statearr_34635_35989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (5))){
var inst_34560 = (state_34577[(2)]);
var state_34577__$1 = (function (){var statearr_34637 = state_34577;
(statearr_34637[(13)] = inst_34560);

return statearr_34637;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34577__$1,(13),dchan);
} else {
if((state_val_34578 === (14))){
var inst_34565 = cljs.core.async.close_BANG_(out);
var state_34577__$1 = state_34577;
var statearr_34638_35991 = state_34577__$1;
(statearr_34638_35991[(2)] = inst_34565);

(statearr_34638_35991[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (16))){
var inst_34572 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34642_35995 = state_34577__$1;
(statearr_34642_35995[(2)] = inst_34572);

(statearr_34642_35995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (10))){
var inst_34533 = (state_34577[(7)]);
var inst_34553 = (state_34577[(2)]);
var inst_34554 = (inst_34533 + (1));
var inst_34533__$1 = inst_34554;
var state_34577__$1 = (function (){var statearr_34643 = state_34577;
(statearr_34643[(14)] = inst_34553);

(statearr_34643[(7)] = inst_34533__$1);

return statearr_34643;
})();
var statearr_34644_36000 = state_34577__$1;
(statearr_34644_36000[(2)] = null);

(statearr_34644_36000[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34578 === (8))){
var inst_34558 = (state_34577[(2)]);
var state_34577__$1 = state_34577;
var statearr_34645_36001 = state_34577__$1;
(statearr_34645_36001[(2)] = inst_34558);

(statearr_34645_36001[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_34647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34647[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_34647[(1)] = (1));

return statearr_34647;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_34577){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34577);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34648){var ex__32813__auto__ = e34648;
var statearr_34649_36009 = state_34577;
(statearr_34649_36009[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34577[(4)]))){
var statearr_34650_36010 = state_34577;
(statearr_34650_36010[(1)] = cljs.core.first((state_34577[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36011 = state_34577;
state_34577 = G__36011;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_34577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_34577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34655 = f__33108__auto__();
(statearr_34655[(6)] = c__33107__auto___35972);

return statearr_34655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34662 = arguments.length;
switch (G__34662) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34703){
var state_val_34704 = (state_34703[(1)]);
if((state_val_34704 === (7))){
var inst_34681 = (state_34703[(7)]);
var inst_34682 = (state_34703[(8)]);
var inst_34681__$1 = (state_34703[(2)]);
var inst_34682__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34681__$1,(0),null);
var inst_34683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34681__$1,(1),null);
var inst_34684 = (inst_34682__$1 == null);
var state_34703__$1 = (function (){var statearr_34709 = state_34703;
(statearr_34709[(9)] = inst_34683);

(statearr_34709[(7)] = inst_34681__$1);

(statearr_34709[(8)] = inst_34682__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34684)){
var statearr_34714_36014 = state_34703__$1;
(statearr_34714_36014[(1)] = (8));

} else {
var statearr_34715_36015 = state_34703__$1;
(statearr_34715_36015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (1))){
var inst_34664 = cljs.core.vec(chs);
var inst_34666 = inst_34664;
var state_34703__$1 = (function (){var statearr_34721 = state_34703;
(statearr_34721[(10)] = inst_34666);

return statearr_34721;
})();
var statearr_34722_36016 = state_34703__$1;
(statearr_34722_36016[(2)] = null);

(statearr_34722_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (4))){
var inst_34666 = (state_34703[(10)]);
var state_34703__$1 = state_34703;
return cljs.core.async.ioc_alts_BANG_(state_34703__$1,(7),inst_34666);
} else {
if((state_val_34704 === (6))){
var inst_34699 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34731_36020 = state_34703__$1;
(statearr_34731_36020[(2)] = inst_34699);

(statearr_34731_36020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (3))){
var inst_34701 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34703__$1,inst_34701);
} else {
if((state_val_34704 === (2))){
var inst_34666 = (state_34703[(10)]);
var inst_34671 = cljs.core.count(inst_34666);
var inst_34672 = (inst_34671 > (0));
var state_34703__$1 = state_34703;
if(cljs.core.truth_(inst_34672)){
var statearr_34737_36021 = state_34703__$1;
(statearr_34737_36021[(1)] = (4));

} else {
var statearr_34738_36022 = state_34703__$1;
(statearr_34738_36022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (11))){
var inst_34666 = (state_34703[(10)]);
var inst_34692 = (state_34703[(2)]);
var tmp34735 = inst_34666;
var inst_34666__$1 = tmp34735;
var state_34703__$1 = (function (){var statearr_34739 = state_34703;
(statearr_34739[(10)] = inst_34666__$1);

(statearr_34739[(11)] = inst_34692);

return statearr_34739;
})();
var statearr_34740_36023 = state_34703__$1;
(statearr_34740_36023[(2)] = null);

(statearr_34740_36023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (9))){
var inst_34682 = (state_34703[(8)]);
var state_34703__$1 = state_34703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34703__$1,(11),out,inst_34682);
} else {
if((state_val_34704 === (5))){
var inst_34697 = cljs.core.async.close_BANG_(out);
var state_34703__$1 = state_34703;
var statearr_34745_36024 = state_34703__$1;
(statearr_34745_36024[(2)] = inst_34697);

(statearr_34745_36024[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (10))){
var inst_34695 = (state_34703[(2)]);
var state_34703__$1 = state_34703;
var statearr_34749_36029 = state_34703__$1;
(statearr_34749_36029[(2)] = inst_34695);

(statearr_34749_36029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34704 === (8))){
var inst_34683 = (state_34703[(9)]);
var inst_34681 = (state_34703[(7)]);
var inst_34666 = (state_34703[(10)]);
var inst_34682 = (state_34703[(8)]);
var inst_34687 = (function (){var cs = inst_34666;
var vec__34677 = inst_34681;
var v = inst_34682;
var c = inst_34683;
return (function (p1__34659_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34659_SHARP_);
});
})();
var inst_34688 = cljs.core.filterv(inst_34687,inst_34666);
var inst_34666__$1 = inst_34688;
var state_34703__$1 = (function (){var statearr_34751 = state_34703;
(statearr_34751[(10)] = inst_34666__$1);

return statearr_34751;
})();
var statearr_34752_36033 = state_34703__$1;
(statearr_34752_36033[(2)] = null);

(statearr_34752_36033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_34753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34753[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_34753[(1)] = (1));

return statearr_34753;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_34703){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34703);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34755){var ex__32813__auto__ = e34755;
var statearr_34756_36037 = state_34703;
(statearr_34756_36037[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34703[(4)]))){
var statearr_34757_36038 = state_34703;
(statearr_34757_36038[(1)] = cljs.core.first((state_34703[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36039 = state_34703;
state_34703 = G__36039;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_34703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_34703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34758 = f__33108__auto__();
(statearr_34758[(6)] = c__33107__auto___36013);

return statearr_34758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34772 = arguments.length;
switch (G__34772) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34804){
var state_val_34805 = (state_34804[(1)]);
if((state_val_34805 === (7))){
var inst_34786 = (state_34804[(7)]);
var inst_34786__$1 = (state_34804[(2)]);
var inst_34787 = (inst_34786__$1 == null);
var inst_34788 = cljs.core.not(inst_34787);
var state_34804__$1 = (function (){var statearr_34806 = state_34804;
(statearr_34806[(7)] = inst_34786__$1);

return statearr_34806;
})();
if(inst_34788){
var statearr_34807_36052 = state_34804__$1;
(statearr_34807_36052[(1)] = (8));

} else {
var statearr_34812_36053 = state_34804__$1;
(statearr_34812_36053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (1))){
var inst_34781 = (0);
var state_34804__$1 = (function (){var statearr_34813 = state_34804;
(statearr_34813[(8)] = inst_34781);

return statearr_34813;
})();
var statearr_34814_36054 = state_34804__$1;
(statearr_34814_36054[(2)] = null);

(statearr_34814_36054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (4))){
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34804__$1,(7),ch);
} else {
if((state_val_34805 === (6))){
var inst_34799 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34815_36055 = state_34804__$1;
(statearr_34815_36055[(2)] = inst_34799);

(statearr_34815_36055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (3))){
var inst_34801 = (state_34804[(2)]);
var inst_34802 = cljs.core.async.close_BANG_(out);
var state_34804__$1 = (function (){var statearr_34817 = state_34804;
(statearr_34817[(9)] = inst_34801);

return statearr_34817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34804__$1,inst_34802);
} else {
if((state_val_34805 === (2))){
var inst_34781 = (state_34804[(8)]);
var inst_34783 = (inst_34781 < n);
var state_34804__$1 = state_34804;
if(cljs.core.truth_(inst_34783)){
var statearr_34818_36056 = state_34804__$1;
(statearr_34818_36056[(1)] = (4));

} else {
var statearr_34819_36057 = state_34804__$1;
(statearr_34819_36057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (11))){
var inst_34781 = (state_34804[(8)]);
var inst_34791 = (state_34804[(2)]);
var inst_34792 = (inst_34781 + (1));
var inst_34781__$1 = inst_34792;
var state_34804__$1 = (function (){var statearr_34820 = state_34804;
(statearr_34820[(8)] = inst_34781__$1);

(statearr_34820[(10)] = inst_34791);

return statearr_34820;
})();
var statearr_34821_36058 = state_34804__$1;
(statearr_34821_36058[(2)] = null);

(statearr_34821_36058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (9))){
var state_34804__$1 = state_34804;
var statearr_34822_36060 = state_34804__$1;
(statearr_34822_36060[(2)] = null);

(statearr_34822_36060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (5))){
var state_34804__$1 = state_34804;
var statearr_34823_36062 = state_34804__$1;
(statearr_34823_36062[(2)] = null);

(statearr_34823_36062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (10))){
var inst_34796 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34824_36063 = state_34804__$1;
(statearr_34824_36063[(2)] = inst_34796);

(statearr_34824_36063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (8))){
var inst_34786 = (state_34804[(7)]);
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34804__$1,(11),out,inst_34786);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_34826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34826[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_34826[(1)] = (1));

return statearr_34826;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_34804){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34804);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34828){var ex__32813__auto__ = e34828;
var statearr_34829_36064 = state_34804;
(statearr_34829_36064[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34804[(4)]))){
var statearr_34830_36065 = state_34804;
(statearr_34830_36065[(1)] = cljs.core.first((state_34804[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36066 = state_34804;
state_34804 = G__36066;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_34804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_34804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34831 = f__33108__auto__();
(statearr_34831[(6)] = c__33107__auto___36048);

return statearr_34831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34833 = (function (f,ch,meta34834){
this.f = f;
this.ch = ch;
this.meta34834 = meta34834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34835,meta34834__$1){
var self__ = this;
var _34835__$1 = this;
return (new cljs.core.async.t_cljs$core$async34833(self__.f,self__.ch,meta34834__$1));
}));

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34835){
var self__ = this;
var _34835__$1 = this;
return self__.meta34834;
}));

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34836 = (function (f,ch,meta34834,_,fn1,meta34837){
this.f = f;
this.ch = ch;
this.meta34834 = meta34834;
this._ = _;
this.fn1 = fn1;
this.meta34837 = meta34837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34838,meta34837__$1){
var self__ = this;
var _34838__$1 = this;
return (new cljs.core.async.t_cljs$core$async34836(self__.f,self__.ch,self__.meta34834,self__._,self__.fn1,meta34837__$1));
}));

(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34838){
var self__ = this;
var _34838__$1 = this;
return self__.meta34837;
}));

(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34832_SHARP_){
var G__34839 = (((p1__34832_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34832_SHARP_) : self__.f.call(null,p1__34832_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34839) : f1.call(null,G__34839));
});
}));

(cljs.core.async.t_cljs$core$async34836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34834","meta34834",-734733942,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34833","cljs.core.async/t_cljs$core$async34833",-1761213079,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34837","meta34837",466043184,null)], null);
}));

(cljs.core.async.t_cljs$core$async34836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34836");

(cljs.core.async.t_cljs$core$async34836.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34836.
 */
cljs.core.async.__GT_t_cljs$core$async34836 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34836(f__$1,ch__$1,meta34834__$1,___$2,fn1__$1,meta34837){
return (new cljs.core.async.t_cljs$core$async34836(f__$1,ch__$1,meta34834__$1,___$2,fn1__$1,meta34837));
});

}

return (new cljs.core.async.t_cljs$core$async34836(self__.f,self__.ch,self__.meta34834,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34840 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34840) : self__.f.call(null,G__34840));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34834","meta34834",-734733942,null)], null);
}));

(cljs.core.async.t_cljs$core$async34833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34833");

(cljs.core.async.t_cljs$core$async34833.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34833.
 */
cljs.core.async.__GT_t_cljs$core$async34833 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34833(f__$1,ch__$1,meta34834){
return (new cljs.core.async.t_cljs$core$async34833(f__$1,ch__$1,meta34834));
});

}

return (new cljs.core.async.t_cljs$core$async34833(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34843 = (function (f,ch,meta34844){
this.f = f;
this.ch = ch;
this.meta34844 = meta34844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34845,meta34844__$1){
var self__ = this;
var _34845__$1 = this;
return (new cljs.core.async.t_cljs$core$async34843(self__.f,self__.ch,meta34844__$1));
}));

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34845){
var self__ = this;
var _34845__$1 = this;
return self__.meta34844;
}));

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34843.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34844","meta34844",-1191354669,null)], null);
}));

(cljs.core.async.t_cljs$core$async34843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34843");

(cljs.core.async.t_cljs$core$async34843.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34843.
 */
cljs.core.async.__GT_t_cljs$core$async34843 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34843(f__$1,ch__$1,meta34844){
return (new cljs.core.async.t_cljs$core$async34843(f__$1,ch__$1,meta34844));
});

}

return (new cljs.core.async.t_cljs$core$async34843(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34848 = (function (p,ch,meta34849){
this.p = p;
this.ch = ch;
this.meta34849 = meta34849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34850,meta34849__$1){
var self__ = this;
var _34850__$1 = this;
return (new cljs.core.async.t_cljs$core$async34848(self__.p,self__.ch,meta34849__$1));
}));

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34850){
var self__ = this;
var _34850__$1 = this;
return self__.meta34849;
}));

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34848.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34849","meta34849",979392243,null)], null);
}));

(cljs.core.async.t_cljs$core$async34848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34848");

(cljs.core.async.t_cljs$core$async34848.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34848.
 */
cljs.core.async.__GT_t_cljs$core$async34848 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34848(p__$1,ch__$1,meta34849){
return (new cljs.core.async.t_cljs$core$async34848(p__$1,ch__$1,meta34849));
});

}

return (new cljs.core.async.t_cljs$core$async34848(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34854 = arguments.length;
switch (G__34854) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_34875){
var state_val_34876 = (state_34875[(1)]);
if((state_val_34876 === (7))){
var inst_34871 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
var statearr_34877_36086 = state_34875__$1;
(statearr_34877_36086[(2)] = inst_34871);

(statearr_34877_36086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (1))){
var state_34875__$1 = state_34875;
var statearr_34878_36089 = state_34875__$1;
(statearr_34878_36089[(2)] = null);

(statearr_34878_36089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (4))){
var inst_34857 = (state_34875[(7)]);
var inst_34857__$1 = (state_34875[(2)]);
var inst_34858 = (inst_34857__$1 == null);
var state_34875__$1 = (function (){var statearr_34879 = state_34875;
(statearr_34879[(7)] = inst_34857__$1);

return statearr_34879;
})();
if(cljs.core.truth_(inst_34858)){
var statearr_34880_36093 = state_34875__$1;
(statearr_34880_36093[(1)] = (5));

} else {
var statearr_34881_36094 = state_34875__$1;
(statearr_34881_36094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (6))){
var inst_34857 = (state_34875[(7)]);
var inst_34862 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34857) : p.call(null,inst_34857));
var state_34875__$1 = state_34875;
if(cljs.core.truth_(inst_34862)){
var statearr_34882_36095 = state_34875__$1;
(statearr_34882_36095[(1)] = (8));

} else {
var statearr_34883_36096 = state_34875__$1;
(statearr_34883_36096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (3))){
var inst_34873 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34875__$1,inst_34873);
} else {
if((state_val_34876 === (2))){
var state_34875__$1 = state_34875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34875__$1,(4),ch);
} else {
if((state_val_34876 === (11))){
var inst_34865 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
var statearr_34884_36097 = state_34875__$1;
(statearr_34884_36097[(2)] = inst_34865);

(statearr_34884_36097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (9))){
var state_34875__$1 = state_34875;
var statearr_34885_36098 = state_34875__$1;
(statearr_34885_36098[(2)] = null);

(statearr_34885_36098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (5))){
var inst_34860 = cljs.core.async.close_BANG_(out);
var state_34875__$1 = state_34875;
var statearr_34886_36099 = state_34875__$1;
(statearr_34886_36099[(2)] = inst_34860);

(statearr_34886_36099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (10))){
var inst_34868 = (state_34875[(2)]);
var state_34875__$1 = (function (){var statearr_34893 = state_34875;
(statearr_34893[(8)] = inst_34868);

return statearr_34893;
})();
var statearr_34895_36104 = state_34875__$1;
(statearr_34895_36104[(2)] = null);

(statearr_34895_36104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (8))){
var inst_34857 = (state_34875[(7)]);
var state_34875__$1 = state_34875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34875__$1,(11),out,inst_34857);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_34897 = [null,null,null,null,null,null,null,null,null];
(statearr_34897[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_34897[(1)] = (1));

return statearr_34897;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_34875){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_34875);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e34899){var ex__32813__auto__ = e34899;
var statearr_34900_36109 = state_34875;
(statearr_34900_36109[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_34875[(4)]))){
var statearr_34901_36110 = state_34875;
(statearr_34901_36110[(1)] = cljs.core.first((state_34875[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_34875;
state_34875 = G__36111;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_34875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_34875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_34902 = f__33108__auto__();
(statearr_34902[(6)] = c__33107__auto___36085);

return statearr_34902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34904 = arguments.length;
switch (G__34904) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33107__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_35003){
var state_val_35004 = (state_35003[(1)]);
if((state_val_35004 === (7))){
var inst_34999 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35005_36113 = state_35003__$1;
(statearr_35005_36113[(2)] = inst_34999);

(statearr_35005_36113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (20))){
var inst_34950 = (state_35003[(7)]);
var inst_34967 = (state_35003[(2)]);
var inst_34968 = cljs.core.next(inst_34950);
var inst_34923 = inst_34968;
var inst_34924 = null;
var inst_34925 = (0);
var inst_34926 = (0);
var state_35003__$1 = (function (){var statearr_35006 = state_35003;
(statearr_35006[(8)] = inst_34923);

(statearr_35006[(9)] = inst_34925);

(statearr_35006[(10)] = inst_34924);

(statearr_35006[(11)] = inst_34926);

(statearr_35006[(12)] = inst_34967);

return statearr_35006;
})();
var statearr_35007_36114 = state_35003__$1;
(statearr_35007_36114[(2)] = null);

(statearr_35007_36114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (1))){
var state_35003__$1 = state_35003;
var statearr_35008_36115 = state_35003__$1;
(statearr_35008_36115[(2)] = null);

(statearr_35008_36115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (4))){
var inst_34912 = (state_35003[(13)]);
var inst_34912__$1 = (state_35003[(2)]);
var inst_34913 = (inst_34912__$1 == null);
var state_35003__$1 = (function (){var statearr_35009 = state_35003;
(statearr_35009[(13)] = inst_34912__$1);

return statearr_35009;
})();
if(cljs.core.truth_(inst_34913)){
var statearr_35010_36116 = state_35003__$1;
(statearr_35010_36116[(1)] = (5));

} else {
var statearr_35011_36117 = state_35003__$1;
(statearr_35011_36117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (15))){
var state_35003__$1 = state_35003;
var statearr_35015_36118 = state_35003__$1;
(statearr_35015_36118[(2)] = null);

(statearr_35015_36118[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (21))){
var state_35003__$1 = state_35003;
var statearr_35016_36119 = state_35003__$1;
(statearr_35016_36119[(2)] = null);

(statearr_35016_36119[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (13))){
var inst_34923 = (state_35003[(8)]);
var inst_34925 = (state_35003[(9)]);
var inst_34924 = (state_35003[(10)]);
var inst_34926 = (state_35003[(11)]);
var inst_34933 = (state_35003[(2)]);
var inst_34947 = (inst_34926 + (1));
var tmp35012 = inst_34923;
var tmp35013 = inst_34925;
var tmp35014 = inst_34924;
var inst_34923__$1 = tmp35012;
var inst_34924__$1 = tmp35014;
var inst_34925__$1 = tmp35013;
var inst_34926__$1 = inst_34947;
var state_35003__$1 = (function (){var statearr_35021 = state_35003;
(statearr_35021[(8)] = inst_34923__$1);

(statearr_35021[(9)] = inst_34925__$1);

(statearr_35021[(10)] = inst_34924__$1);

(statearr_35021[(14)] = inst_34933);

(statearr_35021[(11)] = inst_34926__$1);

return statearr_35021;
})();
var statearr_35022_36121 = state_35003__$1;
(statearr_35022_36121[(2)] = null);

(statearr_35022_36121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (22))){
var state_35003__$1 = state_35003;
var statearr_35023_36122 = state_35003__$1;
(statearr_35023_36122[(2)] = null);

(statearr_35023_36122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (6))){
var inst_34912 = (state_35003[(13)]);
var inst_34921 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34912) : f.call(null,inst_34912));
var inst_34922 = cljs.core.seq(inst_34921);
var inst_34923 = inst_34922;
var inst_34924 = null;
var inst_34925 = (0);
var inst_34926 = (0);
var state_35003__$1 = (function (){var statearr_35024 = state_35003;
(statearr_35024[(8)] = inst_34923);

(statearr_35024[(9)] = inst_34925);

(statearr_35024[(10)] = inst_34924);

(statearr_35024[(11)] = inst_34926);

return statearr_35024;
})();
var statearr_35025_36126 = state_35003__$1;
(statearr_35025_36126[(2)] = null);

(statearr_35025_36126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (17))){
var inst_34950 = (state_35003[(7)]);
var inst_34960 = cljs.core.chunk_first(inst_34950);
var inst_34961 = cljs.core.chunk_rest(inst_34950);
var inst_34962 = cljs.core.count(inst_34960);
var inst_34923 = inst_34961;
var inst_34924 = inst_34960;
var inst_34925 = inst_34962;
var inst_34926 = (0);
var state_35003__$1 = (function (){var statearr_35026 = state_35003;
(statearr_35026[(8)] = inst_34923);

(statearr_35026[(9)] = inst_34925);

(statearr_35026[(10)] = inst_34924);

(statearr_35026[(11)] = inst_34926);

return statearr_35026;
})();
var statearr_35027_36127 = state_35003__$1;
(statearr_35027_36127[(2)] = null);

(statearr_35027_36127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (3))){
var inst_35001 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35003__$1,inst_35001);
} else {
if((state_val_35004 === (12))){
var inst_34976 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35028_36130 = state_35003__$1;
(statearr_35028_36130[(2)] = inst_34976);

(statearr_35028_36130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (2))){
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35003__$1,(4),in$);
} else {
if((state_val_35004 === (23))){
var inst_34984 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35033_36131 = state_35003__$1;
(statearr_35033_36131[(2)] = inst_34984);

(statearr_35033_36131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (19))){
var inst_34971 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35034_36132 = state_35003__$1;
(statearr_35034_36132[(2)] = inst_34971);

(statearr_35034_36132[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (11))){
var inst_34950 = (state_35003[(7)]);
var inst_34923 = (state_35003[(8)]);
var inst_34950__$1 = cljs.core.seq(inst_34923);
var state_35003__$1 = (function (){var statearr_35035 = state_35003;
(statearr_35035[(7)] = inst_34950__$1);

return statearr_35035;
})();
if(inst_34950__$1){
var statearr_35036_36133 = state_35003__$1;
(statearr_35036_36133[(1)] = (14));

} else {
var statearr_35039_36134 = state_35003__$1;
(statearr_35039_36134[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (9))){
var inst_34978 = (state_35003[(2)]);
var inst_34979 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35003__$1 = (function (){var statearr_35040 = state_35003;
(statearr_35040[(15)] = inst_34978);

return statearr_35040;
})();
if(cljs.core.truth_(inst_34979)){
var statearr_35041_36135 = state_35003__$1;
(statearr_35041_36135[(1)] = (21));

} else {
var statearr_35042_36136 = state_35003__$1;
(statearr_35042_36136[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (5))){
var inst_34915 = cljs.core.async.close_BANG_(out);
var state_35003__$1 = state_35003;
var statearr_35044_36137 = state_35003__$1;
(statearr_35044_36137[(2)] = inst_34915);

(statearr_35044_36137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (14))){
var inst_34950 = (state_35003[(7)]);
var inst_34955 = cljs.core.chunked_seq_QMARK_(inst_34950);
var state_35003__$1 = state_35003;
if(inst_34955){
var statearr_35045_36138 = state_35003__$1;
(statearr_35045_36138[(1)] = (17));

} else {
var statearr_35046_36139 = state_35003__$1;
(statearr_35046_36139[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (16))){
var inst_34974 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35047_36140 = state_35003__$1;
(statearr_35047_36140[(2)] = inst_34974);

(statearr_35047_36140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (10))){
var inst_34924 = (state_35003[(10)]);
var inst_34926 = (state_35003[(11)]);
var inst_34931 = cljs.core._nth(inst_34924,inst_34926);
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35003__$1,(13),out,inst_34931);
} else {
if((state_val_35004 === (18))){
var inst_34950 = (state_35003[(7)]);
var inst_34965 = cljs.core.first(inst_34950);
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35003__$1,(20),out,inst_34965);
} else {
if((state_val_35004 === (8))){
var inst_34925 = (state_35003[(9)]);
var inst_34926 = (state_35003[(11)]);
var inst_34928 = (inst_34926 < inst_34925);
var inst_34929 = inst_34928;
var state_35003__$1 = state_35003;
if(cljs.core.truth_(inst_34929)){
var statearr_35049_36141 = state_35003__$1;
(statearr_35049_36141[(1)] = (10));

} else {
var statearr_35050_36142 = state_35003__$1;
(statearr_35050_36142[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____0 = (function (){
var statearr_35051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35051[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__);

(statearr_35051[(1)] = (1));

return statearr_35051;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____1 = (function (state_35003){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_35003);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e35052){var ex__32813__auto__ = e35052;
var statearr_35053_36143 = state_35003;
(statearr_35053_36143[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_35003[(4)]))){
var statearr_35054_36144 = state_35003;
(statearr_35054_36144[(1)] = cljs.core.first((state_35003[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36145 = state_35003;
state_35003 = G__36145;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__ = function(state_35003){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____1.call(this,state_35003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32810__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_35055 = f__33108__auto__();
(statearr_35055[(6)] = c__33107__auto__);

return statearr_35055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

return c__33107__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35057 = arguments.length;
switch (G__35057) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35061 = arguments.length;
switch (G__35061) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35068 = arguments.length;
switch (G__35068) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_35092){
var state_val_35093 = (state_35092[(1)]);
if((state_val_35093 === (7))){
var inst_35087 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
var statearr_35094_36151 = state_35092__$1;
(statearr_35094_36151[(2)] = inst_35087);

(statearr_35094_36151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (1))){
var inst_35069 = null;
var state_35092__$1 = (function (){var statearr_35095 = state_35092;
(statearr_35095[(7)] = inst_35069);

return statearr_35095;
})();
var statearr_35096_36152 = state_35092__$1;
(statearr_35096_36152[(2)] = null);

(statearr_35096_36152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (4))){
var inst_35072 = (state_35092[(8)]);
var inst_35072__$1 = (state_35092[(2)]);
var inst_35073 = (inst_35072__$1 == null);
var inst_35074 = cljs.core.not(inst_35073);
var state_35092__$1 = (function (){var statearr_35097 = state_35092;
(statearr_35097[(8)] = inst_35072__$1);

return statearr_35097;
})();
if(inst_35074){
var statearr_35098_36153 = state_35092__$1;
(statearr_35098_36153[(1)] = (5));

} else {
var statearr_35099_36154 = state_35092__$1;
(statearr_35099_36154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (6))){
var state_35092__$1 = state_35092;
var statearr_35100_36155 = state_35092__$1;
(statearr_35100_36155[(2)] = null);

(statearr_35100_36155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (3))){
var inst_35089 = (state_35092[(2)]);
var inst_35090 = cljs.core.async.close_BANG_(out);
var state_35092__$1 = (function (){var statearr_35101 = state_35092;
(statearr_35101[(9)] = inst_35089);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35092__$1,inst_35090);
} else {
if((state_val_35093 === (2))){
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35092__$1,(4),ch);
} else {
if((state_val_35093 === (11))){
var inst_35072 = (state_35092[(8)]);
var inst_35081 = (state_35092[(2)]);
var inst_35069 = inst_35072;
var state_35092__$1 = (function (){var statearr_35107 = state_35092;
(statearr_35107[(10)] = inst_35081);

(statearr_35107[(7)] = inst_35069);

return statearr_35107;
})();
var statearr_35108_36160 = state_35092__$1;
(statearr_35108_36160[(2)] = null);

(statearr_35108_36160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (9))){
var inst_35072 = (state_35092[(8)]);
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35092__$1,(11),out,inst_35072);
} else {
if((state_val_35093 === (5))){
var inst_35072 = (state_35092[(8)]);
var inst_35069 = (state_35092[(7)]);
var inst_35076 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35072,inst_35069);
var state_35092__$1 = state_35092;
if(inst_35076){
var statearr_35110_36162 = state_35092__$1;
(statearr_35110_36162[(1)] = (8));

} else {
var statearr_35111_36163 = state_35092__$1;
(statearr_35111_36163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (10))){
var inst_35084 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
var statearr_35113_36164 = state_35092__$1;
(statearr_35113_36164[(2)] = inst_35084);

(statearr_35113_36164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (8))){
var inst_35069 = (state_35092[(7)]);
var tmp35109 = inst_35069;
var inst_35069__$1 = tmp35109;
var state_35092__$1 = (function (){var statearr_35115 = state_35092;
(statearr_35115[(7)] = inst_35069__$1);

return statearr_35115;
})();
var statearr_35116_36165 = state_35092__$1;
(statearr_35116_36165[(2)] = null);

(statearr_35116_36165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_35117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35117[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_35117[(1)] = (1));

return statearr_35117;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_35092){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_35092);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e35118){var ex__32813__auto__ = e35118;
var statearr_35119_36166 = state_35092;
(statearr_35119_36166[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_35092[(4)]))){
var statearr_35121_36167 = state_35092;
(statearr_35121_36167[(1)] = cljs.core.first((state_35092[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36168 = state_35092;
state_35092 = G__36168;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_35123 = f__33108__auto__();
(statearr_35123[(6)] = c__33107__auto___36150);

return statearr_35123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35128 = arguments.length;
switch (G__35128) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_35166){
var state_val_35167 = (state_35166[(1)]);
if((state_val_35167 === (7))){
var inst_35162 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35168_36176 = state_35166__$1;
(statearr_35168_36176[(2)] = inst_35162);

(statearr_35168_36176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (1))){
var inst_35129 = (new Array(n));
var inst_35130 = inst_35129;
var inst_35131 = (0);
var state_35166__$1 = (function (){var statearr_35169 = state_35166;
(statearr_35169[(7)] = inst_35131);

(statearr_35169[(8)] = inst_35130);

return statearr_35169;
})();
var statearr_35170_36177 = state_35166__$1;
(statearr_35170_36177[(2)] = null);

(statearr_35170_36177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (4))){
var inst_35134 = (state_35166[(9)]);
var inst_35134__$1 = (state_35166[(2)]);
var inst_35135 = (inst_35134__$1 == null);
var inst_35136 = cljs.core.not(inst_35135);
var state_35166__$1 = (function (){var statearr_35175 = state_35166;
(statearr_35175[(9)] = inst_35134__$1);

return statearr_35175;
})();
if(inst_35136){
var statearr_35176_36178 = state_35166__$1;
(statearr_35176_36178[(1)] = (5));

} else {
var statearr_35177_36179 = state_35166__$1;
(statearr_35177_36179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (15))){
var inst_35156 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35178_36180 = state_35166__$1;
(statearr_35178_36180[(2)] = inst_35156);

(statearr_35178_36180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (13))){
var state_35166__$1 = state_35166;
var statearr_35179_36181 = state_35166__$1;
(statearr_35179_36181[(2)] = null);

(statearr_35179_36181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (6))){
var inst_35131 = (state_35166[(7)]);
var inst_35152 = (inst_35131 > (0));
var state_35166__$1 = state_35166;
if(cljs.core.truth_(inst_35152)){
var statearr_35184_36182 = state_35166__$1;
(statearr_35184_36182[(1)] = (12));

} else {
var statearr_35185_36183 = state_35166__$1;
(statearr_35185_36183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (3))){
var inst_35164 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35166__$1,inst_35164);
} else {
if((state_val_35167 === (12))){
var inst_35130 = (state_35166[(8)]);
var inst_35154 = cljs.core.vec(inst_35130);
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35166__$1,(15),out,inst_35154);
} else {
if((state_val_35167 === (2))){
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35166__$1,(4),ch);
} else {
if((state_val_35167 === (11))){
var inst_35146 = (state_35166[(2)]);
var inst_35147 = (new Array(n));
var inst_35130 = inst_35147;
var inst_35131 = (0);
var state_35166__$1 = (function (){var statearr_35186 = state_35166;
(statearr_35186[(7)] = inst_35131);

(statearr_35186[(8)] = inst_35130);

(statearr_35186[(10)] = inst_35146);

return statearr_35186;
})();
var statearr_35187_36184 = state_35166__$1;
(statearr_35187_36184[(2)] = null);

(statearr_35187_36184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (9))){
var inst_35130 = (state_35166[(8)]);
var inst_35144 = cljs.core.vec(inst_35130);
var state_35166__$1 = state_35166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35166__$1,(11),out,inst_35144);
} else {
if((state_val_35167 === (5))){
var inst_35131 = (state_35166[(7)]);
var inst_35130 = (state_35166[(8)]);
var inst_35139 = (state_35166[(11)]);
var inst_35134 = (state_35166[(9)]);
var inst_35138 = (inst_35130[inst_35131] = inst_35134);
var inst_35139__$1 = (inst_35131 + (1));
var inst_35140 = (inst_35139__$1 < n);
var state_35166__$1 = (function (){var statearr_35188 = state_35166;
(statearr_35188[(11)] = inst_35139__$1);

(statearr_35188[(12)] = inst_35138);

return statearr_35188;
})();
if(cljs.core.truth_(inst_35140)){
var statearr_35189_36185 = state_35166__$1;
(statearr_35189_36185[(1)] = (8));

} else {
var statearr_35190_36186 = state_35166__$1;
(statearr_35190_36186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (14))){
var inst_35159 = (state_35166[(2)]);
var inst_35160 = cljs.core.async.close_BANG_(out);
var state_35166__$1 = (function (){var statearr_35192 = state_35166;
(statearr_35192[(13)] = inst_35159);

return statearr_35192;
})();
var statearr_35193_36187 = state_35166__$1;
(statearr_35193_36187[(2)] = inst_35160);

(statearr_35193_36187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (10))){
var inst_35150 = (state_35166[(2)]);
var state_35166__$1 = state_35166;
var statearr_35194_36188 = state_35166__$1;
(statearr_35194_36188[(2)] = inst_35150);

(statearr_35194_36188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35167 === (8))){
var inst_35130 = (state_35166[(8)]);
var inst_35139 = (state_35166[(11)]);
var tmp35191 = inst_35130;
var inst_35130__$1 = tmp35191;
var inst_35131 = inst_35139;
var state_35166__$1 = (function (){var statearr_35195 = state_35166;
(statearr_35195[(7)] = inst_35131);

(statearr_35195[(8)] = inst_35130__$1);

return statearr_35195;
})();
var statearr_35196_36189 = state_35166__$1;
(statearr_35196_36189[(2)] = null);

(statearr_35196_36189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_35198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35198[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_35198[(1)] = (1));

return statearr_35198;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_35166){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_35166);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e35200){var ex__32813__auto__ = e35200;
var statearr_35201_36190 = state_35166;
(statearr_35201_36190[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_35166[(4)]))){
var statearr_35202_36191 = state_35166;
(statearr_35202_36191[(1)] = cljs.core.first((state_35166[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36192 = state_35166;
state_35166 = G__36192;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_35166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_35166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_35203 = f__33108__auto__();
(statearr_35203[(6)] = c__33107__auto___36171);

return statearr_35203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35208 = arguments.length;
switch (G__35208) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33107__auto___36198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_35253){
var state_val_35254 = (state_35253[(1)]);
if((state_val_35254 === (7))){
var inst_35249 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35255_36199 = state_35253__$1;
(statearr_35255_36199[(2)] = inst_35249);

(statearr_35255_36199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (1))){
var inst_35209 = [];
var inst_35210 = inst_35209;
var inst_35211 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35253__$1 = (function (){var statearr_35256 = state_35253;
(statearr_35256[(7)] = inst_35211);

(statearr_35256[(8)] = inst_35210);

return statearr_35256;
})();
var statearr_35257_36200 = state_35253__$1;
(statearr_35257_36200[(2)] = null);

(statearr_35257_36200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (4))){
var inst_35214 = (state_35253[(9)]);
var inst_35214__$1 = (state_35253[(2)]);
var inst_35215 = (inst_35214__$1 == null);
var inst_35216 = cljs.core.not(inst_35215);
var state_35253__$1 = (function (){var statearr_35258 = state_35253;
(statearr_35258[(9)] = inst_35214__$1);

return statearr_35258;
})();
if(inst_35216){
var statearr_35259_36204 = state_35253__$1;
(statearr_35259_36204[(1)] = (5));

} else {
var statearr_35260_36205 = state_35253__$1;
(statearr_35260_36205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (15))){
var inst_35210 = (state_35253[(8)]);
var inst_35241 = cljs.core.vec(inst_35210);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35253__$1,(18),out,inst_35241);
} else {
if((state_val_35254 === (13))){
var inst_35236 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35261_36206 = state_35253__$1;
(statearr_35261_36206[(2)] = inst_35236);

(statearr_35261_36206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (6))){
var inst_35210 = (state_35253[(8)]);
var inst_35238 = inst_35210.length;
var inst_35239 = (inst_35238 > (0));
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35239)){
var statearr_35262_36207 = state_35253__$1;
(statearr_35262_36207[(1)] = (15));

} else {
var statearr_35263_36208 = state_35253__$1;
(statearr_35263_36208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (17))){
var inst_35246 = (state_35253[(2)]);
var inst_35247 = cljs.core.async.close_BANG_(out);
var state_35253__$1 = (function (){var statearr_35264 = state_35253;
(statearr_35264[(10)] = inst_35246);

return statearr_35264;
})();
var statearr_35265_36209 = state_35253__$1;
(statearr_35265_36209[(2)] = inst_35247);

(statearr_35265_36209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (3))){
var inst_35251 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35253__$1,inst_35251);
} else {
if((state_val_35254 === (12))){
var inst_35210 = (state_35253[(8)]);
var inst_35229 = cljs.core.vec(inst_35210);
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35253__$1,(14),out,inst_35229);
} else {
if((state_val_35254 === (2))){
var state_35253__$1 = state_35253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35253__$1,(4),ch);
} else {
if((state_val_35254 === (11))){
var inst_35210 = (state_35253[(8)]);
var inst_35218 = (state_35253[(11)]);
var inst_35214 = (state_35253[(9)]);
var inst_35226 = inst_35210.push(inst_35214);
var tmp35266 = inst_35210;
var inst_35210__$1 = tmp35266;
var inst_35211 = inst_35218;
var state_35253__$1 = (function (){var statearr_35267 = state_35253;
(statearr_35267[(7)] = inst_35211);

(statearr_35267[(8)] = inst_35210__$1);

(statearr_35267[(12)] = inst_35226);

return statearr_35267;
})();
var statearr_35268_36211 = state_35253__$1;
(statearr_35268_36211[(2)] = null);

(statearr_35268_36211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (9))){
var inst_35211 = (state_35253[(7)]);
var inst_35222 = cljs.core.keyword_identical_QMARK_(inst_35211,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35253__$1 = state_35253;
var statearr_35269_36212 = state_35253__$1;
(statearr_35269_36212[(2)] = inst_35222);

(statearr_35269_36212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (5))){
var inst_35211 = (state_35253[(7)]);
var inst_35219 = (state_35253[(13)]);
var inst_35218 = (state_35253[(11)]);
var inst_35214 = (state_35253[(9)]);
var inst_35218__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35214) : f.call(null,inst_35214));
var inst_35219__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35218__$1,inst_35211);
var state_35253__$1 = (function (){var statearr_35270 = state_35253;
(statearr_35270[(13)] = inst_35219__$1);

(statearr_35270[(11)] = inst_35218__$1);

return statearr_35270;
})();
if(inst_35219__$1){
var statearr_35271_36216 = state_35253__$1;
(statearr_35271_36216[(1)] = (8));

} else {
var statearr_35272_36217 = state_35253__$1;
(statearr_35272_36217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (14))){
var inst_35218 = (state_35253[(11)]);
var inst_35214 = (state_35253[(9)]);
var inst_35231 = (state_35253[(2)]);
var inst_35232 = [];
var inst_35233 = inst_35232.push(inst_35214);
var inst_35210 = inst_35232;
var inst_35211 = inst_35218;
var state_35253__$1 = (function (){var statearr_35273 = state_35253;
(statearr_35273[(7)] = inst_35211);

(statearr_35273[(8)] = inst_35210);

(statearr_35273[(14)] = inst_35231);

(statearr_35273[(15)] = inst_35233);

return statearr_35273;
})();
var statearr_35274_36218 = state_35253__$1;
(statearr_35274_36218[(2)] = null);

(statearr_35274_36218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (16))){
var state_35253__$1 = state_35253;
var statearr_35275_36219 = state_35253__$1;
(statearr_35275_36219[(2)] = null);

(statearr_35275_36219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (10))){
var inst_35224 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
if(cljs.core.truth_(inst_35224)){
var statearr_35276_36220 = state_35253__$1;
(statearr_35276_36220[(1)] = (11));

} else {
var statearr_35277_36221 = state_35253__$1;
(statearr_35277_36221[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (18))){
var inst_35243 = (state_35253[(2)]);
var state_35253__$1 = state_35253;
var statearr_35278_36222 = state_35253__$1;
(statearr_35278_36222[(2)] = inst_35243);

(statearr_35278_36222[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35254 === (8))){
var inst_35219 = (state_35253[(13)]);
var state_35253__$1 = state_35253;
var statearr_35279_36223 = state_35253__$1;
(statearr_35279_36223[(2)] = inst_35219);

(statearr_35279_36223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32810__auto__ = null;
var cljs$core$async$state_machine__32810__auto____0 = (function (){
var statearr_35280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35280[(0)] = cljs$core$async$state_machine__32810__auto__);

(statearr_35280[(1)] = (1));

return statearr_35280;
});
var cljs$core$async$state_machine__32810__auto____1 = (function (state_35253){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_35253);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e35281){var ex__32813__auto__ = e35281;
var statearr_35282_36224 = state_35253;
(statearr_35282_36224[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_35253[(4)]))){
var statearr_35284_36225 = state_35253;
(statearr_35284_36225[(1)] = cljs.core.first((state_35253[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36226 = state_35253;
state_35253 = G__36226;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
cljs$core$async$state_machine__32810__auto__ = function(state_35253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32810__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32810__auto____1.call(this,state_35253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32810__auto____0;
cljs$core$async$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32810__auto____1;
return cljs$core$async$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_35285 = f__33108__auto__();
(statearr_35285[(6)] = c__33107__auto___36198);

return statearr_35285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
