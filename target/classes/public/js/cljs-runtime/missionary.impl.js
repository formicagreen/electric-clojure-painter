goog.provide('missionary.impl');
missionary.impl.nop = (function missionary$impl$nop(){
return null;
});
missionary.impl.absolver = (function missionary$impl$absolver(s,f){
return (function (t){
try{var G__37423 = (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__37423) : s.call(null,G__37423));
}catch (e37422){var e = e37422;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
}});
});
missionary.impl.thunk = (function missionary$impl$thunk(e,t,s,f){
throw (new Error("Unsupported operation."));
});
missionary.impl.publisher = (function missionary$impl$publisher(f){
throw (new Error("Unsupported operation."));
});
missionary.impl.subscribe = (function missionary$impl$subscribe(pub,n,t){
throw (new Error("Unsupported operation."));
});
missionary.impl.send_rf = (function missionary$impl$send_rf(x,_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(x) : _BANG_.call(null,x));

return x;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Dataflow = (function (bound,value,watch){
this.bound = bound;
this.value = value;
this.watch = watch;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Dataflow.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37431 = (arguments.length - (1));
switch (G__37431) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Dataflow.prototype.apply = (function (self__,args37429){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37429)));
}));

(missionary.impl.Dataflow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (t){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.bound)){
} else {
(self__.bound = true);

(self__.value = t);

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(missionary.impl.send_rf,t,cljs.core.persistent_BANG_(self__.watch));

(self__.watch = null);
}

return self__.value;
}));

(missionary.impl.Dataflow.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.bound)){
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(self__.value) : s_BANG_.call(null,self__.value));

return missionary.impl.nop;
} else {
var _BANG_ = (function (p1__37428_SHARP_){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(p1__37428_SHARP_) : s_BANG_.call(null,p1__37428_SHARP_));
});
(self__.watch = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.watch,_BANG_));

return (function (){
if(cljs.core.truth_(self__.bound)){
return null;
} else {
if(cljs.core.contains_QMARK_(self__.watch,_BANG_)){
(self__.watch = cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(self__.watch,_BANG_));

var G__37434 = (new missionary.Cancelled("Dataflow variable dereference cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__37434) : f_BANG_.call(null,G__37434));
} else {
return null;
}
}
});
}
}));

(missionary.impl.Dataflow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bound","bound",-2066818599,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watch","watch",2021519804,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Dataflow.cljs$lang$type = true);

(missionary.impl.Dataflow.cljs$lang$ctorStr = "missionary.impl/Dataflow");

(missionary.impl.Dataflow.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Dataflow");
}));

/**
 * Positional factory function for missionary.impl/Dataflow.
 */
missionary.impl.__GT_Dataflow = (function missionary$impl$__GT_Dataflow(bound,value,watch){
return (new missionary.impl.Dataflow(bound,value,watch));
});

missionary.impl.dataflow = (function missionary$impl$dataflow(){
return missionary.impl.__GT_Dataflow(false,null,cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Rendezvous = (function (readers,writers){
this.readers = readers;
this.writers = writers;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Rendezvous.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37445 = (arguments.length - (1));
switch (G__37445) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Rendezvous.prototype.apply = (function (self__,args37444){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37444)));
}));

(missionary.impl.Rendezvous.prototype.cljs$core$IFn$_invoke$arity$1 = (function (t){
var self__ = this;
var _ = this;
return (function (s_BANG_,f_BANG_){
var temp__5806__auto__ = cljs.core.seq(self__.readers);
if((temp__5806__auto__ == null)){
var _BANG_ = (function (){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(null) : s_BANG_.call(null,null));
});
(self__.writers = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.writers,_BANG_,t));

return (function (){
if(cljs.core.contains_QMARK_(self__.writers,_BANG_)){
(self__.writers = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.writers,_BANG_));

var G__37447 = (new missionary.Cancelled("Rendez-vous give cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__37447) : f_BANG_.call(null,G__37447));
} else {
return null;
}
});
} else {
var vec__37449 = temp__5806__auto__;
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37449,(0),null);
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(t) : _BANG_.call(null,t));

(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(null) : s_BANG_.call(null,null));

return missionary.impl.nop;
}
});
}));

