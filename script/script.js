const hero = document.querySelector("[data-hero]");
var quoteProgression = 0;
var jsonData;

$(document).ready(function () {
    
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
    
      hero.style.setProperty("--x", `${x}%`); //follows position of
      hero.style.setProperty("--y", `${y}%`);
    });
    
// var ls = "local storage set";
// localStorage.setItem("keyname", ls);
//if(window.location.pathname == '/Users/Proud/AIGA-Census2/quotes.html') {
    console.log('hello world');
  
  //fetch json data 
  fetch('json/quotes.json')
  .then(function (response) {

      return response.json();
  })
  .then(function (data) {
      jsonData = data;
    appendData(data);
// tiny slider 
    let slider = tns({
    container: ".my-slider",
    items: 1,
    axis: "vertical",
    autoplay: false,
    autoplayButton: ".auto",
    autoplayText: ["Start", "Stop"],
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
      640: {
      
              items: 2
          },
          700: {
              items: 3
          }
      }
  });
  })
  .catch(function (err) {
      console.log('error: ' + err);
  });

//highlight links when on relevant quote
$('button.next').click(function(){
  if(quoteProgression == jsonData.length-1){
    quoteProgression = 0;
  }
  else{
    quoteProgression += 1;
  }
  console.log(quoteProgression);
  transformNav(quoteProgression)
  });

  $('button.previous').click(function(){
    console.log("clicked")
    if(quoteProgression == 0){
      quoteProgression = jsonData.length-1;
    }
    else{
      quoteProgression -= 1;
    }
    transformNav(quoteProgression)
  
    });



  $(".quotes-navigation").on("click", 'div.quote-link', function() {
    console.log("clicked");
    //navigate to quote when linked is clicked
});    

//dragagble divs
$(function() {  
  $( "#draggable1" ).draggable();  
$( "#draggable2" ).draggable();  
$( "#draggable3" ).draggable();  
$( "#draggable4" ).draggable();  
$("draggable").css("background-color", "white");
});  

});
//end of onload

 

function appendData(data) {
console.log('appending data');
jsonData = data;

var mainContainer = document.getElementsByClassName("my-slider")[0];
var navContainer = document.getElementsByClassName('quote-link');

for (var i = 0; i < data[0].quotes.length; i++) {
    var slider = document.createElement("div");
    var quotenav = document.createElement("p");
   slider.className = "slider";
    let quote = data[0].quotes[i].quote;
    let link = data[0].quotes[i].summary;
    slider.innerHTML = '<div><h4>'+quote,'</h4></div>';
    quotenav.innerHTML = link;
    mainContainer.appendChild(slider);
    navContainer[i].appendChild(quotenav);
 
}
//style current displayed
$("div.quote-link").eq(1).css({ "border-radius": "50px", "background-color": "white", "transform": "rotate(-3deg)"});
$("div.quote-link p").eq(1).css("color","black");
quoteProgression = 1;
transformNav(quoteProgression, data)

}

function transformNav(i){
  $("div.quote-link").css({"background-color": "#191919","transform": "rotate(0deg)"});
  $("div.quote-link p").css("color","#555555");
  //transform
  $("div.quote-link").eq(i).css({ "border-radius": "50px", "background-color": "white", "transform": "rotate(-3deg)"});
  $("div.quote-link p").eq(i).css("color","black");
  console.log(jsonData)
  $("#draggable1").eq(0).html("<p>"+jsonData[0].quotes[i].age+ "</p>");
$("#draggable2").eq(0).html("<p>"+jsonData[0].quotes[i].gender+ "</p>");
$("#draggable3").eq(0).html("<p>"+jsonData[0].quotes[i].race+ "</p>");
$("#draggable4").eq(0).html("<p>"+jsonData[0].quotes[i].role+ "</p>");
  
}

function nextClicked(i){
  if(i == 4){
    i = 0;
  }
  else{
    i += 1;
  }
  console.log(i);
  transformNav(i)
}