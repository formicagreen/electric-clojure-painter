goog.provide('hyperfiddle.electric.impl.io');
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
hyperfiddle.electric.impl.io.write_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([hyperfiddle.electric.Failure,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((function (_){
return "failure";
}),(function (x){
var err = x.error;
if((err instanceof missionary.Cancelled)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cancelled","cancelled",488726224)], null);
} else {
if((err instanceof hyperfiddle.electric.Pending)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null);
} else {
if((err instanceof hyperfiddle.electric.Remote)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.ex_message(err),hyperfiddle.electric.debug.serializable(cljs.core.ex_data(err))], null);

}
}
}
}))])], null);
hyperfiddle.electric.impl.io.read_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["failure",cognitect.transit.read_handler((function (p__43712){
var vec__43716 = p__43712;
var seq__43717 = cljs.core.seq(vec__43716);
var first__43718 = cljs.core.first(seq__43717);
var seq__43717__$1 = cljs.core.next(seq__43717);
var tag = first__43718;
var args = seq__43717__$1;
var G__43719 = tag;
var G__43719__$1 = (((G__43719 instanceof cljs.core.Keyword))?G__43719.fqn:null);
switch (G__43719__$1) {
case "exception":
var vec__43721 = args;
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43721,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43721,(1),null);
return hyperfiddle.electric.debug.error.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(message,data));

break;
case "remote":
var vec__43724 = args;
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43724,(0),null);
return (new hyperfiddle.electric.Failure(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Remote error",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})())));

break;
case "pending":
return (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Pending())));

break;
case "cancelled":
return (new hyperfiddle.electric.Failure((new missionary.Cancelled())));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43719__$1)].join('')));

}
}))], null)], null);
hyperfiddle.electric.impl.io.set_ints = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce_kv,(function (r,i,n){
var offset = (i << (2));
var G__43736 = r;
G__43736.setInt32(offset,n);

return G__43736;
}));
/**
 * Encode a control frame to a binary segment.
 */
hyperfiddle.electric.impl.io.encode_numbers = (function hyperfiddle$electric$impl$io$encode_numbers(xs){
var required = (cljs.core.count(xs) << (2));
var G__43741 = (new ArrayBuffer(required));
hyperfiddle.electric.impl.io.set_ints((new DataView(G__43741)),xs);

return G__43741;
});
/**
 * Decode a control frame from a binary segment.
 */
hyperfiddle.electric.impl.io.decode_numbers = (function hyperfiddle$electric$impl$io$decode_numbers(b){
return cljs.core.vec((function (){
if((typeof hyperfiddle !== 'undefined') && (typeof hyperfiddle.electric !== 'undefined') && (typeof hyperfiddle.electric.impl !== 'undefined') && (typeof hyperfiddle.electric.impl.io !== 'undefined') && (typeof hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743 = (function (b,meta43744){
this.b = b;
this.meta43744 = meta43744;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43745,meta43744__$1){
var self__ = this;
var _43745__$1 = this;
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743(self__.b,meta43744__$1));
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43745){
var self__ = this;
var _43745__$1 = this;
return self__.meta43744;
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,rf,r){
var self__ = this;
var ___$1 = this;
var l = self__.b.byteLength;
var v = (new DataView(self__.b));
var r__$1 = r;
var i = (0);
while(true){
if((i < l)){
var G__44296 = (function (){var G__43751 = r__$1;
var G__43752 = v.getInt32(i);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__43751,G__43752) : rf.call(null,G__43751,G__43752));
})();
var G__44297 = (i + (4));
r__$1 = G__44296;
i = G__44297;
continue;
} else {
return r__$1;
}
break;
}
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"meta43744","meta43744",-1112507102,null)], null);
}));

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.cljs$lang$type = true);

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.cljs$lang$ctorStr = "hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43743");

(hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43743");
}));

/**
 * Positional factory function for hyperfiddle.electric.impl.io/t_hyperfiddle$electric$impl$io43743.
 */
hyperfiddle.electric.impl.io.__GT_t_hyperfiddle$electric$impl$io43743 = (function hyperfiddle$electric$impl$io$decode_numbers_$___GT_t_hyperfiddle$electric$impl$io43743(b__$1,meta43744){
return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743(b__$1,meta43744));
});

}

return (new hyperfiddle.electric.impl.io.t_hyperfiddle$electric$impl$io43743(b,cljs.core.PersistentArrayMap.EMPTY));
})()
);
});
hyperfiddle.electric.impl.io.transit_writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.write_opts);
hyperfiddle.electric.impl.io.ddef = (function hyperfiddle$electric$impl$io$ddef(err){
return (
hyperfiddle.electric.impl.io._last_error_for_repl = err)
;
});
/**
 * Encode a data frame to transit json
 */
