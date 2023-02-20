goog.provide('hyperfiddle.electric_client');
hyperfiddle.electric_client.server_url = (function hyperfiddle$electric_client$server_url(){
var proto = window.location.protocol;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__44432 = proto;
switch (G__44432) {
case "http:":
return "ws:";

break;
case "https:":
return "wss:";

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected protocol",proto);

}
})()),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)].join('');
});
hyperfiddle.electric_client._STAR_ws_server_url_STAR_ = hyperfiddle.electric_client.server_url();
hyperfiddle.electric_client.remove_listeners = (function hyperfiddle$electric_client$remove_listeners(ws){
(ws.onopen = null);

return (ws.onclose = null);
});
hyperfiddle.electric_client.connect = (function hyperfiddle$electric_client$connect(url){
return (function (s,f){
try{var ws = (new WebSocket(url));
(ws.binaryType = "arraybuffer");

(ws.onopen = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(ws) : s.call(null,ws));
}));

(ws.onclose = (function (_){
hyperfiddle.electric_client.remove_listeners(ws);

return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(null) : s.call(null,null));
}));

return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(WebSocket.CONNECTING,ws.readyState)){
return ws.close();
} else {
return null;
}
});
}catch (e44441){var e = e44441;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));

return (function (){
return cljs.core.List.EMPTY;
});
}});
});
hyperfiddle.electric_client.wait_for_flush = (function hyperfiddle$electric_client$wait_for_flush(ws){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44453_block_0 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_0(cr44453_state){
try{(cr44453_state[(0)] = cr44453_block_1);

return cr44453_state;
}catch (e44476){var cr44453_exception = e44476;
(cr44453_state[(0)] = null);

throw cr44453_exception;
}});
var cr44453_block_1 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_1(cr44453_state){
try{var cr44453_place_0 = (4096);
var cr44453_place_1 = ws;
var cr44453_place_2 = cr44453_place_1.bufferedAmount;
var cr44453_place_3 = (cr44453_place_0 < cr44453_place_2);
var cr44453_place_4 = null;
if(cr44453_place_3){
(cr44453_state[(0)] = cr44453_block_3);

return cr44453_state;
} else {
(cr44453_state[(0)] = cr44453_block_2);

(cr44453_state[(1)] = cr44453_place_4);

return cr44453_state;
}
}catch (e44477){var cr44453_exception = e44477;
(cr44453_state[(0)] = null);

throw cr44453_exception;
}});
var cr44453_block_2 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_2(cr44453_state){
try{var cr44453_place_5 = null;
(cr44453_state[(0)] = cr44453_block_5);

(cr44453_state[(1)] = cr44453_place_5);

return cr44453_state;
}catch (e44480){var cr44453_exception = e44480;
(cr44453_state[(0)] = null);

(cr44453_state[(1)] = null);

throw cr44453_exception;
}});
var cr44453_block_3 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_3(cr44453_state){
try{var cr44453_place_6 = missionary.core.sleep;
var cr44453_place_7 = (50);
var cr44453_place_8 = (function (){var G__44486 = cr44453_place_7;
var fexpr__44485 = cr44453_place_6;
return (fexpr__44485.cljs$core$IFn$_invoke$arity$1 ? fexpr__44485.cljs$core$IFn$_invoke$arity$1(G__44486) : fexpr__44485.call(null,G__44486));
})();
(cr44453_state[(0)] = cr44453_block_4);

return missionary.core.park(cr44453_place_8);
}catch (e44484){var cr44453_exception = e44484;
(cr44453_state[(0)] = null);

throw cr44453_exception;
}});
var cr44453_block_4 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_4(cr44453_state){
try{var cr44453_place_9 = missionary.core.unpark();
(cr44453_state[(0)] = cr44453_block_1);

return cr44453_state;
}catch (e44490){var cr44453_exception = e44490;
(cr44453_state[(0)] = null);

throw cr44453_exception;
}});
var cr44453_block_5 = (function hyperfiddle$electric_client$wait_for_flush_$_cr44453_block_5(cr44453_state){
try{var cr44453_place_4 = (cr44453_state[(1)]);
(cr44453_state[(0)] = null);

(cr44453_state[(1)] = null);

return cr44453_place_4;
}catch (e44491){var cr44453_exception = e44491;
(cr44453_state[(0)] = null);

(cr44453_state[(1)] = null);

throw cr44453_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44493 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(G__44493[(0)] = cr44453_block_0);

return G__44493;
})());
})(),missionary.core.sp_run);
});
hyperfiddle.electric_client.wait_for_close = (function hyperfiddle$electric_client$wait_for_close(ws){
return (function (s,f){
(ws.onclose = (function (e){
(ws.onclose = null);

var G__44497 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),e.code,new cljs.core.Keyword(null,"reason","reason",-2070751759),e.reason], null);
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__44497) : s.call(null,G__44497));
}));

