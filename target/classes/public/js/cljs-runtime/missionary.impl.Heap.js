goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__38581 = (new Array((cap + (1))));
(G__38581[(0)] = (0));

return G__38581;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__38605 = p;
j__$1 = G__38605;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_38606 = (1);
while(true){
var l_38607 = (j_38606 << (1));
if((l_38607 < s)){
var x_38608 = (heap[j_38606]);
var y_38609 = (heap[l_38607]);
var r_38610 = (l_38607 + (1));
if((r_38610 < s)){
var z_38611 = (heap[r_38610]);
if((y_38609 < z_38611)){
if((z_38611 < x_38608)){
(heap[r_38610] = x_38608);

(heap[j_38606] = z_38611);

var G__38612 = r_38610;
j_38606 = G__38612;
continue;
} else {
}
} else {
if((y_38609 < x_38608)){
(heap[l_38607] = x_38608);

(heap[j_38606] = y_38609);

var G__38619 = l_38607;
j_38606 = G__38619;
continue;
} else {
}
}
} else {
if((y_38609 < x_38608)){
(heap[l_38607] = x_38608);

(heap[j_38606] = y_38609);

var G__38620 = l_38607;
j_38606 = G__38620;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
