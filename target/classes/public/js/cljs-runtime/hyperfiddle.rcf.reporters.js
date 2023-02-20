goog.provide('hyperfiddle.rcf.reporters');
/**
 * Returns a string representation of the current test.  Renders names
 *   in *testing-vars* as a list, then the source file and line of
 *   current assertion.
 */
hyperfiddle.rcf.reporters.testing_vars_str = (function hyperfiddle$rcf$reporters$testing_vars_str(m){
var map__39502 = m;
var map__39502__$1 = cljs.core.__destructure_map(map__39502);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39502__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39502__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39502__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null)].join('');
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284)], null),(function (m){
cljs.test.inc_report_counter_BANG_(new cljs.core.Keyword(null,"pass","pass",1574159993));

return console.log("\u2705");
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905)], null),(function (m){
return cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930)));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.test.karma","karma","shadow.test.karma/karma",588872303),new cljs.core.Keyword("hyperfiddle.rcf","pass","hyperfiddle.rcf/pass",833138284)], null),(function (m){
return cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993)));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.test.karma","karma","shadow.test.karma/karma",588872303),new cljs.core.Keyword("hyperfiddle.rcf","fail","hyperfiddle.rcf/fail",1901071905)], null),(function (m){
return cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930)));
}));

//# sourceMappingURL=hyperfiddle.rcf.reporters.js.map
