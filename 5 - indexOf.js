const jobs = ["Frontend", "Backend", "DevOps", "FulStack"];
let indexOf = jobs.indexOf("Frontend");

console.log(indexOf); // output: 0

// indexOf(elementoDePesquisa, pontoinicial)
// ponto inicial, e o indice para iniciar a procura desse elemento dentro do array
const fruits = ["Apple", "Orange", "Banana", "Pear"];
let indexOfSearch = fruits.indexOf("Orange", 3);

console.log(indexOfSearch); /// output: 1