(missionary.impl.Rendezvous.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
var temp__5806__auto__ = cljs.core.seq(self__.writers);
if((temp__5806__auto__ == null)){
var _BANG_ = (function (p1__37441_SHARP_){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(p1__37441_SHARP_) : s_BANG_.call(null,p1__37441_SHARP_));
});
(self__.readers = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (function (){
if(cljs.core.contains_QMARK_(self__.readers,_BANG_)){
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

var G__37456 = (new missionary.Cancelled("Rendez-vous take cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__37456) : f_BANG_.call(null,G__37456));
} else {
return null;
}
});
} else {
var vec__37458 = temp__5806__auto__;
var vec__37461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37458,(0),null);
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37461,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37461,(1),null);
(self__.writers = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.writers,_BANG_));

(_BANG_.cljs$core$IFn$_invoke$arity$0 ? _BANG_.cljs$core$IFn$_invoke$arity$0() : _BANG_.call(null));

(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(t) : s_BANG_.call(null,t));

return missionary.impl.nop;
}
}));

(missionary.impl.Rendezvous.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"writers","writers",-1500612666,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Rendezvous.cljs$lang$type = true);

(missionary.impl.Rendezvous.cljs$lang$ctorStr = "missionary.impl/Rendezvous");

(missionary.impl.Rendezvous.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Rendezvous");
}));

/**
 * Positional factory function for missionary.impl/Rendezvous.
 */
missionary.impl.__GT_Rendezvous = (function missionary$impl$__GT_Rendezvous(readers,writers){
return (new missionary.impl.Rendezvous(readers,writers));
});

missionary.impl.rendezvous = (function missionary$impl$rendezvous(){
return missionary.impl.__GT_Rendezvous(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Mailbox = (function (enqueue,dequeue,readers){
this.enqueue = enqueue;
this.dequeue = dequeue;
this.readers = readers;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Mailbox.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37473 = (arguments.length - (1));
switch (G__37473) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Mailbox.prototype.apply = (function (self__,args37472){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37472)));
}));

(missionary.impl.Mailbox.prototype.cljs$core$IFn$_invoke$arity$1 = (function (t){
var self__ = this;
var _ = this;
var temp__5806__auto__ = cljs.core.seq(self__.readers);
if((temp__5806__auto__ == null)){
self__.enqueue.push(t);

return null;
} else {
var vec__37474 = temp__5806__auto__;
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37474,(0),null);
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(t) : _BANG_.call(null,t));
}
}));

(missionary.impl.Mailbox.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
if((self__.dequeue.length === (0))){
if((self__.enqueue.length === (0))){
var _BANG_ = (function (p1__37471_SHARP_){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(p1__37471_SHARP_) : s_BANG_.call(null,p1__37471_SHARP_));
});
(self__.readers = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (function (){
if(cljs.core.contains_QMARK_(self__.readers,_BANG_)){
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

var G__37479 = (new missionary.Cancelled("Mailbox fetch cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__37479) : f_BANG_.call(null,G__37479));
} else {
return null;
}
});
} else {
var tmp = self__.enqueue;
(self__.enqueue = self__.dequeue);

(self__.dequeue = tmp.reverse());

var G__37480_37960 = tmp.pop();
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(G__37480_37960) : s_BANG_.call(null,G__37480_37960));

return missionary.impl.nop;
}
} else {
var G__37483_37961 = self__.dequeue.pop();
(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(G__37483_37961) : s_BANG_.call(null,G__37483_37961));

return missionary.impl.nop;
}
}));

(missionary.impl.Mailbox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"enqueue","enqueue",1377000435,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dequeue","dequeue",1692220857,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Mailbox.cljs$lang$type = true);

(missionary.impl.Mailbox.cljs$lang$ctorStr = "missionary.impl/Mailbox");

(missionary.impl.Mailbox.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Mailbox");
}));

/**
 * Positional factory function for missionary.impl/Mailbox.
 */
missionary.impl.__GT_Mailbox = (function missionary$impl$__GT_Mailbox(enqueue,dequeue,readers){
return (new missionary.impl.Mailbox(enqueue,dequeue,readers));
});

