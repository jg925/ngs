// function (exports, module, require, __filename, __dirname) {
// exports, module: define the api of the module
// require: require other modules
// __filename: path of file
// __dirname: path to the directory hosting this file.

// let g = 1;

// console.log(arguments);

exports.a = 42; // alias to module.exports
module.exports.b = 37;

// exports = () => {}; //not ok

module.exports = () => {}; //ok

// returns module.exports;
// } (module.exports, )
