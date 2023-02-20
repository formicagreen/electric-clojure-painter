goog.provide('hyperfiddle.electric.impl.gather');
hyperfiddle.electric.impl.gather.done_BANG_ = (function hyperfiddle$electric$impl$gather$done_BANG_(main,terminator){
if(((main[((6) | (0))] = ((main[((6) | (0))]) - (1))) === (0))){
return (terminator.cljs$core$IFn$_invoke$arity$0 ? terminator.cljs$core$IFn$_invoke$arity$0() : terminator.call(null));
} else {
return null;
}
});
hyperfiddle.electric.impl.gather.cancel_BANG_ = (function hyperfiddle$electric$impl$gather$cancel_BANG_(main){
var temp__5808__auto__ = (main[((2) | (0))]);
if((temp__5808__auto__ == null)){
return null;
} else {
var item = temp__5808__auto__;
var item_42685__$1 = item;
while(true){
if((item_42685__$1 === main)){
} else {
var n_42686 = (item_42685__$1[((2) | (0))]);
(item_42685__$1[((1) | (0))] = null);

(item_42685__$1[((2) | (0))] = null);

var fexpr__42358_42687 = (item_42685__$1[((0) | (0))]);
(fexpr__42358_42687.cljs$core$IFn$_invoke$arity$0 ? fexpr__42358_42687.cljs$core$IFn$_invoke$arity$0() : fexpr__42358_42687.call(null));

var G__42689 = n_42686;
item_42685__$1 = G__42689;
continue;
}
break;
}

(main[((1) | (0))] = null);

(main[((2) | (0))] = null);

var fexpr__42359 = (main[((0) | (0))]);
return (fexpr__42359.cljs$core$IFn$_invoke$arity$0 ? fexpr__42359.cljs$core$IFn$_invoke$arity$0() : fexpr__42359.call(null));
}
});
hyperfiddle.electric.impl.gather.flush_BANG_ = (function hyperfiddle$electric$impl$gather$flush_BANG_(item){
var item__$1 = item;
while(true){
if((!((item__$1 == null)))){
var next = (function (){var a__42065__auto__ = item__$1;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = null);

return x__42067__auto__;
})();
try{cljs.core.deref((item__$1[((0) | (0))]));
}catch (e42403){var __42693 = e42403;
}
var G__42694 = next;
item__$1 = G__42694;
continue;
} else {
return null;
}
break;
}
});
hyperfiddle.electric.impl.gather.fail_BANG_ = (function hyperfiddle$electric$impl$gather$fail_BANG_(main,item,error){
hyperfiddle.electric.impl.gather.cancel_BANG_(main);

hyperfiddle.electric.impl.gather.flush_BANG_((function (){var a__42065__auto__ = main;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = null);

return x__42067__auto__;
})());

hyperfiddle.electric.impl.gather.flush_BANG_(item);

throw error;
});
hyperfiddle.electric.impl.gather.sample_BANG_ = (function hyperfiddle$electric$impl$gather$sample_BANG_(main,rf,notifier){
var idle = (function (){var a__42065__auto__ = main;
var i__42066__auto__ = ((5) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = false);

return x__42067__auto__;
})();
var head = (function (){var a__42065__auto__ = main;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = null);

return x__42067__auto__;
})();
var item = (function (){var a__42065__auto__ = head;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = null);

return x__42067__auto__;
})();
var r = (function (){try{return cljs.core.deref((head[((0) | (0))]));
}catch (e42447){var e = e42447;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,item,e);
}})();
while(true){
if((item == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
if(idle){
(notifier.cljs$core$IFn$_invoke$arity$0 ? notifier.cljs$core$IFn$_invoke$arity$0() : notifier.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle);
}

return r;
} else {
var next = (function (){var a__42065__auto__ = item;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = null);

return x__42067__auto__;
})();
var G__42700 = next;
var G__42701 = (function (){try{var G__42453 = r;
var G__42454 = cljs.core.deref((item[((0) | (0))]));
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__42453,G__42454) : rf.call(null,G__42453,G__42454));
}catch (e42452){var e = e42452;
return hyperfiddle.electric.impl.gather.fail_BANG_(main,next,e);
}})();
item = G__42700;
r = G__42701;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric.impl.gather.It = (function (main,rf,notifier,terminator){
this.main = main;
this.rf = rf;
this.notifier = notifier;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.gather.It.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__42470 = (arguments.length - (1));
switch (G__42470) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric.impl.gather.It.prototype.apply = (function (self__,args42468){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42468)));
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var it = this;
return hyperfiddle.electric.impl.gather.cancel_BANG_(self__.main);
}));

(hyperfiddle.electric.impl.gather.It.prototype.cljs$core$IDeref$_deref$arity$1 = (function (it){
var self__ = this;
var it__$1 = this;
return hyperfiddle.electric.impl.gather.sample_BANG_(self__.main,self__.rf,self__.notifier);
}));

(hyperfiddle.electric.impl.gather.It.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"main","main",-477271134,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric.impl.gather.It.cljs$lang$type = true);

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorStr = "hyperfiddle.electric.impl.gather/It");

