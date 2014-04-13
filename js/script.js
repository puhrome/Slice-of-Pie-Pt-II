/**
 * Slice of Pie Pt II Created by Phirom Yim on 4/11/14.
 */
var slices;//declare slices
slices = 9;//define number of slices
var people;//declare people
people = 11;//define number of people at the party
var pies;//declare pies
pies = 7;//define number of pies
//number of pies times number of slices divided by person
var party; //declare party
party = pies * slices;
//define party is equal to number of pies divided times number of slices
var goers; //declare goers
goers = party/people; //define goers is equal to party divided people
console.log(goers);
var remainders = party % people; //finding the modulo (remainder) for what the dog gets to eat
console.log(remainders);
