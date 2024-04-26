function updateTime(){

    let today = new Date();
    let currentMonth = today.getMonth();
    console.log(currentMonth);
    let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(months[currentMonth]);
    
    let currentDate= today.getDate();
    console.log(currentDate);
    
    let currentYear= today.getFullYear();
    console.log(currentYear); 
    
    let date = document.getElementById("date");
    date.innerHTML= months[currentMonth] + " " + currentDate + ", " + currentYear;
    
    let currentHour= today.getHours();
    console.log(currentHour); 
    
    let currentMinute= today.getMinutes();
    console.log(currentMinute);
    
    let currentSecond= today.getSeconds();
    console.log(currentSecond);
    
    if(currentSecond < 10) {
        currentSecond = "0" + currentSecond;
      }
    
    if(currentMinute < 10) {
      currentMinute = "0" + currentMinute;
    }
    
    if(currentHour < 10) {
      currentHour = "0" + currentHour;
    }
    
    if(currentHour > 12) {
      currentHour = currentHour - 12;
    }
    
    let clock = document.getElementById("clock");
    clock.innerHTML= currentHour + ": " + currentMinute + ": " + currentSecond;
    
    }
    
    function changeShape() {

        let shapeElem = document.getElementById("movingShape");
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        shapeElem.style.top = Math.random() * (viewportHeight - shapeElem.clientHeight) + "px";
        shapeElem.style.left = Math.random() * (viewportWidth - shapeElem.clientWidth) + "px";
        shapeElem.style.right = Math.random() * 250 + "px";
        shapeElem.style.width = Math.random() * 500 + "px";
        shapeElem.style.height = Math.random() * 1000 + "px";
        shapeElem.style.borderRadius = Math.random() * 500 + "%";
        shapeElem.style.transformOrigin = "left";
        shapeElem.style.transform = "rotate(" + Math.random() * 360 + "deg)";
          
        }


    setInterval(changeShape, 1000);


    
    setInterval(updateTime, 1000);
    
    function map(value, low1, high1, low2, high2){
        return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
      
    }
    
    
