
const currentdate = document.getElementById("date");
const currenttime = document.getElementById("time");
let card = document.getElementById("card");
let status = document.getElementById("status");
let weather = "{%weather%}";

if(weather == "Snow") {
card.style.backgroundImage="url(https://cdn.wallpapersafari.com/69/91/uSHqE1.jpg)";
status.innerHTML="snow";
}
if(weather == "Clouds") {
card.style.backgroundImage="url(https://cdn.wallpapersafari.com/44/35/dp7qwx.jpg)"; 
status.innerHTML="cloud";    
}
 else if(weather == "Rain") {
    card.style.backgroundImage="url(https://cdn.wallpapersafari.com/29/91/MdLK7u.jpg)";
    status.innerHTML="rain";
}
else{
    card.style.backgroundImage="url(https://cdn.suwalls.com/wallpapers/nature/bright-sun-in-the-clear-sky-above-the-mountain-lake-53554-1920x1200.jpg)";     
    status.innerHTML="clear sky";
}
const getcurrentdate = () =>{
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var currentdate = new Date();
    var month = months[currentdate.getMonth()];
    var weekdays = weekday[currentdate.getDay()];
    var day = currentdate.getDate();

  return `${weekdays}, ${day} ${month}`;
};

const getcurrenttime = ()=>{
    var currenttime= new Date();
    var hours = currenttime.getHours();
    var minuts = currenttime.getMinutes();
    var period = "AM";
    if(hours > 11){
        period = "PM";
        if(hours > 12){
            hours -= 12;
        }
    } 
    if (minuts < 10) {
        minuts = "0" + minuts;
    }
    return `${hours}:${minuts} ${period}`;
};

currenttime.innerHTML=getcurrenttime();
currentdate.innerHTML=getcurrentdate();
