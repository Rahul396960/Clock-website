


      
      // UTC section

      setInterval(() => 
        
      { 

      options={weekday:'long',  year:'numeric', day:'numeric'};
      
      // create Date object for current location
      var d = new Date();
      
      var hr = d.getUTCHours();
      var min = d.getUTCMinutes();
var sec = d.getUTCSeconds();
var t = (hr> 12) ? (' PM') : (' AM');

hr = (hr % 12) || 12;

hr = ("0" + hr).slice(-2);
min = ("0" + min).slice(-2);
sec = ("0" + sec).slice(-2);

  // return time as a string
  utctime=  hr+":"+min+":"+sec+" "+t;
      

  document.getElementById('UTCtime').innerHTML=(utctime);



}, 1000);



var da = new Date();
    
var hr = da.getUTCHours();
var min = da.getUTCMinutes();
var sec = da.getUTCSeconds();

var HOURHANDS = document.querySelector("#hours");
var MINUTEHANDS = document.querySelector("#minutes");

var SECONDHANDS = document.querySelector("#seconds");

var hrPositions = (hr*360/12) + (min*(360/60)/12);
var minPositions = (min*360/60 )+ (sec*(360/60)/60);
var secPositions = sec*360/60;

   setInterval(() => 
      
      { 
    
     hrPositions = hrPositions+(3/360);
         minPositions = minPositions+(6/60);
         secPositions = secPositions+(6);
     
     HOURHANDS.style.transform = "rotate(" + hrPositions + "deg)";
     MINUTEHANDS.style.transform = "rotate(" + minPositions + "deg)";
     SECONDHANDS.style.transform = "rotate(" + secPositions + "deg)";

    
    }, 1000);






    
// digital clock section

function trys()
{
    setInterval(()=>{
   
      function calTime(city,offset)
      {
        
        options={weekday:'long',  year:'numeric', day:'numeric'};
  
          // create Date object for current location
          var e = new Date();
          
          // convert to msec
          // subtract local time zone offset
          // get UTC time in msec
          var utc = e.getTime() + (e.getTimezoneOffset() * 60000);
          
          // create new Date object for different city
          // using supplied offset
          var md = new Date(utc + (3600000*offset));
          
        
          
          
          var hr = md.getHours();
          var min = md.getMinutes();
  var sec = md.getSeconds();
  var tr = (hr> 12) ? (' PM') : (' AM');
  
  
  hr = (hr % 12) || 12;
  
       hr = ("0" + hr).slice(-2);
       min = ("0" + min).slice(-2);
       sec = ("0" + sec).slice(-2)
  
  
  return city+": "+hr+":"+min+":"+sec+" "+tr;
        
  
    }
    take=calTime('China','+8');
    tak=calTime('Japan','+9');
    taker=calTime('Africa','+2');
    takes=calTime('Indonesia','+8');
    takes1=calTime('South Korea','+9');
    takes2=calTime('Philippine ','+8');
    takes3=calTime('Australia','+10.5');
    takes4=calTime('Belgium','+2');
    takes5=calTime('Colombia','-5');
    takes6=calTime('Germany','+1');
    takes7=calTime('Iceland','-1');
    takes8=calTime('Israel','+2');
    takes9=calTime('Italy','+2');
    takes10=calTime('Malaysia','+8');
    takes11=calTime('Pakistan','+5');

  
    document.getElementById('time').innerHTML=(take);
    document.getElementById('timer').innerHTML=(tak);
    document.getElementById('times').innerHTML=(taker);
    document.getElementById('tim').innerHTML=(takes);
    document.getElementById('tim1').innerHTML=(takes1);
    document.getElementById('tim2').innerHTML=(takes2);
    document.getElementById('tim3').innerHTML=(takes3);
    document.getElementById('tim4').innerHTML=(takes4);
    document.getElementById('tim5').innerHTML=(takes5);
    document.getElementById('tim6').innerHTML=(takes6);
    document.getElementById('tim7').innerHTML=(takes7);
    document.getElementById('tim8').innerHTML=(takes8);
    document.getElementById('tim9').innerHTML=(takes9);
    document.getElementById('tim10').innerHTML=(takes10);
    document.getElementById('tim11').innerHTML=(takes11);


  
  } , 1000);
     
} 
trys();
   
  

  // Analog clock section