hyperfiddle.electric.impl.io.encode = (function hyperfiddle$electric$impl$io$encode(x){
try{return cognitect.transit.write(hyperfiddle.electric.impl.io.transit_writer,x);
}catch (e43757){var err = e43757;
hyperfiddle.electric.impl.io.ddef(err);

hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"debug","debug",-1608172596),"hyperfiddle.electric.impl.io",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Unserializable reference transfer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)], 0));

if((x instanceof hyperfiddle.electric.Failure)){
var G__43760 = (new hyperfiddle.electric.Failure((new hyperfiddle.electric.Remote())));
return (hyperfiddle.electric.impl.io.encode.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.io.encode.cljs$core$IFn$_invoke$arity$1(G__43760) : hyperfiddle.electric.impl.io.encode.call(null,G__43760));
} else {
return (hyperfiddle.electric.impl.io.encode.cljs$core$IFn$_invoke$arity$1 ? hyperfiddle.electric.impl.io.encode.cljs$core$IFn$_invoke$arity$1(null) : hyperfiddle.electric.impl.io.encode.call(null,null));
}
}});
hyperfiddle.electric.impl.io.transit_reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),hyperfiddle.electric.impl.io.read_opts);
/**
 * Decode a data frame from transit json
 */
hyperfiddle.electric.impl.io.decode = (function hyperfiddle$electric$impl$io$decode(s){
return cognitect.transit.read(hyperfiddle.electric.impl.io.transit_reader,s);
});
hyperfiddle.electric.impl.io.decode_str = (function hyperfiddle$electric$impl$io$decode_str(x){
try{var G__43772 = hyperfiddle.electric.impl.io.decode(x);
hyperfiddle.logger.log_STAR_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"trace","trace",-1082747415),"hyperfiddle.electric.impl.io",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\uD83D\uDD3D",G__43772], 0));

return G__43772;
}catch (e43770){var t = e43770;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failed to decode",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),x], null),t);
}});
hyperfiddle.electric.impl.io.chunk_size = ((65536) >> (2));
hyperfiddle.electric.impl.io.message_reader = (function hyperfiddle$electric$impl$io$message_reader(_QMARK_read){

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43774_block_7 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_7(cr43774_state){
try{var cr43774_place_22 = (cr43774_state[(7)]);
var cr43774_place_32 = cljs.core.persistent_BANG_;
var cr43774_place_33 = cr43774_place_22;
var cr43774_place_34 = (function (){var G__43875 = cr43774_place_33;
var fexpr__43874 = cr43774_place_32;
return (fexpr__43874.cljs$core$IFn$_invoke$arity$1 ? fexpr__43874.cljs$core$IFn$_invoke$arity$1(G__43875) : fexpr__43874.call(null,G__43875));
})();
(cr43774_state[(0)] = cr43774_block_8);

(cr43774_state[(7)] = null);

(cr43774_state[(1)] = cr43774_place_34);

return cr43774_state;
}catch (e43869){var cr43774_exception = e43869;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(5)] = null);

(cr43774_state[(7)] = null);

throw cr43774_exception;
}});
var cr43774_block_10 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_10(cr43774_state){
try{var cr43774_place_7 = (cr43774_state[(2)]);
(cr43774_state[(0)] = null);

(cr43774_state[(2)] = null);

return cr43774_place_7;
}catch (e43885){var cr43774_exception = e43885;
(cr43774_state[(0)] = null);

(cr43774_state[(2)] = null);

throw cr43774_exception;
}});
var cr43774_block_6 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_6(cr43774_state){
try{var cr43774_place_22 = (cr43774_state[(7)]);
var cr43774_place_30 = missionary.core.unpark();
var cr43774_place_31 = cr43774_place_22;
(cr43774_state[(0)] = cr43774_block_4);

(cr43774_state[(7)] = null);

(cr43774_state[(1)] = cr43774_place_30);

(cr43774_state[(6)] = cr43774_place_31);

return cr43774_state;
}catch (e43887){var cr43774_exception = e43887;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(5)] = null);

(cr43774_state[(7)] = null);

(cr43774_state[(6)] = null);

throw cr43774_exception;
}});
var cr43774_block_8 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_8(cr43774_state){
try{var cr43774_place_28 = (cr43774_state[(1)]);
var cr43774_place_8 = (cr43774_state[(3)]);
var cr43774_place_9 = (cr43774_state[(4)]);
var cr43774_place_10 = (cr43774_state[(5)]);
var cr43774_place_35 = (function (){var G__43903 = cr43774_place_10;
var G__43904 = cr43774_place_28;
var fexpr__43902 = cr43774_place_9;
return (fexpr__43902.cljs$core$IFn$_invoke$arity$2 ? fexpr__43902.cljs$core$IFn$_invoke$arity$2(G__43903,G__43904) : fexpr__43902.call(null,G__43903,G__43904));
})();
var cr43774_place_36 = (function (){var G__43906 = cr43774_place_35;
var fexpr__43905 = cr43774_place_8;
return (fexpr__43905.cljs$core$IFn$_invoke$arity$1 ? fexpr__43905.cljs$core$IFn$_invoke$arity$1(G__43906) : fexpr__43905.call(null,G__43906));
})();
(cr43774_state[(0)] = cr43774_block_10);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(5)] = null);

