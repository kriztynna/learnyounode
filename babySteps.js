function argsToNums(args) {
    var nums = [];
    for (var i=0;i<args.length;i++){
        if ( !isNaN(+args[i]) ) {
            nums.push(+args[i]);
        }
    }
    return nums;
}

var nums = argsToNums(process.argv);

var sum = nums.reduce(function(a, b) { return a + b; }, 0);

console.log(sum);
