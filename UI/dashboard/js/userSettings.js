let userUpdateForm= document.getElementById('UserUpdateForm');
let UserName=userUpdateForm.name.value;
let UserEmail=userUpdateForm.email.value;
let user =  sessionStorage.getItem("loggedUser");
let loggUser =JSON.parse(user);  

let  UserLogged = async() =>{  
  
    if(loggUser != null) { 
        try {
            let uri='https://my-backend-y2ud.onrender.com/users/'+loggUser[0].id;
            let res=await fetch(uri);
            let user=await res.json();  

            userUpdateForm.name.value=user.name;  
            userUpdateForm.email.value=user.email; 
        
        } catch (error) { 
            console.log(error);
        }
 
    }
  
       
}

UserLogged();
 
let updateUser = async (e) => {
    e.preventDefault();  
    let user= { 
        "name": userUpdateForm.name.value,
        "email":userUpdateForm.email.value,  
        "password": loggUser[0].password,
        "role": loggUser[0].role,
        "date": loggUser[0].date,
        "id": 2
    }
     try {
        await fetch('https://my-backend-y2ud.onrender.com/users/'+loggUser[0].id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'}
        }); 
        window.location.replace("./settings.html");
      } catch (error) { 
        console.log(error);
    }    
}
userUpdateForm.addEventListener('submit', updateUser); 