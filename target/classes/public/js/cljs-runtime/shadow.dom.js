goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36527 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36527(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36528 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36528(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35441 = coll;
var G__35442 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35441,G__35442) : shadow.dom.lazy_native_coll_seq.call(null,G__35441,G__35442));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35473 = arguments.length;
switch (G__35473) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35483 = arguments.length;
switch (G__35483) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35498 = arguments.length;
switch (G__35498) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35518 = arguments.length;
switch (G__35518) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35548 = arguments.length;
switch (G__35548) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35560 = arguments.length;
switch (G__35560) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35567){if((e35567 instanceof Object)){
var e = e35567;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35567;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35584 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35585 = null;
var count__35586 = (0);
var i__35587 = (0);
while(true){
if((i__35587 < count__35586)){
var el = chunk__35585.cljs$core$IIndexed$_nth$arity$2(null,i__35587);
var handler_36625__$1 = ((function (seq__35584,chunk__35585,count__35586,i__35587,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35584,chunk__35585,count__35586,i__35587,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36625__$1);


var G__36626 = seq__35584;
var G__36627 = chunk__35585;
var G__36628 = count__35586;
var G__36629 = (i__35587 + (1));
seq__35584 = G__36626;
chunk__35585 = G__36627;
count__35586 = G__36628;
i__35587 = G__36629;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35584);
if(temp__5804__auto__){
var seq__35584__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35584__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35584__$1);
var G__36630 = cljs.core.chunk_rest(seq__35584__$1);
var G__36631 = c__5568__auto__;
var G__36632 = cljs.core.count(c__5568__auto__);
var G__36633 = (0);
seq__35584 = G__36630;
chunk__35585 = G__36631;
count__35586 = G__36632;
i__35587 = G__36633;
continue;
} else {
var el = cljs.core.first(seq__35584__$1);
var handler_36634__$1 = ((function (seq__35584,chunk__35585,count__35586,i__35587,el,seq__35584__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35584,chunk__35585,count__35586,i__35587,el,seq__35584__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36634__$1);


var G__36635 = cljs.core.next(seq__35584__$1);
var G__36636 = null;
var G__36637 = (0);
var G__36638 = (0);
seq__35584 = G__36635;
chunk__35585 = G__36636;
count__35586 = G__36637;
i__35587 = G__36638;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35609 = arguments.length;
switch (G__35609) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35614 = cljs.core.seq(events);
var chunk__35615 = null;
var count__35616 = (0);
var i__35617 = (0);
while(true){
if((i__35617 < count__35616)){
var vec__35635 = chunk__35615.cljs$core$IIndexed$_nth$arity$2(null,i__35617);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35635,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36641 = seq__35614;
var G__36642 = chunk__35615;
var G__36643 = count__35616;
var G__36644 = (i__35617 + (1));
seq__35614 = G__36641;
chunk__35615 = G__36642;
count__35616 = G__36643;
i__35617 = G__36644;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35614);
if(temp__5804__auto__){
var seq__35614__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35614__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35614__$1);
var G__36645 = cljs.core.chunk_rest(seq__35614__$1);
var G__36646 = c__5568__auto__;
var G__36647 = cljs.core.count(c__5568__auto__);
var G__36648 = (0);
seq__35614 = G__36645;
chunk__35615 = G__36646;
count__35616 = G__36647;
i__35617 = G__36648;
continue;
} else {
var vec__35640 = cljs.core.first(seq__35614__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35640,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36649 = cljs.core.next(seq__35614__$1);
var G__36650 = null;
var G__36651 = (0);
var G__36652 = (0);
seq__35614 = G__36649;
chunk__35615 = G__36650;
count__35616 = G__36651;
i__35617 = G__36652;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35648 = cljs.core.seq(styles);
var chunk__35649 = null;
var count__35650 = (0);
var i__35651 = (0);
while(true){
if((i__35651 < count__35650)){
var vec__35666 = chunk__35649.cljs$core$IIndexed$_nth$arity$2(null,i__35651);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35666,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36654 = seq__35648;
var G__36655 = chunk__35649;
var G__36656 = count__35650;
var G__36657 = (i__35651 + (1));
seq__35648 = G__36654;
chunk__35649 = G__36655;
count__35650 = G__36656;
i__35651 = G__36657;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35648);
if(temp__5804__auto__){
var seq__35648__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35648__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35648__$1);
var G__36658 = cljs.core.chunk_rest(seq__35648__$1);
var G__36659 = c__5568__auto__;
var G__36660 = cljs.core.count(c__5568__auto__);
var G__36661 = (0);
seq__35648 = G__36658;
chunk__35649 = G__36659;
count__35650 = G__36660;
i__35651 = G__36661;
continue;
} else {
var vec__35675 = cljs.core.first(seq__35648__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35675,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36662 = cljs.core.next(seq__35648__$1);
var G__36663 = null;
var G__36664 = (0);
var G__36665 = (0);
seq__35648 = G__36662;
chunk__35649 = G__36663;
count__35650 = G__36664;
i__35651 = G__36665;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35686_36669 = key;
var G__35686_36670__$1 = (((G__35686_36669 instanceof cljs.core.Keyword))?G__35686_36669.fqn:null);
switch (G__35686_36670__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36672 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_36672,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_36672,"aria-");
}
})())){
el.setAttribute(ks_36672,value);
} else {
(el[ks_36672] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35723){
var map__35725 = p__35723;
var map__35725__$1 = cljs.core.__destructure_map(map__35725);
var props = map__35725__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35725__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35728 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35732 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35732,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35732;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35737 = arguments.length;
switch (G__35737) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35738){
var vec__35739 = p__35738;
var seq__35740 = cljs.core.seq(vec__35739);
var first__35741 = cljs.core.first(seq__35740);
var seq__35740__$1 = cljs.core.next(seq__35740);
var nn = first__35741;
var first__35741__$1 = cljs.core.first(seq__35740__$1);
var seq__35740__$2 = cljs.core.next(seq__35740__$1);
var np = first__35741__$1;
var nc = seq__35740__$2;
var node = vec__35739;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35742 = nn;
var G__35743 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35742,G__35743) : create_fn.call(null,G__35742,G__35743));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35744 = nn;
var G__35745 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35744,G__35745) : create_fn.call(null,G__35744,G__35745));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35748 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35748,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35748,(1),null);
var seq__35751_36688 = cljs.core.seq(node_children);
var chunk__35752_36689 = null;
var count__35753_36690 = (0);
var i__35754_36691 = (0);
while(true){
if((i__35754_36691 < count__35753_36690)){
var child_struct_36695 = chunk__35752_36689.cljs$core$IIndexed$_nth$arity$2(null,i__35754_36691);
var children_36696 = shadow.dom.dom_node(child_struct_36695);
if(cljs.core.seq_QMARK_(children_36696)){
var seq__35805_36697 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36696));
var chunk__35807_36698 = null;
var count__35808_36699 = (0);
var i__35809_36700 = (0);
while(true){
if((i__35809_36700 < count__35808_36699)){
var child_36701 = chunk__35807_36698.cljs$core$IIndexed$_nth$arity$2(null,i__35809_36700);
if(cljs.core.truth_(child_36701)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36701);


var G__36702 = seq__35805_36697;
var G__36703 = chunk__35807_36698;
var G__36704 = count__35808_36699;
var G__36705 = (i__35809_36700 + (1));
seq__35805_36697 = G__36702;
chunk__35807_36698 = G__36703;
count__35808_36699 = G__36704;
i__35809_36700 = G__36705;
continue;
} else {
var G__36706 = seq__35805_36697;
var G__36707 = chunk__35807_36698;
var G__36708 = count__35808_36699;
var G__36709 = (i__35809_36700 + (1));
seq__35805_36697 = G__36706;
chunk__35807_36698 = G__36707;
count__35808_36699 = G__36708;
i__35809_36700 = G__36709;
continue;
}
} else {
var temp__5804__auto___36710 = cljs.core.seq(seq__35805_36697);
if(temp__5804__auto___36710){
var seq__35805_36711__$1 = temp__5804__auto___36710;
if(cljs.core.chunked_seq_QMARK_(seq__35805_36711__$1)){
var c__5568__auto___36712 = cljs.core.chunk_first(seq__35805_36711__$1);
var G__36713 = cljs.core.chunk_rest(seq__35805_36711__$1);
var G__36714 = c__5568__auto___36712;
var G__36715 = cljs.core.count(c__5568__auto___36712);
var G__36716 = (0);
seq__35805_36697 = G__36713;
chunk__35807_36698 = G__36714;
count__35808_36699 = G__36715;
i__35809_36700 = G__36716;
continue;
} else {
var child_36717 = cljs.core.first(seq__35805_36711__$1);
if(cljs.core.truth_(child_36717)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36717);


var G__36718 = cljs.core.next(seq__35805_36711__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__35805_36697 = G__36718;
chunk__35807_36698 = G__36719;
count__35808_36699 = G__36720;
i__35809_36700 = G__36721;
continue;
} else {
var G__36722 = cljs.core.next(seq__35805_36711__$1);
var G__36723 = null;
var G__36724 = (0);
var G__36725 = (0);
seq__35805_36697 = G__36722;
chunk__35807_36698 = G__36723;
count__35808_36699 = G__36724;
i__35809_36700 = G__36725;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36696);
}


var G__36726 = seq__35751_36688;
var G__36727 = chunk__35752_36689;
var G__36728 = count__35753_36690;
var G__36729 = (i__35754_36691 + (1));
seq__35751_36688 = G__36726;
chunk__35752_36689 = G__36727;
count__35753_36690 = G__36728;
i__35754_36691 = G__36729;
continue;
} else {
var temp__5804__auto___36730 = cljs.core.seq(seq__35751_36688);
if(temp__5804__auto___36730){
var seq__35751_36731__$1 = temp__5804__auto___36730;
if(cljs.core.chunked_seq_QMARK_(seq__35751_36731__$1)){
var c__5568__auto___36732 = cljs.core.chunk_first(seq__35751_36731__$1);
var G__36733 = cljs.core.chunk_rest(seq__35751_36731__$1);
var G__36734 = c__5568__auto___36732;
var G__36735 = cljs.core.count(c__5568__auto___36732);
var G__36736 = (0);
seq__35751_36688 = G__36733;
chunk__35752_36689 = G__36734;
count__35753_36690 = G__36735;
i__35754_36691 = G__36736;
continue;
} else {
var child_struct_36739 = cljs.core.first(seq__35751_36731__$1);
var children_36740 = shadow.dom.dom_node(child_struct_36739);
if(cljs.core.seq_QMARK_(children_36740)){
var seq__35839_36741 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36740));
var chunk__35842_36742 = null;
var count__35843_36743 = (0);
var i__35844_36744 = (0);
while(true){
if((i__35844_36744 < count__35843_36743)){
var child_36745 = chunk__35842_36742.cljs$core$IIndexed$_nth$arity$2(null,i__35844_36744);
if(cljs.core.truth_(child_36745)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36745);


var G__36746 = seq__35839_36741;
var G__36747 = chunk__35842_36742;
var G__36748 = count__35843_36743;
var G__36749 = (i__35844_36744 + (1));
seq__35839_36741 = G__36746;
chunk__35842_36742 = G__36747;
count__35843_36743 = G__36748;
i__35844_36744 = G__36749;
continue;
} else {
var G__36750 = seq__35839_36741;
var G__36751 = chunk__35842_36742;
var G__36752 = count__35843_36743;
var G__36753 = (i__35844_36744 + (1));
seq__35839_36741 = G__36750;
chunk__35842_36742 = G__36751;
count__35843_36743 = G__36752;
i__35844_36744 = G__36753;
continue;
}
} else {
var temp__5804__auto___36754__$1 = cljs.core.seq(seq__35839_36741);
if(temp__5804__auto___36754__$1){
var seq__35839_36755__$1 = temp__5804__auto___36754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35839_36755__$1)){
var c__5568__auto___36756 = cljs.core.chunk_first(seq__35839_36755__$1);
var G__36757 = cljs.core.chunk_rest(seq__35839_36755__$1);
var G__36758 = c__5568__auto___36756;
var G__36759 = cljs.core.count(c__5568__auto___36756);
var G__36760 = (0);
seq__35839_36741 = G__36757;
chunk__35842_36742 = G__36758;
count__35843_36743 = G__36759;
i__35844_36744 = G__36760;
continue;
} else {
var child_36761 = cljs.core.first(seq__35839_36755__$1);
if(cljs.core.truth_(child_36761)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36761);


var G__36762 = cljs.core.next(seq__35839_36755__$1);
var G__36763 = null;
var G__36764 = (0);
var G__36765 = (0);
seq__35839_36741 = G__36762;
chunk__35842_36742 = G__36763;
count__35843_36743 = G__36764;
i__35844_36744 = G__36765;
continue;
} else {
var G__36766 = cljs.core.next(seq__35839_36755__$1);
var G__36767 = null;
var G__36768 = (0);
var G__36769 = (0);
seq__35839_36741 = G__36766;
chunk__35842_36742 = G__36767;
count__35843_36743 = G__36768;
i__35844_36744 = G__36769;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36740);
}


var G__36770 = cljs.core.next(seq__35751_36731__$1);
var G__36771 = null;
var G__36772 = (0);
var G__36773 = (0);
seq__35751_36688 = G__36770;
chunk__35752_36689 = G__36771;
count__35753_36690 = G__36772;
i__35754_36691 = G__36773;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35859 = cljs.core.seq(node);
var chunk__35860 = null;
var count__35861 = (0);
var i__35862 = (0);
while(true){
if((i__35862 < count__35861)){
var n = chunk__35860.cljs$core$IIndexed$_nth$arity$2(null,i__35862);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36774 = seq__35859;
var G__36775 = chunk__35860;
var G__36776 = count__35861;
var G__36777 = (i__35862 + (1));
seq__35859 = G__36774;
chunk__35860 = G__36775;
count__35861 = G__36776;
i__35862 = G__36777;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__35859);
if(temp__5804__auto__){
var seq__35859__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35859__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__35859__$1);
var G__36778 = cljs.core.chunk_rest(seq__35859__$1);
var G__36779 = c__5568__auto__;
var G__36780 = cljs.core.count(c__5568__auto__);
var G__36781 = (0);
seq__35859 = G__36778;
chunk__35860 = G__36779;
count__35861 = G__36780;
i__35862 = G__36781;
continue;
} else {
var n = cljs.core.first(seq__35859__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36782 = cljs.core.next(seq__35859__$1);
var G__36783 = null;
var G__36784 = (0);
var G__36785 = (0);
seq__35859 = G__36782;
chunk__35860 = G__36783;
count__35861 = G__36784;
i__35862 = G__36785;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35883 = arguments.length;
switch (G__35883) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35895 = arguments.length;
switch (G__35895) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35964 = arguments.length;
switch (G__35964) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36789 = arguments.length;
var i__5770__auto___36790 = (0);
while(true){
if((i__5770__auto___36790 < len__5769__auto___36789)){
args__5775__auto__.push((arguments[i__5770__auto___36790]));

var G__36791 = (i__5770__auto___36790 + (1));
i__5770__auto___36790 = G__36791;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36002_36792 = cljs.core.seq(nodes);
var chunk__36003_36793 = null;
var count__36004_36794 = (0);
var i__36005_36795 = (0);
while(true){
if((i__36005_36795 < count__36004_36794)){
var node_36796 = chunk__36003_36793.cljs$core$IIndexed$_nth$arity$2(null,i__36005_36795);
fragment.appendChild(shadow.dom._to_dom(node_36796));


var G__36797 = seq__36002_36792;
var G__36798 = chunk__36003_36793;
var G__36799 = count__36004_36794;
var G__36800 = (i__36005_36795 + (1));
seq__36002_36792 = G__36797;
chunk__36003_36793 = G__36798;
count__36004_36794 = G__36799;
i__36005_36795 = G__36800;
continue;
} else {
var temp__5804__auto___36801 = cljs.core.seq(seq__36002_36792);
if(temp__5804__auto___36801){
var seq__36002_36802__$1 = temp__5804__auto___36801;
if(cljs.core.chunked_seq_QMARK_(seq__36002_36802__$1)){
var c__5568__auto___36803 = cljs.core.chunk_first(seq__36002_36802__$1);
var G__36804 = cljs.core.chunk_rest(seq__36002_36802__$1);
var G__36805 = c__5568__auto___36803;
var G__36806 = cljs.core.count(c__5568__auto___36803);
var G__36807 = (0);
seq__36002_36792 = G__36804;
chunk__36003_36793 = G__36805;
count__36004_36794 = G__36806;
i__36005_36795 = G__36807;
continue;
} else {
var node_36808 = cljs.core.first(seq__36002_36802__$1);
fragment.appendChild(shadow.dom._to_dom(node_36808));


var G__36810 = cljs.core.next(seq__36002_36802__$1);
var G__36811 = null;
var G__36812 = (0);
var G__36813 = (0);
seq__36002_36792 = G__36810;
chunk__36003_36793 = G__36811;
count__36004_36794 = G__36812;
i__36005_36795 = G__36813;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35990){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35990));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36025_36814 = cljs.core.seq(scripts);
var chunk__36026_36815 = null;
var count__36027_36816 = (0);
var i__36028_36817 = (0);
while(true){
if((i__36028_36817 < count__36027_36816)){
var vec__36040_36818 = chunk__36026_36815.cljs$core$IIndexed$_nth$arity$2(null,i__36028_36817);
var script_tag_36819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040_36818,(0),null);
var script_body_36820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36040_36818,(1),null);
eval(script_body_36820);


var G__36821 = seq__36025_36814;
var G__36822 = chunk__36026_36815;
var G__36823 = count__36027_36816;
var G__36824 = (i__36028_36817 + (1));
seq__36025_36814 = G__36821;
chunk__36026_36815 = G__36822;
count__36027_36816 = G__36823;
i__36028_36817 = G__36824;
continue;
} else {
var temp__5804__auto___36825 = cljs.core.seq(seq__36025_36814);
if(temp__5804__auto___36825){
var seq__36025_36826__$1 = temp__5804__auto___36825;
if(cljs.core.chunked_seq_QMARK_(seq__36025_36826__$1)){
var c__5568__auto___36827 = cljs.core.chunk_first(seq__36025_36826__$1);
var G__36828 = cljs.core.chunk_rest(seq__36025_36826__$1);
var G__36829 = c__5568__auto___36827;
var G__36830 = cljs.core.count(c__5568__auto___36827);
var G__36831 = (0);
seq__36025_36814 = G__36828;
chunk__36026_36815 = G__36829;
count__36027_36816 = G__36830;
i__36028_36817 = G__36831;
continue;
} else {
var vec__36043_36832 = cljs.core.first(seq__36025_36826__$1);
var script_tag_36833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36832,(0),null);
var script_body_36834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36043_36832,(1),null);
eval(script_body_36834);


var G__36835 = cljs.core.next(seq__36025_36826__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36025_36814 = G__36835;
chunk__36026_36815 = G__36836;
count__36027_36816 = G__36837;
i__36028_36817 = G__36838;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36047){
var vec__36049 = p__36047;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36049,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36061 = arguments.length;
switch (G__36061) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36068 = cljs.core.seq(style_keys);
var chunk__36069 = null;
var count__36070 = (0);
var i__36071 = (0);
while(true){
if((i__36071 < count__36070)){
var it = chunk__36069.cljs$core$IIndexed$_nth$arity$2(null,i__36071);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36846 = seq__36068;
var G__36847 = chunk__36069;
var G__36848 = count__36070;
var G__36849 = (i__36071 + (1));
seq__36068 = G__36846;
chunk__36069 = G__36847;
count__36070 = G__36848;
i__36071 = G__36849;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36068);
if(temp__5804__auto__){
var seq__36068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36068__$1);
var G__36850 = cljs.core.chunk_rest(seq__36068__$1);
var G__36851 = c__5568__auto__;
var G__36852 = cljs.core.count(c__5568__auto__);
var G__36853 = (0);
seq__36068 = G__36850;
chunk__36069 = G__36851;
count__36070 = G__36852;
i__36071 = G__36853;
continue;
} else {
var it = cljs.core.first(seq__36068__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36854 = cljs.core.next(seq__36068__$1);
var G__36855 = null;
var G__36856 = (0);
var G__36857 = (0);
seq__36068 = G__36854;
chunk__36069 = G__36855;
count__36070 = G__36856;
i__36071 = G__36857;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36076,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36083 = k36076;
var G__36083__$1 = (((G__36083 instanceof cljs.core.Keyword))?G__36083.fqn:null);
switch (G__36083__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36076,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36088){
var vec__36090 = p__36088;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36090,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36075){
var self__ = this;
var G__36075__$1 = this;
return (new cljs.core.RecordIter((0),G__36075__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36077,other36078){
var self__ = this;
var this36077__$1 = this;
return (((!((other36078 == null)))) && ((((this36077__$1.constructor === other36078.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.x,other36078.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.y,other36078.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36077__$1.__extmap,other36078.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36076){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36120 = k36076;
var G__36120__$1 = (((G__36120 instanceof cljs.core.Keyword))?G__36120.fqn:null);
switch (G__36120__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36076);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36075){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36123 = cljs.core.keyword_identical_QMARK_;
var expr__36124 = k__5352__auto__;
if(cljs.core.truth_((pred__36123.cljs$core$IFn$_invoke$arity$2 ? pred__36123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36124) : pred__36123.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36124)))){
return (new shadow.dom.Coordinate(G__36075,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36123.cljs$core$IFn$_invoke$arity$2 ? pred__36123.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36124) : pred__36123.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36124)))){
return (new shadow.dom.Coordinate(self__.x,G__36075,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36075),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36075){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36075,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36079){
var extmap__5385__auto__ = (function (){var G__36147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36079,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36079)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36147);
} else {
return G__36147;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36079),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36079),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36157,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36169 = k36157;
var G__36169__$1 = (((G__36169 instanceof cljs.core.Keyword))?G__36169.fqn:null);
switch (G__36169__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36157,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36172){
var vec__36173 = p__36172;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36173,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36156){
var self__ = this;
var G__36156__$1 = this;
return (new cljs.core.RecordIter((0),G__36156__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36158,other36159){
var self__ = this;
var this36158__$1 = this;
return (((!((other36159 == null)))) && ((((this36158__$1.constructor === other36159.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36158__$1.w,other36159.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36158__$1.h,other36159.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36158__$1.__extmap,other36159.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36157){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36210 = k36157;
var G__36210__$1 = (((G__36210 instanceof cljs.core.Keyword))?G__36210.fqn:null);
switch (G__36210__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36157);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36156){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36213 = cljs.core.keyword_identical_QMARK_;
var expr__36214 = k__5352__auto__;
if(cljs.core.truth_((pred__36213.cljs$core$IFn$_invoke$arity$2 ? pred__36213.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36214) : pred__36213.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36214)))){
return (new shadow.dom.Size(G__36156,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36213.cljs$core$IFn$_invoke$arity$2 ? pred__36213.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36214) : pred__36213.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36214)))){
return (new shadow.dom.Size(self__.w,G__36156,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36156),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36156){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36156,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36161){
var extmap__5385__auto__ = (function (){var G__36228 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36161,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36161)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36228);
} else {
return G__36228;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36161),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36161),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__36912 = (i + (1));
var G__36913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36912;
ret = G__36913;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36236){
var vec__36237 = p__36236;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36237,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36237,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36241 = arguments.length;
switch (G__36241) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36919 = ps;
var G__36920 = (i + (1));
el__$1 = G__36919;
i = G__36920;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36253 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36253,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36253,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36253,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36256_36921 = cljs.core.seq(props);
var chunk__36257_36922 = null;
var count__36258_36923 = (0);
var i__36259_36924 = (0);
while(true){
if((i__36259_36924 < count__36258_36923)){
var vec__36266_36925 = chunk__36257_36922.cljs$core$IIndexed$_nth$arity$2(null,i__36259_36924);
var k_36926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266_36925,(0),null);
var v_36927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36266_36925,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_36926);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36926),v_36927);


var G__36932 = seq__36256_36921;
var G__36933 = chunk__36257_36922;
var G__36934 = count__36258_36923;
var G__36935 = (i__36259_36924 + (1));
seq__36256_36921 = G__36932;
chunk__36257_36922 = G__36933;
count__36258_36923 = G__36934;
i__36259_36924 = G__36935;
continue;
} else {
var temp__5804__auto___36936 = cljs.core.seq(seq__36256_36921);
if(temp__5804__auto___36936){
var seq__36256_36937__$1 = temp__5804__auto___36936;
if(cljs.core.chunked_seq_QMARK_(seq__36256_36937__$1)){
var c__5568__auto___36938 = cljs.core.chunk_first(seq__36256_36937__$1);
var G__36939 = cljs.core.chunk_rest(seq__36256_36937__$1);
var G__36940 = c__5568__auto___36938;
var G__36941 = cljs.core.count(c__5568__auto___36938);
var G__36942 = (0);
seq__36256_36921 = G__36939;
chunk__36257_36922 = G__36940;
count__36258_36923 = G__36941;
i__36259_36924 = G__36942;
continue;
} else {
var vec__36269_36943 = cljs.core.first(seq__36256_36937__$1);
var k_36944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36269_36943,(0),null);
var v_36945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36269_36943,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_36944);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36944),v_36945);


var G__36946 = cljs.core.next(seq__36256_36937__$1);
var G__36947 = null;
var G__36948 = (0);
var G__36949 = (0);
seq__36256_36921 = G__36946;
chunk__36257_36922 = G__36947;
count__36258_36923 = G__36948;
i__36259_36924 = G__36949;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36273 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36273,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36273,(1),null);
var seq__36278_36951 = cljs.core.seq(node_children);
var chunk__36280_36952 = null;
var count__36281_36953 = (0);
var i__36282_36954 = (0);
while(true){
if((i__36282_36954 < count__36281_36953)){
var child_struct_36956 = chunk__36280_36952.cljs$core$IIndexed$_nth$arity$2(null,i__36282_36954);
if((!((child_struct_36956 == null)))){
if(typeof child_struct_36956 === 'string'){
var text_36960 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36960),child_struct_36956].join(''));
} else {
var children_36962 = shadow.dom.svg_node(child_struct_36956);
if(cljs.core.seq_QMARK_(children_36962)){
var seq__36328_36965 = cljs.core.seq(children_36962);
var chunk__36330_36966 = null;
var count__36331_36967 = (0);
var i__36332_36968 = (0);
while(true){
if((i__36332_36968 < count__36331_36967)){
var child_36969 = chunk__36330_36966.cljs$core$IIndexed$_nth$arity$2(null,i__36332_36968);
if(cljs.core.truth_(child_36969)){
node.appendChild(child_36969);


var G__36974 = seq__36328_36965;
var G__36975 = chunk__36330_36966;
var G__36976 = count__36331_36967;
var G__36977 = (i__36332_36968 + (1));
seq__36328_36965 = G__36974;
chunk__36330_36966 = G__36975;
count__36331_36967 = G__36976;
i__36332_36968 = G__36977;
continue;
} else {
var G__36982 = seq__36328_36965;
var G__36983 = chunk__36330_36966;
var G__36984 = count__36331_36967;
var G__36985 = (i__36332_36968 + (1));
seq__36328_36965 = G__36982;
chunk__36330_36966 = G__36983;
count__36331_36967 = G__36984;
i__36332_36968 = G__36985;
continue;
}
} else {
var temp__5804__auto___36989 = cljs.core.seq(seq__36328_36965);
if(temp__5804__auto___36989){
var seq__36328_36990__$1 = temp__5804__auto___36989;
if(cljs.core.chunked_seq_QMARK_(seq__36328_36990__$1)){
var c__5568__auto___36991 = cljs.core.chunk_first(seq__36328_36990__$1);
var G__36992 = cljs.core.chunk_rest(seq__36328_36990__$1);
var G__36993 = c__5568__auto___36991;
var G__36994 = cljs.core.count(c__5568__auto___36991);
var G__36995 = (0);
seq__36328_36965 = G__36992;
chunk__36330_36966 = G__36993;
count__36331_36967 = G__36994;
i__36332_36968 = G__36995;
continue;
} else {
var child_36996 = cljs.core.first(seq__36328_36990__$1);
if(cljs.core.truth_(child_36996)){
node.appendChild(child_36996);


var G__36997 = cljs.core.next(seq__36328_36990__$1);
var G__36998 = null;
var G__36999 = (0);
var G__37000 = (0);
seq__36328_36965 = G__36997;
chunk__36330_36966 = G__36998;
count__36331_36967 = G__36999;
i__36332_36968 = G__37000;
continue;
} else {
var G__37001 = cljs.core.next(seq__36328_36990__$1);
var G__37002 = null;
var G__37003 = (0);
var G__37004 = (0);
seq__36328_36965 = G__37001;
chunk__36330_36966 = G__37002;
count__36331_36967 = G__37003;
i__36332_36968 = G__37004;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36962);
}
}


var G__37005 = seq__36278_36951;
var G__37006 = chunk__36280_36952;
var G__37007 = count__36281_36953;
var G__37008 = (i__36282_36954 + (1));
seq__36278_36951 = G__37005;
chunk__36280_36952 = G__37006;
count__36281_36953 = G__37007;
i__36282_36954 = G__37008;
continue;
} else {
var G__37010 = seq__36278_36951;
var G__37011 = chunk__36280_36952;
var G__37012 = count__36281_36953;
var G__37013 = (i__36282_36954 + (1));
seq__36278_36951 = G__37010;
chunk__36280_36952 = G__37011;
count__36281_36953 = G__37012;
i__36282_36954 = G__37013;
continue;
}
} else {
var temp__5804__auto___37015 = cljs.core.seq(seq__36278_36951);
if(temp__5804__auto___37015){
var seq__36278_37017__$1 = temp__5804__auto___37015;
if(cljs.core.chunked_seq_QMARK_(seq__36278_37017__$1)){
var c__5568__auto___37018 = cljs.core.chunk_first(seq__36278_37017__$1);
var G__37019 = cljs.core.chunk_rest(seq__36278_37017__$1);
var G__37020 = c__5568__auto___37018;
var G__37021 = cljs.core.count(c__5568__auto___37018);
var G__37022 = (0);
seq__36278_36951 = G__37019;
chunk__36280_36952 = G__37020;
count__36281_36953 = G__37021;
i__36282_36954 = G__37022;
continue;
} else {
var child_struct_37023 = cljs.core.first(seq__36278_37017__$1);
if((!((child_struct_37023 == null)))){
if(typeof child_struct_37023 === 'string'){
var text_37024 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37024),child_struct_37023].join(''));
} else {
var children_37025 = shadow.dom.svg_node(child_struct_37023);
if(cljs.core.seq_QMARK_(children_37025)){
var seq__36340_37026 = cljs.core.seq(children_37025);
var chunk__36342_37027 = null;
var count__36343_37028 = (0);
var i__36344_37029 = (0);
while(true){
if((i__36344_37029 < count__36343_37028)){
var child_37030 = chunk__36342_37027.cljs$core$IIndexed$_nth$arity$2(null,i__36344_37029);
if(cljs.core.truth_(child_37030)){
node.appendChild(child_37030);


var G__37031 = seq__36340_37026;
var G__37032 = chunk__36342_37027;
var G__37033 = count__36343_37028;
var G__37034 = (i__36344_37029 + (1));
seq__36340_37026 = G__37031;
chunk__36342_37027 = G__37032;
count__36343_37028 = G__37033;
i__36344_37029 = G__37034;
continue;
} else {
var G__37035 = seq__36340_37026;
var G__37036 = chunk__36342_37027;
var G__37037 = count__36343_37028;
var G__37038 = (i__36344_37029 + (1));
seq__36340_37026 = G__37035;
chunk__36342_37027 = G__37036;
count__36343_37028 = G__37037;
i__36344_37029 = G__37038;
continue;
}
} else {
var temp__5804__auto___37039__$1 = cljs.core.seq(seq__36340_37026);
if(temp__5804__auto___37039__$1){
var seq__36340_37040__$1 = temp__5804__auto___37039__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36340_37040__$1)){
var c__5568__auto___37041 = cljs.core.chunk_first(seq__36340_37040__$1);
var G__37042 = cljs.core.chunk_rest(seq__36340_37040__$1);
var G__37043 = c__5568__auto___37041;
var G__37044 = cljs.core.count(c__5568__auto___37041);
var G__37045 = (0);
seq__36340_37026 = G__37042;
chunk__36342_37027 = G__37043;
count__36343_37028 = G__37044;
i__36344_37029 = G__37045;
continue;
} else {
var child_37046 = cljs.core.first(seq__36340_37040__$1);
if(cljs.core.truth_(child_37046)){
node.appendChild(child_37046);


var G__37047 = cljs.core.next(seq__36340_37040__$1);
var G__37048 = null;
var G__37049 = (0);
var G__37050 = (0);
seq__36340_37026 = G__37047;
chunk__36342_37027 = G__37048;
count__36343_37028 = G__37049;
i__36344_37029 = G__37050;
continue;
} else {
var G__37051 = cljs.core.next(seq__36340_37040__$1);
var G__37052 = null;
var G__37053 = (0);
var G__37054 = (0);
seq__36340_37026 = G__37051;
chunk__36342_37027 = G__37052;
count__36343_37028 = G__37053;
i__36344_37029 = G__37054;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37025);
}
}


var G__37055 = cljs.core.next(seq__36278_37017__$1);
var G__37056 = null;
var G__37057 = (0);
var G__37058 = (0);
seq__36278_36951 = G__37055;
chunk__36280_36952 = G__37056;
count__36281_36953 = G__37057;
i__36282_36954 = G__37058;
continue;
} else {
var G__37059 = cljs.core.next(seq__36278_37017__$1);
var G__37060 = null;
var G__37061 = (0);
var G__37062 = (0);
seq__36278_36951 = G__37059;
chunk__36280_36952 = G__37060;
count__36281_36953 = G__37061;
i__36282_36954 = G__37062;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37063 = arguments.length;
var i__5770__auto___37064 = (0);
while(true){
if((i__5770__auto___37064 < len__5769__auto___37063)){
args__5775__auto__.push((arguments[i__5770__auto___37064]));

var G__37065 = (i__5770__auto___37064 + (1));
i__5770__auto___37064 = G__37065;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36354){
var G__36355 = cljs.core.first(seq36354);
var seq36354__$1 = cljs.core.next(seq36354);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36355,seq36354__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36429 = arguments.length;
switch (G__36429) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33107__auto___37070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33108__auto__ = (function (){var switch__32809__auto__ = (function (state_36472){
var state_val_36473 = (state_36472[(1)]);
if((state_val_36473 === (1))){
var state_36472__$1 = state_36472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36472__$1,(2),once_or_cleanup);
} else {
if((state_val_36473 === (2))){
var inst_36469 = (state_36472[(2)]);
var inst_36470 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36472__$1 = (function (){var statearr_36479 = state_36472;
(statearr_36479[(7)] = inst_36469);

return statearr_36479;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36472__$1,inst_36470);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32810__auto__ = null;
var shadow$dom$state_machine__32810__auto____0 = (function (){
var statearr_36486 = [null,null,null,null,null,null,null,null];
(statearr_36486[(0)] = shadow$dom$state_machine__32810__auto__);

(statearr_36486[(1)] = (1));

return statearr_36486;
});
var shadow$dom$state_machine__32810__auto____1 = (function (state_36472){
while(true){
var ret_value__32811__auto__ = (function (){try{while(true){
var result__32812__auto__ = switch__32809__auto__(state_36472);
if(cljs.core.keyword_identical_QMARK_(result__32812__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32812__auto__;
}
break;
}
}catch (e36488){var ex__32813__auto__ = e36488;
var statearr_36489_37074 = state_36472;
(statearr_36489_37074[(2)] = ex__32813__auto__);


if(cljs.core.seq((state_36472[(4)]))){
var statearr_36490_37075 = state_36472;
(statearr_36490_37075[(1)] = cljs.core.first((state_36472[(4)])));

} else {
throw ex__32813__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37076 = state_36472;
state_36472 = G__37076;
continue;
} else {
return ret_value__32811__auto__;
}
break;
}
});
shadow$dom$state_machine__32810__auto__ = function(state_36472){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32810__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32810__auto____1.call(this,state_36472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32810__auto____0;
shadow$dom$state_machine__32810__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32810__auto____1;
return shadow$dom$state_machine__32810__auto__;
})()
})();
var state__33109__auto__ = (function (){var statearr_36491 = f__33108__auto__();
(statearr_36491[(6)] = c__33107__auto___37070);

return statearr_36491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33109__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
