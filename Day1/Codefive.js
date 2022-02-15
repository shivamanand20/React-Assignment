var a = 10;

setTimeout(function one() {
    console.log("hello World 1...")
}, 5000);

setTimeout(function two() {
    console.log("hello World 2...");
    for(var j = 0; j< 5; j++) {
        console.log(j)
    }
}, 2000);

setTimeout(function three() {
    console.log("hello World 3...")
}, 4000);

setTimeout(function four() {
    console.log("hello World 4...")
}, 6000);

for(var i = 0; i< 5; i++) {
    console.log(i)
}