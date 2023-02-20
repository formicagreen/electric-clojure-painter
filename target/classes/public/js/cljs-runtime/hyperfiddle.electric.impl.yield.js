goog.provide('hyperfiddle.electric.impl.yield$');


/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.yield$.Yield = (function (check,notifier,terminator,state){
this.check = check;
this.notifier = notifier;
this.terminator = terminator;
this.state = state;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.yield$.Yield.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__40980 = (arguments.length - (1));
switch (G__40980) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.apply = (function (self__,args40976){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args40976)));
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return (hyperfiddle.electric.impl.yield$.cancel.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield$.cancel.cljs$core$IFn$_invoke$arity$1(self__.state) : hyperfiddle.electric.impl.yield$.cancel.call(null,self__.state));
}));

(hyperfiddle.electric.impl.yield$.Yield.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (hyperfiddle.electric.impl.yield$.sample.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.yield$.sample.cljs$core$IFn$_invoke$arity$1(this$__$1) : hyperfiddle.electric.impl.yield$.sample.call(null,this$__$1));
}));

(hyperfiddle.electric.impl.yield$.Yield.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"check","check",-1428126865,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
}));

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$type = true);

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$ctorStr = "hyperfiddle.electric.impl.yield/Yield");

(hyperfiddle.electric.impl.yield$.Yield.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.yield/Yield");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.yield/Yield.
 */
hyperfiddle.electric.impl.yield$.__GT_Yield = (function hyperfiddle$electric$impl$yield$__GT_Yield(check,notifier,terminator,state){
return (new hyperfiddle.electric.impl.yield$.Yield(check,notifier,terminator,state));
});

hyperfiddle.electric.impl.yield$.transfer = (function hyperfiddle$electric$impl$yield$transfer(r,f){
var s = r.state;
while(true){
if(cljs.core.truth_((f[((1) | (0))] = cljs.core.not((f[((1) | (0))]))))){
if(cljs.core.truth_((f[((2) | (0))]))){
if(((s[((3) | (0))] = ((s[((3) | (0))]) - (1))) === (0))){
var fexpr__40991_41035 = r.terminator;
(fexpr__40991_41035.cljs$core$IFn$_invoke$arity$0 ? fexpr__40991_41035.cljs$core$IFn$_invoke$arity$0() : fexpr__40991_41035.call(null));
} else {
}

continue;
} else {
var g = (s[((4) | (0))]);
if((f === g)){
var fexpr__40993 = r.notifier;
return (fexpr__40993.cljs$core$IFn$_invoke$arity$0 ? fexpr__40993.cljs$core$IFn$_invoke$arity$0() : fexpr__40993.call(null));
} else {
if((((f === s)) && ((!((g == null)))))){
var i = (g[((0) | (0))]);
(s[((4) | (0))] = s);

(i.cljs$core$IFn$_invoke$arity$0 ? i.cljs$core$IFn$_invoke$arity$0() : i.call(null));

if(cljs.core.truth_((g[((1) | (0))]))){
try{cljs.core.deref(i);
}catch (e41003){var __41040 = e41003;
}
return (hyperfiddle.electric.impl.yield$.transfer.cljs$core$IFn$_invoke$arity$2 ? hyperfiddle.electric.impl.yield$.transfer.cljs$core$IFn$_invoke$arity$2(r,g) : hyperfiddle.electric.impl.yield$.transfer.call(null,r,g));
} else {
var fexpr__41004 = r.notifier;
return (fexpr__41004.cljs$core$IFn$_invoke$arity$0 ? fexpr__41004.cljs$core$IFn$_invoke$arity$0() : fexpr__41004.call(null));
}
} else {
var i = (f[((0) | (0))]);
try{cljs.core.deref(i);
}catch (e41005){var __41041 = e41005;
}
continue;
}
}
}
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.yield$.cancel = (function hyperfiddle$electric$impl$yield$cancel(s){
var fexpr__41007 = (s[((0) | (0))]);
return (fexpr__41007.cljs$core$IFn$_invoke$arity$0 ? fexpr__41007.cljs$core$IFn$_invoke$arity$0() : fexpr__41007.call(null));
});
hyperfiddle.electric.impl.yield$.sample = (function hyperfiddle$electric$impl$yield$sample(r){
var s = r.state;
var f = (s[((4) | (0))]);
try{var x = cljs.core.deref((f[((0) | (0))]));
if((f === s)){
var temp__5806__auto__ = (function (){var fexpr__41011 = r.check;
return (fexpr__41011.cljs$core$IFn$_invoke$arity$1 ? fexpr__41011.cljs$core$IFn$_invoke$arity$1(x) : fexpr__41011.call(null,x));
})();
if((temp__5806__auto__ == null)){
return x;
} else {
var _GT_e = temp__5806__auto__;
var f__$1 = (function (){var G__41013 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__41013[((1) | (0))] = true);

(G__41013[((2) | (0))] = false);

return G__41013;
})();
var i = (function (){var G__41014 = (function (){
return hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
});
var G__41015 = (function (){
(f__$1[((2) | (0))] = true);

return hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
});
return (_GT_e.cljs$core$IFn$_invoke$arity$2 ? _GT_e.cljs$core$IFn$_invoke$arity$2(G__41014,G__41015) : _GT_e.call(null,G__41014,G__41015));
})();
(f__$1[((0) | (0))] = i);

(s[((4) | (0))] = f__$1);

(s[((3) | (0))] = ((s[((3) | (0))]) + (1)));

var G__41016_41049 = (f__$1[((1) | (0))] = cljs.core.not((f__$1[((1) | (0))])));
if(cljs.core.truth_(G__41016_41049)){
} else {
throw (new Error(["Assert failed: ","Initialization failure.","\n","G__41016"].join('')));
}


try{return cljs.core.deref(i);
}finally {hyperfiddle.electric.impl.yield$.transfer(r,f__$1);
}}
} else {
return x;
}
}catch (e41010){var e = e41010;
hyperfiddle.electric.impl.yield$.cancel(s);

(s[((4) | (0))] = null);

throw e;
}finally {hyperfiddle.electric.impl.yield$.transfer(r,f);
}});
/**
 * 
 * Returns a continuous flow producing values produced by continuous flow >x, passing each sampled value to function f.
 * If the result is nil, the value is returned as is, otherwise the result is run as a flow and its values are output
 * until the input flow becomes ready again, at which point the recovery flow is cancelled.
 */
hyperfiddle.electric.impl.yield$.yield$ = (function hyperfiddle$electric$impl$yield$yield(f,_GT_x){
return (function (n,t){
var s = (function (){var G__41017 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__41017[((1) | (0))] = true);

(G__41017[((2) | (0))] = false);

(G__41017[((3) | (0))] = (1));

return G__41017;
})();
var r = hyperfiddle.electric.impl.yield$.__GT_Yield(f,n,t,s);
(s[((4) | (0))] = s);

(s[((0) | (0))] = (function (){var G__41018 = (function (){
return hyperfiddle.electric.impl.yield$.transfer(r,s);
});
var G__41019 = (function (){
(s[((2) | (0))] = true);

return hyperfiddle.electric.impl.yield$.transfer(r,s);
});
return (_GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT_x.cljs$core$IFn$_invoke$arity$2(G__41018,G__41019) : _GT_x.call(null,G__41018,G__41019));
})());

var G__41020 = r;
hyperfiddle.electric.impl.yield$.transfer(G__41020,s);

return G__41020;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.yield.js.map
