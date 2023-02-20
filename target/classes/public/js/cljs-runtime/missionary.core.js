goog.provide('missionary.core');
/**
 * A `java.util.concurrent.Executor` optimized for blocking evaluation.
 */
missionary.core.blk = missionary.impl.blk;
/**
 * A `java.util.concurrent.Executor` optimized for non-blocking evaluation.
 */
missionary.core.cpu = missionary.impl.cpu;
/**
 * 
 * Same as `via`, except the expression to evaluate is provided as a zero-arity function on second argument.
 * 
 * Not supported on clojurescript.
 * 
 * ```clojure
 * (? (via-call blk read-line))
 * ;; reads a line from stdin and returns it
 * ```
 */
missionary.core.via_call = (function missionary$core$via_call(e,t){
return (function (s,f){
return missionary.impl.thunk(e,t,s,f);
});
});
/**
 * 
 * Returns a task completing with given value (nil if not provided) after given duration (in milliseconds).
 * 
 * Cancelling a sleep task makes it fail immediately.
 * 
 * Example :
 * ```clojure
 * (? (sleep 1000 42))
 * #_=> 42               ;; 1 second later
 * ```
 */
missionary.core.sleep = (function missionary$core$sleep(var_args){
var G__43660 = arguments.length;
switch (G__43660) {
case 1:
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.sleep.cljs$core$IFn$_invoke$arity$1 = (function (d){
return missionary.core.sleep.cljs$core$IFn$_invoke$arity$2(d,null);
}));

(missionary.core.sleep.cljs$core$IFn$_invoke$arity$2 = (function (d,x){
return (function (s,f){
return missionary.impl.sleep(d,x,s,f);
});
}));

(missionary.core.sleep.cljs$lang$maxFixedArity = 2);

/**
 * 
 * Returns a task running given `tasks` concurrently.
 * 
 * If every task succeeds, `join` completes with the result of applying `f` to these results.
 * 
 * If any task fails, others are cancelled then `join` fails with this error.
 * 
 * Cancelling propagates to children tasks.
 * 
 * Example :
 * ```clojure
 * (? (join vector (sleep 1000 1) (sleep 1000 2)))
 * #_=> [1 2]            ;; 1 second later
 * ```
 */
missionary.core.join = (function missionary$core$join(var_args){
var G__43664 = arguments.length;
switch (G__43664) {
case 1:
return missionary.core.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___43689 = arguments.length;
var i__5770__auto___43690 = (0);
while(true){
if((i__5770__auto___43690 < len__5769__auto___43689)){
args_arr__5794__auto__.push((arguments[i__5770__auto___43690]));

var G__43691 = (i__5770__auto___43690 + (1));
i__5770__auto___43690 = G__43691;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return missionary.core.join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(missionary.core.join.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (s,_){
var G__43665_43692 = (c.cljs$core$IFn$_invoke$arity$0 ? c.cljs$core$IFn$_invoke$arity$0() : c.call(null));
(s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__43665_43692) : s.call(null,G__43665_43692));

return missionary.impl.nop;
});
}));

(missionary.core.join.cljs$core$IFn$_invoke$arity$variadic = (function (c,ts){
return (function (s,f){
return missionary.impl.race_join(false,c,ts,s,f);
});
}));

/** @this {Function} */
(missionary.core.join.cljs$lang$applyTo = (function (seq43662){
var G__43663 = cljs.core.first(seq43662);
var seq43662__$1 = cljs.core.next(seq43662);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43663,seq43662__$1);
}));

(missionary.core.join.cljs$lang$maxFixedArity = (1));

missionary.core.race_failure = (function missionary$core$race_failure(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43693 = arguments.length;
var i__5770__auto___43694 = (0);
while(true){
if((i__5770__auto___43694 < len__5769__auto___43693)){
args__5775__auto__.push((arguments[i__5770__auto___43694]));

var G__43695 = (i__5770__auto___43694 + (1));
i__5770__auto___43694 = G__43695;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return missionary.core.race_failure.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(missionary.core.race_failure.cljs$core$IFn$_invoke$arity$variadic = (function (errors){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Race failure.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("missionary.core","errors","missionary.core/errors",-661055151),errors], null));
}));

(missionary.core.race_failure.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(missionary.core.race_failure.cljs$lang$applyTo = (function (seq43666){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43666));
}));

/**
 * 
 * Returns a task running given `tasks` concurrently.
 * 
 * If any task succeeds, others are cancelled then `race` completes with this result.
 * 
 * If every task fails, `race` fails.
 * 
 * Cancelling propagates to children tasks.
 * 
 * Example :
 * ```clojure
 * (? (race (sleep 1000 1) (sleep 2000 2)))
 * #_=> 1                 ;; 1 second later
 * ```
 */
missionary.core.race = (function missionary$core$race(var_args){
var G__43669 = arguments.length;
switch (G__43669) {
case 0:
return missionary.core.race.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___43697 = arguments.length;
var i__5770__auto___43698 = (0);
while(true){
if((i__5770__auto___43698 < len__5769__auto___43697)){
args_arr__5794__auto__.push((arguments[i__5770__auto___43698]));

var G__43699 = (i__5770__auto___43698 + (1));
i__5770__auto___43698 = G__43699;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((0)),(0),null));
return missionary.core.race.cljs$core$IFn$_invoke$arity$variadic(argseq__5795__auto__);

}
});

(missionary.core.race.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (_,f){
var G__43670_43700 = missionary.core.race_failure();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__43670_43700) : f.call(null,G__43670_43700));

return missionary.impl.nop;
});
}));

