goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__37832 = libspec;
var seq__37833 = cljs.core.seq(vec__37832);
var first__37834 = cljs.core.first(seq__37833);
var seq__37833__$1 = cljs.core.next(seq__37833);
var lib = first__37834;
var spec = seq__37833__$1;
var libspec__$1 = vec__37832;
var vec__37835 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(0),null);
var vec__37838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(1),null);
var seq__37839 = cljs.core.seq(vec__37838);
var first__37840 = cljs.core.first(seq__37839);
var seq__37839__$1 = cljs.core.next(seq__37839);
var _ = first__37840;
var first__37840__$1 = cljs.core.first(seq__37839__$1);
var seq__37839__$2 = cljs.core.next(seq__37839__$1);
var alias = first__37840__$1;
var post_spec = seq__37839__$2;
var post = vec__37838;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__37842 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37842,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__37842;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__37844 = cljs.core.seq(new_as_aliases);
var chunk__37845 = null;
var count__37846 = (0);
var i__37847 = (0);
while(true){
if((i__37847 < count__37846)){
var vec__37857 = chunk__37845.cljs$core$IIndexed$_nth$arity$2(null,i__37847);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37857,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37857,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37900 = seq__37844;
var G__37901 = chunk__37845;
var G__37902 = count__37846;
var G__37903 = (i__37847 + (1));
seq__37844 = G__37900;
chunk__37845 = G__37901;
count__37846 = G__37902;
i__37847 = G__37903;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37844);
if(temp__5804__auto__){
var seq__37844__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37844__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37844__$1);
var G__37904 = cljs.core.chunk_rest(seq__37844__$1);
var G__37905 = c__5568__auto__;
var G__37906 = cljs.core.count(c__5568__auto__);
var G__37907 = (0);
seq__37844 = G__37904;
chunk__37845 = G__37905;
count__37846 = G__37906;
i__37847 = G__37907;
continue;
} else {
var vec__37861 = cljs.core.first(seq__37844__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37908 = cljs.core.next(seq__37844__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37844 = G__37908;
chunk__37845 = G__37909;
count__37846 = G__37910;
i__37847 = G__37911;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__37869 = arguments.length;
switch (G__37869) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__37873 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__37873__$1 = cljs.core.__destructure_map(map__37873);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__37874 = ret__$1;
var G__37874__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37874,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__37874);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37874__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__37874__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37875,p__37876){
var map__37877 = p__37875;
var map__37877__$1 = cljs.core.__destructure_map(map__37877);
var ret__$1 = map__37877__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__37878 = p__37876;
var seq__37879 = cljs.core.seq(vec__37878);
var first__37880 = cljs.core.first(seq__37879);
var seq__37879__$1 = cljs.core.next(seq__37879);
var spec_key = first__37880;
var libspecs = seq__37879__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__37881 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__37881__$1 = cljs.core.__destructure_map(map__37881);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__37882 = ret__$1;
var G__37882__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37882,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__37882);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37882__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__37882__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
