goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___38817 = arguments.length;
var i__5770__auto___38818 = (0);
while(true){
if((i__5770__auto___38818 < len__5769__auto___38817)){
args__5775__auto__.push((arguments[i__5770__auto___38818]));

var G__38819 = (i__5770__auto___38818 + (1));
i__5770__auto___38818 = G__38819;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38152){
var G__38153 = cljs.core.first(seq38152);
var seq38152__$1 = cljs.core.next(seq38152);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38153,seq38152__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38156 = cljs.core.seq(sources);
var chunk__38157 = null;
var count__38158 = (0);
var i__38159 = (0);
while(true){
if((i__38159 < count__38158)){
var map__38165 = chunk__38157.cljs$core$IIndexed$_nth$arity$2(null,i__38159);
var map__38165__$1 = cljs.core.__destructure_map(map__38165);
var src = map__38165__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38166){var e_38822 = e38166;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38822);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38822.message)].join('')));
}

var G__38824 = seq__38156;
var G__38825 = chunk__38157;
var G__38826 = count__38158;
var G__38827 = (i__38159 + (1));
seq__38156 = G__38824;
chunk__38157 = G__38825;
count__38158 = G__38826;
i__38159 = G__38827;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38156);
if(temp__5804__auto__){
var seq__38156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38156__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38156__$1);
var G__38829 = cljs.core.chunk_rest(seq__38156__$1);
var G__38830 = c__5568__auto__;
var G__38831 = cljs.core.count(c__5568__auto__);
var G__38832 = (0);
seq__38156 = G__38829;
chunk__38157 = G__38830;
count__38158 = G__38831;
i__38159 = G__38832;
continue;
} else {
var map__38168 = cljs.core.first(seq__38156__$1);
var map__38168__$1 = cljs.core.__destructure_map(map__38168);
var src = map__38168__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38169){var e_38839 = e38169;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38839);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38839.message)].join('')));
}

var G__38840 = cljs.core.next(seq__38156__$1);
var G__38841 = null;
var G__38842 = (0);
var G__38843 = (0);
seq__38156 = G__38840;
chunk__38157 = G__38841;
count__38158 = G__38842;
i__38159 = G__38843;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38171 = cljs.core.seq(js_requires);
var chunk__38172 = null;
var count__38173 = (0);
var i__38174 = (0);
while(true){
if((i__38174 < count__38173)){
var js_ns = chunk__38172.cljs$core$IIndexed$_nth$arity$2(null,i__38174);
var require_str_38845 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38845);


var G__38852 = seq__38171;
var G__38853 = chunk__38172;
var G__38854 = count__38173;
var G__38855 = (i__38174 + (1));
seq__38171 = G__38852;
chunk__38172 = G__38853;
count__38173 = G__38854;
i__38174 = G__38855;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38171);
if(temp__5804__auto__){
var seq__38171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38171__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38171__$1);
var G__38856 = cljs.core.chunk_rest(seq__38171__$1);
var G__38857 = c__5568__auto__;
var G__38858 = cljs.core.count(c__5568__auto__);
var G__38859 = (0);
seq__38171 = G__38856;
chunk__38172 = G__38857;
count__38173 = G__38858;
i__38174 = G__38859;
continue;
} else {
var js_ns = cljs.core.first(seq__38171__$1);
var require_str_38860 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38860);


