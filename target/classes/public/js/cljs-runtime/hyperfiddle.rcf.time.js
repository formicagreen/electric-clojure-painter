goog.provide('hyperfiddle.rcf.time');
hyperfiddle.rcf.time.current_time = (function hyperfiddle$rcf$time$current_time(){
return Date.now();
});
hyperfiddle.rcf.time.timeout_QMARK_ = (function hyperfiddle$rcf$time$timeout_QMARK_(now,start,timeout){
return (now > (start + timeout));
});
hyperfiddle.rcf.time.remaining = (function hyperfiddle$rcf$time$remaining(now,start,timeout){
return ((start + timeout) - now);
});

//# sourceMappingURL=hyperfiddle.rcf.time.js.map
