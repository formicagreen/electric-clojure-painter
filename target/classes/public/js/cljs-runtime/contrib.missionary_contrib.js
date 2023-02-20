goog.provide('contrib.missionary_contrib');
/**
 * blocking iterable pattern
 */
contrib.missionary_contrib.iterator_consumer = (function contrib$missionary_contrib$iterator_consumer(it){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43701_block_5 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_5(cr43701_state){
try{var cr43701_place_9 = (1);
var cr43701_place_10 = missionary.core.seed;
var cr43701_place_11 = cljs.core.range;
var cr43701_place_12 = (2);
var cr43701_place_13 = (function (){var G__43779 = cr43701_place_12;
var fexpr__43778 = cr43701_place_11;
return (fexpr__43778.cljs$core$IFn$_invoke$arity$1 ? fexpr__43778.cljs$core$IFn$_invoke$arity$1(G__43779) : fexpr__43778.call(null,G__43779));
})();
var cr43701_place_14 = (function (){var G__43781 = cr43701_place_13;
var fexpr__43780 = cr43701_place_10;
return (fexpr__43780.cljs$core$IFn$_invoke$arity$1 ? fexpr__43780.cljs$core$IFn$_invoke$arity$1(G__43781) : fexpr__43780.call(null,G__43781));
})();
(cr43701_state[(0)] = cr43701_block_6);

return missionary.core.fork(cr43701_place_9,cr43701_place_14);
}catch (e43777){var cr43701_exception = e43777;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_12 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_12(cr43701_state){
try{var cr43701_place_5 = (cr43701_state[(1)]);
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

return cr43701_place_5;
}catch (e43782){var cr43701_exception = e43782;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_4 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_4(cr43701_state){
try{var cr43701_place_8 = missionary.core.unpark();
(cr43701_state[(0)] = cr43701_block_12);

(cr43701_state[(1)] = cr43701_place_8);

return cr43701_state;
}catch (e43783){var cr43701_exception = e43783;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_2 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_2(cr43701_state){
try{var cr43701_place_4 = missionary.core.unpark();
var cr43701_place_5 = null;
if(cljs.core.truth_(cr43701_place_4)){
(cr43701_state[(0)] = cr43701_block_5);

(cr43701_state[(1)] = cr43701_place_5);

return cr43701_state;
} else {
(cr43701_state[(0)] = cr43701_block_3);

(cr43701_state[(1)] = cr43701_place_5);

return cr43701_state;
}
}catch (e43784){var cr43701_exception = e43784;
(cr43701_state[(0)] = null);

throw cr43701_exception;
}});
var cr43701_block_8 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_8(cr43701_state){
try{var cr43701_place_22 = missionary.core.unpark();
(cr43701_state[(0)] = cr43701_block_11);

(cr43701_state[(2)] = cr43701_place_22);

return cr43701_state;
}catch (e43785){var cr43701_exception = e43785;
(cr43701_state[(0)] = null);

(cr43701_state[(2)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_9 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_9(cr43701_state){
try{(cr43701_state[(0)] = cr43701_block_1);

return cr43701_state;
}catch (e43786){var cr43701_exception = e43786;
(cr43701_state[(0)] = null);

throw cr43701_exception;
}});
var cr43701_block_6 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_6(cr43701_state){
try{var cr43701_place_15 = missionary.core.unpark();
var cr43701_place_16 = cr43701_place_15;
var cr43701_place_17 = null;
var G__43788 = cr43701_place_16;
switch (G__43788) {
case (0):
(cr43701_state[(0)] = cr43701_block_7);

(cr43701_state[(2)] = cr43701_place_17);

return cr43701_state;

break;
case (1):
(cr43701_state[(0)] = cr43701_block_9);

(cr43701_state[(1)] = null);

return cr43701_state;

break;
default:
(cr43701_state[(0)] = cr43701_block_10);

(cr43701_state[(1)] = null);

(cr43701_state[(1)] = cr43701_place_15);

return cr43701_state;

}
}catch (e43787){var cr43701_exception = e43787;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_0 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_0(cr43701_state){
try{(cr43701_state[(0)] = cr43701_block_1);

return cr43701_state;
}catch (e43792){var cr43701_exception = e43792;
(cr43701_state[(0)] = null);

throw cr43701_exception;
}});
var cr43701_block_7 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_7(cr43701_state){
try{var cr43701_place_18 = missionary.core.via_call;
var cr43701_place_19 = missionary.core.blk;
var cr43701_place_20 = (function (){
return it.next();
});
var cr43701_place_21 = (function (){var G__43797 = cr43701_place_19;
var G__43798 = cr43701_place_20;
var fexpr__43796 = cr43701_place_18;
return (fexpr__43796.cljs$core$IFn$_invoke$arity$2 ? fexpr__43796.cljs$core$IFn$_invoke$arity$2(G__43797,G__43798) : fexpr__43796.call(null,G__43797,G__43798));
})();
(cr43701_state[(0)] = cr43701_block_8);

return missionary.core.park(cr43701_place_21);
}catch (e43794){var cr43701_exception = e43794;
(cr43701_state[(0)] = null);

(cr43701_state[(2)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_1 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_1(cr43701_state){
try{var cr43701_place_0 = missionary.core.via_call;
var cr43701_place_1 = missionary.core.blk;
var cr43701_place_2 = (function (){
return it.hasNext();
});
var cr43701_place_3 = (function (){var G__43801 = cr43701_place_1;
var G__43802 = cr43701_place_2;
var fexpr__43800 = cr43701_place_0;
return (fexpr__43800.cljs$core$IFn$_invoke$arity$2 ? fexpr__43800.cljs$core$IFn$_invoke$arity$2(G__43801,G__43802) : fexpr__43800.call(null,G__43801,G__43802));
})();
(cr43701_state[(0)] = cr43701_block_2);

return missionary.core.park(cr43701_place_3);
}catch (e43799){var cr43701_exception = e43799;
(cr43701_state[(0)] = null);

throw cr43701_exception;
}});
var cr43701_block_11 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_11(cr43701_state){
try{var cr43701_place_17 = (cr43701_state[(2)]);
(cr43701_state[(0)] = cr43701_block_12);

(cr43701_state[(2)] = null);

(cr43701_state[(1)] = cr43701_place_17);

return cr43701_state;
}catch (e43803){var cr43701_exception = e43803;
(cr43701_state[(0)] = null);

(cr43701_state[(2)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_10 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_10(cr43701_state){
try{var cr43701_place_15 = (cr43701_state[(1)]);
var cr43701_place_23 = "No matching clause: ";
var cr43701_place_24 = cr43701_place_15;
var cr43701_place_25 = [cr43701_place_23,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43701_place_24)].join('');
var cr43701_place_26 = (new Error(cr43701_place_25));
var cr43701_place_27 = (function(){throw cr43701_place_26})();
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

return null;
}catch (e43805){var cr43701_exception = e43805;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
var cr43701_block_3 = (function contrib$missionary_contrib$iterator_consumer_$_cr43701_block_3(cr43701_state){
try{var cr43701_place_6 = (1);
var cr43701_place_7 = missionary.core.none;
(cr43701_state[(0)] = cr43701_block_4);

return missionary.core.fork(cr43701_place_6,cr43701_place_7);
}catch (e43806){var cr43701_exception = e43806;
(cr43701_state[(0)] = null);

(cr43701_state[(1)] = null);

throw cr43701_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43807 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__43807[(0)] = cr43701_block_0);

return G__43807;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.seq_consumer = (function contrib$missionary_contrib$seq_consumer(xs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43809_block_11 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_11(cr43809_state){
try{var cr43809_place_18 = (cr43809_state[(3)]);
(cr43809_state[(0)] = cr43809_block_12);

(cr43809_state[(3)] = null);

(cr43809_state[(2)] = cr43809_place_18);

return cr43809_state;
}catch (e43872){var cr43809_exception = e43872;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

(cr43809_state[(3)] = null);

throw cr43809_exception;
}});
var cr43809_block_10 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_10(cr43809_state){
try{var cr43809_place_16 = (cr43809_state[(1)]);
var cr43809_place_27 = "No matching clause: ";
var cr43809_place_28 = cr43809_place_16;
var cr43809_place_29 = [cr43809_place_27,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43809_place_28)].join('');
var cr43809_place_30 = (new Error(cr43809_place_29));
var cr43809_place_31 = (function(){throw cr43809_place_30})();
(cr43809_state[(0)] = null);

(cr43809_state[(1)] = null);

return null;
}catch (e43873){var cr43809_exception = e43873;
(cr43809_state[(0)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
var cr43809_block_7 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_7(cr43809_state){
try{var cr43809_place_0 = (cr43809_state[(1)]);
var cr43809_place_19 = missionary.core.via_call;
var cr43809_place_20 = missionary.core.blk;
var cr43809_place_21 = (function (){
return cljs.core.first(cr43809_place_0);
});
var cr43809_place_22 = (function (){var G__43896 = cr43809_place_20;
var G__43897 = cr43809_place_21;
var fexpr__43895 = cr43809_place_19;
return (fexpr__43895.cljs$core$IFn$_invoke$arity$2 ? fexpr__43895.cljs$core$IFn$_invoke$arity$2(G__43896,G__43897) : fexpr__43895.call(null,G__43896,G__43897));
})();
(cr43809_state[(0)] = cr43809_block_8);

(cr43809_state[(1)] = null);

return missionary.core.park(cr43809_place_22);
}catch (e43886){var cr43809_exception = e43886;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

(cr43809_state[(1)] = null);

(cr43809_state[(3)] = null);

throw cr43809_exception;
}});
var cr43809_block_2 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_2(cr43809_state){
try{var cr43809_place_5 = missionary.core.unpark();
var cr43809_place_6 = null;
if(cljs.core.truth_(cr43809_place_5)){
(cr43809_state[(0)] = cr43809_block_5);

(cr43809_state[(2)] = cr43809_place_6);

return cr43809_state;
} else {
(cr43809_state[(0)] = cr43809_block_3);

(cr43809_state[(1)] = null);

(cr43809_state[(2)] = cr43809_place_6);

return cr43809_state;
}
}catch (e43908){var cr43809_exception = e43908;
(cr43809_state[(0)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
var cr43809_block_6 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_6(cr43809_state){
try{var cr43809_place_16 = missionary.core.unpark();
var cr43809_place_17 = cr43809_place_16;
var cr43809_place_18 = null;
var G__43911 = cr43809_place_17;
switch (G__43911) {
case (0):
(cr43809_state[(0)] = cr43809_block_7);

(cr43809_state[(3)] = cr43809_place_18);

return cr43809_state;

break;
case (1):
(cr43809_state[(0)] = cr43809_block_9);

(cr43809_state[(2)] = null);

return cr43809_state;

break;
default:
(cr43809_state[(0)] = cr43809_block_10);

(cr43809_state[(2)] = null);

(cr43809_state[(1)] = null);

(cr43809_state[(1)] = cr43809_place_16);

return cr43809_state;

}
}catch (e43909){var cr43809_exception = e43909;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
var cr43809_block_4 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_4(cr43809_state){
try{var cr43809_place_9 = missionary.core.unpark();
(cr43809_state[(0)] = cr43809_block_12);

(cr43809_state[(2)] = cr43809_place_9);

return cr43809_state;
}catch (e43913){var cr43809_exception = e43913;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

throw cr43809_exception;
}});
var cr43809_block_3 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_3(cr43809_state){
try{var cr43809_place_7 = (1);
var cr43809_place_8 = missionary.core.none;
(cr43809_state[(0)] = cr43809_block_4);

return missionary.core.fork(cr43809_place_7,cr43809_place_8);
}catch (e43916){var cr43809_exception = e43916;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

throw cr43809_exception;
}});
var cr43809_block_1 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_1(cr43809_state){
try{var cr43809_place_0 = (cr43809_state[(1)]);
var cr43809_place_1 = missionary.core.via_call;
var cr43809_place_2 = missionary.core.blk;
var cr43809_place_3 = (function (){
return cljs.core.seq(cr43809_place_0);
});
var cr43809_place_4 = (function (){var G__43920 = cr43809_place_2;
var G__43921 = cr43809_place_3;
var fexpr__43919 = cr43809_place_1;
return (fexpr__43919.cljs$core$IFn$_invoke$arity$2 ? fexpr__43919.cljs$core$IFn$_invoke$arity$2(G__43920,G__43921) : fexpr__43919.call(null,G__43920,G__43921));
})();
(cr43809_state[(0)] = cr43809_block_2);

return missionary.core.park(cr43809_place_4);
}catch (e43917){var cr43809_exception = e43917;
(cr43809_state[(0)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
var cr43809_block_8 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_8(cr43809_state){
try{var cr43809_place_23 = missionary.core.unpark();
(cr43809_state[(0)] = cr43809_block_11);

(cr43809_state[(3)] = cr43809_place_23);

return cr43809_state;
}catch (e43923){var cr43809_exception = e43923;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

(cr43809_state[(3)] = null);

throw cr43809_exception;
}});
var cr43809_block_0 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_0(cr43809_state){
try{var cr43809_place_0 = xs;
(cr43809_state[(0)] = cr43809_block_1);

(cr43809_state[(1)] = cr43809_place_0);

return cr43809_state;
}catch (e43926){var cr43809_exception = e43926;
(cr43809_state[(0)] = null);

throw cr43809_exception;
}});
var cr43809_block_12 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_12(cr43809_state){
try{var cr43809_place_6 = (cr43809_state[(2)]);
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

return cr43809_place_6;
}catch (e43932){var cr43809_exception = e43932;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

throw cr43809_exception;
}});
var cr43809_block_5 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_5(cr43809_state){
try{var cr43809_place_10 = (1);
var cr43809_place_11 = missionary.core.seed;
var cr43809_place_12 = cljs.core.range;
var cr43809_place_13 = (2);
var cr43809_place_14 = (function (){var G__43942 = cr43809_place_13;
var fexpr__43941 = cr43809_place_12;
return (fexpr__43941.cljs$core$IFn$_invoke$arity$1 ? fexpr__43941.cljs$core$IFn$_invoke$arity$1(G__43942) : fexpr__43941.call(null,G__43942));
})();
var cr43809_place_15 = (function (){var G__43944 = cr43809_place_14;
var fexpr__43943 = cr43809_place_11;
return (fexpr__43943.cljs$core$IFn$_invoke$arity$1 ? fexpr__43943.cljs$core$IFn$_invoke$arity$1(G__43944) : fexpr__43943.call(null,G__43944));
})();
(cr43809_state[(0)] = cr43809_block_6);

return missionary.core.fork(cr43809_place_10,cr43809_place_15);
}catch (e43937){var cr43809_exception = e43937;
(cr43809_state[(0)] = null);

(cr43809_state[(2)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
var cr43809_block_9 = (function contrib$missionary_contrib$seq_consumer_$_cr43809_block_9(cr43809_state){
try{var cr43809_place_0 = (cr43809_state[(1)]);
var cr43809_place_24 = cljs.core.rest;
var cr43809_place_25 = cr43809_place_0;
var cr43809_place_26 = (function (){var G__43950 = cr43809_place_25;
var fexpr__43949 = cr43809_place_24;
return (fexpr__43949.cljs$core$IFn$_invoke$arity$1 ? fexpr__43949.cljs$core$IFn$_invoke$arity$1(G__43950) : fexpr__43949.call(null,G__43950));
})();
(cr43809_state[(0)] = cr43809_block_1);

(cr43809_state[(1)] = cr43809_place_26);

return cr43809_state;
}catch (e43947){var cr43809_exception = e43947;
(cr43809_state[(0)] = null);

(cr43809_state[(1)] = null);

throw cr43809_exception;
}});
return cloroutine.impl.coroutine((function (){var G__43951 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__43951[(0)] = cr43809_block_0);

return G__43951;
})());
})(),missionary.core.ap_run);
});
/**
 * run task (or mbox) repeatedly, producing a stream of results
 */
contrib.missionary_contrib.poll_task = (function contrib$missionary_contrib$poll_task(task){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr43953_block_5 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_5(cr43953_state){
try{var cr43953_place_12 = task;
(cr43953_state[(0)] = cr43953_block_6);

return missionary.core.park(cr43953_place_12);
}catch (e44000){var cr43953_exception = e44000;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

throw cr43953_exception;
}});
var cr43953_block_3 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_3(cr43953_state){
try{var cr43953_place_8 = missionary.core.unpark();
var cr43953_place_9 = cr43953_place_8;
var cr43953_place_10 = null;
var G__44004 = cr43953_place_9;
switch (G__44004) {
case (0):
(cr43953_state[(0)] = cr43953_block_4);

(cr43953_state[(2)] = cr43953_place_10);

return cr43953_state;

break;
case (1):
(cr43953_state[(0)] = cr43953_block_5);

return cr43953_state;

break;
default:
(cr43953_state[(0)] = cr43953_block_7);

(cr43953_state[(1)] = null);

(cr43953_state[(1)] = cr43953_place_8);

return cr43953_state;

}
}catch (e44003){var cr43953_exception = e44003;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

throw cr43953_exception;
}});
var cr43953_block_7 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_7(cr43953_state){
try{var cr43953_place_8 = (cr43953_state[(1)]);
var cr43953_place_14 = "No matching clause: ";
var cr43953_place_15 = cr43953_place_8;
var cr43953_place_16 = [cr43953_place_14,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr43953_place_15)].join('');
var cr43953_place_17 = (new Error(cr43953_place_16));
var cr43953_place_18 = (function(){throw cr43953_place_17})();
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

return null;
}catch (e44005){var cr43953_exception = e44005;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

throw cr43953_exception;
}});
var cr43953_block_1 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_1(cr43953_state){
try{var cr43953_place_1 = missionary.core.unpark();
(cr43953_state[(0)] = cr43953_block_2);

(cr43953_state[(1)] = cr43953_place_1);

return cr43953_state;
}catch (e44006){var cr43953_exception = e44006;
(cr43953_state[(0)] = null);

throw cr43953_exception;
}});
var cr43953_block_4 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_4(cr43953_state){
try{var cr43953_place_1 = (cr43953_state[(1)]);
var cr43953_place_11 = cr43953_place_1;
(cr43953_state[(0)] = cr43953_block_8);

(cr43953_state[(1)] = null);

(cr43953_state[(2)] = cr43953_place_11);

return cr43953_state;
}catch (e44007){var cr43953_exception = e44007;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

(cr43953_state[(2)] = null);

throw cr43953_exception;
}});
var cr43953_block_6 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_6(cr43953_state){
try{var cr43953_place_13 = missionary.core.unpark();
(cr43953_state[(0)] = cr43953_block_2);

(cr43953_state[(1)] = cr43953_place_13);

return cr43953_state;
}catch (e44013){var cr43953_exception = e44013;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

throw cr43953_exception;
}});
var cr43953_block_8 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_8(cr43953_state){
try{var cr43953_place_10 = (cr43953_state[(2)]);
(cr43953_state[(0)] = null);

(cr43953_state[(2)] = null);

return cr43953_place_10;
}catch (e44015){var cr43953_exception = e44015;
(cr43953_state[(0)] = null);

(cr43953_state[(2)] = null);

throw cr43953_exception;
}});
var cr43953_block_0 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_0(cr43953_state){
try{var cr43953_place_0 = task;
(cr43953_state[(0)] = cr43953_block_1);

return missionary.core.park(cr43953_place_0);
}catch (e44017){var cr43953_exception = e44017;
(cr43953_state[(0)] = null);

throw cr43953_exception;
}});
var cr43953_block_2 = (function contrib$missionary_contrib$poll_task_$_cr43953_block_2(cr43953_state){
try{var cr43953_place_2 = (1);
var cr43953_place_3 = missionary.core.seed;
var cr43953_place_4 = cljs.core.range;
var cr43953_place_5 = (2);
var cr43953_place_6 = (function (){var G__44020 = cr43953_place_5;
var fexpr__44019 = cr43953_place_4;
return (fexpr__44019.cljs$core$IFn$_invoke$arity$1 ? fexpr__44019.cljs$core$IFn$_invoke$arity$1(G__44020) : fexpr__44019.call(null,G__44020));
})();
var cr43953_place_7 = (function (){var G__44023 = cr43953_place_6;
var fexpr__44022 = cr43953_place_3;
return (fexpr__44022.cljs$core$IFn$_invoke$arity$1 ? fexpr__44022.cljs$core$IFn$_invoke$arity$1(G__44023) : fexpr__44022.call(null,G__44023));
})();
(cr43953_state[(0)] = cr43953_block_3);

return missionary.core.fork(cr43953_place_2,cr43953_place_7);
}catch (e44018){var cr43953_exception = e44018;
(cr43953_state[(0)] = null);

(cr43953_state[(1)] = null);

throw cr43953_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44024 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((3));
(G__44024[(0)] = cr43953_block_0);

return G__44024;
})());
})(),missionary.core.ap_run);
});
/**
 * Return a task taking one value from `chan`. Return nil if chan is closed. Does not close chan,
 *   and when cancelled stops waiting for chan.
 */
contrib.missionary_contrib.chan_read_BANG_ = (function contrib$missionary_contrib$chan_read_BANG_(var_args){
var G__44030 = arguments.length;
switch (G__44030) {
case 1:
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (chan){
return contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(new missionary.Cancelled()));
}));

(contrib.missionary_contrib.chan_read_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chan,cancelled_value){
return (function (success,failure){
var cancel_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__33107__auto___44242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_44056){
var state_val_44057 = (state_44056[(1)]);
if((state_val_44057 === (1))){
var inst_44039 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44040 = [chan,cancel_chan];
var inst_44041 = (new cljs.core.PersistentVector(null,2,(5),inst_44039,inst_44040,null));
var state_44056__$1 = state_44056;
return cljs.core.async.ioc_alts_BANG_(state_44056__$1,(2),inst_44041);
} else {
if((state_val_44057 === (2))){
var inst_44044 = (state_44056[(2)]);
var inst_44045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44044,(0),null);
var inst_44046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44044,(1),null);
var inst_44048 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44046,cancel_chan);
var state_44056__$1 = (function (){var statearr_44073 = state_44056;
(statearr_44073[(7)] = inst_44045);

return statearr_44073;
})();
if(inst_44048){
var statearr_44074_44249 = state_44056__$1;
(statearr_44074_44249[(1)] = (3));

} else {
var statearr_44075_44250 = state_44056__$1;
(statearr_44075_44250[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44057 === (3))){
var inst_44050 = (failure.cljs$core$IFn$_invoke$arity$1 ? failure.cljs$core$IFn$_invoke$arity$1(cancelled_value) : failure.call(null,cancelled_value));
var state_44056__$1 = state_44056;
var statearr_44078_44251 = state_44056__$1;
(statearr_44078_44251[(2)] = inst_44050);

(statearr_44078_44251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44057 === (4))){
var inst_44045 = (state_44056[(7)]);
var inst_44052 = (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(inst_44045) : success.call(null,inst_44045));
var state_44056__$1 = state_44056;
var statearr_44080_44253 = state_44056__$1;
(statearr_44080_44253[(2)] = inst_44052);

(statearr_44080_44253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44057 === (5))){
var inst_44054 = (state_44056[(2)]);
var state_44056__$1 = state_44056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44056__$1,inst_44054);
} else {
return null;
}
}
}
}
}
});
return (function() {
var contrib$missionary_contrib$state_machine__32810__auto__ = null;
var contrib$missionary_contrib$state_machine__32810__auto____0 = (function (){
var statearr_44088 = [null,null,null,null,null,null,null,null];
(statearr_44088[(0)] = contrib$missionary_contrib$state_machine__32810__auto__);

(statearr_44088[(1)] = (1));

return statearr_44088;
});
var contrib$missionary_contrib$state_machine__32810__auto____1 = (function (state_44056){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_44056);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e44089){var ex__32813__auto__ = e44089;
var statearr_44090_44258 = state_44056;
(statearr_44090_44258[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_44056[(4)]))){
var statearr_44093_44262 = state_44056;
(statearr_44093_44262[(1)] = cljs.core.first((state_44056[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44263 = state_44056;
state_44056 = G__44263;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
contrib$missionary_contrib$state_machine__32810__auto__ = function(state_44056){
switch(arguments.length){
case 0:
return contrib$missionary_contrib$state_machine__32810__auto____0.call(this);
case 1:
return contrib$missionary_contrib$state_machine__32810__auto____1.call(this,state_44056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
contrib$missionary_contrib$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = contrib$missionary_contrib$state_machine__32810__auto____0;
contrib$missionary_contrib$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = contrib$missionary_contrib$state_machine__32810__auto____1;
return contrib$missionary_contrib$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_44094 = f__33108__auto__();
(statearr_44094[(6)] = c__33107__auto___44242);

return statearr_44094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));


return (function contrib$missionary_contrib$cancel(){
return cljs.core.async.close_BANG_(cancel_chan);
});
});
}));

(contrib.missionary_contrib.chan_read_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Adapt a core.async channel to a discrete flow
 */
contrib.missionary_contrib.chan__GT_ap = (function contrib$missionary_contrib$chan__GT_ap(ch){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44100_block_5 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_5(cr44100_state){
try{var cr44100_place_8 = (cr44100_state[(1)]);
var cr44100_place_18 = cr44100_place_8;
(cr44100_state[(0)] = cr44100_block_8);

(cr44100_state[(1)] = null);

(cr44100_state[(3)] = cr44100_place_18);

return cr44100_state;
}catch (e44171){var cr44100_exception = e44171;
(cr44100_state[(0)] = null);

(cr44100_state[(1)] = null);

(cr44100_state[(2)] = null);

(cr44100_state[(3)] = null);

throw cr44100_exception;
}});
var cr44100_block_1 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_1(cr44100_state){
try{var cr44100_place_0 = contrib.missionary_contrib.chan_read_BANG_;
var cr44100_place_1 = ch;
var cr44100_place_2 = (function (){var G__44176 = cr44100_place_1;
var fexpr__44175 = cr44100_place_0;
return (fexpr__44175.cljs$core$IFn$_invoke$arity$1 ? fexpr__44175.cljs$core$IFn$_invoke$arity$1(G__44176) : fexpr__44175.call(null,G__44176));
})();
(cr44100_state[(0)] = cr44100_block_2);

return missionary.core.park(cr44100_place_2);
}catch (e44174){var cr44100_exception = e44174;
(cr44100_state[(0)] = null);

throw cr44100_exception;
}});
var cr44100_block_7 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_7(cr44100_state){
try{var cr44100_place_15 = (cr44100_state[(1)]);
var cr44100_place_19 = "No matching clause: ";
var cr44100_place_20 = cr44100_place_15;
var cr44100_place_21 = [cr44100_place_19,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44100_place_20)].join('');
var cr44100_place_22 = (new Error(cr44100_place_21));
var cr44100_place_23 = (function(){throw cr44100_place_22})();
(cr44100_state[(0)] = null);

(cr44100_state[(1)] = null);

return null;
}catch (e44177){var cr44100_exception = e44177;
(cr44100_state[(0)] = null);

(cr44100_state[(1)] = null);

throw cr44100_exception;
}});
var cr44100_block_9 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_9(cr44100_state){
try{var cr44100_place_24 = (1);
var cr44100_place_25 = missionary.core.none;
(cr44100_state[(0)] = cr44100_block_10);

return missionary.core.fork(cr44100_place_24,cr44100_place_25);
}catch (e44180){var cr44100_exception = e44180;
(cr44100_state[(0)] = null);

(cr44100_state[(2)] = null);

throw cr44100_exception;
}});
var cr44100_block_2 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_2(cr44100_state){
try{var cr44100_place_3 = missionary.core.unpark();
var cr44100_place_4 = cr44100_place_3;
var cr44100_place_5 = null;
var cr44100_place_6 = (cr44100_place_4 == cr44100_place_5);
var cr44100_place_7 = null;
if(cr44100_place_6){
(cr44100_state[(0)] = cr44100_block_9);

(cr44100_state[(2)] = cr44100_place_7);

return cr44100_state;
} else {
(cr44100_state[(0)] = cr44100_block_3);

(cr44100_state[(1)] = cr44100_place_3);

(cr44100_state[(2)] = cr44100_place_7);

return cr44100_state;
}
}catch (e44185){var cr44100_exception = e44185;
(cr44100_state[(0)] = null);

throw cr44100_exception;
}});
var cr44100_block_11 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_11(cr44100_state){
try{var cr44100_place_7 = (cr44100_state[(2)]);
(cr44100_state[(0)] = null);

(cr44100_state[(2)] = null);

return cr44100_place_7;
}catch (e44191){var cr44100_exception = e44191;
(cr44100_state[(0)] = null);

(cr44100_state[(2)] = null);

throw cr44100_exception;
}});
var cr44100_block_4 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_4(cr44100_state){
try{var cr44100_place_15 = missionary.core.unpark();
var cr44100_place_16 = cr44100_place_15;
var cr44100_place_17 = null;
var G__44194 = cr44100_place_16;
switch (G__44194) {
case (0):
(cr44100_state[(0)] = cr44100_block_5);

(cr44100_state[(3)] = cr44100_place_17);

return cr44100_state;

break;
case (1):
(cr44100_state[(0)] = cr44100_block_6);

(cr44100_state[(1)] = null);

(cr44100_state[(2)] = null);

return cr44100_state;

break;
default:
(cr44100_state[(0)] = cr44100_block_7);

(cr44100_state[(1)] = null);

(cr44100_state[(2)] = null);

(cr44100_state[(1)] = cr44100_place_15);

return cr44100_state;

}
}catch (e44192){var cr44100_exception = e44192;
(cr44100_state[(0)] = null);

(cr44100_state[(1)] = null);

(cr44100_state[(2)] = null);

throw cr44100_exception;
}});
var cr44100_block_0 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_0(cr44100_state){
try{(cr44100_state[(0)] = cr44100_block_1);

return cr44100_state;
}catch (e44195){var cr44100_exception = e44195;
(cr44100_state[(0)] = null);

throw cr44100_exception;
}});
var cr44100_block_3 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_3(cr44100_state){
try{var cr44100_place_3 = (cr44100_state[(1)]);
var cr44100_place_8 = cr44100_place_3;
var cr44100_place_9 = (1);
var cr44100_place_10 = missionary.core.seed;
var cr44100_place_11 = cljs.core.range;
var cr44100_place_12 = (2);
var cr44100_place_13 = (function (){var G__44201 = cr44100_place_12;
var fexpr__44200 = cr44100_place_11;
return (fexpr__44200.cljs$core$IFn$_invoke$arity$1 ? fexpr__44200.cljs$core$IFn$_invoke$arity$1(G__44201) : fexpr__44200.call(null,G__44201));
})();
var cr44100_place_14 = (function (){var G__44203 = cr44100_place_13;
var fexpr__44202 = cr44100_place_10;
return (fexpr__44202.cljs$core$IFn$_invoke$arity$1 ? fexpr__44202.cljs$core$IFn$_invoke$arity$1(G__44203) : fexpr__44202.call(null,G__44203));
})();
(cr44100_state[(0)] = cr44100_block_4);

(cr44100_state[(1)] = null);

(cr44100_state[(1)] = cr44100_place_8);

return missionary.core.fork(cr44100_place_9,cr44100_place_14);
}catch (e44197){var cr44100_exception = e44197;
(cr44100_state[(0)] = null);

(cr44100_state[(1)] = null);

(cr44100_state[(2)] = null);

throw cr44100_exception;
}});
var cr44100_block_6 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_6(cr44100_state){
try{(cr44100_state[(0)] = cr44100_block_1);

return cr44100_state;
}catch (e44204){var cr44100_exception = e44204;
(cr44100_state[(0)] = null);

throw cr44100_exception;
}});
var cr44100_block_10 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_10(cr44100_state){
try{var cr44100_place_26 = missionary.core.unpark();
(cr44100_state[(0)] = cr44100_block_11);

(cr44100_state[(2)] = cr44100_place_26);

return cr44100_state;
}catch (e44205){var cr44100_exception = e44205;
(cr44100_state[(0)] = null);

(cr44100_state[(2)] = null);

throw cr44100_exception;
}});
var cr44100_block_8 = (function contrib$missionary_contrib$chan__GT_ap_$_cr44100_block_8(cr44100_state){
try{var cr44100_place_17 = (cr44100_state[(3)]);
(cr44100_state[(0)] = cr44100_block_11);

(cr44100_state[(3)] = null);

(cr44100_state[(2)] = cr44100_place_17);

return cr44100_state;
}catch (e44208){var cr44100_exception = e44208;
(cr44100_state[(0)] = null);

(cr44100_state[(2)] = null);

(cr44100_state[(3)] = null);

throw cr44100_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44209 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((4));
(G__44209[(0)] = cr44100_block_0);

return G__44209;
})());
})(),missionary.core.ap_run);
});
contrib.missionary_contrib.chan__GT_task = (function contrib$missionary_contrib$chan__GT_task(ch){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentVector.EMPTY,contrib.missionary_contrib.chan__GT_ap(ch));
});

//# sourceMappingURL=contrib.missionary_contrib.js.map