(cr43774_state[(2)] = cr43774_place_36);

return cr43774_state;
}catch (e43891){var cr43774_exception = e43891;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(5)] = null);

throw cr43774_exception;
}});
var cr43774_block_3 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_3(cr43774_state){
try{var cr43774_place_2 = (cr43774_state[(1)]);
var cr43774_place_4 = (cr43774_state[(3)]);
var cr43774_place_8 = cljs.core.persistent_BANG_;
var cr43774_place_9 = cljs.core.conj_BANG_;
var cr43774_place_10 = cr43774_place_2;
var cr43774_place_11 = cr43774_place_4;
var cr43774_place_12 = cljs.core.transient$;
var cr43774_place_13 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43774_place_14 = (function (){var G__43915 = cr43774_place_13;
var fexpr__43914 = cr43774_place_12;
return (fexpr__43914.cljs$core$IFn$_invoke$arity$1 ? fexpr__43914.cljs$core$IFn$_invoke$arity$1(G__43915) : fexpr__43914.call(null,G__43915));
})();
(cr43774_state[(0)] = cr43774_block_4);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(3)] = cr43774_place_8);

(cr43774_state[(4)] = cr43774_place_9);

(cr43774_state[(5)] = cr43774_place_10);

(cr43774_state[(1)] = cr43774_place_11);

(cr43774_state[(6)] = cr43774_place_14);

return cr43774_state;
}catch (e43907){var cr43774_exception = e43907;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(3)] = null);

throw cr43774_exception;
}});
var cr43774_block_1 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_1(cr43774_state){
try{var cr43774_place_3 = _QMARK_read;
(cr43774_state[(0)] = cr43774_block_2);

return missionary.core.park(cr43774_place_3);
}catch (e43922){var cr43774_exception = e43922;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

throw cr43774_exception;
}});
var cr43774_block_4 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_4(cr43774_state){
try{var cr43774_place_11 = (cr43774_state[(1)]);
var cr43774_place_14 = (cr43774_state[(6)]);
var cr43774_place_15 = hyperfiddle.electric.impl.io.decode_numbers;
var cr43774_place_16 = cr43774_place_11;
var cr43774_place_17 = (function (){var G__43928 = cr43774_place_16;
var fexpr__43927 = cr43774_place_15;
return (fexpr__43927.cljs$core$IFn$_invoke$arity$1 ? fexpr__43927.cljs$core$IFn$_invoke$arity$1(G__43928) : fexpr__43927.call(null,G__43928));
})();
var cr43774_place_18 = cljs.core.reduce;
var cr43774_place_19 = cljs.core.conj_BANG_;
var cr43774_place_20 = cr43774_place_14;
var cr43774_place_21 = cr43774_place_17;
var cr43774_place_22 = (function (){var G__43930 = cr43774_place_19;
var G__43931 = cr43774_place_20;
var G__43933 = cr43774_place_21;
var fexpr__43929 = cr43774_place_18;
return (fexpr__43929.cljs$core$IFn$_invoke$arity$3 ? fexpr__43929.cljs$core$IFn$_invoke$arity$3(G__43930,G__43931,G__43933) : fexpr__43929.call(null,G__43930,G__43931,G__43933));
})();
var cr43774_place_23 = cljs.core.count;
var cr43774_place_24 = cr43774_place_17;
var cr43774_place_25 = (function (){var G__43935 = cr43774_place_24;
var fexpr__43934 = cr43774_place_23;
return (fexpr__43934.cljs$core$IFn$_invoke$arity$1 ? fexpr__43934.cljs$core$IFn$_invoke$arity$1(G__43935) : fexpr__43934.call(null,G__43935));
})();
var cr43774_place_26 = hyperfiddle.electric.impl.io.chunk_size;
var cr43774_place_27 = (cr43774_place_25 < cr43774_place_26);
var cr43774_place_28 = null;
if(cr43774_place_27){
(cr43774_state[(0)] = cr43774_block_7);

(cr43774_state[(1)] = null);

(cr43774_state[(6)] = null);

(cr43774_state[(1)] = cr43774_place_28);

(cr43774_state[(7)] = cr43774_place_22);

return cr43774_state;
} else {
(cr43774_state[(0)] = cr43774_block_5);

(cr43774_state[(7)] = cr43774_place_22);

return cr43774_state;
}
}catch (e43925){var cr43774_exception = e43925;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(5)] = null);

(cr43774_state[(6)] = null);

throw cr43774_exception;
}});
var cr43774_block_0 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_0(cr43774_state){
try{var cr43774_place_0 = cljs.core.transient$;
var cr43774_place_1 = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IVector], null));
var cr43774_place_2 = (function (){var G__43939 = cr43774_place_1;
var fexpr__43938 = cr43774_place_0;
return (fexpr__43938.cljs$core$IFn$_invoke$arity$1 ? fexpr__43938.cljs$core$IFn$_invoke$arity$1(G__43939) : fexpr__43938.call(null,G__43939));
})();
(cr43774_state[(0)] = cr43774_block_1);