missionary.impl.mailbox = (function missionary$impl$mailbox(){
return missionary.impl.__GT_Mailbox([],[],cljs.core.PersistentHashSet.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Semaphore = (function (available,readers){
this.available = available;
this.readers = readers;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Semaphore.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37495 = (arguments.length - (1));
switch (G__37495) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Semaphore.prototype.apply = (function (self__,args37491){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37491)));
}));

(missionary.impl.Semaphore.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var temp__5806__auto__ = cljs.core.seq(self__.readers);
if((temp__5806__auto__ == null)){
(self__.available = (self__.available + (1)));

return null;
} else {
var vec__37508 = temp__5806__auto__;
var _BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37508,(0),null);
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (_BANG_.cljs$core$IFn$_invoke$arity$0 ? _BANG_.cljs$core$IFn$_invoke$arity$0() : _BANG_.call(null));
}
}));

(missionary.impl.Semaphore.prototype.cljs$core$IFn$_invoke$arity$2 = (function (s_BANG_,f_BANG_){
var self__ = this;
var _ = this;
if((self__.available === (0))){
var _BANG_ = (function (){
return (s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(null) : s_BANG_.call(null,null));
});
(self__.readers = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

return (function (){
if(cljs.core.contains_QMARK_(self__.readers,_BANG_)){
(self__.readers = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.readers,_BANG_));

var G__37533 = (new missionary.Cancelled("Semaphore acquire cancelled."));
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__37533) : f_BANG_.call(null,G__37533));
} else {
return null;
}
});
} else {
(self__.available = (self__.available - (1)));

(s_BANG_.cljs$core$IFn$_invoke$arity$1 ? s_BANG_.cljs$core$IFn$_invoke$arity$1(null) : s_BANG_.call(null,null));

return missionary.impl.nop;
}
}));

(missionary.impl.Semaphore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"available","available",169834400,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"readers","readers",-477731503,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(missionary.impl.Semaphore.cljs$lang$type = true);

(missionary.impl.Semaphore.cljs$lang$ctorStr = "missionary.impl/Semaphore");

(missionary.impl.Semaphore.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Semaphore");
}));

/**
 * Positional factory function for missionary.impl/Semaphore.
 */
missionary.impl.__GT_Semaphore = (function missionary$impl$__GT_Semaphore(available,readers){
return (new missionary.impl.Semaphore(available,readers));
});

missionary.impl.semaphore = (function missionary$impl$semaphore(n){
return missionary.impl.__GT_Semaphore(n,cljs.core.PersistentHashSet.EMPTY);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.RaceJoin = (function (combinator,joincb,racecb,cancel,result,join,race){
this.combinator = combinator;
this.joincb = joincb;
this.racecb = racecb;
this.cancel = cancel;
this.result = result;
this.join = join;
this.race = race;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.RaceJoin.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37559 = (arguments.length - (1));
switch (G__37559) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.RaceJoin.prototype.apply = (function (self__,args37558){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37558)));
}));

(missionary.impl.RaceJoin.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var j = this;
return (missionary.impl.racejoin_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.racejoin_cancel.cljs$core$IFn$_invoke$arity$1(j) : missionary.impl.racejoin_cancel.call(null,j));
}));

(missionary.impl.RaceJoin.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"joincb","joincb",-885294516,null),new cljs.core.Symbol(null,"racecb","racecb",-738679350,null),new cljs.core.Symbol(null,"cancel","cancel",-323556833,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),cljs.core.with_meta(new cljs.core.Symbol(null,"join","join",881669637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.RaceJoin.cljs$lang$type = true);

(missionary.impl.RaceJoin.cljs$lang$ctorStr = "missionary.impl/RaceJoin");

(missionary.impl.RaceJoin.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/RaceJoin");
}));

/**
 * Positional factory function for missionary.impl/RaceJoin.
 */
missionary.impl.__GT_RaceJoin = (function missionary$impl$__GT_RaceJoin(combinator,joincb,racecb,cancel,result,join,race){
return (new missionary.impl.RaceJoin(combinator,joincb,racecb,cancel,result,join,race));
});

