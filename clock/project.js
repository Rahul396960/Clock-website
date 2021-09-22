
      
      //home section 

        setInterval(() => 
        
        { 

        options={weekday:'long',  year:'numeric', day:'numeric'};
        
        // create Date object for current location
        var d = new Date();
        
        
        
        var hr = d.getHours();
        var min = d.getMinutes();
  var sec = d.getSeconds();
  var t = (hr> 12) ? (' PM') : (' AM');

  hr = (hr % 12) || 12;
  
  hr = ("0" + hr).slice(-2);
  min = ("0" + min).slice(-2);
  sec = ("0" + sec).slice(-2);

    // return time as a string
    time=  hr+":"+min+":"+sec+" "+t+"</br>"+d.toLocaleDateString(undefined,options);
        

    document.getElementById('time1').innerHTML=(time);



  }, 1000);
  


  var da = new Date();
      
  var hr = da.getHours();
  var min = da.getMinutes();
var sec = da.getSeconds();

  var HOURHAND = document.querySelector("#hour");
  var MINUTEHAND = document.querySelector("#minute");
  
  var SECONDHAND = document.querySelector("#second");
  
  var hrPosition = (hr*360/12) + (min*(360/60)/12);
  var minPosition = (min*360/60 )+ (sec*(360/60)/60);
  var secPosition = sec*360/60;
  
     setInterval(() => 
        
        { 
      
       hrPosition = hrPosition+(3/360);
           minPosition = minPosition+(6/60);
           secPosition = secPosition+(6);
       
       HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
       MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
       SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

      
      }, 1000);














