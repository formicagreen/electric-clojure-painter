goog.provide('missionary.impl.Sample');

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
missionary.impl.Sample.Process = (function (combinator,notifier,terminator,args,inputs,busy,done,alive){
this.combinator = combinator;
this.notifier = notifier;
this.terminator = terminator;
this.args = args;
this.inputs = inputs;
this.busy = busy;
this.done = done;
this.alive = alive;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(missionary.impl.Sample.Process.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__38661 = (arguments.length - (1));
switch (G__38661) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(missionary.impl.Sample.Process.prototype.apply = (function (self__,args38657){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args38657)));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
var fexpr__38663 = (self__.inputs[(self__.inputs.length - (1))]);
return (fexpr__38663.cljs$core$IFn$_invoke$arity$0 ? fexpr__38663.cljs$core$IFn$_invoke$arity$0() : fexpr__38663.call(null));
}));

(missionary.impl.Sample.Process.prototype.cljs$core$IDeref$_deref$arity$1 = (function (p){
var self__ = this;
var p__$1 = this;
return (missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Sample.transfer.cljs$core$IFn$_invoke$arity$1(p__$1) : missionary.impl.Sample.transfer.call(null,p__$1));
}));

(missionary.impl.Sample.Process.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"combinator","combinator",-746639828,null),new cljs.core.Symbol(null,"notifier","notifier",1670358652,null),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"inputs","inputs",-1788631911,null),cljs.core.with_meta(new cljs.core.Symbol(null,"busy","busy",1312244726,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"done","done",750687339,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"alive","alive",-1229505839,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null)], null))], null);
}));

(missionary.impl.Sample.Process.cljs$lang$type = true);

(missionary.impl.Sample.Process.cljs$lang$ctorStr = "missionary.impl.Sample/Process");

(missionary.impl.Sample.Process.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"missionary.impl.Sample/Process");
}));

/**
 * Positional factory function for missionary.impl.Sample/Process.
 */
missionary.impl.Sample.__GT_Process = (function missionary$impl$Sample$__GT_Process(combinator,notifier,terminator,args,inputs,busy,done,alive){
return (new missionary.impl.Sample.Process(combinator,notifier,terminator,args,inputs,busy,done,alive));
});

