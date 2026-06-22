//dates

const now = new Date(); 
console.log(now);
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toLocaleString());
console.log(now.toTimeString());
console.log(typeof now);

let mycreateddate = new Date(2006,0,26);
console.log(mycreateddate);
console.log(mycreateddate.toDateString());

let mycreateddate2 = new Date(2006,0,26,16,55,0);
console.log(mycreateddate2);
console.log(mycreateddate2.toDateString());
console.log(mycreateddate2.toTimeString());
