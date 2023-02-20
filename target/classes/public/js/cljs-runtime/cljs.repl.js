goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36276){
var map__36277 = p__36276;
var map__36277__$1 = cljs.core.__destructure_map(map__36277);
var m = map__36277__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36290_36531 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36291_36532 = null;
var count__36292_36533 = (0);
var i__36293_36534 = (0);
while(true){
if((i__36293_36534 < count__36292_36533)){
var f_36535 = chunk__36291_36532.cljs$core$IIndexed$_nth$arity$2(null,i__36293_36534);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36535], 0));


var G__36536 = seq__36290_36531;
var G__36537 = chunk__36291_36532;
var G__36538 = count__36292_36533;
var G__36539 = (i__36293_36534 + (1));
seq__36290_36531 = G__36536;
chunk__36291_36532 = G__36537;
count__36292_36533 = G__36538;
i__36293_36534 = G__36539;
continue;
} else {
var temp__5804__auto___36540 = cljs.core.seq(seq__36290_36531);
if(temp__5804__auto___36540){
var seq__36290_36541__$1 = temp__5804__auto___36540;
if(cljs.core.chunked_seq_QMARK_(seq__36290_36541__$1)){
var c__5568__auto___36542 = cljs.core.chunk_first(seq__36290_36541__$1);
var G__36544 = cljs.core.chunk_rest(seq__36290_36541__$1);
var G__36545 = c__5568__auto___36542;
var G__36546 = cljs.core.count(c__5568__auto___36542);
var G__36547 = (0);
seq__36290_36531 = G__36544;
chunk__36291_36532 = G__36545;
count__36292_36533 = G__36546;
i__36293_36534 = G__36547;
continue;
} else {
var f_36548 = cljs.core.first(seq__36290_36541__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36548], 0));


var G__36549 = cljs.core.next(seq__36290_36541__$1);
var G__36550 = null;
var G__36551 = (0);
var G__36552 = (0);
seq__36290_36531 = G__36549;
chunk__36291_36532 = G__36550;
count__36292_36533 = G__36551;
i__36293_36534 = G__36552;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36553 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36553], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36553)))?cljs.core.second(arglists_36553):arglists_36553)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36294_36559 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36295_36560 = null;
var count__36296_36561 = (0);
var i__36297_36562 = (0);
while(true){
if((i__36297_36562 < count__36296_36561)){
var vec__36313_36563 = chunk__36295_36560.cljs$core$IIndexed$_nth$arity$2(null,i__36297_36562);
var name_36564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36313_36563,(0),null);
var map__36316_36565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36313_36563,(1),null);
var map__36316_36566__$1 = cljs.core.__destructure_map(map__36316_36565);
var doc_36567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316_36566__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36316_36566__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36564], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36568], 0));

if(cljs.core.truth_(doc_36567)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36567], 0));
} else {
}


var G__36573 = seq__36294_36559;
var G__36574 = chunk__36295_36560;
var G__36575 = count__36296_36561;
var G__36576 = (i__36297_36562 + (1));
seq__36294_36559 = G__36573;
chunk__36295_36560 = G__36574;
count__36296_36561 = G__36575;
i__36297_36562 = G__36576;
continue;
} else {
var temp__5804__auto___36577 = cljs.core.seq(seq__36294_36559);
if(temp__5804__auto___36577){
var seq__36294_36578__$1 = temp__5804__auto___36577;
if(cljs.core.chunked_seq_QMARK_(seq__36294_36578__$1)){
var c__5568__auto___36579 = cljs.core.chunk_first(seq__36294_36578__$1);
var G__36582 = cljs.core.chunk_rest(seq__36294_36578__$1);
var G__36583 = c__5568__auto___36579;
var G__36584 = cljs.core.count(c__5568__auto___36579);
var G__36585 = (0);
seq__36294_36559 = G__36582;
chunk__36295_36560 = G__36583;
count__36296_36561 = G__36584;
i__36297_36562 = G__36585;
continue;
} else {
var vec__36318_36588 = cljs.core.first(seq__36294_36578__$1);
var name_36589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36318_36588,(0),null);
var map__36321_36590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36318_36588,(1),null);
var map__36321_36591__$1 = cljs.core.__destructure_map(map__36321_36590);
var doc_36592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36591__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36321_36591__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36589], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36593], 0));

if(cljs.core.truth_(doc_36592)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36592], 0));
} else {
}


var G__36594 = cljs.core.next(seq__36294_36578__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__36294_36559 = G__36594;
chunk__36295_36560 = G__36595;
count__36296_36561 = G__36596;
i__36297_36562 = G__36597;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36323 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36324 = null;
var count__36325 = (0);
var i__36326 = (0);
while(true){
if((i__36326 < count__36325)){
var role = chunk__36324.cljs$core$IIndexed$_nth$arity$2(null,i__36326);
var temp__5804__auto___36599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36599__$1)){
var spec_36600 = temp__5804__auto___36599__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36600)], 0));
} else {
}