missionary.impl.racejoin_cancel = (function missionary$impl$racejoin_cancel(j){
var n__5636__auto__ = j.cancel.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var fexpr__37581_37966 = (j.cancel[i]);
(fexpr__37581_37966.cljs$core$IFn$_invoke$arity$0 ? fexpr__37581_37966.cljs$core$IFn$_invoke$arity$0() : fexpr__37581_37966.call(null));

var G__37967 = (i + (1));
i = G__37967;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.racejoin_terminated = (function missionary$impl$racejoin_terminated(j){
var n = (j.join + (1));
(j.join = n);

if((n === j.result.length)){
var w = j.race;
if((w < (0))){
try{var G__37609 = j.combinator.apply(null,j.result);
var fexpr__37608 = j.joincb;
return (fexpr__37608.cljs$core$IFn$_invoke$arity$1 ? fexpr__37608.cljs$core$IFn$_invoke$arity$1(G__37609) : fexpr__37608.call(null,G__37609));
}catch (e37592){var e = e37592;
var fexpr__37593 = j.racecb;
return (fexpr__37593.cljs$core$IFn$_invoke$arity$1 ? fexpr__37593.cljs$core$IFn$_invoke$arity$1(e) : fexpr__37593.call(null,e));
}} else {
var G__37626 = (j.result[w]);
var fexpr__37625 = j.racecb;
return (fexpr__37625.cljs$core$IFn$_invoke$arity$1 ? fexpr__37625.cljs$core$IFn$_invoke$arity$1(G__37626) : fexpr__37625.call(null,G__37626));
}
} else {
return null;
}
});
missionary.impl.race_join = (function missionary$impl$race_join(r,c,ts,s,f){
var n = cljs.core.count(ts);
var i = cljs.core.iter(ts);
var j = missionary.impl.__GT_RaceJoin(c,(cljs.core.truth_(r)?f:s),(cljs.core.truth_(r)?s:f),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n),(0),(-2));
var index_37973 = (0);
while(true){
var join_37974 = ((function (index_37973,n,i,j){
return (function (x){
(j.result[index_37973] = x);

return missionary.impl.racejoin_terminated(j);
});})(index_37973,n,i,j))
;
var race_37975 = ((function (index_37973,join_37974,n,i,j){
return (function (x){
var w_37976 = j.race;
if((w_37976 < (0))){
(j.race = index_37973);

if(((-1) === w_37976)){
missionary.impl.racejoin_cancel(j);
} else {
}
} else {
}

return join_37974(x);
});})(index_37973,join_37974,n,i,j))
;
(j.cancel[index_37973] = (function (){var G__37640 = (cljs.core.truth_(r)?race_37975:join_37974);
var G__37641 = (cljs.core.truth_(r)?join_37974:race_37975);
var fexpr__37639 = i.next();
return (fexpr__37639.cljs$core$IFn$_invoke$arity$2 ? fexpr__37639.cljs$core$IFn$_invoke$arity$2(G__37640,G__37641) : fexpr__37639.call(null,G__37640,G__37641));
})());

if(cljs.core.truth_(i.hasNext())){
var G__37977 = (index_37973 + (1));
index_37973 = G__37977;
continue;
} else {
}
break;
}

if(((-2) === j.race)){
(j.race = (-1));
} else {
missionary.impl.racejoin_cancel(j);
}

return j;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Sleep = (function (failure,handler,pending){
this.failure = failure;
this.handler = handler;
this.pending = pending;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sleep.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37647 = (arguments.length - (1));
switch (G__37647) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sleep.prototype.apply = (function (self__,args37646){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37646)));
}));

(missionary.impl.Sleep.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var s = this;
return (missionary.impl.sleep_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.sleep_cancel.cljs$core$IFn$_invoke$arity$1(s) : missionary.impl.sleep_cancel.call(null,s));
}));

(missionary.impl.Sleep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"failure","failure",-1934019890,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Sleep.cljs$lang$type = true);

(missionary.impl.Sleep.cljs$lang$ctorStr = "missionary.impl/Sleep");

(missionary.impl.Sleep.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Sleep");
}));

/**
 * Positional factory function for missionary.impl/Sleep.
 */
missionary.impl.__GT_Sleep = (function missionary$impl$__GT_Sleep(failure,handler,pending){
return (new missionary.impl.Sleep(failure,handler,pending));
});

missionary.impl.sleep_cancel = (function missionary$impl$sleep_cancel(s){
if(cljs.core.truth_(s.pending)){
(s.pending = false);

clearTimeout(s.handler);

var G__37692 = (new missionary.Cancelled("Sleep cancelled."));
var fexpr__37691 = s.failure;
return (fexpr__37691.cljs$core$IFn$_invoke$arity$1 ? fexpr__37691.cljs$core$IFn$_invoke$arity$1(G__37692) : fexpr__37691.call(null,G__37692));
} else {
return null;
}
});
missionary.impl.sleep = (function missionary$impl$sleep(d,x,s,f){
var slp = missionary.impl.__GT_Sleep(f,null,true);
(slp.handler = setTimeout((function (){
(slp.pending = false);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(x) : s.call(null,x));
}),d));

return slp;
});
missionary.impl.threading_unsupported = cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Threading operations are not supported.",cljs.core.PersistentArrayMap.EMPTY);
missionary.impl.via = cljs.core.constantly(missionary.impl.threading_unsupported);