var ofst1=+8;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst1));



var hourhand = document.querySelector("#hour1");
var minutehand = document.querySelector("#minute1");

var secondhand = document.querySelector("#second1");


var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

console.log(h+":"+m+":"+s);

var hrPosition = (h*360/12) + (m*(360/60)/12);
var minPosition = (m*360/60 )+ (s*(360/60)/60);
var secPosition = s*360/60;



setInterval(()=>
{


hrPosition = hrPosition+(3/360);
      minPosition = minPosition+(6/60);
      secPosition = secPosition+(6);
  
      hourhand.style.transform = "rotate(" + hrPosition + "deg)";
      minutehand.style.transform = "rotate(" + minPosition + "deg)";
  secondhand.style.transform = "rotate(" + secPosition + "deg)";

 
},1000)
  






var ofst2=+9;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst2));



var HRHAND = document.querySelector("#hour2");
var MINHAND = document.querySelector("#minute2");

var SECHAND = document.querySelector("#second2");


var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPos = (h*360/12) + (m*(360/60)/12);
  var minPos = (m*360/60 )+ (s*(360/60)/60);
  var secPos = s*360/60;

  setInterval(()=>

  {

  hrPos = hrPos+(3/360);
        minPos = minPos+(6/60);
        secPos = secPos+(6);
  
    HRHAND.style.transform = "rotate(" + hrPos + "deg)";
    MINHAND.style.transform = "rotate(" + minPos + "deg)";
    SECHAND.style.transform = "rotate(" + secPos + "deg)";

  

},1000)





var ofst3=+2;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst3));


var HHAND = document.querySelector("#hour3");
var MHAND = document.querySelector("#minute3");

var SHAND = document.querySelector("#second3");


var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosi = (h*360/12) + (m*(360/60)/12);
  var minPosi = (m*360/60 )+ (s*(360/60)/60);
  var secPosi = s*360/60;



  setInterval(()=>
  {
  

  hrPosi = hrPosi+(3/360);
        minPosi = minPosi+(6/60);
        secPosi = secPosi+(6);
  
    HHAND.style.transform = "rotate(" + hrPosi + "deg)";
    MHAND.style.transform = "rotate(" + minPosi + "deg)";
    SHAND.style.transform = "rotate(" + secPosi + "deg)";

},1000)





var ofst4=+8;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst4));


var HOURHAND = document.querySelector("#hour4");
var MINUTEHAND = document.querySelector("#minute4");
var SECONDHAND = document.querySelector("#second4");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit = (h*360/12) + (m*(360/60)/12);
  var minPosit = (m*360/60 )+ (s*(360/60)/60);
  var secPosit = s*360/60;

  setInterval(()=>

  {
 
  hrPosit = hrPosit+(3/360);
        minPosit = minPosit+(6/60);
        secPosit = secPosit+(6);
  
    HOURHAND.style.transform = "rotate(" + hrPosit + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosit + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosit + "deg)";

},1000)




var ofst5=+9;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst5));


var HOURHAND5 = document.querySelector("#hour5");
var MINUTEHAND5 = document.querySelector("#minute5");
var SECONDHAND5 = document.querySelector("#second5");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit5 = (h*360/12) + (m*(360/60)/12);
  var minPosit5 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit5 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit5 = hrPosit5+(3/360);
        minPosit5 = minPosit5+(6/60);
        secPosit5 = secPosit5+(6);
  
    HOURHAND5.style.transform = "rotate(" + hrPosit5 + "deg)";
    MINUTEHAND5.style.transform = "rotate(" + minPosit5 + "deg)";
    SECONDHAND5.style.transform = "rotate(" + secPosit5 + "deg)";

},1000)




var ofst6=+8;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst6));