(cr43774_state[(1)] = cr43774_place_2);

return cr43774_state;
}catch (e43936){var cr43774_exception = e43936;
(cr43774_state[(0)] = null);

throw cr43774_exception;
}});
var cr43774_block_5 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_5(cr43774_state){
try{var cr43774_place_29 = _QMARK_read;
(cr43774_state[(0)] = cr43774_block_6);

return missionary.core.park(cr43774_place_29);
}catch (e43940){var cr43774_exception = e43940;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

(cr43774_state[(4)] = null);

(cr43774_state[(2)] = null);

(cr43774_state[(5)] = null);

(cr43774_state[(7)] = null);

(cr43774_state[(6)] = null);

throw cr43774_exception;
}});
var cr43774_block_2 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_2(cr43774_state){
try{var cr43774_place_4 = missionary.core.unpark();
var cr43774_place_5 = cr43774_place_4;
var cr43774_place_6 = typeof cr43774_place_5 === 'string';
var cr43774_place_7 = null;
if(cr43774_place_6){
(cr43774_state[(0)] = cr43774_block_9);

(cr43774_state[(3)] = cr43774_place_4);

return cr43774_state;
} else {
(cr43774_state[(0)] = cr43774_block_3);

(cr43774_state[(3)] = cr43774_place_4);

(cr43774_state[(2)] = cr43774_place_7);

return cr43774_state;
}
}catch (e43945){var cr43774_exception = e43945;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

throw cr43774_exception;
}});
var cr43774_block_9 = (function hyperfiddle$electric$impl$io$message_reader_$_cr43774_block_9(cr43774_state){
try{var cr43774_place_2 = (cr43774_state[(1)]);
var cr43774_place_4 = (cr43774_state[(3)]);
var cr43774_place_37 = cljs.core.conj_BANG_;
var cr43774_place_38 = cr43774_place_2;
var cr43774_place_39 = hyperfiddle.electric.impl.io.decode_str;
var cr43774_place_40 = cr43774_place_4;
var cr43774_place_41 = (function (){var G__43957 = cr43774_place_40;
var fexpr__43956 = cr43774_place_39;
return (fexpr__43956.cljs$core$IFn$_invoke$arity$1 ? fexpr__43956.cljs$core$IFn$_invoke$arity$1(G__43957) : fexpr__43956.call(null,G__43957));
})();
var cr43774_place_42 = (function (){var G__43963 = cr43774_place_38;
var G__43964 = cr43774_place_41;
var fexpr__43962 = cr43774_place_37;
return (fexpr__43962.cljs$core$IFn$_invoke$arity$2 ? fexpr__43962.cljs$core$IFn$_invoke$arity$2(G__43963,G__43964) : fexpr__43962.call(null,G__43963,G__43964));
})();
(cr43774_state[(0)] = cr43774_block_1);

(cr43774_state[(3)] = null);

(cr43774_state[(1)] = cr43774_place_42);

return cr43774_state;
}catch (e43948){var cr43774_exception = e43948;
(cr43774_state[(0)] = null);

(cr43774_state[(1)] = null);

(cr43774_state[(3)] = null);

throw cr43774_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43969 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((8));
(G__43969[(0)] = cr43774_block_0);

return G__43969;
})());
})(),missionary.core.sp_run);
});
/**
 * Returns a function taking an Electric message and returning a task writing it as individual frames using provided
 * function. Might cut a message into chunks if its size would exceed the server payload limit.
 * An empty message (0b) is written to notify the end of frame.
 */