/**
* @constructor
 * @implements {cljs.core.IFn}
*/
missionary.impl.Never = (function (f,alive){
this.f = f;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 1;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Never.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37747 = (arguments.length - (1));
switch (G__37747) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Never.prototype.apply = (function (self__,args37724){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37724)));
}));

(missionary.impl.Never.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if(self__.alive){
(self__.alive = false);

var G__37827 = (new missionary.Cancelled("Never cancelled."));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__37827) : self__.f.call(null,G__37827));
} else {
return null;
}
}));

(missionary.impl.Never.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Never.cljs$lang$type = true);

(missionary.impl.Never.cljs$lang$ctorStr = "missionary.impl/Never");

(missionary.impl.Never.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Never");
}));

/**
 * Positional factory function for missionary.impl/Never.
 */
missionary.impl.__GT_Never = (function missionary$impl$__GT_Never(f,alive){
return (new missionary.impl.Never(f,alive));
});

missionary.impl.never = (function missionary$impl$never(f){
return missionary.impl.__GT_Never(f,true);
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Enumerate = (function (iterator,notifier,terminator){
this.iterator = iterator;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Enumerate.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37841 = (arguments.length - (1));
switch (G__37841) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Enumerate.prototype.apply = (function (self__,args37831){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37831)));
}));

(missionary.impl.Enumerate.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var e = this;
return (missionary.impl.enumerate_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.enumerate_cancel.cljs$core$IFn$_invoke$arity$1(e) : missionary.impl.enumerate_cancel.call(null,e));
}));

(missionary.impl.Enumerate.prototype.cljs$core$IDeref$_deref$arity$1 = (function (e){
var self__ = this;
var e__$1 = this;
return (missionary.impl.enumerate_deref.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.enumerate_deref.cljs$core$IFn$_invoke$arity$1(e__$1) : missionary.impl.enumerate_deref.call(null,e__$1));
}));

(missionary.impl.Enumerate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(missionary.impl.Enumerate.cljs$lang$type = true);

(missionary.impl.Enumerate.cljs$lang$ctorStr = "missionary.impl/Enumerate");

(missionary.impl.Enumerate.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Enumerate");
}));

/**
 * Positional factory function for missionary.impl/Enumerate.
 */
missionary.impl.__GT_Enumerate = (function missionary$impl$__GT_Enumerate(iterator,notifier,terminator){
return (new missionary.impl.Enumerate(iterator,notifier,terminator));
});

missionary.impl.enumerate_cancel = (function missionary$impl$enumerate_cancel(e){
return (e.iterator = null);
});
missionary.impl.enumerate_pull = (function missionary$impl$enumerate_pull(e){
if(cljs.core.truth_(e.iterator.hasNext())){
var fexpr__37854 = e.notifier;
return (fexpr__37854.cljs$core$IFn$_invoke$arity$0 ? fexpr__37854.cljs$core$IFn$_invoke$arity$0() : fexpr__37854.call(null));
} else {
(e.iterator = null);

var fexpr__37855 = e.terminator;
return (fexpr__37855.cljs$core$IFn$_invoke$arity$0 ? fexpr__37855.cljs$core$IFn$_invoke$arity$0() : fexpr__37855.call(null));
}
});
missionary.impl.enumerate_deref = (function missionary$impl$enumerate_deref(e){
var temp__5806__auto__ = e.iterator;
if((temp__5806__auto__ == null)){
var fexpr__37856_38025 = e.terminator;
(fexpr__37856_38025.cljs$core$IFn$_invoke$arity$0 ? fexpr__37856_38025.cljs$core$IFn$_invoke$arity$0() : fexpr__37856_38025.call(null));

throw (new missionary.Cancelled("Seed cancelled"));
} else {
var i = temp__5806__auto__;
var x = i.next();
missionary.impl.enumerate_pull(e);

return x;
}
});
missionary.impl.enumerate = (function missionary$impl$enumerate(coll,n,t){
var G__37860 = missionary.impl.__GT_Enumerate(cljs.core.iter(coll),n,t);
missionary.impl.enumerate_pull(G__37860);

return G__37860;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Transform = (function (reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done){
this.reducer = reducer;
this.iterator = iterator;
this.notifier = notifier;
this.terminator = terminator;
this.buffer = buffer;
this.offset = offset;
this.length = length;
this.error = error;
this.busy = busy;
this.done = done;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Transform.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37865 = (arguments.length - (1));
switch (G__37865) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Transform.prototype.apply = (function (self__,args37864){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37864)));
}));

