const hero = document.querySelector("[data-hero]");
var quoteProgression = 0;
var jsonData;
var slider;
// Give the parameter a variable name
var dynamicContent = window.location.pathname;

$(document).ready(function () {
  
    //css masking
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);
    
      hero.style.setProperty("--x", `${x}%`); //follows position of
      hero.style.setProperty("--y", `${y}%`);
    });
    console.log(dynamicContent);

//circle
var mouseX = 0, mouseY = 0;
  var xp = 0, yp = 0;
   
  $(document).mousemove(function(e){
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30; 
  });
    
  setInterval(function(){
    xp += ((mouseX - xp)/6);
    yp += ((mouseY - yp)/6);
    $("#circle").css({left: xp +'px', top: yp +'px'});
  }, 20);

$("education").click(function(){
  $("education").css("background-color", "red");
  console.log("hovering")
})
// var ls = "local storage set";
// localStorage.setItem("keyname", ls);
//if(window.location.pathname == '/Users/Proud/AIGA-Census2/quotes.html') {
    console.log('hello world');
  
  

//highlight links when on relevant quote
$('button.next').click(function(){
  if(quoteProgression == jsonData.quotes.length-1){
    quoteProgression = 0;
  }
  else{
    quoteProgression += 1;
  }
  console.log(quoteProgression);
  transformNav(quoteProgression)
  });

  $('button.previous').click(function(){
    if(quoteProgression == 0){
      quoteProgression = jsonData.quotes.length-1;
    }
    else{
      quoteProgression -= 1;
    }
    transformNav(quoteProgression)
 
  
    });


//dragagble divs
$(function() {  
  $( "#draggable1" ).draggable();  
$( "#draggable2" ).draggable();  
$( "#draggable3" ).draggable();  
$( "#draggable4" ).draggable();  
$( "#draggable5" ).draggable();  
$( "#draggable-demographic" ).draggable(); 
$( "#draggable-compensation" ).draggable(); 
$( "#draggable-education" ).draggable(); 
$("draggable").css("background-color", "white");
});  

// $("#compensation").click(openCategory("COMPENSATION"));
// $("#education").click(openCategory"'EDUCATION"));
// $("#demographics").click(openCategory("DEMOGRAPHICS"));


for (var i = 0; i < 5; i++){
  $("div.quote-link").eq(i).click(function(){
      console.log($(this).index()-2);
      
      quoteProgression = $(this).index()-2;
      transformNav(quoteProgression, jsonData)
     slider.goTo(3);
  
  });
  }; 

  $("data-point-wrapper").mouseover(function(){
    console.log("hovered");
  })

$("#loading").hide();

}); //end
   
// $("#about-link").click(function(){
//   openAbout();
// })

//end of onload



function appendData(data) {
console.log('appending data');
var mainContainer = document.getElementsByClassName("my-slider")[0];
var navContainer = document.getElementsByClassName('quote-link');




for (var i = 0; i < jsonData.quotes.length; i++) {
    var slider = document.createElement("div");
    var quotenav = document.createElement("p");
   slider.className = "slider";
    let quote = jsonData.quotes[i].quote;
    let link = jsonData.quotes[i].summary;
    slider.innerHTML = '<div><h4>'+quote,'</h4></div>';
    quotenav.innerHTML = link;
    mainContainer.appendChild(slider);
    navContainer[i].appendChild(quotenav);
    
 
}
//style current displayed
$("div.quote-link").eq(1).css({ "border-radius": "50px", "background-color": "white", "transform": "rotate(-3deg)"});
$("div.quote-link p").eq(1).css("color","#222222");
quoteProgression = 1;
transformNav(quoteProgression, jsonData)

}



for (var i = 0; i < 5; i++){
    $("div.quote-link").eq(i).click(function(){
        console.log($(this).index()-2);
        
        quoteProgression = $(this).index()-2;
        transformNav(quoteProgression, jsonData)
       
    
    });
    }; 

function transformNav(i){
  $("div.quote-link").css({"background-color": "#191919","transform": "rotate(0deg)"});
  $("div.quote-link p").css("color","#555555");
  //transform
  $("div.quote-link").eq(i).css({ "border-radius": "50px", "background-color": "white", "transform": "rotate(-3deg)"});
  $("div.quote-link p").eq(i).css("color","#222222");
  console.log(jsonData)
  $("#draggable1").eq(0).html("<p>"+jsonData.quotes[i].age+ "</p>");
$("#draggable2").eq(0).html("<p>"+jsonData.quotes[i].gender+ "</p>");
$("#draggable3").eq(0).html("<p>"+jsonData.quotes[i].race+ "</p>");
$("#draggable4").eq(0).html("<p>"+jsonData.quotes[i].role+ "</p>");

}



function openAbout() {
  
  var aboutPage = "<div class='about-page'><div class='col-3'><h1>ABOUT</h1></div><div class='col-5'><h5><span class='yellow'>UNCOVER AIGA</span> is an interactive data exploration of the AIGA Design Census, a yearly survey of professionals working in the design industry. After analyzing over 9000 responses that looked at a range of factors, from a designer’s salary, educational background to their side-hustles, we found what we believe to be the true value of the census: The long-form responses, which allowed designers to comment on what they felt were the critical issues facing design.<br> </h5><h5>It immediately became clear to us that It wasn’t enough for users to know that only 25% of design leadership consists of people of color. What do these designers have to say about the state of the design industry? What are the stories they have to tell? <br></h5> <h5> Our project facilitates a data exploration in which the user filters between categories, gains insight through ‘surface’ data points, and uncover its deeper meaning by reading quotes of the designers that the data points truly speak to. Only when we dig beneath the surface of the numbers can we understand the depth and value of the Census.<br> </h5></div><div id='draggable1' class='draggable' style='top: 70vh; left:10vw;'><p>Proud Taranat</p></div><div id='draggable2' class='draggable' style='top: 55vh; left:30vw;'><p>Francis Park</p></div><div id='draggable3' class='draggable' style='top: 60vh; left:80vw;'><p>Hayoon Choi</p></div><div id='draggable4' class='draggable' style='top: 70vh; left:60vw;'><p>Sarah Xi</p></div></div>";
  $("body").append(aboutPage);
  $("aboutPage").css("left","5vw");
}