hyperfiddle.electric.impl.io.message_writer = (function hyperfiddle$electric$impl$io$message_writer(write){
return (function (p1__43970_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43971_block_5 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_5(cr43971_state){
try{var cr43971_place_29 = (cr43971_state[(2)]);
var cr43971_place_28 = (cr43971_state[(5)]);
var cr43971_place_42 = (cljs.core.truth_(cr43971_place_29)?(function(){throw cr43971_place_28})():cr43971_place_28);
var cr43971_place_43 = write;
var cr43971_place_44 = cr43971_place_42;
var cr43971_place_45 = (function (){var G__44126 = cr43971_place_44;
var fexpr__44125 = cr43971_place_43;
return (fexpr__44125.cljs$core$IFn$_invoke$arity$1 ? fexpr__44125.cljs$core$IFn$_invoke$arity$1(G__44126) : fexpr__44125.call(null,G__44126));
})();
(cr43971_state[(0)] = cr43971_block_6);

(cr43971_state[(2)] = null);

(cr43971_state[(5)] = null);

return missionary.core.park(cr43971_place_45);
}catch (e44124){var cr43971_exception = e44124;
(cr43971_state[(0)] = null);

(cr43971_state[(2)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(4)] = null);

(cr43971_state[(5)] = null);

throw cr43971_exception;
}});
var cr43971_block_6 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_6(cr43971_state){
try{var cr43971_place_21 = (cr43971_state[(4)]);
var cr43971_place_46 = missionary.core.unpark();
var cr43971_place_47 = cr43971_place_21;
(cr43971_state[(0)] = cr43971_block_1);

(cr43971_state[(4)] = null);

(cr43971_state[(1)] = cr43971_place_47);

return cr43971_state;
}catch (e44128){var cr43971_exception = e44128;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(4)] = null);

throw cr43971_exception;
}});
var cr43971_block_4 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_4(cr43971_state){
try{var cr43971_place_20 = (cr43971_state[(3)]);
var cr43971_place_28 = (cr43971_state[(5)]);
var cr43971_place_33 = cr43971_place_28;
var cr43971_place_34 = cljs.core.ex_info;
var cr43971_place_35 = "Failed to encode";
var cr43971_place_36 = new cljs.core.Keyword(null,"value","value",305978217);
var cr43971_place_37 = cr43971_place_20;
var cr43971_place_38 = cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([cr43971_place_36,cr43971_place_37]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr43971_place_39 = cr43971_place_33;
var cr43971_place_40 = (function (){var G__44134 = cr43971_place_35;
var G__44135 = cr43971_place_38;
var G__44136 = cr43971_place_39;
var fexpr__44133 = cr43971_place_34;
return (fexpr__44133.cljs$core$IFn$_invoke$arity$3 ? fexpr__44133.cljs$core$IFn$_invoke$arity$3(G__44134,G__44135,G__44136) : fexpr__44133.call(null,G__44134,G__44135,G__44136));
})();
var cr43971_place_41 = (function(){throw cr43971_place_40})();
(cr43971_state[(0)] = null);

(cr43971_state[(2)] = null);

(cr43971_state[(3)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(4)] = null);

(cr43971_state[(5)] = null);

return null;
}catch (e44130){var cr43971_exception = e44130;
(cr43971_state[(0)] = cr43971_block_5);

(cr43971_state[(3)] = null);

(cr43971_state[(2)] = true);

(cr43971_state[(5)] = cr43971_exception);

return cr43971_state;
}});
var cr43971_block_8 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_8(cr43971_state){
try{var cr43971_place_50 = (cr43971_state[(2)]);
var cr43971_place_51 = cljs.core.count;
var cr43971_place_52 = cr43971_place_50;
var cr43971_place_53 = (function (){var G__44139 = cr43971_place_52;
var fexpr__44138 = cr43971_place_51;
return (fexpr__44138.cljs$core$IFn$_invoke$arity$1 ? fexpr__44138.cljs$core$IFn$_invoke$arity$1(G__44139) : fexpr__44138.call(null,G__44139));
})();
var cr43971_place_54 = hyperfiddle.electric.impl.io.chunk_size;
var cr43971_place_55 = (cr43971_place_53 >= cr43971_place_54);
var cr43971_place_56 = null;
if(cr43971_place_55){
(cr43971_state[(0)] = cr43971_block_11);

return cr43971_state;
} else {
(cr43971_state[(0)] = cr43971_block_9);

(cr43971_state[(3)] = cr43971_place_56);

return cr43971_state;
}
}catch (e44137){var cr43971_exception = e44137;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(2)] = null);

throw cr43971_exception;
}});
var cr43971_block_1 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_1(cr43971_state){
try{var cr43971_place_4 = (cr43971_state[(1)]);
var cr43971_place_5 = cr43971_place_4;
var cr43971_place_6 = cr43971_place_5;
var cr43971_place_7 = null;
var cr43971_place_8 = (cr43971_place_6 == cr43971_place_7);
var cr43971_place_9 = null;
if(cr43971_place_8){
(cr43971_state[(0)] = cr43971_block_7);

(cr43971_state[(1)] = null);

(cr43971_state[(1)] = cr43971_place_9);

return cr43971_state;
} else {
(cr43971_state[(0)] = cr43971_block_2);

(cr43971_state[(2)] = cr43971_place_5);

return cr43971_state;
}
}catch (e44141){var cr43971_exception = e44141;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

throw cr43971_exception;
}});
var cr43971_block_13 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_13(cr43971_state){
try{var cr43971_place_56 = (cr43971_state[(3)]);
(cr43971_state[(0)] = cr43971_block_14);

(cr43971_state[(3)] = null);

(cr43971_state[(1)] = cr43971_place_56);

return cr43971_state;
}catch (e44143){var cr43971_exception = e44143;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(3)] = null);

