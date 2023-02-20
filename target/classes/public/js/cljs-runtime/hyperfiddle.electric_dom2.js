goog.provide('hyperfiddle.electric_dom2');
goog.scope(function(){
  hyperfiddle.electric_dom2.goog$module$goog$object = goog.module.get('goog.object');
});
hyperfiddle.electric_dom2.nil_subject = (function hyperfiddle$electric_dom2$nil_subject(_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return cljs.core.List.EMPTY;
});
});
hyperfiddle.electric_dom2.unsupported = (function hyperfiddle$electric_dom2$unsupported(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47909 = arguments.length;
var i__5770__auto___47910 = (0);
while(true){
if((i__5770__auto___47910 < len__5769__auto___47909)){
args__5775__auto__.push((arguments[i__5770__auto___47910]));

var G__47911 = (i__5770__auto___47910 + (1));
i__5770__auto___47910 = G__47911;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(hyperfiddle.electric_dom2.unsupported.cljs$core$IFn$_invoke$arity$variadic = (function (_){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not available on this peer.",cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.unsupported.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(hyperfiddle.electric_dom2.unsupported.cljs$lang$applyTo = (function (seq47892){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47892));
}));

/**
 * See `with`
 */
hyperfiddle.electric_dom2.hook = (function() {
var hyperfiddle$electric_dom2$hook = null;
var hyperfiddle$electric_dom2$hook__1 = (function (x){
return x.parentNode.removeChild(x);
});
var hyperfiddle$electric_dom2$hook__2 = (function (x,y){
return x.parentNode.insertBefore(x,y);
});
hyperfiddle$electric_dom2$hook = function(x,y){
switch(arguments.length){
case 1:
return hyperfiddle$electric_dom2$hook__1.call(this,x);
case 2:
return hyperfiddle$electric_dom2$hook__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$1 = hyperfiddle$electric_dom2$hook__1;
hyperfiddle$electric_dom2$hook.cljs$core$IFn$_invoke$arity$2 = hyperfiddle$electric_dom2$hook__2;
return hyperfiddle$electric_dom2$hook;
})()
;
hyperfiddle.electric_dom2.by_id = (function hyperfiddle$electric_dom2$by_id(id){
return document.getElementById(id);
});
hyperfiddle.electric_dom2.new_node = (function hyperfiddle$electric_dom2$new_node(parent,type){
var el = (function (){var G__47893 = type;
var G__47893__$1 = (((G__47893 instanceof cljs.core.Keyword))?G__47893.fqn:null);
switch (G__47893__$1) {
case "comment":
return document.createComment("");

break;
case "text":
return goog.dom.createTextNode("");

break;
default:
return goog.dom.createElement(type);

}
})();
parent.appendChild(el);

return el;
});
hyperfiddle.electric_dom2.hide_on_unmount = (function hyperfiddle$electric_dom2$hide_on_unmount(node){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return (node.style.display = "none");
});
}));
});
hyperfiddle.electric_dom2._googDomSetTextContentNoWarn = (function hyperfiddle$electric_dom2$_googDomSetTextContentNoWarn(node,str){
return goog.dom.setTextContent(node,str);
});
hyperfiddle.electric_dom2.class_str = (function hyperfiddle$electric_dom2$class_str(v){
if(((typeof v === 'string') || ((v instanceof cljs.core.Keyword)))){
return cljs.core.name(v);
} else {
if(cljs.core.seq(v)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.eduction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.name),v], 0)));
} else {
return "";

}
}
});
hyperfiddle.electric_dom2.set_property_BANG_ = (function hyperfiddle$electric_dom2$set_property_BANG_(node,k,v){
var k__$1 = cljs.core.name(k);
var v__$1 = cljs.core.clj__GT_js(v);
if(cljs.core.truth_((function (){var and__5043__auto__ = (v__$1 == null);
if(and__5043__auto__){
return node.hasAttribute(k__$1);
} else {
return and__5043__auto__;
}
})())){
return node.removeAttribute(k__$1);
} else {
var G__47894 = k__$1;
switch (G__47894) {
case "style":
return goog.style.setStyle(node,v__$1);

break;
case "class":
return (node.className = hyperfiddle.electric_dom2.class_str(v__$1));

break;
case "for":
return (node.htmlFor = v__$1);

break;
case "list":
return node.setAttribute(k__$1,v__$1);

break;
default:
var temp__5802__auto__ = hyperfiddle.electric_dom2.goog$module$goog$object.get(goog.dom.DIRECT_ATTRIBUTE_MAP_,k__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var k__$2 = temp__5802__auto__;
return node.setAttribute(k__$2,v__$1);
} else {
if(cljs.core.truth_(hyperfiddle.electric_dom2.goog$module$goog$object.containsKey(node,k__$1))){
return hyperfiddle.electric_dom2.goog$module$goog$object.set(node,k__$1,v__$1);
} else {
return node.setAttribute(k__$1,v__$1);
}
}

}
}
});
hyperfiddle.electric_dom2.unmount_prop = (function hyperfiddle$electric_dom2$unmount_prop(node,k,v){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

return (function (){
return hyperfiddle.electric_dom2.set_property_BANG_(node,k,v);
});
}));
});
hyperfiddle.electric_dom2.event_STAR_ = (function hyperfiddle$electric_dom2$event_STAR_(var_args){
var G__47898 = arguments.length;
switch (G__47898) {
case 3:
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (dom_node,event_name,callback){
return hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4(dom_node,event_name,callback,cljs.core.PersistentArrayMap.EMPTY);
}));

(hyperfiddle.electric_dom2.event_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (dom_node,event_name,callback,options){
return missionary.core.observe((function (_BANG_){
(_BANG_.cljs$core$IFn$_invoke$arity$1 ? _BANG_.cljs$core$IFn$_invoke$arity$1(null) : _BANG_.call(null,null));

dom_node.addEventListener(event_name,callback,cljs.core.clj__GT_js(options));

return (function (){
return dom_node.removeEventListener(event_name,callback);
});
}));
}));