var G__38861 = cljs.core.next(seq__38171__$1);
var G__38862 = null;
var G__38863 = (0);
var G__38864 = (0);
seq__38171 = G__38861;
chunk__38172 = G__38862;
count__38173 = G__38863;
i__38174 = G__38864;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38178){
var map__38179 = p__38178;
var map__38179__$1 = cljs.core.__destructure_map(map__38179);
var msg = map__38179__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38181(s__38182){
return (new cljs.core.LazySeq(null,(function (){
var s__38182__$1 = s__38182;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38182__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38187 = cljs.core.first(xs__6360__auto__);
var map__38187__$1 = cljs.core.__destructure_map(map__38187);
var src = map__38187__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38182__$1,map__38187,map__38187__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38179,map__38179__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38181_$_iter__38183(s__38184){
return (new cljs.core.LazySeq(null,((function (s__38182__$1,map__38187,map__38187__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38179,map__38179__$1,msg,info,reload_info){
return (function (){
var s__38184__$1 = s__38184;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38184__$1);
if(temp__5804__auto____$1){
var s__38184__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38184__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38184__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38186 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38185 = (0);
while(true){
if((i__38185 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38185);
cljs.core.chunk_append(b__38186,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38870 = (i__38185 + (1));
i__38185 = G__38870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38186),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38181_$_iter__38183(cljs.core.chunk_rest(s__38184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38186),null);
}
} else {
var warning = cljs.core.first(s__38184__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38181_$_iter__38183(cljs.core.rest(s__38184__$2)));
}
} else {
return null;
}
break;
}
});})(s__38182__$1,map__38187,map__38187__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38179,map__38179__$1,msg,info,reload_info))
,null,null));
});})(s__38182__$1,map__38187,map__38187__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38179,map__38179__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38181(cljs.core.rest(s__38182__$1)));
} else {
var G__38871 = cljs.core.rest(s__38182__$1);
s__38182__$1 = G__38871;
continue;
}
} else {
var G__38873 = cljs.core.rest(s__38182__$1);
s__38182__$1 = G__38873;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38190_38874 = cljs.core.seq(warnings);
var chunk__38191_38875 = null;
var count__38192_38876 = (0);
var i__38193_38877 = (0);
while(true){
if((i__38193_38877 < count__38192_38876)){
var map__38199_38879 = chunk__38191_38875.cljs$core$IIndexed$_nth$arity$2(null,i__38193_38877);
var map__38199_38880__$1 = cljs.core.__destructure_map(map__38199_38879);
var w_38882 = map__38199_38880__$1;
var msg_38883__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38880__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38880__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38880__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199_38880__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38886)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38884),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38885),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38883__$1)].join(''));


var G__38889 = seq__38190_38874;
var G__38890 = chunk__38191_38875;
var G__38891 = count__38192_38876;
var G__38892 = (i__38193_38877 + (1));
seq__38190_38874 = G__38889;
chunk__38191_38875 = G__38890;
count__38192_38876 = G__38891;
i__38193_38877 = G__38892;
continue;
} else {
var temp__5804__auto___38893 = cljs.core.seq(seq__38190_38874);
if(temp__5804__auto___38893){
var seq__38190_38895__$1 = temp__5804__auto___38893;
if(cljs.core.chunked_seq_QMARK_(seq__38190_38895__$1)){
var c__5568__auto___38896 = cljs.core.chunk_first(seq__38190_38895__$1);
var G__38898 = cljs.core.chunk_rest(seq__38190_38895__$1);
var G__38899 = c__5568__auto___38896;
var G__38900 = cljs.core.count(c__5568__auto___38896);
var G__38901 = (0);
seq__38190_38874 = G__38898;
chunk__38191_38875 = G__38899;
count__38192_38876 = G__38900;
i__38193_38877 = G__38901;
continue;
} else {
var map__38200_38903 = cljs.core.first(seq__38190_38895__$1);
var map__38200_38904__$1 = cljs.core.__destructure_map(map__38200_38903);
var w_38905 = map__38200_38904__$1;
var msg_38906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38904__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38904__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38904__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200_38904__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38909)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38907),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38908),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38906__$1)].join(''));