return (function (){
if((ws.onclose == null)){
return null;
} else {
(ws.onclose = null);

var G__44498 = (new missionary.Cancelled());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__44498) : f.call(null,G__44498));
}
});
});
});
hyperfiddle.electric_client.payload = (function hyperfiddle$electric_client$payload(x){
return x.data;
});
hyperfiddle.electric_client.send_BANG_ = (function hyperfiddle$electric_client$send_BANG_(ws,msg){
var G__44505 = ws;
G__44505.send(msg);

return G__44505;
});
hyperfiddle.electric_client.send_all = (function hyperfiddle$electric_client$send_all(ws,msgs){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44506_block_0 = (function hyperfiddle$electric_client$send_all_$_cr44506_block_0(cr44506_state){
try{var cr44506_place_0 = hyperfiddle.electric_client.wait_for_flush;
var cr44506_place_1 = hyperfiddle.electric_client.send_BANG_;
var cr44506_place_2 = ws;
var cr44506_place_3 = hyperfiddle.electric.impl.io.encode;
var cr44506_place_4 = (1);
var cr44506_place_5 = msgs;
(cr44506_state[(0)] = cr44506_block_1);

(cr44506_state[(3)] = cr44506_place_0);

(cr44506_state[(1)] = cr44506_place_1);

(cr44506_state[(2)] = cr44506_place_2);

(cr44506_state[(4)] = cr44506_place_3);

return missionary.core.fork(cr44506_place_4,cr44506_place_5);
}catch (e44545){var cr44506_exception = e44545;
(cr44506_state[(0)] = null);

throw cr44506_exception;
}});
var cr44506_block_1 = (function hyperfiddle$electric_client$send_all_$_cr44506_block_1(cr44506_state){
try{var cr44506_place_1 = (cr44506_state[(1)]);
var cr44506_place_2 = (cr44506_state[(2)]);
var cr44506_place_0 = (cr44506_state[(3)]);
var cr44506_place_3 = (cr44506_state[(4)]);
var cr44506_place_6 = missionary.core.unpark();
var cr44506_place_7 = (function (){var G__44553 = cr44506_place_6;
var fexpr__44552 = cr44506_place_3;
return (fexpr__44552.cljs$core$IFn$_invoke$arity$1 ? fexpr__44552.cljs$core$IFn$_invoke$arity$1(G__44553) : fexpr__44552.call(null,G__44553));
})();
var cr44506_place_8 = (function (){var G__44555 = cr44506_place_2;
var G__44556 = cr44506_place_7;
var fexpr__44554 = cr44506_place_1;
return (fexpr__44554.cljs$core$IFn$_invoke$arity$2 ? fexpr__44554.cljs$core$IFn$_invoke$arity$2(G__44555,G__44556) : fexpr__44554.call(null,G__44555,G__44556));
})();
var cr44506_place_9 = (function (){var G__44559 = cr44506_place_8;
var fexpr__44558 = cr44506_place_0;
return (fexpr__44558.cljs$core$IFn$_invoke$arity$1 ? fexpr__44558.cljs$core$IFn$_invoke$arity$1(G__44559) : fexpr__44558.call(null,G__44559));
})();
(cr44506_state[(0)] = cr44506_block_2);

(cr44506_state[(1)] = null);

(cr44506_state[(2)] = null);

(cr44506_state[(3)] = null);

(cr44506_state[(4)] = null);

return missionary.core.park(cr44506_place_9);
}catch (e44549){var cr44506_exception = e44549;
(cr44506_state[(0)] = null);

(cr44506_state[(1)] = null);

(cr44506_state[(2)] = null);

(cr44506_state[(3)] = null);

(cr44506_state[(4)] = null);

throw cr44506_exception;
}});
var cr44506_block_2 = (function hyperfiddle$electric_client$send_all_$_cr44506_block_2(cr44506_state){
try{var cr44506_place_10 = missionary.core.unpark();
(cr44506_state[(0)] = null);

return cr44506_place_10;
}catch (e44560){var cr44506_exception = e44560;
(cr44506_state[(0)] = null);

throw cr44506_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44563 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((5));
(G__44563[(0)] = cr44506_block_0);

return G__44563;
})());
})(),missionary.core.ap_run));
});
/**
 * 
 * server : the server part of the program
 * cb : the callback for incoming messages.
 * msgs : the discrete flow of messages to send, spawned when websocket is connected, cancelled on websocket close.
 * Returns a task producing nil or failing if the websocket was closed before end of reduction.
 */
