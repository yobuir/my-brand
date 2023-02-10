
    var burger_button= document.getElementById("burger_button"); 
    var navbar= document.getElementById("Dashboard");  
    var closeButton=document.getElementById("closeButton");

function showNavabar (){ 
    // burger_button.addEventListener("click", function (){
    if ( navbar.style.display == 'block'){
         navbar.style.display="none";
    }else{
         navbar.style.display="block";
         burger_button.style.display="none";
    }
          
    // });   
}


function closeNavbar (){ 
    // burger_button.addEventListener("click", function (){
    if ( navbar.style.display == 'block'){
         navbar.style.display="none";
          burger_button.style.display="block";
    }       
}
 