var G__38914 = cljs.core.next(seq__38190_38895__$1);
var G__38915 = null;
var G__38916 = (0);
var G__38917 = (0);
seq__38190_38874 = G__38914;
chunk__38191_38875 = G__38915;
count__38192_38876 = G__38916;
i__38193_38877 = G__38917;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38177_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38177_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38201){
var map__38202 = p__38201;
var map__38202__$1 = cljs.core.__destructure_map(map__38202);
var msg = map__38202__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38204 = cljs.core.seq(updates);
var chunk__38206 = null;
var count__38207 = (0);
var i__38208 = (0);
while(true){
if((i__38208 < count__38207)){
var path = chunk__38206.cljs$core$IIndexed$_nth$arity$2(null,i__38208);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38414_38922 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38418_38923 = null;
var count__38419_38924 = (0);
var i__38420_38925 = (0);
while(true){
if((i__38420_38925 < count__38419_38924)){
var node_38926 = chunk__38418_38923.cljs$core$IIndexed$_nth$arity$2(null,i__38420_38925);
if(cljs.core.not(node_38926.shadow$old)){
var path_match_38928 = shadow.cljs.devtools.client.browser.match_paths(node_38926.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38928)){
var new_link_38929 = (function (){var G__38508 = node_38926.cloneNode(true);
G__38508.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38928),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38508;
})();
(node_38926.shadow$old = true);

(new_link_38929.onload = ((function (seq__38414_38922,chunk__38418_38923,count__38419_38924,i__38420_38925,seq__38204,chunk__38206,count__38207,i__38208,new_link_38929,path_match_38928,node_38926,path,map__38202,map__38202__$1,msg,updates,reload_info){
return (function (e){
var seq__38509_38930 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38511_38931 = null;
var count__38512_38932 = (0);
var i__38513_38933 = (0);
while(true){
if((i__38513_38933 < count__38512_38932)){
var map__38532_38934 = chunk__38511_38931.cljs$core$IIndexed$_nth$arity$2(null,i__38513_38933);
var map__38532_38935__$1 = cljs.core.__destructure_map(map__38532_38934);
var task_38936 = map__38532_38935__$1;
var fn_str_38937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_38935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_38935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38939 = goog.getObjectByName(fn_str_38937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38938)].join(''));

(fn_obj_38939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38939.cljs$core$IFn$_invoke$arity$2(path,new_link_38929) : fn_obj_38939.call(null,path,new_link_38929));


var G__38940 = seq__38509_38930;
var G__38941 = chunk__38511_38931;
var G__38942 = count__38512_38932;
var G__38943 = (i__38513_38933 + (1));
seq__38509_38930 = G__38940;
chunk__38511_38931 = G__38941;
count__38512_38932 = G__38942;
i__38513_38933 = G__38943;
continue;
} else {
var temp__5804__auto___38944 = cljs.core.seq(seq__38509_38930);
if(temp__5804__auto___38944){
var seq__38509_38945__$1 = temp__5804__auto___38944;
if(cljs.core.chunked_seq_QMARK_(seq__38509_38945__$1)){
var c__5568__auto___38946 = cljs.core.chunk_first(seq__38509_38945__$1);
var G__38947 = cljs.core.chunk_rest(seq__38509_38945__$1);
var G__38948 = c__5568__auto___38946;
var G__38949 = cljs.core.count(c__5568__auto___38946);
var G__38950 = (0);
seq__38509_38930 = G__38947;
chunk__38511_38931 = G__38948;
count__38512_38932 = G__38949;
i__38513_38933 = G__38950;
continue;
} else {
var map__38534_38951 = cljs.core.first(seq__38509_38945__$1);
var map__38534_38952__$1 = cljs.core.__destructure_map(map__38534_38951);
var task_38953 = map__38534_38952__$1;
var fn_str_38954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38952__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534_38952__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38956 = goog.getObjectByName(fn_str_38954,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38955)].join(''));

(fn_obj_38956.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38956.cljs$core$IFn$_invoke$arity$2(path,new_link_38929) : fn_obj_38956.call(null,path,new_link_38929));


var G__38957 = cljs.core.next(seq__38509_38945__$1);
var G__38958 = null;
var G__38959 = (0);
var G__38960 = (0);
seq__38509_38930 = G__38957;
chunk__38511_38931 = G__38958;
count__38512_38932 = G__38959;
i__38513_38933 = G__38960;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38926);
});})(seq__38414_38922,chunk__38418_38923,count__38419_38924,i__38420_38925,seq__38204,chunk__38206,count__38207,i__38208,new_link_38929,path_match_38928,node_38926,path,map__38202,map__38202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38928], 0));

goog.dom.insertSiblingAfter(new_link_38929,node_38926);


var G__38961 = seq__38414_38922;
var G__38962 = chunk__38418_38923;
var G__38963 = count__38419_38924;
var G__38964 = (i__38420_38925 + (1));
seq__38414_38922 = G__38961;
chunk__38418_38923 = G__38962;
count__38419_38924 = G__38963;
i__38420_38925 = G__38964;
continue;
} else {
var G__38965 = seq__38414_38922;
var G__38966 = chunk__38418_38923;
var G__38967 = count__38419_38924;
var G__38968 = (i__38420_38925 + (1));
seq__38414_38922 = G__38965;
chunk__38418_38923 = G__38966;
count__38419_38924 = G__38967;
i__38420_38925 = G__38968;
continue;
}
} else {
var G__38969 = seq__38414_38922;
var G__38970 = chunk__38418_38923;
var G__38971 = count__38419_38924;
var G__38972 = (i__38420_38925 + (1));
seq__38414_38922 = G__38969;
chunk__38418_38923 = G__38970;
count__38419_38924 = G__38971;
i__38420_38925 = G__38972;
continue;
}
} else {
var temp__5804__auto___38973 = cljs.core.seq(seq__38414_38922);
if(temp__5804__auto___38973){
var seq__38414_38974__$1 = temp__5804__auto___38973;
if(cljs.core.chunked_seq_QMARK_(seq__38414_38974__$1)){
var c__5568__auto___38975 = cljs.core.chunk_first(seq__38414_38974__$1);
var G__38976 = cljs.core.chunk_rest(seq__38414_38974__$1);
var G__38977 = c__5568__auto___38975;
var G__38978 = cljs.core.count(c__5568__auto___38975);
var G__38979 = (0);
seq__38414_38922 = G__38976;
chunk__38418_38923 = G__38977;
count__38419_38924 = G__38978;
i__38420_38925 = G__38979;
continue;
} else {
var node_38980 = cljs.core.first(seq__38414_38974__$1);
if(cljs.core.not(node_38980.shadow$old)){
var path_match_38981 = shadow.cljs.devtools.client.browser.match_paths(node_38980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38981)){
var new_link_38982 = (function (){var G__38536 = node_38980.cloneNode(true);
G__38536.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38536;
})();
(node_38980.shadow$old = true);

(new_link_38982.onload = ((function (seq__38414_38922,chunk__38418_38923,count__38419_38924,i__38420_38925,seq__38204,chunk__38206,count__38207,i__38208,new_link_38982,path_match_38981,node_38980,seq__38414_38974__$1,temp__5804__auto___38973,path,map__38202,map__38202__$1,msg,updates,reload_info){
return (function (e){
var seq__38537_38983 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38539_38984 = null;
var count__38540_38985 = (0);
var i__38541_38986 = (0);
while(true){
if((i__38541_38986 < count__38540_38985)){
var map__38557_38987 = chunk__38539_38984.cljs$core$IIndexed$_nth$arity$2(null,i__38541_38986);
var map__38557_38988__$1 = cljs.core.__destructure_map(map__38557_38987);
var task_38989 = map__38557_38988__$1;
var fn_str_38990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38557_38988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38557_38988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38993 = goog.getObjectByName(fn_str_38990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38991)].join(''));

(fn_obj_38993.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38993.cljs$core$IFn$_invoke$arity$2(path,new_link_38982) : fn_obj_38993.call(null,path,new_link_38982));


var G__38995 = seq__38537_38983;
var G__38996 = chunk__38539_38984;
var G__38997 = count__38540_38985;
var G__38998 = (i__38541_38986 + (1));
seq__38537_38983 = G__38995;
chunk__38539_38984 = G__38996;
count__38540_38985 = G__38997;
i__38541_38986 = G__38998;
continue;
} else {
var temp__5804__auto___38999__$1 = cljs.core.seq(seq__38537_38983);
if(temp__5804__auto___38999__$1){
var seq__38537_39001__$1 = temp__5804__auto___38999__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38537_39001__$1)){
var c__5568__auto___39002 = cljs.core.chunk_first(seq__38537_39001__$1);
var G__39003 = cljs.core.chunk_rest(seq__38537_39001__$1);
var G__39004 = c__5568__auto___39002;
var G__39005 = cljs.core.count(c__5568__auto___39002);
var G__39006 = (0);
seq__38537_38983 = G__39003;
chunk__38539_38984 = G__39004;
count__38540_38985 = G__39005;
i__38541_38986 = G__39006;
continue;
} else {
var map__38588_39007 = cljs.core.first(seq__38537_39001__$1);
var map__38588_39008__$1 = cljs.core.__destructure_map(map__38588_39007);
var task_39009 = map__38588_39008__$1;
var fn_str_39010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38588_39008__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38588_39008__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39012 = goog.getObjectByName(fn_str_39010,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39011)].join(''));

(fn_obj_39012.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39012.cljs$core$IFn$_invoke$arity$2(path,new_link_38982) : fn_obj_39012.call(null,path,new_link_38982));


var G__39013 = cljs.core.next(seq__38537_39001__$1);
var G__39014 = null;
var G__39015 = (0);
var G__39016 = (0);
seq__38537_38983 = G__39013;
chunk__38539_38984 = G__39014;
count__38540_38985 = G__39015;
i__38541_38986 = G__39016;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38980);
});})(seq__38414_38922,chunk__38418_38923,count__38419_38924,i__38420_38925,seq__38204,chunk__38206,count__38207,i__38208,new_link_38982,path_match_38981,node_38980,seq__38414_38974__$1,temp__5804__auto___38973,path,map__38202,map__38202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38981], 0));

goog.dom.insertSiblingAfter(new_link_38982,node_38980);


var G__39017 = cljs.core.next(seq__38414_38974__$1);
var G__39018 = null;
var G__39019 = (0);
var G__39020 = (0);
seq__38414_38922 = G__39017;
chunk__38418_38923 = G__39018;
count__38419_38924 = G__39019;
i__38420_38925 = G__39020;
continue;
} else {
var G__39021 = cljs.core.next(seq__38414_38974__$1);
var G__39022 = null;
var G__39023 = (0);
var G__39024 = (0);
seq__38414_38922 = G__39021;
chunk__38418_38923 = G__39022;
count__38419_38924 = G__39023;
i__38420_38925 = G__39024;
continue;
}
} else {
var G__39027 = cljs.core.next(seq__38414_38974__$1);
var G__39028 = null;
var G__39029 = (0);
var G__39030 = (0);
seq__38414_38922 = G__39027;
chunk__38418_38923 = G__39028;
count__38419_38924 = G__39029;
i__38420_38925 = G__39030;
continue;
}
}
} else {
}
}
break;
}