hyperfiddle.electric_client.connector = (function hyperfiddle$electric_client$connector(server){
return (function (cb,msgs){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44570_block_10 = (function hyperfiddle$electric_client$connector_$_cr44570_block_10(cr44570_state){
try{var cr44570_place_9 = (cr44570_state[(1)]);
var cr44570_place_10 = (cr44570_state[(3)]);
var cr44570_place_42 = (cr44570_state[(5)]);
var cr44570_place_50 = (cljs.core.truth_(cr44570_place_10)?(function(){throw cr44570_place_9})():cr44570_place_9);
(cr44570_state[(0)] = cr44570_block_12);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(5)] = null);

(cr44570_state[(2)] = cr44570_place_50);

return cr44570_state;
}catch (e44656){var cr44570_exception = e44656;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(5)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_9 = (function hyperfiddle$electric_client$connector_$_cr44570_block_9(cr44570_state){
try{var cr44570_place_49 = null;
(cr44570_state[(0)] = cr44570_block_10);

(cr44570_state[(5)] = cr44570_place_49);

return cr44570_state;
}catch (e44657){var cr44570_exception = e44657;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(5)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_4 = (function hyperfiddle$electric_client$connector_$_cr44570_block_4(cr44570_state){
try{var cr44570_place_33 = missionary.core.unpark();
(cr44570_state[(0)] = cr44570_block_6);

(cr44570_state[(1)] = cr44570_place_33);

return cr44570_state;
}catch (e44659){var cr44570_exception = e44659;
(cr44570_state[(0)] = cr44570_block_5);

(cr44570_state[(1)] = cr44570_exception);

return cr44570_state;
}});
var cr44570_block_5 = (function hyperfiddle$electric_client$connector_$_cr44570_block_5(cr44570_state){
try{var cr44570_place_9 = (cr44570_state[(1)]);
var cr44570_place_34 = cr44570_place_9;
var cr44570_place_35 = (function(){throw cr44570_place_34})();
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(4)] = null);

(cr44570_state[(2)] = null);

return null;
}catch (e44666){var cr44570_exception = e44666;
(cr44570_state[(0)] = cr44570_block_6);

(cr44570_state[(3)] = true);

(cr44570_state[(1)] = cr44570_exception);

return cr44570_state;
}});
var cr44570_block_7 = (function hyperfiddle$electric_client$connector_$_cr44570_block_7(cr44570_state){
try{var cr44570_place_8 = (cr44570_state[(4)]);
var cr44570_place_43 = cr44570_place_8;
var cr44570_place_44 = cr44570_place_43.close();
var cr44570_place_45 = missionary.core.compel;
var cr44570_place_46 = hyperfiddle.electric_client.wait_for_close;
var cr44570_place_47 = (function (){var G__44673 = cr44570_place_46;
var fexpr__44672 = cr44570_place_45;
return (fexpr__44672.cljs$core$IFn$_invoke$arity$1 ? fexpr__44672.cljs$core$IFn$_invoke$arity$1(G__44673) : fexpr__44672.call(null,G__44673));
})();
(cr44570_state[(0)] = cr44570_block_8);

(cr44570_state[(4)] = null);

return missionary.core.park(cr44570_place_47);
}catch (e44671){var cr44570_exception = e44671;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(5)] = null);

(cr44570_state[(4)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_6 = (function hyperfiddle$electric_client$connector_$_cr44570_block_6(cr44570_state){
try{var cr44570_place_8 = (cr44570_state[(4)]);
var cr44570_place_36 = cljs.core._EQ_;
var cr44570_place_37 = WebSocket;
var cr44570_place_38 = cr44570_place_37.CLOSED;
var cr44570_place_39 = cr44570_place_8;
var cr44570_place_40 = cr44570_place_39.readyState;
var cr44570_place_41 = (function (){var G__44678 = cr44570_place_38;
var G__44679 = cr44570_place_40;
var fexpr__44677 = cr44570_place_36;
return (fexpr__44677.cljs$core$IFn$_invoke$arity$2 ? fexpr__44677.cljs$core$IFn$_invoke$arity$2(G__44678,G__44679) : fexpr__44677.call(null,G__44678,G__44679));
})();
var cr44570_place_42 = null;
if(cljs.core.truth_(cr44570_place_41)){
(cr44570_state[(0)] = cr44570_block_9);

(cr44570_state[(4)] = null);

(cr44570_state[(5)] = cr44570_place_42);

return cr44570_state;
} else {
(cr44570_state[(0)] = cr44570_block_7);

(cr44570_state[(5)] = cr44570_place_42);

return cr44570_state;
}
}catch (e44674){var cr44570_exception = e44674;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(4)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_8 = (function hyperfiddle$electric_client$connector_$_cr44570_block_8(cr44570_state){
try{var cr44570_place_48 = missionary.core.unpark();
(cr44570_state[(0)] = cr44570_block_10);

(cr44570_state[(5)] = cr44570_place_48);

return cr44570_state;
}catch (e44687){var cr44570_exception = e44687;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(3)] = null);

(cr44570_state[(5)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_1 = (function hyperfiddle$electric_client$connector_$_cr44570_block_1(cr44570_state){
try{var cr44570_place_3 = missionary.core.unpark();
var cr44570_place_4 = cr44570_place_3;
var cr44570_place_5 = null;
var cr44570_place_6 = (cr44570_place_4 == cr44570_place_5);
var cr44570_place_7 = null;
if(cr44570_place_6){
(cr44570_state[(0)] = cr44570_block_11);

(cr44570_state[(2)] = cr44570_place_7);

return cr44570_state;
} else {
(cr44570_state[(0)] = cr44570_block_2);

(cr44570_state[(1)] = cr44570_place_3);

(cr44570_state[(2)] = cr44570_place_7);

return cr44570_state;
}
}catch (e44696){var cr44570_exception = e44696;
(cr44570_state[(0)] = null);

throw cr44570_exception;
}});
var cr44570_block_0 = (function hyperfiddle$electric_client$connector_$_cr44570_block_0(cr44570_state){
try{var cr44570_place_0 = hyperfiddle.electric_client.connect;
var cr44570_place_1 = hyperfiddle.electric_client._STAR_ws_server_url_STAR_;
var cr44570_place_2 = (function (){var G__44713 = cr44570_place_1;
var fexpr__44712 = cr44570_place_0;
return (fexpr__44712.cljs$core$IFn$_invoke$arity$1 ? fexpr__44712.cljs$core$IFn$_invoke$arity$1(G__44713) : fexpr__44712.call(null,G__44713));
})();
(cr44570_state[(0)] = cr44570_block_1);

return missionary.core.park(cr44570_place_2);
}catch (e44708){var cr44570_exception = e44708;
(cr44570_state[(0)] = null);

throw cr44570_exception;
}});
var cr44570_block_11 = (function hyperfiddle$electric_client$connector_$_cr44570_block_11(cr44570_state){
try{var cr44570_place_51 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
(cr44570_state[(0)] = cr44570_block_12);

(cr44570_state[(2)] = cr44570_place_51);

return cr44570_state;
}catch (e44714){var cr44570_exception = e44714;
(cr44570_state[(0)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_12 = (function hyperfiddle$electric_client$connector_$_cr44570_block_12(cr44570_state){
try{var cr44570_place_7 = (cr44570_state[(2)]);
(cr44570_state[(0)] = null);

(cr44570_state[(2)] = null);

return cr44570_place_7;
}catch (e44715){var cr44570_exception = e44715;
(cr44570_state[(0)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
var cr44570_block_3 = (function hyperfiddle$electric_client$connector_$_cr44570_block_3(cr44570_state){
try{var cr44570_place_8 = (cr44570_state[(4)]);
var cr44570_place_11 = hyperfiddle.electric_client.send_BANG_;
var cr44570_place_12 = cr44570_place_8;
var cr44570_place_13 = hyperfiddle.electric.impl.io.encode;
var cr44570_place_14 = server;
var cr44570_place_15 = (function (){var G__44721 = cr44570_place_14;
var fexpr__44720 = cr44570_place_13;
return (fexpr__44720.cljs$core$IFn$_invoke$arity$1 ? fexpr__44720.cljs$core$IFn$_invoke$arity$1(G__44721) : fexpr__44720.call(null,G__44721));
})();
var cr44570_place_16 = (function (){var G__44723 = cr44570_place_12;
var G__44724 = cr44570_place_15;
var fexpr__44722 = cr44570_place_11;
return (fexpr__44722.cljs$core$IFn$_invoke$arity$2 ? fexpr__44722.cljs$core$IFn$_invoke$arity$2(G__44723,G__44724) : fexpr__44722.call(null,G__44723,G__44724));
})();
var cr44570_place_17 = cr44570_place_8;
var cr44570_place_18 = cljs.core.comp;
var cr44570_place_19 = cb;
var cr44570_place_20 = hyperfiddle.electric.impl.io.decode;
var cr44570_place_21 = hyperfiddle.electric_client.payload;
var cr44570_place_22 = (function (){var G__44726 = cr44570_place_19;
var G__44727 = cr44570_place_20;
var G__44728 = cr44570_place_21;
var fexpr__44725 = cr44570_place_18;
return (fexpr__44725.cljs$core$IFn$_invoke$arity$3 ? fexpr__44725.cljs$core$IFn$_invoke$arity$3(G__44726,G__44727,G__44728) : fexpr__44725.call(null,G__44726,G__44727,G__44728));
})();
var cr44570_place_23 = (cr44570_place_17.onmessage = cr44570_place_22);
var cr44570_place_24 = missionary.core.race;
var cr44570_place_25 = hyperfiddle.electric_client.send_all;
var cr44570_place_26 = cr44570_place_8;
var cr44570_place_27 = msgs;
var cr44570_place_28 = (function (){var G__44730 = cr44570_place_26;
var G__44731 = cr44570_place_27;
var fexpr__44729 = cr44570_place_25;
return (fexpr__44729.cljs$core$IFn$_invoke$arity$2 ? fexpr__44729.cljs$core$IFn$_invoke$arity$2(G__44730,G__44731) : fexpr__44729.call(null,G__44730,G__44731));
})();
var cr44570_place_29 = hyperfiddle.electric_client.wait_for_close;
var cr44570_place_30 = cr44570_place_8;
var cr44570_place_31 = (function (){var G__44733 = cr44570_place_30;
var fexpr__44732 = cr44570_place_29;
return (fexpr__44732.cljs$core$IFn$_invoke$arity$1 ? fexpr__44732.cljs$core$IFn$_invoke$arity$1(G__44733) : fexpr__44732.call(null,G__44733));
})();
var cr44570_place_32 = (function (){var G__44735 = cr44570_place_28;
var G__44736 = cr44570_place_31;
var fexpr__44734 = cr44570_place_24;
return (fexpr__44734.cljs$core$IFn$_invoke$arity$2 ? fexpr__44734.cljs$core$IFn$_invoke$arity$2(G__44735,G__44736) : fexpr__44734.call(null,G__44735,G__44736));
})();
(cr44570_state[(0)] = cr44570_block_4);

return missionary.core.park(cr44570_place_32);
}catch (e44716){var cr44570_exception = e44716;
(cr44570_state[(0)] = cr44570_block_5);

(cr44570_state[(1)] = cr44570_exception);

return cr44570_state;
}});
var cr44570_block_2 = (function hyperfiddle$electric_client$connector_$_cr44570_block_2(cr44570_state){
try{var cr44570_place_3 = (cr44570_state[(1)]);
var cr44570_place_8 = cr44570_place_3;
var cr44570_place_9 = null;
var cr44570_place_10 = false;
(cr44570_state[(0)] = cr44570_block_3);

(cr44570_state[(1)] = null);

(cr44570_state[(4)] = cr44570_place_8);

(cr44570_state[(1)] = cr44570_place_9);

(cr44570_state[(3)] = cr44570_place_10);

return cr44570_state;
}catch (e44737){var cr44570_exception = e44737;
(cr44570_state[(0)] = null);

(cr44570_state[(1)] = null);

(cr44570_state[(2)] = null);

throw cr44570_exception;
}});
return cloroutine.impl.coroutine((function (){var G__44738 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__44738[(0)] = cr44570_block_0);

return G__44738;
})());
})(),missionary.core.sp_run);
});
});
hyperfiddle.electric_client.fib_iter = (function hyperfiddle$electric_client$fib_iter(p__44741){
var vec__44742 = p__44741;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44742,(1),null);
var G__44745 = b;
switch (G__44745) {
case (0):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,(a + b)], null);

}
});
hyperfiddle.electric_client.fib = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.iterate(hyperfiddle.electric_client.fib_iter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
hyperfiddle.electric_client.retry_delays = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,(100)),hyperfiddle.electric_client.fib);
hyperfiddle.electric_client.retry_codes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1006),null,(1005),null], null), null);
hyperfiddle.electric_client.boot_with_retry = (function hyperfiddle$electric_client$boot_with_retry(client,conn){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var cr44752_block_2 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_2(cr44752_state){
try{var cr44752_place_44 = missionary.core.unpark();
var cr44752_place_45 = cr44752_place_44;
var cr44752_place_46 = null;
var cr44752_place_47 = (cr44752_place_45 == cr44752_place_46);
var cr44752_place_48 = null;
if(cr44752_place_47){
(cr44752_state[(0)] = cr44752_block_10);

(cr44752_state[(3)] = cr44752_place_48);

return cr44752_state;
} else {
(cr44752_state[(0)] = cr44752_block_3);

(cr44752_state[(2)] = cr44752_place_44);

(cr44752_state[(3)] = cr44752_place_48);

return cr44752_state;
}
}catch (e45092){var cr44752_exception = e45092;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_14 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_14(cr44752_state){
try{var cr44752_place_114 = null;
(cr44752_state[(0)] = cr44752_block_15);

(cr44752_state[(1)] = cr44752_place_114);

return cr44752_state;
}catch (e45093){var cr44752_exception = e45093;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_15 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_15(cr44752_state){
try{var cr44752_place_88 = (cr44752_state[(1)]);
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

return cr44752_place_88;
}catch (e45094){var cr44752_exception = e45094;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_9 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_9(cr44752_state){
try{var cr44752_place_56 = (cr44752_state[(2)]);
(cr44752_state[(0)] = cr44752_block_11);

(cr44752_state[(2)] = null);

(cr44752_state[(3)] = cr44752_place_56);

return cr44752_state;
}catch (e45095){var cr44752_exception = e45095;
(cr44752_state[(0)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_0 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_0(cr44752_state){
try{var cr44752_place_0 = hyperfiddle.electric_client.retry_delays;
(cr44752_state[(0)] = cr44752_block_1);

(cr44752_state[(1)] = cr44752_place_0);

return cr44752_state;
}catch (e45096){var cr44752_exception = e45096;
(cr44752_state[(0)] = null);

throw cr44752_exception;
}});
var cr44752_block_6 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_6(cr44752_state){
try{var cr44752_place_74 = console;
var cr44752_place_75 = "Connection lost.";
var cr44752_place_76 = cr44752_place_74.log(cr44752_place_75);
var cr44752_place_77 = cljs.core.seq;
var cr44752_place_78 = hyperfiddle.electric_client.retry_delays;
var cr44752_place_79 = (function (){var G__45099 = cr44752_place_78;
var fexpr__45098 = cr44752_place_77;
return (fexpr__45098.cljs$core$IFn$_invoke$arity$1 ? fexpr__45098.cljs$core$IFn$_invoke$arity$1(G__45099) : fexpr__45098.call(null,G__45099));
})();
(cr44752_state[(0)] = cr44752_block_7);

(cr44752_state[(4)] = cr44752_place_79);

return cr44752_state;
}catch (e45097){var cr44752_exception = e45097;
(cr44752_state[(0)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(4)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_11 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_11(cr44752_state){
try{var cr44752_place_48 = (cr44752_state[(3)]);
var cr44752_place_85 = cr44752_place_48;
var cr44752_place_86 = null;
var cr44752_place_87 = (cr44752_place_85 == cr44752_place_86);
var cr44752_place_88 = null;
if(cr44752_place_87){
(cr44752_state[(0)] = cr44752_block_14);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

(cr44752_state[(1)] = cr44752_place_88);

return cr44752_state;
} else {
(cr44752_state[(0)] = cr44752_block_12);

return cr44752_state;
}
}catch (e45100){var cr44752_exception = e45100;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_4 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_4(cr44752_state){
try{var cr44752_place_52 = (cr44752_state[(5)]);
var cr44752_place_57 = cr44752_place_52;
var cr44752_place_58 = cljs.core.contains_QMARK_;
var cr44752_place_59 = hyperfiddle.electric_client.retry_codes;
var cr44752_place_60 = cr44752_place_57;
var cr44752_place_61 = (function (){var G__45103 = cr44752_place_59;
var G__45104 = cr44752_place_60;
var fexpr__45102 = cr44752_place_58;
return (fexpr__45102.cljs$core$IFn$_invoke$arity$2 ? fexpr__45102.cljs$core$IFn$_invoke$arity$2(G__45103,G__45104) : fexpr__45102.call(null,G__45103,G__45104));
})();
var cr44752_place_62 = null;
if(cljs.core.truth_(cr44752_place_61)){
(cr44752_state[(0)] = cr44752_block_6);

(cr44752_state[(4)] = null);

(cr44752_state[(5)] = null);

(cr44752_state[(4)] = cr44752_place_62);

return cr44752_state;
} else {
(cr44752_state[(0)] = cr44752_block_5);

(cr44752_state[(2)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(5)] = null);

(cr44752_state[(3)] = null);

(cr44752_state[(1)] = cr44752_place_57);

return cr44752_state;
}
}catch (e45101){var cr44752_exception = e45101;
(cr44752_state[(0)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(4)] = null);

(cr44752_state[(5)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_1 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_1(cr44752_state){
try{var cr44752_place_1 = cljs.core.object_array;
var cr44752_place_2 = (1);
var cr44752_place_3 = (function (){var G__45107 = cr44752_place_2;
var fexpr__45106 = cr44752_place_1;
return (fexpr__45106.cljs$core$IFn$_invoke$arity$1 ? fexpr__45106.cljs$core$IFn$_invoke$arity$1(G__45107) : fexpr__45106.call(null,G__45107));
})();
var cr44752_place_4 = console;
var cr44752_place_5 = "Connecting...";
var cr44752_place_6 = cr44752_place_4.log(cr44752_place_5);
var cr44752_place_7 = (function (x){
var fexpr__44883 = (cr44752_place_3[(0)]);
var G__45109 = x;
var fexpr__45108 = fexpr__44883;
return (fexpr__45108.cljs$core$IFn$_invoke$arity$1 ? fexpr__45108.cljs$core$IFn$_invoke$arity$1(G__45109) : fexpr__45108.call(null,G__45109));
});
var cr44752_place_8 = cljs.core.partial;
var cr44752_place_12 = (function (cr44885_state){
try{var cr44885_place_51 = missionary.core.unpark();
(cr44885_state[(0)] = cr44752_place_14);

(cr44885_state[(3)] = cr44885_place_51);

return cr44885_state;
}catch (e45146){var e44942 = e45146;
var cr44885_exception = e44942;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(3)] = null);

throw cr44885_exception;
}});
var cr44752_place_22 = (function (cr44885_state){
try{var cr44885_place_49 = (1);
var cr44885_place_50 = missionary.core.none;
(cr44885_state[(0)] = cr44752_place_12);

return missionary.core.fork(cr44885_place_49,cr44885_place_50);
}catch (e45147){var e44958 = e45147;
var cr44885_exception = e44958;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(3)] = null);

throw cr44885_exception;
}});
var cr44752_place_15 = (function (cr44885_state){
try{var cr44885_place_23 = missionary.core.unpark();
var cr44885_place_24 = (1);
var cr44885_place_25 = missionary.core.none;
(cr44885_state[(0)] = cr44752_place_19);

return missionary.core.fork(cr44885_place_24,cr44885_place_25);
}catch (e45148){var e44945 = e45148;
var cr44885_exception = e44945;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

throw cr44885_exception;
}});
var cr44752_place_14 = (function (cr44885_state){
try{var cr44885_place_32 = (cr44885_state[(3)]);
(cr44885_state[(0)] = cr44752_place_13);

(cr44885_state[(3)] = null);

(cr44885_state[(2)] = cr44885_place_32);

return cr44885_state;
}catch (e45149){var e44944 = e45149;
var cr44885_exception = e44944;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(3)] = null);

throw cr44885_exception;
}});
var cr44752_place_23 = (function (cr44885_state){
try{var cr44885_place_42 = (cr44885_state[(1)]);
(cr44885_state[(0)] = cr44752_place_14);

(cr44885_state[(1)] = null);

(cr44885_state[(3)] = cr44885_place_42);

return cr44885_state;
}catch (e45150){var e44959 = e45150;
var cr44885_exception = e44959;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(3)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_13 = (function (cr44885_state){
try{var cr44885_place_13 = (cr44885_state[(2)]);
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

return cr44885_place_13;
}catch (e45151){var e44943 = e45151;
var cr44885_exception = e44943;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

throw cr44885_exception;
}});
var cr44752_place_10 = (function (cr44885_state){
try{var cr44885_place_11 = (cr44885_state[(1)]);
var cr44885_place_52 = "No matching clause: ";
var cr44885_place_53 = cr44885_place_11;
var cr44885_place_54 = [cr44885_place_52,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44885_place_53)].join('');
var cr44885_place_55 = (new Error(cr44885_place_54));
var cr44885_place_56 = (function(){throw cr44885_place_55})();
(cr44885_state[(0)] = null);

(cr44885_state[(1)] = null);

return null;
}catch (e45152){var e44940 = e45152;
var cr44885_exception = e44940;
(cr44885_state[(0)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_11 = (function (cr44885_state){
try{var cr44885_place_4 = (cr44885_state[(1)]);
var cr44885_place_27 = cr44885_place_4;
(cr44885_state[(0)] = cr44752_place_24);

return missionary.core.park(cr44885_place_27);
}catch (e45153){var e44941 = e45153;
var cr44885_exception = e44941;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_17 = (function (cr44885_state){
try{var cr44885_place_40 = missionary.core.unpark();
var cr44885_place_41 = cr44885_place_40;
var cr44885_place_42 = null;
var G__44949 = cr44885_place_41;
var G__45155 = G__44949;
switch (G__45155) {
case (0):
(cr44885_state[(0)] = cr44752_place_20);

(cr44885_state[(1)] = null);

(cr44885_state[(1)] = cr44885_place_42);

return cr44885_state;

break;
case (1):
(cr44885_state[(0)] = cr44752_place_27);

(cr44885_state[(3)] = null);

(cr44885_state[(4)] = null);

return cr44885_state;

break;
default:
(cr44885_state[(0)] = cr44752_place_21);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

(cr44885_state[(3)] = null);

(cr44885_state[(4)] = null);

(cr44885_state[(1)] = cr44885_place_40);

return cr44885_state;

}
}catch (e45154){var e44948 = e45154;
var cr44885_exception = e44948;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

(cr44885_state[(3)] = null);

(cr44885_state[(4)] = null);

throw cr44885_exception;
}});
var cr44752_place_18 = (function (cr44885_state){
try{var cr44885_place_28 = (cr44885_state[(4)]);
var cr44885_place_33 = cr44885_place_28;
var cr44885_place_34 = (1);
var cr44885_place_35 = missionary.core.seed;
var cr44885_place_36 = cljs.core.range;
var cr44885_place_37 = (2);
var cr44885_place_38 = (function (){var G__44952 = cr44885_place_37;
var fexpr__44951 = cr44885_place_36;
var G__45158 = G__44952;
var fexpr__45157 = fexpr__44951;
return (fexpr__45157.cljs$core$IFn$_invoke$arity$1 ? fexpr__45157.cljs$core$IFn$_invoke$arity$1(G__45158) : fexpr__45157.call(null,G__45158));
})();
var cr44885_place_39 = (function (){var G__44954 = cr44885_place_38;
var fexpr__44953 = cr44885_place_35;
var G__45160 = G__44954;
var fexpr__45159 = fexpr__44953;
return (fexpr__45159.cljs$core$IFn$_invoke$arity$1 ? fexpr__45159.cljs$core$IFn$_invoke$arity$1(G__45160) : fexpr__45159.call(null,G__45160));
})();
(cr44885_state[(0)] = cr44752_place_17);

(cr44885_state[(4)] = null);

(cr44885_state[(4)] = cr44885_place_33);

return missionary.core.fork(cr44885_place_34,cr44885_place_39);
}catch (e45156){var e44950 = e45156;
var cr44885_exception = e44950;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

(cr44885_state[(3)] = null);

(cr44885_state[(4)] = null);

throw cr44885_exception;
}});
var cr44752_place_26 = (function (cr44885_state){
try{(cr44885_state[(0)] = cr44752_place_11);

return cr44885_state;
}catch (e45161){var e44967 = e45161;
var cr44885_exception = e44967;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_16 = (function (cr44885_state){
try{var cr44885_place_11 = missionary.core.unpark();
var cr44885_place_12 = cr44885_place_11;
var cr44885_place_13 = null;
var G__44947 = cr44885_place_12;
var G__45163 = G__44947;
switch (G__45163) {
case (0):
(cr44885_state[(0)] = cr44752_place_9);

(cr44885_state[(2)] = cr44885_place_13);

return cr44885_state;

break;
case (1):
(cr44885_state[(0)] = cr44752_place_26);

(cr44885_state[(2)] = cr44885_place_13);

return cr44885_state;

break;
default:
(cr44885_state[(0)] = cr44752_place_10);

(cr44885_state[(1)] = null);

(cr44885_state[(1)] = cr44885_place_11);

return cr44885_state;

}
}catch (e45162){var e44946 = e45162;
var cr44885_exception = e44946;
(cr44885_state[(0)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_21 = (function (cr44885_state){
try{var cr44885_place_40 = (cr44885_state[(1)]);
var cr44885_place_44 = "No matching clause: ";
var cr44885_place_45 = cr44885_place_40;
var cr44885_place_46 = [cr44885_place_44,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44885_place_45)].join('');
var cr44885_place_47 = (new Error(cr44885_place_46));
var cr44885_place_48 = (function(){throw cr44885_place_47})();
(cr44885_state[(0)] = null);

(cr44885_state[(1)] = null);

return null;
}catch (e45164){var e44957 = e45164;
var cr44885_exception = e44957;
(cr44885_state[(0)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_25 = (function (cr44885_state){
try{var cr44885_place_0 = console;
var cr44885_place_1 = "Connected.";
var cr44885_place_2 = cr44885_place_0.log(cr44885_place_1);
var cr44885_place_3 = missionary.core.rdv;
var cr44885_place_4 = (function (){var fexpr__44962 = cr44885_place_3;
var fexpr__45166 = fexpr__44962;
return (fexpr__45166.cljs$core$IFn$_invoke$arity$0 ? fexpr__45166.cljs$core$IFn$_invoke$arity$0() : fexpr__45166.call(null));
})();
var cr44885_place_5 = (2);
var cr44885_place_6 = missionary.core.seed;
var cr44885_place_7 = cljs.core.range;
var cr44885_place_8 = (2);
var cr44885_place_9 = (function (){var G__44964 = cr44885_place_8;
var fexpr__44963 = cr44885_place_7;
var G__45168 = G__44964;
var fexpr__45167 = fexpr__44963;
return (fexpr__45167.cljs$core$IFn$_invoke$arity$1 ? fexpr__45167.cljs$core$IFn$_invoke$arity$1(G__45168) : fexpr__45167.call(null,G__45168));
})();
var cr44885_place_10 = (function (){var G__44966 = cr44885_place_9;
var fexpr__44965 = cr44885_place_6;
var G__45170 = G__44966;
var fexpr__45169 = fexpr__44965;
return (fexpr__45169.cljs$core$IFn$_invoke$arity$1 ? fexpr__45169.cljs$core$IFn$_invoke$arity$1(G__45170) : fexpr__45169.call(null,G__45170));
})();
(cr44885_state[(0)] = cr44752_place_16);

(cr44885_state[(1)] = cr44885_place_4);

return missionary.core.fork(cr44885_place_5,cr44885_place_10);
}catch (e45165){var e44961 = e45165;
var cr44885_exception = e44961;
(cr44885_state[(0)] = null);

throw cr44885_exception;
}});
var cr44752_place_19 = (function (cr44885_state){
try{var cr44885_place_26 = missionary.core.unpark();
(cr44885_state[(0)] = cr44752_place_13);

(cr44885_state[(2)] = cr44885_place_26);

return cr44885_state;
}catch (e45171){var e44955 = e45171;
var cr44885_exception = e44955;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

throw cr44885_exception;
}});
var cr44752_place_9 = (function (cr44885_state){
try{var cr44885_place_4 = (cr44885_state[(1)]);
var cr44885_place_14 = cr44885_place_4;
var cr44885_place_15 = hyperfiddle.electric.impl.runtime.subject_at;
var cr44885_place_16 = cr44752_place_3;
var cr44885_place_17 = (0);
var cr44885_place_18 = (function (){var G__44935 = cr44885_place_16;
var G__44936 = cr44885_place_17;
var fexpr__44934 = cr44885_place_15;
var G__45174 = G__44935;
var G__45175 = G__44936;
var fexpr__45173 = fexpr__44934;
return (fexpr__45173.cljs$core$IFn$_invoke$arity$2 ? fexpr__45173.cljs$core$IFn$_invoke$arity$2(G__45174,G__45175) : fexpr__45173.call(null,G__45174,G__45175));
})();
var cr44885_place_19 = client;
var cr44885_place_20 = cr44885_place_14;
var cr44885_place_21 = cr44885_place_18;
var cr44885_place_22 = (function (){var G__44938 = cr44885_place_20;
var G__44939 = cr44885_place_21;
var fexpr__44937 = cr44885_place_19;
var G__45177 = G__44938;
var G__45178 = G__44939;
var fexpr__45176 = fexpr__44937;
return (fexpr__45176.cljs$core$IFn$_invoke$arity$2 ? fexpr__45176.cljs$core$IFn$_invoke$arity$2(G__45177,G__45178) : fexpr__45176.call(null,G__45177,G__45178));
})();
(cr44885_state[(0)] = cr44752_place_15);

(cr44885_state[(1)] = null);

return missionary.core.park(cr44885_place_22);
}catch (e45172){var e44933 = e45172;
var cr44885_exception = e44933;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_27 = (function (cr44885_state){
try{(cr44885_state[(0)] = cr44752_place_11);

return cr44885_state;
}catch (e45179){var e44968 = e45179;
var cr44885_exception = e44968;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_24 = (function (cr44885_state){
try{var cr44885_place_28 = missionary.core.unpark();
var cr44885_place_29 = cr44885_place_28;
var cr44885_place_30 = null;
var cr44885_place_31 = (cr44885_place_29 == cr44885_place_30);
var cr44885_place_32 = null;
if(cr44885_place_31){
(cr44885_state[(0)] = cr44752_place_22);

(cr44885_state[(1)] = null);

(cr44885_state[(3)] = cr44885_place_32);

return cr44885_state;
} else {
(cr44885_state[(0)] = cr44752_place_18);

(cr44885_state[(4)] = cr44885_place_28);

(cr44885_state[(3)] = cr44885_place_32);

return cr44885_state;
}
}catch (e45180){var e44960 = e45180;
var cr44885_exception = e44960;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_20 = (function (cr44885_state){
try{var cr44885_place_33 = (cr44885_state[(4)]);
var cr44885_place_43 = cr44885_place_33;
(cr44885_state[(0)] = cr44752_place_23);

(cr44885_state[(4)] = null);

(cr44885_state[(1)] = cr44885_place_43);

return cr44885_state;
}catch (e45181){var e44956 = e45181;
var cr44885_exception = e44956;
(cr44885_state[(0)] = null);

(cr44885_state[(2)] = null);

(cr44885_state[(3)] = null);

(cr44885_state[(4)] = null);

(cr44885_state[(1)] = null);

throw cr44885_exception;
}});
var cr44752_place_28 = cloroutine.impl.coroutine;
var cr44752_place_29 = cljs.core.object_array;
var cr44752_place_30 = (5);
var cr44752_place_31 = (function (){var G__45183 = cr44752_place_30;
var fexpr__45182 = cr44752_place_29;
return (fexpr__45182.cljs$core$IFn$_invoke$arity$1 ? fexpr__45182.cljs$core$IFn$_invoke$arity$1(G__45183) : fexpr__45182.call(null,G__45183));
})();
var cr44752_place_32 = cr44752_place_31;
var cr44752_place_33 = (0);
var cr44752_place_34 = cr44752_place_25;
var cr44752_place_35 = (cr44752_place_32[cr44752_place_33] = cr44752_place_34);
var cr44752_place_36 = cr44752_place_31;
var cr44752_place_37 = (function (){var G__45185 = cr44752_place_36;
var fexpr__45184 = cr44752_place_28;
return (fexpr__45184.cljs$core$IFn$_invoke$arity$1 ? fexpr__45184.cljs$core$IFn$_invoke$arity$1(G__45185) : fexpr__45184.call(null,G__45185));
})();
var cr44752_place_38 = missionary.core.ap_run;
var cr44752_place_39 = (function (){var G__45187 = cr44752_place_37;
var G__45188 = cr44752_place_38;
var fexpr__45186 = cr44752_place_8;
return (fexpr__45186.cljs$core$IFn$_invoke$arity$2 ? fexpr__45186.cljs$core$IFn$_invoke$arity$2(G__45187,G__45188) : fexpr__45186.call(null,G__45187,G__45188));
})();
var cr44752_place_40 = conn;
var cr44752_place_41 = cr44752_place_7;
var cr44752_place_42 = cr44752_place_39;
var cr44752_place_43 = (function (){var G__45190 = cr44752_place_41;
var G__45191 = cr44752_place_42;
var fexpr__45189 = cr44752_place_40;
return (fexpr__45189.cljs$core$IFn$_invoke$arity$2 ? fexpr__45189.cljs$core$IFn$_invoke$arity$2(G__45190,G__45191) : fexpr__45189.call(null,G__45190,G__45191));
})();
(cr44752_state[(0)] = cr44752_block_2);

return missionary.core.park(cr44752_place_43);
}catch (e45105){var cr44752_exception = e45105;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_7 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_7(cr44752_state){
try{var cr44752_place_62 = (cr44752_state[(4)]);
(cr44752_state[(0)] = cr44752_block_9);

(cr44752_state[(4)] = null);

(cr44752_state[(2)] = cr44752_place_62);

return cr44752_state;
}catch (e45192){var cr44752_exception = e45192;
(cr44752_state[(0)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(4)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_3 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_3(cr44752_state){
try{var cr44752_place_44 = (cr44752_state[(2)]);
var cr44752_place_49 = cr44752_place_44;
var cr44752_place_50 = new cljs.core.Keyword(null,"code","code",1586293142);
var cr44752_place_51 = cr44752_place_49;
var cr44752_place_52 = cr44752_place_50.cljs$core$IFn$_invoke$arity$1(cr44752_place_51);
var cr44752_place_53 = cr44752_place_52;
var cr44752_place_54 = null;
var cr44752_place_55 = (cr44752_place_53 == cr44752_place_54);
var cr44752_place_56 = null;
if(cr44752_place_55){
(cr44752_state[(0)] = cr44752_block_8);

(cr44752_state[(2)] = null);

(cr44752_state[(2)] = cr44752_place_56);

return cr44752_state;
} else {
(cr44752_state[(0)] = cr44752_block_4);

(cr44752_state[(2)] = null);

(cr44752_state[(4)] = cr44752_place_49);

(cr44752_state[(5)] = cr44752_place_52);

(cr44752_state[(2)] = cr44752_place_56);

return cr44752_state;
}
}catch (e45193){var cr44752_exception = e45193;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_8 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_8(cr44752_state){
try{var cr44752_place_0 = (cr44752_state[(1)]);
var cr44752_place_80 = console;
var cr44752_place_81 = "Failed to connect.";
var cr44752_place_82 = cr44752_place_80.log(cr44752_place_81);
var cr44752_place_83 = cr44752_place_0;
(cr44752_state[(0)] = cr44752_block_9);

(cr44752_state[(2)] = cr44752_place_83);

return cr44752_state;
}catch (e45194){var cr44752_exception = e45194;
(cr44752_state[(0)] = null);

(cr44752_state[(2)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_13 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_13(cr44752_state){
try{var cr44752_place_113 = missionary.core.unpark();
(cr44752_state[(0)] = cr44752_block_1);

(cr44752_state[(1)] = cr44752_place_113);

return cr44752_state;
}catch (e45195){var cr44752_exception = e45195;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_5 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_5(cr44752_state){
try{var cr44752_place_49 = (cr44752_state[(4)]);
var cr44752_place_57 = (cr44752_state[(1)]);
var cr44752_place_63 = cljs.core.ex_info;
var cr44752_place_64 = "Remote error - ";
var cr44752_place_65 = cr44752_place_57;
var cr44752_place_66 = " ";
var cr44752_place_67 = new cljs.core.Keyword(null,"reason","reason",-2070751759);
var cr44752_place_68 = cr44752_place_49;
var cr44752_place_69 = cr44752_place_67.cljs$core$IFn$_invoke$arity$1(cr44752_place_68);
var cr44752_place_70 = [cr44752_place_64,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44752_place_65),cr44752_place_66,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44752_place_69)].join('');
var cr44752_place_71 = cljs.core.with_meta(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.IMap], null));
var cr44752_place_72 = (function (){var G__45198 = cr44752_place_70;
var G__45199 = cr44752_place_71;
var fexpr__45197 = cr44752_place_63;
return (fexpr__45197.cljs$core$IFn$_invoke$arity$2 ? fexpr__45197.cljs$core$IFn$_invoke$arity$2(G__45198,G__45199) : fexpr__45197.call(null,G__45198,G__45199));
})();
var cr44752_place_73 = (function(){throw cr44752_place_72})();
(cr44752_state[(0)] = null);

(cr44752_state[(4)] = null);

(cr44752_state[(1)] = null);

return null;
}catch (e45196){var cr44752_exception = e45196;
(cr44752_state[(0)] = null);

(cr44752_state[(4)] = null);

(cr44752_state[(1)] = null);

throw cr44752_exception;
}});
var cr44752_block_10 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_10(cr44752_state){
try{var cr44752_place_84 = null;
(cr44752_state[(0)] = cr44752_block_11);

(cr44752_state[(3)] = cr44752_place_84);

return cr44752_state;
}catch (e45200){var cr44752_exception = e45200;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
var cr44752_block_12 = (function hyperfiddle$electric_client$boot_with_retry_$_cr44752_block_12(cr44752_state){
try{var cr44752_place_48 = (cr44752_state[(3)]);
var cr44752_place_89 = cr44752_place_48;
var cr44752_place_90 = cljs.core.seq;
var cr44752_place_91 = cr44752_place_89;
var cr44752_place_92 = (function (){var G__45203 = cr44752_place_91;
var fexpr__45202 = cr44752_place_90;
return (fexpr__45202.cljs$core$IFn$_invoke$arity$1 ? fexpr__45202.cljs$core$IFn$_invoke$arity$1(G__45203) : fexpr__45202.call(null,G__45203));
})();
var cr44752_place_93 = cljs.core.first;
var cr44752_place_94 = cr44752_place_92;
var cr44752_place_95 = (function (){var G__45205 = cr44752_place_94;
var fexpr__45204 = cr44752_place_93;
return (fexpr__45204.cljs$core$IFn$_invoke$arity$1 ? fexpr__45204.cljs$core$IFn$_invoke$arity$1(G__45205) : fexpr__45204.call(null,G__45205));
})();
var cr44752_place_96 = cljs.core.next;
var cr44752_place_97 = cr44752_place_92;
var cr44752_place_98 = (function (){var G__45207 = cr44752_place_97;
var fexpr__45206 = cr44752_place_96;
return (fexpr__45206.cljs$core$IFn$_invoke$arity$1 ? fexpr__45206.cljs$core$IFn$_invoke$arity$1(G__45207) : fexpr__45206.call(null,G__45207));
})();
var cr44752_place_99 = cr44752_place_95;
var cr44752_place_100 = cr44752_place_98;
var cr44752_place_101 = console;
var cr44752_place_102 = "Next attempt in ";
var cr44752_place_103 = cr44752_place_99;
var cr44752_place_104 = (1000);
var cr44752_place_105 = (cr44752_place_103 / cr44752_place_104);
var cr44752_place_106 = " seconds.";
var cr44752_place_107 = [cr44752_place_102,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cr44752_place_105),cr44752_place_106].join('');
var cr44752_place_108 = cr44752_place_101.log(cr44752_place_107);
var cr44752_place_109 = missionary.core.sleep;
var cr44752_place_110 = cr44752_place_99;
var cr44752_place_111 = cr44752_place_100;
var cr44752_place_112 = (function (){var G__45209 = cr44752_place_110;
var G__45210 = cr44752_place_111;
var fexpr__45208 = cr44752_place_109;
return (fexpr__45208.cljs$core$IFn$_invoke$arity$2 ? fexpr__45208.cljs$core$IFn$_invoke$arity$2(G__45209,G__45210) : fexpr__45208.call(null,G__45209,G__45210));
})();
(cr44752_state[(0)] = cr44752_block_13);

(cr44752_state[(3)] = null);

return missionary.core.park(cr44752_place_112);
}catch (e45201){var cr44752_exception = e45201;
(cr44752_state[(0)] = null);

(cr44752_state[(1)] = null);

(cr44752_state[(3)] = null);

throw cr44752_exception;
}});
return cloroutine.impl.coroutine((function (){var G__45211 = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((6));
(G__45211[(0)] = cr44752_block_0);

return G__45211;
})());
})(),missionary.core.sp_run);
});

//# sourceMappingURL=hyperfiddle.electric_client.js.map