var HOURHAND6 = document.querySelector("#hour6");
var MINUTEHAND6 = document.querySelector("#minute6");
var SECONDHAND6 = document.querySelector("#second6");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit6 = (h*360/12) + (m*(360/60)/12);
  var minPosit6 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit6 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit6 = hrPosit6+(3/360);
        minPosit6 = minPosit6+(6/60);
        secPosit6 = secPosit6+(6);
  
    HOURHAND6.style.transform = "rotate(" + hrPosit6 + "deg)";
    MINUTEHAND6.style.transform = "rotate(" + minPosit6 + "deg)";
    SECONDHAND6.style.transform = "rotate(" + secPosit6 + "deg)";

},1000)




var ofst7=+10.5;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst7));


var HOURHAND7 = document.querySelector("#hour7");
var MINUTEHAND7 = document.querySelector("#minute7");
var SECONDHAND7 = document.querySelector("#second7");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit7 = (h*360/12) + (m*(360/60)/12);
  var minPosit7 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit7 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit7 = hrPosit7+(3/360);
        minPosit7 = minPosit7+(6/60);
        secPosit7 = secPosit7+(6);
  
    HOURHAND7.style.transform = "rotate(" + hrPosit7 + "deg)";
    MINUTEHAND7.style.transform = "rotate(" + minPosit7 + "deg)";
    SECONDHAND7.style.transform = "rotate(" + secPosit7 + "deg)";

},1000)




var ofst8=+2;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst8));


var HOURHAND8= document.querySelector("#hour8");
var MINUTEHAND8 = document.querySelector("#minute8");
var SECONDHAND8 = document.querySelector("#second8");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit8 = (h*360/12) + (m*(360/60)/12);
  var minPosit8 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit8 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit8 = hrPosit8+(3/360);
        minPosit8 = minPosit8+(6/60);
        secPosit8 = secPosit8+(6);
  
    HOURHAND8.style.transform = "rotate(" + hrPosit8 + "deg)";
    MINUTEHAND8.style.transform = "rotate(" + minPosit8 + "deg)";
    SECONDHAND8.style.transform = "rotate(" + secPosit8 + "deg)";

},1000)




var ofst9=-5;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst9));


var HOURHAND9 = document.querySelector("#hour9");
var MINUTEHAND9 = document.querySelector("#minute9");
var SECONDHAND9 = document.querySelector("#second9");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit9 = (h*360/12) + (m*(360/60)/12);
  var minPosit9 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit9 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit9 = hrPosit9+(3/360);
        minPosit9 = minPosit9+(6/60);
        secPosit9 = secPosit9+(6);
  
    HOURHAND9.style.transform = "rotate(" + hrPosit9 + "deg)";
    MINUTEHAND9.style.transform = "rotate(" + minPosit9 + "deg)";
    SECONDHAND9.style.transform = "rotate(" + secPosit9 + "deg)";

},1000)




var ofst10=+1;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst10));


var HOURHAND10 = document.querySelector("#hour10");
var MINUTEHAND10 = document.querySelector("#minute10");
var SECONDHAND10 = document.querySelector("#second10");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit10 = (h*360/12) + (m*(360/60)/12);
  var minPosit10 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit10 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit10 = hrPosit10+(3/360);
        minPosit10 = minPosit10+(6/60);
        secPosit10 = secPosit10+(6);
  
    HOURHAND10.style.transform = "rotate(" + hrPosit10 + "deg)";
    MINUTEHAND10.style.transform = "rotate(" + minPosit10 + "deg)";
    SECONDHAND10.style.transform = "rotate(" + secPosit10 + "deg)";

},1000)




var ofst11=-1;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst11));


var HOURHAND11 = document.querySelector("#hour11");
var MINUTEHAND11 = document.querySelector("#minute11");
var SECONDHAND11 = document.querySelector("#second11");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit11 = (h*360/12) + (m*(360/60)/12);
  var minPosit11 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit11 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit11 = hrPosit11+(3/360);
        minPosit11 = minPosit11+(6/60);
        secPosit11 = secPosit11+(6);
  
    HOURHAND11.style.transform = "rotate(" + hrPosit11 + "deg)";
    MINUTEHAND11.style.transform = "rotate(" + minPosit11 + "deg)";
    SECONDHAND11.style.transform = "rotate(" + secPosit11 + "deg)";

},1000)




var ofst12=+2;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst12));