var G__39031 = seq__38204;
var G__39032 = chunk__38206;
var G__39033 = count__38207;
var G__39034 = (i__38208 + (1));
seq__38204 = G__39031;
chunk__38206 = G__39032;
count__38207 = G__39033;
i__38208 = G__39034;
continue;
} else {
var G__39035 = seq__38204;
var G__39036 = chunk__38206;
var G__39037 = count__38207;
var G__39038 = (i__38208 + (1));
seq__38204 = G__39035;
chunk__38206 = G__39036;
count__38207 = G__39037;
i__38208 = G__39038;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38204);
if(temp__5804__auto__){
var seq__38204__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38204__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38204__$1);
var G__39041 = cljs.core.chunk_rest(seq__38204__$1);
var G__39042 = c__5568__auto__;
var G__39043 = cljs.core.count(c__5568__auto__);
var G__39044 = (0);
seq__38204 = G__39041;
chunk__38206 = G__39042;
count__38207 = G__39043;
i__38208 = G__39044;
continue;
} else {
var path = cljs.core.first(seq__38204__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38589_39046 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38593_39047 = null;
var count__38594_39048 = (0);
var i__38595_39049 = (0);
while(true){
if((i__38595_39049 < count__38594_39048)){
var node_39050 = chunk__38593_39047.cljs$core$IIndexed$_nth$arity$2(null,i__38595_39049);
if(cljs.core.not(node_39050.shadow$old)){
var path_match_39051 = shadow.cljs.devtools.client.browser.match_paths(node_39050.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39051)){
var new_link_39052 = (function (){var G__38688 = node_39050.cloneNode(true);
G__38688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39051),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38688;
})();
(node_39050.shadow$old = true);

(new_link_39052.onload = ((function (seq__38589_39046,chunk__38593_39047,count__38594_39048,i__38595_39049,seq__38204,chunk__38206,count__38207,i__38208,new_link_39052,path_match_39051,node_39050,path,seq__38204__$1,temp__5804__auto__,map__38202,map__38202__$1,msg,updates,reload_info){
return (function (e){
var seq__38689_39053 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38691_39054 = null;
var count__38692_39055 = (0);
var i__38693_39056 = (0);
while(true){
if((i__38693_39056 < count__38692_39055)){
var map__38697_39057 = chunk__38691_39054.cljs$core$IIndexed$_nth$arity$2(null,i__38693_39056);
var map__38697_39058__$1 = cljs.core.__destructure_map(map__38697_39057);
var task_39059 = map__38697_39058__$1;
var fn_str_39060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697_39058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39062 = goog.getObjectByName(fn_str_39060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39061)].join(''));

(fn_obj_39062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39062.cljs$core$IFn$_invoke$arity$2(path,new_link_39052) : fn_obj_39062.call(null,path,new_link_39052));


var G__39063 = seq__38689_39053;
var G__39064 = chunk__38691_39054;
var G__39065 = count__38692_39055;
var G__39066 = (i__38693_39056 + (1));
seq__38689_39053 = G__39063;
chunk__38691_39054 = G__39064;
count__38692_39055 = G__39065;
i__38693_39056 = G__39066;
continue;
} else {
var temp__5804__auto___39067__$1 = cljs.core.seq(seq__38689_39053);
if(temp__5804__auto___39067__$1){
var seq__38689_39068__$1 = temp__5804__auto___39067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38689_39068__$1)){
var c__5568__auto___39069 = cljs.core.chunk_first(seq__38689_39068__$1);
var G__39070 = cljs.core.chunk_rest(seq__38689_39068__$1);
var G__39071 = c__5568__auto___39069;
var G__39072 = cljs.core.count(c__5568__auto___39069);
var G__39073 = (0);
seq__38689_39053 = G__39070;
chunk__38691_39054 = G__39071;
count__38692_39055 = G__39072;
i__38693_39056 = G__39073;
continue;
} else {
var map__38698_39074 = cljs.core.first(seq__38689_39068__$1);
var map__38698_39075__$1 = cljs.core.__destructure_map(map__38698_39074);
var task_39076 = map__38698_39075__$1;
var fn_str_39077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698_39075__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698_39075__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39079 = goog.getObjectByName(fn_str_39077,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39078)].join(''));

(fn_obj_39079.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39079.cljs$core$IFn$_invoke$arity$2(path,new_link_39052) : fn_obj_39079.call(null,path,new_link_39052));


var G__39085 = cljs.core.next(seq__38689_39068__$1);
var G__39086 = null;
var G__39087 = (0);
var G__39088 = (0);
seq__38689_39053 = G__39085;
chunk__38691_39054 = G__39086;
count__38692_39055 = G__39087;
i__38693_39056 = G__39088;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39050);
});})(seq__38589_39046,chunk__38593_39047,count__38594_39048,i__38595_39049,seq__38204,chunk__38206,count__38207,i__38208,new_link_39052,path_match_39051,node_39050,path,seq__38204__$1,temp__5804__auto__,map__38202,map__38202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39051], 0));

goog.dom.insertSiblingAfter(new_link_39052,node_39050);


var G__39089 = seq__38589_39046;
var G__39090 = chunk__38593_39047;
var G__39091 = count__38594_39048;
var G__39092 = (i__38595_39049 + (1));
seq__38589_39046 = G__39089;
chunk__38593_39047 = G__39090;
count__38594_39048 = G__39091;
i__38595_39049 = G__39092;
continue;
} else {
var G__39093 = seq__38589_39046;
var G__39094 = chunk__38593_39047;
var G__39095 = count__38594_39048;
var G__39096 = (i__38595_39049 + (1));
seq__38589_39046 = G__39093;
chunk__38593_39047 = G__39094;
count__38594_39048 = G__39095;
i__38595_39049 = G__39096;
continue;
}
} else {
var G__39097 = seq__38589_39046;
var G__39098 = chunk__38593_39047;
var G__39099 = count__38594_39048;
var G__39100 = (i__38595_39049 + (1));
seq__38589_39046 = G__39097;
chunk__38593_39047 = G__39098;
count__38594_39048 = G__39099;
i__38595_39049 = G__39100;
continue;
}
} else {
var temp__5804__auto___39101__$1 = cljs.core.seq(seq__38589_39046);
if(temp__5804__auto___39101__$1){
var seq__38589_39102__$1 = temp__5804__auto___39101__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38589_39102__$1)){
var c__5568__auto___39103 = cljs.core.chunk_first(seq__38589_39102__$1);
var G__39104 = cljs.core.chunk_rest(seq__38589_39102__$1);
var G__39105 = c__5568__auto___39103;
var G__39106 = cljs.core.count(c__5568__auto___39103);
var G__39107 = (0);
seq__38589_39046 = G__39104;
chunk__38593_39047 = G__39105;
count__38594_39048 = G__39106;
i__38595_39049 = G__39107;
continue;
} else {
var node_39108 = cljs.core.first(seq__38589_39102__$1);
if(cljs.core.not(node_39108.shadow$old)){
var path_match_39109 = shadow.cljs.devtools.client.browser.match_paths(node_39108.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39109)){
var new_link_39110 = (function (){var G__38699 = node_39108.cloneNode(true);
G__38699.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39109),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38699;
})();
(node_39108.shadow$old = true);

(new_link_39110.onload = ((function (seq__38589_39046,chunk__38593_39047,count__38594_39048,i__38595_39049,seq__38204,chunk__38206,count__38207,i__38208,new_link_39110,path_match_39109,node_39108,seq__38589_39102__$1,temp__5804__auto___39101__$1,path,seq__38204__$1,temp__5804__auto__,map__38202,map__38202__$1,msg,updates,reload_info){
return (function (e){
var seq__38700_39111 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38702_39112 = null;
var count__38703_39113 = (0);
var i__38704_39114 = (0);
while(true){
if((i__38704_39114 < count__38703_39113)){
var map__38708_39115 = chunk__38702_39112.cljs$core$IIndexed$_nth$arity$2(null,i__38704_39114);
var map__38708_39116__$1 = cljs.core.__destructure_map(map__38708_39115);
var task_39117 = map__38708_39116__$1;
var fn_str_39118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38708_39116__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38708_39116__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39122 = goog.getObjectByName(fn_str_39118,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39119)].join(''));

(fn_obj_39122.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39122.cljs$core$IFn$_invoke$arity$2(path,new_link_39110) : fn_obj_39122.call(null,path,new_link_39110));


var G__39124 = seq__38700_39111;
var G__39125 = chunk__38702_39112;
var G__39126 = count__38703_39113;
var G__39127 = (i__38704_39114 + (1));
seq__38700_39111 = G__39124;
chunk__38702_39112 = G__39125;
count__38703_39113 = G__39126;
i__38704_39114 = G__39127;
continue;
} else {
var temp__5804__auto___39128__$2 = cljs.core.seq(seq__38700_39111);
if(temp__5804__auto___39128__$2){
var seq__38700_39129__$1 = temp__5804__auto___39128__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38700_39129__$1)){
var c__5568__auto___39131 = cljs.core.chunk_first(seq__38700_39129__$1);
var G__39132 = cljs.core.chunk_rest(seq__38700_39129__$1);
var G__39133 = c__5568__auto___39131;
var G__39134 = cljs.core.count(c__5568__auto___39131);
var G__39135 = (0);
seq__38700_39111 = G__39132;
chunk__38702_39112 = G__39133;
count__38703_39113 = G__39134;
i__38704_39114 = G__39135;
continue;
} else {
var map__38712_39137 = cljs.core.first(seq__38700_39129__$1);
var map__38712_39138__$1 = cljs.core.__destructure_map(map__38712_39137);
var task_39139 = map__38712_39138__$1;
var fn_str_39140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38712_39138__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38712_39138__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39142 = goog.getObjectByName(fn_str_39140,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39141)].join(''));

(fn_obj_39142.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39142.cljs$core$IFn$_invoke$arity$2(path,new_link_39110) : fn_obj_39142.call(null,path,new_link_39110));


var G__39144 = cljs.core.next(seq__38700_39129__$1);
var G__39145 = null;
var G__39146 = (0);
var G__39147 = (0);
seq__38700_39111 = G__39144;
chunk__38702_39112 = G__39145;
count__38703_39113 = G__39146;
i__38704_39114 = G__39147;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39108);
});})(seq__38589_39046,chunk__38593_39047,count__38594_39048,i__38595_39049,seq__38204,chunk__38206,count__38207,i__38208,new_link_39110,path_match_39109,node_39108,seq__38589_39102__$1,temp__5804__auto___39101__$1,path,seq__38204__$1,temp__5804__auto__,map__38202,map__38202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39109], 0));