(hyperfiddle.electric_dom2.event_STAR_.cljs$lang$maxFixedArity = 4);

hyperfiddle.electric_dom2.happen = (function hyperfiddle$electric_dom2$happen(s,e){
var G__47899 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(s);
var G__47899__$1 = (((G__47899 instanceof cljs.core.Keyword))?G__47899.fqn:null);
switch (G__47899__$1) {
case "idle":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "pending":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"impulse","impulse",486537698),new cljs.core.Keyword(null,"event","event",301435442),e], null);

break;
case "impulse":
throw (new Error(["Assert failed: ","two events in the same frame? that's weird and wrong","\n","false"].join('')));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47899__$1)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IDeref}
*/
hyperfiddle.electric_dom2.Clock = (function (raf,callback,terminator){
this.raf = raf;
this.callback = callback;
this.terminator = terminator;
this.cljs$lang$protocol_mask$partition0$ = 32769;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(hyperfiddle.electric_dom2.Clock.prototype.call = (function (unused__11925__auto__){
var self__ = this;
var self__ = this;
var G__47901 = (arguments.length - (1));
switch (G__47901) {
case (0):
return self__.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(hyperfiddle.electric_dom2.Clock.prototype.apply = (function (self__,args47900){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args47900)));
}));

(hyperfiddle.electric_dom2.Clock.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _ = this;
if((self__.raf === (0))){
return (self__.callback = null);
} else {
window.cancelAnimationFrame(self__.raf);

return (self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
}
}));

(hyperfiddle.electric_dom2.Clock.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.callback == null)){
(self__.terminator.cljs$core$IFn$_invoke$arity$0 ? self__.terminator.cljs$core$IFn$_invoke$arity$0() : self__.terminator.call(null));
} else {
(self__.raf = window.requestAnimationFrame(self__.callback));
}

return new cljs.core.Keyword("hyperfiddle.electric-dom2","tick","hyperfiddle.electric-dom2/tick",1157487002);
}));

(hyperfiddle.electric_dom2.Clock.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"raf","raf",345121375,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"callback","callback",935395299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"terminator","terminator",-1051388676,null)], null);
}));

(hyperfiddle.electric_dom2.Clock.cljs$lang$type = true);

(hyperfiddle.electric_dom2.Clock.cljs$lang$ctorStr = "hyperfiddle.electric-dom2/Clock");

(hyperfiddle.electric_dom2.Clock.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"hyperfiddle.electric-dom2/Clock");
}));

/**
 * Positional factory function for hyperfiddle.electric-dom2/Clock.
 */
hyperfiddle.electric_dom2.__GT_Clock = (function hyperfiddle$electric_dom2$__GT_Clock(raf,callback,terminator){
return (new hyperfiddle.electric_dom2.Clock(raf,callback,terminator));
});

/**
 * lazy & efficient logical clock that schedules no work unless sampled
 */
hyperfiddle.electric_dom2._LT_clock = (function hyperfiddle$electric_dom2$_LT_clock(n,t){
var cancel = hyperfiddle.electric_dom2.__GT_Clock((0),null,t);
(cancel.callback = (function (_){
(cancel.raf = (0));

return (n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));
}));

(n.cljs$core$IFn$_invoke$arity$0 ? n.cljs$core$IFn$_invoke$arity$0() : n.call(null));

return cancel;
});
hyperfiddle.electric_dom2._get_system_time_ms = (function hyperfiddle$electric_dom2$_get_system_time_ms(_){
return Date.now();
});
hyperfiddle.electric_dom2.set_val = (function hyperfiddle$electric_dom2$set_val(node,v){
return (node.value = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
});

//# sourceMappingURL=hyperfiddle.electric_dom2.js.map
