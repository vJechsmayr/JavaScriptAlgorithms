const destructure = function(obj = {}){
	return this.map((value, key) => obj[key] = value) && obj;	
};

Array.prototype.destructure = destructure;

// example
// var arr = ["Paulo", "Sergio", "Junior"];
// const { 0: nome, 1: meio, 2: final, inject } = arr.destructure({ inject: "injetado" });
// console.log({ nome, meio, final, inject })

// example ( module.exports )
// var arr = ["Paulo", "Sergio", "Junior"];
// const { 0: nome } = prototip(arr)();
// console.log({ nome });

module.exports = arr => destructure.bind(arr);
