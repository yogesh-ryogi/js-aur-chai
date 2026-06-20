const name="gowda"
const repoCount=50

console.log(name + repoCount+"value"); // not to use it as it is outdated and not readable

//better to use template literals

console.log('hello my name is ${name} and my repo count is ${repocount}');

//another method of declaring the string 

const gameName=new String("gowdaraju");
console.log(gameName);
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes("raju"));
console.log(gameName.startsWith("gowda"));
console.log(gameName.endsWith("raju"));
console.log(gameName.split("a"));
console.log(gameName.charAt(0));
console.log(gameName.indexOf("r"));

const str= gameName.substring(0,5);
console.log(str);


//we can use negative values using slice method it gives the output from the end of the string
const str1=gameName.slice(0,-1);
console.log(str1);  

const samplestr="    raju   ";
console.log(samplestr);
console.log(samplestr.trim()); // it removes the extra spaces from the string
const url="https://www.gowdaraju.com";
console.log(url.replace("gowdaraju","gowda")); // it replaces the string with the new string    
console.log(url.includes("gowdaraju")); // it checks whether the string is present or not and returns true or false