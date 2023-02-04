
    var burger_button= document.getElementById("burger_button"); 
    var navbar= document.getElementById("Dashboard");  

function showNavabar (){ 
    // burger_button.addEventListener("click", function (){
    if ( navbar.style.display == 'block'){
         navbar.style.display="none";
    }else{
         navbar.style.display="block";
    }
          
    // });   
}

// showNavabar();
console.log("Navbar")