(missionary.impl.Transform.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var t = this;
return (missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.transform_cancel.call(null,t));
}));

(missionary.impl.Transform.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return (missionary.impl.transform_deref.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.transform_deref.cljs$core$IFn$_invoke$arity$1(t__$1) : missionary.impl.transform_deref.call(null,t__$1));
}));

(missionary.impl.Transform.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.Symbol(null,"iterator","iterator",-32550441,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"buffer","buffer",-2037140571,null),cljs.core.with_meta(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",-2065447907,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null))], null);
}));

(missionary.impl.Transform.cljs$lang$type = true);

(missionary.impl.Transform.cljs$lang$ctorStr = "missionary.impl/Transform");

(missionary.impl.Transform.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Transform");
}));

/**
 * Positional factory function for missionary.impl/Transform.
 */
missionary.impl.__GT_Transform = (function missionary$impl$__GT_Transform(reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done){
return (new missionary.impl.Transform(reducer,iterator,notifier,terminator,buffer,offset,length,error,busy,done));
});

missionary.impl.transform_feed = (function missionary$impl$transform_feed(var_args){
var G__37887 = arguments.length;
switch (G__37887) {
case 1:
return missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$1 = (function (t){
return t;
}));

(missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$2 = (function (t,x){
if((t.length === t.buffer.length)){
t.buffer.push(x);
} else {
(t.buffer[t.length] = x);
}

(t.length = (t.length + (1)));

return t;
}));

(missionary.impl.transform_feed.cljs$lang$maxFixedArity = 2);

missionary.impl.transform_pull = (function missionary$impl$transform_pull(t){
while(true){
if(cljs.core.truth_(t.done)){
var temp__5806__auto__ = t.reducer;
if((temp__5806__auto__ == null)){
var fexpr__37893 = t.terminator;
return (fexpr__37893.cljs$core$IFn$_invoke$arity$0 ? fexpr__37893.cljs$core$IFn$_invoke$arity$0() : fexpr__37893.call(null));
} else {
var rf = temp__5806__auto__;
(t.offset = (0));

(t.length = (0));

try{(rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(t) : rf.call(null,t));
}catch (e37894){var e_38067 = e37894;
(t.error = t.length);

missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$2(t,e_38067);
}
(t.reducer = null);

if((t.length === (0))){
continue;
} else {
var fexpr__37895_38071 = t.notifier;
(fexpr__37895_38071.cljs$core$IFn$_invoke$arity$0 ? fexpr__37895_38071.cljs$core$IFn$_invoke$arity$0() : fexpr__37895_38071.call(null));

if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
}
}
} else {
var temp__5806__auto__ = t.reducer;
if((temp__5806__auto__ == null)){
try{cljs.core.deref(t.iterator);
}catch (e37899){var __38073 = e37899;
}
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
} else {
var rf = temp__5806__auto__;
(t.offset = (0));

(t.length = (0));

try{if(cljs.core.reduced_QMARK_((function (){var G__37914 = t;
var G__37915 = cljs.core.deref(t.iterator);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__37914,G__37915) : rf.call(null,G__37914,G__37915));
})())){
(rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(t) : rf.call(null,t));

(t.reducer = null);

(missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.transform_cancel.call(null,t));
} else {
}
}catch (e37912){var e_38078 = e37912;
(t.error = t.length);

missionary.impl.transform_feed.cljs$core$IFn$_invoke$arity$2(t,e_38078);

(t.reducer = null);

(missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.transform_cancel.cljs$core$IFn$_invoke$arity$1(t) : missionary.impl.transform_cancel.call(null,t));
}
if((t.length > (0))){
var fexpr__37916 = t.notifier;
return (fexpr__37916.cljs$core$IFn$_invoke$arity$0 ? fexpr__37916.cljs$core$IFn$_invoke$arity$0() : fexpr__37916.call(null));
} else {
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
continue;
} else {
return null;
}
}
}
}
break;
}
});
missionary.impl.transform_cancel = (function missionary$impl$transform_cancel(t){
var fexpr__37917 = t.iterator;
return (fexpr__37917.cljs$core$IFn$_invoke$arity$0 ? fexpr__37917.cljs$core$IFn$_invoke$arity$0() : fexpr__37917.call(null));
});
missionary.impl.transform_deref = (function missionary$impl$transform_deref(t){
var o = t.offset;
var x = (t.buffer[o]);
(t.buffer[o] = null);

(t.offset = (o + (1)));

if((t.offset === t.length)){
if(cljs.core.truth_((t.busy = cljs.core.not(t.busy)))){
missionary.impl.transform_pull(t);
} else {
}
} else {
var fexpr__37919_38087 = t.notifier;
(fexpr__37919_38087.cljs$core$IFn$_invoke$arity$0 ? fexpr__37919_38087.cljs$core$IFn$_invoke$arity$0() : fexpr__37919_38087.call(null));
}

if((o === t.error)){
throw x;
} else {
return x;
}
});
missionary.impl.transform = (function missionary$impl$transform(xf,flow,n,t){
var t__$1 = missionary.impl.__GT_Transform((xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(missionary.impl.transform_feed) : xf.call(null,missionary.impl.transform_feed)),null,n,t,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1)),(0),(0),(-1),true,false);
var n__$1 = (function (){
if(cljs.core.truth_((t__$1.busy = cljs.core.not(t__$1.busy)))){
return missionary.impl.transform_pull(t__$1);
} else {
return null;
}
});
(t__$1.iterator = (function (){var G__37923 = n__$1;
var G__37924 = (function (){
(t__$1.done = true);

return n__$1();
});
return (flow.cljs$core$IFn$_invoke$arity$2 ? flow.cljs$core$IFn$_invoke$arity$2(G__37923,G__37924) : flow.call(null,G__37923,G__37924));
})());

