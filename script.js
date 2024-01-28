//print all 250 countries capital and area
//In here why we are using if else statement
//in the rescountries API there is now catital for some countries
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        if(res[i].capital){
    console.log(res[i].capital[0],res[i].area);
}
else{
    console.log("Invalid capital",res[i].area);
}
}
}
//print all 250 common name
/*var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        console.log(res[i].name.common);
    }
}*/