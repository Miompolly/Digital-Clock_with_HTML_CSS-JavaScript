function  updateClock(){
  let now=new Date();
  let dname=now.getDay();
  let mo=now.getMonth();
  let daynum=now.getDate();
  let yr=now.getFullYear();
  let hou=now.getHours();
  let min=now.getMinutes();
 let  sec=now.getSeconds();
 let  per=document.getElementById("per");

 if(hou>12){
  per.innerHTML="PM";
 }else{
  per.innerHTML="AM";
 }

 if(hou>12){
  hou=hou-12;
 }

let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let ids=["dayname","month","daynum","year","hour","minutes","seconds","periods"];
let values=[week[dname],months[mo],daynum,yr,hou,min,sec,per];



for(let i=0;i<=ids.length;i++){
   document.getElementById(ids[i]).innerHTML=values[i];
}



}

setInterval(updateClock,10);






// const d = new Date();

// let year = d.getFullYear();
// let day=d.getDay();
// let mo=d.getMonth();
// document.getElementById("year").innerHTML = year;
// document.getElementById("daynum").innerHTML = day;
// document.getElementById("month").innerHTML = mo;