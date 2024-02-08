//print all 250 countries capital and area
//In here why we are using if else statement
//in the rescountries API there is now catital for some countries
/*var request = new XMLHttpRequest();
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
}*/
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


var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);

    // 1.print only those countris which is belong to asia region

    var result_asia = res.filter((ele)=> ele.region ==="Asia");
    console.log(result_asia);
    var country_name = result_asia.map((ele)=> ele.name);
    console.log(country_name);

    // 2.Print capitals of those counries whose population is less than 2lakhs

   var popul = res.filter((ele)=> ele.population <= 200000);
    console.log(popul);
   var cap = popul.map((ele)=> ele.capital);
     console.log(cap);

     // 3.print the sum of total population of all countries in console
     var total_popul = res.reduce((acc,cv)=>acc+cv.population,0);
     console.log(total_popul);
}