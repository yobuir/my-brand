var dropDown= document.getElementById("drop-down");   
let name=document.getElementById('name');
let profile=document.getElementById("profile"); 

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
          // loginScreen.display="none";
     }else{
          // loginScreen.display="block";
          profile.display="none";
          name.innerHTML="Login";
          window.location.replace('../../blog.html');
     }
}
const logout = () => {
     
}
 