(missionary.core.race.cljs$core$IFn$_invoke$arity$variadic = (function (ts){
return (function (s,f){
return missionary.impl.race_join(true,missionary.core.race_failure,ts,s,f);
});
}));

/** @this {Function} */
(missionary.core.race.cljs$lang$applyTo = (function (seq43668){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43668));
}));

(missionary.core.race.cljs$lang$maxFixedArity = (0));

/**
 * 
 * Returns a task always succeeding with result of given `task` wrapped in a zero-argument function returning result if successful or throwing exception if failed.
 */
missionary.core.attempt = (function missionary$core$attempt(task){
return (function (s,_){
var G__43671 = (function (x){
var G__43673 = (function (){
return x;
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__43673) : s.call(null,G__43673));
});
var G__43672 = (function (e){
var G__43674 = (function (){
throw e;
});
return (s.cljs$core$IFn$_invoke$arity$1 ? s.cljs$core$IFn$_invoke$arity$1(G__43674) : s.call(null,G__43674));
});
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__43671,G__43672) : task.call(null,G__43671,G__43672));
});
});
/**
 * 
 * Returns a task running given `task` completing with a zero-argument function and completing with the result of this function call.
 */
missionary.core.absolve = (function missionary$core$absolve(task){
return (function (s,f){
var G__43675 = missionary.impl.absolver(s,f);
var G__43676 = f;
return (task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(G__43675,G__43676) : task.call(null,G__43675,G__43676));
});
});
/**
 * 
 * Returns a task running given `task` and completing with its result if available within specified `delay` (in
 * milliseconds). Otherwise, input is cancelled and the process succeeds with `value`, or `nil` if not provided.
 * 
 * ```clojure
 * (m/? (m/timeout (m/sleep 20 :a) 25 :b)) ;; :a after 20ms
 * (m/? (m/timeout (m/sleep 20 :a) 15 :b)) ;; :b after 15ms
 * (m/? (m/timeout (m/sleep 20 :a) 15))    ;; nil after 15ms
 * ```
 */
