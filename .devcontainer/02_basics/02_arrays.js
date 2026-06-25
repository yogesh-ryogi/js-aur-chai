const   marvel_heros=["Ironman","CaptainAmerica","Thor"];
const dc_heros=["Superman","Batman","WonderWoman"];
//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][0]);

//const all_heros=marvel_heros.concat(dc_heros);
//console.log(all_heros);

const all_heros=[...marvel_heros,...dc_heros];
console.log(all_heros);

const another_array=[1,2,3,[4,5,6],7,[8,9,[6,5]]];
const realanotherarray=another_array.flat(2);
console.log(realanotherarray)
  

console.log(Array.isArray("yogesh") );
console.log(Array.from("yogesh"))
console.log(Array.from({name:"yogesh"}));//interesting

let score1=100
let score2=200
let score3=300

const scores=[score1,score2,score3];
console.log(scores);

sumarr=Array.of(score1,score2,score3);
console.log(sumarr);
    
