goog.provide('hyperfiddle.electric.debug');
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.debug !== 'undefined') && (typeof hyperfiddle.electric.debug.PEER_ID !== 'undefined')){
} else {
/**
 * A random unique ID generated for each Electric runtime instance (browser tab, jvm). Used to identify origin of a transfered value.
 */
hyperfiddle.electric.debug.PEER_ID = cljs.core.random_uuid();
}
hyperfiddle.electric.debug.add_stack_frame = (function hyperfiddle$electric$debug$add_stack_frame(frame,ex){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(ex),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.ex_data(ex),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448),hyperfiddle.electric.debug.PEER_ID)),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033)),(function (){var or__5045__auto__ = cljs.core.ex_cause(ex);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ex;
}
})());
});
hyperfiddle.electric.debug.error = (function hyperfiddle$electric$debug$error(var_args){
var G__42350 = arguments.length;
switch (G__42350) {
case 1:
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$1 = (function (ex){
return (new hyperfiddle.electric.Failure(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_message(ex),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.ex_data(ex),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079),new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033)),cljs.core.ex_cause(ex))));
}));

(hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$2 = (function (debug_info,failure){
var err = failure.error;
if((((err instanceof hyperfiddle.electric.Pending)) || ((err instanceof missionary.Cancelled)))){
return failure;
} else {
return (new hyperfiddle.electric.Failure(hyperfiddle.electric.debug.add_stack_frame(debug_info,err)));
}
}));

(hyperfiddle.electric.debug.error.cljs$lang$maxFixedArity = 2);

hyperfiddle.electric.debug.render_arg = (function hyperfiddle$electric$debug$render_arg(arg){
if(typeof arg === 'string'){
return arg;
} else {
if(cljs.core.ident_QMARK_(arg)){
return arg;
} else {
if((((arg instanceof hyperfiddle.electric.Failure)) || ((arg instanceof Error)))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("<exception>");
} else {
var _STAR_print_level_STAR__orig_val__42386 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__42387 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__42388 = (1);
var _STAR_print_length_STAR__temp_val__42389 = (4);
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__42388);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__42389);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg], 0));
}finally {(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__42387);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__42386);
}
}
}
}
});
hyperfiddle.electric.debug.serializable_frame = (function hyperfiddle$electric$debug$serializable_frame(frame){
if(cljs.core.truth_(new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763).cljs$core$IFn$_invoke$arity$1(frame))){
return frame;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.render_arg)),new cljs.core.Keyword("hyperfiddle.electric.debug","serializable","hyperfiddle.electric.debug/serializable",-2113729763),true);
}
});
hyperfiddle.electric.debug.serializable = (function hyperfiddle$electric$debug$serializable(map){
if(cljs.core.contains_QMARK_(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(map,new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,hyperfiddle.electric.debug.serializable_frame));
} else {
return map;
}
});
hyperfiddle.electric.debug.normalize_frame = (function hyperfiddle$electric$debug$normalize_frame(frame){
var meta = new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame);
var dbg_in_meta = contrib.data.select_ns(new cljs.core.Keyword(null,"hyperfiddle.electric.debug","hyperfiddle.electric.debug",-987645572),new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788).cljs$core$IFn$_invoke$arity$1(frame));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frame,dbg_in_meta,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(meta,dbg_in_meta)], null)], 0));
});
hyperfiddle.electric.debug.stack_trace = (function hyperfiddle$electric$debug$stack_trace(err){
var G__42433 = new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(err));
var G__42433__$1 = (((G__42433 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (frame){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215).cljs$core$IFn$_invoke$arity$1(frame));
}),G__42433));
var G__42433__$2 = (((G__42433__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812),G__42433__$1));
var G__42433__$3 = (((G__42433__$2 == null))?null:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,frame){
if(typeof frame === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,frame);
} else {
var map__42438 = hyperfiddle.electric.debug.normalize_frame(frame);
var map__42438__$1 = cljs.core.__destructure_map(map__42438);
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","origin","hyperfiddle.electric.debug/origin",-1379474448));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","type","hyperfiddle.electric.debug/type",-166806812));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","name","hyperfiddle.electric.debug/name",-35961215));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","params","hyperfiddle.electric.debug/params",-1701534765));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","macro","hyperfiddle.electric.debug/macro",-46765604));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","scope","hyperfiddle.electric.debug/scope",-708382234));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42438__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","meta","hyperfiddle.electric.debug/meta",-368038788));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.PEER_ID,origin);
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.not((function (){var fexpr__42450 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer","transfer",327423400),null,new cljs.core.Keyword(null,"toggle","toggle",1291842030),null], null), null);
return (fexpr__42450.cljs$core$IFn$_invoke$arity$1 ? fexpr__42450.cljs$core$IFn$_invoke$arity$1(type) : fexpr__42450.call(null,type));
})());
if(and__5043__auto____$1){
return "remote";
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())?null:null),(function (){var G__42451 = scope;
var G__42451__$1 = (((G__42451 instanceof cljs.core.Keyword))?G__42451.fqn:null);
switch (G__42451__$1) {
case "lexical":
return "lexically bound";

break;
case "dynamic":
return "dynamically bound";

break;
default:
return null;

}
})()], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__42455 = type;
var G__42455__$1 = (((G__42455 instanceof cljs.core.Keyword))?G__42455.fqn:null);
switch (G__42455__$1) {
case "apply":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,(function (){var G__42456 = name;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("hyperfiddle.electric.impl.runtime","fail","hyperfiddle.electric.impl.runtime/fail",-1672627762,null),G__42456)){
return new cljs.core.Symbol(null,"throw","throw",595905694,null);
} else {
return name;

}
})(),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "eval":
var map__42459 = frame;
var map__42459__$1 = cljs.core.__destructure_map(map__42459);
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","action","hyperfiddle.electric.debug/action",1557442480));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","target","hyperfiddle.electric.debug/target",2130291153));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","method","hyperfiddle.electric.debug/method",-1822364192));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42459__$1,new cljs.core.Keyword("hyperfiddle.electric.debug","args","hyperfiddle.electric.debug/args",-1101355176));
var G__42469 = action;
var G__42469__$1 = (((G__42469 instanceof cljs.core.Keyword))?G__42469.fqn:null);
switch (G__42469__$1) {
case "field-access":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",[".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),target,")"], null);