n__$1();

return t__$1;
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Zip = (function (combinator,notifier,flusher,iterators,results,pending){
this.combinator = combinator;
this.notifier = notifier;
this.flusher = flusher;
this.iterators = iterators;
this.results = results;
this.pending = pending;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Zip.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__37926 = (arguments.length - (1));
switch (G__37926) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Zip.prototype.apply = (function (self__,args37925){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37925)));
}));

(missionary.impl.Zip.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var z = this;
return (missionary.impl.zip_cancel.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.zip_cancel.cljs$core$IFn$_invoke$arity$1(z) : missionary.impl.zip_cancel.call(null,z));
}));

(missionary.impl.Zip.prototype.cljs$core$IDeref$_deref$arity$1 = (function (z){
var self__ = this;
var z__$1 = this;
return (missionary.impl.zip_deref.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.zip_deref.cljs$core$IFn$_invoke$arity$1(z__$1) : missionary.impl.zip_deref.call(null,z__$1));
}));

(missionary.impl.Zip.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"flusher","flusher",1361929109,null),new cljs.core.Symbol(null,"iterators","iterators",58622696,null),new cljs.core.Symbol(null,"results","results",506361414,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pending","pending",1420494800,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Zip.cljs$lang$type = true);

(missionary.impl.Zip.cljs$lang$ctorStr = "missionary.impl/Zip");

(missionary.impl.Zip.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl/Zip");
}));

/**
 * Positional factory function for missionary.impl/Zip.
 */
missionary.impl.__GT_Zip = (function missionary$impl$__GT_Zip(combinator,notifier,flusher,iterators,results,pending){
return (new missionary.impl.Zip(combinator,notifier,flusher,iterators,results,pending));
});