missionary.impl.Sample.ready = (function missionary$impl$Sample$ready(ps){
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var cb = null;
while(true){
if(cljs.core.truth_((ps.busy = cljs.core.not(ps.busy)))){
if(cljs.core.truth_(ps.done)){
var n__5636__auto___38734 = sampled;
var i_38735 = (0);
while(true){
if((i_38735 < n__5636__auto___38734)){
var input_38736 = (inputs[i_38735]);
(input_38736.cljs$core$IFn$_invoke$arity$0 ? input_38736.cljs$core$IFn$_invoke$arity$0() : input_38736.call(null));

if(((args[i_38735]) === args)){
try{cljs.core.deref(input_38736);
}catch (e38682){var __38737 = e38682;
}} else {
(args[i_38735] = args);
}

var G__38738 = (i_38735 + (1));
i_38735 = G__38738;
continue;
} else {
}
break;
}

if(((ps.alive = (ps.alive - (1))) === (0))){
return ps.terminator;
} else {
return null;
}
} else {
if(((args[sampled]) === args)){
try{cljs.core.deref((inputs[sampled]));
}catch (e38684){var __38739 = e38684;
}
var G__38740 = cb;
cb = G__38740;
continue;
} else {
return ps.notifier;
}
}
} else {
return cb;
}
break;
}
});
missionary.impl.Sample.transfer = (function missionary$impl$Sample$transfer(ps){
var c = ps.combinator;
var args = ps.args;
var inputs = ps.inputs;
var sampled = (inputs.length - (1));
var sampler = (inputs[sampled]);
var x = (function (){try{try{if((c == null)){
throw (new Error("Undefined continuous flow."));
} else {
}

var n__5636__auto___38741 = sampled;
var i_38742 = (0);
while(true){
if((i_38742 < n__5636__auto___38741)){
if(((args[i_38742]) === args)){
var input_38744 = (inputs[i_38742]);
while(true){
(args[i_38742] = null);

var x_38745 = cljs.core.deref(input_38744);
if(((args[i_38742]) === args)){
continue;
} else {
(args[i_38742] = x_38745);
}
break;
}
} else {
}

var G__38746 = (i_38742 + (1));
i_38742 = G__38746;
continue;
} else {
}
break;
}
}catch (e38686){var e_38747 = e38686;
try{cljs.core.deref(sampler);
}catch (e38687){var __38748 = e38687;
}
throw e_38747;
}
(args[sampled] = cljs.core.deref(sampler));

return c.apply(null,args);
}catch (e38685){var e = e38685;
(ps.notifier = null);

(sampler.cljs$core$IFn$_invoke$arity$0 ? sampler.cljs$core$IFn$_invoke$arity$0() : sampler.call(null));

(args[sampled] = args);

return e;
}})();
var temp__5808__auto___38749 = missionary.impl.Sample.ready(ps);
if((temp__5808__auto___38749 == null)){
} else {
var cb_38750 = temp__5808__auto___38749;
(cb_38750.cljs$core$IFn$_invoke$arity$0 ? cb_38750.cljs$core$IFn$_invoke$arity$0() : cb_38750.call(null));
}

if((ps.notifier == null)){
throw x;
} else {
return x;
}
});
missionary.impl.Sample.dirty = (function missionary$impl$Sample$dirty(p,i){
var args = p.args;
if(((args[i]) === args)){
try{return cljs.core.deref((p.inputs[i]));
}catch (e38710){var _ = e38710;
return null;
}} else {
return (args[i] = args);
}
});
missionary.impl.Sample.run = (function missionary$impl$Sample$run(c,f,fs,n,t){
var it = cljs.core.iter(fs);
var arity = (cljs.core.count(fs) + (1));
var args = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var inputs = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(arity);
var ps = missionary.impl.Sample.__GT_Process(c,n,t,args,inputs,false,false,arity);
var done = (function (){
if(((ps.alive = (ps.alive - (1))) === (0))){
var fexpr__38719 = ps.terminator;
return (fexpr__38719.cljs$core$IFn$_invoke$arity$0 ? fexpr__38719.cljs$core$IFn$_invoke$arity$0() : fexpr__38719.call(null));
} else {
return null;
}
});
var index_38753 = (0);
var flow_38754 = f;
while(true){
if(cljs.core.truth_(it.hasNext())){
(inputs[index_38753] = (function (){var G__38720 = ((function (index_38753,flow_38754,it,arity,args,inputs,ps,done){
return (function (){
return missionary.impl.Sample.dirty(ps,index_38753);
});})(index_38753,flow_38754,it,arity,args,inputs,ps,done))
;
var G__38721 = done;
return (flow_38754.cljs$core$IFn$_invoke$arity$2 ? flow_38754.cljs$core$IFn$_invoke$arity$2(G__38720,G__38721) : flow_38754.call(null,G__38720,G__38721));
})());

if(((args[index_38753]) == null)){
(ps.combinator = null);
} else {
}

var G__38760 = (index_38753 + (1));
var G__38762 = it.next();
index_38753 = G__38760;
flow_38754 = G__38762;
continue;
} else {
(inputs[index_38753] = (function (){var G__38726 = ((function (index_38753,flow_38754,it,arity,args,inputs,ps,done){
return (function (){
var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_38753,flow_38754,it,arity,args,inputs,ps,done))
;
var G__38727 = ((function (index_38753,flow_38754,G__38726,it,arity,args,inputs,ps,done){
return (function (){
(ps.done = true);

var temp__5808__auto__ = missionary.impl.Sample.ready(ps);
if((temp__5808__auto__ == null)){
return null;
} else {
var cb = temp__5808__auto__;
return (cb.cljs$core$IFn$_invoke$arity$0 ? cb.cljs$core$IFn$_invoke$arity$0() : cb.call(null));
}
});})(index_38753,flow_38754,G__38726,it,arity,args,inputs,ps,done))
;
return (flow_38754.cljs$core$IFn$_invoke$arity$2 ? flow_38754.cljs$core$IFn$_invoke$arity$2(G__38726,G__38727) : flow_38754.call(null,G__38726,G__38727));
})());
}
break;
}

return ps;
});

//# sourceMappingURL=missionary.impl.Sample.js.map
