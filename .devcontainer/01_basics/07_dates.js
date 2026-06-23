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

let mytimestamp= Date.now();
console.log(mytimestamp);
console.log(mycreateddate.getTime());

//in seconds
console.log(Math.floor(mytimestamp/1000));
console.log(Math.floor(mycreateddate.getTime()/1000));    


let newdate=new Date();
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getDate());
console.log(newdate.getDay());
