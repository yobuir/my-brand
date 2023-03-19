let userUpdateForm= document.getElementById('UserUpdateForm');
let UserName=userUpdateForm.name.value;
let UserEmail=userUpdateForm.email.value;
let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);  

let  UserLogged = async() =>{   
    if(loggUser != null) { 
        try {
            let uri='https://mybrandbackend.up.railway.app/api/users/'+loggUser.data._id;
            let res=await fetch(uri,{headers: {
                    Authorization: `Bearer ${loggUser.token}`,
                }});
            let user=await res.json(); 
            user= user.data
            userUpdateForm.name.value=user.name;  
            userUpdateForm.email.value=user.email; 
        
        } catch (error) {  
             Toastify({
                        text:`${error.message}`,
                        duration: 3000,  
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        className:"dangerous", // 
                        onClick: function(){} // Callback after click
                        }).showToast(); 
        }
 
    }
  
       
}

UserLogged();
 
let updateUser = async (e) => {
    e.preventDefault();  
    let user= { 
        "name": userUpdateForm.name.value,
        "email":userUpdateForm.email.value,  
    }
     try { 
        await fetch(`https://mybrandbackend.up.railway.app/api/users/update/${loggUser.data._id}`, {
            method: 'PUT',
            data:user,
            headers: {  Authorization: `Bearer ${loggUser.token}`}
        }); 
        Toastify({
                text:`Changes have been saved`,
                duration: 3000,  
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover 
                onClick: function(){} // Callback after click
                }).showToast(); 
        // window.location.replace("./settings.html");
      } catch (error) { 
         Toastify({
                text:`${error.message}`,
                duration: 3000,  
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                className:"dangerous", // 
                onClick: function(){} // Callback after click
                }).showToast(); 
    }    
}
userUpdateForm.addEventListener('submit', updateUser); 