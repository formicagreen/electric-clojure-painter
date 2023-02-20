goog.provide('hyperfiddle.electric.impl.ir');
hyperfiddle.electric.impl.ir.literal = (function hyperfiddle$electric$impl$ir$literal(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","literal","hyperfiddle.electric.impl.ir/literal",608917249),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","value","hyperfiddle.electric.impl.ir/value",-750005275),x], null);
});
hyperfiddle.electric.impl.ir.sub = (function hyperfiddle$electric$impl$ir$sub(idx){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","sub","hyperfiddle.electric.impl.ir/sub",1136962891),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129),idx], null);
});
hyperfiddle.electric.impl.ir.pub = (function hyperfiddle$electric$impl$ir$pub(init,inst){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","pub","hyperfiddle.electric.impl.ir/pub",2043418640),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),init,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),inst], null);
});
hyperfiddle.electric.impl.ir.constant = (function hyperfiddle$electric$impl$ir$constant(init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","constant","hyperfiddle.electric.impl.ir/constant",-1502571107),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),init], null);
});
hyperfiddle.electric.impl.ir.target = (function hyperfiddle$electric$impl$ir$target(deps){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","target","hyperfiddle.electric.impl.ir/target",-805067275),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),deps], null);
});
hyperfiddle.electric.impl.ir.apply = (function hyperfiddle$electric$impl$ir$apply(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41121 = arguments.length;
var i__5770__auto___41122 = (0);
while(true){
if((i__5770__auto___41122 < len__5769__auto___41121)){
args__5775__auto__.push((arguments[i__5770__auto___41122]));

var G__41123 = (i__5770__auto___41122 + (1));
i__5770__auto___41122 = G__41123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(hyperfiddle.electric.impl.ir.apply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","apply","hyperfiddle.electric.impl.ir/apply",260220457),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","fn","hyperfiddle.electric.impl.ir/fn",1996468864),f,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","args","hyperfiddle.electric.impl.ir/args",291275628),args], null);
}));

(hyperfiddle.electric.impl.ir.apply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(hyperfiddle.electric.impl.ir.apply.cljs$lang$applyTo = (function (seq41118){
var G__41119 = cljs.core.first(seq41118);
var seq41118__$1 = cljs.core.next(seq41118);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41119,seq41118__$1);
}));

hyperfiddle.electric.impl.ir.global = (function hyperfiddle$electric$impl$ir$global(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","global","hyperfiddle.electric.impl.ir/global",1116145715),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","name","hyperfiddle.electric.impl.ir/name",655661733),k], null);
});
hyperfiddle.electric.impl.ir.variable = (function hyperfiddle$electric$impl$ir$variable(init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","variable","hyperfiddle.electric.impl.ir/variable",-1331421904),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),init], null);
});
hyperfiddle.electric.impl.ir.source = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","source","hyperfiddle.electric.impl.ir/source",584033537)], null);
hyperfiddle.electric.impl.ir.input = (function hyperfiddle$electric$impl$ir$input(deps){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","input","hyperfiddle.electric.impl.ir/input",-507312859),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),deps], null);
});
hyperfiddle.electric.impl.ir.output = (function hyperfiddle$electric$impl$ir$output(init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","output","hyperfiddle.electric.impl.ir/output",-282812239),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),init], null);
});
hyperfiddle.electric.impl.ir.inject = (function hyperfiddle$electric$impl$ir$inject(slot){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","def","hyperfiddle.electric.impl.ir/def",2126358492),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351),slot], null);
});
hyperfiddle.electric.impl.ir.eval = (function hyperfiddle$electric$impl$ir$eval(form){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","eval","hyperfiddle.electric.impl.ir/eval",493333099),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","form","hyperfiddle.electric.impl.ir/form",-534651915),form], null);
});
hyperfiddle.electric.impl.ir.node = (function hyperfiddle$electric$impl$ir$node(slot){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","node","hyperfiddle.electric.impl.ir/node",1672712002),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351),slot], null);
});
hyperfiddle.electric.impl.ir.bind = (function hyperfiddle$electric$impl$ir$bind(slot,index,inst){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","bind","hyperfiddle.electric.impl.ir/bind",911083987),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","slot","hyperfiddle.electric.impl.ir/slot",1432523351),slot,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","index","hyperfiddle.electric.impl.ir/index",1690646129),index,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),inst], null);
});
hyperfiddle.electric.impl.ir.lift = (function hyperfiddle$electric$impl$ir$lift(inst){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","lift","hyperfiddle.electric.impl.ir/lift",1961703735),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","init","hyperfiddle.electric.impl.ir/init",-819637966),inst], null);
});
hyperfiddle.electric.impl.ir.do$ = (function hyperfiddle$electric$impl$ir$do(deps,inst){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","do","hyperfiddle.electric.impl.ir/do",1139773481),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","deps","hyperfiddle.electric.impl.ir/deps",-1313673773),deps,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","inst","hyperfiddle.electric.impl.ir/inst",-420394775),inst], null);
});
hyperfiddle.electric.impl.ir.nop = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425),new cljs.core.Keyword("hyperfiddle.electric.impl.ir","nop","hyperfiddle.electric.impl.ir/nop",-665072314)], null);

//# sourceMappingURL=hyperfiddle.electric.impl.ir.js.map