var HOURHAND12 = document.querySelector("#hour12");
var MINUTEHAND12 = document.querySelector("#minute12");
var SECONDHAND12 = document.querySelector("#second12");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit12 = (h*360/12) + (m*(360/60)/12);
  var minPosit12 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit12 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit12 = hrPosit12+(3/360);
        minPosit12 = minPosit12+(6/60);
        secPosit12 = secPosit12+(6);
  
    HOURHAND12.style.transform = "rotate(" + hrPosit12 + "deg)";
    MINUTEHAND12.style.transform = "rotate(" + minPosit12 + "deg)";
    SECONDHAND12.style.transform = "rotate(" + secPosit12 + "deg)";

},1000)




var ofst13=+2;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst13));


var HOURHAND13 = document.querySelector("#hour13");
var MINUTEHAND13 = document.querySelector("#minute13");
var SECONDHAND13 = document.querySelector("#second13");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit13 = (h*360/12) + (m*(360/60)/12);
  var minPosit13 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit13 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit13 = hrPosit13+(3/360);
        minPosit13 = minPosit13+(6/60);
        secPosit13 = secPosit13+(6);
  
    HOURHAND13.style.transform = "rotate(" + hrPosit13 + "deg)";
    MINUTEHAND13.style.transform = "rotate(" + minPosit13 + "deg)";
    SECONDHAND13.style.transform = "rotate(" + secPosit13 + "deg)";

},1000)




var ofst14=+8;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst14));


var HOURHAND14 = document.querySelector("#hour14");
var MINUTEHAND14 = document.querySelector("#minute14");
var SECONDHAND14 = document.querySelector("#second14");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit14 = (h*360/12) + (m*(360/60)/12);
  var minPosit14 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit14 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit14 = hrPosit14+(3/360);
        minPosit14 = minPosit14+(6/60);
        secPosit14 = secPosit14+(6);
  
    HOURHAND14.style.transform = "rotate(" + hrPosit14 + "deg)";
    MINUTEHAND14.style.transform = "rotate(" + minPosit14 + "deg)";
    SECONDHAND14.style.transform = "rotate(" + secPosit14 + "deg)";

},1000)




var ofst15=+5;

// create Date object for current location
var c = new Date();
        
// convert to msec
// subtract local time zone offset
// get UTC time in msec
var ute = c.getTime() + (c.getTimezoneOffset() * 60000);

// create new Date object for different city
// using supplied offset
var nd = new Date(ute + (3600000*ofst15));


var HOURHAND15 = document.querySelector("#hour15");
var MINUTEHAND15 = document.querySelector("#minute15");
var SECONDHAND15 = document.querySelector("#second15");

var h = nd.getHours();
var m= nd.getMinutes();
var s = nd.getSeconds();

  console.log(h+":"+m+":"+s);

  var hrPosit15 = (h*360/12) + (m*(360/60)/12);
  var minPosit15 = (m*360/60 )+ (s*(360/60)/60);
  var secPosit15 = s*360/60;

  setInterval(()=>

  {
 
  hrPosit15 = hrPosit15+(3/360);
        minPosit15 = minPosit15+(6/60);
        secPosit15 = secPosit15+(6);
  
    HOURHAND15.style.transform = "rotate(" + hrPosit15 + "deg)";
    MINUTEHAND15.style.transform = "rotate(" + minPosit15 + "deg)";
    SECONDHAND15.style.transform = "rotate(" + secPosit15 + "deg)";

},1000)






//       const HOURHAND = document.querySelector("#hour");
//   const MINUTEHAND = document.querySelector("#minute");

//   const SECONDHAND = document.querySelector("#second");

//   var date = new Date();
//   console.log(date);
//   let hr = date.getHours();
//   let min = date.getMinutes();
//   let sec = date.getSeconds();
//   console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

//   let hrPosition = (hr*360/12) + (min*(360/60)/12);
//   let minPosition = (min*360/60 )+ (sec*(360/60)/60);
//   let secPosition = sec*360/60;

//   function runThetime() {
//     hrPosition = hrPosition+(3/360);
//       minPosition = minPosition+(6/60);
//       secPosition = secPosition+(6);

//   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
//   }

//   var interval = setInterval(runThetime, 1000);


