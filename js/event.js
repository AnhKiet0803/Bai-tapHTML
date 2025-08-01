function f1(){
    alert("Function 1 . . .");
}
function f2(){
    alert("Function 2 . . .");
}
function f3(){
    alert("Function 3 . . .");
}
// onclick      : ấn chuột vào mới chạy
// onmouseenter : di chuột vào là chạy
// onmouseleave : di chuyển chuột ra mới chạy 

var ip = document.getElementById("ip");
var ts = document.getElementById("text-search");
var ts2 = document.getElementById("text-search2");
function key1(){
    alert("Function key 1 . . .");
}
function key2(){
    var v = ip.value;
    ts.innerText = v;
}
function key3(){
    alert("Function key 3 . . .");
    var v = ip.value;
    ts2.innerText = v;
}
// onkeyup   :  nhấn phím thả ra 
// onkeydown :  nhấn bất kì phím nào 
// onkeypress:  nhấn 1 phím có chức năng

function key5(){
    alert("key4 . . .");
}
// onchange  :  là 1 sk theo dõi gtri 1 ptu thay đổi