missionary.core.timeout = (function() {
var missionary$core$timeout = null;
var missionary$core$timeout__2 = (function (task,delay){
return missionary$core$timeout.cljs$core$IFn$_invoke$arity$3(task,delay,null);
});
var missionary$core$timeout__3 = (function (task,delay,value){
return missionary.core.absolve(missionary.core.race.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missionary.core.attempt(task),missionary.core.sleep.cljs$core$IFn$_invoke$arity$2(delay,(function (){
return value;
}))], 0)));
});
missionary$core$timeout = function(task,delay,value){
switch(arguments.length){
case 2:
return missionary$core$timeout__2.call(this,task,delay);
case 3:
return missionary$core$timeout__3.call(this,task,delay,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
missionary$core$timeout.cljs$core$IFn$_invoke$arity$2 = missionary$core$timeout__2;
missionary$core$timeout.cljs$core$IFn$_invoke$arity$3 = missionary$core$timeout__3;
return missionary$core$timeout;
})()
;
missionary.core.check = (function missionary$core$check(){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$check$arity$1(null);
});
missionary.core.park = (function missionary$core$park(task){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$park$arity$2(null,task);
});
missionary.core.switch$ = (function missionary$core$switch(flow){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$swich$arity$2(null,flow);
});
missionary.core.fork = (function missionary$core$fork(par,flow){
if((par > (0))){
} else {
throw (new Error(["Assert failed: ","Non-positive parallelism.","\n","(pos? par)"].join('')));
}

return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$fork$arity$3(null,par,flow);
});
missionary.core.unpark = (function missionary$core$unpark(){
return missionary.impl.Fiber.current().missionary$impl$Fiber$Fiber$unpark$arity$1(null);
});
missionary.core.sp_run = (function missionary$core$sp_run(c,s,f){
return missionary.impl.Sequential.run(c,s,f);
});
missionary.core.ap_run = (function missionary$core$ap_run(c,n,t){
return missionary.impl.Ambiguous.run(c,n,t);
});
missionary.core.cp_STAR_ = (function missionary$core$cp_STAR_(cr){
return (missionary.impl.Continuous.flow.cljs$core$IFn$_invoke$arity$1 ? missionary.impl.Continuous.flow.cljs$core$IFn$_invoke$arity$1(cr) : missionary.impl.Continuous.flow.call(null,cr));
});
/**
 * 
 * Inhibits cancellation signal of given `task`.
 */
missionary.core.compel = (function missionary$core$compel(task){
return (function (s,f){
(task.cljs$core$IFn$_invoke$arity$2 ? task.cljs$core$IFn$_invoke$arity$2(s,f) : task.call(null,s,f));

return missionary.impl.nop;
});
});
/**
 * 
 * Creates an instance of dataflow variable (aka single-assignment).
 * 
 * A dataflow variable is a function implementing `assign` on 1-arity and `deref` on 2-arity (as task). `assign` immediately binds the variable to given value if not already bound and returns bound value. `deref` is a task completing with the value bound to the variable as soon as it's available.
 * 
 * Cancelling a `deref` task makes it fail immediately.
 * ```
 */
missionary.core.dfv = (function missionary$core$dfv(){
return missionary.impl.dataflow();
});
/**
 * 
 * Creates an instance of mailbox.
 * 
 * A mailbox is a function implementing `post` on 1-arity and `fetch` on 2-arity (as task). `post` immediately pushes given value to mailbox and returns nil. `fetch` is a task pulling a value from mailbox as soon as it's non-empty and completing with this value.
 * 
 * Cancelling a `fetch` task makes it fail immediately.
 * 
 * Example : an actor is a mailbox associated with a process consuming messages.
 * ```clojure
 * (defn crash [^Throwable e]                                ;; let it crash philosophy
 *   (.printStackTrace e)
 *   (System/exit -1))
 * 
 * (defn actor
 *   ([init] (actor init crash))
 *   ([init fail]
 * (let [self (mbx)]
 *   ((sp
 *      (loop [b init]
 *        (recur (b self (? self)))))
 *     nil fail)
 *   self)))
 * 
 * (def counter
 *   (actor
 *  ((fn beh [n]
 *     (fn [self cust]
 *       (cust n)
 *       (beh (inc n)))) 0)))
 * 
 * (counter prn)                                             ;; prints 0
 * (counter prn)                                             ;; prints 1
 * (counter prn)                                             ;; prints 2
 * ```
 */
missionary.core.mbx = (function missionary$core$mbx(){
return missionary.impl.mailbox();
});
/**
 * 
 * Creates an instance of synchronous rendez-vous.
 * 
 * A synchronous rendez-vous is a function implementing `give` on its 1-arity and `take` on its 2-arity (as task). `give` takes a value to be transferred and returns a task completing with nil as soon as a taker is available. `take` is a task completing with transferred value as soon as a giver is available.
 * 
 * Cancelling `give` and `take` tasks makes them fail immediately.
 * 
 * Example : producer / consumer stream communication
 * ```clojure
 * (defn reducer [rf i take]
 *   (sp
 *  (loop [r i]
 *    (let [x (? take)]
 *      (if (identical? x take)
 *        r (recur (rf r x)))))))
 * 
 * (defn iterator [give xs]
 *   (sp
 *  (loop [xs (seq xs)]
 *    (if-some [[x & xs] xs]
 *      (do (? (give x))
 *          (recur xs))
 *      (? (give give))))))
 * 
 * (def stream (rdv))
 * 
 * (? (join {} (iterator stream (range 100)) (reducer + 0 stream)))      ;; returns 4950
 * ```
 */
missionary.core.rdv = (function missionary$core$rdv(){
return missionary.impl.rendezvous();
});
/**
 * 
 * Creates a semaphore initialized with n tokens (1 if not provided, aka mutex).
 * 
 * A semaphore is a function implementing `release` on 0-arity and `acquire` on 2-arity (as task). `release` immediately makes a token available and returns nil. `acquire` is a task completing with nil as soon as a token is available.
 * 
 * Cancelling an `acquire` task makes it fail immediately.
 * 
 * Example : dining philosophers
 * ```clojure
 * (defn phil [name f1 f2]
 *   (sp
 *  (while true
 *    (prn name :thinking)
 *    (? (sleep 500))
 *    (holding f1
 *      (holding f2
 *        (prn name :eating)
 *        (? (sleep 600)))))))
 * 
 * (def forks (vec (repeatedly 5 sem)))
 * 
 * (? (timeout 10000
 *   (join vector
 *     (phil "descartes" (forks 0) (forks 1))
 *     (phil "hume"      (forks 1) (forks 2))
 *     (phil "plato"     (forks 2) (forks 3))
 *     (phil "nietzsche" (forks 3) (forks 4))
 *     (phil "kant"      (forks 0) (forks 4)))))
 * ```
 */
missionary.core.sem = (function missionary$core$sem(var_args){
var G__43678 = arguments.length;
switch (G__43678) {
case 0:
return missionary.core.sem.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return missionary.core.sem.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.sem.cljs$core$IFn$_invoke$arity$0 = (function (){
return missionary.core.sem.cljs$core$IFn$_invoke$arity$1((1));
}));

(missionary.core.sem.cljs$core$IFn$_invoke$arity$1 = (function (n){
return missionary.impl.semaphore(n);
}));

(missionary.core.sem.cljs$lang$maxFixedArity = 1);

missionary.core.never = cljs.core.with_meta((function missionary$core$never(_,f){
return missionary.impl.never(f);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static","static",1214358571),true,new cljs.core.Keyword(null,"doc","doc",1913296891),"\nA task never succeeding. Cancelling makes it fail immediately."], null));
/**
 * 
 * The empty flow. Doesn't produce any value and terminates immediately. Cancelling has no effect.
 * 
 * Example :
 * ```clojure
 * (? (reduce conj none))
 * #_=> []
 * ```
 */
missionary.core.none = (function missionary$core$none(_,t){
(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));

return missionary.impl.nop;
});
/**
 * 
 * Returns a discrete flow producing values from given `collection`. Cancelling before having reached the end makes the flow fail immediately.
 */
missionary.core.seed = (function missionary$core$seed(coll){
return (function (n,t){
return missionary.impl.enumerate(coll,n,t);
});
});
/**
 * Alias for `seed`
 */
missionary.core.enumerate = missionary.core.seed;
/**
 * 
 * Returns a task reducing values produced by given discrete `flow` with `rf`, starting with `init` (or, if not provided, the result of calling `rf` with no argument).
 * 
 * Cancelling propagates to upstream flow. Early termination by `rf` (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (reduce + (seed (range 10))))
 * #_=> 45
 * ```
 */
missionary.core.reduce = (function missionary$core$reduce(var_args){
var G__43681 = arguments.length;
switch (G__43681) {
case 2:
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.reduce.cljs$core$IFn$_invoke$arity$2 = (function (rf,flow){
return (function (s,f){
return missionary.impl.Reduce.run(rf,flow,s,f);
});
}));

(missionary.core.reduce.cljs$core$IFn$_invoke$arity$3 = (function (rf,i,flow){
return missionary.core.reduce.cljs$core$IFn$_invoke$arity$2((function() {
var G__43706 = null;
var G__43706__0 = (function (){
return i;
});
var G__43706__2 = (function (r,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x) : rf.call(null,r,x));
});
G__43706 = function(r,x){
switch(arguments.length){
case 0:
return G__43706__0.call(this);
case 2:
return G__43706__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43706.cljs$core$IFn$_invoke$arity$0 = G__43706__0;
G__43706.cljs$core$IFn$_invoke$arity$2 = G__43706__2;
return G__43706;
})()
,flow);
}));

(missionary.core.reduce.cljs$lang$maxFixedArity = 3);

/**
 * Alias for `reduce`
 */
missionary.core.aggregate = missionary.core.reduce;
/**
 * 
 * Returns a continuous flow reflecting the current state of a reference type. `reference` must support `add-watch`,
 * `remove-watch` and `deref`. On initialization, the process is ready to transfer. On transfer, the current state is
 * returned. Whenever the state of the reference changes and a transfer is not pending, the process becomes ready to
 * transfer again. Cancelling the process makes it fail immediately with an instance of `missionary.Cancelled` and
 * terminates the process.
 */
missionary.core.watch = (function missionary$core$watch(r){
return (function (n,t){
return missionary.impl.Watch.run(r,n,t);
});
});
/**
 * 
 * Returns a discrete flow observing values produced by a non-backpressured subject. `subject` must be a function taking a
 * callback and returning a cleanup thunk. On initialization, the process calls the subject with a fresh callback. Passing
 * a value to the callback makes the process ready to transfer this value. Cancelling the process makes it fail immediately
 * with an instance of `missionary.Cancelled` and terminates the process. The cleanup thunk is called on termination. The
 * callback throws an `Error` if the process is cancelled or terminated, or if a transfer is pending.
 */
missionary.core.observe = (function missionary$core$observe(s){
return (function (n,t){
return missionary.impl.Observe.run(s,n,t);
});
});
/**
 * 
 * Returns a discrete flow running given discrete `flow` and transforming values with the composition of given transducers `xf*`.
 * 
 * Cancelling propagates to upstream flow. Early termination by the transducing stage (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (->> (seed (range 10))
 *      (eduction (filter odd?) (mapcat range) (partition-all 4))
 *      (reduce conj)))
 * #_=> [[0 0 1 2] [0 1 2 3] [4 0 1 2] [3 4 5 6] [0 1 2 3] [4 5 6 7] [8]]
 * ```
 * @param {...*} var_args
 */
missionary.core.eduction = (function() {
var missionary$core$e = null;
var missionary$core$e__1 = (function (f){
return f;
});
var missionary$core$e__2 = (function (x,f){
return (function (n,t){
return missionary.impl.transform(x,f,n,t);
});
});
var missionary$core$e__3 = (function() { 
var G__43707__delegate = function (x,y,zs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(missionary$core$e,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(x,y),zs);
};
var G__43707 = function (x,y,var_args){
var zs = null;
if (arguments.length > 2) {
var G__43708__i = 0, G__43708__a = new Array(arguments.length -  2);
while (G__43708__i < G__43708__a.length) {G__43708__a[G__43708__i] = arguments[G__43708__i + 2]; ++G__43708__i;}
  zs = new cljs.core.IndexedSeq(G__43708__a,0,null);
} 
return G__43707__delegate.call(this,x,y,zs);};
G__43707.cljs$lang$maxFixedArity = 2;
G__43707.cljs$lang$applyTo = (function (arglist__43709){
var x = cljs.core.first(arglist__43709);
arglist__43709 = cljs.core.next(arglist__43709);
var y = cljs.core.first(arglist__43709);
var zs = cljs.core.rest(arglist__43709);
return G__43707__delegate(x,y,zs);
});
G__43707.cljs$core$IFn$_invoke$arity$variadic = G__43707__delegate;
return G__43707;
})()
;
missionary$core$e = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 1:
return missionary$core$e__1.call(this,x);
case 2:
return missionary$core$e__2.call(this,x,y);
default:
var G__43710 = null;
if (arguments.length > 2) {
var G__43711__i = 0, G__43711__a = new Array(arguments.length -  2);
while (G__43711__i < G__43711__a.length) {G__43711__a[G__43711__i] = arguments[G__43711__i + 2]; ++G__43711__i;}
G__43710 = new cljs.core.IndexedSeq(G__43711__a,0,null);
}
return missionary$core$e__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__43710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
missionary$core$e.cljs$lang$maxFixedArity = 2;
missionary$core$e.cljs$lang$applyTo = missionary$core$e__3.cljs$lang$applyTo;
missionary$core$e.cljs$core$IFn$_invoke$arity$1 = missionary$core$e__1;
missionary$core$e.cljs$core$IFn$_invoke$arity$2 = missionary$core$e__2;
missionary$core$e.cljs$core$IFn$_invoke$arity$variadic = missionary$core$e__3.cljs$core$IFn$_invoke$arity$variadic;
return missionary$core$e;
})()
;
/**
 * Alias for `eduction`
 */
missionary.core.transform = missionary.core.eduction;
/**
 * 
 * Returns a discrete flow running given discrete `flow` and emitting given `init` value (or, if not provided, the result of calling `rf` with no argument) followed by successive reductions (by rf) of upstream values with previously emitted value.
 * 
 * Cancelling propagates to upstream flow. Early termination by `rf` (via `reduced` or throwing) cancels upstream flow.
 * 
 * Example :
 * ```clojure
 * (? (->> [1 2 3 4 5]
 *      (seed)
 *      (reductions +)
 *      (reduce conj)))
 * #_=> [0 1 3 6 10 15]
 * ```
 */
missionary.core.reductions = (function missionary$core$reductions(var_args){
var G__43683 = arguments.length;
switch (G__43683) {
case 2:
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(missionary.core.reductions.cljs$core$IFn$_invoke$arity$2 = (function (rf,f){
return (function (n,t){
return missionary.impl.Reductions.run(rf,f,n,t);
});
}));

(missionary.core.reductions.cljs$core$IFn$_invoke$arity$3 = (function (rf,i,f){
return missionary.core.reductions.cljs$core$IFn$_invoke$arity$2((function() {
var G__43720 = null;
var G__43720__0 = (function (){
return i;
});
var G__43720__2 = (function (r,x){
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(r,x) : rf.call(null,r,x));
});
G__43720 = function(r,x){
switch(arguments.length){
case 0:
return G__43720__0.call(this);
case 2:
return G__43720__2.call(this,r,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__43720.cljs$core$IFn$_invoke$arity$0 = G__43720__0;
G__43720.cljs$core$IFn$_invoke$arity$2 = G__43720__2;
return G__43720;
})()
,f);
}));

(missionary.core.reductions.cljs$lang$maxFixedArity = 3);

/**
 * Alias for `reductions`
 */
missionary.core.integrate = missionary.core.reductions;
/**
 * 
 * Returns a `org.reactivestreams.Publisher` running given discrete `flow` on each subscription.
 */
missionary.core.publisher = (function missionary$core$publisher(flow){
return missionary.impl.publisher(flow);
});
/**
 * 
 * Returns a discrete flow subscribing to given `org.reactivestreams.Publisher`.
 */
missionary.core.subscribe = (function missionary$core$subscribe(pub){
return (function (n,t){
return missionary.impl.subscribe(pub,n,t);
});
});
/**
 * 
 * Returns a continuous flow producing values emitted by given discrete `flow`, relieving backpressure. When upstream is faster than downstream, overflowed values are successively reduced with given function `rf`.
 * 
 * Cancelling propagates to upstream. If `rf` throws, upstream `flow` is cancelled.
 * 
 * Example :
 * ```clojure
 * ;; Delays each `input` value by `delay` milliseconds
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (? (->> (ap (let [n (?> (seed [24 79 67 34 18 9 99 37]))]
 *            (? (sleep n n))))
 *      (relieve +)
 *      (delay-each 80)
 *      (reduce conj)))
 * #_=> [24 79 67 61 99 37]
 * ```
 */
missionary.core.relieve = (function missionary$core$relieve(rf,f){
return (function (n,t){
return missionary.impl.Relieve.run(rf,f,n,t);
});
});
/**
 * 
 * Returns a discrete flow producing values emitted by given discrete `flow`, accumulating upstream overflow up to `capacity` items.
 */
missionary.core.buffer = (function missionary$core$buffer(c,f){
if((c > (0))){
} else {
throw (new Error(["Assert failed: ","Non-positive buffer capacity.","\n","(pos? c)"].join('')));
}

return (missionary.impl.Buffer.flow.cljs$core$IFn$_invoke$arity$2 ? missionary.impl.Buffer.flow.cljs$core$IFn$_invoke$arity$2(c,f) : missionary.impl.Buffer.flow.call(null,c,f));
});
/**
 * 
 * Returns a flow running an arbitrary number of flows concurrently. The process is ready to transfer when at least one
 * input is ready to transfer. On transfer, all ready inputs are transferred, the function is called with the latest
 * value of each input and the result is returned. If an input emits consecutive values, all of them are transferred and
 * only the latest one is retained. Each input must be initially ready.
 * 
 * Input failures and exceptions thrown by `f` cancel the process and propagate the error. The process terminates when all
 * inputs are terminated. Cancelling the process cancels all inputs.
 * 
 * ```clojure
 * (defn sleep-emit [delays]
 *   (reductions {} 0
 *  (ap (let [n (?> (seed delays))]
 *        (? (sleep n n))))))
 * 
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (? (->> (latest vector
 *        (sleep-emit [24 79 67 34])
 *        (sleep-emit [86 12 37 93]))
 *      (delay-each 50)
 *      (reduce conj)))
 * 
 * #_=> [[0 0] [24 0] [24 86] [79 12] [79 37] [67 37] [34 93]]
 * ```
 * @param {...*} var_args
 */
missionary.core.latest = (function() { 
var missionary$core$latest__delegate = function (c,fs){
return (function (n,t){
return missionary.impl.Latest.run(c,fs,n,t);
});
};
var missionary$core$latest = function (c,var_args){
var fs = null;
if (arguments.length > 1) {
var G__43727__i = 0, G__43727__a = new Array(arguments.length -  1);
while (G__43727__i < G__43727__a.length) {G__43727__a[G__43727__i] = arguments[G__43727__i + 1]; ++G__43727__i;}
  fs = new cljs.core.IndexedSeq(G__43727__a,0,null);
} 
return missionary$core$latest__delegate.call(this,c,fs);};
missionary$core$latest.cljs$lang$maxFixedArity = 1;
missionary$core$latest.cljs$lang$applyTo = (function (arglist__43728){
var c = cljs.core.first(arglist__43728);
var fs = cljs.core.rest(arglist__43728);
return missionary$core$latest__delegate(c,fs);
});
missionary$core$latest.cljs$core$IFn$_invoke$arity$variadic = missionary$core$latest__delegate;
return missionary$core$latest;
})()
;
/**
 * 
 * Returns a flow running an arbitrary number of sampled flows concurrently with a sampler flow. The process is ready to
 * transfer when the sampler is ready to transfer. On transfer, all ready inputs are transferred, the function is called
 * with the latest value of each input and the result is returned. If a sampled input emits consecutive values, all of
 * them are transferred and only the latest one is retained. Each sampled input must be initially ready.
 * 
 * When the sampler input terminates, all sampled inputs are cancelled. Input failures and exceptions thrown by `f` cancel
 * the process, and propagate the error. The process terminates when all input flows are terminated. Cancelling the process
 * cancels the sampler input.
 * 
 * Example :
 * ```clojure
 * (defn sleep-emit [delays]
 *   (ap (let [n (?> (seed delays))]
 *      (? (sleep n n)))))
 * 
 * (defn delay-each [delay input]
 *   (ap (? (sleep delay (?> input)))))
 * 
 * (m/? (->> (m/sample vector
 *          (m/reductions {} 0 (sleep-emit [24 79 67 34]))
 *          (sleep-emit [86 12 37 93]))
 *     (delay-each 50)
 *     (m/reduce conj)))
 * 
 * #_=> [[24 86] [24 12] [79 37] [67 93]]
 * ```
 * @param {...*} var_args
 */
missionary.core.sample = (function() { 
var missionary$core$sample__delegate = function (c,f,fs){
return (function (n,t){
return missionary.impl.Sample.run(c,f,fs,n,t);
});
};
var missionary$core$sample = function (c,f,var_args){
var fs = null;
if (arguments.length > 2) {
var G__43729__i = 0, G__43729__a = new Array(arguments.length -  2);
while (G__43729__i < G__43729__a.length) {G__43729__a[G__43729__i] = arguments[G__43729__i + 2]; ++G__43729__i;}
  fs = new cljs.core.IndexedSeq(G__43729__a,0,null);
} 
return missionary$core$sample__delegate.call(this,c,f,fs);};
missionary$core$sample.cljs$lang$maxFixedArity = 2;
missionary$core$sample.cljs$lang$applyTo = (function (arglist__43730){
var c = cljs.core.first(arglist__43730);
arglist__43730 = cljs.core.next(arglist__43730);
var f = cljs.core.first(arglist__43730);
var fs = cljs.core.rest(arglist__43730);
return missionary$core$sample__delegate(c,f,fs);
});
missionary$core$sample.cljs$core$IFn$_invoke$arity$variadic = missionary$core$sample__delegate;
return missionary$core$sample;
})()
;
/**
 * 
 * Returns a discrete flow running given discrete `flows` concurrently and emitting the result of applying `f` to the set of first values emitted by each upstream flow, followed by the result of applying `f` to the set of second values and so on, until any upstream flow terminates, at which point the flow will cancel all other upstream flows and wait for their termination.
 * 
 * Cancelling propagates to every upstream flow. If any upstream flow fails or if `f` throws, the flow is cancelled.
 * 
 * Example :
 * ```clojure
 * (m/? (->> (m/zip vector
 *               (m/seed [1 2 3])
 *               (m/seed [:a :b :c]))
 *        (m/reduce conj)))
 * #_=> [[1 :a] [2 :b] [3 :c]]
 * ```
 */
missionary.core.zip = (function missionary$core$zip(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43731 = arguments.length;
var i__5770__auto___43732 = (0);
while(true){
if((i__5770__auto___43732 < len__5769__auto___43731)){
args__5775__auto__.push((arguments[i__5770__auto___43732]));

var G__43733 = (i__5770__auto___43732 + (1));
i__5770__auto___43732 = G__43733;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return missionary.core.zip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(missionary.core.zip.cljs$core$IFn$_invoke$arity$variadic = (function (c,f,fs){
return (function (n,t){
return missionary.impl.zip(c,cljs.core.cons(f,fs),n,t);
});
}));

(missionary.core.zip.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(missionary.core.zip.cljs$lang$applyTo = (function (seq43684){
var G__43685 = cljs.core.first(seq43684);
var seq43684__$1 = cljs.core.next(seq43684);
var G__43686 = cljs.core.first(seq43684__$1);
var seq43684__$2 = cljs.core.next(seq43684__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43685,G__43686,seq43684__$2);
}));

/**
 * 
 * Returns a discrete flow running given discrete flow, calling given key function on each produced value, grouping values
 * according to keys returned by the function, and producing a key-group pair for each grouping found. A group is a flow
 * consuming values matching a key. Upstream values are dispatched in constant time to their group consumer.
 * 
 * Cancelling a group consumer makes it fail immediately. If a value is subsequently found for the same grouping, the
 * key-group pair is produced again, including in the special case where the consumer is cancelled while a transfer was
 * pending. Cancelling a group consumer has no effect when the main process is cancelled.
 * 
 * If upstream fails, or if the key function throws, then upstream is cancelled and flushed and the error is propagated
 * downstream.
 * 
 * When the last upstream value is consumed, downstream terminates along with each active consumer and subsequent ones.
 * 
 * Concurrent consumers on a single group are not allowed, attempting to do so will fail the latest consumer.
 * 
 * Example :
 * ```clojure
 * (def words ["Air" "Bud" "Cup" "Awake" "Break" "Chunk" "Ant" "Big" "Check"])
 * (def groups
 *   (m/ap (let [[k >x] (m/?= (m/group-by (juxt first count) (m/seed words)))]
 *        [k (m/? (m/reduce conj >x))])))
 * (m/? (m/reduce conj {} groups))
 * #_=> {[\C 3] ["Cup"],
 *    [\B 5] ["Break"],
 *    [\A 5] ["Awake"],
 *    [\B 3] ["Bud" "Big"],
 *    [\A 3] ["Air" "Ant"],
 *    [\C 5] ["Chunk" "Check"]}
 * ```
 */
missionary.core.group_by = (function missionary$core$group_by(kf,f){
return (function (n,t){
return missionary.impl.GroupBy.run(kf,f,n,t);
});
});
/**
 * 
 * Returns a task spawning a new reactor with given boot function. A reactor is a supervisor for a dynamic set of
 * concurrent flow processes called publishers, allowing each of them to share its values to multiple subscribers while
 * ensuring transactional propagation of their signaling events. A transaction is a point in time where several publishers
 * are considered simultaneously active as a result of the propagation of an event through the subscription graph.
 * 
 * During a transaction, a reactor may schedule and perform the following user actions :
 * - calling the boot function
 * - spawning a publisher
 * - cancelling a publisher
 * - transferring a publisher
 * - signaling a subscription
 * 
 * The reactor allows the following user events to happen as a side-effect of any of these actions :
 * - create a new publisher
 * - detach an existing publisher
 * - spawn a subscription
 * - cancel a subscription
 * - transfer a subscription
 * 
 * A publisher process is allowed to signal at any point in time. If the signaling event happens as a side-effect of a
 * user space action of the publisher's reactor, it is considered part of the current transaction, otherwise a new
 * transaction is run.
 * 
 * 
 * 
 * 
 * Publishers are spawned with `stream!` and `signal!`, respectively for discrete and continuous flows. This operation is
 * allowed only as a side-effect of the evaluation of the boot function, or as a side-effect of another publisher action.
 * In the latter case, the publisher targeted by the action is the parent of the spawned publisher. Publishers thus form a
 * tree where the top-level nodes are those spawned directly within the boot function. The post-order traversal of this
 * tree, where siblings follow the birth order, defines a total order on publishers called the propagation order. The
 * object returned represents the publisher identity and provides two operations :
 * * discard the publisher, when called with no argument.
 * * spawn a new subscription to this publisher, when used as a flow. This operation is allowed only as a side-effect of a
 * publisher action, and only if the subscribed publisher comes before the subscriber publisher in the propagation order.
 * This constraint effectively makes acyclic the publisher-subscription directed graph.
 * 
 * When the reactor process is spawned, the boot function is immediately called with no argument and a new transaction is
 * run. The reactor process terminates with the value returned by the boot function when a transaction completes with no
 * running publisher. As long as at least one publisher is running, the reactor reacts to the following events, if
 * triggered by the same thread as the one used to spawn the process :
 * * cancelling the main process. All publishers are discarded along with those subsequently spawned.
 * * notifying a publisher process. If the publisher is continuous, or if it is discrete and the previous dispatch has
 * been acknowledged for every subscription, the publisher will be active in the current transaction or in the next one.
 * * terminating a publisher process. The subscriptions of this publisher will terminate as soon as no transfer is pending.
 * If the publisher is discrete, subsequent subscriptions transfer no value and terminate immediately. If the publisher is
 * continuous, the last value is considered as the final value, subsequent subscriptions transfer this value and terminate
 * immediately afterwards.
 * * discarding a publisher. The publisher process is cancelled. If the publisher is continuous, transfers becomes eager.
 * * transferring a subscription process. TODO
 * * cancelling a subscription process. The next transfer fails with an instance of `missionary.Cancelled` and terminates
 * immediately afterwards. If the publisher is discrete and a transfer was pending, the dispatch is acknowledged for this
 * subscription.
 * 
 * 
 * 
 * During a transaction, each publisher is allowed to notify its subscriptions, at most once. A publisher is active in a
 * transaction if it becomes ready to transfer synchronously on a notification of a subscription in the same transaction
 * 
 * 
 * <TODO>
 * Publisher emissions are grouped in propagation turns, where successive
 * publishers of a given turn are strictly increasing.
 * 
 *  When a publisher becomes able to emit, it is compared to the
 * publisher currently emitting to figure out whether the emission must happen on the current turn or on the next one.
 * Cyclic reactions are possible and no attempt is made to prevent them, so care must be taken to ensure the propagation
 * eventually stops. The dispatching mechanism depends on the nature of the publisher, discrete or continuous.
 * * a stream is able to emit when its flow is ready to transfer and the backpressure of the previous emission has been
 * collected from all of its subscriptions. On emission, a value is transferred from the flow and subscriptions are
 * notified of the availability of this value. Until the end of the propagation turn, each new subscription to this stream
 * will be immediately notified.
 * * a signal always has a current value, thus each new subscription is immediately notified. It is able to emit when its
 * flow is ready to transfer. On emission, its current value is marked as stale and its subscriptions are notified if not
 * already. From this point, a sampling request from any of its subscriptions will trigger the transfer from the flow to
 * refresh the current value. Subsequent sampling requests will reuse this memoized value until next emission.
 * </TODO>
 * 
 * 
 * When a stream completes, ...
 * When a signal completes, its latest value is treated as the final state. Active subscriptions terminate after having
 * transferred this value, subsequent subscriptions transfer only this value and complete afterwards.
 * 
 * Calling a publisher as a zero-argument function cancels the underlying process. When cancelled, signals transfer eagerly.
 * Cancelling a subscription before termination makes it fail immediately with `Cancelled`.
 * 
 * When a reactor is cancelled, all of its active publishers are cancelled along with any one subsequently spawned.
 * When a publisher crashes, all of its active subscriptions are cancelled along with any one subsequently spawned.
 * If the boot function throws an exception, or any publisher crashes, the reactor is cancelled.
 * 
 * A reactor terminates at the end of the first turn where every publisher flow is terminated, meaning no transfer can
 * ever happen anymore. The task succeeds with the result of the boot function if no error happened, otherwise it fails
 * with the first error.
 */
missionary.core.reactor_call = (function missionary$core$reactor_call(i){
return (function (s,f){
return missionary.impl.Reactor.run(i,s,f);
});
});
/**
 * 
 * Spawns a discrete publisher from given flow, see `reactor-call`.
 */
missionary.core.stream_BANG_ = (function missionary$core$stream_BANG_(f){
return missionary.impl.Reactor.publish(f,false);
});
/**
 * 
 * Spawns a continuous publisher from given flow, see `reactor-call`.
 */
missionary.core.signal_BANG_ = (function missionary$core$signal_BANG_(f){
return missionary.impl.Reactor.publish(f,true);
});

//# sourceMappingURL=missionary.core.js.map