var G__36601 = seq__36323;
var G__36602 = chunk__36324;
var G__36603 = count__36325;
var G__36604 = (i__36326 + (1));
seq__36323 = G__36601;
chunk__36324 = G__36602;
count__36325 = G__36603;
i__36326 = G__36604;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36323);
if(temp__5804__auto____$1){
var seq__36323__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36323__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36323__$1);
var G__36606 = cljs.core.chunk_rest(seq__36323__$1);
var G__36607 = c__5568__auto__;
var G__36608 = cljs.core.count(c__5568__auto__);
var G__36609 = (0);
seq__36323 = G__36606;
chunk__36324 = G__36607;
count__36325 = G__36608;
i__36326 = G__36609;
continue;
} else {
var role = cljs.core.first(seq__36323__$1);
var temp__5804__auto___36610__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36610__$2)){
var spec_36611 = temp__5804__auto___36610__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36611)], 0));
} else {
}


var G__36612 = cljs.core.next(seq__36323__$1);
var G__36613 = null;
var G__36614 = (0);
var G__36615 = (0);
seq__36323 = G__36612;
chunk__36324 = G__36613;
count__36325 = G__36614;
i__36326 = G__36615;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36622 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36623 = cljs.core.ex_cause(t);
via = G__36622;
t = G__36623;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36350 = datafied_throwable;
var map__36350__$1 = cljs.core.__destructure_map(map__36350);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36350__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36350__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36351 = cljs.core.last(via);
var map__36351__$1 = cljs.core.__destructure_map(map__36351);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36351__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36352 = data;
var map__36352__$1 = cljs.core.__destructure_map(map__36352);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36352__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36353 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36353__$1 = cljs.core.__destructure_map(map__36353);
var top_data = map__36353__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36356 = phase;
var G__36356__$1 = (((G__36356 instanceof cljs.core.Keyword))?G__36356.fqn:null);
switch (G__36356__$1) {
case "read-source":
var map__36374 = data;
var map__36374__$1 = cljs.core.__destructure_map(map__36374);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36374__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36374__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36375 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36375__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36375,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36375);
var G__36375__$2 = (cljs.core.truth_((function (){var fexpr__36376 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36376.cljs$core$IFn$_invoke$arity$1 ? fexpr__36376.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36376.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36375__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36375__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36375__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36375__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36377 = top_data;
var G__36377__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36377,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36377);
var G__36377__$2 = (cljs.core.truth_((function (){var fexpr__36378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36378.cljs$core$IFn$_invoke$arity$1 ? fexpr__36378.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36378.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36377__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36377__$1);
var G__36377__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36377__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36377__$2);
var G__36377__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36377__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36377__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36377__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36377__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36400 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36400,(3),null);
var G__36411 = top_data;
var G__36411__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36411);
var G__36411__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36411__$1);
var G__36411__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36411__$2);
var G__36411__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36411__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36411__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36411__$4;
}

break;
case "execution":
var vec__36434 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36349_SHARP_){
var or__5045__auto__ = (p1__36349_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36440 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36440.cljs$core$IFn$_invoke$arity$1 ? fexpr__36440.cljs$core$IFn$_invoke$arity$1(p1__36349_SHARP_) : fexpr__36440.call(null,p1__36349_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36441 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36441__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36441,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36441);
var G__36441__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36441__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36441__$1);
var G__36441__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36441__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36441__$2);
var G__36441__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36441__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36441__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36441__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36441__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36356__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36477){
var map__36478 = p__36477;
var map__36478__$1 = cljs.core.__destructure_map(map__36478);
var triage_data = map__36478__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36478__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36481 = phase;
var G__36481__$1 = (((G__36481 instanceof cljs.core.Keyword))?G__36481.fqn:null);
switch (G__36481__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36482 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36483 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36484 = loc;
var G__36485 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36492_36675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36493_36676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36494_36677 = true;
var _STAR_print_fn_STAR__temp_val__36495_36678 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36494_36677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36495_36678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36474_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36474_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36493_36676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36492_36675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36482,G__36483,G__36484,G__36485) : format.call(null,G__36482,G__36483,G__36484,G__36485));

break;
case "macroexpansion":
var G__36498 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36499 = cause_type;
var G__36500 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36501 = loc;
var G__36502 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36498,G__36499,G__36500,G__36501,G__36502) : format.call(null,G__36498,G__36499,G__36500,G__36501,G__36502));

break;
case "compile-syntax-check":
var G__36503 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36504 = cause_type;
var G__36505 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36506 = loc;
var G__36507 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36503,G__36504,G__36505,G__36506,G__36507) : format.call(null,G__36503,G__36504,G__36505,G__36506,G__36507));

break;
case "compilation":
var G__36508 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36509 = cause_type;
var G__36510 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36511 = loc;
var G__36512 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36508,G__36509,G__36510,G__36511,G__36512) : format.call(null,G__36508,G__36509,G__36510,G__36511,G__36512));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36513 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36514 = symbol;
var G__36515 = loc;
var G__36516 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36517_36681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36518_36682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36519_36683 = true;
var _STAR_print_fn_STAR__temp_val__36520_36684 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36519_36683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36520_36684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36476_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36476_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36518_36682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36517_36681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36513,G__36514,G__36515,G__36516) : format.call(null,G__36513,G__36514,G__36515,G__36516));
} else {
var G__36522 = "Execution error%s at %s(%s).\n%s\n";
var G__36523 = cause_type;
var G__36524 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36525 = loc;
var G__36526 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36522,G__36523,G__36524,G__36525,G__36526) : format.call(null,G__36522,G__36523,G__36524,G__36525,G__36526));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36481__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
