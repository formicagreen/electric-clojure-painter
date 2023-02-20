goog.provide('hyperfiddle.electric.impl.eventually');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.eventually.It = (function (final$,notifier,terminator,state){
this.final$ = final$;
this.notifier = notifier;
this.terminator = terminator;
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.eventually.It.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__42787 = (arguments.length - (1));
switch (G__42787) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.eventually.It.prototype.apply = (function (self__,args42786){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42786)));
}));

(hyperfiddle.electric.impl.eventually.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__42796 = (self__.state[((0) | (0))]);
return (fexpr__42796.cljs$core$IFn$_invoke$arity$0 ? fexpr__42796.cljs$core$IFn$_invoke$arity$0() : fexpr__42796.call(null));
}));

(hyperfiddle.electric.impl.eventually.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
if(((self__.state[((1) | (0))]) == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));

return self__.final$;
} else {
try{(self__.state[((1) | (0))] = null);

var x = cljs.core.deref((self__.state[((0) | (0))]));
if(((self__.state[((1) | (0))]) == null)){
(self__.state[((1) | (0))] = self__.notifier);
} else {
(self__.state[((1) | (0))] = null);

(self__.notifier.cljs$core$IFn$_invoke$arity$0 ? self__.notifier.cljs$core$IFn$_invoke$arity$0() : self__.notifier.call(null));
}

return x;
}catch (e42797){var e = e42797;
if(((self__.state[((1) | (0))]) == null)){
(self__.state[((1) | (0))] = self__.terminator);
} else {
(self__.state[((1) | (0))] = null);

(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}

throw e;
}}
}));

(hyperfiddle.electric.impl.eventually.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"final","final",-1496554412,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null))], null);
}));

(hyperfiddle.electric.impl.eventually.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.eventually.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.eventually/It");

(hyperfiddle.electric.impl.eventually.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.eventually/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.eventually/It.
 */
hyperfiddle.electric.impl.eventually.__GT_It = (function hyperfiddle$electric$impl$eventually$__GT_It(final$,notifier,terminator,state){
return (new hyperfiddle.electric.impl.eventually.It(final$,notifier,terminator,state));
});

/**
 * 
 * Returns a flow producing successive values of given flow, followed by given value if it terminates successfully.
 */
hyperfiddle.electric.impl.eventually.eventually = (function hyperfiddle$electric$impl$eventually$eventually(x,f){
return (function (n,t){
var state = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
var it = hyperfiddle.electric.impl.eventually.__GT_It(x,n,t,state);
(state[((1) | (0))] = n);

(state[((0) | (0))] = (function (){var G__42799 = n;
var G__42800 = (function (){
var temp__5806__auto__ = (state[((1) | (0))]);
if((temp__5806__auto__ == null)){
return (state[((1) | (0))] = it);
} else {
var cb = temp__5806__auto__;
(state[((1) | (0))] = null);

return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42799,G__42800) : f.call(null,G__42799,G__42800));
})());

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.eventually.js.map