goog.dom.insertSiblingAfter(new_link_39110,node_39108);


var G__39151 = cljs.core.next(seq__38589_39102__$1);
var G__39152 = null;
var G__39153 = (0);
var G__39154 = (0);
seq__38589_39046 = G__39151;
chunk__38593_39047 = G__39152;
count__38594_39048 = G__39153;
i__38595_39049 = G__39154;
continue;
} else {
var G__39155 = cljs.core.next(seq__38589_39102__$1);
var G__39156 = null;
var G__39157 = (0);
var G__39158 = (0);
seq__38589_39046 = G__39155;
chunk__38593_39047 = G__39156;
count__38594_39048 = G__39157;
i__38595_39049 = G__39158;
continue;
}
} else {
var G__39159 = cljs.core.next(seq__38589_39102__$1);
var G__39160 = null;
var G__39161 = (0);
var G__39162 = (0);
seq__38589_39046 = G__39159;
chunk__38593_39047 = G__39160;
count__38594_39048 = G__39161;
i__38595_39049 = G__39162;
continue;
}
}
} else {
}
}
break;
}


var G__39163 = cljs.core.next(seq__38204__$1);
var G__39164 = null;
var G__39165 = (0);
var G__39166 = (0);
seq__38204 = G__39163;
chunk__38206 = G__39164;
count__38207 = G__39165;
i__38208 = G__39166;
continue;
} else {
var G__39167 = cljs.core.next(seq__38204__$1);
var G__39168 = null;
var G__39169 = (0);
var G__39170 = (0);
seq__38204 = G__39167;
chunk__38206 = G__39168;
count__38207 = G__39169;
i__38208 = G__39170;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38758){
var map__38761 = p__38758;
var map__38761__$1 = cljs.core.__destructure_map(map__38761);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38761__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38772){
var map__38773 = p__38772;
var map__38773__$1 = cljs.core.__destructure_map(map__38773);
var _ = map__38773__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38773__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38775,done,error){
var map__38776 = p__38775;
var map__38776__$1 = cljs.core.__destructure_map(map__38776);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38776__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38778,done,error){
var map__38779 = p__38778;
var map__38779__$1 = cljs.core.__destructure_map(map__38779);
var msg = map__38779__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38781){
var map__38782 = p__38781;
var map__38782__$1 = cljs.core.__destructure_map(map__38782);
var src = map__38782__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38782__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38783 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38783) : done.call(null,G__38783));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38784){
var map__38785 = p__38784;
var map__38785__$1 = cljs.core.__destructure_map(map__38785);
var msg__$1 = map__38785__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38785__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38787){var ex = e38787;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38791){
var map__38792 = p__38791;
var map__38792__$1 = cljs.core.__destructure_map(map__38792);
var env = map__38792__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38799){
var map__38800 = p__38799;
var map__38800__$1 = cljs.core.__destructure_map(map__38800);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38801){
var map__38802 = p__38801;
var map__38802__$1 = cljs.core.__destructure_map(map__38802);
var svc = map__38802__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38802__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