missionary.impl.zip_cancel = (function missionary$impl$zip_cancel(z){
var its = z.iterators;
var n__5636__auto__ = its.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var temp__5808__auto___38098 = (its[i]);
if((temp__5808__auto___38098 == null)){
} else {
var it_38099 = temp__5808__auto___38098;
(it_38099.cljs$core$IFn$_invoke$arity$0 ? it_38099.cljs$core$IFn$_invoke$arity$0() : it_38099.call(null));
}

var G__38100 = (i + (1));
i = G__38100;
continue;
} else {
return null;
}
break;
}
});
missionary.impl.zip_deref = (function missionary$impl$zip_deref(z){
var its = z.iterators;
var res = z.results;
try{(z.pending = (z.pending - (1)));

var n__5636__auto___38102 = its.length;
var i_38103 = (0);
while(true){
if((i_38103 < n__5636__auto___38102)){
(z.pending = (z.pending + (1)));

(res[i_38103] = cljs.core.deref((its[i_38103])));

var G__38105 = (i_38103 + (1));
i_38103 = G__38105;
continue;
} else {
}
break;
}

return z.combinator.apply(null,res);
}catch (e37931){var e = e37931;
(z.notifier = z.flusher);

throw e;
}finally {(z.pending = (z.pending + (1)));

if((z.pending === (0))){
var fexpr__37930_38109 = z.notifier;
(fexpr__37930_38109.cljs$core$IFn$_invoke$arity$0 ? fexpr__37930_38109.cljs$core$IFn$_invoke$arity$0() : fexpr__37930_38109.call(null));
} else {
}

if((z.notifier === z.flusher)){
missionary.impl.zip_cancel(z);
} else {
}
}});
missionary.impl.zip = (function missionary$impl$zip(f,fs,n,t){
var c = cljs.core.count(fs);
var i = cljs.core.iter(fs);
var z = missionary.impl.__GT_Zip(f,n,null,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(c),(0));
(z.flusher = (function (){
var its = z.iterators;
var cnt = its.length;
while(true){
var flushed = (function (){var i__$1 = (0);
var f__$1 = (0);
while(true){
if((i__$1 < cnt)){
var G__38111 = (i__$1 + (1));
var G__38112 = (function (){var temp__5806__auto__ = (its[i__$1]);
if((temp__5806__auto__ == null)){
return f__$1;
} else {
var it = temp__5806__auto__;
try{cljs.core.deref(it);
}catch (e37932){var __38113 = e37932;
}
return (f__$1 + (1));
}
})();
i__$1 = G__38111;
f__$1 = G__38112;
continue;
} else {
return f__$1;
}
break;
}
})();
if((flushed === (0))){
return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
} else {
if(((z.pending = (z.pending + flushed)) === (0))){
continue;
} else {
return null;
}
}
break;
}
}));

var index_38115 = (0);
while(true){
(z.iterators[index_38115] = (function (){var G__37934 = ((function (index_38115,c,i,z){
return (function (){
var p = (z.pending - (1));
(z.pending = p);

if((p === (0))){
var fexpr__37936 = z.notifier;
return (fexpr__37936.cljs$core$IFn$_invoke$arity$0 ? fexpr__37936.cljs$core$IFn$_invoke$arity$0() : fexpr__37936.call(null));
} else {
return null;
}
});})(index_38115,c,i,z))
;
var G__37935 = ((function (index_38115,G__37934,c,i,z){
return (function (){
(z.iterators[index_38115] = null);

(z.notifier = z.flusher);

var p = (z.pending = (z.pending - (1)));
if((p < (0))){
return null;
} else {
missionary.impl.zip_cancel(z);

if((p === (0))){
var fexpr__37937 = z.notifier;
return (fexpr__37937.cljs$core$IFn$_invoke$arity$0 ? fexpr__37937.cljs$core$IFn$_invoke$arity$0() : fexpr__37937.call(null));
} else {
return null;
}
}
});})(index_38115,G__37934,c,i,z))
;
var fexpr__37933 = i.next();
return (fexpr__37933.cljs$core$IFn$_invoke$arity$2 ? fexpr__37933.cljs$core$IFn$_invoke$arity$2(G__37934,G__37935) : fexpr__37933.call(null,G__37934,G__37935));
})());

if(cljs.core.truth_(i.hasNext())){
var G__38116 = (index_38115 + (1));
index_38115 = G__38116;
continue;
} else {
}
break;
}

if(((z.pending = (z.pending + c)) === (0))){
var fexpr__37938_38117 = z.notifier;
(fexpr__37938_38117.cljs$core$IFn$_invoke$arity$0 ? fexpr__37938_38117.cljs$core$IFn$_invoke$arity$0() : fexpr__37938_38117.call(null));
} else {
}

return z;
});

//# sourceMappingURL=missionary.impl.js.map