throw cr43971_exception;
}});
var cr43971_block_14 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_14(cr43971_state){
try{var cr43971_place_9 = (cr43971_state[(1)]);
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

return cr43971_place_9;
}catch (e44151){var cr43971_exception = e44151;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

throw cr43971_exception;
}});
var cr43971_block_11 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_11(cr43971_state){
try{var cr43971_place_50 = (cr43971_state[(2)]);
var cr43971_place_64 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43971_place_65 = cljs.core.subvec;
var cr43971_place_66 = cr43971_place_50;
var cr43971_place_67 = (0);
var cr43971_place_68 = hyperfiddle.electric.impl.io.chunk_size;
var cr43971_place_69 = (function (){var G__44161 = cr43971_place_66;
var G__44162 = cr43971_place_67;
var G__44163 = cr43971_place_68;
var fexpr__44160 = cr43971_place_65;
return (fexpr__44160.cljs$core$IFn$_invoke$arity$3 ? fexpr__44160.cljs$core$IFn$_invoke$arity$3(G__44161,G__44162,G__44163) : fexpr__44160.call(null,G__44161,G__44162,G__44163));
})();
var cr43971_place_70 = (function (){var G__44166 = cr43971_place_69;
var fexpr__44165 = cr43971_place_64;
return (fexpr__44165.cljs$core$IFn$_invoke$arity$1 ? fexpr__44165.cljs$core$IFn$_invoke$arity$1(G__44166) : fexpr__44165.call(null,G__44166));
})();
var cr43971_place_71 = write;
var cr43971_place_72 = cr43971_place_70;
var cr43971_place_73 = (function (){var G__44168 = cr43971_place_72;
var fexpr__44167 = cr43971_place_71;
return (fexpr__44167.cljs$core$IFn$_invoke$arity$1 ? fexpr__44167.cljs$core$IFn$_invoke$arity$1(G__44168) : fexpr__44167.call(null,G__44168));
})();
(cr43971_state[(0)] = cr43971_block_12);

return missionary.core.park(cr43971_place_73);
}catch (e44157){var cr43971_exception = e44157;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(2)] = null);

throw cr43971_exception;
}});
var cr43971_block_9 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_9(cr43971_state){
try{var cr43971_place_50 = (cr43971_state[(2)]);
var cr43971_place_57 = hyperfiddle.electric.impl.io.encode_numbers;
var cr43971_place_58 = cr43971_place_50;
var cr43971_place_59 = (function (){var G__44173 = cr43971_place_58;
var fexpr__44172 = cr43971_place_57;
return (fexpr__44172.cljs$core$IFn$_invoke$arity$1 ? fexpr__44172.cljs$core$IFn$_invoke$arity$1(G__44173) : fexpr__44172.call(null,G__44173));
})();
var cr43971_place_60 = write;
var cr43971_place_61 = cr43971_place_59;
var cr43971_place_62 = (function (){var G__44179 = cr43971_place_61;
var fexpr__44178 = cr43971_place_60;
return (fexpr__44178.cljs$core$IFn$_invoke$arity$1 ? fexpr__44178.cljs$core$IFn$_invoke$arity$1(G__44179) : fexpr__44178.call(null,G__44179));
})();
(cr43971_state[(0)] = cr43971_block_10);

(cr43971_state[(2)] = null);

return missionary.core.park(cr43971_place_62);
}catch (e44170){var cr43971_exception = e44170;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(3)] = null);

(cr43971_state[(2)] = null);

throw cr43971_exception;
}});
var cr43971_block_10 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_10(cr43971_state){
try{var cr43971_place_63 = missionary.core.unpark();
(cr43971_state[(0)] = cr43971_block_13);

(cr43971_state[(3)] = cr43971_place_63);

return cr43971_state;
}catch (e44190){var cr43971_exception = e44190;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(3)] = null);