break;
case "static-call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(target),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "call":
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,target,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,cljs.core.rest(args__$1)),(new cljs.core.List(null,")",null,(1),null))], 0)))));

break;
case "fn-call":
if((!((name == null)))){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"\u2026","\u2026",781471991,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
} else {
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,"(",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(params)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"\u2026","\u2026",781471991,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(hyperfiddle.electric.debug.render_arg,args__$1),(new cljs.core.List(null,")",null,(1),null))], 0)))));
}

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<unknown interop>",frame], null);

}

break;
case "reactive-fn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",(((!((name == null))))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0)))))], null);

break;
case "reactive-defn":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reactive",cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"defn","defn",-126010802,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "try":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(try ...)"], null);

break;
case "catch":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "finally":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(finally ...)"], null);

break;
case "case-clause":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case","case",-1510733573,null),null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),null,(1),null))], 0))))], null);

break;
case "case-default":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["case default branch"], null);

break;
case "transfer":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer to",cljs.core.name(name)], null);

break;
case "toggle":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transfer"], null);

break;
default:
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,"<unknow frame>",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("hyperfiddle.electric.impl.ir","op","hyperfiddle.electric.impl.ir/op",1320467425).cljs$core$IFn$_invoke$arity$1(frame),null,(1),null))))));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(macro)?["from macro ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro)].join(''):null),(function (){var G__42480 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(meta);
if((G__42480 == null)){
return null;
} else {
return ["in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42480)].join('');
}
})(),(function (){var G__42483 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(meta);
if((G__42483 == null)){
return null;
} else {
return ["line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42483)].join('');
}
})()], null))));
}
}),cljs.core.PersistentVector.EMPTY,G__42433__$2));
var G__42433__$4 = (((G__42433__$3 == null))?null:cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (frame){
if(typeof frame === 'string'){
return frame;
} else {
return [" in ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,frame))].join('');
}
}),G__42433__$3));
if((G__42433__$4 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",G__42433__$4);
}
});
hyperfiddle.electric.debug.unwrap = (function hyperfiddle$electric$debug$unwrap(exception){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("hyperfiddle.electric.debug","trace","hyperfiddle.electric.debug/trace",1332052033),new cljs.core.Keyword("hyperfiddle.electric","type","hyperfiddle.electric/type",1565804079).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(exception)))){
return cljs.core.ex_cause(exception);
} else {
return exception;
}
});

//# sourceMappingURL=hyperfiddle.electric.debug.js.map
