var count = 0;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function(){
count++;
display.innerHTML = count;
console.log(count);
}

$(document).ready(function(){

var movieslist = JSON.parse(movies); // convert string into an object
console.log(movieslist);
var evenmovies = [];
var oddmovies = [];
    for (var i = 0, length = movieslist.length; i < length; i++) {
        if (i % 2 === 0) {
            evenmovies.push(movieslist[i]);
        } else {
            oddmovies.push(movieslist[i]);  
        }        
    }

   for (i = 0; i < movieslist.length; i++) {
    document.getElementById("movies-container").innerHTML += ` 
    	<div class="container">
         <div class="row">
            <div class="col-5 alert bg-dark">
                <img src="${evenmovies[i].poster}" class="img-fluid float-left pr-3" width=50% height=auto alt="${evenmovies[i].name}">
    			   <h4>${evenmovies[i].name} </h4>
    	   		    ${evenmovies[i].description}
            </div>
            <div class="col-1">
            </div>
            <div class="col-5 alert bg-dark">
                <img src="${oddmovies[i].poster}" class="img-fluid float-left pr-3" width=50% height=auto alt="${oddmovies[i].name}">
                <h4>${oddmovies[i].name} </h4>
                ${oddmovies[i].description}              
            </div>
        </div>
	   	</div>			
    		`;
    };


})


  // <i class="fa fa-thumbs-up text-success"> Like</i>