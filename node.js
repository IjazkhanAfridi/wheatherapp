const http = require("http");
const fs = require("fs");
var requests = require("requests");
const mainpage = fs.readFileSync("index.html" , "utf-8");
const stylepage = fs.readFileSync("style.css" , "utf-8");
const scriptpage = fs.readFileSync("script.js" , "utf-8");

const replacedata = (tempdata , orgdata) => {
    let weather = tempdata.replace("{%name%}" , orgdata.name).replace("{%country%}" , orgdata.sys.country).replace("{%temp%}" , orgdata.main.temp).replace("{%weather%}" , orgdata.weather[0].main);;
    return weather;
};
const server = http.createServer((req , res) => { 
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=kohat,%20PK&appid=ef40ae70a63528d8500f22cbf530f719&units=metric")
        .on("data", (chunk) => {
            const dataobj = JSON.parse(chunk);
            const dataobjarr=[dataobj];
            const mydata = dataobjarr.map((val) => replacedata(mainpage, val)).join("");
            res.write(mydata);
        })
        .on("end", (err) => {
            if(err) return console.log("error found " , err);               
            res.end();
        });
    
    }
    else if (req.url=="/style.css") {
        res.write(stylepage);
        res.end();
    }
    else if (req.url=="/script.js") {
        res.write(scriptpage);
        res.end();
    };
});
server.listen(8080 , "127.0.0.1");