throw cr43971_exception;
}});
var cr43971_block_3 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_3(cr43971_state){
try{var cr43971_place_20 = (cr43971_state[(3)]);
var cr43971_place_30 = hyperfiddle.electric.impl.io.encode;
var cr43971_place_31 = cr43971_place_20;
var cr43971_place_32 = (function (){var G__44207 = cr43971_place_31;
var fexpr__44206 = cr43971_place_30;
return (fexpr__44206.cljs$core$IFn$_invoke$arity$1 ? fexpr__44206.cljs$core$IFn$_invoke$arity$1(G__44207) : fexpr__44206.call(null,G__44207));
})();
(cr43971_state[(0)] = cr43971_block_5);

(cr43971_state[(3)] = null);

(cr43971_state[(5)] = cr43971_place_32);

return cr43971_state;
}catch (e44199){var cr43971_exception = e44199;
(cr43971_state[(0)] = cr43971_block_4);

(cr43971_state[(5)] = cr43971_exception);

return cr43971_state;
}});
var cr43971_block_7 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_7(cr43971_state){
try{var cr43971_place_48 = cljs.core.peek;
var cr43971_place_49 = p1__43970_SHARP_;
var cr43971_place_50 = (function (){var G__44212 = cr43971_place_49;
var fexpr__44211 = cr43971_place_48;
return (fexpr__44211.cljs$core$IFn$_invoke$arity$1 ? fexpr__44211.cljs$core$IFn$_invoke$arity$1(G__44212) : fexpr__44211.call(null,G__44212));
})();
(cr43971_state[(0)] = cr43971_block_8);

(cr43971_state[(2)] = cr43971_place_50);

return cr43971_state;
}catch (e44210){var cr43971_exception = e44210;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

throw cr43971_exception;
}});
var cr43971_block_0 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_0(cr43971_state){
try{var cr43971_place_0 = cljs.core.seq;
var cr43971_place_1 = cljs.core.pop;
var cr43971_place_2 = p1__43970_SHARP_;
var cr43971_place_3 = (function (){var G__44218 = cr43971_place_2;
var fexpr__44217 = cr43971_place_1;
return (fexpr__44217.cljs$core$IFn$_invoke$arity$1 ? fexpr__44217.cljs$core$IFn$_invoke$arity$1(G__44218) : fexpr__44217.call(null,G__44218));
})();
var cr43971_place_4 = (function (){var G__44222 = cr43971_place_3;
var fexpr__44221 = cr43971_place_0;
return (fexpr__44221.cljs$core$IFn$_invoke$arity$1 ? fexpr__44221.cljs$core$IFn$_invoke$arity$1(G__44222) : fexpr__44221.call(null,G__44222));
})();
(cr43971_state[(0)] = cr43971_block_1);

(cr43971_state[(1)] = cr43971_place_4);

return cr43971_state;
}catch (e44215){var cr43971_exception = e44215;
(cr43971_state[(0)] = null);

throw cr43971_exception;
}});
var cr43971_block_2 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_2(cr43971_state){
try{var cr43971_place_5 = (cr43971_state[(2)]);
var cr43971_place_10 = cr43971_place_5;
var cr43971_place_11 = cljs.core.seq;
var cr43971_place_12 = cr43971_place_10;
var cr43971_place_13 = (function (){var G__44234 = cr43971_place_12;
var fexpr__44233 = cr43971_place_11;
return (fexpr__44233.cljs$core$IFn$_invoke$arity$1 ? fexpr__44233.cljs$core$IFn$_invoke$arity$1(G__44234) : fexpr__44233.call(null,G__44234));
})();
var cr43971_place_14 = cljs.core.first;
var cr43971_place_15 = cr43971_place_13;
var cr43971_place_16 = (function (){var G__44238 = cr43971_place_15;
var fexpr__44237 = cr43971_place_14;
return (fexpr__44237.cljs$core$IFn$_invoke$arity$1 ? fexpr__44237.cljs$core$IFn$_invoke$arity$1(G__44238) : fexpr__44237.call(null,G__44238));
})();
var cr43971_place_17 = cljs.core.next;
var cr43971_place_18 = cr43971_place_13;
var cr43971_place_19 = (function (){var G__44240 = cr43971_place_18;
var fexpr__44239 = cr43971_place_17;
return (fexpr__44239.cljs$core$IFn$_invoke$arity$1 ? fexpr__44239.cljs$core$IFn$_invoke$arity$1(G__44240) : fexpr__44239.call(null,G__44240));
})();
var cr43971_place_20 = cr43971_place_16;
var cr43971_place_21 = cr43971_place_19;
var cr43971_place_22 = hyperfiddle.logger.log_STAR_;
var cr43971_place_23 = new cljs.core.Keyword(null,"trace","trace",-1082747415);
var cr43971_place_24 = "hyperfiddle.electric.impl.io";
var cr43971_place_25 = "\uD83D\uDD3C";
var cr43971_place_26 = cr43971_place_20;
var cr43971_place_27 = (function (){var G__44245 = cr43971_place_23;
var G__44246 = cr43971_place_24;
var G__44247 = cr43971_place_25;
var G__44248 = cr43971_place_26;
var fexpr__44244 = cr43971_place_22;
return (fexpr__44244.cljs$core$IFn$_invoke$arity$4 ? fexpr__44244.cljs$core$IFn$_invoke$arity$4(G__44245,G__44246,G__44247,G__44248) : fexpr__44244.call(null,G__44245,G__44246,G__44247,G__44248));
})();
var cr43971_place_28 = null;
var cr43971_place_29 = false;
(cr43971_state[(0)] = cr43971_block_3);

(cr43971_state[(2)] = null);

(cr43971_state[(2)] = cr43971_place_29);

(cr43971_state[(3)] = cr43971_place_20);

(cr43971_state[(4)] = cr43971_place_21);

(cr43971_state[(5)] = cr43971_place_28);

return cr43971_state;
}catch (e44225){var cr43971_exception = e44225;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(2)] = null);

