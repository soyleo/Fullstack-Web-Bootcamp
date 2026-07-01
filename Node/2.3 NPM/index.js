import generateName from "sillyname";
var sillyName = generateName();


import superheroes, { randomSuperhero } from 'superheroes';

var superName = randomSuperhero();

console.log(`Hi! I'm ${sillyName}, but secretly I really am ${superName}!`);