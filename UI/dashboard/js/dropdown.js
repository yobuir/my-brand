var dropDown= document.getElementById("drop-down");   
let name=document.getElementById('name');
let profile=document.getElementById("profile"); 
let Wmessage=document.getElementById("Wmessage");
function ShowDropDown (){  
    if ( dropDown.style.display == 'block'){
         dropDown.style.display="none";
    }else{
         dropDown.style.display="block";
    }
    
}

function userAuth( ) { 
     let user =  sessionStorage.getItem("loggedUser");
     let loggUser =JSON.parse(user);
     
     if (loggUser != null) {
       name.innerHTML=loggUser[0].name;  
         console.log(loggUser);
         Wmessage.innerHTML=`<h3>Hi! ${loggUser[0].name} welcome back !</h3>`
     }else{
          // loginScreen.display="block";
          profile.display="none";
          name.innerHTML="Login";
          window.location.replace('../../blog.html');
     }
}


const logout = () => {
   sessionStorage.removeItem("loggedUser");  
   window.location.replace('blog.html');
}
 