throw cr43971_exception;
}});
var cr43971_block_12 = (function hyperfiddle$electric$impl$io$message_writer_$_cr43971_block_12(cr43971_state){
try{var cr43971_place_50 = (cr43971_state[(2)]);
var cr43971_place_74 = missionary.core.unpark();
var cr43971_place_75 = cljs.core.subvec;
var cr43971_place_76 = cr43971_place_50;
var cr43971_place_77 = hyperfiddle.electric.impl.io.chunk_size;
var cr43971_place_78 = (function (){var G__44260 = cr43971_place_76;
var G__44261 = cr43971_place_77;
var fexpr__44259 = cr43971_place_75;
return (fexpr__44259.cljs$core$IFn$_invoke$arity$2 ? fexpr__44259.cljs$core$IFn$_invoke$arity$2(G__44260,G__44261) : fexpr__44259.call(null,G__44260,G__44261));
})();
(cr43971_state[(0)] = cr43971_block_8);

(cr43971_state[(2)] = cr43971_place_78);

return cr43971_state;
}catch (e44254){var cr43971_exception = e44254;
(cr43971_state[(0)] = null);

(cr43971_state[(1)] = null);

(cr43971_state[(2)] = null);

throw cr43971_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44264 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44264[(0)] = cr43971_block_0);

return G__44264;
})());
})(),missionary.core.sp_run);
});
});
/**
 * A transducer partitioning a sequence of network messages into Electric events.
 */
hyperfiddle.electric.impl.io.decoder = (function hyperfiddle$electric$impl$io$decoder(rf){
var data = (function (){var G__44267 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44267[(0)] = cljs.core.PersistentVector.EMPTY);

(G__44267[(1)] = cljs.core.PersistentVector.EMPTY);

return G__44267;
})();
return (function() {
var G__44327 = null;
var G__44327__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44327__1 = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentVector.EMPTY,(data[(0)]),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(data[(1)])], 0))){
} else {
throw (new Error("Assert failed: (= [] (aget data 0) (aget data 1))"));
}

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44327__2 = (function (r,x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(data[(1)]))){
} else {
throw (new Error("Assert failed: (= [] (aget data 1))"));
}

(data[(0)] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),hyperfiddle.electric.impl.io.decode_str(x)));

return r;
} else {
var xs = hyperfiddle.electric.impl.io.decode_numbers(x);
(data[(1)] = cljs.core.into.cljs$core$IFn$_invoke$arity$2((data[(1)]),xs));

if((cljs.core.count(xs) < hyperfiddle.electric.impl.io.chunk_size)){
var x__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((data[(0)]),(data[(1)]));
(data[(0)] = cljs.core.PersistentVector.EMPTY);

(data[(1)] = cljs.core.PersistentVector.EMPTY);

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x__$1) : rf.call(null,r,x__$1));
} else {
return r;
}
}
});
G__44327 = function(r,x){
switch(arguments.length){
case 0:
return G__44327__0.call(this);
case 1:
return G__44327__1.call(this,r);
case 2:
return G__44327__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44327.cljs$core$IFn$_invoke$arity$0 = G__44327__0;
G__44327.cljs$core$IFn$_invoke$arity$1 = G__44327__1;
G__44327.cljs$core$IFn$_invoke$arity$2 = G__44327__2;
return G__44327;
})()
});
/**
 * A transducer expanding Electric events to a sequence of network messages.
 */
hyperfiddle.electric.impl.io.encoder = (function hyperfiddle$electric$impl$io$encoder(rf){
return (function() {
var G__44331 = null;
var G__44331__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__44331__1 = (function (r){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(r) : rf.call(null,r));
});
var G__44331__2 = (function (r,x){
var r__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode),cljs.core.pop(x)], 0)));
var r__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,r__$1,cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.chunk_size),cljs.core.map.cljs$core$IFn$_invoke$arity$1(hyperfiddle.electric.impl.io.encode_numbers),cljs.core.peek(x)], 0)));
var G__44284 = cljs.core.mod(cljs.core.count(cljs.core.peek(x)),hyperfiddle.electric.impl.io.chunk_size);
switch (G__44284) {
case (0):
var G__44285 = r__$2;
var G__44286 = hyperfiddle.electric.impl.io.encode_numbers(cljs.core.PersistentVector.EMPTY);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__44285,G__44286) : rf.call(null,G__44285,G__44286));

break;
default:
return r__$2;

}
});
G__44331 = function(r,x){
switch(arguments.length){
case 0:
return G__44331__0.call(this);
case 1:
return G__44331__1.call(this,r);
case 2:
return G__44331__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44331.cljs$core$IFn$_invoke$arity$0 = G__44331__0;
G__44331.cljs$core$IFn$_invoke$arity$1 = G__44331__1;
G__44331.cljs$core$IFn$_invoke$arity$2 = G__44331__2;
return G__44331;
})()
});
hyperfiddle.electric.impl.io.foreach = (function hyperfiddle$electric$impl$io$foreach(var_args){
var G__44290 = arguments.length;
switch (G__44290) {
case 1:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$1 = (function (r){
return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$core$IFn$_invoke$arity$2 = (function (r,x){
(r.cljs$core$IFn$_invoke$arity$1 ? r.cljs$core$IFn$_invoke$arity$1(x) : r.call(null,x));

return r;
}));

(hyperfiddle.electric.impl.io.foreach.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=hyperfiddle.electric.impl.io.js.map