(hyperfiddle.electric.impl.gather.It.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.gather/It");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.gather/It.
 */
hyperfiddle.electric.impl.gather.__GT_It = (function hyperfiddle$electric$impl$gather$__GT_It(main,rf,notifier,terminator){
return (new hyperfiddle.electric.impl.gather.It(main,rf,notifier,terminator));
});

hyperfiddle.electric.impl.gather.transfer_BANG_ = (function hyperfiddle$electric$impl$gather$transfer_BANG_(it){
var main = it.main;
while(true){
if(cljs.core.truth_((main[((4) | (0))] = cljs.core.not((main[((4) | (0))]))))){
var temp__5806__auto___42709 = (main[((1) | (0))]);
if((temp__5806__auto___42709 == null)){
try{cljs.core.deref((main[((0) | (0))]));
}catch (e42666){var __42710 = e42666;
}} else {
var prev_42711 = temp__5806__auto___42709;
var item_42712 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((4) | (0)));
var idle_42713 = (function (){var a__42065__auto__ = main;
var i__42066__auto__ = ((5) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = false);

return x__42067__auto__;
})();
(main[((6) | (0))] = ((main[((6) | (0))]) + (1)));

(item_42712[((1) | (0))] = prev_42711);

(prev_42711[((2) | (0))] = item_42712);

(main[((1) | (0))] = item_42712);

(item_42712[((2) | (0))] = main);

var n_42714 = ((function (item_42712,idle_42713,prev_42711,temp__5806__auto___42709,main){
return (function (){
if(((item_42712[((1) | (0))]) == null)){
try{return cljs.core.deref((item_42712[((0) | (0))]));
}catch (e42670){var _ = e42670;
return null;
}} else {
var temp__5806__auto____$1 = (function (){var a__42065__auto__ = main;
var i__42066__auto__ = ((3) | (0));
var x__42067__auto__ = (a__42065__auto__[i__42066__auto__]);
(a__42065__auto__[i__42066__auto__] = item_42712);

return x__42067__auto__;
})();
if((temp__5806__auto____$1 == null)){
if(cljs.core.truth_((main[((5) | (0))]))){
var fexpr__42671 = it.notifier;
return (fexpr__42671.cljs$core$IFn$_invoke$arity$0 ? fexpr__42671.cljs$core$IFn$_invoke$arity$0() : fexpr__42671.call(null));
} else {
return (main[((5) | (0))] = true);
}
} else {
var curr = temp__5806__auto____$1;
return (item_42712[((3) | (0))] = curr);
}
}
});})(item_42712,idle_42713,prev_42711,temp__5806__auto___42709,main))
;
var t_42715 = ((function (n_42714,item_42712,idle_42713,prev_42711,temp__5806__auto___42709,main){
return (function (){
var temp__5808__auto___42716 = (item_42712[((1) | (0))]);
if((temp__5808__auto___42716 == null)){
} else {
var prev_42717__$1 = temp__5808__auto___42716;
var next_42718 = (item_42712[((2) | (0))]);
(next_42718[((1) | (0))] = prev_42717__$1);

(prev_42717__$1[((2) | (0))] = next_42718);

(item_42712[((1) | (0))] = null);

(item_42712[((2) | (0))] = null);
}

return hyperfiddle.electric.impl.gather.done_BANG_(main,it.terminator);
});})(n_42714,item_42712,idle_42713,prev_42711,temp__5806__auto___42709,main))
;
(item_42712[((0) | (0))] = (function (){try{var fexpr__42675 = cljs.core.deref((main[((0) | (0))]));
return (fexpr__42675.cljs$core$IFn$_invoke$arity$2 ? fexpr__42675.cljs$core$IFn$_invoke$arity$2(n_42714,t_42715) : fexpr__42675.call(null,n_42714,t_42715));
}catch (e42674){var e = e42674;
return hyperfiddle.electric.impl.failer.run(e,n_42714,t_42715);
}})());

if(cljs.core.truth_((main[((5) | (0))]))){
if(idle_42713){
var fexpr__42677_42719 = it.notifier;
(fexpr__42677_42719.cljs$core$IFn$_invoke$arity$0 ? fexpr__42677_42719.cljs$core$IFn$_invoke$arity$0() : fexpr__42677_42719.call(null));
} else {
}
} else {
(main[((5) | (0))] = idle_42713);
}
}

continue;
} else {
return null;
}
break;
}
});
/**
 * 
 * Given a commutative function and a flow of flows, returns a flow concurrently running the flow with flows produced by
 * this flow and producing values produced by nested flows, reduced by the function if more than one can be transferred
 * simultaneously.
 */
hyperfiddle.electric.impl.gather.gather = (function hyperfiddle$electric$impl$gather$gather(rf,_GT__GT_x){
return (function (n,t){
var main = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((7) | (0)));
var it = hyperfiddle.electric.impl.gather.__GT_It(main,rf,n,t);
var G__42678_42720 = main;
(G__42678_42720[((1) | (0))] = main);

(G__42678_42720[((2) | (0))] = main);

(G__42678_42720[((4) | (0))] = true);

(G__42678_42720[((5) | (0))] = true);

(G__42678_42720[((6) | (0))] = (1));


(main[((0) | (0))] = (function (){var G__42682 = (function (){
return hyperfiddle.electric.impl.gather.transfer_BANG_(it);
});
var G__42683 = (function (){
return hyperfiddle.electric.impl.gather.done_BANG_(main,t);
});
return (_GT__GT_x.cljs$core$IFn$_invoke$arity$2 ? _GT__GT_x.cljs$core$IFn$_invoke$arity$2(G__42682,G__42683) : _GT__GT_x.call(null,G__42682,G__42683));
})());

hyperfiddle.electric.impl.gather.transfer_BANG_(it);

return it;
});
});

//# sourceMappingURL=hyperfiddle.electric.impl.gather.js.map
