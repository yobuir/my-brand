
    var burger_button= document.getElementById("burger_button"); 
    var navbar= document.getElementById("NavItems_icons"); 
    var close= document.getElementById("close"); 

function showNavabar (){ 
    burger_button.addEventListener("click", function (){
        navbar.style.display="block";  
        // burger_button.style.display="none"
        close.style.display="block";
    });   
}


function closeNavbar (){ 
     close.style.display="none";

     if(close){ 
         close.addEventListener("click", function (){
                navbar.style.display="none"; 
                burger_button.style.display="block"
                  close.style.display="none";
             });
    }

}


function navClick(){
    navbar.style.display="none"; 
    close.style.display="none";
}

showNavabar();
closeNavbar();