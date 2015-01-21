const fs = require('fs');
filename = process.argv[2];

if(! filename) {
    throw Error("no file named");
}

fs.watch(filename, function () {
    console.log('file '+ filename +' changed');
});
console.log(process.argv);
console.log('now watching '+ filename +' for changes');